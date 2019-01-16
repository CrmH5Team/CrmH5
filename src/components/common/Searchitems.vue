<template>
<div class="search-rows f14">
      <div v-for="item in searchData" class="item-row">
          <!-- 手动输入 -->
          <div v-if="item.fieldControlType =='textareaInput'">
              <input class="f14 search-input" type="text"
              :placeholder="item.text"
              :data-field="item.queryfield"
              :data-fieldControlType="item.fieldControlType"
              :data-queryType="item.queryType"
              :data-queryFormat="item.queryFormat"
              :data-queryRelation="item.queryRelation"
              :data-queryValue="item.queryValue"
              :data-queryComparison="item.queryComparison"
              />
          </div>
          <div v-else>
              <div class="item-row-flex">
                  <span class="calcfont calc-you f18"></span>
                  <div class="row-cell-bd">{{item.text}}</div>
                    <div v-if="item.fieldControlType=='selectList'&&item.resulteRow" class="selectList row-cell-ft" ></div>
                    <div v-else-if="item.fieldControlType=='selectList'&&!item.resulteRow" class="selectList row-cell-ft"
                    :data-field="item.queryfield"
                    :data-fieldControlType="item.fieldControlType"
                    data-fieldVal= ""
                    :data-selectType="item.selectType"
                    :data-Code="item.Code"
                    :data-TypeValue="item.TypeValue"
                    :data-queryType="item.queryType"
                    :data-queryFormat="item.queryFormat"
                    :data-queryRelation="item.queryRelation"
                    :data-queryValue="item.queryValue"
                    :data-queryComparison="item.queryComparison"
                    ></div>


                  <!-- <div v-else-if="item.type==='picker'" class="picker row-cell-ft" :data-field="item.field" :data-val="item.value" :id="item.id">{{item.value}}</div> -->
                  <input v-else-if="item.fieldControlType==='picker'" class="picker row-cell-ft"
                    :data-field="item.queryfield"
                    :data-fieldControlType="item.fieldControlType"
                    data-fieldVal= ""
                    :data-Code="item.Code"
                    :data-TypeValue="item.TypeValue"
                    :data-queryType="item.queryType"
                    :data-queryFormat="item.queryFormat"
                    :data-queryRelation="item.queryRelation"
                    :data-queryValue="item.queryValue"
                    :data-queryComparison="item.queryComparison"
                    />

                  <!-- <div v-else-if="item.type==='datepicker'" class="datepicker row-cell-ft" :data-field="item.field" :data-val="item.value" :id="item.id" data-minute="true">{{item.value}}</div> -->
                  <input v-else-if="item.fieldControlType=='datepicker'" class="datepicker row-cell-ft"
                    :data-field="item.queryfield"
                    :data-fieldControlType="item.fieldControlType"
                    data-fieldVal= ""
                    :data-Code="item.Code"
                    :data-TypeValue="item.TypeValue"
                    :data-queryType="item.queryType"
                    :data-queryFormat="item.queryFormat"
                    :data-queryRelation="item.queryRelation"
                    :data-queryValue="item.queryValue"
                    :data-queryComparison="item.queryComparison"
                    data-minute="true"
                  />
              </div>
              <div v-if="item.fieldControlType=='selectList'&&item.resulteRow" class="resulte-row"
                :data-field="item.queryfield"
                :data-fieldControlType="item.fieldControlType"
                data-fieldVal= ""
                :data-selectType="item.selectType"
                :data-Code="item.Code"
                :data-TypeValue="item.TypeValue"
                :data-queryType="item.queryType"
                :data-queryFormat="item.queryFormat"
                :data-queryRelation="item.queryRelation"
                :data-queryValue="item.queryValue"
                :data-queryComparison="item.queryComparison"
              ></div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      isFirstEnter: false //是否首次进入
    };
  },
  props: ["searchData"],
  created: function() {
    //console.log("created");
    this.isFirstEnter = true;
  },
  mounted: function() {
    // console.log("mounted");
  },
  beforeRouteEnter: function(to, from, next) {
      alert("beforeRouteEnter");
    if (from.name === "selectlist") {
      to.meta.isBack = true;
    } else {
      to.meta.isBack = false;
    }
    next();
  },
  activated: function() {
    var _self = this;
    console.log("activated");
    var _isBack = _self.$route.meta.isBack;

    //若为true,则需要刷新
    if (!_isBack || _self.isFirstEnter) {
      setTimeout(function() {
        //控件渲染
        _self.$nextTick(function() {
          //清空页面数据
          tool.ClearControlData(function() {
            //渲染控件
            tool.InitiateInfoPageControl(_self, function() {
              _self.isFirstEnter = false;
              if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
                return;
              }

              //更新selectlist控件的结果
              var curObj = $(
                "[data-field='" + eventBus.selectListData.field + "']"
              );
              if (tool.isNullOrEmptyObject(curObj)) {
                return;
              }
              curObj.attr("data-fieldval", eventBus.selectListData.value.id);
              curObj.text(eventBus.selectListData.value.text);

              //清空全局变量
              eventBus.selectListData = null;
            });
          });
        });
      }, 200);
    } else {
      _self.isFirstEnter = false;
      if (tool.isNullOrEmptyObject(eventBus.selectListData)) {
        return;
      }

      //更新selectlist控件的结果
      var curObj = $("[data-field='" + eventBus.selectListData.field + "']");
      if (tool.isNullOrEmptyObject(curObj)) {
        return;
      }

      var curObj = $("[data-field='" + eventBus.selectListData.field + "']");
      if (tool.isNullOrEmptyObject(curObj)) {
        return;
      }
      curObj.attr("data-fieldval", eventBus.selectListData.value.id);
      curObj.text(eventBus.selectListData.value.text);

      //清空全局变量
      eventBus.selectListData = null;
    }
  },
  methods: {}
};
</script>


<style scoped>
.search-rows{background: #fff;width:100%;overflow: hidden;}
.item-row{padding:0px 15px;box-sizing: border-box;
line-height:20px;
border-bottom: 1px solid beige;}
.item-row .calcfont{color:#cdcdcd;position:absolute;top:10px;right:-6px;z-index: 1;}

.search-input {
  width: 100%;
  outline: 0 none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: transparent;
  display: block;
  margin: 0;
  overflow: hidden;
  position: relative;
  height: 40px;
  line-height: 20px;
  border: 0;
  padding: 10px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 0.25rem;
}

.item-row-flex{
    position: relative;

    align-items:center;
    /* line-height: 40px; */
    /* display:-webkit-box;
    display:-moz-box; */
    display:flex;
    /* -webkit-box-orient:horizontal;
    -moz-box-orient:horizontal;
    box-orient:horizontal; */

}
.row-cell-bd {
  width: 40%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding:10px 0;
}
.row-cell-ft{
  width:60%;
  position: relative;z-index: 2;
  overflow: hidden;display:block;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;color:rgb(102, 102, 102);
  text-align: right;
  padding:10px 10px 10px 0;
}
.resulte-row{word-wrap : break-word ;}
.select-list-value{
   color:rgb(102, 102, 102);text-align:left;line-height:16px;
}
</style>
