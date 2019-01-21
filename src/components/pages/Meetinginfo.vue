<template>
<div>
    <Infoheader :isAddNew="isAddNew" :onlyView="onlyView" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="MeetingList">
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-T"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="Title" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="710_标题"></textarea>
                        </p>
                    </div>
                </div>
                <!-- <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft">
                            <div class="ListCellContentLeftText">All day</div>
                        </div>
                        <div class="ListCellContentRight switch">
                            <div class="weui-cell__ft">
                                <input @click="allDayClick" class="weui-switch" type="checkbox">

</div>
                            </div>
                        </div>
                    </div> -->
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="712_开始时间"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">16/Nov 15:00</div>
                            <!-- <input type="text" data-field="" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="StartTime" class="ListCellContentRightText"/> -->
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-time"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="713_结束时间"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">16/Nov 16:00</div>
                            <!-- <input type="text" data-field="" data-fieldControlType="" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="EndTime" class="ListCellContentRightText"/> -->
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-shuxing"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="814_对内/对外"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text" data-field="" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="InsideOrOutside" class="ListCellContentRightText"/>
                            </div>
                            <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>
                    <div class="ListSpecialCell visible" id="Organization">
                        <div class="ListSpecialCellField">
                            <div class="ListSpecialCellLeftIcon"><span class="calcfont calc-gongsixinxi"></span></div>
                            <div class="ListSpecialCellFieldContent lanText" data-lanid="790_公司"></div>
                            <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                        <div class="ListSpecialCellContent" data-field="CompanyID" data-fieldcontroltype="selectList" data-lanid="790_公司" data-fieldval="" data-selecttype="radio" code="DropDowList_ViewBaseCompanyBaseInf" typevalue="" data-clickobj="CompanyIDClickObj"></div>
                    </div>
                    <div class="ListCell visible">
                        <div class="ListCellLeftIcon"><span class="calcfont calc-kehulianxiren"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText lanText" data-lanid="630_联系人"></div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div type="text" data-field="ContactsID" data-fieldControlType="selectList" data-lanid="630_联系人" data-fieldVal="" Code="DropDowList_ViewBaseContactsInf" data-selectType="radio" class="ListCellContentRightText" />
                            </div>
                            <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beiwanglu"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="719_备忘"></textarea>
                            </p>
                        </div>
                    </div>
                </div>
                <Infofooter class="HideWhenNew"> </Infofooter>
                <div class="meetingRecord HideWhenNew">
                    <div class="ListCell" @click="meetingRecordClick">
                        <div class="ListCellLeftIcon"><span class="calcfont calc-yidu"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText lanText" data-lanid="849_查看会议记录"></div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div class="ListCellContentRightText"></div>
                            </div>
                            <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import Infofooter from '../common/infoFooter'
import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Infofooter,
    },
    data() {
        return {

            ptitle: 'Meeting detail',
            isShowMenuList: false,
            isAddNew: false, //是否添加新纪录
            onlyView: false, //控制页面头部icon,true:不显示头部icon,false:显示
        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist') {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },

    created: function () {
        var $this = this;
    },
    mounted: function () {
        eventBus.$on('delete', function (data) {
            console.log(data);
        });

    },
    activated: function () {
        var _self = this;
        //监听保存
        _self.savePageData();
        //监听删除
        _self.deleteData();
        var id = _self.$route.params.id;
        console.log("_self.$route.params.id:" + id);
        var fromType = "Meetinginfo";
        //若是新增，则隐藏新增不需要显示的模块
        if (tool.isNullOrEmptyObject(id) || Number(id) <= 0) {
            $(".HideWhenNew").hide();
            _self.isAddNew = true;
            _self.operation = false;

        } else {
            $(".HideWhenNew").show();
            _self.isAddNew = false;
            _self.operation = false;
        }
    },
    methods: {

        deleteData: function (e) {
            console.log("deleteData");
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Meetinginfo";
            $("#delete").off().on("click", function () {
                tool.DeleteData(fromType, id, _self, function () {});
            });
        },

        savePageData: function (e) {
            console.log("savepageData");
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Meetinginfo";
            $("#save").off("click").on("click", function () {
                 console.log("savepageData");
                tool.SaveOrUpdateData(fromType, id, _self, function () {});
            });
        },
        meetingRecordClick: function () {
            this.$router.push({
                path: '/MeetingNoteinfo/{"AutoID":""}',
            })
        },
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";

.meetingRecord {
    margin: 10px 0;
}

.meetingRecord .ListCellContentLeftText {
    font-weight: 700;
}
</style>
