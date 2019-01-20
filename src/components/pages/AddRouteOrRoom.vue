<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :saveIcon="saveHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="routeList" v-if="isRoute">
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="873_出发地"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="874_目的地"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="875_火车/航班号"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="876_出发时间"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="877_到达时间"></textarea>
                    </p>
                </div>
            </div>
        </div>
        <div class="roomList" v-else>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="878_开始日期"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="879_结束日期"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="880_晚数"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shuxing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea class="lanInputPlaceHolder" data-lanid="881_城市"></textarea>
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
            saveHidden: false,
            ptitle: lanTool.lanContent("882_添加路线/机票申请"),
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
      var id = this.$route.query.id;
      if (id == "route") {
          this.isRoute = true;
          this.ptitle = lanTool.lanContent("882_添加路线/机票申请");
      } else {
           this.isRoute = false;
           this.ptitle = lanTool.lanContent("883_添加住宿");
      }
      console.log(">>>>" + id);
      
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
</style>
