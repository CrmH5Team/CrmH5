<template>
<div>

    <div id="mask" class="mask" @click="panelToggle" v-show="showPanel"></div>
    <div id="right-content" class="right-content">

        <div v-for="item in panelData" class="right-content-block">
            <div class="right-block-title">{{item.groupText}}</div>

            <div v-if="item.type=='radio'" class="right-block-items">
                <div v-for="radio in item.items" class="radios-div" >
                      <label class="radios-label">
                          <input type="radio" name="classification" :value="radio.value" v-model="classificationValue"/><i class="radios"></i><span>{{radio.text}}</span>
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

        <!--
        <div class="right-content-block">
            <div class="right-block-title">Categories by 按...分类</div>
            <div class="right-block-items">
                <div class="radios-div" >
                      <label class="radios-label">
                          <input type="radio" name="classification" value="businessSector" v-model="classificationValue"/><i class="radios"></i><span>Business Sector 业务分类</span>
                      </label>
                </div>
            </div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title">Data Display 数据显示</div>
            <div class="right-block-items">
                <div class="checkbox-div">
                      <label class="checkbox-label">
                          <input type="checkbox" name="datafilter" value="my-calendar" v-model="dataFilter"/><i class="checkbox"></i>
                          <span>All Organizations 所有公司</span>
                      </label>
                </div>
            </div>
        </div>
        -->


        <div class="right-content-block">
            <div class="right-block-title">Other 其他</div>
            <div class="right-block-items">
                <div class="other-search" id="OtherSearchBtn">
                    <span class="other-search-icon mui-icon calcfont calc-sousuo"></span>
                    <label class="other-search-label">Search</label>
                </div>
            </div>
        </div>
    </div>


</div>
</template>

<script>
export default {
    data(){
        return {
            showPanel:false,
            classificationValue:'',  //右侧分类
            dataFilter:[],
        }
    },
    props:['panelData'],
    created:function(){
        var _self = this;
        if(_self.panelData.length >= 1){
            $.each(this.panelData,function(key,value){
                if(value.type === 'radio' && value.default){
                    _self.classificationValue = value.default;
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
    },

    beforeDestroy:function(){
        eventBus.$off('showRightPanelEvent');
    }

}
</script>


<style scoped>
@import "../../assets/css/common/list-right-style.css";
</style>
