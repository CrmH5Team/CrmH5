<template>
<div>
    <my-header class="header" :title="title"></my-header>

    <div class="search-box">
          <search-items :searchData="searchData"></search-items>
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
            selectView:'',
            dataFilter:[]
        }
    },
    created () {
        this.searchData = this.$route.query.dataModule;
        this.selectView = this.$route.query.selectView;
        this.dataFilter = this.$route.query.dataFilter;
    },
    mounted:function(){

        //用common中的方法初始化
        initial.initPicker();
        initial.initDatePicker();
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
    }
}
</script>
<style scoped>
.header{position:fixed;width:100%;left:0;top:0;}
.search-box{
  position:fixed;top:0.88rem;bottom:0.9rem;left:0;right:0;overflow-y: scroll;
  -webkit-overflow-scrolling:touch;
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
