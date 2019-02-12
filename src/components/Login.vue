<template>
  <div id="Body">
    <div class="box">
        <div id="UserName" class="UserInfo">
          <i class="calcfont calc-User"></i>
          <input
            id="UserNameVal"
            class="UserInfoVal lanInputPlaceHolder"
            data-lanid="771_请输入用户名"
            type="text"
            placeholder
            v-model="userName"
          >
        </div>
        <div id="Pwd" class="UserInfo">
          <i class="calcfont calc-Pwd"></i>
          <input
            ref="pwd"
            id="PwdVal"
            class="UserInfoVal lanInputPlaceHolder"
            data-lanid="772_请输入密码"
            type="password"
            placeholder
            v-model="userPwd"
          >
          <i @click="showPwd" class="calcfont calc-display calc-mimayincang" :class="{'active-eyes':activeEyes}"></i>
        </div>
        <div
          @click="login"
          id="LoginBtn"
          class="LoginBtn lanText"
          data-lanid="773_登录"
          :class="{disable:isDisable}"
        ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguageText: "English",
      activeEyes: false,
      userName: tool.getSessionStorageItem(tool.cache_loginUserName) || "",
      userPwd: tool.getSessionStorageItem(tool.cache_loginPwd) || "",
      isDisable: false //防止登陆按钮重复提交
    };
  },
  mounted: function() {
    setTimeout(() => {
      lanTool.updateLanVersion();
      $("#Body").height(document.documentElement.clientHeight);
    }, 100);
  },

  methods: {
   showPwd: function(event) {
      let state = this.$refs.pwd.type;
       var target = $(event.target);
      if (state === "password") {
        this.$refs.pwd.type = "text";
       target.removeClass("calc-mimayincang");
       target.addClass("calc-mimazhanxian");
      } else {
        this.$refs.pwd.type = "password";
        target.removeClass("calc-mimazhanxian");
        target.addClass("calc-mimayincang");
      }
      //   target.removeClass("calc-mimayincang");
      //  target.addClass("calc-mimazhanxian");
      // this.activeEyes = !this.activeEyes;
    },

    //登陆操作
    login: function() {
      var self = this;

      //请求地址
      var urlTemp = tool.AjaxBaseUrl();
      var jsonDatasTemp = {
        CurrentLanguageVersion: lanTool.currentLanguageVersion,
        UserName: self.userName || "",
        Password: self.userPwd || "",
        _ControlName: tool.Api_UserLogin
      };

      self.isDisable = true;
      var loadingIndexClassName = tool.showLoading();
      // var params = new URLSearchParams();
      // params.append("jsonDatas", jsonDatasTemp);

      $.ajax({
        async: true,
        type: "post",
        url: urlTemp,
        data: jsonDatasTemp,
        success: function(data) {
          self.isDisable = false;
          tool.hideLoading(loadingIndexClassName);

          data = tool.jObject(data);
          if (data._ReturnStatus == false) {
            tool.showText(tool.getMessage(data));
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
          tool.setSessionStorageItem(tool.cache_loginUserName, self.userName || "");
          tool.setSessionStorageItem(tool.cache_loginPwd, self.userPwd || "");

          //刷新注册码
          self.refreshRegisterCode();

          //跳转到首页
          self.$router.push("/index");

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
.layer {
  position: fixed;
  z-index: 998;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
#Body {
  height: 100%;
  width: 100%;
  background-image: url(../assets/images/login/login.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
.box{padding-top:70%;}
.calc-mimayincang,.calc-mimazhanxian {
  position: absolute;
  right: 0rem;
  top: 0.45rem;
  font-size: 0.48rem;
  height: 0.48rem;
  width: 0.48rem;
  display: block;
}
.UserInfo i.active-eyes {
  color: #fff;
}
.mui-popover {
  width: auto;
}
.UserInfo {
  /* height: 0.8rem !important; */
  width: 80%;
  margin-left: 10%;
  border-bottom: 1px solid #fff;
  box-sizing: border-box;
  line-height: 0.8rem;
  padding-left: 0.48rem;
  padding-right: 0.48rem;
  padding-top: 0.4rem;
  position: relative;
  display:flex;
  align-items: center;
}
.UserInfo > .calcfont {
  font-size: 0.48rem;
  /* height: 0.48rem; */
  width: 0.48rem;
  display: block;
  float: left;
  color: #c6d1e5;
  margin-left: -0.48rem;
}
.UserInfoVal {
  /* height: 0.8rem !important; */
  line-height:1.3;
  width: 100%;
  box-sizing: border-box !important;
  border: none !important;
  outline: none;
  background-color: rgba(0, 0, 0, 0) !important;
  vertical-align: top;
  color: #333;
  font-size: 0.32rem;
  padding: 0.2rem 0 0.2rem 0.28rem !important;
  margin: 0 !important;
  vertical-align: bottom;
}
.UserInfo > .mui-icon {
  height: 0.48rem !important;
  line-height: 0.48rem !important;
  width: 0.48rem !important;
  right: 0;
  top: 50% !important;
  margin-top: -0.24rem !important;
}
#UserName {
  /* padding-top: 70%; */
}
#UserName > .mui-icon.mui-icon-clear {
  color: #c6d1e5 !important;
}
.mui-input-row .mui-input-password ~ .mui-icon-eye {
  color: #c6d1e5;
}
.mui-input-row .mui-input-password ~ .mui-icon-eye.mui-active {
  color: #fff;
}
.LoginBtn {
  height: 0.8rem;
  line-height: 0.8rem;
  width: 80%;
  margin-left: 10%;
  text-align: center;
  margin-top: 0.78rem;
  background-color: #2a79b5;
  color: #fff;
  border-radius: 0.08rem;
  letter-spacing: 0.01rem;
  font-size: 0.36rem;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
  opacity: 1;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
  opacity: 1;
}

input:-ms-input-placeholder {
  color: #fff;
  opacity: 1;
}

input::-webkit-input-placeholder {
  color: #fff;
  opacity: 1;
}

.mui-popover .mui-popover-arrow {
  position: absolute;
  z-index: 1000;
  top: -25px;
  left: 0;
  overflow: hidden;
  width: 26px;
  height: 26px;
}
</style>
