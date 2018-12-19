<template>
    <div class="picker-div" :id="field" >
        <input 
        class="picker ItemVal" 
        type="text"  
        readonly="readonly" 
        :placeholder="placeholder||''" 
        :data-field="field"
        onfocus="this.blur()">
    </div>
</template>

<script>

export default {
    data(){
        return{
          text:'', 
          value:'',
          items:[], 
          showTextArray:[],
        }
    },
    props:['field','data','placeholder','title'],
 
    created:function(){  
        
        var $this = this;
        if($this.field === undefined) return ;
        $this.items = allTypeList.QueryChildItemsByPTypeValue($this.field);
        if($this.items.length > 0){
            $.each($this.items,function(index,value){
                $this.showTextArray.push(value.text);
            })
        }  

        //监听初始化事件
        eventBus.$on('initPickerEvent',function(isadd){ 

            //有默认值
            if(!isadd && ($this.data != '') && ($this.items.length > 0) ){
                $.each($this.items,function(index,item){
                
                    if($this.data == item.value){
                        $this.value = item.value;
                        $this.text = item.text;
                    }   
                }) 
                $('input[data-field='+ $this.field +']').val($this.text);
            }else{
                $('input[data-field='+ $this.field +']').val('');
                $this.text = ''; 
                $this.value = '';
            }
            
            $this.initPicker();  
        });
        
    },
    mounted:function(){ 
    },
    activated:function(){  
    },
    methods:{

        initPicker:function(){  

            var $this = this;

            var placeholder = $('#'+$this.field ).find('input').prop('placeholder');
            var value = $('#'+$this.field ).find('input').val() || '';
            var dataField = $('#'+$this.field ).find('input').attr('data-field');
            $('#'+$this.field ).html('').append('<input class="picker ItemVal" type="text" readonly="readonly"       placeholder="'+ placeholder +'" data-field="'+ dataField +'" value="'+ value +'">');

            

            var el = $('input[data-field='+ $this.field +']');
            el.picker({
                title:'',
                inputReadOnly:true,
                toolbarCloseText:lanTool.lanContent('191_确认'),
                toolbarCancleText:lanTool.lanContent('199_取消'),
                cols:[
                    {
                        textAlign:'center',
                        values:$this.showTextArray
                    },
                ],
                onOpen:function(){
                    $this.$nextTick(function(){
                        //给清除按钮绑定事件    
                        $('.toolbar-inner .clean-picker').unbind().bind('click',function(){
                            $('input[data-field='+ $this.field +']').val('');
                            $this.text = ''; 
                            $this.value = '';
                            $this.initPicker();

                            $this.setItemValue();
                        })
                    })
                    
                },
                onChange:function(){

                },
                onClose:function(){
                    $this.$nextTick(function(){
                        if(el.val() === '') return ;
                        $this.setItemValue(el.val());
                    })                    
                }
            })

        },
        
        //设置用户选择的选项
        setItemValue(text){ 
            var $this = this;
            var obj = {
                field:$this.field,
                value:{
                    text:'',
                    value:''
                }
            }

            if(text === undefined){ 
                eventBus.$emit('updataPicker',obj);
                return false;
            }else{  
                $.each($this.items,function(index,item){
                        if(text == item.text){
                            $this.value = item.value;
                            $this.text = item.text;
                            obj.value.text = item.text;
                            obj.value.value = item.value;
                            eventBus.$emit('updataPicker',obj);
                        }  
                })
                return false;
            }

            
            

        },
    },
     beforeDestroy () {
        eventBus.$off('initPickerEvent');
    },

}
</script>


