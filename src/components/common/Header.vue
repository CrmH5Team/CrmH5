<template>

<div>
    <header class="mui-bar mui-bar-nav">

          <a v-if="isMain" @click="showRightPanel" class="calcfont calc-yonghu1 right"></a>
          <a v-if="isMain" @click="goNotification" class="calcfont calc-mailbox right">
              <span v-show="Number(messageCount)>=1" class="count">{{messageCount}}</span>
          </a>
          <a v-else @click="back" class="calcfont calc-fanhui left" id="back"></a>



          <h1 class="mui-title f18">{{title}}</h1>
    </header>
</div>

</template>
<script>

export default {
    data(){
        return {
            isMain:false, //是否首页
        }
    },
    props:['title',"messageCount"],
    created:function(){
        var url = this.$route.path;
        if(url == '/Index'|| url == '/index'){
            this.isMain = true;
        }
    },
    mounted:function(){
      
    },
    activated: function () {
        lanTool.updateLanVersion();
    },
    methods:{
        back:function(){
            console.log("back......");
            this.$router.back(-1);
        },
        //首页就显示侧滑
        showRightPanel:function(){
            eventBus.$emit('showIndexRightPanelEvent');
        },
        goNotification:function(){
            this.$router.push('/notification');
        }
    }
}
</script>

<style scoped>
header{position: relative;}
header.mui-bar {
  /* line-height: 0.2rem; */
  background: #f8f2dc;
  overflow: hidden;
}
.mui-title {
	right: 40px;
    left: 40px;
    display: inline-block;
    overflow: hidden;
    width: auto;
    /* font-size: 0.34rem; */
    margin: 0;
    text-overflow: ellipsis;
    position: absolute;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    font-weight: 400;
    line-height: 0.88rem;
}
.calcfont{
    font-size: 0.48rem;
    text-align: center;
    padding: 0.2rem 10px;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
}
.calc-liebiao,.calc-fanhui{
    /* margin-right: -10px; */
    /* margin-left: -10px; */
    /* padding-right: 10px;
    padding-left: 10px; */
}
.calc-mailbox{margin-right:-10px;z-index: 10;}
/* .calc-mailbox::before{vertical-align:middle;} */
.calc-liebiao{
  font-size: 0.6rem;
  padding: 0.15rem 10px;
}

header .mui-title,
header a {
	color: #333;
}

.count{
  background:#ff0000;
  color:#fff;padding:3px;
  position:absolute;
  top:2px;right:2px;
  display: inline-block;min-width:12px;min-height: 12px;font-size: 10px;
  border-radius: 50%;}


</style>