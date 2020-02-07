<template>
    <Dropdown>
        <a href="javascript:void(0)">
            <Icon custom="fa fa-language fa-lg"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>
                <span @click="changLang('zh_cn')">简体中文</span>
            </DropdownItem>
            <DropdownItem>
                <span @click="changLang('en_us')">English</span>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
    export default {
        name: "Internationalization",
        data() {
            return {}
        },
        methods: {
            changLang(value) {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', '语言切换中')
                        ])
                    }
                })
                value === 'zh_cn' ? this.$i18n.locale = 'zh_cn' : this.$i18n.locale = 'en_us'
                setTimeout(() => {
                    this.$Spin.hide();
                }, 1000);
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