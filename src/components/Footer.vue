<template>
  <div class="l-footer">
    <div class="sub-footer-1">
      <div class="one-of-three">
        <div class="widget">
          <h3>最新新闻</h3>
          <div class="news-list" v-for="item in newsList">
            <div class="news-item">
              <a class="news-link" href="">{{item.title}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="one-of-three">
        <h3>友情链接</h3>
        <div class="link-list">
          <a class="link-item" v-for="item in linkList" href="">{{item}}</a>
        </div>
      </div>
      <div class="one-of-three">
        <h3>联系我们</h3>
        <div class="contacts-list">
          <div class="contacts-item" v-for="item in contactList">
            <div :style="item.style">
              <span class="contacts-item-value">{{item.value}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-footer-2">
      <div class="copyright">© 2011 - 2018 深圳市中科研拓科技有限公司</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter',
  data () {
    return {
      newsList: [],
      linkList: [],
      linkListNum: 60,
      contactList: [
        {"style":"background:url(/static/images/pg1.png) no-repeat -869px -172px;", "value":"45642387"},
        {"style":"background:url(/static/images/pg1.png) no-repeat -869px -204px;", "value":"400-0316-532"},
        {"style":"background:url(/static/images/pg1.png) no-repeat -869px -235px;", "value":"sales@zhongkerd.com"},
        {"style":"background:url(/static/images/pg1.png) no-repeat -869px -267px;", "value":"[深圳总部] 深圳市南山区南头关口二路智恒产业园19栋402室"},
        {"style":"background:url(/static/images/pg1.png) no-repeat -869px -267px; float:left;", "value":"[福田研发部] 深圳市福田区多丽工业园科技楼805"},
        {"style":"background:url(/static/images/pg1.png) no-repeat -869px -267px; float:left;", "value":"[成都分公司] 成都高新区天府大道中段801号天府软件园B3栋4楼V09"},
        {"style":"background:url(/static/images/pg1.png) no-repeat -869px -267px; float:left;", "value":"[厦门分公司] 厦门软件园二期22号楼-3楼304"},
        {"style":"background:url(/static/images/pg1.png) no-repeat -869px -267px; float:left;", "value":"[广州分公司] 广州市番禺信基商业中心中创孵化器中心一楼165A"},
      ]
    }
  },
  mounted() {
    this.$http.get('/albums')
      .then((response) => {
        this.newsList = response.data.slice(0, 10);
        for (let i=0; i<this.linkListNum; i++) {
          this.linkList[i] = response.data[i].title.slice(0, 10);
          if (i < this.linkListNum - 1) {
            this.linkList[i] += ' / ';
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l-footer {
  width: 100%;
  overflow: hidden;
  background-color: #1a1a1a;
}
.sub-footer-1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  padding: 40px 73px;
}
.one-of-three {
  width: 30%;
  margin: 20px;
  max-width: 454px;
}
h3 {
  color: #ccc;
  margin-bottom: 24px;
  font-size: 26px;
}
.news-item {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 6px;
  border-bottom: 1px solid #3f3f3f;
  line-height: 1.3;
  margin-bottom: 10px;
}
.news-link {
  color: #808080;
  text-decoration: none;
  font-size: 13px;
}
.link-item {
  color: #808080;
  text-decoration: none;
  line-height: 2.4;
  font-size: 13px;
}
.contacts-item {
  overflow: hidden;
  color: #808080;
  font-size: 13px;
  line-height: 25px;
}
.contacts-item-value {
  display: block;
  margin: 0 0 12px 36px;
}
.sub-footer-2 {
  background-color: #222;
  padding: 30px 40px;
  line-height: 14px;
  font-size: 13px;
  color: #666;
}
.copyright {
  margin-left: 120px;
}
@media (max-width: 1200px) {
  .one-of-three {
    width: 100%;
  }
  .sub-footer-1 {
    padding-left: 20px;
    padding-right: 5px;
  }
}
</style>
