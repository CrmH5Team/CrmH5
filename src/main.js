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


// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

//图片预览组件
import gallery from 'img-vuer'
Vue.use(gallery, {
  swipeThreshold: 150  // default 100 ,new in 0.12.0
})

window.eventBus = eventBus;


Vue.config.productionTip = false

//会议相关的格式化
//formatContactsID
Vue.filter('formatContactsID',function(val){
    if (tool.isNullOrEmptyObject(val)) {
      return "";
    }

    return val + " ";
});
//formatTitle
Vue.filter('formatTitle',function(val){
    if (tool.isNullOrEmptyObject(val)) {
      return "";
    }

    return "("+val+")";
});
//MeetingTimeFormat
Vue.filter('MeetingTimeFormat',function(val){
    if (tool.isNullOrEmptyObject(val)) {
      return "";
    }

    var format = "d/MMM/yyyy HH:mm";
    val = val.ReplaceAll("T", " ");
    val = tool.ChangeTimeFormat(val, format);

    return val;
});
//FileSizeFormat
Vue.filter('FileSizeFormat',function(val){
  if (tool.isNullOrEmptyObject(val)) {
    return "0KB";
  }

  val = tool.fileSizeFormat(val);

  return val;
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
