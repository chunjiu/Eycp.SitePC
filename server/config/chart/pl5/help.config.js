/***********************************************************************************
 *
 *                           玩法说明的配置
 *
 ***********************************************************************************/
'use strict';

/**
 *     ******************  排列5枚举  *******************
 *     定位个位走势 = 1,
 *     定位十位走势 = 2,
 *     定位百位走势 = 3,
 *     定位千位走势 = 4,
 *     定位万位走势 = 5,
 *     综合分布走势 = 11,
 *     综合奇偶走势 = 12,
 *     综合大小走势  = 13,
 *     综合升平降走势  = 14,
 *     综合012路走势 = 15,
 *     综合号码个数走势 = 16,
 *     综合质合走势 = 17,
 *     综合跨度走势 = 18,
 *     综合和值走势 = 19,
 *     综合尾数类型走势 = 20
 */
module.exports = {

    "1": '<b>和值：</b>指开奖号码和的值。<br/>' +
    '<b>跨度：</b>指开奖号码最大与最小差的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>大小：</b>小数：1-4  大数：5-9<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>1 2 3 5 7 <br/>' +
    '<b>合数：</b>0 4 6 8 9 <br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>0 3 6 9 <br/>' +
    '<b>1路：</b>1 4 7 <br/>' +
    '<b>2路：</b>2 5 8<br/>' +
    '<b>升平降：</b>指位数号码跟上一期比，比上期位数号码大的为升；比上期位数号码小的为降；比上期位数号码相等的为平<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "2": '<b>和值：</b>指开奖号码和的值。<br/>' +
    '<b>跨度：</b>指开奖号码最大与最小差的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>大小：</b>小数：</b>1-4  大数：5-9<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>1 2 3 5 7 <br/>' +
    '<b>合数：</b>0 4 6 8 9 <br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>0 3 6 9 <br/>' +
    '<b>1路：</b>1 4 7 <br/>' +
    '<b>2路：</b>2 5 8<br/>' +
    '<b>升平降：</b>指位数号码跟上一期比，比上期位数号码大的为升；比上期位数号码小的为降；比上期位数号码相等的为平<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "3": '<b>和值：</b>指开奖号码和的值。<br/>' +
    '<b>跨度：</b>指开奖号码最大与最小差的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>大小：</b>小数：</b>1-4  大数：5-9<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>1 2 3 5 7 <br/>' +
    '<b>合数：</b>0 4 6 8 9 <br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>0 3 6 9 <br/>' +
    '<b>1路：</b>1 4 7 <br/>' +
    '<b>2路：</b>2 5 8<br/>' +
    '<b>升平降：</b>指位数号码跟上一期比，比上期位数号码大的为升；比上期位数号码小的为降；比上期位数号码相等的为平<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "4": '<b>和值：</b>指开奖号码和的值。<br/>' +
    '<b>跨度：</b>指开奖号码最大与最小差的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>大小：</b>小数：</b>1-4  大数：5-9<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>1 2 3 5 7 <br/>' +
    '<b>合数：</b>0 4 6 8 9 <br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>0 3 6 9 <br/>' +
    '<b>1路：</b>1 4 7 <br/>' +
    '<b>2路：</b>2 5 8<br/>' +
    '<b>升平降：</b>指位数号码跟上一期比，比上期位数号码大的为升；比上期位数号码小的为降；比上期位数号码相等的为平<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "5": '<b>和值：</b>指开奖号码和的值。<br/>' +
    '<b>跨度：</b>指开奖号码最大与最小差的值。<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>大小：</b>小数：</b>1-4  大数：5-9<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数。<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>1 2 3 5 7 <br/>' +
    '<b>合数：</b>0 4 6 8 9 <br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>0 3 6 9 <br/>' +
    '<b>1路：</b>1 4 7 <br/>' +
    '<b>2路：</b>2 5 8<br/>' +
    '<b>升平降：</b>指位数号码跟上一期比，比上期位数号码大的为升；比上期位数号码小的为降；比上期位数号码相等的为平<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "11": '<b>和值：</b>指开间号码和的值<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。 <br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "12": '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>奇偶比：</b>奇数个数：偶数个数<br/>' +
    '<b>和值：</b>指开间号码和的值<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "13": '<b>大小：</b>小数：0-4  大数：5-9<br/>' +
    '<b>大小比：</b>大数个数：小数个数<br/>' +
    '<b>和值：</b>指开间号码和的值<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "14": '<b>升平降：</b>指开奖号码比上一期同位号码比，比上期同位号码大的为升；比上期同位号码小的为降；比上期同位号码相等的为平<br/>' +
    '<b>和值：</b>指开间号码和的值<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "15": '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>0 3 6 9 <br/>' +
    '<b>1路：</b>1 4 7 <br/>' +
    '<b>2路：</b>2 5 8<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "16": '<b>和值：</b>指开奖号码和的值<br/>' +
    '<b>跨度：</b>指开奖号码最大与最小差的值 <br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>大小：</b>小数：1-4  大数：5-9<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>1 2 3 5 7 <br/>' +
    '<b>合数：</b>0 4 6 8 9 <br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>0 3 6 9 <br/>' +
    '<b>1路：</b>1 4 7 <br/>' +
    '<b>2路：</b>2 5 8<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "17": '<b>和值：</b>指开奖号码和的值<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>1 2 3 5 7 <br/>' +
    '<b>合数：</b>0 4 6 8 9 <br/>' +
    '<b>质合比：</b>质数个数：合数个数<br/>' +
    '<b>和值：</b>指开间号码和的值<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "18": '<b>跨度：</b>指开奖号码最大与最小差的值<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "19": '<b>和值：</b>指开奖号码和的值<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
    ,
    "20": '<b>和值：</b>指开奖号码和的值<br/>' +
    '<b>跨度：</b>指开奖号码最大与最小差的值。<br/>' +
    '<b>和尾：</b>指和值最后最后一位数的值<br/>' +
    '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数<br/>' +
    '<b>大小：</b>小数：</b>1-4  大数：5-9<br/>' +
    '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>' +
    '<b>质数：</b>1 2 3 5 7 <br/>' +
    '<b>合数：</b>0 4 6 8 9 <br/>' +
    '<b>012路：</b>开奖号码除以3的余数为0路、1路和2路。<br/>' +
    '<b>0路：</b>0 3 6 9 <br/>' +
    '<b>1路：</b>1 4 7 <br/>' +
    '<b>2路：</b>2 5 8<br/>' +
    '<b>升平降：</b>指和尾数跟上一期比，比上期尾数号码大的为升；比上期尾数号码小的为降；比上期尾数号码相等的为平<br/>' +
    '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>' +
    '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>' +
    '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>' +
    '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>' +
    '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>' +
    '<b>最大连出值：</b>统计期数内连续开出的最大值。'
}