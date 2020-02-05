<template>
    <!--工具栏-->
    <span class="toolbar">
        <Menu mode="horizontal">
            <MenuItem name="1">
                <ThemePicker :theme="themeColor"></ThemePicker>
            </MenuItem>
            <MenuItem name="2">
                <Poptip placement="bottom">
                    <li class="fa fa-language fa-lg"></li>
                    <div slot="content">
                        <List>
                            <ListItem><p @click="changLang('zh_cn')">简体中文</p></ListItem>
                            <ListItem><p @click="changLang('en_us')">English</p></ListItem>
                        </List>
                    </div>
                </Poptip>
            </MenuItem>
            <MenuItem name="3">
                <span class="user-info">
                    <img :src="user.avatar" alt=""/>
                    {{user.name}}
                </span>
            </MenuItem>
        </Menu>
    </span>
</template>

<script>
    import ThemePicker from '@/components/ThemePicker'

    export default {
        components: {
            ThemePicker
        },
        name: "HeadBar",
        data() {
            return {
                themeColor: '#cc3300',
                user: {
                    name: '张三',
                    avatar: require('@/assets/logo.png'),
                    role: '超级管理员',
                    registeninfo: '注册时间: 2018-11-11'
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
