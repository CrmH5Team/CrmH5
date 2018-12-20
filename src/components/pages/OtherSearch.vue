<template>

<div>
    <Header class="header" :title="title"></Header>

    <div id="page-content" class="page-content">
        <div class="search" id="searchBtn">
          <span class="search-icon mui-icon calcfont calc-sousuo"></span>
          <label class="search-label">Search</label>
        </div>

        <div id="nav" class="weui-grids">
            <div class="weui-grid">
                <router-link to="/organizations" class="js_grid">
                  <div class="weui-grid__icon kehu-icon">
                    <span class="mui-icon calcfont calc-kehu"></span>
                  </div>
                  <p class="weui-grid__label lanText" data-lanid="174_客户"></p>
                </router-link>
            </div>
            <div class="weui-grid">
                <router-link to="/contacts" class="js_grid">
                  <div class="weui-grid__icon lianxiren1-icon">
                    <span class="mui-icon calcfont calc-lianxiren1"></span>
                  </div>
                  <p class="weui-grid__label lanText" data-lanid="175_联系人"></p>
                </router-link>
            </div>
            <div class="weui-grid">
                <router-link to="/opportunities" class="js_grid">
                  <div class="weui-grid__icon jihui-icon">
                    <span class="calcfont calc-jihui"></span>
                  </div>
                  <p class="weui-grid__label lanText" data-lanid="173_销售机会"></p>
                </router-link>
            </div>


            <div class="weui-grid">
                <router-link to="/contacts" class="js_grid">
                  <div class="weui-grid__icon soon-icon">
                    <span class="mui-icon calcfont calc-lianxiren1"></span>
                  </div>
                  <p class="weui-grid__label" >soon</p>
                </router-link>
            </div>

        </div>
        <div id="trip" class="trip">Trip & Schedule</div>
        <div class="occupy-position"></div>

        <calendar v-if="showCalendar"></calendar>

        <div v-else class="list-view">
              <div class="month-event">
                  <div class="date-div">2018-11-16 Thursday</div>
                  <div class="occupy-div"></div>
                  <div class="data-events">
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                  </div>
              </div>
              <div class="month-event">
                  <div class="date-div">2018-11-16 Thursday</div>
                  <div class="occupy-div"></div>
                  <div class="data-events">
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                      <p>456466123</p>
                  </div>
              </div>

        </div>


    </div>

    <div class="mask" @click="panelToggle" v-show="showRightPanel"></div>
    <div id="right-content" class="right-content">
        <div class="right-content-block">
            <div class="right-block-title">View视图</div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title">Data Filter 数据筛选</div>
            <div>
                <label class="checkbox">

                    <input type="checkbox" name="check" >
                    <span class="checkbox-style"></span>

                    <span class="margin-r">custom size</span>
                </label>
            </div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title">Other 其他</div>
        </div>
    </div>

</div>
</template>

<style>

input[type="checkbox"]{display: none;}
input[type="checkbox"] + .checkbox-style {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    cursor: pointer;
}

.checkbox > input[type="checkbox"]:checked + .checkbox-style:before {
    border: #20a0ff;
    background: #20a0ff;
    animation-name: none;
}
.checkbox > input[type="checkbox"] + .checkbox-style:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    content: '';
    border: 1px solid #C0CCDA;
    box-sizing: border-box;
    border-radius:2px;
}
.checkbox > input[type="checkbox"] + .checkbox-style:after {
    display: block;
    position: absolute;
    display: none;
    content: '';
    top: 5px;
    left: 5px;
    box-sizing: border-box;
    width: 16px;
    height: 3px;
    transform: rotate(45deg);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
}


</style>


<script>

