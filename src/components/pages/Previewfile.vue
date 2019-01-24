<template>
<div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

          <h1 class="mui-title">{{data.filename}}</h1>

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
                                    <div class="aside_title " data-lanid= '291_信息'>信息</div>
                                    <ul class="FileAttrlist">
                                        <li>
                                            <label class="lanText" data-lanid= '174_文件名称'></label>
                                            <p data-field="fileName">{{data.filename}}</p>
                                        </li>
                                        <li>
                                            <label class="" data-lanid= '282_标题'>标题</label>
                                            <p data-field="title">{{data.title}}</p>
                                        </li>
                                        <li>
                                            <label class="lanText" data-lanid= '825_负责人'></label>
                                            <p data-field="creator">{{data.creator}}</p>
                                        </li>
                                        <li>
                                            <label class="" data-lanid= '283_文件夹'>文件夹</label>
                                            <p data-field="foldername">{{data.foldername}}</p>
                                        </li>
                                        <li>
                                            <label class="" data-lanid= '44_描述'>描述</label>
                                            <p  data-field="notecontent" style="height:0.78rem;">{{data.notecontent}}</p>
                                        </li>
                                        <li>
                                            <label class="lanText" data-lanid= '24_创建时间'></label>
                                            <p data-field="createdtime">{{data.createdtime}}</p>
                                        </li>
                                        <li>
                                            <label class="lanText" data-lanid= '801_更新时间'></label>
                                            <p data-field="modifiedtime">{{data.modifiedtime}}</p>
                                        </li>
                                        <li>
                                            <label class="lanText" data-lanid= '178_文件大小'></label>
                                            <p data-field="filesize">{{(data.filesize/1024/1024).toFixed(2)}}M</p>
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
        var self = this;
        self.data = self.$route.query;
        // console.log(self.data);
    },
    mounted:function(){

        lanTool.updateLanVersion();

        var $this = this;

        $this.photo = $.photoBrowser({
            items: [
                {
                    image: $this.data.attachmentpath,
                }
            ],
            onOpen:function(){
                if(this.config.items.length < 2){
                    $('.swiper-pagination').hide();
                    $this.isOpen = true;
                }
            },
            onClose:function(){
                $this.isOpen = false;
            }
        })


        tool.showLoading();
        //图片
        if(tool.isFileImage($this.data.filename)) {
            $this.showDownload = true;
            $(".drawerFile_content").html('<img class="image" style="max-width:100%" src="' + $this.data.attachmentpath + '" data-preview-src="" data-preview-group="1">');
            $('.image').off().on('click',function(){
                $this.photo.open();
            });
            tool.hideLoading();
            return ;

        }else if(tool.isFileVideo($this.data.filename)){
            $this.showDownload = true;
            if(tool.getSystem() === 'android') {
                //console.log("安卓播放");
                $(".drawerFile_content").html('<video id="video1" name="media" style="width:100%; height:auto" src="' + $this.data.attachmentpath + '" controls preload="auto" x5-video-player-type="h5" x5-video-player-fullscreen="true"></video>');

            } else if(tool.getSystem() === 'ios') {
                $(".drawerFile_content").html('<video name="media" style="width:100%; height:auto" src="' + $this.data.attachmentpath + '" controls></video>');
            }

            tool.hideLoading();
            return;
        }

        //其他文件
        //请求地址
        var urlTemp =
            tool.combineRequestUrl(
                tool.getConfigValue(tool.config_ajaxUrl),
                tool.getConfigValue(tool.ajaxUrl_FileOperation_ChangeFile2PDF)
            );
        //请求的传入参数
        var jsonDatasTemp = {
            "CurrentLanguageVersion": lanTool.currentLanguageVersion,
            "SessionName": tool.getSessionStorageItem(tool.cache_SessionName) || "",
            "id": $this.data.notesid, //文件id
            "FilePath": $this.data.attachmentpath
        };
        $.ajax({
            async: true,
            type: "post",
            url: urlTemp,
            data: {
                jsonDatas: JSON.stringify(jsonDatasTemp)
            },
            dataType: 'json',
            beforeSend: function(data) {},
            success: function(data) {

                data = tool.jObject(data);
                if(data.Result != 1) {
                    tool.hideLoading();
                    toast.show(data.Msg);
                    return false;
                }
                data = data.Data;
                // console.log(data);
                //不解成utf8字节数组(这种方式也正确)
                if(tool.isNullOrEmptyObject(data)) {
                    toast.show(lanTool.lanContent("2_操作失败！"));
                    return false;
                }
                var fileData123 = window.atob(data.FileData);
                // PDFJS.workerSrc = '../../assets/pdfjs/build/pdf.worker.js';
                var loadingTask = PDFJS.getDocument({
                    data: fileData123
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


                $(".drawerFile_content").on("click",".pre-btn",function(event){
                    $this.currPage--;
                    if($this.currPage == 0) {
                        $this.currPage = 1;

                        toast.show(lanTool.lanContent("288_已经是第一页！"));
                    } else {
                        $this.LoadFile($this.currPage);
                    }

                })

                $(".drawerFile_content").on("click",".next-btn",function(event){
                    $this.currPage++;
                    if($this.numPages < $this.currPage) {
                        $this.currPage = $this.numPages;
                        toast.show(lanTool.lanContent("287_已经是最后一页！"));
                    } else {
                        $this.LoadFile($this.currPage);
                    }

                })
            },
            error: function(jqXHR, type, error) {
                tool.hideLoading();
                console.error('error');
            }
        });


    },
    methods:{

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
                    '<canvas id="the-canvas' + self.currPage + '" content="wuser-scalable=yes,width==device-width,minimum-scale=1.0"></canvas><div class="btn-div"><span class="canvas-btn pre-btn">上一页</span><span class="canvas-btn next-btn">下一页</span></div>'
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
                toast.show('长按保存图片');
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
.FileAttrlist p{word-wrap:break-word ;}

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
	min-height: 0.26rem;
	margin-bottom: 0;
	color: #333;
	list-style: none;
	font-size: 0.26rem;
}




</style>

<style>
.weui-photo-browser-modal{z-index:9!important;}
.btn-div{position: absolute;font-size:0.3rem;left:0;right:0;bottom:0.4rem;z-index:3;line-height:0.4rem;
text-align: center;opacity: 0.6;}
.canvas-btn{color:333;padding:5px;background:rgba(0,0,0,0.1);border-radius:2px;}
.pre-btn{margin-right:20px;}

</style>





