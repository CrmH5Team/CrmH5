<template>
<div>
    <Header class="header" :title="title" :messageCount="messageCount"></Header>

    <div id="page-content" class="page-content">
        <!-- 搜索 -->
        <div class="search-box" style="display:none">
            <div @click="goSearch" class="search" id="searchBtn">
                <span class="search-icon mui-icon calcfont calc-sousuo"></span>
                <label class="f16 search-label lanText" data-lanid="780_搜索"></label>
            </div>
        </div>

        <div id="nav" class="sticky">
            <div class="weui-grids">
                <div class="weui-grid">
                    <router-link to="/tripmeeting" class="js_grid">
                        <div class="weui-grid__icon trip-meeting-icon">
                            <span class="mui-icon calcfont calc-kehu"></span>
                        </div>
                        <p class="f12 weui-grid__label lanText" data-lanid="781_出差&会议"></p>
                    </router-link>
                </div>
                <div class="weui-grid">
                    <router-link to="/contacts" class="js_grid">
                        <div class="weui-grid__icon lianxiren1-icon">
                            <span class="mui-icon calcfont calc-kehulianxiren"></span>
                        </div>
                        <p class="f12 weui-grid__label lanText" data-lanid="782_联系人"></p>
                    </router-link>
                </div>
                <div class="weui-grid">
                    <router-link to="/business" class="js_grid">
                        <div class="weui-grid__icon jihui-icon">
                            <span class="calcfont calc-jihui"></span>
                        </div>
                        <p class="f12 weui-grid__label lanText" data-lanid="783_商业"></p>
                    </router-link>
                </div>
                <div class="weui-grid">
                    <router-link to class="js_grid">
                        <div class="weui-grid__icon intelligence-icon">
                            <span class="calcfont calc-lianxiren1"></span>
                        </div>
                        <p class="f12 weui-grid__label lanText" data-lanid="784_商业智能"></p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="occupy-position"></div>

        <!-- 提示 -->
        <div class="tips">
            <div class="tips-box f12">
                <span class="calcfont calc-tishi1"></span>
                <div class="tips-text">
                  <span class="lanText" data-lanid="988_你有"></span><span>{{meetingCount}}</span><span class="lanText" data-lanid="987_场会议需要上传会议记录。"></span>
                </div>
                <router-link v-show="Number(meetingCount)>=1" to="/meetinglist" class="right upload-now a f14" >
                    <span class="lanText" data-lanid="870_转到"></span>&gt;&gt;
                </router-link>
                <!-- <div @click="" to="/meetinglist" class="right upload-now a lanText f14" data-lanid="870_立刻去上传"></div> -->
            </div>
        </div>

        <div class="group-title">
            <div class="title-text f12 lanText" data-lanid="872_最近7天要参加的会议"></div>
            <router-link to="/tripmeeting" class="check-all right f14 a">
                <span class="lanText" data-lanid="936_更多"></span>&gt;&gt;
            </router-link>
        </div>

        <!-- 没有数据   -->
        <nothing v-if="notData" style="padding-top:1.5rem;"></nothing>
        <!-- 列表 -->
        <div v-if="!notData" class="list-view" id="indexMeetingList">

            <div v-for="group in groupData" :key="group.GroupID" class="month-event list-group-div group-div" data-fromtype="meeting">
                <div class="f14 date-div">
                    <span class="calcfont calc-richeng" ></span>
                    <span class="group-name" :data-groupid="group.GroupID">{{group.GroupName}}</span>
                    <span class="right">（{{group.GroupRowCount}}）</span>
                </div>
                <div class="occupy-div"></div>
                <div v-if="group.items.length > 0" class="group-item-list meeting-list index-meeting-list">

                    <div v-for="item in group.items" :key="item.AutoID" class="data-events-item f14" :data-url="'/meetinginfo/'+ item.AutoID">
                        <div class="item-title">{{item.MeetingTitle}}</div>
                        <div class="item-time f12">
                            <span class="calcfont calc-gengxinshijian"></span>
                            <span class="time-text">{{item.BeginTime|MeetingTimeFormat}}~{{item.EndTime|MeetingTimeFormat}}</span>
                            <span class="right-text">{{item.Realname}}</span>
                        </div>
                        <div class="item-address">{{item.CompanyID}}</div>
                        <div class="item-initiator">{{item.ContactsID|formatContactsID}}{{item.Title|formatTitle}}</div>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <!--  右侧侧滑 -->
    <div id="mask" class="mask" @click="panelToggle" v-show="showPanel"></div>
    <div id="right-content" class="right-content">
        <div class="user-info f14">
            <icon name="user" scale="10"></icon>
            <div class="userName"></div>
            <div class="userTitle"></div>
            <div class="userDepartment"></div>
        </div>
        <div class="right-content-block">
            <div class="right-block-title f14 lanText" data-lanid="774_通用"></div>

            <div class="right-block-items f14">
                <div class="block-item language-type" data-lantype="1">
                    <div class="switch-text">English</div>
                    <div class="right calcfont calc-gou1 language-icon"></div>
                </div>
                <div class="block-item language-type" data-lantype="2">
                    <div class="switch-text">中文简体</div>
                    <div class="right calcfont calc-gou1 language-icon"></div>
                </div>
                <div class="block-item language-type" data-lantype="3">
                    <div class="switch-text">中文繁体</div>
                    <div class="right calcfont calc-gou1 language-icon"></div>
                </div>
                <!-- <div class="block-item item-border-top">
            <div class="switch-text lanText" data-lanid="775_分享后发送邮件"></div>
            <div class="switch right">
              <div class="weui-cell__ft">
                <input @click="sendEmailSwitch" class="weui-switch" type="checkbox">
              </div>
            </div>
          </div> -->
                <div @click="ClearCache" class="block-item item-border-top lanText" data-lanid="776_清除缓存"></div>
            </div>
        </div>

        <div @click="logout" class="logout-btn lanText" data-lanid="777_注销"></div>
    </div>
