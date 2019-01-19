<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :saveIcon="saveHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="ListCell visible">
            <div class="ListCellLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
            <div class="ListCellContent">
                <div class="ListCellContentLeft leftContent">
                    <div class="ListCellContentLeftText">Select Existence</div>
                </div>
                <div class="ListCellContentRight rightContent">
                    <div class="ListCellContentRightText"></div>
                </div>
                <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
        </div>
        <div class="creat"><router-link to='/meetinginfo/:id'><div class="creatBtn">Create Meeting</div></router-link></div>
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
            saveHidden:false,
            ptitle: 'add meeting',
            isShowMenuList: false,
            scrollTop: 0, //记录滚动条的位置
            // isShowMore: false,

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

    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
.ListCell.visible:after
{
    background-color: #F5F5DC !important;
}
.creat
{
  padding-top: 10px;
   background-color: #ffffff;
}
.creat .creatBtn{
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #ffffff;
   color: #FF5A21;
}
</style>
