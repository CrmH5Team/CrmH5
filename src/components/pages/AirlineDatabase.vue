<template>
<div>
    <header class="mui-bar mui-bar-nav">
        <a @click="back" class="calcfont calc-fanhui left" id="back"></a>
        <h1 class="mui-title f18">{{title}}</h1>
        <div class="inputTime">
            <input id="selectYear" type="text" placeholder="select year" readonly>
        </div>

        <a  @click="showMenu" class="calcfont calc-jiugongge right"></a>
    </header>
    <div class="segmentedControlContentsBox">
        <div class="segmentedControlContents mui-active" id="ID">
            <div class="fenLeiList">
                <div class="fenLeiListCell">

                    <div class="headTitle">Basic Info</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">ICAO</div>
                            <div class="parameterValue">
                                9 Air
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">IATA</div>
                            <div class="parameterValue">
                                iatatest
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Operator(English)</div>
                            <div class="parameterValue">
                                Operator(English)test
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Operator (Chinese)
                            </div>
                            <div class="parameterValue">
                                Operator (Chinese)test
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Country
                            </div>
                            <div class="parameterValue">
                                China
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Region/Area
                            </div>
                            <div class="parameterValue">
                                Asia Pacific
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Record CALC</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Existing Customer
                            </div>
                            <div class="parameterValue">
                                No
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Payment record in CALC
                            </div>
                            <div class="parameterValue">
                                123,121.00

                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Operator(English)</div>
                            <div class="parameterValue">
                                Operator(English)test
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Account Manager

                            </div>
                            <div class="parameterValue">
                                FQ
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Outstanding amount
                            </div>
                            <div class="parameterValue">
                                1,365.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Comments
                            </div>
                            <div class="parameterValue">
                                CommentsTest
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shouSuoList">
                <ul class="mui-table-view mui-table-view-chevron mui-collapse-content">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right">

                                <div class="listHead">Contact</div>
                                 <span class="calcfont calc-xia"></span>
                                </a>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="flexBox">
                                    <div class="flexBoxKey">Title Title Title Title Title Title</div>
                                    <div class="flexBoxValue">Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)Chief Technical Officer(CTO)</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">name</div>
                                    <div class="flexBoxValue">mingzi</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Please specify</div>
                                    <div class="flexBoxValue">specify</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Work Number</div>
                                    <div class="flexBoxValue">1555121133</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Mobile Number</div>
                                    <div class="flexBoxValue">1555121133</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">email</div>
                                    <div class="flexBoxValue">12422@163.com</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">status</div>
                                    <div class="flexBoxValue">Active</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">comments</div>
                                    <div class="flexBoxValue">comments</div>
                                </div>
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="flexBox">
                                    <div class="flexBoxKey">Title</div>
                                    <div class="flexBoxValue">Chief Technical Officer(CTO)</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">name</div>
                                    <div class="flexBoxValue">mingzi</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Please specify</div>
                                    <div class="flexBoxValue">specify</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Work Number</div>
                                    <div class="flexBoxValue">1555121133</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Mobile Number</div>
                                    <div class="flexBoxValue">1555121133</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">email</div>
                                    <div class="flexBoxValue">12422@163.com</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">status</div>
                                    <div class="flexBoxValue">Active</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">comments</div>
                                    <div class="flexBoxValue">comments</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="segmentedControlContents" id="country">
            <div class="fenLeiList">
                <div class="fenLeiListCell">
                    <div class="headTitle">Country Rating</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Country Rating</div>
                            <div class="parameterValue">
                                country Rating(test)
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Specifying rating agency</div>
                            <div class="parameterValue">
                                test agency
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Blacklist Countries</div>
                            <div class="parameterValue">
                                No
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">One belt one road country or not
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">GDP growth rate
                            </div>
                            <div class="parameterValue">
                                13.37%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">GDP per capita
                            </div>
                            <div class="parameterValue">
                                32.66
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">OECD Country Export Credit Risk
                            </div>
                            <div class="parameterValue">
                                4
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">CALC current rating
                            </div>
                            <div class="parameterValue">
                                Not Available
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Currency risk</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Currency Performance
                            </div>
                            <div class="parameterValue">
                                23.37%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Major income currency
                            </div>
                            <div class="parameterValue">
                                China Yuan Renminbi (CNY)
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Major cost currency </div>
                            <div class="parameterValue">
                                China Yuan Renminbi (CNY)
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Legal & Repossession Risk</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Owner/Operator Register
                            </div>
                            <div class="parameterValue">
                                Owner
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cape Town Ratified or not?
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">IDERA
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">DPOA
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Self-help allowed
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Default record
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Repossession record
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Aircraft registration country
                            </div>
                            <div class="parameterValue">
                                Hong Kong SAR, China
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="segmentedControlContents" id="market">
            <div class="fenLeiList">
                <div class="fenLeiListCell">
                    <div class="headTitle">Market Position</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Flag carrier or not, and alliance
                            </div>
                            <div class="parameterValue">
                                Flag carrier or not, and alliance
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Business model
                            </div>
                            <div class="parameterValue">
                                LCC with long haul
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Major competitiveness</div>
                            <div class="parameterValue">
                                price advantage
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Please specify
                            </div>
                            <div class="parameterValue">
                                specify test
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Market Position</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">News link to website
                            </div>
                            <div class="parameterValue">
                                www.baidu.com
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shouSuoList">
                <ul class="mui-table-view mui-table-view-chevron mui-collapse-content">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right">

                                  <div class="listHead">Market Growth Rate</div>
                                   <span class="calcfont calc-xia"></span>
                                </a>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="flexBoxTwo">
                                    <div class="boxOne">Hubs/Bases1</div>
                                    <div class="boxTwo">Growth ratio</div>
                                </div>
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="flexBoxTwo">
                                    <div class="boxOne">Hubs/Bases2</div>
                                    <div class="boxTwo">Growth ratio2</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="segmentedControlContents" id="financing">
            <div class="fenLeiList">
                <div class="fenLeiListCell">
                    <div class="headTitle">Associate with any other airlines / airline group</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Associate with any other airlines / airline group
                            </div>
                            <div class="parameterValue">
                                Associate with any other airlines / airline group
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Public listing</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">with stock code and link to IR page
                            </div>
                            <div class="parameterValue">
                                with stock code and link to IR page
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shouSuoList">
                <ul class="mui-table-view mui-table-view-chevron mui-collapse-content">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right">
                                <div class="listHead">Detailed shareholding</div>
                                <span class="calcfont calc-xia"></span>
                                </a>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="flexBoxTwo">
                                    <div class="boxOne">Shareholder1 Shareholder1 Shareholder1 Shareholder1 Shareholder1 Shareholder1 Shareholder1</div>
                                    <div class="boxTwo">Ownership Percentage1 Ownership Percentage1 Ownership Percentage1 Ownership Percentage1 Ownership Percentage1</div>
                                </div>
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="flexBoxTwo">
                                    <div class="boxOne">Shareholder1</div>
                                    <div class="boxTwo">Ownership Percentage1</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="mui-table-view mui-table-view-chevron mui-collapse-content">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right">
                                   <div class="listHead">Lessor participation</div>
                                   <span class="calcfont calc-xia"></span>
                                </a>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="flexBoxTwo">
                                    <div class="boxOne">Lessor1</div>
                                    <div class="boxTwo">Comment1</div>
                                </div>
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="flexBoxTwo">
                                    <div class="boxOne">Lessor2</div>
                                    <div class="boxTwo">Comment2</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="mui-table-view mui-table-view-chevron mui-collapse-content">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right">
                                <div class="listHead">Bank participation</div>
                                <span class="calcfont calc-xia"></span>
                                </a>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="flexBoxTwo">
                                    <div class="boxOne">Bank1</div>
                                    <div class="boxTwo">Comment1</div>
                                </div>
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="flexBoxTwo">
                                    <div class="boxOne">Bank2</div>
                                    <div class="boxTwo">Comment2</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="segmentedControlContents" id="fleet">
            <div class="fenLeiList">
                <div class="fenLeiListCell">
                    <div class="headTitle">Fleet plan</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Fleet Profile Metrics Date
                            </div>
                            <div class="parameterValue">
                                2018
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Report date
                            </div>
                            <div class="parameterValue">
                                2018/11/12
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Number of fleet</div>
                            <div class="parameterValue">
                                12,357
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Fleet Type
                            </div>
                            <div class="parameterValue">
                                Fleet Type
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Order book
                            </div>
                            <div class="parameterValue">
                                36,847
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Order book Type
                            </div>
                            <div class="parameterValue">
                                Order book Type
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Average fleet age (Year)
                            </div>
                            <div class="parameterValue">
                                165.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Retire old aircraft plan
                            </div>
                            <div class="parameterValue">
                                Retire old aircraft plan
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Seat Growth Rate</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Average available Seat Growth (YoY)
                            </div>
                            <div class="parameterValue">
                                12.37%
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Fleet Financing Method </div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Top 3 financing tools/product to fleet
                            </div>
                            <div class="parameterValue">
                                Aircraft Loan
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Please specify
                            </div>
                            <div class="parameterValue">
                                Please specify
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shouSuoList">
                <ul class="mui-table-view mui-table-view-chevron mui-collapse-content">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right">
                                <div class="listHead">fleet Details</div>
                                <span class="calcfont calc-xia"></span>
                                </a>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="flexBox">
                                    <div class="flexBoxKey">MSN</div>
                                    <div class="flexBoxValue">MSN1</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Aircraft model</div>
                                    <div class="flexBoxValue">Aircraft model1</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Engine type</div>
                                    <div class="flexBoxValue">Engine type1</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">YoM</div>
                                    <div class="flexBoxValue">2018-11-8</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Age</div>
                                    <div class="flexBoxValue">0年0月0天</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Own/Lease</div>
                                    <div class="flexBoxValue">Own/Lease1</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Remarks</div>
                                    <div class="flexBoxValue">Remarks1</div>
                                </div>
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="flexBox">
                                    <div class="flexBoxKey">MSN</div>
                                    <div class="flexBoxValue">MSN2</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Aircraft model</div>
                                    <div class="flexBoxValue">Aircraft model2</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Engine type</div>
                                    <div class="flexBoxValue">Engine type2</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">YoM</div>
                                    <div class="flexBoxValue">2018-11-9</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Age</div>
                                    <div class="flexBoxValue">0年0月0天</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Own/Lease</div>
                                    <div class="flexBoxValue">Own/Lease2</div>
                                </div>
                                <div class="flexBox">
                                    <div class="flexBoxKey">Remarks</div>
                                    <div class="flexBoxValue">Remarks2</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="segmentedControlContents" id="production">
            <div class="fenLeiList">
                <div class="fenLeiListCell">
                    <div class="headTitle">Production</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Production Date
                            </div>
                            <div class="parameterValue">
                                2018
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Report date
                            </div>
                            <div class="parameterValue">
                                2018/11/11
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Available Seat Kilometers (ASK)
                            </div>
                            <div class="parameterValue">
                                136.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Seat capacity provided
                            </div>
                            <div class="parameterValue">
                                136.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Revenue Passenger Kilometers (RPK)
                            </div>
                            <div class="parameterValue">
                                136.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Number of Passengers Carried within 12 months
                            </div>
                            <div class="parameterValue">
                                136.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Load Factor(%)
                            </div>
                            <div class="parameterValue">
                                136.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Number of Domestic Route
                            </div>
                            <div class="parameterValue">
                                136.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Number of Internatioal Route
                            </div>
                            <div class="parameterValue">
                                65,811
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Daily utilization
                            </div>
                            <div class="parameterValue">
                                Daily utilization
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">No. of Landing

                            </div>
                            <div class="parameterValue">
                                65,811
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="segmentedControlContents" id="airline">
            <div class="fenLeiList">
                <div class="fenLeiListCell">
                    <div class="headTitle">Resilient</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Bankruptcy before or not
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Established year
                            </div>
                            <div class="parameterValue">
                                Established year
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Safety & Quality </div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Safety rating
                            </div>
                            <div class="parameterValue">
                                5
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">IOSA certified
                            </div>
                            <div class="parameterValue">
                                Yes
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Number of Accident (Total Loss) within 10 years
                            </div>
                            <div class="parameterValue">
                                6666
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Number of Accident (Non total Loss) within 10 years
                            </div>
                            <div class="parameterValue">
                                6666
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Number of Incident within 5 years
                            </div>
                            <div class="parameterValue">
                                6666
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Maintenance capability</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">A check, C check or D check?
                            </div>
                            <div class="parameterValue">
                                A check, C check or D check?
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Who are main MRO for aircraft
                            </div>
                            <div class="parameterValue">
                                Who are main MRO for aircraft
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Who are main MRO for engine
                            </div>
                            <div class="parameterValue">
                                Who are main MRO for engine
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="segmentedControlContents" id="financial">
            <div class="fenLeiList">
                <div class="fenLeiListCell">
                    <div class="headTitle">Profitability</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Local Currency
                            </div>
                            <div class="parameterValue">
                                United States Dollar (USD)
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Exchange Rate (exchange to Standard)
                            </div>
                            <div class="parameterValue">
                                1
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Total Revenue (Compulsory)
                            </div>
                            <div class="parameterValue">
                                13.36
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Passenger revenue (Optional)
                            </div>
                            <div class="parameterValue">
                                11.87
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Passenger revenue / Total revenue (%) (Optional)
                            </div>
                            <div class="parameterValue">
                                88.85%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cargo revenue (Optional)
                            </div>
                            <div class="parameterValue">
                                3.63
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cargo revenue / Total revenue (%) (Optional)
                            </div>
                            <div class="parameterValue">
                                27.17%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Ancillary revenue (Optional)
                            </div>
                            <div class="parameterValue">
                                6.77
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Ancillary revenue / Total revenue (%) (Optional)
                            </div>
                            <div class="parameterValue">
                                50.67%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Direct cost (% of total cost) (Optional)
                            </div>
                            <div class="parameterValue">
                                21.58%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cost of maintenance (% of total cost) (Optional)
                            </div>
                            <div class="parameterValue">
                                1185.00%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cost of spare parts (% of total cost) (Optional)
                            </div>
                            <div class="parameterValue">
                                8.97%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cost of rental (% of total cost) (Optional)
                            </div>
                            <div class="parameterValue">
                                32.95%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Indirect cost (% of total cost) (Optional)
                            </div>
                            <div class="parameterValue">
                                11.89%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">EBITDAR (Compulsory)
                            </div>
                            <div class="parameterValue">
                                633.25
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">EBITDAR Margin (Compulsory)
                            </div>
                            <div class="parameterValue">
                                4739.90%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">EBITDA (Optional)
                            </div>
                            <div class="parameterValue">
                                33.69
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">EBITDA Margin (Optional)
                            </div>
                            <div class="parameterValue">
                                252.17%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">EBIT (Compulsory)
                            </div>
                            <div class="parameterValue">
                                13.68
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">EBIT margin (Optional)
                            </div>
                            <div class="parameterValue">
                                102.40%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Net Profit (Compulsory)
                            </div>
                            <div class="parameterValue">
                                15.95
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Net profit margin (%) (Compulsory)
                            </div>
                            <div class="parameterValue">
                                63.98%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Unit Revenue (PRASK) (Optional)
                            </div>
                            <div class="parameterValue">
                                88.00
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Passenger yield (US cent/km) (Optional)
                            </div>
                            <div class="parameterValue">
                                10,365.00
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Unit Cost (CASK) (Optional)
                            </div>
                            <div class="parameterValue">
                                233,698.00
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Liquidity</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cash and Cash Equivalents (Optional)
                            </div>
                            <div class="parameterValue">
                                1.0
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Free Cash Flow (Optional)
                            </div>
                            <div class="parameterValue">
                                2
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cash Flow from Operations (Optional
                            </div>
                            <div class="parameterValue">
                                3
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cash Flow from Investment (Optional)
                            </div>
                            <div class="parameterValue">
                                4
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Cash Flow from Financing (Optional)
                            </div>
                            <div class="parameterValue">
                                5
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Net Cash Flow (Optional)
                            </div>
                            <div class="parameterValue">
                                8
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Total Assets (Optional)
                            </div>
                            <div class="parameterValue">
                                6
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Total Liabilities (Optional)
                            </div>
                            <div class="parameterValue">
                                8
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Net Asset Value (Optional) (Optional)
                            </div>
                            <div class="parameterValue">
                                6
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Leverage Ratio (%) (Compulsory)
                            </div>
                            <div class="parameterValue">
                                66.7%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Current Ratio (%) (Optional)
                            </div>
                            <div class="parameterValue">
                                10%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">EBITDAR-to-(interest + rent) coverage ratio (Compulsory)
                            </div>
                            <div class="parameterValue">
                                12%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Net Debt-to-EBITDA (%) (Optional)
                            </div>
                            <div class="parameterValue">
                                31%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">EBITDA-to-interest coverage ratio (%) (Optional)
                            </div>
                            <div class="parameterValue">
                                11%
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Comments</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Audit report avaiable for not (Compulsory)
                            </div>
                            <div class="parameterValue">
                                No
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="segmentedControlContents" id="listing">
            <div class="fenLeiList">
                <div class="fenLeiListCell">
                    <div class="headTitle">Listing & Rating Information</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Stock Code
                            </div>
                            <div class="parameterValue">
                                test Stock Code
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">P/B
                            </div>
                            <div class="parameterValue">
                                1132.2321
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">P/E
                            </div>
                            <div class="parameterValue">
                                23.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Dividend yield
                            </div>
                            <div class="parameterValue">
                                18.97%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Share Price Range within 12 months
                            </div>
                            <div class="parameterValue">
                                3~5
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Earning per share
                            </div>
                            <div class="parameterValue">
                                11.88
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">NAV per share
                            </div>
                            <div class="parameterValue">
                                665.37
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">percentage of floating shares
                            </div>
                            <div class="parameterValue">
                                5.69%
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Company Credit Rating
                            </div>
                            <div class="parameterValue">
                                Company Credit Rating
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Specifying rating agency
                            </div>
                            <div class="parameterValue">
                                Specifying rating agency
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="fenLeiListCell">
                    <div class="headTitle">Other Info</div>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div class="parameterName">Remarks
                            </div>
                            <div class="parameterValue">
                                Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test Remarks test
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- 弹出层 -->
    <div class="itemZheZhao" ></div>
    <div class="sucaihuo-container">
        <div class="cd-bouncy-nav-modal" @touchmove.stop.prevent>
            <nav>
                <ul class="cd-bouncy-nav">
                    <li data-category="#ID">
                        <a>ID</a>
                    </li>
                    <li data-category="#country">
                        <a>Country Risk</a>
                    </li>
                    <li data-category="#market">
                        <a >Market Metrics</a>
                    </li>
                    <li data-category="#financing">
                        <a >Financing Power</a>
                    </li>
                    <li data-category="#fleet">
                        <a >Fleet Profile Metrics</a>
                    </li>
                    <li data-category="#production">
                        <a >Production</a>
                    </li>
                    <li data-category="#airline">
                        <a >Airline Operation Metrics</a>
                    </li>
                    <li data-category="#financial">
                        <a >Financial Metrics</a>
                    </li>
                    <li data-category="#listing">
                        <a >Listing & Rating Information</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: "AirlineDatabase",
            is_bouncy_nav_animating: false,
        }
    },
    mounted: function () {
        this.getEvent();
        this.showList();
        this.initSelectYear();
    },
    methods: {
        // 列表收缩展示
        showList: function () {
            var _self = this;
            $("a.mui-navigate-right").off("click").on("click", function () {
                var target = $(this);
                if (tool.isNullOrEmptyObject(target)) {
                    return;
                }
                var parentTarget = target.parent();
                  if (tool.isNullOrEmptyObject(parentTarget)) {
                    return;
                }
                if (!parentTarget.hasClass("mui-active")) {
                    parentTarget.addClass("mui-active");
                    parentTarget.find("span").removeClass("calc-xia").addClass("calc-shang");
                    parentTarget.find("ul").slideDown();
                } else {
                    parentTarget.removeClass("mui-active");
                    parentTarget.find("span").removeClass("calc-shang").addClass("calc-xia");
                    parentTarget.find("ul").slideUp();
                }
            })
        },
        back: function () {
            this.$router.back(-1);
        },
        initSelectYear:function(){
            //构造可选年份数据
            var yearArray = [];
            for(var i = 2000; i <= 2099; i++){
                yearArray.push(i);
            }
            var _curObj = $('#selectYear');
            _curObj.val((new Date()).FormatNew('yyyy'));
            if(tool.isNullOrEmptyObject(_curObj)) return;
            var selectYear = yearArray[0]; //默认选择的年份
            _curObj.picker({
                  title: lanTool.lanContent("1000002_请选择年")||"",
                  cols: [
                    {
                      textAlign: 'center',
                      values:yearArray
                    }
                  ],
                  toolbarCloseText: lanTool.lanContent('569_确认'),//确认
                  toolbarCancleText: lanTool.lanContent('570_取消'),//取消
                  onOpen: function (data) {
                    var defaultValue = _curObj.val() || '';
                    _curObj.picker("setValue", [defaultValue]);
                    selectYear = defaultValue;
                    $('.close-picker').off('click').on("click",function() {
                          if(tool.isNullOrEmptyObject(selectYear) || selectYear == defaultValue) return;


                    })
                  },
                  onChange: function (data, valueTemp, displayTemp) {
                      selectYear = valueTemp[0];
                  }

            });
        },
        showMenu: function () {
            var _self = this;
            console.log("menu");
            if (!$('.cd-bouncy-nav-modal').hasClass("fade-in")) {
                $(".itemZheZhao").show();
                _self.triggerBouncyNav(true);
            } else {
                _self.triggerBouncyNav(false);
            }

        },
        getEvent: function () {
            var _self = this;
            $('.cd-bouncy-nav-modal li').off('click').on('click', function (event) {
                console.log($(this).attr("data-category"));
                var category = $(this).attr("data-category");
                console.log("id:" + category);

                _self.triggerBouncyNav(false, category);
            });
        },

        triggerBouncyNav: function ($bool, $this) {
            var _self = this;
            if (!_self.is_bouncy_nav_animating) {
                _self.is_bouncy_nav_animating = true;
                //切换菜单动画   判断动画结束后才能调用 （webkitAnimationEnd oanimationend msAnimationEnd animationend）
                $('.cd-bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
                    if (!$bool)
                        $(".itemZheZhao").hide();
                    if (!tool.isNullOrEmptyObject($this)) {
                        $($this).addClass("mui-active")
                        $($this).siblings().removeClass("mui-active");
                    }
                    $('.cd-bouncy-nav-modal').removeClass('fade-out');
                    _self.is_bouncy_nav_animating = false;

                });
                //判断css 动画是否开启..
                if ($('.cd-bouncy-nav-trigger').parents('.no-csstransitions').length > 0) {
                    $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
                    _self.is_bouncy_nav_animating = false;
                }
            }
        }
    }

}
</script>

<style scoped>
@import "../../assets/css/pages/AirlineDatabase.css";
</style>
