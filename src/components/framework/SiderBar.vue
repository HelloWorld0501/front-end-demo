<template>
    <div>
        <div class="logo" style="background: #14889A"
             @click="$route.path === '/' ? '' :$router.push('/')">
            <img v-if="collapse" src="@/assets/logo.png"/>
            <div>{{collapse?'':appName}}</div>
        </div>
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1">
                <Icon type="ios-navigate"></Icon>
                <span>Option 1</span>
            </MenuItem>
            <MenuItem name="1-2">
                <Icon type="ios-search"></Icon>
                <span>Option 2</span>
            </MenuItem>
            <MenuItem name="1-3">
                <Icon type="ios-settings"></Icon>
                <span>Option 3</span>
            </MenuItem>
        </Menu>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "SiderBar",
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
        },
        computed: {
            menuitemClasses() {
                return [
                    'menu-item',
                    this.$tool.getStoreValue('collapse') ? 'collapsed-menu' : ''
                ]
            },
            ...mapState({
                appName: state => state.app.appName,
                collapse: state => state.app.collapse
            })
        },
    }
</script>

<style scoped lang="scss">
    .logo {
        height: 64px;
        line-height: 60px;
        /*background: #545c64;*/
        cursor: pointer;
        position: relative;

        img {
            width: 40px;
            height: 40px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }

        div {
            font-size: 22px;
            color: white;
            text-align: center;
        }
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>