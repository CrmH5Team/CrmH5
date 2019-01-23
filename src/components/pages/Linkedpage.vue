<template>
  <div>
    <header class="header sticky">
      <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>
      <h1 class="header-title f18">{{title||''}}</h1>
      <a @click="saveHandler" class="calcfont calc-gou right" id="save"></a>
    </header>

    <div class="nav sticky">
      <div id="dealPipelineNav" @click="switchPage(0,$event)" class="f16 nav-item active-item">Deal Pipeline</div>
      <div id="opportunitiesNav" @click="switchPage(1,$event)" class="f16 nav-item">Opportunities</div>
      <div class="nav-border"></div>
    </div>
    <div class="selectList-scroll">

      <div v-show="showPage==0" class="user-page">
        <div class="search">
          <div class="search-box">
            <span class="calcfont calc-sousuo input-search-icon"></span>
            <input
              type="search"
              id="dealInput"
              key="userInput"
              class="search-input lanInputPlaceHolder"
              data-lanid="780_搜索"
              placeholder=""
            >
          </div>
        </div>
        <!-- 列表 -->
        <div v-if="!noDealData" class="dataList" id="dealList">
            <div v-for="item in dealPipelineData" :key="item.id" class="item-div">
                <label class="radios-label">
                    <input type="radio" name="aa" :value="item.id" v-model="dealPipelineValue" /><i class="radios"></i><span class="f14">{{item.text}}</span>
                </label>
            </div>
        </div>
        <!-- 没数据 -->
        <nothing v-if="noDealData" style="padding-top:0.8rem;"></nothing>
      </div>


      <div v-show="showPage==1" class="group-page">
        <div class="search">
          <div class="search-box">
            <span class="calcfont calc-sousuo input-search-icon"></span>
            <input
              type="search"
              id="oppInput"
              key="groupInput"
              class="search-input lanInputPlaceHolder"
              data-lanid="780_搜索"
              placeholder=""
            >
          </div>
        </div>
        <!-- 列表 -->
        <div v-if="!noOppData" class="dataList" id="oppList">
            <div v-for="item in opportunitiesData" :key="item.id" class="item-div">
                <label class="radios-label">
                    <input type="radio" name="bb" :value="item.id" v-model="opportunitiesValue"/><i class="radios"></i><span class="f14">{{item.text}}</span>
                </label>
            </div>
        </div>
        <!-- 没数据 -->
        <nothing v-if="noOppData" style="padding-top:0.8rem;"></nothing>
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
        search: lanTool.lanContent("208_搜索")
      },
      noDealData: false, //没数据
      noOppData: false, //没数据
      //dealPipeline数据
      dealPipelineData: [
        {
          id:'group1',
          text:'group17777'
        },
        {
          id:'group2',
          text:'group28888'
        },
        {
          id:'group3',
          text:'group399999'
        }
      ],
      //Opportunities数据
      opportunitiesData: [
        {
          id:'group1',
          text:'group1333'
        },
        {
          id:'group2',
          text:'group222222'
        },
        {
          id:'group3',
          text:'group311111'
        }
      ],
      title: "linked with",

      dealPipelineValue: '',
      opportunitiesValue: '',
      showPage: 0,
      FromType: "", //来源类型
      FromID: "" //来源ID
    };
  },
  watch: {
    dealPipelineValue: function(newValue, oldValue) {
      var _self = this;
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
    opportunitiesValue: function(newValue, oldValue) {
      var _self = this;
      if (tool.isNullOrEmptyObject(newValue)) {
        //newValue
        // $("span.groupMemCount").text("(0)");
        return;
      }
    }
  },
  created: function() {
    // this.FromType = this.$route.query.rightPanelFromType;
    // this.FromID = this.$route.query.rightPanelFromID;
  },
  mounted: function() {
    lanTool.updateLanVersion();
    this.search();
    this.changePos();

    //默认触发第一个选项卡
    setTimeout(function() {
      $("#dealPipelineNav").trigger("click");
    }, 0);
  },
  methods: {

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

    backHandler: function() {
      this.$router.back(-1);
    },
    saveHandler: function(mycallback) {
      var _self = this;
      var curPageNum = _self.showPage;
      var fromType = _self.FromType || "";
      var fromID = _self.FromID || "";
      // var isGroup = false;
      // var valArr = [];

      //user
      // if(curPageNum == 0){
      //     isGroup = false;
      //     valArr = _self.userCheckedValue || [];
      // }else{
      //     //userGroup
      //     isGroup = true;
      //     valArr = _self.groupCheckedValue || [];
      // }

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
      tool.showLoading();
      $.ajax({
        async: true,
        type: "post",
        url: urlTemp,
        data: jsonDatasTemp,
        success: function(data) {
          tool.hideLoading();
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
          tool.hideLoading();
          return true;
        },
        complete: function() {
          //隐藏虚拟键盘
          document.activeElement.blur();
        }
      });
    },
    //初始化数据
    getData: function(curPageNum, mycallback) {

      var _self = this;
      //清空另一组数据
      //user
      if (curPageNum == 0) {
        _self.opportunitiesData = [];
        _self.opportunitiesValue = '';
        _self.noOppData = true;
      } else {
        //group
        _self.dealPipelineData = []
        _self.dealPipelineValue = '';
        _self.noDealData = true;
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
      tool.showLoading();
      $.ajax({
        async: true,
        type: "post",
        url: urlTemp,
        data: jsonDatasTemp,
        success: function(data) {
          tool.hideLoading();
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
              _self.dealPipelineData = null;
              _self.noDealData = true;
            } else {
              _self.opportunitiesData = null;
              _self.noOppData = true;
            }
          } else {
            if (curPageNum == 0) {
              _self.dealPipelineData = data;
              _self.noDealData = false;
            } else {
              _self.opportunitiesData = data;
              _self.noOppData = false;
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
          tool.hideLoading();
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
      var _self = this;
      var curPageNum = _self.showPage;
      var fromType = _self.FromType || "";
      var fromID = _self.FromID || "";
      var isGroup = false;
      //user
      // if(curPageNum == 0){
      //     isGroup = false;
      // }else{
      //     isGroup = true;
      // }
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
        IsGroup : false
      };
      tool.showLoading();
      $.ajax({
        async: true,
        type: "post",
        url: urlTemp,
        data: jsonDatasTemp,
        success: function(data) {
          tool.hideLoading();
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
                _self.dealPipelineValue = data;
            }else{
                //userGroup
                _self.opportunitiesValue = data;
            }
        },
        error: function(jqXHR, type, error) {
          if (curPageNum == 0) {
            _self.noDealData = true;
          } else {
            _self.noOppData = true;
          }
          console.log(error);
          tool.hideLoading();
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
        $("#dealInput")
          .unbind()
          .bind("input", function() {
            var queryStr = $.trim($(this).val());
            if (queryStr === "") {
                $('#dealList').find('div.item-div').show();
            } else {
                $('#dealList').find('div.item-div').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
            }
          });

        $("#oppInput")
          .unbind()
          .bind("input", function() {
            var queryStr = $.trim($(this).val());
            if (queryStr === "") {
                $('#oppList').find('div.item-div').show();
            } else {
                $('#oppList').find('div.item-div').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
            }
          });
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/pages/linkedPage.css";
</style>
