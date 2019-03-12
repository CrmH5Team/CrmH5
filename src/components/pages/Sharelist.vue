<template>
  <div>
    <header class="header sticky">
      <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>
      <h1 class="header-title f18">{{title||''}}</h1>
      <a @click="saveHandler" class="calcfont calc-gou right" id="save"></a>
      <a @click="clearHandler" class="calc-shanchu  calcfont right" id="clear"></a>
    </header>

    <div class="nav sticky">
      <div id="navUser" @click="switchPage(0,$event)" class="f16 nav-item active-item lanText" data-lanid="631_用户"></div>
      <div id="navGroup" @click="switchPage(1,$event)" class="f16 nav-item lanText" data-lanid="632_用户组"></div>
      <div class="nav-border"></div>
    </div>
    <div class="selectList-scroll">
      <div v-show="showPage==0" class="user-page">
        <div class="search">
          <div class="search-box">
            <span class="calcfont calc-sousuo input-search-icon"></span>
            <input
              type="text"
              id="userInput"
              key="userInput"
              class="search-input lanInputPlaceHolder"
              data-lanid="780_搜索"
            />
          </div>
        </div>
        <!-- 列表 -->
        <div id="user-dataList" v-if="!noUserData" class="dataList select-user-list">
          <!-- <div class="dataList select-user-list"> -->

          <div v-for="item in userData" class="group-div">
            <div :data-id="item.id" class="userItemDiv item-div f14" @click="groupToggle">
              <div class="title-div">{{item.text}}</div>
              <span class="f14 userMemCount">(0)</span>
            </div>
            <div class="child-list">
              <div v-for="member in item.nodes" class="child-list-item f14">
                <div class="margin10">
                  <label class="user-checkbox checkbox-label" @click.stop>
                    <input
                      type="checkbox"
                      name="group1"
                      :data-pid="member.pid"
                      :value="member.id"
                      v-model="userCheckedValue"
                    >
                    <i class="checkbox"></i>
                    <span class="f14">{{member.text}}</span>
                    <!-- <span class="power f12 right">Responsible by</span> -->
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 没数据 -->
        <nothing v-if="noUserData" style="padding-top:0.8rem;"></nothing>
      </div>

      <div v-show="showPage==1" class="group-page">
        <div class="search">
          <div class="search-box">
            <span class="calcfont calc-sousuo input-search-icon"></span>
            <input
              type="text"
              id="groupInput"
              key="groupInput"
              class="search-input lanInputPlaceHolder"
              data-lanid="780_搜索"
              placeholder=""
           />
          </div>
        </div>
        <!-- 列表 -->
        <div id="group-dataList" v-if="!noGroupData" class="dataList select-group-list">
          <!-- <div class="dataList select-group-list"> -->
          <div v-for="item in groupData" class="group-div">
            <div class="groupItemDiv item-div" @click="groupToggle">
              <label class="checkbox-label" @click.stop>
                <input type="checkbox" name="group2" :value="item.id" v-model="groupCheckedValue">
                <i class="checkbox"></i>
                <span class="f14">{{item.text}}</span>
              </label>
              <!-- <span class="f14 right groupMemCount">(0)</span> -->
            </div>
            <div class="child-list">
              <div
                v-for="member in item.nodes"
                class="child-list-item f14"
                :data-id="member.id"
                :data-pid="member.pid"
              >{{member.text}}</div>
            </div>
          </div>
        </div>
        <!-- 没数据 -->
        <nothing v-if="noGroupData" style="padding-top:0.8rem;"></nothing>
      </div>
    </div>
  </div>
</template>

