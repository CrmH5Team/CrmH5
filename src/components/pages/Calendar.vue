<template>
<div>
    <div class="calendar">
        <div id="inline-calendar"></div>

        <div class="calendarDataList">

            <!-- 显示日期 -->
            <div class="f14 date-div open">
                <span class="calcfont calc-richeng"></span>
                <div class="date-text">2018-11-16 Thursday</div>
            </div>

            <!-- tab切换 -->
            <div class="calendar-nav">
                <div @click="switchPage(0,$event)" class="nav-item f16 active-item lanText" data-lanid="818_会议"></div>
                <div style="color:#ccc;" class="nav-item f16 lanText" data-lanid="819_出差"></div>
                <div class="calendar-nav-border"></div>
            </div>

            <div>
                <div v-show="showPage==0" class="pageList">
                    <!-- 增加meeting按钮 -->
                    <div class="add-btn-div">
                        <div class="add-div" @click.stop="goInfoPage(-1,$event)">
                            <span class="calcfont calc-add"></span>
                            <span class="add-text lanText" data-lanid="886_新增会议"></span>
                        </div>
                    </div>
                    <!-- meeting list -->
                    <div v-show="!notMeeting" id="calendarMeetingList" class="list meeting-list">
                        <div v-for="meetingData in meetingDatas" :key="meetingData.AutoID" class="data-events-item f14" @click.stop="goInfoPage(meetingData.AutoID,$event)">
                            <div class="item-title">{{meetingData.MeetingTitle}}</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">{{meetingData.BeginTime|MeetingTimeFormat}}~{{meetingData.EndTime|MeetingTimeFormat}}</span>
                                <span class="right-text">{{meetingData.Realname}}</span>
                            </div>
                            <div class="item-address">{{meetingData.CompanyID}}</div>
                            <div class="item-initiator">{{meetingData.ContactsID|formatContactsID}}{{meetingData.Title|formatTitle}}</div>
                        </div>
                    </div>
                    <nothing v-show="notMeeting" style="padding-top:0.8rem;"></nothing>

                </div>

                <div v-show="showPage==1" class="pageList">
                    <!-- 增加trip按钮 -->
                    <div class="add-btn-div">
                        <div class="add-div" @click="goInfoPage()">
                            <span class="calcfont calc-add"></span>
                            <span class="add-text lanText" data-lanid="887_新增出差"></span>
                        </div>
                    </div>

                    <!-- trip list -->
                    <div v-show="!notTrip" class="list trip-list">
                        <div class="data-events-item f12" @click="goInfoPage(5)">
                            <div class="item-title">
                                <span>1115-1116东航会议出差上海</span>
                                <span class="right">审批已通过</span>
                            </div>
                            <div class="item-time f12">
                                <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                            </div>
                            <div class="item-div">香港 - 上海（MU726 31/Dec 07:40 - 31/Dec 09:30）</div>
                            <div class="item-div">上海 - 香港（HX235 4/Jan 09:10 - 4/Jan 11:55）</div>
                            <div class="item-div">31/Dec - 04/Jan 4晚 上海</div>
                        </div>
                        <div class="data-events-item f12" @click="goInfoPage(15)">
                            <div class="item-title">
                                <span>1115-1116东航会议出差上海</span>
                                <span class="right">审批已通过</span>
                            </div>
                            <div class="item-time f12">
                                <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                            </div>
                            <div class="item-div">香港 - 上海（MU726 31/Dec 07:40 - 31/Dec 09:30）</div>
                            <div class="item-div">上海 - 香港（HX235 4/Jan 09:10 - 4/Jan 11:55）</div>
                            <div class="item-div">31/Dec - 04/Jan 4晚 上海</div>
                        </div>

                    </div>
                    <nothing v-show="notTrip" style="padding-top:0.8rem;"></nothing>

                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import Nothing from "../common/Nothing"
