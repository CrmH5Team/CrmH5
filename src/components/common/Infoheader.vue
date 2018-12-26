<template>
<div>
    <header class="mui-bar mui-bar-nav">
        <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

        <h1 class="mui-title">{{title}}</h1>
        <a v-show="moreHidden" @click="moreClick" class="calcfont calc-gengduo1 right" id="gengduo"></a>
        <a @click="save" class="calcfont calc-gou right" id="save"></a>
        <a v-show="delHidden" @click="delClick" class="calcfont calc-gou calc-shanchu right" id="delete"></a>
    </header>
</div>
</template>

<script>
import event from './Event.js'
import eventBus from './Event.js';
export default {
    data() {
        return {
            moreHidden: true,
            // delHidden: true,
        }
    },
    props: {
        title: String,
        pageType: String,
        moreHidden:Boolean,
        delHidden:Boolean
    },
    mounted: function () {

    },
    methods: {

        //保存动作
        save: function () {
            eventBus.$emit('save');
        },
        delClick: function () {
             eventBus.$emit('delete','asdaf');     
        },
        moreClick: function () {

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
    background: #3cadf9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

.mui-title {
    right: 0.8rem;
    left: 0.8rem;
    display: inline-block;
    overflow: hidden;
    width: auto;
    font-size: 0.34rem;
    margin: 0;
    text-overflow: ellipsis;
    position: absolute;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    line-height: 0.88rem;
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
}

.calc-fanhui {
    margin-right: -0.2rem;
    margin-left: -0.2rem;
    padding-right: 0.2rem;
    padding-left: 0.2rem;

}

.right {
    float: right;
    width: 0.52rem;
}
#delete:after{
    clear: both;
    
}
header .mui-title,
header a {
    color: #fff;
}
</style>
