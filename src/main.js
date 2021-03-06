// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/font-awesome-4.7.0/css/font-awesome.min.css'
import axios from 'axios'
import {store} from '@/store/store'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/';

Vue.use(ElementUI)
Vue.prototype.$http=axios; 
Vue.http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
