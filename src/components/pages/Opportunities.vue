<template>
  <div>
      <Listheader :title="title"></Listheader>

      <Sortscreen :key="key" :sortScreenData="sortScreenData"></Sortscreen>

      <Commonlist :listData="listData">
          <template slot-scope="slotProps">
                <div class="weui-cell__hd">
                    <input type="checkbox" class="weui-check" name="checkbox1" :id="slotProps.item.id" >
                    <label :for="slotProps.item.id" class="weui-icon-checked"></label>
                </div>

                <router-link :to="'/opportunitiesinfo/{\'AutoID\':\''+slotProps.item.id+'\'}'" class="weui-cell__bd" :data-id="slotProps.item.id">
                      <div class="title">{{slotProps.item.potentialname}}</div>
                      <div>
                        <span class="right">{{slotProps.item.closingdate}}</span>
                        <p class="">{{slotProps.item.related_to}}</p>
                      </div>
                </router-link>

          </template>
      </Commonlist>


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

/*列表中每一项style*/
.weui-cell__hd{display:none;}
.weui-check:checked + .weui-icon-checked:before{color:#3cadf9;}
.weui-cell__bd{line-height: inherit;font-size:0.28rem;
    padding: 10px 15px;
    margin: 0 -15px;}
.weui-cell__bd .title{line-height: 26px;color:#000;overflow: hidden;
    text-overflow: ellipsis;-webkit-line-clamp: 1;
    word-break: break-all;display: -webkit-box;
    -webkit-box-orient: vertical;}
.weui-cell__bd p{color:#595959;font-size: 0.2rem;
    overflow: hidden;text-overflow: ellipsis;
    -webkit-line-clamp: 1;word-break: break-all;
    display: -webkit-box;-webkit-box-orient: vertical;
    }
.weui-cell__bd span{font-size:0.2rem;color: #595959;}

</style>
