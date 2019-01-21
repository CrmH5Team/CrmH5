<template>
<div>
    <Infoheader :isAddNew="isAddNew" :onlyView="onlyView" :operation="operation" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="tipBox">
                <div class="tipContent">
                    <p class="f12"><span class="red">* </span> <span class="zhuyi lanText" data-lanid="897_请注意，该商业机会已关闭，仅允许被查看。"></span></p>
                </div>
            </div>
            <!-- opportunities的属性列表 -->
            <div class="OpportunitiesList" v-if="showPage=='0'">
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-shangye"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="903_业务类型"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Opportunity</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-yewujihui"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                             <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="710_标题"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListSpecialCell" id="Organization">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="calcfont calc-gongsixinxi"></span></div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="790_公司"></div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent">Organization</div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-fuzerenicon"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="791_联系人"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Niki zhu</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beiwanglu"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="719_备忘"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-fengxianyujing"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="904_风险提示"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon " @click="followClick"><span class="calcfont calc-noshoucang guanZhu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="902_关注">Follow it</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Unfollowed</div>
                        </div>
                        <div class="ListCellRightIcon iconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
            </div>
            <!-- deal的属性列表 -->
            <div class="dealList" v-else>
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-shangye"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="903_业务类型"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Opportunity</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-jiaoyi"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="710_标题"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beiwanglu"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="719_备忘"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon " @click="followClick"><span class="calcfont calc-noshoucang guanZhu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="902_关注"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Unfollowed</div>
                        </div>
                        <div class="ListCellRightIcon iconHidden"><span class="calcfont calc-you"></span></div>
                    </div>

                </div>
            </div>
            <div class="meetingRecord">
                <div class="headerBlock">
                    <div class="headerBlockLeftIcon"><span class="calcfont calc-huiyi"></span></div>
                    <div class="headerBlockContent f16 lanText" data-lanid="901_会议记录"></div>
                    <div class="headerBlockRightIcon" @click="addMeetingClick"><span class="calcfont calc-jia"></span></div>
                </div>
            </div>
            <div class="meetingRecordList">
                <div class="meetingRecordListCell">
                    <div class="headerDiv">
                        <div class="headerDivLeftIcon"><span class="calcfont calc-bianhao"></span></div>
                        <div class="headerDivContent">
                            <div class="content">MSN 05789 机身检查会议2</div>
                        </div>
                        <div class="headerDivRightBtn" @click="viewCompleteClick">
                            <div class="rightBtn lanText" data-lanid="900_查看完整">

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
            <div class="shareBlock">
                <div class="shareTip">
                    <p><span>* </span><span class="zhuyi lanText" data-lanid="899_请注意，负责人及其所有上司可以编辑数据并分享。分享此商业机会后，对应的联系人也将分享给对方。"></span></p>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-fuzerenicon"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeft TextlanText" data-lanid="825_负责人"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Niki zhu</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
            </div>

            <div class="accessBlock">
                <div class="ListCell">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-yidu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="898_查看有权限访问的同事"></div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
            </div>

            <Infofooter> </Infofooter>
        </div>
    </div>
    <InfoRightPanel :items="itemsData" :isShowList="isShowMenuList" :isShowClose="isShowClose" :isShowSend="isShowSend"></InfoRightPanel>

</div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import InfoRightPanel from '../common/InfoRightPanel'
import Infofooter from '../common/infoFooter'
import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Infofooter,
        InfoRightPanel
    },
    data() {
        return {

            ptitle: 'Opportunities detail',
            itemsData: ['Organizations', 'Contacts'],
            isShowMenuList: false,
            isShowClose: false,
            isShowSend: true,

            showPage:'',//记录列表页是从哪个模块进来的

            isAddNew: false, //是否添加新纪录
            operation:true,//控制详情页header按钮，ture:显示可操作，false:隐藏
            onlyView:false,//控制页面头部icon,true:不显示头部icon,false:显示

            isFirstEnter:false//是否首次进入
        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist') {
            to.meta.isBack = true;
        }
        next();
    },

    created: function () {
        this.isFirstEnter = true;

    },
    mounted: function () {
        var _self = this;
        //监听保存
        _self.savePageData();

        // this.$nextTick(function () {
        //     //将textarea设置为高度自适应
        //     $("textarea").each(function (index, cur) {
        //         tool.autoTextarea(cur);
        //     });
        // })
        // eventBus.$on('delete', function (data) {
        //     console.log(data);
        // });

    },
    activated:function(){
        lanTool.updateLanVersion();
        document.activeElement.blur();
        var _self = this;
        var id = _self.$route.params.id;

        _self.showPage = _self.$route.query.showPage || '';

        var fromType = "Opportunitiesinfo";

        //若是新增，则隐藏新增不需要显示的模块
        if(tool.isNullOrEmptyObject(id) || Number(id) <= 0){
            $(".HideWhenNew").hide();
            _self.isAddNew = true;
            // _self.operation = false;
        }else{
            $(".HideWhenNew").show();
            _self.isAddNew = false;
            // _self.operation = true;
        }
        var _isBack = _self.$route.meta.isBack;
        //若为true,则需要刷新
        if(!_isBack || _self.isFirstEnter){

            _self.isFirstEnter = false;
            //清空页面数据
            tool.ClearControlData(function(){
                //渲染控件
                tool.InitiateInfoPageControl(_self,id,function(){
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
        //添加会议记录
        addMeetingClick: function () {
            this.$router.push({
                path: '/MeetingNoteinfo/{"AutoID":""}',
            })
        },
        //查看完整会议记录
        viewCompleteClick: function () {
            this.$router.push({
                path: '/MeetingNoteinfo/{"AutoID":""}',
            })
        },
        //收藏事件
        followClick: function (e) {
            if ($(".guanZhu").hasClass("calc-noshoucang")) {
                $(".guanZhu").addClass("calc-shoucang");
                $(".guanZhu").removeClass("calc-noshoucang")
                $.toast(lanTool.lanContent('906_关注成功'), 1500, function () {});
            } else {
                $(".guanZhu").addClass("calc-noshoucang");
                $(".guanZhu").removeClass("calc-shoucang")
                $.toast(lanTool.lanContent('905_取消关注'), 1500, function () {});
            }
        },
        savePageData:function(e){
            var _self = this;
            var id = _self.$route.params.id;
            var fromType = "Opportunitiesinfo";
            $("#save").off().on("click",function(){
                tool.SaveOrUpdateData(fromType, id,_self, function(){
                });
            });
        }
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
@import "../../assets/css/pages/Opportunitiesinfo.css";
</style>
