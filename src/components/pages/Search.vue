<template>
<div>
    <my-header class="header" :title="title"></my-header>

    <div class="nav">
        <div @click="switchPage(0,$event)" class="nav-item active-item">Calendar</div>
        <div @click="switchPage(1,$event)" class="nav-item" >Organizations</div>
        <div @click="switchPage(2,$event)" class="nav-item" >Cantacts</div>
        <div @click="switchPage(3,$event)" class="nav-item" >Opportunities</div>
    </div>

    <div class="search-box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">

                      <div class="weui-cells">

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Title标题</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Initiator发起人</p>
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
                            <p>cell standard</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>cell standard</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>cell standard</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>


                      </div>


                </div>
                <div class="swiper-slide">
                      <div class="weui-cells">

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Title标题</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Initiator发起人</p>
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
                            <p>cell standard</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>cell standard</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>cell standard</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>


                      </div>

                </div>
                <div class="swiper-slide">
                      <div class="weui-cells">

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Title标题</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Initiator发起人</p>
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
                            <p>cell standard</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>cell standard</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>cell standard</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>


                      </div>

                </div>
                <div class="swiper-slide">
                      <div class="weui-cells">

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Title标题</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>Initiator发起人</p>
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
                            <p>cell standard</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>cell standard</p>
                            </div>
                            <div class="weui-cell__ft">123456</div>
                        </div>

                        <div class="weui-cell weui-cell_access">
                          <div class="weui-cell__bd">
                            <p>cell standard</p>
                          </div>
                          <div class="weui-cell__ft">999</div>
                        </div>

                        <div class="weui-cell weui-cell_access" >
                            <div class="weui-cell__bd">
                              <p>Title标题</p>
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
@import "../../assets/css/pages/search.css";
</style>

