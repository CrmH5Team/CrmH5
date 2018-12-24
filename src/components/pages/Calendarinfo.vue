<template>
<div>
    <Infoheader :title="pageTitle"></Infoheader>

    <div class="scroll-div">
        <div class="CalendarList">
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="calendarListCellLeftText"><input type="text" placeholder="Title" /></div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="calendarListCellLeftContent">All day</div>
                    <div class="calendarListCellRigth switch">
                        <label class="bui-switch-label ">
                         <input @click="inputClick" type="checkbox" name="s" ><i class="bui-switch"></i>
                        </label>
                    </div>

                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon time"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="calendarListCellLeftContent">Start</div>
                    <div class="calendarListCellMiddle">
                        <div class="calendarListCellMiddleContent">16/Nov 15:00</div>
                    </div>
                    <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon time"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="calendarListCellLeftContent">End</div>
                    <div class="calendarListCellMiddle">
                        <div class="calendarListCellMiddleContent">16/Nov 16:00</div>
                    </div>
                    <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-huiyi"></span></div>
                    <div class="calendarListCellLeftContent">Meeting Nature</div>
                    <div class="calendarListCellMiddle">
                        <div class="calendarListCellMiddleContent"></div>
                    </div>
                    <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-17"></span></div>
                    <div class="calendarListCellLeftContent">Meeting Type</div>
                    <div class="calendarListCellMiddle">
                        <div class="calendarListCellMiddleContent"></div>
                    </div>
                    <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="calendarListCell" id="Organization">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                    <div class="calendarListCellLeftContent">Organization</div>
                    <div class="calendarListCellMiddle">
                        <div class="calendarListCellMiddleContent"></div>
                    </div>
                    <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-kehulianxiren"></span></div>
                    <div class="calendarListCellLeftContent">Contact</div>
                    <div class="calendarListCellMiddle">
                        <div class="calendarListCellMiddleContent"></div>
                    </div>
                    <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-beiwanglu"></span></div>
                    <div class="calendarListCellLeftText"><input type="text" placeholder="Memo ( Suggested length within 200 words)" /></div>
                    </div>
                </div>
                <div class="MoreCalendarList">
                    <div class="calendarListCell">
                        <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-yewujihui"></span></div>
                        <div class="calendarListCellLeftContent">Opportunity </div>
                        <div class="calendarListCellMiddle">
                            <div class="calendarListCellMiddleContent"></div>
                        </div>
                        <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                    <div class="calendarListCell" id="Initiator">
                        <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-fuzerenicon"></span></div>
                        <div class="calendarListCellLeftContent">Initiator</div>
                        <div class="calendarListCellMiddle">
                            <div class="calendarListCellMiddleContent">Cheryl Xiong</div>
                        </div>
                        <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                    <div class="calendarListCell">
                        <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-youxianji"></span></div>
                        <div class="calendarListCellLeftContent">Priority</div>
                        <div class="calendarListCellMiddle">
                            <div class="calendarListCellMiddleContent">Normal </div>
                        </div>
                        <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>

                    <div class="calendarListCell">
                        <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-fengxianyujing"></span></div>
                        <div class="calendarListCellLeftText"><input type="text" placeholder="Risk Tips" /></div>
                        </div>
                        <div class="calendarListCell">
                            <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                            <div class="calendarListCellLeftContent">Visibility</div>
                            <div class="calendarListCellMiddle">
                                <div class="calendarListCellMiddleContent">Select a user or group</div>
                            </div>
                            <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                        </div>
                        <div class="calendarListCell">
                            <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-tixing1"></span></div>
                            <div class="calendarListCellLeftContent">Reminder</div>
                            <div class="calendarListCellRigth switch">
                                <label class="bui-switch-label ">
                                  <input type="checkbox" checked="" name="s" ><i class="bui-switch"></i>
                                </label>
                            </div>

                        </div>
                        <div class="calendarListCell">
                            <div class="calendarListCellLeftIcon time"><span class="mui-icon calcfont calc-shijian"></span></div>
                            <div class="calendarListCellLeftContent">Send Email Before</div>
                            <div class="calendarListCellMiddle">
                                <div class="calendarListCellMiddleContent">1h</div>
                            </div>
                            <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
                        </div>
                    </div>
                    <div class="MoreBtn" @click="moreClick">
                        More
                    </div>

                    <!-- <Infofooter 
                v-if="!isAdd"
                :createdtime="moduleData.createdtime"
                :modifiedtime="moduleData.modifiedtime"
                :modifiedby="moduleData.modifiedby"
              ></Infofooter> -->

                </div>
            </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import Datetimepicker from '../common/Datetimepicker'
import Picker from '../common/Picker'
import Infofooter from '../common/infoFooter'
// import commoninfo from '../common/commoninfo.js'

import Mixins from '../../mixins'

