<template>
<div>
        <Infoheader :title="pageTitle"></Infoheader>

        <div class="scroll-div">
              <form class="input-group">
                  <div class="input-row">
                        <label>
                          <span class="red">*</span><span class="lanText" data-lanid="26_公司名称"></span></label>
                        <p class="textareaP">
                            <textarea key="accountname" data-lanid="189_请输入公司名称" placeholder="" class="ItemVal lanInputPlaceHolder Necessary" v-model="moduleData.accountname" data-field="accountname"></textarea>
                        </p>
                  </div>
                  <div class="input-row">
                          <label><span class="lanText" data-lanid="104_常用电话"></span></label>
                          <p>
                            <input type="tel" placeholder="" class="ItemVal lanInputPlaceHolder" data-lanid="227_请输入常用电话" v-model="moduleData.phone" data-field="phone" />
                          </p>
                  </div>
                  <div class="input-row">
                          
                          <label><span class="lanText" data-lanid="107_备用电话"></span></label>
                          <p>
                            <input type="tel" class="ItemVal lanInputPlaceHolder" data-lanid="229_请输入备用电话" v-model="moduleData.otherphone" data-field="otherphone" />
                          </p>

                  </div>
                  <div class="input-row">
                          <label><span class="lanText" data-lanid="108_常用 Email"></span></label>
                          <p>
                            <input type="email" placeholder="" class="ItemVal lanInputPlaceHolder" data-lanid="230_请输入常用 Email" v-model="moduleData.email1" data-field="email1">
                          </p>

                  </div>
                  <div class="input-row">
                          <label><span class="lanText" data-lanid="109_备用 Email"></span></label>
                          <p>
                            <input type="email" placeholder="" class="ItemVal lanInputPlaceHolder" data-lanid="231_请输入备用 Email" v-model="moduleData.email2" data-field="email2">
                          </p>

                  </div>
                  <div style="height:10px;background:#efeff4;"></div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="111_评价"></span></label>
                        <p>
                            <Picker
                              :placeholder="languageData.rating"
                              :title="languageData.rating"
                              :data="moduleData.rating"
                              field="rating"
                            ></Picker>
                          <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="105_网站"></span></label>
                        <p>
                          <input type="text" placeholder="" class="ItemVal lanInputPlaceHolder" data-lanid="232_请输入网站" v-model="moduleData.website" data-field="website">
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="106_传真"></span></label>
                        <p>
                          <input type="text" placeholder="" class="ItemVal lanInputPlaceHolder" data-lanid="233_请输入传真" v-model="moduleData.fax" data-field="fax">
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="110_所有者"></span></label>
                        <p>
                          <input type="text" placeholder="" class="ItemVal lanInputPlaceHolder" data-lanid="234_请输入所有者" v-model="moduleData.ownership" data-field="ownership">
                        </p>

                  </div>
                  <div class="input-row">
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
                        <label><span class="lanText" data-lanid="166_行业"></span></label>
                        <p>
                            <Picker
                              :placeholder="languageData.cf_753"
                              :title="languageData.cf_753"
                              :data="moduleData.cf_753"
                              field="cf_753"
                            ></Picker> 
                              
                            <i class="calcfont arrow-right calc-xiangzuo"></i>
                        </p>
                  </div>
                  <div class="input-row">
                        <label><span class="lanText" data-lanid="161_备忘录"></span></label>
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
import Picker from '../common/Picker'
import Infofooter from '../common/infoFooter'
// import commoninfo from '../common/commoninfo.js'

import Mixins from '../../mixins'

export default {
  mixins: [Mixins.PAGE_INFO],
  components:{
        Infoheader,Picker,Infofooter
  },
  data(){
    return {
        pageTitle:'',
        id:null,
        isAdd:true, //页面是否是新增状态
        querySingleUrl : tool.ajaxUrl_Accounts_QuerySingle, //查询单条记录接口地址
        saveOrUpdateUrl : tool.ajaxUrl_Accounts_SaveOrUpdate, //数据保存接口地址

        isFirstEnter:false, // 是否第一次进入，默认false

        languageData:{
            'rating':lanTool.lanContent('216_请选择评价'), 
            'cf_753':lanTool.lanContent('206_请选择行业'), 
            'assigned_user_id':lanTool.lanContent('203_请选择负责人'), 
        },

        moduleData:{
            accountname:'',
            phone:'',
            otherphone:'',
            email1:'',
            email2:'',
            assigned_user_id:{
                text:'',
                value:''
            },
            rating:'',
            website:'',
            fax:'',
            ownership:'',
            cf_753:'',
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
      /*
      $this.isFirstEnter = true; 

      //保存事件出发,准备数据
      eventBus.$on('save',$this.assembleData);
*/
      //set pageTitlepageTitle
      eventBus.$on('setPageTitle', function (data) {
         $this.pageTitle = data.accountname || '';
      });

  },

  
}
</script>











<style scoped>
.scroll-div{
  /* height: calc(100% - 0.88rem);overflow:hidden;overflow-y: scroll; */
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
    outline: none;
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
