<template>
<div>
      <header class="header sticky">
          <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>
          <h1 class="mui-title">{{title||''}}</h1>
      </header>
      <div id="page-content" class="page-content">
          <div class="add-btn-div">
                <div class="add-div" data-url="/contactsinfo/{AutoID}">
                    <span class="calcfont calc-add"></span>
                    <span class="add-text lanText" data-lanid="793_添加联系人"></span>
                </div>
          </div>

          <div class="List">
              <!-- <div class="group-item" data-url="/contactsinfo/9">
                    <div class="item-user-icon calcfont calc-fuzeren1"></div>
                    <div class="item-block contacts-item-block">
                      <div class="item-div item-first-div">Todd Scott</div>
                      <div class="item-div">Fleet Planning Manager</div>
                      <div class="item-div"><span>Air China</span><span class="right">China</span></div>
                      <div class="item-div">
                        <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
                      </div>
                      <div class="item-div">Airlines, Computer info Services</div>
                    </div>
                </div> -->
          </div>

      </div>

</div>
</template>

<script>
export default {
      data (){
        return {
            title:'Contacts',
            companyID:"",//公司id
            noData: true, //没数据
        }
      },
      created:function(){
            this.companyID = this.$route.query.companyID || "";
      },
      beforeRouteEnter:function(to, from, next){
            // 这个页面一直都需要刷新
            // if(from.name == 'contactsinfo' || from.name == 'selectlist'){
            //     to.meta.isBack = true;
            // }
            next();
      },
      mounted:function(){
          lanTool.updateLanVersion();
          document.activeElement.blur();

          var _self = this;
          setTimeout(function(){
            _self.$nextTick(function(){
            _self.getListData();
            });
          },200);
      },
      methods: {
          //获取列表数据
          getListData:function(){
            //清空数据
            var _self = this;
            _self.noData = true;
            var container = $('.List');
            if(tool.isNullOrEmptyObject(container)){
                container.html('');
            }

            var contentHtmlStr = "";
            var groupID = _self.companyID || "";
            if(tool.isNullOrEmptyObject(groupID)){
                _self.noData = true;
                return;
            }

            var innerTemplate = `<div class="group-item" data-url="/contactsinfo/{AutoID}">
                            <div class="item-user-icon calcfont calc-fuzeren1" data-autoid={AutoID}></div>
                            <div class="item-block contacts-item-block">
                                <div class="item-div item-first-div">{EnglishName}</div>
                                <div class="item-div">{Title}</div>
                                <div class="item-div"><span>{CompanyID}</span><span class="right">{CountryName}</span></div>
                                <div class="item-div">
                                  <span>{Email}</span><span class="right">{TelPhone}</span>
                                </div>
                                <div class="item-div">{BusinessType},{DepartmentName}</div>
                            </div>
                        </div>`;

            //请求地址
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_ContactsHandle_GroupInnerData;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                GroupID: groupID,
                _RegisterCode: tool.RegisterCode(),
                QueryCondiction: []
            };

            tool.showLoading();
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    data = tool.jObject(data);
                    // console.log(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        console.log(tool.getMessage(data));
                        _self.noData = true;
                        return;
                    }

                    data = data._OnlyOneData.Rows || [];
                    //无数据
                    if (data.length <= 0) {
                        _self.noData = true;
                        return;
                    }

                    //渲染组数据
                    for (var i = 0; i < data.length; i++) {
                        var tempStr = innerTemplate;
                        for (var key in data[i]) {
                            tempStr = tempStr.ReplaceAll("{" + key + "}", (data[i][key] || ""));
                        }

                        contentHtmlStr += tempStr;
                    }

                    //追加数据
                    container.append(contentHtmlStr);
                    //container.html(contentHtmlStr);
                    _self.noData = false;

                    //定义跳转事件
                    setTimeout(function(){
                        $("[data-url]").off('click').on('click',function(){
                            var curObj = $(this);
                            if(tool.isNullOrEmptyObject(curObj)){
                                return;
                            }
                            var urlTemp = target.attr("data-url") || "";
                            if(tool.isNullOrEmptyObject(urlTemp)){
                                return;
                            }
                            _self.$router.push(urlTemp);
                        });
                    },0);
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    tool.hideLoading();
                    return;
                },
                complete: function () {
                    tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
          },
          backHandler: function () {
              this.$router.back(-1);
          },
          //点击去详情页
          goInfoPage:function(id){

            // var target = $(event.target);
            // // console.log(target);
            // if(target.hasClass("item-stars-icon")){
            // return;
            // }
            // if (!target.hasClass("group-item")) {
            // target = target.closest("div.group-item");
            // if (tool.isNullOrEmptyObject(target)) {
            //     return;
            // }
            // }

            // var url = target.attr("data-url") || "";
            // if(tool.isNullOrEmptyObject(url)){
            // return;
            // }

            // _self.$router.push(url);
          },
      }
}
</script>