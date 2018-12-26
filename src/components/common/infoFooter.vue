<template>
<div class="updateList">
    <div class="ListCell">
        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-shijian"></span></div>
        <div class="ListCellContent">
            <div class="ListCellContentLeft leftContent">
                <div class="ListCellContentLeftText">Updated Time</div>
            </div>
            <div class="ListCellContentRight rightContent">
                <div class="ListCellContentRightText">13/Nov/2018 15:00</div>
            </div>
        </div>
    </div>
    <div class="ListCell">
        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-chuangjianren"></span></div>
        <div class="ListCellContent">
            <div class="ListCellContentLeft leftContent">
                <div class="ListCellContentLeftText">Updated by Cheryl Xiong</div>
            </div>
            <div class="ListCellContentRight rightContent">
                <div class="ListCellContentRightText">Cheryl Xiong</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    mounted: function () {
        lanTool.updateLanVersion();
        $('.input-row .footerInput').on('click', function () {
            document.activeElement.blur();
        })
    },
    props: ['createdtime', 'modifiedtime', 'modifiedby']

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
</style>
