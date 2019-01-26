<template>
<div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">
        <div class="nav sticky">
            <div id="dealPipelineSwitchPage" @click="switchPage(0,$event)" class="nav-item f16 active-item lanText" data-lanid="820_交易" ></div>
            <div id="opportunitiesSwitchPage" @click="switchPage(1,$event)" class="nav-item f16 lanText" data-lanid="649_商业机会"></div>
            <div class="nav-border"></div>
        </div>
        <div v-show="showPage == 0" class="pageList">
              <div class="add-btn-div">
                    <div @click="addBtn" data-url="/opportunitiesinfo/-1" class="add-div" >
                        <span class="calcfont calc-add"></span>
                        <span class="add-text lanText" data-lanid="884_增加交易"></span>
                    </div>
              </div>
              <!-- 列表 -->
              <div v-show="!noData" id="dealpipelineList" data-fromtype="dealPipeline"></div>
              <nothing v-show="noData" style="padding-top:0.8rem;"></nothing>
        </div>
        <div v-show="showPage == 1" class="pageList">
              <div class="add-btn-div">
                    <div @click="addBtn" data-url="/opportunitiesinfo/-1" class="add-div" >
                        <span class="calcfont calc-add"></span>
                        <span class="add-text lanText" data-lanid="885_增加机会"></span>
                    </div>
              </div>
              <!-- 列表 -->
              <div v-show="!noData" id="opportunitiesList" data-fromtype="opportunities"></div>
              <nothing v-show="noData" style="padding-top:0.8rem;"></nothing>
        </div>
    </div>
    <!--  右侧侧滑 -->
    <list-right-panel :panelData="rigthPanelData" :searchData="searchData"></list-right-panel>

</div>
</template>

<script>
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Nothing from "../common/Nothing"

