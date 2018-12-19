<template>
  <div>

      <Listheader :title="title"></Listheader>

      <Sortscreen :key="key" :sortScreenData="sortScreenData"></Sortscreen>

      <Commonlist class="commonlist" :listData="listData">
            <template slot-scope="slotProps">
                  <div class="weui-cell__hd">
                      <input type="checkbox" class="weui-check" name="checkbox1" :id="slotProps.item.id" >
                      <label :for="slotProps.item.id" class="weui-icon-checked"></label>
                  </div>
                 
                  <router-link :to="'/organizationsinfo/{\'AutoID\':\''+slotProps.item.id+'\'}'" class="weui-cell__bd" :data-id="slotProps.item.id">
                          <span class="right">{{slotProps.item.assigned_user_id}}</span>
                          <p class="">{{slotProps.item.accountname}}</p>
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
        }
      },
     
      
      beforeRouteEnter:function(to, from, next){
            if(from.name === 'organizationsinfo' || from.name === 'selectlist'){
                to.meta.isBack = true;
            }
            next();
      }
      

}
</script>

<style scoped>
.commonlist{height: calc(100% - 1.78rem);}

/*列表中每一项style*/
.weui-cell__hd{display:none;}
.weui-check:checked + .weui-icon-checked:before{color:#3cadf9;}
.weui-cell__bd{line-height: 26px;font-size:0.28rem;    padding: 10px 15px;
    margin: 0 -15px;}
.weui-cell__bd p{color:#000;
    overflow: hidden;text-overflow: ellipsis;
    -webkit-line-clamp: 1;word-break: break-all;
    display: -webkit-box;-webkit-box-orient: vertical;
    }
.weui-cell__bd span{font-size:0.2rem;color: #595959;}


</style>