export default {
    components: {
        'nothing': Nothing
    },
    data() {
        return {
            dateEvents: [], //一天中事件数据
            hasEvents: true, //一天中是否有事件数据
            showPage: 0,
            isFirstEnter: false, // 是否第一次进入，默认false
            queryCondiction: [], //右侧checkbox条件
            queryCondictionData: [], //综合查询条件

            notTrip: false, //没数据
            notMeeting: false, //没数据
            calendarObjGlobal: null, //日历控件对象

            meetingDatas: [],
            clickDateStr:"",  //临时存储点击某天的日期
            isCalOnOpenExe: false,//日历是否已打开
        }
    },
    created: function () {
        this.isFirstEnter = true;
    },
    mounted: function () {
        this.changePos();
    },
    activated: function () {
        lanTool.updateLanVersion();
        var _self = this;

        //_self.queryCondictionData = eventBus.queryCondictionData || [];
        // eventBus.queryCondictionData = null; //在calendar组件中不能清空，不然父组件接收不到数据
        if (eventBus.queryCondictionData != null && eventBus.queryCondictionData != undefined) {
            if (this.$route.meta.fromSave) {
                _self.queryCondictionData = [];
            } else {
                _self.queryCondictionData = eventBus.queryCondictionData;
            }
            //eventBus.queryCondictionData = null;
        }

        //获取是否是从搜索页面点击确定按钮返回来的标志
        var fromSearchBtn = eventBus.fromSearchBtn || false;
        // eventBus.fromSearchBtn = false; //在calendar组件中不能清空，不然父组件接收不到数据

        if (!this.$route.meta.isBack || this.isFirstEnter || this.$route.meta.fromSave) {
            if (this.isFirstEnter) {
                this.initCalendar();
            }
            if (!tool.isNullOrEmptyObject(_self.calendarObjGlobal)) {
                _self.setCalendarEvent(_self.calendarObjGlobal);
            }
        } else {
            // 若从搜索页面点击确定搜索按钮返回则从新请求当前月数据
            if (fromSearchBtn) {
                _self.setCalendarEvent(_self.calendarObjGlobal);
            }
        }

        eventBus.$on('updataCalendarEvent', function () {
            _self.setCalendarEvent(_self.calendarObjGlobal);
        });

        // eventBus.$on('RightPanelCalendarOnlyDataEvent', function (data) {
        //     _self.setQueryconditionOnlyData(data);
        // });
        eventBus.$on('RightPanelCalendarEvent', function (data) {
            _self.setQuerycondition(data);
        });

        // this.$route.meta.isBack = false;
        // this.$route.meta.fromSave = false;
        setTimeout(function(){this.isFirstEnter = false;},100);
    },
    methods: {
        //点击去详情页
        goInfoPage: function (autoID, el) {

            var _self = this;
            var targetObj = $(el.target);
            if (tool.isNullOrEmptyObject(targetObj) || tool.isNullOrEmptyObject(autoID)) {
                return;
            }
            var url = "/meetinginfo/" + autoID;
            //点击列表是获取到属性名传给详情
            var infoName = null;
            if ($(el.target).hasClass("data-events-item")) {
                infoName = $(el.target).find(".item-title").text();
            } else {
                infoName = $(el.target).parents(".data-events-item").children(".item-title").text() || "";
            }

            var defaultDateTime = "";
            //新增
            if(tool.isNullOrEmptyObject(autoID) ||autoID <= -1){

                // var selectedDayObj = $("div.picker-calendar-day-selected:first");
                // if (!selectedDayObj) {
                //     return;
                // }

                // var year = selectedDayObj.attr("data-year") || "";
                // var month = selectedDayObj.attr("data-month") || "";
                // var day = tool.PrefixInteger(selectedDayObj.attr("data-day")) || "";
                // // console.log('year:'+year);
                // // console.log('month:'+month);
                // // console.log('day:'+day);

                // if (tool.isNullOrEmptyObject(year) || tool.isNullOrEmptyObject(month) || tool.isNullOrEmptyObject(day)) {
                //     return;
                // }

                // month = tool.PrefixInteger(parseInt(month) + 1);
                // defaultDateTime = year + "-" + month + "-" + day;

                var defaultDateTime = _self.clickDateStr;
                var timeArray = tool.GetTimeArray('special');
                defaultDateTime += " " + timeArray[3] +":" + timeArray[4];
            }else{
                defaultDateTime = "";
            }
            _self.$router.push({
                path: url,
                query: {
                    infoName: infoName,
                    defaultDateTime:defaultDateTime
                }
            });
        },

        //tab切换页面
        switchPage: function (num, e) {
            var _self = this;
            var el = e.target;
            if (num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.changePos();
            _self.showPage = num;
        },

        //table底部横条过渡效果
        changePos: function () {
            this.$nextTick(function () {
                var activePos = $('.calendar-nav .active-item').position();
                $('.calendar-nav-border').stop().css({
                    left: activePos.left,
                    // width: $('.calendar-nav .active-item').width()
                });
            })
        },

        //初始化日历
        initCalendar: function () {
            var _self = this;
            _self.$nextTick(function () {
                //日历控件初始化
                $("#inline-calendar").calendar({
                    multiple: false,
                    monthNames: [
                        lanTool.lanContent('915_一月'), lanTool.lanContent('916_二月'),
                        lanTool.lanContent('917_三月'), lanTool.lanContent('918_四月'),
                        lanTool.lanContent('919_五月'), lanTool.lanContent('920_六月'),
                        lanTool.lanContent('921_七月'), lanTool.lanContent('922_八月'),
                        lanTool.lanContent('923_九月'), lanTool.lanContent('924_十月'),
                        lanTool.lanContent('925_十一月'), lanTool.lanContent('926_十二月')
                    ],
                    monthNamesShort: [
                        lanTool.lanContent('915_一月'), lanTool.lanContent('916_二月'),
                        lanTool.lanContent('917_三月'), lanTool.lanContent('918_四月'),
                        lanTool.lanContent('919_五月'), lanTool.lanContent('920_六月'),
                        lanTool.lanContent('921_七月'), lanTool.lanContent('922_八月'),
                        lanTool.lanContent('923_九月'), lanTool.lanContent('924_十月'),
                        lanTool.lanContent('925_十一月'), lanTool.lanContent('926_十二月')
                    ],
                    dayNames: [
                        lanTool.lanContent('888_周日'), lanTool.lanContent('889_周一'),
                        lanTool.lanContent('890_周二'), lanTool.lanContent('891_周三'),
                        lanTool.lanContent('892_周四'), lanTool.lanContent('893_周五'),
                        lanTool.lanContent('894_周六')
                    ],
                    dayNamesShort: [
                        lanTool.lanContent('888_周日'), lanTool.lanContent('889_周一'),
                        lanTool.lanContent('890_周二'), lanTool.lanContent('891_周三'),
                        lanTool.lanContent('892_周四'), lanTool.lanContent('893_周五'),
                        lanTool.lanContent('894_周六')
                    ],
                    dateFormat: 'yyyy-mm-dd',
                    yearPicker: true,
                    minDate:'2000-01-01',
                    maxDate:'2099-12-31',
                    value: [(new Date()).FormatNew('yyyy-MM-dd')], //默认选择的日期
                    onChange: function (p, values, displayValues) {

                      var dateStrTemp = values[0] || "";
                      if(tool.isNullOrEmptyObject(dateStrTemp)){
                        var selectedDayObj = $("div.picker-calendar-day-selected:first");
                        if (selectedDayObj) {
                            var year = selectedDayObj.attr("data-year") || "";
                            var month = selectedDayObj.attr("data-month") || "";
                            var day = tool.PrefixInteger(selectedDayObj.attr("data-day")) || "";
                            month = tool.PrefixInteger(parseInt(month) + 1);
                            dateStrTemp = year + "-" + month + "-" + day;
                        }
                      }
                      _self.clickDateStr = dateStrTemp;
                    },
                    onDayClick: function (p, dayContainer, year, month, day) {
                        month = parseInt(month) + 1;
                        var dateStr = year + "-" + month + "-" + day;

                        //展示选中的日期和星期
                        $(".date-text").text(dateStr + "  " + tool.getWeekDayStr(dateStr));
                        _self.getEventsByDate(dateStr);
                    },
                    onOpen: function (p) {
                        if(_self.isCalOnOpenExe == true){
                            return;
                        }
                        //执行查询当前月数据
                        setTimeout(function () {
                            _self.calendarObjGlobal = p;
                            _self.setCalendarEvent(p,function(){
                              //$(".picker-calendar-day-today.picker-calendar-day-selected").trigger("click");
                            });
                            _self.isCalOnOpenExe = true;
                        }, 0);
                    },
                    onMonthAdd: function (p, monthContainer) {
                        if(_self.isCalOnOpenExe == false){
                            return;
                        }

                        setTimeout(function () {
                            _self.calendarObjGlobal = p;
                            _self.setCalendarEvent(p);
                        }, 0);
                    }
                });
            })
        },
        //获取当月的会议记录
        setCalendarEvent: function (calendarObj, myCallBack) {
            //先清空样式
            $("div.calendar-event").removeClass("calendar-event");
            var _self = this;
            //清空当天会议记录列表
            _self.notMeeting = true;

            if (tool.isNullOrEmptyObject(calendarObj)) {
                return;
            }
            // _self.calendarObjGlobal = calendarObj;

            var allQueryData = tool.combineArray(_self.queryCondictionData, _self.queryCondiction, "Field");
            // console.log("allQueryData：" + JSON.stringify(allQueryData));
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_MeetingHandle_QueryCalendarMonthEventNode;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                Year: calendarObj.currentYear,
                Month: calendarObj.currentMonth + 1, //因为日历的月份是从0开始，因此此处+1
                QueryCondiction: JSON.stringify(allQueryData)
            };
            var loadingIndexClassName = tool.showLoading();
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    tool.hideLoading(loadingIndexClassName);
                    data = tool.jObject(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        return true;
                    }

                    data = data._OnlyOneData.Rows || [];

                    if (data.length <= 0) {
                        _self.notMeeting = true;
                        // return true;
                    }

                    // console.log(data);

                    for (var i = 0; i < data.length; i++) {
                        var dateTemp = new Date(data[i]);
                        if (!dateTemp) {
                            continue;
                        }
                        var yearTemp = dateTemp.getFullYear();
                        var monthTemp = dateTemp.getMonth();
                        var dayTemp = dateTemp.getDate();
                        // console.log('yearTemp:'+yearTemp);
                        // console.log('monthTemp:'+monthTemp);
                        // console.log('dayTemp:'+dayTemp);

                        $('.picker-calendar-row div[data-year="' + yearTemp + '"][data-month="' + monthTemp + '"][data-day="' + dayTemp + '"]').addClass('calendar-event');

                    }

                    if (!tool.isNullOrEmptyObject(myCallBack)) {
                        myCallBack();
                    }

                    _self.$nextTick(function () {
                        //判断当前的日历视图中是否有激活的天，若有，则执行getEventsByDate
                        var selectedDayObj = $("div.picker-calendar-month.picker-calendar-month-current div.picker-calendar-day-selected:first");
                        // console.log(selectedDayObj.length);
                        if (!selectedDayObj) {
                            return;
                        }
                        var year = selectedDayObj.attr("data-year") || "";
                        var month = selectedDayObj.attr("data-month") || "";
                        var day = selectedDayObj.attr("data-day") || "";
                        if (tool.isNullOrEmptyObject(year) || tool.isNullOrEmptyObject(month) || tool.isNullOrEmptyObject(day)) {
                            return;
                        }
                        month = parseInt(month) + 1;
                        var dateStr = year + "-" + month + "-" + day;
                        $(".date-text").text(dateStr + "  " + tool.getWeekDayStr(dateStr));

                        _self.getEventsByDate(dateStr);
                    });
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    tool.hideLoading(loadingIndexClassName);
                    _self.notMeeting = true;
                    return true;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
        //根据指定的年月日，返回事件列表
        getEventsByDate: function (currentDate, myCallBack) {
          // console.log('getEventsByDate:');
          // console.log(currentDate);

            var _self = this;
            //var containerObj = $(".meeting-list");
            // var containerObj = $("#meetingList");
            // console.log(containerObj);
            // if(tool.isNullOrEmptyObject(containerObj)){
            //     return;
            // }
            //清空数据
            // containerObj.html('');
            _self.notMeeting = true;
            if (tool.isNullOrEmptyObject(currentDate)) {
                _self.notMeeting = true;
                return;
            }

            var allQueryData = tool.combineArray(_self.queryCondictionData, _self.queryCondiction, "Field");
            // console.log("allQueryData：" + JSON.stringify(allQueryData));
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_MeetingHandle_QueryCalendarGetMeetingByDate;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                Date: currentDate,
                QueryCondiction: JSON.stringify(allQueryData)
            };
            var loadingIndexClassName = tool.showLoading();
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    tool.hideLoading(loadingIndexClassName);
                    data = tool.jObject(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        _self.notMeeting = true;
                        return true;
                    }

                    data = data._OnlyOneData.Rows || [];
                    if (data.length <= 0) {
                        _self.notMeeting = true;
                        return true;
                    }

                    //modify by Dylan 改用v-model绑定数据
                    //因为子控件的渲染不能用jq,否则会append不进去
                    // var htmlStr = "";
                    // for(var i =0;i<data.length;i++){
                    //     var teplateTemp = _self.meetingInnerTemplate;
                    //     for(var key in data[i]){
                    //         teplateTemp = teplateTemp.ReplaceAll("{" + key + "}", (data[i][key] || ""));
                    //     }
                    //     htmlStr += teplateTemp;
                    // }
                    //                console.log(htmlStr);

                    // containerObj.append(htmlStr);
                    // _self.notMeeting = false;
                    // console.log(containerObj.html());

                    _self.meetingDatas = data;
                    _self.notMeeting = false;
                    //end modify

                    if (!tool.isNullOrEmptyObject(myCallBack)) {
                        myCallBack();
                    }
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    tool.hideLoading(loadingIndexClassName);
                    _self.notMeeting = true;
                    return true;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },

        setQuerycondition: function (data) {
            var _self = this;
            _self.queryCondiction = data;
            //根据条件获取当前月份数据
            _self.setCalendarEvent(_self.calendarObjGlobal);
        },
        // setQueryconditionOnlyData: function (data) {
        //     var _self = this;
        //     _self.queryCondiction = data;
        // },
    },
        deactivated: function () {
        eventBus.$off('updataCalendarEvent');
        // eventBus.$off('RightPanelCalendarOnlyDataEvent');
        eventBus.$off('RightPanelCalendarEvent');
    },
    beforeDestroy: function () {
        eventBus.$off('updataCalendarEvent');
        // eventBus.$off('RightPanelCalendarOnlyDataEvent');
        eventBus.$off('RightPanelCalendarEvent');
    },
}
</script>

