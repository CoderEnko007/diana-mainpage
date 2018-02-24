<template>
<div class="main">
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c6400" text-color="#FFF" active-text-color="#5fb336">
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">服务项目</template>
      <el-menu-item :index="'2-'+subindex" v-for="(item, subindex) in projectItems" class="submenu" :key="subindex">
        {{item.name}}
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="3">案例</el-menu-item>
    <el-menu-item index="4">解决方案</el-menu-item>
    <el-menu-item index="5">关于我们</el-menu-item>
    </el-menu>
  </div>
  <el-button>按钮</el-button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1',
      projectItems: [
        {"name": "软件定制服务", "content":""},
        {"name": "软件外包服务", "content":""},
        {"name": "网站系统开发", "content":""},
        {"name": "移动APP开发", "content":""},
        {"name": "O2O平台开发", "content":""},
        {"name": "智能硬件开发", "content":""}
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 500px;
  background: url(/static/images/bg11.jpg) center no-repeat
}
a {
  text-decoration: none;
}
</style>
