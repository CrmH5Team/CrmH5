<template>
<div class="nothing-div">
  <icon name="nothing" scale="10"></icon>
  <div class="f12 nothing-text lanText" data-lanid="937_没有数据" >NO DATA</div>
</div>
</template>

<script>
export default {
    mounted:function(){
      lanTool.updateLanVersion();
    },
    activated:function(){
        lanTool.updateLanVersion();
    },
}
</script>

<style scoped>
.nothing-div{line-height: 1.2;text-align: center;color:#ccc;}
.nothing-img{width: 1.3rem;margin: 0 auto;}
.nothing-text{padding-top: 0.1rem;}

</style>
