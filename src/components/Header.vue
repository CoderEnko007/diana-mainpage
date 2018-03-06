<template>
  <div class="header">
    <div class="container">
      <div class="logo">
          <img class="w-logo-img" src="/static/images/logo.png" alt="test" title="test">
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c6400" text-color="#FFF" active-text-color="#5fb336">
        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title">服务项目</template>
          <el-menu-item 
            :index="'2-'+subindex" 
            v-for="(item, subindex) in services" 
            class="submenu" :key="subindex">
            <router-link :to="'/'+item.channel+'/channel-'+item.itemId">
              {{item.name}}
            </router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">案例</el-menu-item>
        <el-menu-item index="4">解决方案</el-menu-item>
        <!-- <el-menu-item index="5">关于我们</el-menu-item> -->
        <el-submenu index="5">
          <template slot="title">关于我们</template>
          <el-menu-item 
            :index="'5-'+subindex" 
            v-for="(item, subindex) in abouts" 
            class="submenu" :key="subindex">
            <router-link :to="'/'+item.channel+'/channel-'+item.itemId">
              {{item.name}}
            </router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data () {
    return {
      activeIndex: '1',
      services: [],
      abouts: []
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  mounted() {
    this.$store.commit('initDatas');
    this.services = this.$store.getters.getChannelDatas(this.$store.getters.getServiceChannelId);
    this.abouts = this.$store.getters.getChannelDatas(this.$store.getters.getAboutChannelId);
    console.log(this.services, this.abouts)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: absolute;
  height: 60px;
  width: 100%;
  /*max-width: 1140px;*/
  padding-top: 10px;
  z-index: 999;
}
.container {
  max-width: 1040px;
  margin: 0 auto;
}
.logo {
  display: inline-block;
}
.el-menu {
  float: right;
}
.el-menu-item, .el-submenu {
  margin-left: 8px;
  text-decoration: none;
}
.el-menu-item:hover {
  color: rgb(95, 179, 54) !important;
  border-bottom-color: rgb(95, 179, 54) !important;
  background-color: rgba(255, 255, 255, 0) !important;
}
.submenu a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: #FFF;
}
.submenu:hover {
  color: rgb(255, 255, 255) !important;
  background-color: rgb(95, 179, 54) !important;
}
.el-menu-item a {
  display: inline-block;
  width: 100%;
}
</style>