<style scoped>
/*日期显示 style*/
.date-div {
    height: 0.7rem;
    line-height: 0.7rem;
    background: #e9cfae;
    padding: 0 10px;
    width: 100%;
    color: #000;
    box-sizing: border-box;
}

.date-div .calcfont {
    color: #ff5a21;
    margin-right: 5px;
    vertical-align: bottom;
}

.date-div .date-text {
    /*vertical-align:middle;*/
    display: inline-block;
}

/*nav style*/
.calendar-nav {
    position: relative;
    width: 100%;
    height: 40px;
    background: #fff;
    -webkit-box-orient: horizontal;
    -moz-box-orient: horizontal;
    box-orient: horizontal;
    display: -moz-box;
    display: -webkit-box;
    display: box;
    box-sizing: border-box;
    border-bottom: 1px solid beige;
}

.nav-item {
    line-height: 38px;
    margin-bottom: -1px;
    text-align: center;
    /* padding:0 5px; */
    box-sizing: border-box;
    -moz-box-flex: 3;
    -webkit-box-flex: 3;
    box-flex: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    word-break: break-all;
    box-sizing: border-box;
    width: 50%;
}

.active-item {
    color: #009979;
}

.calendar-nav-border {
    position: absolute;
    bottom: -1px;
    left: 0;
    background: #009979;
    width: 50%;
    height: 2px;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}

