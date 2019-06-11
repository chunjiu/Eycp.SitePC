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
     *     ******************  快乐十分系列枚举  *******************
     *      基本分布走势    1
            基本大小走势  2
            基本奇偶走势  3
            基本区间走势  4
            基本同尾走势  5
            基本重号走势  6
            基本二连号走势 7
            基本三连号走势 8
            基本隔位码走势 9
                
            定位第一位走势 21
            定位第二位走势 22
            定位第三位走势 23
                
            前二组选走势  30
            前二直选走势  31
            前二大小走势  32
            前二奇偶走势  33
            前二质合走势  34
            前二升平降走势 35
            前二012路走势    36
            前三分布走势  50
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
                    colspan: 8
                },
                _th3: {
                    content: '开奖号码分布图',
                    colspan: 20
                },
                _th4: {
                    content: '和值',
                    rowspan: 2
                },
                _th5: {
                    content: '跨度',
                    rowspan: 2
                },
                _th6: {
                    content: '大小比',
                    rowspan: 2
                },
                _th7: {
                    content: '奇偶比',
                    rowspan: 2
                },
                _th8: {
                    content: '质合比',
                    rowspan: 2
                }
            }, {
                _th1: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20'
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
                },
                _th6: {
                    value: ''
                },
                _th7: {
                    value: ''
                },
                _th8: {
                    value: ''
                }

            }
        ]
        ,
         "2": [
            {
                _th1: {
                    content: '期号',
                    rowspan: 2
                },
                _th2: {
                    content: '开奖号码',
                    rowspan: 2,
                    colspan: 8
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
                    colspan: 2
                },
                _th8: {
                    content: '第六位',
                    colspan: 2,
                    isSwitch: true
                },
                _th9: {
                    content: '第七位',
                    colspan: 2,
                    isSwitch: true
                },
                _th10: {
                    content: '第八位',
                    colspan: 2,
                    isSwitch: true
                },
                _th11: {
                    content: '大小比例走势',
                    colspan:9
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
                    value: '大|小',
                    isSwitch: true
                },
                _th7: {
                    value: '大|小',
                    isSwitch: true
                },
                _th8: {
                    value: '大|小',
                    isSwitch: true
                },
                _th9: {
                    value: '0:8|1:7|2:6|3:5|4:4|5:3|6:2|7:1|8:0',
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
                    colspan: 8
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
                    content: '第六位',
                    colspan: 2,
                    isSwitch: true
                },
                _th9: {
                    content: '第七位',
                    colspan: 2,
                    isSwitch: true
                },
                _th10: {
                    content: '第八位',
                    colspan: 2,
                    isSwitch: true
                },
                _th11: {
                    content: '奇偶比例走势',
                    colspan:9
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
                    value: '奇|偶',
                    isSwitch: true
                },
                _th7: {
                    value: '奇|偶',
                    isSwitch: true
                },
                _th8: {
                    value: '奇|偶',
                    isSwitch: true
                },
                _th9: {
                    value: '0:8|1:7|2:6|3:5|4:4|5:3|6:2|7:1|8:0',
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
                    colspan: 8
                },
                _th3: {
                    content: '第一区间(01-05)',
                    colspan: 6
                },
                _th4: {
                    content: '第二区间(06-10)',
                    colspan: 6
                },
                _th5: {
                    content: '第三区间(11-15)',
                    colspan: 6
                },
                _th6: {
                    content: '第四区间(16-20)',
                    colspan: 6
                }
            }, {
                
                 _th1: {
                    value: '0~5',
                    isDrawLine: true
                },
                 _th2: {
                    value: '0~5',
                    isDrawLine: true
                },
                _th3: {
                    value: '0~5',
                    isDrawLine: true
                },
                _th4: {
                    value: '0~5',
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
                    colspan: 8
                },
                _th3: {
                    content: '同尾走势',
                    colspan: 10
                },
                _th4: {
                    content: '同尾对数',
                    colspan: 5
                },
                _th5: {
                    content: '尾奇偶个数',
                    colspan: 2
                },
                _th6: {
                    content: '尾大小个数',
                    colspan: 2
                }
            }, {
                
                 _th1: {
                    value: '0~9'
                },
                 _th2: {
                    value: '0~4',
                    isDrawLine: true
                },
                 _th3: {
                    value: '奇|偶'
                },
                 _th4: {
                    value: '大|小'
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
                    colspan: 8
                },
                _th3: {
                    content: '开奖号码分布',
                    colspan: 20
                },
                _th4: {
                    content: '重号走势',
                    colspan: 9
                }
            }, {
                
                 _th1: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20'
                },
                 _th2: {
                    value: '0~8',
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
                    colspan: 8
                },
                _th3: {
                    content: '二连号走势',
                    colspan: 19
                },
                _th4: {
                    content: '对数',
                    rowspan: 2,
                    specValue:true
                }
            }, {
                
                 _th1: {
                    value: '01-02|02-03|03-04|04-05|05-06|06-07|07-08|08-09|09-10|10-11|11-12|12-13|13-14|14-15|15-16|16-17|17-18|18-19|19-20'
                },
                 _th2: {
                    value: '',
                    specValue:true
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
                    colspan: 8
                },
                _th3: {
                    content: '三连号走势',
                    colspan: 18
                },
                _th4: {
                    content: '对数',
                    rowspan: 2,
                    specValue:true
                }
            }, {
                
                 _th1: {
                    value: '01-03|02-04|03-05|04-06|05-07|06-08|07-09|08-10|09-11|10-12|11-13|12-14|13-15|14-16|15-17|16-18|17-19|18-20'
                },
                 _th2: {
                    value: '',
                    specValue:true
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
                    colspan: 8
                },
                _th3: {
                    content: '隔位码走势',
                    colspan: 18
                },
                _th4: {
                    content: '隔位码对数',
                   colspan: 8
                }
            }, {
                
                 _th1: {
                    value: '0103|0204|0305|0406|0507|0608|0709|0810|0911|1012|1113|1214|1315|1416|1517|1618|1719|1820'
                },
                 _th2: {
                    value: '0~7',
                    isDrawLine: true
                }

            }
        ]
        ,
         "21": [
            {
                _th1: {
                    content: '期号',
                    rowspan: 2
                },
                _th2: {
                    content: '开奖号码',
                    rowspan: 2,
                    colspan: 8
                },
                _th3: {
                    content: '号码发布',
                    colspan: 20
                },
                _th4: {
                    content: '升平降',
                    colspan: 3
                },
                _th5: {
                    content: '012路',
                    colspan: 3
                },
                _th6: {
                    content: '大小',
                    colspan: 2
                },
                _th7: {
                   content: '奇偶',
                   colspan: 2
                }
            }, {
                
                 _th1: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20',
                    isDrawLine: true
                },
                 _th2: {
                    value: '升|平|降',
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
                }

            }
        ],
         "22": [
            {
                _th1: {
                    content: '期号',
                    rowspan: 2
                },
                _th2: {
                    content: '开奖号码',
                    rowspan: 2,
                    colspan: 8
                },
                _th3: {
                    content: '号码发布',
                    colspan: 20
                },
                _th4: {
                    content: '升平降',
                    colspan: 3
                },
                _th5: {
                    content: '012路',
                    colspan: 3
                },
                _th6: {
                    content: '大小',
                    colspan: 2
                },
                _th7: {
                   content: '奇偶',
                   colspan: 2
                }
            }, {
                
                 _th1: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20',
                    isDrawLine: true
                },
                 _th2: {
                    value: '升|平|降',
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
                }

            }
        ],
         "23": [
            {
                _th1: {
                    content: '期号',
                    rowspan: 2
                },
                _th2: {
                    content: '开奖号码',
                    rowspan: 2,
                    colspan: 8
                },
                _th3: {
                    content: '号码发布',
                    colspan: 20
                },
                _th4: {
                    content: '升平降',
                    colspan: 3
                },
                _th5: {
                    content: '012路',
                    colspan: 3
                },
                _th6: {
                    content: '大小',
                    colspan: 2
                },
                _th7: {
                   content: '奇偶',
                   colspan: 2
                }
            }, {
                
                 _th1: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20',
                    isDrawLine: true
                },
                 _th2: {
                    value: '升|平|降',
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
                    colspan: 20
                },
                _th4: {
                    content: '奇偶比例',
                    colspan: 3
                },
                _th5: {
                    content: '大小比例',
                    colspan: 3
                },
                _th6: {
                    content: '质合比例',
                    colspan: 3
                }
            }, {
                
                 _th1: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20'
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
                    content: '号码',
                    rowspan: 2,
                    colspan: 2
                },
                _th3: {
                    content: '第一位',
                    colspan: 20
                },
                _th4: {
                    content: '第二位',
                    colspan: 20
                },
                _th5: {
                    content: '和值',
                    rowspan: 2
                },
                _th6: {
                    content: '跨度',
                    rowspan: 2
                }
            }, {
                
                 _th1: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20',
                    isDrawLine: true
                },
                 _th2: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20',
                    isDrawLine: true
                },
                 _th3: {
                    value: ''
                },
                 _th4: {
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
                    content: '大小比例',
                    colspan: 3
                },
                _th6: {
                    content: '大小组合',
                    colspan: 4
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
                    value: '0:0:2|0:1:1|0:2:0|1:0:1|1:1:0|2:0:0',
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
                    content: '第一位',
                    colspan: 3
                },
                _th4: {
                    content: '第二位',
                    colspan: 3
                },
                _th5: {
                    content: '012路比例',
                    colspan: 6
                }
            }, {
                
                 _th1: {
                    value: '余0个数|余1个数|余2个数',
                    isDrawLine: true,
                    replaceTitle:function(title){
                        return title.replace("余","").replace("个数","");
                    }
                }, 
                _th2: {
                    value: '余0个数|余1个数|余2个数',
                    isDrawLine: true,
                    replaceTitle:function(title){
                        return title.replace("余","").replace("个数","");
                    }
                },
                 _th3: {
                    value: '0:0:2|0:1:1|0:2:0|1:0:1|1:1:0|2:0:0',
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
                    colspan: 3
                },
                _th3: {
                    content: '前三开奖号码分布',
                    colspan: 20
                },
                _th4: {
                    content: '第一位大小单双',
                    colspan: 4
                },
                _th5: {
                    content: '第二位大小单双',
                    colspan: 4
                },
                _th6: {
                    content: '第三位大小单双',
                    colspan: 4
                }
            }, {
                
                 _th1: {
                    value: '01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20'
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
                }

            }
        ]

}