<template>
<div class="documentList">
    <div class="ListCell">
        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-wendang2"></span></div>
        <div class="ListCellContent">
            <div class="ListCellContentLeft documentHeader">
                <div class="ListCellContentLeftText documentHeaderContent">Documents</div>
            </div>
            <div class="ListCellRightIcon documentAddIcon"><span @click="actionSheet" class="mui-icon calcfont calc-jia"></span></div>
        </div>
    </div>
    <div class="wendangList">
        <div class="ListCell">
            <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
            <div class="ListCellContent">
                <div class="ListCellContentLeft leftContent">
                    <div class="ListCellContentLeftText"><span class="mui-icon calcfont calc-fujian"></span>TestFileName1.png</div>
                </div>
                <div class="ListCellContentRight rightContent">
                    <div class="ListCellContentRightText">16/Nov 15:00</div>
                </div>
                <div class="ListCellRightIcon deleteDoc"><span class="mui-icon calcfont calc-delete"></span></div>
            </div>
        </div>
        <div class="ListCell">
            <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
            <div class="ListCellContent">
                <div class="ListCellContentLeft leftContent">
                    <div class="ListCellContentLeftText"><span class="mui-icon calcfont calc-fujian"></span>TestFileName2.png</div>
                </div>
                <div class="ListCellContentRight rightContent">
                    <div class="ListCellContentRightText">16/Nov 15:00</div>
                </div>
                <div class="ListCellRightIcon deleteDoc"><span class="mui-icon calcfont calc-delete"></span></div>
            </div>
        </div>
    </div>

    <input ref="fileChoose" v-on:change="inputFiles" class="fileInput" type="file" name="img" id="selectFile" />

</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['data', 'id'],
    mounted: function () {
        lanTool.updateLanVersion();
    },
    methods: {

        //选择文件后触发 一次选择一张图片
        inputFiles: function () {

            loading.show(3, lanTool.lanContent("172_加载中..."));

            var $this = this;

            var file = $this.$refs.fileChoose.files[0] || [];

            if (file.length == 0) return;

            var reader = new FileReader();
            // alert(JSON.stringify(reader));
            reader.readAsDataURL(file);
            reader.onload = function (e) {

                $this.$router.push({
                    name: "uploadinput",
                    params: {
                        file: e.target.result,
                        fileName: file.name,
                        fileSize: file.size,
                        id: $this.id
                    }
                });

                loading.hidden();
                $('#selectFile').val('');
            };
        },

        goInfo: function (data) {
            this.$router.push({
                path: '/previewfile',
                query: data
            })
        },

        //弹出文件上传
        actionSheet: function () {
            $("#selectFile").trigger('click');
        },

        toggle: function (e) {
            if ($(e.target).hasClass('calc-xia')) {
                $(e.target).removeClass('calc-xia').addClass('calc-shang');
                $(e.target).next('.downlistbox').hide(10);
            } else {
                $(e.target).removeClass('calc-shang').addClass('calc-xia');
                $(e.target).next('.downlistbox').show(10);
            }
        }
    },
    deactivated: function () {
        loading.hidden();
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
</style>
