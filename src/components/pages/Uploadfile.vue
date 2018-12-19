<template>

<div class="input-row wendanbox addpageHidden">
    <label @click="toggle" class="calcfont calc-xia lanText" data-lanid="278_文档"></label>
    <div class="downlistbox mui-active">
        <div class="btn-upload">
        <a @click="actionSheet" > <i class="calcfont calc-shangchuan"></i><span class="lanText" data-lanid="277_上传"></span></a>
        </div>

        <p class="lanText" data-lanid="279_无文档"></p>
        <ul class="downlist">
            <li v-for="item in data">
                <div @click="goInfo(item)">
                    <div class="mui-ellipsis"></div>{{item.filename}}
                </div>
            </li>
        </ul>
    </div>


    <input ref="fileChoose" v-on:change="inputFiles" class="fileInput" type="file" name="img" id="selectFile" />

</div>

    
</template>
<script>
export default {
    data(){
        return {
        
        }
    },
    props:['data','id'],
    mounted:function(){
        lanTool.updateLanVersion();    
    },
    methods:{

        //选择文件后触发 一次选择一张图片  
        inputFiles:function(){

            loading.show(3,lanTool.lanContent("172_加载中..."));

            var $this = this;
            
            var file = $this.$refs.fileChoose.files[0] || [];

            if(file.length == 0) return;

            var reader = new FileReader();
            // alert(JSON.stringify(reader));
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                $this.$router.push({
                name: "uploadinput",
                params: { file: e.target.result,fileName:file.name,fileSize:file.size,id:$this.id}
                });

                $('#selectFile').val('');
            };
        },

        goInfo:function(data){
            this.$router.push({path:'/previewfile', query: data})
        },

        //弹出文件上传
        actionSheet:function(){
            $("#selectFile").trigger('click');
        },

        toggle:function(e){
            if($(e.target).hasClass('calc-xia')){
               $(e.target).removeClass('calc-xia').addClass('calc-shang'); 
               $(e.target).next('.downlistbox').hide(10);
            }else{
               $(e.target).removeClass('calc-shang').addClass('calc-xia');  
               $(e.target).next('.downlistbox').show(10);
            }
        }
    },
    deactivated:function(){
        loading.hidden();
    }
    
}
</script>



<style scoped>

/*文件上传*/
.input-row{position:relative;}
.input-row label{float: none;padding: 11px 15px 0;
    width: 100%;color: #898989;font-size: 0.24rem;display: block;position: relative;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;line-height: 1.1;
}

.wendanbox label {height: 40px;line-height: 25px;padding: 11px 15px;box-sizing: border-box;}
.btn-upload {
    color: #3cadf9;text-align: center;padding: 20px 0;border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;margin: 0 10px 0;line-height: 1;
}
.downlistbox p {
    text-align: center;font-size: 0.24rem; color: #999;
    padding: 10px;display: none;
}
.downlist {
    margin: 0 10px;background: #f9f9f9;list-style: none; padding: 10px;font-size: 0.24rem;
    /* display:none; */
}
.downlist li {
    margin: 0;
    padding: 11px 10px;
    line-height: 20px;
    border-bottom: 1px dotted #ddd;
        
}
.downlist li div {
    color: #595959;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width:100%
}
.mui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

label.calcfont:before{
    position:absolute;right:15px;font-size: 16px;
}



.fileInput{
    visibility: hidden;
    position: fixed;bottom:0;z-index: -1;
}

</style>
<style>
.weui-actionsheet__action{margin-top:10px;}
.weui-actionsheet__cell{
    padding:15px 0;
    
}
</style>

