import store from '@/store'

export default {
    getStoreValue(stateArea, value) {
        return typeof store.state.app[stateArea][value] === 'undefined' ? null : store.state.app[stateArea][value]
    }
}