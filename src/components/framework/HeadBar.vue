<template>
    <!--工具栏-->
    <div class="toolbar">
        <div class="toolbar-item">
            <ThemePicker></ThemePicker>
        </div>
        <!--        多语言-->
        <div class="toolbar-item">
            <Internationalization></Internationalization>
        </div>
        <!--        通知消息-->
        <div class="toolbar-item">
            <NoticePanel :notice="notice"></NoticePanel>
        </div>
        <!--        头像-->
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
    import ThemePicker from '@/views/core/ThemePicker'
    import PersonalPanel from '@/views/core/PersonalPanel'
    import NoticePanel from '@/views/core/NoticePanel'
    import Internationalization from '@/views/core/Internationalization'

    export default {
        components: {
            Internationalization,
            ThemePicker,
            PersonalPanel,
            NoticePanel
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
                },
                offsetValue: [],
                notice: [
                    {
                        key: "1",
                        icon: 'fa fa-envelope-o',
                        content: '你修改了12431234用户密码'
                    },
                    {
                        key: "2",
                        icon: 'fa fa-music',
                        content: '你修24124124改了用户头像'
                    },
                    {
                        key: "3",
                        icon: 'fa fa-edit',
                        content: '今日123trddd41241225名新成员加入'
                    },
                    {
                        key: "4",
                        icon: 'fa fa-edit',
                        content: '您发表了一篇新随笔'
                    }
                ]
            }
        },
        methods: {
            onCollapse(name) {
                this.$store.commit('onCollapse')
            },
            collapsedSider() {
                this.$refs.side1.toggleCollapse();
            },
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
