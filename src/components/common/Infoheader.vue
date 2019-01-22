<template>
<div>
    <header class="mui-bar mui-bar-nav">
        <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

        <h1 class="mui-title f18">{{title}}</h1>

        <!-- 新增状态头部icon显示   -->
        <div v-if="isAddNew" class="leftView">
            <!-- <a class="calcfont calc-tijiao right" id="tijiao"></a> -->
            <a v-if="!onlyView" @click="save" class="calcfont calc-gou right" id="save"></a>
        </div>
        <!-- 编辑状态头部icon显示   -->
        <div v-else class="leftView">
            <!-- <a class="calcfont calc-tijiao right" id="tijiao"></a> -->
            <!-- <a v-if="operation && !onlyView" @click="moreClick" class="calcfont calc-gengduo right" id="gengduo"></a> -->
            <a v-if="!onlyView && operation" @click="moreClick" class="calcfont calc-gengduo right" id="gengduo"></a>
            <a v-if="!onlyView" @click="save" class="calcfont calc-gou right" id="save"></a>
            <a v-if="!onlyView" @click="delClick" class="calcfont calc-shanchu right" id="delete"></a>
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
            rightPanelFromIDNew :""
        }
    },
    props:{
        title:String,
        isAddNew:Boolean, //是否是新增状态, 父组件不传默认为false
        operation:Boolean, //侧滑是否可操作, 父组件不传默认为false
        onlyView:Boolean, //标志页面只能查看,父组件不传默认为false
        rightPanelFromType:String,
        rightPanelFromID:String
    },
    watch: {
    },
    created:function(){

    },
    //props:['title','isAddNew','operation'],
    mounted: function () {
    },
    methods: {

        //保存动作
        save: function () {
            //eventBus.$emit('save', 'saveData');
        },
        delClick: function () {
            //eventBus.$emit('delete');
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
}

.leftView {
    position: absolute;
    height: 0.88rem;
    width: 2.1rem;
    right: 0;
    padding-right: 0.1rem
}

.mui-title {
    right: 2.3rem;
    left: 0.8rem;
    display: inline-block;
    overflow: hidden;
    width: auto;
    font-size: 0.36rem;
    font-weight: 400;
    margin: 0;
    text-overflow: ellipsis;
    position: absolute;
    padding: 0;
    text-align: left;
    white-space: nowrap;
    line-height: 0.88rem;
    margin-left: -0.2rem;
}

.calcfont {
    font-size: 0.48rem;
    width: 0.88rem;
    text-align: center;
    padding: 0.2rem 0;
    padding-right: 0.1rem;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
    color: #333333;
}

.calc-fanhui {
    margin-right: -0.2rem;
    margin-left: -0.2rem;
    padding-right: 0.2rem;
    padding-left: 0.2rem;

}

.right {
    float: right;
    width: 0.6rem;
}

#delete:after {
    clear: both;

}

header .mui-title,
header a {
    color: #333333;
}
</style>
