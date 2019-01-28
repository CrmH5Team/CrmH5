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
                    <div class="ListCellContentLeftText lanText" data-lanid="986_已选文件"></div>
                  </div>
                  <div class="ListCellContentRight rightContent">
                    <div id="curFileName" class="ListCellContentRightText right-break-word">{{fileName}}</div>
                  </div>
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
        _self.file = _self.$route.query.file;
        _self.fileName = _self.$route.query.fileName;
        _self.fromID = _self.$route.query.fromID;
        _self.fromType = _self.$route.query.fromType;

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
        backHandler: function () {
            this.$router.back(-1);
        },
        saveHandler:function(){
            var _self = this;
            
            //传入参数
            var urlTemp = tool.AjaxBaseUrl();
		    var controlName = tool.Api_DocumentsHandle_UploadDocuments2DMS;
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode()
            };
            jsonDatasTemp["FromTypeID"] = _self.fromType;
            jsonDatasTemp["FromID"] = _self.fromID;
            jsonDatasTemp["FileName"] = $("#curFileName").text()||"";
            jsonDatasTemp["description"] = $("[data-field='description']").val()||"";
            jsonDatasTemp["100205"] = $("[data-field='100205']").val()||"";
            jsonDatasTemp["fileBase64Str"] = _self.file;

            //构造表单数据
            // var formData = new FormData();
            // formData.append('file', $this.file);
            // formData.append("jsonDatas",JSON.stringify(jsonDatas));

            // var formData = new FormData();
            // formData.append('file', _self.file);
            // for (var key in jsonDatasTemp) {
            //     formData.append(key, jsonDatasTemp[key]);
            // }

            tool.showLoading();
            $.ajax({
                url: urlTemp,
                type: "post",
                async: true,
                cache: false,
                data: jsonDatasTemp,
                success: function (data) {
                    tool.hideLoading();
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
                    tool.hideLoading();
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
