/***********************************************************************************
 *
 *                           该配置用于配置画线图表的结构以及样式
 *
 ***********************************************************************************/
'use strict';


/**
 *     ===========================    这个是表格样式和画线样式源   ===========================
 *
 *     missStatList: {
     *           periodNumber:                                //期数样式;
     *            period:                                             //开奖号码样式;
     *            periodSpan:                                     //开奖号码中的span的样式;
     *            statData: {
     *                 data_0: {
     *                     defalut:                                   //默认背景样式;
     *                     defalutSpan:                           //默认td中的span样式
     *                     awardNumber:                       //开奖号码样式 (  注意：画线依赖这个样式，所以必须填写 );
     *                     heavyNumber:                       //重号样式;
     *                      serialNumber:                        //连号样式;
     *                      edgeNumber:                        //边号样式;
     *                     omissionDelamination:           //遗漏分层;
     *                     lineWidth:                              //画线线条的大小，直接填数字即可 （注意：画线依赖这个值，不填写这个值则画不出线条，所以你需要画线就必须加上，不加则不会画）
     *                     lineColor:                               //画线线条的颜色（注意：画线依赖这个值，不填写这个值则画不出线条，所以你需要画线就必须加上，不加则不会画）
     *                 }
     *                 data_1................
     *            }
     *     }，
 *     missBottomStatList: {
     *           period:                                            //开奖号码样式;
     *            periodSpan:                                   //开奖号码中的span的样式;
     *              statData: {
     *                 data_0: {
     *                     defalut:                                 //默认背景样式;
     *                     defalutSpan:                         //默认td中的span样式
     *                 },
     *                 data_1................
     *             }
     *     }
 *
 *==========================================================================*/

/**
 *     ******************  快3系列枚举  *******************
 *     基本基本走势 = 1,           1
 *     基本和值走势 = 2,           2
 *     基本形态走势 = 3,           3
 *     基本组合走势 = 4,           4
 *     基本012路走势 = 5,         5
 *     分布号码统计                   15
 *     分布组合统计                   16       按日统计数据
 *     分布和值统计                   17       按日统计数据
 *     分布形态跨度统计         18       按日统计数据
 */
const chartStyle = require('../chart.style.config')
module.exports = {

         /** 1为基本走势 */
         '1': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_4': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_5': {
                         'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_4': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_5': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 大小走势 */
         '2': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_2': {
                        'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_4': {
                        'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_5': {
                         'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_6': {
                        'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_7': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_8': {
                        'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxPurple,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.purple,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_4': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_5': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_6': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_7': {
                         'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_8': {
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 奇偶走势 */
         '3': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_2': {
                        'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_4': {
                        'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_5': {
                         'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_6': {
                        'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_7': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_8': {
                        'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxPurple,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.purple,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                        
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_4': {
                         
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_5': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_6': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_7': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_8': {
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 区间走势 */
         '4': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                        'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 同尾走势 */
         '5': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {  
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 重号走势 */
         '6': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 二连号走势 */
         '7': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg,
                         'specClass':  chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 三连号走势 */
         '8': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg,
                         'specClass':  chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 隔位码走势 */
         '9': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+" "+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 定位 第一 位走势 */
         '21': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray, 
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_4': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_4': {
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 定位 第二 位走势 */
         '22': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                      'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray, 
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_4': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_4': {
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 定位 第三 位走势 */
         '23': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                      'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray, 
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_4': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_4': {
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 前二组选走势 */
         '30': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxPurple,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.purple,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 前二直选走势 */
         '31': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                         'defalut': '',
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 前二大小走势 */
         '32': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxPurple,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.purple,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 前二奇偶走势 */
         '33': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxPurple,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.purple,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 前二质合走势 */
         '34': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxPurple,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.purple,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 前二升平降走势 */
         '35': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGraybgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxPurple,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.purple,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 前二012路走势 */
         '36': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGraybgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxPurple,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.purple,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
          /** 前三分布走势 */
         '50': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.defalutBg,
                 'periodSpan': chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGraybgBoxGray
                     },
                     'data_1': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },

                     'data_2': {
                         'defalut':chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },

                     'data_3': {
                         'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.defalutBg,
                 'periodSpan':'',
                 'statData': {
                     'data_0': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_1': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_2': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         }



}