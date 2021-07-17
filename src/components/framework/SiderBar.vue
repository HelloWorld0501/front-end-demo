<template>
    <div>
        <div class="logo" style="background: #14889A"
             @click="$route.path === '/' ? '' :$router.push('/')">
            <img v-if="collapse" src="@/assets/logo.png"/>
            <div v-else>{{appName}}</div>
        </div>
        <!--侧边菜单展开时显示-->
        <Menu accordion theme="dark" width="auto" v-show="!collapse" @on-select="handleRoute">
            <template v-for="item in navTree">
                <Submenu v-if="item.children && item.children.length != 0" :key="item.id" :name="item.name">
                    <template slot="title">
                        <Icon :size="20" :custom="item.icon"/>
                        <span>{{item.name}}</span>
                    </template>
                    <MenuItem v-for="subitem in item.children" :key="item.id +'-'+ subitem.id"
                              :name="subitem.url">
                        <Icon :size="20" :custom="subitem.icon"/>
                        <span>{{subitem.name}}</span>
                    </MenuItem>
                </Submenu>
                <MenuItem v-else :key="item.id" :name="item.url">
                    <Icon :size="20" :custom="item.icon"/>
                    <span>{{item.name}}</span>
                </MenuItem>
            </template>
        </Menu>
        <!--侧边菜单收缩时显示-->
        <div v-show="collapse" class="menu-collapsed">
            <template v-for="item in navTree">
                <template v-if="item.children && item.children.length != 0">
                    <Dropdown placement="right-start" :key="item.id" @on-click="handleRoute">
                        <a class="drop-menu-a" type="text">
                            <Icon :size="30" :custom="item.icon"/>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="subitem in item.children" :key="item.id +'-' +subitem.id"
                                          :name="subitem.url">
                                <Icon :size="16" :custom="subitem.icon"/>
                                <span class="menu-item-title">{{subitem.name}}</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </template>
<!--              只有一个子菜单-->
                <template v-else>
                    <Tooltip transfer :content="item.name" placement="right" :key="item.id">
                        <a @click="handleRoute(item.url)" type="text" class="drop-menu-a">
                            <Icon :size="30" :custom="item.icon"/>
                        </a>
                    </Tooltip>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {checkUrlIsWebSite} from '@/utils/tools'

    export default {
        name: "SiderBar",
        props: {
            navTree: {
                type: Array,
                default: ''
            }
        },
        data() {
            return {}
        },
        methods: {
            handleRoute(value) {
                console.log(value)
                checkUrlIsWebSite(value) ? window.open(value) : this.$router.push(value)
            }
        },
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
            ...mapState({
                appName: state => state.app.appName,
                collapse: state => state.app.collapse,
            })
        },
    }
</script>

<style scoped lang="scss">
    .logo {
        height: 64px;
        line-height: 60px;
        cursor: pointer;
        position: relative;

        img {
            width: 40px;
            height: 40px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        div {
            font-size: 22px;
            color: white;
            text-align: center;
        }
    }

    a.drop-menu-a {
        height: 60px;
        display: inline-block;
        width: 78px;
        text-align: center;
        color: #ffffff;
    }

    a.drop-menu-a i {
        padding-top: 15px;
    }

    .menu-item-title {
        padding-left: 6px;
    }

</style>
