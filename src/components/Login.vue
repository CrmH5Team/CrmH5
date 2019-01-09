<template>
  <div id="Body">
			<!-- <a @click="tapCurrentLanguage"  id="lvShow" class="popover-yuyan">{{currentLanguageText}}</a>
			<div v-show="showLanguage" id="popover-yuyan" class="mui-popover" >
				<a v-for="language in languages" v-bind:lvId="language.type" @click="switchLanguage">{{language.text}}</a>
        <div class="mui-popover-arrow" style="left:51px"></div>
			</div> -->
			<div id="UserName" class="UserInfo">
				<i class="calcfont calc-User"></i>
				<input id="UserNameVal" class="UserInfoVal lanInputPlaceHolder" data-lanid="169_请输入用户名"  type="text" placeholder="" v-model="userName" />
			</div>
			<div id="Pwd" class="UserInfo">
				<i class="calcfont calc-Pwd"></i>
				<input ref="pwd" id="PwdVal" class="UserInfoVal lanInputPlaceHolder" data-lanid="170_请输入密码" type="password" placeholder="" v-model="userPwd"  />
        <i @click="showPwd" class="calcfont calc-display eyes" :class="{'active-eyes':activeEyes}"></i>
			</div>
			<div @click="login" id="LoginBtn" class="LoginBtn lanText" data-lanid="171_登录" :class="{disable:isDisable}"></div>
      <div v-if="showLanguage" @click="tapCurrentLanguage" class="layer" style=""></div>
	</div>
</template>

<script>
export default {
  data () {
    return {
        currentLanguageText:'English',
        showLanguage:false,
        activeEyes:false,
        // languages:[
        //     {
        //     type:1,
        //     text:'English'
        //     },
        //     {
        //     type:2,
        //     text:'简体中文'
        //     },
        //     {
        //     type:3,
        //     text:'繁體中文'
        //     },
        // ],
        userName:tool.getStorageItem(tool.cache_loginUserName) || "",
        userPwd:tool.getStorageItem(tool.cache_loginPwd) || "",
        //防止登陆按钮重复提交
        isDisable:false,

    }
  },
  mounted:function(){

      lanTool.updateLanVersion();

      // alert(window.localStorage===undefined);

      $('#Body').height( document.documentElement.clientHeight );
      // console.log();

      // var self = this;
      //   var currentLan = lanTool.currentLanguageVersion || 1;
      //   self.languages.map(function(item){
      //       if(item.type == currentLan){
      //           self.currentLanguageText = item.text;
      //       }
      //   })

  },

  methods:{

    showPwd:function(){
        let state = this.$refs.pwd.type;
        if(state === 'password'){
            this.$refs.pwd.type = 'text';
        }else{
            this.$refs.pwd.type = 'password';
        }
        this.activeEyes = !this.activeEyes;
    },

    tapCurrentLanguage:function(){
        this.showLanguage = !this.showLanguage;
    },

    //切换多语言
    switchLanguage:function(e){
        var self = this;
        var lanType = e.target.getAttribute('lvId');
        if(!lanType){
            return
        }
        self.languages.map(function(item){
            if(item.type == lanType){
                lanTool.setLan(lanType, function() {});
                self.currentLanguageText = item.text;

                lanTool.updateLanVersion();
                self.tapCurrentLanguage();
            }
        })
    },

    //登陆操作
    login:function(){

        var self = this;
        //请求地址
        var urlTemp =
          tool.combineRequestUrl(
            tool.getConfigValue(tool.config_ajaxUrl),
            tool.getConfigValue(tool.ajaxUrl_Login_UserLogin)
          );
        var jsonDatasTemp = {
          "CurrentLanguageVersion": lanTool.currentLanguageVersion,
          "UserName": self.userName || "",
          "Password": self.userPwd || ""
        };

        self.isDisable = true;
        loading.show(1);

        var params = new URLSearchParams();
        params.append('jsonDatas', jsonDatasTemp);

        $.ajax({
            async: true,
            type: "post",
            url: urlTemp,
            timeout: 5000,
            data: {
              jsonDatas: JSON.stringify(jsonDatasTemp)
            },
            dataType: 'json',
            success: function(data) {
                self.isDisable = false;
                loading.hidden();

                if(data.Result != 1) {
                  toast.show(data.Msg);
                  return;
                }

                //将SessionName写入缓存
                // console.log(JSON.stringify(data));
                var sessionName = data.Data["sessionName"] || "";

                if(tool.isNullOrEmptyObject(sessionName)) {
                  toast.show(lanTool.lanContent("2_操作失败！"));
                  return;
                }
                tool.setStoragItem(tool.cache_SessionName, sessionName);

                //将userRealName,userId,timeZoneValue,isadmin写入缓存
                var userRealName = data.Data["userRealName"] || "";
                tool.setStoragItem(tool.cache_UserRealName, userRealName);
                var userId = data.Data["userId"] || "";
                tool.setStoragItem(tool.cache_UserId, userId);
                var timeZoneValue = data.Data["timeZoneValue"] || "";
                tool.setStoragItem(tool.cache_TimeZoneValue, timeZoneValue);
                var isadmin = data.Data["isadmin"] || "off";
                tool.setStoragItem(tool.cache_isadmin, isadmin);


                //将登陆信息缓存起来，下次登陆的时候，自动从缓存中取数赋值
                tool.setStoragItem(tool.cache_loginUserName, self.userName || "");
                tool.setStoragItem(tool.cache_loginPwd, self.userPwd || "");


                self.$router.push('/index');

                //隐藏虚拟键盘
                document.activeElement.blur();

                //定时刷新Session
                setInterval(function() {

                  $.ajax({
                    async: true,
                    type: "post",
                    url: urlTemp,
                    data: {
                      jsonDatas: JSON.stringify(jsonDatasTemp)
                    },
                    dataType: 'json',
                    success: function(data) {

                      if(data.Result != 1) {
                        return;
                      }

                      //将SessionName写入缓存
                      // console.log(JSON.stringify(data));
                      var sessionName = data.Data["sessionName"] || "";
                      if(tool.isNullOrEmptyObject(sessionName)) {
                        return;
                      }
                      tool.setStoragItem(tool.cache_SessionName, sessionName);

                      //将userRealName,userId,timeZoneValue,isadmin写入缓存
                      var userRealName = data.Data["userRealName"] || "";
                      tool.setStoragItem(tool.cache_UserRealName, userRealName);
                      var userId = data.Data["userId"] || "";
                      tool.setStoragItem(tool.cache_UserId, userId);
                      var timeZoneValue = data.Data["timeZoneValue"] || "";
                      tool.setStoragItem(tool.cache_TimeZoneValue, timeZoneValue);
                      var isadmin = data.Data["isadmin"] || "off";
                      tool.setStoragItem(tool.cache_isadmin, isadmin);
                    },
                    error: function(jqXHR, type, error) {
                      console.log('timeerror');
                    }
                  });
                }, (tool.getConfigValue(tool.config_refreshSessionTime) || 1200000));
            },
            error: function(jqXHR, type, error) {
              self.isDisable = false;
              loading.hidden();

              //隐藏虚拟键盘
					    document.activeElement.blur();

              //重复登录，一直到成功为止
					    self.login();

            }
        })

    }

  }


}
</script>

