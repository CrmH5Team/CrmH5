<template>
<div>
        <div class="calendar">
            <div id="inline-calendar"></div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <span>{{date}}</span><span>{{week}}</span>
                    </div>
                </div>
            </div>



            <div class="calendarDataList">
                <div class="selectedDate">
                    <span class="date"></span>
                    <span class="week"></span>
                </div>
                <div class="demindList">
                    <span class="calcfont calc-richeng"></span>
                    <span class="lanText" data-lanid="334_事件列表">Event List</span>
                </div>
                <ul v-show="hasEvents" class="calendarDataListUl">
                    <li v-for="item in dateEvents" class="calendarDataListItem">
                        <router-link :to="'/calendarlistinfo/{\'AutoID\':\''+item.id+'\'}'" class="saveOrUpdatePage">
                            <span class="right col1-right">{{item.eventstatus}}</span>
                            <h2 class="mui-ellipsis">{{item.subject}}</h2>
                            <div class="info"><span class="right time">{{item.date_start}}</span></div>
                        </router-link>
                    </li>
                </ul>
                <div v-show="!hasEvents" class="noMessagePrompt lanText" data-lanid="335_暂无事件"></div>

            </div>
        </div>
</div>
</template>



<script>


export default {
    data(){
        return {
           dateEvents:[],//一天中事件数据
           hasEvents:true, //一天中是否有事件数据
           date:'',
           week:'',

           isFirstEnter:false, // 是否第一次进入，默认false
        }
    },
    created:function(){
        this.isFirstEnter = true;
    },
    mounted:function(){
        // this.initCalendar();
    },
    beforeRouteEnter:function(to, from, next){
        if(from.name === 'calendarlistinfo' || from.name === 'calendarlist'){
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
                        $this.setCalendarEvent(p);
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
                "SessionName": tool.getStorageItem(tool.cache_SessionName) || "",
                "TimeZoneValue": tool.getStorageItem(tool.cache_TimeZoneValue) || "",
                "Year":calendarObj.currentYear,
                "Month":calendarObj.currentMonth + 1 //因为日历的月份是从0开始，因此此处+1
            };

            loading.show(3,lanTool.lanContent("172_加载中..."));
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
                    loading.hidden();
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
                    loading.hidden();
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
                $this.date = currentDate;
                $this.week = tool.getWeekDayStr(currentDate);

                //请求地址
                var urlTemp =
                    tool.combineRequestUrl(
                        tool.getConfigValue(tool.config_ajaxUrl),
                        tool.getConfigValue(tool.ajaxUrl_Events_GetEventsByDate)
                    );
                //请求的传入参数
                var jsonDatasTemp = {
                    "CurrentLanguageVersion": lanTool.currentLanguageVersion,
                    "SessionName": tool.getStorageItem(tool.cache_SessionName) || "",
                    "TimeZoneValue": tool.getStorageItem(tool.cache_TimeZoneValue) || "",
                    "Date":currentDate
                };

                $this.dateEvents = [];

                loading.show(3,lanTool.lanContent("172_加载中..."));
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
                        loading.hidden();
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
                        loading.hidden();
                    }
                });

        }
    }


}
</script>


















<style scoped>
.calendar{/*position:fixed;top:0.88rem;bottom:0;left:0;right:0;*/overflow-y: scroll;
-webkit-overflow-scrolling:touch;}
.weui-cells{margin-top: 0!important;font-size: 16px!important;background-color:#efeff4!important;}

.demindList {height: 0.6rem; border-bottom: solid 0.5px #aaaaaa;line-height: 0.64rem;font-size: 0.28rem;
    background-color: #fff;padding-left: 0.2rem;}
.calc-richeng {margin-right: 0.1rem; color: #0bb60f; margin-top: -0.1rem;}

.calendarDataListItem{font-size: 0.25rem;height: 1.16rem;
    position: relative; overflow: hidden; padding: 11px 15px; -webkit-box-sizing: border-box;
    box-sizing: border-box; background:#fff;
}
.calendarDataListItem::after {
    position: absolute; right: 0; bottom: 0; left: 0;
    height: 1px; content: ''; background: #c8c7cc;
}
.saveOrUpdatePage{
    position: relative; display: block;overflow: hidden; margin: -11px -15px;
    padding: inherit; white-space: nowrap; text-overflow: ellipsis; color: inherit;
}
.saveOrUpdatePage .col1-right{ line-height: 0.5rem; font-size: 0.2rem; color: #595959;}
.saveOrUpdatePage  h2 {
    font-size: 0.28rem;font-weight: normal;line-height: 1.2;overflow: hidden; white-space: nowrap;
    text-overflow: ellipsis; margin-top: 5px; margin-bottom: 5px;}
.saveOrUpdatePage .time{font-size: 0.2rem; color: #595959;}
.noMessagePrompt{padding:11px 15px;font-size:0.28rem;color:#595959;background:#fff;text-align: center;}
</style>

<style>
/*日历style*/
.toolbar{font-size: 0.25rem!important;}
.picker-calendar-month-picker a.icon-only, .picker-calendar-year-picker a.icon-only{height: 0.9rem!important;line-height: 0.9rem!important;}
.toolbar .toolbar-inner,.toolbar .toolbar-inner,.picker-calendar-month-picker a.icon-only, .picker-calendar-year-picker a.icon-only,.picker-calendar-month-picker, .picker-calendar-year-picker,.picker-calendar-month-picker .current-month-value, .picker-calendar-year-picker .current-month-value, .picker-calendar-month-picker .current-year-value, .picker-calendar-year-picker .current-year-value,.picker-calendar-year-picker,.picker-calendar-year-picker .current-year-value {height: 0.9rem!important;line-height: 0.9rem!important;}
i.icon.icon-next, i.icon.icon-prev{width: 0.35rem!important;height: 0.35rem!important;}
.picker-calendar-week-days {height: 0.42rem!important;}
/* .picker-calendar-row {height: calc(50% / 6)!important;} */
.current-month-value,.current-year-value{font-size: 16px!important;}
.picker-calendar-week-days + .picker-calendar-months{height: 6rem!important;}
.weui-picker-calendar,.weui-picker-calendar .picker-modal-inner{height: auto!important;}
/*日历style -----end---*/

/*红点点*/
.picker-calendar-day span {position: relative;}
.calendar-event span:after {
    content: '';position: absolute;	bottom: 2px;
	width: 3px;	height: 3px;background: #FF0000;border-radius: 50%;
	left: 47%;
}

</style>
