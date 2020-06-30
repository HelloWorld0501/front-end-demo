export default {
    state: {
        navTree: [], //导航树
        dynamicRouters: []
    },
    getters: {},
    mutations: {
        setNavTree(state, navTree) {
            state.navTree = navTree
        },
        setDynamicRouters(state, dynamicRouters) {
            state.dynamicRouters = dynamicRouters
        }
    }
}
