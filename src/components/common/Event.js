
import Vue from "Vue"

const eventBus = new Vue({
    data(){
        return {
            selectListData:null,
            queryCondictionData:null,
            fromSearchBtn:false  //标志是否是从搜索页面点击确定按钮过来
        }
    },
    created:function(){
        // 绑定监听SelectList组件
        this.$on('updataSelectList', (val)=>{
            this.selectListData = val;
        });
        //queryCondiction
        this.$on('queryCondiction', (val)=>{
            this.queryCondictionData = val[0];
            this.fromSearchBtn = val[1];
        })
    },

})

export default eventBus;
