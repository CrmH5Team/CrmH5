<!--  列表通用组件 -->
<template>
<div class="componetlist">
    
    <div v-show="noData" class="noDatabj"></div>
    <div v-show="!noData" id="refresh" class="refresh_box">

        <div class="weui-pull-to-refresh__layer"> 
            <div class='weui-pull-to-refresh__arrow'></div>
            <div class='weui-pull-to-refresh__preloader'></div>
            <div class="down">{{languageData.dropDown}}</div>
            <div class="up">{{languageData.release}}</div>
            <div class="refresh">{{languageData.loadMore}}</div>
        </div>

        <!-- 列表 -->
        <div class="refresh_list">
              <div class="weui-cells weui-cells_checkbox">
                  <div v-for="item in rowData" class="weui-cell weui-check__label" :key="item.id">
                            <slot v-bind:item="item"></slot>
                  </div>
              </div>
        </div>

        <div class="weui-loadmore commonlist-loadmore">
            <i class="weui-loading"></i>
            <span class="weui-loadmore__tips">{{languageData.loadMore}}</span>
        </div>

    </div>


    <!--底部操作层-->
    <div class="EditBot weui-cells_checkbox">
        <label class="weui-check__label" for="deleteCheckbox">
            <input @change="selectAll" type="checkbox" name="checkbox1" class="weui-check" id="deleteCheckbox">
            <i class="weui-icon-checked"></i>
        </label>
        <a @click.stop="deleteBtn" class="right calcfont calc-lajitong" id="clearCheckBtn"></a>
    </div>

</div>
</template>



<script>

