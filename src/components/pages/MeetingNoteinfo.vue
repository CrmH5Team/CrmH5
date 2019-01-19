<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :saveIcon="saveHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="meetingNoteList">
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-huiyi"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Meeting Nature</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Firsting Meeting with Eastern Airlines</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Start</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">01/Jan</div>
                        </div>
                        <div class="ListCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">End</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">16/Nov 16:00</div>
                        </div>
                        <div class="ListCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">对内/对外</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">对外</div>
                        </div>
                        <div class="ListCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListSpecialCell specialCell" id="Organization">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon leftIconHidden"><span class="calcfont calc-yewujihui"></span></div>
                        <div class="ListSpecialCellFieldContent">Opportunity</div>
                        <div class="ListSpecialCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent rightIconHidden">中国东方航空公司</div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Contact</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Niki</div>
                        </div>
                        <div class="ListCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beiwanglu"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="Memo ( Suggested length within 200 words)"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListSpecialCell specialCell visible">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon leftIconHidden"><span class="calcfont calc-yewujihui"></span></div>
                        <div class="ListSpecialCellFieldContent">Linked with Business</div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent rightIconHidden">MSN06893 Delivery with Air China</div>
                </div>
            </div>

            <Uploadfile></Uploadfile>

            <div class="busOpportunities">
                <div class="ListCell" @click="goinDealOrOpportunity">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-yidu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">查看关联的交易/商业机会</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText"></div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
            </div>

            <Infofooter> </Infofooter>
        </div>
    </div>
</div>
</template>

<script>
import Infoheader from '../common/Infoheader'
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
    },
    data() {
        return {
            moreHiddenIcon: false,
            delHidden: false,
            saveHidden: true,
            ptitle: 'MeetingNote detail',
        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist') {
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
        goinDealOrOpportunity: function () {
            this.$router.push({
                path: '/opportunitiesinfo/:id',
                query: {
                    id: ""
                }
            })
        },

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
</style>
