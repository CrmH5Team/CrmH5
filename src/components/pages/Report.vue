<template>
  <div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

          <h1 class="mui-title lanText" data-lanid="270_报表"></h1>

          <a @click="showScreen" class=" calcfont calc-shaixuan1 right" id=""></a>
          <a @click="share" class="calcfont calc-fenxiang right" id=""></a>
    </header>

    <div class="weui-flex">
        <div class="weui-flex__item active" data-name="MyActivity">
            <div class="lanText" data-lanid="268_我的活动"></div>
        </div>
        <div class="weui-flex__item" data-name="MyCalendarActivity">
            <div class="lanText" data-lanid="269_我的日程活动"></div>
        </div>
    </div>
    
    <Reportlist
        ref="reportlist"
        class="reportlist"
        :reportType="reportType"
        ></Reportlist>


    
    <div @click="tapLayer"  class="ZheZhao" @touchmove="preventEvent($event)"></div>
    <!-- 分享 -->
    <div id="tankuang">
        <div class="Line"></div>
        <div class="Introduce">
            <span class="lanText" data-lanid="276_分享到"></span>
        </div>
        <div id="share_box">
            <div @click="shareMessage('wechatFriend')" id="weixin" class="share-box-item share">
                <div class="share-icon w"></div>
                <div class="shareLabel lanText" data-lanid="271_微信" data-shareid="weixin" data-extra="WXSceneSession"></div>
            </div>
            <!-- <div @click="shareMessage('wechatTimeline')" id="weixinFriend" class="share-box-item share">
                <div class="share-icon fri"></div>
                <div class="shareLabel lanText" data-shareid="weixin" data-extra="WXSceneTimeline" data-lanid="272_微信朋友圈"></div>
            </div> -->
            <div @click="shareMessage('qqFriend')" id="qq" class="share-box-item share">
                <div class="share-icon q"></div>
                <div class="shareLabel lanText" data-shareid="qq" data-extra="" data-lanid="273_QQ"></div>
            </div>
            <!-- <div @click="shareMessage('qZone')" id="qZone" class="share-box-item share">
                <div class="share-icon qZone"></div>
                <div class="shareLabel lanText" data-shareid="qq" data-extra="" data-lanid="273_QQ"></div>
            </div> -->
            <div @click="shareMessage('email')" id="email" class="share-box-item share">
                <div class="share-icon email"></div>
                <div class="shareLabel">Email</div>
            </div>

        </div>
    </div> 
    
    <!-- 筛选 -->
    <Screen id="screen" class="screen" :screenData="screen"></Screen>


    <!-- 分享提示 -->
    <div v-if="isShowshare" @click="closeShare" @touchmove="preventEvent($event)" class="share-layer"></div>
    <div v-if="isShowshare" class="share-tip"> 
        <i @click="closeShare" class="weui-icon-cancel cancel-icon"></i>
        <div class="share-content">
            <p class="share-content-tit">复制成功</p>
            <div class="share-text">
                <p>{{shareTitle}}</p>
                <p>{{shareText}}</p>
            </div>
        </div>
        <div id="paste" @click="goPaste($event)" class="layer-btn">去粘贴</div>
        <input style="display:none;" id="shareContent" type="text" v-model="shareContent"/>
    </div>



  </div>   
</template>



<script>
import Reportlist from './Reportlist'
// import '../../assets/js/common/NativeShare.js'
import Screen from '../common/Screen'
import Clipboard from 'clipboard'


