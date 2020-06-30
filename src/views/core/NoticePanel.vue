<template>
    <Dropdown placement="bottom">
        <a href="javascript:void(0)">
            <Badge :offset="[20,-7]" :count="1999" overflow-count="99">
                <Icon custom="fa fa-bell-o fa-lg"/>
            </Badge>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem class="item">您有 {{notice.length}} 条通知嗷!</DropdownItem>
            <DropdownItem divided v-for="item in notice" :key="item.key">
                <Icon :custom="item.icon"></Icon>
                {{item.content}}
            </DropdownItem>
            <DropdownItem class="item" divided>查看全部通知</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
    export default {
        name: "NoticePanel",
        props: {
            notice: {
                type: Array,
                default: [
                    {
                        key: "1",
                        icon: 'fa fa-envelope-o',
                        content: '你修改了用户密码'
                    },
                    {
                        key: "2",
                        icon: 'fa fa-music',
                        content: '你修改了用户头像'
                    },
                    {
                        key: "3",
                        icon: 'fa fa-edit',
                        content: '今日25名新成员加入'
                    },
                    {
                        key: "4",
                        icon: 'fa fa-edit',
                        content: '您发表了一篇新随笔'
                    }
                ],
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

<style scoped>
    .item {
        text-align: center;
    }
</style>
