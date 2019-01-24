<template>
<div>
    <Infoheader
        :isAddNew="isAddNew"
        :onlyView="onlyView"
        :operation="operation"
        :onlyMore="onlyMore"
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
                        <input type="text" data-field="BusinessType" data-lanid="695_业务分类" data-fieldControlType="picker" data-fieldVal="" Code="DropDowList_DtbAllTypes" TypeValue="OpportunityBusinessTypes" class="ListCellContentRightText"/>
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
                        <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea data-field="MSN" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="956_MSN"></textarea>
                            </p>
                        </div>
                    </div>

                    <div class="ListCell visible" v-show="showPage==0">
                        <div class="ListCellLeftIcon"><span class="calcfont"></span></div>
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

                <div class="meetingRecordList">
                    <div class="meetingRecordListCell">
                        <div class="headerDiv">
                            <div class="headerDivLeftIcon"><span @click="deleteRecord(9,$event)" class="calcfont calc-xinxi1"></span></div>
                            <div class="headerDivContent">
                                <div class="content">MSN 05789 机身检查会议2</div>
                            </div>
                            <div class="headerDivRightBtn" >                                                            <!--数据渲染要修改id-->
                                <div class="rightBtn lanText" data-lanid="900_查看完整" @click="goRecord($event)" data-url="/MeetingNoteinfo/9">
                                </div>
                            </div>
                            <div class="headerDivRightDelete">
                                <span class="calcfont calc-delete"></span>
                            </div>
                        </div>
                        <div class="airlinesName">
                            <div class="airlinesNameContent f14">China Eastern Airlines</div>
                        </div>
                        <div class="meetingRemark">
                            <p f14>会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容，会议记录内容。</p>
                        </div>
                        <div class="meetingDocList">
                            <div class="docListCell">
                                <div class="docListCellLeft">
                                    <div class="docListCellLeftContent"><span class="calcfont calc-fujian"></span>TestFileName1.pdf</div>
                                </div>
                                <div class="docListCellRight">
                                    <div class="docListCellRightContent">16/Nov 15:00</div>
                                </div>
                            </div>
                            <div class="docListCell">
                                <div class="docListCellLeft">
                                    <div class="docListCellLeftContent"><span class="calcfont calc-fujian"></span>TestFileName2.pdf</div>
                                </div>
                                <div class="docListCellRight">
                                    <div class="docListCellRightContent">16/Nov 15:00</div>
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
            onlyMore:false,//控制页面头部icon，控制只显示更多操作按钮

            isFirstEnter:false,//是否首次进入
            rightPanelFromType:"",//传给右侧菜单用的参数
            rightPanelFromID:"",//传给右侧菜单用的参数
            isShowSendBtn: true,  //侧滑是否显示分享给同事选项
            isShowClose:true, //侧滑是否显示关闭这个商业机会选项

            id:'', //dealPipeline id
            showTips:false,
        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist' || from.name == 'groupselectlist' || from.name == 'meetingNoteinfo' || from.name == 'poweruser') {
            to.meta.isBack = true;
        }
        next();
    },
    beforeRouteLeave:function(to, from, next){
        if(to.name == 'business'){
            this.$destroy();
        }
        next();
    },
    created: function () {
        this.isFirstEnter = true;
    },
    mounted: function () {

    },
    activated:function(){
        lanTool.updateLanVersion();
        document.activeElement.blur();

        var _self = this;

        this.onlyView = Boolean(this.$route.query.onlyView) || false;
        //监听保存
        _self.savePageData();
        //监听删除
        _self.deleteData();
        _self.rightPanelCloseThis();
        _self.id = _self.$route.params.id;
        _self.showPage = _self.$route.query.showPage || '';
        // console.log(_self.showPage);
        var fromType = "Opportunitiesinfo";

        //若是新增，则隐藏新增不需要显示的模块
        if(tool.isNullOrEmptyObject(_self.id) || Number(_self.id) <= 0){
            $(".HideWhenNew").hide();
            _self.isAddNew = true;
        }else{
            $(".HideWhenNew").show();
            _self.isAddNew = false;
        }

        var _isBack = _self.$route.meta.isBack;
        //是否是从上传文档后返回
        var _fromSave = _self.$route.meta.fromSave;

        //若为true,则需要刷新
        if(_fromSave || !_isBack || _self.isFirstEnter){

            _self.isFirstEnter = false;
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
                     //$("[data-field='IsPublic']").val('Pulic').attr("data-fieldval","23").trigger("change");

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
                    tool.IniInfoData(fromType, _self.id, function(){

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

        _self.$route.meta.fromSave = false;
        _self.$route.meta.isBack = false;
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
            var tager = $(e.target);
            var url = tager.attr('data-url') || '';
            if(tool.isNullOrEmptyObject(url)){
                return;
            }
            _self.$router.push({
                path: url,
            })
        },
        //保存
        savePageData:function(e){
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Opportunitiesinfo";
            $("#save").off("click").on("click", function () {
                tool.SaveOrUpdateData(fromType, id, _self, function () {});
            });
        },
        //关注
        followToggle: function (e) {
            var _self = this;
            var autoID = _self.$route.params.id;
            var fromType = "Opportunitiesinfo";
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
            $('#rightPanelCloseThis').off("click").on('click',function(){
                tool.showConfirm('确定关闭吗？',function(){
                    //调子组件 收起侧滑方法
                    _self.$refs.rightPanel.panelToggle();
                    //显示提示
                    _self.showTips = true;
                    //头部按钮
                    _self.onlyMore = true;
                    _self.onlyView = true;
                })
            })
        },
        deleteData: function (e) {
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Opportunitiesinfo";
            setTimeout(function () {
                $("#delete").off().on("click", function () {
                    // console.log("delete");
                    tool.DeleteData(fromType, id, _self, function () {});
                });
            }, 0);
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
@import "../../assets/css/pages/Opportunitiesinfo.css";
</style>
