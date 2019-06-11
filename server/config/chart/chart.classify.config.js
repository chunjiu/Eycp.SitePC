/*********************************************************************************************************
 *
 *                                              图表分类配置
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
                            name: '综合',
                            child: [
                                {name: '基本走势', code: 11},
                                {name: '周二走势', code: 11, queryDay: 1},
                                {name: '周四走势', code: 11, queryDay: 3},
                                {name: '周日走势', code: 11, queryDay: 6}
                            ]
                        },
                        {
                            name: '红球',
                            child: [
                                {name: '三分区', code: 12},
                                {name: '四分区', code: 13},
                                {name: '七分区', code: 14},
                                {name: '六行六列', code: 15},
                                {name: '七行五列', code: 16}
                            ]
                        },
                        {
                            name: '红球形态',
                            child: [
                                {name: '大小', code: 21},
                                {name: '奇偶', code: 22},
                                {name: '质合', code: 23},
                                {name: '除三余数', code: 24},
                                {name: '和值', code: 25},
                                {name: '跨度', code: 26},
                                {name: '重号', code: 27},
                                {name: '连号', code: 28},
                                {name: '斜连号', code: 29},
                                {name: '斜跳号', code: 30}
                            ]
                        },
                        {
                            name: '蓝球',
                            child: [
                                {name: '综合走势', code: 41},
                                {name: '三分区', code: 42},
                                {name: '4*4矩形', code: 43}
                            ]
                        }
                    ]
                },
                {
                    name: '福彩3D',
                    id: 'fc3d',
                    child: [
                        {
                            name: '定位走势',
                            child: [
                                {name: '个位', code: 1},
                                {name: '十位', code: 2},
                                {name: '百位', code: 3}
                            ]
                        },
                        {
                            name: '综合走势',
                            child: [
                                {name: '基本', code: 11},
                                {name: '奇偶', code: 12},
                                {name: '大小', code: 13},
                                {name: '升平降', code: 14},
                                {name: '012路', code: 15},
                                {name: '号码个数', code: 16},
                                {name: '质合', code: 17},
                                {name: '跨度', code: 18},
                                {name: '和值', code: 19},
                                {name: '尾数类型', code: 20}
                            ]
                        }
                    ]
                },
                {
                    name: '七乐彩',
                    id: 'qlc',
                    child: [
                        {
                            name: '基本走势',
                            child: [
                                {name: '分布', code: 1}
                            ]
                        },
                        {
                            name: '形态走势',
                            child: [
                                {name: '大小', code: 11},
                                {name: '奇偶', code: 12},
                                {name: '质合', code: 13},
                                {name: '012路', code: 14},
                                {name: '重号', code: 15}
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
                            name: '综合走势',
                            child: [
                                {name: '基本', code: 11},
                                {name: '重号', code: 12},
                                {name: '连号', code: 13},
                                {name: '斜连号', code: 14},
                                {name: '斜跳号', code: 15}
                            ]
                        },
                        {
                            name: '前区走势',
                            child: [
                                {name: '大小', code: 21},
                                {name: '和值', code: 22},
                                {name: '奇偶', code: 23},
                                {name: '质合', code: 24},
                                {name: '除3余数', code: 25},
                                {name: '跨度', code: 26}
                            ]
                        },
                        {
                            name: '后区走势',
                            child: [
                                {name: '基本', code: 41},
                                {name: '和值', code: 42}
                            ]
                        },
                        {
                            name: '行列图走势',
                            child: [
                                {name: '六行六列', code: 51},
                                {name: '七行五列', code: 52}
                            ]
                        }
                    ]
                },
                {
                    name: '排列3',
                    id: 'pl3',
                    child: [
                        {
                            name: '定位走势',
                            child: [
                                {name: '个位', code: 1},
                                {name: '十位', code: 2},
                                {name: '百位', code: 3}
                            ]
                        },
                        {
                            name: '综合走势',
                            child: [
                                {name: '基本', code: 11},
                                {name: '奇偶', code: 12},
                                {name: '大小', code: 13},
                                {name: '升平降', code: 14},
                                {name: '012路', code: 15},
                                {name: '号码个数', code: 16},
                                {name: '质合', code: 17},
                                {name: '跨度', code: 18},
                                {name: '和值', code: 19},
                                {name: '尾数类型', code: 20}
                            ]
                        }
                    ]
                },
                {
                    name: '排列5',
                    id: 'pl5',
                    child: [
                        {
                            name: '定位走势',
                            child: [
                                {name: '个位', code: 1},
                                {name: '十位', code: 2},
                                {name: '百位', code: 3},
                                {name: '千位', code: 4},
                                {name: '万位', code: 5}
                            ]
                        },
                        {
                            name: '综合走势',
                            child: [
                                {name: '分布', code: 11},
                                {name: '奇偶', code: 12},
                                {name: '大小', code: 13},
                                {name: '升平降', code: 14},
                                {name: '012路', code: 15},
                                {name: '号码个数', code: 16},
                                {name: '质合', code: 17},
                                {name: '跨度', code: 18},
                                {name: '和值', code: 19},
                                {name: '尾数类型', code: 20}
                            ]
                        }
                    ]
                },
                {
                    name: '七星彩',
                    id: 'qxc',
                    child: [
                        {
                            name: '基本走势',
                            child: [
                                {name: '分布', code: 1}
                            ]
                        },
                        {
                            name: '形态走势',
                            child: [
                                {name: '大小', code: 11},
                                {name: '奇偶', code: 12},
                                {name: '质合', code: 13},
                                {name: '012路', code: 14}
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
                            name: '基本走势',
                            child: [
                                {name: '基本', code: 1},
                                {name: '和值', code: 2},
                                {name: '形态', code: 3},
                                {name: '组合', code: 4},
                                {name: '012路', code: 5},
                            ]
                        },
                        {
                            name: '分布统计',
                            child: [
                                {name: '号码', code: 15},
                                {name: '组合', code: 16},
                                {name: '和值', code: 17},
                                {name: '形态跨度', code: 18}
                            ]
                        }
                    ]
                },
                {
                    name: '11选5',
                    id: '11x5',
                    child: [
                        {
                            name: '基本走势',
                            child: [
                                {name: '分布', code: 1},
                                {name: '大小', code: 2},
                                {name: '奇偶', code: 3},
                                {name: '质合', code: 4},
                                {name: '跨度', code: 5},
                                {name: '和值', code: 6},
                                {name: '平均值', code: 7},
                                {name: '升平降', code: 8},
                                {name: '012路', code: 9},
                                {name: '重号', code: 10},
                                {name: '连号', code: 11},
                                {name: 'AC', code: 12},
                            ]
                        },
                        {
                            name: '前二走势',
                            child: [
                                {name: '组选', code: 30},
                                {name: '直选', code: 31},
                                {name: '大小', code: 32},
                                {name: '奇偶', code: 33},
                                {name: '质合', code: 34},
                                {name: '跨度', code: 35},
                                {name: '和值', code: 36},
                                {name: '平均值', code: 37},
                                {name: '升平降', code: 38},
                                {name: '012路', code: 39},
                                {name: '重号', code: 40}
                            ]
                        },
                        {
                            name: '前三走势',
                            child: [
                                {name: '组选', code: 61},
                                {name: '直选', code: 62},
                                {name: '大小', code: 63},
                                {name: '奇偶', code: 64},
                                {name: '质合', code: 65},
                                {name: '跨度', code: 66},
                                {name: '和值', code: 67},
                                {name: '平均值', code: 68},
                                {name: '升平降', code: 69},
                                {name: '012路', code: 70},
                                {name: '重号', code: 71}
                            ]
                        },
                        {
                            name: '定位走势',
                            child: [
                                {name: '第一位', code: 91},
                                {name: '第二位', code: 92},
                                {name: '第三位', code: 93},
                                {name: '第四位', code: 94},
                                {name: '第五位', code: 95}
                            ]
                        },
                        {
                            name: '八区统计',
                            child: [
                                {name: '任一', code: 501},
                                {name: '任二', code: 502},
                                {name: '任三', code: 503},
                                {name: '任四', code: 504},
                                {name: '任五', code: 505},
                                {name: '和值', code: 506},
                                {name: '前一', code: 507},
                                {name: '前二组选', code: 508},
                                {name: '前二直选', code: 509},
                                {name: '前三组选', code: 510},
                                {name: '前三直选', code: 511}
                            ]
                        },
                        {
                            name: '多日统计',
                            child: [
                                {name: '任一', code: 100},
                                {name: '任二', code: 101},
                                {name: '任三', code: 102},
                                {name: '任四', code: 103},
                                {name: '任五', code: 104},
                                {name: '和值', code: 105},
                                {name: '跨度', code: 106},
                                {name: '前一', code: 107},
                                {name: '前二直选', code: 108},
                                {name: '前二组选', code: 109},
                                {name: '前二和值', code: 110},
                                {name: '前二跨度', code: 111},
                                {name: '前三直选', code: 112},
                                {name: '前三组选', code: 113},
                                {name: '前三和值', code: 114},
                                {name: '前三跨度', code: 115}
                            ]
                        }
                    ]
                },
                {
                    name: '快乐十分',
                    id: 'kl10',
                    child: [
                        {
                            name: '基本走势',
                            child: [
                                {name: '分布', code: 1},
                                {name: '大小', code: 2},
                                {name: '奇偶', code: 3},
                                {name: '区间', code: 4},
                                {name: '同尾', code: 5},
                                {name: '重号', code: 6},
                                {name: '二连号', code: 7},
                                {name: '三连号', code: 8},
                                {name: '隔位码', code: 9},
                            ]
                        },
                        {
                            name: '定位走势',
                            child: [
                                {name: '第一位', code: 21},
                                {name: '第二位', code: 22},
                                {name: '第三位', code: 23}
                            ]
                        },
                        {
                            name: '前二走势',
                            child: [
                                {name: '组选', code: 30},
                                {name: '直选', code: 31},
                                {name: '大小', code: 32},
                                {name: '奇偶', code: 33},
                                {name: '质合', code: 34},
                                {name: '升平降', code: 35},
                                {name: '012路', code: 36}
                               
                            ]
                        },
                        {
                            name: '前三走势',
                            child: [
                                {name: '分布', code: 50}
                            ]
                        }
                    ]
                },
                {
                    name: '广西快乐十分',
                    id: 'gxkl10',
                    child: [
                        {
                            name: '基本走势',
                            child: [
                                {name: '分布', code: 1},
                                {name: '大小', code: 2},
                                {name: '奇偶', code: 3},
                                {name: '重号', code: 4},
                                {name: '二连号', code: 5},
                                {name: '三连号', code: 6}
                            ]
                        },
                        {
                            name: '定位走势',
                            child: [
                                {name: '第一位', code: 21},
                                {name: '第二位', code: 22},
                                {name: '第三位', code: 23},
                                {name: '第四位', code: 24},
                                {name: '第五位', code: 25}
                            ]
                        }
                    ]
                },
                {
                    name: '时时彩',
                    id: 'ssc',
                    child: [
                        {
                            name: '一星走势',
                            child: [
                                {name: '基本', code: 1},
                                {name: '形态', code: 2}
                            ]
                        },
                        {
                            name: '二星走势',
                            child: [
                                {name: '基本', code: 10},
                                {name: '形态', code: 11},
                                {name: '和值', code: 12},
                                {name: '直选形态', code: 13},
                                {name: '组选形态', code: 14},
                                {name: '跨度', code: 15},
                                {name: '大小', code: 16},
                                {name: '单双', code: 17}
                            ]
                        },
                        {
                            name: '三星走势',
                            child: [
                                {name: '基本', code: 30},
                                {name: '形态', code: 31},
                                {name: '直选形态', code: 32},
                                {name: '组选形态', code: 33},
                                {name: '和值', code: 34},
                                {name: '跨度', code: 35}
                            ]
                        },
                        {
                            name: '四星走势',
                            child: [
                                {name: '基本', code: 50},
                                {name: '形态', code: 51}
                            ]
                        },
                        {
                            name: '五星走势',
                            child: [
                                {name: '基本', code: 61},
                                {name: '形态', code: 62},
                                {name: '大小', code: 63},
                                {name: '单双', code: 64}
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
