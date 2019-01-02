<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

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
                    <div class="ListCellContentRight switch">
                        <div class="weui-cell__ft">
                            <input @click="allDayClick" class="weui-switch" type="checkbox">

</div>
                        </div>
                    </div>
                </div>
                <div class="ListCell">
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
                            <div class="ListCellContentRightText">Meeting Nature Meeting Nature Meeting Nature Meeting Nature Meeting Nature Meeting Nature Meeting Nature </div>
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
            <div class="showMoreList">
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
                                <div class="ListCellContentLeftText tiShi" @click="VisibilityTiShiClick">Visibility<span class="mui-icon calcfont calc-tishi"></span></div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div class="ListCellContentRightText">Select user or group user or group Select user or group user or group Select user or group user or group</div>
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
                                <div class="ListCellContentLeftText reminderTiShi" @click="reminderClick">Reminder<span class="mui-icon calcfont calc-tishi"></span></div>
                            </div>
                            <div class="ListCellContentRight switch">
                                <div class="weui-cell__ft">
                                    <input @click="reminderSwitch" class="weui-switch" type="checkbox">

</div>
                                </div>
                            </div>
                        </div>
                        <div class="ListCell">
                            <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                            <div class="ListCellContent">
                                <div class="ListCellContentLeft leftContent">
                                    <div class="ListCellContentLeftText">Send Email Before Email Before</div>
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
            <InfoRightPanel :isShowList="isShowMenuList"></InfoRightPanel>
        </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import InfoRightPanel from '../common/InfoRightPanel'
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
        Uploadfile,
        InfoRightPanel
    },
    data() {
        return {
            moreHiddenIcon: true,
            delHidden: true,
            ptitle: 'calendar detail',
            isShowMenuList:false,
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
        reminderSwitch: function (e) {
            if ($(e.target).is(":checked") == true) {
                console.log("true remind");
            } else {
                console.log("false remind");
            }
        },
        reminderClick: function (e) {
            $.alert('System will send email noticafication for Initiator in advance.', "Tip", "", "Ok");
        },
        VisibilityTiShiClick: function (e) {
            $.alert('Public: This record will be seen by everyone.Private: This record will be seen only by Initiator and Initiator’s superior user.Share with others: This record will be seen only by Initiator and Initiator’s superior user, and selected user or group.', "Tip", "", "Ok");

        },
        moreClick: function (e) {
            console.log("gengduo");
            // this.isShowMore = !this.isShowMore;
            var thisBtn = e.target;
            if ($(".showMoreList").css("display") == 'none') {
                $(".showMoreList").slideDown(500, function () {
                    $("#moreIcon").removeClass("calc-shousuojiantou");
                    $("#moreIcon").addClass("calc-shousuoshangjiantou");
                });

            } else {

                $(".showMoreList").slideUp(500, function () {
                    $("#moreIcon").removeClass("calc-shousuoshangjiantou");
                    $("#moreIcon").addClass("calc-shousuojiantou");
                });
            }
        }
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
</style>
