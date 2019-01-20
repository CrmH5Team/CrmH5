<template>
<!-- <div class="updateList HideWhenNew"> -->
    <div class="updateList">
    <div class="ListCell">
        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-shijian"></span></div>
        <div class="ListCellContent">
            <div class="ListCellContentLeft leftContent">
                <div class="ListCellContentLeftText lanText" data-lanid="801_更新时间"></div>
            </div>
            <div class="ListCellContentRight rightContent">
                <!-- <div class="ListCellContentRightText">{{modifiedtime}}</div> -->
                <div data-field="LastUpdateTime" data-fieldControlType="divText" data-formatType="DateTime" data-format="d/MMM/yyyy HH:mm" class="ListCellContentRightText"></div>
            </div>
        </div>
    </div>
    <div class="ListCell">
        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-chuangjianren"></span></div>
        <div class="ListCellContent">
            <div class="ListCellContentLeft leftContent">
                <div class="ListCellContentLeftText lanText" data-lanid="802_更新者"></div>
            </div>
            <div class="ListCellContentRight rightContent">
                <!-- <div class="ListCellContentRightText">{{modifiedby}}</div> -->
                <div data-field="LastUpdateUserName" data-fieldControlType="divText" class="ListCellContentRightText"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted: function () {
        var _self = this;
        lanTool.updateLanVersion();
    },
    created:function(){   
    }
}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
</style>
