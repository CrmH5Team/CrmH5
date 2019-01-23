<template>
  <div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>
          <h1 class="mui-title f18">{{title}}</h1>
    </header>


    <div class="search-box">
      <search-items :searchData="searchData"></search-items>
    </div>
    <div class="anniu">
      <div class="clear-btn lanText" data-lanid="627_清空" @click="clearFilter"></div>
      <div class="sure-btn lanText" data-lanid="545_确定" @click="constructFilter"></div>
    </div>
  </div>
</template>

<script>

import Searchitems from "../common/Searchitems";
export default {
  components: {
    "search-items": Searchitems
  },
  data() {
    return {
      isFirstEnter: false, //是否首次进入
      title: lanTool.lanContent('780_搜索'),
      searchData: [],
      dataFilter: [],
      // Clear: "",
      // OK: ""
    };
  },
  created() {
    // console.log("created");
    this.isFirstEnter = true;
  },
  mounted: function() {},
  beforeRouteEnter: function(to, from, next) {
    // console.log("beforeRouteEnter");
    if (from.name == "selectlist"|| from.name == "groupselectlist") {
      to.meta.isBack = true;
    } else {
      to.meta.isBack = false;
    }
    next();
  },
  activated: function() {
    // console.log("activated");
    lanTool.updateLanVersion();
    var _self = this;

    setTimeout(function() {

      // _self.Clear = lanTool.lanContent("627_清空");
      // _self.OK = lanTool.lanContent("545_确定");
      var paramStr = _self.$route.params.paramStr;
      var paramObj = tool.jObject(paramStr);
      // console.log(paramObj);
      if (!tool.isNullOrEmptyObject(paramObj)) {
        _self.searchData = paramObj.dataModule;
        //_self.dataFilter = paramObj.dataFilter;
      }

      var _isBack = _self.$route.meta.isBack;

      // console.log("_self.isFirstEnter:" + _self.isFirstEnter);
      // console.log("_isBack:" + _isBack);

      //若为true,则需要刷新
      if (!_isBack || _self.isFirstEnter) {
        //控件渲染
        _self.$nextTick(function() {
          //清空页面数据
          tool.ClearControlData(function() {
            //渲染控件
            tool.InitiateInfoPageControl(_self,"-1",function() {
              _self.isFirstEnter = false;
              if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
                return;
              }

              //更新selectlist控件的结果
              var curObj = $(
                "[data-field='" + eventBus.selectListData.field + "']"
              );
              //   console.log(eventBus.selectListData);
              //   console.log(curObj);

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
        if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
          return;
        }

        //更新selectlist控件的结果
        var curObj = $("[data-field='" + eventBus.selectListData.field + "']");
        if (tool.isNullOrEmptyObject(curObj)) {
          return;
        }

        var curObj = $("[data-field='" + eventBus.selectListData.field + "']");
        if (tool.isNullOrEmptyObject(curObj)) {
          return;
        }
        curObj.attr("data-fieldval", eventBus.selectListData.value.id);
        curObj.text(eventBus.selectListData.value.text);

        //清空全局变量
        eventBus.selectListData = null;
      }
    }, 200);
  },
  methods: {
      //构造查询条件
      constructFilter: function(e) {
        var _self = this;
        var _curObj = e.target;
        this.$nextTick(function() {
          // console.log("constructFilter");
          tool.ConstructQueryCondiction(_self, function(queryCondictionTemp) {
            //console.log("myCallBack");
            //console.log(queryCondictionTemp);
            eventBus.$emit("queryCondiction",
            {
              queryCondiction:queryCondictionTemp,
              isFromConfirm:true
            });
            _self.$router.back(-1);
          });
        });
      },
      //清空查询条件
      clearFilter: function(e) {
        var _self = this;
        var _curObj = e.target;
        this.$nextTick(function() {
          console.log("clearFilter");
          //清空页面数据
          tool.ClearControlData();
        });
      },

      //点击左上角返回
      back:function(){
          this.$router.back(-1);
      },
  }
};
</script>



<style scoped>
/*头部*/
header{position: relative;}
header.mui-bar {
  background: #f8f2dc;
  overflow: hidden;
}
.mui-title {
	right: 40px;
    left: 40px;
    display: inline-block;
    overflow: hidden;
    width: auto;
    /* font-size: 0.34rem; */
    margin: 0;
    text-overflow: ellipsis;
    position: absolute;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    font-weight: 400;
    line-height: 0.88rem;
}
.calcfont{
    font-size: 0.48rem;
    text-align: center;
    padding: 0.2rem 10px;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
}
header .mui-title,header a {
	color: #333;
}



/*底部按钮*/
.anniu {
  position: fixed;
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  bottom: 0;
  font-size: 0.25rem;
  left: 0;
  z-index: 3;
  display: flex;
}

.clear-btn,
.sure-btn {
  flex: 1;
  background-color: #f2f2f2;
  color: #000000;
  text-align: center;
}
.sure-btn {
  background-color: #ff5a21;
  color: #ffffff;
}
</style>
