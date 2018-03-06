// jshint esversion: 6
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
var SERVICE_DATA_ID = "services";
var ABOUT_DATA_ID = "abouts";

export const store = new Vuex.Store({
  state: {
    datas:[]
  },
  getters: {
    getServiceChannelId: (state) => {
      return SERVICE_DATA_ID;
    },
    getAboutChannelId: (state) => {
      return ABOUT_DATA_ID;
    },
    getChannelDatas: (state) => (channel) => {
      // 这里的channel暂时对应jsonholder中的userId
      let channelDatas = [];
      for (let index in state.datas) {
        let data = state.datas[index];
        if (data.channel == channel) {
          channelDatas.push(data);
        }
      }
      return channelDatas;
    }
  },
  mutations: {
    initDatas() {
      // Vue.http.get('/posts')
      //   .then((response) => {
      //     this.state.datas = response.data;
      //     // console.log(this.state.datas);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      this.state.datas = [
        {"name": "软件定制服务", "content":"", "itemId":"10", "channel":"services", "content":"aaa"},
        {"name": "软件外包服务", "content":"", "itemId":"11", "channel":"services", "content":"bbb"},
        {"name": "网站系统开发", "content":"", "itemId":"12", "channel":"services", "content":"ccc"},
        {"name": "移动APP开发", "content":"", "itemId":"13", "channel":"services", "content":"ddd"},
        {"name": "O2O平台开发", "content":"", "itemId":"14", "channel":"services", "content":"eee"},
        {"name": "智能硬件开发", "content":"", "itemId":"15", "channel":"services", "content":"fff"},
        {"name": "公司介绍", "content": "", "itemId":"16", "channel":"abouts", "content":"ggg"},
        {"name": "联系我们", "content": "", "itemId":"17", "channel":"abouts", "content":"hhh"},
        {"name": "加入我们", "content": "", "itemId":"18", "channel":"abouts", "content":"jjj"},
        {"name": "新闻动态", "content": "", "itemId":"19", "channel":"abouts", "content":"kkk"}];
    }
  }
})