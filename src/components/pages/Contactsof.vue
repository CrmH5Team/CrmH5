<template>
<div>
    <header class="header sticky">
        <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>
        <h1 class="mui-title">{{title||''}}</h1>
    </header>
    <div id="page-content" class="page-content">
        <div class="add-btn-div">
            <div @click="addContacts" class="add-div" data-link="/contactsinfo/-1">
                <span class="calcfont calc-add"></span>
                <span class="add-text lanText" data-lanid="793_添加联系人"></span>
            </div>
        </div>

        <div v-show="!noData" id="contactsList" class="group-item-list contacts-list">
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
        <nothing v-show="noData" style="padding-top:0.8rem;"></nothing>

    </div>

</div>
</template>

<script>
import Nothing from "../common/Nothing";
export default {
    components: {
        nothing: Nothing
    },
    data() {
        return {
            title: 'Contacts',
            companyID: "", //公司id
            companyName: '', //公司名字
            noData: true, //没数据
        }
    },
    created: function () {
        this.companyID = this.$route.query.companyID || "";
        this.companyName = this.$route.query.companyName || "";
        // console.log("this.companyID:"+this.companyID);
    },
    beforeRouteEnter: function (to, from, next) {
        // 这个页面一直都需要刷新
        // if(from.name == 'contactsinfo' || from.name == 'selectlist'){
        //     to.meta.isBack = true;
        // }
        next();
    },
    beforeRouteLeave: function (to, from, next) {
        if (to.name == 'contacts') {
            this.$destroy();
        }
        next();
    },
    mounted: function () {
        lanTool.updateLanVersion();
        this.title = this.$route.query.infoName || "";
        document.activeElement.blur();

        var _self = this;
        setTimeout(function () {
            _self.$nextTick(function () {
                _self.getListData();
            });
        }, 200);
    },
    methods: {
        //新增联系人
        addContacts: function (e) {
            var _self = this;
            var target = $(e.target);
            if (!target.hasClass('add-div')) {
                target = target.parents("div.add-div:first");
                if (tool.isNullOrEmptyObject(target)) {
                    return;
                }
            }
            var urlTemp = target.attr('data-link') || '';
            var parameter = {
                onlyView: false,
                companyID: _self.companyID,
                companyName: _self.companyName,
            };
            _self.$router.push({
                path: urlTemp,
                query: parameter
            });

        },
        //获取列表数据
        getListData: function () {
            //清空数据
            var _self = this;
            _self.noData = true;
            var container = $('#contactsList');
            if (tool.isNullOrEmptyObject(container)) {
                container.html('');
            }

            var contentHtmlStr = "";
            var groupID = _self.companyID || "";
            if (tool.isNullOrEmptyObject(groupID)) {
                _self.noData = true;
                return;
            }

            var innerTemplate = `<div class="group-item f14" data-url="/contactsinfo/{AutoID}">
                            <div class="item-user-icon calcfont calc-fuzeren1" data-autoid={AutoID}></div>
                            <div class="item-block contacts-item-block">
                                <div class="item-div item-first-div">{EnglishName}</div>
                                <div class="item-div">{Title}</div>
                                <div class="item-div"><span class="left-text max60">{CompanyID}</span><span class="right-text max35">{CountryName}</span></div>
                                <div class="item-div">
                                  <span class="left-text">{Email}</span><span class="right-text">{TelPhone}</span>
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
                    setTimeout(function () {
                        $("[data-url]").off('click').on('click', function () {
                            var curObj = $(this);
                            if (tool.isNullOrEmptyObject(curObj)) {
                                return;
                            }
                            var urlTemp = curObj.attr("data-url") || "";
                            if (tool.isNullOrEmptyObject(urlTemp)) {
                                return;
                            }
                            var infoName = null;
                            //判断是Organizations列表还是contacts列表
                            // if ($(this).hasClass("contacts-item-block")) {
                                // console.log("contacts");
                                infoName = $(this).find(".item-first-div").text() || "";
                            // }
                            var parameter = {
                                onlyView: true,
                                infoName: infoName
                            };
                            _self.$router.push({
                                path: urlTemp,
                                query: parameter
                            });
                        });
                    }, 0);
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    tool.hideLoading(loadingIndexClassName);
                    return;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
        backHandler: function () {
            this.$router.back(-1);
        },

    }
}
</script>

<style scoped>
/*页面头部style*/
header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    line-height: 0.2rem;
    background: #f8f2dc;
}

.mui-title {
    display: inline-block;
    overflow: hidden;
    width: auto;
    max-width: 75%;
    font-size: 0.34rem;
    margin: 0 0 0 -10px;
    text-overflow: ellipsis;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    line-height: 0.88rem;
}

.header .calcfont {
    font-size: 0.48rem;
    text-align: center;
    padding: 0.2rem 10px;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
}

header .mui-title,
header a {
    color: #333;
    font-weight: 400;
}

.page-content {
    padding-top: 0.88rem;
}

/*增加按钮*/
.add-btn-div {
    text-align: center;
}

.add-div {
    height: 38px;
    line-height: 38px;
    text-align: center;
    display: inline-block;
    margin: 0 auto;
    padding: 0 15px;
}

.add-div .calcfont {
    color: #ff5a21;
}

.add-div .add-text {
    vertical-align: middle;
    color: #ff5a21;
}
</style>
