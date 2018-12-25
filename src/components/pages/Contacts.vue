<template>
  <div>
      <Listheader :title="title"></Listheader>

      <!-- <Sortscreen :key="key" :sortScreenData="sortScreenData"></Sortscreen>
      <Commonlist :listData="listData">
            <template slot-scope="slotProps">
                  <div class="weui-cell__hd">
                      <input type="checkbox" class="weui-check" name="checkbox1" :id="slotProps.item.id" >
                      <label :for="slotProps.item.id" class="weui-icon-checked"></label>
                  </div>
                  <router-link :to="'/contactsinfo/{\'AutoID\':\''+slotProps.item.id+'\'}'" class="weui-cell__bd" :data-id="slotProps.item.id">
                      <span class="right">{{slotProps.item.account_id}}</span>
                      <p class="">{{slotProps.item.lastname}}</p>
                  </router-link>
            </template>
      </Commonlist> -->

      <!--  右侧侧滑 -->
      <div id="mask" class="mask" @click="panelToggle" v-show="showRightPanel"></div>
      <div id="right-content" class="right-content">
          <div class="right-content-block">
              <div class="right-block-title">Categories by 按...分类</div>
              <div class="right-block-items">
                  <div class="radios-div" >
                        <label class="radios-label">
                            <input type="radio" name="classification" value="organizations" v-model="classificationValue"/><i class="radios"></i><span>Organizations 公司</span>
                        </label>
                  </div>
                  <div class="radios-div">
                        <label class="radios-label">
                            <input type="radio" name="classification" value="businessSector" v-model="classificationValue"/><i class="radios"></i> <span>Business Sector 业务分类</span>
                        </label>
                  </div>
                  <div class="radios-div">
                        <label class="radios-label">
                            <input type="radio" name="classification" value="visibility" v-model="classificationValue"/><i class="radios"></i> <span>Visibility 可见性</span>
                        </label>
                  </div>
                  <div class="radios-div">
                        <label class="radios-label">
                            <input type="radio" name="classification" value="accountManager" v-model="classificationValue"/><i class="radios"></i> <span>Account Manager 客户经理</span>
                        </label>
                  </div>

              </div>
          </div>
          <div class="right-content-block">
              <div class="right-block-title">Data Filter 数据筛选</div>
              <div class="right-block-items">
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="my-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>All Contactss 所有联系人</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="visiable-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>My Followed Organizations 我关注的公司</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="existingCustomer" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>Existing Customer 现有客户</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="publicContacts" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>Public Contacts 公共联系人</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="privateContacts" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>Private Contacts 私有联系人</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="sharedFromOthers" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>Shared From Others 别人分享的</span>
                        </label>
                  </div>

              </div>
          </div>
          <div class="right-content-block">
              <div class="right-block-title">Other 其他</div>
              <div class="right-block-items">
                  <div class="other-search" id="OtherSearchBtn">
                      <span class="other-search-icon mui-icon calcfont calc-sousuo"></span>
                      <label class="other-search-label">Search</label>
                  </div>
              </div>
          </div>
      </div>

      <div id="page-content" class="page-content">
            <div class="group-div">
                <div class="date-div open" @click="groupToggle($event)">
                    <span class="calcfont calc-kehulianxiren"></span>
                    <span class="group-name">Air China (Airlines)</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group-div">
                <div class="date-div open" @click="groupToggle($event)">
                    <span class="calcfont calc-kehulianxiren"></span>
                    <span class="group-name">Air China (Airlines)</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="group-div">
                <div class="date-div open" @click="groupToggle($event)">
                    <span class="calcfont calc-kehulianxiren"></span>
                    <span class="group-name">Air China (Airlines)</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-fuzeren1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">Todd Scott</div>
                          <div class="item-div">Fleet Planning Manager</div>
                          <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                          <div class="item-div">
                            <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                          </div>
                          <div class="item-div">Airlines, Computer info Services</div>
                        </div>
                    </div>
                </div>

            </div>
      </div>





  </div>
</template>



<script>
import Listheader from '../common/Listheader'
import Commonlist from '../common/Commonlist'
import Sortscreen from '../common/Sortscreen'
import Mixins from '../../mixins'
export default {
      mixins: [Mixins.PAGE_LIST],
      components:{
        Listheader,Commonlist,Sortscreen
      },
      data (){
        return {
            key:'contacts',
            title:lanTool.lanContent('175_联系人'),

            isFirstEnter:false, // 是否第一次进入，默认false

            //传给列表组件的数据
            listData:{
                queryUrl : tool.ajaxUrl_Contacts_Query,//列表查询接口地址
                deleteUrl : tool.ajaxUrl_Contacts_Delete,//记录删除接口
                isUsePager : true,//是否分页
            },
            //传给Sortscreen组件
            sortScreenData:{
                sort:[
                    {'text':lanTool.lanContent('219_按联系人名称正序排列'),'sortOrder':'ASC','sortName':'firstname','id':'contacts01'},
                    {'text':lanTool.lanContent('218_按联系人名称倒序排列'),'sortOrder':'DESC','sortName':'firstname','id':'contacts02'},
                ],
                screen:[
                    {
                        field:'lastname',
                        queryType:'string',
                        text:lanTool.lanContent('163_联系人姓名'),
                        comp:[
                            {
                                type:'input',
                                field:'lastname',
                                placeholder:lanTool.lanContent('235_请输入联系人'),
                                value:'',
                            }
                        ]
                    },
                    {
                        field:'account_id',
                        queryType:'string',
                        text:lanTool.lanContent('26_公司名称'),
                        comp:[
                            {
                                type:'selectlist',
                                field:'account_id',
                                queryUrl:"Accounts/Query",
                                placeholder:lanTool.lanContent('202_请选择公司'),
                                data:{
                                    text:'',
                                    value:''
                                }
                            }
                        ]
                    },

                ]
            },

            showRightPanel:false,
            classificationValue:'group',  //右侧分类
            dataFilter:[],
        }
      },


      beforeRouteEnter:function(to, from, next){
            if(from.name === 'contactsinfo' || from.name === 'selectlist'){
                to.meta.isBack = true;
            }
            next();
      },
      mounted:function(){



      },
      methods: {

      }




}
</script>


<style scoped>

@import "../../assets/css/common/list-right-style.css";

.page-content{position:fixed;top:0.88rem;left:0;right:0;bottom:0;overflow-y:scroll;
-webkit-overflow-scrolling:touch;}
/*列表style*/
.date-div{
  height:36px;line-height:36px;background:#ebf9fd;padding:0 10px;font-size: 12px;
  width: 100%;color:#000;
  box-sizing: border-box;
  z-index: 99;
}
.item-user-icon{display: inline-block;width: 0.8rem;height:0.8rem;line-height:0.8rem;text-align:center;border: 1px solid #3cadf9;position: absolute;top:10px;left:0.25rem;border-radius: 5px;font-size:0.6rem;color:#3cadf9;}
.item-user-icon::after{color:#3cadf9;}
.date-div .calcfont{color:#3cadf9;margin-right:8px;}
.group-name{font-size: 0.3rem;}
.occupy-div{height:30px;display:none;}

.group-item{background:#fff;position:relative;}
.item-block{padding:5px 10px 5px 1.3rem;}
.group-item::after{content:'';display:block;height: 1px;background:#3cadf9;width:100%;left:0;bottom:0;}
.item-div{font-size: 0.25rem;line-height: 0.5rem;padding-top:5px;}
.item-first-div{font-weight: 600;color:#ff5a21;}

</style>
