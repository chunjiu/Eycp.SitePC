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
                             content: '期数',
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

    /** 综合基本走势	 11  */
    "11": [
            {
                _th1: {
                    content: '期号',
                    rowspan: 2
                },
                _th2: {
                    isShow: false
                },
                _th3: {
                    content: '红球走势',
                    colspan: 33
                },
                _th4: {
                    content: '蓝球走势',
                    colspan: 16
                }
            }, {
                _th1: {
                    value: '1~33'
                },
                _th2: {
                    value: '1~16',
                    isDrawLine: true
                }
            }
        ],

         /** 红球三分区	  12  */
        "12": [
            {
                _th1: {
                    content: '期号',
                    rowspan: 2
                },
                _th2: {
                    content: '一分区',
                    colspan: 11
                },
                _th3: {
                    content: '二分区',
                    colspan: 11
                },
                _th4: {
                    content: '三分区',
                    colspan: 11
                },
                _th5: {
                   content: '和值',
                   colspan: 1,
                   rowspan: 2
               },
                _th6: {
                    content: '奇偶比',
                    colspan: 1,
                    rowspan: 2
                },
                _th7: {
                    content: '跨度',
                    colspan: 1,
                    rowspan: 2
                }
            }, {
                _th1: {
                    value: '1~11'
                },
                _th2: {
                    value: '12~22'
                },
               _th3: {
                    value: '23~33'
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

    /** 红球四分区	  13  */
    "13": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '一分区',
                colspan: 8
            },
            _th3: {
                content: '二分区',
                colspan: 9
            },
            _th4: {
                content: '三分区',
                colspan: 8
            },
            _th5: {
                content: '四分区',
                colspan: 8
            },
            _th6: {
                content: '和值',
                colspan: 1,
                rowspan: 2
            },
            _th7: {
                content: '奇偶比',
                colspan: 1,
                rowspan: 2
            },
            _th8: {
                content: '跨度',
                colspan: 1,
                rowspan: 2
            }
        }, {
            _th1: {
                value: '1~8'
            },
            _th2: {
                value: '9~17'
            },
            _th3: {
                value: '18~25'
            },
            _th4: {
                value: '26~33'
            },
            _th5: {
                value: ''
            },
            _th6: {
                value: ''
            },
            _th7: {
                value: ''
            }
        }
    ],

    /** 红球七方区	   14  */
    "14": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '一分区',
                colspan: 5
            },
            _th3: {
                content: '二分区',
                colspan: 5
            },
            _th4: {
                content: '三分区',
                colspan: 5
            },
            _th5: {
                content: '四分区',
                colspan: 5
            },
            _th6: {
                content: '五分区',
                colspan: 5
            },
            _th7: {
                content: '六分区',
                colspan: 5
            },
            _th8: {
                content: '七分区',
                colspan: 3
            },
            _th9: {
                content: '和值',
                rowspan: 2
            },
            _th10: {
                content: '奇偶比',
                rowspan: 2
            },
            _th11: {
                content: '跨度',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '1~5'
            },
            _th2: {
                value: '6~10'
            },
            _th3: {
                value: '11~15'
            },
            _th4: {
                value: '16~20'
            },
            _th5: {
                value: '21~25'
            },
            _th6: {
                value: '26~30'
            },
            _th7:{
                value: '31~33'
            },
            _th8:{
                value:''
            },
            _th9:{
                value:''
            },
            _th10:{
                value:''
            }
        }
    ],

    /**  红球六行六列 	   15  */
    '15':{},

    /**  红球七行五列 	  16  */
    '16':{},

    /**    红球形态大小走势	         21         */
    '21':[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                colspan: 6,
                rowspan: 2
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
                content: '大小比例分布',
                colspan: 7
            }
        }, {
            _th1: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
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
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th5: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th6: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th7:{
                value: '0:6|1:5|2:4|3:3|4:2|5:1|6:0',
                isDrawLine: true
            }
        }
    ],

    /**    红球形态奇偶走势	         22         */
    '22':[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                colspan: 6,
                rowspan: 2
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
                content: '奇偶比例分布',
                colspan: 7
            }
        }, {
            _th1: {
                value: '奇|偶',
                isDrawLine: true,
                isSwitch: true
            },
            _th2: {
                value: '奇|偶',
                isDrawLine: true,
                isSwitch: true
            },
            _th3: {
                value: '奇|偶',
                isDrawLine: true,
                isSwitch: true
            },
            _th4: {
                value: '奇|偶',
                isDrawLine: true,
                isSwitch: true
            },
            _th5: {
                value: '奇|偶',
                isDrawLine: true,
                isSwitch: true
            },
            _th6: {
                value: '奇|偶',
                isDrawLine: true,
                isSwitch: true
            },
            _th7:{
                value: '0:6|1:5|2:4|3:3|4:2|5:1|6:0',
                isDrawLine: true
            }
        }
    ],


    /**    红球形态质合走势	         23         */
    '23':[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                colspan: 6,
                rowspan: 2
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
                content: '质合比例分布',
                colspan: 7
            }
        }, {
            _th1: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th2: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th3: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th4: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th5: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th6: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th7:{
                value: '0:6|1:5|2:4|3:3|4:2|5:1|6:0',
                isDrawLine: true
            }
        }
    ],


    /**     红球形态除3余数走势	 24         */
    '24':[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                isShow: false
            },
            _th3: {
                content: '第一位',
                colspan: 3,

            },
            _th4: {
                content: '第二位',
                colspan: 3,

            },
            _th5: {
                content: '第三位',
                colspan: 3,

            },
            _th6: {
                content: '第四位',
                colspan: 3,

            },
            _th7: {
                content: '第五位',
                colspan: 3,

            },
            _th8: {
                content: '第六位',
                colspan: 3,

            },
            _th9: {
                content: '余0个数',
                colspan: 7
            },
            _th10: {
                content: '余1个数',
                colspan: 7
            },
            _th11: {
                content: '余2个数',
                colspan: 7
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
                value: '0~2',
                isDrawLine: true
            },
            _th7:{
                value: '0~6',
                isDrawLine: true
            },
            _th8:{
                value: '0~6',
                isDrawLine: true
            },
            _th9:{
                value: '0~6',
                isDrawLine: true
            }
        }
    ],


    /**    红球形态和值走势 	         25         */
    '25':[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                colspan: 6,
                rowspan: 2
            },
            _th3: {
                content: '和值分布',
                colspan: 12
            },
            _th4: {
                content: '和尾',
                colspan: 10
            }
        }, {
            _th1: {
                value: '21-49|50-59|60-69|70-79|80-89|90-99|100-109|110-119|120-129|130-139|140-149|150-183',
                isDrawLine: true,
                isAllAwardNumber: true
            },
            _th2: {
                value: '0~9',
                isDrawLine: true
            }
        }
    ],

    /**     红球形态跨度走势 	     26         */
    '26':[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                colspan: 6,
                rowspan: 2
            },
            _th3: {
                content: '跨度走势',
                colspan: 28
            }
        }, {
            _th1: {
                value: '5~32',
                isDrawLine: true
            }
        }
    ],
    /**     红球形态重号走势	         27         */
    27:[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '一区走势',
                colspan: 11,
            },
            _th3: {
                content: '二区走势',
                colspan: 11
            },
            _th4: {
                content: '三区走势',
                colspan: 11
            },
            _th5: {
                content: '红球分析',
                colspan: 6
            }
        }, {
            _th1: {
                value: '1~11'
            },
            _th2: {
                value: '12~22'
            },
            _th3: {
                value: '23~33'
            },
            _th4: {
                value: '重号|连号|和值|AC值|三区比|奇偶比',
                replaceTitle: function () {
                    return 0;
                }
            }
        }
    ],

    /**     红球形态连号走势	        28          */
    28:[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '一区走势',
                colspan: 11,
            },
            _th3: {
                content: '二区走势',
                colspan: 11
            },
            _th4: {
                content: '三区走势',
                colspan: 11
            },
            _th5: {
                content: '红球分析',
                colspan: 6
            }
        }, {
            _th1: {
                value: '1~11'
            },
            _th2: {
                value: '12~22'
            },
            _th3: {
                value: '23~33'
            },
            _th4: {
                value: '重号|连号|和值|AC值|三区比|奇偶比',
                replaceTitle: function () {
                    return 0;
                }
            }
        }
    ],

    /**     红球形态斜连号走势	    29          */
    29:[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '一区走势',
                colspan: 11,
            },
            _th3: {
                content: '二区走势',
                colspan: 11
            },
            _th4: {
                content: '三区走势',
                colspan: 11
            },
            _th5: {
                content: '红球分析',
                colspan: 6
            }
        }, {
            _th1: {
                value: '1~11'
            },
            _th2: {
                value: '12~22'
            },
            _th3: {
                value: '23~33'
            },
            _th4: {
                value: '重号|连号|和值|AC值|三区比|奇偶比',
                replaceTitle: function () {
                    return 0;
                }
            }
        }
    ],

    /**    红球形态斜跳号走势	    30          */
    30:[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '一区走势',
                colspan: 11,
            },
            _th3: {
                content: '二区走势',
                colspan: 11
            },
            _th4: {
                content: '三区走势',
                colspan: 11
            },
            _th5: {
                content: '红球分析',
                colspan: 6
            }
        }, {
            _th1: {
                value: '1~11'
            },
            _th2: {
                value: '12~22'
            },
            _th3: {
                value: '23~33'
            },
            _th4: {
                value: '重号|连号|和值|AC值|三区比|奇偶比',
                replaceTitle: function () {
                    return 0;
                }
            }
        }
    ],

    /**     蓝球综合走势 	            41           */
    '41':[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                colspan: 7,
                rowspan: 2,
                noZero: true
            },
            _th3: {
                content: '蓝球走势',
                colspan: 16
            },
            _th4: {
                content: '大小走势',
                colspan: 2,
                isSwitch: true
            },
            _th5: {
                content: '奇偶走势',
                colspan: 2,
                isSwitch: true
            },
            _th6: {
                content: '质合走势',
                colspan: 2,
                isSwitch: true
            },
            _th7: {
                content: '012走势',
                colspan: 3
            }
        }, {
            _th1: {
                value: '1~16',
                isDrawLine: true
            },
            _th2: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th3: {
                value: '奇|偶',
                isDrawLine: true,
                isSwitch: true
            },
            _th4: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th5: {
                value: '余0|余1|余2',
                isDrawLine: true
            }
        }
    ],
    /**     篮球三分区走势	        42	历史开奖数据   */
    '42':[
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                colspan: 7,
                rowspan: 2,
                noZero: true
            },
            _th3: {
                content: '蓝球走势',
                colspan: 16
            },
            _th4: {
                content: '大小走势',
                colspan: 2,
                isSwitch: true
            },
            _th5: {
                content: '奇偶走势',
                colspan: 2,
                isSwitch: true
            },
            _th6: {
                content: '质合走势',
                colspan: 2,
                isSwitch: true
            },
            _th7: {
                content: '012走势',
                colspan: 3
            }
        }, {
            _th1: {
                value: '1~16',
                isDrawLine: true
            },
            _th2: {
                value: '大|小',
                isDrawLine: true,
                isSwitch: true
            },
            _th3: {
                value: '奇|偶',
                isDrawLine: true,
                isSwitch: true
            },
            _th4: {
                value: '质|合',
                isDrawLine: true,
                isSwitch: true
            },
            _th5: {
                value: '余0|余1|余2',
                isDrawLine: true
            }
        }
    ],
    /** 蓝球四行四列   43 */
    43:{}
}