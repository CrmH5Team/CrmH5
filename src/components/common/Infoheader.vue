<template>
<div>
    <header class="mui-bar mui-bar-nav">
        <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

        <h1 class="mui-title f18">{{title}}</h1>
        <div class="leftView">
        <a v-show="moreIcon" @click="moreClick" class="calcfont calc-gengduo1 right" id="gengduo"></a>
        <a @click="save" class="calcfont calc-gou right" id="save"></a>
        <a v-show="delHidden" @click="delClick" class="calcfont calc-gou calc-shanchu right" id="delete"></a></div>

    </header>
</div>
</template>

<script>
import event from './Event.js'
import eventBus from './Event.js';
export default {
    data() {
        return {
            // moreIcon: true,
            // delHidden: true,
        }
    },
    props: {
        title: String,
        pageType: String,
        moreIcon:Boolean,
        delHidden:Boolean
    },
    mounted: function () {

    },
    methods: {

        //保存动作
        save: function () {
            eventBus.$emit('save','saveData');
        },
        delClick: function () {
             eventBus.$emit('delete');
        },
        moreClick: function () {
             eventBus.$emit('gengduo');
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
    right:0;
    z-index: 99;
}
.leftView
{
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
    font-size: 0.34rem;
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
    color: #515151;
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
#delete:after{
    clear: both;

}
header .mui-title,
header a {
    color: #515151;
}
</style>
