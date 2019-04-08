<template>
<div>

    <Infoheader class="sticky infoheader" :isAddNew="isAddNew" :onlyView="onlyView" :operation="operation" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="OrganizationsList">
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-en"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="ShortNameEN" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="733_英文名称"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-CH"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="ShortNameCN" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="32_中文名称"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-icaocode"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="ICAOCode" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="800_ICAO编码"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-yewu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="1007_业务分类"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text" data-field="BusinessType" data-lanid="1007_业务分类" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_ViewBaseAllTypes" TypeValue="Companybusinesstype" class="ListCellContentRightText"/>
                        </div>
                            <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-nationaarea"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText lanText" data-lanid="701_国家"></div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div data-field="CountryID" data-fieldControlType="selectList" data-lanid="701_国家" data-fieldVal="" Code="DropDowList_ViewBaseCountryInf" data-selectType="radio" class="ListCellContentRightText" />
                            </div>
                            <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-diqiuquanqiu"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText lanText" data-lanid="702_城市"></div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div data-field="CityID" data-fieldControlType="linkSelectList" data-lanid="702_城市" data-fieldVal="" Code="DropDowList_ViewBaseCountryCity" data-selectType="radio" class="ListCellContentRightText" />
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
                                <div data-field="AccountManager" data-fieldControlType="selectList" data-lanid="785_客户经理" data-fieldVal="" Code="DropDowList_AccountManager" data-selectType="radio" class="ListCellContentRightText" />
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
                        <div class="ListCell HideWhenNew">
                            <div class="ListCellLeftIcon textLeftIcon" @click="followToggle"><span data-field="IsFollow" data-fieldControlType="icon" data-fieldVal="{'true':'calc-shoucang','false':'calc-noshoucang'}" data-defaultVal="false" class="mui-icon calcfont guanZhu"></span></div>
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
                                        <textarea data-field="Rating" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="788_评级"></textarea>
                                    </p>
                                </div>
                            </div>
                            <div class="ListCell">
                                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-location"></span></div>
                                <div class="ListCellLeftText">
                                    <p class="textareaP">
                                        <textarea data-field="RegistrationAddress" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="251_地址"></textarea>
                                    </p>
                                </div>
                            </div>
                            <div class="ListCell">
                                <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-beizhu"></span></div>
                                <div class="ListCellLeftText">
                                    <p class="textareaP">
                                        <textarea data-field="OtherRemark" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="580_备注"></textarea>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <!-- HideWhenNew -->
                        <div v-show="!isAddNew" class="contactList">
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
                        <Infofooter v-show="!isAddNew"></Infofooter>

                    </div>
                </div>
            </div>
            <InfoRightPanel :isShowClose="isShowClose" :isShowSend="isShowSendBtn" :rightPanelFromType="rightPanelFromType" :rightPanelFromID="rightPanelFromID"></InfoRightPanel>

        </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import InfoRightPanel from '../common/InfoRightPanel'
