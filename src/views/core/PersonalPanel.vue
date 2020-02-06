<template>
    <div class="personal-panel">
        <div class="personal-desc" :style="{'background':this.$tool.getStoreValue('themeColor')}">
            <div>
                <Avatar class="avatar" shape="square" :src="require('@/assets/logo.png')"/>
            </div>
            <div class="name-role">
                <span>{{user.name}} - {{user.role}}</span>
            </div>
            <div>
                <span>
                    <Icon size="20" custom="fa fa-clock-o"/>
                    {{user.registeInfo}}
                </span>
            </div>
        </div>
        <div class="personal-relation">
            <span class="relation-item">followers</span>
            <span class="relation-item">watches</span>
            <span class="relation-item">friends</span>
        </div>
        <div class="main-operation">
            <span class="main-operation-item">
                <Button size="default" custom-icon="fa fa-male">个人中心</Button>
            </span>
            <span class="main-operation-item">
                <Button size="default" custom-icon="fa fa-key">修改密码</Button>
            </span>
        </div>
        <div class="other-operation">
            <div class="other-operation-item">
                <Icon size="20" custom="fa fa-eraser"/>
                清除缓存
            </div>
            <div class="other-operation-item">
                <Icon size="20" custom="fa fa-user"/>
                在线人数
            </div>
            <div class="other-operation-item">
                <Icon size="20" custom="fa fa-bell"/>
                访问次数
            </div>
            <div class="other-operation-item">
                <Icon size="20" custom="fa fa-undo"/>
                {{$t("common.backupRestore")}}
            </div>
        </div>
        <div class="personal-footer" @click="logout">
            <Icon size="20" custom="fa fa-sign-out"/>{{$t("common.logout")}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalPanel",
        props: {
            user: {
                type: Object,
                default: {
                    name: 'admin',
                    avatar: '@/assets/logo.png',
                    role: '超级管理员',
                    registeInfo: '注册时间: XXXX-XX-XX'
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            logout() {
                this.$Modal.confirm({
                    title: '警告',
                    content: '<p>真的要退出吗?</p>',
                    onOk: () => {
                        sessionStorage.removeItem('user')
                        this.$router.push('login')
                        this.$api.login.logout().then(res => {

                        }).catch(err => {
                        })

                    },
                    onCancel: () => {

                    }
                })
            }
        },
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
        }
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

<style lang="scss" scoped>
    .personal-panel {
        font-size: 14px;
        width: 100%;
        width: 100%;
        text-align: center;
        border-width: 1px;
    }

    .personal-desc {
        padding: 15px;
        color: #fff;
    }

    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 90px;
    }

    .name-role {
        font-size: 16px;
        padding: 5px;
    }

    .personal-relation {
        font-size: 16px;
        padding: 12px;
        margin-right: 1px;
        background: rgba(200, 209, 204, 0.3);
    }

    .relation-item {
        padding: 12px;
    }

    .relation-item:hover {
        cursor: pointer;
        color: rgb(19, 138, 156);
    }

    .main-operation {
        padding: 8px;
        margin-right: 1px;
        border-color: rgba(201, 206, 206, 0.2);
        border-top-width: 1px;
    }

    .main-operation-item {
        margin: 15px;
    }

    .other-operation {
        padding: 15px;
        margin-right: 1px;
        text-align: left;
        border-color: rgba(180, 190, 190, 0.2);
        border-top-width: 1px;
        border-top-style: solid;
    }

    .other-operation-item {
        padding: 12px;
    }

    .other-operation-item:hover {
        cursor: pointer;
        background: #9e94941e;
        color: rgb(19, 138, 156);
    }

    .personal-footer {
        margin-right: 1px;
        font-size: 14px;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-color: rgba(180, 190, 190, 0.2);
        border-top-width: 1px;
        border-top-style: solid;
    }

    .personal-footer:hover {
        cursor: pointer;
        color: rgb(19, 138, 156);
        background: #b1a6a61e;
    }
</style>