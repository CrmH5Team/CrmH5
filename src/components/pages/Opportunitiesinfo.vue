<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">

        <div class="tipBox">
            <div class="tipContent">
                <p class="f12"><span>* </span> 请注意，该商业机会已关闭，仅允许被查看。</p>
            </div>
        </div>
        <div class="OpportunitiesList">
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-shangye"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Business Types</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Opportunity</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell visible">
                <!-- 如果是deal详情 就将icon改为calc-jiaoyi -->
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-yewujihui"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">MSN03092 Sales to Eastern Airlines</textarea>
                    </p>
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
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-fuzerenicon"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Contact</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Niki zhu</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
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
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-fengxianyujing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Risk Tips"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon " @click="followClick"><span class="mui-icon calcfont calc-shoucang1 guanZhu"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Follow it</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Unfollowed</div>
                    </div>
                    <div class="ListCellRightIcon rightIconHidden"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <!-- <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shoucang1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="">Follow it</textarea>
                    </p>
                </div> -->
            </div>
        </div>
        <div class="meetingRecord">
            <div class="headerBlock">
                <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-huiyi"></span></div>
                <div class="headerBlockContent f16">meeting Note</div>
                <div class="headerBlockRightIcon"><span class="mui-icon calcfont calc-jia"></span></div>
            </div>
        </div>
        <div class="meetingRecordList">
            <div class="meetingRecordListCell">
                <div class="headerDiv">
                    <div class="headerDivLeftIcon"><span class="calcfont calc-bianhaonumbered5"></span></div>
                    <div class="headerDivContent">
                        <div class="content">MSN 05789 机身检查会议2</div>
                    </div>
                    <div class="headerDivRightBtn">
                        <div class="rightBtn">查看完整

                        </div>
                    </div>
                    <div class="headerDivRightDelete">
                        <span class="calcfont calc-delete"></span>
                    </div>
                </div>
                <div class="airlinesName">
                    <div class="airlinesNameContent f14">China Eastern Airlines</div>
                </div>
                <div class="meetingRemark">
                    <p f14>会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容。</p>
                </div>
                <div class="meetingDocList">
                    <div class="docListCell">
                        <div class="docListCellLeft">
                            <div class="docListCellLeftContent"><span class="calcfont calc-fujian"></span>TestFileName1.pdf</div>
                        </div>
                        <div class="docListCellRight">
                            <div class="docListCellRightContent">16/Nov 15:00</div>
                        </div>
                    </div>
                    <div class="docListCell">
                        <div class="docListCellLeft">
                            <div class="docListCellLeftContent"><span class="calcfont calc-fujian"></span>TestFileName2.pdf</div>
                        </div>
                        <div class="docListCellRight">
                            <div class="docListCellRightContent">16/Nov 15:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shareBlock">
            <div class="shareTip">
                <p><span>* </span>请注意，负责人及其所有上司可以编辑数据并分享。分享此商业机会后，对应的联系人也将分享给对方。</p>
            </div>
            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-fuzerenicon"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Responsible by</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Niki zhu</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
        </div>

        <div class="accessBlock">
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Colleagues with access查看有权限访问的同事</div>
                    </div>
                    <!-- <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText"></div>
                    </div> -->
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
        </div>

        <Infofooter> </Infofooter>

    </div>
    <InfoRightPanel :items="itemsData" :isShowList="isShowMenuList" :isShowClose="isShowClose" :isShowSend="isShowSend"></InfoRightPanel>

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
            delHidden: false,
            ptitle: 'Opportunities detail',
            itemsData: ['Organizations', 'Contacts'],
            isShowMenuList: false,
            isShowClose: false,
            isShowSend: true,
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

    },
    methods: {
        followClick: function (e) {
            console.log("收藏");
            if ($(".guanZhu").hasClass("calc-shoucang1")) {
                $(".guanZhu").addClass("calc-shoucang");
                $(".guanZhu").removeClass("calc-shoucang1")
            } else {
                $(".guanZhu").addClass("calc-shoucang1");
                $(".guanZhu").removeClass("calc-shoucang")
            }
        },
        // 开关事件
        allDayClick: function (e) {
            if ($(e.target).is(":checked") == true) {
                console.log("true all");
            } else {
                console.log("false all");
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

.tipBox {
    background-color: #ffffff;
    padding: 0.1rem 0.3rem;
}

.tipContent {
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: rgb(242, 242, 242);
    border: solid 1px rgb(242, 242, 242);
    border-radius: 5px;
    color: rgb(102, 102, 102);
}

.tipContent span, {
    color: red;
}

#closingDate {
    display: none;
}

/* 会议记录添加列*/
.meetingRecord {
    margin-top: 10px;
    /* padding: 5px 0; */
    padding-left: 0.3rem;
    padding-right: 0.3rem;

    background-color: #fff;
}

.headerBlock {
    position: relative;
    height: 0.6rem;
    line-height: 0.6rem;
    display: flex;
    padding: 10px 0;
}

.headerBlock:after {
    position: absolute;
    content: '';
    left: 0.6rem;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #F5F5DC;
}

.ListCell:after,
.ListSpecialCell:after {
    background-color: #F5F5DC;
}

.visible:after {
    background-color: #F6E78B;
}

.iconHidden,
.ListCellRightIcon.rightIconHidden {
    display: block;
    visibility: hidden;
}

.headerBlock .headerBlockLeftIcon {
    width: 0.6rem;
    margin: auto 0;
}

.headerBlock .headerBlockLeftIcon .calcfont {
    font-size: 0.44rem;
    color: #8a8a8a;
}

.headerBlock .headerBlockContent {
    width: calc(100% - 1.16rem);
    /* padding-left: 5px; */
    margin: auto 0;
    color: #FF5A21;
    /* font-weight: 500; */
}

.contentListCell .headerBlockContent {
    color: #000000;
}

.headerBlock .headerBlockRightIcon {
    width: 0.56rem;
    text-align: right;
    margin: auto 0;
}

.headerBlock .headerBlockRightIcon .calcfont {
    font-size: 0.4rem;
    color: #FF5A21;
}

.contentListCell .headerBlockRightIcon .calcfont {
    color: #8a8a8a;
}

/* 会议记录列表 */
.meetingRecordList {
    padding-left: 0.3rem;
    padding-right: 0.3rem;

    background-color: #fff;
}

.meetingRecordList .headerDiv {
    position: relative;
    height: 0.6rem;
    /* line-height: 0.6rem; */
    display: flex;
    padding: 10px 0;
}

.headerDiv .headerDivLeftIcon {
    width: 0.6rem;
    margin: auto 0;
}

.headerDiv .headerDivContent {
    width: calc(70% - 1rem);
    margin: auto 0;
    font-size: 0.28rem;
}

.headerDiv .headerDivRightBtn {
    width: calc(30%);
    margin: auto 0;
    color: #2A79C8;
    font-size: 0.28rem;
    text-align: center;

}

.headerDiv .headerDivRightDelete {
    width: 0.4rem;
    height: 0.4rem;
    margin: auto 0;
    /* align-self: auto; */

}

.headerDivRightDelete .calcfont {
    font-size: 0.4rem;
    color: #aaaaaa;
}

.meetingRecordList .headerDiv:after {
    position: absolute;
    content: '';
    left: 0.6rem;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #F5F5DC;
}

.headerDiv .headerDivLeftIcon .calcfont {
    font-size: 0.44rem;
    color: rgb(33, 42, 50);
}

.airlinesName {
    position: relative;
    height: 1rem;
    line-height: 1rem;
}

.airlinesName .airlinesNameContent {
    padding-left: 0.6rem;
}

.airlinesName:after {
    position: absolute;
    content: '';
    left: 0.6rem;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #F5F5DC;
}

.meetingRemark {
    position: relative;
    padding: 0.1rem 0;
    padding-left: 0.6rem;
}

.meetingRemark:after {
    position: absolute;
    content: '';
    left: 0.6rem;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #F5F5DC;
}

.meetingRemark p {
    font-size: 0.28rem;
    line-height: 0.34rem;
}

.meetingDocList {
    padding-left: 0.6rem;
}

.meetingDocList .docListCell {
    position: relative;
    display: flex;
    height: 1rem;
    line-height: 1rem;
}

.meetingDocList .docListCell:after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #F5F5DC;
}

.docListCell .docListCellLeft {
    width: 60%;
    font-size: 0.28rem;
    color: #2A79C8;
}

.docListCell .docListCellRight {
    width: 40%;
    font-size: 0.28rem;
}

.docListCellLeftContent span {
    color: #FF5A21;
}

/* 分享模块 */
.shareBlock {
    margin-top: 10px;
    padding: 0.1rem 0;
    background-color: #fff;
}

.shareBlock .shareTip {
    font-size: 0.28rem;
    line-height: 0.34rem;
    padding-left: 0.9rem;
    padding-right: 0.3rem;
    color: rgb(102, 102, 102);
}

.shareTip span {
    color: red;
}

.accessBlock {
    margin-top: 10px;
}
.accessBlock .ListCellContentLeftText{
   font-weight: 700;
}
.leftContent {
    width: calc(100% - 0.32rem) !important;
}
span.calcfont.calc-shoucang{
    color:#FF5A21 !important;
}
</style>
