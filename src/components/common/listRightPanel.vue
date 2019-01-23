<template>
<div>

    <div id="mask" class="mask" @click="panelToggle" v-show="showPanel"></div>
    <div id="right-content" class="right-content">

        <div v-for="(item,index) in panelData" class="right-content-block">
            <div class="right-block-title">{{item.groupText}}</div>

            <div v-if="item.type=='radio' && item.groupName =='view'" class="right-block-items">
                <div v-for="radio in item.items" class="radios-div" >
                      <label class="radios-label">
                          <input type="radio" :name="item.groupName" :value="radio.value" v-model="viewValue"/><i class="radios"></i><span>{{radio.text}}</span>
                      </label>
                </div>
            </div>

            <div v-if="item.type=='radio' && item.groupName =='dataFilter'" class="right-block-items">
                <div v-for="radio in item.items" class="radios-div">
                          <label class="radios-label">
                              <input type="radio" :name="item.groupName"
                              :data-queryfield="radio.queryfield"  :data-queryType="radio.queryType"
                              :data-queryFormat="radio.queryFormat"  :data-queryRelation="radio.queryRelation"
                              :value="radio.queryfield" :data-queryComparison="radio.queryComparison" v-model="dataFilter"/>
                              <i class="radios"></i>
                              <span>{{radio.text}}</span>
                          </label>
                </div>
            </div>
            <!-- <div v-if="item.type=='checkbox'" class="right-block-items">
                <div v-for="checkbox in item.items" class="checkbox-div">
                          <label class="checkbox-label">
                              <input type="checkbox" :name="index"
                              :data-queryfield="checkbox.queryfield"  :data-queryType="checkbox.queryType"
                              :data-queryFormat="checkbox.queryFormat"  :data-queryRelation="checkbox.queryRelation"
                              :value="checkbox.queryfield" :data-queryComparison="checkbox.queryComparison" v-model="dataFilter"/>
                              <i class="checkbox"></i>
                              <span>{{checkbox.text}}</span>
                          </label>
                </div>
            </div> -->
        </div>

        <div class="right-content-block">
            <div class="right-block-title lanText" data-lanid="847_其他"></div>
            <div class="right-block-items">
                <div class="other-search" id="OtherSearchBtn" @click="goSearchPage">
                    <span class="other-search-icon mui-icon calcfont calc-sousuo"></span>
                    <label class="other-search-label">Search</label>
                </div>
            </div>
        </div>

        <div @click="okBtn" class="right-btn-div f16 lanText" data-lanid="569_确认"></div>
    </div>


</div>
</template>

<script>
export default {
    data(){
        return {
            showPanel:false,
            viewValue:'',  //右侧分类
            dataFilter:'',
            isParentFirstEnter:false,  //存储赋组件是否是新创建
        }
    },
    watch:{
        //视图切换使用
        viewValue:function(newVule){
            if(newVule == 'calendarView'){
                eventBus.$emit('updataCalendarEvent');
            }else{
                eventBus.$emit('updataListEvent');
            }

            eventBus.$emit('changeViewEvent',newVule);

        },
        //数据过滤
        dataFilter:function(newVule){
             var _self = this;
             var filter = [];
             filter.push(newVule);
            _self.conStructQueryCondition(filter);
        }
    },
    props:['panelData','searchData'],
    created:function(){
        var _self = this;
        _self.isParentFirstEnter = _self.$parent.isFirstEnter;

        //赋初始值
        if(tool.isNullOrEmptyObject(_self.panelData)){
            return ;
        }
        $.each(_self.panelData,function(key,value){

            if(value.type == 'radio' && value.default && value.groupName == 'view'){
                _self.viewValue = value.default;
            }else if(value.type == 'radio' && value.default && value.groupName == 'dataFilter'){
                _self.dataFilter = value.default;
            }
        });

    },
    mounted:function(){
    },
    activated:function(){
        lanTool.updateLanVersion();
        eventBus.$on('showRightPanelEvent',this.panelToggle);

        //触发父亲事件
        //this.conStructQueryCondition(this.dataFilter);
    },
    methods: {
        //侧滑
        panelToggle:function(){
          var _self = this;
            _self.showPanel = !_self.showPanel;
            if(_self.showPanel){
                _self.$nextTick(function(){
                    $('#right-content').css({
                        'left':'30%',
                        'transition':'left 0.2s ease-out',
                        '-moz-transition': 'left 0.2s ease-out',
                        '-webkit-transition':'left 0.2s ease-out',
                        '-o-transition': 'left 0.2s ease-out'
                    })
                    $('#mask,#right-content').on("touchmove", function(e) {
                      e.stopPropagation();
                      e.preventDefault();
                    });
                })

            }else{
                _self.$nextTick(function(){
                    $('#right-content').css({
                        'left':'100%',
                        'transition':'left 0.3s ease-out',
                        '-moz-transition': 'left 0.3s ease-out',
                        '-webkit-transition':'left 0.3s ease-out',
                        '-o-transition': 'left 0.3s ease-out'
                    });
                })
            }

        },
        //点击侧滑中的search
        goSearchPage:function(){
            var _self = this;
            var dataFilter = [];
                dataFilter.push(_self.dataFilter);
            var parameter = {
                'dataFilter':dataFilter,
                'dataModule':_self.searchData
            };
            _self.panelToggle();
            _self.$nextTick(function(){
                  _self.$router.push({
                        name:"searchmodule",
                        params:{
                            paramStr:JSON.stringify(parameter)
                        }
                  });
            })

        },
        //点击侧滑中的确定按钮
        okBtn:function(){
            var _self = this;
            _self.panelToggle();
        },
        conStructQueryCondition:function(arr){
            var self = this;
            arr = arr || [];
            // console.log(arr);
            var queryCondiction = [];
            for(var i = 0;i<arr.length;i++){
                var _curObj = $("[value='"+ $.trim(arr[i]) +"']");
                if(tool.isNullOrEmptyObject(_curObj)){
                    continue;
                }

                var queryCondictionObj =
                {
                    Field : _curObj.attr("data-queryfield") || "",
                    Type : _curObj.attr("data-querytype") || "string",
                    Format : _curObj.attr("data-queryformat") || "",
                    Relation : _curObj.attr("data-queryrelation") || "and",
                    Value : _curObj.attr("value") || "",
                    Comparison : _curObj.attr("data-querycomparison") || "string",
                };
                queryCondiction.push(queryCondictionObj);
            }

            //触发父类的事件
            //console.log("子组件触发父组件事件");
            //console.log(queryCondiction);
            // console.log("self.isParentFirstEnter:"+self.isParentFirstEnter);
            if(self.isParentFirstEnter){
              self.$parent.setQueryconditionOnlyData(queryCondiction);
            }else{
              self.$parent.setQuerycondition(queryCondiction);
            }
            self.isParentFirstEnter = false;
        }
    },
    deactivated:function(){
        eventBus.$off('showRightPanelEvent');
    },
    beforeDestroy:function(){

    }

}
</script>


<style scoped>
@import "../../assets/css/common/list-right-style.css";
</style>
