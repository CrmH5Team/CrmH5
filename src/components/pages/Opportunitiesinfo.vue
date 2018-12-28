<template>
<div class="content">
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="OpportuntiesList">
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="English">Air China</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="China">中国国际航空公司</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-huiyi"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Business Sector</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Airline</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-17"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Region/Area</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Asia Pacific</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-kehulianxiren"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Country</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">China</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-kehulianxiren"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Account Manager</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Jessie Zhao</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-kehulianxiren"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Existing Customer?</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Yes</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shoucang1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="">Follow it</textarea>
                    </p>
                </div>
            </div>
        </div>
        <div class="showMoreList">
            <div class="MoreList">
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-fengxianyujing"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Rating"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-location"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="address"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-fengxianyujing"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Remarks"></textarea>
                        </p>
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
            moreHiddenIcon: true,
            delHidden: true,
            ptitle: 'Opportunitiesinfo detail',
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
        // //监听滚动条
        // $('.scroll-div').on('scroll', function () {
        //     _self.scrollTop = $(this).scrollTop();
        // });
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
