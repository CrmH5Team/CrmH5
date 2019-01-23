<template>
<div>
    <my-header class="header" :title="title"></my-header>

    <div class="page-content">

        <div class="input-box">
            <input class="input lanInputPlaceHolder" type="text" data-lanid="854_输入关键字" />
        </div>

        <div class="tips f14 lanText" data-lanid="855_您要搜索什么？"></div>
        <div class="items">
              <div
                class="item left"
                @click="choiceModule($event)"
                v-for="item in module">
                  <label class="radios-label">
                      <input type="radio" :name="item.value" :value="item.value" v-model="radioValue"/><i class="radios"></i><span class="text f14">{{item.text}}</span>
                  </label>
              </div>
        </div>

    </div>

    <div class="anniu f16">
        <!-- <div class="clear-btn">Clear</div> -->
        <div class="sure-btn lanText" data-lanid="941_确定"></div>
    </div>


</div>
</template>



<script>

// require('swiper/dist/css/swiper.css')
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import Searchitems from '../common/Searchitems'
import Header from '../common/Header'

export default {
    components: {
      // swiper,
      // swiperSlide,
      'my-header': Header,
      // 'search-items':Searchitems
    },
    data() {
        return {
            title: lanTool.lanContent('780_搜索'),

            module:[
                {text:'Meeting',value:'Meeting'},
                {text:'Trip',value:'Trip'},
                {text:'Contacts',value:'Contacts'},
                {text:'Organizations',value:'Organizations'},
                {text:'Deal Pipeline',value:'DealPipeline'},
                {text:'Opportunities',value:'Opportunities'},
            ],
            radioValue:'Meeting',

        }
    },
    mounted:function(){
        var _self = this;

    },
    activated:function(){
         lanTool.updateLanVersion();
         this.title = lanTool.lanContent('780_搜索');
        // this.handleSelectlist();
    },
    methods:{
        //选择搜索模块
        choiceModule:function(e){
            var el = e.target;
            $(el).find('span').show()

        }



    }




}
</script>

<style scoped>
/* @import "../../assets/css/pages/search.css"; */
.header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}
.page-content{padding-top: 0.88rem;}



.input-box{border-bottom:1px solid beige;}
.input{height: 36px;box-sizing: border-box;line-height: 16px;padding:10px 10px;
width: 100%;border: 0;outline: none;}

.tips{padding:0 10px;line-height:36px;color: rgb(102, 102, 102);}
.item{width: 50%;box-sizing: border-box;padding-left: 10px;line-height: 36px;vertical-align: middle;}
.item .text{margin-left: 10px;}
.item label{display:inline-block;}

.anniu {
  position:fixed;
  width: 100%;
  height:0.9rem;
  line-height:0.9rem;
  bottom: 0;
  left:0;
  z-index: 3;
  display: flex;
}
.clear-btn,.sure-btn {
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

