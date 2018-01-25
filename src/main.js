// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import './assets/css/bootstrap.css'

import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.config.productionTip = false;
//依据设计图视口尺寸动态设置根标签字体大小
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
