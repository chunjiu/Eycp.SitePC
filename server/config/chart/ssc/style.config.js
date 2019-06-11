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
 *     ******************  时时彩系列枚举  *******************
 * 一星基本走势	1
 * 一星形态走势	2
 *
 * 二星基本走势	10
 * 二星形态走势	11
 * 二星和值走势	12
 * 二星直选形态走势	13
 * 二星组选形态走势	14
 * 二星跨度走势	15
 * 二星大小走势	16
 * 二星单双走势	17
 *
 * 三星基本走势	30
 * 三星形态走势	31
 * 三星直选形态走势	32
 * 三星组选形态走势	33
 * 三星和值走势	34
 * 三星跨度走势	35

 * 四星基本走势	50
 * 四星形态走势	51

 * 五星基本走势	61
 * 五星形态走势	62
 * 五星大小走势	63
 * 五星奇偶走势	64
 */
const chartStyle = require('../chart.style.config');
let periodNumber = chartStyle.periodNumber,
    periodBg = chartStyle.periodBg,
    fontBold = chartStyle.fontStyle.fontBold,
    fontBlue = chartStyle.fontStyle.fontBlue,
    fontGray = chartStyle.fontStyle.fontGray,
    ballBlue = chartStyle.ballStyle.ballBlue,
    ballRed = chartStyle.ballStyle.ballRed,
    bgBoxPurple = chartStyle.bgBoxStyle.bgBoxPurple,
    bgBoxBlue = chartStyle.bgBoxStyle.bgBoxBlue,
    bgBoxRed = chartStyle.bgBoxStyle.bgBoxRed,
    bgBoxGray = chartStyle.bgBoxStyle.bgBoxGray,
    defaultSpan = chartStyle.defalutSpan,
    defaultBg = chartStyle.defalutBg,
    lineBlue = chartStyle.lineStyle.blue,
    lineRed = chartStyle.lineStyle.red,
    linePurple = chartStyle.lineStyle.purple,
    lineWidth = chartStyle.lineStyle.lineWidth;
module.exports = {

         /** 1为基本走势 */
    '1': {
             /**  表格样式配置  */
             "missStatList": {
                 periodNumber: chartStyle.periodNumber,
                 period: chartStyle.periodBg,
                 periodSpan: chartStyle.defalutSpan+' sscStar '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 statData: {
                     data_0: {
                         defalut: chartStyle.fontStyle.fontGray,
                         defalutSpan: chartStyle.defalutSpan,
                         awardNumber: chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         lineWidth: lineWidth,
                         lineColor: lineBlue
                     },
                     data_1: {
                         defalut: chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         defalutSpan: chartStyle.defalutSpan,
                         awardNumber: chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     data_2: {
                         defalut: chartStyle.fontStyle.fontGray,
                         defalutSpan: chartStyle.defalutSpan,
                         awardNumber: chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     },
                     data_3: {
                         defalut: chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         defalutSpan: chartStyle.defalutSpan,
                         awardNumber: chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.fontStyle.fontBold,
                         omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                         switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                     }
                 }
             },
             "missBottomStatList": {
                 period: chartStyle.periodBg,
                 periodSpan: chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 statData: {
                     data_0: {
                         defalut: '',
                         defalutSpan: chartStyle.defalutSpan
                     },
                     data_1: {
                         defalut: chartStyle.defalutBg,
                         defalutSpan: chartStyle.defalutSpan,
                     },
                     data_2: {
                         defalut: '',
                         defalutSpan: chartStyle.defalutSpan,
                     },
                     data_3: {
                         defalut: chartStyle.defalutBg,
                         defalutSpan: chartStyle.defalutSpan,
                     }
                 }
             }
         },
    '2': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan+' sscStar '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                     lineWidth: lineWidth,
                         lineColor: lineBlue
                },
                data_1: {
                    defalut: chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed+' '+chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_5: {
                    defalut: chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_3: {
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_5: {
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                }
            }
        }
    },
    '10': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan+' sscStar '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold+' '+ ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                },
                data_1: {
                    defalut: chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold+' '+ballRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold+' '+ ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold+' '+bgBoxRed
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold+' '+bgBoxRed
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold+' '+bgBoxRed
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_3: {
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_4: {
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_5: {
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                }
            }
        }
    },
    '11': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_6: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: defaultBg
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '12': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' specialRedNum ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' specialBlueNum ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + '  ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '13': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '14': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_6: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '15': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: defaultBg
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxPurple,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: linePurple,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_6: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '16': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + '  ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '17': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '30': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '31': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed
                },
                data_8: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue
                },
                data_9: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_8: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_9: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '32': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '33': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '34': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' specialRedNum ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' specialBlueNum ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '35': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: defaultBg
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxPurple,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: linePurple,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_6: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '50': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '51': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_6: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_7: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_8: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed
                },
                data_9: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue
                },
                data_10: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed
                },
                data_11: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_8: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_9: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_10: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_11: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '61': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '62': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue
                },
                data_8: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballRed
                },
                data_9: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                },
                data_8: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_9: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '63': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' bigToSmall ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_1: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' bigToSmall ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' bigToSmall ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_3: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' bigToSmall ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' bigToSmall ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    },
    '64': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' sscStar ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' oddToEven ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_1: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' oddToEven ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' oddToEven ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: linePurple
                },
                data_3: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' oddToEven ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' oddToEven ',
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineRed
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' +fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_3: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: defaultSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan
                }
            }
        }
    }


}