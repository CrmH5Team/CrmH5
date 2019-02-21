<template>
<div>
      <Header class="header" :title="title"></Header>

      <div class="page-content">
          <div class="tips f12">
              <div class="lanText" data-lanid="895_请点击以下列表，并上传对应的会议记录。"></div>
          </div>

          <div class="group-item-list meeting-list">

                <div v-show="!notData" v-for="item in listData" :key="item.AutoID" class="data-events-item f14" @click="goInfoPage(item.AutoID,$event)">
                    <div class="item-title">{{item.MeetingTitle}}</div>
                    <div class="item-time f12">
                      <span class="calcfont calc-gengxinshijian"></span>
                      <span class="time-text">{{item.BeginTime|MeetingTimeFormat}}~{{item.EndTime|MeetingTimeFormat}}</span>
                      <div class="right-text">{{item.Realname}}</div>
                    </div>
                    <div class="item-address">{{item.CompanyID}}</div>
                    <div class="item-initiator">{{item.ContactsID|formatContactsID}}{{item.Title|formatTitle}}</div>
                </div>

          </div>
          <nothing v-show="notData" style="padding-top:0.8rem;"></nothing>
      </div>

</div>
</template>

<script>
import Header from '../common/Header'
import Nothing from "../common/Nothing"
export default {
    components:{
        'Header':Header,
        'nothing': Nothing
    },
    data(){
        return{
            title:lanTool.lanContent('1000_会议列表'),
            listData:[],
            notData: true, //没数据
        }
    },
    created:function(){
    },
    mounted:function(){
       lanTool.updateLanVersion();
       //查询未上传会议记录的会议列表
       this.getNoUploadRecord();
    },
    methods:{
        //查询未上传会议记录的会议列表
        getNoUploadRecord:function(){
            var _self = this;
            //请求地址
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_MeetingHandle_QueryNoUploadRecord;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode()
            };

            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    data = tool.jObject(data);
                    // console.log(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        console.log(tool.getMessage(data));
                        _self.notData = true;
                        return;
                    }

                    _self.listData = data._OnlyOneData.Rows || [];
                    if(tool.isNullOrEmptyObject(_self.listData) || _self.listData.length<=0){
                        _self.notData = true;
                    }else{
                        _self.notData = false;
                    }
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    return;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
        //点击跳转到会议记录页
        goInfoPage:function(scheduleID,el){
            if(tool.isNullOrEmptyObject(scheduleID)){
                return;
            }

            var _self = this;
            var meetingNoticeID = "-1";
            var url = "/MeetingNoteinfo/" + meetingNoticeID;
            var oppID = "";
             //获取会议记录详情的标题
            var infoName = null;
            if ($(el.target).hasClass("data-events-item")) {
                infoName = $(el.target).find(".item-title").text();
            } else {
                infoName = $(el.target).parents(".data-events-item").children(".item-title").text() || "";
            }
            scheduleID = Number(scheduleID)<=0?"":scheduleID;
            var parameter = {
                OppID:oppID,
                ScheduleID:scheduleID,
                infoName:infoName
            };
            _self.$router.push({
                path: url,
                query: parameter
            });
        }
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
</style>
