<template>
<div>
    <my-header class="header" :title="title"></my-header>

    <div class="nav">
        <div @click="switchPage(0,$event)" class="nav-item active-item">Calendar</div>
        <div @click="switchPage(1,$event)" class="nav-item" >Organizations</div>
        <div @click="switchPage(2,$event)" class="nav-item" >Cantacts</div>
        <div @click="switchPage(3,$event)" class="nav-item" >Opportunities</div>
        <div class="nav-border"></div>
    </div>

    <div class="search-box">

        <div class="swiper-container">
            <div class="swiper-wrapper">

                <div id="p1" class="swiper-slide">
                      <search-items :searchData="calendarSearchData"></search-items>
                </div>

                <div id="p2" class="swiper-slide">
                      <search-items :searchData="organizationsSearchData"></search-items>

                </div>
                <div id="p3" class="swiper-slide">
                      <search-items :searchData="cantactsSearchData"></search-items>

                </div>
                <div id="p4" class="swiper-slide">
                      <search-items :searchData="opportunitiesSearchData"></search-items>
                </div>
            </div>
        </div>

    </div>

    <div class="anniu">
        <div class="clear-btn">Clear</div>
        <div class="sure-btn">OK</div>
    </div>


</div>
</template>



<script>

require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Searchitems from '../common/Searchitems'