export default {
    data(){
        return {
            reportType:'MyActivity',
            // nativeShare:new NativeShare(),  //分享对象

            isFirstEnter:false,

            QueryCondiction:[], 
            MyActivetyScreen:[
                {
                    field:'potentialname',
                    queryType:'string',
                    text:lanTool.lanContent('173_销售机会'),
                    comp:[
                        {
                            type:'input',
                            field:'potentialname',
                            placeholder:lanTool.lanContent('186_请输入销售机会名称'),
                            value:'',
                        }
                    ]
                }, 
                {
                    field:'related_to',
                    queryType:'string',
                    text:lanTool.lanContent('26_公司名称'),
                    comp:[
                        {
                            type:'selectlist',
                            field:'related_to',
                            queryUrl:"Accounts/Query",
                            placeholder:lanTool.lanContent('202_请选择公司'),
                            data:{
                                text:'',
                                value:''
                            }
                        }
                    ]
                },
                {
                    field:'queryDate',
                    queryType:'string',
                    text:lanTool.lanContent('156_日期'),
                    comp:[
                        {
                            type:'datepicker',
                            field:'stardate',
                            placeholder:lanTool.lanContent('187_请选择开始日期'),
                            value:''
                        },
                        {
                            type:'datepicker',
                            field:'enddate',
                            placeholder:lanTool.lanContent('188_请选择结束日期'),
                            value:''
                        },
                    ]
                }
            ],
            MyCalendarActivityScreen:[
                {
                    field:'subject',
                    queryType:'string',
                    text:lanTool.lanContent('48_主题'),
                    comp:[
                        {
                            type:'input',
                            field:'subject',
                            placeholder:lanTool.lanContent('247_请输入主题'),
                            value:'',
                        }
                    ]
                },
                {
                    field:'parent_id',
                    queryType:'string',
                    text:lanTool.lanContent('26_公司名称'),
                    comp:[
                        {
                            type:'selectlist',
                            field:'parent_id',
                            queryUrl:"Accounts/Query",
                            placeholder:lanTool.lanContent('202_请选择公司'),
                            data:{
                                text:'',
                                value:''
                            }
                        }
                    ]
                },
                {
                    field:'queryDate',
                    queryType:'string',
                    text:lanTool.lanContent('156_日期'),
                    comp:[
                        {
                            type:'datepicker',
                            field:'stardate',
                            placeholder:lanTool.lanContent('187_请选择开始日期'),
                            value:''
                        },
                        {
                            type:'datepicker',
                            field:'enddate',
                            placeholder:lanTool.lanContent('188_请选择结束日期'),
                            value:''
                        },
                    ]
                }
            ],

            //筛选对象
            screen:null,

            isShowshare:false,
            shareTitle:'',
            shareText:'',
            shareContent:'',
            shareTo:'',

        }
    },
    components:{Reportlist,Screen},

    beforeRouteEnter:function(to, from, next){
        
        if(from.name === 'selectlist'){  
            to.meta.isBack = true;
            console.log(to.meta.isBack);
        }
        next();
    },
    created:function(){
        this.isFirstEnter = true;

        this.reportType = 'MyActivity';
        this.screen = this.MyActivetyScreen;
    },    
    mounted:function(){
        // console.log('mounted');
        var $this = this;
        lanTool.updateLanVersion();

        //table切换
        $('.weui-flex__item').each(function(){
            $(this).off().on('click',function(){
                if(!$(this).hasClass('active')){
                   $(this).addClass('active').siblings('.weui-flex__item').removeClass('active');
                    $this.reportType = $(this).attr('data-name');

                    if($this.reportType === 'MyActivity'){
                        $this.screen = $this.MyActivetyScreen;
                    }else{
                        $this.screen = $this.MyCalendarActivityScreen;
                    }

                    //触发screen组件清空筛选数据
                    eventBus.$emit('clearScreenData');
                }
            })
        })
        

        eventBus.$on('hiddenLayerEvent',function(){
            $('.ZheZhao').trigger('click');
        })
        
    },

    activated:function(){

        if(!this.$route.meta.isBack || this.isFirstEnter){ 
            //触发screen组件清空筛选数据
            eventBus.$emit('clearScreenData');
            //触发列表获取数据
            eventBus.$emit('screenEvent');
        }
        this.$route.meta.isBack = false;
        this.isFirstEnter = false;
    },

    methods:{
        
        //禁止事件冒泡和阻止事件默认行为
        preventEvent:function(e){
            e.stopPropagation();
            e.preventDefault();
            return ;
        },

        back:function(){
            this.$router.back(-1);
        },

        //点击遮罩层
        tapLayer:function(e){
            $(e.target).hide(0);
            $("#tankuang , #screen").hide(0);
        },

        //分享
        share:function(e){
            if(!$(e.target).hasClass('disable')){
                $(".ZheZhao").fadeIn(50);
                //隐藏筛选功能
                $("#screen").hide();
                document.activeElement.blur();
                //显示分享
                $("#tankuang").fadeIn(60);
            }
        },

        //筛选
        showScreen:function(e){
            if(!$(e.target).hasClass('disable')){
                $(".ZheZhao").fadeIn(50);
                //隐藏分享功能
                $("#tankuang").hide();
                document.activeElement.blur();
                //筛选功能
                $("#screen").fadeIn(60);
            }
        },

        shareMessage:function(command){
            var $this = this;
            $this.shareTo = command || '';
            //请求地址 
            var urlTemp =
                tool.combineRequestUrl(
                    tool.getConfigValue(tool.config_ajaxUrl),
                    tool.getConfigValue(tool.ajaxUrl_Report_CreateShareFile)
                );

            //请求的传入参数
            var jsonDatasTemp = {
                "CurrentLanguageVersion": lanTool.currentLanguageVersion,
                "IsUsePager": false,
                "SessionName": tool.getStorageItem(tool.cache_SessionName) || "",
                "QueryCondiction": $this.QueryCondiction,
                "ReportType": $this.reportType || ""
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
                    //数据渲染
                    data = tool.jObject(data);
                    // console.log(JSON.stringify(data));
                    if(data.Result != 1) {
                        mui.toast(data.Msg);
                        return false;
                    }
                    data = data.Data;
                    // console.log(data);
                    $this.shareTitle = data.Title; 
                    $this.shareText = data.FilePath;
                    $this.shareContent = data.Title + ':' + data.FilePath;
                    $('.ZheZhao').trigger('click');

                    //分享到微信的展示方式
                    /*
                    if($this.shareTo == 'wechatFriend'){
                        $this.isShowshare = true;
                        return true;
                    }
                    */
                    $this.isShowshare = true;
                    /*
                    $this.nativeShare.setShareData({
                        title: data.Title,
                        desc: data.FileSize + 'KB',
                        link: data.FilePath,
                        icon: data.Thumbs[0],
                        success: function() {
                            // alert('success')
                        },
                        fail: function() {
                            // alert('fail')
                        }
                    })
                    try {
                        $this.nativeShare.call($this.shareTo);
                    } catch(err) {
                        // 如果不支持的浏览器，用回微信分享的方式
                        $this.isShowshare = true;
                    }
                    */
                  
                },
                error: function(jqXHR, type, error) {
                    loading.hidden();
                    console.log("error");
                    
                }
            });
        },

        //去粘贴
        goPaste:function(){
            var $this = this;
            $this.$nextTick(function(){
                var cont = document.getElementById('shareContent');
                var clipboard = new Clipboard('#paste', {
                    text: function() {
                        return cont.value;
                    }
                });
                clipboard.on('success', function(e) {
                    $this.openApp();
                });
                clipboard.on('error', function(e) {
                    
                });
            })
        },

        //打开app
        openApp:function(){
            var openWx = "weixin://";   //打开微信app url
            var openQq = "mqqwpa://im/chat";   //打开微信app url
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) {
                switch(this.shareTo)
                {
                    case 'wechatFriend' || 'wechatTimeline':
                        window.open(openWx);
                        break;
                    case 'qqFriend' || 'qZone':
                        window.open(openQq);
                        break;
                    case 'email':
                        window.open('mailto:sample@fly63.com');
                        break;   
                }
                this.closeShare(); 
            }

        },

        //关闭分享提示
        closeShare:function(){
            this.isShowshare = false;
        }

        
	
    },
    beforeDestroy:function(){
        eventBus.$off('hiddenLayerEvent');
    }
}
</script>












