<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :saveIcon="saveHidden" :title="ptitle" :submitIcon="submitIconHidden"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="tipBox">
                <div class="tipContent">
                    <p class="f12"><span>* </span>请注意，该出差申请将自动同步到OA系统。</p>
                </div>
            </div>
            <div class="TripList">
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-T"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="Title"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="mui-icon calcfont calc-shijianjibiezhongdingyiguize"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea autoHeight="true" placeholder="员工级别"></textarea>
                        </p>
                    </div>
                </div>

            </div>

            <div class="meeting">
                <div class="headerBlock">
                    <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-huiyi"></span></div>
                    <div class="headerBlockContent f16">meeting</div>
                    <div class="headerBlockRightIcon">
                        <router-link to='/addmeeting'><span class="mui-icon calcfont calc-jia"></span></router-link>
                    </div>
                </div>
                <div class="shuoming" v-show="isHiddenShuoMing">
                    <div class="shuomingContent f14">请至少添加一条会议记录！</div>
                </div>
                <div class="contentList">
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-bianhaonumbered5"></span></div>
                            <div class="headerBlockContent f14">MSN 05789 年度检查会议</div>
                            <div class="headerBlockRightIcon"><span class="mui-icon calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">01/Jan - 02/Jan 全天</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">China Eastern Airlines</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">Niki Zu (Fleet Manager)</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-bianhaonumbered5"></span></div>
                            <div class="headerBlockContent f14">MSN 05789 年度检查会议</div>
                            <div class="headerBlockRightIcon"><span class="mui-icon calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">01/Jan - 02/Jan 全天</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">China Eastern Airlines</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">Niki Zu (Fleet Manager)</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="route">
                <div class="headerBlock">
                    <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-icon-test3"></span></div>
                    <div class="headerBlockContent f16">路线/机票申请</div>
                    <div class="headerBlockRightIcon" @click="routeClick">
                        <span class="mui-icon calcfont calc-jia"></span>
                    </div>
                </div>
                <div class="shuoming" v-show="isHiddenShuoMing">
                    <div class="shuomingContent f14">请至少添加一条会议记录！</div>
                </div>
                <div class="contentList">
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calcfont calc-bianhaonumbered5"></span></div>
                            <div class="headerBlockContent f14">香港 - 上海 </div>
                            <div class="headerBlockRightIcon"><span class="mui-icon calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calcfont calc-bianhaonumbered5"></span></div>
                            <div class="headerBlockContent f14">香港 - 上海 </div>
                            <div class="headerBlockRightIcon"><span class="mui-icon calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="room">
                <div class="headerBlock">
                    <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-zhusu"></span></div>
                    <div class="headerBlockContent f16">住宿</div>
                    <div class="headerBlockRightIcon" @click="roomClick">
                        <span class="mui-icon calcfont calc-jia"></span>
                    </div>
                </div>
                <div class="contentList">
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-bianhaonumbered5"></span></div>
                            <div class="headerBlockContent f14">香港 - 上海 </div>
                            <div class="headerBlockRightIcon"><span class="mui-icon calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-bianhaonumbered5"></span></div>
                            <div class="headerBlockContent f14">香港 - 上海 </div>
                            <div class="headerBlockRightIcon"><span class="mui-icon calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="budget">
                <div class="budgetHeader">
                    <div class="headerBlock">
                        <div class="headerBlockLeftIcon"><span class="mui-icon calcfont calc-yusuan"></span></div>
                        <div class="headerBlockContent f16">住宿</div>
                        <div class="headerBlockRightIcon iconHidden"><span class="mui-icon calcfont calc-jia"></span></div>
                    </div>
                </div>

                <div class="ListCell">
                    <div class="ListCellLeftIcon iconHidden"><span class="mui-icon calcfont calc-tixing1"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft">
                            <div class="ListCellContentLeftText reminderTiShi">住宿费用是否超出报销限额</div>
                        </div>
                        <div class="ListCellContentRight switch">
                            <div class="weui-cell__ft">
                                <input @click="reminderSwitch" class="weui-switch" type="checkbox">

</div>
                            </div>
                        </div>
                    </div>
                    <div class="ListCell" v-show="isHiddenYuanying">
                        <div class="ListCellLeftIcon textLeftIcon iconHidden"><span class="mui-icon calcfont calc-T"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea autoHeight="true" placeholder="请输入原因"></textarea>
                            </p>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon textLeftIcon iconHidden"><span class="mui-icon calcfont calc-T"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea autoHeight="true" placeholder="预算合计"></textarea>
                            </p>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon iconHidden"><span class="mui-icon calcfont calc-huiyi"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText">币别</div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div class="ListCellContentRightText">人民币</div>
                            </div>
                            <div class="ListCellRightIcon"><span class="mui-icon calcfont calc-you"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import InfoRightPanel from '../common/InfoRightPanel'
