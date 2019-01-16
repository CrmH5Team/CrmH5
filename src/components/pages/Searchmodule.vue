<template>
<div>
    <my-header class="header" :title="title"></my-header>

    <!-- <div class="nav">
        <div @click="switchPage(0,$event)" class="nav-item f16 active-item">{{searchData[0].module}}</div>
        <div @click="switchPage(1,$event)" class="nav-item f16" >{{searchData[1].module}}</div>
        <div class="nav-border"></div>
    </div> -->


    <div class="search-box">
          <search-items :searchData="searchData"></search-items>

          <!-- <search-items :key="searchData[1].module" v-if="showPage == 1" :searchData="searchData[1].searchItems"></search-items> -->
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
            // showPage:0,
        }
    },
    created () {
        var _self = this;
        var queryParamTemp = _self.$route.params.paramStr;
        var sessionData = tool.jObject(queryParamTemp);
        
        //console.log(sessionData);
        if(!tool.isNullOrEmptyObject(sessionData)){
            _self.searchData = sessionData.dataModule;
            _self.dataFilter = sessionData.dataFilter;
        }
    },
    mounted:function(){


    },
    activated:function(){
        var _self = this;
        var queryParamTemp = _self.$route.params.paramStr;
        var sessionData = tool.jObject(queryParamTemp);
        console.log(sessionData);
        
        if(!tool.isNullOrEmptyObject(sessionData)){
            _self.searchData = sessionData.dataModule;
            _self.dataFilter = sessionData.dataFilter;

            _self.$nextTick(function(){
                //用common中的方法初始化
                initial.initPicker();
                initial.initDatePicker();
            })
        }
        _self.handleSelectlist();
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
