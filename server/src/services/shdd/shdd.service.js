/****************************************************************
 *
 *                              专家杀号定胆服务接口
 *
 ****************************************************************/
'use strict';

import { BaseService } from '../public/base.service';
import DealWithCommonService from  '../public/dealWithCommon.service';

export class ShddService extends BaseService {

    constructor() {

        super();

        this.dealWithCommonService = DealWithCommonService;
        this.recommendPath = '/recommend'
    }

    /**
     1. 双色球杀胆
             红球杀1码	11
             红球杀2码	12
             蓝球杀1码	13
             蓝球杀2码	14
    2. 福彩3D、排列3杀胆
             个位杀号	    21
             十位杀号	    22
             百位杀号	    23
             不定位杀号	24
             个位定3胆	25
             十位定3胆	26
             百位定3胆	27
             合尾杀号	    28
             跨度杀码	    29
    3. 七乐彩杀胆
             号码杀1码	31
             号码杀2码	32
             特号杀1码	33
             特号杀2码	34
             大乐透杀胆
             前区杀1码	41
             前区杀2码	42
             后区杀1码	43
             后区杀2码	44
    4. 排列5杀胆
             个位杀号	    51
             十位杀号	    52
             百位杀号	    53
             千位杀号	    54
             万位杀号	    55
   5. 七星彩杀胆
             第一位杀号	61
             第二位杀号	62
             第三位杀号	63
             第四位杀号	64
             第五位杀号	65
             第六位杀号	66
             第七位杀号	67
     */
    getkillcodes(_lotterycode, _type, _quantity){

         let _typeArray = [11,12,13,14,21,22,23,24,25,26,27,28,29,31,32,33,34,41,42,43,44,51,52,53,54,55,61,62,63,64,65,66,67];

         if(_lotterycode ==undefined && typeof(_lotterycode) != 'string'){

             console.error('getkillcodes参数_lotterycode有误 !');
             return;

         }

        if(_type ==undefined && typeof(_type) != 'number'){

            console.error('getkillcodes参数_type有误 !');
            return;

        }

        if(this.dealWithCommonService.contains(_typeArray, _type) == false){

            console.error('getkillcodes参数_type超出取值范围 !');
            return;
        }

        let cacheOpt = this.setCache(`${ this.recommendPath }/getkillcodes`, 0);

        let httpOpt = {
            url: `${ this.recommendPath }/getkillcodes`,
            qs: {
                lotterycode: _lotterycode,
                type: _type
            }
        };

       httpOpt.qs.quantity = ( _quantity ? _quantity : 20 );

       return this.httpGet(httpOpt, cacheOpt);

    }


}

