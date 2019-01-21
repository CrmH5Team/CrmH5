// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon', Icon)

// import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.$axios = axios


import './assets/weui/css/weui.css'
import './assets/weui/css/jquery-weui.css'

import $ from 'jquery'

import './assets/weui/js/jquery-weui.js'

import '@/assets/weui/js/swiper.js'

import './assets/js/common/RootFontSize.js'

import './assets/css/common/common.css'
import './assets/css/common/commonFront.css'

import './assets/js/common/common.js'
import './assets/js/common/CommonFront.js'

import eventBus from './components/common/Event.js'


import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

window.eventBus = eventBus;


Vue.config.productionTip = false

//会议时间格式化
Vue.filter('MeetingTimeFormat',function(value){
  var format = "d/MMM/yyyy HH:mm";
  value = value.ReplaceAll("T"," ");
  value = tool.ChangeTimeFormat(value,format);
  // var dateTimeTemp = new Date(value);
  // if(tool.isNullOrEmptyObject(dateTimeTemp)){
  //   return;
  // }

  // console.log(value);

  return value;
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
      // console.log(this.$myConfig);
  }
});

 //iOS 里有一组双指手势操作的事件：gesturestart、gesturechange、gestureend
document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
});

//禁止iOS 10+ safari浏览器页面双击放大
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, false);