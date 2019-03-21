export default{
    data(){
        return{
            showPage: 0,
            noData: true, //没数据
            queryCondiction: [], //右侧checkbox条件
            queryCondictionData: [], //综合查询条件
            isFirstEnter: false, //是否首次进入
        }
    },
    created: function () {
        this.isFirstEnter = true;
    },
    methods: {
        setQuerycondition: function (data) {
            var _self = this;
            _self.queryCondiction = data;
            //执行监听的这个动作
            _self.RefreshCurPageGroupData();
        },
        setQueryconditionOnlyData: function (data) {
            var _self = this;
            _self.queryCondiction = data;
        },
        //监听滚动固定
        watchScroll: function () {
            var _self = this;
            setTimeout(function () {
                var headerH = parseFloat($("header").innerHeight());
                var navH = parseFloat($(".nav").innerHeight());

                // $(this).offset().top 元素到document顶部的距离
                // $(document).scrollTop() || $(window).scrollTop(); 滚动条滚动的距离

                $(window).unbind('scroll').bind('scroll',function(){

                    if ($(".group-div").length <= 0) return;
                    var scrollTop = $(document).scrollTop() || $(window).scrollTop();

                    $(".group-div").each(function () {
                        if (
                            ($(this).offset().top - scrollTop) <= (headerH + navH)
                        ){
                            if (tool.getSystem() === "ios") {
                                $(this)
                                    .find(".date-div")
                                    .addClass("sticky")
                                    .css({
                                        top: headerH + navH + "px"
                                    });
                                return true;
                            } else {
                                $(this)
                                    .find(".date-div")
                                    .css({
                                        position: "fixed",
                                        top: headerH + navH + "px"
                                    });
                                $(this)
                                    .find(".occupy-div")
                                    .show();
                                return true;
                            }
                        } else {
                            if (tool.getSystem() === "ios") {
                                $(this)
                                    .find(".date-div")
                                    .removeClass("sticky")
                                    .css({
                                        top: "0px"
                                    });
                                return true;
                            } else {
                                $(this)
                                    .find(".date-div")
                                    .css({
                                        position: "static"
                                    });
                                $(this)
                                    .find(".occupy-div")
                                    .hide();
                                return true;
                            }
                        }
                    });
                });
            }, 0);
        },

        //切换页面
        switchPage: function (num, e) {
            var _self = this;
            var el = e.target;
            if (num === undefined) return;
            $(el)
                .addClass("active-item")
                .siblings()
                .removeClass("active-item");
            _self.changePos();

            //获取来源页
            var fromPage = tool.getSessionStorageItem("fromPage") || "";
            //移除来源页
            tool.removeSessionStoragItem("fromPage");

            var isResetRightPanel = _self.showPage != num  || (!tool.isNullOrEmptyObject(fromPage) &&  fromPage.toLowerCase() == "index");
            if(isResetRightPanel){
                //综合查询条件置空
                _self.queryCondictionData = [];
                _self.queryCondiction = [];
            }
            _self.showPage = num;

            if(isResetRightPanel){

                //右侧radio重置为默认值
                var returnObj = _self.$refs.rightPanel.reductionDataFilter(isResetRightPanel);
                if (tool.isNullOrEmptyObject(returnObj)) {
                    return ;
                }
                if(returnObj.returnValue){
                    _self.queryCondiction.push(returnObj.defaultQueryCondition);
                    _self.RefreshCurPageGroupData();
                }
            }else{
                _self.RefreshCurPageGroupData();
            }
        },
        //table底部横条过渡效果
        changePos: function () {
            this.$nextTick(function () {
                var activePos = $(".nav .active-item").position();
                $(".nav-border")
                    .stop()
                    .css({
                        left: activePos.left,
                        width: $(".nav .active-item").width()
                    });
            });
        },

        //列表展开收起
        groupToggleHandle:function(id1,id2){
            var _self = this;
            $("#"+ id1 +",#"+id2).off("click", "div.date-div").on(
                "click",
                "div.date-div",
                function (event) {
                    event.preventDefault();
                    var target = $(event.target);
                    if (!target.hasClass('date-div')) {
                        target = target.parents("div.date-div:first");
                        if (tool.isNullOrEmptyObject(target)) {
                            return;
                        }
                    }
                    var fromType = target.parents("div[data-fromtype]").attr("data-fromtype") || "";
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
                                var parentContainerObj = target.parents("div.group-div:first");
                                if (tool.isNullOrEmptyObject(parentContainerObj)) {
                                    return;
                                }
                                //清空容器内容
                                parentContainerObj.find("div.group-item-list").remove();
                            });
                    } else {
                        //若是收起
                        var allQueryData = tool.combineArray(_self.queryCondictionData, _self.queryCondiction, "Field");
                        tool.InitiateInnerDataList(fromType, groupID, target, allQueryData, function (containerObj) {
                            containerObj
                                .addClass("open")
                                .siblings(".group-item-list")
                                .slideDown(500);
                        });
                    }
                }
            );

        }

    }

  };
