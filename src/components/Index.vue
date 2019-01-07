<template>
<div>
    <Header class="header" :title="title"></Header>

    <div id="page-content" class="page-content">
          <!-- 搜索 -->
          <div class="search-box">
              <div @click="goSearch" class="search" id="searchBtn">
                <span class="search-icon mui-icon calcfont calc-sousuo"></span>
                <label class="f16 search-label">Search</label>
              </div>
          </div>

          <div id="nav">
              <div class="weui-grids">
                  <div class="weui-grid">
                      <router-link to="/tripmeeting" class="js_grid">
                        <div class="weui-grid__icon trip-meeting-icon">
                          <span class="mui-icon calcfont calc-kehu"></span>
                        </div>
                        <p class="f12 weui-grid__label lanText" data-lanid="">Trip&Meeting</p>
                      </router-link>
                  </div>
                  <div class="weui-grid">
                      <router-link to="/contacts" class="js_grid">
                        <div class="weui-grid__icon lianxiren1-icon">
                          <span class="mui-icon calcfont calc-kehulianxiren"></span>
                        </div>
                        <p class="f12 weui-grid__label lanText" data-lanid="175_联系人">Contacts</p>
                      </router-link>
                  </div>
                  <div class="weui-grid">
                      <router-link to="/business" class="js_grid">
                        <div class="weui-grid__icon jihui-icon">
                          <span class="calcfont calc-jihui"></span>
                        </div>
                        <p class="f12 weui-grid__label lanText" data-lanid="173_销售机会">Business</p>
                      </router-link>
                  </div>
                  <div class="weui-grid">
                      <router-link to="/sharelist" class="js_grid">
                        <div class="weui-grid__icon intelligence-icon">
                          <span class="calcfont calc-lianxiren1 "></span>
                        </div>
                        <p class="f12 weui-grid__label" >Intelligence</p>
                      </router-link>
                  </div>
              </div>
          </div>
          <div class="occupy-position"></div>

          <!-- 提示 -->
          <div class="tips">
              <div class="tips-box f14">
                  <span class="calcfont calc-tishi1"></span>
                  <span class="tips-text">你有3场会议需要上传会议记录。</span>
                  <router-link to="/meetinglist" class="right upload-now a ">立刻去上传</router-link>
              </div>
          </div>

          <div class="group-title">
              <div class="title-text f14">最近7天要参加的会议</div>
              <router-link to="/tripmeeting" class="check-all right f14 a">查看全部&gt;&gt;</router-link>
          </div>

          <div class="list-view">
              <div class="month-event">
                  <div class="f14 date-div open" @click="groupToggle($event)">
                      <span class="calcfont calc-richeng"></span>
                      <span class="date-text">2018-11-16 Thursday</span>
                      <span class="right">(3)</span>
                  </div>
                  <div class="occupy-div"></div>
                  <div class="data-events">
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                  </div>
              </div>

              <div class="month-event">
                  <div class="f14 date-div open" @click="groupToggle($event)">
                      <span class="calcfont calc-richeng"></span>
                      <span class="date-text">2018-11-16 Thursday</span>
                      <span class="right">(3)</span>
                  </div>
                  <div class="occupy-div"></div>
                  <div class="data-events">
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                  </div>
              </div>

              <div class="month-event">
                  <div class="f14 date-div open" @click="groupToggle($event)">
                      <span class="calcfont calc-richeng"></span>
                      <span class="date-text">2018-11-16 Thursday</span>
                      <span class="right">(3)</span>
                  </div>
                  <div class="occupy-div"></div>
                  <div class="data-events">
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                        <div class="data-events-item f12">
                            <div class="item-title">Meeting with Eastern Airlines</div>
                            <div class="item-time f12">
                                <span class="calcfont calc-gengxinshijian"></span>
                                <span class="time-text">14:30-17:00</span>
                                <!-- <span class="right">Cheryl Xiong</span> -->
                            </div>
                            <div class="item-address">China Eastern Airlines</div>
                            <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                        </div>
                  </div>
              </div>

          </div>




    </div>

    <!--  右侧侧滑 -->
    <div id="mask" class="mask" @click="panelToggle" v-show="showPanel"></div>
    <div id="right-content" class="right-content">
        <div class="user-info f14">
              <img class="user-img" src="../assets/images/user.png" alt="">
              <div class="user-name">Cheryl Xiong</div>
              <div>Test User</div>
              <div>Test Department</div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title f14">General 通用</div>
            <div class="right-block-items f14">
                <div>English</div>
                <div>中文简体</div>
                <div>中文繁体</div>
                <div class="item-border-top">清除缓存</div>
                <div>登出</div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Header from './common/Header'
