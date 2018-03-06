<template>
  <div class="container">
    <h1 class="title">他们选择了中科研拓！你也可以！</h1>
    <div class="separator">
      <span class="sep-hl">
        <i class="fa fa-chevron-down"></i>
      </span>
    </div>
    <el-carousel trigger="click" :autoplay="false" arrow="always" indicator-position="none">
      <el-carousel-item v-for='page in pageNum' :key="page">
        <div class="clients-block" ref="block" id="block">
          <div class="clients-item" v-for="item in getItemsIndex(page)" ref="item">
            <div class="icon" 
              :style="{backgroundImage:'url('+img+')', 
              backgroundPositionX:setPositionX(item)+'px', 
              backgroundPositionY:setPositionY(item)+'px'}">
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'ClientsCarousel',
  data () {
    return {
      clientWidth: document.body.clientWidth,
      clientsItemWidth: 242,    // 单个标签的宽度
      img: "/static/images/partner-list.png",
      partnerTotalNum: 36,
      partnerNumPerPage: 15,
      pageNum: 3
    }
  },
  methods: {
    getItemsIndex(page) {
      let arr=new Array();
      for (let i=0; i<this.partnerNumPerPage; i++) {
        let item = i+this.partnerNumPerPage*(page-1);
        if (item >= this.partnerTotalNum) {
          break;
        }
        arr.push(i+this.partnerNumPerPage*(page-1));
      }
      return arr;
    },
    setPositionX(index) {
      let res = -11-(index)%4*225;
      return res;
    },
    setPositionY(index) {
      let res = -30-Math.floor(index/4)*93;
      return res
    },
    getPageNum() {
      let num = Math.ceil(this.partnerTotalNum / this.partnerNumPerPage);
      return num;
    }
  },
  mounted() {
    this.$nextTick(function () {
        window.onresize = _.debounce(() => {
          let itemWidth = this.$refs.item[0].offsetWidth;
          this.clientWidth = document.documentElement.clientWidth;
          this.partnerNumPerPage = Math.floor(this.clientWidth*0.9/itemWidth)*3;
          this.pageNum = Math.ceil(this.partnerTotalNum / this.partnerNumPerPage);
        }, 400)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  top: 0;
  left: 0;
  width: 100%;
  background-image: url(/static/images/huoban.png);
  background-size: cover;
  background-position: center center;
}
.container:before {
  content: "";
  display: table;
}
.title {
  color: #FFF;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 24px;
  font: 38px/48px 'Trebuchet MS',Tahoma,sans-serif;
}
.fa {
  font-size: 16px;
  line-height: 16px;
  width: 30px;
}
.separator {
  position: relative;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  height: 20px;
  margin: 35px 0;
  color: #e8e8e8;
}
.sep-hl:before, .sep-hl:after {
  content: '';
  height: 1px;
  width: 41%;
  background-color: #e8e8e8;
  display: inline-block;
  margin-bottom: 6px;
}
.sep-hl:before {
  margin-left: -50%;
}
.sep-hl:after {
  margin-right: -50%;
}
.el-carousel{
  height: 320px;
  box-sizing: border-box;
}
/*.el-carousel__item, .el-carousel__container, .el-carousel {
  overflow: hidden;
}*/
.icon {
  width: 185px;
  height: 70px;
  margin: 0 auto;
  transition: all .5s;
  border: 2px solid rgba(255, 255, 255, 0);
}
.clients-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.clients-block:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
}
.clients-item {
  box-sizing: border-box;
  float: left;
  width: 242px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.icon:hover {
  border-radius: 6px;
  border: 2px solid #5fb336;
}
</style>
