<template>
    <div class="menu-bar-container">
        <!--logo-->
        <div class="logo menu-bar-width" style="background: #14889A"  @click="$router.push('/')">
            <img src="@/assets/logo.png" alt=""/>
            <div>神秘终端</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
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
    .menu-bar-container {
        position: fixed;
        top: 0px;
        left: 0;
        bottom: 0;
        z-index: 1020;

        .logo {
            position: absolute;
            top: 0px;
            height: 60px;
            line-height: 60px;
            background: #545c64;
            cursor: pointer;

            img {
                width: 40px;
                height: 40px;
                border-radius: 0px;
                margin: 10px 10px 10px 10px;
                float: left;
            }

            div {
                font-size: 25px;
                color: white;
                text-align: left;
                padding-left: 20px;
            }
        }

        .menu-bar-width {
            width: 200px;
        }
    }

</style>
