<template>
  <div class="main-content">
      <div class="submain">
        <div class="l-submain" style="padding: 80px 40px 20px;">
          <h1 class="align-center">最值得<strong style="font-size: 60px; color: #5fb336">信赖</strong>的软件外包企业</h1>
          <h6 class="align-center" style="color: #717071; font-size: 18px">The most trusted software outsourcing enterprises</h6>
          <div class="separator">
            <span class="sep-hl">
              <i class="fa fa-star"></i>
            </span>
          </div>
          <div class="cols">
            <div class="iconbox-cols-4" v-for="iconBox in iconBoxCols3">
              <div class="icon-box-bg" :style="{background: iconBox.background, width: iconBox.width}"></div>
              <h3 class="icon-box-title">{{iconBox.title}}</h3>
              <div class="icon-box-text"><p>{{iconBox.text}}</p></div>
            </div>
          </div>
          <h1 class="align-center" style="font-size: 48px; color: #5fb336; margin: 50px 0 40px"><strong>服务项目</strong></h1>
          <div class="cols">
            <div class="iconbox-cols-3" v-for="iconBox in iconBoxCols4">
              <div class="w-iconbox-bg" :style="{background: iconBox.background}">
                <a :href="iconBox.href" class="server-item-box">
                  <div class="server-item-mark">{{iconBox.itemMark}}</div>
                  <h3 class="w-iconbox-title">{{iconBox.title}}</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="more-server-tips">
          <p>不限于以上服务</p>
          <p>更多需求，请联系我们，专业团队为您服务</p>
        </div>
        <div style="margin:50px auto; width: 172px;">
          <a href="" style="background:url(/static/images/pg1.png) no-repeat -271px -206px; width: 172px; height: 55px; display:block;"></a>
        </div>
      </div>
      <div class="w-submain">
        <ClientsCarousel></ClientsCarousel>
      </div>
      <div class="w-submain contact-block">
        <div class="w-iconbox" style="float: left">
          <div class="contact-title">联系我们</div>
          <div class="contact-text">专业团队为您服务答疑</div>
        </div>
        <div class="w-iconbox" style="float: right; margin-right: 80px;">
          <div class="contact-title">服务热线</div>
          <div class="contact-text"><h1>400-0316-532</h1></div>
        </div>
      </div>
  </div>
</template>

