<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {},
        methods: {},
        beforeCreate: function () {
        },
        created: function () {
        },
        beforeMonut: function () {
        },
        mounted: function () {
            window.vue = this
        },
        updated: function () {
        },
        beforeDestory: function () {
        },
        Destoryed: function () {
        }
    }
</script>

<style>
    #app {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
    }
</style>
