<template>
<div>
    <Header class="header" :title="title"></Header>

    <div id="page-content" class="page-content">

        <calendar v-show="selectView === 'calendar'"></calendar>

        <div v-show="selectView === 'list'" class="list-view">

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
var count = 0;
export default {
    components:{
        'Header':Header,
        'calendar':Calendar
    },
    data(){
        return {
            title:'Trip&Meeting',
            showPanel:false,

            selectView:'calendar',
            dataFilter:['my-calendar'],
            //搜索页面数据模型
            calendarSearchData:[
                {
                    type:'input',
                    field:'potentialname',
                    queryType:'string',
                    text:'Title标题',
                    value:'',
                },
                {
                    type:'selectlist',
                    field:'contact_id',
                    queryType:'string',
                    queryUrl:"Contacts/Query",
                    text:'Initiator发起人',
                    selectType:'radio',
                    value:{
                        text:'',
                        value:''
                    }
                },
                {
                    type:'picker',
                    field:'cf_765',
                    queryType:'string',
                    text:'Meeting nature会议性质',
                    value:'',
                    id: Number((new Date()).valueOf()) + count++
                },
                {
                    type:'picker',
                    field:'cf_763',
                    queryType:'string',
                    text:'Meeting type会议类型',
                    value:'',
                    id:Number((new Date()).valueOf()) + count++
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
                    type:'selectlist',
                    field:'assigned_user_id',
                    queryType:'string',
                    queryUrl:"Users/Query",
                    text:'Contact Name联系人名称',
                    selectType:'checkbox',
                    resulteRow:true, //第二行显示结果
                    value:{
                        text:'',
                        value:''
                    }
                },
                {
                    type:'picker',
                    field:'cf_771',
                    queryType:'string',
                    text:'Opportunity 商业机会',
                    value:'',
                    id:Number((new Date()).valueOf()) + count++
                },
                {
                    type:'picker',
                    field:'cf_769',
                    queryType:'string',
                    text:'Priority',
                    value:'',
                    id:Number((new Date()).valueOf()) + count++
                },
                {
                    type:'datepicker',
                    field:'closingdate',
                    queryType:'string',
                    text:'Time Range',
                    value:'',
                    id:Number((new Date()).valueOf()) + count++
                }
            ],
        }
    },
    mounted:function(){

        eventBus.$on('showRightPanelEvent',this.panelToggle);
    },
    methods:{
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
                'dataModule':_self.calendarSearchData
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
@import "../../assets/css/pages/tripmeeting.css";
@import "../../assets/css/common/list-right-style.css";
</style>
