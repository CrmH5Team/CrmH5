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
</template>



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

<style scoped>
@import "../../assets/css/pages/search.css";
</style>

