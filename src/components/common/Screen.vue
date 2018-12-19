<template>
<div class="my-tab">
    <div class="my-navbar left">
        <a 
        v-for="(item, index) in screenData" 
        v-bind:class="{'my-navbar__item':true,'my-bar__item--on':index==0}"
        >{{item.text}}</a>
    </div>
    <div class="my-tab__bd right">

        <div
        v-for="(item, index) in screenData"
        :class="{'my-tab__bd-item':true,'my-tab__bd-item--active':index==0}"
        >

            <div v-for="com in item.comp" class="my-tab__bd-item__div">
                <div v-if="com.type == 'input'" class="input">
                    <input class="screen-input" type="text" :placeholder="com.placeholder" v-model="com.value">
                </div>

                <div v-if="com.type == 'selectlist'" class="selectList-div">
                    <input
                        v-model="com.data.text"
                        @click="selectList"
                        class="selectList"
                        :placeholder="com.placeholder"

                        :data-url="com.queryUrl" 
                        :data-field="com.field"
                        readonly="readonly" >
                    <i class="calcfont arrow-right calc-xiangzuo"></i>
                </div>

                <div v-if="com.type == 'picker'">
                    <Picker
                        :placeholder="com.placeholder"
                        data=""
                        :field="com.field"
                    ></Picker> 
                    <i class="calcfont arrow-right calc-xiangzuo"></i>
                </div>

                <div v-if="com.type == 'datepicker'">
                    <Datetimepicker
                        :placeholder="com.placeholder"
                        data=""
                        :field="com.field"
                        ></Datetimepicker>
                    <i class="calcfont arrow-right calc-xiangzuo"></i>
                </div>


            </div>
        </div>
    </div>
    <div class="clear"></div>

    <div class="button-row">
        <span @click="resetSearch" class="my-btn lanText" data-lanid="190_重置"></span> 
        <span @click="confirm" class="my-btn confirm-btn lanText" data-lanid="191_确认"></span>
    </div>
</div>
</template>


<script>

import Datetimepicker from './Datetimepicker'
import Picker from './Picker'
// import eventBus from './Event';

