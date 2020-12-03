<template>
    <Button
            :size="size"
            :type="buttonType"
            :custom-icon="customIcon"
            :loading="loading"
            :disabled="isDisable(perms)"
            @click="handClick"
            :icon="icon"
    :perms="perms">{{labelText}}
    </Button>
</template>

<script>

    import {hasPermission} from "@/utils/tools";

    export default {
        name: "PermissButton",
        props: {
            labelText: {
                type: String,
                default: 'ButtonText'
            },
            buttonType: {
                type: String,
                default: 'primary'
            },
            size: {
                type: String,
                default: 'default'
            },
            loading: {
                type: Boolean,
                default: false
            },
            perms: {
                type: String,
                default: ''
            },
            customIcon: {
                type: String,
                default: ''
            },
            icon:{
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        methods: {
            isDisable(perms) {
                return !hasPermission(perms)
            },
            handClick() {
                this.$emit('click', {})
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
