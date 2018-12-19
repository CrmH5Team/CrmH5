
import Vue from "Vue"

const eventBus = new Vue({
    data(){
        return {
            selectListData:null,
        }
    },
    created:function(){
        // 绑定监听SelectList组件
        this.$on('updataSelectList', (val)=>{
            this.selectListData = val;
        })
    },

})

export default eventBus;