<style scoped>


header{position: relative;}
header.mui-bar {
  line-height: 0.2rem;position: fixed;width: 100%;left:0;top:0;background: #3cadf9;
}
.mui-title {
	right: 40px;left: 40px;display: inline-block;overflow: hidden;
    width: auto;font-size: 0.34rem;margin: 0;text-overflow: ellipsis;
    position: absolute;padding: 0;text-align: center; white-space: nowrap;
    line-height: 0.88rem;
}
.calcfont{
    font-size: 0.48rem; width: 0.88rem;text-align: center;
    padding: 0.2rem 0; position: relative; z-index: 20;
    display: inline-block; text-decoration: none;line-height: 1;
}
.calc-fanhui{
    margin-right: -10px;margin-left: -10px; padding-right: 10px;padding-left: 10px;
}
header .mui-title,
header a {	color: #fff;}
.weui-flex{
    background-color:#fff; position:fixed;width: 100%;left:0;top:0.88rem;
}
.weui-flex::after{
    position: absolute;right: 0;bottom: 0;
    left: 0; height: 1px; content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5); background-color: #7f7f7f;
}
.weui-flex__item{
    flex: 1;text-align: center;color:inherit;
}
.weui-flex__item > div{
    height: 0.8rem;line-height: 0.8rem; font-size: 0.25rem;
}
.active{color:#3cadf9 ;}
.reportlist{position:fixed;width:100%;left:0;top:1.68rem;bottom:0;overflow-y: scroll;
-webkit-overflow-scrolling:touch;}


/*遮罩层*/
div.ZheZhao {
    position: fixed;left: 0;right: 0;top: 0.88rem;bottom: 0;
    z-index: 10;background-color: rgba(0,0,0,0.5);display: none;
    overflow: hidden;
}

/*分享style*/
#tankuang {
    position: absolute; width: 100%;height: 2.5rem; bottom: 0;
    background-color: #f8f8f8;z-index: 11;display: none;
}
div.Line {
    position: absolute;left: 0.5rem;right: 0.5rem;
    /* width: 100%; */height: 1px;top: 0.4rem;
    background-color: #f2f2f2;
}
div.Introduce {
    position: absolute;top: 0.25rem;height: 0.3rem;
    left: 50%; /* right: 0; */width: 1.5rem;color: #888888;
    line-height: 0.3rem;margin-left: -0.75rem;text-align: center;
    background-color: #f8f8f8;
}
#share_box {
    position: absolute;
    top: 0.8rem;left: 0;width: 100%;height: 1.8rem;
    box-sizing: border-box;display: flex;
}
div.share-box-item {
    position: relative;width: 1.6rem; height: 1.6rem;
    /* background-color: green; */ margin: auto;
}
div.share-box-item>.share-icon {
    position: absolute; width: 0.8rem;height: 0.8rem; top: 0;
    left: 0.4rem;border-radius: 0.4rem;
    background-image: url(../../assets/images/share/weixin.png);
    background-size: 100%;    background-repeat: no-repeat;
}
div.share-box-item>.share-icon.fri {
    background-image: url(../../assets/images/share/friend.png);
}
div.share-box-item>.share-icon.q {
    background-image: url(../../assets/images/share/qq.png);
}
div.share-box-item>.share-icon.qZone{
    background-image: url(../../assets/images/share/space.png);
}
div.share-box-item>.share-icon.email {
    background-image: url(../../assets/images/share/email.png);
}
div.share-box-item>.shareLabel {
    position: absolute; top: 0.8rem; left: 0px;
    width: 100%;height: 0.6rem; text-align: center;
    line-height: 0.6rem;color: #242424;
    font-size: 0.26rem;white-space: nowrap;
    text-overflow: ellipsis; word-break: break-all;
    overflow: hidden;
}

