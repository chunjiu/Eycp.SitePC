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
     *     ******************  大乐透枚举  *******************
     *     综合基本走势       11  
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
                colspan: 7,
                isShow:false
            },
            _th3: {
                content: '前区号码走势',
                colspan: 35
            },
            _th4: {
                content: '后区号码走势',
                colspan: 12
            }
        }, {
            _th1: {
                value: '1~35'
            },
            _th2: {
                value: '1~12'
            }
        }
    ]
    ,/**   综合奇偶走势 = 12 */
    "12": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 7,
                isShow: false
            },
            _th3: {
                content: '前区1-7',
                colspan: 7
            },
            _th4: {
                content: '前区8-14',
                colspan: 7
            },
            _th5: {
                content: '前区15-21',
                colspan: 7
            },
            _th6: {
                content: '前区22-28',
                colspan: 7
            },
            _th7: {
                content: '前区29-35',
                colspan: 7
            },
            _th8: {
                content: '后区1-6',
                colspan: 6
            },
            _th9: {
                content: '后区7-12',
                colspan: 6
            },
            _th10: {
                content: '重号数',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '1~7'
            },
            _th2: {
                value: '8~14'
            },
            _th3: {
                value: '15~21'
            },
            _th4: {
                value: '22~28'
            },
            _th5: {
                value: '29~35'
            },
            _th6: {
                value: '1~6'
            },
            _th7: {
                value: '7~12'
            },
            _th8: {
                value: '',
                specValue: true
            }
        }
    ]
   ,/**   综合奇偶走势 = 12 */
    "13": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 7,
                isShow: false
            },
            _th3: {
                content: '前区1-7',
                colspan: 7
            },
            _th4: {
                content: '前区8-14',
                colspan: 7
            },
            _th5: {
                content: '前区15-21',
                colspan: 7
            },
            _th6: {
                content: '前区22-28',
                colspan: 7
            },
            _th7: {
                content: '前区29-35',
                colspan: 7
            },
            _th8: {
                content: '后区1-6',
                colspan: 6
            },
            _th9: {
                content: '后区7-12',
                colspan: 6
            }
        }, {
            _th1: {
                value: '1~7'
            },
            _th2: {
                value: '8~14'
            },
            _th3: {
                value: '15~21'
            },
            _th4: {
                value: '22~28'
            },
            _th5: {
                value: '29~35'
            },
            _th6: {
                value: '1~6'
            },
            _th7: {
                value: '7~12'
            }
        }
    ],
    /**   综合奇偶走势 = 12 */
    "14": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 7,
                isShow: false
            },
            _th3: {
                content: '前区1-7',
                colspan: 7
            },
            _th4: {
                content: '前区8-14',
                colspan: 7
            },
            _th5: {
                content: '前区15-21',
                colspan: 7
            },
            _th6: {
                content: '前区22-28',
                colspan: 7
            },
            _th7: {
                content: '前区29-35',
                colspan: 7
            },
            _th8: {
                content: '后区1-6',
                colspan: 6
            },
            _th9: {
                content: '后区7-12',
                colspan: 6
            }
        }, {
            _th1: {
                value: '1~7'
            },
            _th2: {
                value: '8~14'
            },
            _th3: {
                value: '15~21'
            },
            _th4: {
                value: '22~28'
            },
            _th5: {
                value: '29~35'
            },
            _th6: {
                value: '1~6'
            },
            _th7: {
                value: '7~12'
            }
        }
    ],
    /**   综合奇偶走势 = 12 */
    "15": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 7,
                isShow: false
            },
            _th3: {
                content: '前区1-7',
                colspan: 7
            },
            _th4: {
                content: '前区8-14',
                colspan: 7
            },
            _th5: {
                content: '前区15-21',
                colspan: 7
            },
            _th6: {
                content: '前区22-28',
                colspan: 7
            },
            _th7: {
                content: '前区29-35',
                colspan: 7
            },
            _th8: {
                content: '后区1-6',
                colspan: 6
            },
            _th9: {
                content: '后区7-12',
                colspan: 6
            }
        }, {
            _th1: {
                value: '1~7'
            },
            _th2: {
                value: '8~14'
            },
            _th3: {
                value: '15~21'
            },
            _th4: {
                value: '22~28'
            },
            _th5: {
                value: '29~35'
            },
            _th6: {
                value: '1~6'
            },
            _th7: {
                value: '7~12'
            }
        }
    ],

    /**   前区大小走势 = 21 */
    "21": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '前区号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '第一位',
                colspan: 2
            },
            _th4: {
                content: '第二位',
                colspan: 2
            },
            _th5: {
                content: '第三位',
                colspan: 2
            },
            _th6: {
                content: '第四位',
                colspan: 2
            },
            _th7: {
                content: '第五位',
                colspan: 2
            },
            _th8: {
                content: '大小比例分布',
                colspan: 6
            },
            _th9: {
                content: '大小排位',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '大|小',
                isSwitch: true
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
                value: '大|小',
                isSwitch: true
            },
            _th6: {
                value: '0:5|1:4|2:3|3:2|4:1|5:0',
                isDrawLine: true
            },
            _th7: {
                value: ''
            }
        }
    ],
    /**   前区奇偶走势 = 23 */
    "23": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '前区号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '第一位',
                colspan: 2
            },
            _th4: {
                content: '第二位',
                colspan: 2
            },
            _th5: {
                content: '第三位',
                colspan: 2
            },
            _th6: {
                content: '第四位',
                colspan: 2
            },
            _th7: {
                content: '第五位',
                colspan: 2
            },
            _th8: {
                content: '奇偶比例分布',
                colspan: 6
            },
            _th9: {
                content: '奇偶排位',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '奇|偶',
                isSwitch: true
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
                value: '奇|偶',
                isSwitch: true
            },
            _th6: {
                value: '0:5|1:4|2:3|3:2|4:1|5:0',
                isDrawLine: true
            },
            _th7: {
                value: ''
            }
        }
    ],
    /**   前区质合走势 = 24 */
    "24": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '前区号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '第一位',
                colspan: 2
            },
            _th4: {
                content: '第二位',
                colspan: 2
            },
            _th5: {
                content: '第三位',
                colspan: 2
            },
            _th6: {
                content: '第四位',
                colspan: 2
            },
            _th7: {
                content: '第五位',
                colspan: 2
            },
            _th8: {
                content: '质合比例分布',
                colspan: 6
            },
            _th9: {
                content: '质合排位',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '质|合',
                isSwitch: true
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
                value: '质|合',
                isSwitch: true
            },
            _th6: {
                value: '0:5|1:4|2:3|3:2|4:1|5:0',
                isDrawLine: true
            },
            _th7: {
                value: ''
            }
        }
    ],
    /**   前区和值走势 = 22 */
    "22": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '前区号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '和值分布',
                colspan: 11
            },
            _th4: {
                content: '和尾',
                colspan: 10
            }
        }, {
            _th1: {
                value: '21-49|50-59|60-69|70-79|80-89|90-99|100-109|110-119|120-129|130-139|140-165',
                isDrawLine: true,
                isAllAwardNumber: true
            },
            _th2: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],
    /**   前区除3余数走势 = 25 */
    "25": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '前区号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '第一位',
                colspan: 3
            },
            _th4: {
                content: '第二位',
                colspan: 3
            },
            _th5: {
                content: '第三位',
                colspan: 3
            },
            _th6: {
                content: '第四位',
                colspan: 3
            },
            _th7: {
                content: '第五位',
                colspan: 3
            },
            _th8: {
                content: '余0个数',
                colspan: 6
            },
            _th9: {
                content: '余1个数',
                colspan: 6
            },
            _th10: {
                content: '余2个数',
                colspan: 6
            }
        }, {
            _th1: {
                value: '0~2',
                isDrawLine: true
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
                value: '0~2',
                isDrawLine: true
            },
            _th6: {
                value: '0~5',
                isDrawLine: true
            },
            _th7: {
                value: '0~5',
                isDrawLine: true
            },
            _th8: {
                value: '0~5',
                isDrawLine: true
            }
        }
    ],
    /**   前区跨度走势 = 26 */
    "26": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '前区号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '跨度走势',
                colspan: 31
            }
        }, {
            _th1: {
                value: '4~34',
                isDrawLine: true
            }
        }
    ],
    /**   后区基本走势 = 41 */
    "41": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '后区号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '后区号码走势',
                colspan: 12
            },
            _th4: {
                content: '跨度走势',
                colspan: 11
            },
            _th5: {
                content: '大小形态',
                colspan: 3
            },
            _th6: {
                content: '奇偶形态',
                colspan: 3
            },
            _th7: {
                content: '质合形态',
                colspan: 3
            }
        }, {
            _th1: {
                value: '1~12'
            },
            _th2: {
                value: '1~11',
                isDrawLine: true
            },
            _th3: {
                value: '大大|大小|小小',
                isDrawLine: true
            },
            _th4: {
                value: '奇奇|奇偶|偶偶',
                isDrawLine: true
            },
            _th5: {
                value: '质质|质合|合合',
                isDrawLine: true
            }
        }
    ],
    /**   后区和值走势 = 42 */
    "42": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '后区号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '和值走势',
                colspan: 21
            },
            _th4: {
                content: '和尾走势',
                colspan: 10
            }
        }, {
            _th1: {
                value: '3~23',
                isDrawLine: true
            },
            _th2: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],
    /** 红球六行六列走势 = 51 */
    '51': {},
    /** 红球七行五列走势 = 52 */
    '52': {}
}