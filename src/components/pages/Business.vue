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
                    <router-link to="/opportunitiesinfo/0" class="add-div" >
                        <span class="calcfont calc-add"></span>
                        <span class="add-text">Add Deal</span>
                    </router-link>
              </div>
              <!-- 列表 -->
              <div id="dealpipelineList"></div>
        </div>

        <div v-show="showPage == 1" class="pageList">
              <div class="add-btn-div">
                    <router-link to="/opportunitiesinfo/0" class="add-div" >
                        <span class="calcfont calc-add"></span>
                        <span class="add-text">Add Opportunity</span>
                    </router-link>
              </div>
              <!-- 列表 -->
              <div id="opportunitiesList"></div>
        </div>


    </div>


    <!--  右侧侧滑 -->
    <list-right-panel :panelData="rigthPanelData" :searchData="searchData"></list-right-panel>

</div>
</template>

<script>
import Header from '../common/Listheader'
import Listrightpanel from '../common/Listrightpanel'
// import Commonlist from '../common/Commonlist'
var count = 0;
export default {
    components:{
        'Header':Header,
        'list-right-panel':Listrightpanel,
        // 'common-list':Commonlist
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
            searchData:{},
            dealPipelineSearch:[
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
            ],
            opportunitiesSearch:[
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
            ],



        }
    },
    mounted:function(){
        var _self = this;

        _self.searchData = _self.dealPipelineSearch;
        tool.InitiateGroupList('dealPipeline',$('#dealpipelineList'));

        _self.changePos();
        _self.watchScroll();
        _self.goInfoPage();
        _self.groupToggle();
        _self.followToggle();
    },
    methods:{
        //监听滚动固定
        watchScroll:function(){
            var _self = this;
            setTimeout(function(){
                var headerH = parseFloat($('header').innerHeight());
                var navH = parseFloat($('.nav').innerHeight());
                $(window).scroll(function(){

                    if($('.group-div').length <= 0) return ;
                    $('.group-div').each(function(){
                        if($(this).offset().top - $(window).scrollTop() <= (headerH + navH) ){

                            if(tool.getSystem() === 'ios'){
                                $(this).find('.date-div').addClass('sticky').css({"top": headerH + navH + 'px'});
                            }else{
                                $(this).find('.date-div').css({"position":"fixed","top": headerH + navH + 'px'});
                                $(this).find('.occupy-div').show();
                            }

                        }else{
                            if(tool.getSystem() === 'ios'){
                                $(this).find('.date-div').removeClass('sticky').css({"top":'0px'});
                            }else{
                                $(this).find('.date-div').css({"position":"static"});
                                $(this).find('.occupy-div').hide();
                            }
                        }

                    })
                })
            },100)
        },

        //列表展开收起
        groupToggle:function(){
            $("#dealpipelineList,#opportunitiesList").on("click","div.date-div",function(event){
                var target = $(event.target);
                if(!target.hasClass('date-div')){
                    target = target.closest('div.date-div');
                    if(target == undefined){
                        return;
                    }
                }
                if(target.hasClass('open')){
                    target.removeClass('open').siblings('.group-item-list').slideUp(500);
                }else{
                    target.addClass('open').siblings('.group-item-list').slideDown(500);
                }
            })
        },

        //点击去详情页
        goInfoPage:function(id){
            var _self = this;
            $("#dealpipelineList,#opportunitiesList").on("click","div.group-item",function(event){
                var target = $(event.target);
                if(!target.hasClass('group-item')){
                    target = target.closest('div.group-item');
                    if(target == undefined){
                        return;
                    }
                }
                var url = target.attr('data-url') || '';
                _self.$router.push(url);
            })
        },

        //切换页面
        switchPage:function(num, e){
            var _self = this;
            var el = e.target;
            if(num === undefined) return;
            $(el).addClass('active-item').siblings().removeClass('active-item');
            _self.changePos();
            _self.showPage = num;

            var container = null;
            var moduleName = '';
            if(num == 0){
                _self.searchData = _self.dealPipelineSearch;

                moduleName = 'dealPipeline';
                container = $('#dealpipelineList');
            }else{
                _self.searchData = _self.opportunitiesSearch;

                moduleName = 'opportunities';
                container = $('#opportunitiesList');
            }
            tool.InitiateGroupList(moduleName,container);


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
        followToggle:function(){

            $("#dealpipelineList,#opportunitiesList").on("click",".item-stars-icon",function(event){

                event.stopPropagation();
                var target = $(event.target);
                if(target.hasClass('calc-shoucang')){
                    //取消关注
                    target.removeClass('calc-shoucang').addClass('calc-shoucang1');
                    $.toast("取消关注", 1500, function() {});
                }else{
                    //关注
                    target.removeClass('calc-shoucang1').addClass('calc-shoucang');
                    $.toast("关注成功", 1500, function() {});
                }
            })
        },
    },

}
</script>

<style scoped>
@import "../../assets/css/common/commonlist.css";
</style>




<style >

/*列表 style*/
/* .group-item{background:#fff;position:relative;}
.item-block{padding:5px 10px 5px 0.8rem;}
.group-item::after{content:'';display:block;height: 1px;background:beige;width:100%;left:0;top:0px;position:absolute;}
.item-div{line-height: 0.4rem;}
.item-new{color:#ff5a21;border:1px solid #ff5a21;display: inline-block;border-radius:3px;
box-sizing: border-box;line-height:14px;width:30px;font-size:12px;vertical-align:middle;text-align: center;
margin-right: 5px;}
.itme-div-span{vertical-align: middle;}
.item-first-div{font-weight: 600;width: 100%;padding:5px 0 3px;line-height: 0.3rem;}
.dete-div{padding-left:40px;}
.blue-color{color:#3cadf9;}
.padding-bottom-5{padding-bottom: 5px;}
.padding-top-5{padding-top: 5px;} */


</style>
