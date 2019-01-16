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
            dataFilter:[]
        }
    },
    created () {

    },
    mounted:function(){

    },
    activated:function(){
        var _self = this;
        var paramStr = _self.$route.params.paramStr;
        var paramObj = tool.jObject(paramStr);
        //console.log(paramObj);
        if(!tool.isNullOrEmptyObject(paramObj)){
            _self.searchData = paramObj.dataModule;
            _self.dataFilter = paramObj.dataFilter;
        }
    },
    methods:{

        //处理从selectlist返回来的值
        handleSelectlist:function(){
            var _self = this;
            var sData = eventBus.selectListData;
                if(!tool.isNullOrEmptyObject(sData)){

                    var el = $('.search-box').find('.selectList[data-field="'+ sData.field +'"]');
                    var resulterow = el.attr('data-resulterow') || false;
                    if(resulterow){
                        var valueDiv = el.closest('.item-row-flex').next();
                        valueDiv.html('');
                        var val = '';
                        var text = '';
                        $.each(sData.value,function(index,item){
                            // valueDiv.append('<span style="display:inline-block;padding:0 5px 5px 0;" data-value='+ item.value +'>'+ item.text +'</span>');
                            val = val + ',' + item.value;
                            text += ','+item.text;
                        })
                        valueDiv.attr('data-value',val);
                        valueDiv.text(text);

                    }else{
                        el.html('');
                        var val = '';
                        var text = '';
                        $.each(sData.value,function(index,item){
                            // el.append('<span style="display:inline-block;padding-left:5px;" data-value='+ item.value +'>'+ item.text +'</span>');
                            val = val + ',' + item.value;
                            text += ','+item.text;
                        })
                        el.attr('data-value',val);
                        el.text(text);
                    }

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
