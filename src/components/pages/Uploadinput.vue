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
                    <div id="tempFilechoose" class="ListCellContentLeftText lanText" data-lanid="986_已选文件"></div>
                  </div>
                  <div class="ListCellContentRight rightContent">
                    <div id="curFileName" @click="triggerFileChoose" class="ListCellContentRightText right-break-word">{{fileName}}</div>
                  </div>
                  <div class="ListCellRightIcon"><span class=" calcfont calc-you"></span></div>
              </div>
          </div>

          <div class="ListCell">
              <div class="ListCellLeftIcon"><span class=" calcfont calc-17"></span></div>
              <div class="ListCellContent">
                  <div class="ListCellContentLeft leftContent">
                      <div class="ListCellContentLeftText lanText" data-lanid="738_CRM文档类型"></div>
                  </div>
                  <div class="ListCellContentRight rightContent">
                      <input type="text"
                          data-field="100205"
                          data-lanid="738_CRM文档类型"
                          data-fieldControlType="picker"
                          data-fieldVal=""
                          Code="DropDowList_DtbAllTypes"
                          TypeValue="CRMDocumentType"
                          class="ListCellContentRightText"/>
                  </div>
                  <div class="ListCellRightIcon"><span class=" calcfont calc-you"></span></div>
              </div>
          </div>

          <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class=" calcfont calc-bianji1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea data-field="description"
                            data-fieldControlType="textareaInput"
                            class="lanInputPlaceHolder"
                            data-lanid="985_描述"></textarea>
                    </p>
                </div>
        </div>
         <form id="uploadForm" style="display:none;">
            <input ref="fileChoose" v-on:change="inputFiles()" class="fileInput" type="file" name="img" id="selectFile" />
        </form>
    </div>
</div>

</template>



<script>

export default {
    data(){
        return {
            pageTitle:lanTool.lanContent('1002_文件上传'),
            file:null,
            fileName:"",
            fromID:"",
            fromType:"",
            formTemp:null,
            scheduleID:"",
        }
    },
    beforeRouteEnter:function(to, from, next){
        next();
    },
    created:function(){
        var _self = this;
        //如果是刷新就返回上一页(用params传值刷新数据会丢失)
        if(tool.isNullOrEmptyObject(_self.$route.query)){
            _self.$router.back(-1);
        }
    },
    mounted:function(){
        lanTool.updateLanVersion();
        document.activeElement.blur();

        var _self = this;
        _self.fromID = _self.$route.query.fromID;
        _self.fromType = _self.$route.query.fromType;
        _self.scheduleID = _self.$route.query.scheduleID||"";

        //清空页面数据
        tool.ClearControlData(function(){
            //渲染控件
            tool.InitiateInfoPageControl(_self, -1, function(){
                //渲染textarea
                $("textarea").each(function (index, cur) {
                    $(cur).height('25');
                    tool.autoTextarea(cur);
                });
            })
        });
    },
    methods:{
        triggerFileChoose:function() {
            var _self = this;
            _self.$refs.fileChoose.click();
        },
        //选择文件后触发
        inputFiles: function () {
            var _self = this;
            var loadingIndexClassName = tool.showLoading();
            var file = _self.$refs.fileChoose.files[0] || [];
            if (file.length == 0){
                return;
            }

            //文件大小不能<=0
            if(file.size <=0){
                tool.hideLoading(loadingIndexClassName);
                var msg = lanTool.lanContent("1005_文件大小不应小于等于0KB！");
                tool.showText(msg);
                return;
            }

            //判断文件不能超过限定的大小
            if(file.size>tool.FileMaxSiz){
                tool.hideLoading(loadingIndexClassName);
                var sizeStr = tool.fileSizeFormat(tool.FileMaxSiz);
                var msg = lanTool.lanContent("999_文件大小不能超过！");
                msg = msg.replace("{0}",sizeStr);
                console.log(msg);
                tool.showText(msg);
                return;
            }

            tool.hideLoading(loadingIndexClassName);
            //写入文件名
            _self.fileName = file.name;
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e){
                _self.file =  e.target.result;
            };
        },
        backHandler: function () {
            this.$router.back(-1);
        },
        saveHandler:function(){
            var _self = this;

            //modify by Dylan 构造form表单数据
            //传入参数
            var urlTemp = tool.AjaxBaseUrl();
		    var controlName = tool.Api_DocumentsHandle_UploadDocuments2DMS;
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                ScheduleID:_self.scheduleID
            };
            jsonDatasTemp["FromTypeID"] = _self.fromType;
            jsonDatasTemp["FromID"] = _self.fromID;
            jsonDatasTemp["FileName"] = $("#curFileName").text()||"";
            jsonDatasTemp["description"] = $("[data-field='description']").val()||"";
            jsonDatasTemp["100205"] = $("[data-field='100205']").val()||"";
            jsonDatasTemp["fileBase64Str"] = _self.file;
            //end modify

            var loadingIndexClassName = tool.showLoading();
            $.ajax({
                url: urlTemp,
                type: "post",
                async: true,
                cache: false,
                data: jsonDatasTemp,

                success: function (data) {
                    tool.hideLoading(loadingIndexClassName);
                    data = tool.jObject(data);
                    // console.log(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        console.log(tool.getMessage(data));
                        return true;
                    }

                    //返回到上一页
                    _self.$router.back(-1);
                },
                error: function (jqXHR, type, error) {
                    tool.hideLoading(loadingIndexClassName);
                    console.log(error);
                    return true;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
    },
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
