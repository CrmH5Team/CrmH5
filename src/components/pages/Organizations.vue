<template>
  <div>

      <Listheader :title="title"></Listheader>

      <!--  右侧侧滑 -->
      <list-right-panel :panelData="rigthPanelData" :searchData="organizationsSearchData"></list-right-panel>


      <common-list :groupData="groupData">
          <div class="group-item" @click="goInfoPage(1)">
              <div @click.stop="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
              <div class="item-block">
                <div class="item-div item-first-div">
                    <span>Todd Scott</span><span class="right">UEA</span>
                </div>
                <div class="item-div">
                    <span>Alirlines</span><span class="right">Jessie Zhao</span>
                </div>
                <div class="item-div">
                  <span>China</span><span class="right">Asia Pacific</span>
                </div>
              </div>
          </div>
          <div class="group-item" @click="goInfoPage(2)">
              <div @click.stop="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
              <div class="item-block">
                <div class="item-div item-first-div">
                    <span>Todd Scott</span><span class="right">UEA</span>
                </div>
                <div class="item-div">
                    <span>Alirlines</span><span class="right">Jessie Zhao</span>
                </div>
                <div class="item-div">
                  <span>China</span><span class="right">Asia Pacific</span>
                </div>
              </div>
          </div>
          <div class="group-item" @click="goInfoPage(3)">
              <div @click.stop="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
              <div class="item-block">
                <div class="item-div item-first-div">
                    <span>Todd Scott</span><span class="right">UEA</span>
                </div>
                <div class="item-div">
                    <span>Alirlines</span><span class="right">Jessie Zhao</span>
                </div>
                <div class="item-div">
                  <span>China</span><span class="right">Asia Pacific</span>
                </div>
              </div>
          </div>
          <div class="group-item" @click="goInfoPage(4)">
              <div @click.stop="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
              <div class="item-block">
                <div class="item-div item-first-div">
                    <span>Todd Scott</span><span class="right">UEA</span>
                </div>
                <div class="item-div">
                    <span>Alirlines</span><span class="right">Jessie Zhao</span>
                </div>
                <div class="item-div">
                  <span>China</span><span class="right">Asia Pacific</span>
                </div>
              </div>
          </div>
      </common-list>

      <!-- <div id="page-content" class="page-content">
            <div class="group-div">
                <div class="date-div open" @click="groupToggle($event)">
                    <span class="calcfont calc-fenlei"></span>
                    <span class="group-name">Alirline</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group-div">
                <div class="date-div open" @click="groupToggle($event)">
                    <span class="calcfont calc-fenlei"></span>
                    <span class="group-name">Alirline</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group-div">
                <div class="date-div open" @click="groupToggle($event)">
                    <span class="calcfont calc-fenlei"></span>
                    <span class="group-name">Alirline</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              <span>Todd Scott</span><span class="right">UEA</span>
                          </div>
                          <div class="item-div">
                              <span>Alirlines</span><span class="right">Jessie Zhao</span>
                          </div>
                          <div class="item-div">
                            <span>China</span><span class="right">Asia Pacific</span>
                          </div>
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
            key:'organizations',
            title:lanTool.lanContent('174_客户'),

            isFirstEnter:false, // 是否第一次进入，默认false

            //传给列表组件的数据
            listData:{
                queryUrl : tool.ajaxUrl_Accounts_Query,//列表查询接口地址
                deleteUrl : tool.ajaxUrl_Accounts_Delete,//记录删除接口
                isUsePager : true,//是否分页

            },

            //侧滑数据模型
            rigthPanelData:[
                {
                  groupText:'Categories by 按...分类',
                  type:'radio',
                  default:'businessSector',
                  items:[
                      {text:'Business Sector 业务分类',value:'businessSector'},
                      {text:'Area/Region 区域',value:'Area/Region'},
                      {text:'Country 国家',value:'country'},
                      {text:'Account Manager 客户经理',value:'accountManager'}
                  ]
                },
                {
                  groupText:'Data Filter 数据筛选',
                  type:'checkbox',
                  default:'allOrganizations',
                  items:[
                      {text:'All Organizations 所有公司',value:'allOrganizations'},
                      {text:'My Followed Organizations 关注的公司',value:'myFollowedOrganizations'},
                      {text:'Existing Customer 现有客户',value:'existingCustomer'},
                  ]
                },

            ],
            //侧滑搜索页面数据模型
            organizationsSearchData:[
              {
                  type:'input',
                  field:'potentialname',
                  queryType:'string',
                  text:'Organizations Name',
                  value:'',
              },
              {
                  type:'picker',
                  field:'cf_771',
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
                  iconClass:'calc-fenlei',
                  items:[]
                },
                {
                  groupName:'Alan',
                  count:1,
                  iconClass:'calc-fenlei',
                  items:[]
                },
                {
                  groupName:'Kity',
                  count:2,
                  iconClass:'calc-fenlei',
                  items:[]
                },
                {
                  groupName:'Alan123',
                  count:1,
                  iconClass:'calc-fenlei',
                  items:[]
                },
            ],
        }
      },

      methods:{
          //点击关注/取消关注
          followToggle:function(id, e){
              var el = e.target;
              if($(el).hasClass('calc-shoucang')){
                  //取消关注
                  $(el).removeClass('calc-shoucang').addClass('calc-shoucang1')
                  $.toast("取消关注", 1500, function() {});
              }else{
                  //关注
                  $(el).removeClass('calc-shoucang1').addClass('calc-shoucang')
                  $.toast("关注成功", 1500, function() {});

              }
          },

          //点击去详情页
          goInfoPage:function(id){
              var _self = this,
                url = '/organizationsinfo/{"AutoID":"'+ id +'"}';
                _self.$router.push(url);
          }


      },



      beforeRouteEnter:function(to, from, next){
            if(from.name === 'organizationsinfo' || from.name === 'selectlist'){
                to.meta.isBack = true;
            }
            next();
      },




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
.item-stars-icon{display: inline-block;width: 0.6rem;height:0.6rem;line-height:0.6rem;text-align:center;position: absolute;top:8px;left:0.2rem;font-size:0.5rem;color:#ccc;}
.calc-shoucang{color:#ff5a21}
.date-div .calcfont{color:#ff5a21;margin-right:8px;}
.group-name{font-size: 0.3rem;}
.occupy-div{height:30px;display:none;} */

.group-item{background:#fff;position:relative;}
.item-block{padding:5px 10px 5px 1rem;}
.group-item::after{content:'';display:block;height: 1px;background:#3cadf9;width:100%;left:0;bottom:0;}
.item-div{font-size: 0.25rem;line-height: 0.5rem;padding-top:5px;}
.item-first-div{font-weight: 600;color:#ff5a21;}

</style>
