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
            <div class="listData weui-cells weui-cells_checkbox">
                    <label
                    v-for="item in dataArray"
                    class="list-item weui-cell weui-check__label"
                    :key="item.value"
                    :data-val="item.value"
                    >
                        <div class="weui-cell__hd" :data-text="item.text">
                            <input type="checkbox" class="weui-check" name="checkbox1"  >
                            <i class="weui-icon-checked"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <p>{{item.text}}</p>
                        </div>
                    </label>
            </div>
        </div>
</div>
</template>

<script>
// import event from './Event.js'
export default {
    data(){
        return{
            languageData:{
                'search':lanTool.lanContent('208_搜索'), //208_搜索
            },
            dataArray:[],

            queryUrl:null,
            field:null,
            title:'',
            data:{},//默认值数据 
        }
    },
    created:function(){
        
        this.queryUrl = this.$route.query.url;
        this.field = this.$route.query.field;
        this.title = this.$route.query.title;
        this.data = this.$route.query.data;
    },
    mounted:function(){
        lanTool.updateLanVersion();
        this.$nextTick(function(){
            this.getData();
            this.search();
        })
        
    },
    methods:{

        clickSearch:function(e){
            $(e.target).closest('.search').addClass('search-active');
            document.activeElement.blur();
            $(e.target).siblings('.search-input').focus();
        },

        //失去焦点
        blurHandler:function(e){
            document.activeElement.blur();
            $(e.target).val('');
            $(e.target).closest('.search').removeClass('search-active');
        },

        backHandler:function(){
            this.$router.back(-1);
        },

        saveHandler:function(){
            var $this = this;
            var arr = {
                field:$this.field,
                value:{
                    text:'',
                    value:''
                }
            };
            
            $(".listData input[type='checkbox']").each(function(index,el){ 
                if($(el).is(":checked") == true){
                    $this.data.value = $(el).closest("label").attr('data-val');
                    $this.data.text = $(el).closest('.weui-cell__hd').attr('data-text');
                    arr.value.text = $(el).closest('.weui-cell__hd').attr('data-text');
                    arr.value.value = $(el).closest("label").attr('data-val');
                }
            })
            eventBus.$emit('updataSelectList', arr);
            $this.$router.back(-1);
            
            
        },

        getData:function(){
              var $this = this;
              if($this.queryUrl == undefined) return;

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
                "IsAdmin":tool.getStorageItem(tool.cache_isadmin) || "off",//当前用户是否管理员
                "UserId":tool.getStorageItem(tool.cache_UserId) || ""
              };


              loading.show(3,lanTool.lanContent("172_加载中..."));
              $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: {
                  jsonDatas: JSON.stringify(jsonDatasTemp)
                },
                dataType: 'json',
                success: function(data) {
                    loading.hidden();
                    if(data.Result != 1) {
                        toast.show(data.Msg);
                        return;
                    }
                    $this.dataArray = data.Data.Rows;

                    $this.$nextTick(function () {
                        if($this.data.text && $this.data.value){
                             $this.LocateCurentItem($this.data.value);
                        }
                        $this.selectItem();
                    })
                    
                },
                error:function(jqXHR, type, error){
                    console.log("error");
                    loading.hidden();
                }
              })
        },

        //锁定当前选项
        LocateCurentItem:function(fieldValue){
               $('.list-item').each(function(index,el){
                    $(el).find('input').prop("checked", false);
               })

              if(tool.isNullOrEmptyObject(fieldValue)) {
                return true;
              }
              
              $(".list-item[data-val='" + fieldValue + "'] input:first").prop("checked", true);
	          return true;
        },

        //选择数据
        selectItem:function(){
              $("input[type='checkbox']").unbind().on('change',function(e) {
                    document.activeElement.blur();
                    e.stopPropagation();
                    var _self = $(this);

                    if(_self.is(":checked") == true) { 
                      _self.parents("label").siblings("label").find("input[type='checkbox']").prop("checked", false);
                    }
              })
        },

        //筛选
        search:function(){
            this.$nextTick(function(){
                var listDom = $('.listData');
                $('#searchInput').unbind().bind('input',function(){
                    var queryStr = $.trim($(this).val());
                    if(queryStr === '') {
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
.selectListInput{box-sizing: border-box;width: 100%;height:40px;border:0;/*padding-right:30px;*/
background:none;outline: none;}
.selectList{position: fixed;top:0;left: 0;background:#efeff4;z-index:1;width:100%;height: 100%;}


/*页面头部style*/
header{position: relative;}
header.mui-bar {line-height: 0.2rem;background: #3cadf9;}
.mui-title {
	right: 40px; left: 40px;display: inline-block;
    overflow: hidden;width: auto;font-size: 0.34rem; margin: 0;
    text-overflow: ellipsis; position: absolute; padding: 0;
    text-align: center; white-space: nowrap; line-height: 0.88rem;
}
.calcfont{
    font-size: 0.48rem;width: 0.88rem; text-align: center;
    padding: 0.2rem 0;position: relative; z-index: 20; display: inline-block;
    text-decoration: none;line-height: 1;
}
.calc-fanhui{margin-right: -10px;margin-left: -10px;padding-right: 10px;padding-left: 10px;}
header .mui-title,header a {	color: #fff;}


.selectList-scroll{position:absolute;top:0.88rem;left:0;overflow-y: scroll;right: 0;bottom:0;background: #fff;}

/*收索狂style*/
.search{border-bottom: solid 1px #e3e3e3;line-height:34px;position:relative;}
.search-active .search-input{text-align:left;color: inherit;}
.search .input-search-icon{display:none;position:absolute;top:7px;left:5px;}
.search-active .input-search-icon{display:block;}
.search-input{
    padding:10px 15px 10px 30px;box-sizing: border-box;height: 34px;text-align: center;
    border: 0;font-size: 16px;width:100%;
    font-size: 14px;color: #999;line-height:14px;
    outline:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}
.search .calc-delete{padding: 0;width: auto;color:#999;font-size: 16px;display:none;
position:absolute;right:8px;top:8px;z-index:1;}
.search-placeholder{
    font-size: 16px;line-height: 34px; position: absolute;
    z-index: 1;top: 0;right: 0; bottom: 0; left: 0; display: inline-block; height: 34px;
    text-align: center; color: #999;border: 0; border-radius: 6px;background: 0 0;
}
.search-active .search-placeholder{display:none;}
.search .calc-sousuo{padding: 0;color:#333;margin-right:-3px; width: auto;}


/*列表style*/
.listData{margin-top:0;padding-bottom: 0.2rem;background:#efeff4; }
.list-item{line-height:26px;font-size:0.28rem;margin-top:0;background:#fff; }
.list-item:after{
    content: " ";position: absolute;
    left: 0;bottom: 0;right: 0;height: 1px;
    border-bottom: 1px solid #7f7f7f;color: #7f7f7f;
    -webkit-transform-origin: 0 100%;transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);z-index: 2;
}
.weui-check:checked + .weui-icon-checked:before{color:#3cadf9!important;}
.weui-cell{padding:8px 15px;}
.weui-cell__bd{font-size:0.28rem;}
.weui-cell__bd p{width:100%;overflow: hidden;text-overflow: ellipsis;
    -webkit-line-clamp: 1;word-break: break-all;display: -webkit-box;
    -webkit-box-orient: vertical;
}

</style>
