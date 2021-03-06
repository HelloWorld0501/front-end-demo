export default {
    state: {
        appName: "Demo",  // 应用名称
        themeColor: "#14889A",  // 主题颜色
        oldThemeColor: "#14889A",   // 上一次主题颜色
        collapse: true,  // 导航栏收缩状态
        menuRouteLoad: false,    // 菜单和路由是否已经加载
    },
    getters: {
        collapse(state) {// 对应着上面state
            return state.collapse
        },
        menuRouteLoad(state){
            return state.menuRouteLoad
        }
    },
    mutations: {
        onCollapse(state) {  // 改变收缩状态
            state.collapse = !state.collapse
        },
        setThemeColor(state, themeColor) {  // 改变主题颜色
            state.oldThemeColor = state.themeColor
            state.themeColor = themeColor
        },
        menuRouteLoaded(state, menuRouteLoad) {  // 改变菜单和路由的加载状态
            state.menuRouteLoad = menuRouteLoad
        }
    }
}
