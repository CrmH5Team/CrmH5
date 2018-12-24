<template>
<div>
    <my-header class="header" :title="title"></my-header>

    <!-- <div class="nav">
        <div @click="switchPage(0,$event)" class="nav-item active-item">Calendar</div>
        <div @click="switchPage(1,$event)" class="nav-item" >Organizations</div>
        <div @click="switchPage(2,$event)" class="nav-item" >Cantacts</div>
        <div @click="switchPage(3,$event)" class="nav-item" >Opportunities</div>
    </div> -->

    <div class="search-box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                      <div class="weui-cells">

                        <div class="weui-cell " >
                            <input class="search-input" type="text" placeholder="Title标题"/>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Initiator发起人</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Meeting nature会议性质</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Meeting type会议类型</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Organization公司</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Contact Name联系人名称</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Opportunity 商业机会</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Priority</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Time Range</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>


                      </div>
                </div>

                <div class="swiper-slide">
                      <div class="weui-cells">
                        <div class="weui-cell " >
                            <input class="search-input" type="text" placeholder="Organization Name"/>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Business Sector 业务分类</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Area / Region 区域</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Country 国家</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Account Manager 客户经理</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>


                      </div>

                </div>
                <div class="swiper-slide">
                      <div class="weui-cells">

                        <div class="weui-cell " >
                            <input class="search-input" type="text" placeholder="Cantacts Name"/>
                        </div>

                        <div class="weui-cell " >
                            <input class="search-input" type="text" placeholder="Cantacts Email"/>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Organization 公司</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Business Sector 业务分类</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Meeting nature 会议性质</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Area / Region 区域</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Country 国家</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Account Manager 客户经理</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>
                      </div>

                </div>
                <div class="swiper-slide">
                      <div class="weui-cells">

                        <div class="weui-cell " >
                            <input class="search-input" type="text" placeholder="Opportunity Name"/>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Latest progress 最新的流程</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Priority 优先级</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Status 状态</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Initiator发起人</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Start Date Range 起始日期范围</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Planning Closing Date Range 计划结束日期</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Organization公司</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Business Sector 业务分类</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Area / Region 区域</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Country 国家</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>

    <div class="anniu">
        <div class="clear-btn">Clear</div>
        <div class="sure-btn">OK</div>
    </div>


</div>
</template>



<script>

require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import Header from '../common/Header'
export default {
    components: {
      swiper,
      swiperSlide,
      'my-header': Header,
    },
    data() {
        return {
            title: 'Other Search',
            swiper:null,

        }
    },
    mounted:function(){
       this.swiper = new Swiper ('.swiper-container', {
          //切换结束后
          onSlideChangeEnd: function(swiper){
            // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
              $('.nav-item').each(function(index,el){
                    if(index == swiper.activeIndex){
                        $(this).addClass('active-item').siblings().removeClass('active-item');
                    }
              })
          }

       });





    },
    methods:{

        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.swiper.slideTo(num, 500, false);

            // alert(this.swiper.activeIndex);
        }

    }




}
</script>

<style scoped>
@import "../../assets/css/pages/calendarsearch.css";
</style>

