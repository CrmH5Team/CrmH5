<template>
<div>
        <div class="calendar">

            <div id="inline-calendar"></div>

            <div class="calendarDataList">

                <!-- 显示日期 -->
                <div class="f14 date-div open">
                      <span class="calcfont calc-richeng"></span>
                      <span class="date-text">2018-11-16 Thursday</span>
                </div>

                <!-- table切换 -->
                <div class="calendar-nav">
                      <div @click="switchPage(0,$event)" class="nav-item f16 active-item">Meeting</div>
                      <div @click="switchPage(1,$event)" class="nav-item f16" >Trip</div>
                      <div class="calendar-nav-border"></div>
                </div>


                <div>
                    <div v-show="showPage==0" class="pageList">
                        <!-- 增加meeting按钮 -->
                        <div class="add-btn-div">
                              <div class="add-div" @click="goInfoPage()">
                                  <span class="calcfont calc-add"></span>
                                  <span class="add-text">And Meeting</span>
                              </div>
                        </div>
                        <!-- meeting list -->
                        <div v-if="!notMeeting" class="list meeting-list">
                              <div class="data-events-item f12" @click="goInfoPage(5)">
                                    <div class="item-title">Meeting with Eastern Airlines</div>
                                    <div class="item-time f12">
                                        <span class="calcfont calc-gengxinshijian"></span>
                                        <span class="time-text">14:30-17:00</span>
                                        <!-- <span class="right">Cheryl Xiong</span> -->
                                    </div>
                                    <div class="item-address">China Eastern Airlines</div>
                                    <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                              </div>
                              <div class="data-events-item f12" @click="goInfoPage(8)">
                                    <div class="item-title">Meeting with Eastern Airlines</div>
                                    <div class="item-time f12">
                                        <span class="calcfont calc-gengxinshijian"></span>
                                        <span class="time-text">14:30-17:00</span>
                                        <span class="right">Cheryl Xiong</span>
                                    </div>
                                    <div class="item-address">China Eastern Airlines</div>
                                    <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                              </div>
                        </div>
                        <nothing v-if="notMeeting" style="padding-top:0.8rem;"></nothing>

                    </div>

                    <div v-show="showPage==1" class="pageList">
                        <!-- 增加trip按钮 -->
                        <div class="add-btn-div">
                              <div class="add-div" @click="goInfoPage()">
                                  <span class="calcfont calc-add"></span>
                                  <span class="add-text">And Trip</span>
                              </div>
                        </div>

                        <!-- trip list -->
                        <div v-if="!notTrip" class="list trip-list">
                              <div class="data-events-item f12" @click="goInfoPage(5)">
                                    <div class="item-title">
                                        <span>1115-1116东航会议出差上海</span>
                                        <span class="right">审批已通过</span>
                                    </div>
                                    <div class="item-time f12">
                                        <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                                    </div>
                                    <div class="item-div">香港 - 上海（MU726   31/Dec 07:40 - 31/Dec 09:30）</div>
                                    <div class="item-div">上海 - 香港（HX235   4/Jan 09:10 - 4/Jan 11:55）</div>
                                    <div class="item-div">31/Dec - 04/Jan  4晚  上海</div>
                              </div>
                              <div class="data-events-item f12" @click="goInfoPage(15)">
                                    <div class="item-title">
                                        <span>1115-1116东航会议出差上海</span>
                                        <span class="right">审批已通过</span>
                                    </div>
                                    <div class="item-time f12">
                                        <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                                    </div>
                                    <div class="item-div">香港 - 上海（MU726   31/Dec 07:40 - 31/Dec 09:30）</div>
                                    <div class="item-div">上海 - 香港（HX235   4/Jan 09:10 - 4/Jan 11:55）</div>
                                    <div class="item-div">31/Dec - 04/Jan  4晚  上海</div>
                              </div>
                              <div class="data-events-item f12" @click="goInfoPage(50)">
                                    <div class="item-title">
                                        <span>1115-1116东航会议出差上海</span>
                                        <span class="right">审批已通过</span>
                                    </div>
                                    <div class="item-time f12">
                                        <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                                    </div>
                                    <div class="item-div">香港 - 上海（MU726   31/Dec 07:40 - 31/Dec 09:30）</div>
                                    <div class="item-div">上海 - 香港（HX235   4/Jan 09:10 - 4/Jan 11:55）</div>
                                    <div class="item-div">31/Dec - 04/Jan  4晚  上海</div>
                              </div>
                              <div class="data-events-item f12" @click="goInfoPage(8)">
                                    <div class="item-title">
                                        <span>1115-1116东航会议出差上海</span>
                                        <span class="right">审批已通过</span>
                                    </div>
                                    <div class="item-time f12">
                                        <span class="time-text trip-time-text">15/Nov - 16/Nov</span>
                                    </div>
                                    <div class="item-div">香港 - 上海（MU726   31/Dec 07:40 - 31/Dec 09:30）</div>
                                    <div class="item-div">上海 - 香港（HX235   4/Jan 09:10 - 4/Jan 11:55）</div>
                                    <div class="item-div">31/Dec - 04/Jan  4晚  上海</div>
                              </div>

                        </div>
                        <nothing v-if="notTrip" style="padding-top:0.8rem;"></nothing>

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
      'nothing':Nothing
    },
    data(){
        return {
           dateEvents:[],//一天中事件数据
           hasEvents:true, //一天中是否有事件数据
           showPage:0,
          //  date:'',
          //  week:'',

           isFirstEnter:false, // 是否第一次进入，默认false
           notTrip:false,   //没数据
           notMeeting:false, //没数据
        }
    },
    created:function(){
        this.isFirstEnter = true;
    },
    mounted:function(){
        this.initCalendar();

        this.changePos();
    },
    beforeRouteEnter:function(to, from, next){
        if(from.name == 'calendarlistinfo' || from.name == 'calendarlist'){
            to.meta.isBack = true;
        }
        next();
    },
    activated:function(){

        if(!this.$route.meta.isBack || this.isFirstEnter || this.$route.meta.fromSave){
            this.initCalendar();
        }
        this.$route.meta.isBack = false;
        this.$route.meta.fromSave = false;
        this.isFirstEnter = false;
    },
    methods:{
        //点击去详情页
        goInfoPage:function(id){
            var _self = this,
                url = "";
            if(id === undefined){
              id = '';
            }

            if(_self.showPage == 0){
                url = '/meetinginfo/{"AutoID":"'+ id +'"}';
            }else{
                url = '/tripinfo/{"AutoID":"'+ id +'"}';
            }
              _self.$router.push(url);
        },

        //table切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.changePos();
            _self.showPage = num;
        },
        //table底部横条过渡效果
        changePos:function() {
            this.$nextTick(function(){
                var activePos = $('.calendar-nav .active-item').position();
                $('.calendar-nav-border').stop().css({
                    left: activePos.left,
                    // width: $('.calendar-nav .active-item').width()
                });
            })
        },

        //初始化日历
        initCalendar:function(){
            var $this = this;
            $("#inline-calendar").remove();
            $('.calendar').prepend('<div id="inline-calendar"></div>');

            $("#inline-calendar").calendar({
                multiple:false,
                monthNames:[
                    lanTool.lanContent('313_一月'),lanTool.lanContent('314_二月'),
                    lanTool.lanContent('315_三月'),lanTool.lanContent('316_四月'),
                    lanTool.lanContent('317_五月'),lanTool.lanContent('318_六月'),
                    lanTool.lanContent('319_七月'),lanTool.lanContent('320_八月'),
                    lanTool.lanContent('321_九月'),lanTool.lanContent('322_十月'),
                    lanTool.lanContent('323_十一月'),lanTool.lanContent('324_十二月')
                ],
                monthNamesShort:[
                    lanTool.lanContent('313_一月'),lanTool.lanContent('314_二月'),
                    lanTool.lanContent('315_三月'),lanTool.lanContent('316_四月'),
                    lanTool.lanContent('317_五月'),lanTool.lanContent('318_六月'),
                    lanTool.lanContent('319_七月'),lanTool.lanContent('320_八月'),
                    lanTool.lanContent('321_九月'),lanTool.lanContent('322_十月'),
                    lanTool.lanContent('323_十一月'),lanTool.lanContent('324_十二月')
                ],
                dayNames:[
                    lanTool.lanContent('325_周日'),lanTool.lanContent('326_周一'),
                    lanTool.lanContent('327_周二'),lanTool.lanContent('328_周三'),
                    lanTool.lanContent('329_周四'),lanTool.lanContent('330_周五'),
                    lanTool.lanContent('331_周六')
                ],
                dayNamesShort:[
                    lanTool.lanContent('325_周日'),lanTool.lanContent('326_周一'),
                    lanTool.lanContent('327_周二'),lanTool.lanContent('328_周三'),
                    lanTool.lanContent('329_周四'),lanTool.lanContent('330_周五'),
                    lanTool.lanContent('331_周六')
                ],
                dateFormat:'yyyy-mm-dd',
                yearPicker:true,
                value:[ (new Date()).FormatNew('yyyy-MM-dd')], //默认选择的日期
                onChange: function(p, values, displayValues) {
                },
                onDayClick:function(p, dayContainer, year, month, day){
                    month = parseInt(month) + 1;
                    var dateStr = year + "-" + month + "-" +day;
                    $this.getEventsByDate(dateStr);
                },
                onOpen:function (p){
                },
                onMonthAdd:function(p, monthContainer){

                    setTimeout(function(){
                        // $this.setCalendarEvent(p);
                    },1);
                }
            });

        },

        //获取日历事件
        setCalendarEvent:function(calendarObj){
            var $this = this;
            if(!calendarObj){
                return ;
            }
            var calendarObjGlobal = calendarObj;

            //清除事件样式
            $(".picker-calendar-day").removeClass('calendar-event');
            //清空列表数据
            // $(".calendarDataListUl").empty();

            //请求地址
            var urlTemp =
                tool.combineRequestUrl(
                    tool.getConfigValue(tool.config_ajaxUrl),
                    tool.getConfigValue(tool.ajaxUrl_Events_GetEventDays)
                );
            //请求的传入参数
            var jsonDatasTemp = {
                "CurrentLanguageVersion": lanTool.currentLanguageVersion,
                "SessionName": tool.getSessionStorageItem(tool.cache_SessionName) || "",
                "TimeZoneValue": tool.getSessionStorageItem(tool.cache_TimeZoneValue) || "",
                "Year":calendarObj.currentYear,
                "Month":calendarObj.currentMonth + 1 //因为日历的月份是从0开始，因此此处+1
            };

            // loading.show(3,lanTool.lanContent("172_加载中..."));
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: {
                    jsonDatas: JSON.stringify(jsonDatasTemp)
                },
                dataType: 'json',
                success: function(data) {

                    //数据渲染
                    // loading.hidden();
                    if(data.Result != 1) {
                        toast.show(data.Msg);
                        return;
                    }

                    var dateArray = data.Data || [];
                        if(dateArray.length<=0){
                            return;
                        }

                    //写入样式
                    for(var i=0,length =dateArray.length;i<length;i++){
                        var dateTempArray = dateArray[i].split(" ");
                        var dateTemp = new Date(dateTempArray[0]);
                        if(!dateTemp){
                            return;
                        }
                        var year =dateTemp.getFullYear();
                        var monthTemp = dateTemp.getMonth();
                        var day = dateTemp.getDate();

                        $('.picker-calendar-row div[data-year="'+  year+'"][data-month="'+ monthTemp +'"][data-day="'+ day +'"]').addClass('calendar-event');
                    }

                    //判断当前的日历视图中是否有激活的天，若有，则执行getEventsByDate
                    var selectedDayObj = $("div.picker-calendar-day-selected:first");

                    if(!selectedDayObj){
                        return;
                    }

                    var year = selectedDayObj.attr("data-year") ||"";
                    var month = selectedDayObj.attr("data-month") ||"";
                    var day = selectedDayObj.attr("data-day") ||"";
                    if(!year || !month || !day){
                        return;
                    }
                    month = parseInt(month)+1;

                    var dateStr = year + "-" + month + "-" +day;
                    $this.getEventsByDate(dateStr);
                },
                error: function(jqXHR, type, error) {
                    console.log("error");
                    // loading.hidden();
                }
            });

        },

        //根据指定的年月日，返回事件列表
        getEventsByDate:function(currentDate){

                var $this = this;
                if(!currentDate){
                    return ;
                }

                //写入当前时间
                // $this.date = currentDate;
                // $this.week = tool.getWeekDayStr(currentDate);

                //请求地址
                var urlTemp =
                    tool.combineRequestUrl(
                        tool.getConfigValue(tool.config_ajaxUrl),
                        tool.getConfigValue(tool.ajaxUrl_Events_GetEventsByDate)
                    );
                //请求的传入参数
                var jsonDatasTemp = {
                    "CurrentLanguageVersion": lanTool.currentLanguageVersion,
                    "SessionName": tool.getSessionStorageItem(tool.cache_SessionName) || "",
                    "TimeZoneValue": tool.getSessionStorageItem(tool.cache_TimeZoneValue) || "",
                    "Date":currentDate
                };

                $this.dateEvents = [];

                // loading.show(3,lanTool.lanContent("172_加载中..."));
                $.ajax({
                    async: true,
                    type: "post",
                    url: urlTemp,
                    data: {
                        jsonDatas: JSON.stringify(jsonDatasTemp)
                    },
                    dataType: 'json',
                    success: function(data) {

                        //数据渲染
                        // loading.hidden();
                        if(data.Result != 1) {
                            toast.show(data.Msg);
                            return;
                        }

                        $this.dateEvents = data.Data || [];

                        if($this.dateEvents.length<=0){
                            $this.hasEvents = false;
                            return;
                        }else{
                            $this.hasEvents = true;
                        }
                    },
                    error: function(jqXHR, type, error) {
                        console.log("error");
                        // loading.hidden();
                    }
                });

        }
    }


}
</script>


















