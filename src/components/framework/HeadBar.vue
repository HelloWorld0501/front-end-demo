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
        <!--       私信-->
        <div class="toolbar-item">
            <MessagePanel :letters="letters"></MessagePanel>
        </div>
        <!--        通知消息-->
        <div class="toolbar-item">
            <NoticePanel :notice="notice"></NoticePanel>
        </div>
        <!--        头像-->
        <div class="toolbar-item">
            <PersonalPanel :user="user"></PersonalPanel>
        </div>
    </div>
</template>

<script>
    import ThemePicker from '@/views/core/ThemePicker'
    import PersonalPanel from '@/views/core/PersonalPanel'
    import NoticePanel from '@/views/core/NoticePanel'
    import Internationalization from '@/views/core/Internationalization'
    import MessagePanel from '@/views/core/MessagePanel'

    export default {
        components: {
            Internationalization,
            ThemePicker,
            PersonalPanel,
            NoticePanel,
            MessagePanel
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
                ],
                letters: [
                    {
                        key: "1",
                        avatar: require('@/assets/logo.png'),
                        content: '你修改了用户密码',
                        sender: '诸葛亮',
                        time: '5分钟前'
                    },
                    {
                        key: "2",
                        avatar: require('@/assets/logo.png'),
                        content: '你修改了用户头像',
                        sender: '武则天',
                        time: '2小时前'
                    },
                    {
                        key: "3",
                        avatar: require('@/assets/logo.png'),
                        content: '今日25名新成员加入',
                        sender: '王语嫣',
                        time: '昨天'
                    },
                    {
                        key: "4",
                        avatar: require('@/assets/logo.png'),
                        content: '您发表了一篇新随笔',
                        sender: '未知',
                        time: '昨天'
                    },
                    {
                        key: "5",
                        avatar: require('@/assets/logo.png'),
                        content: '您发表了一篇新随笔',
                        sender: '上官婉儿',
                        time: '前天'
                    }]
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
    }
</style>
