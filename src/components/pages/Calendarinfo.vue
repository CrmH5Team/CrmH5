<template>
<div>
        <Infoheader :title="pageTitle"></Infoheader>

        <div class="scroll-div">
              <form class="input-group">
                  <div class="input-row">
                        <label>
                          <span class="red">*</span><span class="lanText" data-lanid="48_主题"></span></label>
                        <p class="textareaP">
                            <textarea key="subject" data-lanid="247_请输入主题" placeholder="" class="ItemVal lanInputPlaceHolder Necessary" data-field="subject" v-model="moduleData.subject"></textarea>
                        </p>
                  </div>
                  <div class="input-row">
                        <!-- 负责人 -->
                          <label><span class="red">*</span><span class="lanText" data-lanid="157_负责人"></span></label>
                          <p>
                              <input 
                                v-model="moduleData.assigned_user_id.text"
                                @click="selectList"
                                class="selectList lanInputPlaceHolder"
                                data-lanid="203_请选择负责人"
                                data-url="Users/Query" 
                                data-field="assigned_user_id" 
                                readonly="readonly" >
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                          </p>
                  </div>
                  <div class="input-row">
                          <label><span class="red">*</span><span class="lanText" data-lanid="224_开始时间"></span></label>
                          <p>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                            <Datetimepicker
                                :placeholder="languageData.selectDate"
                                :title="languageData.selectDate"
                                :data="moduleData.date_start"
                                field="date_start"
                                minute=true
                                ></Datetimepicker>    
                          </p>
                  </div>
                  <div class="input-row">
                          <label><span class="red">*</span><span class="lanText" data-lanid="225_结束时间"></span></label>
                          <p>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                            <Datetimepicker
                                :placeholder="languageData.selectDate"
                                :title="languageData.selectDate"
                                :data="moduleData.due_date"
                                field="due_date"
                                minute=true
                                ></Datetimepicker>     
                          </p>
                  </div>
                  <div class="input-row">
                          <!-- 状态 -->
                          <label><span class="red">*</span><span class="lanText" data-lanid="137_状态"></span></label>
                          <p>
                            <Picker
                              :placeholder="languageData.eventstatus"
                              :title="languageData.eventstatus"
                              :data="moduleData.eventstatus"
                              field="eventstatus"
                            ></Picker>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                          </p>
                  </div>
                  <div class="input-row">
                          <!-- 类型 -->
                          <label><span class="red">*</span><span class="lanText" data-lanid="139_类型"></span></label>
                          <p>
                            <Picker
                              :placeholder="languageData.activitytype"
                              :title="languageData.activitytype"
                              :data="moduleData.activitytype"
                              field="activitytype"
                            ></Picker>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                          </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="140_地点"></span></label>
                        <p>
                          <input data-lanid="249_请输入地点" placeholder="" class="ItemVal lanInputPlaceHolder" data-field="location" v-model="moduleData.location"/>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="143_优先级"></span></label>
                        <p>
                            <Picker
                              :placeholder="languageData.taskpriority"
                              :title="languageData.taskpriority"
                              :data="moduleData.taskpriority"
                              field="taskpriority"
                            ></Picker>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="red">*</span><span class="lanText" data-lanid="226_公开程度"></span></label>
                        <p>
                            <Picker
                              :placeholder="languageData.visibility"
                              :title="languageData.visibility"
                              :data="moduleData.visibility"
                              field="visibility"
                            ></Picker>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>

                  <div style="height:10px;background:#efeff4;"></div>
                  <div class="input-row">
                        <!-- 联系人 -->
                          <label><span class="lanText" data-lanid="149_联系人"></span></label>
                          <p>
                              <input 
                                v-model="moduleData.contact_id.text"
                                @click="selectList"
                                class="selectList lanInputPlaceHolder"
                                data-lanid="201_请选择联系人"
                                data-url="Contacts/Query" 
                                data-field="contact_id" 
                                readonly="readonly" >
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                          </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="254_关联于 客户/销售机会"></span></label>
                        <p>
                            <Picker
                              :placeholder="languageData.parent_idfrom"
                              :title="languageData.parent_idfrom"
                              :data="moduleData.parent_idfrom"
                              field="parent_idfrom"
                            ></Picker>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="256_客户/销售机会"></span></label>
                        <p>
                              <input 
                                v-model="moduleData.parent_id.text"
                                @click="selectList"
                                class="selectList lanInputPlaceHolder"
                                data-lanid="257_请选择客户/销售机会"
                                data-url="" 
                                data-field="parent_id" 
                                data-linkfrom="parent_idfrom"
                                readonly="readonly" >
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="147_描述"></span></label>
                        <p class="textareaP"><textarea :key="id+'description'" class="ItemVal" v-model="moduleData.description" data-field="description"></textarea></p>
                  </div>

              </form>

              <Infofooter 
                v-if="!isAdd"
                :createdtime="moduleData.createdtime"
                :modifiedtime="moduleData.modifiedtime"
                :modifiedby="moduleData.modifiedby"
              ></Infofooter>
              
        </div>
