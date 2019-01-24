<template>
<div>

    <Infoheader :isAddNew="isAddNew" :onlyView="onlyView" :operation="operation" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="ContactList">
                <!-- <div class="ListCell">
                <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">photo</div>
                    </div>
                </div>
          </div>-->
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon">
                        <span class="calcfont calc-name"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea
                  data-field="EnglishName"
                  data-fieldcontroltype="textareaInput"
                  class="lanInputPlaceHolder"
                  data-lanid="848_姓名"
                ></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListSpecialCell visible" id="CompanyIDClickObj">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon">
                            <span class="calcfont calc-gongsixinxi"></span>
                        </div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="790_公司"></div>
                        <div class="ListSpecialCellRightIcon">
                            <span class="calcfont calc-you"></span>
                        </div>
                    </div>
                    <div class="ListSpecialCellContent" data-field="CompanyID" data-fieldcontroltype="selectList" data-lanid="790_公司" data-fieldval="" data-selecttype="radio" code="DropDowList_ViewBaseCompanyBaseInf" typevalue="" data-clickObj="CompanyIDClickObj"></div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon">
                        <span class="calcfont calc-zhiwei"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea
                  data-field="Title"
                  data-fieldcontroltype="textareaInput"
                  class="lanInputPlaceHolder"
                  data-lanid="696_职位"
                ></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon">
                        <span class="calcfont calc-mailbox"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea
                  data-field="Email"
                  data-fieldcontroltype="textareaInput"
                  class="lanInputPlaceHolder"
                  data-lanid="697_邮箱"
                ></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon">
                        <span class="calcfont calc-phone"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea
                  data-field="TelPhone"
                  data-fieldcontroltype="textareaInput"
                  class="lanInputPlaceHolder"
                  data-lanid="704_办公电话"
                ></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon">
                        <span class="calcfont calc-mobilephone"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea
                  data-field="Phone"
                  data-fieldcontroltype="textareaInput"
                  class="lanInputPlaceHolder"
                  data-lanid="705_移动电话"
                ></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon">
                        <span class="calcfont calc-zuzhibumen"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea
                  data-field="DepartmentName"
                  data-fieldcontroltype="textareaInput"
                  class="lanInputPlaceHolder"
                  data-lanid="567_部门"
                ></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon">
                        <span class="calcfont calc-chuanzhen"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea
                  data-field="Fax"
                  data-fieldcontroltype="textareaInput"
                  class="lanInputPlaceHolder"
                  data-lanid="703_传真"
                ></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon">
                        <span class="calcfont calc-beizhu"></span>
                    </div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea
                  data-field="ContactRemark"
                  data-fieldcontroltype="textareaInput"
                  class="lanInputPlaceHolder"
                  data-lanid="699_备注"
                ></textarea>
                        </p>
                    </div>
                </div>
            </div>
            <div class="accessList">
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon">
                        <span class="calcfont calc-yidu"></span>
                    </div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="803_可访问"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input
                                data-field="IsPublic"
                                data-lanid="803_可访问"
                                data-fieldcontroltype="picker"
                                data-field-val
                                code="DropDowList_DtbAllTypes"
                                TypeValue="Accessabletype"
                                class="ListCellContentRightText"
                            ></div>
                            <div class="ListCellRightIcon">
                                <span class="calcfont calc-you"></span>
                            </div>
                        </div>
                    </div>

                    <div class="ListCell visible initiatorObj">
                        <div class="ListCellLeftIcon">
                            <span class="calcfont calc-fuzerenicon"></span>
                        </div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText lanText" data-lanid="825_负责人"></div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div class="ListCellContentRightText" data-field="Initiator" data-fieldcontroltype="groupSelectList" data-lanid="825_负责人" data-fieldval="" data-selecttype="checkbox" code="DropDowList_PopedomTeamVsUser" typevalue="" data-fromType="6"></div>
                            </div>
                            <div class="ListCellRightIcon">
                                <span class="calcfont calc-you"></span>
                            </div>
                        </div>
                    </div>
                    <div class="ListCell tip initiatorObj">
                        <div class="tipBox">
                            <p class="f14">
                                <span>*</span>
                                <span class="lanText" data-lanid="850_请注意，当选择私有的时，只有负责人及其上司可以访问并分享。"></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="showMoreList HideWhenNew">
                    <div class="organizationMessage">
                        <div class="ListCell" @click="goToOrganizationsInfo">
                            <div class="ListCellLeftIcon">
                                <span class="calcfont calc-gongsixinxi"></span>
                            </div>
                            <div class="ListCellContent">
                                <div class="ListCellContentLeft leftContent">
                                    <div class="ListCellContentLeftText lanText" data-lanid="851_查看公司信息"></div>
                                </div>
                                <div class="ListCellRightIcon">
                                    <span class="calcfont calc-you"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accessView initiatorObj">
                        <div class="ListCell" @click.stop="goToShareList">
                            <div class="ListCellLeftIcon">
                                <span class="calcfont calc-yidu"></span>
                            </div>
                            <div class="ListCellContent">
                                <div class="ListCellContentLeft leftContent">
                                    <div class="ListCellContentLeftText lanText" data-lanid="852_查看有权限访问的同事"></div>
                                </div>
                                <div class="ListCellRightIcon">
                                    <span class="calcfont calc-you"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Infofooter></Infofooter>
                </div>
            </div>
        </div>
        <InfoRightPanel :isShowClose="isShowClose" :isShowSend="isShowSendBtn" :rightPanelFromType="rightPanelFromType" :rightPanelFromID="rightPanelFromID"></InfoRightPanel>

    </div>
