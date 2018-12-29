<!--  列表通用组件 -->
<template>
<div>
  <div v-if="groupData.length<=0" class="noDatabj"></div>
  <div v-else id="page-content" class="page-content">

        <div v-for="item in groupData" class="group-div">
            <div class="date-div" @click="groupToggle($event)">
                <span class="calcfont" :class="item.iconClass"></span>
                <span class="group-name">{{item.groupName}}</span>
                <span class="right">({{item.count}})</span>
            </div>
            <div class="occupy-div"></div>

            <div class="group-item-list">
                <slot></slot>
            </div>
        </div>


  </div>
</div>
</template>



<script>

export default {
  data (){
      return {
          noData:false,
      }
  },
  props: ['groupData'],
  created:function(){

  },

  mounted:function(){
      lanTool.updateLanVersion();

      var headerH = parseFloat($('header').innerHeight());
          $('#page-content').scroll(function(){
              if($('.group-div').length <= 0) return ;

              $('.group-div').each(function(){
                if($(this).position().top <= 0 ){

                    if(tool.getSystem() === 'ios'){
                        $(this).find(".date-div").addClass('sticky').css({"top": '0px'});
                    }else{
                        $(this).find('.date-div').css({"position":"fixed","top": headerH + 'px'});
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

  activated:function(){
      var $this = this;

  },


  methods:{
      //点击分组收起展开
      groupToggle:function(e){
          var el = e.target;

          if($(el).hasClass('open')){
              $(el).removeClass('open').siblings('.group-item-list').slideUp(500);
          }else{
              $(el).addClass('open').siblings('.group-item-list').slideDown(500);
          }
      },

  },
  deactivated:function(){


  },


}
</script>







<style scoped>

.page-content{position:fixed;top:0.88rem;left:0;right:0;bottom:0;overflow-y:scroll;
-webkit-overflow-scrolling:touch;}
.group-div{border-bottom:1px solid #fff;}
.date-div{
  height:36px;line-height:36px;background:#e9cfae;padding:0 10px;font-size: 12px;
  width: 100%;color:#000;
  box-sizing: border-box;
  z-index: 99;
}
.item-stars-icon{display: inline-block;width: 0.6rem;height:0.6rem;line-height:0.6rem;text-align:center;position: absolute;top:8px;left:0.2rem;font-size:0.5rem;color:#ccc;}
.calc-shoucang{color:#ff5a21}
.date-div .calcfont{color:#ff5a21;margin-right:8px;}
.group-name{font-size: 0.3rem;}
.occupy-div{height:30px;display:none;}

.group-item-list{display: none;}



.noDatabj{
    background:#fff url(../../assets/images/nothing.png) no-repeat center 3.5rem;
    background-size: 2rem auto;
    position:fixed;bottom:0;left:0;right:0;top:0.88rem;}

</style>


