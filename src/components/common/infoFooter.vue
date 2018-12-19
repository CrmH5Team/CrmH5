<template>

    <form class="input-group addpageHidden">
        <div class="input-row">
            <label><span class="lanText" data-lanid="158_创建时间"></span></label>
            <p><input type="text" readonly="readonly" v-model="createdtime" class="ItemVal footerInput" data-field="createdtime" ></p>
        </div>
        <div class="input-row">
            <label><span class="lanText" data-lanid="159_修改时间"></span></label>
            <p><input type="text" readonly="readonly" v-model="modifiedtime" class="ItemVal footerInput" data-field="modifiedtime" ></p>
        </div>
        <div class="input-row">
            <label><span class="lanText" data-lanid="160_最后修订者"></span></label>
            <p><input type="text" readonly="readonly" v-model="modifiedby.text" class="ItemSelectList footerInput" data-disabled="disabled" data-field="modifiedby" ></p>
        </div>
    </form>
    
</template>


<script>
export default {

    mounted:function(){
        lanTool.updateLanVersion();
        $('.input-row .footerInput').on('click',function(){
            document.activeElement.blur();
        })
    },
    props:['createdtime','modifiedtime','modifiedby']
    
    
}
</script>









<style scoped>

.input-group {position: relative;padding: 0;border: 0;background-color: #fff;margin-bottom:10px;}
.input-group:after { position: absolute;right: 0;bottom: 0;left: 0;height: 1px;content: '';
    -webkit-transform: scaleY(.5);transform: scaleY(.5);background-color: #c8c7cc;
}
.input-row{position:relative;}
.input-row label{float: none;padding: 11px 15px 0;
    width: 100%;color: #898989;font-size: 0.24rem;display: block;position: relative;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;line-height: 1.1;
}
.input-row p {
    min-height: 40px;line-height: 40px;font-size: 0.28rem;
    color: #000;padding: 0 15px;margin-bottom: 0;
}
.input-row input {
    width: 100%;
    outline: none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    background-color: transparent;
    display: block;
    margin-left: 0;
    overflow: hidden;
    position: relative;
    left: -2px;
    height:40px;
    line-height: 24px;
    border:0;
    margin-right:11px;
    padding:8px 0;
    box-sizing: border-box;
    padding-right: 30px;
}
.input-group .input-row:after {
    position: absolute;
    right: 0;bottom: 0;left: 15px;
    height: 1px;content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
</style>
