<template>

<div>
    <Header class="header" :title="title"></Header>

    <div id="page-content" class="page-content">
        <div @click="goSearch" class="search" id="searchBtn">
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

            <div id="trip" class="trip">Trip & Schedule</div>
        </div>
        <div class="occupy-position"></div>




        <calendar v-show="selectView === 'calendar'"></calendar>

        <div v-show="selectView === 'list'" class="list-view">
              <div class="month-event">
                  <div class="date-div open" @click="groupToggle($event)">
                      <span class="calcfont calc-richeng"></span>
                      <span>2018-11-16 Thursday</span>
                      <span class="right">(3)</span>
                  </div>
                  <div class="occupy-div"></div>
                  <div class="data-events">
                      <div class="data-events-item">
                          <div class="item-title"><span class="spot">&bull;</span>Meeting with Eastern Airlines</div>
                          <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 4 5 6 7 8 9</span></div>
                          <div class="item-time"><span>14:30-17:00</span><span class="right">Cheryl Xiong</span></div>
                          <div class="item-address">China Eastern Airlines</div>
                          <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                      </div>
                      <div class="data-events-item">
                          <div class="item-title"><span class="spot">&bull;</span>Firsting Meeting with Eastern Airlines</div>
                          <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 4 5 6 7 8 9</span></div>
                          <div class="item-time"><span>14:30-17:00</span><span class="right">Cheryl Xiong</span></div>
                          <div class="item-address">China Eastern Airlines</div>
                          <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                      </div>
                      <div class="data-events-item">
                          <div class="item-title"><span class="spot">&bull;</span>Firsting Meeting with Eastern Airlines</div>
                          <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 4 5 6 7 8 9</span></div>
                          <div class="item-time"><span>14:30-17:00</span><span class="right">Cheryl Xiong</span></div>
                          <div class="item-address">China Eastern Airlines</div>
                          <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                      </div>
                      <div class="data-events-item">
                          <div class="item-title"><span class="spot">&bull;</span>Firsting Meeting with Eastern Airlines</div>
                          <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 4 5 6 7 8 9</span></div>
                          <div class="item-time"><span>14:30-17:00</span><span class="right">Cheryl Xiong</span></div>
                          <div class="item-address">China Eastern Airlines</div>
                          <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                      </div>
                  </div>
              </div>
              <div class="month-event">
                  <div class="date-div open" @click="groupToggle($event)">
                      <span class="calcfont calc-richeng"></span>
                      <span>2018-12-16 Thursday</span>
                      <span class="right">(1)</span>
                  </div>
                  <div class="occupy-div"></div>
                  <div class="data-events">
                      <div class="data-events-item">
                          <div class="item-title"><span class="spot">&bull;</span>Firsting Meeting with Eastern Airlines</div>
                          <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 4 5 6 7 8 9</span></div>
                          <div class="item-time"><span>14:30-17:00</span><span class="right">Cheryl Xiong</span></div>
                          <div class="item-address">China Eastern Airlines</div>
                          <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                      </div>
                      <div class="data-events-item">
                          <div class="item-title"><span class="spot">&bull;</span>Firsting Meeting with Eastern Airlines</div>
                          <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 4 5 6 7 8 9</span></div>
                          <div class="item-time"><span>14:30-17:00</span><span class="right">Cheryl Xiong</span></div>
                          <div class="item-address">China Eastern Airlines</div>
                          <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                      </div>
                      <div class="data-events-item">
                          <div class="item-title"><span class="spot">&bull;</span>Firsting Meeting with Eastern Airlines</div>
                          <div class="item-content"><span>Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 Test data1 2 3 4 5 6 7 8 9</span></div>
                          <div class="item-time"><span>14:30-17:00</span><span class="right">Cheryl Xiong</span></div>
                          <div class="item-address">China Eastern Airlines</div>
                          <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                      </div>
                  </div>
              </div>


        </div>


    </div>

    <!--  右侧侧滑 -->
    <div id="mask" class="mask" @click="panelToggle" v-show="showRightPanel"></div>
    <div id="right-content" class="right-content">
        <div class="right-content-block">
            <div class="right-block-title">View视图</div>
            <div class="right-block-items">
                <div class="radios-div" >
                      <label class="radios-label">
                          <input type="radio" name="view" value="calendar" v-model="selectView"/><i class="radios"></i><span>Calendar View 日历视图</span>
                      </label>
                </div>
                <div class="radios-div">
                      <label class="radios-label">
                          <input type="radio" name="view" value="list" v-model="selectView"/><i class="radios"></i> <span>List View 列表视图</span>
                      </label>
                </div>
            </div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title">Data Filter 数据筛选</div>
            <div class="right-block-items">
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="my-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>My Calendar我的日程</span>
                      </label>
                </div>
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="visiable-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>Visiable Calendar(From Others Shared)</span>
                      </label>
                </div>
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="from-my-direct" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>From My Direct Team Member</span>
                      </label>
                </div>
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="from-my-all" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>From My All Team Member</span>
                      </label>
                </div>
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="pr-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>PR Calendar</span>
                      </label>
                </div>
            </div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title">Other 其他</div>
            <div class="right-block-items">
                <div class="other-search" id="OtherSearchBtn">
                    <span class="other-search-icon mui-icon calcfont calc-sousuo"></span>
                    <label class="other-search-label">Search</label>
                </div>
            </div>
        </div>
    </div>

    <!--  点击 + 号弹出层 -->
    <div @click="hiddenModule()" class="xuanfo-zhegai">
			<div class="calendar xuanfo">
				<div class="calendar-wendi xuanfo-wendi">Calendar</div>
				<div class="calendar-icon xuanfo-icon">
					<div class="calendar-btn xuanfo-btn" data-btn="calendar">
						<span class="icon mui-icon calcfont calc-rili"></span>
					</div>
				</div>
			</div>
			<div class="organization xuanfo">
				<div class="organization-wendi xuanfo-wendi">organization</div>
				<div class="organization-icon xuanfo-icon">
					<div class="organization-btn xuanfo-btn" data-btn="organization">
						<span class="icon mui-icon calcfont calc-kehu"></span>
					</div>
				</div>
			</div>
			<div class="contact xuanfo">
				<div class="contact-wendi xuanfo-wendi">contact</div>
				<div class="contact-icon xuanfo-icon">
					<div class="contact-btn xuanfo-btn" data-btn="contact">
						<span class="icon mui-icon calcfont calc-lianxiren1"></span>
					</div>
				</div>
			</div>
			<div class="opportunity xuanfo">
				<div class="opportunity-wendi xuanfo-wendi">opportunity</div>
				<div class="opportunity-icon xuanfo-icon">
					<div class="opportunity-btn xuanfo-btn" data-btn="opportunity">
						<span class="icon mui-icon calcfont calc-jihui"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="xuanfo-xiaoyuan">
			<span @click="addModule($event)" class="calcfont calc-jiahao"></span>
		</div>