var count = 0;
export default {
    components:{
        'Header':Header,
        'list-right-panel':Listrightpanel,
        'nothing':Nothing
    },
    data(){
        return {
            title:'Business',
            showPage: 0,
            noData: true, //没数据
            queryCondiction:[],//右侧checkbox条件
            queryCondictionData:[],//综合查询条件
            isFirstEnter:false,//是否首次进入

            //侧滑数据模型
            rigthPanelData:[
                {
                  groupText: lanTool.lanContent("794_数据筛选"),
                  groupName:'dataFilter',
                  type: "radio",
                  default: "allData",
                  items:[
                      {
                        text: lanTool.lanContent("795_全部"),
                        queryfield: "allData",
                        queryType: "string",
                        queryFormat: "",
                        queryRelation: "and",
                        queryValue: "",
                        queryComparison: "="
                      },
                      {
                        text: '我关注的数据',
                        queryfield: "MyFollowData",
                        queryType: "string",
                        queryFormat: "",
                        queryRelation: "and",
                        queryValue: "",
                        queryComparison: "="
                      },
                      {
                        text: '进行中的',
                        queryfield: "InProcess",
                        queryType: "string",
                        queryFormat: "",
                        queryRelation: "and",
                        queryValue: "",
                        queryComparison: "="
                      }
                  ]
                },
            ],
            //侧滑搜索页面数据模型
            searchData:{},
            dealPipelineSearch:[
                  {
                      queryfield: "name",
                      text: '名称',
                      fieldControlType: "textareaInput",
                      queryType: "string",
                      queryFormat: "",
                      queryRelation: "and",
                      queryValue: "",
                      queryComparison: "like"
                  },
                  {
                      type:'picker',
                      field:'cf_765',
                      queryType:'string',
                      text:lanTool.lanContent("860_状态"),
                      value:'',
                      id:Number((new Date()).valueOf()) + count++
                  },
                  {
                      queryfield: "related_to",
                      text:lanTool.lanContent('711_发起人'),
                      fieldControlType: "selectList",
                      queryType: "string",
                      queryFormat: "",
                      queryRelation: "and",
                      queryValue: "",
                      queryComparison: "=",
                      Code: "DropDowList_ViewBaseCompanyBaseInf",
                      TypeValue: "",
                      selectType: "radio",
                      resulteRow: true,
                      clickObj: "CompanyIDClickObj",
                      datalanid: "711_发起人"
                  },
                  {
                      queryfield: "CompanyID",
                      text:lanTool.lanContent('726_公司名称'),
                      fieldControlType: "selectList",
                      queryType: "string",
                      queryFormat: "",
                      queryRelation: "and",
                      queryValue: "",
                      queryComparison: "=",
                      Code: "DropDowList_ViewBaseCompanyBaseInf",
                      TypeValue: "",
                      selectType: "radio",
                      resulteRow: true,
                      clickObj: "CompanyIDClickObj",
                      datalanid: "726_公司名称"
                  },
                  {
                      queryfield: "BusinessType",
                      text: lanTool.lanContent("695_业务分类"),
                      fieldControlType: "picker",
                      queryType: "string",
                      queryFormat: "",
                      queryRelation: "and",
                      queryValue: "",
                      queryComparison: "=",
                      Code: "DropDowList_ViewBaseAllTypes",
                      TypeValue: "Companybusinesstype",
                      datalanid: "695_业务分类"
                  },
                  {
                      queryfield: "CityID",
                      text: lanTool.lanContent("702_城市"),
                      fieldControlType: "selectList",
                      queryType: "string",
                      queryFormat: "",
                      queryRelation: "and",
                      queryValue: "",
                      queryComparison: "=",
                      Code: "DropDowList_ViewBaseCountryCity",
                      TypeValue: "",
                      selectType: "radio",
                      resulteRow: true,
                      clickObj: "CountryIDClickObj",
                      datalanid: "702_城市"
                },
                {
                    queryfield: "CountryID",
                    text: lanTool.lanContent("701_国家"),
                    fieldControlType: "selectList",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "DropDowList_ViewBaseCountryInf",
                    TypeValue: "",
                    selectType: "radio",
                    resulteRow: true,
                    clickObj: "CountryIDClickObj",
                    datalanid: "701_国家"
                },
                {
                    type:'selectlist',
                    field:'related_to',
                    queryType:'string',
                    queryUrl:"Accounts/Query",
                    text:'Created by 创建者',
                    selectType:'radio',
                    value:{
                        text:'',
                        value:''
                    }
                }
            ],
            opportunitiesSearch:[
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
                      text:lanTool.lanContent("860_状态"),
                      value:'',
                      id:Number((new Date()).valueOf()) + count++
                  },
                  {
                      type:'selectlist',
                      field:'related_to',
                      queryType:'string',
                      queryUrl:"Accounts/Query",
                      text:lanTool.lanContent('711_发起人'),
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
                      text:lanTool.lanContent('726_公司名称'),
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
                      text:lanTool.lanContent("695_业务分类"),
                      value:'',
                      id:Number((new Date()).valueOf()) + count++
                  },
                  {
                    type:'picker',
                    field:'cf_771',
                    queryType:'string',
                    text:lanTool.lanContent('869_区域'),
                    value:'',
                    id:Number((new Date()).valueOf()) + count++
                  }
            ]
        }
    },
    beforeRouteEnter: function (to, from, next) {
        if (from.name == "opportunitiesinfo" || from.name == "searchmodule") {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },
    beforeRouteLeave:function(to, from, next){
        if(to.name == 'index'){
            this.$destroy();
        }
        next();
    },
    created:function(){
      this.isFirstEnter = true;
    },
    mounted:function(){
    },
    activated:function(){
        var _self = this;
        lanTool.updateLanVersion();
        _self.changePos();
        _self.watchScroll();
        _self.groupToggle();
        _self.followToggle();

        // _self.queryCondictionData = eventBus.queryCondictionData || [];
        // eventBus.queryCondictionData = null;
        if(eventBus.queryCondictionData != null && eventBus.queryCondictionData != undefined){
            if(this.$route.meta.fromSave){
                _self.queryCondictionData = [];
            }else{
                _self.queryCondictionData = eventBus.queryCondictionData;
                eventBus.queryCondictionData = null;
            }
        }

        //获取是否是从搜索页面点击确定按钮返回来的标志
        var fromSearchBtn = eventBus.fromSearchBtn || false;
        eventBus.fromSearchBtn = false;

        var _fromSave = _self.$route.meta.fromSave;
        var _isBack = _self.$route.meta.isBack;

        //若为true,则需要刷新
        if(_fromSave || !_isBack || _self.isFirstEnter ){
            _self.isFirstEnter = false;
            _self.searchData = _self.dealPipelineSearch;

            if(_self.showPage == 0){
                $("#dealPipelineSwitchPage").trigger("click");
            }else{
                $("#opportunitiesSwitchPage").trigger("click");
            }


        }else{
           _self.isFirstEnter = false;
          //若为false,则不需要刷新,  若从搜索页面点击确定搜索按钮返回则从新请求列表数据
              if(fromSearchBtn){
                  _self.RefreshCurPageGroupData();
              }
        }

        _self.$route.meta.fromSave = false;
        _self.$route.meta.isBack = false;


    },
    methods:{
        setQuerycondition:function(data){
          var _self = this;
          _self.queryCondiction = data;
          // console.log(_self.queryCondiction);
          //执行监听的这个动作
          _self.RefreshCurPageGroupData();
        },
        setQueryconditionOnlyData:function(data){
          var _self = this;
          _self.queryCondiction = data;
        },
        //监听滚动固定
        watchScroll:function(){
            var _self = this;
            setTimeout(function(){
                var headerH = parseFloat($('header').innerHeight());
                var navH = parseFloat($('.nav').innerHeight());

                // $(this).offset().top 元素到document顶部的距离
                // $(document).scrollTop() || $(window).scrollTop(); 滚动条滚动的距离

                $(window).unbind('scroll').bind('scroll',function(){

                    if($('.group-div').length <= 0) return ;
                    var scrollTop = $(document).scrollTop() || $(window).scrollTop();

                    $('.group-div').each(function(){
                        if($(this).offset().top - scrollTop <= (headerH + navH) ){

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
        //列表展开收起
        groupToggle:function(){
            // $("#dealpipelineList,#opportunitiesList").on(
            //   "click",
            //   "div.date-div",
            //   function(event){
            //     var target = $(event.target);
            //     if(!target.hasClass('date-div')){
            //         target = target.closest('div.date-div');
            //         if(target == undefined){
            //             return;
            //         }
            //     }
            //     var fromType = target.parents("div[data-fromtype]").attr("data-fromtype") || "";
            //     var groupID = target.find("span[data-groupid]:first").attr("data-groupid") || "";

            //     if (tool.isNullOrEmptyObject(groupID)) {
            //       return;
            //     }

            //     //若是展开
            //     if (target.hasClass("open")) {
            //         target
            //         .removeClass("open")
            //         .siblings(".group-item-list")
            //         .slideUp(500,function(){
            //             var parentContainerObj = target.parents("div.group-div:first");
            //             if (tool.isNullOrEmptyObject(parentContainerObj)) {
            //               return;
            //             }
            //             //清空容器内容
            //             parentContainerObj.find("div.occupy-div,div.group-item-list").remove();
            //         });
            //     }else {
            //       //若是收起
            //       var allQueryData = tool.combineArray(_self.queryCondictionData,_self.queryCondiction,"Field");
            //       tool.InitiateInnerDataList(fromType, groupID, target, allQueryData,function(containerObj) {
            //             containerObj
            //             .addClass("open")
            //             .siblings(".group-item-list")
            //             .slideDown(500);

            //             //点击去详情页
            //             $("div.item-block").on('click',
            //               function(event) {
            //                 var target = $(event.target);
            //                 if(target.hasClass("item-stars-icon")){
            //                   return;
            //                 }
            //                 if (!target.hasClass("group-item")) {
            //                   target = target.closest("div.group-item");
            //                   if (tool.isNullOrEmptyObject(target)) {
            //                     return;
            //                   }
            //                 }
            //                 // _self.showPage

            //                 var url = target.attr("data-url") || "";
            //                 if(tool.isNullOrEmptyObject(url)){
            //                   return;
            //                 }
            //                 var parameter = {
            //                     showPage : _self.showPage,
            //                 };
            //                 _self.$router.push({
            //                     path:url,
            //                     query: parameter
            //                 });
            //               }
            //             );
            //       });
            //     }
            // })


             var _self = this;
            $("#dealpipelineList,#opportunitiesList").off("click", "div.date-div").on(
                "click",
                "div.date-div",
                function (event) {
                    var target = $(event.target);

                    if (!target.hasClass('date-div')) {
                        target = target.parents("div.date-div:first");
                        if (tool.isNullOrEmptyObject(target)) {
                            return;
                        }
                    }
                    var fromType = target.parents("div[data-fromtype]").attr("data-fromtype") || "";
                    var groupID = target.find("span[data-groupid]:first").attr("data-groupid") || "";
                    console.log(fromType);
                    if (tool.isNullOrEmptyObject(groupID)) {
                        return;
                    }

                    //若是展开
                    if (target.hasClass("open")) {
                        target
                            .removeClass("open")
                            .siblings(".group-item-list")
                            .slideUp(500, function () {
                                var parentContainerObj = target.parents("div.group-div:first");
                                if (tool.isNullOrEmptyObject(parentContainerObj)) {
                                    return;
                                }
                                //清空容器内容
                                parentContainerObj.find("div.group-item-list").remove();
                            });
                    } else {
                        //若是收起
                        var allQueryData = tool.combineArray(_self.queryCondictionData, _self.queryCondiction, "Field");
                        tool.InitiateInnerDataList(fromType, groupID, target, allQueryData, function (containerObj) {
                                containerObj
                                .addClass("open")
                                .siblings(".group-item-list")
                                .slideDown(500);

                                //点击去详情页
                                $("div.item-block").off('click').on('click',function(event) {
                                    var target = $(event.target);
                                    if(target.hasClass("item-stars-icon")){
                                        return;
                                    }
                                    if (!target.hasClass("group-item")) {
                                        target = target.closest("div.group-item");
                                        if (tool.isNullOrEmptyObject(target)) {
                                        return;
                                        }
                                    }
                                    // _self.showPage

                                    var url = target.attr("data-url") || "";
                                    if(tool.isNullOrEmptyObject(url)){
                                        return;
                                    }
                                    var parameter = {
                                        showPage : _self.showPage
                                    };
                                        _self.$router.push({
                                            path:url,
                                            query: parameter
                                        });
                                    }
                                );
                        });
                    }
                }
            );

        },
        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el)
              .addClass("active-item")
              .siblings()
              .removeClass("active-item");
            _self.changePos();
            _self.showPage = num;

            var container = null;
            var fromType = "";
            if(num == 0){
                _self.searchData = _self.dealPipelineSearch;

                fromType = 'dealPipeline';
                container = $('#dealpipelineList');
            }else{
                _self.searchData = _self.opportunitiesSearch;

                fromType = 'opportunities';
                container = $('#opportunitiesList');
            }
            //渲染数据
            var allQueryData = tool.combineArray(_self.queryCondictionData,_self.queryCondiction,"Field");
            tool.InitiateGroupList(fromType, container,allQueryData, function(containerObj) {
              if (tool.isNullOrEmptyObject(containerObj)) {
                _self.noData = true;
                return;
              }
              if (!containerObj.html()) {
                _self.noData = true;
              } else {
                _self.noData = false;
              }
            });
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
        //点击关注/取消关注
        followToggle:function(){
            var _self = this;

            $("#dealpipelineList,#opportunitiesList").on("click",".item-stars-icon",function(e){
                e.preventDefault();
                e.stopPropagation();

                var target = $(e.target);
                var _curObj = $(this);
                var fromType = target.parents("div[data-fromtype]").attr("data-fromtype") || "";
                var autoID = _curObj.attr("data-autoid") || "";
                var actionType;
                if(_curObj.hasClass("calc-shoucang"))
                {
                  //取消关注
                  actionType = 0;
                }else{
                  //添加关注
                  actionType = 1;
                }

                tool.UserFollow(fromType,autoID,actionType,function(){
                    if(_curObj.hasClass("calc-shoucang"))
                    {
                      //取消关注
                      _curObj.removeClass("calc-shoucang").addClass("calc-noshoucang");
                    }else{
                      //添加关注
                      _curObj.removeClass("calc-noshoucang").addClass("calc-shoucang");
                    }
                });
            })
        },
        //刷新当前激活的page的分组数据
        RefreshCurPageGroupData : function(){
          var _self = this;
          var num = _self.showPage;
          var container = null;
          var fromType = "";
          if (num == 0) {
            _self.searchData = _self.dealPipelineSearch;

            fromType = "dealPipeline";
            container = $("#dealpipelineList");
          } else {
            _self.searchData = _self.opportunitiesSearch;
            fromType = "opportunities";
            container = $("#opportunitiesList");
          }

          //渲染数据
          var allQueryData = tool.combineArray(_self.queryCondictionData,_self.queryCondiction,"Field");
          tool.InitiateGroupList(fromType, container,allQueryData, function(containerObj) {
            if (tool.isNullOrEmptyObject(containerObj)) {
              _self.noData = true;
              return;
            }
            if (!containerObj.html()) {
              _self.noData = true;
            } else {
              _self.noData = false;
            }
          });
        },
        //点击添加按钮跳转
        addBtn:function(e){
            var _self = this;
            var target =  $(e.target);
            if (!target.hasClass('add-div')) {
                target = target.parents("div.add-div:first");
                if (tool.isNullOrEmptyObject(target)) {
                    return;
                }
            }
            var urlTemp = target.attr('data-url')||'';
            if(tool.isNullOrEmptyObject(urlTemp)){
                return;
            }
            var parameter = {
                showPage : _self.showPage
            };
            _self.$router.push({
                path:urlTemp,
                query: parameter
            });
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/common/commonlist.css";
</style>


