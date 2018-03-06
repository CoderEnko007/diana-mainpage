<template>
  <div class="container">
    <el-carousel :interval="5000" @change="carouselChange">
      <el-carousel-item>
        <div class="tp-bg01">
          <div class="caption">
            <transition name="slide-fade-up">
              <p v-if="show"><strong class="big-font">撸起袖子</strong></p>
            </transition>
            <transition name="slide-fade-down">
              <p v-if="show"><strong class="bigger-font">加油干!</strong></p>
            </transition>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="tp-bg02"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
        show: false
    }
  },
  methods: {
    carouselChange(currentIndex, originIndex) {
        if (currentIndex == 0) {
            this.show = true;
        } else {
            this.show = false;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container, .el-carousel{
    height: 100%;
    box-sizing: border-box;
}
.tp-bg01, .tp-bg02 {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.tp-bg01 {
    text-align: center;
    color: #fff;
    background-image: url('/static/images/bg11.jpg');
}
.tp-bg02 {
    background-image: url('/static/images/bg2.jpg');
}
.big-font {
    font-size: 82px;
}
.bigger-font {
    font-size: 102px;
}
.caption {
    height: 100%;
    padding-top: 15%;
    letter-spacing: 16px;
    user-select: none;
}
.slide-fade-up-enter-active, .slide-fade-up-leave-active {
  transition: all .2s ease 1s;
}
.slide-fade-up-enter, .slide-fade-up-leave-to
/* .slide-fade-up-leave-active for below version 2.1.8 */ {
  transform: translateY(-30px);
  opacity: 0;
}
.slide-fade-down-enter-active, .slide-fade-down-leave-active {
  transition: all .2s ease 1.3s;
}
.slide-fade-down-enter, .slide-fade-down-leave-to
/* .slide-fade-down-leave-active for below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>
