<template>
    <div class="page">
        <h2>Login Page</h2>
        <Button type="primary" @click="login()">登录</Button>
    </div>
</template>

<script>
    import mock from '@/mock/index'
    import Cookies from 'js-cookie'
    export default {
        name: "Login",
        data() {
            return {}
        },
        methods: {
            login() {
                this.$api.login.login().then(res => {
                    console.log(res)
                    Cookies.set('token',res.data.token)
                }).catch(err => {
                    console.log(err)
                })
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
        }
    }
</script>

<style scoped>

</style>
