
import Vue from "Vue"

const eventBus = new Vue({
    data(){
        return {
            selectListData:null,
            queryCondictionData:null,
            backFromSearch:false
        }
    },
    created:function(){
        // 绑定监听SelectList组件
        this.$on('updataSelectList', (val)=>{
            this.selectListData = val;
        });
        //queryCondiction
        this.$on('queryCondiction', (val)=>{
            this.queryCondictionData = val;
        })
        //从列表侧滑搜索页返回事件
        this.$on('backFromSearch', (val)=>{
            this.backFromSearch = val;
        })
    },

})

export default eventBus;
