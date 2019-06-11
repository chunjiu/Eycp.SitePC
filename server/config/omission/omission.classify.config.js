/*********************************************************************************************************
 *
 *                                              遗漏分类配置
 *
 *********************************************************************************************************/

'use strict';
module.exports = {
    config: [
        //福利彩票
        {
            name: '福利彩票',
            id: 'digit',
            child: [
                {
                    name: '双色球',
                    id: 'ssq',
                    child: [
                        {
                            name: '红球',
                            child: [
                                {name: '基本', code: 11},
                                {name: '大小', code: 12},
                                {name: '奇偶', code: 13},
                                {name: '质合', code: 14},
                                {name: '和值', code: 15},
                                {name: '跨度', code: 16},
                                {name: '二连号', code: 17},
                                /*{
                                    name: '除三余数',
                                    code: 18,
                                    hasChild: true,
                                    children: [
                                        {name: '余0个数', code: '18'},
                                        {name: '余1个数', code: '19'},
                                        {name: '余2个数', code: '20'},
                                    ]
                                },*/
                                {name: '012路比', code: 21},
                                {
                                    name: '行列遗漏',
                                    code: 22,
                                    pcode: 22,
                                    hasChild: true,
                                    children: [
                                        {name: '七区二行', code: 22, pcode: 22},
                                        {name: '七区二列', code: 23, pcode: 22},
                                        {name: '六区二行', code: 24, pcode: 22},
                                        {name: '六区二列', code: 25, pcode: 22}
                                    ]
                                }
                            ]
                        },
                        {
                            name: '蓝球',
                            child: [
                                {name: '基本', code: 51}
                            ]
                        }
                    ]
                },
                {
                    name: '福彩3D',
                    id: 'fc3d',
                    child: [
                        {
                            name: '定位遗漏',
                            child: [
                                {name: '个位', code: 11},
                                {name: '十位', code: 12},
                                {name: '百位', code: 13}
                            ]
                        },
                        {
                            name: '直选遗漏',
                            child: [
                                {name: '单式', code: 21, searchNum: '0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9', maximumNumberOfBallsPerRow: 10 },
                                {name: '大小', code: 22},
                                {name: '奇偶', code: 23},
                                {name: '质合', code: 24},
                                {name: '跨度', code: 25},
                                {name: '和值', code: 26},
                                {name: '和尾', code: 27}
                            ]
                        },
                        {
                            name: '组三遗漏',
                            child: [
                                {name: '单式', code: 31, searchNum: '0~9'},
                                {name: '一码', code: 32},
                                {name: '二码', code: 33, searchNum: '0~9'},
                                {name: '三码', code: 34, searchNum: '0~9'},
                                {name: '四码', code: 35, searchNum: '0~9'},
                                {name: '五码', code: 36, searchNum: '0~9'},
                                {name: '六码', code: 37, searchNum: '0~9'},
                                {name: '七码', code: 38, searchNum: '0~9'},
                                {name: '八码', code: 39, searchNum: '0~9'},
                                {name: '九码', code: 40, searchNum: '0~9'},
                                {name: '和值', code: 41}
                            ]
                        },
                        {
                            name: '组六遗漏',
                            child: [
                                {name: '三码', code: 51, searchNum: '0~9'},
                                {name: '四码', code: 52, searchNum: '0~9'},
                                {name: '五码', code: 53, searchNum: '0~9'},
                                {name: '六码', code: 54, searchNum: '0~9'},
                                {name: '七码', code: 55, searchNum: '0~9'},
                                {name: '八码', code: 56, searchNum: '0~9'},
                                {name: '和值', code: 57}
                            ]
                        },
                        {
                            name: '其它遗漏',
                            child: [
                                {name: '组选1码', code: 61},
                                {name: '组选2码', code: 62},
                                {name: '十位个位', code: 63},
                                {name: '百位个位', code: 64},
                                {name: '百位十位', code: 65},
                                {name: '组选', code: 66},
                                {name: '和值大小', code: 67},
								{name: '全奇全偶', code: 68},
                                {name: '拖拉机', code: 69}
                            ]
                        }
                    ]
                },
                {
                    name: '七乐彩',
                    id: 'qlc',
                    child: [
                        {
                            name: '基本遗漏',
                            child: [
                                {name: '号码', code: 11}
                            ]
                        },
                        {
                            name: '形态遗漏',
                            child: [
                                {name: '奇偶比', code: 21},
                                {name: '大小比', code: 22},
                                {name: '质合比', code: 23},
                                {name: '012路比', code: 24},
                                {name: '和值', code: 25}
                            ]
                        }
                    ]
                }
            ]
        },

        //体育彩票
        {
            name: '体育彩票',
            id: 'digit',
            child: [
                {
                    name: '大乐透',
                    id: 'dlt',
                    child: [
                        {
                            name: '前区遗漏',
                            child: [
                                {name: '号码', code: 11},
                                {name: '大小比', code: 12},
                                {name: '奇偶比', code: 13},
                                {name: '质合比', code: 14},
                                {name: '和值', code: 15},
                                {name: '跨度', code: 16},
                                {name: '012路比', code: 17},
                                {
                                    name: '行列遗漏',
                                    code: 18,
                                    pcode: 18,
                                    hasChild: true,
                                    children: [
                                        {name: '七区二行', code: 18,pcode: 18},
                                        {name: '七区二列', code: 19,pcode: 18},
                                        {name: '六区二行', code: 20,pcode: 18},
                                        {name: '六区二列', code: 21,pcode: 18}
                                    ]
                                }
                            ]
                        },
                        {
                            name: '后区遗漏',
                            child: [
                                {name: '号码', code: 51},
                                {name: '二码', code: 52},
                                {name: '三码', code: 53},
                                {name: '和值', code: 54},
                                {name: '跨度', code: 55}
                            ]
                        }
                    ]
                },
                {
                    name: '排列3',
                    id: 'pl3',
                    child: [
                        {
                            name: '定位遗漏',
                            child: [
                                {name: '个位', code: 11},
                                {name: '十位', code: 12},
                                {name: '百位', code: 13}
                            ]
                        },
                        {
                            name: '直选遗漏',
                            child: [
                                {name: '单式', code: 21, searchNum: '0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9', maximumNumberOfBallsPerRow: 10},
                                {name: '大小', code: 22},
                                {name: '奇偶', code: 23},
                                {name: '质合', code: 24},
                                {name: '跨度', code: 25},
                                {name: '和值', code: 26},
                                {name: '和尾', code: 27}
                            ]
                        },
                        {
                            name: '组三遗漏',
                            child: [
                                {name: '单式', code: 31, searchNum: '0~9'},
                                {name: '一码', code: 32},
                                {name: '二码', code: 33, searchNum: '0~9'},
                                {name: '三码', code: 34, searchNum: '0~9'},
                                {name: '四码', code: 35, searchNum: '0~9'},
                                {name: '五码', code: 36, searchNum: '0~9'},
                                {name: '六码', code: 37, searchNum: '0~9'},
                                {name: '七码', code: 38, searchNum: '0~9'},
                                {name: '八码', code: 39, searchNum: '0~9'},
                                {name: '九码', code: 40, searchNum: '0~9'},
                                {name: '和值', code: 41}
                            ]
                        },
                        {
                            name: '组六遗漏',
                            child: [
                                {name: '三码', code: 51, searchNum: '0~9'},
                                {name: '四码', code: 52, searchNum: '0~9'},
                                {name: '五码', code: 53, searchNum: '0~9'},
                                {name: '六码', code: 54, searchNum: '0~9'},
                                {name: '七码', code: 55, searchNum: '0~9'},
                                {name: '八码', code: 56, searchNum: '0~9'},
                                {name: '和值', code: 57}
                            ]
                        },
                        {
                            name: '其它遗漏',
                            child: [
                                {name: '组选1码', code: 61},
                                {name: '组选2码', code: 62},
                                {name: '十位个位', code: 63},
                                {name: '百位个位', code: 64},
                                {name: '百位十位', code: 65},
                                {name: '组选', code: 66},
                                {name: '和值大小', code: 67},
								{name: '全奇全偶', code: 68},
                                {name: '拖拉机', code: 69}
                            ]
                        }
                    ]
                },
                {
                    name: '排列5',
                    id: 'pl5',
                    child: [
                        {
                            name: '定位遗漏',
                            child: [
                                {name: '个位', code: 11},
                                {name: '十位', code: 12},
                                {name: '百位', code: 13},
                                {name: '千位', code: 14},
                                {name: '万位', code: 15}
                            ]
                        },
                        {
                            name: '形态遗漏',
                            child: [
                                {name: '大小比', code: 21},
                                {name: '奇偶比', code: 22},
                                {name: '质合比', code: 23},
                                {name: '和值', code: 24},
                                {name: '跨度', code: 25},
                                {name: '012路比', code: 26}
                            ]
                        }
                    ]
                },
                {
                    name: '七星彩',
                    id: 'qxc',
                    child: [
                        {
                            name: '定位遗漏',
                            child: [
                                {name: '第一位', code: 11},
                                {name: '第二位', code: 12},
                                {name: '第三位', code: 13},
                                {name: '第四位', code: 14},
                                {name: '第五位', code: 15},
                                {name: '第六位', code: 16},
                                {name: '第七位', code: 17}
                            ]
                        },
                        {
                            name: '形态遗漏',
                            child: [
								{name: '号码', code: 20},
                                {name: '大小比', code: 21},
                                {name: '奇偶比', code: 22},
                                {name: '质合比', code: 23},
                                {name: '和值', code: 24},
                                {name: '跨度', code: 25},
                                {name: '012路比', code: 26}
                            ]
                        }
                    ]
                }
            ]
        },

        //高频彩票
        {
            name: '高频彩票',
            id: 'high',
            child: [
                {
                    name: '快3',
                    id: 'k3',
                    child: [
                        {
                            name: '基本遗漏',
                            child: [
                                {name: '一码', code: 11},
                                {name: '二码', code: 12, searchNum: '1~6'},
                                {name: '和值', code: 13},
                                {name: '跨度', code: 14},
                                {name: '三同号012路', code: 15}
                            ]
                        },
                        {
                            name: '二不同遗漏',
                            child: [
                                {name: '单选', code: 20, searchNum: '11|22|33|44|55|66|1|2|3|4|5|6', maximumNumberOfBallsPerRow: 6 },
                                {name: '二码', code: 21, searchNum: '11|22|33|44|55|66|1|2|3|4|5|6', maximumNumberOfBallsPerRow: 6 },
                                {name: '三码', code: 22, searchNum: '11|22|33|44|55|66|1|2|3|4|5|6', maximumNumberOfBallsPerRow: 6 },
                                //{name: '二组', code: 23, searchNum: '11|22|33|44|55|66|1|2|3|4|5|6', maximumNumberOfBallsPerRow: 6 },
                                //{name: '三组', code: 24, searchNum: '11|22|33|44|55|66|1|2|3|4|5|6', maximumNumberOfBallsPerRow: 6 },
                                {name: '大小比', code: 23 },
                                {name: '奇偶比', code: 24 },
                                {name: '和值', code: 25},
                                {name: '跨度', code: 26},
                                {name: '背靠背', code: 27},
                                //{name: '形态', code: 28},
                                {name: '012路比', code: 29}
                            ]
                        },
                        {
                            name: '三不同遗漏',
                            child: [
                                {name: '单选', code: 31, searchNum: '1~6'},
                                {name: '四码', code: 32, searchNum: '1~6'},
                                {name: '五码', code: 33, searchNum: '1~6'},
                                {name: '和值', code: 34},
                                {name: '跨度', code: 35},
                                {name: '012路比', code: 36},
                               // {name: '二组', code: 37, searchNum: '1|2|3|4|5|6|1|2|3|4|5|6', maximumNumberOfBallsPerRow: 6 },
                              //  {name: '三组', code: 38, searchNum: '1|2|3|4|5|6|1|2|3|4|5|6|1|2|3|4|5|6', maximumNumberOfBallsPerRow: 6 }
                            ]
                        },
                        {
                            name: '三同号遗漏',
                            child: [
                                {name: '单选', code: 41},
                                {name: '二组', code: 42},
                                {name: '三组', code: 43},
                                {name: '四组', code: 44},
                                {name: '五组', code: 45},
                                {name: '通选', code: 46}

                            ]
                        }
                    ]
                },
                {
                    name: '11选5',
                    id: '11x5',
                    child: [
                        {
                            name: '任选遗漏',
                            child: [
                                {
                                    name: '任一', code: 101
                                },
                                {
                                    name: '任二',
                                    code: 102,
                                    pcode: 102,
                                    hasChild: true,
                                    children: [
                                        {name: '二码', code: 102, searchNum: '01~11', pcode: 102},
                                        {name: '三码', code: 103, searchNum: '01~11', pcode: 102},
                                        {name: '四码', code: 104, searchNum: '01~11', pcode: 102}
                                    ]
                                },
                                {
                                    name: '任三',
                                    code: 105,
                                    pcode: 105,
                                    hasChild: true,
                                    children: [
                                        {name: '三码', code: 105, searchNum: '01~11', pcode: 105},
                                        {name: '四码', code: 106, searchNum: '01~11', pcode: 105},
                                        {name: '五码', code: 107, searchNum: '01~11', pcode: 105}
                                    ]
                                },
                                {
                                    name: '任四',
                                    code: 108,
                                    pcode: 108,
                                    hasChild: true,
                                    children: [
                                        {name: '四码', code: 108, searchNum: '01~11',  pcode: 108},
                                        {name: '五码', code: 109, searchNum: '01~11',  pcode: 108},
                                        {name: '六码', code: 110, searchNum: '01~11',  pcode: 108},
                                        {name: '七码', code: 111, searchNum: '01~11',  pcode: 108}
                                    ]
                                },
                                {
                                    name: '任五',
                                    code: 112,
                                    pcode: 112,
                                    hasChild: true,
                                    children: [
                                        {name: '五码', code: 112, searchNum: '01~11',  pcode: 112},
                                        {name: '六码', code: 113, searchNum: '01~11',  pcode: 112},
                                        {name: '七码', code: 114, searchNum: '01~11',  pcode: 112},
                                        {name: '八码', code: 115, searchNum: '01~11',  pcode: 112},
                                        {name: '九码', code: 116, searchNum: '01~11',  pcode: 112},
                                        {name: '跨度', code: 117,  pcode: 112},
                                        {name: '和值', code: 118,  pcode: 112},
                                        {name: '奇偶比', code: 119,  pcode: 112},
                                        {name: '大小比', code: 120,  pcode: 112},
                                        {name: '质合比', code: 121,  pcode: 112},
                                        {name: '除三余数', code: 122,  pcode: 112},
                                        {name: '三连号', code: 123,  pcode: 112},
                                        {name: '四连号', code: 124,  pcode: 112},
                                        {name: '五连号', code: 125,  pcode: 112}
                                    ]
                                },
                                {
                                    name: '任六',
                                    code: 126,
                                    pcode: 126,
                                    hasChild: true,
                                    children: [
                                        {name: '六码', code: 126, searchNum: '01~11',  pcode: 126},
                                        {name: '七码', code: 127, searchNum: '01~11',  pcode: 126},
                                        {name: '八码', code: 128, searchNum: '01~11',  pcode: 126},
                                        {name: '九码', code: 129, searchNum: '01~11',  pcode: 126}
                                    ]
                                },
                                {
                                    name: '任七',
                                    code: 130,
                                    pcode: 130,
                                    hasChild: true,
                                    children: [
                                        {name: '七码', code: 130, searchNum: '01~11',  pcode: 130},
                                        {name: '八码', code: 131, searchNum: '01~11',  pcode: 130},
                                        {name: '九码', code: 132, searchNum: '01~11',  pcode: 130}
                                    ]
                                },
                                {
                                    name: '任八',
                                    code: 133,
                                    pcode: 133,
                                    hasChild: true,
                                    children: [
                                        {name: '八码', code: 133, searchNum: '01~11',  pcode: 133},
                                        {name: '九码', code: 134, searchNum: '01~11',  pcode: 133}
                                    ]
                                }
                            ]
                        },
                        {
                            name: '直选遗漏',
                            child: [
                                {
                                    name: '前一直选',
                                    code: 201,
                                    pcode: 201,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 201, searchNum: '01~11',  pcode: 201},
                                        {name: '奇偶', code: 202,  pcode: 201},
                                        {name: '大小', code: 203,  pcode: 201},
                                        {name: '质合', code: 204,  pcode: 201},
                                        {name: '012路', code: 205,  pcode: 201}
                                    ]
                                },
                                {
                                    name: '前二直选',
                                    code: 206,
                                    pcode: 206,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 206, searchNum: '01~11',  pcode: 206},
                                        {name: '跨度', code: 207,  pcode: 206},
                                        {name: '和值', code: 208,  pcode: 206},
                                        {name: '奇偶', code: 209,  pcode: 206},
                                        {name: '大小', code: 210,  pcode: 206},
                                        {name: '质合', code: 211,  pcode: 206},
                                        {name: '012路', code: 212,  pcode: 206}
                                    ]
                                },
                                {
                                    name: '第二三位',
                                    code: 213,
                                    pcode: 213,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 213, searchNum: '01~11',  pcode: 213},
                                        {name: '跨度', code: 214,  pcode: 213},
                                        {name: '和值', code: 215,  pcode: 213},
                                        {name: '奇偶', code: 216,  pcode: 213},
                                        {name: '大小', code: 217,  pcode: 213},
                                        {name: '质合', code: 218,  pcode: 213},
                                        {name: '012路', code: 219,  pcode: 213}
                                    ]
                                },
                                {
                                    name: '第一三位',
                                    code: 220,
                                    pcode: 220,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 220, searchNum: '01~11',  pcode: 220},
                                        {name: '跨度', code: 221,  pcode: 220},
                                        {name: '和值', code: 222,  pcode: 220},
                                        {name: '奇偶', code: 223,  pcode: 220},
                                        {name: '大小', code: 224,  pcode: 220},
                                        {name: '质合', code: 225,  pcode: 220},
                                        {name: '012路', code: 226,  pcode: 220}
                                    ]
                                },
                                {
                                    name: '前三直选',
                                    code: 227,
                                    pcode: 227,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 227, searchNum: '01~11',  pcode: 227},
                                        {name: '跨度', code: 228,  pcode: 227},
                                        {name: '和值', code: 229,  pcode: 227},
                                        {name: '奇偶', code: 230,  pcode: 227},
                                        {name: '大小', code: 231,  pcode: 227},
                                        {name: '质合', code: 232,  pcode: 227},
                                        {name: '012路', code: 233,  pcode: 227}
                                    ]
                                }
                            ]
                        },
                        {
                            name: '组选遗漏',
                            child: [
                                {
                                    name: '前二组选',
                                    code: 301,
                                    pcode: 301,
                                    hasChild: true,
                                    children: [
                                        {name: '二码', code: 301, searchNum: '01~11',  pcode: 301},
                                        {name: '三码', code: 302, searchNum: '01~11',  pcode: 301},
                                        {name: '四码', code: 303, searchNum: '01~11',  pcode: 301},
                                        {name: '五码', code: 304, searchNum: '01~11',  pcode: 301},
                                        {name: '六码', code: 305, searchNum: '01~11',  pcode: 301},
                                        {name: '七码', code: 306, searchNum: '01~11',  pcode: 301},
                                        {name: '八码', code: 307, searchNum: '01~11',  pcode: 301},
                                        {name: '跨度', code: 308,  pcode: 301},
                                        {name: '和值', code: 309,  pcode: 301},
                                        {name: '奇偶比', code: 310,  pcode: 301},
                                        {name: '大小比', code: 311,  pcode: 301},
                                        {name: '质合比', code: 312,  pcode: 301},
                                        {name: '012路比', code: 313,  pcode: 301}
                                    ]
                                },
                                {
                                    name: '前三组选',
                                    code: 314,
                                    pcode: 314,
                                    hasChild: true,
                                    children: [
                                        {name: '三码', code: 314, searchNum: '01~11', pcode: 314},
                                        {name: '四码', code: 315, searchNum: '01~11', pcode: 314},
                                        {name: '五码', code: 316, searchNum: '01~11', pcode: 314},
                                        {name: '六码', code: 317, searchNum: '01~11', pcode: 314},
                                        {name: '七码', code: 318, searchNum: '01~11', pcode: 314},
                                        {name: '八码', code: 319, searchNum: '01~11', pcode: 314},
                                        {name: '跨度', code: 320, pcode: 314},
                                        {name: '和值', code: 321, pcode: 314},
                                        {name: '奇偶比', code: 322, pcode: 314},
                                        {name: '大小比', code: 323, pcode: 314},
                                        {name: '质合比', code: 324, pcode: 314},
                                        {name: '012路比', code: 325, pcode: 314}
                                    ]
                                }
                            ]
                        },
                        {
                            name: '定位遗漏',
                            child: [
                                {
                                    name: '第一位',
                                    code: 401,
                                    pcode: 401,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 401, pcode: 401},
                                        {name: '奇偶', code: 402, pcode: 401},
                                        {name: '大小', code: 403, pcode: 401},
                                        {name: '质合', code: 404, pcode: 401},
                                        {name: '012路', code: 405, pcode: 401}
                                    ]
                                },
                                {
                                    name: '第二位',
                                    code: 406,
                                    pcode: 406,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 406, pcode: 406},
                                        {name: '奇偶', code: 407, pcode: 406},
                                        {name: '大小', code: 408, pcode: 406},
                                        {name: '质合', code: 409, pcode: 406},
                                        {name: '012路', code: 410, pcode: 406}
                                    ]
                                },
                                {
                                    name: '第三位',
                                    code: 411,
                                    pcode: 411,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 411, pcode: 411},
                                        {name: '奇偶', code: 412, pcode: 411},
                                        {name: '大小', code: 413, pcode: 411},
                                        {name: '质合', code: 414, pcode: 411},
                                        {name: '012路', code: 415, pcode: 411}
                                    ]
                                },
                                {
                                    name: '第四位',
                                    code: 416,
                                    pcode: 416,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 416, pcode: 416},
                                        {name: '奇偶', code: 417, pcode: 416},
                                        {name: '大小', code: 418, pcode: 416},
                                        {name: '质合', code: 419, pcode: 416},
                                        {name: '012路', code: 420, pcode: 416}
                                    ]
                                },
                                {
                                    name: '第五位',
                                    code: 421,
                                    pcode: 421,
                                    hasChild: true,
                                    children: [
                                        {name: '号码', code: 421, pcode: 421},
                                        {name: '奇偶', code: 422, pcode: 421},
                                        {name: '大小', code: 423, pcode: 421},
                                        {name: '质合', code: 424, pcode: 421},
                                        {name: '012路', code: 425, pcode: 421}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '快乐十分',
                    id: 'kl10',
                    child: [
                        {
                            name: '选一遗漏',
                            child: [
                                {name: '前一', code: 11, searchNum: '01~20'}
                            ]
                        },
                        {
                            name: '选二遗漏',
                            child: [
                                {name: '任选', code: 21, searchNum: '01~20'},
                                {name: '连组', code: 22, searchNum: '01~20'},
                                {name: '连直', code: 23, searchNum: '01~20'}
                            ]
                        },
                        {
                            name: '选三遗漏',
                            child: [
                                {name: '任选', code: 31, searchNum: '01~20'},
                                {
                                    name: '前组',
                                    code: 32,
                                    pcode: 32,
                                    hasChild: true,
                                    children: [
                                        {name: '组选', code: 32, searchNum: '01~20', pcode: 32},
                                        {name: '跨度', code: 33, pcode: 32},
                                        {name: '和值', code: 34, pcode: 32},
                                        {name: '大小比', code: 35, pcode: 32},
                                        {name: '奇偶比', code: 36, pcode: 32},
                                        {name: '质合比', code: 37, pcode: 32},
                                        {name: '012路', code: 38, pcode: 32}
                                    ]
                                },
                                {
                                    name: '前直',
                                    code: 39,
                                    pcode: 39,
                                    hasChild: true,
                                    children: [
                                        {name: '大小', code: 39, pcode: 39},
                                        {name: '奇偶', code: 40, pcode: 39},
                                        {name: '质合', code: 41, pcode: 39},
                                        {name: '012路', code: 42, pcode: 39}
                                    ]
                                }
                            ]
                        },
                        {
                            name: '八码遗漏',
                            child: [
                                {name: '大小比', code: 51},
                                {name: '奇偶比', code: 52},
                                {name: '质合比', code: 53},
                                {name: '012路比', code: 54},
                                {name: '跨度', code: 55}
                            ]
                        }
                    ]
                },
                {
                    name: '广西快乐十分',
                    id: 'gxkl10',
                    child: [
                        {
                            name: '基本遗漏',
                            child: [
                                {name: '一码', code: 11, searchNum: '01~21'},
                                {name: '二码', code: 12, searchNum: '01~21'},
                                {name: '三码', code: 13, searchNum: '01~21'},
                               // {name: '四码', code: 14, searchNum: '01~21'},
                               //{name: '五码', code: 15, searchNum: '01~21'}
                            ]
                        },
                        {
                            name: '形态遗漏',
                            child: [
                                {name: '大小比', code: 21},
                                {name: '奇偶比', code: 22},
                                {name: '质合比', code: 23},
                                {name: '012路', code: 24}
                            ]
                        }
                    ]
                },
                {
                    name: '时时彩',
                    id: 'ssc',
                    child: [
                        {
                            name: '任一遗漏',
                            child: [
                                {name: '个位', code: 11},
                                {name: '十位', code: 12},
                                {name: '百位', code: 13},
                                {name: '千位', code: 14},
                                {name: '万位', code: 15}
                            ]
                        },
                        {
                            name: '任二遗漏',
                            child: [
                                {name: '十个', code: 16, searchNum: '0~9'},
                                {name: '百个', code: 17, searchNum: '0~9'},
                                {name: '千个', code: 18, searchNum: '0~9'},
                                {name: '万个', code: 19, searchNum: '0~9'},
                                {name: '百十', code: 20, searchNum: '0~9'},
                                {name: '千十', code: 21, searchNum: '0~9'},
                                {name: '万十', code: 22, searchNum: '0~9'},
                                {name: '千百', code: 23, searchNum: '0~9'},
                                {name: '万百', code: 24, searchNum: '0~9'},
                                {name: '万千', code: 25, searchNum: '0~9'}
                            ]
                        },
                        {
                            name: '二星直选',
                            child: [
                                {name: '单式', code: 51, searchNum: '0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9', maximumNumberOfBallsPerRow: 10 },
                                {name: '和值', code: 52},
                                {name: '大小单双', code: 53}
                            ]
                        },
                        {
                            name: '二星组选',
                            child: [
                                {name: '单式', code: 54, searchNum: '0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9', maximumNumberOfBallsPerRow: 10},
                                {name: '和值', code: 55}
                            ]
                        },
                        {
                            name: '三星直选',
                            child: [
                                {name: '单式', code: 56, searchNum: '0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9', maximumNumberOfBallsPerRow: 10 },
                                {name: '和值', code: 57}
                            ]
                        },
                        {
                            name: '三星组三',
                            child: [
                                {name: '单式', code: 58, searchNum: '00|11|22|33|44|55|66|77|88|99|0|1|2|3|4|5|6|7|8|9', maximumNumberOfBallsPerRow: 10 },
                                {name: '一码', code: 59},
                                {name: '二码', code: 60, searchNum: '0~9'},
                                {name: '三码', code: 61, searchNum: '0~9'},
                                {name: '四码', code: 62, searchNum: '0~9'},
                                {name: '五码', code: 63, searchNum: '0~9'},
                                {name: '和值', code: 64},
                                {name: '大小比', code: 65},
                                {name: '奇偶比', code: 66},
                                {name: '质合比', code: 67}
                            ]
                        },
                        {
                            name: '三星组六',
                            child: [
                                {name: '单式', code: 68, searchNum: '0~9'},
                                {name: '四码', code: 69, searchNum: '0~9'},
                                {name: '五码', code: 70, searchNum: '0~9'},
                                {name: '和值', code: 71},
                                {name: '大小比', code: 72},
                                {name: '奇偶比', code: 73},
                                {name: '质合比', code: 74}
                            ]
                        }
                    ]
                },
                {
                    name: '幸运农场',
                    id: 'xync',
                    child: [
                        {
                            name: '选一遗漏',
                            child: [
                                {name: '前一', code: 11, searchNum: '01~20'}
                            ]
                        },
                        {
                            name: '选二遗漏',
                            child: [
                                {name: '任选', code: 21, searchNum: '01~20'},
                                {name: '连组', code: 22, searchNum: '01~20'},
                                {name: '连直', code: 23, searchNum: '01~20'}
                            ]
                        },
                        {
                            name: '选三遗漏',
                            child: [
                                {name: '任选', code: 31, searchNum: '01~20'},
                                {
                                    name: '前组',
                                    code: 32,
                                    pcode: 32,
                                    hasChild: true,
                                    children: [
                                        {name: '组选', code: 32, searchNum: '01~20', pcode: 32},
                                        {name: '跨度', code: 33, pcode: 32},
                                        {name: '和值', code: 34, pcode: 32},
                                        {name: '大小比', code: 35, pcode: 32},
                                        {name: '奇偶比', code: 36, pcode: 32},
                                        {name: '质合比', code: 37, pcode: 32},
                                        {name: '012路', code: 38, pcode: 32}
                                    ]
                                },
                                {
                                    name: '前直',
                                    code: 39,
                                    pcode: 39,
                                    hasChild: true,
                                    children: [
                                        {name: '大小', code: 39, pcode: 39},
                                        {name: '奇偶', code: 40, pcode: 39},
                                        {name: '质合', code: 41, pcode: 39},
                                        {name: '012路', code: 42, pcode: 39}
                                    ]
                                }
                            ]
                        },
                        {
                            name: '八码遗漏',
                            child: [
                                {name: '大小比', code: 51},
                                {name: '奇偶比', code: 52},
                                {name: '质合比', code: 53},
                                {name: '012路比', code: 54},
                                {name: '跨度', code: 55}
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};