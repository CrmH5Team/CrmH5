<template>
<div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

          <h1 class="mui-title">{{data.ObjectName}}</h1>

          <a class="calcfont calc-guanyu right" @click="showDrawer"></a>
          <a v-show="isShowDownloadBtn==true" class="calcfont calc-xiazai right" @click="downloadFile" id="downloadBtn"></a>
    </header>

    <div class="file_box">
            <vue-drawer-layout
                ref="drawerFile"
                :drawer-width="260"
                :enable=false
                :animatable=true
                :z-index="0"
                :drawable-distance="Math.floor(260)"
                :content-drawable=true
                :backdrop=true
                :backdrop-opacity-range="[0,0.4]"
                @mask-click="handleMaskClick">
                    <div class="drawer-content" slot="drawer">
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
                    <div class="drawerFile_content" slot="content" >
                            <img v-show="isImg" width="100%" v-gallery :src="imgSrc">

                            <!-- 展示pdf才显示 -->
                            <div class="canvasBox" v-show="isPdf">
                                <canvas class="canvas" :id="'the-canvas' + currPage "></canvas>
                            </div>
                            <div class="btn-div" v-show="isPdf">
                                  <span class="canvas-btn pre-btn calcfont calc-shangyiye"></span>
                                  <span class="canvas-btn next-btn calcfont calc-xiayiye"></span>
                                  <span class="canvas-btn calc-zoom_out calcfont calc-zoom_out__eas"></span>
                                  <span class="canvas-btn calc-zoom_in calcfont calc-zoom_in__easy"></span>
                            </div>
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
            // photo:null, //
            // isOpen:false, //photoBrowser是否打开
            // showDownload:false, //显示下载按钮（只有文件类型是图片或视频才显示）
            isImg:false,
            imgSrc:'',

            scale:0.6, //pdf放大倍数
            maxScale:1.2,
            minScale:0.6,
            isPdf:false,
            isShowDownloadBtn:true
        }
    },
    created:function(){
        var _self = this;
        _self.data = _self.$route.query;
    },
    mounted:function(){
        lanTool.updateLanVersion();
        var $this = this;

        //若是安卓系统，则显示下载按钮，否则不显示
        // console.log(tool.getSystem());
        if(tool.getSystem() == 'ios') {
            $this.isShowDownloadBtn = false;
        }else{
            $this.isShowDownloadBtn = true;
        }
        

        //传入参数
        var urlTemp = tool.AjaxBaseUrl();

        //console.log($this.data);

        var controlName = tool.Api_DocumentsHandle_DownloadFileFromDMS;
        var jsonDatasTemp = {
            CurrentLanguageVersion: lanTool.currentLanguageVersion,
            UserName: tool.UserName(),
            _ControlName: controlName,
            _RegisterCode: tool.RegisterCode(),
            AutoID:$this.data.AutoID,
            FileName:$this.data.ObjectName || "",
            ActionType:0 //0:预览;1:下载
        };
        var loadingIndexClassName = tool.showLoading();
        $.ajax({
            url: urlTemp,
            type: "post",
            async: true,
            cache: false,
            data: jsonDatasTemp,
            success: function(data) {
                tool.hideLoading(loadingIndexClassName);
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

                    // $this.showDownload = true;

                    var img = new Image();
                    // 缩放图片需要的canvas
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    // base64地址图片加载完毕后
                    img.onload = function () {
                        // 图片原始尺寸
                        var originWidth = this.width;
                        var originHeight = this.height;
                        // 最大尺寸限制
                        var maxWidth = 600, maxHeight = 600;
                        // 目标尺寸
                        var targetWidth = originWidth, targetHeight = originHeight;
                        // 图片尺寸超过600x600的限制
                        if (originWidth > maxWidth || originHeight > maxHeight) {
                            if (originWidth / originHeight > maxWidth / maxHeight) {
                                // 更宽，按照宽度限定尺寸
                                targetWidth = maxWidth;
                                targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                            } else {
                                targetHeight = maxHeight;
                                targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                            }
                        }

                        // canvas对图片进行缩放
                        canvas.width = targetWidth;
                        canvas.height = targetHeight;
                        // 清除画布
                        context.clearRect(0, 0, targetWidth, targetHeight);
                        // 图片压缩
                        context.drawImage(img, 0, 0, targetWidth, targetHeight);


                        //显示图片
                        var url = canvas.toDataURL();
                        $this.imgSrc = url;
                    };
                    img.src = data;
                    $this.isImg = true;

                    // $(".drawerFile_content").html('<img v-gallery:groupName class="image thumbnail" style="max-width:100%" src="' + data + '" >');
                    // $this.clickToShow(data);
                    // $('.image').off("click").on('click',function(){
                    //     $this.photo.open();
                    // });

                    tool.hideLoading(loadingIndexClassName);
                    return ;
                }else
                if(tool.isFileVideo($this.data.ObjectName)){
                    //data = decodeURIComponent(data);
                    //console.log(data);
                    // $this.showDownload = true;
                    if(tool.getSystem() === 'android') {
                        $(".drawerFile_content").html('<video id="video1" name="media" style="width:100%; height:100%" src="' + data + '" controls preload="auto" x5-video-player-type="h5" x5-video-player-fullscreen="true"></video>');

                    } else if(tool.getSystem() === 'ios') {
                        $(".drawerFile_content").html('<video name="media" style="width:100%; height:100%" src="' + data + '" controls></video>');
                    }

                    tool.hideLoading(loadingIndexClassName);
                    return;
                }

                //其他文件
                //不解成utf8字节数组(这种方式也正确)
                var fileDataTemp = window.atob(data);
                $this.isPdf = true;
                var loadingTask = PDFJS.getDocument({
                    data: fileDataTemp
                });

                loadingTask.promise.then(function(pdf) {
                    tool.hideLoading(loadingIndexClassName);
                    //加载第一页数据
                    $this.numPages = pdf.numPages;
                    $this.thePDF = pdf;
                    $this.LoadFile($this.currPage);

                }, function(reason) {
                    tool.hideLoading(loadingIndexClassName);
                    console.error(reason);
                });


                $(".drawerFile_content").off("click",".pre-btn").on("click",".pre-btn",function(event){
                    $this.currPage--;
                    if($this.currPage == 0) {
                        $this.currPage = 1;
                    } else {
                        $this.LoadFile($this.currPage);
                    }

                })

                $(".drawerFile_content").off("click",".next-btn").on("click",".next-btn",function(event){
                    $this.currPage++;
                    if($this.numPages < $this.currPage) {
                        $this.currPage = $this.numPages;

                    } else {
                        $this.LoadFile($this.currPage);
                    }
                })

                //放大
                $(".drawerFile_content").off("click",".calc-zoom_in").on("click",".calc-zoom_in",function(event){
                    $this.scale = ($this.scale *10 + 1)/10;
                    if($this.scale > $this.maxScale){
                         $this.scale = $this.maxScale;
                    }else{
                        $this.LoadFile($this.currPage);
                    }

                })
                //缩小
                $(".drawerFile_content").off("click",".calc-zoom_out").on("click",".calc-zoom_out",function(event){
                    $this.scale = ($this.scale *10 - 1)/10;
                    if($this.scale < $this.minScale){
                        $this.scale = $this.minScale;
                    }else{
                        $this.LoadFile($this.currPage);
                    }

                })

            },
            error: function(jqXHR, type, error) {
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
    methods:{
        // clickToShow:function(data){
        //   if(tool.isNullOrEmptyObject(data)){
        //     return;
        //   }
        //   var _self = this;

        //     _self.photo = $.photoBrowser({
        //       items: [
        //           {
        //               image: data
        //           }
        //       ],
        //       onOpen:function(){
        //           _self.isOpen = true;

        //           // if(this.config.items.length < 2){
        //           //     $('.swiper-pagination').hide();
        //           // }
        //       },
        //       onClose:function(){
        //           _self.isOpen = false;
        //       }
        //   });

        // },
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

                // Prepare canvas using PDF page dimensions
                // $(".drawerFile_content").html(
                //     `<canvas class="canvas" id="the-canvas` + self.currPage + `" ></canvas>
                //     `
                // );
                var scale = self.scale;
                var viewport = page.getViewport(scale);
                var canvas = document.getElementById('the-canvas' + self.currPage + '');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                canvas.style.width = viewport.width + 'px';
                canvas.style.height = viewport.height + 'px';

                var context = canvas.getContext('2d');

                // let dpr = window.devicePixelRatio || 1;
                // let bsr =
                //     context.webkitBackingStorePixelRatio ||
                //     context.mozBackingStorePixelRatio ||
                //     context.msBackingStorePixelRatio ||
                //     context.oBackingStorePixelRatio ||
                //     context.backingStorePixelRatio ||
                //     1;
                // let ratio = dpr / bsr;
                // context.setTransform(ratio, 0, 0, ratio, 0, 0);

                context.fillStyle = "#fff";
                context.fillRect(0, 0, canvas.width, canvas.height);

                // $(canvas).css({
                    // "transform": "scale(" + self.winRatio + ")",
                    // "transform-origin": "0 0 0",
                    // "margin-top": ($(window).height() - canvas.height * winRatio) / 4 + "px"
                // });

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

                if(self.scale <= self.minScale){
                      $('.calc-zoom_out').addClass('opacity');
                }else{
                      $('.calc-zoom_out').removeClass('opacity');
                }

                if(self.scale >= self.maxScale){
                      $('.calc-zoom_in').addClass('opacity');
                }else{
                      $('.calc-zoom_in').removeClass('opacity');
                }

                //Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        },
        //文件下载
        downloadFile:function(){
            var _self = this;
            //传入参数
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_DocumentsHandle_DownloadFileFromDMS;
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                AutoID:_self.data.AutoID,
                FileName:_self.data.ObjectName || "",
                ActionType:1 //0:预览;1:下载
            };
            //拼装url参数
            var urlParam = tool.getUrlParam(jsonDatasTemp);
            urlTemp = urlTemp + urlParam;
            //console.log(urlTemp);
            //window.open(urlTemp, "_self");
            //window.open(urlTemp, "blank");
            //window.location.href = urlTemp;

            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = "javascript: '<script>window.location.href=\"" + urlTemp + "\"<\/script>'";
            document.getElementsByTagName('body')[0].appendChild(iframe);
        },
    },
    beforeDestroy:function(){

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

.drawerFile_content{
  /* display: flex; */
  /* justify-content:center; */
  /* align-items: center; */
  /* justify-content:space-around; */
  /* position:relative; */
  width: 100%;
  height: 100%;

}

.canvasBox{
  width:100%;height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  text-align: center;
}
.canvas{margin:0 auto;}

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
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
.btn-div .btn-div-div{flex:1;}
.btn-div .canvas-btn{
  color:#333;
  /* padding:0.2rem; */
  opacity: 0.5;
  margin:0 0.2rem;
  font-size:0.6rem;}

/* .btn-div .pre-btn{margin-left:60%;}
.btn-div .next-btn{margin-right:60%;} */
.btn-div .opacity{opacity: 0.2;}

</style>