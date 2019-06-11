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
 *     ******************  大乐透枚举  *******************
 *    综合基本走势        11  
    综合重号走势      12  
    综合连号走势      13  
    综合斜连号走势     14  
    综合斜跳号走势     15  
    前区大小走势      21  
    前区和值走势      22  
    前区奇偶走势      23  
    前区质合走势      24  
    前区除3余数走势    25  
    前区跨度走势      26  
    后区基本走势      41  
    后区和值走势      42  
    红球六行六列走势        51  历史开奖数据
    红球七行五列走势        52  历史开奖数据
 */
const chartStyle = require('../chart.style.config')
module.exports = {

    /** 综合基本走势 = 11 */
    '11': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_1': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
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
                }
            }
        }
    },
    /** 综合重号走势 = 12 */
    '12': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue + ' ' + chartStyle.defalutBg,
                    'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballGreen + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'heavyNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballGreen,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'specClass':  chartStyle.defalutBg,
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
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
            }
        }
    },
    /** 综合连号走势 = 13 */
    '13': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'serialNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'serialNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'serialNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'serialNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'serialNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue + ' ' + chartStyle.defalutBg,
                    'serialNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballGreen + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'serialNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballGreen,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
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
    /** 综合斜连号走势 = 14 */
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'edgeNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'edgeNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'edgeNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'edgeNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'edgeNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue + ' ' + chartStyle.defalutBg,
                    'edgeNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballGreen + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'edgeNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballGreen,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
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
    /** 综合斜跳号走势 = 15 */
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed + ' ' + chartStyle.defalutBg,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballRed,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballPurple,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue + ' ' + chartStyle.defalutBg,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballGreen + ' ' + chartStyle.defalutBg,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballGreen,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray
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
    /** 前区大小走势 = 21 */
    '21': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
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
                    'lineColor': chartStyle.lineStyle.red,
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
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
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
    /** 前区奇偶走势 = 23 */
    '23': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
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
                    'lineColor': chartStyle.lineStyle.red,
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
    /** 前区质合走势 = 24 */
    '24': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                     'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
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
                    'lineColor': chartStyle.lineStyle.red,
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
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
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
    /** 前区和值走势 = 22 */
    '22': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
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
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 前区除3余数走势 = 25 */
    '25': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
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
    /** 前区跨度走势 = 26 */
    '26': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
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
            'periodSpan': chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /** 后区基本走势 = 41 */
    '41': {
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
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxBlue,
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
                }
            }
        }
    },
    /** 后区和值走势 = 42 */
    '42': {
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
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.defalutBg,
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
                }
            }
        }
    },
    /** 红球六行六列走势 = 51 */
    '51': {},
    /** 红球七行五列走势 = 52 */
    '52': {}
}