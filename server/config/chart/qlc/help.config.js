/***********************************************************************************
 *
 *                           玩法说明的配置
 *
 ***********************************************************************************/
'use strict';

/**
 *     ******************  七乐彩枚举  *******************
 *     基本分布走势 = 1,           1
 *     形态大小走势  = 11,         2
 *     形态奇偶走势 = 12,          3
 *     形态质合走势 = 13,          4
 *     形态012路走势 = 14,         5
 *     形态重号走势 = 15,          6
 */
module.exports = {

    "1": '<b>大小：</b>小数：1-15  大数：16-30<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>和值：</b>指开奖号码和的值。<br/>' +
    '<b>大小比：</b>大数个数：小数个数。<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>和尾：</b>指和值最后最后一位数的值。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
,
    "11": '<b>大小：</b>小数：1-15  大数：16-30<br/>' +
    '<b>大小比：</b>大数个数：小数个数。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。 <br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
,
    "12": '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
,
    "13": '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>01 02 03 05 07 11 13 17 19 23 29<br/>' +
    '<b>合数：</b>04 06 08 09 10 12 14 15 16 18 20 21 22 24 25 26 27 28 30<br/>' +
    '<b>质合比：</b>质数个数：合数个数<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
,
    "14": '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>03 06 09 12 15 18 21 24 27 30<br/>' +
    '<b>1路：</b>01 04 07 10 13 16 19 22 25 28<br/>' +
    '<b>2路：</b>02 05 08 11 14 17 20 23 26 29<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
,
    "15": '<b>重号：</b>指跟上期开奖号码一致的号码。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
}