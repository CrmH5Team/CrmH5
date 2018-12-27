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
                    value:'一般性讨论'
                },
                {
                    type:'picker',
                    field:'cf_763',
                    queryType:'string',
                    text:'Meeting type会议类型',
                    value:''
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
                    value:''
                },
                {
                    type:'picker',
                    field:'cf_769',
                    queryType:'string',
                    text:'Priority',
                    value:''
                },
                {
                    type:'datepicker',
                    field:'closingdate',
                    queryType:'string',
                    text:'Time Range',
                    value:'2018-12-26'
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
                  field:'cf_765999',
                  queryType:'string',
                  text:'Business Sector 业务分类',
                  value:''
              },
              {
                  type:'picker',
                  field:'789',
                  queryType:'string',
                  text:'Area / Region 区域',
                  value:''
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
                    field:'cf_765999',
                    queryType:'string',
                    text:'Business Sector 业务分类',
                    value:''
                },
                {
                  type:'picker',
                  field:'789',
                  queryType:'string',
                  text:'Area / Region 区域',
                  value:''
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
                  field:'cf_76978',
                  queryType:'string',
                  text:'Latest progress 最新的流程',
                  value:''
              },
              {
                  type:'picker',
                  field:'cf_76',
                  queryType:'string',
                  text:'Priority 优先级',
                  value:''
              },
              {
                  type:'picker',
                  field:'cf_769',
                  queryType:'string',
                  text:'Status 状态',
                  value:''
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
                  value:''
              },
              {
                  type:'datepicker',
                  field:'closingdate',
                  queryType:'string',
                  text:'Planning Closing Date Range 计划结束日期',
                  value:''
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
                  field:'cf_765999',
                  queryType:'string',
                  text:'Business Sector 业务分类',
                  value:''
              },
              {
                type:'picker',
                field:'789',
                queryType:'string',
                text:'Area / Region 区域',
                value:''
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

       this.initPicker();
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


        changePos:function() {
            this.$nextTick(function(){
                var activePos = $('.nav .active-item').position();
                $('.nav-border').stop().css({
                    left: activePos.left,
                    width: $('.nav .active-item').innerWidth()
                });
            })
        }
        ,

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


        }
    }




}
</script>

<style scoped>
@import "../../assets/css/pages/search.css";
</style>

