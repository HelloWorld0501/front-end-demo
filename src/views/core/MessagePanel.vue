<template>
    <Dropdown>
        <a href="javascript:void(0)">
            <Badge :offset="[20,-7]" :count="1999" overflow-count="99">
                <Icon custom="fa fa-envelope-o fa-lg"/>
            </Badge>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem class="item">您有 {{letters.length}} 条私信嗷!</DropdownItem>
            <DropdownItem divided v-for="item in letters" :key="item.key">
                <!--头像-->
                <div class="message-avatar">
                    <Avatar size="large" shape="circle" :src="item.avatar"/>
                </div>
                <span class="sender">{{item.sender}}</span>
                <span class="time">
                    <Icon custom="fa fa-clock-o fa-lg"></Icon>
                    <span class="time-text">{{item.time}}</span>
                </span>
                <div class="message-content">
                    {{item.content}}
                </div>
            </DropdownItem>
            <DropdownItem class="item" divided>查看全部私信</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
    export default {
        name: "MessagePanel",
        props: {
            letters: {
                type: Array,
                default: [
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

<style lang="scss" scoped>
    .item {
        width: 300px;
        text-align: center;
    }

    .message-content {
        font-size: 15px;
    }

    .message-avatar {
        float: left;
        padding-right: 10px;
    }

    .sender {
        font-size: 16px;
        font-weight: bold;
    }

    .time-text {
        padding-left: 5px;
    }

    .time {
        float: right;
    }


</style>
