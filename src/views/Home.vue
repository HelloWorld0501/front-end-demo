<template>
    <div class="container">
        <NavBar></NavBar>
        <HeadBar></HeadBar>
        <MainContent></MainContent>
    </div>
</template>

<script>
    import axios from 'axios'
    import mock from '@/mock/index'
    import HeadBar from '@/components/framework/HeadBar'
    import NavBar from '@/components/framework/NavBar'
    import MainContent from '@/components/framework/MainContent'
    export default {
        components:{
          HeadBar,
          NavBar,
          MainContent
        },
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
            },
            changeLang(lang) {
                lang === '' ? 'zh_ch' : this.$i18n.locale = lang
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

<style scoped lang="scss">
    .container {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
</style>