import Header from './common/Header'
import Calendar from './pages/Calendar'
// import event from './common/Event.js'
export default {
    components:{
        'Header':Header,
        'calendar':Calendar
    },
    data(){
        return {
            showCalendar:true,
            showRightPanel:false,
            title:'CRM',
            userName:'',
        }
    },

    mounted:function(){
        lanTool.updateLanVersion();
        // this.userName = tool.getStorageItem(tool.cache_UserRealName);
        eventBus.$on('showRightPanel',this.panelToggle);

        //列表视图滚动
        var headerH = parseFloat($('header').innerHeight());
				var searchH = parseFloat($("#searchBtn").innerHeight())+20;
				var navH = parseFloat($('#nav').innerHeight());
        var tipH = parseFloat($('#trip').innerHeight());
        $('#page-content').scroll(function(){

            var scrollTop = $(this).scrollTop();
            if(scrollTop >= searchH){
              $("#nav").css({
                "position":"fixed","top":headerH + 'px',
                 "-webkit-transform":"translate3d(0,0,0)",
                 "transform":"translate3d(0,0,0)",
                 "background-attachment":"fixed",
              });
              $('#trip').css({
                "position":"fixed","top": headerH + navH + 'px',
                "-webkit-transform":"translate3d(0,0,0)",
                "transform":"translate3d(0,0,0)",
                "background-attachment":"fixed",
              });
              $('.occupy-position').css({'height':navH + tipH +'px'}).show();


            }else{
              $('.occupy-position').css({'height':'0px'}).hide();
              $("#nav,#trip").css({"position":"static"});

            }

            $('.month-event').each(function(){

              // if($(this).position().top <= (navH + tipH)){
              //   $(this).find('.date-div').css({"position":"fixed","top":(navH + tipH) + 'px'});
              //   $(this).find('.occupy-div').show();
              // }else{
              //   $(this).find('.date-div').css({"position":"static"});
              //   $(this).find('.occupy-div').hide();
              // }

            })

        })



    },
    methods:{
        panelToggle:function(){
          var _self = this;
            _self.showRightPanel = !_self.showRightPanel;
            if(_self.showRightPanel){
                $('#right-content').show().css({
                    'left':'30%',
                    'transition':'left 1.2s',
                    '-moz-transition': 'left 1.2s',
                    '-webkit-transition':'left 1.2s',
                    '-o-transition': 'left 1.2s'
                })
            }else{
                $('#right-content').css({
                    'left':'100%',
                    'transition':'left 1s',
                    '-moz-transition': 'left 1s',
                    '-webkit-transition':'left 1s',
                    '-o-transition': 'left 1s'
                }).hide();
            }


        },
        // handleMaskClick:function(){
        //      this.$refs.drawer.toggle();
        // },

        //退出
        logout:function(){
            var _self = this;
              var btnArray = [lanTool.lanContent('262_否'), lanTool.lanContent('263_是')];
              $.confirm(
                lanTool.lanContent('264_确定要退出登录吗'),
                lanTool.lanContent('261_提示'),
                function(){
                    //yes
                  tool.removeStoragItem(tool.cache_SessionName);
                  tool.removeStoragItem(tool.cache_UserRealName);
                  tool.removeStoragItem(tool.cache_UserId);
                  tool.removeStoragItem(tool.cache_TimeZoneValue);
                  tool.removeStoragItem(tool.cache_isadmin);

                    _self.$router.push('/');
                },
                function(){
                    //no
                },
                btnArray)
        }


    },
    beforeDestroy:function(){
       eventBus.$off('showDrawer');
    }


}
</script>

<style scoped>
.header{position:fixed;width:100%;top:0;left:0;z-index:9;}
.page-content{position:fixed;top:0.88rem;left:0;right:0;bottom:0;overflow-y:scroll;
-webkit-overflow-scrolling:touch;}
.occupy-position{display: none;}

/*列表视图*/
.list-view{}
.date-div{
  height: 30px;line-height: 30px;background:#ebf9fd;padding:0 10px;font-size: 12px;
  width: 100%;
  box-sizing: border-box;
}
.occupy-div{height:30px;display:none;}
.data-events{padding: 0 10px;}
.data-events p{height: 50px;line-height: 50px;}


/*右侧style*/
.mask{position:fixed;top:0;left:0;bottom:0;right:0;background: rgba(0, 0, 0, 0.1);z-index:99;}
.right-content{
    position: absolute;left:100%; width: 70%;
    top: 0;bottom: 0; z-index: 100;padding-top:20px;
    display: none;
    background-color: #FFFFFF;
}

.right-block-title{height:32px;line-height:32px;background:#ecf7fb;padding-left:10px;font-size: 0.3rem;}



/*搜索框*/
.search{
    margin: 10px 10px;
    border-radius: 5px;
    padding-left: 10px;
    background-color: gainsboro;
    height: 34px;
    line-height: 34px;
}
.search-icon{
    font-size: 20px !important;    color: gray;
}
.search-label{    color: gray; }


/*nav 导航*/
.weui-grids{
  background: #fff;
  width: 100%;
}
.weui-grid{
 text-align: center;
 padding:10px;
 width:25%;
}
.js_grid{
  display: inline-block;padding: 10px 0;
}
.weui-grid:before{
  border-right:0;
}
.weui-grid:after{
  border-bottom:0;
}
.weui-grid__icon{
  border-radius:5px;
  width:0.9rem;
  height:0.9rem;
  line-height: 0.9rem;
  display: inline-block;
  margin: 0 auto;
}
.jihui-icon{
  background: #3E9DFB;
}
.kehu-icon{
  background: #FF5A21;
}
.lianxiren1-icon{
  background: #2A79C8;
}
.soon-icon{
  background:gray;
}
.weui-grid__label{
  font-size: 0.25rem;
  height: 0.5rem;line-height: 0.5rem;
}
.weui-grid .calcfont{
  font-size: 0.5rem;
  color:#fff;
}
/*nav 导航  ---------end---------*/

.trip{
    padding: 10px 10px;width:100%;box-sizing: border-box;
    line-height:20px;
}











/* .drawer-content .weui-cells{margin-top: 0;} */
/*
.weui-cell__hd{
  margin-right: 0.2rem;
}
.weui-cell__bd{font-size:0.2rem;}

.weui-cells{ padding:0;position: relative;}
.weui-cells:after{ border:0;}
.weui-cells:before{ color:#7f7f7f; background:#7f7f7f;}
.weui-cell_access{position:relative;}
.weui-cell_access:after{
    content: " "; position: absolute;
    left: 0; right: 0; bottom:0;
    height: 1px; background: #7f7f7f; z-index: 2;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
*/

/* .weui-cell{padding:13px 15px;} */
/* .main-weui-cell{padding:7px 15px;}
.drawer-weui-cell{padding:10px 15px;}
.drawer-weui-cell .calcfont{font-size: 0.5rem;color:#3cadf9;}
.drawer-weui-cell .weui-cell__bd{font-size: 0.3rem;} */
</style>


