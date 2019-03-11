<template>
<div class="conten">
        <div v-show="!isSuccess" id="img-div" class="img-div">
            <div class="error-title">{{title}}</div>
            <img src="../assets/images/error500.png" />
        </div>
          <div id="error-tips" class="error-tips">
                {{msg}}
          </div>
</div>

</template>
<script>
export default {
  data() {
    return {
       curLV: "1", //系统当前的语言版本
       fromUrl:"",//来源地址
       signature:"",//签名
       title: "", //标题
       msg:"",//错误提示
       isSuccess:true //是否错误
    };
  },
  mounted: function() {
    var _self = this;
    _self.title = lanTool.lanContent("1011_页面错误");
    _self.msg = lanTool.lanContent("770_加载中...");

    //单点登陆
    _self.exeSingleSignOn();
  },

  methods: {
    //切换当前系统的多语言
    setCurLV:function(){
    },
    //单点登陆
    exeSingleSignOn(){
        var _self = this;
        _self.curLV = _self.$route.query._LV || "1";
        _self.fromUrl = _self.$route.query._FromUrl || "";
        _self.signature = _self.$route.query._Signature || "";

        //切换当前系统的多语言
        lanTool.setLan(_self.curLV, function () {
            //查询多语言
            lanTool.updateLanVersion();
        });

        //请求地址
        var urlTemp = tool.AjaxBaseUrl();
        var jsonDatasTemp = {
            CurrentLanguageVersion: _self.curLV,
            _ControlName: tool.Api_SingleSignOn,
            _LV:_self.curLV,
            _FromUrl:_self.fromUrl,
            _Signature:_self.signature
        };

        var loadingIndexClassName = tool.showLoading();
        $.ajax({
            async: true,
            type: "post",
            url: urlTemp,
            data: jsonDatasTemp,
            success: function(data) {
                tool.hideLoading(loadingIndexClassName);

                data = tool.jObject(data);
                _self.isSuccess = data._ReturnStatus;
                if (data._ReturnStatus == false) {
                    //tool.showText(tool.getMessage(data));
                    _self.msg = tool.getMessage(data);
                    return;
                }

                data = data._OnlyOneData || {};

                //注册码
                var _registerCode = data[tool.cache_RegisterCode] || "";
                tool.setSessionStorageItem(tool.cache_RegisterCode, _registerCode);

                //用户名
                var _userName = data["UserName"] || "";
                tool.setSessionStorageItem(tool.cache_UserName, _userName);

                //登陆对象
                tool.setSessionStorageItem(tool.cache_CurUser, JSON.stringify(data));

                //将登陆信息缓存起来，下次登陆的时候，自动从缓存中取数赋值
                tool.setSessionStorageItem(tool.cache_loginUserName, _userName || "");
                tool.setSessionStorageItem(tool.cache_loginPwd, "");

                //刷新注册码
                _self.refreshRegisterCode();

                //跳转到首页
                var parameter = {
                    IsFromSingleSignOn:true
                };
                _self.$router.push({
                    path: "/index",
                    query: parameter
                });

                //隐藏虚拟键盘
                document.activeElement.blur();
            },
            error: function(jqXHR, type, error) {
                self.isDisable = false;
                tool.hideLoading(loadingIndexClassName);

                //隐藏虚拟键盘
                document.activeElement.blur();
            }
      });
    },
    //刷新注册码
    refreshRegisterCode(){

      var _self = this;
      //请求地址
      var urlTemp = tool.AjaxBaseUrl();
      var controlName = tool.Api_RefreshRegisterCode;
      var jsonDatasTemp = {
          CurrentLanguageVersion: lanTool.currentLanguageVersion,
          UserName: tool.UserName(),
          _ControlName: controlName,
          _RegisterCode: tool.RegisterCode()
      };

      setTimeout(function(){

        $.ajax({
          async: true,
          type: "post",
          url: urlTemp,
          data: jsonDatasTemp,
          success: function(data) {
            console.log(data);

            data = tool.jObject(data);
            if (data._ReturnStatus == false) {
              //tool.showText(tool.getMessage(data));
              console.log(tool.getMessage(data));
              //return;
            }

            //重复执行
            _self.refreshRegisterCode();
          },
          error: function(jqXHR, type, error) {
            //隐藏虚拟键盘
            document.activeElement.blur();
          }
        });
      },tool.RefreshRegisterCodeInternal)
    }
  }
};
</script>

<style scoped>
.conten{text-align: center;}
 .img-div {
    margin-top:25%;
    position:relative;
    display:inline-block;
}
.error-title {
    color:#17aef0;
    width:80%;
    position:absolute;
    top:38px;
    font-weight:bold;
    left:10%;
    font-size:18px;
}
.img-div img {
    max-width:80%;
}
.error-tips {
    margin:35px auto 0;
    width:40%;
    font-size:16px;
    color:#20b2f1;
    line-height:1.3;
}

</style>
