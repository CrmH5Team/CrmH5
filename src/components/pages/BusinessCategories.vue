<template>
<div>
    <Header class="header sticky" :title="title"></Header>
    <div class="conditionset sticky">
        <div class="timeselect">
            <div class="time">
                <a class="timeview mui-active" data-datetype="all"><p class="" >{{all}}</p></a>
                <a class="timeview" data-datetype="week"><p class="">{{thisWeek}}</p></a>
                <a class="timeview" data-datetype="month"><p class="" >{{thisMonth}}</p></a>
                <a class="timeview" data-datetype="halfyear"><p class="" >{{halfYear}}</p></a>
                <a class="timeview" data-datetype="customize"><p class="" >{{customize}}</p></a>
            </div>
        </div>
        <div class="line"></div>
        <div class="setTime">
            <div class="box">
                <div class="inputRow">
                    <input id="startdate" class="selectdate lanInputPlaceHolder" type="text" readonly="readonly" placeholder="" data-lanid="1000009_请选择开始日期" data-field="BeginTime" data-fieldControlType="dateTimePicker" data-TimeType="date" data-format="yyyy-MM-dd">
                    <span class="calcfont calc-you"></span>
                </div>
                <div class="inputRow">
                    <input id="enddate" class="selectdate lanInputPlaceHolder" type="text" readonly="readonly" placeholder=""  data-lanid="1000010_请选择结束日期" data-field="EndTime" data-fieldControlType="dateTimePicker" data-TimeType="date" data-format="yyyy-MM-dd">
                    <span class="calcfont calc-you"></span></div>
            </div>
            <div class="sure" @click="sure">{{confirm}}</div>
        </div>
        <div class="search ">
            <div class="search-box">
                <span class="calcfont calc-sousuo input-search-icon"></span>
                <input
                  type="text"
                  id="searchInput"
                  class="search-input lanInputPlaceHolder" data-lanid="780_搜索" placeholder=""/>
          </div>
            </div>
            <div class="line"></div>
        </div>
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
        <list-right-panel ref="rightPanel" :panelData="rigthPanelData" :searchData="searchData" :showCategory="showCategory"></list-right-panel>
    </div>
</template>

