<template>
<div class="sortSceen">
      <div class="weui-tab">
          <div class="weui-navbar">
            <a class="weui-navbar__item " > <!-- weui-bar__item--on -->
                <span class="lanText" data-lanid="178_排序"></span><i class="calcfont calc-paixu"></i>
            </a>
            <a class="weui-navbar__item" >
                <span class="lanText" data-lanid="179_筛选"></span><i class="calcfont calc-shaixuan"></i>
            </a>
          </div>

          <div class="weui-tab__bd">   <!-- weui-tab__bd-item--active -->

                <div class="weui-tab__bd-item">
                      <div v-for="item in sortScreenData.sort" :key="item.id" class="sort-item">
                          <div
                            @click="sort"
                            class="sort-item-text"
                            :data-sortOrder="item.sortOrder"
                            :data-sortName="item.sortName">{{item.text}}
                          </div>
                      </div>
                </div>

                <div class="weui-tab__bd-item">

                      <Screen :screenData="sortScreenData.screen"></Screen>

                </div>
          </div>

      </div>
</div>

</template>


<script>

import Screen from './Screen'
export default {
  data(){
    return{

    }
  },
  components:{Screen},
  props:{
        sortScreenData:Object
  },

  mounted:function(){ 
        var $this = this;

        //排序和筛选切换效果
        $('.weui-navbar__item').unbind().bind('click',function(){
            var index = $(this).index();
            $(this).addClass('weui-bar__item--on').siblings().removeClass('weui-bar__item--on');
            $(this).parent().next().find(".weui-tab__bd-item").removeClass('weui-tab__bd-item--active').eq(index).addClass('weui-tab__bd-item--active');

            $this.addLayer();
        })



  },
  activated:function(){
      var $this = this;
       //接收listheader组件的editEvent事件
        eventBus.$on('editEvent',function(data){
            
            if(data == 'edit'){
                $('.weui-navbar__item').addClass('disable');
            }else{
                $('.weui-navbar__item').removeClass('disable');
            }
        })   
        
        eventBus.$on('hiddenLayerEvent',function(){
            $this.removeLayer();
        })

        //重置排序条件
        eventBus.$on('resetSort',function(){ 
            $('.sort-item').removeClass('sort-item-text-active');
            //通知列表组件清除排序条件
            eventBus.$emit('clearSort');
        })
  },
  methods:{

        //增加遮罩层
        addLayer:function(){
            var $this = this;
            if($('#sortScreenLayer').length == 0 ){
                $("<div id='sortScreenLayer' class='sortScreenLayer'></div>").appendTo($('.sortSceen').parent('div'));
                $('#sortScreenLayer').on("touchmove", function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                });
                $('#sortScreenLayer').on("click", function(e) {
                  e.stopPropagation();
                  e.preventDefault();
                  $this.removeLayer();
                });
            }
            eventBus.$emit('headerEvent','ban');
        },

        //移除层
        removeLayer:function(){
              if($('#sortScreenLayer').length >0 ){
                  $('.weui-navbar__item').removeClass('weui-bar__item--on');
                  $(".weui-tab__bd-item").removeClass('weui-tab__bd-item--active');
                  $('#sortScreenLayer').remove();
              }

              eventBus.$emit('headerEvent','allow');
        },

        //条件排序
        sort:function(e){
            var ele = e.target;
            $(ele).closest('.sort-item').addClass('sort-item-text-active').siblings().removeClass('sort-item-text-active');
            var data = {
              'SortOrder':$(ele).attr('data-sortOrder'),
              'SortName':$(ele).attr('data-sortName')
            }
            this.sortStart(data);
        },
        
        sortStart:function(data){
            eventBus.$emit('sortEvent',data);
            this.removeLayer();
        }





  },
  deactivated:function(){
      eventBus.$off('editEvent');
      eventBus.$off('hiddenLayerEvent');
      eventBus.$off('resetSort');
  },

}
</script>


<style>
.sortSceen{position: fixed;top:0.88rem;left:0;width:100%;z-index:10;zoom: 1;}

.sortScreenLayer{
    position: fixed;z-index:1;
    top: 0.88rem;right: 0;left: 0;bottom: 0;
    background: rgba(0,0,0,0.5);}
</style>
<style scoped>
.weui-tab{z-index:100;}
.weui-navbar{position:static;height:0.9rem;}
.weui-navbar:after,.weui-navbar__item:after{border:0;}
.weui-navbar__item{border-bottom: 1px solid #7f7f7f;font-size: 0.28rem;color:#595959;font-weight:bold;}
.weui-navbar__item span,.weui-navbar__item i::before{vertical-align:middle;}
.weui-bar__item--on{border-color:#3cadf9;color:#3cadf9; }

.weui-tab__bd{
    width:100%;height: auto;
  padding-top:0px!important;
}
.weui-tab__bd-item{height:auto;background:#fff;}
.sort-item{font-size:0.25rem;padding-left:15px;}
.sort-item-text{padding:13px 15px 13px 0px;position: relative;}
.sort-item-text:after {
    content: " ";position: absolute;
    left: 0;bottom: 0;right: 0;height: 1px;
    border-bottom: 1px solid #7f7f7f;color: #7f7f7f;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);z-index: 2;
}
.sort-item-text-active{color:#3CADF9;}



</style>
