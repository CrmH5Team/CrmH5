<template>
<div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">


          <!-- calendar视图 -->
        <calendar v-show="viewType=='calendarView'" class="calendar-view"></calendar>

          <!-- list 视图 -->
        <div v-show="viewType=='listView'"  class="list-view">
              <div class="nav sticky">
                  <div @click="switchPage(0,'meeting',$event)" class="nav-item f16 active-item">Meeting</div>
                  <div @click="switchPage(1,'trip',$event)" class="nav-item f16" >Trip</div>
                  <div class="nav-border"></div>
              </div>

              <div class="pageList" v-show="showPage == 0">
                    <div class="add-btn-div">
                          <router-link to="/meetinginfo/0" class="add-div">
                              <span class="calcfont calc-add"></span>
                              <span class="add-text">And Meeting</span>
                          </router-link>
                    </div>
                    <!-- 列表 -->
                    <div v-if="!notMeeting" id="meetingList"></div>
                    <nothing v-if="notMeeting" style="padding-top:0.8rem;"></nothing>
              </div>

              <div class="pageList" v-show="showPage == 1">
                    <!-- <div class="add-btn-div">
                          <router-link to="/tripinfo/0" class="add-div">
                              <span class="calcfont calc-add"></span>
                              <span class="add-text">And Trip</span>
                          </router-link>
                    </div> -->
                    <!-- 列表 -->
                    <div v-if="!notTrip" id="tripList"></div>
                    <nothing v-if="notTrip" style="padding-top:0.8rem;"></nothing>
              </div>

        </div>
    </div>

    <!--  右侧侧滑 -->
    <list-right-panel ref="listRightPanel" :panelData="rigthPanelData" :searchData="searchData"></list-right-panel>

</div>
</template>
<script>
import Calendar from './Calendar'
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Nothing from "../common/Nothing"

