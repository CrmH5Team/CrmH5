<template>
  <div>

    <Infoheader :isAddNew="isAddNew" :operation="operation" :title="ptitle"></Infoheader>

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
          <div class="ListSpecialCell visible" id="Organization">
            <div class="ListSpecialCellField">
              <div class="ListSpecialCellLeftIcon">
                <span class="calcfont calc-gongsixinxi"></span>
              </div>
              <div
                id="CompanyIDClickObj"
                class="ListSpecialCellFieldContent lanText"
                data-lanid="790_公司"
              ></div>
              <div class="ListSpecialCellRightIcon">
                <span class="calcfont calc-you"></span>
              </div>
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
              data-clickobj="CompanyIDClickObj"
            ></div>
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
                >
              </div>
              <div class="ListCellRightIcon">
                <span class="calcfont calc-you"></span>
              </div>
            </div>
          </div>

          <div class="ListCell visible">
            <div class="ListCellLeftIcon">
              <span class="calcfont calc-fuzerenicon"></span>
            </div>
            <div class="ListCellContent">
              <div class="ListCellContentLeft leftContent">
                <div class="ListCellContentLeftText lanText" data-lanid="825_负责人"></div>
              </div>
              <div class="ListCellContentRight rightContent">
                <div
                  class="ListCellContentRightText"
                  data-field="Initiator"
                  data-fieldcontroltype="selectList"
                  data-lanid="825_负责人"
                  data-fieldval=""
                  data-selecttype="checkbox"
                  code="DropDowList_PopedomTeamVsUser"
                  typevalue=""
                  dara-fromType="6"
                ></div>
              </div>
              <div class="ListCellRightIcon">
                <span class="calcfont calc-you"></span>
              </div>
            </div>
          </div>
          <div class="ListCell tip">
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

          <div class="accessView">
            <div class="ListCell" @click="goToShareList">
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
    <InfoRightPanel :items="itemsData" :isShowList="isShowMenuList" :isShowSend="isShowSendBtn"></InfoRightPanel>
  </div>
</template>

<script>
import Infoheader from "../common/Infoheader";
import InfoRightPanel from "../common/InfoRightPanel";
import Infofooter from "../common/infoFooter";
import Mixins from "../../mixins";
import eventBus from "../common/Event";

export default {
  // mixins: [Mixins.PAGE_INFO],
  components: {
    Infoheader,
    Infofooter,
    InfoRightPanel
  },
  data() {
    return {
      ptitle: "contact detail",
      itemsData: ["Calndar(3)", "Opportunities(2)"],
      isShowMenuList: false,
      isShowSendBtn: true,

      isAddNew: false, //是否添加新纪录
      operation:true,//控制详情页header按钮，ture:显示可操作，false:隐藏
      onlyView:false,//控制页面头部icon,true:不显示头部icon,false:显示
      isFirstEnter: false //是否首次进入
    };
  },
  beforeRouteEnter: function(to, from, next) {
    if (from.name === "selectlist") {
      to.meta.isBack = true;
    } else {
      to.meta.isBack = false;
    }
    next();
  },
  created: function() {
    this.isFirstEnter = true;
  },
  mounted: function() {
    var _self = this;
    //监听保存
    _self.savePageData();
  },
  activated: function() {
    lanTool.updateLanVersion();
    document.activeElement.blur();
    var _self = this;
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

    console.log("_isBack:"+_isBack);
    console.log("_self.isFirstEnter:"+_self.isFirstEnter);

    //若为true,则需要刷新
    if (!_isBack || _self.isFirstEnter) {
        _self.isFirstEnter = false;
      //清空页面数据
      tool.ClearControlData(function() {
        //渲染控件
        tool.InitiateInfoPageControl(_self, function() {
          //渲染数据
          tool.IniInfoData(fromType, id, function() {
            console.log(eventBus.selectListData);
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
        console.log(eventBus.selectListData);
      _self.isFirstEnter = false;
      if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
        return;
      }
    console.log(eventBus.selectListData);
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
  },
  methods: {
    //查看有权限访问的同事跳转事件
    goToShareList: function() {
      this.$router.push({
        path: "/poweruser",
        query: {
          name: "Colleagues with access"
        }
      });
    },
    //查看公司信息跳转事件
    goToOrganizationsInfo: function() {
      this.$router.push({
        path: '/organizationsinfo/{"AutoID":""}'
      });
    },
    savePageData: function(e) {
      var _self = this;
      var id = _self.$route.params.id;
      var fromType = "Contactsinfo";
      $("#save")
        .off()
        .on("click", function() {
          //console.log("save");
          tool.SaveOrUpdateData(fromType, id, _self, function() {});
        });
    }
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
