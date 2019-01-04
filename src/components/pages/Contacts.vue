<template>
<div>
      <Header class="header sticky" :title="title"></Header>

      <div id="page-content" class="page-content">
          <div id="nav" class="nav sticky">
              <div @click="switchPage(0,$event)" class="nav-item f16 active-item">Organizations</div>
              <div @click="switchPage(1,$event)" class="nav-item f16" >Contacts</div>
              <div class="nav-border"></div>
          </div>

          <div v-show="showPage == 0" class="pageList">
                <div class="add-btn-div">
                      <div class="add-div">
                          <span class="calcfont calc-add"></span>
                          <span class="add-text">Add Organization</span>
                      </div>
                </div>
                <!-- 列表 -->
                <common-list :groupData="groupData">
                      <div class="group-item" >
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
                      <div class="group-item" >
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
          </div>

          <div v-show="showPage == 1" class="pageList">
                <div class="add-btn-div">
                      <div class="add-div">
                          <span class="calcfont calc-add"></span>
                          <span class="add-text">Add Contact</span>
                      </div>
                </div>
                <!-- 列表 -->
                <common-list :groupData="groupData">
                      <div class="group-item">
                          <div class="item-user-icon calcfont calc-fuzeren1"></div>
                          <div class="item-block contacts-item-block">
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
                          <div class="item-block contacts-item-block">
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
                          <div class="item-block contacts-item-block">
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
                          <div class="item-block contacts-item-block">
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
          </div>
      </div>

      <!--  右侧侧滑 -->
      <list-right-panel :panelData="rigthPanelData" :searchData="cantactsSearchData"></list-right-panel>



</div>
</template>



<script>
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Commonlist from '../common/Commonlist'

// import Mixins from '../../mixins'
var count = 0;
export default {
      // mixins: [Mixins.PAGE_LIST],
      components:{
        'Header':Header,
        'list-right-panel':Listrightpanel,
        'common-list':Commonlist
      },
      data (){
        return {
            key:'contacts',
            title:lanTool.lanContent('175_联系人'),
            showPage:0,

            isFirstEnter:false, // 是否第一次进入，默认false

            //侧滑数据模型
            rigthPanelData:[
                {
                  groupText:'Data Filter 数据筛选',
                  type:'checkbox',
                  default:'allContactss',
                  items:[
                      {text:'All 所有',value:'allContactss'},
                      {text:'My Followed  Organizations',value:'publicContacts'}
                  ]
                },

            ],
            //侧滑搜索页面数据模型
            cantactsSearchData:[
                {
                    module:'Organizations',
                    searchItems:[
                          {
                              type:'input',
                              field:'name',
                              queryType:'string',
                              text:'Organization Name 公司名称',
                              value:'',
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
                              selectType:'radio',
                              value:{
                                  text:'',
                                  value:''
                              }
                          }
                    ]
                },
                {
                    module:'Contacts',
                    searchItems:[
                          {
                              type:'input',
                              field:'name',
                              queryType:'string',
                              text:'Name',
                              value:'',
                          },
                          {
                              type:'picker',
                              field:'cf_765',
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
                              selectType:'checkbox',
                              resulteRow:false, //第二行显示结果
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
                              text:'Organization公司',
                              selectType:'checkbox',
                              resulteRow:true, //第二行显示结果
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
                        }
                    ]
                }
            ],

            // 列表数据
            groupData:[
                {
                  groupName:'Alirline',
                  count:3,
                  iconClass:'calc-business',
                  items:[]
                },
                {
                  groupName:'Alirline',
                  count:3,
                  iconClass:'calc-business',
                  items:[]
                },
                {
                  groupName:'Alirline',
                  count:3,
                  iconClass:'calc-business',
                  items:[]
                },
                {
                  groupName:'Alirline',
                  count:3,
                  iconClass:'calc-business',
                  items:[]
                },
                {
                  groupName:'Alirline',
                  count:3,
                  iconClass:'calc-business',
                  items:[]
                },
            ],
        }
      },

      beforeRouteEnter:function(to, from, next){
            if(from.name === 'contactsinfo' || from.name === 'selectlist'){
                to.meta.isBack = true;
            }
            next();
      },
      mounted:function(){
          eventBus.$on('showRightPanel',this.panelToggle);
          this.changePos();

      },
      methods: {
          //点击去详情页
          goInfoPage:function(id){
              var _self = this,
                url = '/contactsinfo/{"AutoID":"'+ id +'"}';
                _self.$router.push(url);
          },
          //切换页面
          switchPage:function(num, e){
              var _self = this;
              var el = e.target;
              if(num === undefined) return;
              $(el).addClass('active-item').siblings().removeClass('active-item');
              // _self.swiper.slideTo(num, 500, false);
              _self.changePos();
              _self.showPage = num;
          },
          //table底部横条过渡效果
          changePos:function() {
              this.$nextTick(function(){
                  var activePos = $('.nav .active-item').position();
                  $('.nav-border').stop().css({
                      left: activePos.left,
                      width: $('.nav .active-item').width()
                  });
              })
          },
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
          },
      }




}
</script>


<style scoped>
@import "../../assets/css/common/commonlist.css";

/*list----style----*/
.group-item{background:#fff;position:relative;}
.item-block{padding:5px 10px 5px 0.8rem;}
.group-item::after{content:'';display:block;height: 1px;background:#e5f0f4;width:100%;left:0;
top:0px;position:absolute;}
.item-div{font-size: 0.25rem;line-height: 0.4rem;}
.item-first-div{font-weight: 600;color:#ff5a21;padding-top:5px;}

/*Contacts list  style*/
.item-user-icon{display: inline-block;width: 0.8rem;height:0.8rem;line-height:0.8rem;text-align:center;border: 1px solid #3cadf9;position: absolute;top:10px;left:0.25rem;border-radius: 5px;font-size:0.6rem;color:#3cadf9;}
.contacts-item-block{padding:5px 10px 5px 1.3rem;}


</style>
