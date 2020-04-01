<template>
    <Layout class="layout">
        <Sider hide-trigger collapsible :collapsed-width="78" v-model="$store.state.app.collapse">
            <SiderBar :navTree="navTree"></SiderBar>
        </Sider>
        <Layout>
            <Header :style="{padding: 0}" class="layout-header-bar">
                <div class="tool-float">
                    <Icon @click.native="reverseCollapse" :class="rotateIcon" :style="{margin: '0 20px'}"
                          type="md-menu"
                          size="24"/>
                </div>
                <Row class="tool-float">
                    <Col span="8">
                        <Button type="text" icon="ios-paper">{{$t("common.doc")}}</Button>
                    </Col>
                    <Col span="8">
                        <Button type="text" icon="ios-construct">项目</Button>
                    </Col>
                    <Col span="8">
                        <Button type="text" icon="ios-people">博客</Button>
                    </Col>
                </Row>
                <div>
                    <HeaderBar>
                    </HeaderBar>
                </div>
            </Header>
            <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                <Button @click="test">点我</Button>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
    import SiderBar from '@/components/framework/SiderBar'
    import HeaderBar from '@/components/framework/HeadBar'
    import {mapState} from 'vuex'
    import store from "@/store";

    export default {
        components: {
            SiderBar,
            HeaderBar
        },
        data() {
            return {
            }
        },
        computed: {
            rotateIcon() {
                return [
                    'menu-icon',
                    this.$store.state.app.collapse ? 'rotate-icon' : ''
                ];
            },
            ...mapState({
                navTree: state => state.menu.navTree
            })
        },
        methods: {
            reverseCollapse() {
                this.$store.commit('onCollapse')
            },
            test() {
                console.log(store.getters.menuRouteLoad)
            }
        }
    }
</script>
<style scoped>
    .tool-float, .tool-float div {
        float: left;
    }

    .layout {
        background: #f5f7f9;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }

    .layout-header-bar {
        padding: 0;
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }


    .menu-icon {
        transition: all .3s;
    }

    .rotate-icon {
        transform: rotate(-90deg);
    }
</style>
