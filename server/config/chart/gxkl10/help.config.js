/***********************************************************************************
 *
 *                           玩法说明的配置
 *
 ***********************************************************************************/
'use strict';

/**
 *     ******************  快3系列枚举  *******************
 *     *      基本分布走势  1
基本大小走势  2
基本奇偶走势  3
基本重号走势  4
基本二连号走势 5
基本三连号走势 6
  
定位第一位走势 21
定位第二位走势 22
定位第三位走势 23
定位第四位走势 24
定位第五位走势 25
 */
module.exports = {

      "1":  '<b>大小：</b>小号为：1-10；大号为：11-21。<br/>'+
            '<b>奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数。<br/>'+
            '<b>奇数：</b>01 03 05 07 09 11 13 15 17 19 21  <b>偶数：</b>02 04 06 08 10 12 14 16 18 20 <br/>'+
            '<b>质合：</b>只能被1和自身整除的数为质数，除了能被1和自身整除、还能被其它数整除的数为合数。<br/>'+
            '<b>质数：</b>01 02 03 05 07 11 13 17 19  <b>合数：</b>04 06 08 09 10 12 14 15 16 18 20 21 <br/>'+
            '<b>跨度：</b>开奖号码中，最大和最小号码的。 <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',    
      "2":  '<b>大小：</b>小号为：1-10；大号为：11-21。<br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',
      "3": '奇偶：</b>能被2整除的号码为偶数，不能被2整除的号码为奇数。<br/>'+
            '<b>奇数：</b>01 03 05 07 09 11 13 15 17 19 21  偶数：</b>02 04 06 08 10 12 14 16 18 20 <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。 <br/>',
      "4":  '<b>重号走势：</b>指本期跟上期对比，那些号码是重复出现的。重复出席的个数。<br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',
      "5":  '<b>二连号：</b>指开奖号码中有二个号码是相邻的。 <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。<br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。<br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。<br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。<br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。<br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',
      "6":  '<b>重号三连号：</b>指开奖号码中有三个号码是相邻的。 <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。 <br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。 <br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。 <br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。 <br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。 <br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',
      "21":  '<b>升平降：</b>指跟上期比号码的情况，升：比上期号码大。平：更上期号码一样。降：比上期号码小。 <br/>'+
            '<b>012：</b>指号码除以3得到的余数。<b>0路：</b>3.6.9.12.15.18 21 ；<b>1路：</b>1.4.7.10.13.16.19 ；<b>2路：</b>2.5.8.11.14.17.20  <br/>'+
            '<b>大小：</b>号码的大小情况。小数：1-10.大数：11-21  <br/>'+
            '<b>奇偶：</b>号码的奇偶情况。<b>奇数：</b>1.3.5.7.9.11.13.15.17.19 21  <b>偶数：</b>2.4.6.8.10.12.14.16.18.20  <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。 <br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。 <br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。 <br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。 <br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。 <br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',
      "22":  '<b>升平降：</b>指跟上期比号码的情况，升：比上期号码大。平：更上期号码一样。降：比上期号码小。 <br/>'+
            '<b>012：</b>指号码除以3得到的余数。<b>0路：</b>3.6.9.12.15.18 21 ；<b>1路：</b>1.4.7.10.13.16.19 ；<b>2路：</b>2.5.8.11.14.17.20  <br/>'+
            '<b>大小：</b>号码的大小情况。小数：1-10.大数：11-21  <br/>'+
            '<b>奇偶：</b>号码的奇偶情况。<b>奇数：</b>1.3.5.7.9.11.13.15.17.19 21  <b>偶数：</b>2.4.6.8.10.12.14.16.18.20  <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。 <br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。 <br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。 <br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。 <br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。 <br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',
      "23":  '<b>升平降：</b>指跟上期比号码的情况，升：比上期号码大。平：更上期号码一样。降：比上期号码小。 <br/>'+
            '<b>012：</b>指号码除以3得到的余数。<b>0路：</b>3.6.9.12.15.18 21 ；<b>1路：</b>1.4.7.10.13.16.19 ；<b>2路：</b>2.5.8.11.14.17.20  <br/>'+
            '<b>大小：</b>号码的大小情况。小数：1-10.大数：11-21  <br/>'+
            '<b>奇偶：</b>号码的奇偶情况。<b>奇数：</b>1.3.5.7.9.11.13.15.17.19 21  <b>偶数：</b>2.4.6.8.10.12.14.16.18.20  <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。 <br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。 <br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。 <br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。 <br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。 <br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',
      "24":  '<b>升平降：</b>指跟上期比号码的情况，升：比上期号码大。平：更上期号码一样。降：比上期号码小。 <br/>'+
            '<b>012：</b>指号码除以3得到的余数。<b>0路：</b>3.6.9.12.15.18 21 ；<b>1路：</b>1.4.7.10.13.16.19 ；<b>2路：</b>2.5.8.11.14.17.20  <br/>'+
            '<b>大小：</b>号码的大小情况。小数：1-10.大数：11-21  <br/>'+
            '<b>奇偶：</b>号码的奇偶情况。<b>奇数：</b>1.3.5.7.9.11.13.15.17.19 21  <b>偶数：</b>2.4.6.8.10.12.14.16.18.20  <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。 <br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。 <br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。 <br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。 <br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。 <br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>',
      "25":  '<b>升平降：</b>指跟上期比号码的情况，升：比上期号码大。平：更上期号码一样。降：比上期号码小。 <br/>'+
            '<b>012：</b>指号码除以3得到的余数。<b>0路：</b>3.6.9.12.15.18 21 ；<b>1路：</b>1.4.7.10.13.16.19 ；<b>2路：</b>2.5.8.11.14.17.20  <br/>'+
            '<b>大小：</b>号码的大小情况。小数：1-10.大数：11-21  <br/>'+
            '<b>奇偶：</b>号码的奇偶情况。<b>奇数：</b>1.3.5.7.9.11.13.15.17.19 21  <b>偶数：</b>2.4.6.8.10.12.14.16.18.20  <br/>'+
            '<b>遗漏分层：</b>将当前遗漏用黑色标识。 <br/>'+
            '<b>分段线：</b>每五期使用分隔线，使横向导航更加清晰。 <br/>'+
            '<b>出现总次数：</b>统计期数内实际出现的次数。 <br/>'+
            '<b>遗漏：</b>自上期开出到本期间隔的期数。 <br/>'+
            '<b>最大遗漏值：</b>统计期数内遗漏的最大值。 <br/>'+
            '<b>最大连出值：</b>统计期数内连续开出的最大值。<br/>'
}
