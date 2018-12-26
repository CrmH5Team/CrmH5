<template>
<div class="content">
    <Infoheader :moreHidden="moreHidden" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="CalendarList">
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Firsting Meeting with Eastern Airlines</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft">
                        <div class="ListCellContentLeftText">All day</div>
                    </div>
                    <!-- <div class="ListCellContentRight switch"> -->
                        <label class="bui-switch-label ">
                         <input @click="inputClick" type="checkbox" name="s" checked='checked'><i class="bui-switch"></i>
                        </label>
                    <!-- </div> -->
                </div>
            </div>
            <div class="ListCell" @click="startClick">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Start</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">16/Nov 15:00</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">End</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">16/Nov 16:00</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-huiyi"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Meeting Nature</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Meeting Nature</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-17"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Meeting Type</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Meeting Type</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListSpecialCell" id="Organization">
                <div class="ListSpecialCellField">
                    <div class="ListSpecialCellLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                    <div class="ListSpecialCellFieldContent">Organization</div>
                    <div class="ListSpecialCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="ListSpecialCellContent">Organization</div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-kehulianxiren"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Contact</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Contact</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-beiwanglu"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Memo ( Suggested length within 200 words)"></textarea>
                    </p>
                </div>
            </div>
        </div>
        <div v-show="isShowMore" class="moreList">
            <div class="MoreList">
                <div class="ListSpecialCell specialCell" id="Opportunity">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="mui-icon calcfont calc-yewujihui"></span></div>
                        <div class="ListSpecialCellFieldContent">Opportunity</div>
                        <div class="ListSpecialCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent">Opportunity</div>
                </div>
                <div class="ListCell" id="Initiator">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-fuzerenicon"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Initiator</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Cheryl Xiong</div>
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
                            <div class="ListCellContentRightText">Priority</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-fengxianyujing"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Risk Tips"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText tiShi">Visibility<span class="mui-icon calcfont calc-tishi"></span></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Select user or group</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Visibility for</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Market Team</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-tixing1"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft">
                            <div class="ListCellContentLeftText reminderTiShi">Reminder<span class="mui-icon calcfont calc-tishi"></span></div>
                        </div>
                        <!-- <div class="ListCellContentRight switch"> -->
                            <label class="bui-switch-label ">
                         <input @click="inputClick" type="checkbox" name="s" checked><i class="bui-switch"></i>
                        </label>
                        <!-- </div> -->
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
            </div>

            <Uploadfile></Uploadfile>

            <Infofooter> </Infofooter>

        </div>
        <div class="MoreBtn" @click="moreClick">
            <span id="moreIcon" class="calcfont calc-shousuojiantou"></span>
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
            moreHidden: false,
            delHidden: true,
            ptitle: 'detail',
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
            isShowMore: false,

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
        // //监听滚动条
        // $('.scroll-div').on('scroll', function () {
        //     _self.scrollTop = $(this).scrollTop();
        // });
    },
    methods: {
        // 开关事件
        inputClick: function (e) {
            if ($(e.target).is(":checked") == true) {
                console.log("true");
            } else {
                console.log("false");
            }

        },
        startClick:function(e){
            // alert("dianji")
        },
        moreClick: function (e) {
            console.log("gengduo");
            this.isShowMore = !this.isShowMore;
            var thisBtn = e.target;
            if (this.isShowMore) {
                // $(".MoreCalendarList").fadeIn();
                // $(thisBtn).text("Collapse");
                $("#moreIcon").removeClass("calc-shousuojiantou");
                $("#moreIcon").addClass("calc-shousuoshangjiantou");

            } else {
                // $(".MoreCalendarList").fadeOut();
                // $(ththisBtnis).text("More");
                $("#moreIcon").removeClass("calc-shousuoshangjiantou");
                $("#moreIcon").addClass("calc-shousuojiantou");
            }
        }
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
</style>
