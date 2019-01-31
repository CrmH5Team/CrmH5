<template>
<div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

          <h1 class="mui-title">{{data.ObjectName}}</h1>

          <a class="calcfont calc-guanyu right" @click="showDrawer"></a>
          <!-- <a v-if="showDownload" class="calcfont calc-shangchuan right" @click="download" id="downloadBtn"></a> -->
    </header>

    <div class="file_box">
            <vue-drawer-layout
                ref="drawerFile"
                :drawer-width="260"
                :enable=true
                :animatable=true
                :z-index="0"
                :drawable-distance="Math.floor(260)"
                :content-drawable=true
                :backdrop=true
                :backdrop-opacity-range="[0,0.4]"
                @mask-click="handleMaskClick">
                    <div class="drawer-content" slot="drawer">
                                <!-- 侧滑出来的内容 -->
                                <aside id="aside">
                                    <div class="aside_title lanText" data-lanid='989_信息'></div>
                                    <ul class="FileAttrlist">
                                        <li>
                                            <label class="lanText" data-lanid= '174_文件名称'></label>
                                            <p data-field="fileName">{{data.ObjectName}}</p>
                                        </li>
                                        <li>
                                            <label class="lanText" data-lanid= '837_上传者'></label>
                                            <p data-field="creator">{{data.AddUserName}}</p>
                                        </li>
                                        <li>
                                            <label class="lanText" data-lanid= '985_描述'></label>
                                            <p  data-field="notecontent">{{data.ObjectRemark}}</p>
                                        </li>
                                        <li>
                                            <label class="lanText" data-lanid= '838_上传时间'></label>
                                            <p data-field="createdtime">{{data.AddTime}}</p>
                                        </li>
                                        <li>
                                            <label class="lanText" data-lanid= '178_文件大小'></label>
                                            <p data-field="filesize">{{data.FileLength|FileSizeFormat}}</p>
                                        </li>


                                    </ul>
                                </aside>
                    </div>
                    <div class="drawerFile_content" slot="content">
                                <!-- 页面的主体内容 -->
                    </div>
            </vue-drawer-layout>

    </div>

</div>



</template>
<script>

import PDFJS from 'pdfjs-dist'
import {DrawerLayout} from 'vue-drawer-layout'

