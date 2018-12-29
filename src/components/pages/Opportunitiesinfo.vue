<template>
<div class="content">
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="tipClose">
            <div class="tipCloseContent">This opportunity have been closed, it's only allowed to be viewed.</div>
        </div>
        <div class="OpportunitiesList">
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-yewujihui"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">A320-200 sales project1 for to Air China</textarea>
                    </p>
                </div>
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
                        <div class="ListCellContentRightText">Nomal</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <!-- <div class="ListCell" @click="startClick"> -->
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-shijian"></span></div>
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
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-jiezhishijianicon"></span></div>
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
        </div>

        <div class="ProcessList">
            <div class="group-div">
                <div class="date-div" @click="groupToggle($event)">
                    <span class="calcfont calc-yuanjiaofangkuang"></span>
                    <span class="group-name f14">Conference/Seminar/Training</span>
                    <span class="right">(2)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item f12">
                        <div class="item-title"><span class="spot">•</span>Meeting with Eastern Airlines</div>
                        <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 </span></div>
                        <div class="item-time">
                            <span>2018-11-16 Thursday</span><span>14:30-17:00</span>
                            <span class="right">Cheryl Xiong</span>
                        </div>
                        <div class="doc-block">China Eastern Airlines</div>
                        <div class="doc-list">
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                        </div>
                    </div>

                    <div class="group-item f12">
                        <div class="item-title"><span class="spot">•</span>Meeting with Eastern Airlines</div>
                        <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 </span></div>
                        <div class="item-time">
                            <span>2018-11-16 Thursday</span><span>14:30-17:00</span>
                            <span class="right">Cheryl Xiong</span>
                        </div>
                        <div class="doc-block">China Eastern Airlines</div>
                        <div class="doc-list">
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="group-div">
                <div class="date-div" @click="groupToggle($event)">
                    <span class="calcfont calc-yuanjiaofangkuang"></span>
                    <span class="group-name f14">Conference/Seminar/Training</span>
                    <span class="right">(2)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item f12">
                        <div class="item-title"><span class="spot">•</span>Meeting with Eastern Airlines</div>
                        <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 </span></div>
                        <div class="item-time">
                            <span>2018-11-16 Thursday</span><span>14:30-17:00</span>
                            <span class="right">Cheryl Xiong</span>
                        </div>
                        <div class="doc-block">China Eastern Airlines</div>
                        <div class="doc-list">
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                        </div>
                    </div>

                    <div class="group-item f12">
                        <div class="item-title"><span class="spot">•</span>Meeting with Eastern Airlines</div>
                        <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 </span></div>
                        <div class="item-time">
                            <span>2018-11-16 Thursday</span><span>14:30-17:00</span>
                            <span class="right">Cheryl Xiong</span>
                        </div>
                        <div class="doc-block">China Eastern Airlines</div>
                        <div class="doc-list">
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="group-div">
                <div class="date-div" @click="groupToggle($event)">
                    <span class="calcfont calc-yuanjiaofangkuang"></span>
                    <span class="group-name f14">Conference/Seminar/Training</span>
                    <span class="right">(2)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item f12">
                        <div class="item-title"><span class="spot">•</span>Meeting with Eastern Airlines</div>
                        <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 </span></div>
                        <div class="item-time">
                            <span>2018-11-16 Thursday</span><span>14:30-17:00</span>
                            <span class="right">Cheryl Xiong</span>
                        </div>
                        <div class="doc-block">China Eastern Airlines</div>
                        <div class="doc-list">
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                        </div>
                    </div>

                    <div class="group-item f12">
                        <div class="item-title"><span class="spot">•</span>Meeting with Eastern Airlines</div>
                        <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 </span></div>
                        <div class="item-time">
                            <span>2018-11-16 Thursday</span><span>14:30-17:00</span>
                            <span class="right">Cheryl Xiong</span>
                        </div>
                        <div class="doc-block">China Eastern Airlines</div>
                        <div class="doc-list">
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                            <div>
                                <span class="doc-icon calcfont calc-fujian"></span>
                                <span>TestFileName2.pdf</span>
                                <span class="doc-right right">Proposals</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="showMoreList" style="display:block">
            <div class="MoreList">
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText tiShi" @click="VisibilityTiShiClick">Visibility<span class="mui-icon calcfont calc-tishi"></span></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Select user or group user or group</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Share with</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Share with others</div>
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
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-fengxianyujing"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Risk Tips"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-youxiang1"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText tiShi" @click="reminderClick">Email Reminder <span class="mui-icon calcfont calc-tishi"></span></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Cyclic</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell" id="frequency">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Frequency</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Every Day</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell" id="whatDay">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">What Day</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Monday</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell" id="time">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Time </div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">8:00</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell" id="closingDate">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Before Planning Closing Date</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">10 Days 0 Hours</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-beiwanglu"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Risk Tips">Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description.</textarea>
                        </p>
                    </div>
                </div>
            </div>

            <Uploadfile></Uploadfile>

            <Infofooter> </Infofooter>

        </div>
        <!-- <div class="MoreBtn" @click="moreClick">
            <span id="moreIcon" class="calcfont calc-shousuojiantou"></span>
        </div> -->
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
            ptitle: 'Opportunities detail',
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

        //滚动固定
        var headerH = parseFloat($('header').innerHeight());
        $('.scroll-div').scroll(function () {

            if ($('.group-div').length <= 0) return;
            $('.group-div').each(function () {

                var mTop = $(this).offset().top;

                if (mTop <= headerH) {
                    if (tool.getSystem() === 'ios') {
                        $(this).find(".date-div").addClass('sticky').css({
                            "top": '0px'
                        });
                    } else {
                        $(this).find('.date-div').css({
                            "position": "fixed",
                            "top": headerH + 'px'
                        });
                        $(this).find('.occupy-div').show();
                    }
                } else {
                    if (tool.getSystem() === 'ios') {
                        $(this).find(".date-div").removeClass('sticky').css({
                            "top": '0px'
                        });
                    } else {
                        $(this).find('.date-div').css({
                            "position": "static"
                        });
                        $(this).find('.occupy-div').hide();
                    }
                }
            })
        })
    },
    methods: {
        //点击分组收起展开
        groupToggle: function (e) {
            var el = e.target;

            if ($(el).hasClass('open')) {
                $(el).removeClass('open').siblings('.group-item-list').slideUp(500);
            } else {
                $(el).addClass('open').siblings('.group-item-list').slideDown(500);
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

.tipClose {
    padding: 0.2rem 0.4rem;
    display: none;
}

.tipClose .tipCloseContent {
    height: 0.6rem;
    line-height: 0.28rem;
    font-size: 0.24rem;
}
#closingDate{
    display: none;
}
</style>