/*增加按钮*/
.add-btn-div {
    text-align: center;
    position: relative;
    /* border-bottom: 1px solid beige; */
}

.add-div {
    height: 38px;
    line-height: 38px;
    text-align: center;
    display: inline-block;
    margin: 0 auto;
    padding: 0 15px;
}

.add-div .calcfont {
    color: #ff5a21;
}

.add-div .add-text {
    vertical-align: middle;
    color: #ff5a21;
}

/* 列表 style*/
/* .data-events-item{border-bottom: 1px solid beige;line-height:20px;background: #fff;padding: 5px 10px;}
.item-title{font-weight: 600;color:#333;}
.item-time{color:#333;}
.item-time .calc-gengxinshijian{color:#ff5a21;vertical-align: bottom;}
.trip-time-text{font-size:11px;color:#666666;}
.item-address{font-weight: 600;}
.data-events p{height: 50px;line-height: 50px;} */
</style><style>
/*日历style*/
.picker-calendar-week-days::after {
    background: beige !important;
}

.picker-calendar-row:after {
    background: beige !important;
}

#inline-calendar .toolbar {
    font-size: 0.25rem !important;
}

.picker-calendar-month-picker a.icon-only,
.picker-calendar-year-picker a.icon-only {
    height: 0.9rem !important;
    line-height: 0.9rem !important;
}

