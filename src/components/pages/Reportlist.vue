<template>
    <div class="scroll" :class="{'noDatabj':noData}">
        <ul v-if="reportType=='MyActivity'" class="mui-table-view">
                <li v-for="item in myActivityData" class="mui-table-view-cell">
                    <div class="cell_title">{{item.potentialname}}</div>
                    <div class="cell_content">{{item.description}}</div>
                    <div class="cell_name left">{{item.related_to}}</div>
                    <div class="cell_time">{{item.closingdate}}</div>
                </li>
        </ul>

        <ul v-else id="" class="mui-table-view">
                <li v-for="item in myCalendarData" class="mui-table-view-cell">
                    <div class="cell_title">{{item.subject}}</div>
                    <div class="cell_content">{{item.description}}</div>
                    <div class="cell_name">{{item.parent_id}}</div>
                    <div class="cell_time">
                        <label class="start_time">{{item.date_start}}</label> ~ <label class="end_time">{{item.due_date}}</label>
                    </div>
                </li>
        </ul>
    </div>
</template>


<script>

export default {
    data(){
        return {
            queryUrl:tool.ajaxUrl_Report_Query,
            QueryCondiction:[],  //筛选条件
            //我的活动数据
            myActivityData:[],
            //我的日程数据
            myCalendarData:[],
            noData:false, //没有数据显示
        }
    },
    props:['reportType'],
    
    watch:{
        reportType:function(){
            this.QueryCondiction = [];
            this.InitiateReportData();
        }
    },
    
    mounted:function(){
        var $this = this;

        //接收screenEvent事件 (请求数据)
        eventBus.$on('screenEvent',function(data){ 
            
            if(data === undefined){
                $this.QueryCondiction = [];
            }else{
                $this.QueryCondiction = data;
            }
            $this.InitiateReportData();
        })

    },

    methods:{

        InitiateReportData:function(){ 
            var $this = this;
            // if($this.reportType === 'MyActivity' && $this.myActivityData.length >0) return true;
            // if($this.reportType === 'MyCalendarActivity' && $this.myCalendarData.length >0) return true;

            $this.myCalendarData = [];
            $this.myActivityData = [];
            $this.noData = false;

            //请求地址 
            var urlTemp =
                tool.combineRequestUrl(
                    tool.getConfigValue(tool.config_ajaxUrl),
                    tool.getConfigValue($this.queryUrl)
                );
            //请求的传入参数
            var jsonDatasTemp = {
                "CurrentLanguageVersion": lanTool.currentLanguageVersion,
                "IsUsePager": false,
                "SessionName": tool.getStorageItem(tool.cache_SessionName) || "",
                "QueryCondiction": $this.QueryCondiction,
                "ReportType": $this.reportType || ""
            };   
            
            loading.show(3,lanTool.lanContent("172_加载中..."));
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
                    data = tool.jObject(data);
                    if(data.Result != 1) {
                        toast.show(data.Msg);
                        return false;
                    }
                    //行数据
                    var dataArray = data.Data.Rows;
                    //总记录数
                    var total = data.Data.Total;

                    if(total <=0 ){
                        $this.noData = true;
                    }

                    if($this.reportType === 'MyActivity'){
                        $this.myActivityData = dataArray;
                    }else{
                        $this.myCalendarData = dataArray;
                    }
                
                },
                error: function(jqXHR, type, error) {
                    loading.hidden();
                    console.log("error");
                }
            })
        },
    },
    destroyed:function(){
        eventBus.$off('screenEvent');
    }
}
</script>


<style scoped>

.mui-table-view-cell {
    font-size: 0.25rem;
    position: relative;
    overflow: hidden;
    padding: 11px 15px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.mui-table-view:after,.mui-table-view-cell::after{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #7f7f7f;
}
.mui-table-view {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
}

.noDatabj{background: url(../../assets/images/nothing.png) no-repeat center 3.5rem;background-size: 2rem auto;}

/*列表style*/
.mui-table-view-cell {
    font-size: 0.25rem;
    position: relative;
    overflow: hidden;
    padding: 11px 15px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    outline: 0;
}

.cell_title {
    font-size: 0.28rem;
    line-height: 0.32rem;
}
.cell_content, .cell_name, .cell_time {
    font-size: 0.2rem;
    color: #595959;
}
.cell_content {
    margin-top: 5px;
    line-height: 0.34rem;
    overflow: hidden;
}
.cell_name {
    display: block;
    margin-top: 0.16rem;
}
.cell_time {
    display: block;
    margin-top: 0.16rem;
    float: right;
    font-size: 0.2rem;
    color: #595959;
}


</style>