export default {
  data (){
      return {
          languageData:{

                'loadMore':lanTool.lanContent('172_加载中...'),
                'dropDown':lanTool.lanContent('194_下拉刷新数据'), 
                'release':lanTool.lanContent('193_释放立即刷新'), 

          },
          count : 1, //页码
          Pagecount : 0, //总页数
          SortOrder : '',
          SortName : '',
          QueryCondiction : [],

          enablePullUpLoad: true, //是否可以滚动加载

          rowData:[],  //列表数据
          noData:false, //没有数据显示

          isLoading:false, //滚动加载的状态(是否是正在加载中)
          isLastPage:false, //是否加载到最后一页
          isRefresh:false,  //是否禁止下来刷新功能

          id:[],  //记录选择的id
          componetlistHeight:0, //滚动列表父级的高度

          scrollTop:0, //记录滚动条的位置

      }
  },
  props: {
      listData:Object  
  },

  created:function(){
      this.scrollTop = 0;
  },

  mounted:function(){ 

        lanTool.updateLanVersion();
        var $this = this;

        $this.$nextTick(function(){
            $this.componetlistHeight = $('.componetlist').height();
        })
        
        //下拉刷新
        $('#refresh').pullToRefresh(function(){
            $this.refresh();
        });

        //滚动加载
        $('#refresh').infinite(30);
        $('#refresh').on("infinite", function() {

            if($this.isLoading) return;
            $this.isLoading = true;

            $('.weui-loadmore').show();
            //当正在请求加载数据时不允许头部操作
            eventBus.$emit('headerEvent','ban');

            var def = $.Deferred();
            $.when($this.getData('up',def)).done(function(){
                $this.isLoading = false;
                $('.weui-loadmore').hide();
                //恢复头部按钮状态
                eventBus.$emit('headerEvent','allow');
            })
        });

        //监听滚动条
        $('#refresh').on('scroll',function(){
            $this.scrollTop = $(this).scrollTop();
        });
    
  },

  activated:function(){
      var $this = this;

       ////接收Sortscreen组件的sortEvent事件(排序)
        eventBus.$on('sortEvent',function(data){
            $this.SortOrder = data.SortOrder;
            $this.SortName = data.SortName;
            $this.count = 1;
            loading.show(3,lanTool.lanContent("172_加载中..."));
            $this.getData();
            //把滚动条的位置设为0
            $this.$nextTick(function(){
                $('#refresh').scrollTop(0);
            })
        })

        //接收Sortscreen组件的clearSort事件(清空排序条件)
        eventBus.$on('clearSort',function(){
            $this.SortOrder = '';
            $this.SortName = '';
        })

        //接收Screen组件的screenEvent事件(根据传过来的data重新获取数据)
        eventBus.$on('screenEvent',function(data){
            $this.QueryCondiction = data;
            $this.count = 1;
            loading.show(3,lanTool.lanContent("172_加载中..."));
            $('#refresh').scrollTop(0);
            $this.getData();
            $this.$nextTick(function(){
                $('#refresh').scrollTop(0);
            })
        })

        //接收listheader组件的editEvent事件
        eventBus.$on('editEvent',function(data){
            
            if(data == 'edit'){
                $('.weui-cell__hd').show();
                $('a.weui-cell__bd').addClass('disable');

                $this.unableUpload();
                $this.unableRefresh();
                $('#refresh').height($this.componetlistHeight + 'px');

                $('.EditBot').show();

            }else{
                $this.reduction();
            }
        })

        //接收父组件 的commonlistGetDataEvent事件
        eventBus.$on('commonlistGetDataEvent',function(){
            $this.unableRefresh();
            $this.unableUpload();
            
            $this.QueryCondiction = [];
            $this.count = 1;
            $this.rowData = [];

            loading.show(3,lanTool.lanContent("172_加载中..."));
            $this.getData();
        })

    
        if($this.scrollTop > 0){
            $('#refresh').scrollTop($this.scrollTop);
        }
    


  },
  
  
  methods:{

        selectAll:function(e){
            var el = e.target,
                t = $(e.target).is(":checked");  
            $('.weui-cell__hd input[type="checkbox"]').each(function() {
                if(t) {
                    $(this).prop('checked',true);
                }else{
                    $(this).prop('checked',false);
                }
            });            
        },

        //恢复编辑之前的列表状态
        reduction:function(){
            var $this = this;

            $('.weui-cell__hd').hide();
            $('a.weui-cell__bd').removeClass('disable');

            $this.ableRefresh();
            if($this.enablePullUpLoad){
                $this.ableUpload();
            }

            $('#refresh').height($this.componetlistHeight+50 +'px');
            $('.EditBot').hide();

            $('.weui-cell__hd input[type="checkbox"]').each(function() {
                if($(this).is(":checked")) {
                    $(this).prop('checked',false);
                }
            });

            $('#deleteCheckbox').prop('checked',false);

            //恢复头部按钮状态
            eventBus.$emit('headerEvent','allow');
            
        },

        //刷新操作
        refresh:function(){
              var $this = this;
              if($this.isRefresh){
                $('#refresh').pullToRefreshDone();
                return ;
              }
              $this.count = 1;
              var def = $.Deferred();
              $.when($this.getData('down',def)).done(function(){

                  $('#refresh').pullToRefreshDone();

                  //从新开启滚动加载
                  if($this.isLastPage){
                      $this.ableUpload();
                      $this.isLastPage = false;
                  }
              })
        },

        //获取数据
        getData:function (tag,deferred) { 
              var $this = this;
              //请求地址
              var urlTemp =
                tool.combineRequestUrl(
                  tool.getConfigValue(tool.config_ajaxUrl),
                  tool.getConfigValue($this.listData.queryUrl)
                );
              //请求的传入参数
              var jsonDatasTemp = {
                  "CurrentLanguageVersion": lanTool.currentLanguageVersion,
                  "IsUsePager": $this.listData.isUsePager,
                  "PageNum": $this.count,
                  "PageSize": tool.PageSize,
                  "SortName": $this.SortName,
                  "SortOrder": $this.SortOrder,
                  "SessionName": tool.getStorageItem(tool.cache_SessionName) || "",
                  "TimeZoneValue": tool.getStorageItem(tool.cache_TimeZoneValue) || "",
                  "QueryCondiction": $this.QueryCondiction
              };
              
              $.ajax({
                  async: true,
                  type: "post",
                  url: urlTemp,
                  data: {
                      jsonDatas: JSON.stringify(jsonDatasTemp)
                  },
                  dataType: 'json',
                  success: function(data) {
                      loading.hidden();
                      if(data.Result != 1) {
                        toast.show(data.Msg);
                        return;
                      }
                      //总记录数
                      var total = data.Data.Total;

                      if(total % tool.PageSize) {
                          $this.Pagecount = parseInt(total / tool.PageSize) + 1;
                      } else {
                          $this.Pagecount = parseInt(total / tool.PageSize);
                      }

                      //若是第1页 清空原来数据
                      if($this.count == 1) {
                         $this.rowData = [];
                      }

                      $this.noData = false;
                      //若查询无数据，加入空数据样式
                      if(total <= 0){ 
                            $this.noData = true;
                            $this.$nextTick(function(){
                                $('#editBtn').addClass('disable');
                            })
                            //禁止滚动加载
                            $this.unableUpload();
                      }else{
                            
                            $this.$nextTick(function(){
                                $('#editBtn').removeClass('disable');
                            })

                            $this.ableUpload();
                            $this.ableRefresh();
                      }  
                      
                      $this.enablePullUpLoad = $this.count < $this.Pagecount;

                      if($this.count == 1) {
                            //若不使用分页
                            if(!$this.listData.isUsePager) {
                                $this.count = $this.Pagecount;
                            }
                            $this.rowData = data.Data.Rows;

                      }else{
                          if($this.count <= $this.Pagecount) {
                              $this.rowData = $this.rowData.concat(data.Data.Rows);
                          }
                      }

                      $this.count = $this.count + 1;
                      if(tag == 'up'){
                          //可加载数据
                          if($this.enablePullUpLoad){
                              $this.ableUpload();
                              $this.ableRefresh();
                          }else{
                            //   $this.unableRefresh();
                              $this.unableUpload();
                              toast.show(lanTool.lanContent('210_没有更多数据了'));
                          }
                      }else{

                          //如果下拉刷新后，得到的数据只能显示1页，则禁用上拉加载
				         if($this.enablePullUpLoad) {

                         }else{
                            //   $this.unableRefresh();
                              $this.unableUpload();
                              toast.show(lanTool.lanContent('210_没有更多数据了'));
                         }
                      }

                      if(deferred != undefined){
                          deferred.resolve();
                      }

                  },
                  error: function(jqXHR, type, error) {
                      loading.hidden();
                      eventBus.$emit('headerEvent','allow');
                  }

              })

            return deferred;

        },

        //禁止滚动加载
        unableUpload:function(){
            this.$nextTick(function(){
                $('#refresh').destroyInfinite();
                $('.commonlist-loadmore').hide();
            })
        },

        //开启滚动加载
        ableUpload:function(){
            this.$nextTick(function(){
                $('.commonlist-loadmore').show();
                $('#refresh').infinite(30);
            })
        },

        //禁止下来刷新
        unableRefresh:function(){ 
            this.$nextTick(function(){ 
                $('.weui-pull-to-refresh__layer').css('visibility','hidden');
                this.isRefresh = true;
            })
        },
        //开启下刷新
        ableRefresh:function(){ 
            this.$nextTick(function(){
                $('.weui-pull-to-refresh__layer').css('visibility','visible');
                this.isRefresh = false;
            })
        },

        //删除按钮事件
        deleteBtn:function(e){
            var $this = this;
            $this.id = [];
		    //获得所选id集
            $('.weui-cell__hd input[type="checkbox"]').each(function(i) {
                if($(this).is(":checked")) {
                    $this.id.push($(this).parents(".weui-cell__hd").next('.weui-cell__bd').attr("data-id"));
                }
            });
            if($this.id.length <= 0){
                toast.show(lanTool.lanContent("195_请选择要删除的记录！"));
                return false;
            }

            var btnArray = [lanTool.lanContent('262_否'), lanTool.lanContent('263_是')];
            $.confirm(
                lanTool.lanContent('295_确定删除这些数据吗？'),
                lanTool.lanContent('261_提示'),
                function(){
                    //yes
                    $this.DeleteData($this.id);
                },
                function(){
                    //no    
                },
                btnArray)
        },

        /*删除操作*/
        DeleteData:function(id) {
            var $this = this;
            //请求地址 
            var urlTemp =
                tool.combineRequestUrl(
                    tool.getConfigValue(tool.config_ajaxUrl),
                    tool.getConfigValue($this.listData.deleteUrl)
                );
            //请求的传入参数
            var jsonDatasTemp = {
                "CurrentLanguageVersion": lanTool.currentLanguageVersion,
                "id": id,
                "SessionName": tool.getStorageItem(tool.cache_SessionName) || ""
            };

            loading.show(2,lanTool.lanContent("211_正在删除，请稍后..."));
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: {
                    jsonDatas: JSON.stringify(jsonDatasTemp)
                },
                dataType: 'json',
                success: function(data) {
                    loading.hidden();
                    //删除失败
                    if(data.Result != 1) {
                        toast.show(data.Msg);
                        return false;
                    }

                    //删除成功
                    $this.reduction();

                    loading.show(3,lanTool.lanContent("172_加载中..."));
                    // $this.refresh();
                    $this.count = 1;
                    $this.getData();
                    return true;
                },
                error: function(jqXHR, type, error) {
                    console.log("error");
                    loading.hidden();
                }
            });

        },


  },
  deactivated:function(){
        
        eventBus.$off('sortEvent');
        eventBus.$off('editEvent');
        eventBus.$off('screenEvent');
        eventBus.$off('clearSort');
        eventBus.$off('commonlistGetDataEvent');
  },


}
</script>







