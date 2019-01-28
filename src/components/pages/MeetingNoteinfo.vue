<template>
<div>

    <Infoheader :isAddNew="isAddNew" :onlyView="onlyView" :operation="operation" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="meetingNoteList">

                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-huiyi"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="818_会议"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div type="text" data-field="ScheduleID" data-fieldControlType="selectList" data-lanid="818_会议" data-fieldVal="" Code="DropDowList_Meeting" Filter="" data-selectType="radio" class="ListCellContentRightText" />
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>

                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="712_开始时间"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input id="startdate" type="text" data-field="BeginTime" data-fieldControlType="dateTimePicker" data-TimeType="dateTime" data-format="yyyy-MM-dd HH:mm" class="ListCellContentRightText"/>
                        </div>
                            <div class="ListCellRightIcon"><span class="calcfont"></span></div>
                    </div>
                </div>

                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="713_结束时间"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input id="enddate" type="text" data-field="EndTime" data-fieldControlType="dateTimePicker" data-TimeType="dateTime" data-format="yyyy-MM-dd HH:mm" class="ListCellContentRightText"/>
                        </div>
                            <div class="ListCellRightIcon"><span class="calcfont"></span></div>
                    </div>
                </div>

                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="814_对内/对外"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text" data-field="MeetingType" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="InternalExternaltype" class="ListCellContentRightText"/>
                        </div>
                            <div class="ListCellRightIcon"><span class="calcfont"></span></div>
                    </div>
                </div>

                 <div class="ListSpecialCell" id="CompanyIDClickObj">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="calcfont"></span></div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="790_公司"></div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont"></span></div>
                    </div>
                    <div class="ListSpecialCellContent" data-field="CompanyID" data-fieldcontroltype="selectList" data-lanid="790_公司" data-fieldval="" data-selecttype="radio" code="DropDowList_ViewBaseCompanyBaseInfHasContact" typevalue="" data-clickObj="CompanyIDClickObj"></div>
                </div>

                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="630_联系人"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div type="text" data-field="ContactsID" data-fieldControlType="linkSelectList" data-lanid="630_联系人" data-fieldVal="" Code="DropDowList_ViewBaseCompanyContactsByCompany" Filter="" data-selectType="radio" class="ListCellContentRightText" />
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont"></span></div>
                    </div>
                </div>

                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beiwanglu"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="Remark" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="719_备忘"></textarea>
                        </p>
                    </div>
                </div>

                <div class="ListSpecialCell visible" id="OppIDClickObj">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="calcfont calc-yewujihui"></span></div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="832_关联于商业"></div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent" data-field="OppID" data-fieldcontroltype="linkedPage" data-lanid="832_关联于商业" data-fieldval="" data-selecttype="radio" code="DropDowList_Opportunity" typevalue="" data-clickObj="OppIDClickObj"></div>
                </div>

            </div>

            <Uploadfile v-show="!isAddNew" :fileListData=fileListData :fromID=fromIDNew :fromType=fromTypeNew></Uploadfile>

            <Infofooter v-show="!isAddNew"> </Infofooter>
        </div>
    </div>
