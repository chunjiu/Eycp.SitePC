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
 *     ******************  七乐彩枚举  *******************
 *     基本分布走势 = 1,           1
 *     形态大小走势  = 11,         2
 *     形态奇偶走势 = 12,          3
 *     形态质合走势 = 13,          4
 *     形态012路走势 = 14,         5
 *     形态重号走势 = 15,          6
 */
const chartStyle = require('../chart.style.config')
module.exports = {

    /** 基本分布走势 = 1 */
    '1': {
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
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
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
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg
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

    /** 形态大小走势 = 11 */
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.purple,
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
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                }
                ,
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                }
            }
        }
    },

    /** 形态奇偶走势 = 12 */
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.purple,
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
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                }
                ,
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                }
            }
        }
    },

    /** 形态质合走势 = 13 */
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                          'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.purple,
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
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_2': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_4': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                }
                ,
                'data_6': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                }
            }
        }
    },

    /** 形态012路走势 = 14 */
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
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
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
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
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
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
                },
                'data_8': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.purple,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_9': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
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
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_8': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_9': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },

    /** 形态重号走势 = 15 */
    '15': {
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'heavyNumber':  chartStyle.ballStyle.ballRed
                },
                'data_1': {
                    'defalut': chartStyle.fontStyle.fontGray + ' ' + chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'heavyNumber':  chartStyle.ballStyle.ballRed
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'heavyNumber':  chartStyle.ballStyle.ballRed
                },
                'data_3': {
                    'defalut': chartStyle.fontStyle.fontGray + ' ' + chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
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
}