import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Channel from '@/components/Channel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/:channel/channel-:id',
      name: 'Channel',
      component: Channel
    }
  ]
})
