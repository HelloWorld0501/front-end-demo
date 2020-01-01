import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import global from '@/utils/global'
import api from '@/http'
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.prototype.global = global
Vue.prototype.$api = api
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
