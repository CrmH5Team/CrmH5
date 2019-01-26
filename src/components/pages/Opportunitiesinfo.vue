<template>
<div>
    <Infoheader
        :isAddNew="isAddNew"
        :onlyView="onlyView"
        :operation="operation"
        :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <!-- <div data-field="BusinessTypes" data-fieldControlType="hideDivText">{{showPage}}</div> -->

            <div v-show="showTips" class="tipBox">
                <div class="tipContent">
                    <p class="f12"><span class="red">*</span> <span class="zhuyi lanText" data-lanid="897_请注意，该商业机会已关闭，仅允许被查看。"></span></p>
                </div>
            </div>

            <!-- 业务类型 -->
            <div class="ListCell visible">
                <div class="ListCellLeftIcon"><span class="calcfont calc-shangye"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText lanText" data-lanid="695_业务分类"></div>
                    </div>
                    <div class="ListCellContentRight rightContent">
                        <input type="text" data-field="BusinessTypes" data-lanid="695_业务分类" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="OpportunityBusinessTypes" class="ListCellContentRightText"/>
                    </div>
                    <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                </div>
            </div>

            <!-- 名称 -->
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-yewujihui"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                          <textarea data-field="TheName" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="710_标题"></textarea>
                    </p>
                </div>
            </div>

            <!-- opportunities 模块才有的属性 -->
            <div class="OpportunitiesList">

                  <!-- 公司 -->
                  <div class="ListSpecialCell visible" id="TargetCompanyIDClickObj">
                      <div class="ListSpecialCellField">
                          <div class="ListSpecialCellLeftIcon"><span class="calcfont calc-gongsixinxi"></span></div>
                          <div class="ListSpecialCellFieldContent lanText" data-lanid="790_公司"></div>
                          <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                      </div>
                      <div
                      class="ListSpecialCellContent"
                      data-field="TargetCompanyID"
                      data-fieldcontroltype="selectList"
                      data-lanid="790_公司"
                      data-fieldval=""
                      data-selecttype="radio"
                      code="DropDowList_ViewBaseCompanyBaseInf"
                      typevalue=""
                      data-clickObj="TargetCompanyIDClickObj"
                      ></div>
                  </div>

                  <!-- 联系人 -->
                  <div class="ListCell" v-show="showPage==1">
                      <div class="ListCellLeftIcon"><span class="calcfont calc-fuzerenicon"></span></div>
                      <div class="ListCellContent">
                          <div class="ListCellContentLeft leftContent">
                              <div class="ListCellContentLeftText lanText" data-lanid="791_联系人"></div>
                          </div>
                          <div class="ListCellContentRight rightContent">
                              <div
                                class="ListCellContentRightText"
                                data-field="ContactID"
                                data-fieldcontroltype="selectList"
                                data-lanid="791_联系人"
                                data-fieldval=""
                                data-selecttype="radio"
                                Code="DropDowList_ViewBaseCompanyContactsByCompany"
                              ></div>
                          </div>
                          <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                      </div>
                    </div>

                    <div class="ListCell visible" v-show="showPage==0">
                        <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-feiji2"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea data-field="MSN" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="956_MSN"></textarea>
                            </p>
                        </div>
                    </div>

                    <div class="ListCell visible" v-show="showPage==0">
                        <div class="ListCellLeftIcon"><span class="calcfont calc-shixiang"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText lanText" data-lanid="947_事项"></div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <input type="text" data-field="Matter" data-lanid="947_事项" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="Matter" class="ListCellContentRightText"/>
                            </div>
                            <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>

                    <div class="ListCell visible MatterOtherObj" v-show="showPage==0">
                        <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea data-field="MatterOther" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="952_其他"></textarea>
                            </p>
                        </div>
                    </div>
            </div>

            <!-- 备忘 -->
            <div class="ListCell visible">
                <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beiwanglu"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea data-field="Memo" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="719_备忘"></textarea>
                    </p>
                </div>
            </div>

            <!-- 风险提示 -->
            <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-fengxianyujing"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea data-field="RiskTips" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="904_风险提示"></textarea>
                    </p>
                </div>
            </div>

            <!-- 关注 -->
            <div class="ListCell HideWhenNew">
                <div class="ListCellLeftIcon textLeftIcon" @click="followToggle">
                  <span data-field="IsFollow" data-fieldControlType="icon" data-fieldVal="{'true':'calc-shoucang','false':'calc-noshoucang'}" data-defaultVal="false" class="mui-icon calcfont guanZhu"></span>
                </div>
                <div class="ListCellLeftText">
                    <p class="textareaP lanText" data-lanid="786_关注"></p>
                </div>
            </div>

            <!-- 会议记录 -->
            <div v-show="!isAddNew">

                <div class="meetingRecord">
                    <div class="headerBlock">
                        <div class="headerBlockLeftIcon"><span class="calcfont calc-huiyi"></span></div>
                        <div class="headerBlockContent f16 lanText" data-lanid="901_会议记录"></div>
                        <div class="headerBlockRightIcon">
                          <span class="calcfont calc-jia" @click="goRecord($event)" data-url="/MeetingNoteinfo/-1"></span>
                        </div>
                    </div>
                </div>

                <!-- 会议记录列表 -->
                <div class="meetingRecordList">

                    <div v-for="item in MeetingNotice" :key="item.AutoID" class="meetingRecordListCell">
                        <div class="headerDiv">
                            <div class="headerDivLeftIcon"><span @click="deleteRecord(item.AutoID,$event)" class="calcfont calc-xinxi1"></span></div>
                            <div class="headerDivContent">
                                <div class="content">{{item.MeetingTitle}}</div>
                            </div>
                            <div class="headerDivRightBtn" >
                                <div class="rightBtn" data-lanid="" @click="goRecord($event)" :data-url="'/MeetingNoteinfo/' + item.AutoID">
                                {{seeMore}}
                                </div>
                            </div>
                            <div class="headerDivRightDelete">
                                <span class="calcfont calc-delete"></span>
                            </div>
                        </div>
                        <div class="airlinesName">
                            <div class="airlinesNameContent f14">{{item.CompanyID_Name}}</div>
                        </div>
                        <div class="meetingRemark">
                            <p class="f14">{{item.Remark}}</p>
                        </div>
                         <!-- 会议记录文档列表  -->
                        <div class="meetingDocList">
                            <div v-for="fileItem in item.DocList" :key="fileItem.fileId" class="docListCell">
                                <div class="docListCellLeft">
                                    <div class="docListCellLeftContent"><span class="calcfont calc-fujian">{{fileItem.fileName}}</span></div>
                                </div>
                                <div class="docListCellRight">
                                    <div class="docListCellRightContent">{{fileItem.fileTiem}}</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <!-- 负责人 -->
            <div class="shareBlock">
                <!-- <div class="shareTip">
                    <p><span>* </span><span class="zhuyi lanText"
                    data-lanid="899_请注意，负责人及其所有上司可以编辑数据并分享。分享此商业机会后，对应的联系人也将分享给对方。"></span></p>
                </div> -->
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
                                data-fieldVal
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
                    <div class="ListCellLeftIcon"><span class="calcfont calc-fuzerenicon"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeft lanText" data-lanid="825_负责人"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div
                              class="ListCellContentRightText"
                              data-field="Initiator"
                              data-fieldcontroltype="groupSelectList"
                              data-lanid="825_负责人"
                              data-fieldval=""
                              data-selecttype="checkbox"
                              code="DropDowList_PopedomTeamVsUser"
                              typevalue=""
                              data-fromType="6"
                            ></div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>

            </div>

            <!-- 查看有权限访问的同事 -->
            <div class="accessBlock initiatorObj">
                <div class="ListCell" @click="goToShareList">
                    <div class="ListCellLeftIcon">
                        <span class="calcfont calc-yidu"></span>
                    </div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="852_查看有权限访问的同事"></div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
            </div>

            <Infofooter v-show="!isAddNew"> </Infofooter>

        </div>
    </div>
    <InfoRightPanel
      ref="rightPanel"
      :isShowClose="isShowClose"
      :closeThisContent="closeThisContent"
      :isShowSend="isShowSendBtn"
      :rightPanelFromType="rightPanelFromType"
      :rightPanelFromID="rightPanelFromID"></InfoRightPanel>

