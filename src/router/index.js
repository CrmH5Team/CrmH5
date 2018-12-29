import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Login from '@/components/Login'

import Search from '@/components/pages/Search'
import Searchmodule from '@/components/pages/Searchmodule'


import Opportunities from '@/components/pages/Opportunities'
import Opportunitiesinfo from '@/components/pages/Opportunitiesinfo'

import Organizations from '@/components/pages/Organizations'
import Organizationsinfo from '@/components/pages/Organizationsinfo'

import Contacts from '@/components/pages/Contacts'
import Contactsinfo from '@/components/pages/Contactsinfo'

import Previewfile from '@/components/pages/Previewfile'
import Uploadinput from '@/components/pages/Uploadinput'

import Report from '@/components/pages/Report'

import About from '@/components/pages/About'
import General from '@/components/pages/General'

import Calendar from '@/components/pages/Calendar'
import Calendarsearch from '@/components/pages/Calendarsearch'
import Calendarlist from '@/components/pages/Calendarlist'
import Calendarinfo from '@/components/pages/Calendarinfo'
import PrCalendarinfo from '@/components/pages/PrCalendarinfo'


import Selectlist from '@/components/common/Selectlist'
import Sharelist from '@/components/pages/Sharelist'


Vue.use(Router)

const router =  new Router({
  mode:'hash',
  routes: [
    { path: '/',name:'login', component: Login },
    { path: '/login',name:'login', component: Login },

    { path: '/main',name:'main',component: Main,
      meta: {
        keepAlive: true,
        isBack:false
      }
    },

    { path: '/search',name:'search',component: Search,
      meta: {
        keepAlive: true,
        isBack:false
      }
    },
    { path: '/searchmodule',name:'searchmodule',component: Searchmodule,
      meta: {
        keepAlive: true,
        isBack:false
      }
    },




    {
      path:'/opportunities',name:'opportunities',component:Opportunities,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false,  //当在详情页面保存后回到列表页面刷新
      }
    },
    { path:'/opportunitiesinfo/:id',name:'opportunitiesinfo',component:Opportunitiesinfo,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false,  //当在文件上传保存后回到详情页面刷新
      }
    },
    { path:'/previewfile',name:'previewfile',component:Previewfile},

    { path:'/uploadinput',name:'uploadinput',component:Uploadinput,
      meta: {
        keepAlive: true,
        isBack:false,
      }
    },


    { path:'/organizations',name:'organizations',component:Organizations,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false,  //当在详情页面保存后回到列表页面刷新
      }
    },
    { path:'/organizationsinfo/:id',name:'organizationsinfo',component:Organizationsinfo,
      meta: {
        keepAlive: true,
        isBack:false,
      }
    },


    { path:'/contacts',name:'contacts',component:Contacts,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false,  //当在详情页面保存后回到列表页面刷新
      }
    },
    { path:'/contactsinfo/:id',name:'contactsinfo',component:Contactsinfo,
      meta: {
        keepAlive: true,
        isBack:false,
      }
    },


    { path:'/about',component:About},
    { path:'/general',component:General},
    { path:'/uploadinput',component:Uploadinput},

    //报表
    { path:'/report',name:'report',component:Report,
      meta: {
        keepAlive: true,
        isBack:false,
      }
    },

    //日程
    { path:'/calendar',name:'calendar',component:Calendar,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false,  //当在详情页面保存后回到日历页面刷新
      }
    },
    { path:'/calendarsearch',name:'calendarsearch',component:Calendarsearch},

    { path:'/calendarlist',name:'calendarlist',component:Calendarlist,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false,  //当在详情页面保存后回到列表页面刷新
      }
    },
    { path:'/calendarlistinfo/:id',name:'calendarlistinfo',component:Contactsinfo,
      meta: {
        keepAlive: true,
        isBack:false,
      }
    },


    { path:'/selectlist',name:'selectlist',component:Selectlist},
    { path:'/sharelist',name:'sharelist',component:Sharelist},



  ]
})


router.beforeEach(function(to, from, next){


    var sessionName = tool.getStorageItem(tool.cache_SessionName);
    if(sessionName){
      // if(to.path == '/login'){
      //   next({path: '/main'});
      // }
        next();
    }else{
      if(to.path == '/login'){
          next();
      }else{
          next({path: '/login'});
      }

    }
})

export default router
