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
            <span class="calcfont calc-sousuo input-search-icon"></span>
            <input
                    @blur="blurHandler"
                    type="search"
                    id="searchInput"
                    class="search-input" data-lanid="208_搜索" placeholder=""  />
            <span class="calcfont calc-delete"></span>
            <span @click="clickSearch" class="search-placeholder">
                    <span class="calcfont calc-sousuo"></span>
            <span class="lanText" data-lanid="208_搜索"></span>
            </span>
        </div>

        <!-- 列表 -->
        <div v-if="isMulSelect" class="dataList muiSelectList">
            <div class="checkbox-div">
                <label class="checkbox-label">
                          <input type="checkbox" name="sex"/><i class="checkbox"></i>
                          <span>Air India</span>
                      </label>
            </div>
            <div class="checkbox-div">
                <label class="checkbox-label">
                          <input type="checkbox" name="sex"/><i class="checkbox"></i>
                          <span>Shandong Airlines</span>
                      </label>
            </div>
            <div class="checkbox-div">
                <label class="checkbox-label">
                          <input type="checkbox" name="sex"/><i class="checkbox"></i>
                          <span>Shenzhen Airlines</span>
                      </label>
            </div>

        </div>
        <div v-else class="dataList">
            <div class="checkbox-div">
                <label class="radios-label">
                          <input type="radio" name="view"/><i class="radios"></i><span>Shenzhen Airlines</span>
                      </label>
            </div>
            <div class="checkbox-div">
                <label class="radios-label">
                          <input type="radio" name="view"/><i class="radios"></i><span>Sichuan Airlines</span>
                      </label>
            </div>
            <div class="checkbox-div">
                <label class="radios-label">
                          <input type="radio" name="view"/><i class="radios"></i><span>China Southern Airlines</span>
                      </label>
            </div>
            <div class="checkbox-div">
                <label class="radios-label">
                          <input type="radio" name="view"/><i class="radios"></i><span>China Southern Airlines</span>
                      </label>
            </div>
        </div>
    </div>
    <div v-show="isShow" class="selectAll">
        <div class="checkbox-div">
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
            data: {}, //默认值数据 
            isMulSelect: false, //判断是否多选
            isShow: true //判断全选控件是否隐藏

        }
    },
    created: function () {

        this.queryUrl = this.$route.query.url;
        this.field = this.$route.query.field;
        this.title = this.$route.query.title;
        this.data = this.$route.query.data;
    },
    mounted: function () {
        lanTool.updateLanVersion();
        this.$nextTick(function () {
            this.getData();
            this.search();
            this.isMulSelect = true;
            //根据是否多选来设置列表滚动的区域高度
            if (this.isMulSelect) {
                $(".selectList-scroll").css("bottom", "50px");
            } else {
                $(".selectList-scroll").css("bottom", "0px");
            }
        })

    },
    methods: {
        selectAll: function (e) {
            var self = this;
            self.$nextTick(function () {
                var el = e.target,
                    t = $(e.target).is(":checked");
                if (t) {
                    $(".dataList input").prop("checked", true);
                } else {
                    $(".dataList input").prop("checked", false);
                }
            })
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
                value: {
                    text: '',
                    value: ''
                }
            };

            $(".listData input[type='checkbox']").each(function (index, el) {
                if ($(el).is(":checked") == true) {
                    $this.data.value = $(el).closest("label").attr('data-val');
                    $this.data.text = $(el).closest('.weui-cell__hd').attr('data-text');
                    arr.value.text = $(el).closest('.weui-cell__hd').attr('data-text');
                    arr.value.value = $(el).closest("label").attr('data-val');
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
                        if ($this.data.text && $this.data.value) {
                            $this.LocateCurentItem($this.data.value);
                        }
                        $this.selectItem();
                    })

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
                var listDom = $('.listData');
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

        /*
                //回到顶部
                scrollUp:function(){
                    $('#'+this.id+ '.selectList-scroll').animate({scrollTop: 0}, 700);
                },
        */
    },

}
</script>

<style scoped>
@import "../../assets/css/pages/Selectlist.css";
</style>