</div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import InfoRightPanel from '../common/InfoRightPanel'
import Infofooter from '../common/infoFooter'

export default {
    components: {
        Infoheader,
        Infofooter,
        InfoRightPanel
    },
    data() {
        return {
            ptitle: 'Opportunities detail',

            showPage:'',//记录列表页是从哪个模块进来的
            isAddNew: false, //是否添加新纪录
            operation:true,//控制详情页header按钮，ture:显示可操作，false:隐藏
            onlyView:false,//控制页面头部icon,true:不显示头部icon,false:显示

            isFirstEnter:false,//是否首次进入
            rightPanelFromType:"",//传给右侧菜单用的参数
            rightPanelFromID:"",//传给右侧菜单用的参数
            isShowSendBtn: true,  //侧滑是否显示分享给同事选项
            isShowClose:true, //侧滑是否显示关闭这个商业机会选项
            closeThisContent:"",

            id:'', //dealPipeline id
            showTips:false,
            //会议记录数据
            MeetingNotice:[
                // {
                //   AutoID:2,
                //   CompanyID_Name:"15中飞租MTN001",
                //   DocList:[{
                //       fileId:1,
                //       fileName:'TestFileName1.pdf',
                //       fileTiem:'16/Nov 15:00'
                //   }],
                //   MeetingTitle:"qqqq",
                //   Remark:"tsadtastd a↵1231↵312312321"
                // }
            ],
            seeMore:""
        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (
                from.name == 'selectlist' || from.name == 'groupselectlist' ||
                // from.name == 'meetingNoteinfo' ||
                from.name == 'poweruser' ||
                from.name == 'sharelist'
            ) {
            to.meta.isBack = true;
        }
        next();
    },
    // beforeRouteLeave:function(to, from, next){
    //     if(to.name == 'business'){
    //         this.$destroy();
    //     }
    //     next();
    // },
    created: function () {
        this.isFirstEnter = true;
        console.log(this.MeetingNotice);
    },
    mounted: function () {

    },
    activated:function(){
        lanTool.updateLanVersion();
        document.activeElement.blur();
        
        var _self = this;
        _self.seeMore =lanTool.lanContent("900_查看完整");

        this.onlyView = Boolean(this.$route.query.onlyView) || false;
        //监听保存
        _self.savePageData();
        //监听删除
        _self.deleteData();
        _self.rightPanelCloseThis();
        _self.id = _self.$route.params.id;
        _self.showPage = _self.$route.query.showPage || '';
        // console.log(_self.showPage);
        if (_self.showPage === 1) 
        {
            _self.closeThisContent = lanTool.lanContent('944_关闭这个商业机会');
        } else {
            _self.closeThisContent = lanTool.lanContent('945_关闭这个交易');
        }
        var fromType = "Opportunitiesinfo";

        _self.rightPanelFromType = "9";
        _self.rightPanelFromID = _self.$route.params.id || "";

        //若是新增，则隐藏新增不需要显示的模块
        if(tool.isNullOrEmptyObject(_self.id) || Number(_self.id) <= 0){
            $(".HideWhenNew").hide();
            _self.isAddNew = true;
        }else{
            $(".HideWhenNew").show();
            _self.isAddNew = false;
        }

        var _isBack = _self.$route.meta.isBack;
        //是否是从会议记录保存后返回
        var _fromSave = _self.$route.meta.fromSave;

        // console.log("_isBack:"+_isBack);
        // console.log("_fromSave:"+_fromSave);
        // console.log("isFirstEnter:"+_self.isFirstEnter);

        //若为true,则需要刷新
        if(_fromSave || !_isBack || _self.isFirstEnter){

            _self.isFirstEnter = false;
            _self.$route.meta.fromSave = false;
            _self.$route.meta.isBack = false;

            //清空页面数据
            tool.ClearControlData(function(){
                //渲染控件
                tool.InitiateInfoPageControl(_self, _self.id, function(){

                    //渲染textarea 从新增事件进到详情是不会进入渲染数据的方法，这里得多加个textarea高度自适应
                    $("textarea").each(function (index, cur) {
                        $(cur).height('25');
                        tool.autoTextarea(cur);
                    });

                    //控制data-field="Initiator"显示和隐藏
                    $("[data-field='IsPublic']").off('change input').on('change input', function () {
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
                    // 如是新增状态 默认给data-field="Initiator"赋予23(公开)
                    if (_self.isAddNew) {
                        var publicObj = tool.GetPublicObj();
                        if (!tool.isNullOrEmptyObject(publicObj)) {
                            $("[data-field='IsPublic']")
                                .val(publicObj.text || "")
                                .attr("data-fieldVal", publicObj.id)
                                .trigger("change");
                        }
                    }

                    //控制data-field="MatterOther"显示和隐藏
                    $("[data-field='Matter']").off('change input').on('change input', function () {
                        var curObj = $(this);
                        if (tool.isNullOrEmptyObject(curObj)) {
                            return;
                        }
                        var fieldval = curObj.attr("data-fieldval");
                        if (fieldval == "36") {
                            $(".MatterOtherObj").show();
                        } else {
                            $(".MatterOtherObj").hide();
                            $(".MatterOtherObj textarea").val("");//清空文本数据
                        }
                    });

                    //控制BusinessTypes字段不可修改
                    _self.controlBusinessTypes();
                    //控制TheName字段 在 Deal Pipeline 下不可修改
                    if(_self.showPage == 0){
                        $("[data-field='TheName']").addClass('disable');
                    }else{
                        $("[data-field='TheName']").removeClass('disable');
                    }


                    //渲染数据
                    tool.IniInfoData(fromType, _self.id, function(data){

                        //Status_InProgress = "38";
                        //Status_Closed = "39";
                        // console.log(data);
                        if(data["CurrentState"] == "39"){
                            //显示提示
                            _self.showTips = true;
                            //头部按钮
                            _self.onlyView = true;
                            $('.scroll-div').addClass('disable');
                        }else{
                            //显示提示
                            _self.showTips = false;
                            //头部按钮
                            _self.onlyView = false;
                            $('.scroll-div').removeClass('disable');
                        }

                        //渲染会议记录列表
                        _self.iniMeetingNoteList(data);

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
            _self.$route.meta.fromSave = false;
            _self.$route.meta.isBack = false;

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
        //查看有权限访问的同事跳转事件
        goToShareList: function() {
            var _self = this;
            var fromType = "9";
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
        //查看/添加会议记录
        goRecord: function (e) {
            var _self = this;
            var target = $(e.target);
            var url = target.attr("data-url");
            var oppID = _self.$route.params.id;
            if(tool.isNullOrEmptyObject(oppID)){
                return;
            }
            oppID = Number(oppID)<=0?"":oppID;
            var scheduleID = "";
            var parameter = {
                OppID:oppID,
                ScheduleID:scheduleID
            };

            _self.$router.push({
                path: url,
                query: parameter
            });
        },
        //保存
        savePageData:function(e){
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Opportunitiesinfo";
            setTimeout(function () {
                $("#save").off("click").on("click", function () {
                    tool.SaveOrUpdateData(fromType, id, _self, function () {});
                });
            },0);
        },
        //关注
        followToggle: function (e) {
            var _self = this;
            var autoID = _self.$route.params.id;
            var fromType = "dealPipeline";//或者opportunities都可以，同一张表
            var actionType;
            if ($(".guanZhu").hasClass("calc-shoucang")) {
               //取消关注
                actionType = 0;
            } else {
                //添加关注
                actionType = 1;
            }
            tool.UserFollow(fromType,autoID,actionType,function(){
              if ($(".guanZhu").hasClass("calc-shoucang")) {
                    //取消关注
                    $(".guanZhu").removeClass("calc-shoucang").addClass("calc-noshoucang");
                } else {
                    //添加关注
                    $(".guanZhu").removeClass("calc-noshoucang").addClass("calc-shoucang");
                }
          });
        },
        //右侧点击关闭这个
        rightPanelCloseThis:function(){
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Opportunitiesinfo";
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_OpportunityHandle_Close;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                AutoID: id
            };

            setTimeout(function () {
                $('#rightPanelCloseThis').off("click").on('click',function(){
                    tool.showConfirm(lanTool.lanContent("963_您确定要关闭它吗？"),function(){
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

                        //调子组件 收起侧滑方法
                        _self.$refs.rightPanel.panelToggle();


                        //清空页面数据
                        tool.ClearControlData(function(){
                            //渲染控件
                            tool.InitiateInfoPageControl(_self, id, function(){

                                //渲染textarea 从新增事件进到详情是不会进入渲染数据的方法，这里得多加个textarea高度自适应
                                $("textarea").each(function (index, cur) {
                                    $(cur).height('25');
                                    tool.autoTextarea(cur);
                                });

                                //控制data-field="Initiator"显示和隐藏
                                $("[data-field='IsPublic']").off('change input').on('change input', function () {
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
                                // 如是新增状态 默认给data-field="Initiator"赋予23(公开)
                                if (_self.isAddNew) {
                                    var publicObj = tool.GetPublicObj();
                                    if (!tool.isNullOrEmptyObject(publicObj)) {
                                        $("[data-field='IsPublic']")
                                            .val(publicObj.text || "")
                                            .attr("data-fieldVal", publicObj.id)
                                            .trigger("change");
                                    }
                                }


                                //控制data-field="MatterOther"显示和隐藏
                                $("[data-field='Matter']").off('change input').on('change input', function () {
                                    var curObj = $(this);
                                    if (tool.isNullOrEmptyObject(curObj)) {
                                        return;
                                    }
                                    var fieldval = curObj.attr("data-fieldval");
                                    if (fieldval == "36") {
                                        $(".MatterOtherObj").show();
                                    } else {
                                        $(".MatterOtherObj").hide();
                                        $(".MatterOtherObj textarea").val("");//清空文本数据
                                    }
                                });

                                //渲染数据
                                tool.IniInfoData(fromType, id, function(data){

                                    //Status_InProgress = "38";
                                    //Status_Closed = "39";
                                    // console.log(data);
                                    if(data["CurrentState"] == "39"){
                                        //显示提示
                                        _self.showTips = true;
                                        //头部按钮
                                        _self.onlyView = true;
                                        $('.scroll-div').addClass('disable');
                                    }else{
                                        //显示提示
                                        _self.showTips = false;
                                        //头部按钮
                                        _self.onlyView = false;
                                        $('.scroll-div').removeClass('disable');
                                    }


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
                        });

                    });
                });
            },0);
        },
        deleteData: function (e) {
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Opportunitiesinfo";
            setTimeout(function () {
                $("#delete").off().on("click", function () {
                    tool.DeleteData(fromType, id, _self, function () {});
                });
            }, 0);
        },
        //控制 BusinessTypes 、 TheName  字段
        controlField:function(){
            var _self = this;
            //控制BusinessTypes字段不可修改
            $('[data-field="BusinessTypes"]').addClass('disable');

            //如果是Deal Pipeline模块 TheName 字段不可修改
            if(_self.showPage == 0){
                $('[data-field="TheName"]').addClass('disable');
            }
        },
        getDealObj : function(){
          var textTemp =  lanTool.lanContent("939_交易");
          var idTemp = 29;
          var obj = {
            id : idTemp,
            text : textTemp
          };

          return obj;
        },
        getOpportunityObj : function(){
          var textTemp =  lanTool.lanContent("940_机会");
          var idTemp = 30;
          var obj = {
            id : idTemp,
            text : textTemp
          };
          return obj;
        },
        //control BusinessTypes field
        controlBusinessTypes:function(){
            var _self = this;
            if (_self.isAddNew) {
                var businessSectorObj = {};
                if(_self.showPage == 0){
                    businessSectorObj = _self.getDealObj();
                }else{
                    businessSectorObj = _self.getOpportunityObj();
                }
                if (!tool.isNullOrEmptyObject(businessSectorObj)) {
                    $("[data-field='BusinessTypes']")
                        .val(businessSectorObj.text || "")
                        .attr("data-fieldVal", businessSectorObj.id)
                        .addClass('disable');
                }
            }else{
                $("[data-field='BusinessTypes']").addClass('disable');
            }
        },
        //渲染会议记录列表
        iniMeetingNoteList:function(data){
            var _self = this;
            if(tool.isNullOrEmptyObject(data)){
                return;
            }

            console.log(data);
            _self.MeetingNotice = data["MeetingNotice"]||[];
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
@import "../../assets/css/pages/Opportunitiesinfo.css";
</style>
