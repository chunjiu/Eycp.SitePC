/****************************************************************
 *
 *                              走势接口服务
 *
 ****************************************************************/
'use strict';

import { BaseService } from '../public/base.service';
import DealWithCommonService from  '../public/dealWithCommon.service';

export class ChartService extends BaseService {

    constructor() {

        super();

        this.chartPath                = '/chart';
    }
    /** 根据_flot 、lotterycode 获取图表名称 */
    getFlotName(_data,_flotType,_queryDay){
       
        for (var i = 0; i < _data.length; i++) {
            for (var m = 0; m < _data[i].child.length; m++) {
            if(_flotType == _data[i].child[m].code){
                if(_queryDay!=undefined){
                    if(_data[i].child[m].queryDay==_queryDay){
                        return _data[i].child[m].name;
                         break;
                    }
                }else{
                    return _data[i].child[m].name;
                    break;
                }
            }
         }  
        }
        return "";
    }
    /**
     * =============双色球图表==============;
     *     _flotType参数得取值范围--------(number类型):
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
     *
     *     _quantity期数--------(number类型)默认是50期:
     *
     *     _queryDay星期-------(number类型)星期（0-6 周一至周日）默认-1全部:
     * ===================================*/
     getSsqFlotStatData(_flotType, _quantity, _queryDay){

            /** 取值范围 */
            let  _flotTypeArray = [11,12,13,14,15,16,21,22,23,24,25,26,27,28,29,30,41,42,43];
            let  _queryDayArray = [-1,0,1,2,3,4,5,6];

            if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType)== false){
                return this.errorMsg(`getSsqFlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
            }

            if(typeof(_quantity) !='number' && _quantity !=undefined){
                return this.errorMsg(`getSsqFlotStatData: _quantity参数不是数字类型！`);
            }else{
                _quantity = _quantity ? _quantity:  50;
            }

            if(_queryDay !=undefined){

                if(typeof(_queryDay) !='number' || DealWithCommonService.contains(_queryDayArray, _queryDay)== false){

                    return this.errorMsg(`getSsqFlotStatData: _queryDay参数为空或不是数字类型, 或者是取值范围不正确！`);

                }

            }else{

                _queryDay = _queryDay ? _queryDay: -1;

            }

            let  cacheOpt = this.setCache(`${this.chartPath}/getSsqFlotStatData`, 0);

            const httpOpt = {
                url: `${this.chartPath}/GetSsqFlotStatData`,
                qs: {
                    flotType: _flotType,
                    quantity: _quantity,
                    queryDay: _queryDay
                }
            };

            return this.httpGet(httpOpt, cacheOpt);

     }


    /**
     * =============大乐透图表==============;
     *     _flotType参数得取值范围--------(number类型):
     *     综合基本走势	              11
     *     综合重号走势	              12
     *     综合连号走势	              13
     *     综合斜连号走势	              14
     *     综合斜跳号走势	              15
     *     前区大小走势	              21
     *     前区和值走势	              22
     *     前区奇偶走势	              23
     *     前区质合走势	              24
     *     前区除3余数走势	          25
     *     前区跨度走势	              26
     *     后区基本走势	              41
     *     后区和值走势	              42
     *     红球六行六列走势	      51	历史开奖数据
     *     红球七行五列走势	      52	历史开奖数据
     *
     *
     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getDltFlotStatData(_flotType, _quantity){

        /** 取值范围 */
        let  _flotTypeArray = [11,12,13,14,15,21,22,23,24,25,26,41,42,51,52];

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType)== false){
            return this.errorMsg(`getDltFlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number' && _quantity !=undefined){
            return this.errorMsg(`getDltFlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getDltFlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetDltFlotStatData`,
            qs: {
                flotType: _flotType,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     * =============福彩3D图表==============;
     *     _flotType参数得取值范围--------(number类型):
     *     定位个位走势	        1
     *     定位十位走势	        2
     *     定位百位走势	        3
     *     综合基本走势	        11
     *     综合奇偶走势	        12
     *     综合大小走势	        13
     *     综合升平降走势	    14
     *     综合012路走势	    15
     *     综合号码个数走势	16
     *     综合质合走势	        17
     *     综合跨度走势	        18
     *     综合和值走势	        19
     *     综合尾数类型走势	20
     *
     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getFc3dFlotStatData(_flotType, _quantity){

        /** 取值范围 */
        let  _flotTypeArray = [1,2,3,11,12,13,14,15,16,17,18,19,20];

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType)== false){
            return this.errorMsg(`getFc3dFlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number' && _quantity !=undefined){
            return this.errorMsg(`getFc3dFlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getFc3dFlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetFc3dFlotStatData`,
            qs: {
                flotType: _flotType,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     * =============排列3图表==============;
     *     _flotType参数得取值范围--------(number类型):
     *    定位个位走势	        1
     *    定位十位走势	        2
     *    定位百位走势	        3
     *    综合基本走势	        11
     *    综合奇偶走势	        12
     *    综合大小走势	        13
     *    综合升平降走势	    14
     *    综合012路走势	    15
     *    综合号码个数走势	16
     *    综合质合走势	        17
     *    综合跨度走势	        18
     *    综合和值走势	        19
     *    综合尾数类型走势	20
     *
     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getPl3FlotStatData(_flotType, _quantity){

        /** 取值范围 */
        let  _flotTypeArray = [1,2,3,11,12,13,14,15,16,17,18,19,20];

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType)== false){
            return this.errorMsg(`getPl3FlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number' && _quantity !=undefined){
            return this.errorMsg(`getPl3FlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getPl3FlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetPl3FlotStatData`,
            qs: {
                flotType: _flotType,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     * =============排列5图表==============;
     *     _flotType参数得取值范围--------(number类型):
     *    定位个位走势	        1
     *    定位十位走势	        2
     *    定位百位走势	        3
     *    定位千位走势	        4
     *    定位万位走势	        5
     *    综合基本走势	        11
     *    综合奇偶走势	        12
     *    综合大小走势	        13
     *    综合升平降走势	    14
     *    综合012路走势	    15
     *    综合号码个数走势	16
     *    综合质合走势	        17
     *    综合跨度走势	        18
     *    综合和值走势	        19
     *    综合尾数类型走势	20
     *
     *
     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getPl5FlotStatData(_flotType, _quantity){

        /** 取值范围 */
        let  _flotTypeArray = [1,2,3,4,5,11,12,13,14,15,16,17,18,19,20];

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType)== false){
            return this.errorMsg(`getPl5FlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number' && _quantity !=undefined){
            return this.errorMsg(`getPl5FlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getPl5FlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetPl5FlotStatData`,
            qs: {
                flotType: _flotType,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     * =============七乐彩图表==============;
     *     _flotType参数得取值范围--------(number类型):
     *     基本分布走势 	    1
     *     形态大小走势 	    11
     *     形态奇偶走势	        12
     *     形态质合走势 	    13
     *     形态012路走势 	    14
     *     形态重号走势 	    15
     *
     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getQlcFlotStatData(_flotType, _quantity){

        /** 取值范围 */
        let  _flotTypeArray = [1,11,12,13,14,15];

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType)== false){
            return this.errorMsg(`getQlcFlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number'  && _quantity !=undefined){
            return this.errorMsg(`getQlcFlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getQlcFlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetQlcFlotStatData`,
            qs: {
                flotType: _flotType,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     * =============七星彩图表==============;
     *     _flotType参数得取值范围--------(number类型):
     *     基本分布走势 	    1	            基本分布走势
     *     形态大小走势 	    11	        形态大小走势
     *     形态奇偶走势	        12	        形态奇偶走势
     *     形态质合走势 	    13	        形态质合走势
     *     形态012路走势 	    14	        形态012路走势
     *     形态重号走势 	    15	        形态重号走势
     *
     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getQxcFlotStatData(_flotType, _quantity){

            /** 取值范围 */
            let  _flotTypeArray = [1,11,12,13,14,15];

            if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType)== false){
                return this.errorMsg(`getQxcFlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
            }

            if(typeof(_quantity) !='number' && _quantity !=undefined){
                return this.errorMsg(`getQxcFlotStatData: _quantity参数不是数字类型！`);
            }else{
                _quantity = _quantity ? _quantity:  50;
            }

            let  cacheOpt = this.setCache(`${this.chartPath}/getQxcFlotStatData`, 0);

            const httpOpt = {
                url: `${this.chartPath}/GetQxcFlotStatData`,
                qs: {
                    flotType: _flotType,
                    quantity: _quantity
                }
            };

            return this.httpGet(httpOpt, cacheOpt);
     }


    /**
     * =============快3图表==============;
     *     _flotType参数得取值范围--------(number类型):
     *     基本基本走势 = 1,	         1
     *     基本和值走势 = 2,	         2
     *     基本形态走势 = 3,	         3
     *     基本组合走势 = 4,	         4
     *     基本012路走势 = 5,	     5
     *     分布号码统计	                15
     *     分布组合统计	                16	     按日统计数据
     *     分布和值统计	                17	     按日统计数据
     *     分布形态跨度统计	        18	     按日统计数据
     *
     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getK3FlotStatData(_lotteryCode, _flotType, _quantity){

        /** 取值范围 */
        let  _flotTypeArray = [1,2,3,4,5,15,16,17,18];

        if(_lotteryCode == undefined || typeof(_lotteryCode) !='string'){
            return this.errorMsg(`getK3FlotStatData: _lotteryCode参数为空或不是字符串类型！`);
        }

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType) == false){
            return this.errorMsg(`getK3FlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number' && _quantity !=undefined){
            return this.errorMsg(`getK3FlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getK3FlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetK3FlotStatData`,
            qs: {
                lotteryCode: _lotteryCode,
                flotType: _flotType,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }

    /**
     * =============快乐十分图表==============;
     *     _flotType参数得取值范围--------(number类型):
     *      基本分布走势  1
            基本大小走势  2
            基本奇偶走势  3
            基本区间走势  4
            基本同尾走势  5
            基本重号走势  6
            基本二连号走势 7
            基本三连号走势 8
            基本隔位码走势 9
                
            定位第一位走势 21
            定位第二位走势 22
            定位第三位走势 23
                
            前二组选走势    30
            前二直选走势    31
            前二大小走势    32
            前二奇偶走势    33
            前二质合走势    34
            前二升平降走势 35
            前二012路走势 36
            前三分布走势    50
     *
     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getKl10FlotStatData(_lotteryCode, _flotType, _quantity){

        /** 取值范围 */
        let  _flotTypeArray = [1,2,3,4,5,6,7,8,9,21,22,23,30,31,32,33,34,35,36,50];

        if(_lotteryCode == undefined || typeof(_lotteryCode) !='string'){
            return this.errorMsg(`getKL10FlotStatData: _lotteryCode参数为空或不是字符串类型！`);
        }

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType) == false){
            return this.errorMsg(`getKL10FlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number' && _quantity !=undefined){
            return this.errorMsg(`getKL10FlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getKL10FlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetKl10FlotStatData`,
            qs: {
                lotteryCode: _lotteryCode,
                flotType: _flotType,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }


    /**
     * =============快乐十分图表==============;
         基本分布走势 	1
         基本大小走势	2
         基本奇偶走势	3
         基本质合走势	4
         基本跨度走势	5
         基本和值走势	6
         基本平均值走势	7
         基本升平降走势	8
         基本012路走势	9
         基本重号走势	10
         基本连号走势	11
         基本AC走势	    12

         前二组选走势	30
         前二直选走势	31
         前二大小走势	32
         前二奇偶走势	33
         前二质合走势	34
         前二跨度走势	35
         前二和值走势	36
         前二平均值走势	37
         前二升平降走势	38
         前二012路走势	39
         前二重号走势	40

         前三组选走势	61
         前三直选走势	62
         前三大小走势	63
         前三奇偶走势	64
         前三质合走势	65
         前三跨度走势	66
         前三和值走势	67
         前三平均值走势	68
         前三升平降走势	69
         前三012路走势	70
         前三重号走势	71

         定位第一位走势	91
         定位第二位走势	92
         定位第三位走势	93
         定位第四位走势	94
         定位第五位走势	95

         八区统计任一	501	八区
         八区统计任二	502	八区
         八区统计任三 	503	八区
         八区统计任四 	504	八区
         八区统计任五	505	八区
         八区统计和值	506	八区
         八区统计前一	507	八区
         八区统计前二组选	508	八区
         八区统计前二直选 	509	八区
         八区统计前三组选	510	八区
         八区统计前三直选	511	八区

         多日统计任一 	100
         多日统计任二	101
         多日统计任三	102
         多日统计任四	103
         多日统计任五	104
         多日统计和值	105
         多日统计跨度	106
         多日统计前一	107
         多日统计前二直选	108
         多日统计前二组选	109
         多日统计前二和值	110
         多日统计前二跨度	111
         多日统计前三直选	112
         多日统计前三组选	113
         多日统计前三和值	114
         多日统计前三跨度	115

     *     _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     get11x5FlotStatData(_lotteryCode, _flotType, _quantity, days){

        /** 取值范围 */
        let  _flotTypeArray = [1,2,3,4,5,6,7,8,9,10,11,12,
                                          30,31,32,33,34,35,36,37,38,39,40,
                                          61,62,63,64,65,66,67,68,69,70,71,
                                          91,92,93,94,95,
                                          100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,
                                          501,502,503,504,505,506,507,508,509,510,511
                                         ];

        if(_lotteryCode == undefined || typeof(_lotteryCode) !='string'){
            return this.errorMsg(`get11x5FlotStatData: _lotteryCode参数为空或不是字符串类型！`);
        }

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType) == false){
            return this.errorMsg(`get11x5FlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number' && _quantity !=undefined){
            return this.errorMsg(`get11x5FlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/get11x5FlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/Get11x5FlotStatData`,
            qs: {
                lotteryCode: _lotteryCode,
                flotType: _flotType,
                quantity: _quantity,
                days
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }


    /**
     * =============广西快乐十分图表==============;
         基本分布走势	  1
         基本大小走势	  2
         基本奇偶走势	  3
         基本重号走势	  4
         基本二连号走势  5
         基本三连号走势	  6

         定位第一位走势	21
         定位第二位走势	22
         定位第三位走势	23
         定位第四位走势	24
         定位第五位走势	25

     *  _quantity期数--------(number类型)默认是50期:
     * ===================================*/
     getGxKl10FlotStatData(_flotType, _quantity){

        /** 取值范围 */
        let  _flotTypeArray = [  1,2,3,4,5,6,
                                            21,22,23,24,24,25
                                        ];

        if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType) == false){
            return this.errorMsg(`getGxKl10FlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
        }

        if(typeof(_quantity) !='number' && _quantity !=undefined){
            return this.errorMsg(`getGxKl10FlotStatData: _quantity参数不是数字类型！`);
        }else{
            _quantity = _quantity ? _quantity:  50;
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getGxKl10FlotStatData`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetGxKl10FlotStatData`,
            qs: {
                flotType: _flotType,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }

    /**
     * =============时时彩图表==============;
         一星基本走势	     1
         一星形态走势	     2

         二星基本走势	    10
         二星形态走势	    11
         二星和值走势	    12
         二星直选形态走势	13
         二星组选形态走势	14
         二星跨度走势	    15
         二星大小走势	    16
         二星单双走势	    17

         三星基本走势	    30
         三星形态走势	    31
         三星直选形态走势	32
         三星组选形态走势	33
         三星和值走势	    34
         三星跨度走势	    35

         四星基本走势	   50
         四星形态走势	   51

         五星基本走势	   61
         五星形态走势	   62
         五星大小走势	   63
         五星奇偶走势	   64

     *  _quantity期数--------(number类型)默认是50期:
     * ===================================*/
      getSscFlotStatData(_lotteryCode, _flotType, _quantity){

            /** 取值范围 */
            let  _flotTypeArray = [
                1,2,
                10,11,12,13,14,15,16,17,
                30,31,32,33,34,35,
                50,51,
                61,62,63,64
            ];

            if(_lotteryCode == undefined || typeof(_lotteryCode) !='string'){
                return this.errorMsg(`getSscFlotStatData: _lotteryCode参数为空或不是字符串类型！`);
            }

            if(_flotType == undefined || typeof(_flotType) !='number' || DealWithCommonService.contains(_flotTypeArray, _flotType) == false){
                return this.errorMsg(`getSscFlotStatData: _flotType参数为空或不是数字类型，或者是取值范围不正确！`);
            }

            if(typeof(_quantity) !='number' && _quantity !=undefined){
                return this.errorMsg(`getSscFlotStatData: _quantity参数不是数字类型！`);
            }else{
                _quantity = _quantity ? _quantity:  50;
            }

            let  cacheOpt = this.setCache(`${this.chartPath}/getSscFlotStatData`, 0);

            const httpOpt = {
                url: `${this.chartPath}/GetSscFlotStatData`,
                qs: {
                    lotteryCode: _lotteryCode,
                    flotType: _flotType,
                    quantity: _quantity
                }
            };

            return this.httpGet(httpOpt, cacheOpt);

      }


    /**
     *   获取彩种下得所有图表分类;    http://xxx/chart/GetTrendChartEnum?lotteryGroupName=ssq
     */
    getTrendChartEnum(_lotteryGroupName){
        
        if(_lotteryGroupName == undefined || typeof(_lotteryGroupName) !='string'){
            return this.errorMsg(`getTrendChartEnum: _lotteryGroupName参数为空或不是字符串类型！`);
        }

        let  cacheOpt = this.setCache(`${this.chartPath}/getTrendChartEnum`, 0);

        const httpOpt = {
            url: `${this.chartPath}/GetTrendChartEnum`,
            qs: {
                lotteryGroupName: _lotteryGroupName
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }

}
