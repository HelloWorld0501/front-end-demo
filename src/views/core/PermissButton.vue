<template>
    <Button
            :size="size"
            :type="type"
            :custom-icon="customIcon"
            :loading="loading"
            :disabled="isDisable(perms)"
            @click="handClick">{{label}}
    </Button>
</template>

<script>

    import {hasPermission} from "@/utils/tools";

    export default {
        name: "PermissButton",
        prop: {
            label: {
                type: String,
                default: 'Button'
            },
            type: {
                type: String,
                default: 'Button'
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
                this.emit('click', {})
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
