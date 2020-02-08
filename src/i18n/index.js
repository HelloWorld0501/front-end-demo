import Vue from 'vue'
import Vuei18n from 'vue-i18n'

Vue.use(Vuei18n)
const i18n = new Vuei18n({
    locale: 'zh_cn',
    messages: {
        'zh_cn': require('@/assets/language/zh_cn.json'),
        'en_us': require('@/assets/language/en_us.json')
    }
})
export default i18n
