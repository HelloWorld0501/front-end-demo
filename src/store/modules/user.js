export default {
    state: {
        perms: [], //用户权限集合
    },
    getters: {},
    mutations: {
        setPerms(state, perms) {
            state.perms = perms
        }
    }
}