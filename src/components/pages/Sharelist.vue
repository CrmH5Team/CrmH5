<template>
<div class="selectList">
    <header class="mui-bar mui-bar-nav">
        <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>

        <h1 class="mui-title f18">{{title||''}}</h1>

        <a @click="saveHandler" class="calcfont calc-gou right" id="save"></a>
    </header>

    <div class="nav">
        <div @click="switchPage(0,$event)" class="f16 nav-item active-item">User</div>
        <div @click="switchPage(1,$event)" class="f16 nav-item" >Group</div>
        <div class="nav-border"></div>
    </div>


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
        <div  class="dataList checkboxList">
            <div v-for="item in dataArray" class="item-div">
                <label class="checkbox-label">
                    <input type="checkbox" :name="field" :value="item.value" v-model="checkboxValue"/><i class="checkbox"></i><span class="radios f14">{{item.text}}</span>
                </label>
            </div>
        </div>

    </div>
    <div class="selectAll">
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

            dataArray: [
              {text:'Alan',value:'Alan1'},
              {text:'Alan',value:'Alan2'},
              {text:'Alan',value:'Alan3'},
              {text:'Alan',value:'Alan4'},
              {text:'Alan',value:'Alan5'},
              {text:'Alan',value:'Alan6'},
              {text:'Alan',value:'Alan7'},
              {text:'Alan',value:'Alan8'},
              {text:'Alan',value:'Alan9'},
              {text:'Alan',value:'Alan10'},
              {text:'Alan',value:'Alan11'},
              {text:'Alan',value:'Alan12'},
              {text:'Alan',value:'Alan13'},
              {text:'Alan',value:'Alan14'},
              {text:'Alan',value:'Alan15'},
              {text:'Alan',value:'Alan16'},
              {text:'Alan',value:'Alan17'},
              {text:'Alan',value:'Alan18'},
              {text:'Alan',value:'Alan19'},
              {text:'Alan',value:'Alan20'},
              {text:'Alan',value:'Alan21'},
              {text:'Alan',value:'Alan22'},
              {text:'Alan',value:'Alan23'},
              {text:'Alan',value:'Alan24'},
              {text:'Alan',value:'Alan25'},
              {text:'Alan',value:'Alan26'},
              {text:'Alan',value:'Alan27'},
              {text:'Alan',value:'Alan28'},
              {text:'Alan',value:'Alan29'},
              {text:'Alan',value:'Alan30'},
              {text:'Alan',value:'Alan31'},
              {text:'Alan',value:'Alan32'},
              {text:'Alan',value:'Alan33'},
              {text:'Alan',value:'Alan34'},
              {text:'Alan',value:'Alan35'},
              {text:'Alan',value:'Alan36'},
              {text:'Alan',value:'Alan37'},
              {text:'Alan',value:'Alan38'},
              {text:'Alan',value:'Alan39'},
              {text:'Alan',value:'Alan40'},
              {text:'Alan',value:'Alan41'},
              {text:'Alan',value:'Alan42'},
              {text:'Alan',value:'Alan43'},
              {text:'Alan',value:'Alan44'},
              {text:'Alan',value:'Alan45'},
              {text:'Alan',value:'Alan46'},
              {text:'Alan',value:'Alan47'},
              {text:'Alan',value:'Alan48'},
              {text:'Alan',value:'Alan49'},
              {text:'Alan',value:'Alan50'},
              {text:'Alan',value:'Alan51'},
              {text:'Alan',value:'Alan52'},
              {text:'Alan',value:'Alan53'},
              {text:'Alan',value:'Alan54'},
            ],
            queryUrl: null,
            field: null,
            title: 'Share with',
            value: '', //默认值数据
            selectType:'checkbox',  //判断是否多选

            radioValue:'',
            checkboxValue:[],

        }
    },
    created: function () {
        this.queryUrl = this.$route.query.url;
        this.field = this.$route.query.field;
        this.value = this.$route.query.value;
        // this.selectType = this.$route.query.selectType
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
        this.changePos();

    },
    methods: {
        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            // _self.swiper.slideTo(num, 500, false);
            _self.changePos();
            _self.currentPage = num;
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
                        listDom.find('label').show();
                    } else {
                        listDom.find('label').hide().filter(":lowerCaseContains('" + queryStr + "')").show();
                    }
                })
            })
        },

    },

}
</script>

<style scoped>
@import "../../assets/css/pages/Sharelist.css";
</style>