import Header from '../common/Header'
var count = 0;
export default {
    components: {
      swiper,
      swiperSlide,
      'my-header': Header,
      'search-items':Searchitems
    },
    data() {
        return {
            title: 'Other Search',
            swiper:null,
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
                    field:'related_to',
                    queryType:'string',
                    queryUrl:"Accounts/Query",
                    text:'Initiator发起人',
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
                    text:'Contact Name联系人名称',
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
            organizationsSearchData:[
              {
                  type:'input',
                  field:'potentialname',
                  queryType:'string',
                  text:'Organizations Name',
                  value:'',
              },
              {
                  type:'picker',
                  field:'cf_771',
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
                  value:{
                      text:'',
                      value:''
                  }
              }

            ],
            cantactsSearchData:[
                {
                    type:'input',
                    field:'name',
                    queryType:'string',
                    text:'Cantact Name',
                    value:'',
                },
                {
                    type:'input',
                    field:'Email',
                    queryType:'string',
                    text:'Cantact Email',
                    value:'',
                },
                {
                    type:'selectlist',
                    field:'related_to',
                    queryType:'string',
                    queryUrl:"Accounts/Query",
                    text:'Organization公司',
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
              },
              {
                  type:'selectlist',
                  field:'related_to',
                  queryType:'string',
                  queryUrl:"Accounts/Query",
                  text:'Country 国家',
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
                  value:{
                      text:'',
                      value:''
                  }
              }
            ],
            opportunitiesSearchData:[
              {
                  type:'input',
                  field:'name',
                  queryType:'string',
                  text:'Opportunity Name',
                  value:'',
              },
              {
                  type:'picker',
                  field:'cf_771',
                  queryType:'string',
                  text:'Latest progress 最新的流程',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'picker',
                  field:'cf_765',
                  queryType:'string',
                  text:'Priority 优先级',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'picker',
                  field:'cf_771',
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
                  value:{
                      text:'',
                      value:''
                  }
              },
              {
                  type:'datepicker',
                  field:'closingdate',
                  queryType:'string',
                  text:'Start Date Range 起始日期范围',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'datepicker',
                  field:'closingdate',
                  queryType:'string',
                  text:'Planning Closing Date Range 计划结束日期',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'selectlist',
                  field:'related_to',
                  queryType:'string',
                  queryUrl:"Accounts/Query",
                  text:'Organization公司',
                  value:{
                      text:'',
                      value:''
                  }
              },
              {
                  type:'picker',
                  field:'cf_771',
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
                  value:{
                      text:'',
                      value:''
                  }
              }
            ]
        }
    },
    mounted:function(){
        var _self = this;
        _self.swiper = new Swiper ('.swiper-container', {
          //切换结束后
          onSlideChangeEnd: function(swiper){
            // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
              $('.nav-item').each(function(index,el){
                    if(index == swiper.activeIndex){
                        $(this).addClass('active-item').siblings().removeClass('active-item');
                        _self.changePos();
                    }
              })
          }
       });

       this.changePos();

      //用当前vue中的方法初始化
      //  this.initPicker();
      //  this.initDatePicker();

      //用common中的方法初始化
      initial.initPicker();
      initial.initDatePicker();
    },
    methods:{

        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.swiper.slideTo(num, 500, false);
            _self.changePos();
        },

        //table底部横条过渡效果
        changePos:function() {
            this.$nextTick(function(){
                var activePos = $('.nav .active-item').position();
                $('.nav-border').stop().css({
                    left: activePos.left,
                    width: $('.nav .active-item').innerWidth()
                });
            })
        },

        //初始化picker
        initPicker:function(){

            $('.picker').each(function(){
                var _self = $(this);
                var filedName = _self.attr("data-field");

                //根据字段名查询数据
                var dataArray = allTypeList.QueryChildItemsByPTypeValue(filedName);
                var items = [];
                $.each(dataArray,function(index,item){
                    items.push(item.text);
                });

                _self.picker({
                            fromId:_self.attr("id")||"",
                            jqueryObj:_self,
                            toolbarCloseText:lanTool.lanContent('191_确认'),
                            toolbarCancleText:lanTool.lanContent('199_取消'),
                            cols:[
                                {
                                    textAlign:'center',
                                    values:items
                                },
                            ],
                            onOpen:function(data){
                              var valueTemp = _self.attr("data-val") || "";
                              if(valueTemp==""){
                                if(data.params != undefined && data.params.cols != undefined && data.params.cols.length>=1 && data.params.cols[0].values != undefined && data.params.cols[0].values.length>=1){
                                    valueTemp = data.params.cols[0].values[0];
                                }
                              }

                              _self.text(valueTemp);
                              _self.attr('data-val',valueTemp);
                              _self.picker("setValue", [valueTemp]);
                            },
                            onChange:function(data,value){
                                _self.text(data.value[0]||"");
                                _self.attr('data-val',data.value[0]||"");
                                _self.picker("setValue", data.value);
                            }
                        });

            });


        },

        //初始化datepicker
        initDatePicker:function(){
            var my_self = this;

                $('.datepicker').each(function(index, cur){
                    var _self = $(this);

                    var filedName = _self.attr("data-field");

                    var showMinute = _self.attr("data-minute");
                    var times = function(){
                        return [];
                    };
                    if(showMinute === 'true'){
                          times = function(){
                              return [  // 自定义的时间
                                  {
                                  values: (function () {
                                      var hours = [];
                                      for (var i=0; i<24; i++) hours.push(my_self.formatNumber(i));
                                      return hours;
                                  })()
                                  },
                                  {
                                  divider: true,  // 这是一个分隔符
                                  content: ':'
                                  },
                                  {
                                  values: (function () {
                                      var minutes = [];
                                      for (var i=0; i<60; i++) minutes.push(my_self.formatNumber(i));
                                      return minutes;
                                  })()
                                  }
                              ];
                          };
                    }

                    //写入当前选中的记录
                    var valueTemp = _self.attr("data-val") || "";

                    _self.datetimePicker({
                        fromId:_self.attr("id")||"",
                        jqueryObj:_self,
                        toolbarCloseText:lanTool.lanContent('191_确认'),
                        toolbarCancleText:lanTool.lanContent('199_取消'),
                        years:my_self.yearArray(50),
                        value:valueTemp,
                        times: times,
                        onChange:function(picker, values, displayValues){
                            var value = my_self.returndateString(picker.value);
                            _self.text(value);
                            _self.attr('data-vualu',value)
                        }
                    })
                })


        },

        formatNumber:function (n) {
            return n < 10 ? "0" + n : n;
        },

        returndateString:function(arr){
            if(arr.length<=0 ) return;
            if(arr.length == 3){
              return arr[0]+'-'+arr[1]+'-'+arr[2];
            }else if(arr.length == 5){
              return arr[0]+'-'+arr[1]+'-'+arr[2]+' '+arr[3]+':'+arr[4];
            }
        },
        //返回 从当前年份一直往后的 n 年的年份数组 n默认为10
        yearArray:function(n){
              if(n == undefined || n == null) n = 10;

              var currentYear = new Date().getFullYear();
              var arr = [];
              for(var i=0 ; i<n ; i++){
                  arr.push(currentYear + i);
              }
              return arr;
        }
    }




}
</script>

<style scoped>
@import "../../assets/css/pages/search.css";
</style>