<script>
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Nothing from "../common/Nothing"
// import Mixins from '../../mixins/commonlist.js'
export default {
    components: {
        // mixins:[Mixins],
        'Header': Header,
        'list-right-panel': Listrightpanel,
        'nothing': Nothing
    },
    data() {
        return {
            title: lanTool.lanContent('783_商业'),
            all:lanTool.lanContent('795_全部'),
            thisWeek:lanTool.lanContent('1000005_本周'),
            thisMonth:lanTool.lanContent('1000006_本月'),
            halfYear:lanTool.lanContent('1000007_半年'),
            customize:lanTool.lanContent('1000008_自定义'),
            confirm:lanTool.lanContent('545_确定'),
            showCategory: true, //展示data model数据
            showPage: 0,
            noData: true,
            queryCondiction: [], //右侧checkbox条件
            queryCondictionData: [], //综合查询条件
            isFirstEnter: false, //是否首次进入
            timeSlot:'all',   //时间条件
            groupBy:"",//分组模式
            dateRangeJObject:{},//时间对象
            //侧滑数据模型
            rigthPanelData: [
              {
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
              },{
                groupText: lanTool.lanContent("1000004_分组模式"),
                groupName: 'modelDataFilter',
                type: "radio",
                default: "popedomTeamInf",
                items: [
                  {
                      id: "popedomTeamInf",
                      text: lanTool.lanContent("769_业务组")
                  },
                  {
                      id: "businessType",
                      text: lanTool.lanContent("695_业务")
                  },
                  {
                      id: "countryName",
                      text: lanTool.lanContent("701_国家")
                  },
                  {
                      id: "shortName",
                      text: lanTool.lanContent("685_公司")
                  },
                  {
                      id: "initiator",
                      text: lanTool.lanContent("711_发起人")
                  }
                ]
              }
            ],
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

        if (from.name == "index") {
            to.meta.fromName = 'index'
        }

        if (from.name == "opportunitiesinfo" || from.name == "searchmodule") {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },
    created: function () {
        this.isFirstEnter = true;
    },
    mounted: function () {

    },
    activated: function () {
        var _self = this;
        _self.selectTime();
        _self.search();
        _self.watchScroll();
        _self.groupToggle();
        _self.goInfo();
        _self.initDateTimePicker();
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
            if (_self.isFirstEnter) {
                var returnObj = _self.$refs.rightPanel.reductionDataFilter(true);
                if (tool.isNullOrEmptyObject(returnObj)) {
                    return;
                }
                _self.queryCondiction.push(returnObj.defaultQueryCondition);
                _self.groupBy = returnObj.defaultGroupBy||"";
            }
            _self.isFirstEnter = false;
            _self.$route.meta.fromSave = false;
            _self.$route.meta.isBack = false;

            if (!tool.isNullOrEmptyObject(_self.$route.meta.fromName) && _self.$route.meta.fromName == "index") {
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
        //设置查询条件
        setQuerycondition: function (data) {
            var _self = this;
            _self.queryCondiction = data;
            //执行监听的这个动作
            _self.RefreshCurPageGroupData();
        },
        //设置分组模式
        setGroupBy:function(data){
            var _self = this;
            _self.groupBy = data;
            console.log(_self.groupBy);
            //执行监听的这个动作
            _self.RefreshCurPageGroupData();
        },
        //选择查询时间
        selectTime: function () {
            var _self = this;
            //移除mui-active,清空数据
            $("#startdate,#enddate").val("");
            $(".timeview").removeClass("mui-active");
            $(".timeview[data-datetype='all']").addClass("mui-active");
            _self.slideUpWithContent();

            
            $(".timeview").off("click").on("click", function (event) {
                var target = $(this);
                if(tool.isNullOrEmptyObject(target)){
                    return;
                }

                var dateType = target.attr("data-datetype") || "all";
                _self.timeSlot = dateType;
                if (!target.hasClass("mui-active")) {
                    target.addClass("mui-active");
                    target.siblings().removeClass("mui-active");

                    if (dateType == "customize") {
                        _self.slideDownWithContent();
                    } else {
                        _self.slideUpWithContent();
                    }
                } else {
                    //如果已经是选择自定义根据是否展开来进行收缩
                    if (dateType == "customize") {
                        if ($(".setTime").css("display") == "none") {
                            _self.slideDownWithContent();
                        } else {
                            _self.slideUpWithContent();
                        }
                    }
                }

                //准备查询条件
                _self.prePareQueryData();
            });
                
            //默认构造all条件
            _self.timeSlot = 'all';
            var isExeAjax = false;
            _self.prePareQueryData(isExeAjax);
        },
        //准备查询条件
        prePareQueryData:function(isExeAjax){
            isExeAjax = (isExeAjax == null || isExeAjax == undefined) ? true : isExeAjax;
            var _self = this;
            var dateType = _self.timeSlot || "all";
            dateType = dateType.toLowerCase();

            if(dateType == "week") {
			    _self.constructQueryCondiction(0, -6,isExeAjax);
            } else if(dateType == "month") {
                _self.constructQueryCondiction(-1, 0,isExeAjax);
            } else if(dateType == "halfyear") {
                _self.constructQueryCondiction(-6, 0,isExeAjax);
            } else if(dateType == "all") {
                _self.constructQueryCondiction(0, 0,isExeAjax);
            } else if(dateType == "customize") {
                _self.dateRangeJObject = {};
                return;
            } else {
                _self.dateRangeJObject = {};
                return;
            }
        },
        //构造时间条件
        constructQueryCondiction:function(month, day,isExeAjax){
            isExeAjax = (isExeAjax == null || isExeAjax == undefined) ? true : isExeAjax;
            var _self = this;
            var isFormat = true;
            var dateTimeFormatStr = "yyyy-MM-dd";
            var startDate = new Date();
            var endDateStr = new Date().FormatNew(dateTimeFormatStr);
            month = month || 0;
            day = day || 0;
            //选择全部
            if(month == 0 && day == 0) {
                _self.dateRangeJObject = {};
                if(isExeAjax == true){
                    _self.RefreshCurPageGroupData();
                 }
                return;
            }

            var startDateStr = tool.SetDate(startDate, 0, month, day, isFormat, dateTimeFormatStr);
            var dateRangeStr = startDateStr + "," + endDateStr;
            _self.dateRangeJObject = {
                "Type": "Date",
                "Format": "yyyy-MM-dd",
                "Field": "AddTime",
                "Relation": "and",
                "Comparison": "between",
                "Value": dateRangeStr
            };
            
            //触发查询
            if(isExeAjax == true){
                _self.RefreshCurPageGroupData();
            }
        },
        //自定义展开时间选择控件
        slideDownWithContent: function () {
            $(window).scrollTop(0);
            $(".setTime").slideDown(400);
            $('.nav').css({
                "top": "5.2rem",
                'transition': 'top 0.4s ease-out',
                '-moz-transition': 'top 0.4s ease-out',
                '-webkit-transition': 'top 0.4s ease-out',
                '-o-transition': 'top 0.4s ease-out'
            });
            $('.pageList').css({
                "padding-top": "5.12rem",
                'transition': 'padding-top 0.4s ease-out',
                '-moz-transition': 'padding-top 0.4s ease-out',
                '-webkit-transition': 'padding-top 0.4s ease-out',
                '-o-transition': 'padding-top 0.4s ease-out'
            });
            //必须有个延迟，不然监听固定滚动高度会出错
            setTimeout(() => {
                this.watchScroll();
            }, 420);
        },
        //自定义收缩时间选择控件
        slideUpWithContent: function () {
            $(window).scrollTop(0);
            $(".setTime").slideUp(400);

            $('.nav').css({
                "top": "3.16rem",
                'transition': 'top 0.4s ease-out',
                '-moz-transition': 'top 0.4s ease-out',
                '-webkit-transition': 'top 0.4s ease-out',
                '-o-transition': 'top 0.4s ease-out'
            });
            $('.pageList').css({
                "padding-top": "3.08rem",
                'transition': 'padding-top 0.4s ease-out',
                '-moz-transition': 'padding-top 0.4s ease-out',
                '-webkit-transition': 'padding-top 0.4s ease-out',
                '-o-transition': 'padding-top 0.4s ease-out'
            });
            setTimeout(() => {
                this.watchScroll();
            }, 420);

        },
        //列表展开收起
        groupToggle: function () {
            var _self = this;
            // _self.groupToggleHandle('dealpipelineList', 'opportunitiesList');
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
                        },_self.groupBy);
                    }
                }
            );
        },
        //切换页面
        switchPage: function (num, e) {
            var _self = this;
            var el = e.target;
            if (num === undefined) return;
            $(el)
                .addClass("active-item")
                .siblings()
                .removeClass("active-item");
            _self.changePos();

            //获取来源页
            var fromPage = tool.getSessionStorageItem("fromPage") || "";
            //移除来源页
            tool.removeSessionStoragItem("fromPage");

            var isResetRightPanel = _self.showPage != num || (!tool.isNullOrEmptyObject(fromPage) && fromPage.toLowerCase() == "index");
            _self.showPage = num;
            if (isResetRightPanel) {
                //综合查询条件置空
                _self.queryCondictionData = [];
                _self.queryCondiction = [];

                //右侧radio重置为默认值
                var returnObj = _self.$refs.rightPanel.reductionDataFilter(isResetRightPanel);
                if (tool.isNullOrEmptyObject(returnObj)) {
                    return;
                }
                _self.queryCondiction.push(returnObj.defaultQueryCondition);
                _self.groupBy = returnObj.defaultGroupBy||"";
                _self.RefreshCurPageGroupData();

                //重置时间段条件
                $('a[data-datetype="all"]').trigger("click");

            } else {
                _self.RefreshCurPageGroupData();
            }
        },
        //table底部横条过渡效果
        changePos: function () {
            this.$nextTick(function () {
                var activePos = $(".nav .active-item").position();
                $(".nav-border")
                    .stop()
                    .css({
                        left: activePos.left,
                        width: $(".nav .active-item").width()
                    });
            });
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
            if(allQueryData && !tool.isNullOrEmptyObject(_self.dateRangeJObject)){
                allQueryData.push(_self.dateRangeJObject);
                console.log(allQueryData);
            }
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
            },_self.groupBy);
        },
        //日期选择器控件初始化
        initDateTimePicker: function () {
            var _self = this;
            tool.InitiateInfoPageControl(_self, "", function () {

            });
        },
        sure: function () {
            var _self = this;
            //判断元素是否存在
            if($("#startdate").length<=0 || $("#enddate").length<=0){
                return;
            }

            //开始日期和结束日期进行对比
            var startdate = $("#startdate").val();
            var enddate = $("#enddate").val();

            var d1 = new Date(startdate.replace(/\-/g, "\/"));
            var d2 = new Date(enddate.replace(/\-/g, "\/"));

            //开始日期或者结束日期其中一个为空，一个不为空
            if (tool.isNullOrEmptyObject(startdate) || tool.isNullOrEmptyObject(enddate)) {
                var dateEmptyAlert = lanTool.lanContent("935_开始日期或者结束日期不能为空") || "";
                tool.alert(dateEmptyAlert);
                return;
            } else if ((!tool.isNullOrEmptyObject(startdate) && !tool.isNullOrEmptyObject(enddate)) && d1 > d2) {
                var compareAlert = lanTool.lanContent("934_开始日期不能大于或等于结束日期") || "";
                tool.alert(compareAlert);
                return;
            } 
         
            var dateRangeStr = startdate + "," + enddate;
            _self.dateRangeJObject = {
                "Type": "Date",
                "Format": "yyyy-MM-dd",
                "Field": "AddTime",
                "Relation": "and",
                "Comparison": "between",
                "Value": dateRangeStr
            };
            _self.RefreshCurPageGroupData();
        },
         //搜索
        search: function () {
            this.$nextTick(function () {
                 var listDom = $('.pageList');
                $('#searchInput').unbind().bind('input', function () {
                    var queryStr = $.trim($(this).val());
                    if (queryStr === '') {
                        listDom.find('div.date-div').show();
                    } else {
                        listDom.find('div.date-div').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
                    }
                })
            });
        },
        //新增记录
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
        goInfo: function () {
            var _self = this;
            $("#dealpipelineList,#opportunitiesList").off('click', 'div.group-item').on(
                'click',
                'div.group-item',
                function (event) {

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
                        infoName: infoName
                    };
                    _self.$router.push({
                        path: url,
                        query: parameter
                    });

                });
        },
        //监听滚动固定
        watchScroll: function () {

            var _self = this;
            setTimeout(function () {
                var headerH = parseFloat($("header").innerHeight());
                var navH = parseFloat($(".nav").innerHeight());
                var setH = parseFloat($(".conditionset").innerHeight());
                // $(this).offset().top 元素到document顶部的距离
                // $(document).scrollTop() || $(window).scrollTop(); 滚动条滚动的距离
                $(window).unbind('scroll').bind('scroll', function () {
                    if ($(".group-div").length <= 0) return;
                    var scrollTop = $(document).scrollTop() || $(window).scrollTop();

                    $(".group-div").each(function () {
                        if (
                            ($(this).offset().top - scrollTop) <= (headerH + navH + setH)
                        ) {
                            if (tool.getSystem() === "ios") {
                                $(this)
                                    .find(".date-div")
                                    .addClass("sticky")
                                    .css({
                                        top: headerH + navH + setH + "px"
                                    });
                                return true;
                            } else {
                                $(this)
                                    .find(".date-div")
                                    .css({
                                        position: "fixed",
                                        top: headerH + navH + setH + "px"
                                    });
                                $(this)
                                    .find(".occupy-div")
                                    .show();
                                return true;
                            }
                        } else {
                            if (tool.getSystem() === "ios") {
                                $(this)
                                    .find(".date-div")
                                    .removeClass("sticky")
                                    .css({
                                        top: "0px"
                                    });
                                return true;
                            } else {
                                $(this)
                                    .find(".date-div")
                                    .css({
                                        position: "static"
                                    });
                                $(this)
                                    .find(".occupy-div")
                                    .hide();
                                return true;
                            }
                        }
                    });
                });
            }, 0);
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/pages/BusinessCategories.css";
</style>
