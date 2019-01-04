<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="OrganizationsList">
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-en1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="English">Air China</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-CH"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="China">中国国际航空公司</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yewu"></span></div>
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
            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-diqiuquanqiu"></span></div>
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
            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-nationaarea"></span></div>
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
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-chengshijinglixianxing-copy"></span></div>
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
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-kehuguanli"></span></div>
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
                <div class="ListCellLeftIcon textLeftIcon" @click="followClick"><span  class="mui-icon calcfont calc-shoucang1 guanZhu"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <!-- <textarea autoHeight="true" placeholder="" readonly disabled>Follow it</textarea> -->
                        Follow it
                    </p>
                </div>
            </div>
        </div>
        <div class="showMoreList" style="display:block">
            <div class="MoreList">
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shenqingpingji"></span></div>
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
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-beizhu"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Remarks"></textarea>
                        </p>
                    </div>
                </div>

            </div>
            <div class="contactList">
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-lianxiren2"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">联系人</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText"></div>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
            </div>
            <!-- <Uploadfile></Uploadfile> -->

            <Infofooter> </Infofooter>

        </div>
    </div>
    <InfoRightPanel :items="itemsData" :isShowList="isShowMenuList" :isShowSend="isShowSendBtn"></InfoRightPanel>

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
            ptitle: 'Organizationsinfo detail',
            itemsData: ['Contacts(5)', ' Opportunities(2)', 'Calndar(3)', 'Airline database'],
            isShowMenuList: false,
            isShowSendBtn:false,
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
            // alert(data);
        });
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
        followClick: function (e) {
            console.log("收藏");
            if ($(".guanZhu").hasClass("calc-shoucang1")) {
                $(".guanZhu").addClass("calc-shoucang");
                $(".guanZhu").removeClass("calc-shoucang1")
            } else {
                $(".guanZhu").addClass("calc-shoucang1");
                $(".guanZhu").removeClass("calc-shoucang")
            }
        }
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";

.ListCell .mui-icon.calcfont.calc-shoucang {
    color: #FF5A21 !important;
}
.contactList
{
    margin-top: 10px;
}
.contactList .ListCell::after
{
    background-color: #fff;
}
.contactList .ListCellContentLeftText
{
    font-weight: 700;
}
.ListCell:after{
     background-color: #F5F5DC;
}
.ListCell.visible:after{
    background-color: #F6E78B;
}
</style>
