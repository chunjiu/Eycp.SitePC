﻿/***********************************************************************************
 *
 *                           玩法说明的配置
 *
 ***********************************************************************************/
'use strict';

/**
 *     ******************  排列5系列枚举  *******************
		定位个位 = 11,
        定位十位 = 12,
        定位百位 = 13,
        定位千位 = 14,
        定位万位 = 15,

        形态大小比 = 21,
        形态奇偶比 = 22,
        形态质合比 = 23,
        形态和值 = 24,
        形态跨度 = 25,
        形态012路比 = 26

 */
module.exports = {

    'common':  	'<b>出现次数</b>：指统计期次数内共出现次数统计<br>'+
						'<b>理论次数</b>：指统计期次数内理论上会出现几次<br>'+
						'<b>平均遗漏</b>：指统计期次数内平均遗漏次数，遗漏期数/出现期数<br>'+
						'<b>最大遗漏</b>：指统计期次数内最大的一次遗漏数值<br>'+
						'<b>前3次遗漏</b>：指统计期次数内，该组号码往前第三次出现时的遗漏值<br>'+
						'<b>前2次遗漏</b>：指统计期次数内，该组号码往前第二次出现时的遗漏值<br>'+
						'<b>前1次遗漏</b>：指统计期次数内，该组号码往前第一次出现时的遗漏值<br>'+
						'<b>遗漏图表</b>：点击可以查看近期遗漏的图表<br>'+
						'<b>循环周期</b>：指理论上出现一次需要几期<br>'+
						'<b>周期图表</b>：点击可以查看最近周期内号码出现期数<br>'+
						'<b>欲出几率</b>：当前遗漏÷平均遗漏×100%所得值<br>'+
						'<b>回补几率</b>：当前遗漏÷循环周期所得值。<br>'+
						'<b>投资价值</b>：(上期遗漏-当前遗漏)÷循环周期所得值',
    'cycle':'<b>横坐标</b>：表明的是该组号码在近100次内的循环周期出现次数分布<br>'+
    '<b>纵坐标</b>：表明是该组号码在各遗漏次数内对应的遗漏值<br>'+
    '<b>遗漏分层</b>：右表显示的是该组号码的出号详情，与左边曲线图相对应<br>',

    'frequency':'<b>横坐标</b>：表明的是该组号码在近100次内的遗漏次数分布<br>'+
    '<b>纵坐标</b>：表明是该组号码在各遗漏次数内对应的遗漏值<br>'+
    '<b>遗漏分层</b>：右表显示的是该组号码的出号详情，与左边曲线图相对应<br>',
    '11':   '',

	'12':   '',

	'13':    '',

	'14':    '',

	'15':   '',

	'21':   '<b>大小</b>：小数：0-4  大数：5-9<br>',

	'22':   '<b>奇偶</b>：能被2整除的号码为偶数，不能被2整除的号码为奇数<br>',

	'23':   '<b>质合</b>：只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br>'+
			'<b>质数</b>：1 2 3 5 7<br>'+
			'<b>合数</b>：0 4 6 8 9<br>',

	'24':   '<b>和值</b>：指开奖号码和的值<br>',

	'25':   '<b>跨度</b>：指开奖号码最大与最小差的值<br>',

	'26':   '<b>除3余数</b>：开奖号码除以3的余数为0路、1路和2路。<br>'+
			'<b>0路</b>：0 3 6 9<br>'+
			'<b>1路</b>：1 4 7<br>'+
			'<b>2路</b>：2 5 8<br>'+
			'<b>0:0:5</b>：代表开奖号码有0个余数为0，0个余数为1,5个余数为2<br>'

}
