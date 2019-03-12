<template>
<div>
    <header class="header sticky">
        <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>
        <h1 class="header-title f18">{{title||''}}</h1>
        <a @click="saveHandler" class="calcfont calc-gou right" id="save"></a>
        <a @click="clearHandler" class="calc-shanchu  calcfont right" id="clear"></a>
    </header>

    <div class="selectList-scroll">
            <div class="user-page">
                  <div class="search ">
                      <div class="search-box">
                          <span class="calcfont calc-sousuo input-search-icon"></span>
                          <input
                                  type="text"
                                  id="searchInput"
                                  class="search-input lanInputPlaceHolder" data-lanid="780_搜索" placeholder=""  />
                      </div>
                  </div>
                  <!-- 列表 -->
                  <div v-if="!notData" class="dataList select-user-list">
                      <div v-for="item in userData" class="group-div">
                          <div :data-id="item.id" class="item-div f14" @click="groupToggle">
                              <div class="title-div">{{item.text}}</div>
                              <span class="f14 memCount">(0)</span>
                          </div>
                          <div class="child-list">
                              <div v-for="member in item.nodes" class="child-list-item f14">
                                    <div class="margin10">
                                            <label class="user-checkbox checkbox-label" @click.stop>
                                                <input type="checkbox" name="group" :data-pid="member.pid" :value="member.id" v-model="userCheckedValue"/>
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
                  <nothing v-if="notData" style="padding-top:0.8rem;"></nothing>
            </div>
    </div>
</div>
</template>