export default {
    components:{
        // Selectlist,
        Datetimepicker,Picker},
    data(){
        return {
            QueryCondiction:[],//查询条件
            isAdd:true,
            /*
            screenData:[
                {
                    field:'potentialname',
                    queryType:'string',
                    text:'销售机会',
                    comp:[
                        {
                            type:'input',
                            field:'potentialname',
                            placeholder:'请输入',
                            value:'',
                        }
                    ]
                },                
                {
                    field:'related_to',
                    queryType:'string',
                    text:'公司名称',
                    comp:[
                        {
                            type:'selectlist',
                            field:'related_to',
                            queryUrl:"Accounts/Query",
                            placeholder:'请输入',
                            data:{
                                text:'',
                                value:''
                            }
                        }
                    ]
                },
                {
                    field:'closingdate',
                    queryType:'string',
                    text:'日期',
                    comp:[
                        {
                            type:'datepicker',
                            field:'stardate',
                            placeholder:'请输入开始时间',
                            value:''
                        },
                        {
                            type:'datepicker',
                            field:'enddate',
                            placeholder:'请输入结束时间',
                            value:''
                        },
                    ]
                },
                {
                    field:'eventstatus',
                    queryType:'string',
                    text:lanTool.lanContent('56_状态'),
                    comp:[
                        {
                            type:'picker',
                            field:'eventstatus',
                            placeholder:lanTool.lanContent('246_请选择状态'),
                            value:''
                        },
                    ]
                } 
            ]*/
  
        }
      
    },
    props:['screenData'],
    created:function(){
        var $this = this;
        //处理Picker组件回传的值
        eventBus.$on('updataPicker',function(data){
            $.each($this.screenData,function(index,item){
                $.each(item.comp,function(i,v){
                    if((v.field === data.field) && (v.value != undefined) ){
                        v.value = data.value.value;
                    }
                })
            }) 
        })

        //处理dataPicker组件回传的值
        eventBus.$on('updataDatePicker',function(data){
            $.each($this.screenData,function(index,item){
                $.each(item.comp,function(i,v){
                    if((v.field === data.field) && (v.value != undefined) ){
                        v.value = data.value;
                    }
                })
            }) 
        })


        //监听清空筛选数据事件
        eventBus.$on('clearScreenData',function(){

            $.each($this.screenData,function(index,item){
                $.each(item.comp,function(i,v){
                    if(v.type === 'input'){
                        v.value = '';
                    }
                    if(v.type === 'selectlist'){
                        v.data.text = '';
                        v.data.value = '';
                    }
                    if(v.type === 'datepicker'){
                        eventBus.$emit('initDatePickerEvent',true);
                    }
                    if(v.type === 'picker'){
                        eventBus.$emit('initPickerEvent',true);
                    }
                })
            })
            $('.my-navbar__item').removeClass('my-bar__item--on').first().addClass('my-bar__item--on');
            $('.my-tab__bd-item').removeClass('my-tab__bd-item--active').first().addClass('my-tab__bd-item--active');
        })
        

        
    },
    mounted:function(){

        //初始化picker,datepicker组件清除数据
        eventBus.$emit('clearDatePickerEvent',true);
        eventBus.$emit('clearEvent',true);

    },
    activated:function(){
        
        //处理Selectlist组件回传的值
        var sData = eventBus.selectListData;
        if(!tool.isNullOrEmptyObject(sData)){
            $.each(this.screenData,function(index,item){
                $.each(item.comp,function(i,v){
                    if(v.field === sData.field){
                        v.data = sData.value;
                    }
                })
            }) 
            eventBus.selectListData = null;
        }

        // console.log(this.screenData);
        this.$nextTick(function(){ 
            $(".my-navbar .my-navbar__item").each(function(index){ 
                $(this).click(function(el,index){  
                    var index = $(this).index();
                    $(this).addClass("my-bar__item--on").siblings().removeClass("my-bar__item--on");
                    $('.my-tab__bd-item').eq(index).addClass("my-tab__bd-item--active").siblings().removeClass("my-tab__bd-item--active");
                })
            })
        })

        
    },
    methods:{
        
        //点击调起列表组件
        selectList:function(event){
            var self = this,
            ele = event.target,
            url = $(ele).attr('data-url') || '',
            field = $(ele).attr('data-field') || '';
            var ds = {};
            $.each(this.screenData,function(index,item){
                $.each(item.comp,function(i,v){
                    if((v.field === field) && (v.data != undefined) ){
                        ds = v.data;
                    }
                })
            }) 
            var parameter = {
                'field':field,
                'url':url,
                'title':$(ele).prop('placeholder'),
                'data':ds
            };
            self.$router.push({
                            path: '/selectlist',
                            query: parameter
            })
        },

        //确定操作，通知列表重新请求数据
        confirm:function(){
            var $this = this;
            // console.log($this.screenData);

            //存储开始时间和结束时间
            var startdate = '',
                enddate = '';
            $this.QueryCondiction = [];
            $.each($this.screenData,function(index,item){
                var queryCondictionObject = {};
                queryCondictionObject["Type"] = item.queryType || "string";
                queryCondictionObject["Format"] = "";
                queryCondictionObject["Field"] = item.field || "";
                queryCondictionObject["Relation"] = "and";

                var valueArray = [];
                $.each(item.comp,function(i,val){ 
                    
                    if(val.type === "input" || val.type === "textarea"){
                        if(tool.isNullOrEmptyObject(val.value)) return true;
                        valueArray.push(val.value);
                        queryCondictionObject["Comparison"] = 'like';
                    }else{
                        var componentValue = '';
                        if(val.type === "selectlist"){
                            componentValue = val.data.value || '';
                        }else{
                            componentValue = val.value || '';
                        }
                        if(tool.isNullOrEmptyObject(componentValue)) return true;

                        if(val.field === 'stardate') startdate = componentValue;
                        if(val.field === 'enddate') enddate = componentValue;

                        valueArray.push(componentValue);
                        queryCondictionObject["Comparison"] = '=';
                    }

                })
                if(valueArray.length <= 0) {
                    return true;
                }
                if(valueArray.length > 1) {
                    queryCondictionObject["Comparison"] = "between";
                }

                queryCondictionObject["Value"] = valueArray.join(',');
			    $this.QueryCondiction.push(queryCondictionObject);
            })

            var compareAlert = lanTool.lanContent("296_开始日期不能大于或等于结束日期"),
			    dateEmptyAlert = lanTool.lanContent("297_开始日期或者结束日期不能为空"),
                tips = lanTool.lanContent("299_温馨提示"),
                sure = lanTool.lanContent("300_确定");


            //开始日期或者结束日期其中一个为空，一个不为空
			if((tool.isNullOrEmptyObject(startdate) && !tool.isNullOrEmptyObject(enddate)) || (!tool.isNullOrEmptyObject(startdate) && tool.isNullOrEmptyObject(enddate))) {
				$.alert(dateEmptyAlert, tips, function(){}, lanTool.lanContent("300_确定"));
				return false;
            }
            
            var d1 = new Date(startdate.replace(/\-/g, "\/"));
            var d2 = new Date(enddate.replace(/\-/g, "\/"));


			if((!tool.isNullOrEmptyObject(startdate) && !tool.isNullOrEmptyObject(enddate)) && d1 >= d2) {
				$.alert(compareAlert, tips, function(){}, lanTool.lanContent("300_确定"));
				return false;
            }
            
            //通知Commonlist组件从新获取数据
            eventBus.$emit('screenEvent',$this.QueryCondiction);

            //通知Sortscreen组件隐藏筛选
            eventBus.$emit('hiddenLayerEvent');
            

        },

        //重置筛选条件
        resetSearch:function(){
            var $this = this;
            $this.QueryCondiction = [];
            $.each($this.screenData,function(index,item){
                $.each(item.comp,function(i,val){ 
                    if(val.type != "selectlist"){
                        val.value = '';
                    }else{
                        val.data.text = '';
                        val.data.value = '';                  
                    }
                })
            })

            //通知Commonlist列表组件重新请求数据
            eventBus.$emit('screenEvent',$this.QueryCondiction);

            //通知Sortscreen组件隐藏遮罩层
            eventBus.$emit('hiddenLayerEvent');

            //通知picker,datepicker组件清除数据
            eventBus.$emit('initDatePickerEvent',true);
            eventBus.$emit('initPickerEvent',true);

            $('.my-navbar__item').removeClass('my-bar__item--on').first().addClass('my-bar__item--on');
            $('.my-tab__bd-item').removeClass('my-tab__bd-item--active').first().addClass('my-tab__bd-item--active');

        }


    },
    beforeDestroy:function(){
        eventBus.$off('updataPicker');
        eventBus.$off('updataDatePicker');
        eventBus.$off('clearScreenData');
    }

    
}
</script>



