<template>
<div class="content">
    <Infoheader :title="pageTitle"></Infoheader>

    <div class="scroll-div">
        <div class="CalendarList">
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="calendarListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Firsting Meeting with Eastern Airlines</textarea>
                    </p>
                </div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="calendarListCellContent">
                    <div class="calendarListCellContentLeft">
                        <div class="calendarListCellContentLeftText">All day</div>
                    </div>
                    <div class="calendarListCellContentRigth switch">
                        <label class="bui-switch-label ">
                         <input @click="inputClick" type="checkbox" name="s" ><i class="bui-switch"></i>
                        </label>
                    </div>
                </div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="calendarListCellContent">
                    <div class="calendarListCellContentLeft leftContent">
                        <div class="calendarListCellContentLeftText">Start</div>
                    </div>
                    <div class="calendarListCellContentRight rightContent">
                        <div class="calendarListCellContentRightText">16/Nov 15:00</div>
                    </div>
                    <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="calendarListCellContent">
                    <div class="calendarListCellContentLeft leftContent">
                        <div class="calendarListCellContentLeftText">End</div>
                    </div>
                    <div class="calendarListCellContentRight rightContent">
                        <div class="calendarListCellContentRightText">16/Nov 16:00</div>
                    </div>
                    <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-huiyi"></span></div>
                <div class="calendarListCellContent">
                    <div class="calendarListCellContentLeft leftContent">
                        <div class="calendarListCellContentLeftText">Meeting Nature</div>
                    </div>
                    <div class="calendarListCellContentRight rightContent">
                        <div class="calendarListCellContentRightText">Meeting Nature</div>
                    </div>
                    <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-17"></span></div>
                <div class="calendarListCellContent">
                    <div class="calendarListCellContentLeft leftContent">
                        <div class="calendarListCellContentLeftText">Meeting Type</div>
                    </div>
                    <div class="calendarListCellContentRight rightContent">
                        <div class="calendarListCellContentRightText">Meeting Type</div>
                    </div>
                    <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="calendarListSpecialCell" id="Organization">
                <div class="calendarListSpecialCellField">
                    <div class="calendarListSpecialCellLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                    <div class="calendarListSpecialCellFieldContent">Organization</div>
                    <div class="calendarListSpecialCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="calendarListSpecialCellContent">Organization Organization Organization Organization Organization Organization</div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-kehulianxiren"></span></div>
                <div class="calendarListCellContent">
                    <div class="calendarListCellContentLeft leftContent">
                        <div class="calendarListCellContentLeftText">Contact</div>
                    </div>
                    <div class="calendarListCellContentRight rightContent">
                        <div class="calendarListCellContentRightText">Contact</div>
                    </div>
                    <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-beiwanglu"></span></div>
                <div class="calendarListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Memo ( Suggested length within 200 words)"></textarea>
                    </p>
                </div>
            </div>
        </div>
        <div v-show="isShowMore" class="moreList">
            <div class="MoreCalendarList">
                <div class="calendarListSpecialCell specialCell" id="Opportunity">
                    <div class="calendarListSpecialCellField">
                        <div class="calendarListSpecialCellLeftIcon"><span class="mui-icon calcfont calc-yewujihui"></span></div>
                        <div class="calendarListSpecialCellFieldContent">Opportunity</div>
                        <div class="calendarListSpecialCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                    <div class="calendarListSpecialCellContent">Opportunity Opportunity Opportunity Opportunity Opportunity Opportunity</div>
                </div>
                <div class="calendarListCell" id="Initiator">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-fuzerenicon"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft leftContent">
                            <div class="calendarListCellContentLeftText">Initiator</div>
                        </div>
                        <div class="calendarListCellContentRight rightContent">
                            <div class="calendarListCellContentRightText">Cheryl Xiong</div>
                        </div>
                        <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-youxianji"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft leftContent">
                            <div class="calendarListCellContentLeftText">Priority</div>
                        </div>
                        <div class="calendarListCellContentRight rightContent">
                            <div class="calendarListCellContentRightText">Priority</div>
                        </div>
                        <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-fengxianyujing"></span></div>
                    <div class="calendarListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Risk Tips"></textarea>
                        </p>
                    </div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft leftContent">
                            <div class="calendarListCellContentLeftText tiShi">Visibility<span class="mui-icon calcfont calc-tishi"></span></div>
                        </div>
                        <div class="calendarListCellContentRight rightContent">
                            <div class="calendarListCellContentRightText">Select user or group</div>
                        </div>
                        <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="calendarListCell visible">
                    <div class="calendarListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft leftContent">
                            <div class="calendarListCellContentLeftText">Visibility for</div>
                        </div>
                        <div class="calendarListCellContentRight rightContent">
                            <div class="calendarListCellContentRightText">Market Team</div>
                        </div>
                        <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-tixing1"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft">
                            <div class="calendarListCellContentLeftText reminderTiShi">Reminder<span class="mui-icon calcfont calc-tishi"></span></div>
                        </div>
                        <div class="calendarListCellContentRigth switch">
                            <label class="bui-switch-label ">
                         <input @click="inputClick" type="checkbox" name="s" ><i class="bui-switch"></i>
                        </label>
                        </div>
                    </div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft leftContent">
                            <div class="calendarListCellContentLeftText">Send Email Before</div>
                        </div>
                        <div class="calendarListCellContentRight rightContent">
                            <div class="calendarListCellContentRightText">1h</div>
                        </div>
                        <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
            </div>
            <div class="documentCalendarList">
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-wendang1"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft documentHeader">
                            <div class="calendarListCellContentLeftText documentHeader">Documents</div>
                        </div>
                        <div class="calendarListCellRightIcon documentAddIcon"><span class="mui-icon calcfont calc-jia"></span></div>
                    </div>
                </div>
                <div class="documentList">
                    <div class="calendarListCell">
                        <div class="calendarListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                        <div class="calendarListCellContent">
                            <div class="calendarListCellContentLeft leftContent">
                                <div class="calendarListCellContentLeftText"><span class="mui-icon calcfont calc-fujian"></span>TestFileName1.png</div>
                            </div>
                            <div class="calendarListCellContentRight rightContent">
                                <div class="calendarListCellContentRightText">16/Nov 15:00</div>
                            </div>
                            <div class="calendarListCellRightIcon deleteDoc"><span class="mui-icon calcfont calc-delete"></span></div>
                        </div>
                    </div>
                    <div class="calendarListCell">
                        <div class="calendarListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                        <div class="calendarListCellContent">
                            <div class="calendarListCellContentLeft leftContent">
                                <div class="calendarListCellContentLeftText"><span class="mui-icon calcfont calc-fujian"></span>TestFileName2.png</div>
                            </div>
                            <div class="calendarListCellContentRight rightContent">
                                <div class="calendarListCellContentRightText">16/Nov 15:00</div>
                            </div>
                            <div class="calendarListCellRightIcon deleteDoc"><span class="mui-icon calcfont calc-delete"></span></div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="updateCalendarList">
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft leftContent">
                            <div class="calendarListCellContentLeftText">Updated Time</div>
                        </div>
                        <div class="calendarListCellContentRight rightContent">
                            <div class="calendarListCellContentRightText">13/Nov/2018 15:00</div>
                        </div>
                        <!-- <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div> -->
                    </div>
                </div>
                <div class="calendarListCell">
                    <div class="calendarListCellLeftIcon"><span class="mui-icon calcfont calc-chuangjianren"></span></div>
                    <div class="calendarListCellContent">
                        <div class="calendarListCellContentLeft leftContent">
                            <div class="calendarListCellContentLeftText">Updated by Cheryl Xiong</div>
                        </div>
                        <div class="calendarListCellContentRight rightContent">
                            <div class="calendarListCellContentRightText">Cheryl Xiong</div>
                        </div>
                        <!-- <div class="calendarListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="MoreBtn" @click="moreClick">
            <span id="moreIcon" class="calcfont calc-shousuojiantou"></span>
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

            pageTitle: 'calendar',
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
        eventBus.$on('setPageTitle', function (data) {
            // $this.pageTitle = data.subject || '';
        });

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