</div>
</template>



<script>

import Header from './common/Header'
import Calendar from './pages/Calendar'
// import '@/assets/css/pages/main.css'

export default {
    components:{
        'Header':Header,
        'calendar':Calendar
    },
    data(){
        return {
            showCalendar:false,
            showRightPanel:false,
            title:'CRM',
            userName:'',

            // viewData:[
            //     {text:'Calendar View 日历视图',value:'calendar'},
            //     {text:'List View 列表视图',value:'list'}
            // ],
            selectView:'calendar',
            dataFilter:[],


        }
    },
    computed:{
        // selectView:function(){
        //     console.log(this.selectView);
        // }
    },

    mounted:function(){
        lanTool.updateLanVersion();
        // this.userName = tool.getStorageItem(tool.cache_UserRealName);
        eventBus.$on('showRightPanel',this.panelToggle);

        //列表视图滚动
        var headerH = parseFloat($('header').innerHeight());
				var searchH = parseFloat($("#searchBtn").innerHeight())+20;
        var navH = parseFloat($('#nav').innerHeight());

        $('#page-content').scroll(function(){
            var scrollTop = $(this).scrollTop();
            if(scrollTop >= searchH){

              if(tool.getSystem() === 'ios'){
                  $("#nav").addClass('sticky');
              }else{
                  $("#nav").css({
                    "position":"fixed","top":headerH + 'px',
                    // "-webkit-transform":"translate3d(0,0,0)",
                    // "transform":"translate3d(0,0,0)",
                    // "background-attachment":"fixed",
                  });
                  $('.occupy-position').css({'height':navH + 'px'}).show();
              }
            }else{
                if(tool.getSystem() === 'ios'){
                    $("#nav").removeClass('sticky');
                }else{
                    $('.occupy-position').css({'height':'0px'}).hide();
                    $("#nav").css({"position":"static"});
                }

            }

            if($('.month-event').length <= 0) return ;
            $('.month-event').each(function(){
              if($(this).position().top <= navH ){

                  if(tool.getSystem() === 'ios'){
                      $(this).find(".date-div").addClass('sticky').css({"top":navH + 'px'});
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
        panelToggle:function(){
          var _self = this;
            _self.showRightPanel = !_self.showRightPanel;
            if(_self.showRightPanel){
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
            }else{
                $('#right-content').css({
                    'left':'100%',
                    'transition':'left 0.3s ease-out',
                    '-moz-transition': 'left 0.3s ease-out',
                    '-webkit-transition':'left 0.3s ease-out',
                    '-o-transition': 'left 0.3s ease-out'
                });
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
        },

        //点击悬浮的+号
        addModule:function(e){
            var _self = this;
            var el = e.target;
            if($(el).hasClass('calc-jiahao')){
                $(el).removeClass('calc-jiahao').addClass('calc-folds');
                $('.xuanfo-zhegai').show(0.6);

                $(".xuanfo-btn").each(function() {
                  $(this).stop().animate({
                    height: "50px",
                    width: "50px"
                  }, 200);
                })
                $(".xuanfo-wendi").each(function() {
                  $(this).fadeIn(100);
                  $(this).stop().animate({
                    right: "110px"
                  }, 200)
                })

                $('.xuanfo-zhegai').on("touchmove", function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                });

            }else{
                _self.hiddenModule(el);
            }
        },
        hiddenModule:function(el){
            if(el === undefined) el = $('.xuanfo-xiaoyuan span');
            $(el).removeClass('calc-folds').addClass('calc-jiahao');
              $(".xuanfo-btn").each(function() {
                $(this).stop().animate({
                  height: 0,
                  width: 0
                }, 200);
              })
              $(".xuanfo-wendi").each(function() {
                $(this).stop().animate({
                  right: "85px"
                }, 200, function() {
                  $(this).fadeOut(100);
                  $(".xuanfo-zhegai").fadeOut(200);
                });

            })
        },


        //点击分组收起展开
        groupToggle:function(e){
            var el = e.target;
            if($(el).hasClass('open')){
                $(el).removeClass('open').siblings('.data-events').hide(0.2);
            }else{
                $(el).addClass('open').siblings('.data-events').show(0.2);
            }
        },

        goSearch:function(){
            this.$router.push('/search');
        }


    },
    beforeDestroy:function(){
       eventBus.$off('showRightPanel');
    }


}
</script>

<style scoped>
 @import "../assets/css/pages/main.css";
</style>

