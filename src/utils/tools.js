import Cookies from 'js-cookie'
import store from '@/store'
import router from '@/router'

/**
 * 退出后清除本地存储
 */
export const logout = () => {
    Cookies.remove('token')
    localStorage.clear()
}

/**
 * 检测路由的url是否是网址
 */
export const checkUrlIsWebSite = (value) => {
    return /^http.*/i.test(value) || /^https.*/i.test(value) ? true : false
}


export const formatRoute = (menuList) => {
    let temp = []
    for (let menu of menuList) {
        if (menu.children && menu.children.length >= 1) {
            //有子菜单
            for (let submenu of menu.children) {
                let item = {
                    path: submenu.url,
                    //后期动态路由时.引入实际组件
                    component: checkUrlIsWebSite(submenu.url) ? 'null' : ' () => import(' + firstUpper(submenu.url) + ')',
                    name: submenu.name,
                    meta: {
                        icon: submenu.icon,
                        index: submenu.id
                    }
                }
                temp.push(item)
            }
        } else {
            // 无子菜单
            let item = {
                path: menu.url,
                component: checkUrlIsWebSite(menu.url) ? 'null' : ' () => import(' + firstUpper(menu.url) + ')',
                name: menu.name,
                meta: {
                    icon: menu.icon,
                    index: menu.id
                }
            }
            temp.push(item)
        }
    }
    console.log(JSON.stringify(temp))
    // return temp
}

/**
 * 路由url以 / 分段,每段首字母大写
 * @param value
 */
export const firstUpper = (value) => {
    let route = ''
    let array = value.replace(new RegExp('^\\' + '/' + '+|\\' + '/' + '+$', 'g'), '').replace(/^\//, '').split('/')
    array.forEach((item, index) => {
        route += item.substring(0, 1).toUpperCase() + item.substring(1) + '/'
    })
    return '/' + route.substring(0, route.length - 1) + '.vue'
}

/**
 * 检查用户是否具有操作权限
 * @param perms
 * @returns {boolean}
 */
export const hasPermission = (perms) => {
    let permissions = store.state.user.perms
    return permissions.findIndex((value) => value === perms) == -1 ? false : true
}



