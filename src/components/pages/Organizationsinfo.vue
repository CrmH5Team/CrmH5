<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :saveIcon="saveHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="OrganizationsList">
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-en1"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="ShortNameEN" data-fieldControlType="textareaVal" class="lanInputPlaceHolder" data-lanid="733_英文名称" autoHeight="true"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-CH"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="ShortNameCN" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="32_中文名称" autoHeight="true"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-icaocode"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="ICAOCode" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" autoHeight="true" data-lanid="800_ICAO编码"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yewu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="695_业务分类"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text" data-field="BusinessType" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_ViewBaseAllTypes" TypeValue="Companybusinesstype" class="ListCellContentRightText"/>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-nationaarea"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="701_国家"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text" data-field="CountryID" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_ViewBaseCountryInf" class="ListCellContentRightText"/>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-diqiuquanqiu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="702_城市"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text" data-field="CityID" data-fieldControlType="picker" data-fieldVal="" class="ListCellContentRightText"/>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-chengshijingli"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="785_客户经理"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text" data-field="AccountManager" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_AccountManager" class="ListCellContentRightText"/>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-kehuguanli"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="787_是否为现有客户"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text" data-field="ExistingCustomer" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="YesOrNo" class="ListCellContentRightText"/>
                        </div>
                        <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div data-field="IsFollow" data-fieldControlType="icon" data-fieldVal="{'true':'calc-shoucang','false':'calc-shoucang1'}" class="ListCellLeftIcon textLeftIcon" @click="followClick"><span class="mui-icon calcfont calc-noshoucang guanZhu"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP lanText" data-lanid="786_关注"></p>
                    </div>
                </div>
            </div>
            <div class="showMoreList" style="display:block">
                <div class="MoreList">
                    <div class="ListCell">
                        <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shenqingpingji"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea data-field="Rating" data-fieldControlType="textareaInput" autoHeight="true" class="lanInputPlaceHolder" data-lanid="788_评级"></textarea>
                            </p>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-location"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea data-field="RegistrationAddress" data-fieldControlType="textareaInput" autoHeight="true" class="lanInputPlaceHolder" data-lanid="251_地址"></textarea>
                            </p>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-beizhu"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea data-field="OtherRemark" data-fieldControlType="textareaInput" autoHeight="true" class="lanInputPlaceHolder" data-lanid="580_备注"></textarea>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="contactList">
                    <div class="ListCell" @click="goToContactsPage">
                        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-lianxiren2"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText lanText" data-lanid="791_联系人"></div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div class="ListCellContentRightText"></div>
                            </div>
                            <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                        </div>
                    </div>
                </div>
                <!-- <Uploadfile></Uploadfile> -->

                <!-- <Infofooter :modifiedtime="modifiedtime" :modifiedby="modifiedby"> </Infofooter> -->
                <Infofooter></Infofooter>

            </div>
        </div>
    </div>
    <InfoRightPanel :items="itemsData" :isShowList="isShowMenuList" :isShowSend="isShowSendBtn"></InfoRightPanel>

</div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import InfoRightPanel from '../common/InfoRightPanel'
import Infofooter from '../common/infoFooter'
import Uploadfile from './Uploadfile'

//import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Infofooter,
        Uploadfile,
        InfoRightPanel
    },
    data() {
        return {
            moreHiddenIcon: true,
            delHidden: false,
            saveHidden: true,
            ptitle: 'Organizationsinfo detail',
            itemsData: ['Contacts(5)', ' Opportunities(2)', 'Calndar(3)', 'Airline database'],
            isShowMenuList: false,
            isShowSendBtn: false,
            scrollTop: 0, //记录滚动条的位置
            // modifiedtime:"1/Jan/2019",
            // modifiedby:"Dylan Xu",
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
    },
    mounted: function () {
        //lanTool.updateLanVersion();
        document.activeElement.blur();
        
        var id = this.$route.params.id;
        var fromType = "Organizationsinfo";
        //console.log("autoID:" + id);

        //清空页面数据
        tool.ClearControlData(function(){
            //渲染控件
            tool.InitiateInfoPageControl(function(){
                //渲染数据
                tool.IniInfoData(fromType,id,function(){

                });
            });
        });

        

        

        this.$nextTick(function () {
            //将textarea设置为高度自适应
            $("textarea").each(function (index, cur) {
                tool.autoTextarea(cur);
            });
        });

        eventBus.$on('delete', function (data) {
            console.log(data);
        });
    },
    methods: {
        //跳转到联系人界面事件
        goToContactsPage: function () {
            this.$router.push({
                path: '/contactsof',
            })
        },
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
            if ($(".guanZhu").hasClass("calc-noshoucang")) {
                $(".guanZhu").addClass("calc-shoucang");
                $(".guanZhu").removeClass("calc-noshoucang")
                $.toast("关注成功", 1500, function () {});
            } else {
                $(".guanZhu").addClass("calc-noshoucang");
                $(".guanZhu").removeClass("calc-shoucang")
                $.toast("取消关注", 1500, function () {});
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

.contactList {
    margin-top: 10px;
}

.contactList .ListCell:after {
    background-color: #fff;
}

.contactList .ListCellContentLeftText {
    font-weight: 700;
}
</style>
