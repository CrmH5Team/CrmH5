<template>
<div>

    <div id="mask" class="mask" @click="panelToggle" v-show="showPanel"></div>
    <div id="right-content" class="right-content">
        <div right-content-block id="dataBlock" v-show="isShowList">
            <div class="right-content-header f16">Related Data</div>
            <div class="right-content-list f14" v-for="item in items">
                <div class="right-content-list-cell"><span class="mui-icon calcfont calc-guanlianbiaodanbiaogeguanxi"></span>{{item}}</div>
            </div>
        </div>
        <div right-content-block id="generalBlock">
            <div class="right-content-header f16">Operation</div>
            <div class="right-content-list f14">
                <div class="right-content-list-cell" v-show="isShowSend"><span class="mui-icon calcfont calc-icon-test2"></span>Share with Colleagues</div>
            </div>
            <div class="right-content-list f14">
                <div class="right-content-list-cell"><span class="mui-icon calcfont calc-fenxiang1"></span>Send to Chat</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showPanel: false,
            classificationValue: '', //右侧分类
            dataFilter: [],
        }
    },
    props: ['items', 'isShowList','isShowSend'],
    created: function () {

    },

    mounted: function () {
        eventBus.$on('gengduo', this.panelToggle);

    },

    methods: {
        //侧滑
        panelToggle: function () {
            var _self = this;
            _self.showPanel = !_self.showPanel;
            if (_self.showPanel) {

                _self.$nextTick(function () {
                    $('#right-content').css({
                        'left': '30%',
                        'transition': 'left 0.2s ease-out',
                        '-moz-transition': 'left 0.2s ease-out',
                        '-webkit-transition': 'left 0.2s ease-out',
                        '-o-transition': 'left 0.2s ease-out'
                    })
                    $('#mask,#right-content').on("touchmove", function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    });
                })

            } else {
                _self.$nextTick(function () {
                    $('#right-content').css({
                        'left': '100%',
                        'transition': 'left 0.3s ease-out',
                        '-moz-transition': 'left 0.3s ease-out',
                        '-webkit-transition': 'left 0.3s ease-out',
                        '-o-transition': 'left 0.3s ease-out'
                    });
                })
            }

        },

    },

    beforeDestroy: function () {
        eventBus.$off('showRightPanelEvent');
    }

}
</script>

<style scoped>
@import "../../assets/css/common/list-right-style.css";

.right-content-header {
    height: 0.8rem;
    line-height: 0.8rem;
    width: 100%;
    background-color: #F8F2DC;
    padding-left: 0.1rem;

}
.right-content-list .calcfont {
    color: #FF5A21;
    padding-right: 0.1rem;
    font-size: 0.32rem;
}

.right-content-list .calcfont {
    color: #000000;
    padding-right: 0.1rem;
    font-size: 0.32rem;
}

.right-content-list-cell {
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
}

.right-content-list-cell:after {
    position: absolute;
    content: '';
    left: 0.3rem;
    right: 0.3rem;
    bottom: 0;
    height: 1px;
    background-color: #F5F5DC;
}

</style>