<script>
import Nothing from "../common/Nothing";
export default {
  components: {
    nothing: Nothing
  },
  data() {
    return {
      languageData: {
        search: lanTool.lanContent("780_搜索")
      },
      noUserData: true, //没数据
      noGroupData: true, //没数据
      //用户数据
      userData: [

      ],
      //组数据
      groupData: [

      ],
      title: lanTool.lanContent("946_分享给同事"),
      userCheckedValue: [],
      groupCheckedValue: [],
      showPage: 0,
      FromType: "", //来源类型
      FromID: "" //来源ID
    };
  },
  watch: {
    userCheckedValue: function(newValue, oldValue) {
      console.log(newValue);
      var _self = this;
      if (tool.isNullOrEmptyObject(newValue)) {
        //newValue
        $("span.userMemCount").text("(0)");
        return;
      }

      _self.$nextTick(function() {
        $("div.userItemDiv").each(function() {
          var pObj = $(this);
          if (tool.isNullOrEmptyObject(pObj)) {
            return true;
          }

          var memCount =
            "(" +
            (pObj
              .siblings("div.child-list")
              .find("input[type='checkbox']:checked").length || 0) +
            ")";
          pObj.find("span.userMemCount").text(memCount);
        });
      });
    },
    groupCheckedValue: function(newValue, oldValue) {
      // console.log(newValue);
      var _self = this;
      if (tool.isNullOrEmptyObject(newValue)) {
        //newValue
        // $("span.groupMemCount").text("(0)");
        return;
      }
    }
  },
  created: function() {
    this.FromType = this.$route.query.rightPanelFromType;
    this.FromID = this.$route.query.rightPanelFromID;
  },
  mounted: function() {
    lanTool.updateLanVersion();
    this.search();
    this.changePos();

    //默认触发第一个选项卡
    setTimeout(function() {
      $("#navUser").trigger("click");
    }, 0);
  },
  methods: {
    //点击分组收起展开
    groupToggle: function(e) {
      document.activeElement.blur();
      var el = e.target;
      var _curObj = $(el);
      if (!_curObj.hasClass('item-div')) {
          _curObj = _curObj.parents("div.item-div:first");
          if (tool.isNullOrEmptyObject(_curObj)) {
              return;
          }
      }
      if (!_curObj.hasClass("date-div")) {
        if (_curObj.hasClass("open")) {
          _curObj.siblings(".child-list").slideUp(500, function() {
            _curObj.removeClass("open");
          });
        } else {
          _curObj
            .addClass("open")
            .siblings(".child-list")
            .slideDown(500);
        }
      }
    },
    //切换页面
    switchPage: function(num, e) {
      document.activeElement.blur();
      var _self = this;
      var el = e.target;
      if (num === undefined) return;
      $(el)
        .addClass("active-item")
        .siblings()
        .removeClass("active-item");
      _self.changePos();
      _self.showPage = num;

      this.getData(_self.showPage);
      //,_self.iniVal()
    },
    //table底部横条过渡效果
    changePos: function() {
      this.$nextTick(function() {
        var activePos = $(".nav .active-item").position();
        $(".nav-border")
          .stop()
          .css({
            left: activePos.left,
            width: $(".nav .active-item").width()
          });
      });
    },
    selectAll: function(type, e) {
    //   document.activeElement.blur();
    //   var self = this;
    //   var el = e.target,
    //     t = $(e.target).is(":checked");
    //   if (t) {
    //     if (type === "user") {
    //       $.each(self.userData, function(index, item) {
    //         self.userCheckedValue.push(item.value);
    //       });
    //     } else {
    //       $.each(self.groupData, function(index, item) {
    //         self.groupCheckedValue.push(item.value);
    //       });
    //     }
    //   } else {
    //     self.userCheckedValue = [];
    //     self.groupCheckedValue = [];
    //   }
    },
    //失去焦点
    // blurHandler: function(e) {},
    backHandler: function() {
      this.$router.back(-1);
    },
    saveHandler: function(mycallback) {
      var _self = this;
      var curPageNum = _self.showPage;
      var fromType = _self.FromType || "";
      var fromID = _self.FromID || "";
      var isGroup = false;
      var valArr = [];

        // console.log(_self.userCheckedValue);
        // console.log(_self.groupCheckedValue);

      //user
      if(curPageNum == 0){
          isGroup = false;
          valArr = _self.userCheckedValue || [];
      }else{
          //userGroup
          isGroup = true;
          valArr = _self.groupCheckedValue || [];
      }

      var toTargetID = "";
      toTargetID = valArr.join(",");

      var urlTemp = tool.AjaxBaseUrl();
      var controlName = tool.Api_DataShareInfHandle_SaveOrUpdate;
      //传入参数
      var jsonDatasTemp = {
        CurrentLanguageVersion: lanTool.currentLanguageVersion,
        UserName: tool.UserName(),
        _ControlName: controlName,
        _RegisterCode: tool.RegisterCode(),
        FromType: fromType,
        FromID: fromID,
        ToTargetID : toTargetID,
        IsGroup : isGroup
      };
      var loadingIndexClassName = tool.showLoading();
      $.ajax({
        async: true,
        type: "post",
        url: urlTemp,
        data: jsonDatasTemp,
        success: function(data) {
          tool.hideLoading(loadingIndexClassName);
          data = tool.jObject(data);
          // console.log(data);
          if (data._ReturnStatus == false) {
            tool.showText(tool.getMessage(data));
            console.log(tool.getMessage(data));
            return true;
          }

          //返回上一页
          _self.$router.back(-1);
        },
        error: function(jqXHR, type, error) {
          if (curPageNum == 0) {
            _self.noUserData = true;
          } else {
            _self.noGroupData = true;
          }
          console.log(error);
          tool.hideLoading(loadingIndexClassName);
          return true;
        },
        complete: function() {
          //tool.hideLoading();
          //隐藏虚拟键盘
          document.activeElement.blur();
        }
      });
    },
    //清楚
    clearHandler:function(){
        var _self = this;
        if(_self.showPage == 0){
            _self.userCheckedValue = [];
        }else{
            _self.groupCheckedValue = [];
        }

    },
    //初始化数据
    getData: function(curPageNum, mycallback) {
      var _self = this;
      //清空另一组数据
      //user
      if (curPageNum == 0) {
        $("#groupInput").val("");
        _self.groupData = []
        _self.groupCheckedValue = [];
        _self.noGroupData = true;
      } else {
        //group
        $("#userInput").val("");
        _self.userData = [];
        _self.userCheckedValue = [];
        _self.noUserData = true;
      }

      var urlTemp = tool.AjaxBaseUrl();
      var controlName = tool.CommonDataServiceHandle_Query;
      //传入参数
      var jsonDatasTemp = {
        CurrentLanguageVersion: lanTool.currentLanguageVersion,
        UserName: tool.UserName(),
        _ControlName: controlName,
        _RegisterCode: tool.RegisterCode(),
        Code: "DropDowList_PopedomTeamVsUser",
        TypeValue: "",
        FromType: _self.FromType || "",
        FromID: _self.FromID || ""
      };
      var loadingIndexClassName = tool.showLoading();
      $.ajax({
        async: true,
        type: "post",
        url: urlTemp,
        data: jsonDatasTemp,
        success: function(data) {
          tool.hideLoading(loadingIndexClassName);
          data = tool.jObject(data);
          // console.log(data);
          if (data._ReturnStatus == false) {
            if (curPageNum == 0) {
              _self.noUserData = true;
            } else {
              _self.noGroupData = true;
            }
            tool.showText(tool.getMessage(data));
            console.log(tool.getMessage(data));
            return true;
          }

          data = data._OnlyOneData || [];

          if (data.length <= 0) {
            if (curPageNum == 0) {
              _self.userData = null;
              _self.noUserData = true;
            } else {
              _self.groupData = null;
              _self.noGroupData = true;
            }
          } else {
            if (curPageNum == 0) {
              _self.userData = data;
              _self.noUserData = false;
            } else {
              _self.groupData = data;
              _self.noGroupData = false;
            }
          }

          _self.iniVal();
        },
        error: function(jqXHR, type, error) {
          if (curPageNum == 0) {
            _self.noUserData = true;
          } else {
            _self.noGroupData = true;
          }
          console.log(error);
          tool.hideLoading(loadingIndexClassName);
          return true;
        },
        complete: function() {
          //tool.hideLoading();
          //隐藏虚拟键盘
          document.activeElement.blur();
        }
      });
    },
    //数据赋值
    iniVal:function(){
      //console.log("iniVal");
      var _self = this;
      var curPageNum = _self.showPage;
      //console.log("curPageNum:"+curPageNum);
      var fromType = _self.FromType || "";
      var fromID = _self.FromID || "";
      var isGroup = false;
      //user
      if(curPageNum == 0){
          isGroup = false;
      }else{
          //userGroup
          isGroup = true;
      }
      var urlTemp = tool.AjaxBaseUrl();
      var controlName = tool.Api_DataShareInfHandle_Query;
      //传入参数
      var jsonDatasTemp = {
        CurrentLanguageVersion: lanTool.currentLanguageVersion,
        UserName: tool.UserName(),
        _ControlName: controlName,
        _RegisterCode: tool.RegisterCode(),
        FromType: fromType,
        FromID: fromID,
        IsGroup : isGroup
      };
      var loadingIndexClassName = tool.showLoading();
      $.ajax({
        async: true,
        type: "post",
        url: urlTemp,
        data: jsonDatasTemp,
        success: function(data) {
          tool.hideLoading(loadingIndexClassName);
          data = tool.jObject(data);
          // console.log(data);
          if (data._ReturnStatus == false) {
            tool.showText(tool.getMessage(data));
            console.log(tool.getMessage(data));
            return true;
          }

          data = data._OnlyOneData || [];
          if(data.length<=0){
              return;
          }

            //user
            if(curPageNum == 0){
                _self.userCheckedValue = data;
            }else{
                //userGroup
                _self.groupCheckedValue = data;
            }
        },
        error: function(jqXHR, type, error) {
          if (curPageNum == 0) {
            _self.noUserData = true;
          } else {
            _self.noGroupData = true;
          }
          console.log(error);
          tool.hideLoading(loadingIndexClassName);
          return true;
        },
        complete: function() {
          //tool.hideLoading();
          //隐藏虚拟键盘
          document.activeElement.blur();
        }
      });
    },
    //筛选
    search: function() {
      this.$nextTick(function() {

        $("#userInput")
          .unbind()
          .bind("input", function() {
            var listDom = $("#user-dataList");
            var queryStr = $.trim($(this).val());
            if (queryStr === "") {
              listDom
                .find(".child-list-item")
                .show()
                .closest(".group-div")
                .show();
            } else {
              var childListItems = listDom.find(".child-list-item");
              childListItems
                .hide()
                .closest(".group-div")
                .hide();
              childListItems
                .filter(":lowerCaseContains('" + queryStr + "')")
                .show()
                .closest(".group-div")
                .show();
            }
          });
        $("#groupInput")
          .unbind()
          .bind("input", function() {
            var listDom = $("#group-dataList");
            var queryStr = $.trim($(this).val());
            if (queryStr === "") {
              listDom.find(".group-div").show();
            } else {
              listDom
                .find(".group-div")
                .hide()
                .find('.item-div')
                .filter(":lowerCaseContains('" + queryStr + "')")
                .closest('.group-div')
                .show();
            }
          });
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/pages/Sharelist.css";
</style>
