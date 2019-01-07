<template>
<div class="selectList">
    <header class="mui-bar mui-bar-nav">
        <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>

        <h1 class="mui-title">{{title||''}}</h1>

        <a @click="saveHandler" class="calcfont calc-gou right" id="save"></a>
    </header>
    <div class="selectList-scroll">

        <!-- search-active -->

      <div class="search ">
          <div class="search-box">
              <span class="calcfont calc-sousuo input-search-icon"></span>
              <input
                      @blur="blurHandler"
                      type="search"
                      id="searchInput"
                      class="search-input" data-lanid="208_搜索" placeholder=""  />
              <span class="calcfont calc-delete"></span>
              <span @click="clickSearch" class="search-placeholder f16">
                      <span class="calcfont calc-sousuo"></span>
              <span class="lanText" data-lanid="208_搜索"></span>
              </span>
          </div>
      </div>

        <!-- 列表 -->
        <div v-if="selectType==='checkbox'" class="dataList checkboxList">
            <div v-for="item in dataArray" :key="item.value" class="item-div">
                <label class="checkbox-label">
                    <input type="checkbox" :name="field" :value="item.value" v-model="checkboxValue"/><i class="checkbox"></i><span class="radios f14">{{item.text}}</span>
                </label>
            </div>
        </div>
        <div v-else class="dataList">
            <div v-for="item in dataArray" :key="item.value" class="item-div">
                <label class="radios-label">
                    <input type="radio" :name="field" :value="item.value" v-model="radioValue"/><i class="radios"></i><span class="f14">{{item.text}}</span>
                </label>
            </div>
        </div>

    </div>
    <div v-if="selectType==='checkbox'" class="selectAll">
        <div class="item-div">
            <label class="checkbox-label">
                          <input @click="selectAll" type="checkbox" name="sex"/><i class="checkbox checkAll"></i>
                          <span>all</span>
            </label>
        </div>
    </div>
</div>
</template>

<script>
// import event from './Event.js'
export default {
    data() {
        return {
            languageData: {
                'search': lanTool.lanContent('208_搜索'), //208_搜索
            },

            dataArray: [],
            queryUrl: null,
            field: null,
            title: '',
            value: '', //默认值数据
            selectType:'',  //判断是否多选

            radioValue:'',
            checkboxValue:[],

        }
    },
    created: function () {
        this.queryUrl = this.$route.query.url;
        this.field = this.$route.query.field;
        this.title = this.$route.query.title;
        this.value = this.$route.query.value;
        this.selectType = this.$route.query.selectType
    },
    mounted: function () {
        lanTool.updateLanVersion();

        //根据是否多选来设置列表滚动的区域高度
        if (this.selectType === 'checkbox') {
            $(".selectList-scroll").css("bottom", "50px");
        } else {
            $(".selectList-scroll").css("bottom", "0px");
        }

        this.getData();
        this.search();

    },
    methods: {
        selectAll: function (e) {
            var self = this;
                var el = e.target,
                    t = $(e.target).is(":checked");
                if (t) {
                    $.each(self.dataArray,function(index,item){
                        self.checkboxValue.push(item.value);
                    })
                } else {
                    self.checkboxValue = [];

                }
        },
        clickSearch: function (e) {
            $(e.target).closest('.search').addClass('search-active');
            document.activeElement.blur();
            $(e.target).siblings('.search-input').focus();
        },

        //失去焦点
        blurHandler: function (e) {
            document.activeElement.blur();
            $(e.target).val('');
            $(e.target).closest('.search').removeClass('search-active');
        },

        backHandler: function () {
            this.$router.back(-1);
        },

        saveHandler: function () {
            var $this = this;
            // console.log($this.checkboxValue);
            var arr = {
                field: $this.field,
                value: []
            };
            $.each($this.dataArray,function(index, item){

                if(($this.selectType === 'radio' && $this.radioValue === item.value) ||
                  ($this.selectType === 'checkbox' && $this.checkboxValue.indexOf(item.value)>=0 )){
                    var t = {};
                    t.text = item.text;
                    t.value = item.value;
                    arr.value.push(t);
                }

            })
            eventBus.$emit('updataSelectList', arr);
            $this.$router.back(-1);

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

        //锁定当前选项
        LocateCurentItem: function (fieldValue) {
            $('.list-item').each(function (index, el) {
                $(el).find('input').prop("checked", false);
            })

            if (tool.isNullOrEmptyObject(fieldValue)) {
                return true;
            }

            $(".list-item[data-val='" + fieldValue + "'] input:first").prop("checked", true);
            return true;
        },

        //选择数据
        selectItem: function () {
            $("input[type='checkbox']").unbind().on('change', function (e) {
                document.activeElement.blur();
                e.stopPropagation();
                var _self = $(this);

                if (_self.is(":checked") == true) {
                    _self.parents("label").siblings("label").find("input[type='checkbox']").prop("checked", false);
                }
            })
        },

        //筛选
        search: function () {
            this.$nextTick(function () {
                var listDom = $('.dataList');
                $('#searchInput').unbind().bind('input', function () {
                    var queryStr = $.trim($(this).val());
                    if (queryStr === '') {
                        listDom.find('div.item-div').show();
                    } else {
                        listDom.find('div.item-div').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
                    }
                })
            })
        },

    },

}
</script>

<style scoped>
@import "../../assets/css/pages/Selectlist.css";
</style>
