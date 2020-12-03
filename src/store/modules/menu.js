export default {
    state: {
        navTree: [], //导航树
        dynamicRouters: [],
        tagNavList:[]
    },
    getters: {
        tagNavList(state){
            return state.tagNavList
        }
    },
    mutations: {
        setNavTree(state, navTree) {
            state.navTree = navTree
        },
        setDynamicRouters(state, dynamicRouters) {
            state.dynamicRouters = dynamicRouters
        }
    }
}
