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
      // dataFilter: [],
      queryCondictionData:[]
    };
  },
  created() {
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

      var paramStr = _self.$route.params.paramStr;
      var paramObj = tool.jObject(paramStr);
      // console.log(paramObj);
      if (!tool.isNullOrEmptyObject(paramObj)) {
        _self.searchData = paramObj.dataModule;
        _self.queryCondictionData = paramObj.queryCondictionData;
      }

      var _isBack = _self.$route.meta.isBack;

      // console.log("_self.isFirstEnter:" + _self.isFirstEnter);
      // console.log("_isBack:" + _isBack);

      //若为true,则需要刷新
      if (!_isBack || _self.isFirstEnter) {
        _self.isFirstEnter = false;

        _self.$nextTick(function() {
          //清空页面数据
          tool.ClearControlData(function() {
            //渲染控件
            tool.InitiateInfoPageControl(_self,"-1",function() {

                //根据回传调整给控件填值
                _self.fillValue();

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

      //给控件赋初始值
      fillValue:function(myCallBack){
            var _self = this;
            if(tool.isNullOrEmptyObject(_self.queryCondictionData)){
              return true;
            }
            var data = {};
            $.each(_self.queryCondictionData,function(index,item){
                console.log(item);
                data[item.Field] = item.Value ||'';
                if(item.DisplayValue){
                    data[item.Field+'_Name'] = item.DisplayValue||'';
                }

            })

            //控件赋值操作
            //1>picker
            $("[data-fieldControlType='picker']").each(function (index, obj) {
              var _curObj = $(this);
              if (tool.isNullOrEmptyObject(_curObj)) {
                return true;
              }
              var dataField = _curObj.attr("data-field") || "";
              if (tool.isNullOrEmptyObject(dataField)) {
                return true;
              }

              var fieldVal = data[dataField] || "";
              var fieldDisplay = data[dataField + "_Name"] || "";

              _curObj.val(fieldDisplay);
              _curObj.attr("data-fieldVal", fieldVal);
              _curObj.trigger('change');
            });
            //2>selectList
            $("[data-fieldControlType='selectList']").each(function (index, obj) {
              var _curObj = $(this);
              if (tool.isNullOrEmptyObject(_curObj)) {
                return true;
              }
              var dataField = _curObj.attr("data-field") || "";
              if (tool.isNullOrEmptyObject(dataField)) {
                return true;
              }

              var fieldVal = data[dataField] || "";
              var fieldDisplay = data[dataField + "_Name"] || "";

              _curObj.text(fieldDisplay);
              _curObj.attr("data-fieldVal", fieldVal);
            });
            //3>groupSelectList
            $("[data-fieldControlType='groupSelectList']").each(function (index, obj) {
              var _curObj = $(this);
              if (tool.isNullOrEmptyObject(_curObj)) {
                return true;
              }
              var dataField = _curObj.attr("data-field") || "";
              if (tool.isNullOrEmptyObject(dataField)) {
                return true;
              }

              var fieldVal = data[dataField] || "";
              var fieldDisplay = data[dataField + "_Name"] || "";

              _curObj.text(fieldDisplay);
              _curObj.attr("data-fieldVal", fieldVal);
            });
            //4>linkSelectList
            $("[data-fieldControlType='linkSelectList']").each(function (index, obj) {
              var _curObj = $(this);
              if (tool.isNullOrEmptyObject(_curObj)) {
                return true;
              }
              var dataField = _curObj.attr("data-field") || "";
              if (tool.isNullOrEmptyObject(dataField)) {
                return true;
              }

              var fieldVal = data[dataField] || "";
              var fieldDisplay = data[dataField + "_Name"] || "";

              _curObj.text(fieldDisplay);
              _curObj.attr("data-fieldVal", fieldVal);
            });
            //5>textareaInput
            $("[data-fieldControlType='textareaInput']").each(function (index, obj) {
              var _curObj = $(this);
              if (tool.isNullOrEmptyObject(_curObj)) {
                return true;
              }
              var dataField = _curObj.attr("data-field") || "";
              if (tool.isNullOrEmptyObject(dataField)) {
                return true;
              }
              var fieldVal = data[dataField] || "";
              _curObj.val(fieldVal);
            });
            //6>divText
            $("[data-fieldControlType='divText']").each(function (index, obj) {
              var _curObj = $(this);
              if (tool.isNullOrEmptyObject(_curObj)) {
                return true;
              }
              var dataField = _curObj.attr("data-field") || "";
              if (tool.isNullOrEmptyObject(dataField)) {
                return true;
              }

              var fieldVal = data[dataField] || "";

              //数据格式化
              var formatType = _curObj.attr("data-formatType") || "";
              var format = _curObj.attr("data-format") || "";
              // console.log("formatType");
              if(!tool.isNullOrEmptyObject(format) && !tool.isNullOrEmptyObject(fieldVal)){
                //时间格式化
                if(formatType.toLowerCase() == "datetime" || formatType.toLowerCase() == "date"){
                  fieldVal = fieldVal.ReplaceAll("T"," ");
                  fieldVal = tool.ChangeTimeFormat(fieldVal,format);
                }else{
                  //数字格式化
                }
              }

              _curObj.text(fieldVal);
            });
            //7>icon
            $("[data-fieldControlType='icon']").each(function (index, obj) {
              var _curObj = $(this);
              if (tool.isNullOrEmptyObject(_curObj)) {
                return true;
              }
              var dataField = _curObj.attr("data-field") || "";
              if (tool.isNullOrEmptyObject(dataField)) {
                return true;
              }
              //icon对象
              var dataValObj = _curObj.attr("data-fieldVal") || "{}";
              dataValObj = tool.jObject(dataValObj);

              //获取应该显示的icon
              var fieldVal = data[dataField] || "";
              fieldVal = fieldVal.toLowerCase();
              var iconClass = dataValObj[fieldVal] || "";
              if (tool.isNullOrEmptyObject(iconClass)) {
                return true;
              }

              //移除其他class
              for (var key in dataValObj) {
                if (key == fieldVal) {
                  continue;
                }

                var classNameTemp = dataValObj[key] || "";
                _curObj.removeClass(classNameTemp);
              }
              //添加class
              _curObj.addClass(iconClass);

            });
            //8>dateTimePicker
            $("[data-fieldControlType='dateTimePicker']").each(function (index, obj) {
              var _curObj = $(this);
              if (tool.isNullOrEmptyObject(_curObj)) {
                return true;
              }
              var dataField = _curObj.attr("data-field") || "";
              if (tool.isNullOrEmptyObject(dataField)) {
                return true;
              }

              var fieldVal = data[dataField] || "";
              var format = _curObj.attr("data-format") || "";
              if(!tool.isNullOrEmptyObject(format) && !tool.isNullOrEmptyObject(fieldVal)){
                fieldVal = fieldVal.ReplaceAll("T"," ");
                fieldVal = tool.ChangeTimeFormat(fieldVal,format);
              }

              _curObj.val(fieldVal);
            });

            if (!tool.isNullOrEmptyObject(myCallBack)) {
              myCallBack();
            }
      }
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
