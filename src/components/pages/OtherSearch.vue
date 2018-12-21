<template>
<div>
    <my-header class="header" :title="title"></my-header>
    <div class="showContent">
        <div class="calendarListCell">
            <!-- <div class="calendarListCellLeft">title</div> -->
            <div class="calendarListCellMiddleInput"><input type="text" placeholder="Title" /></div>
                <!--<div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>-->
            </div>
            <div id="Initiator" class="calendarListCell">
                <div class="calendarListCellLeft">Initiator</div>
                <div class="calendarListCellMiddle">
                    <div class="calendarListCellMiddleContent">Initiator</div>
                </div>
                <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
            <div id="Meetingnature" class="calendarListCell">
                <div class="calendarListCellLeft">Meeting nature</div>
                <div class="calendarListCellMiddle">
                    <div class="calendarListCellMiddleContent"></div>
                </div>
                <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeft">Meeting type</div>
                <div class="calendarListCellMiddle">
                    <div class="calendarListCellMiddleContent">Meeting type</div>
                </div>
                <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeft">Organization</div>
                <div class="calendarListCellMiddle">
                    <div class="calendarListCellMiddleContent">Organization</div>
                </div>
                <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeft">Contact Name</div>
                <div class="calendarListCellMiddle">
                    <div class="calendarListCellMiddleContent">Contact Name</div>
                </div>
                <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeft">Opportunity</div>
                <div class="calendarListCellMiddle">
                    <div class="calendarListCellMiddleContent">Opportunity </div>
                </div>
                <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeft">Priority</div>
                <div class="calendarListCellMiddle">
                    <div class="calendarListCellMiddleContent">Priority</div>
                </div>
                <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
            <div class="calendarListCell">
                <div class="calendarListCellLeft">
                    Time Range</div>
                <div class="calendarListCellMiddle">
                    <div class="calendarListCellMiddleContent">
                        Time Range</div>
                </div>
                <div class="calendarListCellRight"><span class="mui-icon calcfont calc-you"></span></div>
            </div>
        </div>
        <div class="anniu">
            <div class="clear-btn">Clear</div>
            <div class="sure-btn">OK</div>
        </div>
    </div>

</div>
</template>

<style>
.showContent {
    position: relative;
    background-color: #FFFFFF;
    height: calc(100% - 64px);
}

.calendarListCell {
    display: flex;
    padding: 15px 10px;
    padding-right: 0;
    border-bottom: solid 1px #e5f0f4;
}

.calendarListCell .calendarListCellLeft {
    flex: 6;
    margin: auto 0;
    line-height: 15px;
}

.calendarListCell .calendarListCellMiddle {
    flex: 10;
    margin: auto 0;
    padding-left: 10px;
    line-height: 20px;
    text-align: right;
}
.calendarListCell .calendarListCellMiddleInput
{
    width: calc(100% - 10px)
}
.calendarListCell .calendarListCellMiddle .calendarListCellMiddleContent {
    width: 4rem;
    font-size: 15px;
    height: 20px;
    line-height: 20px;
    float: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.calendarListCell .calendarListCellMiddle .calendarListCellMiddleContent:after {
    clear: both;
}

.calendarListCell .calendarListCellMiddleInput input {
    outline: none;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    width: 100%;
    margin: auto 0;
    border: none;
    background-color: none;
}

.calendarListCell .calendarListCellRight {
    flex: 1;
    margin: auto 0;
}

.calendarListCell .calendarListCellRight .calc-you {
    color: #cdcdcd !important;
}

.anniu {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    z-index: 3;
    display: flex;
}

.clear-btn,
.sure-btn {
    flex: 1;
    background-color: #F2F2F2;
    color: #000000;
    text-align: center;
    line-height: 50px;
}

.sure-btn {
    background-color: #FF5A21;
    color: #FFFFFF;
}
</style>

<script>
import Header from '../common/Header'
export default {
    components: {
        'my-header': Header,
    },
    data() {
        return {
            title: 'Other Search',
        }
    },



}
</script>