</div>
</template>

<style>
.test-div {
    height: 50px;
    line-height: 50px;
}
</style>

<script>
import Header from "./common/Header"
import Nothing from "./common/Nothing"
export default {
    components: {
        Header: Header,
        'nothing': Nothing
    },
    data() {
        return {
            title: "CRM",
            notData: false, //没有数据
            showPanel: false,
            groupData: [], //7天的数据
            meetingCount: 0, //未上传会议记录的会议数量
            messageCount: 0, //消息数量
            isFromSingleSignOn:false//是否来源于单点登陆
        };
    },
    created: function () {

    },
    mounted: function () {
        var _self = this;
        _self.isFromSingleSignOn = 
        (_self.$route.query.IsFromSingleSignOn == null || _self.$route.query.IsFromSingleSignOn == undefined)
        ?false
        :_self.$route.query.IsFromSingleSignOn;
        

        lanTool.updateLanVersion();
        //侧滑
        eventBus.$on("showIndexRightPanelEvent", this.panelToggle);
        //滚动
        this.watchScroll();
        //分组展开/收起
        this.groupToggle();
        //初始化用户信息
        this.initUserInfo();
        //初始化多语言
        this.initLV();

        //获取最近7天的会议分组数据
        this.$nextTick(function () {
            this.getRecentMeeting();
        });

        //获取未上传会议记录的会议数量
        this.getNoUploadRecordCount();

        //获取消息数量
        this.getMessageCount();

        this.goInfo();

        //处理单点登陆
        this.handleLogOut();
    },
    methods: {
        //初始化用户信息
        initUserInfo: function () {
            //赋用户信息
            var curUser = tool.CurUser();
            if (tool.isNullOrEmptyObject(curUser)) {
                return;
            }
            $(".userName").text(curUser.Realname || "");
            var curLV = lanTool.currentLanguageVersion;
            if (curLV == "1") {
                $(".userTitle").text(curUser.PositionNameEN || "");
                $(".userDepartment").text(curUser.DepartmentNameEN || "");
            } else if (curLV == "2") {
                $(".userTitle").text(curUser.PositionNameCN || "");
                $(".userDepartment").text(curUser.DepartmentNameCN || "");
            } else if (curLV == "3") {
                $(".userTitle").text(curUser.PositionNameTD || "");
                $(".userDepartment").text(curUser.DepartmentNameTD || "");
            }
        },
        //初始化多语言
        initLV: function () {
            var _self=this;
            //切换语言
            $(".language-type").off('click').on("click", function (event) {
                var target = $(event.target);
                if (!target.hasClass("language-type")) {
                    target = target.closest("div.language-type");
                    if (target == undefined) {
                        return;
                    }
                }

                if (!target.hasClass("language-show")) {
                    target
                        .addClass("language-show")
                        .siblings(".language-type")
                        .removeClass("language-show");
                }

                var curLV = target.attr("data-lantype");
                lanTool.setLan(curLV, function () {
                    lanTool.updateLanVersion();
                });

                //_self.$router.go(0); //todo 以后增加刷新机制以后增加刷新机制
                window.location.reload();//todo 以后增加刷新机制以后增加刷新机制
            });

            //写入当前多语言值
            // $(
            //     "div.language-type[data-lantype='" +
            //     lanTool.currentLanguageVersion +
            //     "']:first"
            // ).trigger("click");
            var target =
             $(
                "div.language-type[data-lantype='" +
                lanTool.currentLanguageVersion +
                "']:first"
            );
            if (!target.hasClass("language-type")) {
                    target = target.closest("div.language-type");
                    if (target == undefined) {
                        return;
                    }
            }
            if (!target.hasClass("language-show")) {
                target
                    .addClass("language-show")
                    .siblings(".language-type")
                    .removeClass("language-show");
            }

            var curLV = target.attr("data-lantype");
            lanTool.setLan(curLV, function () {
                lanTool.updateLanVersion();
            });
        },
        // 发送邮件开关
        sendEmailSwitch: function (e) {
            if ($(e.target).is(":checked") == true) {
                console.log("true");
            } else {
                console.log("false");
            }
        },
        //清除缓存
        ClearCache: function () {
            var _self = this;

            tool.showConfirm(
                lanTool.lanContent("778_是否确认清除缓存？"),
                function () {
                    //重新加载多语言
                    lanTool.waitExcute(false, true, function () {
                        //window.location.reload();
                        // _self.$router.go(0); //todo 以后增加刷新机制以后增加刷新机制
                        window.location.reload();//todo 以后增加刷新机制以后增加刷新机制
                    });
                },
                function () {}
            );
        },
        //退出
        logout: function () {
            var _self = this;

            tool.showConfirm(
                lanTool.lanContent("779_是否确认注销？"),
                function () {
                    //清除所有缓存
                    tool.removeSessionStoragItem(tool.cache_RegisterCode);
                    tool.removeSessionStoragItem(tool.cache_UserName);
                    tool.removeSessionStoragItem(tool.cache_CurUser);
                    tool.removeSessionStoragItem(tool.cache_loginUserName);
                    tool.removeSessionStoragItem(tool.cache_loginPwd);
                    _self.$router.push("/Login");
                },
                function () {}
            );
        },
        //监听滚动固定
        watchScroll: function () {
            setTimeout(function () {
                var headerH = parseFloat($("header").innerHeight());
                var searchH = parseFloat($("#searchBtn").innerHeight()) + 16;
                var navH = parseFloat($("#nav").innerHeight());

                $(".occupy-position")
                    .css({
                        height: navH + "px"
                    })
                    .show();

                $(window).unbind('scroll').bind('scroll', function () {

                    if ($(".month-event").length <= 0) return;
                    // var scrollTop = $(this).scrollTop();
                    var scrollTop = $(document).scrollTop() || $(window).scrollTop();

                    $(".month-event").each(function () {
                        if (
                            $(this).offset().top - scrollTop <=
                            navH + headerH
                        ) {
                            if (tool.getSystem() === "ios") {
                                $(this)
                                    .find(".date-div")
                                    .addClass("sticky")
                                    .css({
                                        top: navH + headerH + "px"
                                    });
                            } else {
                                $(this)
                                    .find(".date-div")
                                    .css({
                                        position: "fixed",
                                        top: navH + headerH + "px"
                                    });
                                $(this)
                                    .find(".occupy-div")
                                    .show();
                            }
                        } else {
                            if (tool.getSystem() === "ios") {
                                $(this)
                                    .find(".date-div")
                                    .removeClass("sticky")
                                    .css({
                                        top: "0px"
                                    });
                            } else {
                                $(this)
                                    .find(".date-div")
                                    .css({
                                        position: "static"
                                    });
                                $(this)
                                    .find(".occupy-div")
                                    .hide();
                            }
                        }
                    });
                });
            }, 100);
        },
        //搜索
        goSearch: function () {
            this.$router.push("/search");
        },
        //点击分组收起展开
        groupToggle: function () {
            var _self = this;
            $("#indexMeetingList").off("click", "div.date-div").on(
                "click",
                "div.date-div",
                function (event) {
                    var target = $(event.target);
                    if (!target.hasClass('date-div')) {
                        target = target.closest('div.date-div');
                        if (target == undefined) {
                            return;
                        }
                    }

                    var groupID = target.find("span[data-groupid]:first").attr("data-groupid") || "";

                    if (tool.isNullOrEmptyObject(groupID)) {
                        return;
                    }

                    //若是展开
                    if (target.hasClass("open")) {
                        target
                            .removeClass("open")
                            .siblings(".group-item-list")
                            .slideUp(500, function () {
                                //清空items数据
                                $.each(_self.groupData, function (index, item) {
                                    if (item.GroupID == groupID) {
                                        item.items = [];
                                        return;
                                    }
                                })
                            });
                    } else {
                        //若是收起
                        _self.getInnerDataList(groupID, function () {
                            _self.$nextTick(function () {
                                target.addClass("open")
                                    .siblings(".group-item-list")
                                    .slideDown(500);
                            })
                        });
                    }
                })

        },
        //侧滑
        panelToggle: function () {
            var _self = this;
            _self.showPanel = !_self.showPanel;
            if (_self.showPanel) {
                _self.$nextTick(function () {
                    $("#right-content").css({
                        left: "30%",
                        transition: "left 0.1s ease-out",
                        "-moz-transition": "left 0.1s ease-out",
                        "-webkit-transition": "left 0.1s ease-out",
                        "-o-transition": "left 0.1s ease-out"
                    });
                    $("#mask,#right-content").off("touchmove").on("touchmove", function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    });
                });
            } else {
                _self.$nextTick(function () {
                    $("#right-content").css({
                        left: "100%",
                        transition: "left 0.3s ease-out",
                        "-moz-transition": "left 0.3s ease-out",
                        "-webkit-transition": "left 0.3s ease-out",
                        "-o-transition": "left 0.3s ease-out"
                    });
                });
            }
        },
        //获取最近几天的会议分组数据
        getRecentMeeting: function () {
            var _self = this;
            //查询分组数据
            //请求地址
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_MeetingHandle_Group;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode(),
                QueryCondiction: JSON.stringify([]),
                RecentDay: 7
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
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        _self.notData = true;
                        return;
                    }

                    _self.groupData = data._OnlyOneData.Rows || [];
                    //无数据
                    if (_self.groupData.length <= 0) {
                        _self.notData = true;
                        return;
                    }
                    //添加属性
                    $.each(_self.groupData, function (index, item) {
                        _self.$set(item, 'items', []);
                    })

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
        //获取内部列表
        getInnerDataList: function (groupID, myCallBack) {
            if (tool.isNullOrEmptyObject(groupID)) {
                return;
            }
            var _self = this;
            //查询分组数据
            //请求地址
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_MeetingHandle_GroupInnerData;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                GroupID: groupID,
                _RegisterCode: tool.RegisterCode(),
                QueryCondiction: JSON.stringify([]),
                RecentDay: 7
            };
            var loadingIndexClassName = tool.showLoading();
            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    data = tool.jObject(data);
                    tool.hideLoading(loadingIndexClassName);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        return;
                    }
                    data = data._OnlyOneData.Rows || [];
                    //无数据
                    if (data.length <= 0) {
                        return;
                    }

                    $.each(_self.groupData, function (index, item) {
                        if (item.GroupID == groupID) {
                            item.items = data;
                        }
                    })

                    if (!tool.isNullOrEmptyObject(myCallBack)) {
                        myCallBack();
                    }
                    return;
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    tool.hideLoading(loadingIndexClassName);
                    return;
                },
                complete: function () {
                    // tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });

        },
        //获取未上传会议记录的会议数量
        getNoUploadRecordCount: function () {
            var _self = this;
            //请求地址
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_MeetingHandle_QueryNoUploadRecordCount;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode()
            };

            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    data = tool.jObject(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        _self.notData = true;
                        return;
                    }

                    _self.meetingCount = data._OnlyOneData || 0;
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    return;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
        getMessageCount: function () {
            var _self = this;
            //请求地址
            var urlTemp = tool.AjaxBaseUrl();
            var controlName = tool.Api_MessagesToUserHandle_QueryCount;
            //传入参数
            var jsonDatasTemp = {
                CurrentLanguageVersion: lanTool.currentLanguageVersion,
                UserName: tool.UserName(),
                _ControlName: controlName,
                _RegisterCode: tool.RegisterCode()
            };

            $.ajax({
                async: true,
                type: "post",
                url: urlTemp,
                data: jsonDatasTemp,
                success: function (data) {
                    data = tool.jObject(data);
                    if (data._ReturnStatus == false) {
                        tool.showText(tool.getMessage(data));
                        _self.notData = true;
                        return;
                    }

                    _self.messageCount = data._OnlyOneData || 0;
                },
                error: function (jqXHR, type, error) {
                    console.log(error);
                    return;
                },
                complete: function () {
                    //tool.hideLoading();
                    //隐藏虚拟键盘
                    document.activeElement.blur();
                }
            });
        },
        //点击跳转到详情页
        goInfo:function(){
            var _self = this;
            $("#indexMeetingList").off('click','div.data-events-item').on(
              'click',
              'div.data-events-item',
                function (event) {
                    var target = $(event.target);
                    if (!target.hasClass("data-events-item")) {
                        target = target.closest("div.data-events-item");
                        if (tool.isNullOrEmptyObject(target)) {
                            return;
                        }
                    }
                    var url = target.attr("data-url") || "";
                    if (tool.isNullOrEmptyObject(url)) {
                        return;
                    }
                    //点击列表是获取到属性名传给详情
                    var infoName = null;
                    infoName = $(this).find(".item-title:first").text() || "";
                    _self.$router.push({
                        path: url,
                        query: {
                            infoName: infoName
                        }
                    });
                }
            );

        },
        //处理退出登陆按钮
        handleLogOut:function(){
            var _self = this;
            if(_self.isFromSingleSignOn){
                $(".logout-btn").hide();
            }else{
                $(".logout-btn").show();
            }
        }
    },
    beforeDestroy: function () {
        eventBus.$off("showIndexRightPanelEvent");
    }
};
</script>

<style scoped>
@import "../assets/css/pages/index.css";
</style>
