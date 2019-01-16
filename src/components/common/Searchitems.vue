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
                  <!-- <div
                    v-if="item.type==='selectList'"
                    class="selectList row-cell-ft"
                    :data-url="item.queryUrl"
                    :data-field="item.field"
                    :data-val="item.value.value"
                    @click="callSelectList($event)"
                    :data-title="item.text"
                    :data-type="item.selectType"
                    :data-resulteRow="item.resulteRow"
                    ></div> -->
                    <div
                    v-if="item.type=='selectList'" 
                    class="selectList row-cell-ft" 
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
                  <input v-else-if="item.type==='picker'" class="picker row-cell-ft"               
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
                  <input v-else-if="item.type==='datepicker'" class="datepicker row-cell-ft" 
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
              <div v-if="item.resulteRow" class="select-list-value"></div>
          </div>
      </div>
</div>
</template>


<script>

export default {
    components:{

    },
    data(){
        return {

        }
    },
    props:['searchData'],
    created:function(){
        // console.log("created");
    },
    mounted:function(){
        // console.log("mounted");
    },
    activated:function(){
        // console.log("activated");
    },
    methods: {
        //点击调起列表组件
        callSelectList:function(event){
        },
    }
}
</script>


<style scoped>
.search-rows{background: #fff;width:100%;overflow: hidden;}
.item-row{padding:0px 15px;box-sizing: border-box;line-height: 40px;
border-bottom: 1px solid beige;}
.item-row .calcfont{color:#cdcdcd;position:absolute;top:0;right:-6px;z-index: 1;}

.search-input{
  width: 100%;
  outline: 0 none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  background-color: transparent;
  display: block;
  margin: 0;
  overflow: hidden;
  position: relative;
  height:40px;
  line-height: 20px;
  border: 0;
  padding:10px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 0.25rem;
}

.item-row-flex{
    position: relative;
    line-height: 40px;
    display:-webkit-box;
    display:-moz-box;
    display:box;
    -webkit-box-orient:horizontal;
    -moz-box-orient:horizontal;
    box-orient:horizontal;
}
.row-cell-bd{
  width:40%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.row-cell-ft{
  width:60%;position: relative;z-index: 2;
  overflow: hidden;display:block;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;color:rgb(102, 102, 102);
  text-align: right;padding-right:10px;
}
.select-list-value{
   color:rgb(102, 102, 102);text-align:left;line-height:16px;
}
</style>
