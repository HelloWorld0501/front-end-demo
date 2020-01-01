<template>
    <div class="page">
        <h2>Home Page</h2>
        <Button type="primary" @click="testAxios()">Axios</Button>
        <Button type="primary" @click="getUser()">用户</Button>
        <Button type="primary" @click="getMenu()">菜单</Button>
    </div>
</template>

<script>
    import axios from 'axios'
    import mock from '@/mock/index'
    export default {
        name: "Home",
        data() {
            return {}
        },
        methods: {
            testAxios() {
                axios.get('http://localhost:8080').then(res => {
                    alert(res.data)
                })
            },
            getUser() {
                axios.get('http://localhost:8080/user').then(res => {
                    alert(JSON.stringify(res.data))
                })
            },
            getMenu() {
                axios.get('http://localhost:8080/menu').then(res => {
                    alert(JSON.stringify(res.data))
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
        beforeUpdate: function () {
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
