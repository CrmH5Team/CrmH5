<template>
<div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">


          <!-- calendar视图 -->
        <calendar v-show="selectView === 'calendar'"></calendar>


          <!-- list 视图 -->
        <div v-show="selectView === 'list'" class="list-view">

              <div class="nav sticky">
                  <div @click="switchPage(0,$event)" class="nav-item f16 active-item">Meeting</div>
                  <div @click="switchPage(1,$event)" class="nav-item f16" >Trip</div>
                  <div class="nav-border"></div>
              </div>

              <div v-show="showPage == 0" class="pageList">
                    <div class="add-btn-div">
                          <div class="add-div">
                              <span class="calcfont calc-add"></span>
                              <span class="add-text">And Meeting</span>
                          </div>
                    </div>
                    <!-- 列表 -->
                    <common-list :groupData="groupData">
                          <div class="data-events-item f12">
                                <div class="item-title">Meeting with Eastern Airlines</div>
                                <div class="item-time f12">
                                    <span class="calcfont calc-gengxinshijian"></span>
                                    <span class="time-text">14:30-17:00</span>
                                    <!-- <span class="right">Cheryl Xiong</span> -->
                                </div>
                                <div class="item-address">China Eastern Airlines</div>
                                <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                          </div>
                          <div class="data-events-item f12">
                                <div class="item-title">Meeting with Eastern Airlines</div>
                                <div class="item-time f12">
                                    <span class="calcfont calc-gengxinshijian"></span>
                                    <span class="time-text">14:30-17:00</span>
                                    <!-- <span class="right">Cheryl Xiong</span> -->
                                </div>
                                <div class="item-address">China Eastern Airlines</div>
                                <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                          </div>
                          <div class="data-events-item f12">
                                <div class="item-title">Meeting with Eastern Airlines</div>
                                <div class="item-time f12">
                                    <span class="calcfont calc-gengxinshijian"></span>
                                    <span class="time-text">14:30-17:00</span>
                                    <!-- <span class="right">Cheryl Xiong</span> -->
                                </div>
                                <div class="item-address">China Eastern Airlines</div>
                                <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                          </div>
                    </common-list>
              </div>

              <div v-show="showPage == 1" class="pageList">
                    <div class="add-btn-div">
                          <div class="add-div">
                              <span class="calcfont calc-add"></span>
                              <span class="add-text">And Trip</span>
                          </div>
                    </div>
                    <!-- 列表 -->
                    <common-list :groupData="groupData">
                          <div class="data-events-item f12">
                                <div class="item-title">
                                    <span>1115-1116东航会议出差上海</span>
                                    <span class="right">审批已通过</span>
                                </div>
                                <div class="item-time f12">
                                    <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                                </div>
                                <div class="item-div">香港 - 上海（MU726   31/Dec 07:40 - 31/Dec 09:30）</div>
                                <div class="item-div">上海 - 香港（HX235   4/Jan 09:10 - 4/Jan 11:55）</div>
                                <div class="item-div">31/Dec - 04/Jan  4晚  上海</div>
                          </div>
                          <div class="data-events-item f12">
                                <div class="item-title">
                                    <span>1115-1116东航会议出差上海</span>
                                    <span class="right">审批已通过</span>
                                </div>
                                <div class="item-time f12">
                                    <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                                </div>
                                <div class="item-div">香港 - 上海（MU726   31/Dec 07:40 - 31/Dec 09:30）</div>
                                <div class="item-div">上海 - 香港（HX235   4/Jan 09:10 - 4/Jan 11:55）</div>
                                <div class="item-div">31/Dec - 04/Jan  4晚  上海</div>
                          </div>
                          <div class="data-events-item f12">
                                <div class="item-title">
                                    <span>1115-1116东航会议出差上海</span>
                                    <span class="right">审批已通过</span>
                                </div>
                                <div class="item-time f12">
                                    <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                                </div>
                                <div class="item-div">香港 - 上海（MU726   31/Dec 07:40 - 31/Dec 09:30）</div>
                                <div class="item-div">上海 - 香港（HX235   4/Jan 09:10 - 4/Jan 11:55）</div>
                                <div class="item-div">31/Dec - 04/Jan  4晚  上海</div>
                          </div>
                    </common-list>
              </div>

        </div>
    </div>

    <!--  右侧侧滑 -->
    <div id="mask" class="mask" @click="panelToggle" v-show="showPanel"></div>
    <div id="right-content" class="right-content">
        <div class="right-content-block">
            <div class="right-block-title">View视图</div>
            <div class="right-block-items">
                <div class="radios-div" >
                      <label class="radios-label">
                          <input type="radio" name="view" value="calendar" v-model="selectView"/><i class="radios"></i><span>Calendar View 日历视图</span>
                      </label>
                </div>
                <div class="radios-div">
                      <label class="radios-label">
                          <input type="radio" name="view" value="list" v-model="selectView"/><i class="radios"></i> <span>List View 列表视图</span>
                      </label>
                </div>
            </div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title">Data Filter 数据筛选</div>
            <div class="right-block-items">
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="my-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>My Schedule</span>
                      </label>
                </div>

                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="visiable-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>From My Direct Team Member</span>
                      </label>
                </div>
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="from-my-all" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>From My All Team Member</span>
                      </label>
                </div>
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="pr-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>PR Calendar</span>
                      </label>
                </div>
            </div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title">Other 其他</div>
            <div class="right-block-items">
                <div class="other-search" id="OtherSearchBtn" @click="goSearchPage">
                    <span class="other-search-icon mui-icon calcfont calc-sousuo"></span>
                    <label class="other-search-label">Search</label>
                </div>
            </div>
        </div>

        <div @click="okBtn" class="btn-div f16">OK确认</div>
    </div>