import Infofooter from '../common/infoFooter'
import Uploadfile from './Uploadfile'

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

            ptitle: 'Organizationsinfo detail',

            isAddNew: false, //是否添加新纪录
            operation: false, //控制详情页header按钮，ture:显示可操作，false:隐藏
            onlyView: false, //控制页面头部icon,true:不显示头部icon,false:显示
            onlyMore: false,

            isFirstEnter: false, //是否首次进入

            rightPanelFromType: "", //传给右侧菜单用的参数
            rightPanelFromID: "", //传给右侧菜单用的参数
            isShowSendBtn: false, //侧滑是否显示分享给同事选项
            isShowClose: false, //侧滑是否显示关闭这个商业机会选项
        }
    },
    beforeRouteEnter: function (to, from, next) {
        if (from.name == 'selectlist' || from.name == "groupselectlist" || from.name == 'contactsof') {
            to.meta.isBack = true;
        } else {
            to.meta.isBack = false;
        }
        next();
    },
    // beforeRouteLeave: function (to, from, next) {
    //     console.log("to:"+ to.name);
    //     console.log("from:"+from.name);
    //     // if (to.name == 'contacts') {
    //     //     console.log("destroy");
    //     //     this.$destroy();
    //     // }
    //     next();
    // },
    created: function () {
        this.isFirstEnter = true;
    },
    mounted: function () {
    },
    activated: function () {
        //从列表获取详情名
        this.ptitle = this.$route.query.infoName || lanTool.lanContent("792_添加公司");
        var _self = this;

        _self.onlyView = (_self.$route.query.onlyView == "true" || _self.$route.query.onlyView == true) ? true : false;

        //如果是只查看，控制元素不可以更改
        _self.controlEdit();


        //监听保存
        // _self.savePageData();
        // //监听删除
        // _self.deleteData();

        lanTool.updateLanVersion();
        document.activeElement.blur();

        var id = _self.$route.params.id;

        var fromType = "Organizationsinfo";

        //若是新增，则隐藏新增不需要显示的模块
        if (tool.isNullOrEmptyObject(id) || Number(id) <= 0) {
            $(".HideWhenNew").hide();
            _self.isAddNew = true;
        } else {
            $(".HideWhenNew").show();
            _self.isAddNew = false;
        }

        var _isBack = _self.$route.meta.isBack;
        //若为true,则需要刷新
        if (!_isBack || _self.isFirstEnter) {

            _self.isFirstEnter = false;
            _self.$route.meta.isBack = false;
            //清空页面数据
            tool.ClearControlData(function () {
                //则联动清空城市
                $("[data-field='CityID']").text("").attr("data-fieldVal", "").off('click');
                //渲染控件
                tool.InitiateInfoPageControl(_self, id, function () {
                    //渲染textarea 从新增事件进到详情是不会进入渲染数据的方法，这里得多加个textarea高度自适应
                    $("textarea").each(function (index, cur) {
                        $(cur).height('25');
                        tool.autoTextarea(cur);
                    });
                    //渲染数据
                    tool.IniInfoData(fromType, id, function () {

                        var filterTemp = $("[data-field='CountryID']").attr("data-fieldVal", );
                        if (!tool.isNullOrEmptyObject(filterTemp)) {
                            //添加CityID的事件
                            $("[data-field='CityID']").attr("Filter", filterTemp);
                            $("[data-field='CityID']").off('click').on('click', function () {
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
                        var curObj = $("[data-field='" + eventBus.selectListData.field + "']");
                        if (tool.isNullOrEmptyObject(curObj)) {
                            return;
                        }
                        curObj.attr("data-fieldval", eventBus.selectListData.value.id);
                        curObj.text(eventBus.selectListData.value.text);

                        //若是国家字段，则根据国家值，初始化城市
                        if (eventBus.selectListData.field == "CountryID") {
                            //联动清空城市
                            $("[data-field='CityID']").text("").attr("data-fieldVal", "").off('click');
                            //添加CityID的事件
                            $("[data-field='CityID']").attr("Filter", eventBus.selectListData.value.id);
                            $("[data-field='CityID']").off('click').on('click', function () {
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

            //设置滚动条位置
            $(window).scrollTop(0);

        } else {
            _self.isFirstEnter = false;
            _self.$route.meta.isBack = false;

            var filterTemp = $("[data-field='CountryID']").attr("data-fieldVal", );
            if (!tool.isNullOrEmptyObject(filterTemp)) {
                //添加CityID的事件
                $("[data-field='CityID']").attr("Filter", filterTemp);
                $("[data-field='CityID']").off('click').on('click', function () {
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

            //若是国家字段，则根据国家值，初始化城市
            if (eventBus.selectListData.field == "CountryID") {
                //清空数据,移除点击事件
                $("[data-field='CityID']").text("").attr("data-fieldVal", "").off('click');
                //添加CityID的事件
                $("[data-field='CityID']").attr("Filter", eventBus.selectListData.value.id);
                $("[data-field='CityID']").off('click').on('click', function () {
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
        //跳转到联系人界面事件
        goToContactsPage: function () {
            var _self = this;
            var companyID = _self.$route.params.id || "";
            var companyName = $('[data-field="ShortNameEN"]').val() || '';

            if (tool.isNullOrEmptyObject(companyID) || tool.isNullOrEmptyObject(companyName)) {
                return;
            }
            var urlTemp = "/contactsof";
           var infoName =lanTool.lanContent("791_联系人") ||"";
            var parameter = {
                companyID: companyID,
                companyName: companyName,
                infoName:infoName
            };
            _self.$router.push({
                path: urlTemp,
                query: parameter
            });
        },
        followToggle: function (e) {
            var _self = this;
            var autoID = _self.$route.params.id;
            var fromType = "Organizationsinfo";
            var actionType;
            if ($(".guanZhu").hasClass("calc-shoucang")) {
                //取消关注
                actionType = 0;
            } else {
                //添加关注
                actionType = 1;
            }

            tool.UserFollow(fromType, autoID, actionType, function () {
                if ($(".guanZhu").hasClass("calc-shoucang")) {
                    //取消关注
                    $(".guanZhu").removeClass("calc-shoucang").addClass("calc-noshoucang");
                } else {
                    //添加关注
                    $(".guanZhu").removeClass("calc-noshoucang").addClass("calc-shoucang");
                }
            });
        },
        savePageData: function (e) {
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Organizationsinfo";
            tool.SaveOrUpdateData(fromType, id, _self, function () {});
            // setTimeout(function () {
            //     $("#save").off().on("click", function () {
            //         tool.SaveOrUpdateData(fromType, id, _self, function () {});
            //     });
            // }, 0);
        },
        deleteData: function (e) {
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Organizationsinfo";
            tool.DeleteData(fromType, id, _self, function () {});
            // setTimeout(function () {
            //     $("#delete").off("click").on("click", function () {
            //         tool.DeleteData(fromType, id, _self, function () {});
            //     });
            // }, 0);
        },
        //只查看的情况 控制元素是否可修改
        controlEdit:function(){
            var _self = this;
            if(_self.onlyView){
                _self.$nextTick(function(){
                    $('.OrganizationsList,.MoreList').addClass('disable');
                })
            }else{
                _self.$nextTick(function(){
                    $('.OrganizationsList,.MoreList').removeClass('disable');
                })
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
