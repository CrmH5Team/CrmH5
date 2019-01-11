<template>
<div>
    <header class="header sticky">
        <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>

        <h1 class="header-title f18">{{title||''}}</h1>

        <a @click="saveHandler" class="calcfont calc-gou right" id="save"></a>
    </header>

    <div class="selectList-scroll">

            <div class="user-page">
                  <div class="search ">
                      <div class="search-box">
                          <span class="calcfont calc-sousuo input-search-icon"></span>
                          <input
                                  @blur="blurHandler"
                                  type="search"
                                  id="userInput"
                                  key="userInput"
                                  class="search-input" data-lanid="208_搜索" placeholder=""  />
                          <span class="calcfont calc-delete"></span>
                          <span @click="clickSearch" class="search-placeholder f16">
                                  <span class="calcfont calc-sousuo"></span>
                          <span class="lanText" data-lanid="208_搜索"></span>
                          </span>
                      </div>
                  </div>
                  <!-- 列表 -->
                  <div class="dataList select-user-list">
                      <div v-for="item in userData" class="group-div">
                          <div  class="item-div f14" @click="groupToggle">{{item.groupName}}
                          </div>
                          <div class="child-list">
                              <div v-for="member in item.groupMember" class="child-list-item f14">
                                    <div class="margin10">
                                            <label class="user-checkbox checkbox-label" @click.stop>
                                                <input type="checkbox" name="group" :value="member.value" v-model="userCheckedValue"/>
                                                <i class="checkbox"></i><span class="f14">{{member.text}}</span>
                                            </label>
                                    </div>
                              </div>
                          </div>
                      </div>
                  </div>

            </div>
    </div>

</div>
</template>

<script>

export default {
    data() {
        return {
            languageData: {
                'search': lanTool.lanContent('208_搜索'), //208_搜索
            },

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

            // queryUrl: null,
            // field: null,
            title: 'Colleagues with access',
            // value: '', //默认值数据

            // radioValue:'',

            userCheckedValue:[],
        }
    },
    created: function () {
    },
    mounted: function () {
        lanTool.updateLanVersion();

        // this.getData();
        this.search();

    },
    methods: {
        //点击分组收起展开
        groupToggle:function(e){
            document.activeElement.blur();
            var el = e.target;
            var _curObj = $(el);
            if(!_curObj.hasClass('date-div')){

                if(_curObj.hasClass('open')){
                    _curObj.removeClass('open').siblings('.child-list').slideUp(500);
                }else{
                    _curObj.addClass('open').siblings('.child-list').slideDown(500);
                }
                // return;
                // _curObj = _curObj.parent('div.date-div:first');
                // if(_curObj == undefined){
                //     return;
                // }
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
                "SessionName": tool.getStorageItem(tool.cache_SessionName) || "",
                "QueryCondiction": [],
                "_QueryType": "SelectList", //查询类型
                "IsAdmin": tool.getStorageItem(tool.cache_isadmin) || "off", //当前用户是否管理员
                "UserId": tool.getStorageItem(tool.cache_UserId) || ""
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
                        listDom.find('.child-list-item').show().closest('.group-div').show();
                    } else {
                        var childListItems = listDom.find('.child-list-item');
                            childListItems.hide().closest('.group-div').hide();
                            childListItems.filter(":lowerCaseContains('" + queryStr + "')").show().closest('.group-div').show();
                    }
                })
            })
        },

    },

}
</script>

<style scoped>
@import "../../assets/css/pages/Sharelist.css";
.selectList-scroll{padding-top:0.88rem;}
</style>
