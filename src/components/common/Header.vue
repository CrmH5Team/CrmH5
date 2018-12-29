<template>

<div>
    <header class="mui-bar mui-bar-nav">

          <a v-if="isMain" @click="showRightPanel" class="calcfont calc-liebiao right"></a>

          <a v-else @click="back" class="calcfont calc-fanhui left" id="back"></a>

          <h1 class="mui-title f18">{{title}}</h1>
    </header>
</div>

</template>
<script>

export default {
    data(){
        return {
            isMain:false, //是否是首页
        }
    },
    props:['title'],
    created:function(){
        var url = this.$route.path;
        if(url == '/Main'|| url == '/main'){
            this.isMain = true;
        }
    },
    mounted:function(){

    },
    methods:{

        back:function(){
            this.$router.back(-1);
        },

        //首页就显示侧滑
        showRightPanel:function(){
            eventBus.$emit('showRightPanelEvent');
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
    width: 0.88rem;
    text-align: center;
    padding: 0.2rem 0;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
}
.calc-liebiao,.calc-fanhui{
    margin-right: -10px;
    margin-left: -10px;
    padding-right: 10px;
    padding-left: 10px;
}
.calc-liebiao{
  /* font-size: 0.7rem; */
}

header .mui-title,
header a {
	color: #333;
}

</style>
