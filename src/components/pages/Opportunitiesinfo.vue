<template>
<div>
        <Infoheader :title="pageTitle"></Infoheader>

        <div class="scroll-div">
              <form class="input-group">
                  <div class="input-row">
                        <label>
                          <span class="red">*</span><span class="lanText" data-lanid="153_销售机会名称"></span></label>
                        <p class="textareaP">
                            <textarea key="potentialname" data-lanid="186_请输入销售机会名称" :placeholder="languageData.potentialname" class="ItemVal lanInputPlaceHolder Necessary" data-field="potentialname" v-model="moduleData.potentialname"></textarea>
                        </p>
                  </div>
                  <div class="input-row">
                          <label><span class="red">*</span><span class="lanText" data-lanid="156_日期"></span></label>
                          <p>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                                <Datetimepicker
                                    :placeholder="languageData.closingdate"
                                    :title="languageData.closingdate"
                                    :data="moduleData.closingdate"
                                    field="closingdate"
                                    ></Datetimepicker>
                          </p>
                  </div>
                  <div class="input-row">
                          <!-- 联系人 -->
                          <label><span class="red">*</span><span class="lanText" data-lanid="175_联系人"></span></label>
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
                          <!-- 选择公司 -->
                          <label><span class="lanText" data-lanid="200_公司"></span></label>
                          <p>
                              <input 
                                v-model="moduleData.related_to.text"
                                @click="selectList"
                                class="selectList lanInputPlaceHolder"
                                data-lanid="202_请选择公司"
                                data-url="Accounts/Query" 
                                data-field="related_to" 
                                readonly="readonly" >
                              <i class="calcfont arrow-right calc-xiangzuo"></i>
                          </p>

                  </div>
                  <div class="input-row">
                        <!-- 负责人 -->
                          <label><span class="red">*</span><span class="lanText" data-lanid="157_负责人"></span></label>
                          <p>
                            <input 
                                key="opportunitiesinfo_assigned_user_id"
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
                  <div style="height:10px;background:#efeff4;"></div>
                  <div class="input-row">
                        <label><span class="red">*</span><span class="lanText" data-lanid="165_会议性质"></span></label>
                        <p>
                          <Picker
                              :placeholder="languageData.cf_765"
                              :title="languageData.cf_765"
                              :data="moduleData.cf_765"
                              field="cf_765"
                            ></Picker>
                          <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="red">*</span><span class="lanText" data-lanid="164_会议属性"></span></label>
                        <p>
                            <Picker
                              :placeholder="languageData.cf_763"
                              :title="languageData.cf_763"
                              :data="moduleData.cf_763"
                              field="cf_763"
                            ></Picker>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="red">*</span><span class="lanText" data-lanid="166_行业"></span></label>
                        <p>
                            <Picker
                              :placeholder="languageData.cf_769"
                              :title="languageData.cf_769"
                              :data="moduleData.cf_769"
                              field="cf_769"
                            ></Picker>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="red">*</span><span class="lanText" data-lanid="167_后续行动"></span></label>
                        <p>
                            <Picker
                              :placeholder="languageData.cf_771"
                              :title="languageData.cf_771"
                              :data="moduleData.cf_771"
                              field="cf_771"
                            ></Picker>
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>

                  </div>
                  <div class="input-row">
                        <label><span class="red">*</span><span class="lanText" data-lanid="161_备忘录"></span></label>
                        <p class="textareaP"><textarea :key="id+'description'" class="ItemVal" data-field="description" v-model="moduleData.description"></textarea></p>
                  </div>

                  <Uploadfile 
                    v-if="!isAdd"
                    :data="moduleData.Documents"
                    :id = "id"
                    ></Uploadfile> 

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
import Uploadfile from './Uploadfile'
// import commoninfo from '../common/commoninfo.js'

import Mixins from '../../mixins'

export default {
  mixins: [Mixins.PAGE_INFO],
  components:{
        Infoheader,Datetimepicker,Picker,Infofooter,Uploadfile
  },
  data(){
    return {
        pageTitle:'',
        id:null,
        isAdd:true, //页面是否是新增状态
        // data:null,
        querySingleUrl : tool.ajaxUrl_Potentials_QuerySingle, //查询单条记录接口地址
        saveOrUpdateUrl : tool.ajaxUrl_Potentials_SaveOrUpdate, //数据保存接口地址

        isFirstEnter:false, // 是否第一次进入，默认false

        languageData:{
            'potentialname':lanTool.lanContent('186_请输入销售机会名称'),
            'closingdate':lanTool.lanContent('212_请选择日期'),
            'cf_765':lanTool.lanContent('204_请选择会议性质'),
            'cf_763':lanTool.lanContent('205_请选择会议属性'),
            'cf_769':lanTool.lanContent('206_请选择行业'), 
            'cf_771':lanTool.lanContent('207_请选择后续行动'),

            'assigned_user_id':lanTool.lanContent('203_请选择负责人'),
            'related_to':lanTool.lanContent('202_请选择公司'),
            'contact_id':lanTool.lanContent('201_请选择联系人'),
        },

        moduleData:{
            potentialname:'',
            closingdate:'',

            contact_id:{
                text:'',
                value:''
            },
            related_to:{
                text:'',
                value:''
            },
            assigned_user_id:{
                text:'',
                value:''
            },

            cf_765:'',
            cf_763:'',
            cf_769:'',
            cf_771:'',
            description:'',

            createdtime:'',
            modifiedtime:'',
            modifiedby:{
                text:'',
                value:''
            },

            Documents:[] 
        },

        scrollTop:0, //记录滚动条的位置

    }
  },
  beforeRouteEnter:function(to, from, next){
        //如果是从以下路由回来的就不用刷新页面
        if(from.name === 'previewfile' || from.name === 'uploadinput' || from.name === 'selectlist'){
            to.meta.isBack = true;
        }
        next();
  },
  
  
  created:function(){ 
       
      var $this = this;
      //set pageTitlepageTitle
      eventBus.$on('setPageTitle', function (data) {
         $this.pageTitle = data.potentialname;
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
    outline:0 none;
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
