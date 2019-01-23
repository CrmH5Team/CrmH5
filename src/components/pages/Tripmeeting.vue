<template>
<div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">

        <!-- calendar视图 -->
        <calendar v-show="viewType=='calendarView'" class="calendar-view"></calendar>

        <!-- list 视图 -->
        <div v-show="viewType=='listView'" class="list-view">
            <div class="nav sticky">
                <div id="meetingPanel" @click="switchPage(0,$event)" class="nav-item f16 active-item  lanText" data-lanid="818_会议"></div>
                <div class="nav-item f16 lanText" data-lanid="819_出差"></div>
                <div class="nav-border"></div>
            </div>

            <div class="pageList" v-show="showPage == 0">
                <div class="add-btn-div">
                    <router-link to="/meetinginfo/-1" class="add-div">
                        <span class="calcfont calc-add"></span>
                        <span class="add-text lanText" data-lanid="886_新增会议"></span>
                    </router-link>
                </div>
                <!-- 列表 -->
                <div v-if="!notMeeting" id="meetingList"></div>
                <nothing v-if="notMeeting" style="padding-top:0.8rem;"></nothing>
            </div>

            <div class="pageList" v-show="showPage == 1">
                <div class="add-btn-div">
                    <router-link to="/tripinfo/0" class="add-div">
                        <span class="calcfont calc-add"></span>
                        <span class="add-text lanText" data-lanid="887_新增出差"></span>
                    </router-link>
                </div>
                <!-- 列表 -->
                <div v-if="!notTrip" id="tripList"></div>
                <nothing v-if="notTrip" style="padding-top:0.8rem;"></nothing>
            </div>

        </div>
    </div>

    <!--  右侧侧滑 -->
    <list-right-panel ref="listRightPanel" :panelData="rigthPanelData" :searchData="searchData"></list-right-panel>

</div>
</template>

<script>
import Calendar from './Calendar'
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Nothing from "../common/Nothing"

