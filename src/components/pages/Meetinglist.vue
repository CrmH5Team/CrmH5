<template>
<div>
      <Header class="header" :title="title"></Header>

      <div class="page-content">
          <div class="tips f12">
              <div>请点击以下列表，并上传对应的会议记录。</div>
          </div>

          <div class="list">
                <div class="data-events-item f12" @click="goInfoPage(1)">
                    <div class="item-title">Meeting with Eastern Airlines</div>
                    <div class="item-time f12">
                        <span class="calcfont calc-gengxinshijian"></span>
                        <span class="time-text">14:30-17:00</span>
                        <!-- <span class="right">Cheryl Xiong</span> -->
                    </div>
                    <div class="item-address">China Eastern Airlines</div>
                    <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                </div>
                <div class="data-events-item f12" @click="goInfoPage(15)">
                    <div class="item-title">Meeting with Eastern Airlines</div>
                    <div class="item-time f12">
                        <span class="calcfont calc-gengxinshijian"></span>
                        <span class="time-text">14:30-17:00</span>
                        <!-- <span class="right">Cheryl Xiong</span> -->
                    </div>
                    <div class="item-address">China Eastern Airlines</div>
                    <div class="item-initiator">Niki (Fleet Planning Manager)</div>
                </div>

          </div>
      </div>

</div>
</template>

<script>
import Header from '../common/Header'
export default {
    components:{
        'Header':Header
    },
    data(){
        return{
            title:'Meeting List',
        }
    },
    methods:{
        //点击去详情页
        goInfoPage:function(id){
            var _self = this,
                url = "";
            if(id === undefined){
              id = '';
            }

            url = '/meetingNoteinfo/{"AutoID":"'+ id +'"}';
            _self.$router.push(url);
        },
    }
}
</script>

<style scoped>
.header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}
.page-content{padding-top: 0.88rem;}

.tips{margin: 5px 0;background: #f2f2f2;height: 26px;line-height: 26px;box-sizing: border-box;padding-left: 10px;}

/*列表*/
.data-events-item{border-bottom: 1px solid beige;line-height:20px;background: #fff;padding: 5px 10px;}
.item-title{font-weight: 600;color:#333;}
.item-time{color:#333;}
.item-time .calc-gengxinshijian{color:#ff5a21;}
.time-text{vertical-align: middle;}
.item-address{font-weight: 600;}
.data-events p{height: 50px;line-height: 50px;}
</style>
