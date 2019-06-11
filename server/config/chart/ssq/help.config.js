/***********************************************************************************
 *
 *                           玩法说明的配置
 *
 ***********************************************************************************/
'use strict';

/**
 *     ******************  时时彩系列枚举  *******************
 * 综合基本走势	11
 * 红球三分区	12
 * 红球四方区	13
 * 红球七分区	14
 * 红球六行六列 	15
 * 红球七行五列	16
 *
 * 红球形态大小走势	21
 * 红球形态奇偶走势	22
 * 红球形态质合走势	23
 * 红球形态除3余数走势	24
 * 红球形态和值走势	25
 * 红球形态跨度走势 	26
 * 红球形态重号走势	27
 * 红球形态连号走势	28
 * 红球形态斜连号走势	29
 * 红球形态斜跳号走势	30
 *
 * 蓝球综合走势   41
 * 篮球三分区走势	42
 * 篮球四行四列	43
 */
module.exports = {

    "11": '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "12": '<b>和值：</b>指所有号码和的值<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>跨度：</b>开奖号码中，最大与最小差的值。<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "13": '<b>和值：</b>指所有号码和的值<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>跨度：</b>开奖号码中，最大与最小差的值。<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "14": '<b>和值：</b>指所有号码和的值<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>跨度：</b>开奖号码中，最大与最小差的值。<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "15": '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "16": '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "21": '<b>大小：</b>小数为：</b>1-16；大数为：</b>17-33<br/>' +
    '<b>大小比：</b>大数个数：小数个数。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "22": '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。',

    "23": '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>01 02 03 05 07 11 13 17 19 23 29 31<br/>' +
    '<b>合数：</b>04 06 08 09 10 12 14 15 16 18 20 21 22 24 25 26 27 28 30 32<br/>' +
    '<b>质合比：</b>质数个数：合数个数<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。',

    "24": '<b>除3余数：</b>即012路，开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>03 06 09 12 15 18 21 24 27 30<br/>' +
    '<b>1路：</b>01 04 07 10 13 16 19 22 25 28 31<br/>' +
    '<b>2路：</b>02 05 08 11 14 17 20 23 26 29 32<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    '25': '<b>和值：</b>指开奖号码和的值<br/>' +
    '<b>和尾：</b>和值最后一位数的值<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。',

    '26': '<b>跨度：</b>开奖号码中，最大与最小差的值。<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。',

    "27": '<b>重号：</b>指跟上期开奖号码一致的号码<br/>' +
    '<b>连号：</b>指开奖号码中，号码为连续的号码，号码差为1<br/>' +
    '<b>和值：</b>所有红球开奖号码和的值。<br/>' +
    '<b>AC值：</b>它指的是在一组号码组合中，任意两个数字之间不相同的差值总个数减去号码数量加1的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "28": '<b>重号：</b>指跟上期开奖号码一致的号码<br/>' +
    '<b>连号：</b>指开奖号码中，号码为连续的号码，号码差为1<br/>' +
    '<b>和值：</b>所有红球开奖号码和的值。<br/>' +
    '<b>AC值：</b>它指的是在一组号码组合中，任意两个数字之间不相同的差值总个数减去号码数量加1的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "29": '<b>斜连号：</b>指开奖号码与上期号码相差1.例如：上期开了08，本期07.09都是斜连号<br/>' +
    '<b>重号：</b>指跟上期开奖号码一致的号码<br/>' +
    '<b>连号：</b>指开奖号码中，号码为连续的号码，号码差为1<br/>' +
    '<b>和值：</b>所有红球开奖号码和的值。<br/>' +
    '<b>AC值：</b>它指的是在一组号码组合中，任意两个数字之间不相同的差值总个数减去号码数量加1的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "30": '<b>斜跳号：</b>指开奖号码与上上期号码相差2.例如：上上期开了08，本期06.10都是斜跳号<br/>' +
    '<b>重号：</b>指跟上期开奖号码一致的号码<br/>' +
    '<b>连号：</b>指开奖号码中，号码为连续的号码，号码差为1<br/>' +
    '<b>和值：</b>所有红球开奖号码和的值。<br/>' +
    '<b>AC值：</b>它指的是在一组号码组合中，任意两个数字之间不相同的差值总个数减去号码数量加1的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "41": '<b>大小：</b>小数为：1-8；大数为：9-16<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>01 02 03 05 07 11 13<br/>' +
    '<b>合数：</b>04 06 08 09 10 12 14 15 16<br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>03 06 09 12 15 <br/>' +
    '<b>1路：</b>01 04 07 10 13 16 <br/>' +
    '<b>2路：</b>02 05 08 11 14 <br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "42": '<b>大小：</b>小数为：1-8；大数为：9-16<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>01 02 03 05 07 11 13<br/>' +
    '<b>合数：</b>04 06 08 09 10 12 14 15 16<br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>03 06 09 12 15<br/>' +
    '<b>1路：</b>01 04 07 10 13 16<br/>' +
    '<b>2路：</b>02 05 08 11 14<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',

    "43": '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>'
}
