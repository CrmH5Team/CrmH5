<template>
<div class="content">
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="ContactList">
            <div class="ListCell" @click="startClick">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">photo</div>
                    </div>
                    <!-- <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">16/Nov 15:00</div>
                    </div>s
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div> -->
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Todd Scott</textarea>
                    </p>
                </div>
            </div>
            <div class="ListSpecialCell" id="Organization">
                <div class="ListSpecialCellField">
                    <div class="ListSpecialCellLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                    <div class="ListSpecialCellFieldContent">Organization</div>
                    <div class="ListSpecialCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="ListSpecialCellContent">Air China</div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Fleet Planning Manager</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">tsott@up12359s.com</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">502-29-3118</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Moblie phone"></textarea>
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
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText tiShi">Visibility<span class="mui-icon calcfont calc-tishi"></span></div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">private</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Department"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="fax"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Remarks"></textarea>
                    </p>
                </div>
            </div>
        </div>
        <div class="organizationsBlock">
            <div class="organizationsHeader">
                <div class="organizationsHeaderBox">
                    <div class="organizationsHeaderBoxLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                    <div class="organizationsHeaderBoxContent f14">organizations info</div>
                    <div class="organizationsHeaderBoxRightIcon"><span class="mui-icon calcfont calc-T"></span></div>
                </div>
            </div>
            <div class="organizationsList">

            </div>
        </div>
        <Uploadfile></Uploadfile>

        <Infofooter> </Infofooter>
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
            ptitle: 'contact detail',
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

.organizationsBlock{
    margin-top: 0.2rem;
    background-color: #fff;
    /* width: 100%; */
}
.organizationsBlock::after{
    position: absolute;
    content: '';
    left:0.;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #A6D4F6;
}
.organizationsBlock .organizationsHeader{
    /* height: 35px; */
    /* line-height: 35px; */
    display: flex;
    padding-left:0.2rem;
    padding-right: 0.3rem;
    /* width: 100%； */
}
.organizationsBlock .organizationsHeader .organizationsHeaderBox
{ 
      /* position: relative; */
    display: flex;
    width: 100%;
}
.organizationsBlock .organizationsHeader .organizationsHeaderBox .organizationsHeaderBoxLeftIcon
{
   width:0.44rem;
    margin: auto 0;
}
.organizationsBlock .organizationsHeader .organizationsHeaderBox .organizationsHeaderBoxRightIcon{
  width: 0.5rem;
   margin: auto 0;
}
.organizationsBlock .organizationsHeader .organizationsHeaderBox .organizationsHeaderBoxContent{
   width:calc(100% - 0.94rem);
   margin: auto 0;
   line-height: 0.7rem;
}
.organizationsHeaderBoxLeftIcon .calcfont{
  font-size: 0.44rem;
}
.organizationsHeaderBoxRightIcon .calcfont
{
  font-size: 0.5rem;
}
</style>
