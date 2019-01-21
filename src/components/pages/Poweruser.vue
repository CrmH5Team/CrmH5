<template>
<div>
    <header class="header sticky">
        <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>

        <h1 class="header-title f18">{{title||''}}</h1>

        <!-- <a @click="saveHandler" class="calcfont calc-gou right" id="save"></a> -->
    </header>

    <div class="nav sticky">
        <div @click="switchPage(0,$event)" class="f16 nav-item active-item  lanText" data-lanid="631_用户"></div>
        <div @click="switchPage(1,$event)" class="f16 nav-item  lanText" data-lanid="632_用户组" ></div>
        <div class="nav-border"></div>
    </div>


    <div class="selectList-scroll">

            <div v-show="showPage==0" class="user-page">
                  <div class="search ">
                      <div class="search-box">
                          <span class="calcfont calc-sousuo input-search-icon"></span>
                          <input
                                  @blur="blurHandler"
                                  type="search"
                                  id="userInput"
                                  key="userInput"
                                  class="search-input" data-lanid="208_搜索" placeholder="search"/>
                      </div>
                  </div>
                  <!-- 列表 -->
                  <div v-if="!notUserData" class="dataList select-user-list">
                      <div class="list-item f14">
                            <span>alan1</span>
                            <span class="power f12 right">123</span>
                      </div>
                      <div class="list-item f14">
                            <span>alan2</span>
                            <span class="power f12 right">123</span>
                      </div>
                      <div class="list-item f14">
                            <span>alan3</span>
                            <span class="power f12 right">123</span>
                      </div>
                      <div class="list-item f14">
                            <span>alan4</span>
                            <span class="power f12 right">123</span>
                      </div>
                      <div class="list-item f14">
                            <span>alan5</span>
                            <span class="power f12 right">123</span>
                      </div>
                      <div class="list-item f14">
                            <span>alan16</span>
                            <span class="power f12 right">123</span>
                      </div>
                  </div>
                  <!-- 没数据 -->
                  <nothing v-if="notUserData" style="padding-top:0.8rem;"></nothing>

            </div>

            <div v-show="showPage==1" class="group-page">
                  <div class="search ">
                      <div class="search-box">
                          <span class="calcfont calc-sousuo input-search-icon"></span>
                          <input
                                  @blur="blurHandler"
                                  type="search"
                                  id="groupInput"
                                  key="groupInput"
                                  class="search-input" data-lanid="208_搜索" placeholder="search"  />
                      </div>
                  </div>
                  <!-- 列表 -->
                  <div v-if="!notGroupData" class="dataList select-group-list">
                      <div v-for="item in groupData" class="group-div">
                          <div  class="item-div f14" @click="groupToggle">
                              {{item.groupName}}
                              <!-- <label class="checkbox-label" @click.stop>
                                  <input type="checkbox" name="group" :value="item.value" v-model="groupCheckedValue"/><i class="checkbox"></i><span class="f14">{{item.groupName}}</span>
                              </label> -->
                          </div>
                          <div class="child-list">
                              <div v-for="member in item.groupMember" class="child-list-item f14">{{member.text}}</div>
                          </div>
                      </div>
                  </div>
                  <!-- 没数据 -->
                  <nothing v-if="notGroupData" style="padding-top:0.8rem;"></nothing>
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
                'search': lanTool.lanContent('208_搜索'), //208_搜索
            },

            notUserData:false, //没数据
            notGroupData:false, //没数据

            //用户数据
            userData: [
                {
                  groupName:'group1',
                  value:'group1',
                  groupMember:[
                      {text:'Alan1',value:'Alan1'},
                      {text:'Alan2',value:'Alan2'},
                      {text:'Alan3',value:'Alan3'},
                  ]
                },
                {
                  groupName:'group2',
                  value:'group2',
                  groupMember:[
                      {text:'Alan4',value:'Alan4'},
                      {text:'Alan5',value:'Alan5'},
                      {text:'Alan6',value:'Alan6'},
                  ]
                },
                {
                  groupName:'group3',
                  value:'group3',
                  groupMember:[
                      {text:'Alan7',value:'Alan7'},
                      {text:'Alan8',value:'Alan8'},
                      {text:'Alan9',value:'Alan9'},
                  ]
                },
            ],
            //组数据
            groupData:[
                {
                  groupName:'group1',
                  value:'group1',
                  groupMember:[
                      {text:'Alan1',value:'Alan1'},
                      {text:'Alan2',value:'Alan2'},
                      {text:'Alan3',value:'Alan3'},
                  ]
                },
                {
                  groupName:'group2',
                  value:'group2',
                  groupMember:[
                      {text:'Alan4',value:'Alan4'},
                      {text:'Alan5',value:'Alan5'},
                      {text:'Alan6',value:'Alan6'},
                  ]
                },
                {
                  groupName:'group3',
                  value:'group3',
                  groupMember:[
                      {text:'Alan7',value:'Alan7'},
                      {text:'Alan8',value:'Alan8'},
                      {text:'Alan9',value:'Alan9'},
                  ]
                },
            ],

            queryUrl: null,
            field: null,
            title: 'Share with',
            value: '', //默认值数据

            radioValue:'',

            userCheckedValue:[],
            groupCheckedValue:[],

            showPage:0,

        }
    },
    created: function () {
        this.queryUrl = this.$route.query.url;
        this.field = this.$route.query.field;
        this.value = this.$route.query.value;
    },
    mounted: function () {
        lanTool.updateLanVersion();


        // this.getData();
        this.search();
        this.changePos();

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

        selectAll: function (type,e) {
            document.activeElement.blur();
            var self = this;
                var el = e.target,
                    t = $(e.target).is(":checked");
                if (t) {
                    if(type === 'user'){
                        $.each(self.userData,function(index,item){
                            self.userCheckedValue.push(item.value);
                        })
                    }else{
                        $.each(self.groupData,function(index,item){
                            self.groupCheckedValue.push(item.value);
                        })
                    }

                } else {
                    self.userCheckedValue = [];
                    self.groupCheckedValue = [];
                }
        },
        clickSearch: function (e) {
            $(e.target).closest('.search').addClass('search-active');
            document.activeElement.blur();
            $(e.target).siblings('.search-input').focus();
        },

        //失去焦点
        blurHandler: function (e) {
            // document.activeElement.blur();
            // $(e.target).val('');
            // $(e.target).closest('.search').removeClass('search-active');
        },

        backHandler: function () {
            this.$router.back(-1);
        },

        saveHandler: function () {
            var $this = this;
            // var arr = {
            //     field: $this.field,
            //     value: []
            // };
            // $.each($this.dataArray,function(index, item){

            //     if(($this.selectType === 'radio' && $this.radioValue === item.value) ||
            //       ($this.selectType === 'checkbox' && $this.checkboxValue.indexOf(item.value)>=0 )){
            //         var t = {};
            //         t.text = item.text;
            //         t.value = item.value;
            //         arr.value.push(t);
            //     }

            // })
            // eventBus.$emit('updataSelectList', arr);
            // $this.$router.back(-1);

        },

        getData: function () {
            var $this = this;
            if ($this.queryUrl == undefined) return;

            //请求地址
            var urlTemp = tool.combineRequestUrl(
                tool.getConfigValue(tool.config_ajaxUrl),
                $this.queryUrl);

            //请求的传入参数
            var jsonDatasTemp = {
                "CurrentLanguageVersion": lanTool.currentLanguageVersion,
                "IsUsePager": false,
                "SessionName": tool.getSessionStorageItem(tool.cache_SessionName) || "",
                "QueryCondiction": [],
                "_QueryType": "SelectList", //查询类型
                "IsAdmin": tool.getSessionStorageItem(tool.cache_isadmin) || "off", //当前用户是否管理员
                "UserId": tool.getSessionStorageItem(tool.cache_UserId) || ""
            };

            loading.show(3, lanTool.lanContent("172_加载中..."));
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: {
                    jsonDatas: JSON.stringify(jsonDatasTemp)
                },
                dataType: 'json',
                success: function (data) {
                    loading.hidden();
                    if (data.Result != 1) {
                        toast.show(data.Msg);
                        return;
                    }
                    $this.dataArray = data.Data.Rows;

                    $this.$nextTick(function () {
                        // if ($this.data.text && $this.data.value) {
                        //     $this.LocateCurentItem($this.data.value);
                        // }
                        // $this.selectItem();
                    })

                    //如果是多选，显示底部全选按钮
                    if($this.selectType === 'checkbox'){
                        $('.selectAll').show();
                    }

                },
                error: function (jqXHR, type, error) {
                    console.log("error");
                    loading.hidden();
                }
            })
        },

        //筛选
        search: function () {
            this.$nextTick(function () {
                var listDom = $('.dataList');
                $('#userInput').unbind().bind('input', function () {
                    var queryStr = $.trim($(this).val());
                    if (queryStr === '') {
                        listDom.find('.list-item').show();

                    } else {
                        listDom.find('.list-item').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
                    }
                })
                $('#groupInput').unbind().bind('input', function () {
                    var queryStr = $.trim($(this).val());
                    if (queryStr === '') {
                        listDom.find('.group-div').show();
                    } else {
                        listDom.find('.group-div').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
                    }
                })
            })
        },

    },

}
</script>

<style scoped>
@import "../../assets/css/pages/poweruser.css";
</style>
