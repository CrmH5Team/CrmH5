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
                            <div type="text" data-field="ScheduleID" data-fieldControlType="selectList" data-lanid="818_会议" data-fieldVal="" Code="DropDowList_ViewBaseCompanyContactsByCompany" Filter="" data-selectType="radio" class="ListCellContentRightText" />
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

                <div class="ListSpecialCell visible" id="OppIDObj">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="calcfont calc-yewujihui"></span></div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="832_关联于商业"></div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent" data-field="OppID" data-fieldcontroltype="Linkedpage" data-lanid="832_关联于商业" data-fieldval="" data-selecttype="radio" code="DropDowList_ViewBaseCompanyBaseInfHasContact" typevalue="" data-clickObj="OppID"></div>
                </div>

            </div>

            <Uploadfile v-show="!isAddNew"></Uploadfile>

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
            ptitle: 'MeetingNote detail',
            isAddNew: false, //是否添加新纪录
            operation:false,//控制详情页header按钮，ture:显示可操作，false:隐藏
            onlyView:false,//控制页面头部icon,true:不显示头部icon,false:显示
            isFirstEnter:false//是否首次进入
        }
    },
    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist' || from.name == 'uploadinput' || from.name == 'linkedpage') {
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
        // console.log('created');
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

        //若是新增，则隐藏新增不需要显示的模块
        if(tool.isNullOrEmptyObject(id) || Number(id) <= 0){
            _self.isAddNew = true;
        }else{
            _self.isAddNew = false;
        }

        var _isBack = _self.$route.meta.isBack;
        //若为true,则需要刷新
        if(!_isBack || _self.isFirstEnter){
            _self.isFirstEnter = false;
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

                    //渲染数据
                    tool.IniInfoData(fromType,id,function(){

                          //场景：当在selectList页面按刷新按钮再回到详情页
                          if(tool.isNullOrEmptyObject(eventBus.selectListData)){
                                return;
                          }

                          //更新selectlist控件的结果
                          var curObj = $("[data-field='"+  eventBus.selectListData.field +"']");
                          if(tool.isNullOrEmptyObject(curObj)){
                              return;
                          }
                          curObj.attr("data-fieldval",eventBus.selectListData.value.id);
                          curObj.text(eventBus.selectListData.value.text);

                          //清空全局变量
                          eventBus.selectListData = null;
                    });
                })
            })

            //设置滚动条位置
            $(window).scrollTop(0);

        }else{
            _self.isFirstEnter = false;
            if(tool.isNullOrEmptyObject(eventBus.selectListData)){
                  return;
            }
            //更新selectlist控件的结果
            var curObj = $("[data-field='"+  eventBus.selectListData.field +"']");
            if(tool.isNullOrEmptyObject(curObj)){
                return;
            }
            curObj.attr("data-fieldval",eventBus.selectListData.value.id);
            curObj.text(eventBus.selectListData.value.text);

            //清空全局变量
            eventBus.selectListData = null;
        }
    },
    methods: {
        //保存
        savePageData:function(e){
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Opportunitiesinfo";
            $("#save").off().on("click",function(){
                tool.SaveOrUpdateData(fromType, id,_self, function(){
                });
            });
        },
        //控制控件逻辑
        controlBusinessTypes:function(){
            var _self = this;
             $("[data-field='BeginTime'],[data-field='EndTime'],[data-field='MeetingType'],[data-field='CompanyID'],[data-field='ContactsID'],#CompanyIDClickObj")
            .addClass('disable');
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