<style scoped>
/*筛选*/
.my-navbar{width:40%;}
.my-tab{background:#fff;}
.my-tab__bd{width:60%;font-size:0.25rem;}
.my-navbar__item{display:block;width:100%;line-height:50px;font-size:0.25rem;
color:inherit;text-align: center;/*background: #c8c7cc;*/}
.my-bar__item--on{color:#007aff;background: #fff;}
.my-tab__bd{line-height:50px;}
.my-tab__bd-item{display:none;}
.my-tab__bd-item--active{display: block;}
.my-tab__bd-item__div{position: relative;height:50px;line-height: 50px;}
.my-tab__bd-item__div:after{
    position: absolute;right: 0;bottom: 0;left:0px;
    height: 1px;content: '';-webkit-transform: scaleY(.5);
    transform: scaleY(.5);background-color: #c8c7cc;
}
.button-row{text-align: right;padding: 10px 15px;position: relative;}
.button-row:after {
    position: absolute;right: 0; top: -1px;
    left: 0;height: 1px; content: ''; -webkit-transform: scaleY(.5);
    transform: scaleY(.5);background-color: #7f7f7f;
}
.my-btn{padding: 6px 12px;display: inline-block;font-size: 14px;font-weight: 400;margin-left: 12px;
    line-height: 1.42;border:1px solid #007aff;color:#007aff;border-radius: 3px;}
.confirm-btn{background:#007aff;color:#fff; }


.arrow-right{position: absolute;bottom:0px;right:15px;color:#7f7f7f;}
.my-tab__bd-item__div .input{padding:5px 0;}
.my-tab__bd-item__div input[type="text"]{
    width: 100%; background-color: transparent; display: block;
    margin-left: 0; overflow: hidden; position: relative;left: -2px; height: 40px;
    line-height: 24px; border: 0; margin-right: 11px;padding: 8px 0;-webkit-box-sizing: border-box;
    box-sizing: border-box; padding-right: 30px;font-size: 0.25rem;
    outline: 0 none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}

</style>
<style>
.selectList-div{padding: 5px 0;}
.selectList-div .selectList{
    width: 100%;  background:none; display: block;
    margin-left: 0; overflow: hidden; position: relative;left: -2px; height: 40px;
    line-height: 24px; border: 0; margin-right: 11px;padding: 8px 0;-webkit-box-sizing: border-box;
    box-sizing: border-box; padding-right:30px; font-size: 0.25rem;
    outline: 0 none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);

}

.selectList-div input[type="text"]{text-align: center;}

</style>

