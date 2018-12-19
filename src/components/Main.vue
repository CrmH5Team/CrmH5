<template>

    <vue-drawer-layout
          ref="drawer"
          :drawer-width="260"
          :enable="true"
          :animatable="true"
          :z-index="0"
          :drawable-distance="Math.floor(260)"
          :content-drawable="true"
          :backdrop="true"
          :backdrop-opacity-range="[0,0.4]"
          @slide-start="handleSlideStart"
          @slide-move="handleSlideMove"
          @slide-end="handleSlideEnd"
          @mask-click="handleMaskClick">
              <div class="drawer-content" slot="drawer">
                        <!-- 侧滑出来的内容 -->
                        <div id="headNav" class="headNav">
                            <img class="headNavImg" id="headNavImg" src="../assets/images/user.png" />
                            <div class="headNavPosition" id="headNavPosition">{{userName}}</div>
                        </div>

                        <div class="weui-cells">
                            <router-link to="/general" class="weui-cell weui-cell_access drawer-weui-cell">
                                <div class="weui-cell__hd">
                                  <span class="calcfont calc-shezhi"></span>
                                </div>
                                <div class="weui-cell__bd">
                                  <p class="lanText" data-lanid="259_通用"></p>
                                </div>
                                <div class="weui-cell__ft"></div>
                            </router-link>
                            <router-link to="/about" class="weui-cell weui-cell_access drawer-weui-cell">
                                <div class="weui-cell__hd">
                                  <span class="calcfont calc-guanyu"></span>
                                </div>
                                <div class="weui-cell__bd">
                                  <p class="lanText" data-lanid="265_关于CALC"></p>
                                </div>
                                <div class="weui-cell__ft"></div>
                            </router-link>
                        </div>

                        <div type="button" id="logoutBtn" class="logoutBtn lanText" data-lanid="266_退出登录" @click="logout"></div>


              </div>
              <div slot="content">
                        <!-- 页面的主体内容 -->
                        
                        <Header :title="title"></Header>

                        <div class="weui-grids">
                            <div class="weui-grid">
                                <router-link to="/opportunities" class="js_grid">
                                  <div class="weui-grid__icon jihui-icon">
                                    <span class="calcfont calc-jihui"></span>
                                  </div>
                                  <p class="weui-grid__label lanText" data-lanid="173_销售机会"></p>
                                </router-link>
                            </div>
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

                        </div>


                        <div class="weui-cells">

                          <router-link to="/calendar" class="weui-cell weui-cell_access main-weui-cell">
                            <div class="weui-cell__hd">
                              <span class=" calcfont calc-richeng"></span>
                            </div>
                            <div class="weui-cell__bd">
                              <p class="lanText" data-lanid="176_日程"></p>
                            </div>
                            <div class="weui-cell__ft"></div>
                          </router-link>

                          <router-link to="/report" class="weui-cell weui-cell_access main-weui-cell">
                            <div class="weui-cell__hd">
                              <span class="mui-icon calcfont calc-baobiao"></span>
                            </div>
                            <div class="weui-cell__bd">
                              <p class="lanText" data-lanid="177_报表"></p>
                            </div>
                            <div class="weui-cell__ft"></div>

                          </router-link>

                          <!-- <input id="test" type="text" /> -->
                        </div>
              </div>
    </vue-drawer-layout>

</template>
<script>
import {DrawerLayout} from 'vue-drawer-layout'
import Header from './common/Header'
// import event from './common/Event.js'
export default {
    components:{
        'vue-drawer-layout':DrawerLayout,
        'Header':Header
    },
    data(){
        return {
            title:'CRM',
            userName:''
        }
    },
    
    mounted:function(){
        lanTool.updateLanVersion();
        this.userName = tool.getStorageItem(tool.cache_UserRealName);

        eventBus.$on('showDrawer',this.showDrawer);

    },
    methods:{
        showDrawer:function(){
          var _self = this;
            _self.$refs.drawer.toggle();
        },
        

        handleSlideStart:function(){
             
        },
        handleSlideMove:function(){
             
        },
        handleMaskClick:function(){
             this.$refs.drawer.toggle();
        },
        handleSlideEnd:function(){
              
        },
       
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

<style>
.drawer-layout{position:fixed;}

/* .toolbar .close-clear{position: absolute;left: 0;text-align: left;} */
</style>

<style scoped>
/*侧滑出来style*/
.headNav {
    position: relative;
    height: 3.4rem;
    width: 100%;
    background-color: #3cadf9;
}
.headNavImg {
    position: absolute;
    left: 50%;
    top: 0.75rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.9rem;
    border: 2px solid rgba(255, 255, 255, 0.9);
    margin-left: -0.9rem;
    box-sizing: border-box;
}
.headNavPosition {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 2.69rem;
    height: 0.3rem;
    line-height: 0.25rem;
    color: #ffffff;
    font-size: 0.25rem;
}
.logoutBtn{
    position: absolute;
    bottom: 1rem;
    left: 5%;
    width: 90%;
    text-align: center;
    height: 0.7rem;
    line-height: 0.7rem;
    background-color: #3cadf9;
    color: #FFFFFF;
    font-size: 0.36rem;
    border-radius: 4px;
    border: 2px solid #3cadf9;
}
/*侧滑出来style ------end-------*/




.weui-grids{
  background: #fff;
  width: 100%;
}
.weui-grid{
 text-align: center;
 padding:10px;
}
.js_grid{
  display: inline-block;padding: 10px;
}
.weui-grid:before{
  border-right:0;
}
.weui-grid:after{
  border-bottom:0;
}
.weui-grid__icon{
  border-radius:0.5rem;
  width:1.5rem;height:1.5rem;line-height: 1.5rem;
  display: inline-block;
  margin: 0 auto;
}
.jihui-icon{
  background: #3d76a9;
}
.kehu-icon{
  background: #4a5973;
}
.lianxiren1-icon{
  background: #e87c6c;
}
.weui-grid__label{
  font-size: 0.25rem;
  height: 0.5rem;line-height: 0.5rem;
}
.weui-grid .calcfont{
  font-size: 1rem;
  color:#fff;
}


.drawer-content .weui-cells{margin-top: 0;}

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
/* .weui-cell{padding:13px 15px;} */
.main-weui-cell{padding:7px 15px;}
.drawer-weui-cell{padding:10px 15px;}
.drawer-weui-cell .calcfont{font-size: 0.5rem;color:#3cadf9;}
.drawer-weui-cell .weui-cell__bd{font-size: 0.3rem;}
</style>


