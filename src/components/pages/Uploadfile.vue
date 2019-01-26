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
        <div v-for="fileItem in fileListData" :key="fileItem.attachmentsid" class="ListCell">
            <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div>
            <div class="ListCellContent">
                <div class="ListCellContentLeft leftContent" @click="goFileInfo(fileItem)">
                    <div class="ListCellContentLeftText"><span class="mui-icon calcfont calc-fujian"></span>{{fileItem.filename}}</div>
                </div>
                <div class="ListCellContentRight rightContent">
                    <div class="ListCellContentRightText">{{fileItem.modifiedtime}}</div>
                </div>
                <div class="ListCellRightIcon deleteDoc iconHidden"><span class="mui-icon calcfont calc-delete"></span></div>
            </div>
        </div>
    </div>

    <form id="uploadForm" style="display:none;">
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
            // fileListData:[
            //     //   {
            //     //       attachmentname:"12110320_微信图片_2018082314101328.png",
            //     //       attachmentpath:"http://197.7.50.186:9988/FileUpload/Potentials/201812/12110320_微信图片_2018082314101328.png",
            //     //       attachmentsid:3577,
            //     //       createdtime:"16/Nov 15:00",
            //     //       creator:"it mobileclient",
            //     //       filedownloadcount:0,
            //     //       filelocationtype:"E",
            //     //       filename:"12110320_微信图片_2018082314101328.png",
            //     //       filesize:107653,
            //     //       filestatus:1,
            //     //       filetype:"",
            //     //       fileversion:"",
            //     //       folderid:1,
            //     //       foldername:"Default",
            //     //       modifiedtime:"16/Nov 15:00",
            //     //       note_no:"DOC50",
            //     //       notecontent:"",
            //     //       notesid:3635,
            //     //       title:"这是测试",
            //     //   },
            //     //   {
            //     //       attachmentname:"12110320_微信图片_2018082314101328.png",
            //     //       attachmentpath:"http://197.7.50.186:9988/FileUpload/Potentials/201812/12110320_微信图片_2018082314101328.png",
            //     //       attachmentsid:3578,
            //     //       createdtime:"16/Nov 15:00",
            //     //       creator:"it mobileclient",
            //     //       filedownloadcount:0,
            //     //       filelocationtype:"E",
            //     //       filename:"12110320_微信图片_2018082314101328.png",
            //     //       filesize:107653,
            //     //       filestatus:1,
            //     //       filetype:"",
            //     //       fileversion:"",
            //     //       folderid:1,
            //     //       foldername:"Default",
            //     //       modifiedtime:"16/Nov 15:00",
            //     //       note_no:"DOC50",
            //     //       notecontent:"",
            //     //       notesid:3635,
            //     //       title:"这是测试",
            //     //   },
            // ]

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
            
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {

                console.log(e.target);
                
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
            this.$router.push({path:'/previewfile', query: data})
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
