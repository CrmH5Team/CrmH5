<template>

<div class="search-rows f14">

      <div v-for="item in searchData" class="item-row">
          <!-- 手动输入 -->
          <div v-if="item.type === 'input'">
              <input class="f14 search-input" type="text" :placeholder="item.text"/>
          </div>
          <div v-else>
              <div class="item-row-flex">
                  <span class="calcfont calc-you f18"></span>
                  <div class="row-cell-bd">{{item.text}}</div>

                  <div v-if="item.type==='selectlist'" class="selectList row-cell-ft" :data-field="item.field" :data-vualu="item.value"></div>

                  <div v-else-if="item.type==='picker'" class="picker row-cell-ft" :data-field="item.field" :data-val="item.value" :id="item.id">{{item.value}}</div>

                  <div v-else-if="item.type==='datepicker'" class="datepicker row-cell-ft" :data-field="item.field" :data-val="item.value" :id="item.id" data-minute="false">{{item.value}}</div>

              </div>
              <div class="select-list-value"></div>
          </div>
      </div>

</div>

</template>




<script>
import Datetimepicker from './Datetimepicker'
import Picker from './Picker'

export default {
    components:{
        'picker':Picker,
        'datetime-picker':Datetimepicker
    },
    data(){
        return {

        }
    },
    props:['searchData'],

    mounted:function(){


    },

    methods: {
        //点击调起列表组件
        selectList:function(event){
            var self = this,
            ele = event.target,
            url = $(ele).attr('data-url') || '',
            field = $(ele).attr('data-field') || '';
            // var ds = {};
            // $.each(this.screenData,function(index,item){
            //     $.each(item.comp,function(i,v){
            //         if((v.field === field) && (v.data != undefined) ){
            //             ds = v.data;
            //         }
            //     })
            // })
            var parameter = {
                'field':field,
                'url':url,
                'title':$(ele).prop('placeholder'),
                'data':{}
            };
            self.$router.push({
                            path: '/selectlist',
                            query: parameter
            })
        },
    }


}
</script>










<style scoped>
.search-rows{background: #fff;}
.item-row{padding:0px 15px;box-sizing: border-box;line-height: 40px;
border-bottom: 1px solid rgba(60,173,249,.2);}
.item-row .calcfont{color:#cdcdcd;position:absolute;top:0;right:-6px;}

.search-input{
  width: 100%;
  outline: 0 none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  background-color: transparent;
  display: block;
  margin: 0;
  overflow: hidden;
  position: relative;
  height:40px;
  line-height: 20px;
  border: 0;
  padding:10px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 0.25rem;
}

.item-row-flex{
    position: relative;
    line-height: 40px;
    display:-webkit-box;
    display:-moz-box;
    display:box;
    -webkit-box-orient:horizontal;
    -moz-box-orient:horizontal;
    box-orient:horizontal;
}
.row-cell-bd{
  width:40%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.row-cell-ft{
  width:60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;color:rgb(102, 102, 102);
  text-align: right;padding-right:10px;
}
.select-list-value{
   color:rgb(102, 102, 102);text-align: right;padding-right:10px;display: none;
}

.selectList{width:100%;height:40px;border:0;outline: none;}

</style>
