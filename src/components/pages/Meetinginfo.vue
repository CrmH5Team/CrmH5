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
                            <textarea data-field="MeetingTitle" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="710_标题"></textarea>
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
                            <!-- <div class="ListCellContentRightText">16/Nov 15:00</div> -->
                            <input type="text" data-field="BeginTime" data-fieldControlType="dateTimePicker" data-TimeType="dateTime" class="ListCellContentRightText"/>
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
                                <!-- <div class="ListCellContentRightText">16/Nov 16:00</div> -->
                                <input type="text" data-field="EndTime" data-fieldControlType="dateTimePicker" data-TimeType="dateTime" class="ListCellContentRightText"/>
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
                                    <input type="text" data-field="MeetingType" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="InternalExternaltype" class="ListCellContentRightText"/>
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
                                <div class="ListSpecialCellContent" data-field="CompanyID" data-fieldcontroltype="selectList" data-lanid="790_公司" data-fieldval="" data-selecttype="radio" code="DropDowList_ViewBaseCompanyBaseInfHasContact" typevalue="" data-clickobj="CompanyIDClickObj"></div>
                            </div>
                            <div class="ListCell visible">
                                <div class="ListCellLeftIcon"><span class="calcfont calc-kehulianxiren"></span></div>
                                <div class="ListCellContent">
                                    <div class="ListCellContentLeft leftContent">
                                        <div class="ListCellContentLeftText lanText" data-lanid="630_联系人"></div>
                                    </div>
                                    <div class="ListCellContentRight rightContent">
                                        <div type="text" data-field="ContactsID" data-fieldControlType="linkSelectList" data-lanid="630_联系人" data-fieldVal="" Code="DropDowList_ViewBaseCompanyContactsByCompany" Filter="" data-selectType="radio" class="ListCellContentRightText" />
                                    </div>
                                    <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                                </div>
                            </div>
                            <div class="ListCell">
                                <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beiwanglu"></span></div>
                                <div class="ListCellLeftText">
                                    <p class="textareaP">
                                        <textarea data-field="Remark" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="719_备忘"></textarea>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Infofooter class="HideWhenNew"> </Infofooter>
                        <div class="meetingRecord HideWhenNew">
                            <div class="ListCell" @click.stop="viewMeetingNote">
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
            isFirstEnter: false //是否首次进入
        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist' || from.name == "groupselectlist") {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },
    created: function () {
        this.isFirstEnter = true;
    },
    mounted: function () {},
    activated: function () {
        var _self = this;
        //监听保存
        _self.savePageData();
        //监听删除
        _self.deleteData();
        lanTool.updateLanVersion();
        document.activeElement.blur();

        var id = _self.$route.params.id;
        // console.log("_self.$route.params.id:" + id);
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

        var _isBack = _self.$route.meta.isBack;
        //若为true,则需要刷新
        if (!_isBack || _self.isFirstEnter) {
            _self.isFirstEnter = false;
            //清空页面数据
            tool.ClearControlData(function () {
                //则联动清空联系人
                $("[data-field='ContactsID']").text("").attr("data-fieldVal", "").off('click');

                //渲染控件
                tool.InitiateInfoPageControl(_self, id, function () {
                    //渲染textarea 新增详情不能进入渲染数据的方法，在这里刷一下高度自适应
                    $("textarea").each(function (index, cur) {
                        // console.log("change textarea");
                        $(cur).height('25');
                        tool.autoTextarea(cur);
                    });
                    //渲染数据
                    tool.IniInfoData(fromType, id, function () {

                        //渲染textarea
                        $("textarea").each(function (index, cur) {
                            $(cur).height('25');
                            tool.autoTextarea(cur);
                        });

                        //场景：当在selectList页面按刷新按钮再回到详情页
                        // console.log(eventBus.selectListData);
                        if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
                            return;
                        }
                        // console.log(eventBus.selectListData.field);
                        //更新selectlist控件的结果
                        var curObj = $(
                            "[data-field='" + eventBus.selectListData.field + "']"
                        );

                        if (tool.isNullOrEmptyObject(curObj)) {
                            return;
                        }
                        curObj.attr("data-fieldval", eventBus.selectListData.value.id);
                        curObj.text(eventBus.selectListData.value.text);

                        //若是公司字段，则根据公司值，初始化联系人
                        if (eventBus.selectListData.field == "CompanyID") {
                            //联动清空联系人
                            $("[data-field='ContactsID']").text("").attr("data-fieldVal", "").off('click');
                            //添加ContactsID的事件
                            $("[data-field='ContactsID']").attr("Filter", eventBus.selectListData.value.id);
                            $("[data-field='ContactsID']").off('click').on('click', function () {
                                var _curObj = $(this);
                                // console.log(_curObj);
                                var dataField = _curObj.attr("data-field") || "";
                                var code = _curObj.attr("Code") || "";
                                var filter = _curObj.attr("Filter") || "";
                                var typeValue = _curObj.attr("TypeValue") || "";
                                var value = _curObj.attr("data-fieldVal") || "";
                                var selectType = _curObj.attr("data-selectType") || "";
                                var title = lanTool.lanContent(_curObj.attr("data-lanid") || "");
                                var parameter = {
                                    'field': dataField,
                                    'code': code,
                                    "typeValue": typeValue,
                                    'title': title,
                                    'value': value, //已经选择的值
                                    'selectType': selectType,
                                    "filter": filter
                                };
                                _self.$router.push({
                                    path: '/selectlist',
                                    query: parameter
                                });
                            });

                        }

                        //清空全局变量
                        eventBus.selectListData = null;
                    });
                });
            });
        } else {
            _self.isFirstEnter = false;
            if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
                return;
            }
            //更新selectlist控件的结果
            // console.log(eventBus.selectListData.field);
            var curObj = $("[data-field='" + eventBus.selectListData.field + "']");
            if (tool.isNullOrEmptyObject(curObj)) {
                return;
            }
            curObj.attr("data-fieldval", eventBus.selectListData.value.id);
            curObj.text(eventBus.selectListData.value.text);
            //若是公司字段，则根据公司值，初始化联系人
            if (eventBus.selectListData.field == "CompanyID") {
                //清空数据,移除点击事件
                $("[data-field='ContactsID']").text("").attr("data-fieldVal", "").off('click');
                //添加ContactsID的事件
                $("[data-field='ContactsID']").attr("Filter", eventBus.selectListData.value.id);
                $("[data-field='ContactsID']").off('click').on('click', function () {
                    var _curObj = $(this);
                    // console.log(_curObj);
                    var dataField = _curObj.attr("data-field") || "";
                    var code = _curObj.attr("Code") || "";
                    var filter = _curObj.attr("Filter") || "";
                    var typeValue = _curObj.attr("TypeValue") || "";
                    var value = _curObj.attr("data-fieldVal") || "";
                    var selectType = _curObj.attr("data-selectType") || "";
                    var title = lanTool.lanContent(_curObj.attr("data-lanid") || "");
                    var parameter = {
                        'field': dataField,
                        'code': code,
                        "typeValue": typeValue,
                        'title': title,
                        'value': value, //已经选择的值
                        'selectType': selectType,
                        "filter": filter
                    };
                    _self.$router.push({
                        path: '/selectlist',
                        query: parameter
                    });
                });

            }

            //清空全局变量
            eventBus.selectListData = null;
        }
    },
    methods: {
        deleteData: function (e) {
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Contactsinfo";
            $("#delete").off().on("click", function () {
                // console.log("delete");
                tool.DeleteData(fromType, id, _self, function () {});
            });
        },
        savePageData: function (e) {
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Meetinginfo";
            $("#save").off("click").on("click", function () {
                tool.SaveOrUpdateData(fromType, id, _self, function () {

                });
            });
        },
        viewMeetingNote: function () {
            this.$router.push({
                path: '/MeetingNoteinfo/-1',
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
