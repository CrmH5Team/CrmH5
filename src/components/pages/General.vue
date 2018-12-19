<template>
 <div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>
          <h1 class="mui-title lanText" data-lanid="259_通用"></h1>
          <!-- <a class="calcfont calc-guanyu right" ></a> -->
    </header>

    <div class="content">
        
        <div class="weui-cells">
            <a @click="updateCache" class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                <p class="lanText" data-lanid="258_更新缓存"></p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
        </div>

    </div>

 </div>    


</template>

<script>
export default {

    mounted:function(){
        lanTool.updateLanVersion();
    },
    methods:{
        updateCache:function(){
            var $this = this;
            var btnArray = [lanTool.lanContent('262_否'), lanTool.lanContent('263_是')];
            $.confirm(
                lanTool.lanContent('260_确定更新缓存吗？'),
                lanTool.lanContent('261_提示'),
                function(){
                    //yes

					//清缓存，重新查询数据
					tool.clearStoragItem();
					allTypeList.Data = [];
                    lanTool.Data = [];

                    lanTool.waitExcute(false, false, true,function(){
                        allTypeList.Query(false, true);
                        loading.hidden();
                        $this.$router.push('/');
                    });   
                },
                function(){
                    //no    
                },
                btnArray)

        },
        back:function(){
            this.$router.back(-1);
        },

        updataCatch:function(){

        }    


    }, 
    
    destroyed:function(){
        console.log('general:destroyed');
    }
    
}
</script>


<style scoped>
header{position: relative;}
header.mui-bar {
  line-height: 0.2rem;
	background: #3cadf9;}
.mui-title {
	right: 40px;left: 40px;display: inline-block; overflow: hidden; width: auto;
    font-size: 0.38rem; margin: 0; text-overflow: ellipsis;position: absolute;
    padding: 0;text-align: center;white-space: nowrap;line-height: 0.88rem;
}
.calcfont{
    font-size: 0.48rem; width: 0.88rem; text-align: center; padding: 0.2rem 0;
    position: relative; z-index: 20;display: inline-block; text-decoration: none; line-height: 1;
}
.calc-fanhui{
    margin-right: -10px; margin-left: -10px; padding-right: 10px; padding-left: 10px;}
header .mui-title,
header a {
	color: #fff;
}

.weui-cells p{font-size:0.3rem;}
.content .weui-cells{
    border: 1px solid rgb(193,196,197);
    border-left: none;
    border-right: none;
}


</style>
