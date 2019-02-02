
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
            // console.log(val);
            this.selectListData = val;
        });
        //queryCondiction
        this.$on('queryCondiction', (val)=>{
            this.queryCondictionData = val.queryCondiction;
            this.fromSearchBtn = val.isFromConfirm;
        })
    },

})

export default eventBus;
