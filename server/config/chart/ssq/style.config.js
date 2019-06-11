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
 *     ******************  双色球系列枚举  *******************
 *     综合基本走势	                 11
 *     红球三分区	                     12
 *     红球四方区	                     13
 *     红球七分区 	                 14
 *     红球六行六列 	             15	     历史开奖数据
 *     红球七行五列	                 16	     历史开奖数据
 *     红球形态大小走势	         21
 *     红球形态奇偶走势	         22
 *     红球形态质合走势	         23
 *     红球形态除3余数走势	     24
 *     红球形态和值走势 	         25
 *     红球形态跨度走势 	         26
 *     红球形态重号走势	         27
 *     红球形态连号走势	        28
 *     红球形态斜连号走势	    29
 *     红球形态斜跳号走势	    30
 *     蓝球综合走势 	            41
 *     篮球三分区走势	            42	历史开奖数据
 *     篮球四行四列	                43
 */
const chartStyle = require('../chart.style.config');

module.exports = {

     /** 综合基本走势	                 11 */
    '11': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.periodBg,
                 'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                     },
                     'data_1': {
                         'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     }
                 }
             },
             "missBottomStatList": {
                 'period': chartStyle.periodBg,
                 'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
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

        /**  红球三分区	                     12 */
        '12': {
            /**  表格样式配置  */
            "missStatList": {
                'periodNumber': chartStyle.periodNumber,
                'period': chartStyle.periodBg,
                'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                'statData': {
                    'data_0': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                    },
                    'data_1': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.blue,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_2': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
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
                }
            },
            "missBottomStatList": {
                'period': chartStyle.periodBg,
                'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                'statData': {
                    'data_0': {
                        'defalut': chartStyle.defalutBg,
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
                }
            }
        },

        /**     红球四方区	    13 */
        '13': {
            /**  表格样式配置  */
            "missStatList": {
                'periodNumber': chartStyle.periodNumber,
                'period': chartStyle.periodBg,
                'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                'statData': {
                    'data_0': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxRed+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.blue,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_1': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.bgBoxStyle.bgBoxGray
                    },
                    'data_2': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    },
                    'data_3': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.bgBoxStyle.bgBoxGray
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
                    }

                }
            },
            "missBottomStatList": {
                'period': chartStyle.periodBg,
                'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                'statData': {
                    'data_0': {
                        'defalut': chartStyle.defalutBg,
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
                    }
                }
            }
        },


       /**     红球七方区	    14  */
       '14': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_1': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_2': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_3': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_4': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_5': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_6': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray
                },
                'data_7': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_8': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_9': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
           }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.defalutBg,
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
                },
                'data_8': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan
                },
                'data_9': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
     },

     '15':{},
     '16':{},

    /**     红球形态大小走势	         21  */
    '21':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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

    /**     红球形态奇偶走势	         22  */
    '22':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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


    /**     红球形态质合走势	         23  */
    '23':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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

    /**    红球形态除3余数走势	     24  */
    '24':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_5': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_6': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_7': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_8': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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
                'data_8': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },


    /**    红球形态和值走势 	         25  */
    '25':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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

    /**    红球形态跨度走势 	         26  */
    '26':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxRed+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan
                }
            }
        }
    },
    /**    红球形态重号走势	         27  */
    '27':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'heavyNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'heavyNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'heavyNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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

    /**    红球形态连号走势	        28   */
    '28':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'serialNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'serialNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'serialNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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

    /**    红球形态斜连号走势	    29   */
    '29':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'edgeNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'edgeNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'edgeNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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

    /**   红球形态斜跳号走势	    30   */
    '30':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
            'statData': {
                'data_0': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_1': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'edgeTwoNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballRed
                },
                'data_3': {
                    'defalut': chartStyle.defalutBg,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.defalutBg
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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
    /**   蓝球综合走势 	            41   */
    '41':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                }
                ,
                'data_3': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
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
    /**   篮球三分区走势	            42	历史开奖数据  */
    '42':{
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': chartStyle.periodNumber,
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontRed,
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
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_2': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.blue,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                }
                ,
                'data_3': {
                    'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth,
                    'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                    'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                },
                'data_4': {
                    'defalut': chartStyle.fontStyle.fontGray,
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                    'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    'lineColor': chartStyle.lineStyle.red,
                    'lineWidth': chartStyle.lineStyle.lineWidth
                }
            }
        },
        "missBottomStatList": {
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
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

     '43':{}
}