// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

// import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.$axios = axios


import './assets/weui/css/weui.min.css'
import './assets/weui/css/jquery-weui.css'

import $ from 'jquery'

import './assets/weui/js/jquery-weui'

import '@/assets/weui/js/swiper.js'


import './assets/js/common/RootFontSize'

import './assets/css/common/common.css'
import './assets/css/common/commonFront.css'

import './assets/js/common/common'
import './assets/js/common/CommonFront'

import eventBus from './components/common/Event.js'

window.eventBus = eventBus;


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
      // console.log(this.$myConfig);
  }
})


  /*
  //禁止双击事件
  document.addEventListener('touchstart',function (event) {
      if(event.touches.length>1){
          event.preventDefault();
      }
  })
  var lastTouchEnd=0;
  document.addEventListener('touchend',function (event) {
      var now=(new Date()).getTime();
      if(now-lastTouchEnd<=300){
          event.preventDefault();
      }
      lastTouchEnd=now;
  },false)
  */
 //iOS 里有一组双指手势操作的事件：gesturestart、gesturechange、gestureend 
document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
})



