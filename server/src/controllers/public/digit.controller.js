/***********************************************************************************
 *
 *                                      数字彩父级控制器;
 *
 ***********************************************************************************/
'use strict';

import {BaseController} from './base.controller';
import Export from '../../lib/Export';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';

/**
 * 数字彩的父级控制器
 */
export class DigitController extends BaseController {

    constructor(lotteryCode) {
        super();
        this._context = {};
        this.lotteryCode = lotteryCode;
    }
    
    async export(request, reply) {

        let _year = request.params.year,
            _type = request.params.type;

        let _data = await this._service.pageHistory(_year ,-1)
        let _head = this.configService.config.digitHeadth;

        // 处理数据
        let _result = [_head[this.lotteryCode]];
        _data.history.forEach(item => {
            let _tmp = [
                item.award_date,
                item.issue_no
            ],
            _resultList = ['resultList', 'redResultList', 'blueResultList'];

            for(let list of _resultList) {
                if(item[list]) {
                    item[list].forEach(val => {
                        _tmp.push(val.value);
                    });
                } else {
                    continue;
                }
            }

            _result.push(_tmp);
        });

        if(_type === 'xlsx') {
            return Export.toExcel(_result, `${this.lotteryCode}-${_year}`, reply);
        } else {
            return Export.toTxt(_result, `${this.lotteryCode}-${_year}`, reply);
        }
    }

    /**
     * 获取10年年份选择数据
     */
    yearList(yearPara) {
        let _data = {};
        // 10年的选择年份
        let _year = parseInt((new Date()).format('yyyy'));
        if(yearPara) {
            _year += yearPara;
        }
        _data.nowYear = _year;
        _data.yearList = [_year];

        for(let i = 0; i < 10; i++) {
            _data.yearList.push(--_year);
        }

        return _data;
    }
}