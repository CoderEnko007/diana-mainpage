<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Noto Sans',sans-serif;
  font-weight: normal;
}
a {
  text-decoration: none;
}
html, body, #app {
  height: 100%;
}
/*style for navigation bar*/
.el-submenu__title, .el-menu-item{
  font-size: 14px;
}
.el-menu .el-submenu .el-submenu__title:hover {
  color: rgb(95, 179, 54) !important;
  border-bottom-color: rgb(95, 179, 54) !important;
  background-color: rgba(255, 255, 255, 0) !important;
}
.el-submenu__title .el-submenu__icon-arrow {
    display: none;
}
.el-menu--horizontal {
  border-bottom: none;
  background-color: rgba(0,0,0,0.66);
}

.el-carousel__container {
  height: 100%;
}
</style>
