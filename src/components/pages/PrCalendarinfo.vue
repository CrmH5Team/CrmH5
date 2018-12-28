<template>
<div class="content">
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="PrCalendarList">
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-mingcheng"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Event Name 1</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-rili1"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Date</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">8/Nov/2018

                        </div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-location"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Location"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-renyuanguanli"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="请输入邮箱" >cherylxiong@calc.com.hk</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-tixing1"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft">
                        <div class="ListCellContentLeftText reminderTiShi">Reminder<span class="mui-icon calcfont calc-tishi"></span></div>
                    </div>
                    <div class="ListCellContentRight switch">
                        <div class="weui-cell__ft">
                            <input @click="reminderClick" class="weui-switch" type="checkbox">

</div>
                        </div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Send Email Before</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">1h</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-youxianji"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Priority</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Normal</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-web-icon-"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="备注"></textarea>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import Datetimepicker from '../common/Datetimepicker'
import Picker from '../common/Picker'
import Infofooter from '../common/infoFooter'
import Uploadfile from './Uploadfile'
// import commoninfo from '../common/commoninfo.js'

import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Datetimepicker,
        Picker,
        Infofooter,
        Uploadfile
    },
    data() {
        return {
            moreHiddenIcon: false,
            delHidden: false,
            ptitle: 'PrCalendar detail',
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
            // isShowMore: false,

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
        // eventBus.$on('setPageTitle', function (data) {
        //     // $this.pageTitle = data.subject || '';
        // });

    },
    mounted: function () {
        // lanTool.updateLanVersion();
        // var _self = this;
        this.$nextTick(function () {
            //将textarea设置为高度自适应
            $("textarea").each(function (index, cur) {
                tool.autoTextarea(cur);
            });
        })
        eventBus.$on('delete', function (data) {
            console.log(data);
            // alert(data);
        });
        eventBus.$on('save', function (data) {
            console.log(data);
            // alert(data);
        });
    },
    methods: {
        // 开关事件
        allDayClick: function (e) {
            if ($(e.target).is(":checked") == true) {
                console.log("true all");
            } else {
                console.log("false all");
            }

        },
        reminderClick: function (e) {
            if ($(e.target).is(":checked") == true) {
                console.log("true re");
            } else {
                console.log("false re");
            }

        },
        startClick: function (e) {
            // alert("dianji")
        },
        moreClick: function (e) {
            console.log("gengduo");
            // this.isShowMore = !this.isShowMore;
            var thisBtn = e.target;
            if ($(".showMoreList").css("display") == 'none') {
                $(".showMoreList").show();
                // function({
                $("#moreIcon").removeClass("calc-shousuojiantou");
                $("#moreIcon").addClass("calc-shousuoshangjiantou");
                // });
                // $(thisBtn).text("Collapse");

            } else {

                $(".showMoreList").hide();
                // , function () {
                $("#moreIcon").removeClass("calc-shousuoshangjiantou");
                $("#moreIcon").addClass("calc-shousuojiantou");
                // });
                // $(ththisBtnis).text("More");

            }
        }
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
</style>
