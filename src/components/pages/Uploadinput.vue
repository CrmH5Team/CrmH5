<template>
<div>

    <header class="header sticky">
        <a @click="backHandler" class="header-calcfont calcfont calc-fanhui left" id="back"></a>

        <h1 class="mui-title">{{pageTitle||''}}</h1>

        <a @click="saveHandler" class="calc-gou header-calcfont calcfont right" id="save"></a>
    </header>

    <div class="page-content">
          <div class="ListCell file-name-row">
              <div class="ListCellLeftIcon">
                  <span class=" calcfont calc-wenjian"></span>
              </div>
              <div class="ListCellContent ">
                  <div class="ListCellContentLeft leftContent">
                    <div class="ListCellContentLeftText">已选择Selected</div>
                  </div>
                  <div class="ListCellContentRight rightContent">
                    <div class="ListCellContentRightText right-break-word">{{fileName}}</div>
                  </div>
              </div>
          </div>

          <div class="ListCell">
              <div class="ListCellLeftIcon"><span class=" calcfont calc-17"></span></div>
              <div class="ListCellContent">
                  <div class="ListCellContentLeft leftContent">
                      <div class="ListCellContentLeftText">CRM Document Type</div>
                  </div>
                  <div class="ListCellContentRight rightContent">
                      <input class="picker ListCellContentRightText"
                          data-field="cf_765"
                          id="document-type"
                          data-val=""
                      />
                  </div>
                  <div class="ListCellRightIcon"><span class=" calcfont calc-you"></span></div>
              </div>
          </div>


          <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class=" calcfont calc-bianji1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea autoHeight="true" placeholder="Description描述"></textarea>
                    </p>
                </div>
            </div>

    </div>


</div>

</template>





<script>

export default {
    data(){
        return {
            pageTitle:lanTool.lanContent('281_添加信息'),
            // fromPage:null,  //保存上一页来源
            file:null,
            fileName:'',
            fileSize:null,
            id:'',

            isFirstEnter:false,

            notes_title:'',
            notecontent:'',
            folderid:'',
            assigned_user_id:{
                text:tool.getStorageItem(tool.cache_UserRealName) || "",
                value:tool.getStorageItem(tool.cache_UserId) || ""
            },
            languageData:{
                folderid:lanTool.lanContent('284_请选择文件夹'),
                // selectPerson:lanTool.lanContent('203_请选择负责人'),
            }
        }
    },
    beforeRouteEnter:function(to, from, next){
        //如果是从以下路由回来的就不用刷新页面
        if(from.name === 'selectlist'){
            to.meta.isBack = true;
        }
        next(vm=>{
            // console.log(vm);
            // vm.fromPage = from.name;
        });
    },

    created:function(){
        var $this = this;
        $this.isFirstEnter = true;

        //如果是刷新就返回上一页(用params传值刷新数据会丢失)
        if(tool.isNullOrEmptyObject(this.$route.params)){
            $this.$router.back(-1);
        }

    },

    mounted:function(){
        lanTool.updateLanVersion();

        this.$nextTick(function () {
            //将textarea设置为高度自适应
            $("textarea").each(function (index, cur) {
                tool.autoTextarea(cur);
            });

            //用common中的方法初始化
            initial.initPicker();
        })
    },

    activated:function(){

        if(!this.$route.meta.isBack || this.isFirstEnter){

            this.file = this.$route.params.file;
            this.fileName = this.$route.params.fileName;
            this.fileSize = this.$route.params.fileSize;
            this.id = this.$route.params.id;

            this.notes_title = '';

        }

        this.$route.meta.isBack = false;
        this.isFirstEnter = false;
    },


    methods:{
        backHandler: function () {
            this.$router.back(-1);
        },

        saveHandler:function(){
            var $this = this;

            //请求地址
            var urlTemp =
                tool.combineRequestUrl(
                    tool.getConfigValue(tool.config_ajaxUrl),
                    tool.getConfigValue(tool.ajaxUrl_FileOperation_FileUpload)
                );

            //构造传入参数
            var jsonDatas = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                SessionName: tool.getStorageItem(tool.cache_SessionName) || "",
                notes_title: $this.notes_title || "",
                filename: $this.fileName || "",
                filesize:$this.fileSize || '',

                notecontent: $this.notecontent || "",
                folderid: $this.folderid || "",
                id: $this.id || '',
                assigned_user_id: $this.assigned_user_id.value || "",
                fileBase64Str: $this.file
            };

            var formData = new FormData();
                formData.append('file', $this.file);
                formData.append("jsonDatas",JSON.stringify(jsonDatas));

                loading.show(3,lanTool.lanContent("172_加载中..."));
                $.ajax({
                    async: true,
                    type: "POST",
                    url: urlTemp,
                    data: { jsonDatas: JSON.stringify(jsonDatas) },
                    success: function(data) {
                        loading.hidden();
                        data = tool.jObject(data);

                        toast.show(data.Msg);
                        if(data.Result != 1) {
                            return false;
                        }

                        // $this.$router.back(-1);

                        //把列表页路由参数isBack改为fase（使上一页刷新）,并返回上一页
                        var routeName = $this.$route.name;
                        var routers = $this.$router.options.routes;
                        $.each(routers,function(index,item){

                            if(item.name === 'opportunitiesinfo'){
                                item.meta.fromSave = true;
                                $this.$router.back(-1);
                                return ;
                            }
                        })

                    },
                    error: function() {
                        loading.hidden();
                    }
                });


        }
    },
    beforeDestroy:function(){

    }


}
</script>





<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
/*页面头部style*/

header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  line-height: 0.2rem;
  background: #f8f2dc;
}

.mui-title {
    display: inline-block;
    overflow: hidden;
    width: auto;
    max-width: 75%;
    font-size: 0.34rem;
    margin: 0 0 0 -10px;
    text-overflow: ellipsis;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    line-height: 0.88rem;
}

.header-calcfont {
    font-size: 0.48rem;
    text-align: center;
    padding: 0.2rem 10px;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
}
header .mui-title,
header a {
    color: #333;
    font-weight: 400;
}

.page-content{padding-top: 0.88rem;}
.rightContent .ListCellContentRightText{height:0.4rem;}

</style>
