<template>
<div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">


          <!-- calendar视图 -->
        <calendar v-show="selectView === 'calendarVeiw'"></calendar>


          <!-- list 视图 -->
        <div v-show="selectView === 'listView'" class="list-view">
              <div class="nav sticky">
                  <div @click="switchPage(0,$event)" class="nav-item f16 active-item">Meeting</div>
                  <div @click="switchPage(1,$event)" class="nav-item f16" >Trip</div>
                  <div class="nav-border"></div>
              </div>

              <div v-show="showPage == 0" class="pageList">
                    <div class="add-btn-div">
                          <div class="add-div" @click="goInfoPage()">
                              <span class="calcfont calc-add"></span>
                              <span class="add-text">And Meeting</span>
                          </div>
                    </div>
                    <!-- 列表 -->
                    <common-list :groupData="groupData" id="meeting">
                          <div slot="meeting" class="data-events-item f12" @click="goInfoPage(45)">
                                <div class="item-title">Meeting with Eastern Airlines</div>
                                <div class="item-time f12">
                                    <span class="calcfont calc-gengxinshijian"></span>
                                    <span class="time-text">14:30-17:00</span>
                                    <!-- <span class="right">Cheryl Xiong</span> -->
                                </div>
                                <div class="item-address">China Eastern Airlines</div>
                                <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                          </div>
                          <div slot="meeting" class="data-events-item f12" @click="goInfoPage(45)">
                                <div class="item-title">Meeting with Eastern Airlines</div>
                                <div class="item-time f12">
                                    <span class="calcfont calc-gengxinshijian"></span>
                                    <span class="time-text">14:30-17:00</span>
                                    <!-- <span class="right">Cheryl Xiong</span> -->
                                </div>
                                <div class="item-address">China Eastern Airlines</div>
                                <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                          </div>
                          <div slot="meeting" class="data-events-item f12" @click="goInfoPage(45)">
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
                          <div class="add-div" @click="goInfoPage()">
                              <span class="calcfont calc-add"></span>
                              <span class="add-text">And Trip</span>
                          </div>
                    </div>
                    <!-- 列表 -->
                    <common-list :groupData="groupData"  id="trip">
                          <div slot="trip" class="data-events-item f12" @click="goInfoPage(1)">
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
                          <div slot="trip" class="data-events-item f12" @click="goInfoPage(1)">
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
                          <div slot="trip" class="data-events-item f12" @click="goInfoPage(1)">
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
    <list-right-panel ref="listRightPanel" :panelData="rigthPanelData" :searchData="tripMeetingSearchData"></list-right-panel>

</div>
</template>
<script>
import Calendar from './Calendar'
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Commonlist from '../common/Commonlist'
var count = 0;
export default {
    components:{
        'Header':Header,
        'calendar':Calendar,
        'common-list':Commonlist,
        'list-right-panel':Listrightpanel,
    },
    data(){
        return {
            title:'Trip&Meeting',
            showPanel:false,

            showPage:0, //list视图控制显示meeting(0)或者trip(1)

            selectView:'calendarVeiw',
            dataFilter:['mySchedule'],

             //侧滑数据模型
            rigthPanelData:[
                {
                  groupText:'View视图',
                  type:'radio',
                  default:'calendarVeiw',
                  items:[
                      {text:'Calendar Veiw',value:'calendarVeiw'},
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
        var _self = this;
        _self.changePos();
        eventBus.$on('changeViewEvent',function(data){
            _self.selectView = data;
        })
    },
    methods:{
        //点击去详情页
        goInfoPage:function(id){
            var _self = this,
                url = "";
            if(id === undefined){
              id = '';
            }

            if(_self.showPage == 0){
                url = '/meetinginfo/{"AutoID":"'+ id +'"}';
            }else{
                url = '/tripinfo/{"AutoID":"'+ id +'"}';
            }
              _self.$router.push(url);
        },

        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.changePos();
            _self.showPage = num;
        },

        //table底部横条过渡效果
        changePos:function() {
            this.$nextTick(function(){
                var activePos = $('.nav .active-item').position();
                $('.nav-border').stop().css({
                    left: activePos.left,
                    width: $('.nav .active-item').width()
                });
            })
        },
    },

}
</script>

<style scoped>
@import "../../assets/css/common/commonlist.css";



/* 列表 style*/
.data-events-item{
  line-height:20px;background: #fff;padding: 5px 10px;
  position: relative;
}
.data-events-item::after{
  content: "";
  display: block;
  height: 1px;
  background: #e5f0f4;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
}

.item-title{font-weight: 600;color:#333;}
.item-time{color:#333;}
.item-time .calc-gengxinshijian{color:#ff5a21;vertical-align: bottom;}
.time-text{/*vertical-align: middle;*/}
.trip-time-text{font-size:11px;color:#666666;}
.item-address{font-weight: 600;}
.data-events p{height: 50px;line-height: 50px;}

</style>
