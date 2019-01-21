<template>
<div>
    <Infoheader :isAddNew="isAddNew" :onlyView="onlyView" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="tipBox">
                <div class="tipContent">
                    <p class="f12"><span class="red">* </span><span class="zhuyi lanText" data-lanid="910_请注意，该出差申请将自动同步到OA系统。"></span></p>
                </div>
            </div>
            <div class="TripList">
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-T"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="Title"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-jibie"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea data-field="" data-fieldControlType="textareaInput" class="lanInputPlaceHolder" data-lanid="911_员工级别"></textarea>
                        </p>
                    </div>
                </div>

            </div>

            <div class="meeting">
                <div class="headerBlock">
                    <div class="headerBlockLeftIcon"><span class="calcfont calc-huiyi"></span></div>
                    <div class="headerBlockContent f16 lanText" data-lanid="818_会议"></div>
                    <div class="headerBlockRightIcon">
                        <router-link to='/addmeeting'><span class="calcfont calc-jia"></span></router-link>
                    </div>
                </div>
                <div class="shuoming" v-show="isHiddenShuoMing">
                    <div class="shuomingContent f14 lanText" data-lanid="912_请至少添加一条会议记录！"></div>
                </div>
                <div class="contentList">
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="calcfont calc-bianhao"></span></div>
                            <div class="headerBlockContent f14">MSN 05789 年度检查会议</div>
                            <div class="headerBlockRightIcon"><span class="calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">01/Jan - 02/Jan 全天</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">China Eastern Airlines</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">Niki Zu (Fleet Manager)</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="calcfont calc-bianhao"></span></div>
                            <div class="headerBlockContent f14">MSN 05789 年度检查会议</div>
                            <div class="headerBlockRightIcon"><span class="calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">01/Jan - 02/Jan 全天</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">China Eastern Airlines</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">Niki Zu (Fleet Manager)</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="route">
                <div class="headerBlock">
                    <div class="headerBlockLeftIcon"><span class="calcfont calc-route"></span></div>
                    <div class="headerBlockContent f16 lanText" data-lanid="913_路线/机票申请"></div>
                    <div class="headerBlockRightIcon" @click="routeClick">
                        <span class="calcfont calc-jia"></span>
                    </div>
                </div>
                <div class="shuoming" v-show="isHiddenShuoMing">
                    <div class="shuomingContent f14 lanText" data-lanid="912_请至少添加一条会议记录！"></div>
                </div>
                <div class="contentList">
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="calcfont calcfont calc-bianhao"></span></div>
                            <div class="headerBlockContent f14">香港 - 上海 </div>
                            <div class="headerBlockRightIcon"><span class="calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="calcfont calcfont calc-bianhao"></span></div>
                            <div class="headerBlockContent f14">香港 - 上海 </div>
                            <div class="headerBlockRightIcon"><span class="calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="room">
                <div class="headerBlock">
                    <div class="headerBlockLeftIcon"><span class="calcfont calc-zhusu"></span></div>
                    <div class="headerBlockContent f16">住宿</div>
                    <div class="headerBlockRightIcon" @click="roomClick">
                        <span class="calcfont calc-jia"></span>
                    </div>
                </div>
                <div class="contentList">
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="calcfont calc-bianhao"></span></div>
                            <div class="headerBlockContent f14">香港 - 上海 </div>
                            <div class="headerBlockRightIcon"><span class="calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                    <div class="contentListCell">
                        <div class="contentListCellHeader headerBlock">
                            <div class="headerBlockLeftIcon"><span class="calcfont calc-bianhao"></span></div>
                            <div class="headerBlockContent f14">香港 - 上海 </div>
                            <div class="headerBlockRightIcon"><span class="calcfont calc-delete"></span></div>
                        </div>
                        <div class="dataList">
                            <div class="dataListCell headerBlock">
                                <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="budget">
                <div class="budgetHeader">
                    <div class="headerBlock">
                        <div class="headerBlockLeftIcon"><span class="calcfont calc-yusuan"></span></div>
                        <div class="headerBlockContent f16">预算</div>
                        <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                    </div>
                </div>

                <div class="ListCell">
                    <div class="ListCellLeftIcon iconHidden"><span class="calcfont calc-tixing1"></span></div>
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
                        <div class="ListCellLeftIcon textLeftIcon iconHidden"><span class="calcfont calc-T"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea placeholder="请输入原因"></textarea>
                            </p>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon textLeftIcon iconHidden"><span class="calcfont calc-T"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea placeholder="预算合计"></textarea>
                            </p>
                        </div>
                    </div>
                    <div class="ListCell">
                        <div class="ListCellLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText">币别</div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div class="ListCellContentRightText">人民币</div>
                            </div>
                            <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="expense">
                <div class="expenseBtn" @click="expenseClick">Expense Claim Form</div>
            </div>
        </div>
    </div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import Uploadfile from './Uploadfile'
import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Uploadfile,
    },
    data() {
        return {

            ptitle: 'Trip detail',
            isHiddenShuoMing: false,
            isHiddenYuanying: false,
            isAddNew: false, //是否添加新纪录
            // operation:true,//控制详情页header按钮，ture:显示可操作，false:隐藏
            onlyView:false,//控制页面头部icon,true:不显示头部icon,false:显示


        }
    },

    beforeRouteEnter: function (to, from, next) {
        //如果是从以下路由回来的就不用刷新页面
        if (from.name == 'selectlist') {
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
            console.log('data');
        });

    },
    methods: {
        expenseClick: function () {
            this.$router.push({
                path: '/addTripExpense/:id',
            })
        },
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
        reminderSwitch: function (e) {
            var $this = this;
            if ($(e.target).is(":checked") == true) {
                console.log('true');
                $this.isHiddenYuanying = true;

            } else {
                console.log('false');
                $this.isHiddenYuanying = false;
            }
        },

    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
@import "../../assets/css/pages/tripinfo.css";
.expense{
    display: none;
}
</style>
