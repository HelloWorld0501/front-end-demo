import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(vuex);

// 引入子模块
import app from './modules/app'
import user from './modules/user'
import menu from './modules/menu'

const store = new vuex.Store({
    modules: {
        app: app,
        user: user,
        menu: menu
    },
    plugins:[createPersistedState()]
})

export default store
