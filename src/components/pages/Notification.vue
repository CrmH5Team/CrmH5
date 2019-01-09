<template>
<div>
    <header class="mui-bar mui-bar-nav">
            <a @click="setAlready" class="calcfont calc-yidu right"></a>
            <a @click="clearAll" class="calcfont calc-qingkong right"></a>

            <a @click="back" class="calcfont calc-fanhui left" id="back"></a>
            <h1 class="mui-title f18">{{title}}</h1>
    </header>

    <div class="page-content">

        <div class="list">
              <div v-for="item in dataArray" class="item f14 ">
                  <div :class="{alreadyRead:item.already}">
                      <div class="item-title">{{item.title}}</div>
                      <div class="item-div">
                          <span>标题：</span><div class="item-div-text">{item.mallTitle}</div>
                      </div>
                      <div class="item-div">
                          <span>时间：</span><div class="item-div-text">{{item.time}}</div>
                      </div>
                      <div class="item-div">
                          <span>备忘：</span><span>{{item.remarks}}</span>
                      </div>
                      <div>
                          <router-link class="a" to="">view查看</router-link>
                      </div>
                    </div>
              </div>

        </div>

    </div>



</div>
</template>

<script>
export default {
    data(){
        return {
            title:'Notification',
            dataArray:[],
        }
    },
    created:function(){
        var _self = this;
        for(var i=0;i<=10;i++){
            var item = {};
            item.already = false;
            if(i<2){
                item.already = true;
            }
            item.title = 'Joe kwon 给你分享了 一个商业机会';
            item.mallTitle = '东航MSN1256检查会议';
            item.time = '8/Nov/2018  14:00 - 8/Nov/2018 16:00';
            item.remarks = '测试数据 测试数据 测试数据 测试数据 测试数据 测试数据 测试数据 测试数据 测试数据 ...';
            _self.dataArray.push(item);
        }

    },
    methods:{
        back:function(){
            this.$router.back(-1);
        },
        //标志已读
        setAlready:function(){
            var _self = this;
            if(_self.dataArray.length < 1) return;
            $.confirm({
              title: '提示',
              text: '全部标记为已读吗？',
              onOK: function () {
                  $.each(_self.dataArray,function(index,item){
                      item.already = true;
                  })
              },
              onCancel: function () {
              }
            });

        },
        //清空所有
        clearAll:function(){
            var _self = this;
            if(_self.dataArray.length < 1) return;

            $.confirm({
              title: '提示',
              text: '确定清空所有数据吗？',
              onOK: function () {
                  _self.dataArray = [];
              },
              onCancel: function () {
              }
            });
        }
    }

}
</script>

<style scoped>
/*头部*/
header{position: fixed; width: 100%;  top: 0;  left: 0;  z-index: 99;}
header.mui-bar {  background: #f8f2dc;overflow: hidden;}
.mui-title {
	right: 40px;
    left: 40px;
    display: inline-block;
    overflow: hidden;
    width: auto;
    margin: 0;
    text-overflow: ellipsis;
    position: absolute;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    font-weight: 400;
    line-height: 0.88rem;
}
.calcfont{
    font-size: 0.48rem;
    text-align: center;
    padding: 0.2rem 10px;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
}
.calc-qingkong{margin-right: -10px;}
header .mui-title,header a {color: #333;}

.page-content{padding-top: 0.88rem;}
/*列表*/
.alreadyRead{opacity: 0.7;}/*已读*/
.item{border-bottom:1px solid beige;padding:5px 10px;line-height:1.3;}
.item-title{font-weight: 600;padding-bottom: 5px;}
.item-div{padding:2px 0;}
.item-div-text{display:inline-block;}


</style>
