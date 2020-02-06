<template>
    <!--工具栏-->
    <div class="toolbar">
        <div class="toolbar-item">
            <ThemePicker></ThemePicker>
        </div>
        <div class="toolbar-item">
            <Dropdown>
                <a href="javascript:void(0)">
                    <Icon custom="fa fa-language fa-lg"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem><a @click="changLang('zh_cn')">简体中文</a></DropdownItem>
                    <DropdownItem><a @click="changLang('en_us')">English</a></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="toolbar-item">
            <Poptip trigger="hover" padding="0" placement="bottom-end">
                <span class="user-info">
                    <Avatar shape="square" :src="user.avatar"/>
                    {{user.name}}
                </span>
                <div slot="content">
                    <PersonalPanel :user="user"></PersonalPanel>
                </div>
            </Poptip>
        </div>
    </div>
</template>

<script>
    import ThemePicker from '@/components/ThemePicker'
    import PersonalPanel from '@/views/core/PersonalPanel'

    export default {
        components: {
            ThemePicker,
            PersonalPanel
        },
        name: "HeadBar",
        data() {
            return {
                themeColor: '#cc3300',
                user: {
                    name: '张三',
                    avatar: require('@/assets/logo.png'),
                    role: '超级管理员',
                    registeInfo: '注册时间: YYYY-MM-HH'
                }
            }
        },
        methods: {
            onCollapse(name) {
                this.$store.commit('onCollapse')
            },
            collapsedSider() {
                this.$refs.side1.toggleCollapse();
            },
            changLang(value) {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', '语言切换中')
                        ])
                    }
                })
                value === 'zh_cn' ? this.$i18n.locale = 'zh_cn' : this.$i18n.locale = 'en_us'
                setTimeout(() => {
                    this.$Spin.hide();
                }, 1000);
            }
        }
        ,
        beforeCreate: function () {
        }
        ,
        created: function () {
        }
        ,
        beforeMonut: function () {
        }
        ,
        mounted: function () {
            let user = sessionStorage.getItem('user')
            if (user) {
                this.user.name = user
                this.user.avatar = require('@/assets/logo.png')
            }
        }
        ,
        computed: {}
        ,
        updated: function () {
        }
        ,
        beforeDestory: function () {
        }
        ,
        Destoryed: function () {
        }
    }
</script>

<style scoped lang="scss">
    .toolbar {
        float: right;
        padding-right: 25px;
    }

    .toolbar-item {
        float: left;
        padding-left: 45px;
    }

    .user-info {
        font-size: 20px;
        color: black;
        cursor: pointer;

        img {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            margin: 10px 0px 10px 10px;
            float: right;
        }

    }
</style>
