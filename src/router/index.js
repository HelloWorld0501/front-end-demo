import Vue from 'vue'
import Router from 'vue-router'
import api from '@/http/api'
import store from '@/store'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        children: []
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue')
    }
]
const router = new Router({
    mode: 'history',
    baseURI: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    // if (to.path === from.path) {
    //     return
    // }
    let userName = sessionStorage.getItem('userName')
    if (to.path === '/login') {
        //已经登录的情况下想去登录页
        if (userName) {
            next({path: '/'})
        } else {
            next()
        }
    } else {
        if (userName) {
            addDynamicMenuAndRoutes(userName, to, from)
            next()
        } else {
            next({path: '/login'})
        }
    }
})

/**
 * 动态加载路由和菜单以及权限
 * @param userName
 * @param to
 * @param from
 */
function addDynamicMenuAndRoutes(userName, to, from) {
    console.log(store.state.app.menuRouteLoad)
    if (store.state.app.menuRouteLoad) {
        console.log('动态路由表已经是true')
        return
    }
    api.menu.findNavTree({'userName': userName}).then(res => {
        //递归加载
        let dynamicRoutes = addDynamicRoutes(res.data)
        router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
        router.addRoutes(router.options.routes)
        //改变加载状态
        store.commit('menuRouteLoaded', true)
        //存储菜单树
        store.commit('setNavTree', res.data)
    })
    api.user.findPermissions({'name': userName}).then(res => {
        //存储用户权限
        store.commit('setPerms', res.data)
    })
}

/**
 * 加载动态菜单路由
 * @param menuList
 * @param routes
 */
function addDynamicRoutes(menuList = [], routes = []) {
    let temp = []
    for (let menu of menuList) {
        if (menu.children && menu.children.length >= 1) {
            temp = temp.concat(menu.children)
        } else if (menu.url && /\S/.test(menu)) {
            menu.url = menu.url.replace(/^\//, '')
            // 建立路由配置
            let route = {
                path: menu.url,
                component: null,
                name: menu.name,
                meta: {
                    icon: menu.icon,
                    index: menu.id
                }
            }
            try {
                //    根据菜单URL动态加载VUE组件,组件根路径为'@'(src)
                let array = menu.url.split('/')
                let url = ''
                for (let urlItem of array) {
                    url += urlItem.substring(0, 1).toUpperCase() + urlItem.substring(1) + '/'
                }
                url = url.substring(0, url.length - 1)
                route['component'] = resolve => require([`@/views/${url}`], resolve)
            } catch (e) {

            }
            routes.push(route)
        }
    }
    if (temp.length >= 1) {
        addDynamicRoutes(temp, routes)
    } else {
        console.log('动态路由加载...')
        console.log('动态路由加载完成.')
    }
    return routes
}

export default router
