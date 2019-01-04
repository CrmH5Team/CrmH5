<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="ContactList">
            <!-- <div class="ListCell">
                <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">photo</div>
                    </div>
                </div>
            </div> -->
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-name"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Todd Scott</textarea>
                    </p>
                </div>
            </div>
            <div class="ListSpecialCell visible" id="Organization">
                <div class="ListSpecialCellField">
                    <div class="ListSpecialCellLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                    <div class="ListSpecialCellFieldContent">Organization</div>
                    <div class="ListSpecialCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
                <div class="ListSpecialCellContent">Air China</div>
            </div>
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-zhiwei-"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Fleet Planning Manager</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-youxiang1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">tsott@up12359s.com</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell InvisibleLine">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-dianhua1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">502-29-3118</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell InvisibleLine">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shouji1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Moblie phone"></textarea>
                    </p>
                </div>
            </div>
            <!-- <div class="ListCell InvisibleLine" id="Initiator">
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
            <div class="ListCell InvisibleLine">
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
            </div> -->
            <!-- <div class="ListCell InvisibleLine">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-zuzhibumen"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Department"></textarea>
                    </p>
                </div>
            </div> -->
            <div class="ListCell InvisibleLine">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-chuanzhen"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="fax"></textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell InvisibleLine">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-beizhu"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Remarks"></textarea>
                    </p>
                </div>
            </div>
        </div>
        <!-- <div class="organizationsBlock">
            <div class="organizationsHeader" @click="shrink">
                <div class="organizationsHeaderBox">
                    <div class="organizationsHeaderBoxLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                    <div class="organizationsHeaderBoxContent f14">organizations info</div>
                    <div class="organizationsHeaderBoxRightIcon"><span class="mui-icon calcfont calc-shangla"></span></div>
                </div>
            </div>
            <div class="organizationsList">
                <div class="ListCell InvisibleLine">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-yewu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">UPS Airline</div>
                        </div>
                    </div>
                </div>
                <div class="ListCell InvisibleLine">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-yewu"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Title">Airlines, Computer info Services</textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell InvisibleLine">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-diqiuquanqiu"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Title">Asia Pacific</textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell InvisibleLine">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-nationaarea"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Title">China</textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell InvisibleLine">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-location"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Title">1400 N Hurstboume PkwyLouisville, KY 40223-4015 United States</textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell InvisibleLine">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-chengshijinglixianxing-copy"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Title">Jessie Zhao</textarea>
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <Uploadfile></Uploadfile> -->

        <div class="accessList">
            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Accessable</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Private</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>

            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-fuzerenicon"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Responsible by负责人</div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText">Cheryl Xiong</div>
                    </div>
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
            <div class="ListCell tip">
                <div class="tipBox">
                    <p class="f14" style="margin:0;padding:0"><span style="color:red">*</span> 请注意，当选择私有的时，只有负责人及其上司可以访问并分享。</p>
                </div>

            </div>
        </div>
        <div class="organizationMessage">
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">查看公司信息</div>
                    </div>
                    <!-- <div class="ListCellContentRight rightContent">
                        <div class="ListCellContentRightText"></div>
                    </div> -->
                    <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                </div>
            </div>
        </div>

        <div class="accessView">
            <div class="ListCell">
                <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yidu"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">Colleagues with access</div>
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
            ptitle: 'contact detail',
            itemsData: ['Calndar(3)', 'Opportunities(2)'],
            isShowMenuList: false,
            isShowSendBtn: true,
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
        // eventBus.$on('more', function () {
        //     console.log("more");
        //     // alert(data);
        // });
    },
    methods: {
        shrink: function (e) {
            console.log("shrink");
            //calc-xiala
            if ($(".organizationsList").css("display") != 'none') {
                $(".organizationsList").slideUp(500, function () {
                    $(".organizationsHeaderBoxRightIcon span").removeClass("calc-shangla");
                    $(".organizationsHeaderBoxRightIcon span").addClass("calc-xiala");
                });

            } else {
                $(".organizationsList").slideDown(500, function () {
                    $(".organizationsHeaderBoxRightIcon span").addClass("calc-shangla");
                    $(".organizationsHeaderBoxRightIcon span").removeClass("calc-xiala");
                });

            }

        },

    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";

.scroll-div {
    background-color: rgb(242, 242, 242);
}

.accessView,
.organizationMessage,
.accessList {
    margin-top: 10px;
}

.accessView .ListCell:after,
.organizationMessage .ListCell:after {
    background-color: #fff;
}

.accessView .ListCellContentLeftText,
.organizationMessage .ListCellContentLeftText {
    font-weight: 700;
}

.accessView .leftContent,
.organizationMessage .leftContent {
    width: calc(100% - 0.32rem) !important;
}

.ListCell.tip {
    padding: 9px 0;
}

.ListCell.tip:after {
    background-color: #ffffff;
}

.tipBox {
    padding-left: 0.9rem;
    padding-right: 0.3rem;
    line-height: 0.34rem;
}

.organizationsBlock {
    margin-top: 0.2rem;
    background-color: #fff;
    width: 100%;
    /* padding: 1px 0;
    border-bottom: solid 1px #A6D4F6; */
}

.organizationsHeader {
    border-bottom: solid 1px #A6D4F6;
}

/* .InvisibleLine:after {
    background-color: #D7D7D7;
} */

/* .organizationsHeader:after {
    position: absolute;
    content: '';
    left: 0.;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #A6D4F6;
} */

.organizationsBlock .organizationsHeader {
    display: flex;
    padding-left: 0.2rem;
    padding-right: 0.3rem;
}

.organizationsBlock .organizationsHeader .organizationsHeaderBox {
    display: flex;
    width: 100%;
}

.organizationsBlock .organizationsHeader .organizationsHeaderBox .organizationsHeaderBoxLeftIcon {
    width: 0.44rem;
    margin: auto 0;
}

.organizationsBlock .organizationsHeader .organizationsHeaderBox .organizationsHeaderBoxRightIcon {
    width: 0.5rem;
    margin: auto 0;
}

.organizationsBlock .organizationsHeader .organizationsHeaderBox .organizationsHeaderBoxContent {
    width: calc(100% - 0.94rem);
    margin: auto 0;
    line-height: 0.7rem;
    padding-left: 5px;
}

.organizationsHeaderBoxLeftIcon .calcfont {
    font-size: 0.44rem;
    color: #2a79c8;
}

.organizationsHeaderBoxRightIcon .calcfont {
    font-size: 0.5rem;
    color: #2a79c8;
}
.ListCell:after{
     background-color: #F5F5DC;
}
.ListCell.visible:after{
    background-color: #F6E78B;
}
</style>
