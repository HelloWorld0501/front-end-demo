<template>
    <div class="headbar" :class="collapse?'position-collapse-left':'position-left'"
         style="background: #14889A">
        <!--        导航收缩-->
        <span class="hamburg">
            <Menu mode="horizontal" :theme="themeColor" @on-select="onCollapse">
                <MenuItem style="background: #14889A;"  name="1">
                    <Hamburger :isActive="collapse"></Hamburger>
                </MenuItem>
            </Menu>
        </span>
        <!--工具栏-->
        <span class="toolbar">
            <Menu mode="horizontal" :theme="themeColor" >
<!--                iview没有提供背景色api,此处手动替换-->
                <MenuItem style="background: #14889A;" name="1">
                    <span class="user-info">
                        <img :src="user.avatar" alt=""/>
                        {{user.name}}
                    </span>
                </MenuItem>
            </Menu>
        </span>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Hamburger from '@/components/Hamburger'

    export default {
        components: {
            Hamburger
        },
        name: "HeadBar",
        data() {
            return {
                themeColor: 'light',
                user: {
                    name: '马云',
                    avatar: '',
                    role: '超级管理员',
                    registeninfo: '注册时间: 2018-11-11'
                }
            }
        },
        methods: {
            onCollapse(name) {
                this.$store.commit('onCollapse')
            },
        },
        beforeCreate: function () {
        },
        created: function () {
        },
        beforeMonut: function () {
        },
        mounted: function () {
            let user = sessionStorage.getItem('user')
            if (user) {
                this.user.name = user
                this.user.avatar = require('@/assets/logo.png')
            }
        },
        computed: {
            ...mapState({
                collapse: state => state.app.collapse
            })
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
    .headbar {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1030;
        height: 60px;
        line-height: 60px;
        border-color: rgba(180, 190, 190, 0.8);
        border-left-width: 1px;
        border-left-style: solid;
    }

    .hamburg, .navbar {
        float: left;
    }

    .toolbar {
        float: right;
    }

    .user-info {
        font-size: 20px;
        color: #fff;
        cursor: pointer;

        img {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            margin: 10px 0px 10px 10px;
            float: right;
        }
    }

    .position-left {
        left: 200px;
    }

    .position-collapse-left {
        left: 65px;
    }
</style>
