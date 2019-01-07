<template>
<div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">
        <div class="nav sticky">
            <div @click="switchPage(0,$event)" class="nav-item f16 active-item">Deal Pipeline</div>
            <div @click="switchPage(1,$event)" class="nav-item f16" >Opportunities</div>
            <div class="nav-border"></div>
        </div>

        <div v-show="showPage == 0" class="pageList">
              <div class="add-btn-div">
                    <div class="add-div">
                        <span class="calcfont calc-add"></span>
                        <span class="add-text">Add Deal</span>
                    </div>
              </div>
              <!-- 列表 -->
              <common-list :groupData="groupData">
                    <div class="group-item f14" >
                        <div @click.stop="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
                        <div class="item-block">
                          <div class="item-div item-first-div blue-color">
                              A320-200 sales project2 for
                          </div>
                          <div class="item-div padding-top-5">测试交易，注意事项，跟进交易，其他备忘信息，其他备忘信息，其他备忘信息。</div>
                          <div class="item-div blue-color padding-bottom-5">
                              <span>In Progress</span>
                          </div>
                          <div class="item-div">
                              <div class="item-new">new</div>
                              <span class="itme-div-span">First Proposal discussion</span>
                          </div>
                          <div class="item-div dete-div">
                            <span>01/Jan/2019</span>
                          </div>
                        </div>
                    </div>
              </common-list>
        </div>

        <div v-show="showPage == 1" class="pageList">
              <div class="add-btn-div">
                    <div class="add-div">
                        <span class="calcfont calc-add"></span>
                        <span class="add-text">Add Opportunity</span>
                    </div>
              </div>
              <!-- 列表 -->
              <common-list :groupData="groupData">
                    <div class="group-item f14" >
                        <div @click.stop="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
                        <div class="item-block">
                            <div class="item-div item-first-div blue-color">
                                A320-200 sales project2 for
                            </div>
                            <div class="item-div blue-color padding-bottom-5 padding-top-5">
                                <span>In Progress</span>
                            </div>
                            <div class="item-div">测试交易，注意事项，跟进交易，其他备忘信息，其他备忘信息，其他备忘信息。</div>
                        </div>
                    </div>
                    <div class="group-item f14" >
                        <div @click.stop="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
                        <div class="item-block">
                            <div class="item-div item-first-div blue-color">
                                A320-200 sales project2 for
                            </div>
                            <div class="item-div blue-color padding-bottom-5 padding-top-5">
                                <span>In Progress</span>
                            </div>
                            <div class="item-div">测试交易，注意事项，跟进交易，其他备忘信息，其他备忘信息，其他备忘信息。</div>
                        </div>
                    </div>
                    <div class="group-item f14" >
                        <div @click.stop="followToggle(100,$event)" class="item-stars-icon calcfont calc-shoucang"></div>
                        <div class="item-block">
                            <div class="item-div item-first-div blue-color">
                                A320-200 sales project2 for
                            </div>
                            <div class="item-div blue-color padding-bottom-5 padding-top-5">
                                <span>In Progress</span>
                            </div>
                            <div class="item-div">测试交易，注意事项，跟进交易，其他备忘信息，其他备忘信息，其他备忘信息。</div>
                        </div>
                    </div>
              </common-list>
        </div>


    </div>


    <!--  右侧侧滑 -->
    <list-right-panel :panelData="rigthPanelData" :searchData="businessSearchData"></list-right-panel>

</div>
</template>

<script>
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
import Commonlist from '../common/Commonlist'
var count = 0;
export default {
    components:{
        'Header':Header,
        'list-right-panel':Listrightpanel,
        'common-list':Commonlist
    },
    data(){
        return {
            title:'Business',
            showPage:0,

            //侧滑数据模型
            rigthPanelData:[
                {
                  groupText:'Data Filter 数据筛选',
                  type:'checkbox',
                  default:'allContactss',
                  items:[
                      {text:'All 所有',value:'allContactss'},
                      {text:'My Followed Data',value:'publicContacts'},
                      {text:'In Process 进行中的',value:'privateContacts'}
                  ]
                },

            ],
            //侧滑搜索页面数据模型
            businessSearchData:[
                {
                    module:'Deal Pipeline',
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
                            text:'Created by 创建者',
                            selectType:'radio',
                            value:{
                                text:'',
                                value:''
                            }
                        }
                    ]
                },
                {
                    module:'Opportunities',
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
                  iconClass:'calc-lianxiren1',//calc-lianxiren1
                  items:[]
                },
                {
                  groupName:'Alirline123',
                  count:3,
                  iconClass:'calc-lianxiren1',//calc-lianxiren1
                  items:[]
                },
                {
                  groupName:'Alirline111',
                  count:3,
                  iconClass:'calc-lianxiren1',//calc-lianxiren1
                  items:[]
                },
            ],

        }
    },
    mounted:function(){
        eventBus.$on('showRightPanel',this.panelToggle);

        this.changePos();
    },
    methods:{

        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
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
    },
    beforeDestroy:function(){
        eventBus.$off('showRightPanel');
    }

}
</script>

<style scoped>
@import "../../assets/css/common/commonlist.css";


/*列表 style*/
.group-item{background:#fff;position:relative;}
.item-block{padding:5px 10px 5px 0.8rem;}
.group-item::after{content:'';display:block;height: 1px;background:#e5f0f4;width:100%;left:0;top:0px;position:absolute;}
.item-div{line-height: 0.4rem;}

.item-new{color:#ff5a21;border:1px solid #ff5a21;display: inline-block;border-radius:3px;
box-sizing: border-box;height: 14px;line-height:14px;width:30px;font-size:12px;vertical-align:middle;text-align: center;
margin-right: 5px;}
.itme-div-span{vertical-align: middle;}

.item-first-div{font-weight: 600;width: 100%;padding:5px 0 3px;line-height: 0.3rem;}
.dete-div{padding-left:40px;}

.blue-color{color:#3cadf9;}
.padding-bottom-5{padding-bottom: 5px;}
.padding-top-5{padding-top: 5px;}


</style>
