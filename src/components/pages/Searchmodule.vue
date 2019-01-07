<template>
<div>
    <my-header class="header" :title="title"></my-header>

    <div id="nav" class="nav">
        <div @click="switchPage(0,$event)" class="nav-item f16 active-item">{{searchData[0].module}}</div>
        <div @click="switchPage(1,$event)" class="nav-item f16" >{{searchData[1].module}}</div>
        <div class="nav-border"></div>
    </div>


    <div class="search-box">
          <search-items :key="searchData[0].module" v-if="showPage == 0" :searchData="searchData[0].searchItems"></search-items>

          <search-items :key="searchData[1].module" v-if="showPage == 1" :searchData="searchData[1].searchItems"></search-items>
    </div>

    <div class="anniu">
        <div class="clear-btn">Clear</div>
        <div class="sure-btn">OK</div>
    </div>
</div>
</template>
<script>
import Header from '../common/Header'
import Searchitems from '../common/Searchitems'
export default {
    components: {
      'my-header': Header,
      'search-items':Searchitems
    },
    data(){
        return {
            title:'Search',
            searchData:[],
            // selectView:'',
            dataFilter:[],
            showPage:0,
        }
    },
    created () {
        this.searchData = this.$route.query.dataModule;

        // this.selectView = this.$route.query.selectView;
        this.dataFilter = this.$route.query.dataFilter;
    },
    mounted:function(){

        //用common中的方法初始化
        initial.initPicker();
        initial.initDatePicker();

        this.changePos();
    },
    activated:function(){

        this.handleSelectlist();
    },
    methods:{
        //处理从selectlist返回来的值
        handleSelectlist:function(){
            var _self = this;
            var sData = eventBus.selectListData;
                if(!tool.isNullOrEmptyObject(sData)){

                    var el = $('.search-rows').find('.selectList[data-field="'+ sData.field +'"]');
                    console.log(el.length);
                    var valueDiv = el.closest('.item-row-flex').next();
                    valueDiv.html('');

                    $.each(sData.value,function(index,item){
                        valueDiv.append('<span style="display:inline-block;padding:0 5px 5px 0;" data-value='+ item.value +'>'+ item.text +'</span>');
                    })
                    eventBus.selectListData = null;
                }
        },
        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            // _self.swiper.slideTo(num, 500, false);
            _self.changePos();
            _self.showPage = num;
        },
        //table底部横条过渡效果
        changePos:function() {
            this.$nextTick(function(){
                var activePos = $('.nav .active-item').position();
                $('.nav-border').stop().css({
                    left: activePos.left,
                    width: $('.nav .active-item').width()
                });
            })
        },
    }
}
</script>
<style scoped>
.header{position:fixed;width:100%;left:0;top:0;}
.search-box{
  position:fixed;top:calc(0.88rem + 40px);bottom:0.9rem;left:0;right:0;overflow-y: scroll;
  -webkit-overflow-scrolling:touch;
}


/*table切换*/
.nav{position: fixed;top:0.88rem;left:0;z-index: 99;
  width:100%;height:40px;background: #fff;
  -webkit-box-orient:horizontal;-moz-box-orient:horizontal;box-orient:horizontal;
  display:-moz-box;
  display:-webkit-box;
  display:box;
  box-sizing: border-box;
  border-bottom:1px solid #ccc;
}
.nav-item{
  line-height:38px;
  margin-bottom: -1px;
  text-align: center;
  /* padding:0 5px; */
  box-sizing: border-box;
  -moz-box-flex:3;
  -webkit-box-flex:3;
  box-flex:3;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  word-break: break-all;
  box-sizing: border-box;
  width:50%;
}
.active-item{color:#009979;}
.nav-border{
  position: absolute;
  bottom: 0;
  left: 0;
  background: #009979;
  width: auto;
  height: 2px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}


/*底部按钮*/
.anniu {
  position:fixed;
  width: 100%;
  height:0.9rem;
  line-height:0.9rem;
  bottom: 0;
  font-size: 0.25rem;
  left:0;
  z-index: 3;
  display: flex;
}

.clear-btn,
.sure-btn {
  flex: 1;
  background-color: #F2F2F2;
  color: #000000;
  text-align: center;
}
.sure-btn {
  background-color: #FF5A21;
  color: #FFFFFF;
}
</style>