<script>
import ClientsCarousel from '@/components/ClientsCarousel'
import Carousel from '@/components/Carousel'
export default {
  name: 'MainContent',
  components: {
    ClientsCarousel,
    Carousel
  },
  data () {
    return {
      iconBoxCols3: [
        {"background":"url(/static/images/pg1.png) no-repeat 0px 3px", "width":"71px", "title":"方案合理", "text":"以上百家成功案例经验，量身定制最合理的开发方案"},
        {"background":"url(/static/images/pg1.png) no-repeat -277px 0px", "width":"56px", "title":"质量可靠", "text":"遵照全球公认的ISO质量体系，精细打磨产品每一个细节"},
        {"background":"url(/static/images/pg1.png) no-repeat -532px 0px", "width":"74px", "title":"交付准时", "text":"十多年开发经验的专业外包团队，精准把控整个开发流程"},
        {"background":"url(/static/images/pg1.png) no-repeat -799px 0px", "width":"74px", "title":"服务贴心", "text":"深入贯彻全民客服的理念，360度跟进你的需求"}
      ],
      iconBoxCols4: [
        {
          "background":"url('/static/images/case-pic.jpg') no-repeat 0px 0px",
          "href":"",
          "title":"软件定制服务", 
          "itemMark":"中科研拓为企业提供高端的软件定制服务，通过专业的软件定制流程来满足各大企业不同的软件需求(包括app定制、程序定制、网站系统定制等)。通过十多年的软件定制服务经验为企业打造极具竞争力的软件系统平台"
        },
        {
          "background":"url('/static/images/case-pic.jpg') no-repeat -388px 0px",
          "href":"",
          "title":"软件外包服务", 
          "itemMark":"中科研拓的软件外包服务包括：app开发、智能硬件开发、O2O平台开发、电商平台开发、大数据系统开发、物联网软件开发、高并发后台系统开发等各类项目的软件外包服务。具有十多年的软件外包经验，上百软件外包成功案例，立足深圳，辐射全国"
        },
        {
          "background":"url('/static/images/case-pic.jpg') no-repeat -776px 0px",
          "href":"",
          "title":"网站系统开发", 
          "itemMark":"中科研拓拥有专业的网站系统软件开发队伍，具有丰富的网站系统开发经验和新颖的创意水平。我们强调以客户为中心的开发理念，将客户的需求作为设计开发的核心，针对不同行业的客户，设计与其品牌、服务、业务等相适合的网站系统开发方案。"
        },
        {
          "background":"url('/static/images/case-pic.jpg') no-repeat -0px -309px",
          "href":"",
          "title":"移动APP开发", 
          "itemMark":"中科研拓积累了大量移动应用APP开发和APP外包经验，涉及平台包括iPhone手机、iPad平板、Android手机和Android平板;成功案例覆盖：移动办公OA、社交通讯、儿童教育、商城平台、信息管理、餐饮预订等各类手机应用app开发。拥有深圳最好的app开发团队。"
        },
        {
          "background":"url('/static/images/case-pic.jpg') no-repeat -388px -309px",
          "href":"",
          "title":"O2O平台开发", 
          "itemMark":"中科研拓凭借十多年的IT技术积累，为多个O2O平台提供专业的软件开发外包服务。成功案例：打车软件、外卖外接、水电电商平台、上门服务平台等各大O2O平台，在O2O平台系统的软件外包方面拥有丰富的经验，能够基于成熟的软件模块进行快速软件开发。"
        },
        {
          "background":"url('/static/images/case-pic.jpg') no-repeat -776px -309px",
          "href":"",
          "title":"智能硬件开发", 
          "itemMark":"   中科研拓可为智能硬件开发团队提供全面的app软件开发服务，支持采用蓝牙、WIFI、Zigbee、RFID、NFC、红外等多种通讯协议，同时也可以实现各种社交、电商、IM功能的开发。在智能硬件外包领域，已积累了众多成功案例包括：智能水杯、智能手环、智能情趣用品、智能家居、智慧社区等。"
        }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font: 38px/48px 'Trebuchet MS',Tahoma,sans-serif;
}
h3 {
  font: 22px/30px 'Trebuchet MS',Tahoma,sans-serif;
}
a {
  cursor: pointer;
}
.submain {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
}
.l-submain {
  width: 100%;
  position: relative;
}
.align-center {
  text-align: center;
  line-height: 50px;
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
.fa {
  font-size: 16px;
  line-height: 16px;
  width: 30px;
}
.fa-star:before {
  content: "\f005";
}
.sep-hl:before, .sep-hl:after {
  content: '';
  height: 1px;
  width: 50%;
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
.cols {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
}
.iconbox-cols-4 {
  width: 22%;
  margin-bottom: 40px;
}
.icon-box-bg {
  height: 74px;
  margin: 0 auto;
}
.icon-box-title {
  text-align: center;
  margin-top: 14px;
  margin-bottom: 24px;
}
.icon-box-text {
  text-align: center;
  color: #666;
  font:14px/21px 'Microsoft YaHei',微软雅黑,STHei,'Helvetica Neue',Helvetica,Arial,sans-serif;
}
.iconbox-cols-3 {
  width: 33%;
  max-width: 350px;
  margin-top: 40px;
}
.w-iconbox-bg {
  width: 291px;
  height: 272px;
  margin: 0 auto;
}
.server-item-box {
  position: relative;
  display: block;
  height: 100%;
  color: #FFF;
  text-align: center;
}
.w-iconbox-title {
  padding: 223px 0 0;
  font-size: 30px;
}
.server-item-mark {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 60px;
  padding: 12px;
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  background-color: #000;
  opacity: 0;
  transition: all .8s;
}
.server-item-mark:hover {
  opacity: 1;
}
.more-server-tips {
  margin-top: 20px;
  font-size: 24px;
  color: #333;
  line-height: 1.4;
  text-align: center;
  padding: 0 20px;
}
.w-iconbox {
  float: left;
  margin-bottom: 28px;
}
.w-submain:after {
  content: "";
  clear: both;
  display: block;
}
.contact-title {
  color: #FFF;
  font-size: 32px;
  margin-bottom: 20px;
}
.contact-text {
  color: #FFF;
  height: 50px;
  line-height: 50px;
  font-size: 20px
}
.w-submain {
  width: 100%;
  position: relative;
}
.contact-block {
  background-color:#5fb336; 
  padding: 32px 120px 3px;
}

@media (max-width: 1200px) {
  .iconbox-cols-4, .iconbox-cols-3 {
    width: 100%;
  }
  .contact-block {
    padding: 20px;
  }
  .w-iconbox {
    float: left !important;
  }
}
</style>