export default {
    mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Datetimepicker,
        Picker,
        Infofooter
    },
    data() {
        return {
            pageTitle: '',
            id: null,
            isAdd: true, //页面是否是新增状态
            // data:null,
            querySingleUrl: tool.ajaxUrl_Events_QuerySingle, //查询单条记录接口地址
            saveOrUpdateUrl: tool.ajaxUrl_Events_SaveOrUpdate, //数据保存接口地址

            isFirstEnter: false, // 是否第一次进入，默认false

            languageData: {
                'selectDate': lanTool.lanContent('212_请选择日期'),

                'eventstatus': lanTool.lanContent('246_请选择状态'),
                'activitytype': lanTool.lanContent('248_请选择类型'),
                'taskpriority': lanTool.lanContent('250_请选择优先级'),
                'visibility': lanTool.lanContent('251_请选择公开程度'),
                'parent_idfrom': lanTool.lanContent('255_请选择关联于客户/销售机会'),

                'assigned_user_id': lanTool.lanContent(''),
                'contact_id': lanTool.lanContent('201_请选择联系人'),
                'parent_id': lanTool.lanContent('257_请选择客户/销售机会'),
            },

            moduleData: {
                subject: '',
                assigned_user_id: {
                    text: tool.getStorageItem(tool.cache_UserRealName) || "",
                    value: tool.getStorageItem(tool.cache_UserId) || ""
                },
                date_start: '',
                due_date: '',
                eventstatus: '',
                activitytype: '',
                location: '',
                taskpriority: '',
                visibility: '',
                contact_id: {
                    text: '',
                    value: ''
                },
                parent_idfrom: '',
                parent_id: '',
                description: '',

                createdtime: '',
                modifiedtime: '',
                modifiedby: {
                    text: '',
                    value: ''
                },
            },

            scrollTop: 0, //记录滚动条的位置

        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name === 'selectlist') {
            to.meta.isBack = true;
        }
        next();
    },

    created: function () {
        var $this = this;

        //set pageTitlepageTitle
        eventBus.$on('setPageTitle', function (data) {
            $this.pageTitle = data.subject || '';
        });

    },
    methods: {
		// 开关事件
		inputClick:function(e){
		   if ($(e.target).is(":checked") == true) {
			   console.log("true");
		   } else {
			   console.log("false");
		   }
		   
		},
        moreClick: function (e) {
            console.log("gengduo");
            var thisBtn = e.target;
            if ($(".MoreCalendarList").css("display") == 'none') {
                $(".MoreCalendarList").fadeIn();
                $(thisBtn).text("Collapse");

            } else {
                $(".MoreCalendarList").fadeOut();
                $(ththisBtnis).text("More");
            }
        }
    }

}
</script>

<style scoped>
.scroll-div {
    position: fixed;
    top: 0.88rem;
    left: 0;
    width: 100%;
    bottom: 0;
    right: 0;
    /*height: calc(100% - 0.88rem);*/
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #FFFFFF
}

.CalendarList {
    /* height: 100%; */
    background-color: #FFFFFF
}

.calendarListCell {
    position: relative;
    display: flex;
    padding: 10px 10px;
    padding-right: 5px;
    /*border-bottom: solid 1px red;*/
}

.calendarListCell:after {
    position: absolute;
    content: '';
    left: 40px;
    right: 10px;
    bottom: 0;
    height: 1px;
    background-color: #A6D4F6;
}

.calendarListCell input {
    /* outline: none; */
    width: 80%;
}

.MoreCalendarList {
    display: none;
}

.MoreCalendarList .calendarListCell:after {
    background-color: #E5F0F4;
}

.calendarListCell .calendarListCellLeftText {
    flex: 19;
    margin: auto 0;
    padding-left: 5px;
    display: flex;
}

.calendarListCell .calendarListCellLeftText input {
    height: 20px;
    line-height: 20px;
    font-size: 15px;
    color: #666666;
    margin: auto 0;
    padding-left: 0;
    border: none;
    background-color: none;
}

.calendarListCell .switch {
    flex: 9;
    text-align: right;
    padding-right: 5px;
}
.calendarListCell .calendarListCellLeftContent {
    flex: 8;
    margin: auto 0;
    padding-left: 5px;
    line-height: 15px;
}

.calendarListCell .calendarListCellLeftIcon {
    flex: 5;
    text-align: right;
}

.calendarListCell .calendarListCellMiddle {
    flex: 10;
    margin: auto 0;
    padding-left: 10px;
    line-height: 20px;
    text-align: right;
}

.calendarListCell .calendarListCellMiddle .calendarListCellMiddleContent {
    width: 4rem;
    font-size: 15px;
    height: 20px;
    line-height: 20px;
    color: #666666;
    float: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.calendarListCell .calendarListCellMiddle .calendarListCellMiddleContent:after {
    clear: both;
}

.calendarListCell .calendarListCellRight,
.calendarListCell .calendarListCellLeftIcon {
    flex: 1;
    margin: auto 0;
}

.calendarListCell .calendarListCellRight .mui-icon.calcfont {
    color: #cdcdcd;
}

.calendarListCell .calendarListCellLeftIcon .mui-icon.calcfont {
    font-size: 28px;
    color: #8A8A8A;
}

.calendarListCell .time.calendarListCellLeftIcon .mui-icon.calcfont {
    color: #FFFFFF;
}

.MoreBtn {
    margin: 20px auto;
    border: solid 1px #999999;
    border-radius: 22px;
    height: 44px;
    width: 70%;
    line-height: 44px;
    text-align: center;
    color: #FF5A21;
}

/* switch 开关*/
label.bui-switch-label input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
}

label.bui-switch-label .bui-switch {
    width: 50px;
    height: 25px;
    position: relative;
    border: 1px solid #D7D7D7;
    background-color: #D7D7D7;
    box-shadow: #D7D7D7 0 0 0 0 inset;
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    box-sizing: content-box;
}

label.bui-switch-label .bui-switch:before {
    content: '';
    width: 23px;
    height: 23px;
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

label.bui-switch-label input:checked+.bui-switch {
    border-color: #FF5A21;
    box-shadow: #FF5A21 0 0 0 16px inset;
    background-color: #FF5A21;
}

label.bui-switch-label input:checked+.bui-switch:before {
    left: 27px;
}
</style>
