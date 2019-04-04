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
            <div v-if="item.type=='radio' && item.groupName =='modelDataFilter'" class="right-block-items">
                <div v-for="radio in item.items" :key="item.id" class="radios-div">
                          <label class="radios-label">
                              <input type="radio" :name="item.id" :value="radio.id" v-model="groupByVal"/>
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
                    <label class="other-search-label lanText" data-lanid="780_搜索"></label>
                </div>
            </div>
        </div>

        <!-- <div @click="okBtn" class="right-btn-div f16 lanText" data-lanid="569_确认"></div> -->
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
            groupByVal:'',//分组数据
            // isParentFirstEnter:false,  //存储赋组件是否是新创建
            dataFilterWatch:null,
            modelDataFilterWatch:null
        }
    },
    watch:{
        //视图切换使用
        viewValue:function(newVule){

            eventBus.$emit('changeViewEvent',newVule);
            if(newVule == 'calendarView'){
                eventBus.$emit('updataCalendarEvent');
            }else{
                eventBus.$emit('updataListEvent');
            }
        }
    },
    props:['panelData','searchData','showCategory'],
    created:function(){
        var _self = this;
        // _self.isParentFirstEnter = _self.$parent.isFirstEnter;
    },
    mounted:function(){
    },
    activated:function(){
        var _self = this;
        lanTool.updateLanVersion();
        eventBus.$on('showRightPanelEvent',_self.panelToggle);
        _self.panelToggle(false);
    },
    methods: {

        //设置筛选条件为默认值
        reductionDataFilter:function(isResetRightPanel){

            isResetRightPanel = (isResetRightPanel == undefined || isResetRightPanel == null) ? true : isResetRightPanel;

            var _self = this;
            var returnObj = {
                defaultQueryCondition:{},//默认的过滤条件
                defaultGroupBy:''//默认的分组条件
            };
            if(tool.isNullOrEmptyObject(_self.panelData)){
                return ;
            }

            if(isResetRightPanel){

                $.each(_self.panelData,function(key,value){

                    if(value.type == 'radio' && value.default && value.groupName == 'view'){
                        if(!tool.isNullOrEmptyObject(value.default)){
                            _self.viewValue = value.default;
                        }

                    }else if(value.type == 'radio' && value.default && value.groupName == 'dataFilter'){
                        /*
                        * 当dataFilter变量的值等于默认值 || 是首次进入列表页面时，通过父组件刷新数据
                        */
                       /*
                        if(_self.dataFilter == value.default || _self.isParentFirstEnter){
                            // returnObj.returnValue = true;
                            var defaultObj = $("[value='"+ $.trim(value.default) +"']");
                            returnObj.defaultQueryCondition =
                            {
                                Field : defaultObj.attr("data-queryfield") || "",
                                Type : defaultObj.attr("data-querytype") || "string",
                                Format : defaultObj.attr("data-queryformat") || "",
                                Relation : defaultObj.attr("data-queryrelation") || "and",
                                Value : defaultObj.attr("value") || "",
                                Comparison : defaultObj.attr("data-querycomparison") || "string",
                            };
                        }
                        _self.dataFilter = value.default;
                        */
                        if(!tool.isNullOrEmptyObject(value.default)){
                            _self.dataFilter = value.default;
                            var defaultObj = $("[value='"+ $.trim(value.default) +"']");
                            returnObj.defaultQueryCondition =
                            {
                                Field : defaultObj.attr("data-queryfield") || "",
                                Type : defaultObj.attr("data-querytype") || "string",
                                Format : defaultObj.attr("data-queryformat") || "",
                                Relation : defaultObj.attr("data-queryrelation") || "and",
                                Value : defaultObj.attr("value") || "",
                                Comparison : defaultObj.attr("data-querycomparison") || "string",
                            };
                        }

                    }else if(value.type == 'radio' && value.default && value.groupName == 'modelDataFilter'){
                        if(!tool.isNullOrEmptyObject(value.default)){
                            _self.groupByVal = value.default;
                            returnObj.defaultGroupBy = _self.groupByVal;
                        }
                    }
                });


                //watch监听dataFilter
                if(!tool.isNullOrEmptyObject(_self.dataFilterWatch)){
                    _self.dataFilterWatch();
                }
                _self.dataFilterWatch = _self.$watch('dataFilter', function(newValue){
                      if(tool.isNullOrEmptyObject(newValue)) {
                          return;
                      }
                      var filter = [];
                      filter.push(newValue);
                      _self.conStructQueryCondition(filter);
                }, {deep: true});


                //watch监听modelDataFilter
                if(!tool.isNullOrEmptyObject(_self.modelDataFilterWatch)) _self.modelDataFilterWatch();
                _self.modelDataFilterWatch = _self.$watch('groupByVal', function(newValue){
                    if(tool.isNullOrEmptyObject(newValue)) {
                        return;
                    }
                    _self.$parent.setGroupBy(newValue);

                }, {deep: true});

                // _self.isParentFirstEnter = false;
            }

            return returnObj;
        },

        //侧滑
        //isClose值如果为false，表示刚进页面收起侧滑；
        //如果没传isClose值showPanel就取反，表示正常的展开收起
        panelToggle:function(isClose){

          var _self = this;
            if(isClose == false){
                _self.showPanel = isClose;
            }else{
                _self.showPanel = !_self.showPanel;
            }
            if(_self.showPanel){
                _self.$nextTick(function(){
                    $('#right-content').css({
                        'left':'30%',
                        'transition':'left 0.2s ease-out',
                        '-moz-transition': 'left 0.2s ease-out',
                        '-webkit-transition':'left 0.2s ease-out',
                        '-o-transition': 'left 0.2s ease-out'
                    })
                    $('#mask,#right-content').off('touchmove').on("touchmove", function(e) {
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
            // var dataFilter = [];
            //     dataFilter.push(_self.dataFilter);
            var parameter = {
                // 'dataFilter':dataFilter,
                'dataModule':_self.searchData,
                'queryCondictionData':_self.$parent.queryCondictionData
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

            /*
            //触发父类的事件
            // console.log("self.isParentFirstEnter:"+self.isParentFirstEnter);
            if(self.isParentFirstEnter){

              self.$parent.setQueryconditionOnlyData(queryCondiction);
              //触发calendar View 视图中筛选
              eventBus.$emit('RightPanelCalendarOnlyDataEvent', queryCondiction);

            }else{
              self.$parent.setQuerycondition(queryCondiction);
              //触发calendar View 视图中筛选
              eventBus.$emit('RightPanelCalendarEvent', queryCondiction);
            }
            */

            self.$parent.setQuerycondition(queryCondiction);
            //触发calendar View 视图中筛选
            eventBus.$emit('RightPanelCalendarEvent', queryCondiction);

        }
    },
    deactivated:function(){
        eventBus.$off('showRightPanelEvent');
    },
    beforeDestroy:function(){
        eventBus.$off('showRightPanelEvent');
    }

}
</script>


<style scoped>
@import "../../assets/css/common/list-right-style.css";
</style>
