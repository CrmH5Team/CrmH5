<template>
<div>

    <Header :title="pageTitle"></Header>

    <div >
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
                      <div class="picker ListCellContentRightText"></div>
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

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
/* .file-name-row{line-height: 20px;}
.file-name-row .ListCellLeftIcon{padding:0;margin: 0;}
.file-name-row-left{width:40%;overflow: hidden;}
.file-name-row-right{box-sizing: border-box;word-wrap: break-word;overflow: hidden;} */

</style>



<script>
import Header from '../common/Header'
import Picker from '../common/Picker'

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
    components:{ Header,Picker },

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

        upload:function(){
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
        eventBus.$off('updataPicker');
    }


}
</script>





<style scoped>


.selectedFile {
    background: #fff;
    font-size: 0.24rem;
    margin-bottom: 20px;
    line-height: 1.5;
    padding: 15px;
    color: #595959;
    text-align: center;
}
.selectedFile h3 {
    position: relative;
    font-size: 0.28rem;
    font-weight: normal;
    padding: 10px 11px;
    line-height: 1;
    margin-top: 5px;
    margin-bottom: 5px;
    box-sizing: border-box;
    outline: 0;
}
.selectedFile h3:after {
    position: absolute;
    right: 0;
    bottom: 15px;
    width: 100%;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.selectedFile h3 span {
    background: #fff;
    padding: 0 20px;
    position: relative;
    z-index: 2;
}
.mui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.5;
    color: #3cadf9;
}
.selectedFile .name i {
    color: #3cadf9;
    font-size: 0.45rem;
    margin-right: 5px;
    vertical-align: -0.05rem;
}


.mui-input-group {
    position: relative;
    padding: 0;
    border: 0;
    background-color: #fff;
}
.mui-input-group:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.mui-input-group .mui-input-row {
    height: auto;
    position: relative;
    clear: left;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    outline: 0;
}
.mui-input-row .arrow-right{
    position: absolute;
    bottom: 10px;
    right: 15px;
    color: #7f7f7f;
}
.mui-input-row label {
    float: none;
    padding: 11px 15px 0;
    width: 100%;
    color: #898989;
    font-size: 0.24rem;
    display: block;
    position: relative;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    line-height: 1.1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    outline: 0;
}
.mui-input-row label span.red {
    color: #fd3f3f;
    vertical-align: middle;
    position: absolute;
    left: 8px;
    top: 13px;
}
.mui-input-row p {
    min-height: 40px;
    line-height: 40px;
    font-size: 0.28rem;
    color: #000;
    padding: 0 15px;
    margin-bottom: 0;
}
.mui-input-row p::after{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.mui-input-row input{
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 0.28rem;
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    padding-right: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    line-height: 21px;
    height: 40px;
    border: 0;
}


.textarea_div{
    padding: 0 15px;
}
.mui-input-row textarea {
    width: 100%;
    outline: none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    background-color: transparent;
    display: block;
    margin-left: 0;
    overflow: hidden;
    position: relative;
    left: -2px;
    height: 40px;
    line-height: 24px;
    margin: 11px 11px 8px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border:0;
}

.btn_div{
    width: 90%;
    margin: 20px auto;
}
.mui-btn-block {
    font-size: 18px;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 0;
    color: #fff;
    border: 1px solid #007aff;
    background-color: #007aff;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}

</style>
