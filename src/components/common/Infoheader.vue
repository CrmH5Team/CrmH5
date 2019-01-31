<template>
<div>
    <header class="mui-bar mui-bar-nav">
        <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

        <h1 class="mui-title f18">{{title}}</h1>

        <!-- 新增状态头部icon显示   -->
        <div v-if="isAddNew" class="leftView right">
            <!-- <a class="calcfont calc-tijiao right" id="tijiao"></a> -->
            <a v-if="!onlyView" @click="save" class="calcfont calc-gou right" id="save"></a>
        </div>
        <!-- 编辑状态头部icon显示   -->
        <div v-else class="leftView right">
            <!-- <a class="calcfont calc-tijiao right" id="tijiao"></a> -->
            <!-- <a v-if="operation && !onlyView" @click="moreClick" class="calcfont calc-gengduo right" id="gengduo"></a> -->
            <a v-if="!onlyView && operation" @click="moreClick" class="calcfont calc-gengduo right" id="gengduo"></a>
            <a v-if="!onlyView" @click="save" class="calcfont calc-gou right" id="save"></a>
            <a v-if="!onlyView && !notDelete" @click="delClick" class="calcfont calc-shanchu right" id="delete"></a>


            <!-- onlyMore只有Opportunitiesinfo文件用到 不传默认为fase  -->
            <!-- <a v-if="onlyMore" @click="moreClick" class="calcfont calc-gengduo right" id="gengduo"></a> -->

        </div>

    </header>
</div>
</template>

<script>
// import event from './Event.js'
// import eventBus from './Event.js';
export default {
    data() {
        return {
            rightPanelFromTypeNew :"",
            rightPanelFromIDNew :"",
        }
    },
    props:{
        title:String,
        isAddNew:Boolean, //是否是新增状态, 父组件不传默认为false
        operation:Boolean, //侧滑是否可操作, 父组件不传默认为false
        onlyView:Boolean, //标志页面只能查看,父组件不传默认为false
        notDelete:Boolean, //控制删除按钮是否显示,父组件不传默认为false（显示）
        // onlyMore:Boolean,   //只有Opportunitiesinfo文件用到 不传默认为fase

        rightPanelFromType:String,
        rightPanelFromID:String
    },
    watch: {
    },
    created:function(){
        var _self = this;
    },
    //props:['title','isAddNew','operation'],
    mounted: function () {

    },
    activated:function(){
        // console.log("onlyView:"+this.onlyView);
        // console.log("type:"+typeof(this.onlyView));
    },
    methods: {

        //保存动作
        save: function () {
            var _self = this;
            _self.$parent.savePageData();
        },
        delClick: function () {
            var _self = this;
            _self.$parent.deleteData();
        },
        moreClick: function () {
            //触发gengduo事件
            eventBus.$emit('gengduoEvent');
        },
        back: function () {
            this.$router.back(-1);
        }
    }
}
</script>

<style scoped>
header {
    position: relative;
}

header.mui-bar {
    line-height: 0.2rem;
    background: #f8f2dc;
}

.leftView {
    position: absolute;
    height: 0.88rem;
    /* width: 2.1rem; */
    right: 0;
    top:0;
}

.mui-title {

    display: inline-block;
    overflow: hidden;
    width: auto;
    max-width:65%;
    font-size: .34rem;
    margin: 0 0 0 -10px;
    text-overflow: ellipsis;
    padding: 0;
    text-align:left;
    white-space: nowrap;
    line-height: .88rem;
}

.calcfont {
    font-size: 0.48rem;
    text-align: center;
    padding: .2rem 10px;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
    margin-left:-10px;
}

.calc-fanhui {
    margin-left:0;
}


#delete:after {
    clear: both;

}

header .mui-title,
header a {
    color: #333333;
    font-weight: 400;
}
</style>
