<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :saveIcon="saveHidden" :title="ptitle" :submitIcon="submitIconHidden"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="tipBox">
                <div class="tipContent">
                    <p class="f12"><span class="red">* </span><span class="zhuyi">请注意，该报销申请单将自动同步到OA系统。</span></p>
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
                    <div class="ListCellLeftIcon"><span class="calcfont calc-baoxiao"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">报销类型</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">公干报销（对外）</div>
                        </div>
                        <div class="ListCellRightIcon iconHidden"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-T"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="员工级别"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
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
                    <div class="ListCell visible" v-show="isHiddenYuanying">
                        <div class="ListCellLeftIcon textLeftIcon iconHidden"><span class="calcfont calc-T"></span></div>
                        <div class="ListCellLeftText">
                            <p class="textareaP">
                                <textarea placeholder="请输入原因"></textarea>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="winehouseExpense">
                    <div class="headerBlock">
                        <div class="headerBlockLeftIcon"><span class="calcfont calc-zhusu"></span></div>
                        <div class="headerBlockContent f16">酒店费用</div>
                        <div class="headerBlockRightIcon iconHidden">
                            <router-link to='/addmeeting'><span class="calcfont calc-jia"></span></router-link>
                        </div>
                    </div>

                    <div class="contentList">
                        <div class="contentListCell">
                            <div class="contentListCellHeader headerBlock">
                                <div class="headerBlockLeftIcon"><span class="calcfont calc-bianhao"></span></div>
                                <div class="headerBlockContent f14">31/Dec - 04/Jan 4晚</div>
                                <div class="headerBlockRightContent">补充完整</div>
                            </div>
                            <div class="dataList">
                                <div class="dataListCell headerBlock">
                                    <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                    <div class="headerBlockContent f14">上海</div>
                                    <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                                </div>
                                <div class="dataListCell headerBlock">
                                    <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                    <div class="headerBlockContent f14">2000.00 人民币</div>
                                    <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="transportation">
                    <div class="headerBlock">
                        <div class="headerBlockLeftIcon"><span class="calcfont calc-route"></span></div>
                        <div class="headerBlockContent f16">交通费</div>
                        <div class="headerBlockRightIcon iconHidden" @click="routeClick">
                            <span class="calcfont calc-jia"></span>
                        </div>
                    </div>
                    <div class="contentList">
                        <div class="contentListCell">
                            <div class="contentListCellHeader headerBlock">
                                <div class="headerBlockLeftIcon"><span class="calcfont calcfont calc-bianhao"></span></div>
                                <div class="headerBlockContent f14">香港 - 上海 </div>
                                <div class="headerBlockRightContent">补充完整</div>
                            </div>
                            <div class="dataList">
                                <div class="dataListCell headerBlock">
                                    <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                    <div class="headerBlockContent f14">MU726 31/Dec 07:40 - 31/Dec 09:30</div>
                                    <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                                </div>
                                <div class="dataListCell headerBlock">
                                    <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                    <div class="headerBlockContent f14">800.00 人民币</div>
                                    <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                                </div>
                            </div>

                        </div>
                        <div class="contentListCell">
                            <div class="contentListCellHeader headerBlock">
                                <div class="headerBlockLeftIcon"><span class="calcfont calcfont calc-bianhao"></span></div>
                                <div class="headerBlockContent f14">上海 - 香港</div>
                                <div class="headerBlockRightContent">补充完整</div>
                            </div>
                            <div class="dataList">
                                <div class="dataListCell headerBlock">
                                    <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                    <div class="headerBlockContent f14">HX235 4/Jan 09:10 - 4/Jan 11:55</div>
                                    <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                                </div>
                                <div class="dataListCell headerBlock">
                                    <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                    <div class="headerBlockContent f14">500.00 人民币</div>
                                    <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="other">
                    <div class="headerBlock">
                        <div class="headerBlockLeftIcon"><span class="calcfont calc-qitafeiyong"></span></div>
                        <div class="headerBlockContent f16">其他费用</div>
                        <div class="headerBlockRightIcon" @click="roomClick">
                            <span class="calcfont calc-jia"></span>
                        </div>
                    </div>
                    <div class="contentList">
                        <div class="contentListCell">
                            <div class="contentListCellHeader headerBlock">
                                <div class="headerBlockLeftIcon"><span class="calcfont calc-bianhao"></span></div>
                                <div class="headerBlockContent f14">招待费</div>
                                <div class="headerBlockRightContent">补充完整</div>
                            </div>
                            <div class="dataList">
                                <div class="dataListCell headerBlock">
                                    <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                    <div class="headerBlockContent f14">01/Jan/2019招待费用</div>
                                    <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                                </div>
                                <div class="dataListCell headerBlock">
                                    <div class="headerBlockLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                                    <div class="headerBlockContent f14">500.00 人民币</div>
                                    <div class="headerBlockRightIcon iconHidden"><span class="calcfont calc-jia"></span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="invoice">
                    <div class="invoiceHeader">
                        <div class="headerBlock">
                            <div class="headerBlockLeftIcon"><span class="calcfont calc-wendang2"></span></div>
                            <div class="headerBlockContent f16">发票或者其他文件</div>
                            <div class="headerBlockRightIcon"><span class="calcfont calc-jia"></span></div>
                        </div>
                    </div>
                    <div class="invoiceDocList">
                        <div class="docListCell">
                            <div class="docListCellLeft">
                                <div class="docListCellLeftContent"><span class="calcfont calc-fujian"></span>TestFileName1.pdf</div>
                            </div>
                            <div class="docListCellRight">
                                <div class="docListCellRightContent">16/Nov 15:00</div>
                            </div>
                        </div>
                        <div class="docListCell">
                            <div class="docListCellLeft">
                                <div class="docListCellLeftContent"><span class="calcfont calc-fujian"></span>TestFileName2.pdf</div>
                            </div>
                            <div class="docListCellRight">
                                <div class="docListCellRightContent">16/Nov 15:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tripRecord">
                    <div class="ListCell">
                        <div class="ListCellLeftIcon"><span class="calcfont calc-yidu"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText">查看出差申请单</div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div class="ListCellContentRightText"></div>
                            </div>
                            <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>
                </div>
                <div class="budget">
                    <div class="ListCell">
                        <div class="ListCellLeftIcon iconHidden"><span class="calcfont calc-huiyi"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText">总报销金额</div>
                            </div>
                            <div class="ListCellContentRight rightContent">
                                <div class="ListCellContentRightText">5300</div>
                            </div>
                            <div class="ListCellRightIcon iconHidden"><span class="calcfont calc-you"></span></div>
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
                            <div class="ListCellRightIcon iconHidden"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>
                </div>

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
            moreHiddenIcon: false,
            delHidden: false,
            saveHidden: true,
            submitIconHidden: true,
            ptitle: 'And Expense Claim Form',
            isHiddenYuanying: false,
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
        reminderSwitch: function (e) {
            var $this = this;
            if ($(e.target).is(":checked") == true) {
                $this.isHiddenYuanying = true;
            } else {
                $this.isHiddenYuanying = false;
            }
        },

    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";
