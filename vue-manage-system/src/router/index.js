import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index'
import Content from '@/page/content'
import Button from '@/page/component/button'
import HoverButton from '@/page/component/hover_button'
import Alert from '@/page/component/alert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/component/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/component/hover_button',
      name: 'HoverButton',
      component: HoverButton
    },
    {
      path: '/component/alert',
      name: 'Alert',
      component: Alert
    },
    
  ]
})
