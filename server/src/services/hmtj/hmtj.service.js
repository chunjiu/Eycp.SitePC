/****************************************************************
 *
 *                              专家号码推荐服务接口
 *
 ****************************************************************/
'use strict';

import { BaseService } from '../public/base.service';
import DealWithCommonService from  '../public/dealWithCommon.service';

export class HmtjService extends BaseService {

    constructor() {

        super();

        this.dealWithCommonService = DealWithCommonService;
        this.recommendPath = '/recommend';
        this.typeArray = [101,102,103,111,112,113,121,122,123,131,132,133];
    }

    /**
     *
         1. 双色球号码推荐
                十六红八蓝推荐	   101
                十四红六蓝推荐	   102
                十二红四蓝推荐	   103
         2. 福彩3D、排列3号码推荐
                七码组选推荐	       111
                六码组选推荐	       112
                五码组选推荐	       113
        3. 七乐彩号码推荐
                二十码推荐	       121
                十八码推荐	       122
                十六码推荐	       123
       4. 大乐透号码推荐
                二十前八后推荐	   131
                十八前六后推荐	   132
                十六前四后推荐	   133
     *
     */
    getrecommendnumbers(_lotterycode, _type, _quantity){

        if(_lotterycode ==undefined && typeof(_lotterycode) != 'string'){

            console.error('getrecommendnumbers参数_lotterycode有误 !');
            return;

        }

        if(_type ==undefined && typeof(_type) != 'number'){

            console.error('getrecommendnumbers参数_type有误 !');
            return;

        }

        if(this.dealWithCommonService.contains(this.typeArray, _type) == false){

            console.error('getrecommendnumbers参数_type超出取值范围 !');
            return;
        }

        let cacheOpt = this.setCache(`${ this.recommendPath }/getrecommendnumbers`, 0);

        let httpOpt = {
            url: `${ this.recommendPath }/getrecommendnumbers`,
            qs: {
                lotterycode: _lotterycode,
                type: _type
            }
        };

        httpOpt.qs.quantity = ( _quantity ? _quantity : 20 );

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     *  号码推荐详情接口
     */
    getrecommenddetails(_lotterycode, _expertId, _type, _quantity){

        if(_lotterycode ==undefined && typeof(_lotterycode) != 'string'){

            console.error('getrecommenddetails参数_lotterycode有误 !');
            return;

        }

        if(_expertId ==undefined && typeof(_expertId) != 'string'){

            console.error('getrecommenddetails参数_lotterycode有误 !');
            return;

        }

        if(_type ==undefined && typeof(_type) != 'number'){

            console.error('getrecommenddetails参数_type有误 !');
            return;

        }

        if(this.dealWithCommonService.contains(this.typeArray, _type) == false){

            console.error('getrecommenddetails参数_type超出取值范围 !');
            return;
        }

        let cacheOpt = this.setCache(`${ this.recommendPath }/getrecommenddetails`, 0);

        let httpOpt = {
            url: `${ this.recommendPath }/getrecommenddetails`,
            qs: {
                lotterycode: _lotterycode,
                type: _type,
                expertId: _expertId
            }
        };

        httpOpt.qs.quantity = ( _quantity ? _quantity : 20 );

        return this.httpGet(httpOpt, cacheOpt);

    }


}