var count = 0;
export default {
    components:{
        'Header':Header,
        'calendar':Calendar,
        'nothing':Nothing,
        'list-right-panel':Listrightpanel,
    },
    data(){
        return {
            title:'Trip&Meeting',
            notTrip:true,   //没数据
            notMeeting:true, //没数据

            showPage:0, //list视图控制显示meeting(0)或者trip(1)

            viewType:'', //展示视图类型  calendarView, listView

            dataFilter:['mySchedule'],

             //侧滑数据模型
            rigthPanelData:[
                {
                  groupText:'View视图',
                  type:'radio',
                  default:'calendarView',
                  items:[
                      {text:'Calendar Veiw',value:'calendarView'},
                      {text:'List View',value:'listView'}
                  ]
                },
                {
                  groupText:'Data Filter 数据筛选',
                  type:'checkbox',
                  default:'mySchedule',
                  items:[
                      {text:'My Schedule',value:'mySchedule'},
                      {text:'From My Direct Team Member',value:'fromMyDirectTeamMember'},
                      {text:'From My All Team Member',value:'fromMyAllTeamMember'},
                      {text:'PR Calendar',value:'pRCalendar'},
                  ]
                },

            ],
            //侧滑搜索页面数据模型
            searchData:{},
            meetingSearch:[
                  {
                      type:'input',
                      field:'name',
                      queryType:'string',
                      text:'Organization Name 公司名称',
                      value:'',
                  },
                  {
                      type:'picker',
                      field:'cf_765',
                      queryType:'string',
                      text:'Business Sector 业务分类',
                      value:'',
                      id:Number((new Date()).valueOf()) + count++
                  },
                  {
                    type:'picker',
                    field:'cf_771',
                    queryType:'string',
                    text:'Area / Region 区域',
                    value:'',
                    id:Number((new Date()).valueOf()) + count++
                  },
                  {
                      type:'selectlist',
                      field:'related_to',
                      queryType:'string',
                      queryUrl:"Accounts/Query",
                      text:'Country 国家',
                      selectType:'radio',
                      resulteRow:false, //第二行显示结果
                      value:{
                          text:'',
                          value:''
                      }
                  },
                  {
                      type:'selectlist',
                      field:'related_to_1',
                      queryType:'string',
                      queryUrl:"Accounts/Query",
                      text:'Account Manager 客户经理',
                      selectType:'radio',
                      resulteRow:false, //第二行显示结果
                      value:{
                          text:'',
                          value:''
                      }
                  }
            ],
            tripSearch:[
                  {
                      type:'input',
                      field:'name',
                      queryType:'string',
                      text:'Name',
                      value:'',
                  },
                  {
                      type:'picker',
                      field:'cf_765',
                      queryType:'string',
                      text:'Status 状态',
                      value:'',
                      id:Number((new Date()).valueOf()) + count++
                  },
                  {
                      type:'selectlist',
                      field:'related_to_2',
                      queryType:'string',
                      queryUrl:"Accounts/Query",
                      text:'Initiator发起人',
                      selectType:'checkbox',
                      resulteRow:false, //第二行显示结果
                      value:{
                          text:'',
                          value:''
                      }
                  },
                  {
                      type:'selectlist',
                      field:'related_to_3',
                      queryType:'string',
                      queryUrl:"Accounts/Query",
                      text:'Organization公司',
                      selectType:'checkbox',
                      resulteRow:true, //第二行显示结果
                      value:{
                          text:'',
                          value:''
                      }
                  },
                  {
                      type:'picker',
                      field:'cf_765',
                      queryType:'string',
                      text:'Business Sector 业务分类',
                      value:'',
                      id:Number((new Date()).valueOf()) + count++
                  },
                  {
                    type:'picker',
                    field:'cf_771',
                    queryType:'string',
                    text:'Area / Region 区域',
                    value:'',
                    id:Number((new Date()).valueOf()) + count++
                  }
            ],

        }
    },
    mounted:function(){
        var _self = this;

        eventBus.$on('changeViewEvent',function(data){
            // if(data === '' || data === undefined) return;
            // if(data === 'listView'){
            //     $('.calendar-view').hide();
            //     $('.list-view').show();

            //     if(_self.showPage == 0){
            //         tool.InitiateGroupList('meeting',$('#meetingList'));
            //     }else{
            //         tool.InitiateGroupList('trip',$('#tripList'));
            //     }
            // }else{
            //     $('.calendar-view').show();
            //     $('.list-view').hide();
            // }
            _self.viewType = data;
        })

        _self.searchData = _self.meetingSearch;
        tool.InitiateGroupList('meeting',$('#meetingList'));

        _self.changePos();
        _self.groupToggle();
        _self.goInfoPage();
        _self.watchScroll();

    },
    methods:{
        //监听滚动固定
        watchScroll:function(){
            var _self = this;
            setTimeout(function(){
                var headerH = parseFloat($('header').innerHeight());
                var navH = parseFloat($('.nav').innerHeight());
                $(window).scroll(function(){

                    if($('.group-div').length <= 0) return ;
                    $('.group-div').each(function(){
                        if($(this).offset().top - $(window).scrollTop() <= (headerH + navH) ){

                            if(tool.getSystem() === 'ios'){
                                $(this).find('.date-div').addClass('sticky').css({"top": headerH + navH + 'px'});
                            }else{
                                $(this).find('.date-div').css({"position":"fixed","top": headerH + navH + 'px'});
                                $(this).find('.occupy-div').show();
                            }

                        }else{
                            if(tool.getSystem() === 'ios'){
                                $(this).find('.date-div').removeClass('sticky').css({"top":'0px'});
                            }else{
                                $(this).find('.date-div').css({"position":"static"});
                                $(this).find('.occupy-div').hide();
                            }
                        }

                    })
                })
            },100)
        },
        //点击去详情页
        goInfoPage:function(id){
            var _self = this;
            $("#meetingList,#tripList").on("click","div.data-events-item",function(event){
                var target = $(event.target);
                if(!target.hasClass('data-events-item')){
                    target = target.closest('div.data-events-item');
                    if(target == undefined){
                        return;
                    }
                }
                var url = target.attr('data-url') || '';
                _self.$router.push(url);
            })
        },

        //列表展开收起
        groupToggle:function(){
            $("#meetingList,#tripList").on("click","div.date-div",function(event){
                var target = $(event.target);
                if(!target.hasClass('date-div')){
                    target = target.closest('div.date-div');
                    if(target == undefined){
                        return;
                    }
                }
                if(target.hasClass('open')){
                    target.removeClass('open').siblings('.group-item-list').slideUp(500);
                }else{
                    target.addClass('open').siblings('.group-item-list').slideDown(500);
                }
            })
        },

        //切换页面
        switchPage:function(num, name, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.changePos();

            // $('.list-view .pageList').eq(num).show().siblings('.pageList').hide();
            _self.showPage = num;

            var container = null;
            var moduleName = '';
            if(_self.showPage == 0){
                _self.searchData = _self.meetingSearch;

                moduleName = 'meeting';
                container = $('#meetingList');
            }else{
                _self.searchData = _self.tripSearch;

                moduleName = 'trip';
                container = $('#tripList');
            }
            tool.InitiateGroupList(moduleName,container);
        },

        //table底部横条过渡效果
        changePos:function() {
            this.$nextTick(function(){
                var activePos = $('.nav .active-item').position();
                $('.nav-border').stop().css({
                    left: activePos.left,
                    // width: $('.nav .active-item').width()
                });
            })
        },
        setQuerycondition:function(){

        }
    },

}
</script>

<style scoped>
@import "../../assets/css/common/commonlist.css";
</style>

<style >

/* 列表 style*/
/* .data-events-item{ line-height:20px;background: #fff;padding: 5px 10px; position: relative;}
.data-events-item::after{  content: ""; display: block; height: 1px; background: beige; width: 100%;
  left: 0; top: 0; position: absolute;
}
.item-title{font-weight: 600;color:#333;}
.item-time{color:#333;}
.item-time .calc-gengxinshijian{color:#ff5a21;vertical-align: bottom;}

.trip-time-text{font-size:11px;color:#666666;}
.item-address{font-weight: 600;}
.data-events p{height: 50px;line-height: 50px;} */

</style>
