<template>
<div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">
        <div class="nav sticky">
            <div id="companySwitchPage" @click="switchPage(0,$event)" class="nav-item f16 active-item lanText" data-lanid="790_公司"></div>
            <div id="contactSwitchPage" @click="switchPage(1,$event)" class="nav-item f16 lanText" data-lanid="791_联系人"></div>
            <div class="nav-border"></div>
        </div>

        <div v-show="showPage == 0" class="pageList">
            <div class="add-btn-div">
                <router-link to="/organizationsinfo/-1" class="add-div">
                    <span class="calcfont calc-add"></span>
                    <span class="add-text lanText" data-lanid="792_添加公司"></span>
                </router-link>
            </div>
            <!-- 列表 -->
            <div v-show="!noData" id="organizationsList" data-fromtype="organizations"></div>
            <nothing v-show="noData" style="padding-top:0.8rem;"></nothing>
        </div>

        <div v-show="showPage == 1" class="pageList">
            <div class="add-btn-div">
                <router-link to="/contactsinfo/-1" class="add-div">
                    <span class="calcfont calc-add"></span>
                    <span class="add-text lanText" data-lanid="793_添加联系人"></span>
                </router-link>
            </div>
            <!-- 列表 -->
            <div v-show="!noData" id="contactsList" data-fromtype="contacts"></div>
            <nothing v-show="noData" style="padding-top:0.8rem;"></nothing>
        </div>
    </div>

    <!--  右侧侧滑 -->
    <list-right-panel ref="rightPanel" :panelData="rigthPanelData" :searchData="searchData"></list-right-panel>
</div>
</template>

<script>
import Header from "../common/Listheader";
import Listrightpanel from "../common/Listrightpanel";
import Nothing from "../common/Nothing";
import Mixins from '../../mixins/commonlist.js'

var count = 0;
export default {
    mixins:[Mixins],
    components: {
        Header: Header,
        "list-right-panel": Listrightpanel,
        nothing: Nothing
    },
    data() {
        return {
            key: "contacts",
            title: lanTool.lanContent("791_联系人"),
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
                        text: lanTool.lanContent("796_关注的公司"),
                        queryfield: "MyFollowData",
                        queryType: "string",
                        queryFormat: "",
                        queryRelation: "and",
                        queryValue: "",
                        queryComparison: "="
                    }
                ]
            }],
            //搜索页面数据模型
            searchData: {},
            OrganizationsSearch: [{
                    queryfield: "ShortNameEN",
                    text: lanTool.lanContent("733_英文名称"),
                    fieldControlType: "textareaInput",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "like"
                },
                {
                    queryfield: "ShortNameCN",
                    text: lanTool.lanContent("32_中文名称"),
                    fieldControlType: "textareaInput",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "like"
                },
                {
                    queryfield: "BusinessType",
                    text: lanTool.lanContent("1007_业务分类"),
                    fieldControlType: "picker",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "DropDowList_ViewBaseAllTypes",
                    TypeValue: "Companybusinesstype",
                    datalanid: "1007_业务分类"
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
                    datalanid: "702_城市"
                },
                {
                    queryfield: "AccountManager",
                    text: lanTool.lanContent("785_客户经理"),
                    fieldControlType: "selectList",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "DropDowList_AccountManager",
                    TypeValue: "",
                    selectType: "radio",
                    datalanid: "785_客户经理"
                }
            ],
            ContactsSearch: [{
                    queryfield: "EnglishName",
                    text: lanTool.lanContent("848_姓名"),
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
                },
                {
                    queryfield: "CompanyID",
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
                    clickObj: "CompanyIDClickObj",
                    datalanid: "726_公司名称"
                },
            ]
        };
    },
    beforeRouteEnter: function (to, from, next) {

        if(from.name == "index"){
          to.meta.fromName = 'index'
        }

        if (from.name == "organizationsinfo" || from.name == "contactsinfo" || from.name == "searchmodule") {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },

    activated: function () {
        var _self = this;
        _self.groupToggle();
        _self.changePos();
        _self.followToggle();
        _self.watchScroll();
        _self.goInfo();
        lanTool.updateLanVersion();
        _self.title = lanTool.lanContent("791_联系人");

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

            if(_self.showPage == 0){
                _self.searchData = _self.OrganizationsSearch;
                $("#companySwitchPage").trigger("click");
            }else{
                _self.searchData = _self.ContactsSearch;
                $("#contactSwitchPage").trigger("click");
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

        //列表展开/收起
        groupToggle: function () {
            var _self = this;
            _self.groupToggleHandle('organizationsList','contactsList');
            // $("#organizationsList,#contactsList").off("click", "div.date-div").on(
            //     "click",
            //     "div.date-div",
            //     function (event) {
            //         event.preventDefault();
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

        //添加/取消关注
        followToggle: function () {
            $("#organizationsList").off("click", ".item-stars-icon").on("click", ".item-stars-icon", function (e) {
                e.preventDefault();
                e.stopPropagation();
                var _curObj = $(this);
                var fromType = "Organizationsinfo";
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
                _self.searchData = _self.OrganizationsSearch;

                fromType = "organizations";
                container = $("#organizationsList");
            } else {
                _self.searchData = _self.ContactsSearch;
                fromType = "contacts";
                container = $("#contactsList");
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
        //点击跳转到详情页
        goInfo:function(){
            var _self = this;
            $("#organizationsList,#contactsList").off('click','div.group-item').on('click','div.group-item',function(event){

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
};
</script>

<style scoped>
@import "../../assets/css/common/commonlist.css";
</style>
