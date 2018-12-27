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
        }
    }
}
</script>
<style scoped>

.search-box{
  position:fixed;top:0.88rem;bottom:0.9rem;left:0;right:0;overflow-y: scroll;
  -webkit-overflow-scrolling:touch;
}

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
