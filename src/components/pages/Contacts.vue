<template>
  <div>
      <Listheader :title="title"></Listheader>

      <!--  右侧侧滑 -->
      <list-right-panel :panelData="rigthPanelData" :searchData="cantactsSearchData"></list-right-panel>

      <common-list :groupData="groupData">
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
      </common-list>
      <!-- <div id="page-content" class="page-content">
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
      </div> -->





  </div>
</template>



<script>
import Listheader from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Commonlist from '../common/Commonlist'
// import Sortscreen from '../common/Sortscreen'
import Mixins from '../../mixins'
var count = 0;
export default {
      mixins: [Mixins.PAGE_LIST],
      components:{
        Listheader,
        'list-right-panel':Listrightpanel,
        'common-list':Commonlist
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

            //侧滑数据模型
            rigthPanelData:[
                {
                  groupText:'Categories by 按...分类',
                  type:'radio',
                  default:'organizations',
                  items:[
                      {text:'Organizations 公司',value:'organizations'},
                      {text:'Business Sector 业务分类',value:'businessSector'},
                      {text:'Visibility 可见性',value:'visibility'},
                      {text:'Account Manager 客户经理',value:'accountManager'}
                  ]
                },
                {
                  groupText:'Data Filter 数据筛选',
                  type:'checkbox',
                  default:'allContactss',
                  items:[
                      {text:'All Contactss 所有联系人',value:'allContactss'},
                      {text:'Public Contacts 公共联系人',value:'publicContacts'},
                      {text:'Private Contacts 私有联系人',value:'privateContacts'},
                      {text:'Shared From Others 别人分享的',value:'sharedFromOthers'}
                  ]
                },

            ],
            //侧滑搜索页面数据模型
            cantactsSearchData:[
                {
                    type:'input',
                    field:'name',
                    queryType:'string',
                    text:'Cantact Name',
                    value:'',
                },
                {
                    type:'input',
                    field:'Email',
                    queryType:'string',
                    text:'Cantact Email',
                    value:'',
                },
                {
                    type:'selectlist',
                    field:'related_to',
                    queryType:'string',
                    queryUrl:"Accounts/Query",
                    text:'Organization公司',
                    selectType:'checkbox',
                    value:{
                        text:'',
                        value:''
                    }
                },
                {
                    type:'picker',
                    field:'cf_765',
                    queryType:'string',
                    text:'Business Sector 业务分类',
                    value:'',
                    id:Number((new Date()).valueOf()) + count++
                },
                {
                  type:'picker',
                  field:'cf_771',
                  queryType:'string',
                  text:'Area / Region 区域',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'selectlist',
                  field:'related_to',
                  queryType:'string',
                  queryUrl:"Accounts/Query",
                  text:'Country 国家',
                  selectType:'radio',
                  value:{
                      text:'',
                      value:''
                  }
              },
              {
                  type:'selectlist',
                  field:'related_to',
                  queryType:'string',
                  queryUrl:"Accounts/Query",
                  text:'Account Manager 客户经理',
                  selectType:'checkbox',
                  value:{
                      text:'',
                      value:''
                  }
              }
            ],



            groupData:[
                {
                  groupName:'Alirline',
                  count:3,
                  iconClass:'calc-kehulianxiren',
                  items:[]
                },
                {
                  groupName:'Alan',
                  count:1,
                  iconClass:'calc-kehulianxiren',
                  items:[]
                },
                {
                  groupName:'Kity',
                  count:2,
                  iconClass:'calc-kehulianxiren',
                  items:[]
                },
                {
                  groupName:'Alan123',
                  count:1,
                  iconClass:'calc-kehulianxiren',
                  items:[]
                },
            ],
        }
      },
      created:function(){

          console.log(this.cantactsSearchData);
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

/* .page-content{position:fixed;top:0.88rem;left:0;right:0;bottom:0;overflow-y:scroll;
-webkit-overflow-scrolling:touch;} */
/*列表style*/
/* .date-div{
  height:36px;line-height:36px;background:#ebf9fd;padding:0 10px;font-size: 12px;
  width: 100%;color:#000;
  box-sizing: border-box;
  z-index: 99;
}
.item-user-icon{display: inline-block;width: 0.8rem;height:0.8rem;line-height:0.8rem;text-align:center;border: 1px solid #3cadf9;position: absolute;top:10px;left:0.25rem;border-radius: 5px;font-size:0.6rem;color:#3cadf9;}
.date-div .calcfont{color:#3cadf9;margin-right:8px;}
.group-name{font-size: 0.3rem;}
.occupy-div{height:30px;display:none;} */

.group-item{background:#fff;position:relative;}
.item-user-icon{display: inline-block;width: 0.8rem;height:0.8rem;line-height:0.8rem;text-align:center;border: 1px solid #3cadf9;position: absolute;top:10px;left:0.25rem;border-radius: 5px;font-size:0.6rem;color:#3cadf9;}


.item-block{padding:5px 10px 5px 1.3rem;}
.group-item::after{content:'';display:block;height: 1px;background:#3cadf9;width:100%;left:0;bottom:0;}
.item-div{font-size: 0.25rem;line-height: 0.5rem;padding-top:5px;}
.item-first-div{font-weight: 600;color:#ff5a21;}

</style>