export default {
    components:{
        'Header':Header
    },
    data(){
      return {
          title:'CRM',
          showPanel:false,
          selectView:'calendar',
          dataFilter:['my-calendar'],
      }
    },
    mounted:function(){
        // lanTool.updateLanVersion();

        eventBus.$on('showRightPanelEvent',this.panelToggle);

        //列表视图滚动
        var headerH = parseFloat($('header').innerHeight());
				var searchH = parseFloat($("#searchBtn").innerHeight()) + 16;
        var navH = parseFloat($('#nav').innerHeight());

        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop();
            if(scrollTop >= searchH){

              if(tool.getSystem() === 'ios'){
                  $("#nav").addClass('sticky').css({"top": headerH + 'px'});
              }else{
                  $("#nav").css({
                    "position":"fixed","top":headerH + 'px',
                  });
                  $('.occupy-position').css({'height':navH + 'px'}).show();
              }
            }else{
                if(tool.getSystem() === 'ios'){
                    $("#nav").removeClass('sticky').css({"top":'0px'});
                }else{
                    $('.occupy-position').css({'height':'0px'}).hide();
                    $("#nav").css({"position":"static"});
                }

            }

            if($('.month-event').length <= 0) return ;
            $('.month-event').each(function(){

              if( ($(this).offset().top - $(window).scrollTop()) <= (navH + headerH) ){

                  if(tool.getSystem() === 'ios'){
                      $(this).find(".date-div").addClass('sticky').css({"top":navH + headerH + 'px'});
                  }else{
                      $(this).find('.date-div').css({"position":"fixed","top":(navH + headerH) + 'px'});
                      $(this).find('.occupy-div').show();
                  }
              }else{
                  if(tool.getSystem() === 'ios'){
                      $(this).find(".date-div").removeClass('sticky').css({"top":'0px'});
                  }else{
                      $(this).find('.date-div').css({"position":"static"});
                      $(this).find('.occupy-div').hide();
                  }
              }

            })
        })
    },
    methods:{

        goSearch:function(){
            this.$router.push('/search');
        },

        //点击分组收起展开
        groupToggle:function(e){
            var el = e.target;
            var _curObj = $(el);
            if(!_curObj.hasClass('date-div')){
                _curObj = _curObj.parent('div.date-div:first');
                if(_curObj == undefined){
                    return;
                }
            }

            if(_curObj.hasClass('open')){
                _curObj.removeClass('open').siblings('.data-events').slideUp(400);
            }else{
                _curObj.addClass('open').siblings('.data-events').slideDown(400);
            }
        },

        //侧滑
        panelToggle:function(){
          var _self = this;
            _self.showPanel = !_self.showPanel;
            if(_self.showPanel){

              _self.$nextTick(function(){
                  $('#right-content').css({
                      'left':'30%',
                      'transition':'left 0.1s ease-out',
                      '-moz-transition': 'left 0.1s ease-out',
                      '-webkit-transition':'left 0.1s ease-out',
                      '-o-transition': 'left 0.1s ease-out'
                  })
                  $('#mask,#right-content').on("touchmove", function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                  });
              })
            }else{
              _self.$nextTick(function(){
                  $('#right-content').css({
                      'left':'100%',
                      'transition':'left 0.3s ease-out',
                      '-moz-transition': 'left 0.3s ease-out',
                      '-webkit-transition':'left 0.3s ease-out',
                      '-o-transition': 'left 0.3s ease-out'
                  });
              })
            }

        },
    }

}
</script>

<style scoped>
@import "../assets/css/pages/index.css";
</style>
