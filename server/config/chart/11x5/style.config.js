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
     *                     switchNumber(N n>=1)                 // 切换号码样式，如果加上且配合thead.config的isSwitch一起使用，则可以在同一个th中自定义要使用的切换样式，会覆盖awardNumber样式
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
 *     ******************  11选5系列枚举  *******************
        基本分布走势 	1
        基本大小走势	2
        基本奇偶走势	3
        基本质合走势	4
        基本跨度走势	5
        基本和值走势	6
        基本平均值走势	7
        基本升平降走势	8
        基本012路走势	9
        基本重号走势	10
        基本连号走势	11
        基本AC走势	12
            
        前二组选走势	30
        前二直选走势	31
        前二大小走势	32
        前二奇偶走势	33
        前二质合走势	34
        前二跨度走势	35
        前二和值走势	36
        前二平均值走势	37
        前二升平降走势	38
        前二012路走势	39
        前二重号走势	40
            
        前三组选走势	61
        前三直选走势	62
        前三大小走势	63
        前三奇偶走势	64
        前三质合走势	65
        前三跨度走势	66
        前三和值走势	67
        前三平均值走势	68
        前三升平降走势	69
        前三012路走势	70
        前三重号走势	71
            
        定位第一位走势	91
        定位第二位走势	92
        定位第三位走势	93
        定位第四位走势	94
        定位第五位走势	95

 */
const chartStyle = require('../chart.style.config');
let periodNumber = chartStyle.periodNumber,
    periodBg = chartStyle.periodBg,
    fontBold = chartStyle.fontStyle.fontBold,
    fontBlue = chartStyle.fontStyle.fontBlue,
    fontGray = chartStyle.fontStyle.fontGray,
    ballBlue = chartStyle.ballStyle.ballBlue,
    ballRed = chartStyle.ballStyle.ballRed,
    ballPurple = chartStyle.ballStyle.ballPurple,
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
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                },
                data_1: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple+ ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_5: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_6: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
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
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_3: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_5: {
                    defalut: chartStyle.defalutBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_6: {
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
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_5: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_6: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,

                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_6: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                }
            }
        }
    },
    '3': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_5: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_6: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '4': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                data_5: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.bgBoxStyle.bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_6: {
                    defalut: chartStyle.defalutBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_4: {
                    defalut:'',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_6: {
                    defalut:'',
                    defalutSpan: chartStyle.defalutSpan,
                }
            }
        }
    },
    '5': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' +chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' +chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                }
            }
        }
    },
    '6': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '7': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold
                },
                data_1: {
                    defalut: defaultBg +' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineWidth: lineWidth,
                    lineColor: lineBlue
                },
                data_3: {
                    defalut: defaultBg +' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '8': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold
                },
                data_5: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_6: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_7: {
                    defalut:  defaultBg + ' ' + fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_8: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_8: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '9': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold  + ' ' + defaultBg
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  chartStyle.fontStyle.fontRed + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber2:  chartStyle.fontStyle.fontBlue + ' ' + chartStyle.fontStyle.fontBold,
                    switchNumber3:  chartStyle.fontStyle.fontGreen + ' ' + chartStyle.fontStyle.fontBold
                },
                data_5: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_6: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_7: {
                    defalut:  defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_8: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + bgBoxRed,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_7: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_8: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '10' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontBold,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: defaultBg
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_5: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_6: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '11' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: bgBoxRed + ' specialBall ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontBold,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + defaultBg
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontBold,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontBold,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + defaultBg
                },
                data_4: {
                    defalut: chartStyle.fontStyle.fontBold,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                },
                data_5: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontBold,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + defaultBg
                },
                data_6: {
                    defalut: chartStyle.fontStyle.fontBold,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold,
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_6: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '12' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: ''
                },
                data_1: {
                    defalut: defaultBg + ' ' +chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' +chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_5: {
                    defalut: defaultBg + ' ' +chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_4: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_5: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '30' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_1: {
                    defalut:  defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut:  defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '31' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
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
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '32': {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
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
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '33' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
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
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '34' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
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
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '35' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
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
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '36' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
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
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '37' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue
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
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '38' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
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
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '39' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
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
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '40' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontBold,
                    defalutSpan: defaultSpan,
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: defaultBg
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
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
                }
            }
        }
    },
    '61' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray
                },
                data_1: {
                    defalut:  defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut:  defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '62' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
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
                    awardNumber: ballRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '63' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: ballBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '64' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: ballBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '65' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: ballBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_4: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '66' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '67' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '68' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + ballBlue
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '69' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue+ ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '70' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                },
                data_2: {
                    defalut: fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxRed + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineRed,
                    lineWidth: lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: bgBoxBlue + ' ' + fontBold,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lineColor: lineBlue,
                    lineWidth: lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
    '71' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: periodNumber,
            period: periodBg,
            periodSpan: defaultSpan + ' differColor ' + fontBold + ' ' + fontBlue,
            statData: {
                data_0: {
                    defalut: fontBold,
                    defalutSpan: defaultSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: defaultSpan,
                    awardNumber: defaultBg
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
                    awardNumber: fontBold + ' ' + bgBoxBlue,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    switchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                },
                data_5: {
                    defalut: defaultBg + ' ' + fontGray,
                    defalutSpan: defaultSpan,
                    awardNumber: fontBold + ' ' + bgBoxRed,
                    omissionDelamination: bgBoxPurple + ' ' + bgBoxGray,
                    lswitchNumber1:  bgBoxRed + ' ' + fontBold,
                    switchNumber2:  bgBoxBlue + ' ' + fontBold
                }
            }
        },
        "missBottomStatList": {
            period: periodBg,
            periodSpan: defaultSpan + ' ' + fontBold + ' ' + fontBlue,
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
                }
            }
        }
    },
    '91' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '92' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '93' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '94' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '95' : {
        /**  表格样式配置  */
        "missStatList": {
            periodNumber: chartStyle.periodNumber,
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' differColor ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.fontStyle.fontBold + ' ' + chartStyle.ballStyle.ballBlue,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_1: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_2: {
                    defalut: chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.blue,
                    lineWidth: chartStyle.lineStyle.lineWidth
                },
                data_3: {
                    defalut: defaultBg + ' ' + chartStyle.fontStyle.fontGray,
                    defalutSpan: chartStyle.defalutSpan,
                    awardNumber: chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    omissionDelamination: chartStyle.bgBoxStyle.bgBoxPurple + ' ' + chartStyle.bgBoxStyle.bgBoxGray,
                    lineColor: chartStyle.lineStyle.red,
                    lineWidth: chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            period: chartStyle.periodBg,
            periodSpan: chartStyle.defalutSpan + ' ' + chartStyle.fontStyle.fontBold + ' ' + chartStyle.fontStyle.fontBlue,
            statData: {
                data_0: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_1: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                },
                data_2: {
                    defalut: '',
                    defalutSpan: chartStyle.defalutSpan
                },
                data_3: {
                    defalut: defaultBg,
                    defalutSpan: chartStyle.defalutSpan
                }
            }
        }
    },
    '100':{},
    '101':{},
    '102':{},
    '103':{},
    '104':{},
    '105':{},
    '106':{},
    '107':{},
    '108':{},
    '109':{},
    '110':{},
    '111':{},
    '112':{},
    '113':{},
    '114':{},
    '115':{},
    '501':{},
    '502':{},
    '503':{},
    '504':{},
    '505':{},
    '506':{},
    '507':{},
    '508':{},
    '509':{},
    '510':{},
    '511':{}


}