<template>
<div>
      <Header class="header" :title="title"></Header>

      <div class="page-content">
          <div class="tips f12">
              <div class="lanText" data-lanid="895_请点击以下列表，并上传对应的会议记录。"></div>
          </div>

          <div class="group-item-list meeting-list">

                <div v-for="item in listData" :key="item.AutoID" class="data-events-item f12" @click="goInfoPage(item.AutoID)">
                    <div class="item-title">{{item.MeetingTitle}}</div>
                    <div class="item-time f12">
                      <span class="calcfont calc-gengxinshijian"></span>
                      <span class="time-text">{{item.BeginTime|MeetingTimeFormat}}~{{item.EndTime|MeetingTimeFormat}}</span>
                    </div>
                    <div class="item-address">{{item.Realname}}</div>
                    <div class="item-initiator">{{item.ContactsID|formatContactsID}}{{item.Title|formatTitle}}</div>
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
            listData:[],
        }
    },
    created:function(){
        for(var i=0; i<20; i++){
            var o = {}
            o.AutoID = i;
            o.MeetingTitle = '测试1111111';
            o.BeginTime = "2019-01-23T17:35:00";
            o.EndTime = "2019-01-25T17:35:00";
            o.Realname = "ceshi测试用";
            o.Realname = "ceshi测试用";
            o.ContactsID = "my yyyas";
            o.Title = "dasd";

            this.listData.push(o);
        }
    },
    mounted:function(){
       lanTool.updateLanVersion();
    },
    methods:{
        //点击去详情页
        goInfoPage:function(id){
            var _self = this,
                url = "";
            if(tool.isNullOrEmptyObject(id)){
              return ;
            }
            url = '/meetingNoteinfo/'+ id;
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

.tips{margin: 5px 0;height: auto;
box-sizing: border-box;padding:0 10px;}
.tips div{background: #f2f2f2;border-radius: 3px;line-height:1.3;padding:3px;}
/*列表*/
/* .data-events-item{border-bottom: 1px solid beige;line-height:20px;background: #fff;padding: 5px 10px;}
.item-title{font-weight: 600;color:#333;}
.item-time{color:#333;}
.item-time .calc-gengxinshijian{color:#ff5a21;}
.time-text{vertical-align: middle;}
.item-address{font-weight: 600;}
.data-events p{height: 50px;line-height: 50px;} */
</style>
