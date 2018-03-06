<template>
  <div class="container">
    <nav-header></nav-header>
    <div class="banner-container">
      <div class="l-submain" style="padding-top: 180px; height: 360px">
        <div class="banner-bg"></div>
        <div class="banner-h">
          <h1>{{heading}}</h1>
        </div>
      </div>
    </div>
    <div class="l-submain">
      <div class="content">
        <div class="l-content">
          <div class="side-bar-title"><h3>{{navTitle}}</h3></div>
          <nav class="side-bar-list">
            <ul class="nav-list">
              <li v-for="(item, index) in navItems" 
                :class="{'nav-item':true, 'nav-item-avtive':activeIndex==item.itemId}"
                @click="chooseItem(item.itemId)">
                <router-link :to="'/'+item.channel+'/channel-'+item.itemId">
                  <span>{{item.name}}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="r-content">
          <div class="bread-crumb">
            <div class="w-breadcrumb">
              <span>您的位置：</span>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{navTitle}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{currentName}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="r-submain-content">
            <h2 style="color: rgb(100, 100, 100); font-size: 32px; line-height:42px; margin-bottom: 42px">{{currentName}}</h2>
            {{content}}
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'

export default {
  name: 'Channel',
  components: {
    NavHeader,
    NavFooter
  },
  data () {
    return {
      channel: '',
      id: '',
      heading: '贴合需求，量身定做',
      navItems: [],
      content: '',
      currentName: '',
      currentChannel: '',
      navTitle: '服务项目',
      activeIndex: -1,
    }
  },
  methods: {
    loadContent(route) {
      this.$store.commit('initDatas');
      this.channel = route.params.channel;
      this.id = route.params.id;
      this.activeIndex = this.$route.params.id;
      this.currentChannel = this.$route.params.channel;
      console.log(this.channel, this.id)
      this.navItems = this.$store.getters.getChannelDatas(this.currentChannel);
      for (let item in this.navItems) {
        if (this.navItems[item].itemId == this.id) {
          this.content = this.navItems[item].content;
          this.currentName = this.navItems[item].name;
        }
      }
    },
    chooseItem(index) {
      this.activeIndex = index;
    }
  },
  watch: {
    '$route': function(route) {
      this.loadContent(route);
      console.log("aaa")
    }
  },
  mounted() {
    this.loadContent(this.$route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-container {
  overflow: hidden;
}
.l-submain {
  padding: 80px 40px;
  position: relative;
}
.banner-bg {
  position: absolute;
  background: url('/static/images/bg4.png') no-repeat center center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
}
.banner-h {
  position: relative;
  color: #fff;
  max-width: 1140px;
  margin: 0 auto;
}
.banner-h h1 {
  font-size: 50px;
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
}
.content {
  max-width: 1140px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.l-content {
  float: left;
  width: 25%;
}
.r-content {
  float: right;
  width: 70%;
}
.side-bar-title {
  width: 100%;
  margin-bottom: 21px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.side-bar-title h3 {
  font-size: 24px;
  line-height: 24px;
  color: #666;
  margin-bottom: 24px;
}
.nav-item {
  width: 100%;
  font-size: 15px;
  line-height: 25px;
  position: relative;
}
.nav-item a:hover {
  padding-left: 30px;
}
.nav-item a {
  display: block;
  color: #666;
  padding: 9px 20px 10px 20px;
  border-bottom: 1px solid #e8e8e8;
  transition: all .5s;
}
.nav-item-avtive {
  transition: all .5s;
  background-color: #5fb336;
}
.nav-item-avtive span {
  transition: all .8s;
  color: #FFF;
}
.nav-item a:before {
  color: #999;
  display: block;
  position: absolute;
  content: '\f105';
  font-family: FontAwesome;
  top:10px;
  left: 2px;
}
.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
}
.bread-crumb {
  margin-bottom: 21px;
  display: relative;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  vertical-align: center;
  text-align: right;
}
.w-breadcrumb {
  margin-bottom: 24px;
  font-size: 14px;
}
</style>
