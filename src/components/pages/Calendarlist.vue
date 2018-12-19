<template>
  <div>
      <Header></Header>

      <Sortscreen :key="key" :sortScreenData="sortScreenData"></Sortscreen>

      <Commonlist :listData="listData" >
          <template slot-scope="slotProps">
                <div class="weui-cell__hd">
                    <input type="checkbox" class="weui-check" name="checkbox1" :id="slotProps.item.id" >
                    <label :for="slotProps.item.id" class="weui-icon-checked"></label>
                </div>
                
                <router-link :to="'/calendarlistinfo/{\'AutoID\':\''+slotProps.item.id+'\'}'" class="weui-cell__bd" :data-id="slotProps.item.id"> 
                      <div >
                          <span class="right state">{{slotProps.item.eventstatus}}</span>
                          <div class="title">{{slotProps.item.subject}}</div>
                      </div>
                      <div>
                        <span class="right">{{slotProps.item.date_start}}</span>
                      </div>
                </router-link>
          </template>
      </Commonlist>
  </div>
</template>

<script>

import Commonlist from '../common/Commonlist'
import Sortscreen from '../common/Sortscreen'
import Header from '../common/Listheader'
import Mixins from '../../mixins'
export default {
      mixins: [Mixins.PAGE_LIST],
      components:{
        Commonlist,Sortscreen,Header
      },
      
      data (){
        return {
            key:'calendarlist',
            // title:lanTool.lanContent("173_销售机会"),

            isFirstEnter:false, // 是否第一次进入，默认false

            //传给列表组件的数据
            listData:{
                queryUrl : tool.ajaxUrl_Events_Query,//列表查询接口地址
                deleteUrl : tool.ajaxUrl_Events_Delete,//记录删除接口
                isUsePager : false,//是否分页
            },
            //传给Sortscreen组件
            sortScreenData:{
                sort:[
                    {'text':lanTool.lanContent('242_按主题正序排列'),'sortOrder':'ASC','sortName':'subject','id':'opportunities01'},
                    {'text':lanTool.lanContent('243_按主题倒序排列'),'sortOrder':'DESC','sortName':'subject','id':'opportunities02'},
                    {'text':lanTool.lanContent('244_按状态正序排列'),'sortOrder':'ASC','sortName':'eventstatus','id':'opportunities03'},
                    {'text':lanTool.lanContent('245_按状态倒序排列'),'sortOrder':'DESC','sortName':'eventstatus','id':'opportunities04'},
                    {'text':lanTool.lanContent('311_按开始时间正序排列'),'sortOrder':'ASC','sortName':'date_start','id':'opportunities05'},
                    {'text':lanTool.lanContent('312_按开始时间倒序排列'),'sortOrder':'DESC','sortName':'date_start','id':'opportunities06'}
                ],
                screen:[
                    {
                        field:'subject',
                        queryType:'string',
                        text:lanTool.lanContent('48_主题'),
                        comp:[
                            {
                                type:'input',
                                field:'subject',
                                placeholder:lanTool.lanContent('247_请输入主题'),
                                value:'',
                            }
                        ]
                    },
                    {
                        field:'eventstatus',
                        queryType:'string',
                        text:lanTool.lanContent('56_状态'),
                        comp:[
                            {
                                type:'picker',
                                field:'eventstatus',
                                placeholder:lanTool.lanContent('246_请选择状态'),
                                value:''
                            },
                        ]
                    }
                ]
            },
        }
      },
      

      beforeRouteEnter:function(to, from, next){
            if(from.name === 'calendarlistinfo' || from.name === 'selectlist'){
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
.weui-cell__bd .title{line-height: 26px;height:26px;color:#000;overflow: hidden;
    text-overflow: ellipsis;-webkit-line-clamp: 1;
    word-break: break-all;display: -webkit-box;
    -webkit-box-orient: vertical;}
.weui-cell__bd p{color:#595959;font-size: 0.2rem;
    overflow: hidden;text-overflow: ellipsis;
    -webkit-line-clamp: 1;word-break: break-all;
    display: -webkit-box;-webkit-box-orient: vertical;
    }
.weui-cell__bd span{font-size:0.2rem;color: #595959;}
.state{font-size: 0.2rem;color:#595959;line-height: 26px;}

</style>
