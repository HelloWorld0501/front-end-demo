import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import global from '@/utils/global'
import api from './http'
import 'font-awesome/css/font-awesome.min.css'
import i18n from './i18n'
import store from './store'
// require('@/mock')

Vue.use(api)
Vue.use(ViewUI)
Vue.config.productionTip = false
Vue.prototype.global = global
new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')
