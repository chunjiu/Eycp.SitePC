﻿/***********************************************************************************
 *
 *                           玩法说明的配置
 *
 ***********************************************************************************/
'use strict';

/**
 *     ******************  双色球系列枚举  *******************
        红球基本 = 11,	    
        红球大小 = 12,	    
        红球奇偶 = 13,	    
        红球质合 = 14,	    
        红球和值 = 15,	    
        红球跨度 = 16,	    
        红球二连号 = 17,	    
        红球除三余0个数 = 18,	    
        红球除三余1个数 = 19,	    
        红球除三余2个数 = 20,	
        红球012路比 = 21,	    
        红球七区二行 = 22,	    
        红球七区二列 = 23,	    
        红球六区二行 = 24,	    
        红球六区二列 = 25,	    
	   
        蓝球基本 = 51	    
   

 */
module.exports = {

    'common':   '<b>出现次数</b>：指统计期次数内共出现次数统计<br>'+
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
    '11':  '',
	'12':   '<b>大小</b>：小数：01-16  大数：17-33<br>'+
			'<b>号码</b>：大数个数：小数个数<br>',

	'13':   '<b>奇偶</b>：能被2整除的号码为偶数，不能被2整除的号码为奇数<br>'+
			'<b>号码</b>：奇数个数：偶数个数。<br>',

    '14':   '<b>质合</b>：只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br>'+
			'<b>质数</b>：01 02 03 05 07 11 13 17 19 23 29 31<br>'+
			'<b>合数</b>：04 06 08 09 10 12 14 15 16 18 20 21 22 24 25 26 27 28 30 32 33<br>'+
			'<b>号码</b>：质数个数：合数个数。<br>',

    '15':   '<b>和值</b>：指开奖号码和的值<br>',

    '16':   '<b>跨度</b>：开奖号码中，最大与最小差的值。<br>',

    '17':  '',
	'21':   '<b>除3余数</b>：即012路，开奖号码除以3的余数为0路、1路和2路。<br>'+
			'<b>0路</b>：03 06 09 12 15 18 21 24 27 30<br>'+
			'<b>1路</b>：01 04 07 10 13 16 19 22 25 28 31<br>'+
			'<b>2路</b>：02 05 08 11 14 17 20 23 26 29 32<br>'+
			'0:0:6 代表红球有0个余数为0，0个余数为1,6个余数为2<br>',

	'22':   '<b>行列</b>： 7区是指33个红球分7个行<br>'+
			'<b>1行</b>：01、02、03、04、05<br>'+
			'<b>2行</b>：06、07、08、09、10<br>'+
			'<b>3行</b>：11、12、13、14、15<br>'+
			'<b>4行</b>：16、17、18、19、20<br>'+
			'<b>5行</b>：21、22、23、24、25<br>'+
			'<b>6行</b>：26、27、28、29、30<br>'+
			'<b>7行</b>：31、32、33<br>'+
			'7行之间2行组合遗漏，例如1-2行遗漏表示不包括（01、02、03、04、05、）和（06、07、08、09、10）这10个号码的遗漏<br>',

    '23':   '<b>行列</b>： 33个红球分5列<br>'+
			'<b>1列</b>：01、06、11、16、21、26、31<br>'+
			'<b>列</b>：02、07、12、17、22、27、32<br>'+
			'<b>3列</b>：03、08、13、18、23、28、33<br>'+
			'<b>4列</b>：04、09、14、19、24、29<br>'+
			'<b>5列</b>：05、10、15、20、25、30<br>'+
			'5列之间2列组合遗漏，例如1-2列行遗漏表示不包括（01、06、11、16、21、26、31）和（02、07、12、17、22、27、32）这12个号码的遗漏<br>',

    '24':   '<b>行列</b>：6行值33个红球分6个行<br>'+
			'<b>1行</b>：01、02、03、04、05、06<br>'+
			'<b>2行</b>：07、08、09、10、11、12<br>'+
			'<b>3行</b>：13、14、15、16、17、18<br>'+
			'<b>4行</b>：19、20、21、22、23、24<br>'+
			'<b>5行</b>：25、26、27、28、29、30<br>'+
			'<b>6行</b>：31、32、33<br>'+
			'6行之间2行组合遗漏，例如1-2行遗漏表示不包括（01、02、03、04、05、06、）和（07、08、09、10、11、12）这12个号码的遗漏<br>',

    '25':   '[行列] 6行值33个红球分6个列<br>'+
			'<b>1列</b>：01、07、13、19、25、31<br>'+
			'<b>2列</b>：02、08、14、20、26、32<br>'+
			'<b>3列</b>：03、09、15、21、27、33<br>'+
			'<b>4列</b>：04、10、16、22、28<br>'+
			'<b>5列</b>：05、11、17、23、29<br>'+
			'<b>6列</b>：06、12、18、24、30<br>'+
			'6列之间2列组合遗漏，例如1-2列遗漏表示不包括（01、07、13、19、25、31）和（02、08、14、20、26、32）这12个号码的遗漏<br>',

    '51':   '',
}