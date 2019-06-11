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
     *          isSwitch  如果同一个th中需要有多个颜色则需要开启，比如大小，大要显示红色，小要显示蓝色，然后在style.config，中设置switchNumber(n n>=1)样式
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
     *     ******************  11选5系列枚举  *******************
     *      基本分布走势 	1
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


    "1": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '开奖号码分布图',
                colspan: 11,
                width: 300
            },
            _th4: {
                content: '奇数个数<i class="font-blue evenButton" style="cursor: pointer;">(偶数)</i>',
                colspan: 6,
                width: 170
            },
            _th5: {
                content: '偶数个数<i class="font-blue  oddButton"  style="cursor: pointer;">(奇数)</i>',
                colspan: 6,
                isShow: false,
                width: 170
            },
            _th6: {
                content: '大数个数<i class="font-blue  decimalButton"  style="cursor: pointer;">(小数)</i>',
                colspan: 6,
                width: 170
            },
            _th7: {
                content: '小数个数<i class="font-blue  largeButton"  style="cursor: pointer;">(大数)</i>',
                colspan: 6,
                isShow: false,
                width: 170
            },
            _th8: {
                content: '质数个数<i class="font-blue  primeButton"  style="cursor: pointer;">(合数)</i>',
                colspan: 6,
                width: 170
            },
            _th9: {
                content: '合数个数<i class="font-blue  compositeButton"  style="cursor: pointer;">(质数)</i>',
                colspan: 6,
                isShow: false,
                width: 170
            },
        }, {
            _th1: {
                value: '1~11'
            },
            _th2: {
                value: '0~5',
                isDrawLine: true
            },
            _th3: {
                value: '0~5',
                isDrawLine: true,
                isShow: false
            },
            _th4: {
                value: '0~5',
                isDrawLine: true
            },
            _th5: {
                value: '0~5',
                isDrawLine: true,
                isShow: false
            },
            _th6: {
                value: '0~5',
                isDrawLine: true
            },
            _th7: {
                value: '0~5',
                isDrawLine: true,
                isShow: false
            }
        }
    ],
    "2": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '第一位',
                colspan: 2,
                isSwitch: true
            },
            _th4: {
                content: '第二位',
                colspan: 2,
                isSwitch: true
            },
            _th5: {
                content: '第三位',
                colspan: 2,
                isSwitch: true
            },
            _th6: {
                content: '第四位',
                colspan: 2,
                isSwitch: true
            },
            _th7: {
                content: '第五位',
                colspan: 2,
                isSwitch: true
            },
            _th8: {
                content: '大小比例走势',
                colspan: 6
            },
            _th9: {
                content: '大小形态',
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
            }
        }
    ],
    "3": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '第一位',
                colspan: 2,
                isSwitch: true
            },
            _th4: {
                content: '第二位',
                colspan: 2,
                isSwitch: true
            },
            _th5: {
                content: '第三位',
                colspan: 2,
                isSwitch: true
            },
            _th6: {
                content: '第四位',
                colspan: 2,
                isSwitch: true
            },
            _th7: {
                content: '第五位',
                colspan: 2,
                isSwitch: true
            },
            _th8: {
                content: '奇偶比例走势',
                colspan: 6
            },
            _th9: {
                content: '奇偶形态',
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
            }
        }
    ],
    "4": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '第一位',
                colspan: 2,
                isSwitch: true
            },
            _th4: {
                content: '第二位',
                colspan: 2,
                isSwitch: true
            },
            _th5: {
                content: '第三位',
                colspan: 2,
                isSwitch: true
            },
            _th6: {
                content: '第四位',
                colspan: 2,
                isSwitch: true
            },
            _th7: {
                content: '第五位',
                colspan: 2,
                isSwitch: true
            },
            _th8: {
                content: '质合比例走势',
                colspan: 6
            },
            _th9: {
                content: '质合形态',
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
            }
        }
    ],
    "5": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '跨度值分布',
                colspan: 7
            },
            _th4: {
                content: '跨度值升平降',
                colspan: 3
            },
            _th5: {
                content: '跨度值振幅',
                colspan: 7
            },
            _th6: {
                content: '除3余数',
                colspan: 3
            }
        }, {
            _th1: {
                value: '4~10',
                isDrawLine: true
            },
            _th2: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th3: {
                value: '0~6',
                isDrawLine: true
            },
            _th4: {
                value: '0~2',
                isDrawLine: true
            }
        }
    ],
    "6": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '和值分布',
                colspan: 31
            }
        }, {
            _th1: {
                value: '15~45',
                isDrawLine: true
            }
        }
    ],
    "7": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '平均值分布',
                colspan: 7
            },
            _th5: {
                content: '平均值升平降',
                colspan: 3
            },
            _th6: {
                content: '平均值振幅',
                colspan: 7
            }
        }, {
            _th1: {
                value: ''
            },
            _th2: {
                value: '3~9',
                isDrawLine: true
            },
            _th3: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th4: {
                value: '0~6',
                isDrawLine: true
            }
        }
    ],
    "8": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
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
                content: '升平降形态',
                rowspan: 2
            },
            _th9: {
                content: '升个数',
                colspan: 6
            },
            _th10: {
                content: '平个数',
                colspan: 4
            },
            _th11: {
                content: '降个数',
                colspan: 6
            }
        }, {
            _th1: {
                value: '升|平|降',
                isSwitch: true
            },
            _th2: {
                value: '升|平|降',
                isSwitch: true
            },
            _th3: {
                value: '升|平|降',
                isSwitch: true
            },
            _th4: {
                value: '升|平|降',
                isSwitch: true
            },
            _th5: {
                value: '升|平|降',
                isSwitch: true
            },
            _th6: {
                value: ''
            },
            _th7: {
                value: '0~5',
                isDrawLine: true
            },
            _th8: {
                value: '0~3',
                isDrawLine: true
            },
            _th9: {
                value: '0~5',
                isDrawLine: true
            }
        }
    ],
    "9": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
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
                content: '除3余数',
                rowspan: 2
            },
            _th9: {
                content: '0路个数',
                colspan: 4
            },
            _th10: {
                content: '1路个数',
                colspan: 5
            },
            _th11: {
                content: '2路个数',
                colspan: 5
            }
        }, {
            _th1: {
                value: '0|1|2',
                isSwitch: true
            },
            _th2: {
                value: '0|1|2',
                isSwitch: true
            },
            _th3: {
                value: '0|1|2',
                isSwitch: true
            },
            _th4: {
                value: '0|1|2',
                isSwitch: true
            },
            _th5: {
                value: '0|1|2',
                isSwitch: true
            },
            _th6: {
                value: ''
            },
            _th7: {
                value: '0~3',
                isDrawLine: true
            },
            _th8: {
                value: '0~4',
                isDrawLine: true
            },
            _th9: {
                value: '0~4',
                isDrawLine: true
            }
        }
    ],
    "10": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '重号号码',
                rowspan: 2
            },
            _th4: {
                content: '重号个数',
                rowspan: 2
            },
            _th5: {
                content: '重号个数分布',
                colspan: 6
            },
            _th6: {
                content: '012路分布',
                colspan: 3
            },
            _th7: {
                content: '大小分布',
                colspan: 2
            },
            _th8: {
                content: '奇偶分布',
                colspan: 2
            },
            _th9: {
                content: '质合分布',
                colspan: 2
            },
            },{
            _th1: {
                value: ''
            },
            _th2: {
                value: '',
                specValue: true
            },
            _th3: {
                value: '0~5',
                isDrawLine: true
            },
            _th4: {
                value: '0|1|2',
                isDrawLine: true
            },
            _th5: {
                value: '大|小',
                isSwitch: true
            },
            _th6: {
                value: '奇|偶',
                isSwitch: true
            },
            _th7: {
                value: '质|合',
                isSwitch: true
            }
        }
    ],
    "11": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: '连号分布',
                colspan: 6
            },
            _th4: {
                content: '2连组合',
                rowspan: 2,
            },
            _th5: {
                content: '3连组合',
                rowspan: 2
            },
            _th6: {
                content: '4连组合',
                rowspan: 2
            },
            _th7: {
                content: '5连组合',
                rowspan: 2
            }
        },{
            _th1: {
                value: ' 无连<br/> （0）| 2连<br/> （1） | 22连<br/> （2） | 3连<br/>（3） | 4连<br/>（4） | 5连<br/>（5）',
                isDrawLine: true
            },
            _th2: {
                value: ''
            },
            _th3: {
                value: ''
            },
            _th4: {
                value: ''
            },
            _th5: {
                value: ''
            }
        }
    ],
    "12": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5
            },
            _th3: {
                content: 'AC值',
                rowspan: 2
            },
            _th4: {
                content: 'AC分布',
                colspan: 6,
            },
            _th5: {
                content: '012路分布',
                colspan: 3
            },
            _th6: {
                content: '大小分布',
                colspan: 2
            },
            _th7: {
                content: '奇偶分布',
                colspan: 2
            },
            _th8: {
                content: '质合分布',
                colspan: 2
            }
        },{
            _th1: {
                value: '',
                specValue: true
            },
            _th2: {
                value: '0~5',
                isDrawLine: true
            },
            _th3: {
                value: '0~2',
                isDrawLine: true
            },
            _th4: {
                value: '大|小',
                isSwitch: true
            },
            _th5: {
                value: '奇|偶',
                isSwitch: true
            },
            _th6: {
                value: '质|合',
                isSwitch: true
            }
        }
    ],
    "30": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '号码走势',
                colspan: 11
            },
            _th4: {
                content: '奇偶组合',
                colspan: 3,
            },
            _th5: {
                content: '大小组合',
                colspan: 3
            },
            _th6: {
                content: '质合组合',
                colspan: 3
            }
        },{
            _th1: {
                value: '1~11'
            },
            _th2: {
                value: '0:2|1:1|2:0',
                isDrawLine: true
            },
            _th3: {
                value: '0:2|1:1|2:0',
                isDrawLine: true
            },
            _th4: {
                value: '0:2|1:1|2:0',
                isDrawLine: true
            }
        }
    ],
    "31": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '第一位',
                colspan: 11
            },
            _th4: {
                content: '第二位',
                colspan: 11,
            },
            _th5: {
                content: '奇偶比例',
                colspan: 3
            },
            _th6: {
                content: '大小比例',
                colspan: 3
            }
        },{
            _th1: {
                value: '1~11',
                isDrawLine: true
            },
            _th2: {
                value: '1~11',
                isDrawLine: true
            },
            _th3: {
                value: '0:2|1:1|2:0',
                isDrawLine: true
            },
            _th4: {
                value: '0:2|1:1|2:0',
                isDrawLine: true
            }
        }
    ],
    "32": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '第一位',
                colspan: 2
            },
            _th4: {
                content: '第二位',
                colspan: 2,
            },
            _th5: {
                content: '大小比例',
                colspan: 3
            },
            _th6: {
                content: '大小组合',
                colspan: 4
            }
        },{
            _th1: {
                value: '大|小',
                isSwitch: true
            },
            _th2: {
                value: '大|小',
                isSwitch: true
            },
            _th3: {
                value: '0:2|1:1|2:0',
                isDrawLine: true
            },
            _th4: {
                value: '大大|大小|小大|小小',
                isDrawLine: true
            }
        }
    ],
    "33": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
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
                content: '奇偶比例',
                colspan: 3
            },
            _th6: {
                content: '奇偶组合',
                colspan: 4
            }
        },{
            _th1: {
                value: '奇|偶',
                isSwitch: true
            },
            _th2: {
                value: '奇|偶',
                isSwitch: true
            },
            _th3: {
                value: '0:2|1:1|2:0',
                isDrawLine: true
            },
            _th4: {
                value: '奇奇|奇偶|偶奇|偶偶',
                isDrawLine: true
            }
        }
    ],
    "34": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
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
                content: '质合比例',
                colspan: 3
            },
            _th6: {
                content: '质合组合',
                colspan: 4
            }
        },{
            _th1: {
                value: '质|合',
                isSwitch: true
            },
            _th2: {
                value: '质|合',
                isSwitch: true
            },
            _th3: {
                value: '0:2|1:1|2:0',
                isDrawLine: true
            },
            _th4: {
                value: '质质|质合|合质|合合',
                isDrawLine: true
            }
        }
    ],
    "35": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '跨度值',
                colspan: 10
            },
            _th4: {
                content: '升平降',
                colspan: 3
            },
            _th5: {
                content: '跨度值振幅',
                colspan: 10
            },
            _th6: {
                content: '除3余数',
                colspan: 3
            }
        },{
            _th1: {
                value: '1~10',
                isDrawLine: true
            },
            _th2: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th3: {
                value: '0~9',
                isDrawLine: true
            },
            _th4: {
                value: '0~2',
                isDrawLine: true
            }
        }
    ],
    "36": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '和值分布',
                colspan: 19
            },
            _th4: {
                content: '和尾',
                colspan: 10
            },
            _th5: {
                content: '除3余数',
                colspan: 3
            },
            _th6: {
                content: '升平降',
                colspan: 3
            }
        },{
            _th1: {
                value: '3~21',
                isDrawLine: true
            },
            _th2: {
                value: '0~9',
                isDrawLine: true
            },
            _th3: {
                value: '0~2',
                isDrawLine: true
            },
            _th4: {
                value: '升|平|降',
                isDrawLine: true
            }
        }
    ],
    "37": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '平均值',
                colspan: 10
            },
            _th5: {
                content: '升平降',
                colspan: 3
            },
            _th6: {
                content: '平均值振幅',
                colspan: 10
            }
        },{
            _th1: {
                value: ''
            },
            _th2: {
                value: '2~11',
                isDrawLine: true
            },
            _th3: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th4: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],
    "38": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
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
                content: '升平降比例',
                colspan: 6
            }
        },{
            _th1: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th2: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th3: {
                value: '0:0:2|0:1:1|0:2:0|1:0:1|1:1:0|2:0:0',
                isDrawLine: true
            }
        }
    ],
    "39": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
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
                content: '012比例',
                colspan: 6
            }
        },{
            _th1: {
                value: '余0个数|余1个数|余2个数',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '').replace('个数', '');
                }
            },
            _th2: {
                value: '余0个数|余1个数|余2个数',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '').replace('个数', '');
                }
            },
            _th3: {
                value: '0:0:2|0:1:1|0:2:0|1:0:1|1:1:0|2:0:0',
                isDrawLine: true
            }
        }
    ],
    "40": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 2
            },
            _th3: {
                content: '重号号码',
                rowspan: 2
            },
            _th4: {
                content: '重号个数',
                rowspan: 2
            },
            _th5: {
                content: '重号个数分布',
                colspan: 3
            },
            _th6: {
                content: '012路分布',
                colspan: 3
            },
            _th7: {
                content: '大小分布',
                colspan: 2
            },
            _th8: {
                content: '奇偶分布',
                colspan: 2
            }

        },{
            _th1: {
                value: '',
                specValue: true
            },
            _th2: {
                value: '',
                specValue: true
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
                value: '大|小',
                isSwitch: true
            },
            _th6: {
                value: '奇|偶',
                isSwitch: true
            }
        }
    ],
    "61": [
        {
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
                content: '号码走势',
                colspan: 11
            },
            _th4: {
                content: '奇偶组合',
                colspan: 4
            },
            _th5: {
                content: '大小组合',
                colspan: 4
            },
            _th6: {
                content: '质合组合',
                colspan: 4
            }
        },{
            _th1: {
                value: '1~11'
            },
            _th2: {
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            },
            _th3: {
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            },
            _th4: {
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            }
        }
    ],
    "62": [
        {
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
                content: '第一位',
                colspan: 11
            },
            _th4: {
                content: '第二位',
                colspan: 11
            },
            _th5: {
                content: '第三位',
                colspan: 11
            },
            _th6: {
                content: '奇偶比例',
                colspan: 4
            },
            _th7: {
                content: '大小比例',
                colspan: 4
            }
        },{
            _th1: {
                value: '1~11',
                isDrawLine: true
            },
            _th2: {
                value: '1~11',
                isDrawLine: true
            },
            _th3: {
                value: '1~11',
                isDrawLine: true
            },
            _th4: {
                value: '&nbsp;0:3&nbsp;|&nbsp;1:2&nbsp;|&nbsp;2:1&nbsp;|&nbsp;3:0&nbsp;',
                isDrawLine: true
            },
            _th5: {
                value: '&nbsp;0:3&nbsp;|&nbsp;1:2&nbsp;|&nbsp;2:1&nbsp;|&nbsp;3:0&nbsp;',
                isDrawLine: true
            }
        }
    ],
    "63": [
        {
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
                content: '大小比例',
                colspan: 4
            },
            _th7: {
                content: '全大',
                colspan: 1
            },
            _th8: {
                content: '大小组合',
                colspan: 6
            },
            _th9: {
                content: '全小',
                colspan: 1
            }
        },{
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
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            },
            _th5: {
                value: '大大大|大大小|大小大|大小小|小大大|小大小|小小大|小小小',
                isDrawLine: true
            }
        }
    ],
    "64": [
        {
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
                content: '奇偶比例',
                colspan: 4
            },
            _th7: {
                content: '全奇',
                colspan: 1
            },
            _th8: {
                content: '奇偶组合',
                colspan: 6
            },
            _th9: {
                content: '全偶',
                colspan: 1
            }
        },{
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
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            },
            _th5: {
                value: '奇奇奇|奇奇偶|奇偶奇|奇偶偶|偶奇奇|偶奇偶|偶偶奇|偶偶偶',
                isDrawLine: true
            }
        }
    ],
    "65": [
        {
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
                content: '质合比例',
                colspan: 4
            },
            _th7: {
                content: '全质',
                colspan: 1
            },
            _th8: {
                content: '质合组合',
                colspan: 6
            },
            _th9: {
                content: '全合',
                colspan: 1
            }
        },{
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
                value: '0:3|1:2|2:1|3:0',
                isDrawLine: true
            },
            _th5: {
                value: '质质质|质质合|质合质|质合合|合质质|合质合|合合质|合合合',
                isDrawLine: true
            }
        }
    ],
    "66": [
        {
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
                content: '跨度值',
                colspan: 9
            },
            _th4: {
                content: '升平降',
                colspan: 3
            },
            _th5: {
                content: '跨度值振幅',
                colspan: 9
            },
            _th6: {
                content: '除3余数',
                colspan: 3
            }
        },{
            _th1: {
                value: '2~10',
                isDrawLine: true
            },
            _th2: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th3: {
                value: '0~8',
                isDrawLine: true
            },
            _th4: {
                value: '0~2',
                isDrawLine: true
            }
        }
    ],
    "67": [
        {
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
                content: '和值分布',
                colspan: 25
            },
            _th4: {
                content: '和尾',
                colspan: 10
            },
            _th5: {
                content: '除3余数',
                colspan: 3
            },
            _th6: {
                content: '升平降',
                colspan: 3
            }
        },{
            _th1: {
                value: '6~30',
                isDrawLine: true
            },
            _th2: {
                value: '0~9',
                isDrawLine: true
            },
            _th3: {
                value: '0~2',
                isDrawLine: true
            },
            _th4: {
                value: '升|平|降',
                isDrawLine: true
            }
        }
    ],
    "68": [
        {
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
                content: '和值',
                rowspan: 2
            },
            _th4: {
                content: '平均值',
                colspan: 9
            },
            _th5: {
                content: '升平降',
                colspan: 3
            },
            _th6: {
                content: '平均值振幅',
                colspan: 9
            }
        },{
            _th1: {
                value: ''
            },
            _th2: {
                value: '2~10',
                isDrawLine: true
            },
            _th3: {
                value: '升|平|降',
                isDrawLine: true
            },
            _th4: {
                value: '0~8',
                isDrawLine: true
            }
        }
    ],
    "69": [
        {
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
                content: '升平降比例',
                colspan: 10
            }
        },{
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
                value: '0:0:3|0:1:2|0:2:1|0:3:0|1:0:2|1:2:0|1:1:1|2:0:1|2:1:0|3:0:0',
                isDrawLine: true
            }
        }
    ],
    "70": [
        {
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
                content: '012比例',
                colspan: 10
            }
        },{
            _th1: {
                value: '余0个数|余1个数|余2个数',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '').replace('个数', '');
                }
            },
            _th2: {
                value: '余0个数|余1个数|余2个数',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '').replace('个数', '');
                }
            },
            _th3: {
                value: '余0个数|余1个数|余2个数',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '').replace('个数', '');
                }
            },
            _th4: {
                value: '0:0:3|0:1:2|0:2:1|0:3:0|1:0:2|1:2:0|1:1:1|2:0:1|2:1:0|3:0:0',
                isDrawLine: true
            }
        }
    ],
    "71": [
        {
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
                content: '重号号码',
                rowspan: 2
            },
            _th4: {
                content: '重号个数',
                rowspan: 2
            },
            _th5: {
                content: '重号个数分布',
                colspan: 4
            },
            _th6: {
                content: '012路分布',
                colspan: 3
            },
            _th7: {
                content: '大小分布',
                colspan: 2
            },
            _th8: {
                content: '奇偶分布',
                colspan: 2
            }

        },{
            _th1: {
                value: '',
                specValue: true
            },
            _th2: {
                value: '',
                specValue: true
            },
            _th3: {
                value: '0~3',
                isDrawLine: true
            },
            _th4: {
                value: '0~2',
                isDrawLine: true
            },
            _th5: {
                value: '大|小',
                isSwitch: true
            },
            _th6: {
                value: '奇|偶',
                isSwitch: true
            }
        }
    ],
    "91": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 1
            },
            _th3: {
                content: '号码分布',
                colspan: 11
            },
            _th4: {
                content: '号码特性',
                colspan: 6
            },
            _th5: {
                content: '除3余数',
                colspan: 3
            },
            _th6: {
                content: '重邻间孤',
                colspan: 4
            }
        },{
            _th1: {
                value: '1~11',
                isDrawLine: true
            },
            _th2: {
                value: '大奇质|大奇合|大偶合|小奇质|小偶质|小偶合',
                isDrawLine: true
            },
            _th3: {
                value: '余0|余1|余2',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '');
                }
            },
            _th4: {
                value: '重|邻|间|孤',
                isDrawLine: true
            }
        }
    ],
    "92": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 1
            },
            _th3: {
                content: '号码分布',
                colspan: 11
            },
            _th4: {
                content: '号码特性',
                colspan: 6,
            },
            _th5: {
                content: '除3余数',
                colspan: 3
            },
            _th6: {
                content: '重邻间孤',
                colspan: 4
            }
        },{
            _th1: {
                value: '1~11',
                isDrawLine: true
            },
            _th2: {
                value: '大奇质|大奇合|大偶合|小奇质|小偶质|小偶合',
                isDrawLine: true
            },
            _th3: {
                value: '余0|余1|余2',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '');
                }
            },
            _th4: {
                value: '重|邻|间|孤',
                isDrawLine: true
            }
        }
    ],
    "93": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 1
            },
            _th3: {
                content: '号码分布',
                colspan: 11
            },
            _th4: {
                content: '号码特性',
                colspan: 6,
            },
            _th5: {
                content: '除3余数',
                colspan: 3
            },
            _th6: {
                content: '重邻间孤',
                colspan: 4
            }
        },{
            _th1: {
                value: '1~11',
                isDrawLine: true
            },
            _th2: {
                value: '大奇质|大奇合|大偶合|小奇质|小偶质|小偶合',
                isDrawLine: true
            },
            _th3: {
                value: '余0|余1|余2',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '');
                }
            },
            _th4: {
                value: '重|邻|间|孤',
                isDrawLine: true
            }
        }
    ],
    "94": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 1
            },
            _th3: {
                content: '号码分布',
                colspan: 11
            },
            _th4: {
                content: '号码特性',
                colspan: 6,
            },
            _th5: {
                content: '除3余数',
                colspan: 3
            },
            _th6: {
                content: '重邻间孤',
                colspan: 4
            }
        },{
            _th1: {
                value: '1~11',
                isDrawLine: true
            },
            _th2: {
                value: '大奇质|大奇合|大偶合|小奇质|小偶质|小偶合',
                isDrawLine: true
            },
            _th3: {
                value: '余0|余1|余2',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '');
                }
            },
            _th4: {
                value: '重|邻|间|孤',
                isDrawLine: true
            }
        }
    ],
    "95": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 1
            },
            _th3: {
                content: '号码分布',
                colspan: 11
            },
            _th4: {
                content: '号码特性',
                colspan: 6,
            },
            _th5: {
                content: '除3余数',
                colspan: 3
            },
            _th6: {
                content: '重邻间孤',
                colspan: 4
            }
        },{
            _th1: {
                value: '1~11',
                isDrawLine: true
            },
            _th2: {
                value: '大奇质|大奇合|大偶合|小奇质|小偶质|小偶合',
                isDrawLine: true
            },
            _th3: {
                value: '余0|余1|余2',
                isDrawLine: true,
                replaceTitle: function(title) {
                    return title.replace('余', '');
                }
            },
            _th4: {
                value: '重|邻|间|孤',
                isDrawLine: true
            }
        }
    ],
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
    "501": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "502": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "503": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "504": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "505": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "506": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "507": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "508": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "509": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "510": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    "511": {
        _th1: {
            content: '号码类型',
            needSort: true
        },
        _th2: {
            content: '出现次数',
            needSort: true
        },
        _th3: {
            content: '第一区间',
        },
        _th4: {
            content: '第二区间',
        },
        _th5: {
            content: '第三区间',
        },
        _th6: {
            content: '第四区间',
        },
        _th7: {
            content: '第五区间',
        },
        _th8: {
            content: '第六区间',
        },
        _th9: {
            content: '第七区间',
        },
        _th10: {
            content: '第八区间',
        }
    },
    
}