var count = 0;
export default {
    components: {
        'Header': Header,
        'calendar': Calendar,
        'nothing': Nothing,
        'list-right-panel': Listrightpanel,
    },
    data() {
        return {
            title: lanTool.lanContent('781_出差&会议'),
            notTrip: true, //没数据
            notMeeting: true, //没数据

            showPage: 0, //list视图控制显示meeting(0)或者trip(1)
            viewType: 'calendarView', //展示视图类型  calendarView, listView
            isFirstEnter: false, //是否首次进入

            //侧滑数据模型
            rigthPanelData: [{
                    groupText: lanTool.lanContent('867_视图'),
                    groupName:'view',
                    type: 'radio',
                    default: 'calendarView',
                    items: [{
                            text: lanTool.lanContent('928_日历视图'),
                            value: 'calendarView'
                        },
                        {
                            text: lanTool.lanContent('929_列表视图'),
                            value: 'listView'
                        }
                    ]
                },
                {
                    groupText: lanTool.lanContent('856_数据筛选'),
                    groupName:'dataFilter',
                    type: 'radio',
                    default: 'allData',
                    items: [
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
                            text: lanTool.lanContent("930_我的日程"),
                            queryfield: "aaaaaaa",
                            queryType: "string",
                            queryFormat: "",
                            queryRelation: "and",
                            queryValue: "",
                            queryComparison: "="
                        },
                        {
                            text: lanTool.lanContent('932_所有团队成员'),
                            queryfield: "bbbbbb",
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
            searchData: {},
            meetingSearch: [{
                    queryfield: "MeetingTitle",
                    text: lanTool.lanContent("710_标题"),
                    fieldControlType: "textareaInput",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "like"
                },
                {
                    queryfield: "BeginTime",
                    text: lanTool.lanContent("712_开始时间"),
                    fieldControlType: "dateTimePicker",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "",
                    TypeValue: "",
                },
                {
                    queryfield: "EndTime",
                    text: lanTool.lanContent("713_结束时间"),
                    fieldControlType: "dateTimePicker",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "",
                    TypeValue: "",
                },
                {
                    queryfield: "MeetingType",
                    text: lanTool.lanContent("814_对内/对外"),
                    fieldControlType: "picker",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "DropDowList_DtbAllTypes",
                    TypeValue: "InternalExternaltype",
                    datalanid: "814_对内/对外"
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
                {
                    queryfield: "ContactsID",
                    text: lanTool.lanContent("630_联系人"),
                    fieldControlType: "linkSelectList",
                    queryType: "string",
                    queryFormat: "",
                    queryRelation: "and",
                    queryValue: "",
                    queryComparison: "=",
                    Code: "DropDowList_ViewBaseCompanyContactsByCompany",
                    TypeValue: "",
                    selectType: "radio",
                    datalanid: "630_联系人"
                }
            ],
            tripSearch: [{
                    type: 'input',
                    field: 'name',
                    queryType: 'string',
                    text: 'Name',
                    value: '',
                },
                {
                    type: 'picker',
                    field: 'cf_765',
                    queryType: 'string',
                    text: lanTool.lanContent('860_状态'),
                    value: '',
                    id: Number((new Date()).valueOf()) + count++
                },
                {
                    type: 'selectlist',
                    field: 'related_to_2',
                    queryType: 'string',
                    queryUrl: "Accounts/Query",
                    text: lanTool.lanContent('711_发起人'),
                    selectType: 'checkbox',
                    resulteRow: false, //第二行显示结果
                    value: {
                        text: '',
                        value: ''
                    }
                },
                {
                    type: 'selectlist',
                    field: 'related_to_3',
                    queryType: 'string',
                    queryUrl: "Accounts/Query",
                    text: lanTool.lanContent('790_公司'),
                    selectType: 'checkbox',
                    resulteRow: true, //第二行显示结果
                    value: {
                        text: '',
                        value: ''
                    }
                },
                {
                    type: 'picker',
                    field: 'cf_765',
                    queryType: 'string',
                    text: lanTool.lanContent('868_业务分类'),
                    value: '',
                    id: Number((new Date()).valueOf()) + count++
                },
                {
                    type: 'picker',
                    field: 'cf_771',
                    queryType: 'string',
                    text: lanTool.lanContent('869_区域'),
                    value: '',
                    id: Number((new Date()).valueOf()) + count++
                }
            ],

        }
    },
    beforeRouteEnter: function (to, from, next) {
        console.log('beforeRouteEnter');
        if (from.name == "tripinfo" || from.name == "meetinginfo" || from.name == "searchmodule") {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },
    // beforeRouteLeave:function(to, from, next){
    //     if(to.name == 'index'){
    //         this.$destroy();
    //     }
    //     next();
    // },
    created: function () {
        this.isFirstEnter = true;
    },
    mounted: function () {

    },
    activated: function () {

        lanTool.updateLanVersion();
        var _self = this;
        _self.changePos();
        _self.groupToggle();
        _self.goInfoPage();
        _self.watchScroll();

        _self.queryCondictionData = eventBus.queryCondictionData || [];
        eventBus.queryCondictionData = null;

        //获取是否是从搜索页面点击确定按钮返回来的标志
        var fromSearchBtn = eventBus.fromSearchBtn || false;
        eventBus.fromSearchBtn = false;

        var _fromSave = _self.$route.meta.fromSave;
        var _isBack = _self.$route.meta.isBack;

        if (_fromSave || !_isBack || _self.isFirstEnter) {

            _self.searchData = _self.meetingSearch;

            $("#meetingPanel").trigger("click");

        }else{
            //若为false,则不需要刷新,  若从搜索页面点击确定搜索按钮返回则从新请求列表数据
            if (fromSearchBtn) {
                _self.RefreshCurPageGroupData();
            }
        }

        _self.$route.meta.fromSave = false;
        _self.$route.meta.isBack = false;
        _self.isFirstEnter = false;

        eventBus.$on('updataListEvent', function () {
            _self.RefreshCurPageGroupData();
        })
         eventBus.$on('changeViewEvent', function (data) {
             _self.viewType = data;
        })

    },
    deactivated:function(){
        eventBus.$off('updataListEvent');
        eventBus.$off('changeViewEvent');
    },
    methods: {
        //监听滚动固定
        watchScroll: function () {
            var _self = this;
            setTimeout(function () {
                var headerH = parseFloat($('header').innerHeight());
                var navH = parseFloat($('.nav').innerHeight());
                $(window).scroll(function () {

                    if ($('.group-div').length <= 0) return;
                    $('.group-div').each(function () {
                        if ($(this).offset().top - $(window).scrollTop() <= (headerH + navH)) {

                            if (tool.getSystem() === 'ios') {
                                $(this).find('.date-div').addClass('sticky').css({
                                    "top": headerH + navH + 'px'
                                });
                            } else {
                                $(this).find('.date-div').css({
                                    "position": "fixed",
                                    "top": headerH + navH + 'px'
                                });
                                $(this).find('.occupy-div').show();
                            }

                        } else {
                            if (tool.getSystem() === 'ios') {
                                $(this).find('.date-div').removeClass('sticky').css({
                                    "top": '0px'
                                });
                            } else {
                                $(this).find('.date-div').css({
                                    "position": "static"
                                });
                                $(this).find('.occupy-div').hide();
                            }
                        }

                    })
                })
            }, 100)
        },
        //点击去详情页
        goInfoPage: function (id) {
            var _self = this;
            $("#meetingList,#tripList").on("click", "div.data-events-item", function (event) {
                var target = $(event.target);
                if (!target.hasClass('data-events-item')) {
                    target = target.closest('div.data-events-item');
                    if (target == undefined) {
                        return;
                    }
                }
                var url = target.attr('data-url') || '';
                _self.$router.push(url);
            })
        },

        //列表展开收起
        groupToggle: function () {
            $("#meetingList,#tripList").on("click", "div.date-div", function (event) {
                var target = $(event.target);
                if (!target.hasClass('date-div')) {
                    target = target.closest('div.date-div');
                    if (target == undefined) {
                        return;
                    }
                }
                if (target.hasClass('open')) {
                    target.removeClass('open').siblings('.group-item-list').slideUp(500);
                } else {
                    target.addClass('open').siblings('.group-item-list').slideDown(500);
                }
            })
        },

        //切换页面
        switchPage: function (num, e) {
            var _self = this;
            var el = e.target;
            if (num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.changePos();

            _self.showPage = num;

            var container = null;
            var moduleName = '';
            if (_self.showPage == 0) {
                _self.searchData = _self.meetingSearch;

                moduleName = 'meeting';
                container = $('#meetingList');
            } else {
                _self.searchData = _self.tripSearch;

                moduleName = 'trip';
                container = $('#tripList');
            }
            tool.InitiateGroupList(moduleName, container);
        },

        //table底部横条过渡效果
        changePos: function () {
            this.$nextTick(function () {
                var activePos = $('.nav .active-item').position();
                $('.nav-border').stop().css({
                    left: activePos.left,
                    // width: $('.nav .active-item').width()
                });
            })
        },

        setQuerycondition: function (data) {
            var _self = this;
            _self.queryCondiction = data;
            // console.log(_self.queryCondiction);
            //执行监听的这个动作
            _self.RefreshCurPageGroupData();
        },
        setQueryconditionOnlyData: function (data) {
            var _self = this;
            _self.queryCondiction = data;
        },

        //刷新当前激活的page的分组数据
        RefreshCurPageGroupData: function () {
            var _self = this;
            //console.log(_self.showPage);
            var num = _self.showPage;
            var container = null;
            var fromType = "";
            if (num == 0) {
                _self.searchData = _self.meetingSearch;

                fromType = "meeting";
                container = $("#meetingList");
            } else {
                _self.searchData = _self.tripSearch;
                fromType = "trip";
                container = $("#tripList");
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
        }
    },

}
</script>

<style scoped>
@import "../../assets/css/common/commonlist.css";
</style><style>
/* 列表 style*/
/* .data-events-item{ line-height:20px;background: #fff;padding: 5px 10px; position: relative;}
.data-events-item::after{  content: ""; display: block; height: 1px; background: beige; width: 100%;
  left: 0; top: 0; position: absolute;
}
.item-title{font-weight: 600;color:#333;}
.item-time{color:#333;}
.item-time .calc-gengxinshijian{color:#ff5a21;vertical-align: bottom;}

.trip-time-text{font-size:11px;color:#666666;}
.item-address{font-weight: 600;}
.data-events p{height: 50px;line-height: 50px;} */
</style>
