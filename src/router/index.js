import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Header from '@/components/Header';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail
    }
  ]
})
