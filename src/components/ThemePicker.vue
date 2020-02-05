<template>
    <ColorPicker v-model="theme" />
</template>

<script>
    export default {
        name: "ThemePicker",
        props:{
            theme:{
                type:String,
                default:'#ff66cc'
            }
        },
        data() {
            return {

            }
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

</style>