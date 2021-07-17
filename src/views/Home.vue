<template>
  <Layout class="layout">
    <Sider hide-trigger collapsible :collapsed-width="78" v-model="collapse" class="left-sider">
      <SiderBar :navTree="navTree"></SiderBar>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <div class="tool-float">
          <Icon @click.native="reverseCollapse" :class="rotateIcon" :style="{margin: '0 20px'}"
                type="md-menu"
                size="24"/>
        </div>
        <div class="tool-float">
          <div>
            <Button type="text" icon="md-book">{{ $t("common.doc") }}</Button>
            <Button type="text" icon="md-code">项目</Button>
            <Button type="text" icon="md-people">博客</Button>
          </div>
        </div>
        <div style="float: right">
          <HeaderBar>
          </HeaderBar>
        </div>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <Tags :list="navList"></Tags>
          </div>
          <Content class="content-wrapper">
            <keep-alive>
              <router-view/>
            </keep-alive>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SiderBar from '@/components/framework/SiderBar'
import HeaderBar from '@/components/framework/HeadBar'
import {mapState} from 'vuex'
import store from "@/store";
import Tags from '@/views/navBar/Tags'

export default {
  name: 'Home',
  components: {
    SiderBar,
    HeaderBar,
    Tags
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
      navTree: state => state.menu.navTree,
      collapse: state => state.app.collapse,
      navList: state=>state.menu.tagNavList
    }),
  },
  methods: {
    reverseCollapse() {
      this.$store.commit('onCollapse')
    }
  },
  mounted() {

  }
}
</script>
<style scoped lang="scss">

.main-layout-con {
  height: 100%;
  overflow: hidden;
}

.main-content-con {
  height: calc(100% - 60px);
  overflow: hidden;
}

.tag-nav-wrapper {
  /*background: #F0F0F0;*/
  padding: 0;
  height: 40px;
}

.content-wrapper {
  background-color: #cccccc;
  padding: 18px;
  height: calc(100% - 80px);
  overflow: auto;
}

.tool-float {
  float: left;
}

.layout {
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}

.layout-header-bar {
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}


.menu-icon {
  transition: all .3s;
}

.rotate-icon {
  transform: rotate(-90deg);
}

.left-sider {

.ivu-layout-sider-children {
  overflow-y: scroll;
  margin-right: -18px;
}

}
</style>