.picker-calendar-week-days .picker-calendar-week-day {
    line-height: 0.9rem !important;
    overflow: hidden;
    color: #000 !important;
}

.toolbar .toolbar-inner,
.toolbar .toolbar-inner,
.picker-calendar-month-picker a.icon-only,
.picker-calendar-year-picker a.icon-only,
.picker-calendar-month-picker,
.picker-calendar-year-picker,
.picker-calendar-month-picker .current-month-value,
.picker-calendar-year-picker .current-month-value,
.picker-calendar-month-picker .current-year-value,
.picker-calendar-year-picker .current-year-value,
.picker-calendar-year-picker,
.picker-calendar-year-picker .current-year-value {
    height: 0.9rem !important;
    line-height: 0.9rem !important;
}

i.icon.icon-next,
i.icon.icon-prev {
    width: 0.35rem !important;
    height: 0.35rem !important;
}

/* .picker-calendar-week-days {height: 0.42rem!important;} */
/* .picker-calendar-row {height: calc(50% / 6)!important;} */
.current-month-value,
.current-year-value {
    font-size: 16px !important;
}

.picker-calendar-week-days+.picker-calendar-months {
    height: 6rem !important;
}

.weui-picker-calendar,
.weui-picker-calendar .picker-modal-inner {
    height: auto !important;
}

.picker-calendar-day.picker-calendar-day-selected span {
    background: #ff5a21 !important;
}

.picker-calendar-day.picker-calendar-day-today span {}

/*日历style -----end---*/

/*红点点*/
.picker-calendar-day span {
    position: relative;
}

.calendar-event span:after {
    content: '';
    position: absolute;
    bottom: 2px;
    width: 3px;
    height: 3px;
    background: #FF0000;
    border-radius: 50%;
    left: 47%;
}

.picker-calendar-day-selected.calendar-event span:after {
    background: #fff;
}
</style>
