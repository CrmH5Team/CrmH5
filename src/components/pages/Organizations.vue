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
                            <input type="radio" name="classification" value="businessSector" v-model="classificationValue"/><i class="radios"></i><span>Business Sector 业务分类</span>
                        </label>
                  </div>
                  <div class="radios-div">
                        <label class="radios-label">
                            <input type="radio" name="classification" value="Area/Region" v-model="classificationValue"/><i class="radios"></i> <span>Area/Region 区域</span>
                        </label>
                  </div>
                  <div class="radios-div" >
                        <label class="radios-label">
                            <input type="radio" name="classification" value="country" v-model="classificationValue"/><i class="radios"></i><span>Country 国家</span>
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
              <div class="right-block-title">Data Display 数据显示</div>
              <div class="right-block-items">
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="my-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>All Organizations 所有公司</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="visiable-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>My Followed Organizations 关注的公司</span>
                        </label>
                  </div>
                  <div class="checkbox-div">
                        <label class="checkbox-label">
                            <input type="checkbox" name="datafilter" value="from-my-direct" v-model="dataFilter"/><i class="checkbox"></i>
                            <span>Existing Customer 现有客户</span>
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
                    <span class="calcfont calc-fenlei"></span>
                    <span class="group-name">Alirline</span>
                    <span class="right">(3)</span>
                </div>
                <div class="occupy-div"></div>

                <div class="group-item-list">
                    <div class="group-item">
                        <div class="item-user-icon calcfont calc-shoucang"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
                        <div class="item-user-icon calcfont calc-shoucang1"></div>
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
            key:'organizations',
            title:lanTool.lanContent('174_客户'),

            isFirstEnter:false, // 是否第一次进入，默认false

            //传给列表组件的数据
            listData:{
                queryUrl : tool.ajaxUrl_Accounts_Query,//列表查询接口地址
                deleteUrl : tool.ajaxUrl_Accounts_Delete,//记录删除接口
                isUsePager : true,//是否分页

            },
            //传给Sortscreen组件
            sortScreenData:{
                sort:[
                    {'text':lanTool.lanContent('182_按公司名称正序排列'),'sortOrder':'ASC','sortName':'accountname','id':'organizations01'},
                    {'text':lanTool.lanContent('183_按公司名称倒序排列'),'sortOrder':'DESC','sortName':'accountname','id':'organizations02'},
                    {'text':lanTool.lanContent('221_按负责人正序排列'),'sortOrder':'ASC','sortName':'assigned_user_id','id':'organizations03'},
                    {'text':lanTool.lanContent('222_按负责人倒序排列'),'sortOrder':'DESC','sortName':'assigned_user_id','id':'organizations04'}
                ],
                screen:[
                    {
                        field:'accountname',
                        queryType:'string',
                        text:lanTool.lanContent('26_公司名称'),
                        comp:[
                            {
                                type:'input',
                                field:'accountname',
                                placeholder:lanTool.lanContent('189_请输入公司名称'),
                                value:'',
                            }
                        ]
                    },
                    {
                        field:'assigned_user_id',
                        queryType:'string',
                        text:lanTool.lanContent('33_负责人'),
                        comp:[
                            {
                                type:'selectlist',
                                field:'assigned_user_id',
                                queryUrl:"Users/Query",
                                placeholder:lanTool.lanContent('203_请选择负责人'),
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
            classificationValue:'businessSector',  //右侧分类
            dataFilter:[],
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
.date-div .calcfont{color:#ff5a21;margin-right:8px;}
.group-name{font-size: 0.3rem;}
.occupy-div{height:30px;display:none;}

.group-item{background:#fff;position:relative;}
.item-block{padding:5px 10px 5px 1rem;}
.group-item::after{content:'';display:block;height: 1px;background:#3cadf9;width:100%;left:0;bottom:0;}
.item-div{font-size: 0.25rem;line-height: 0.5rem;padding-top:5px;}
.item-first-div{font-weight: 600;color:#ff5a21;}

</style>
