<template>
  <div>
      <Listheader :title="title"></Listheader>

      <!--  右侧侧滑 -->
      <div id="mask" class="mask" @click="panelToggle" v-show="showRightPanel"></div>
      <div id="right-content" class="right-content">
          <div class="right-content-block">
              <div class="right-block-title">Categories by 按...分类</div>
              <div class="right-block-items">
                  <div class="radios-div" >
                        <label class="radios-label">
                            <input type="radio" name="classification" value="group" v-model="classificationValue"/><i class="radios"></i><span>Group 用户组</span>
                        </label>
                  </div>
                  <div class="radios-div">
                        <label class="radios-label">
                            <input type="radio" name="classification" value="user" v-model="classificationValue"/><i class="radios"></i> <span>User 用户</span>
                        </label>
                  </div>
                  <div class="radios-div" >
                        <label class="radios-label">
                            <input type="radio" name="classification" value="priority" v-model="classificationValue"/><i class="radios"></i><span>Priority 优先级</span>
                        </label>
                  </div>
                  <div class="radios-div">
                        <label class="radios-label">
                            <input type="radio" name="classification" value="businessSector" v-model="classificationValue"/><i class="radios"></i> <span>Business Sector 业务分类</span>
                        </label>
                  </div>
                  <div class="radios-div">
                        <label class="radios-label">
                            <input type="radio" name="classification" value="Area/Region" v-model="classificationValue"/><i class="radios"></i> <span>Area/Region 区域</span>
                        </label>
                  </div>
                  <div class="radios-div">
                        <label class="radios-label">
                            <input type="radio" name="classification" value="country" v-model="classificationValue"/><i class="radios"></i> <span>Country 国家</span>
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
                            <span>All Opportunities 所有商业机会</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="visiable-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>My Followed Opportunities</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="active" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>Active 有效的</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="highPriority" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>High Priority 优先级高</span>
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
                <div class="date-div open" >
                    <span class="calcfont calc-yewujihui"></span>
                    <span class="group-name">Marketing team（PRC）</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item">
                    <div class="item-user-icon calcfont calc-shoucang"></div>
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
                    <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                    <div class="item-user-icon calcfont calc-shoucang1"></div>
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
            key:'opportunities',
            title:lanTool.lanContent("173_销售机会"),

            isFirstEnter:false, // 是否第一次进入，默认false

            //传给列表组件的数据
            listData:{
                queryUrl : tool.ajaxUrl_Potentials_Query,//列表查询接口地址
                deleteUrl : tool.ajaxUrl_Potentials_Delete,//记录删除接口
                isUsePager : true,//是否分页
            },
            //传给Sortscreen组件
            sortScreenData:{
                sort:[
                    {'text':lanTool.lanContent('180_按销售机会名称正序排列'),'sortOrder':'ASC','sortName':'potentialname','id':'opportunities01'},
                    {'text':lanTool.lanContent('181_按销售机会名称倒序排列'),'sortOrder':'DESC','sortName':'potentialname','id':'opportunities02'},
                    {'text':lanTool.lanContent('184_按日期正序排列'),'sortOrder':'ASC','sortName':'closingdate','id':'opportunities03'},
                    {'text':lanTool.lanContent('185_按日期倒序排列'),'sortOrder':'DESC','sortName':'closingdate','id':'opportunities04'}
                ],
                screen:[
                    {
                        field:'potentialname',
                        queryType:'string',
                        text:lanTool.lanContent('173_销售机会'),
                        comp:[
                            {
                                type:'input',
                                field:'potentialname',
                                placeholder:lanTool.lanContent('186_请输入销售机会名称'),
                                value:'',
                            }
                        ]
                    },
                    {
                        field:'related_to',
                        queryType:'string',
                        text:lanTool.lanContent('26_公司名称'),
                        comp:[
                            {
                                type:'selectlist',
                                field:'related_to',
                                queryUrl:"Accounts/Query",
                                placeholder:lanTool.lanContent('202_请选择公司'),
                                data:{
                                    text:'',
                                    value:''
                                }
                            }
                        ]
                    },
                    {
                        field:'closingdate',
                        queryType:'string',
                        text:lanTool.lanContent('156_日期'),
                        comp:[
                            {
                                type:'datepicker',
                                field:'stardate',
                                placeholder:lanTool.lanContent('187_请选择开始日期'),
                                value:''
                            },
                            {
                                type:'datepicker',
                                field:'enddate',
                                placeholder:lanTool.lanContent('188_请选择结束日期'),
                                value:''
                            },
                        ]
                    }
                ]
            },

            showRightPanel:false,
            classificationValue:'group',  //右侧分类
            dataFilter:[],
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
.item-user-icon{display: inline-block;width: 0.6rem;height:0.6rem;line-height:0.6rem;text-align:center;position: absolute;top:8px;left:0.2rem;font-size:0.5rem;color:#ccc;}
.calc-shoucang{color:#ff5a21}
.item-user-icon::after{color:#3cadf9;}
.date-div .calcfont{color:#3cadf9;margin-right:8px;}
.group-name{font-size: 0.3rem;}
.occupy-div{height:30px;display:none;}

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