@import "../../assets/css/pages/tripinfo.css";
span.red{
    color: red;
}
span.zhuyi{
    color: #666;
}
.tripRecord {
    margin: 10px 0;
}

.invoice {
    margin-top: 10px;
    padding: 5px 0;
    background-color: #fff;
}

.invoiceHeader {

    padding-left: 0.3rem;
    padding-right: 0.3rem;

    background-color: #fff;
}

.contentListCellHeader.headerBlock .headerBlockRightContent {
    width: calc(30%);
    padding-left: 5px;
    margin: auto 0;
    color: #2A79C8;
    font-size: 0.28rem;
    text-align: right;
    padding-right: 0.16rem;
}

.contentListCellHeader.headerBlock .headerBlockContent {
    width: calc(70% - 0.6rem);
    padding-left: 5px;
    margin: auto 0;
    /* color: #FF5A21; */
}

.budget .headerBlock .headerBlockContent {
    color: #FF5A21;
}

.invoiceDocList {
    padding-left: 0.6rem;
}

.invoiceDocList .docListCell {
    position: relative;
    display: flex;
    height: 1rem;
    line-height: 1rem;
}

.invoiceDocList .docListCell:after {
    position: absolute;
    content: '';
    left: 0.3rem;
    right: 0.3rem;
    bottom: 0;
    height: 1px;
    background-color: #F5F5DC;
}

.docListCell .docListCellLeft {
    width: 60%;
    font-size: 0.28rem;
    color: #2A79C8;
    padding-left: 0.3rem;
}

.docListCell .docListCellRight {
    width: 40%;
    font-size: 0.28rem;
}

.docListCellLeftContent span {
    color: #FF5A21;
}
</style>
