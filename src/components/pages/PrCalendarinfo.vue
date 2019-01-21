<template>
<div>
    <Infoheader :onlyView="onlyView" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="PrCalendarList">
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-mingcheng"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="710_标题"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="calcfont calc-rili1"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText lanText" data-lanid="907_日期"></div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">8/Nov/2018
                        </div>
                    </div>
                    <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-location"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea placeholder="Location"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-renyuanguanli"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="908_请输入邮箱"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="calcfont calc-tixing1"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft">
                        <div class="ListCellContentLeftText reminderTiShi lanText" data-lanid="722_提醒"><span class="calcfont calc-tishi"></span></div>
                    </div>
                    <div class="ListCellContentRight switch">
                        <div class="weui-cell__ft">
                            <input @click="reminderClick" class="weui-switch" type="checkbox">

</div>
                        </div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="909_提前发送邮件"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">1h</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-youxianji"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="716_优先级"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Normal</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beizhutishi"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                           <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="580_备注"></textarea>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
    },
    data() {
        return {
            moreHiddenIcon: false,
            delHidden: false,
            ptitle: 'PrCalendar detail',

            isAddNew: true, //控制详情页header按钮,ture:隐藏勾勾，false:显示勾勾
            operation:false,//控制详情页header按钮，ture:显示可操作，false:隐藏
            onlyView:true, //页面只能查看

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
    },
    methods: {
        reminderClick: function (e) {
            if ($(e.target).is(":checked") == true) {
                console.log("true re");
            } else {
                console.log("false re");
            }

        },

    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
textarea.email
{
    color: #2A79C8;
}
</style>