<style scoped>
.componetlist{/*height:calc(100% - 1.78rem);*/overflow: hidden;position: fixed;left:0;top:1.78rem;bottom:0;right:0;}
.noDatabj{
    background:#fff url(../../assets/images/nothing.png) no-repeat center 3.5rem;
    background-size: 2rem auto;
    position:fixed;bottom:0;left:0;right:0;top:1.78rem;}

.refresh_box{height:calc(100% + 50px);overflow-y: scroll;-webkit-overflow-scrolling:touch;}
 /* for Chrome */
.refresh_box::-webkit-scrollbar {
    display: none;
} 
.weui-pull-to-refresh__layer div{font-size: 0.2rem;}

/*列表 style*/
.weui-cells{margin-top:0;}
.weui-cells:after{border:0;}

.weui-cell{position: relative;padding: 0 15px;}
.weui-check__label:after {
    content: " ";position: absolute;
    left: 0;bottom: 0;right: 0;height: 1px;
    border-bottom: 1px solid #7f7f7f;color: #7f7f7f;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);z-index: 2;
}
/*列表 style ----end-----*/

.weui-loadmore{margin: 1.2em auto;}

/*---- 底部style -----*/
.EditBot {
    position: fixed;z-index: 9; background:#efeff4; width: 100%;bottom: 0;
    padding: 11px 15px;height: 50px;box-sizing: border-box;display: none;
}
.weui-check:checked + .weui-icon-checked:before{color:#3cadf9!important;}
.EditBot .weui-check__label{position:relative;}
.EditBot .weui-check__label:after {
    border-bottom:none;
    height: 0;
}
.EditBot a {
    color: #fd3f3f;
    font-size: 28px;
    line-height: 28px;
}
</style>


