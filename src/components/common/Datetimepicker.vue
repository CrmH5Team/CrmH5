<template>
    <div class="datetime-picker-div" :id="field">
        <input 
        type="text" 
        class='ItemValPopPicker datetimePicker' 
        :placeholder="placeholder||''" 
        :data-field="field"
        readonly="readonly"
        onfocus="this.blur()"
        />
    </div>
</template>

<script>

export default {
    data(){
        return{
            value:'',
            datePicker:null,
        }
    },
    props:['field','data','placeholder','minute'],
    
    created:function(){  
        
        var $this = this;
        if($this.field === undefined) return ;

        //监听初始化事件
        eventBus.$on('initDatePickerEvent',function(isadd){

           //有默认值
            if(!isadd && ($this.data != '') ){
                $this.value = $this.data;
                $('input[data-field='+ $this.field +']').val($this.value);
            }else{
                $('input[data-field='+ $this.field +']').val(''); 
                $this.value = '';
            }

            $this.initDatePick();  
        });
    },

    methods:{
        
        initDatePick:function(){
                var $this = this;

                var placeholder = $('#'+$this.field ).find('input').prop('placeholder');
                var value = $('#'+$this.field ).find('input').val() || '';
                var dataField = $('#'+$this.field ).find('input').attr('data-field');
                    // value = value + ' ';
                var times = function(){
                    return [];
                };
                // var datetimeSplit = " ";
                if($this.minute != undefined){

                    if(value) value = value.substring(0,value.length-3);

                    times = function(){
                        return [  // 自定义的时间
                            {
                            values: (function () {
                                var hours = [];
                                for (var i=0; i<24; i++) hours.push($this.formatNumber(i));
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
                                for (var i=0; i<60; i++) minutes.push($this.formatNumber(i));
                                return minutes;
                            })()
                            }
                        ];
                    }; 
                }
            
                $('#'+$this.field ).html('').append('<input class="ItemValPopPicker datetimePicker" type="text" readonly="readonly" placeholder="'+ placeholder +'" data-field="'+ dataField +'" value="'+ value +'" >');
                var el = $('input[data-field='+ $this.field +']');
                $this.picker = el.datetimePicker({
                    title: '', 
                    // value: value,
                    toolbarCloseText:lanTool.lanContent('191_确认'),
                    toolbarCancleText:lanTool.lanContent('199_取消'),
                    years:this.yearArray(50),
                    times: times,
                    onOpen:function(){
                        $this.$nextTick(function(){ 
                            //给清除按钮绑定事件    
                            $('.toolbar-inner .clean-picker').unbind().bind('click',function(){

                                el.val('');
                                $this.value = '';
                                $this.initDatePick();

                                $this.returndateString();
                            })
                        })
                    },
                    onChange: function(picker, values, displayValues) {

                    },
                    onClose: function(picker) {
                        $this.$nextTick(function(){ 
                            if(el.val() === '') return ;
                            $this.returndateString(el.val());
                        })
                    },
                });

        },

        formatNumber:function (n) {
            return n < 10 ? "0" + n : n;
        },

        returndateString:function(arr){
            
            var $this = this;
            var obj = {
                field:$this.field,
                value:''
            }

            if(arr === undefined){ 
                eventBus.$emit('updataDatePicker',obj);
                return false;
            }else{  
                obj.value = arr;    
                eventBus.$emit('updataDatePicker',obj);
                return false;
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
    },
    
    beforeDestroy () {
        eventBus.$off('initDatePickerEvent');
    },
   

}
</script>









<style>
.datetime-picker-div{position:relative;z-index:9;}
.datetimePicker{box-sizing: border-box;width: 100%;height:40px;border:0;padding-right:30px;font-size: 0.25rem;
background:none;
outline: none;
-webkit-tap-highlight-color:rgba(0,0,0,0);
}

/* .toolbar .toolbar-inner{height:41px;position:relative;} */
/* .toolbar .picker-button{height:41px;line-height:0.8rem;font-size:0.25rem;} */
/* .toolbar .title{
     font-size:0.25rem;line-height: 0.8rem; 
} */
/* .weui-picker-modal .picker-modal-inner,.weui-picker-modal{height:4rem;} */
/* .weui-picker-modal .picker-item{font-size:0.25rem;} */

</style>
