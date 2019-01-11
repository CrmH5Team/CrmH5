<template>
  <div>
    <Header class="header sticky" :title="title"></Header>

    <div id="page-content" class="page-content">
      <div class="nav sticky">
        <div
          @click="switchPage(0,$event)"
          class="nav-item f16 active-item lanText"
          data-lanid="790_公司"
        ></div>
        <div @click="switchPage(1,$event)" class="nav-item f16 lanText" data-lanid="791_联系人"></div>
        <div class="nav-border"></div>
      </div>

      <div v-show="showPage == 0" class="pageList">
        <div class="add-btn-div">
          <router-link to="/organizationsinfo/0" class="add-div">
            <span class="calcfont calc-add"></span>
            <span class="add-text lanText" data-lanid="792_添加公司"></span>
          </router-link>
        </div>
        <!-- 列表 -->
        <div v-show="!noData" id="organizationsList" data-fromtype="organizations"></div>
        <nothing v-show="noData" style="padding-top:0.8rem;"></nothing>
      </div>

      <div v-show="showPage == 1" class="pageList">
        <div class="add-btn-div">
          <router-link to="/contactsinfo/0" class="add-div">
            <span class="calcfont calc-add"></span>
            <span class="add-text lanText" data-lanid="793_添加联系人"></span>
          </router-link>
        </div>
        <!-- 列表 -->
        <div v-show="!noData" id="contactsList" data-fromtype="contacts"></div>
        <nothing v-show="noData" style="padding-top:0.8rem;"></nothing>
      </div>
    </div>

    <!--  右侧侧滑 -->
    <list-right-panel :panelData="rigthPanelData" :searchData="searchData"></list-right-panel>
  </div>
</template>



<script>
import Header from "../common/Listheader";
import Listrightpanel from "../common/Listrightpanel";
import Nothing from "../common/Nothing";