</div>
</template>
<script>
import Calendar from './Calendar'
import Header from '../common/Listheader'
import Commonlist from '../common/Commonlist'
var count = 0;
export default {
    components:{
        'Header':Header,
        'calendar':Calendar,
        'common-list':Commonlist
    },
    data(){
        return {
            title:'Trip&Meeting',
            showPanel:false,

            showPage:0, //list视图控制显示meeting(0)或者trip(1)

            selectView:'list',
            dataFilter:['my-calendar'],
            
            //侧滑搜索页面数据模型
            tripMeetingSearchData:[
                {
                    module:'Meeting',
                    searchItems:[
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
                              value:{
                                  text:'',
                                  value:''
                              }
                          },
                          {
                              type:'selectlist',
                              field:'related_to',
                              queryType:'string',
                              queryUrl:"Accounts/Query",
                              text:'Account Manager 客户经理',
                              selectType:'radio',
                              value:{
                                  text:'',
                                  value:''
                              }
                          }
                    ]
                },
                {
                    module:'Trip',
                    searchItems:[
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
                              field:'related_to',
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
                              field:'related_to',
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
                    ]
                }
            ],

            // 列表数据
            groupData:[
                {
                  groupName:'Alirline',
                  count:3,
                  iconClass:'calc-rili1',//calc-lianxiren1
                  items:[]
                },
                {
                  groupName:'Alirline123',
                  count:3,
                  iconClass:'calc-rili1',//calc-lianxiren1
                  items:[]
                },
                {
                  groupName:'Alirline111',
                  count:3,
                  iconClass:'calc-rili1',//calc-lianxiren1
                  items:[]
                },
            ],
        }
    },
    mounted:function(){

        eventBus.$on('showRightPanelEvent',this.panelToggle);

        // this.changePos();
    },
    methods:{
        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item'); 
            // _self.changePos();
            _self.showPage = num;
        },
        //table底部横条过渡效果
        changePos:function() {
            this.$nextTick(function(){
                var activePos = $('#nav .active-item').position();
                $('.nav-border').stop().css({
                    left: activePos.left,
                    width: $('#nav .active-item').width()
                });
            })
        },

        //侧滑
        panelToggle:function(){
          var _self = this;
            _self.showPanel = !_self.showPanel;
            if(_self.showPanel){

              _self.$nextTick(function(){
                  $('#right-content').css({
                      'left':'30%',
                      'transition':'left 0.1s ease-out',
                      '-moz-transition': 'left 0.1s ease-out',
                      '-webkit-transition':'left 0.1s ease-out',
                      '-o-transition': 'left 0.1s ease-out'
                  })
                  $('#mask,#right-content').on("touchmove", function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                  });
              })
            }else{
              _self.$nextTick(function(){
                  $('#right-content').css({
                      'left':'100%',
                      'transition':'left 0.3s ease-out',
                      '-moz-transition': 'left 0.3s ease-out',
                      '-webkit-transition':'left 0.3s ease-out',
                      '-o-transition': 'left 0.3s ease-out'
                  });
              })
            }

        },

        //点击侧滑中的search
        goSearchPage:function(){
            var _self = this;
            var parameter = {
                'selectView':_self.selectView,
                'dataFilter':_self.dataFilter,
                'dataModule':_self.tripMeetingSearchData
            }
            _self.$router.push({
                  path: '/searchmodule',
                  query: parameter
            })
        },

        //点击侧滑中的确定按钮
        okBtn:function(){
            var _self = this;
            if(_self.dataFilter.length <=0){
                  $.alert("数据筛选必须选一个", "提示", function() {},'好的');
                  return false;
            }
        },

    },
    beforeDestroy:function(){
        eventBus.$off('showRightPanelEvent');
    },

}
</script>

<style scoped>
/* @import "../../assets/css/pages/tripmeeting.css"; */
@import "../../assets/css/common/commonlist.css";
@import "../../assets/css/common/list-right-style.css";


/* 列表 style*/
.data-events-item{border-bottom: 1px solid #ccc;line-height:20px;background: #fff;padding: 5px 10px;}
.item-title{font-weight: 600;color:#333;}
.item-time{color:#333;}
.item-time .calc-gengxinshijian{color:#ff5a21;}
.time-text{vertical-align: middle;}
.trip-time-text{font-size:11px;color:#666666;}
.item-address{font-weight: 600;}
.data-events p{height: 50px;line-height: 50px;}

</style>
