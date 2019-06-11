/***********************************************************************************
 *
 *                           该配置用于配置画线图表的结构以及样式
 *
 ***********************************************************************************/
'use strict';

module.exports = {

    /**
     *    ===========================   表格头格式源  ===========================
     *
     *      格式源是一个数组对象，每一个对象代表一行，每个_th代表一列；
     *
     *      1. _th 必须从1开始， 例如_th1, _th2, ........
     *      2. _th 有几个属性，
     *         第一个属性为 content，这个是需要填入th中内容，可以是字符串，也可以是html格式;
     *         第二个属性为 rowspan，代表一个th占多少行，如果rowspan为2就是一个th占2行
     *         第三个属性为 colspan， 代表一个th占多少列，如果rowspan为2就是一个th占2列
     *         第四个属性为 isShow,   表示是否需要隐藏这个th,  默认不填的话为true;
     *
     *         第五个属性 value,  注意：通常这个属性是出现在数组的第二个对象或者第三个对象，因为这个value值是循环出现开奖号码的
     *        （参数value有2种格式： 第一种格式  value：''1~12" , 那么它就会自动循环出 13个th ,   第二种格式是："奇数 | 偶数 | 大 | 小" 那么它就会把这个字符串切割为4份的th）;
     *
     *         第六个属性isShowZero ， 这个属性一般配合第五个属性value一起使用，有些地方需要开奖数字显示0，那么就加上这个属性;
     *         (注意：该属性通常只出现在第二或者第三个对象中);
     *
     *         第七个属性isDrawLine ，该属性表示该区块列是否需要画线，填写false则不会画线
     *         (注意：该属性通常只出现在第二或者第三个对象中);
     *
     *         例子:
     *            config : [{
                         _th1: {
                             content: '期号',
                             rowspan: 2
                         },
                         _th2: {
                             content: '开奖号码',
                             rowspan: 2,
                             colspan: 3
                         },
                         _th3: {
                             content: '开奖号码分布图',
                             colspan: 6
                         },
                         _th4: {
                             content: '奇数个数<i class="font-blue evenButton" style="cursor: pointer;">(偶数)</i>',
                             colspan: 4
                         },
                         _th5: {
                             content: '偶数个数<i class="font-blue  oddButton"  style="cursor: pointer;">(奇数)</i>',
                             colspan: 4,
                             isShow: false
                         },
                         _th6: {
                             content: '大数个数<i class="font-blue  decimalButton"  style="cursor: pointer;">(小数)</i>',
                             colspan: 4
                         },
                         _th7: {
                             content: '小数个数<i class="font-blue  largeButton"  style="cursor: pointer;">(大数)</i>',
                             colspan: 4,
                             isShow: false
                         },
                         _th8: {
                             content: '和值',
                             colspan: 16
                         }
                     }, {
                        _th1: {
                            value: '1~6'
                        },
                        _th2: {
                            value: '0~3',
                            isDrawLine: true
                        },
                        _th3: {
                            value: '0~3',
                            isDrawLine: true,
                            isShow: false
                        },
                        _th4: {
                            value: '0~3',
                            isDrawLine: true
                        },
                        _th5: {
                            value: '0~3',
                            isDrawLine: true,
                            isShow: false
                        },
                        _th6: {
                            value: '3~18',
                            isDrawLine: true
                        }
                }];
     *
     *    ===================================================================
     */

    /**
     *     ******************  福彩3d/排列3 枚举  *******************
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

    /**   定位个位走势 = 1 */
    "1": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '跨度',
                rowspan: 2,
                specValue:true
            },
            _th5: {
                content: '个位走势',
                colspan: 10
            },
            _th6: {
                content: '奇偶',
                colspan: 2
            },
            _th7: {
                content: '大小',
                colspan: 2
            },
            _th8: {
                content: '质合',
                colspan: 2
            },
            _th9: {
                content: '012路',
                colspan: 3
            },
            _th10: {
                content: '升平降',
                colspan: 3
            }
        }, {
            _th1: {
                value: ''
            },
            _th2: {
                value: '',
                noZero:true,
                specValue:true
            },
            _th3: {
                value: '0~9',
                isDrawLine: true
            },
            _th4: {
                value: '奇|偶',
                isSwitch:true
            },
            _th5: {
                value: '大|小',
                isSwitch:true
            },
            _th6: {
                value: '质|合',
                isSwitch:true
            },
            _th7: {
                value: '0~2',
                isDrawLine: true
            },
            _th8: {
                value: '升|平|降',
                isDrawLine: true
            }
        }
    ],
    /**   定位十位走势 = 1 */
    "2": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '和值',
                rowspan: 2,
                specValue:true
            },
            _th4: {
                content: '跨度',
                rowspan: 2
            },
            _th5: {
                content: '十位走势',
                colspan: 10
            },
            _th6: {
                content: '奇偶',
                colspan: 2
            },
            _th7: {
                content: '大小',
                colspan: 2
            },
            _th8: {
                content: '质合',
                colspan: 2
            },
            _th9: {
                content: '012路',
                colspan: 3
            },
            _th10: {
                content: '升平降',
                colspan: 3
            }
        }, {
            _th1: {
                value: ''
            },
            _th2: {
                value: '',
                noZero:true,
                specValue:true
            },
            _th3: {
                value: '0~9',
                isDrawLine: true
            },
            _th4: {
                value: '奇|偶',
                isSwitch:true
            },
            _th5: {
                value: '大|小',
                isSwitch:true
            },
            _th6: {
                value: '质|合',
                isSwitch:true
            },
            _th7: {
                value: '0~2',
                isDrawLine: true
            },
            _th8: {
                value: '升|平|降',
                isDrawLine: true
            }
        }
    ],
    /**   定位百位走势 = 1 */
    "3": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '跨度',
                rowspan: 2,
                specValue:true
            },
            _th5: {
                content: '百位走势',
                colspan: 10
            },
            _th6: {
                content: '奇偶',
                colspan: 2
            },
            _th7: {
                content: '大小',
                colspan: 2
            },
            _th8: {
                content: '质合',
                colspan: 2
            },
            _th9: {
                content: '012路',
                colspan: 3
            },
            _th10: {
                content: '升平降',
                colspan: 3
            }
        }, {
            _th1: {
                value: ''
            },
            _th2: {
                value: '',
                noZero:true,
                specValue:true
            },
            _th3: {
                value: '0~9',
                isDrawLine: true
            },
            _th4: {
                value: '奇|偶',
                isSwitch:true
            },
            _th5: {
                value: '大|小',
                isSwitch:true
            },
            _th6: {
                value: '质|合',
                isSwitch:true
            },
            _th7: {
                value: '0~2',
                isDrawLine: true
            },
            _th8: {
                value: '升|平|降',
                isDrawLine: true
            }
        }
    ],
    /**   综合基本走势 = 11 */
    "11": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '号码走势',
                colspan: 10
            },
            _th4: {
                content: '百位走势',
                colspan: 10
            },
            _th5: {
                content: '十位走势',
                colspan: 10
            },
            _th6: {
                content: '个位走势',
                colspan: 10
            },
            _th7: {
                content: '和值',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '0~9'
            },
            _th2: {
                value: '0~9',
                isDrawLine: true
            },
            _th3: {
                value: '0~9',
                isDrawLine: true
            },
            _th4: {
                value: '0~9',
                isDrawLine: true
            },
            _th5: {
                value: ''
            }
        }
    ],
    /**   综合奇偶走势 = 12 */
    "12": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '号码走势',
                colspan: 10
            },
            _th4: {
                content: '百位',
                colspan: 2
            },
            _th5: {
                content: '十位',
                colspan: 2
            },
            _th6: {
                content: '个位',
                colspan: 2
            },
            _th7: {
                content: '奇偶比',
                colspan: 4
            },
            _th8: {
                content: '奇偶形态',
                colspan: 8
            },
            _th9: {
                content: '和值',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '0~9'
            },
            _th2: {
                value: '奇|偶',
                isSwitch: true
            },
            _th3: {
                value: '奇|偶',
                isSwitch: true
            },
            _th4: {
                value: '奇|偶',
                isSwitch: true
            },
            _th5: {
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            },
             _th6: {
                value: '奇奇奇|奇奇偶|奇偶奇|奇偶偶|偶奇奇|偶奇偶|偶偶奇|偶偶偶',
                isDrawLine: true
            },
            _th7: {
                value: ''
            }
        }
    ],
    /**   综合大小走势 = 13 */
    "13": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '号码走势',
                colspan: 10
            },
            _th4: {
                content: '百位',
                colspan: 2
            },
            _th5: {
                content: '十位',
                colspan: 2
            },
            _th6: {
                content: '个位',
                colspan: 2
            },
            _th7: {
                content: '大小比',
                colspan: 4
            },
            _th8: {
                content: '大小形态',
                colspan: 8
            },
            _th9: {
                content: '和值',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '0~9'
            },
            _th2: {
                value: '大|小',
                isSwitch: true
            },
            _th3: {
                value: '大|小',
                isSwitch: true
            },
            _th4: {
                value: '大|小',
                isSwitch: true
            },
            _th5: {
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            },
             _th6: {
                value: '大大大|大大小|大小大|大小小|小大大|小大小|小小大|小小小',
                isDrawLine: true
            },
            _th7: {
                value: ''
            }
        }
    ],
    /**   综合升平降走势 = 14 */
    "14": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '百位',
                colspan: 3
            },
            _th4: {
                content: '十位',
                colspan: 3
            },
            _th5: {
                content: '个位',
                colspan: 3
            },
            _th6: {
                content: '和数值',
                colspan: 3
            },
            _th7: {
                content: '和尾值',
                colspan: 3
            },
            _th8: {
                content: '跨度值',
                colspan: 3
            },
            _th9: {
                content: '平均值',
                colspan: 3
            }
        }, {
            _th1: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th2: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th3: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th4: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th5: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th6: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th7: {
                value: '升|平|降',
                isDrawLine: true
            }
        }
    ],
    /**   综合012路走势 = 15 */
    "15": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '012路号码分布',
                colspan: 10
            },
            _th4: {
                content: '百位',
                colspan: 3
            },
            _th5: {
                content: '十位',
                colspan: 3
            },
            _th6: {
                content: '个位',
                colspan: 3
            },
            _th7: {
                content: '0路个数',
                colspan: 4
            },
            _th8: {
                content: '1路个数',
                colspan: 4
            },
            _th9: {
                content: '2路个数',
                colspan: 4
            }
        }, {
            _th1: {
                value: '0|3|6|9|1|4|7|2|5|8'
            },
            _th2: {
                value: '0~2',
                isDrawLine: true
            },
            _th3: {
                value: '0~2',
                isDrawLine: true
            },
            _th4: {
                value: '0~2',
                isDrawLine: true
            },
            _th5: {
                value: '0~3',
                isDrawLine: true
            },
            _th6: {
                value: '0~3',
                isDrawLine: true
            },
            _th7: {
                value: '0~3',
                isDrawLine: true
            }
        }
    ],
    /**   综合号码个数走势 = 16 */
    "16": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '跨度',
                rowspan: 2
            },
            _th5: {
                content: '奇数个数',
                colspan: 4
            },
            _th6: {
                content: '大数个数',
                colspan: 4
            },
            _th7: {
                content: '质数个数',
                colspan: 4
            },
            _th8: {
                content: '0路个数',
                colspan: 4
            },
            _th9: {
                content: '1路个数',
                colspan: 4
            },
            _th10: {
                content: '2路个数',
                colspan: 4
            }
        }, {
            _th1: {
                value: ''
            },
            _th2: {
                value: ''
            },
            _th3: {
                value: '0~3',
                isDrawLine: true
            },
            _th4: {
                value: '0~3',
                isDrawLine: true
            },
            _th5: {
                value: '0~3',
                isDrawLine: true
            },
            _th6: {
                value: '0~3',
                isDrawLine: true
            },
            _th7: {
                value: '0~3',
                isDrawLine: true
            },
            _th8: {
                value: '0~3',
                isDrawLine: true
            }
        }
    ],
    /**   综合质合走势 = 17 */
    "17": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '号码走势',
                colspan: 10
            },
            _th4: {
                content: '百位',
                colspan: 2
            },
            _th5: {
                content: '十位',
                colspan: 2
            },
            _th6: {
                content: '个位',
                colspan: 2
            },
            _th7: {
                content: '质合比',
                colspan: 4
            },
            _th8: {
                content: '质合形态',
                colspan: 8
            }
        }, {
            _th1: {
                value: '1|2|3|5|7|0|4|6|8|9'
            },
            _th2: {
                value: '质|合',
                isSwitch: true
            },
            _th3: {
                value: '质|合',
                isSwitch: true
            },
            _th4: {
                value: '质|合',
                isSwitch: true
            },
            _th5: {
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            },
            _th6: {
                value: '质质质|质质合|质合质|质合合|合质质|合质合|合合质|合合合',
                isDrawLine: true
            }
        }
    ],
    /**   综合跨度走势 = 18 */
    "18": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '跨度值',
                colspan: 10
            },
            _th5: {
                content: '最大号码',
                colspan: 10
            },
            _th6: {
                content: '最小号码',
                colspan: 10
            }
        }, {
            _th1: {
                value: ''
            },
            _th2: {
                value: '0~9',
                isDrawLine: true
            },
            _th3: {
                value: '0~9',
                isDrawLine: true
            },
            _th4: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],
    /**   综合和值走势 = 19 */
    "19": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '跨度',
                rowspan: 2
            },
            _th5: {
                content: '和值走势',
                colspan: 15
            },
            _th6: {
                content: '和尾走势',
                colspan: 10
            }
        }, {
            _th1: {
                value: ''
            },
            _th2: {
                value: '',
                specValue:true
            },
            _th3: {
                value: '0+|5+|8+|10|11|12|13|14|15|16|17|18|19+|21+|24+',
                isDrawLine: true,
                isAllAwardNumber: true
            },
            _th4: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],
    /**   综合尾数类型走势 = 20 */
    "20": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero:true
            },
            _th3: {
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '跨度',
                rowspan: 2
            },
            _th5: {
                content: '和尾走势',
                colspan: 10
            },
            _th6: {
                content: '奇偶',
                colspan: 2
            },
            _th7: {
                content: '大小',
                colspan: 2
            },
            _th8: {
                content: '质合',
                colspan: 2
            },
            _th9: {
                content: '012路',
                colspan: 3
            },
            _th10: {
                content: '升平降',
                colspan: 3
            }
        }, {
            _th1: {
                value: ''
            },
            _th2: {
                value: '',
                specValue:true
            },
            _th3: {
                value: '0~9',
                isDrawLine: true
            },
            _th4: {
                value: '奇|偶',
                isSwitch: true
            },
            _th5: {
                value: '大|小',
                isSwitch: true
            },
            _th6: {
                value: '质|合',
                isSwitch: true
            },
            _th7: {
                value: '0~2',
                isDrawLine: true
            },
            _th8: {
                value: '升|平|降',
                isDrawLine: true
            }
        }
    ]
}