var count = 0;
export default {
  components: {
    Header: Header,
    "list-right-panel": Listrightpanel,
    nothing: Nothing
  },
  data() {
    return {
      key: "contacts",
      title: lanTool.lanContent("175_联系人"),
      showPage: 0,
      noData: true, //没数据
      isFirstEnter: false, //是否第一次进入，默认false

      //侧滑数据模型
      rigthPanelData: [
        {
          groupText: lanTool.lanContent("794_数据筛选"),
          type: "checkbox",
          default: "allContactss",
          items: [
            { text: lanTool.lanContent("795_全部"), value: "allContactss" },
            {
              text: lanTool.lanContent("796_关注的公司"),
              value: "publicContacts"
            }
          ]
        }
      ],
      //搜索页面数据模型
      searchData: {},

      OrganizationsSearch: [
        {
          type: "input",
          field: "name",
          queryType: "string",
          text: "Organization Name 公司名称",
          value: ""
        },
        {
          type: "picker",
          field: "cf_765",
          queryType: "string",
          text: "Business Sector 业务分类",
          value: "",
          id: Number(new Date().valueOf()) + count++
        },
        {
          type: "picker",
          field: "cf_771",
          queryType: "string",
          text: "Area / Region 区域",
          value: "",
          id: Number(new Date().valueOf()) + count++
        },
        {
          type: "selectlist",
          field: "related_to",
          queryType: "string",
          queryUrl: "Accounts/Query",
          text: "Country 国家",
          selectType: "radio",
          value: {
            text: "",
            value: ""
          }
        },
        {
          type: "selectlist",
          field: "related_to",
          queryType: "string",
          queryUrl: "Accounts/Query",
          text: "Account Manager 客户经理",
          selectType: "radio",
          value: {
            text: "",
            value: ""
          }
        }
      ],
      ContactsSearch: [
        {
          type: "input",
          field: "name",
          queryType: "string",
          text: "Name",
          value: ""
        },
        {
          type: "picker",
          field: "cf_765",
          queryType: "string",
          text: "Status 状态",
          value: "",
          id: Number(new Date().valueOf()) + count++
        },
        {
          type: "selectlist",
          field: "related_to",
          queryType: "string",
          queryUrl: "Accounts/Query",
          text: "Initiator发起人",
          selectType: "checkbox",
          resulteRow: false, //第二行显示结果
          value: {
            text: "",
            value: ""
          }
        },
        {
          type: "selectlist",
          field: "related_to",
          queryType: "string",
          queryUrl: "Accounts/Query",
          text: "Organization公司",
          selectType: "checkbox",
          resulteRow: true, //第二行显示结果
          value: {
            text: "",
            value: ""
          }
        },
        {
          type: "picker",
          field: "cf_765",
          queryType: "string",
          text: "Business Sector 业务分类",
          value: "",
          id: Number(new Date().valueOf()) + count++
        },
        {
          type: "picker",
          field: "cf_771",
          queryType: "string",
          text: "Area / Region 区域",
          value: "",
          id: Number(new Date().valueOf()) + count++
        }
      ]
    };
  },
  beforeRouteEnter: function(to, from, next) {
    if (from.name === "contactsinfo" || from.name === "selectlist") {
      to.meta.isBack = true;
    }
    next();
  },
  mounted: function() {
    lanTool.updateLanVersion();
    var _self = this;
    _self.searchData = _self.OrganizationsSearch;

    //渲染数据
    tool.InitiateGroupList("organizations", $("#organizationsList"), function(
      containerObj
    ) {
      if (tool.isNullOrEmptyObject(containerObj)) {
        _self.noData = true;
        return;
      }
      if (!containerObj.html()) {
        _self.noData = true;
      } else {
        _self.noData = false;
      }
    });

    _self.changePos();
    _self.groupToggle();
    _self.goInfoPage();
    _self.followToggle();
    _self.watchScroll();
  },
  methods: {
    //监听滚动固定
    watchScroll: function() {
      var _self = this;
      setTimeout(function() {
        var headerH = parseFloat($("header").innerHeight());
        var navH = parseFloat($(".nav").innerHeight());
        $(window).scroll(function() {
          if ($(".group-div").length <= 0) return;
          $(".group-div").each(function() {
            if (
              $(this).offset().top - $(window).scrollTop() <=
              headerH + navH
            ) {
              if (tool.getSystem() === "ios") {
                $(this)
                  .find(".date-div")
                  .addClass("sticky")
                  .css({ top: headerH + navH + "px" });
              } else {
                $(this)
                  .find(".date-div")
                  .css({ position: "fixed", top: headerH + navH + "px" });
                $(this)
                  .find(".occupy-div")
                  .show();
              }
            } else {
              if (tool.getSystem() === "ios") {
                $(this)
                  .find(".date-div")
                  .removeClass("sticky")
                  .css({ top: "0px" });
              } else {
                $(this)
                  .find(".date-div")
                  .css({ position: "static" });
                $(this)
                  .find(".occupy-div")
                  .hide();
              }
            }
          });
        });
      }, 100);
    },

    //点击去详情页
    goInfoPage: function(id) {
      var _self = this;
      $("#organizationsList,#contactsList").on(
        "click",
        "div.group-item",
        function(event) {
          var target = $(event.target);
          if (!target.hasClass("group-item")) {
            target = target.closest("div.group-item");
            if (target == undefined) {
              return;
            }
          }
          var url = target.attr("data-url") || "";
          _self.$router.push(url);
        }
      );
    },

    //列表展开收起
    groupToggle: function() {
      $("#organizationsList,#contactsList").on(
        "click",
        "div.date-div",
        function(event) {
          var target = $(event.target);
          console.log(target);
          var fromType = target.parents("div[data-fromType]").attr("data-fromType") || "";
          var groupID =
            target.find("span[data-groupid]:first").attr("data-groupid") || "";
          if (tool.isNullOrEmptyObject(groupID)) {
            return;
          }

          //若是展开
          if (target.hasClass("open")) {
            target
            .removeClass("open")
            .siblings(".group-item-list")
            .slideUp(500,function(){
                var parentContainerObj = target.parents("div.group-div:first");
                if (tool.isNullOrEmptyObject(parentContainerObj)) {
                  return;
                }
                //清空容器内容
                parentContainerObj.find("div.occupy-div,div.group-item-list").remove();
            });           
          } else {
            //若是收起
            tool.InitiateInnerDataList(fromType, groupID, target, function(containerObj) {
              // if (!containerObj.hasClass("date-div")) {
              //     containerObj = containerObj.closest("div.date-div");
              //     if (containerObj == undefined) {
              //         return;
              //     }
              // }

                  console.log(123);

                  containerObj
                  .addClass("open")
                  .siblings(".group-item-list")
                  .slideDown(500);
            });
          }
        }
      );
    },

    //切换页面
    switchPage: function(num, e) {
      var _self = this;
      var el = e.target;
      if (num === undefined) return;
      $(el)
        .addClass("active-item")
        .siblings()
        .removeClass("active-item");
      _self.changePos();
      _self.showPage = num;

      var container = null;
      var moduleName = "";
      if (num == 0) {
        _self.searchData = _self.OrganizationsSearch;

        moduleName = "organizations";
        container = $("#organizationsList");
      } else {
        _self.searchData = _self.ContactsSearch;

        moduleName = "contacts";
        container = $("#contactsList");
      }

      //渲染数据
      tool.InitiateGroupList(moduleName, container, function(containerObj) {
        if (tool.isNullOrEmptyObject(containerObj)) {
          _self.noData = true;
          return;
        }
        if (!containerObj.html()) {
          _self.noData = true;
        } else {
          _self.noData = false;
        }
      });
    },

    //table底部横条过渡效果
    changePos: function() {
      this.$nextTick(function() {
        var activePos = $(".nav .active-item").position();
        $(".nav-border")
          .stop()
          .css({
            left: activePos.left,
            width: $(".nav .active-item").width()
          });
      });
    },

    //点击关注/取消关注
    followToggle: function() {
      $("#organizationsList").on("click", ".item-stars-icon", function(event) {
        event.stopPropagation();
        var target = $(event.target);
        if (target.hasClass("calc-shoucang")) {
          //取消关注
          target.removeClass("calc-shoucang").addClass("calc-shoucang1");
          $.toast("取消关注", 1500, function() {});
        } else {
          //关注
          target.removeClass("calc-shoucang1").addClass("calc-shoucang");
          $.toast("关注成功", 1500, function() {});
        }
      });
    }
  }
};
</script>


<style scoped>
@import "../../assets/css/common/commonlist.css";
</style>