import Datetimepicker from '../common/Datetimepicker'
import Picker from '../common/Picker'
import Infofooter from '../common/infoFooter'
import Uploadfile from './Uploadfile'

import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Datetimepicker,
        Picker,
        Infofooter,
        Uploadfile,
        InfoRightPanel
    },
    data() {
        return {
            moreHiddenIcon: false,
            delHidden: true,
            saveHidden: true,
            submitIconHidden: true,
            ptitle: 'Trip detail',
            isShowMenuList: false,
            isHiddenShuoMing: false,
            isHiddenYuanying: false,
            scrollTop: 0, //记录滚动条的位置
            // isShowMore: false,

        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name === 'selectlist') {
            to.meta.isBack = true;
        }
        next();
    },

    created: function () {
        var $this = this;
    },
    mounted: function () {
        this.$nextTick(function () {
            //将textarea设置为高度自适应
            $("textarea").each(function (index, cur) {
                tool.autoTextarea(cur);
            });
        })
        eventBus.$on('delete', function (data) {
            console.log(data);
        });

    },
    methods: {
        routeClick: function () {
            console.log("route");
            this.$router.push({
                path: '/AddRouteOrRoom',
                query: {
                    id: "route"
                }
            })
        },
        roomClick: function () {
            console.log("room");
            this.$router.push({
                path: '/AddRouteOrRoom',
                query: {
                    id: "room"
                }
            })
        },
        // 开关事件
        allDayClick: function (e) {
            if ($(e.target).is(":checked") == true) {
                console.log("true all");
            } else {
                console.log("false all");
            }

        },
        reminderSwitch: function (e) {
            var $this = this;
            if ($(e.target).is(":checked") == true) {
                console.log('true');
                // $this.$nextTick(function(){
                $this.isHiddenYuanying = true;
                // })

            } else {
                console.log('false');

                //   $this.$nextTick(function(){
                $this.isHiddenYuanying = false;
                // })
            }
        },

    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";

.tipBox {
    background-color: #ffffff;
    padding: 0.1rem 0.3rem;
}

.tipContent {
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: rgb(242, 242, 242);
    border: solid 1px rgb(242, 242, 242);
    border-radius: 5px;
    color: rgb(102, 102, 102);
}

.tipContent span {
    color: red;
}

.TripList {
    padding-bottom: 5px;
    background-color: #ffffff;
}

.meeting,
.route,
.room {
    margin-top: 10px;
    padding: 5px 0;
    padding-left: 0.3rem;
    padding-right: 0.3rem;

    background-color: #fff;
}

.budget {
    margin-top: 10px;
    padding: 5px 0;
    background-color: #fff;
}

.budgetHeader {

    padding-left: 0.3rem;
    padding-right: 0.3rem;

    background-color: #fff;
}

/* .budget .ListCell.visible:after {
    background-color: #F5F5DC !important;
} */

.headerBlock,
.contentListCellHeader {
    position: relative;
    height: 0.6rem;
    line-height: 0.6rem;
    display: flex;
    padding: 10px 0;
}

.headerBlock:after {
    position: absolute;
    content: '';
    left: 0.6rem;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #F5F5DC;
}

/* .iconHidden {
    display: block;
    visibility: hidden;
} */

.headerBlock .headerBlockLeftIcon {
    width: 0.6rem;
    margin: auto 0;
}

.headerBlock .headerBlockLeftIcon .calcfont {
    font-size: 0.44rem;
    color: #8a8a8a;
}

.headerBlock .headerBlockContent {
    width: calc(100% - 1.16rem);
    padding-left: 5px;
    margin: auto 0;
    color: #FF5A21;
}

.budget .headerBlock .headerBlockContent {
    color: #333333;
}

.contentListCell .headerBlockContent {
    color: #000000;
}

.headerBlock .headerBlockRightIcon {
    width: 0.56rem;
    text-align: right;
    margin: auto 0;
}

.headerBlock .headerBlockRightIcon .calcfont {
    font-size: 0.4rem;
    color: #FF5A21;
}

.contentListCell .headerBlockRightIcon .calcfont {
    color: #8a8a8a;
}

.shuomingContent {
    color: #666666;
    margin: 0.1rem 0;
    line-height: 0.3rem;
}
</style>
