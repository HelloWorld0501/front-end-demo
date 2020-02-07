<template>
    <Layout class="layout">
        <Sider hide-trigger collapsible :collapsed-width="78" v-model="this.$tool.getStoreValue('collapse')">
            <SiderBar></SiderBar>
        </Sider>
        <Layout>
            <Header :style="{padding: 0}" class="layout-header-bar">
                <div class="tool-float">
                    <Icon @click.native="reverseCollapse" :class="rotateIcon" :style="{margin: '0 20px'}"
                          type="md-menu"
                          size="24"/>

                </div>
                <div class="tool-float">
                    <Menu mode="horizontal" active-name="1">
                        <MenuItem name="1">
                            <Icon type="ios-paper"/>
                            {{$t("common.doc")}}
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-people"/>
                            项目
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-construct"/>
                            博客
                        </MenuItem>
                    </Menu>
                </div>
                <div>
                    <HeaderBar>
                    </HeaderBar>
                </div>
            </Header>
            <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">

            </Content>
        </Layout>
    </Layout>
</template>
<script>
    import SiderBar from '@/components/framework/SiderBar'
    import HeaderBar from '@/components/framework/HeadBar'

    export default {
        components: {
            SiderBar,
            HeaderBar
        },
        data() {
            return {
                // collapsed: false
            }
        },
        computed: {
            rotateIcon() {
                return [
                    'menu-icon',
                    this.$tool.getStoreValue('collapse') ? 'rotate-icon' : ''
                ];
            }
        },
        methods: {
            reverseCollapse() {
                this.$store.commit('onCollapse')
            }
        }
    }
</script>
<style scoped>
    .tool-float {
        float: left;
    }

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }

    .layout-header-bar {
        padding: 0;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .menu-icon {
        transition: all .3s;
    }

    .rotate-icon {
        transform: rotate(-90deg);
    }
</style>
