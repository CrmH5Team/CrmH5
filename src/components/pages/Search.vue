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

                <div id="page0" class="swiper-slide">
                      <search-items :searchData="calendarSearchData"></search-items>
                </div>

                <div id="page1" class="swiper-slide">
                      <search-items :searchData="organizationsSearchData"></search-items>

                </div>
                <div id="page2" class="swiper-slide">
                      <search-items :searchData="cantactsSearchData"></search-items>

                </div>
                <div id="page3" class="swiper-slide">
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
import eventBus from '../common/Event';
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
            currentPage: 0,//当前显示第几页
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
                  selectType:'checkbox',
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
                    selectType:'checkbox',
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
                  selectType:'checkbox',
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
                  selectType:'radio',
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
                  selectType:'checkbox',
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
                  selectType:'radio',
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
                        _self.currentPage = index;
                    }
              })
          }
       });

      this.changePos();

      //用common中的方法初始化
      initial.initPicker();
      initial.initDatePicker();


    },
    activated:function(){

        this.handleSelectlist();
    },
    methods:{

        //处理从selectlist返回来的值
        handleSelectlist:function(){
            var _self = this;
            var sData = eventBus.selectListData;
                if(!tool.isNullOrEmptyObject(sData)){

                    var el = $('#page'+_self.currentPage).find('.selectList[data-field="'+ sData.field +'"]');
                    var valueDiv = el.closest('.item-row-flex').next();
                    valueDiv.html('');

                    $.each(sData.value,function(index,item){
                        valueDiv.append('<span style="display:inline-block;padding:0 5px 5px 0;" data-value='+ item.value +'>'+ item.text +'</span>');
                    })
                    eventBus.selectListData = null;
                }
        },

        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.swiper.slideTo(num, 500, false);
            _self.changePos();
            _self.currentPage = num;
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
        }

    }




}
</script>

<style scoped>
@import "../../assets/css/pages/search.css";
</style>

