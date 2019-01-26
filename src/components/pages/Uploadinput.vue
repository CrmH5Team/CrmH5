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
                      <input type="text" 
                          data-field="BusinessType" 
                          data-lanid="文档类型" 
                          data-fieldControlType="picker" 
                          data-fieldVal="" 
                          Code="DropDowList_ViewBaseAllTypes" 
                          TypeValue="Companybusinesstype" 
                          class="ListCellContentRightText"/>
                  </div>
                  <div class="ListCellRightIcon"><span class=" calcfont calc-you"></span></div>
              </div>
          </div>

          <div class="ListCell">
                <div class="ListCellLeftIcon textLeftIcon"><span class=" calcfont calc-bianji1"></span></div>
                <div class="ListCellLeftText">
                    <p class="textareaP">
                        <textarea data-field="" 
                            data-fieldControlType="textareaInput" 
                            class="lanInputPlaceHolder" 
                            data-lanid="710_标题"></textarea>
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
            pageTitle:'文件上传',
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
                text:tool.getSessionStorageItem(tool.cache_UserRealName) || "",
                value:tool.getSessionStorageItem(tool.cache_UserId) || ""
            },
        }
    },
    beforeRouteEnter:function(to, from, next){
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
        // this.$nextTick(function () {
        //     //将textarea设置为高度自适应
        //     $("textarea").each(function (index, cur) {
        //         tool.autoTextarea(cur);
        //     });
        //     //用common中的方法初始化
        //     initial.initPicker();
        // });

        _self.file = _self.$route.params.file;
        _self.fileName = _self.$route.params.fileName;
        _self.fileSize = _self.$route.params.fileSize;
        _self.id = _self.$route.params.id;
        _self.notes_title = '';

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

            var jobject = {};
            jObject['fileName'] = _self.fileName;
            jObject['fileName'] = $('[data-field=""]').attr('data-fieldval') || '';
            jObject['fileName'] = $('[data-field=""]').val() || '';           

            var urlTemp = tool.AjaxBaseUrl();
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                AutoID: autoID
            };

            //合并数据
		        jsonDatasTemp = tool.combineJObject(jsonDatasTemp,jobject);

            var formData = new FormData();
                formData.append('file', $this.file);
                formData.append("jsonDatas",JSON.stringify(jsonDatas));

                tool.showLoading();
                $.ajax({
                    async: true,
                    type: "post",
                    url: urlTemp,
                    data: jsonDatasTemp,
                    success: function (data) {
                      data = tool.jObject(data);
                      // console.log(data);
                      if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        console.log(tool.getMessage(data));
                        return true;
                      }
                      //把列表页路由参数isBack改为fase（使上一页刷新）,并返回上一页
                      // var routeName = _self.$route.name;
                      var routers = $this.$router.options.routes;

                      $.each(routers,function(index,item){
                          if(item.name === 'meetingNoteinfo'){
                              item.meta.fromSave = true;
                              $this.$router.back(-1);
                              return ;
                          }
                      })
                      
                    },
                    error: function (jqXHR, type, error) {
                      console.log(error);
                      tool.hideLoading();
                      return true;
                    },
                    complete: function () {
                      tool.hideLoading();
                      //隐藏虚拟键盘
                      document.activeElement.blur();
                    }
                })   
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