/*筛选*/
.screen{position: fixed;top:0.88rem;left:0;right:0;z-index:11;display:none;}



/*分享链接提示*/
.share-layer{position:fixed;top:0;left:0;right:0;bottom:0;z-index: 99;background: rgba(0, 0, 0, 0.2);}
.share-tip{position:fixed;left:0.5rem;right:0.5rem;top:30%;z-index:100;background:#fff;border-radius: 0.1rem;
    padding:1rem 0.3rem 0.4rem;-webkit-box-sizing: border-box;box-sizing: border-box;}
.share-content{
    border:1px solid #ccc;border-radius: 0.1rem;padding:0.3rem;margin-bottom: 0.5rem;position: relative;
}
.share-content-tit{width: 40%;height:0.6rem;line-height:0.6rem;background:#fff;position:absolute;left:50%;margin-left:-20%;top:-0.3rem;font-size:0.25rem;
text-align: center;}
.cancel-icon{color:#ccc;position:absolute;right:0;top:0.1rem;}
.share-text{font-size:0.2rem;line-height: 0.35rem;color:#ccc;word-wrap:break-word;}
.layer-btn{line-height: 0.8rem;background:#3cadf9;color:#fff;text-align: center;font-size: 0.3rem;border-radius: 0.1rem;}     
</style>
