import store from "@/store";
import api from "@/http/api";

/**
 * 动态加载路由和菜单以及权限
 * @param userName
 * @param to
 * @param from
 */
export function addDynamicMenuAndRoutes() {
    if (store.state.app.menuRouteLoad) {
        console.log('stop')
        return
    }
    let userName = localStorage.getItem('userName')
    api.menu.findNavTree({'userName': userName}).then(res => {
        store.commit('setNavTree', res.data)
    })
    api.user.findPermissions({'name': userName}).then(res => {
        //存储用户权限
        store.commit('user/setPerms', res.data)
    })
}

/**
 * 加载动态菜单路由,暂时不用
 * @param menuList
 * @param routes
 */
export function addDynamicRoutes(menuList = [], routes = []) {
    let temp = []
    for (let menu of menuList) {
        if (menu.children && menu.children.length >= 1) {
            temp = temp.concat(menu.children)
        } else if (menu.url && /\S/.test(menu.url)) {
            menu.url = menu.url.replace(/^\//, '')
            // 建立路由配置
            let route = {
                //解决刷新问题了
                path: '/' + menu.url.replace(/^\//, ''),
                component: null,
                name: menu.name,
                meta: {
                    icon: menu.icon,
                    index: menu.id
                }
            }
            try {
                let array = menu.url.split('/')
                let url = ''
                for (let a of array) {
                    url += a.substring(0, 1).toUpperCase() + a.substring(1) + '/'
                }
                url = '/' + url.substring(0, url.length - 1)
                route['component'] = resolve => require([`@/views${url}`], resolve)
            } catch (e) {
                console.log('引入组件失败', e)
            }
            routes.push(route)
        }
    }
    if (temp.length >= 1) {
        addDynamicRoutes(temp, routes)
    } else {
        console.log('动态路由加载完成.')
    }
    return routes
}
