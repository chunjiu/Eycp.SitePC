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
 *     ******************  广西快乐十分系列枚举  *******************
 *      基本分布走势  1
基本大小走势  2
基本奇偶走势  3
基本重号走势  4
基本二连号走势 5
基本三连号走势 6
  
定位第一位走势 21
定位第二位走势 22
定位第三位走势 23
定位第四位走势 24
定位第五位走势 25
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
                 'periodSpan': '',
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
                         'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                          'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_3': {
                         'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
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
                     },
                     'data_5': {
                        'defalut':chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray+' '+chartStyle.WidthSize.width50,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_6': {
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
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                      'data_4': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_5': {
                        'defalut':chartStyle.defalutBg+' '+chartStyle.WidthSize.width50,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_6': {
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
                         'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_2': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     'data_3': {
                         'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
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
                     },
                     'data_5': {
                        'defalut':chartStyle.defalutBg+' '+chartStyle.WidthSize.width50,
                        'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_6': {
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
                     },
                     'data_3': {
                        'defalut':chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan
                     },
                      'data_4': {
                         'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_5': {
                        'defalut':chartStyle.defalutBg+' '+chartStyle.WidthSize.width50,
                        'defalutSpan': chartStyle.defalutSpan
                     },
                     'data_6': {
                         'defalutSpan': chartStyle.defalutSpan
                     }
                 }
             }
         },
         /** 重号走势 */
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
                         'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
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
         /** 定位 第四 位走势 */
         '24': {
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
         }
        ,
         /** 定位 第五 位走势 */
         '25': {
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
         }




}