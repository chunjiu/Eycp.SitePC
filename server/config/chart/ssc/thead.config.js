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


    "1": [
            {
                _th1: {
                    content: '期号',
                    rowspan: 2
                },
                _th2: {
                    content: '开奖号码',
                    rowspan: 2,
                    colspan: 5,
                    noZero: true
                },
                _th3: {
                    content: '号码分布图',
                    colspan: 10
                },
                _th4: {
                    content: '单双走势',
                    colspan: 2
                },
                _th5: {
                    content: '大小走势',
                    colspan: 2
                },
                _th6: {
                    content: '质合走势',
                    colspan: 2
                }
            }, {
                _th1: {
                    value: '0~9',
                    isDrawLine: true
                },
                _th2: {
                    value: '单|双',
                    isSwitch: true
                },
                _th3: {
                    value: '大|小',
                    isSwitch: true
                },
                _th4: {
                    value: '质|合',
                    isSwitch: true
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '号码分布图',
                colspan: 10
            },
            _th4: {
                content: '单双走势',
                colspan: 2
            },
            _th5: {
                content: '大小走势',
                colspan: 2
            },
            _th6: {
                content: '大小单双',
                colspan: 4
            },
            _th7: {
                content: '012分布',
                colspan: 3
            },
            _th8: {
                content: '质合走势',
                colspan: 2
            }
        }, {
            _th1: {
                value: '0~9',
                isDrawLine: true
            },
            _th2: {
                value: '单|双',
                isSwitch: true
            },
            _th3: {
                value: '大|小',
                isSwitch: true
            },
            _th4: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th5: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th6: {
                value: '质|合',
                isSwitch: true
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '号码分布图',
                colspan: 10
            },
            _th4: {
                content: '十位',
                colspan: 10
            },
            _th5: {
                content: '个位',
                colspan: 10
            },
            _th6: {
                content: '大小比',
                rowspan: 2
            },
            _th7: {
                content: '单双比',
                rowspan: 2
            },
            _th8: {
                content: '质合比',
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
                value: ''
            },
            _th5: {
                value: ''
            },
            _th6: {
                value: ''
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '号码分布图',
                colspan: 10
            },
            _th4: {
                content: '十位',
                colspan: 4
            },
            _th5: {
                content: '个位',
                colspan: 4
            },
            _th6: {
                content: '十/个位大小',
                colspan: 4
            },
            _th7: {
                content: '十/个位单双',
                colspan: 4
            },
            _th8: {
                content: '十位012',
                colspan: 3
            },
            _th9: {
                content: '个位012',
                colspan: 3
            },
            _th10: {
                content: '和值',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '0~9'
            },
            _th2: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th3: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th4: {
                value: '大大|大小|小大|小小',
                isDrawLine: true
            },
            _th5: {
                value: '单单|单双|双单|双双',
                isDrawLine: true
            },
            _th6: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th7: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th8: {
                value: '',
                specValue: true
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '二星和值',
                colspan: 19
            },
            _th4: {
                content: '和值段',
                colspan: 4
            },
            _th5: {
                content: '和值尾数',
                colspan: 10
            }
        }, {
            _th1: {
                value: '0~18',
                isDrawLine: true
            },
            _th2: {
                value: '0+|6+|9+|12+',
                isDrawLine: true
            },
            _th3: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],
    "13": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '大小类型',
                colspan: 4
            },
            _th4: {
                content: '单双类型',
                colspan: 4
            },
            _th5: {
                content: '质合类型',
                colspan: 4
            },
            _th6: {
                content: '012路类型',
                colspan: 9
            }
        }, {
            _th1: {
                value: '大大|大小|小大|小小',
                isDrawLine: true
            },
            _th2: {
                value: '单单|单双|双单|双双',
                isDrawLine: true
            },
            _th3: {
                value: '质质|质合|合质|合合',
                isDrawLine: true
            },
            _th4: {
                value: '00|01|02|10|11|12|20|21|22',
                isDrawLine: true
            }
        }
    ],
    "14": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '号码分布',
                colspan: 10
            },
            _th4: {
                content: '大小走势',
                colspan: 3
            },
            _th5: {
                content: '单双走势',
                colspan: 3
            },
            _th6: {
                content: '质合走势',
                colspan: 3
            },
            _th7: {
                content: '012路',
                colspan: 6
            },
            _th8: {
                content: '对子',
                colspan: 2
            },
            _th9: {
                content: '对子号码走势',
                colspan: 10
            }
        }, {
            _th1: {
                value: '0~9'
            },
            _th2: {
                value: '两<br/>大|混<br/>合|两<br/>小',
                isDrawLine: true
            },
            _th3: {
                value: '两<br/>单|混<br/>合|两<br/>双',
                isDrawLine: true
            },
            _th4: {
                value: '两<br/>质|混<br/>合|两<br/>合',
                isDrawLine: true
            },
            _th5: {
                value: '00|01|02|11|12|22',
                isDrawLine: true
            },
            _th6: {
                value: '非<br/>对|对<br/>子'
            },
            _th7: {
                value: '00|11|22|33|44|55|66|77|88|99'
            }
        }
    ],
    "15": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '跨度值分布',
                colspan: 10
            },
            _th4: {
                content: '跨度',
                rowspan: 2
            },
            _th5: {
                content: '跨度属性',
                colspan: 9
            },
            _th6: {
                content: '跨度振幅',
                colspan: 10
            }
        }, {
            _th1: {
                value: '0~9',
                isDrawLine: true
            },
            _th2: {
                value: '',
                specValue: true
            },
            _th3: {
                value: '单|双',
                isDrawLine: true,
                isSwitch: true
            },
            _th4: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th5: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th6: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th7: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],
    "16": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '号码分布',
                colspan: 10
            },
            _th4: {
                content: '十位',
                colspan: 2
            },
            _th5: {
                content: '个位',
                colspan: 2
            },
            _th6: {
                content: '大小',
                colspan: 4
            }
        }, {
            _th1: {
                value: '0~9'
            },
            _th2: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th3: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th4: {
                value: '大大|大小|小大|小小',
                isDrawLine: true
            }
        }
    ],
    "17": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '号码分布',
                colspan: 10
            },
            _th4: {
                content: '十位',
                colspan: 2
            },
            _th5: {
                content: '个位',
                colspan: 2
            },
            _th6: {
                content: '单双',
                colspan: 4
            }
        }, {
            _th1: {
                value: '0~9'
            },
            _th2: {
                value: '单|双',
                isDrawLine: true,
                isSwitch: true
            },
            _th3: {
                value: '单|双',
                isDrawLine: true,
                isSwitch: true
            },
            _th4: {
                value: '单单|单双|双单|双双',
                isDrawLine: true
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '号码分布',
                colspan: 10
            },
            _th4: {
                content: '百位',
                colspan: 10
            },
            _th5: {
                content: '十位',
                colspan: 10
            },
            _th6: {
                content: '个位',
                colspan: 10
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '百位',
                colspan: 4
            },
            _th4: {
                content: '十位',
                colspan: 4
            },
            _th5: {
                content: '个位',
                colspan: 4
            },
            _th6: {
                content: '百位012',
                colspan: 3
            },
            _th7: {
                content: '十位012',
                colspan: 3
            },
            _th8: {
                content: '个位012',
                colspan: 3
            },
            _th9: {
                content: '和值',
                rowspan: 2
            },
            _th10: {
                content: '大小比',
                rowspan: 2
            },
            _th11: {
                content: '单双比',
                rowspan: 2
            },
            _th12: {
                content: '质合比',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th2: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th3: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th4: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th5: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th6: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th7: {
                value: ''
            },
            _th8: {
                value: ''
            },
            _th9: {
                value: ''
            },
            _th10: {
                value: ''
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '大小类型',
                colspan: 8
            },
            _th4: {
                content: '单双走势',
                colspan: 8
            },
            _th5: {
                content: '质合走势',
                colspan: 8
            }
        }, {
            _th1: {
                value: '大大<br/>大|大大<br/>小|大小<br/>大|大小<br/>小|小大<br/>大|小大<br/>小|小小<br/>大|小小<br/>小',
                isDrawLine: true
            },
            _th2: {
                value: '单单<br/>单|单单<br/>双|单双<br/>单|单双<br/>双|双单<br/>单|双单<br/>双|双双<br/>单|双双<br/>双',
                isDrawLine: true
            },
            _th3: {
                value: '质质<br/>质|质质<br/>合|质合<br/>质|质合<br/>合|合质<br/>质|合质<br/>合|合合<br/>质|合合<br/>合',
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '大小',
                colspan: 4
            },
            _th4: {
                content: '单双',
                colspan: 4
            },
            _th5: {
                content: '012路',
                colspan: 7
            },
            _th6: {
                content: '组选特征',
                colspan: 3
            },
            _th7: {
                content: '对子号码走势',
                colspan: 10
            }
        }, {
            _th1: {
                value: '全大|两大<br/>一小|两小<br/>一大|全小',
                isDrawLine: true
            },
            _th2: {
                value: '全单|两单<br/>一双|两双<br/>一单|全双',
                isDrawLine: true
            },
            _th3: {
                value: '3个0|3个1|3个2|2个0|2个1|2个2|各1个',
                isDrawLine: true
            },
            _th4: {
                value: '豹子|组三|组六',
                isDrawLine: true
            },
            _th5: {
                value: '00|11|22|33|44|55|66|77|88|99'
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '三星和值',
                colspan: 28
            },
            _th4: {
                content: '和值段',
                colspan: 6
            },
            _th5: {
                content: '和值尾数',
                colspan: 10
            }
        }, {
            _th1: {
                value: '0~27',
                isDrawLine: true
            },
            _th2: {
                value: '0+|9+|12+|15+|18+|21+',
                isDrawLine: true,
                replaceTitle: function (title) {
                    return title.replace('+', '');
                }
            },
            _th3: {
                value: '0~9',
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '跨度值分布',
                colspan: 10
            },
            _th4: {
                content: '跨度',
                rowspan: 2
            },
            _th5: {
                content: '跨度属性',
                colspan: 9
            },
            _th6: {
                content: '跨度振幅',
                colspan: 10
            }
        }, {
            _th1: {
                value: '0~9',
                isDrawLine: true
            },
            _th2: {
                value: '',
                specValue: true
            },
            _th3: {
                value: '单|双',
                isDrawLine: true,
                isSwitch: true
            },
            _th4: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th5: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th6: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th7: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],
    "50": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '千位',
                colspan: 10
            },
            _th4: {
                content: '百位',
                colspan: 10
            },
            _th5: {
                content: '十位',
                colspan: 10
            },
            _th6: {
                content: '个位',
                colspan: 10
            }
        }, {
            _th1: {
                value: '0~9',
                isDrawLine: true
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
    "51": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '千位',
                colspan: 4
            },
            _th4: {
                content: '百位',
                colspan: 4
            },
            _th5: {
                content: '十位',
                colspan: 4
            },
            _th6: {
                content: '个位',
                colspan: 4
            },
            _th7: {
                content: '千位012',
                colspan: 3
            },
            _th8: {
                content: '百位012',
                colspan: 3
            },
            _th9: {
                content: '十位012',
                colspan: 3
            },
            _th10: {
                content: '个位012',
                colspan: 3
            },
            _th11: {
                content: '和值',
                rowspan: 2
            },
            _th12: {
                content: '大小比',
                rowspan: 2
            },
            _th13: {
                content: '单双比',
                rowspan: 2
            },
            _th14: {
                content: '质合比',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th2: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th3: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th4: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th5: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th6: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th7: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th8: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th9: {
                value: ''
            },
            _th10: {
                value: ''
            },
            _th11: {
                value: ''
            },
            _th12: {
                value: ''
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '万位',
                colspan: 10
            },
            _th4: {
                content: '千位',
                colspan: 10
            },
            _th5: {
                content: '百位',
                colspan: 10
            },
            _th6: {
                content: '十位',
                colspan: 10
            },
            _th7: {
                content: '个位',
                colspan: 10
            }
        }, {
            _th1: {
                value: '0~9',
                isDrawLine: true
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
                value: '0~9',
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '万位',
                colspan: 4
            },
            _th4: {
                content: '千位',
                colspan: 4
            },
            _th5: {
                content: '百位',
                colspan: 4
            },
            _th6: {
                content: '万位012',
                colspan: 3
            },
            _th7: {
                content: '千位012',
                colspan: 3
            },
            _th8: {
                content: '百位012',
                colspan: 3
            },
            _th9: {
                content: '和值',
                rowspan: 2
            },
            _th10: {
                content: '大小比',
                rowspan: 2
            },
            _th11: {
                content: '单双比',
                rowspan: 2
            },
            _th12: {
                content: '质合比',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th2: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th3: {
                value: '大单|大双|小单|小双',
                isDrawLine: true
            },
            _th4: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th5: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th6: {
                value: '0路|1路|2路',
                isDrawLine: true
            },
            _th7: {
                value: ''
            },
            _th8: {
                value: ''
            },
            _th9: {
                value: ''
            },
            _th10: {
                value: ''
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '万位',
                colspan: 3
            },
            _th4: {
                content: '千位',
                colspan: 3
            },
            _th5: {
                content: '百位',
                colspan: 3
            },
            _th6: {
                content: '十位',
                colspan: 3
            },
            _th7: {
                content: '个位',
                colspan: 3
            },
            _th8: {
                content: '大小组合走势',
                colspan: 6
            }
        }, {
            _th1: {
                value: '号码|大|小',
                isSwitch: true
            },
            _th2: {
                value: '号码|大|小',
                isSwitch: true
            },
            _th3: {
                value: '号码|大|小',
                isSwitch: true
            },
            _th4: {
                value: '号码|大|小',
                isSwitch: true
            },
            _th5: {
                value: '号码|大|小',
                isSwitch: true
            },
            _th6: {
                value: '0:5|1:4|2:3|3:2|4:1|5:0',
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
                colspan: 5,
                noZero: true
            },
            _th3: {
                content: '万位',
                colspan: 3
            },
            _th4: {
                content: '千位',
                colspan: 3
            },
            _th5: {
                content: '百位',
                colspan: 3
            },
            _th6: {
                content: '十位',
                colspan: 3
            },
            _th7: {
                content: '个位',
                colspan: 3
            },
            _th8: {
                content: '单双比例',
                colspan: 6
            }
        }, {
            _th1: {
                value: '号码|单|双'
            },
            _th2: {
                value: '号码|单|双'
            },
            _th3: {
                value: '号码|单|双'
            },
            _th4: {
                value: '号码|单|双'
            },
            _th5: {
                value: '号码|单|双'
            },
            _th6: {
                value: '0:5|1:4|2:3|3:2|4:1|5:0',
                isDrawLine: true
            }
        }
    ]
}