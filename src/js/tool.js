import store from '@/store'

export default {
    getStoreValue(value) {
        return typeof store.state.app[value] === 'undefined' ? null : store.state.app[value]
    }
}