<style scoped>
/*日期显示 style*/
.date-div{
  height:0.7rem;line-height:0.7rem;background:#e9cfae;padding:0 10px;
  width: 100%;color:#000;box-sizing: border-box;
}
.date-div .calcfont{ color: #ff5a21; margin-right: 5px; vertical-align: bottom;}
.date-div .date-text{/*vertical-align:middle;*/}


/*nav style*/
.calendar-nav{
  position: relative;
  width:100%;height:40px;background: #fff;
  -webkit-box-orient:horizontal;-moz-box-orient:horizontal;box-orient:horizontal;
  display:-moz-box;
  display:-webkit-box;
  display:box;
  box-sizing: border-box;
  border-bottom:1px solid beige;
}
.nav-item{
  line-height:38px;
  margin-bottom: -1px;
  text-align: center;
  /* padding:0 5px; */
  box-sizing: border-box;
  -moz-box-flex:3;
  -webkit-box-flex:3;
  box-flex:3;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  word-break: break-all;
  box-sizing: border-box;
  width:50%;
}
.active-item{color:#009979;}
.calendar-nav-border{
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
.add-btn-div{text-align: center;position:relative;border-bottom: 1px solid beige;}
.add-div{height:38px;line-height:38px;text-align: center;display:inline-block;margin: 0 auto;padding:0 15px;}
.add-div .calcfont{color:#ff5a21;}
.add-div .add-text{vertical-align: middle;color:#ff5a21;}


/* 列表 style*/
/* .data-events-item{border-bottom: 1px solid beige;line-height:20px;background: #fff;padding: 5px 10px;}
.item-title{font-weight: 600;color:#333;}
.item-time{color:#333;}
.item-time .calc-gengxinshijian{color:#ff5a21;vertical-align: bottom;}
.trip-time-text{font-size:11px;color:#666666;}
.item-address{font-weight: 600;}
.data-events p{height: 50px;line-height: 50px;} */

</style>













<style>
/*日历style*/
.picker-calendar-week-days::after{background:beige!important;}
.picker-calendar-row:after{background:beige!important;}
#inline-calendar .toolbar{display:none!important;font-size: 0.25rem!important;}
.picker-calendar-month-picker a.icon-only, .picker-calendar-year-picker a.icon-only{height: 0.9rem!important;line-height: 0.9rem!important;}
.picker-calendar-week-days .picker-calendar-week-day{line-height: 0.9rem!important;overflow: hidden;color:#000!important;}
.toolbar .toolbar-inner,.toolbar .toolbar-inner,.picker-calendar-month-picker a.icon-only, .picker-calendar-year-picker a.icon-only,.picker-calendar-month-picker, .picker-calendar-year-picker,.picker-calendar-month-picker .current-month-value, .picker-calendar-year-picker .current-month-value, .picker-calendar-month-picker .current-year-value, .picker-calendar-year-picker .current-year-value,.picker-calendar-year-picker,.picker-calendar-year-picker .current-year-value {height: 0.9rem!important;line-height: 0.9rem!important;}
i.icon.icon-next, i.icon.icon-prev{width: 0.35rem!important;height: 0.35rem!important;}
/* .picker-calendar-week-days {height: 0.42rem!important;} */
/* .picker-calendar-row {height: calc(50% / 6)!important;} */
.current-month-value,.current-year-value{font-size: 16px!important;}
.picker-calendar-week-days + .picker-calendar-months{height: 6rem!important;}
.weui-picker-calendar,.weui-picker-calendar .picker-modal-inner{height: auto!important;}
.picker-calendar-day.picker-calendar-day-selected span{background:#ff5a21;}
.picker-calendar-day.picker-calendar-day-today span{}
/*日历style -----end---*/

/*红点点*/
.picker-calendar-day span {position: relative;}
.calendar-event span:after {
    content: '';position: absolute;	bottom: 2px;
	width: 3px;	height: 3px;background: #FF0000;border-radius: 50%;
	left: 47%;
}

</style>
