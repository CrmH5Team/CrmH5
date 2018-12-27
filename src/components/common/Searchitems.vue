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

                  <div v-else-if="item.type==='picker'" class="picker row-cell-ft" :data-field="item.field" :data-val="item.value">{{item.value}}</div>

                  <div v-else-if="item.type==='datepicker'" class="datepicker row-cell-ft" :data-field="item.field" :data-val="item.value" data-minute="false">{{item.value}}</div>

                      <!-- <input
                          @click="selectList"
                          class="selectList"
                          data-url=""
                          data-field=""
                          readonly="readonly" /> -->


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

        // if(this.searchData.length <=0 ) return;

        // this.$nextTick(function(){
        //     //初始化picker组件
        //     eventBus.$emit('initPickerEvent',true);
        //     //初始化DatePicker组件
        //     eventBus.$emit('initDatePickerEvent',true);
        // })
        //this.initPicker();
        this.initDatePicker();


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

        //初始化picker
        initPicker:function(){

            $('.picker').each(function(){
                var _self = $(this);
                var filedName = _self.attr("data-field");
                //写入当前选中的记录
                var valueTemp = _self.attr("data-val") || "";

                //根据字段名查询数据
                var dataArray = allTypeList.QueryChildItemsByPTypeValue(filedName);
                var items = [];
                $.each(dataArray,function(index,item){
                    items.push(item.text);
                });

                _self.picker({
                            jqueryObj:_self,
                            toolbarCloseText:lanTool.lanContent('191_确认'),
                            toolbarCancleText:lanTool.lanContent('199_取消'),
                            value:valueTemp,
                            cols:[
                                {
                                    textAlign:'center',
                                    values:items
                                },
                            ],
                            onOpen:function(data){
                                if(valueTemp != ''){
                                    _self.picker("setValue", [valueTemp]);
                                }
                            },
                            onChange:function(data,value){
                                _self.text(data.value[0]||"");
                                _self.attr('data-val',data.value[0]||"");

                                valueTemp = data.value[0] || "";
                                _self.picker("setValue", data.value);
                            }
                        });

            });


        },

        //初始化datepicker
        initDatePicker:function(){
            var my_self = this;

                $('.datepicker').each(function(index, cur){
                    var _self = $(this);
                    // event.stopPropagation();
                    var filedName = _self.attr("data-field");

                    var showMinute = _self.attr("data-minute");
                    var times = function(){
                        return [];
                    };
                    if(showMinute === 'true'){
                          times = function(){
                              return [  // 自定义的时间
                                  {
                                  values: (function () {
                                      var hours = [];
                                      for (var i=0; i<24; i++) hours.push(my_self.formatNumber(i));
                                      return hours;
                                  })()
                                  },
                                  {
                                  divider: true,  // 这是一个分隔符
                                  content: ':'
                                  },
                                  {
                                  values: (function () {
                                      var minutes = [];
                                      for (var i=0; i<60; i++) minutes.push(my_self.formatNumber(i));
                                      return minutes;
                                  })()
                                  }
                              ];
                          };
                    }

                    //写入当前选中的记录
                    var valueTemp = _self.attr("data-val") || "";

                    _self.datetimePicker({
                        toolbarCloseText:lanTool.lanContent('191_确认'),
                        toolbarCancleText:lanTool.lanContent('199_取消'),
                        years:my_self.yearArray(50),
                        value:valueTemp,
                        times: times,
                        onChange:function(picker, values, displayValues){
                            var value = my_self.returndateString(picker.value);
                            _self.text(value);
                            _self.attr('data-vualu',value)
                        }
                    })



                })


        },

        formatNumber:function (n) {
            return n < 10 ? "0" + n : n;
        },

        returndateString:function(arr){
            if(arr.length<=0 ) return;
            if(arr.length == 3){
              return arr[0]+'-'+arr[1]+'-'+arr[2];
            }else if(arr.length == 5){
              return arr[0]+'-'+arr[1]+'-'+arr[2]+' '+arr[3]+':'+arr[4];
            }
        },
        //返回 从当前年份一直往后的 n 年的年份数组 n默认为10
        yearArray:function(n){
              if(n == undefined || n == null) n = 10;

              var currentYear = new Date().getFullYear();
              var arr = [];
              for(var i=0 ; i<n ; i++){
                  arr.push(currentYear + i);
              }
              return arr;
        }




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