<style scoped>
.layer{
  position: fixed;
  z-index: 998;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
}
#Body {
	height: 100%;
	width: 100%;
	background-image: url(../assets/images/login/login.jpg);
	background-size: 100%;
	background-repeat: no-repeat;
}
/*
a.popover-yuyan {
  position: absolute;
  z-index:9;
	top: 8%;
	right: 10%;
	display: block;
	padding-right: 0.4rem;
	font-size: 0.28rem;
	color: #fff;
}
.popover-yuyan:after {
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid #fff;
	content: "";
	position: absolute;
	top: 0.07rem;
	right: 2px;
	width: 0;
	color: #fff;
}
#popover-yuyan {
  padding: 0.2rem 0;
  position: absolute;
  top:12%;
  right:1%;
  z-index: 999;
  width: auto;
  position: absolute;
  -webkit-transition: opacity .3s;
  transition: opacity .3s;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  border-radius: 7px;
  background-color: #f7f7f7;
  -webkit-box-shadow: 0 0 15px rgba(0,0,0,.1);
  box-shadow: 0 0 15px rgba(0,0,0,.1);
}
#popover-yuyan a {
	display: block;
	padding: 0.2rem 0.6rem;
	color: #a6beea;
}
#popover-yuyan a:active {
	color: #3c8dbc;
}
#popover-yuyan .mui-popover-arrow {
  position: absolute;
  top: -0.25rem;
  left: 0;
  overflow: hidden;
  width:0;
  height:0;
	border-right:0.3rem solid transparent;
	border-left:0.3rem solid transparent;
	border-bottom:0.3rem solid #f7f7f7;
}
*/
.eyes{
    position: absolute;
    right:0rem;
    top:0.45rem;
    font-size: 0.48rem;
    height: 0.48rem;
    width: 0.48rem;
    display: block;
}
.UserInfo i.active-eyes{
  color:#fff;
}
.mui-popover {
	width: auto
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
}
.UserInfo>.calcfont {
	font-size: 0.48rem;
	height: 0.48rem;
	width: 0.48rem;
	display: block;
	float: left;
	color: #C6D1E5;
	margin-left: -0.48rem;
}
.UserInfoVal {
	height: 0.8rem !important;
	line-height: 0.4rem;
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
.UserInfo>.mui-icon {
	height: 0.48rem !important;
	line-height: 0.48rem !important;
	width: 0.48rem !important;
	right: 0;
	top: 50% !important;
	margin-top: -0.24rem !important;
}
#UserName {
	padding-top: 70%;
}
#UserName>.mui-icon.mui-icon-clear {
	color: #C6D1E5 !important;
}
.mui-input-row .mui-input-password~.mui-icon-eye {
	color: #C6D1E5;
}
.mui-input-row .mui-input-password~.mui-icon-eye.mui-active {
	color: #fff;
}
.LoginBtn {
	height: 0.8rem;
	line-height: 0.8rem;
	width: 80%;
	margin-left: 10%;
	text-align: center;
	margin-top: 0.78rem;
	background-color: #2A79B5;
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