</div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import Infofooter from '../common/infoFooter'
import Uploadfile from './Uploadfile'

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Infofooter,
        Uploadfile,
    },
    data() {
        return {
            ptitle: lanTool.lanContent("1001_会议记录详情"),
            isAddNew: false, //是否添加新纪录
            operation:false,//控制详情页header按钮，ture:显示可操作，false:隐藏
            onlyView:false,//控制页面头部icon,true:不显示头部icon,false:显示
            isFirstEnter:false,//是否首次进入
            oppID:"",//销售机会ID
            scheduleID:"",//会议ID
            fileListData : [],//文件列表
            fromIDNew:"",//当前记录ID
            fromTypeNew : ""//来源类型
        }
    },
    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist' ||
        //from.name == 'uploadinput' ||
        from.name == 'linkedpage') {
            to.meta.isBack = true;
        }
        next();
    },
    // beforeRouteLeave:function(to, from, next){
    //     if(to.name == 'meetinginfo'){
    //         this.$destroy();
    //     }
    //     next();
    // },
    created: function () {
        console.log('noteinfo created');
        this.isFirstEnter = true;
    },
    mounted: function () {
    },
    activated:function(){
        lanTool.updateLanVersion();
        document.activeElement.blur();
        var _self = this;
        var id = _self.$route.params.id;
        var fromType = "MeetingNoteinfo";
        _self.oppID = _self.$route.query.OppID;
        _self.scheduleID = _self.$route.query.ScheduleID;
        _self.fromIDNew = _self.$route.params.id;
        _self.onlyView = Boolean(_self.$route.query.onlyView) || false;
        _self.controlEdit();

        _self.fromTypeNew = "40";

        //监听保存
        _self.savePageData();

        //若是新增，则隐藏新增不需要显示的模块
        if(tool.isNullOrEmptyObject(id) || Number(id) <= 0){
            _self.isAddNew = true;
        }else{
            _self.isAddNew = false;
        }

        var _isBack = _self.$route.meta.isBack;
        // //是否是从上传文档后返回
        // var _fromSave = _self.$route.meta.fromSave;

        // console.log("_isBack:"+_isBack);
        // console.log("isFirstEnter:"+_self.isFirstEnter);

        //若为true,则需要刷新
        if(
            //_fromSave ||
        !_isBack || _self.isFirstEnter){
            _self.isFirstEnter = false;
            _self.$route.meta.fromSave = false;
            _self.$route.meta.isBack = false;
            //清空页面数据
            tool.ClearControlData(function(){
                //渲染控件
                tool.InitiateInfoPageControl(_self,id,function(){

                    //渲染textarea
                    $("textarea").each(function (index, cur) {
                        $(cur).height('25');
                        tool.autoTextarea(cur);
                    });

                    //控制控件逻辑
                    _self.controlBusinessTypes();

                    //处理OppID
                    _self.handleOppID(_self.oppID,true);
                    //处理ScheduleID
                    _self.handleScheduleID(_self.scheduleID,true);

                    //渲染数据
                    tool.IniInfoData(fromType,id,function(data){

                        //渲染文件列表
                        _self.iniDocList(data);

                        //渲染textarea
                        $("textarea").each(function (index, cur) {
                            $(cur).height('25');
                            tool.autoTextarea(cur);
                        });

                          //场景：当在selectList页面按刷新按钮再回到详情页
                          if(tool.isNullOrEmptyObject(eventBus.selectListData)){
                                return;
                          }

                            //更新selectlist控件的结果
                            var filedName = eventBus.selectListData.field;
                            var idTemp = eventBus.selectListData.value.id||"";
                            if(filedName=="ScheduleID"){
                                _self.handleScheduleID(idTemp,false);
                            }else{
                                _self.handleOppID(idTemp,false);
                            }

                          //清空全局变量
                          eventBus.selectListData = null;
                    });
                })
            })

            //设置滚动条位置
            $(window).scrollTop(0);

        }else{
            _self.isFirstEnter = false;
            _self.$route.meta.fromSave = false;
            _self.$route.meta.isBack = false;

            if(tool.isNullOrEmptyObject(eventBus.selectListData)){
                  return;
            }

            //更新selectlist控件的结果
            var filedName = eventBus.selectListData.field;
            var idTemp = eventBus.selectListData.value.id||"";
            if(filedName=="ScheduleID"){
                _self.handleScheduleID(idTemp,false);
            }else{
                _self.handleOppID(idTemp,false);
            }
            //清空全局变量
            eventBus.selectListData = null;
        }
    },
    methods: {
        //保存
        savePageData:function(e){
            //console.log("save");
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "MeetingNoteinfo";

            setTimeout(function () {
                $("#save").off("click").on("click",function(){
                    tool.SaveOrUpdateData(fromType, id,_self, function(){
                    });
                });
            },0);
        },
        //控制控件逻辑
        controlBusinessTypes:function(){
            var _self = this;
             $("[data-field='BeginTime'],[data-field='EndTime'],[data-field='MeetingType'],[data-field='CompanyID'],[data-field='ContactsID'],#CompanyIDClickObj")
            .addClass('disable');
        },
        //处理OppID存在的逻辑
        handleOppID:function(oppID,isLock){
            isLock = (isLock == undefined || isLock == null) ? false : isLock;
            var _self = this;
            console.log(oppID);
            if(tool.isNullOrEmptyObject(oppID)){
                return;
            }
            var autoID = oppID;
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_OpportunityHandle_QuerySingle;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                AutoID: autoID
            };
		    tool.showLoading();
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    // console.log("handleOppID");
                    tool.hideLoading();
                    data = tool.jObject(data);
                    // console.log(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        console.log(tool.getMessage(data));
                        return true;
                    }

                    data = data._OnlyOneData || [];

                    // console.log(data);

                    //1>锁定销售机会设置为不可操作
                    if(isLock){
                        $("#OppIDClickObj,[data-field='OppID']").removeClass('disable color6').addClass('disable color6');
                    }else{
                        $("#OppIDClickObj,[data-field='OppID']").removeClass('disable color6');
                    }

                    //2>销售机会赋值
                    $("[data-field='OppID']").text(data["TheName"]||"").attr("data-fieldval",data["AutoID"]||"");
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    tool.hideLoading();
                    return true;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
        //处理handleScheduleID存在的逻辑
        handleScheduleID:function(scheduleID,isLock){
            isLock = (isLock == undefined || isLock == null) ? false : isLock;
            var _self = this;
            console.log(scheduleID);
            if(tool.isNullOrEmptyObject(scheduleID)){
                return;
            }
            var autoID = scheduleID;
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_MeetingHandle_QuerySingle;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                AutoID: autoID
            };
		    tool.showLoading();
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    tool.hideLoading();
                    data = tool.jObject(data);
                    // console.log(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        console.log(tool.getMessage(data));
                        return true;
                    }

                    data = data._OnlyOneData || [];
                    console.log("handleScheduleID");
                    console.log(data);

                    //1>会议记录字段赋值
                    //1-1>ScheduleID
                    var _curObj = $("[data-field='ScheduleID']");
                    if(isLock){
                        _curObj.removeClass('disable').addClass('disable').closest('.ListCellContent').addClass('color6');
                    }else{
                        _curObj.removeClass('disable').closest('.ListCellContent').removeClass('color6');
                    }

                    _curObj.text(data["MeetingTitle"]||"").attr("data-fieldval",data["AutoID"]||"");
                    //1-2>MeetingTitle
                    _curObj = $("[data-field='MeetingTitle']");
                    _curObj.val(data["MeetingTitle"]||"");
                    //1-3>BeginTime
                    _curObj = $("[data-field='BeginTime']");
                    var fieldVal = data["BeginTime"] || "";
					var format = _curObj.attr("data-format") || "";
					if(!tool.isNullOrEmptyObject(format) && !tool.isNullOrEmptyObject(fieldVal)){
						fieldVal = fieldVal.ReplaceAll("T"," ");
						fieldVal = tool.ChangeTimeFormat(fieldVal,format);
                    }
                    _curObj.val(fieldVal);
                    //1-4>EndTime
                    _curObj = $("[data-field='EndTime']");
                    fieldVal = data["EndTime"] || "";
					format = _curObj.attr("data-format") || "";
					if(!tool.isNullOrEmptyObject(format) && !tool.isNullOrEmptyObject(fieldVal)){
						fieldVal = fieldVal.ReplaceAll("T"," ");
						fieldVal = tool.ChangeTimeFormat(fieldVal,format);
                    }
                    _curObj.val(fieldVal);
                    //1-5>EndTime
                    _curObj = $("[data-field='EndTime']");
                    fieldVal = data["EndTime"] || "";
					format = _curObj.attr("data-format") || "";
					if(!tool.isNullOrEmptyObject(format) && !tool.isNullOrEmptyObject(fieldVal)){
						fieldVal = fieldVal.ReplaceAll("T"," ");
						fieldVal = tool.ChangeTimeFormat(fieldVal,format);
                    }
                    _curObj.val(fieldVal);
                    //1-6>MeetingType
                    _curObj = $("[data-field='MeetingType']");
                    _curObj.val(data["MeetingType_Name"]||"").attr("data-fieldval",data["MeetingType"]||"");
                    //1-7>CompanyID
                    _curObj = $("[data-field='CompanyID']");
                    _curObj.text(data["CompanyID_Name"]||"").attr("data-fieldval",data["CompanyID"]||"");
                    //1-8>ContactsID_Name
                    _curObj = $("[data-field='ContactsID']");
                    _curObj.text(data["ContactsID_Name"]||"").attr("data-fieldval",data["ContactsID"]||"");
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    tool.hideLoading();
                    return true;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
        //渲染文件列表
        iniDocList:function(data){
            var _self = this;
            if(tool.isNullOrEmptyObject(data)){
                return;
            }

            _self.fileListData = data["DocList"]||[];
        },
        //只查看的情况 控制元素是否可修改
        controlEdit:function(){
            var _self = this;

            if(_self.onlyView){
                _self.$nextTick(function(){
                    $('.meetingNoteList,.controlEdit').addClass('disable');
                })
            }else{
                _self.$nextTick(function(){
                    $('.meetingNoteList,.controlEdit').removeClass('disable');

                })
            }
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
.busOpportunities {
    margin: 10px 0;
}
.busOpportunities .ListCellContentLeftText {
    font-weight: 700;
}
.busOpportunities .leftContent {
    width: calc(80% - 0.32rem) !important;
}
.busOpportunities .rightContent {
    width: 20% !important;
}
</style>