export default {
    components:{
        'vue-drawer-layout':DrawerLayout
    },

    data(){
        return {
            data:null, //文件信息
            thePDF:null,//当前pdf对象
            numPages:0, //总页数
            currPage:1,  //当前页数
            photo:null, //
            isOpen:false, //photoBrowser是否打开
            showDownload:false, //显示下载按钮（只有文件类型是图片或视频才显示）
        }
    },
    created:function(){
        var _self = this;
        _self.data = _self.$route.query;
    },
    mounted:function(){
        lanTool.updateLanVersion();
        var $this = this;

        //传入参数
        var urlTemp = tool.AjaxBaseUrl();
        var controlName = tool.Api_DocumentsHandle_DownloadFileFromDMS;
        var jsonDatasTemp = {
            CurrentLanguageVersion: lanTool.currentLanguageVersion,
            UserName: tool.UserName(),
            _ControlName: controlName,
            _RegisterCode: tool.RegisterCode(),
            AutoID:$this.data.AutoID
        };
        tool.showLoading();
        $.ajax({
           url: urlTemp,
            type: "post",
            async: true,
            cache: false,
            data: jsonDatasTemp,
            success: function(data) {
                tool.hideLoading();
                data = tool.jObject(data);
                // console.log(data);
                if (data._ReturnStatus == false) {
                    tool.showText(tool.getMessage(data));
                    console.log(tool.getMessage(data));
                    return true;
                }

                // console.log($this.data.ObjectName);

                data = data._OnlyOneData || "";
                data = tool.combineBase64StrWithFileType(data,$this.data.ObjectName);

                // console.log(data);
                //图片
                if(tool.isFileImage($this.data.ObjectName)) {
                    $this.showDownload = true;
                    $(".drawerFile_content").html('<img class="image" style="max-width:100%" src="' + data + '" data-preview-src="" data-preview-group="1">');
                    $this.clickToShow(data);
                    $('.image').off("click").on('click',function(){
                        $this.photo.open();
                    });

                    tool.hideLoading();
                    return ;
                }else
                if(tool.isFileVideo($this.data.ObjectName)){
                    $this.showDownload = true;
                    if(tool.getSystem() === 'android') {
                        $(".drawerFile_content").html('<video id="video1" name="media" style="width:100%; height:auto" src="' + data + '" controls preload="auto" x5-video-player-type="h5" x5-video-player-fullscreen="true"></video>');

                    } else if(tool.getSystem() === 'ios') {
                        $(".drawerFile_content").html('<video name="media" style="width:100%; height:auto" src="' + data + '" controls></video>');
                    }

                    tool.hideLoading();
                    return;
                }

                //其他文件
                //不解成utf8字节数组(这种方式也正确)
                var fileDataTemp = window.atob(data);
                // PDFJS.workerSrc = '../../assets/pdfjs/build/pdf.worker.js';
                var loadingTask = PDFJS.getDocument({
                    data: fileDataTemp
                });

                loadingTask.promise.then(function(pdf) {
                    tool.hideLoading();
                    //加载第一页第一页数据
                    $this.numPages = pdf.numPages;
                    $this.thePDF = pdf;
                    $this.LoadFile($this.currPage);

                }, function(reason) {
                    tool.hideLoading();
                    console.error(reason);
                });


                $(".drawerFile_content").off("click",".pre-btn").on("click",".pre-btn",function(event){
                    $this.currPage--;
                    if($this.currPage == 0) {
                        $this.currPage = 1;

                        // tool.showText(lanTool.lanContent("288_已经是第一页！"));
                        // $('.pre-btn').hide();
                    } else {
                        $this.LoadFile($this.currPage);
                        // $('.pre-btn').show();
                    }

                })

                $(".drawerFile_content").off("click",".next-btn").on("click",".next-btn",function(event){
                    $this.currPage++;
                    if($this.numPages < $this.currPage) {
                        $this.currPage = $this.numPages;
                        // tool.showText(lanTool.lanContent("287_已经是最后一页！"));
                        // $('.next-btn').hide();
                    } else {
                        $this.LoadFile($this.currPage);
                        // $('.next-btn').show();
                    }

                })
            },
            error: function(jqXHR, type, error) {
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
    methods:{
        clickToShow:function(data){
          if(tool.isNullOrEmptyObject(data)){
            return;
          }
          var _self = this;
            _self.photo = $.photoBrowser({
              items: [
                  {
                      image: data
                  }
              ],
              onOpen:function(){
                  _self.isOpen = true;

                  // if(this.config.items.length < 2){
                  //     $('.swiper-pagination').hide();
                  // }
              },
              onClose:function(){
                  _self.isOpen = false;
              }
          });
        },
        back:function(){
            this.$router.back(-1);
        },
        //展开右侧内容
        showDrawer:function(){
            this.$refs.drawerFile.toggle();
        },
        handleMaskClick:function(){
             this.$refs.drawerFile.toggle();
        },
        //加载指定页数的文件内容
        LoadFile:function(numPage) {
            var self = this;
            if(self.thePDF == null) {
                return false;
            }

            self.thePDF.getPage(numPage).then(function getData(page) {
                var scale = 1;
                var viewport = page.getViewport(scale);

                // Prepare canvas using PDF page dimensions
                $(".drawerFile_content").html(
                    '<canvas id="the-canvas' + self.currPage + '" content="wuser-scalable=yes,width==device-width,minimum-scale=1.0"></canvas><div class="btn-div"><div class="btn-div-div"><span class="canvas-btn pre-btn calcfont calc-shangyiye"></span></div><div class="btn-div-div"><span class="canvas-btn next-btn calcfont calc-xiayiye"></span></div></div>'
                );
                var canvas = document.getElementById('the-canvas' + self.currPage + '');
                var winRatio = ($(window).width() / viewport.width);

                var context = canvas.getContext('2d');

                canvas.height = viewport.height;
                canvas.width = viewport.width;
                $(canvas).css({
                    "transform": "scale(" + winRatio + ")",
                    "transform-origin": "0 0 0",
                    "margin-top": ($(window).height() - canvas.height * winRatio) / 4 + "px"
                });

                if(numPage == 1){
                  $('.pre-btn').addClass('opacity');
                }else{
                  $('.pre-btn').removeClass('opacity');
                }

                if(numPage == self.numPages){
                  $('.next-btn').addClass('opacity');
                }else{
                  $('.next-btn').removeClass('opacity');
                }

                //Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        },
        //下载
        download:function(){
            if(tool.isFileImage(this.data.filename)) {
                tool.showText(lanTool.lanContent('1003_长按保存图片'));
                return false;
            }else{
                /*
                var myFrame= document.createElement("iframe");
                    myFrame.src = this.data.attachmentpath;
                    myFrame.style.display = "none";
                    document.body.appendChild(myFrame);
                */

                //    $('body').append('<a style="position:absolute;width:100%;display:block;height:50px;z-index:9;top:0;left:0;background:#ccc;" id="download" href="'+ this.data.attachmentpath +'" download="'+ this.data.attachmentname +'"></a>');
                //    $('#download').trigger('click');

                //    var a = document.createElement('a');
                //        a.href = this.data.attachmentpath;
            }
        },
    },
    beforeDestroy:function(){
        if(this.isOpen){
            this.photo.close();
        }
    }
}


</script>



<style scoped>
.FileAttrlist{height: 100%;}

header{position: fixed;width: 100%;left: 0;top: 0;z-index:1;}
header.mui-bar {
  line-height: 0.2rem;
	background: #f8f2dc;
}
.mui-title {
	right: 118px;
    left: 40px;
    display: inline-block;
    overflow: hidden;
    width: auto;
    font-size: 0.34rem;
    margin: 0;
    text-overflow: ellipsis;
    position: absolute;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    line-height: 0.88rem;
}
.calcfont{
    font-size: 0.48rem;
    /* width: 0.88rem; */
    width:auto;
    margin-left: -10px;
    text-align: center;
    padding: 0.2rem 10px;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
}
.calc-fanhui{
    margin-right: -10px;
    margin-left: 0px;
    padding-right: 10px;
    padding-left: 10px;

}
header .mui-title,
header a {
  color: #333;
  font-weight: 400;
}


.file_box{position:fixed;z-index: 1;left:0;right:0;top:0.88rem;bottom:0;overflow-y:scroll;}

#aside{padding:10px 15px;}
.aside_title{padding: 12px 0;}

/* .drawerFile_content{position:relative;height:100%;} */
.drawerFile_content .img{
    width: 100%;max-height: 100%;
    -webkit-touch-callout: text;
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
}

.drawer-content{height:100%;overflow-y: scroll;-webkit-overflow-scrolling: touch;}


/*侧滑出来内容style*/
.FileAttrlist {
	line-height: 1;
	padding: 0;
	margin: 0;
	list-style: none;
}
.FileAttrlist li {
	position: relative;
	padding: 10px 0;
}
.FileAttrlist li:after {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 100%;
	left: 0;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}

.FileAttrlist label {
	display: block;
	color: #595959;
	list-style: none;
	font-size: 0.24rem;
	margin-bottom: 10px;
}

.FileAttrlist p {
  line-height:1.3;
  word-wrap:break-word ;
	margin-bottom: 0;
	color: #333;
	list-style: none;
	font-size: 0.26rem;
}





</style>

<style>
.weui-photo-browser-modal{z-index:9!important;}

/* .pre-btn{margin-right:20px;} */

.btn-div{
  position: absolute;left:0;right:0;
  bottom:0.4rem;z-index:3;
  display:flex;justify-content:center;
  line-height:0.4rem;
  text-align: center;
}
.btn-div .btn-div-div{flex:1;}
.btn-div .canvas-btn{
  color:333;
  padding:0.2rem;
  opacity: 0.5;
/* border-radius:2px; */
  margin:0 0.2rem;font-size:0.6rem;}

.btn-div .pre-btn{margin-left:60%;}
.btn-div .next-btn{margin-right:60%;}
.btn-div .opacity{opacity: 0.2;}

</style>