</div>

</template>
<script>
import Infoheader from '../common/Infoheader'
import Datetimepicker from '../common/Datetimepicker'
import Picker from '../common/Picker'
import Infofooter from '../common/infoFooter'
// import commoninfo from '../common/commoninfo.js'

import Mixins from '../../mixins'

export default {
  mixins: [Mixins.PAGE_INFO],  
  components:{
        Infoheader,Datetimepicker,Picker,Infofooter
  },
  data(){
    return {
        pageTitle:'',
        id:null,
        isAdd:true, //页面是否是新增状态
        // data:null,
        querySingleUrl : tool.ajaxUrl_Events_QuerySingle, //查询单条记录接口地址
        saveOrUpdateUrl : tool.ajaxUrl_Events_SaveOrUpdate, //数据保存接口地址

        isFirstEnter:false, // 是否第一次进入，默认false

        languageData:{
            'selectDate':lanTool.lanContent('212_请选择日期'),

            'eventstatus':lanTool.lanContent('246_请选择状态'),
            'activitytype':lanTool.lanContent('248_请选择类型'),
            'taskpriority':lanTool.lanContent('250_请选择优先级'), 
            'visibility':lanTool.lanContent('251_请选择公开程度'),
            'parent_idfrom':lanTool.lanContent('255_请选择关联于客户/销售机会'),
            
            'assigned_user_id':lanTool.lanContent(''),
            'contact_id':lanTool.lanContent('201_请选择联系人'),
            'parent_id':lanTool.lanContent('257_请选择客户/销售机会'),
        },

        moduleData:{
            subject:'',
            assigned_user_id:{
                text:tool.getStorageItem(tool.cache_UserRealName) || "",
                value:tool.getStorageItem(tool.cache_UserId) || ""
            },
            date_start:'',
            due_date:'',
            eventstatus:'',
            activitytype:'',
            location:'',
            taskpriority:'',
            visibility:'',
            contact_id:{
                text:'',
                value:''
            },
            parent_idfrom:'',
            parent_id:'',
            description:'',

            createdtime:'',
            modifiedtime:'',
            modifiedby:{
                text:'',
                value:''
            },
        },

        scrollTop:0, //记录滚动条的位置

    }
  },

  beforeRouteEnter:function(to, from, next){
        //如果是从以下路由回来的就不用刷新页面
        if(from.name === 'selectlist'){
            to.meta.isBack = true;
        }
        next();
  },

  created:function(){
      var $this = this;

      //set pageTitlepageTitle
      eventBus.$on('setPageTitle', function (data) {
         $this.pageTitle = data.subject || '';
      });

  },

}
</script>















<style scoped>
.scroll-div{
    position:fixed;top:0.88rem;left:0;width:100%;bottom:0;right:0;
    /*height: calc(100% - 0.88rem);*/overflow:hidden;overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    
}
.input-group {position: relative;padding: 0;border: 0;background-color: #fff;margin-bottom:10px;}
.input-group:after { position: absolute;right: 0;bottom: 0;left: 0;height: 1px;content: '';
    -webkit-transform: scaleY(.5);transform: scaleY(.5);background-color: #c8c7cc;
}
.input-row{position:relative;}
.input-row label{float: none;padding: 11px 15px 0;
    width: 100%;color: #898989;font-size: 0.24rem;display: block;position: relative;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;line-height: 1.1;
}
.input-row label span.red {color: #fd3f3f;vertical-align: middle;
    position: absolute;left: 8px;top: 13px;}
.input-row p {
    min-height: 40px;line-height: 40px;font-size: 0.28rem;
    color: #000;padding: 0 15px;margin-bottom: 0;
}
.input-row  .arrow-right{position: absolute;bottom:10px;right:15px;color:#7f7f7f;}
.input-row p.textareaP{padding:8px 15px;box-sizing: border-box;}

.input-row textarea,.input-row input {
    width: 100%;
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
    outline: none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}
.input-row textarea{
  height:24px;padding:0;
  font-family: 'Helvetica Neue',Helvetica,sans-serif;
  outline: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
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
