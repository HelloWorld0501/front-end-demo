<template>
    <div id="main-container" class="main-container"
         :class="$store.state.app.collapse?'position-collapse-left':'position-left'">
        <!--        标签页-->
        <div class="tab-container"></div>
        <!--        主内容-->
        <div class="main-container">
            <keep-alive>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainContent",
        data() {
            return {}
        },
        methods: {},
        beforeCreate: function () {
        },
        created: function () {
        },
        beforeMonut: function () {
        },
        mounted: function () {
        },
        updated: function () {
        },
        beforeDestory: function () {
        },
        Destoryed: function () {
        }
    }
</script>

<style scoped lang="scss">
    .main-container {
        padding: 0 5px 5px;
        position: absolute;
        top: 60px;
        left: 1px;
        right: 1px;
        bottom: 0px;
        background: rgba(67, 69, 70, 0.1);

        .main-content {
            position: absolute;
            top: 45px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            padding: 5px;
        }
    }

    .position-left {
        left: 200px;
    }

    .position-collapse-left {
        left: 65px;
    }
</style>
