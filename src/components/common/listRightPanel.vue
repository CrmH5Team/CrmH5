<template>
<div>

    <div id="mask" class="mask" @click="panelToggle" v-show="showPanel"></div>
    <div id="right-content" class="right-content">

        <div v-for="item in panelData" class="right-content-block">
            <div class="right-block-title">{{item.groupText}}</div>

            <div v-if="item.type=='radio'" class="right-block-items">
                <div v-for="radio in item.items" class="radios-div" >
                      <label class="radios-label">
                          <input type="radio" name="classification" :value="radio.value" v-model="viewValue"/><i class="radios"></i><span>{{radio.text}}</span>
                      </label>
                </div>
            </div>
            <div v-if="item.type=='checkbox'" class="right-block-items">
                <div v-for="checkbox in item.items" class="checkbox-div">
                          <label class="checkbox-label">
                              <input type="checkbox" name="datafilter" :value="checkbox.value" v-model="dataFilter"/><i class="checkbox"></i>
                              <span>{{checkbox.text}}</span>
                          </label>
                </div>
            </div>
        </div>

        <div class="right-content-block">
            <div class="right-block-title">Other 其他</div>
            <div class="right-block-items">
                <div class="other-search" id="OtherSearchBtn" @click="goSearchPage">
                    <span class="other-search-icon mui-icon calcfont calc-sousuo"></span>
                    <label class="other-search-label">Search</label>
                </div>
            </div>
        </div>

        <div @click="okBtn" class="btn-div f16">OK确认</div>
    </div>


</div>
</template>

<script>
export default {
    data(){
        return {
            showPanel:false,

            viewValue:'',  //右侧分类
            dataFilter:[],
        }
    },
    props:['panelData','searchData'],
    created:function(){
        var _self = this;
        if(_self.panelData.length >= 1){
            $.each(this.panelData,function(key,value){
                if(value.type === 'radio' && value.default){
                    _self.viewValue = value.default;
                }else if(value.type === 'checkbox' && value.default){
                    _self.dataFilter[0] = value.default;
                }
            })
        }
    },

    mounted:function(){
        lanTool.updateLanVersion();
        eventBus.$on('showRightPanelEvent',this.panelToggle);

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
            var parameter = {
                // 'selectView':_self.classificationValue,
                'dataFilter':_self.dataFilter,
                'dataModule':_self.searchData
            }
            tool.setSessionStorageItem('searchData',JSON.stringify(parameter));
            _self.$router.push({
                  path: '/searchmodule',
                  // query: parameter
            })
        },

        //点击侧滑中的确定按钮
        okBtn:function(){
            var _self = this;
            if(_self.dataFilter.length <=0){
                  $.alert("数据筛选必须选一个", "提示", function() {},'好的');
                  return false;
            }
        },
    },

    beforeDestroy:function(){
        eventBus.$off('showRightPanelEvent');
    }

}
</script>


<style scoped>
@import "../../assets/css/common/list-right-style.css";
</style>
