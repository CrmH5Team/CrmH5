import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/Index'

import Login from '@/components/Login'

import Meetinglist from '@/components/pages/Meetinglist'
import Notification from '@/components/pages/Notification'
import Meetinginfo from '@/components/pages/Meetinginfo'


import Tripmeeting from '@/components/pages/Tripmeeting'
import Business from '@/components/pages/Business'
import Tripinfo from '@/components/pages/Tripinfo'
import AddTripExpense from '@/components/pages/AddTripExpense'
import MeetingNoteinfo from '@/components/pages/MeetingNoteinfo'
import Addmeeting from '@/components/pages/Addmeeting'
import AddRouteOrRoom from '@/components/pages/AddRouteOrRoom'


import Search from '@/components/pages/Search'
import Searchmodule from '@/components/pages/Searchmodule'


import Opportunitiesinfo from '@/components/pages/Opportunitiesinfo'


import Organizationsinfo from '@/components/pages/Organizationsinfo'

import Contacts from '@/components/pages/Contacts'
import Contactsof from '@/components/pages/Contactsof'
import Contactsinfo from '@/components/pages/Contactsinfo'

import Previewfile from '@/components/pages/Previewfile'
import Uploadinput from '@/components/pages/Uploadinput'

// import Report from '@/components/pages/Report'


import PrCalendarinfo from '@/components/pages/PrCalendarinfo'

import Selectlist from '@/components/common/Selectlist'
import Sharelist from '@/components/pages/Sharelist'
import Groupselectlist from '@/components/common/Groupselectlist'
import Poweruser from '@/components/pages/Poweruser'
import Linkedpage from '@/components/pages/Linkedpage'

Vue.use(Router)

const router =  new Router({
  mode:'hash',
  routes: [
    { path: '/',name:'login', component: Login },
    { path: '/login',name:'login', component: Login },

    { path: '/index',name:'index', component:Index },

    { path: '/notification',name:'notification', component:Notification },
    { path: '/meetinglist',name:'meetinglist', component: Meetinglist},

    { path: '/search',name:'search',component: Search,
      meta: {
        keepAlive: true,
        isBack:false
      }
    },
    { path: '/searchmodule/:paramStr',name:'searchmodule',component: Searchmodule,
      meta: {
        keepAlive: true,
        isBack:false
      }
    },


    { path: '/prcalendarinfo/:id',name:'prcalendarinfo', component:PrCalendarinfo },

    //会议&出差
    { path: '/tripmeeting',name:'tripmeeting', component:Tripmeeting,
      meta: {
        keepAlive: true,
        isBack:false
      }
    },
    { path: '/meetinginfo/:id',name:'meetinginfo', component:Meetinginfo,
      meta: {
        keepAlive: true,
        isBack:false,
        listName:"tripmeeting"
      }
    },
    { path: '/tripinfo/:id',name:'tripinfo', component:Tripinfo,
      meta: {
        keepAlive: true,
        isBack:false,
        listName:"tripmeeting"
      }
    },
      //添加住宿/机票
    { path: '/addRouteOrRoom',name:'addRouteOrRoom', component:AddRouteOrRoom },
     //添加会议
    { path: '/addmeeting',name:'addmeeting', component:Addmeeting },

    //上传文件
    { path:'/uploadinput',name:'uploadinput',component:Uploadinput,
      meta: {
        keepAlive: true,
        isBack:false,
      }
    },
    //文档查看
    { path:'/previewfile',name:'previewfile',component:Previewfile},

    //添加出差报销单
    { path: '/addTripExpense/:id',name:'addTripExpense', component:AddTripExpense },






    { path: '/business',name:'business', component:Business,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false  //当在详情页面保存后回到列表页面刷新
      }
    },
    { path:'/opportunitiesinfo/:id',name:'opportunitiesinfo',component:Opportunitiesinfo,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false,  //当在文件上传保存后回到详情页面刷新
        listName:"business"
      }
    },
    //会议记录
    { path: '/meetingNoteinfo/:id',name:'meetingNoteinfo', component:MeetingNoteinfo,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false,  //当在文件上传保存后回到详情页面刷新
        listName:"opportunitiesinfo"
      }
    },
    { path:'/linkedpage',name:'linkedpage',component:Linkedpage },



    //联系人
    { path:'/contacts',name:'contacts',component:Contacts,
      meta: {
        keepAlive: true,
        isBack:false,
        fromSave:false  //当在详情页面保存后回到列表页面刷新
      }
    },
    { path:'/organizationsinfo/:id',name:'organizationsinfo',component:Organizationsinfo,
      meta: {
        keepAlive: true,
        isBack:false,
        listName:'contacts'
      }
    },
    { path:'/contactsinfo/:id',name:'contactsinfo',component:Contactsinfo,
      meta: {
        keepAlive: true,
        isBack:false,
        listName:'contacts'
      }
    },

    { path:'/contactsof',name:'contactsof',component:Contactsof},

    { path:'/selectlist',name:'selectlist',component:Selectlist},
    { path:'/sharelist',name:'sharelist',component:Sharelist},
    { path:'/groupselectlist',name:'groupselectlist',component:Groupselectlist},
    { path:'/poweruser',name:'poweruser',component:Poweruser}
  ]
})

//路由拦截
router.beforeEach(function(to, from, next){
    var registerCode = tool.RegisterCode();
    if(!tool.isNullOrEmptyObject(registerCode)){
        next();
    }else{
      // if(to.path == '/login'){
          next();
      // }else{
      //     next({path: '/login'});
      // }
    }
})

export default router
