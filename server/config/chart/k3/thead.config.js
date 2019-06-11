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

      /**   基本基本走势 = 1  */
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
                    noZero: true
                },
                _th3: {
                    content: '开奖号码分布图',
                    colspan: 6,
                    width: 250
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
                    colspan: 16,
                    width: 445
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
            }
        ],

        /**    基本和值走势 = 2	       */
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
                    noZero: true
                },
                _th3: {
                    content: '和值分布',
                    colspan: 16
                },
                _th4: {
                    content: '和值形态',
                    colspan: 6,
                    isSwitch: true
                },
                _th5: {
                    content: '除3余数',
                    colspan: 3,
                }
            }, {
                _th1: {
                    value: '3~18',
                    isDrawLine: true
                },
                _th2: {
                    value: '大|小|奇|偶|质|合',
                    isSwitch: true
                },
                _th3: {
                    value: '余0|余1|余2',
                    isDrawLine: true
                }
            }
        ],

         /**    基本形态走势 = 3	  */
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
                    noZero: true
                },
                _th3: {
                    content: '开奖号码分布图',
                    colspan: 6
                },
                _th4: {
                    content: '号码形态',
                    colspan: 3
                },
                _th5: {
                    content: '跨度',
                    colspan: 6,
                },
                _th6: {
                    content: '和值',
                    colspan: 17,
                    width: 500
                }
            }, {
                _th1: {
                    value: '1~6'
                },
                _th2: {
                    value: '三同号|二同号|三不同'
                },
                _th3: {
                    value: '0~5',
                    isDrawLine: true
                },
                _th4: {
                    value: '3~18',
                    isDrawLine: true
                }
            }
        ],

        /**    基本组合走势 = 4	  */
        "4": [
        {
            _th1: {
                content: '期号',
                rowspan: 2
            },
            _th2: {
                content: '开奖号码',
                rowspan: 2,
                colspan: 3,
                noZero: true
            },
            _th3: {
                content: '开奖号码分布图',
                colspan: 6
            },
            _th4: {
                content: '2同号',
                colspan: 6
            },
            _th5: {
                content: '2不同',
                colspan: 15
            },
            _th6: {
                content: '跨度',
                colspan: 6
            },
            _th7: {
                content: '和值',
                rowspan: 2
            }
        }, {
            _th1: {
                value: '1~6'
            },
            _th2: {
                value: '11|22|33|44|55|66'
            },
            _th3: {
                value: '12|13|14|15|16|23|24|25|26|34|35|36|45|46|56'
            },
            _th4: {
                value: '0~5',
                isDrawLine: true
            },
            _th5: {
                value: ''
            },
            _th6: {
                value: ''
           }
        }
    ],


    /**   基本012路走势 = 5  */
        "5": [
            {
                _th1: {
                    content: '期号',
                    rowspan: 2
                },
                _th2: {
                    content: '开奖号码',
                    rowspan: 2,
                    colspan: 3,
                    noZero: true
                },
                _th3: {
                    content: '开奖号码分布图',
                    colspan: 6
                },
                _th4: {
                    content: '第一位',
                    colspan: 3,

                },
                _th5: {
                    content: '第二位',
                    colspan: 3
                },
                _th6: {
                    content: '第三位',
                    colspan: 3
                },
                _th7: {
                    content: '012余数比',
                    rowspan: 2
                },
                _th8: {
                    content: '跨度',
                    colspan: 6
                }
            }, {
                _th1: {
                    value: '1~6'
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
                    value: ''
                },
                _th6: {
                    value: '0~5',
                    isDrawLine: true
                }
            }
        ],

        /**   分布号码统计	  15  */
        "15": [
            {
                _th1: {
                    content: '号码',
                },
                _th2: {
                    content: '总次数',
                }
            }
        ],

        /**   分布组合统计	     16  */
        "16": [
            {
                _th1: {
                    content: '日期',
                    rowspan: 2,
                    width: 150
                },
                _th2: {
                    content: '',
                    isShow: false
                },
                _th3: {
                    content: '号码组合',
                    colspan: 29,
                    width: 850
                }
            },{
                _th1:{
                    value: '11|22|33|44|55|66',
                    replaceTitle: function () {
                        return '';
                    }
                },
                _th2:{
                    value: '12|13|14|15|16|23|24|25|26|34|35|36|45|46|56',
                    replaceTitle: function () {
                        return '';
                    }
                }
            }
        ],

        /**   分布和值统计	   17  */
        "17": [
            {
                _th1: {
                    content: '日期',
                    rowspan: 2
                },
                _th2: {
                    content: '',
                    isShow: false
                },
                _th3: {
                    content: '号码和值',
                    colspan: 16
                }
            },{
                _th1:{
                    value: '3~18',
                    replaceTitle: function () {
                        return '';
                    }
                }
            }
        ],

        /**   形态跨度统计	   18  */
        "18": [
            {
                _th1: {
                    content: '日期',
                    rowspan: 2
                },
                _th2: {
                    content: '',
                    isShow: false
                },
                _th3: {
                    content: '形态',
                    colspan: 6
                },
                _th4: {
                    content: '跨度',
                    colspan: 6
                }
            },{
                _th1:{
                    value: '全偶|全奇|全大|全小|二同号|三不同',
                    replaceTitle: function () {
                        return '';
                    }
                },
                _th2:{
                    value: '0~5',
                    replaceTitle: function () {
                        return '';
                    }
                }
            }
        ]
}