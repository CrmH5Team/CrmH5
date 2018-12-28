<template>
  <div>
      <Listheader :title="title"></Listheader>

      <!--  右侧侧滑 -->
      <list-right-panel :panelData="rigthPanelData" :searchData="opportunitiesSearchData"></list-right-panel>

      <common-list :groupData="groupData">
          <div class="group-item">
              <div @click="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
              <div class="item-block">
                <div class="item-div item-first-div">
                    A320-200 sales project2 for to Eastern  Airlines
                </div>
                <div class="item-div">
                    <span class="item-new">new</span><span style="font-weight:600;">Proposal discussion</span>
                </div>
                <div class="item-div">
                    <span>Normal</span><span class="right">Active</span>
                </div>
                <div class="item-div">
                  <span>Cheryl Xiong</span><span class="right">1/Oct/2018 - 31/Dec/2018</span>
                </div>
                <div class="item-div item-last-div">Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description,</div>
              </div>
          </div>
          <div class="group-item">
              <div @click="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
              <div class="item-block">
                <div class="item-div item-first-div">
                    A320-200 sales project2 for to Eastern  Airlines
                </div>
                <div class="item-div">
                    <span class="item-new">new</span><span style="font-weight:600;">Proposal discussion</span>
                </div>
                <div class="item-div">
                    <span>Normal</span><span class="right">Active</span>
                </div>
                <div class="item-div">
                  <span>Cheryl Xiong</span><span class="right">1/Oct/2018 - 31/Dec/2018</span>
                </div>
                <div class="item-div item-last-div">Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description,</div>
              </div>
          </div>
          <div class="group-item">
              <div @click="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
              <div class="item-block">
                <div class="item-div item-first-div">
                    A320-200 sales project2 for to Eastern  Airlines
                </div>
                <div class="item-div">
                    <span class="item-new">new</span><span style="font-weight:600;">Proposal discussion</span>
                </div>
                <div class="item-div">
                    <span>Normal</span><span class="right">Active</span>
                </div>
                <div class="item-div">
                  <span>Cheryl Xiong</span><span class="right">1/Oct/2018 - 31/Dec/2018</span>
                </div>
                <div class="item-div item-last-div">Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description,</div>
              </div>
          </div>
      </common-list>
      <!-- <div id="page-content" class="page-content">
            <div class="group-div">
                <div class="date-div open" @click="groupToggle($event)">
                    <span class="calcfont calc-yewujihui"></span>
                    <span class="group-name">Marketing team（PRC）</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              A320-200 sales project2 for to Eastern  Airlines
                          </div>
                          <div class="item-div">
                              <span class="item-new">new</span><span style="font-weight:600;">Proposal discussion</span>
                          </div>
                          <div class="item-div">
                              <span>Normal</span><span class="right">Active</span>
                          </div>
                          <div class="item-div">
                            <span>Cheryl Xiong</span><span class="right">1/Oct/2018 - 31/Dec/2018</span>
                          </div>
                          <div class="item-div item-last-div">Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description,</div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              A320-200 sales project2 for to Eastern  Airlines
                          </div>
                          <div class="item-div">
                              <span class="item-new">new</span><span style="font-weight:600;">Proposal discussion</span>
                          </div>
                          <div class="item-div">
                              <span>Normal</span><span class="right">Active</span>
                          </div>
                          <div class="item-div">
                            <span>Cheryl Xiong</span><span class="right">1/Oct/2018 - 31/Dec/2018</span>
                          </div>
                          <div class="item-div item-last-div">Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description,</div>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item-stars-icon calcfont calc-shoucang1"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div">
                              A320-200 sales project2 for to Eastern  Airlines
                          </div>
                          <div class="item-div">
                              <span class="item-new">new</span><span style="font-weight:600;">Proposal discussion</span>
                          </div>
                          <div class="item-div">
                              <span>Normal</span><span class="right">Active</span>
                          </div>
                          <div class="item-div">
                            <span>Cheryl Xiong</span><span class="right">1/Oct/2018 - 31/Dec/2018</span>
                          </div>
                          <div class="item-div item-last-div">Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description, Some detailed description,</div>
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
            key:'opportunities',
            title:lanTool.lanContent("173_销售机会"),

            isFirstEnter:false, // 是否第一次进入，默认false

            //传给列表组件的数据
            listData:{
                queryUrl : tool.ajaxUrl_Potentials_Query,//列表查询接口地址
                deleteUrl : tool.ajaxUrl_Potentials_Delete,//记录删除接口
                isUsePager : true,//是否分页
            },
            //侧滑数据模型
            rigthPanelData:[
                {
                  groupText:'Categories by 按...分类',
                  type:'radio',
                  default:'group',
                  items:[
                      {text:'Group 用户组',value:'group'},
                      {text:'User 用户',value:'user'},
                      {text:'Priority 优先级',value:'priority'},
                      {text:'Business Sector 业务分类',value:'businessSector'},
                      {text:'Area/Region 区域',value:'Area/Region'},
                      {text:'Country 国家',value:'country'}
                  ]
                },
                {
                  groupText:'Data Filter 数据筛选',
                  type:'checkbox',
                  default:'allOpportunities',
                  items:[
                      {text:'All Opportunities',value:'allOpportunities'},
                      {text:'My Followed Opportunities',value:'myFollowedOpportunities'},
                      {text:'Active 有效的',value:'active'},
                      {text:'High Priority 优先级高',value:'highPriority'}
                  ]
                },

            ],
            //侧滑搜索页面数据模型
            opportunitiesSearchData:[
              {
                  type:'input',
                  field:'name',
                  queryType:'string',
                  text:'Opportunity Name',
                  value:'',
              },
              {
                  type:'picker',
                  field:'cf_771',
                  queryType:'string',
                  text:'Latest progress 最新的流程',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'picker',
                  field:'cf_765',
                  queryType:'string',
                  text:'Priority 优先级',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'picker',
                  field:'cf_771',
                  queryType:'string',
                  text:'Status 状态',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'selectlist',
                  field:'related_to',
                  queryType:'string',
                  queryUrl:"Accounts/Query",
                  text:'Initiator发起人',
                  selectType:'radio',
                  value:{
                      text:'',
                      value:''
                  }
              },
              {
                  type:'datepicker',
                  field:'closingdate',
                  queryType:'string',
                  text:'Start Date Range 起始日期范围',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
              },
              {
                  type:'datepicker',
                  field:'closingdate',
                  queryType:'string',
                  text:'Planning Closing Date Range 计划结束日期',
                  value:'',
                  id:Number((new Date()).valueOf()) + count++
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
              }
            ],

            groupData:[
                {
                  groupName:'Alirline',
                  count:3,
                  iconClass:'calc-yewujihui',
                  items:[]
                },
                {
                  groupName:'Alan',
                  count:1,
                  iconClass:'calc-yewujihui',
                  items:[]
                },
                {
                  groupName:'Kity',
                  count:2,
                  iconClass:'calc-yewujihui',
                  items:[]
                },
                {
                  groupName:'Alan123',
                  count:1,
                  iconClass:'calc-yewujihui',
                  items:[]
                },
            ],
        }
      },

      beforeRouteEnter:function(to, from, next){

            if(from.name === 'opportunitiesinfo' || from.name === 'selectlist'){
                to.meta.isBack = true;
            }
            next();
      },

      mounted:function(){

      },

      methods: {
          //点击关注/取消关注
          followToggle:function(id, e){
              var el = e.target;
              if($(el).hasClass('calc-shoucang')){
                  //取消关注
                  $(el).removeClass('calc-shoucang').addClass('calc-shoucang1');
                  $.toast("取消关注", 1500, function() {});
              }else{
                  //关注
                  $(el).removeClass('calc-shoucang1').addClass('calc-shoucang');
                  $.toast("关注成功", 1500, function() {});
              }
          }
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
.item-stars-icon{display: inline-block;width: 0.6rem;height:0.6rem;line-height:0.6rem;text-align:center;position: absolute;top:8px;left:0.2rem;font-size:0.5rem;color:#ccc;}
.calc-shoucang{color:#ff5a21}
.date-div .calcfont{color:#3cadf9;margin-right:8px;}
.group-name{font-size: 0.3rem;}
.occupy-div{height:30px;display:none;}
*/



.group-item{background:#fff;position:relative;}
.item-block{padding:5px 10px 5px 1rem;}
.group-item::after{content:'';display:block;height: 1px;background:#3cadf9;width:100%;left:0;bottom:0;}
.item-div{font-size: 0.25rem;line-height: 0.5rem;padding-top:5px;}

.item-new{color:#ff5a21;border:1px solid #ff5a21;display: inline-block;border-radius: 2px;
box-sizing: border-box;padding:0px 5px;height: 16px;line-height:16px;font-size: 0.2rem;vertical-align:middle;
margin-right: 5px;}

.item-first-div{font-weight: 600;color:#3cadf9;width: 100%;}
.item-last-div{line-height:0.4rem;}

</style>
