<template>
<div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">
        <div class="nav sticky">
            <div id="dealPipelineSwitchPage" @click="switchPage(0,$event)" class="nav-item f16 active-item lanText" data-lanid="820_交易"></div>
            <div id="opportunitiesSwitchPage" @click="switchPage(1,$event)" class="nav-item f16 lanText" data-lanid="649_商业机会"></div>
            <div class="nav-border"></div>
        </div>
        <div v-show="showPage == 0" class="pageList">
            <div class="add-btn-div">
                <div @click="addBtn" data-url="/opportunitiesinfo/-1" class="add-div">
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
                <div @click="addBtn" data-url="/opportunitiesinfo/-1" class="add-div">
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
    <list-right-panel ref="rightPanel" :panelData="rigthPanelData" :searchData="searchData"></list-right-panel>

</div>
</template>

<script>
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Nothing from "../common/Nothing"
import Mixins from '../../mixins/commonlist.js'

var count = 0;
export default {
    mixins:[Mixins],
    components: {
        'Header': Header,
        'list-right-panel': Listrightpanel,
        'nothing': Nothing
    },
    data() {
        return {
            title: lanTool.lanContent('783_商业'),
            /*
            showPage: 0,
            noData: true, //没数据
            queryCondiction: [], //右侧checkbox条件
            queryCondictionData: [], //综合查询条件
            isFirstEnter: false, //是否首次进入
            */
            //侧滑数据模型
            rigthPanelData: [{
                groupText: lanTool.lanContent("794_数据筛选"),
                groupName: 'dataFilter',
                type: "radio",
                default: "allData",
                items: [{
                        text: lanTool.lanContent("795_全部"),
                        queryfield: "allData",
                        queryType: "string",
                        queryFormat: "",
                        queryRelation: "and",
                        queryValue: "",
                        queryComparison: "="
                    },
                    {
                        text: lanTool.lanContent("981_我关注的数据"),
                        queryfield: "MyFollowData",
                        queryType: "string",
                        queryFormat: "",
                        queryRelation: "and",
                        queryValue: "",
                        queryComparison: "="
                    },
                    {
                        text: lanTool.lanContent("954_进行中"),
                        queryfield: "InProcess",
                        queryType: "string",
                        queryFormat: "",
                        queryRelation: "and",
                        queryValue: "",
                        queryComparison: "="
                    },
                    {
                        text: lanTool.lanContent("955_已关闭"),
                        queryfield: "Closed",
                        queryType: "string",
                        queryFormat: "",
                        queryRelation: "and",
                        queryValue: "",
                        queryComparison: "="
                    }
                ]
            }, ],
            //侧滑搜索页面数据模型
            searchData: {},
            dealPipelineSearch: [{
                    queryfield: "TheName",
                    text: lanTool.lanContent("710_标题"),
                    fieldControlType: "textareaInput",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "like"
                },
                {
                    queryfield: "Initiator",
                    text: lanTool.lanContent("825_负责人"),
                    fieldControlType: "groupSelectList",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "DropDowList_PopedomTeamVsUser",
                    TypeValue: "",
                    selectType: "checkbox",
                    datalanid: "825_负责人",
                    fromType: "6"
                }
            ],
            opportunitiesSearch: [{
                    queryfield: "TheName",
                    text: lanTool.lanContent("710_标题"),
                    fieldControlType: "textareaInput",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "like"
                },
                {
                    queryfield: "TargetCompanyID",
                    text: lanTool.lanContent('726_公司名称'),
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
                    clickObj: "TargetCompanyIDClickObj",
                    datalanid: "726_公司名称"
                },
                {
                    queryfield: "ContactID",
                    text: lanTool.lanContent("630_联系人"),
                    fieldControlType: "selectList",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "DropDowList_ViewBaseCompanyContactsByCompany",
                    TypeValue: "",
                    selectType: "radio",
                    datalanid: "630_联系人"
                },
                {
                    queryfield: "Initiator",
                    text: lanTool.lanContent("825_负责人"),
                    fieldControlType: "groupSelectList",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "DropDowList_PopedomTeamVsUser",
                    TypeValue: "",
                    selectType: "checkbox",
                    datalanid: "825_负责人",
                    fromType: "6"
                }
            ]
        }
    },
    beforeRouteEnter: function (to, from, next) {

        if(from.name == "index"){
          to.meta.fromName = 'index'
        }

        if (from.name == "opportunitiesinfo" || from.name == "searchmodule") {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },
    activated: function () {
        var _self = this;
        lanTool.updateLanVersion();
        _self.changePos();
        _self.watchScroll();
        _self.groupToggle();
        _self.followToggle();
        _self.goInfo();

        _self.title = lanTool.lanContent('783_商业');

        // _self.queryCondictionData = eventBus.queryCondictionData || [];
        // eventBus.queryCondictionData = null;
        if (eventBus.queryCondictionData != null && eventBus.queryCondictionData != undefined) {
            if (this.$route.meta.fromSave) {
                _self.queryCondictionData = [];
            } else {
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
        if (_fromSave || !_isBack || _self.isFirstEnter) {

            //若是第一次进来或者刷新才重置右侧默认值
            if(_self.isFirstEnter){
                var returnObj = _self.$refs.rightPanel.reductionDataFilter(true);
                if (tool.isNullOrEmptyObject(returnObj)) {
                    return ;
                }
                // if(returnObj.returnValue){
                _self.queryCondiction.push(returnObj.defaultQueryCondition);
                // }
            }
            _self.isFirstEnter = false;
            _self.$route.meta.fromSave = false;
            _self.$route.meta.isBack = false;

            if(!tool.isNullOrEmptyObject(_self.$route.meta.fromName) && _self.$route.meta.fromName == "index"){
                _self.showPage = 0;
                _self.$route.meta.fromName = '';
            }

            if (_self.showPage == 0) {
                _self.searchData = _self.dealPipelineSearch;
                $("#dealPipelineSwitchPage").trigger("click");
            } else {
                _self.searchData = _self.opportunitiesSearch;
                $("#opportunitiesSwitchPage").trigger("click");
            }

        } else {
            _self.isFirstEnter = false;
            _self.$route.meta.fromSave = false;
            _self.$route.meta.isBack = false;
            //若为false,则不需要刷新,  若从搜索页面点击确定搜索按钮返回则从新请求列表数据

            if (fromSearchBtn) {
                _self.RefreshCurPageGroupData();
            }
        }

    },
    methods: {

        //列表展开收起
        groupToggle: function () {
            var _self = this;
            _self.groupToggleHandle('dealpipelineList','opportunitiesList');
            // $("#dealpipelineList,#opportunitiesList").off("click", "div.date-div").on(
            //     "click",
            //     "div.date-div",
            //     function (event) {
            //         var target = $(event.target);

            //         if (!target.hasClass('date-div')) {
            //             target = target.parents("div.date-div:first");
            //             if (tool.isNullOrEmptyObject(target)) {
            //                 return;
            //             }
            //         }
            //         var fromType = target.parents("div[data-fromtype]").attr("data-fromtype") || "";
            //         var groupID = target.find("span[data-groupid]:first").attr("data-groupid") || "";

            //         if (tool.isNullOrEmptyObject(groupID)) {
            //             return;
            //         }

            //         //若是展开
            //         if (target.hasClass("open")) {
            //             target
            //                 .removeClass("open")
            //                 .siblings(".group-item-list")
            //                 .slideUp(500, function () {
            //                     var parentContainerObj = target.parents("div.group-div:first");
            //                     if (tool.isNullOrEmptyObject(parentContainerObj)) {
            //                         return;
            //                     }
            //                     //清空容器内容
            //                     parentContainerObj.find("div.group-item-list").remove();
            //                 });
            //         } else {
            //             //若是收起
            //             var allQueryData = tool.combineArray(_self.queryCondictionData, _self.queryCondiction, "Field");
            //             tool.InitiateInnerDataList(fromType, groupID, target, allQueryData, function (containerObj) {
            //                 containerObj
            //                     .addClass("open")
            //                     .siblings(".group-item-list")
            //                     .slideDown(500);
            //             });
            //         }
            //     }
            // );

        },

        //点击关注/取消关注
        followToggle: function () {
            var _self = this;

            $("#dealpipelineList,#opportunitiesList").off("click", ".item-stars-icon").on("click", ".item-stars-icon", function (e) {
                e.preventDefault();
                e.stopPropagation();

                var target = $(e.target);
                var _curObj = $(this);
                var fromType = target.parents("div[data-fromtype]").attr("data-fromtype") || "";
                var autoID = _curObj.attr("data-autoid") || "";
                var actionType;
                if (_curObj.hasClass("calc-shoucang")) {
                    //取消关注
                    actionType = 0;
                } else {
                    //添加关注
                    actionType = 1;
                }

                tool.UserFollow(fromType, autoID, actionType, function () {
                    if (_curObj.hasClass("calc-shoucang")) {
                        //取消关注
                        _curObj.removeClass("calc-shoucang").addClass("calc-noshoucang");
                    } else {
                        //添加关注
                        _curObj.removeClass("calc-noshoucang").addClass("calc-shoucang");
                    }
                });
            })
        },
        //刷新当前激活的page的分组数据
        RefreshCurPageGroupData: function () {
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
            var allQueryData = tool.combineArray(_self.queryCondictionData, _self.queryCondiction, "Field");
            tool.InitiateGroupList(fromType, container, allQueryData, function (containerObj) {
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
        addBtn: function (e) {
            var _self = this;
            var target = $(e.target);
            if (!target.hasClass('add-div')) {
                target = target.parents("div.add-div:first");
                if (tool.isNullOrEmptyObject(target)) {
                    return;
                }
            }
            var urlTemp = target.attr('data-url') || '';
            if (tool.isNullOrEmptyObject(urlTemp)) {
                return;
            }
            var parameter = {
                showPage: _self.showPage
            };
            _self.$router.push({
                path: urlTemp,
                query: parameter
            });
        },

        //点击跳转到详情页
        goInfo:function(){
            var _self = this;
            $("#dealpipelineList,#opportunitiesList").off('click','div.group-item').on(
              'click',
              'div.group-item',
              function(event){

                var target = $(event.target);
                if (target.hasClass("item-stars-icon")) {
                    return;
                }
                if (!target.hasClass("group-item")) {
                    target = target.closest("div.group-item");
                    if (tool.isNullOrEmptyObject(target)) {
                        return;
                    }
                }

                var url = target.attr("data-url") || "";
                if (tool.isNullOrEmptyObject(url)) {
                    return;
                }

                //点击列表是获取到属性名传给详情
                var infoName = null;
                    infoName = $(this).find(".item-first-div").text() || "";
                var parameter = {
                    showPage: _self.showPage,
                    infoName:infoName
                };
                _self.$router.push({
                    path: url,
                    query: parameter
                });

            });
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/common/commonlist.css";
</style>
