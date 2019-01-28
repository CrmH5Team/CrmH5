<template>
<div class="documentList">
    <div class="ListCell">
        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-wendang2"></span></div>
        <div class="ListCellContent">
            <div class="ListCellContentLeft documentHeader">
                <div class="ListCellContentLeftText documentHeaderContent  lanText" data-lanid="750_文档"></div>
            </div>
            <div class="ListCellRightIcon documentAddIcon"><span @click="actionSheet" class="mui-icon calcfont calc-jia"></span></div>
        </div>
    </div>
    <div class="wendangList">
        <div v-for="fileItem in fileListData" :key="fileItem.attachmentsid" class="ListCell">
            <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
            <div class="ListCellContent">
                <div class="ListCellContentLeft leftContent" @click="goFileInfo(fileItem)">
                    <div class="ListCellContentLeftText"><span class="mui-icon calcfont calc-fujian"></span>{{fileItem.ObjectName}}</div>
                </div>
                <div class="ListCellContentRight rightContent">
                    <div class="ListCellContentRightText">{{fileItem.AddTime|MeetingTimeFormat}}</div>
                </div>
                <div class="ListCellRightIcon deleteDoc iconHidden"><span class="mui-icon calcfont calc-delete"></span></div>
            </div>
        </div>
    </div>

    <form id="uploadForm" style="display:none;">
      <!-- multiple="multiple"属性控制多选，默认为单选 -->
        <input ref="fileChoose" v-on:change="inputFiles" class="fileInput" type="file" name="img" id="selectFile" />
        <!-- <input id="uploadFile" name="uploadFile" type="file" accept="*/*" />
        <input id="uploadFileSub" type="button" /> -->
    </form>


</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['fileListData', 'fromID','fromType'],
    mounted: function () {
        lanTool.updateLanVersion();
    },
    methods: {

        //选择文件后触发 一次选择一张图片
        inputFiles: function () {
            var _self = this;
            tool.showLoading();
            var file = _self.$refs.fileChoose.files[0] || [];
            if (file.length == 0){
                return;
            }

            //判断文件不能超过限定的大小
            if(file.size>tool.FileMaxSiz){
                tool.hideLoading();
                var sizeStr = tool.fileSizeFormat(tool.FileMaxSiz);
                var msg = lanTool.lanContent("999_文件大小不能超过！");
                msg = msg.replace("{0}",sizeStr);
                console.log(msg);
                tool.showText(msg);
                return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {

                //console.log(e.target);

                var parameter = {
                    file: e.target.result,
                    fileName: file.name,
                    fromID: _self.fromID,
                    fromType: _self.fromType
                };
                _self.$router.push({
                    path: '/uploadinput',
                    query: parameter
                });

                tool.hideLoading();
                $('#selectFile').val('').trigger("change");
            };
        },

        // goInfo: function (data) {
        //     this.$router.push({
        //         path: '/previewfile',
        //         query: data
        //     })
        // },

        //弹出文件上传
        actionSheet: function () {
            $("#selectFile").trigger('click');
        },

        // toggle: function (e) {
        //     if ($(e.target).hasClass('calc-xia')) {
        //         $(e.target).removeClass('calc-xia').addClass('calc-shang');
        //         $(e.target).next('.downlistbox').hide(10);
        //     } else {
        //         $(e.target).removeClass('calc-shang').addClass('calc-xia');
        //         $(e.target).next('.downlistbox').show(10);
        //     }
        // }
        //点击去文件详情页
        goFileInfo:function(data){
            if(tool.isNullOrEmptyObject(data)){
                return ;
            }
            // console.log(data);
            this.$router.push({path:'/previewfile', query: data});
        },
    },
    deactivated: function () {

        tool.hideLoading();
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
</style>