<script>
import Nothing from "../common/Nothing"
export default {
    components:{
        'nothing':Nothing
    },
    data() {
        return {
            languageData: {
                'search': lanTool.lanContent('780_搜索'),
            },
            notData:false,
            //用户数据
            userData: [

            ],
            userCheckedValue:[],
            field:"",//来源字段名
            code:"",//执行动作名
            typeValue:"",//具体动作
            title: "",//标题
            value: "", //已选数据
            selectType:"", //判断是否多选
            fromType:"",//来源类型
            fromID:"",//来源记录Id
            filter:""//过滤条件
        }
    },
    watch:{
        userCheckedValue:function(newValue){
            // console.log(newValue);
            var _self = this;
            if(tool.isNullOrEmptyObject(newValue)){
                //newValue
                $("span.memCount").text("(0)");
                return;
            }

            _self.$nextTick(function(){
                $("div.item-div").each(function(){
                    var pObj = $(this);
                    if(tool.isNullOrEmptyObject(pObj)){
                        return true;
                    }

                    var memCount = "(" + (pObj.siblings("div.child-list").find("input[type='checkbox']:checked").length || 0) + ")";
                    pObj.find("span.memCount").text(memCount);
                });
            });
        }
    },
    created: function () {
        this.field = this.$route.query.field;
        this.code = this.$route.query.code;
        this.typeValue = this.$route.query.typeValue;
        this.title = this.$route.query.title;
        this.value = this.$route.query.value;
        this.selectType = this.$route.query.selectType;
        this.fromType = this.$route.query.fromType;
        this.fromID = this.$route.query.fromID;
        this.filter = this.$route.query.filter;
    },
    mounted: function () {
        lanTool.updateLanVersion();
        //清空输入框
        $("#searchInput").val("");
        //加载数据
        var _self = this;
        _self.getData(function(){
            _self.iniVal();
        });
        //监听搜索
        this.search();
    },
    methods: {
        //获取数据
        getData:function(mycallback){
            var _self = this;
            if (tool.isNullOrEmptyObject(_self.code)) {
                return;
            }

            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.CommonDataServiceHandle_Query;

            // console.log(_self.fromType);
            // console.log(_self.fromID);

            //传入参数
            var jsonDatasTemp = {
                    CurrentLanguageVersion: lanTool.currentLanguageVersion,
                    UserName: tool.UserName(),
                    _ControlName: controlName,
                    _RegisterCode: tool.RegisterCode(),
                    Code: _self.code,
                    TypeValue: _self.typeValue,
                    FromType:_self.fromType||"",
                    FromID:_self.fromID||"",
                    Filter:_self.filter||""
                };
            var loadingIndexClassName = tool.showLoading();
            $.ajax({
              async: true,
              type: "post",
              url: urlTemp,
              data: jsonDatasTemp,
              success: function (data) {
                  tool.hideLoading(loadingIndexClassName);
                  data = tool.jObject(data);
                  // console.log(data);
                  if (data._ReturnStatus == false) {
                    _self.notData = true;
                    tool.showText(tool.getMessage(data));
                    console.log(tool.getMessage(data));
                    return true;
                  }

                  data = data._OnlyOneData || [];
                  _self.userData = data;

                  if(data.length<=0){
                      _self.notData = true;
                  }else{
                      _self.notData = false;
                  }

                  if(!tool.isNullOrEmptyObject(mycallback)){
                    mycallback();
                  }
              },
              error: function (jqXHR, type, error) {
                  _self.notData = true;
                  console.log(error);
                  tool.hideLoading(loadingIndexClassName);
                  return true;
              },
              complete: function () {
                  //tool.hideLoading();
                  //隐藏虚拟键盘
                  document.activeElement.blur();
              }
            });
        },
        //渲染已经选择的数据
        iniVal:function(){
            var _self = this;
            if(tool.isNullOrEmptyObject(_self.value)){
                return;
            }
             var valArrTemp = _self.value.split(",");
             _self.$nextTick(function(){
                 for(var i = 0;i< valArrTemp.length;i++){
                     if(tool.isNullOrEmptyObject((valArrTemp[i]||""))){
                         continue;
                     }

                     _self.userCheckedValue.push(valArrTemp[i]);
                 }
             });
        },
        //点击分组收起展开
        groupToggle:function(e){
            document.activeElement.blur();
            var el = e.target;
            var _curObj = $(el);

            if (!_curObj.hasClass('item-div')) {
                _curObj = _curObj.parents("div.item-div:first");
                if (tool.isNullOrEmptyObject(_curObj)) {
                    return;
                }
            }
            if(_curObj.hasClass('open')){
                _curObj.siblings('.child-list').slideUp(500,function(){
                    _curObj.removeClass('open')
                });
            }else{
                _curObj.addClass('open').siblings('.child-list').slideDown(500);
            }

        },
        clickSearch: function (e) {
            $(e.target).closest('.search').addClass('search-active');
            document.activeElement.blur();
            $(e.target).siblings('.search-input').focus();
        },
        backHandler: function () {
            this.$router.back(-1);
        },
        saveHandler: function () {
            var _self = this;
            var returnObj = {
                field: _self.field,
                value: {}
            };

            var valArr = _self.userCheckedValue || [];
            var idArr = [];
            var textArr = [];
            for(var i = 0; i < valArr.length;i++){
                var idTemp = valArr[i];
                var textTemp = $.trim($("input[value='"+ idTemp +"']:first").siblings("span:first").text()) || "";

                //若已经加过
                if($.inArray(idTemp,idArr)>=0){
                    continue;
                }

                idArr.push(idTemp);
                textArr.push(textTemp);
            }

            // console.log(idArr);
            // console.log(textArr);

            returnObj["value"] = {
                id : idArr.join(","),
                text : textArr.join(",")
            };

            console.log(returnObj);

            //console.log(returnObj);
            eventBus.$emit('updataSelectList', returnObj);
            _self.$router.back(-1);
        },
        //清楚
        clearHandler:function(){
            var _self = this;
            _self.userCheckedValue = [];
        },
        //筛选
        search: function () {
            this.$nextTick(function () {
                var listDom = $('.dataList');
                $('#searchInput').unbind().bind('input', function () {
                    var queryStr = $.trim($(this).val());
                    if (queryStr === '') {
                        listDom.find('.child-list-item').show().closest('.group-div').show();
                    } else {
                        var childListItems = listDom.find('.child-list-item');
                            childListItems.hide().closest('.group-div').hide();
                            childListItems.filter(":lowerCaseContains('" + queryStr + "')").show().closest('.group-div').show();
                    }
                })
            })
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/pages/groupselectlist.css";
</style>
