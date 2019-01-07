<template>

  <div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

          <h1 class="mui-title f18">{{title}}</h1>

          <a @click="showRightPanel" class=" calcfont calc-liebiao right" id=""></a>
          <!-- <a @click="addData" class=" calcfont calc-tianjiajiahaowubiankuang right" id="addNew"></a> -->
          <!-- <a @click="editSwitch" class="calcfont calc-bianji1 right" id="editBtn"></a> -->
      </header>
  </div>

</template>









<script>

export default {
    data(){
        return {
            // isCalender:false, //是否是日历的头部
            activeCalendar:false,
            activeCalendarlist:false,
        }
    },
    props:{
        title:String,
    },
    created:function(){

        var url = this.$route.path;


    },
    mounted:function(){
        lanTool.updateLanVersion();



    },
    methods:{

        back:function(){
            var $this = this;

            if($('#sortScreenLayer').length > 0){
                $('#sortScreenLayer').trigger('click');
            }

            if($this.isCalender){
                $this.$router.push('/main');
            }else{
                $this.$router.back(-1);
            }

        },

        showRightPanel:function(){
            eventBus.$emit('showRightPanelEvent');
        }


    },
    beforeDestroy:function(){

    }

}
</script>





<style scoped>

header{
    /* position:fixed;width:100%;top:0;left:0;z-index: 99; */
    }
header.mui-bar {
  overflow: hidden;
  background: #f8f2dc;
}
.mui-title {
    right: 40px;
    left: 40px;
    display: inline-block;
    overflow: hidden;
    width: auto;
    margin: 0;
    text-overflow: ellipsis;
    position: absolute;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    font-weight: 400;
    line-height: .88rem;
}
.calcfont{
    font-size: 0.48rem;text-align: center;
    padding: 0.2rem 10px; position: relative; z-index: 20;
    display: inline-block;text-decoration: none; line-height: 1;
}
.calc-tianjiajiahaowubiankuang{
    margin-right: -10px;
}
header .mui-title,
header a {
	color: #333;
}
.calc-liebiao{font-size: 0.6rem;}



</style>
