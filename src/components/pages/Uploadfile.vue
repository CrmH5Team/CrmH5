<template>
<div class="documentList">
    <div class="ListCell">
        <div class="ListCellLeftIcon"><span class="mui-icon calcfont calc-wendang2"></span></div>
        <div class="ListCellContent">
            <div class="ListCellContentLeft documentHeader">
                <div class="ListCellContentLeftText documentHeaderContent  lanText" data-lanid="750_文档"></div>
            </div>
            <div class="ListCellRightIcon documentAddIcon controlEdit"><span @click="actionSheet" class="mui-icon calcfont calc-jia"></span></div>
        </div>
    </div>
    <div class="wendangList">
        <div v-for="fileItem in fileListData" :key="fileItem.attachmentsid" class="ListCell">
            <!-- <div class="ListCellLeftIcon leftIconHidden"><span class="mui-icon calcfont calc-shijian"></span></div> -->
            <div class="ListCellContent">
                <div class="ListCellContentLeft leftContent" @click="goFileInfo(fileItem)">
                    <div class="ListCellContentLeftText f12"><span class="mui-icon calcfont calc-fujian"></span>{{fileItem.ObjectName}}</div>
                </div>
                <div class="ListCellContentRight rightContent">
                    <div class="ListCellContentRightText">{{fileItem.AddTime|MeetingTimeFormat}}</div>
                </div>
                <span @click="deleteDoc(fileItem)" class="delete-icon calcfont calc-delete"></span>
                <!-- <div class="ListCellRightIcon deleteDoc iconHidden"><span class="mui-icon calcfont calc-delete"></span></div> -->
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['fileListData', 'fromID','fromType',"scheduleID"],
    mounted: function () {
        lanTool.updateLanVersion();
    },
    activated:function(){
    },
    methods: {
        //跳转到上传页面
        actionSheet: function () {
            var _self = this;
            var parameter = {
                fromID: _self.fromID,
                fromType: _self.fromType,
                scheduleID:_self.scheduleID
            };
            _self.$router.push({
                path: '/uploadinput',
                query: parameter
            });
        },
        //点击去文件详情页
        goFileInfo:function(data){
            if(tool.isNullOrEmptyObject(data)){
                return ;
            }
            // console.log(data);
            this.$router.push({path:'/previewfile', query: data});
        },
        //删除单个文件
        deleteDoc:function(data){
            // console.log(data);
            var _self = this;
            var autoID = data["AutoID"] || "";
            if(tool.isNullOrEmptyObject(autoID)){
                return;
            }

            var idArr = [];
            idArr.push(autoID);
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_DocumentsHandle_Delete;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                AutoID: JSON.stringify(idArr)
            };

            tool.showConfirm(
                lanTool.lanContent("593_您确定要删除数据吗？"),
                function() {
                    var loadingIndexClassName = tool.showLoading();

                    $.ajax({
                        async: true,
                        type: "post",
                        url: urlTemp,
                        data: jsonDatasTemp,
                        success: function (data) {
                            tool.hideLoading(loadingIndexClassName);
                            data = tool.jObject(data);
                            // console.log(data);
                            if (data._ReturnStatus == false) {
                                tool.showText(tool.getMessage(data));
                                console.log(tool.getMessage(data));
                                return true;
                            }

                            //刷新文档列表
                           _self.initDocList();
                        },
                        error: function (jqXHR, type, error) {
                            console.log(error);
                            tool.hideLoading(loadingIndexClassName);
                            return true;
                        },
                        complete: function () {
                            //tool.hideLoading();
                            //隐藏虚拟键盘
                            document.activeElement.blur();
                        }
                    });
                },
                function() {}
            );
        },
        //渲染文件列表
        initDocList:function(){
            var _self = this;
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_DocumentsHandle_Query;

            // console.log("FromTypeID:"+_self.fromType);
            // console.log("FromID:"+_self.fromID);

            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                FromTypeID:_self.fromType,
                FromID:_self.fromID,
                ScheduleID:_self.scheduleID
            };
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                        data = tool.jObject(data);
                        // console.log(data);
                        if (data._ReturnStatus == false) {
                            tool.hideLoading();
                            tool.showText(tool.getMessage(data));
                            console.log(tool.getMessage(data));
                            return true;
                        }

                        data = data._OnlyOneData.Rows || [];
                        _self.$parent.fileListData = data;
                    },
                    error: function (jqXHR, type, error) {
                        console.log(error);
                        return true;
                    },
                    complete: function () {
                        //tool.hideLoading();
                        //隐藏虚拟键盘
                        document.activeElement.blur();
                    }
                });
        },
        //给删除按钮添加disable类名来控制是否可删除操作
        controlDelete:function(onlyViewTemp){
            var _self = this;
             setTimeout(function(){
                if(onlyViewTemp){
                    $('.delete-icon').addClass('disable');
                }else{
                    $('.delete-icon').removeClass('disable');
                }
            }
            ,0);
        }
    },
    deactivated: function () {
        // tool.hideLoading();
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
</style>
