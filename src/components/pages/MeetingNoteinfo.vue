<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="CalendarList">
            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-huiyi"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Meeting Nature</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Firsting Meeting with Eastern Airlines</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Start</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">01/Jan</div>
                    </div>
                    <div class="ListCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
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
                    <div class="ListCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">对内/对外</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">对外</div>
                    </div>
                    <div class="ListCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListSpecialCell specialCell" id="Organization">
                <div class="ListSpecialCellField">
                    <div class="ListSpecialCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-yewujihui"></span></div>
                    <div class="ListSpecialCellFieldContent">Opportunity</div>
                    <div class="ListSpecialCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="ListSpecialCellContent rightIconHidden">中国东方航空公司</div>
            </div>
            <!-- <div class="ListCell">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Organization</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">中国东方航空公司</div>
                    </div>
                    <div class="ListCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div> -->
            <div class="ListCell">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Contact</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Niki</div>
                    </div>
                    <div class="ListCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-beiwanglu"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Memo ( Suggested length within 200 words)"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListSpecialCell specialCell visible">
                <div class="ListSpecialCellField">
                    <div class="ListSpecialCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-yewujihui"></span></div>
                    <div class="ListSpecialCellFieldContent">Linked with Business</div>
                    <div class="ListSpecialCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="ListSpecialCellContent rightIconHidden">MSN06893 Delivery with Air China</div>
            </div>
            <!-- <div class="ListCell visible">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Linked with Business</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">MSN06893 Delivery with Air China</div>
                    </div>
                    <div class="ListCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div> -->
        </div>

        <Uploadfile></Uploadfile>

        <div class="busOpportunities">
            <div class="ListCell" @click="goinDealOrOpportunity">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">查看关联的交易/商业机会</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText"></div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
        </div>

        <Infofooter> </Infofooter>

    </div>
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
            moreHiddenIcon: false,
            delHidden: false,
            ptitle: 'MeetingNote detail',
            isShowMenuList: false,
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
        goinDealOrOpportunity: function () {
            this.$router.push({
                path: '/opportunitiesinfo/:id',
                query: {
                    id: ""
                }
            })
        },

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

.busOpportunities {
    margin: 10px 0;
}

.busOpportunities .ListCellContentLeftText {
    font-weight: 700;
}

.busOpportunities .leftContent {
    width: calc(80% - 0.32rem) !important;
}

.busOpportunities .rightContent {
    width: 20% !important;
}

.ListCell:after,
.specialCell:after {
    background-color: #F5F5DC;
}
</style>
