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
        }
      },
      
      beforeRouteEnter:function(to, from, next){

            if(from.name === 'opportunitiesinfo' || from.name === 'selectlist'){
                to.meta.isBack = true;
            }
            next();
      },
 
}
</script>




<style scoped>


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
