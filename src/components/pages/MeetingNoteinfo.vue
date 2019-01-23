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
                            <div class="ListCellContentLeftText lanText" data-lanid="714_会议性质"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text"
                              data-field="BusinessType"
                              data-lanid="714_会议性质"
                              data-fieldControlType="picker"
                              data-fieldVal=""
                              Code="DropDowList_ViewBaseAllTypes"
                              TypeValue="Companybusinesstype"
                              class="ListCellContentRightText"/>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="712_开始时间"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">01/Jan</div>
                        </div>
                        <div class="ListCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="713_结束时间">End</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">16/Nov 16:00</div>
                        </div>
                        <div class="ListCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="821_对内/对外">对内/对外</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <input type="text"
                              data-field="BusinessType"
                              data-lanid="821_对内/对外"
                              data-fieldControlType="picker"
                              data-fieldVal=""
                              Code="DropDowList_ViewBaseAllTypes"
                              TypeValue="Companybusinesstype"
                              class="ListCellContentRightText"/>
                        </div>
                        <div class="ListCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListSpecialCell specialCell" id="CompanyIDClickObj">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon leftIconHidden"><span class="calcfont calc-yewujihui"></span></div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="790_公司"></div>
                        <div class="ListSpecialCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div
                        class="ListSpecialCellContent"
                        data-field="CompanyID"
                        data-fieldcontroltype="selectList"
                        data-lanid="790_公司"
                        data-fieldval=""
                        data-selecttype="radio"
                        code="DropDowList_ViewBaseCompanyBaseInf"
                        typevalue = ""
                        data-clickObj="CompanyIDClickObj"
                      ></div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="791_联系人"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div
                              class="ListCellContentRightText"
                              data-field=""
                              data-fieldcontroltype="selectList"
                              data-lanid="791_联系人"
                              data-fieldval=""
                              data-selecttype="radio"
                              code=""
                              typevalue = ""
                            ></div>
                        </div>
                        <div class="ListCellRightIcon rightIconHidden"><span class="calcfont calc-you"></span></div>
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
                <div class="ListSpecialCell specialCell visible">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon leftIconHidden"><span class="calcfont calc-yewujihui"></span></div>
                        <div class="ListSpecialCellFieldContent lanText" data-lanid="832_关联于商业"></div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent rightIconHidden">MSN06893 Delivery with Air China</div>

                </div>
            </div>

            <Uploadfile></Uploadfile>

            <!-- <div class="busOpportunities">
                <div class="ListCell" @click="goinDealOrOpportunity">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-yidu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText lanText" data-lanid="896_查看关联的交易/商业机会"></div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText"></div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
            </div> -->

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

            isFirstEnter:false,//是否首次进入
        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist' || from.name == 'uploadinput') {
            to.meta.isBack = true;
        }
        next();
    },

    created: function () {
        this.isFirstEnter = true;
    },
    mounted: function () {
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
