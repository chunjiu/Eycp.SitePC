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
 *     基本基本走势 = 1,	         1
 *     基本和值走势 = 2,	         2
 *     基本形态走势 = 3,	         3
 *     基本组合走势 = 4,	         4
 *     基本012路走势 = 5,	     5
 *     分布号码统计	                15
 *     分布组合统计	                16	     按日统计数据
 *     分布和值统计	                17	     按日统计数据
 *     分布形态跨度统计	        18	     按日统计数据
 */
const chartStyle = require('../chart.style.config')
module.exports = {

         /** 基本基本走势 = 1 */
         '1': {
             /**  表格样式配置  */
             "missStatList": {
                 'periodNumber': chartStyle.periodNumber,
                 'period': chartStyle.periodBg,
                 'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                 'statData': {
                     'data_0': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                     },
                     'data_1': {
                         'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_2': {
                         'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.red,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_3': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.fontStyle.fontBold,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_4': {
                         'defalut': chartStyle.fontStyle.fontGray,
                         'defalutSpan': chartStyle.defalutSpan,
                         'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.fontStyle.fontBold,
                         'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                         'lineColor': chartStyle.lineStyle.blue,
                         'lineWidth': chartStyle.lineStyle.lineWidth
                     },
                     'data_5': {
                         'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
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
                         'defalutSpan': chartStyle.defalutSpan,
                     },
                     'data_2': {
                         'defalut': chartStyle.defalutBg,
                         'defalutSpan': chartStyle.defalutSpan,
                     },
                     'data_3': {
                         'defalut': '',
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
                 }
             }
         },

        /**   基本和值走势 = 2	 */
        '2': {
            /**  表格样式配置  */
            "missStatList": {
                'periodNumber': chartStyle.periodNumber,
                'period': chartStyle.periodBg,
                'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                'statData': {
                    'data_0': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxBlue,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.blue,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_1': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'switchNumber1':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                        'switchNumber2':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                        'switchNumber3':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                        'switchNumber4':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold,
                        'switchNumber5':  chartStyle.bgBoxStyle.bgBoxRed + ' ' + chartStyle.fontStyle.fontBold,
                        'switchNumber6':  chartStyle.bgBoxStyle.bgBoxBlue + ' ' + chartStyle.fontStyle.fontBold
                    },
                    'data_2': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.bgBoxStyle.bgBoxRed+' '+chartStyle.fontStyle.fontBold,
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
                        'defalutSpan': chartStyle.defalutSpan,
                    },
                    'data_2': {
                        'defalut': '',
                        'defalutSpan': chartStyle.defalutSpan,
                    }
                }
            }
        },


        /**  基本形态走势 = 3	 */
        '3': {
            /**  表格样式配置  */
            "missStatList": {
                'periodNumber': chartStyle.periodNumber,
                'period': chartStyle.periodBg,
                'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                'statData': {
                    'data_0': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    },
                    'data_1': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.blue,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_2': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.fontStyle.fontBold,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.blue,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_3': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
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
                        'defalutSpan': chartStyle.defalutSpan,
                    },
                    'data_2': {
                        'defalut': '',
                        'defalutSpan': chartStyle.defalutSpan,
                    },
                    'data_3': {
                        'defalut': chartStyle.defalutBg,
                        'defalutSpan': chartStyle.defalutSpan,
                    }
                }
            }
        },

        /**  基本组合走势 = 4	 */
        '4': {
            /**  表格样式配置  */
            "missStatList": {
                'periodNumber': chartStyle.periodNumber,
                'period': chartStyle.periodBg,
                'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                'statData': {
                    'data_0': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    },
                    'data_1': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.blue,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_2': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.fontStyle.fontBold,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.blue,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_3': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.red,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_4': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.red,
                        'lineWidth': chartStyle.lineStyle.lineWidth
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
                        'defalut': chartStyle.defalutBg,
                        'defalutSpan': chartStyle.defalutSpan,
                    },
                    'data_5': {
                        'defalut': '',
                        'defalutSpan': chartStyle.defalutSpan,
                    },
                }
            }
        },

        /** 基本012路走势 = 5 */
        '5': {
            /**  表格样式配置  */
            "missStatList": {
                'periodNumber': chartStyle.periodNumber,
                'period': chartStyle.periodBg,
                'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
                'statData': {
                    'data_0': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.ballStyle.ballBlue,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                    },
                    'data_1': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.red,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_2': {
                        'defalut': chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.fontStyle.fontBold,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.blue,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_3': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.fontStyle.fontBold+' '+chartStyle.bgBoxStyle.bgBoxRed,
                        'omissionDelamination': chartStyle.bgBoxStyle.bgBoxPurple+' '+chartStyle.bgBoxStyle.bgBoxGray,
                        'lineColor': chartStyle.lineStyle.red,
                        'lineWidth': chartStyle.lineStyle.lineWidth
                    },
                    'data_4': {
                        'defalut': '',
                        'defalutSpan': chartStyle.defalutSpan,
                        'awardNumber': chartStyle.bgBoxStyle.bgBoxBlue+' '+chartStyle.fontStyle.fontBold
                    },
                    'data_5': {
                        'defalut': chartStyle.defalutBg+' '+chartStyle.fontStyle.fontGray,
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
                }
            }
        },


    /** 分布号码统计 = 16 */
    '16': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': '',
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontGray
                },
                'data_1': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontGray
                }
            }
        }
    },

    /** 分布和值统计 = 17 */
    '17': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': '',
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontGray
                },
                'data_1': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontGray
                }
            }
        }
    },

    /** 形态跨度统计 = 18 */
    '18': {
        /**  表格样式配置  */
        "missStatList": {
            'periodNumber': '',
            'period': chartStyle.periodBg,
            'periodSpan': chartStyle.defalutSpan+' '+chartStyle.fontStyle.fontBold+' '+chartStyle.fontStyle.fontBlue,
            'statData': {
                'data_0': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontGray
                },
                'data_1': {
                    'defalut': '',
                    'defalutSpan': chartStyle.defalutSpan,
                    'awardNumber': chartStyle.fontStyle.fontGray
                }
            }
        }
    },
}