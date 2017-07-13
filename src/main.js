import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/reset.min.css'

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

import store from './store'

import VueScroller from 'vue-scroller';

Vue.use(VueScroller);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App,
  store
});
