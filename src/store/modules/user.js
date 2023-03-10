import {login} from '@/http/modules/login'
import Cookies from "js-cookie";
import {Notice} from "view-design";
import {addDynamicMenuAndRoutes} from "@/utils/login";

export default {
    namespaced: true,
    state: {
        perms: [], //用户权限集合
    },
    getters: {},
    mutations: {
        setPerms(state, perms) {
            state.perms = perms
        }
    },
    actions: {
        userLogin({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(res => {
                    if (res.msg != null) {
                        Notice.error({title: '登录失败', desc: res.msg})
                    } else {
                        Cookies.set('token', res.data.token)
                        localStorage.setItem('userName', userInfo.account)
                        addDynamicMenuAndRoutes()
                    }
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
    }
}
