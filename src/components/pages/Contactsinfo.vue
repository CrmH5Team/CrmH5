<template>
<div>
    <Infoheader :moreIcon="moreHiddenIcon" :delHidden="delHidden" :saveIcon="saveHidden" :title="ptitle"></Infoheader>

    <div class="scroll-div">
        <div class="box">
            <div class="ContactList">
                <!-- <div class="ListCell">
                <div class="ListCellLeftIcon leftIconHidden"><span class="calcfont calc-shijian"></span></div>
                <div class="ListCellContent">
                    <div class="ListCellContentLeft leftContent">
                        <div class="ListCellContentLeftText">photo</div>
                    </div>
                </div>
            </div> -->
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-name"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="Title">Todd Scott</textarea>
                        </p>
                    </div>
                </div>
                <div class="ListSpecialCell visible" id="Organization">
                    <div class="ListSpecialCellField">
                        <div class="ListSpecialCellLeftIcon"><span class="calcfont calc-gongsixinxi"></span></div>
                        <div class="ListSpecialCellFieldContent">Organization</div>
                        <div class="ListSpecialCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                    <div class="ListSpecialCellContent">Air China</div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-zhiwei"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="Title">Fleet Planning Manager</textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-mailbox"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="Title">tsott@up12359s.com</textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-phone"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="Title">502-29-3118</textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-mobilephone"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="Moblie phone"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-chuanzhen"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="fax"></textarea>
                        </p>
                    </div>
                </div>
                <div class="ListCell">
                    <div class="ListCellLeftIcon textLeftIcon"><span class="calcfont calc-beizhu"></span></div>
                    <div class="ListCellLeftText">
                        <p class="textareaP">
                            <textarea placeholder="Remarks"></textarea>
                        </p>
                    </div>
                </div>
            </div>
            <div class="accessList">
                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-yidu"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Accessable</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Private</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>

                <div class="ListCell visible">
                    <div class="ListCellLeftIcon"><span class="calcfont calc-fuzerenicon"></span></div>
                    <div class="ListCellContent">
                        <div class="ListCellContentLeft leftContent">
                            <div class="ListCellContentLeftText">Responsible by负责人</div>
                        </div>
                        <div class="ListCellContentRight rightContent">
                            <div class="ListCellContentRightText">Cheryl Xiong</div>
                        </div>
                        <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                    </div>
                </div>
                <div class="ListCell tip">
                    <div class="tipBox">
                        <p class="f14"><span>*</span> 请注意，当选择私有的时，只有负责人及其上司可以访问并分享。</p>
                    </div>

                </div>
            </div>
            <div class="showMoreList">
                <div class="organizationMessage">
                    <div class="ListCell" @click="goToOrganizationsInfo">
                        <div class="ListCellLeftIcon"><span class="calcfont calc-gongsixinxi"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText">查看公司信息</div>
                            </div>
                            <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>
                </div>

                <div class="accessView">
                    <div class="ListCell" @click="goToShareList">
                        <div class="ListCellLeftIcon"><span class="calcfont calc-yidu"></span></div>
                        <div class="ListCellContent">
                            <div class="ListCellContentLeft leftContent">
                                <div class="ListCellContentLeftText">Colleagues with access</div>
                            </div>
                            <div class="ListCellRightIcon"><span class="calcfont calc-you"></span></div>
                        </div>
                    </div>
                </div>
                <Infofooter> </Infofooter>
            </div>
        </div>
    </div>
    <InfoRightPanel :items="itemsData" :isShowList="isShowMenuList" :isShowSend="isShowSendBtn"></InfoRightPanel>
</div>
</template>

<script>
import Infoheader from '../common/Infoheader'
import InfoRightPanel from '../common/InfoRightPanel'
import Infofooter from '../common/infoFooter'
import Mixins from '../../mixins'
import eventBus from '../common/Event';

export default {
    // mixins: [Mixins.PAGE_INFO],
    components: {
        Infoheader,
        Infofooter,
        InfoRightPanel
    },
    data() {
        return {
            moreHiddenIcon: true,
            delHidden: false,
            saveHidden: true,
            ptitle: 'contact detail',
            itemsData: ['Calndar(3)', 'Opportunities(2)'],
            isShowMenuList: false,
            isShowSendBtn: true
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
        //查看有权限访问的同事跳转事件
        goToShareList: function () {
            this.$router.push({
                path: '/sharelist',
                query: {
                    name: "Colleagues with access",
                }
            })
        },
        //查看公司信息跳转事件
        goToOrganizationsInfo: function () {
            this.$router.push({
                path: '/organizationsinfo/{"AutoID":""}',
            })
        },
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/calendarinfo.css";

.accessView,
.organizationMessage {
    margin-top: 10px;
}

.accessView .ListCell:after,
.organizationMessage .ListCell:after {
    background-color: #fff;
}

.accessView .ListCellContentLeftText,
.organizationMessage .ListCellContentLeftText {
    font-weight: 700;
}

.accessView .leftContent,
.organizationMessage .leftContent {
    width: calc(100% - 0.32rem) !important;
}

.ListCell.tip {
    padding: 9px 0;
}

.ListCell.tip:after {
    background-color: #ffffff;
}

.tipBox {
    padding-left: 0.9rem;
    padding-right: 0.3rem;
    line-height: 0.34rem;
}

.tipBox p {
    margin: 0;
    padding: 0
}

.tipBox p span {
    color: red;
}
</style>
