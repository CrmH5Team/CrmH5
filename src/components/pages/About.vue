<template>
 <div>

    <Header :title="title"></Header>

    <div class="content">
        <div class="versions">
            <img class="versionsImg" src="../../assets/images/1024_1024.png"/>
            <div class="versionsLab">CALC App</div>
        </div>

        <!-- <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                <p>cell standard</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
        </div> -->
    </div>

 </div>    


</template>

<script>
import Header from '../common/Header'
export default {
    components:{Header},
    data(){
        return{
            title:lanTool.lanContent('265_关于CALC'),
        }
    },
    methods:{
        back:function(){
            this.$router.back(-1);
        },
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
    font-size: 0.34rem; margin: 0; text-overflow: ellipsis;position: absolute;
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



div.versions {
    padding: 0.4rem;
}
.versionsImg {
    position: relative;
    height: 1.2rem;width: 1.2rem;left: 50%;
    border-radius: 0.2rem;
    margin-left: -0.6rem;
}
.versionsLab {
    text-align: center;font-size: 0.28rem;color: #595959;padding: 0.3rem 0;
}

.mui-table-view {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
}
.mui-table-view:before {
    position: absolute;
    right: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
    top: -1px;
}
.weui-cells{margin-top: 0;}


</style>
