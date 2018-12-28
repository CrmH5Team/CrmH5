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
                </div>
            </div>
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-name"></span></div>
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
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-zhiwei-"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Title">Fleet Planning Manager</textarea>
                    </p>
                </div>
            </div>
            <div class="ListCell">
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
            <div class="ListCell InvisibleLine" id="Initiator">
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
            </div>
            <div class="ListCell InvisibleLine">
                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-zuzhibumen"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Department"></textarea>
                    </p>
                </div>
            </div>
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
        <div class="organizationsBlock">
            <div class="organizationsHeader" @click="shrink">
                <div class="organizationsHeaderBox">
                    <div class="organizationsHeaderBoxLeftIcon"><span class="mui-icon calcfont calc-gongsixinxi"></span></div>
                    <div class="organizationsHeaderBoxContent f14">organizations info</div>
                    <div class="organizationsHeaderBoxRightIcon"><span class="mui-icon calcfont calc-shangla"></span></div>
                </div>
            </div>
            <div class="organizationsList">
                <div class="ListCell InvisibleLine" @click="startClick">
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
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-chengshijinglixianxing"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Title">Jessie Zhao</textarea>
                        </p>
                    </div>
                </div>
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
        shrink: function (e) {
            console.log("shrink");
            //calc-xiala
            if ($(".organizationsHeaderBoxRightIcon span").hasClass("calc-shangla")) {
                $(".organizationsHeaderBoxRightIcon span").removeClass("calc-shangla");
                $(".organizationsHeaderBoxRightIcon span").addClass("calc-xiala");
                $(".organizationsList").slideUp(500);
            } else {
                $(".organizationsHeaderBoxRightIcon span").addClass("calc-shangla");
                $(".organizationsHeaderBoxRightIcon span").removeClass("calc-xiala");
                $(".organizationsList").slideDown(500);
            }

        },
        startClick: function (e) {
            // alert("dianji")
        },
 
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";

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

.InvisibleLine:after {
    background-color: #D7D7D7;
}

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
</style>
