<!--  列表通用组件 -->
<template>
<div class="componetlist">

    <div v-show="noData" class="noDatabj"></div>
    <div v-show="!noData" id="refresh" class="refresh_box">



    </div>

</div>
</template>



<script>

export default {
  data (){
      return {

          count : 1, //页码
          Pagecount : 0, //总页数
          SortOrder : '',
          SortName : '',
          QueryCondiction : [],

          enablePullUpLoad: true, //是否可以滚动加载

          rowData:[],  //列表数据
          noData:false, //没有数据显示

          isLoading:false, //滚动加载的状态(是否是正在加载中)
          isLastPage:false, //是否加载到最后一页
          isRefresh:false,  //是否禁止下来刷新功能

          id:[],  //记录选择的id
          componetlistHeight:0, //滚动列表父级的高度

          scrollTop:0, //记录滚动条的位置

      }
  },
  props: {
      listData:Object
  },

  created:function(){
      this.scrollTop = 0;
  },

  mounted:function(){

        lanTool.updateLanVersion();
        var $this = this;

        $this.$nextTick(function(){
            $this.componetlistHeight = $('.componetlist').height();
        })



  },

  activated:function(){
      var $this = this;




  },


  methods:{




  },
  deactivated:function(){


  },


}
</script>







<style scoped>
.componetlist{/*height:calc(100% - 1.78rem);*/overflow: hidden;position: fixed;left:0;top:1.78rem;bottom:0;right:0;}
.noDatabj{
    background:#fff url(../../assets/images/nothing.png) no-repeat center 3.5rem;
    background-size: 2rem auto;
    position:fixed;bottom:0;left:0;right:0;top:1.78rem;}

.refresh_box{height:calc(100% + 50px);overflow-y: scroll;-webkit-overflow-scrolling:touch;}
 /* for Chrome */
.refresh_box::-webkit-scrollbar {
    display: none;
}
.weui-pull-to-refresh__layer div{font-size: 0.2rem;}

/*列表 style*/
.weui-cells{margin-top:0;}
.weui-cells:after{border:0;}

.weui-cell{position: relative;padding: 0 15px;}
.weui-check__label:after {
    content: " ";position: absolute;
    left: 0;bottom: 0;right: 0;height: 1px;
    border-bottom: 1px solid #7f7f7f;color: #7f7f7f;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);z-index: 2;
}
/*列表 style ----end-----*/

.weui-loadmore{margin: 1.2em auto;}

/*---- 底部style -----*/
.EditBot {
    position: fixed;z-index: 9; background:#efeff4; width: 100%;bottom: 0;
    padding: 11px 15px;height: 50px;box-sizing: border-box;display: none;
}
.weui-check:checked + .weui-icon-checked:before{color:#3cadf9!important;}
.EditBot .weui-check__label{position:relative;}
.EditBot .weui-check__label:after {
    border-bottom:none;
    height: 0;
}
.EditBot a {
    color: #fd3f3f;
    font-size: 28px;
    line-height: 28px;
}
</style>


