<template>
<div>
    <Infoheader class="sticky infoheader" :isAddNew="isAddNew" :onlyView="onlyView" :title="ptitle"></Infoheader>

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
                            <input id="startdate" type="text" data-field="BeginTime" data-fieldControlType="dateTimePicker" data-TimeType="dateTime" data-format="yyyy-MM-dd HH:mm" class="ListCellContentRightText"/>
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
                            <input id="enddate" type="text" data-field="EndTime" data-fieldControlType="dateTimePicker" data-TimeType="dateTime" data-format="yyyy-MM-dd HH:mm" class="ListCellContentRightText"/>
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

                <div class="ListSpecialCell visible" id="CompanyIDClickObj">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="calcfont calc-gongsixinxi"></span></div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="790_公司"></div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent"
                    data-field="CompanyID" data-fieldcontroltype="selectList"
                    data-lanid="790_公司" data-fieldval=""
                    data-selecttype="radio" code="DropDowList_ViewBaseCompanyBaseInfHasContact"
                    typevalue="" data-clickObj="CompanyIDClickObj"
                    data-addUrl="/organizationsinfo"></div>
                </div>

                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-kehulianxiren"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="630_联系人"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div type="text"
                            data-field="ContactsID" data-fieldControlType="linkSelectList"
                            data-lanid="630_联系人" data-fieldVal=""
                            Code="DropDowList_ViewBaseCompanyContactsByCompany" Filter=""
                            data-selectType="radio" class="ListCellContentRightText"
                            data-addUrl="/contactsinfo" data-linkIDField="" data-linkNameField="" data-fromType="6"/>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>

                <div class="ListSpecialCell" id="OppIDTempClickObj">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="calcfont calc-yewujihui"></span></div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="832_关联于商业"></div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent"
                    data-field="OppIDTemp" data-fieldcontroltype="linkedPage"
                    data-lanid="832_关联于商业" data-fieldval=""
                    data-selecttype="radio" code="DropDowList_Opportunity"
                    typevalue="" data-clickObj="OppIDTempClickObj"
                    data-isShowAdd="true" data-fromType="9"></div>
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

            <div v-show="accessMeetingNote" class="meetingRecord">
                <div class="ListCell" @click.stop="viewMeetingNote($event)">
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
            isFirstEnter: false, //是否首次进入
            accessMeetingNote:false,//是否可以查看会议模块
            meetingNoticeID : "",//会议记录id
            oppID : "",//deal pipeline/opportunity ID
            defaultDateTime:"",//新建单据时候的初始时间
            id:''  //会议id
        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist' || from.name == "groupselectlist" || from.name == 'linkedpage' || from.name == 'meetingNoteinfo') {
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
        //从列表获取详情名
        this.ptitle = this.$route.query.infoName || lanTool.lanContent("914_添加会议");
        //每次进入详情滚动条滚动到顶部
        $(window).scrollTop(0);
        var _self = this;
        _self.defaultDateTime = _self.$route.query.defaultDateTime||"";

        lanTool.updateLanVersion();
        document.activeElement.blur();

        _self.id = _self.$route.params.id;

        var fromType = "Meetinginfo";
        //若是新增，则隐藏新增不需要显示的模块
        if (tool.isNullOrEmptyObject(_self.id) || Number(_self.id) <= 0) {
            $(".HideWhenNew").hide();
            _self.isAddNew = true;
            _self.operation = false;
            _self.accessMeetingNote = false;
        } else {
            $(".HideWhenNew").show();
            _self.isAddNew = false;
            _self.operation = false;
        }

        var _isBack = _self.$route.meta.isBack;
        //若为true,则需要刷新
        if (!_isBack || _self.isFirstEnter) {
            _self.isFirstEnter = false;
            _self.$route.meta.isBack = false;

            //清空页面数据
            tool.ClearControlData(function () {
                //则联动清空联系人
                $("[data-field='ContactsID']").text("").attr("data-fieldVal", "").off('click');
                //渲染控件
                tool.InitiateInfoPageControl(_self, _self.id, function () {
                    _self.initDefaultDateTime();
                    //渲染textarea
                    $("textarea").each(function (index, cur) {
                        $(cur).height('25');
                        tool.autoTextarea(cur);
                    });
                    //渲染数据
                    tool.IniInfoData(fromType, _self.id, function (data) {
                        // console.log(data);
                        _self.meetingNoticeID = data["MeetingNoticeID"];

                        //渲染textarea
                        $("textarea").each(function (index, cur) {
                            $(cur).height('25');
                            tool.autoTextarea(cur);
                        });

                        //联动字段
                        _self.bindEvent();
                        _self.initContactsField();

                        //渲染会议记录模块
                        _self.initMeetingNote();

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
                    });
                });
            });

        } else {
            _self.isFirstEnter = false;
            _self.$route.meta.isBack = false;

            //联动字段
            _self.bindEvent();
            _self.initContactsField();

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

            //渲染会议记录模块
            _self.initMeetingNote();

            //清空全局变量
            eventBus.selectListData = null;
        }
    },
    methods: {
        deleteData: function (e) {
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Meetinginfo";
            tool.DeleteData(fromType, id, _self, function () {});

        },

        savePageData: function (e) {
            var _self = this;
            //判断元素是否存在
            if ($("#startdate").length > 0) {
                //开始日期和结束日期进行对比
                var startdate = $("#startdate").val();
                var enddate = $("#enddate").val();

                var compareAlert = lanTool.lanContent("934_开始日期不能大于或等于结束日期") || "";
                var dateEmptyAlert = lanTool.lanContent("935_开始日期或者结束日期不能为空") || "";

                var tips = lanTool.lanContent('933_温馨提示');
                var sure = lanTool.lanContent("545_确定");

                var d1 = new Date(startdate.replace(/\-/g, "\/"));
                var d2 = new Date(enddate.replace(/\-/g, "\/"));

                //开始日期或者结束日期其中一个为空，一个不为空
                if (tool.isNullOrEmptyObject(startdate) || tool.isNullOrEmptyObject(enddate)) {
                    $.alert(dateEmptyAlert, tips,"", sure);
                    return;
                }
              else if ((!tool.isNullOrEmptyObject(startdate) && !tool.isNullOrEmptyObject(enddate)) && d1 >= d2) {
                    $.alert(compareAlert, tips,"", sure);
                    return;
                } else {
                    var id = _self.$route.params.id;
                    var fromType = "Meetinginfo";
                    tool.SaveOrUpdateData(fromType, id, _self, function () {});
                }
            }

        },

        //渲染查看会议记录模块
        initMeetingNote:function(){
            var _self = this;
            _self.oppID = $("[data-field='OppIDTemp']").attr('data-fieldval') || '';
            if(tool.isNullOrEmptyObject(_self.meetingNoticeID) || tool.isNullOrEmptyObject(_self.oppID) || Number(_self.id) <= 0){
                _self.accessMeetingNote = false;
            }else{
                _self.accessMeetingNote = true;
            }
        },

        //点击查看会议记录
        viewMeetingNote: function (e) {
            var _self = this;
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = '';
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                AutoID: _self.id
            };
            var loadingIndexClassName = tool.showLoading();
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    tool.hideLoading(loadingIndexClassName);
                    data = tool.jObject(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        console.log(tool.getMessage(data));
                        return true;
                    }
                    // data = data._OnlyOneData || [];

                    //请求成功后执行的操作
                    var target = $(e.target);
                    var url = "/MeetingNoteinfo/" + _self.meetingNoticeID;
                    var infoName = _self.$route.query.infoName ||"";
                    scheduleID = Number(scheduleID)<=0?"":scheduleID;
                    if(tool.isNullOrEmptyObject(scheduleID)){
                        return;
                    }
                    var parameter = {
                        OppID:_self.oppID,
                        ScheduleID:_self.id,
                        onlyView:true,
                        infoName:infoName,
                        onlyView:_self.onlyView
                    };
                    _self.$router.push({
                        path: url,
                        query: parameter
                    });

                }
            })

        },

        //新建时初始化时间
        initDefaultDateTime:function(){
            var _self = this;
            if(!tool.isNullOrEmptyObject(_self.defaultDateTime)){
                $("#startdate,#enddate").val(_self.defaultDateTime);
            }
        },

        //根据公司字段给联系人字段绑定事件（联动）
        bindEvent:function(){
              var _self = this;
              //添加ContactsID的事件
              var filterTemp = $("[data-field='CompanyID']").attr("data-fieldval") || "";
              if (!tool.isNullOrEmptyObject(filterTemp)) {
                  $("[data-field='ContactsID']").attr("Filter", filterTemp);
                  $("[data-field='ContactsID']").off('click').on('click', function () {
                      var _curObj = $(this);
                      var dataField = _curObj.attr("data-field") || "";
                      var code = _curObj.attr("Code") || "";
                      var filter = _curObj.attr("Filter") || "";
                      var typeValue = _curObj.attr("TypeValue") || "";
                      var value = _curObj.attr("data-fieldVal") || "";
                      var selectType = _curObj.attr("data-selectType") || "";
                      var title = lanTool.lanContent(_curObj.attr("data-lanid") || "");
                      var addUrl = _curObj.attr("data-addUrl") ||"";
                      var linkIDField = filterTemp;//为了在弹出页面的新增上，带出id和name，如新增联系人，需要带上当前公司信息
                      var linkNameField = $("[data-field='CompanyID']").text()||"";
                      var fromType = _curObj.attr("data-fromType") ||"";

                      var parameter = {
                          'field': dataField,
                          'code': code,
                          "typeValue": typeValue,
                          'title': title,
                          'value': value, //已经选择的值
                          'selectType': selectType,
                          "filter": filter,
                          "addUrl":addUrl,
                          "linkIDField":linkIDField,
                          "linkNameField":linkNameField,
                          "fromType":fromType
                      };
                      _self.$router.push({
                          path: '/selectlist',
                          query: parameter
                      });
                  });
              }
        },

        //根据公司值，初始化联系人
        initContactsField:function(){
            var _self = this;
            if(tool.isNullOrEmptyObject(eventBus.selectListData)){
                return;
            }
            if (eventBus.selectListData.field == "CompanyID") {
                //清空数据,移除点击事件
                $("[data-field='ContactsID']").text("").attr("data-fieldVal", "").attr("Filter", "").off('click');
                if(eventBus.selectListData.value.id == '' || eventBus.selectListData.value.id == undefined){
                    return false;
                }
                //添加ContactsID的事件
                $("[data-field='ContactsID']").attr("Filter", eventBus.selectListData.value.id);
                $("[data-field='ContactsID']").off('click').on('click', function () {
                    var _curObj = $(this);
                    var dataField = _curObj.attr("data-field") || "";
                    var code = _curObj.attr("Code") || "";
                    var filter = _curObj.attr("Filter") || "";
                    var typeValue = _curObj.attr("TypeValue") || "";
                    var value = _curObj.attr("data-fieldVal") || "";
                    var selectType = _curObj.attr("data-selectType") || "";
                    var title = lanTool.lanContent(_curObj.attr("data-lanid") || "");
                    var addUrl = _curObj.attr("data-addUrl") ||"";
                    var linkIDField = $("[data-field='CompanyID']").attr("data-fieldval") || "";//为了在弹出页面的新增上，带出id和name，如新增联系人，需要带上当前公司信息
                    var linkNameField = $("[data-field='CompanyID']").text()||"";
                    var fromType = _curObj.attr("data-fromType") ||"";
                    var parameter = {
                        'field': dataField,
                        'code': code,
                        "typeValue": typeValue,
                        'title': title,
                        'value': value, //已经选择的值
                        'selectType': selectType,
                        "filter": filter,
                        "addUrl":addUrl,
                        "linkIDField":linkIDField,
                        "linkNameField":linkNameField,
                        "fromType":fromType
                    };
                    _self.$router.push({
                        path: '/selectlist',
                        query: parameter
                    });
                });

            }

        }
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
.ListCellContentRightText{
    text-align: right;
}
</style>