</template>

<script>
import Infoheader from "../common/Infoheader";
import InfoRightPanel from "../common/InfoRightPanel";
import Infofooter from "../common/infoFooter";

export default {
    components: {
        Infoheader,
        Infofooter,
        InfoRightPanel
    },
    data() {
        return {
            ptitle: "contact detail",

            isAddNew: false, //是否添加新纪录
            operation: true, //控制详情页header按钮，ture:显示可操作，false:隐藏
            onlyView: false, //控制页面头部icon,true:不显示头部icon,false:显示

            isFirstEnter: false, //是否首次进入

            companyID: "", //从Contactsof页面过来保存公司id
            companyName: '', //从Contactsof页面过来保存公司Name

            rightPanelFromType: "", //传给右侧菜单用的参数
            rightPanelFromID: "", //传给右侧菜单用的参数
            isShowSendBtn: true, //侧滑是否显示分享给同事选项
            isShowClose: false, //侧滑是否显示关闭这个商业机会选项

        };
    },
    beforeRouteEnter: function (to, from, next) {
        if (from.name == "selectlist" || from.name == "groupselectlist" || from.name == "sharelist" || from.name == "organizationsinfo" || from.name == "poweruser") {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },
    beforeRouteLeave: function (to, from, next) {
        if (to.name == 'contacts') {
            this.$destroy();
        }
        next();
    },
    created: function () {
        this.isFirstEnter = true;
    },
    mounted: function () {},
    activated: function () {
        //从列表获取详情名
        this.ptitle = this.$route.query.infoName || lanTool.lanContent("793_添加联系人");
        //每次进入详情滚动条滚动到顶部
        $(window).scrollTop(0);
        var _self = this;
        //监听保存
        _self.savePageData();
        //监听删除
        _self.deleteData();

        lanTool.updateLanVersion();
        document.activeElement.blur();

        _self.onlyView = Boolean(_self.$route.query.onlyView) || false;
        _self.companyID = _self.$route.query.companyID || '';
        _self.companyName = _self.$route.query.companyName || '';

        _self.rightPanelFromType = "6";
        _self.rightPanelFromID = _self.$route.params.id || "";

        var id = _self.$route.params.id;
        var fromType = "Contactsinfo";

        //若是新增，则隐藏新增不需要显示的模块
        if (tool.isNullOrEmptyObject(id) || Number(id) <= 0) {
            $(".HideWhenNew").hide();
            _self.isAddNew = true;
            _self.operation = false;

        } else {
            $(".HideWhenNew").show();
            _self.isAddNew = false;
            _self.operation = true;
        }

        var _isBack = _self.$route.meta.isBack;

        //若为true,则需要刷新
        if (!_isBack || _self.isFirstEnter) {
            //清空页面数据
            tool.ClearControlData(function () {
                //渲染控件
                tool.InitiateInfoPageControl(_self, id, function () {
                    //渲染textarea 从新增事件进到详情是不会进入渲染数据的方法，这里得多加个textarea高度自适应
                    $("textarea").each(function (index, cur) {
                        $(cur).height('25');
                        tool.autoTextarea(cur);
                    });
                    //控制data-field="Initiator"显示和隐藏
                    $("[data-field='IsPublic']").off('change').on('change', function () {
                        var curObj = $(this);
                        if (tool.isNullOrEmptyObject(curObj)) {
                            return;
                        }

                        var fieldval = curObj.attr("data-fieldval");
                        if (fieldval == "23") {
                            $(".initiatorObj").hide();
                        } else {
                            $(".initiatorObj").show();
                        }
                    });
                    //默认给data-field="Initiator"赋予23(公开) todo 这里要想个方法来赋值

                    //给公司字段赋初始值
                    if (!tool.isNullOrEmptyObject(_self.companyID) && !tool.isNullOrEmptyObject(_self.companyName)) {
                        var obj = $('[data-field="CompanyID"]');
                        if (tool.isNullOrEmptyObject(obj)) {
                            return;
                        }
                        obj.attr('data-fieldval', _self.companyID);
                        obj.text(_self.companyName);
                    }

                    //渲染数据
                    tool.IniInfoData(fromType, id, function () {

                        //渲染textarea
                        $("textarea").each(function (index, cur) {
                            $(cur).height('25');
                            tool.autoTextarea(cur);
                        });

                        //场景：当在selectList页面按刷新按钮再回到详情页
                        if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
                            return;
                        }
                        //更新selectlist控件的结果
                        var curObj = $(
                            "[data-field='" + eventBus.selectListData.field + "']"
                        );
                        if (tool.isNullOrEmptyObject(curObj)) {
                            return;
                        }
                        curObj.attr("data-fieldval", eventBus.selectListData.value.id);
                        curObj.text(eventBus.selectListData.value.text);

                        //清空全局变量
                        eventBus.selectListData = null;
                    });
                });
            });
        } else {

            if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
                return;
            }
            //更新selectlist控件的结果
            var curObj = $("[data-field='" + eventBus.selectListData.field + "']");
            if (tool.isNullOrEmptyObject(curObj)) {
                return;
            }
            curObj.attr("data-fieldval", eventBus.selectListData.value.id);
            curObj.text(eventBus.selectListData.value.text);

            //清空全局变量
            eventBus.selectListData = null;
        }
        _self.$route.meta.isBack = false;
        _self.isFirstEnter = false;

    },
    methods: {
        //查看有权限访问的同事跳转事件
        goToShareList: function () {
            var _self = this;
            var fromType = "6";
            var fromID = _self.$route.params.id || "";
            if (tool.isNullOrEmptyObject(fromID)) {
                return;
            }
            var parameter = {
                fromType: fromType,
                fromID: fromID
            };
            this.$router.push({
                path: "/poweruser",
                query: parameter
            });
        },
        //查看公司信息
        goToOrganizationsInfo: function () {
            var _self = this;
            var companyID = $("[data-field='CompanyID']:first").attr("data-fieldval") || "";
            if (tool.isNullOrEmptyObject(companyID)) {
                return;
            }

            //设置公司信息页面只读
            var urlTemp = "/organizationsinfo/" + companyID;
            var parameter = {
                onlyView: true
            };
            _self.$router.push({
                path: urlTemp,
                query: parameter
            });
        },
        savePageData: function (e) {
            // console.log("savePageData");
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Contactsinfo";
            $("#save").off("click").on("click", function () {
                tool.SaveOrUpdateData(fromType, id, _self, function () {});
            });
        },
        deleteData: function (e) {
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Contactsinfo";
            setTimeout(function () {
                $("#delete").off().on("click", function () {
                    // console.log("delete");
                    tool.DeleteData(fromType, id, _self, function () {});
                });
            }, 0);
        },

    }
};
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";

.accessView,
.organizationMessage {
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

.tipBox p {
    margin: 0;
    padding: 0;
}

.tipBox p span {
    color: red;
}
</style>
