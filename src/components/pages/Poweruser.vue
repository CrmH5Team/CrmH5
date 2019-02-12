<template>
<div>
    <header class="header sticky">
        <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>
        <h1 class="header-title f18">{{title||''}}</h1>
    </header>

    <div class="nav sticky">
        <div id="navUser" @click="switchPage(0,$event)" class="f16 nav-item active-item  lanText" data-lanid="631_用户"></div>
        <div id="navGroup" @click="switchPage(1,$event)" class="f16 nav-item  lanText" data-lanid="632_用户组" ></div>
        <div class="nav-border"></div>
    </div>

    <div class="selectList-scroll">

            <div v-show="showPage==0" class="user-page">
                  <div class="search ">
                      <div class="search-box">
                          <span class="calcfont calc-sousuo input-search-icon"></span>
                          <input
                                  type="search"
                                  id="userInput"
                                  key="userInput"
                                  class="search-input lanInputPlaceHolder" data-lanid="780_搜索" placeholder=""/>
                      </div>
                  </div>
                  <!-- 列表 -->
                  <div v-if="!noUserData" class="dataList select-user-list">
                      <div v-for="item in userData" class="list-item f14" :data-id="item.id">
                            <span>{{item.text}}</span>
                            <!-- <span class="power f12 right">123</span> -->
                      </div>
                  </div>
                  <!-- 没数据 -->
                  <nothing v-if="noUserData" style="padding-top:0.8rem;"></nothing>

            </div>

            <div v-show="showPage==1" class="group-page">
                  <div class="search ">
                      <div class="search-box">
                          <span class="calcfont calc-sousuo input-search-icon"></span>
                          <input
                                  type="search"
                                  id="groupInput"
                                  key="groupInput"
                                  class="search-input lanInputPlaceHolder" data-lanid="780_搜索" placeholder=""/>
                      </div>
                  </div>
                  <!-- 列表 -->
                  <div v-if="!noGroupData" class="dataList select-group-list">
                      <div v-for="item in groupData" class="list-item f14" :data-id="item.id">
                            <span>{{item.text}}</span>
                            <!-- <span class="power f12 right">123</span> -->
                      </div>
                  </div>
                  <!-- 没数据 -->
                  <nothing v-if="noGroupData" style="padding-top:0.8rem;"></nothing>
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
            //title: lanTool.lanContent('957_有权限的用户'),
            title: "",
            noUserData:false, //没数据
            noGroupData:false, //没数据
            FromType: "", //来源类型
            FromID: "", //来源ID
            //用户数据
            userData: [
                // {
                //   id:'group1',
                //   text:'group1'
                // },
                // {
                //   id:'group1',
                //   text:'group2'
                // },
                // {
                //   id:'group1',
                //   text:'group3'
                // },
                // {
                //   id:'group1',
                //   text:'group4'
                // }
            ],
            //组数据
            groupData:[
                // {
                //   id:'group1',
                //   text:'group1'
                // },
                // {
                //   id:'group1',
                //   text:'group2'
                // }
            ],
            // userCheckedValue:[],
            // groupCheckedValue:[],
            showPage:0
        }
    },
    created: function () {
        this.FromType = this.$route.query.fromType;
        this.FromID = this.$route.query.fromID;
    },
    mounted: function () {
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
        groupToggle:function(e){
            document.activeElement.blur();
            var el = e.target;
            var _curObj = $(el);
            if(!_curObj.hasClass('date-div')){

                if(_curObj.hasClass('open')){
                    _curObj.siblings('.child-list').slideUp(500,function(){
                        _curObj.removeClass('open');
                    });

                }else{
                    _curObj.addClass('open').siblings('.child-list').slideDown(500);
                }
            }
        },
        //切换页面
        switchPage:function(num, e){
            document.activeElement.blur();
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.changePos();
            _self.showPage = num;

            this.getData(_self.showPage);
        },
        //table底部横条过渡效果
        changePos:function() {
            this.$nextTick(function(){
                var activePos = $('.nav .active-item').position();
                $('.nav-border').stop().css({
                    left: activePos.left,
                    width: $('.nav .active-item').width()
                });
            })
        },
        backHandler: function () {
            this.$router.back(-1);
        },
        getData: function (curPageNum, mycallback) {
            console.log("getData");
            var _self = this;
            var isTeam = false;
            //user
            if (curPageNum == 0) {
                $("#groupInput").val("");
                _self.groupData = [];
                _self.noGroupData = true;
                isTeam = false;
            } else {
                //group
                $("#userInput").val("");
                _self.userData = [];
                _self.noUserData = true;
                isTeam = true;
            }
            var _self = this;
            var fromType = _self.FromType || "";
            var fromID = _self.FromID || "";
            var code = "DropDowList_AccessUserOrGroup";

            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.CommonDataServiceHandle_Query;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                Code:code,
                FromType: fromType,
                FromID: fromID,
                IsTeam : isTeam
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
                            _self.userData = [];
                            _self.noUserData = true;
                        } else {
                            _self.groupData = [];
                            _self.noGroupData = true;
                        }
                        tool.showText(tool.getMessage(data));
                        console.log(tool.getMessage(data));
                        return true;
                    }

                    data = data._OnlyOneData || [];

                    if (data.length <= 0) {
                        if (curPageNum == 0) {
                            _self.userData = [];
                            _self.noUserData = true;
                        } else {
                            _self.groupData = [];
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
                    // tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
        //筛选
        search: function () {
            this.$nextTick(function () {
                // var listDom = $('.dataList');
                $('#userInput').unbind().bind('input', function () {
                    var queryStr = $.trim($(this).val());
                    if (queryStr === '') {
                        $('.select-user-list').find('.list-item').show();

                    } else {
                        $('.select-user-list').find('.list-item').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
                    }
                })
                $('#groupInput').unbind().bind('input', function () {
                    var queryStr = $.trim($(this).val());
                    if (queryStr === '') {
                        $('.select-group-list').find('.list-item').show();

                    } else {
                        $('.select-group-list').find('.list-item').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
                    }
                })
            })
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/pages/poweruser.css";
</style>
