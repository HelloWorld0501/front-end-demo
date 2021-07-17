import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import store from "@/store";
import {routeIsExist} from '@/utils/tools'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('@/views/Home.vue'),
        children: [
            {
                path: '/sys/user',
                component: () => import('@/views/Sys/User.vue'),
                name: '用户管理',
                meta: {
                    icon: 'fa fa-user-circle',
                    index: 2
                }
            },
            // {
            //     path: '/sys/dept',
            //     component: () => import('@/Sys/Dept.vue'),
            //     name: '机构管理',
            //     meta: {
            //         icon: 'fa fa-university',
            //         index: 7
            //     }
            // },
            // {
            //     path: '/sys/role',
            //     component: () => import('@/Sys/Role.vue'),
            //     name: '角色管理',
            //     meta: {
            //         icon: 'fa fa-address-card',
            //         index: 12
            //     }
            // },
            // {
            //     path: '/sys/menu',
            //     component: () => import('@/Sys/Menu.vue'),
            //     name: '菜单管理',
            //     meta: {
            //         icon: 'fa fa-bars',
            //         index: 17
            //     }
            // },
            // {
            //     path: '/sys/dict',
            //     component: () => import('@/Sys/Dict.vue'),
            //     name: '字典管理',
            //     meta: {
            //         icon: 'fa fa-list-ol',
            //         index: 22
            //     }
            // },
            // {
            //     path: '/sys/config',
            //     component: () => import('@/Sys/Config.vue'),
            //     name: '系统配置',
            //     meta: {
            //         icon: 'fa fa-pencil-square-o',
            //         index: 27
            //     }
            // },
            // {
            //     path: '/sys/loginlog',
            //     component: () => import('@/Sys/Loginlog.vue'),
            //     name: '登录日志',
            //     meta: {
            //         icon: 'fa fa-at',
            //         index: 32
            //     }
            // },
            // {
            //     path: '/sys/log',
            //     component: () => import('@/Sys/Log.vue'),
            //     name: '操作日志',
            //     meta: {
            //         icon: 'fa fa-file-text-o',
            //         index: 35
            //     }
            // },
            // {
            //     path: 'http://127.0.0.1:8500',
            //     component: 'null',
            //     name: '注册中心',
            //     meta: {
            //         icon: 'fa fa-registered',
            //         index: 44
            //     }
            // },
            // {
            //     path: 'http://127.0.0.1:8001/swagger-ui.html',
            //     component: 'null',
            //     name: '接口文档',
            //     meta: {
            //         icon: 'fa fa-file-word-o',
            //         index: 46
            //     }
            // },
            // {
            //     path: 'http://127.0.0.1:8001/druid/login.html',
            //     component: 'null',
            //     name: '数据监控',
            //     meta: {
            //         icon: 'fa fa-database',
            //         index: 39
            //     }
            // },
            // {
            //     path: 'http://127.0.0.1:8000/',
            //     component: 'null',
            //     name: '服务监控',
            //     meta: {
            //         icon: 'fa fa-tasks',
            //         index: 41
            //     }
            // },
            // {
            //     path: '/generator/generator',
            //     component: () => import('@/Generator/Generator.vue'),
            //     name: '代码生成',
            //     meta: {
            //         icon: 'fa fa-star',
            //         index: 48
            //     }
            // },
            // {
            //     path: '/sys/online',
            //     component: () => import('@/Sys/Online.vue'),
            //     name: '在线用户',
            //     meta: {
            //         icon: 'fa fa-users',
            //         index: 50
            //     }
            // },
            // {
            //     path: '/demo/i18n',
            //     component: () => import('@/Demo/I18n.vue'),
            //     name: '国际化',
            //     meta: {
            //         icon: 'fa fa-language',
            //         index: 53
            //     }
            // },
            // {
            //     path: '/demo/theme',
            //     component: () => import('@/Demo/Theme.vue'),
            //     name: '换皮肤',
            //     meta: {
            //         icon: 'fa fa-picture-o',
            //         index: 55
            //     }
            // }
        ]

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

const createRouter = () => new Router({
    baseURI: process.env.BASE_URL,
    routes
})
const router = createRouter()

/**
 *  解决url刷新后路由被重置
 * @param params
 */
    // router.$addRoutes = (params) => {
    //     router.matcher = new Router({ // 重置路由规则
    //         routes
    //     }).matcher
    //     router.addRoutes(params) // 添加路由
    // }
    // router.onReady(() => {
    //     if (store.state.app.menuRouteLoad)
    //         addDynamicRoutes(store.state.menu.navTree)
    // })

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {
    let token = Cookies.get('token')
    if (to.path === '/login') {
        //已经登录的情况下想去登录页
        if (token) {
            next({path: '/'})
        } else {
            next()
        }
    } else {
        if (token) {
            if (!(routeIsExist(to.path)) && (to.path != 'login')){
                let currentTags = store.getters.tagNavList
                currentTags.push({name:to.name,path:to.path})
                store.commit('setTagNavList',currentTags)
            }
            next()
        } else {
            next({path: '/login'})
        }
    }
})
// router.afterEach(function(p1,p2){
//     console.log(p1,p2)
// })
// function addTags(to){
//     console.log(to.path)
//     if (!(routeIsExist(to.path)) && (to.path != 'login')){
//         let currentTags = store.getters.tagNavList
//         currentTags.push({name:to.name,path:to.path})
//         store.commit('setTagNavList',currentTags)
//     }
// }
export default router
