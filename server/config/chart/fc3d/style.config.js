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
 *     ******************  福彩3d/排列3枚举  *******************
 *     定位个位走势       1
        定位十位走势      2
        定位百位走势      3
        综合基本走势      11
        综合奇偶走势      12
        综合大小走势      13
        综合升平降走势     14
        综合012路走势        15
        综合号码个数走势    16
        综合质合走势      17
        综合跨度走势      18
        综合和值走势      19
        综合尾数类型走势        20
 */
const chartStyle = require('../chart.style.config')
module.exports = {

    /** 定位个位走势 = 1 */
    '1': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 定位十位走势 = 2 */
    '2': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 定位百位走势 = 3 */
    '3': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合基本走势 */
    '11': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'periodBall': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
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
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber':  chartStyle.defalutBg +' '+chartStyle.ballStyle.ballRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg +' '+chartStyle.ballStyle.ballRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合奇偶走势 = 12 */
    '12': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'periodBall': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
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
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                     'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合大小走势 = 13 */
    '13': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'periodBall': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
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
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                      'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合升平降走势 = 14 */
    '14': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
                ,
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合012路走势 = 15 */
    '15': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
                ,
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合号码个数走势 = 16 */
    '16': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
                ,
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
                ,
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_6': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_7': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合质合走势 = 17 */
    '17': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_1': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                      'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_5': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合跨度走势 = 18 */
    '18': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'periodBall': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
            'statData': {
                'data_0': {
                    'defalut': ' ',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.ballStyle.ballRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合和值走势 = 19 */
    '19': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'specClass':  chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 综合尾数类型走势 = 20 */
    '20': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'specClass':  chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                   'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
}