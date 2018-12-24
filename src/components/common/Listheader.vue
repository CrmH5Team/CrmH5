<template>

  <div>
    <header class="mui-bar mui-bar-nav">
          <a @click="back" class="calcfont calc-fanhui left" id="back"></a>

          <div v-if="isCalender" class="segmented-control">

                    <router-link to="/calendarlist"
                    :class="{ active:activeCalendarlist}"
                    class="control-item "
                    >
                        <span class="lanText" data-lanid="332_列表视图"></span>
                    </router-link>

                    <router-link to="/calendar"
                    :class="{ active: activeCalendar}"
                    class="control-item ">
                         <span class="lanText" data-lanid="333_日历视图"></span>
                    </router-link>

		  </div>
          <h1 v-else class="mui-title">{{title}}</h1>

          <a @click="showRightPanel" class=" calcfont calc-liebiao2 right" id=""></a>
          <a @click="addData" class=" calcfont calc-tianjiajiahaowubiankuang right" id="addNew"></a>
          <!-- <a @click="editSwitch" class="calcfont calc-bianji1 right" id="editBtn"></a> -->
      </header>
  </div>

</template>









<script>

export default {
    data(){
        return {
            isCalender:false, //是否是日历的头部
            activeCalendar:false,
            activeCalendarlist:false,
        }
    },
    props:{
        title:String,
    },
    created:function(){

        var url = this.$route.path;
        if(url === '/calendar'){
            this.isCalender = true;
            this.activeCalendar = true;
            this.activeCalendarlist = false;
        }
        if(url === '/calendarlist'){
            this.isCalender = true;
            this.activeCalendar = false;
            this.activeCalendarlist = true;
        }


    },
    mounted:function(){
        lanTool.updateLanVersion();

        //监听headerEvent事件，禁止或者允许编辑，新增
        eventBus.$on('headerEvent',function(data){
            //data 的值 ban , allow
            if(data == undefined) return;
            if(data == 'ban'){
                $('#addNew,#editBtn').addClass('disable');
            }else{
                $('#addNew,#editBtn,#back').removeClass('disable');
            }
        })

        if(this.activeCalendar){
            $('#editBtn').addClass('disable');
        }


    },
    methods:{
        //编辑按钮状态切换
        editSwitch:function(e){

            var el = e.target;
            if($(el).hasClass('calc-bianji1')){
                //编辑状态
                $(el).removeClass('calc-bianji1').addClass('calc-gou');
                $('#addNew,#back').addClass('disable');

                eventBus.$emit('editEvent','edit');

            }else if($(el).hasClass('calc-gou')){

                $(el).removeClass('calc-gou').addClass('calc-bianji1');
                $('#addNew,#back').removeClass('disable');

                eventBus.$emit('editEvent','reduction');
            }
        },

        addData:function(){
            var $this = this,
                url = '';
                if($this.isCalender){
                    //跳转到新增日程事件页面
                    url = '/calendarlistinfo/{"AutoID":""}';
                }else{
                    url = $this.$route.path + 'info/{"AutoID":""}';
                }
                $this.$router.push(url);
        },

        back:function(){
            var $this = this;

            if($('#sortScreenLayer').length > 0){
                $('#sortScreenLayer').trigger('click');
            }

            if($this.isCalender){
                $this.$router.push('/main');
            }else{
                $this.$router.back(-1);
            }

        },

        showRightPanel:function(){
            eventBus.$emit('showRightPanel');
        }


    },
    beforeDestroy:function(){
        eventBus.$off('headerEvent');
    }

}
</script>





<style scoped>

header{position:fixed;width:100%;top:0;left:0;}
header.mui-bar {
  line-height: 0.2rem;background: #3cadf9;
}
.mui-title {
	right: 40px;left: 40px; display: inline-block; overflow: hidden;
    width: auto; font-size: 0.34rem; margin: 0; text-overflow: ellipsis;
    position: absolute;padding: 0;text-align: center; white-space: nowrap; line-height: 0.88rem;
}
.calcfont{
    font-size: 0.48rem;/* width: 0.88rem; */text-align: center;
    padding: 0.2rem 10px; position: relative; z-index: 20;
    display: inline-block;text-decoration: none; line-height: 1;
}
.calc-tianjiajiahaowubiankuang{
    margin-right: -10px;
}
header .mui-title,
header a {
	color: #fff;
}


/*日历*/
.segmented-control {
    position: absolute;top: 0.14rem;left: 50%;width:60%;z-index:1;
    margin-left: -30%;display: flex;-webkit-box-sizing: border-box;
    box-sizing: border-box;background-color: #f5f5f5;
    font-size: 0.25rem;font-weight: 400;
    overflow: hidden;table-layout: fixed;border: 1px solid #007aff;border-radius: 3px;
}
.control-item {
    flex: 2; height:0.6rem;line-height:0.6rem;display: table-cell;
    overflow: hidden;transition: background-color .1s linear;
    text-align: center;white-space: nowrap;text-overflow: ellipsis;
    color: #007aff;border-color: #007aff;border-left: 1px solid #007aff;
}
.active{
    color: #fff;background-color: #007aff;
}

</style>
