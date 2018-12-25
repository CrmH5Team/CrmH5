<template>

  <div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

          <h1 class="mui-title">{{title}}</h1>

          <a @click="save" class="calcfont calc-gou right" id="save"></a>

      </header>
  </div>

</template>
<script>
import event from './Event.js'
export default {
    data(){
        return {

        }
    },
    props:{
        title:String,
        pageType:String
    },
    mounted:function(){

    },
    methods:{

        //保存动作
        save:function(){
            eventBus.$emit('save');
        },

        back:function(){
            this.$router.back(-1);
        }

    }

}
</script>

<style scoped>
header{position: relative;}
header.mui-bar {
  line-height: 0.2rem;
    background: #3cadf9;
    position:fixed;top:0;left:0;width:100%;
}
.mui-title {
	    right: 40px;
    left: 40px;
    display: inline-block;
    overflow: hidden;
    width: auto;
    font-size: 0.34rem;
    margin: 0;
    text-overflow: ellipsis;
    position: absolute;
    padding: 0;
    text-align: center;
    white-space: nowrap;
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
.calc-fanhui{
    margin-right: -10px;
    margin-left: -10px;
    padding-right: 10px;
    padding-left: 10px;

}
header .mui-title,
header a {
	color: #fff;
}

</style>
