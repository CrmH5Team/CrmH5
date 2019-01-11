<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :saveIcon="saveHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
        <div class="MeetingList">
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Firsting Meeting with Eastern Airlines</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell visible">
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
                <div class="ListCell visible">
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
                <div class="ListCell visible">
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
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">对内/对外</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">对外</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListSpecialCell visible" id="Organization">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                        <div class="ListSpecialCellFieldContent">Organization</div>
                        <div class="ListSpecialCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent">Organization</div>
                </div>
                <div class="ListCell visible">
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
            <Infofooter> </Infofooter>
            <div class="meetingRecord">
                <div class="ListCell" @click="meetingRecordClick">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">查看会议记录</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText"></div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import InfoRightPanel from '../common/InfoRightPanel'
import Infofooter from '../common/infoFooter'
import Uploadfile from './Uploadfile'

import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Infofooter,
        Uploadfile,
        InfoRightPanel
    },
    data() {
        return {
            moreHiddenIcon: false,
            delHidden: false,
            saveHidden: true,
            ptitle: 'Meeting detail',
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
        this.$nextTick(function () {
            //将textarea设置为高度自适应
            $("textarea").each(function (index, cur) {
                tool.autoTextarea(cur);
            });
        })
        eventBus.$on('delete', function (data) {
            console.log(data);
        });

    },
    methods: {
        meetingRecordClick: function () {
            this.$router.push({
                path: '/MeetingNoteinfo/{"AutoID":""}',
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

    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";

.meetingRecord {
    margin: 10px 0;
}

.meetingRecord .ListCellContentLeftText {
    font-weight: 700;
}
</style>
