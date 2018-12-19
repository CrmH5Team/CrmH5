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
                  <router-link :to="'/contactsinfo/{\'AutoID\':\''+slotProps.item.id+'\'}'" class="weui-cell__bd" :data-id="slotProps.item.id">
                      <span class="right">{{slotProps.item.account_id}}</span>
                      <p class="">{{slotProps.item.lastname}}</p>
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
            key:'contacts',
            title:lanTool.lanContent('175_联系人'),

            isFirstEnter:false, // 是否第一次进入，默认false

            //传给列表组件的数据
            listData:{
                queryUrl : tool.ajaxUrl_Contacts_Query,//列表查询接口地址
                deleteUrl : tool.ajaxUrl_Contacts_Delete,//记录删除接口
                isUsePager : true,//是否分页
            },
            //传给Sortscreen组件
            sortScreenData:{
                sort:[
                    {'text':lanTool.lanContent('219_按联系人名称正序排列'),'sortOrder':'ASC','sortName':'firstname','id':'contacts01'},
                    {'text':lanTool.lanContent('218_按联系人名称倒序排列'),'sortOrder':'DESC','sortName':'firstname','id':'contacts02'},
                ],
                screen:[             
                    {
                        field:'lastname',
                        queryType:'string',
                        text:lanTool.lanContent('163_联系人姓名'),
                        comp:[
                            {
                                type:'input',
                                field:'lastname',
                                placeholder:lanTool.lanContent('235_请输入联系人'),
                                value:'',
                            }
                        ]
                    }, 
                    {
                        field:'account_id',
                        queryType:'string',
                        text:lanTool.lanContent('26_公司名称'),
                        comp:[
                            {
                                type:'selectlist',
                                field:'account_id',
                                queryUrl:"Accounts/Query",
                                placeholder:lanTool.lanContent('202_请选择公司'),
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
            if(from.name === 'contactsinfo' || from.name === 'selectlist'){
                to.meta.isBack = true;
            }
            next();
      }
      


}
</script>
<style scoped>
/*列表中每一项style*/
.weui-cell__hd{display:none;}
.weui-check:checked + .weui-icon-checked:before{color:#3cadf9;}
.weui-cell__bd{font-size:0.28rem;padding: 10px 15px;margin: 0 -15px;}
.weui-cell__bd p{color:#000;width:60%;line-height: 26px;
    overflow: hidden;text-overflow: ellipsis;
    -webkit-line-clamp: 1;word-break: break-all;
    display: -webkit-box;-webkit-box-orient: vertical!important;
}
.weui-cell__bd span{width: 35%;font-size:0.2rem;color: #595959;line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;-webkit-line-clamp: 1;
    word-break: break-all;display: -webkit-box;
    -webkit-box-orient: vertical!important;}

</style>
