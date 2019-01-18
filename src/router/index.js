import Vue from 'vue'
import Router from 'vue-router'
import ManageCenter from '@/components/ManageCenter'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  //
  mode: 'history',//去除#号
  routes: [
    {
      path: '/',
      name: 'ManageCenter',
      component: ManageCenter
    },
  ]
})
