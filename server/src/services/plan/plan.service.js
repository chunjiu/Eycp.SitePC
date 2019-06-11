
'use strict';

import { BaseService } from '../public/base.service';
import dealWithCommonService from '../public/dealWithCommon.service';
import { LotteryService } from '../public/lottery.service';

/**
 * 追号服务
 */
export class PlanService extends BaseService {

    constructor(){

        super();

        this.planPath                  = '/chaseplan'
    }

    /**
     *  获取追号推荐
     */
    getrecentplan(){

        /** 最新追号推荐不需要缓存 */
        let cacheOpt = this.setCache(`${this.planPath}/getrecentplan`, 0);

        let httpOpt = {
            url: `${this.planPath}/getrecentplan`
        };

        return this.httpGet(httpOpt, cacheOpt);
    }


    /**
     * 获取追号列表
     * @param {object} _para lotteryCode 彩种code type 玩法  day 时间 
     */
    list(_para) {

        if(!_para.lotteryCode) {
            return this.errorMsg(`planList: lotteryCode不存在`);
        }

        if(!_para.type) {
            return this.errorMsg(`planList: type不存在`);
        } else if(!/\d/.test(_para.type)) {
            return this.errorMsg(`planList: type需要为数字类型`);
        }

        if(!_para.day) {
            return this.errorMsg(`planList: day不存在`);
        }

        // 追号列表不需要缓存
        let cacheOpt = this.setCache(`ChasePlan/GetPlans`, 0);

        // 参数
        let httpOpt = {
            url: `ChasePlan/GetPlans`,
            qs: {
                lotteryCode: _para.lotteryCode,
                type: _para.type,
                day: _para.day
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }

    /**
     * 彩种首页追号列表
     * @param {*} lotteryCode 
     */
    index(lotteryCode) {
        if(!lotteryCode) {
            return this.errorMsg(`planList: lotteryCode不存在`);
        }

        // 追号列表不需要缓存
        let cacheOpt = this.setCache(`chaseplan/getnewlyplan`, 0);

        // 参数
        let httpOpt = {
            url: `chaseplan/getnewlyplan`,
            qs: {
                lotteryCode: lotteryCode
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }

    /**
     * 最新推荐追号
     */
    recommend() {
        // 最新追号推荐不需要缓存
        let cacheOpt = this.setCache(`chaseplan/getrecentplan`, 0);

        // 参数
        let httpOpt = {
            url: `chaseplan/getrecentplan`
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }

    /**
     * 获取追号详情
     * @param {int} id
     */
    detail(id) {
        // 判断id
        if (!id) {
            // 返回异常内容
            return this.errorMsg(`缺少参数id`);
        }

        let cacheOpt = this.setCache(`ChasePlan/GetPlanDetail/${id}`, 12000);

        // 参数
        let httpOpt = {
            url: `ChasePlan/GetPlanDetail`,
            qs: {
                id: id,
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }

    /**
     * 获取聚合首页的内容
     * @param {*} groupId 
     */
    getPlanAggreGate(groupId) {
        // 判断id
        if (!groupId && groupId != 0) {
            // 返回异常内容
            return this.errorMsg(`缺少参数groupId`);
        }

        if(!/[0-5]/.test(groupId)){
            // 返回异常内容
            return this.errorMsg(`getPlanAggreGate: groupId只能为0-5`);
        }

        let cacheOpt = this.setCache(`chaseplan/getplanaggregate/${groupId}`, 0);

        // 参数
        let httpOpt = {
            url: `chaseplan/getplanaggregate`,
            qs: {
                groupId: groupId,
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }

    /**
     * 获取聚合页的数据
     */
    async getPlanListForIndex() {
        try {
            let _result = [];

            // 获取全部首页追号
            let _data = await this.getPlanAggreGate(0)
            _data = this.resultArray(_data);

            let _tmpLotteryCode = '',
                _length = _data._length,
                _tmpList = [];
            for(let item of _data) {

                if(item.lotteryCode != _tmpLotteryCode && _tmpLotteryCode != '') {
                    _result.push({
                        lotteryCode: _tmpLotteryCode,
                        lotteryName: await dealWithCommonService.getLotteryNameByTree(_tmpLotteryCode),
                        awardTime: (new Date(_tmpList[0].awardTime)).format('hh:mm'),
                        period: _tmpList[0].period,
                        groupId: _tmpList[0].groupId,
                        recommend: dealWithCommonService.getPlanTypeListByCode(_tmpLotteryCode),
                        list: _tmpList
                    });
                    _tmpList = [];
                }

                _tmpList.push(item);
                _tmpLotteryCode = item.lotteryCode;
            };

            if(_tmpList.length > 0) {
                _result.push({
                    lotteryCode: _tmpLotteryCode,
                    lotteryName: await dealWithCommonService.getLotteryNameByTree(_tmpLotteryCode),
                    awardTime: (new Date(_tmpList[0].awardTime)).format('hh:mm'),
                    period: _tmpList[0].period,
                    groupId: _tmpList[0].groupId,
                    recommend: dealWithCommonService.getPlanTypeListByCode(_tmpLotteryCode),
                    list: _tmpList
                });
            }
            

            return _result;

        } catch(ex) {
            return this.errorMsg(ex);
        }
    }

    /**
     * 获取追号类型列表页数据
     * @param {*} code 
     * @param {*} type 
     * @param {*} date
     * @param {*} groupId
     */
    async getPlanDataForType(code, type, date, groupId) {
        let _result = {};
        try{
            // 获取开奖时间和结果
            let _lotteryServer =  new LotteryService(code);

            // 开奖时间
            _result.awardTime = (await _lotteryServer.getAwardTimes()).result;

            // 开奖结果
            _result.awardResult = (await _lotteryServer.getAwardData()).result;
            if(_result.awardResult) {
                _result.awardResult.resultList = _result.awardResult.result ? _result.awardResult.result.split(',') : [];
            }

            // 当前开奖期数和实际获取的是否对上
            if(_result.awardTime && _result.awardResult) {
                _result.isAwarding = _result.awardTime.current.period > _result.awardResult.period;
            } else {
                _result.isAwarding = false;
                _result.awardTime = _result.awardTime ? _result.awardTime : {
                    current: {},
                    next: {}
                }
            }

            // 获取追号列表
            let _planList = await this.list({
                lotteryCode: code,
                type: type,
                day: date
            });
            _result.planList = this.resultArray(_planList);

            if(typeof groupId === 'undefined' && _result.planList && _result.planList.length > 0) {
                _result.groupId = _result.planList[0].groupId;
            } else {
                _result.groupId = groupId;
            }

            _result.winTotal = this.winTotal(_result.planList, type, code == 'gxkl10' ? '8' : _result.groupId);
            _result.playTypeList = this.getPlayType(_result.groupId, code);

            // 获取追号时间
            let _planTimer = await this.getPlanTime(code);
            _planTimer = this.resultArray(_planTimer);
            _result.planTimer = [];
            let _tmpTimer = [];
            _planTimer.forEach((item, idx) => {
                _tmpTimer.push({
                    day: (new Date(item)).format('yyyy-MM-dd'),
                    name: idx == 0 ? '今天' : (idx == 1 ? '昨天' : '前天')
                })
            });

            // 倒序获取
            _result.planTimer.push(_tmpTimer.pop());
            _tmpTimer.length > 0 ? _result.planTimer.push(_tmpTimer.pop()) : '';
            _tmpTimer.length > 0 ? _result.planTimer.push(_tmpTimer.pop()) : '';

        } catch(ex) {
            this.errorMsg(ex);
        }
        return _result;
    }

    /**
     * 获取开奖结果
     * @param {*} code 
     */
    async getPlanAward(code) {
        let _result = {};
        // 获取开奖时间和结果
        let _lotteryServer =  new LotteryService(code);

        // 开奖时间
        _result.awardTime = (await _lotteryServer.getAwardTimes()).result;

        // 开奖结果
        _result.awardResult = (await _lotteryServer.getAwardData()).result;
        if(_result.awardResult) {
            _result.awardResult.resultList = _result.awardResult.result ? _result.awardResult.result.split(',') : [];
        }

        // 当前开奖期数和实际获取的是否对上
        if(_result.awardTime && _result.awardResult) {
            _result.isAwarding = _result.awardTime.current.period > _result.awardResult.period;
        } else {
            _result.isAwarding = false;
            _result.awardTime = _result.awardTime ? _result.awardTime : {
                current: {},
                next: {}
            }
        }

        return _result;

    }

    /**
     * 中奖统计
     * @param {*} list 
     * @param {*} type 
     * @param {*} groupId 
     */
    winTotal(list, type, groupId){
        groupId = groupId ? groupId.toString() : '1';
        let _period = [];
        let _result = [];
        _period = this.configService.lotteryPlanPeriod[groupId][type.toString()];

        let _totalPeriod = list.length;
        let _otherTotalPeriod = [],
            _otherTotalCount = [];

        try{
            // 计算中奖统计
            _period.forEach((item, idx) => {
                let _tmpTotal = _totalPeriod;
                _otherTotalPeriod[idx] = 0;
                list.forEach(data => {
                    // 获取总的已经开出来的期数
                    if(data.state == 0) {
                        _tmpTotal -= 1;
                    } else if(data.state == 1 && data.total < item) {
                        _tmpTotal -= 1;
                    }

                    // 是否已经中奖
                    if(data.state == 3 && data.total <= item) {
                        _otherTotalPeriod[idx] += 1;
                    }
                });

                _otherTotalCount.push(_tmpTotal);
                _result.push({
                    headerName: idx == 0 && item == 1 ? '当期中出' : `${item}期内开出`
                });
            });

            // 组装概率
            _otherTotalPeriod.forEach((item, idx) => {
                if(item == 0) {
                    item = 0;
                    _result[idx].percent = `0/${_otherTotalCount[idx]}（0%）`
                } else {
                    _result[idx].percent = `${item}/${_otherTotalCount[idx]}（${Math.round((item/_otherTotalCount[idx]) * 100)}%）`
                }
            });

            return _result;

        }catch(ex){
            return this.errorMsg(ex);
        }
    }

    /**
     * 获取玩法推荐
     * @param {*} groupId
     */
    getPlayType(groupId, lotteryCode) {
        let _playTypeList = [];
        if(!groupId) return [];
        groupId = groupId.toString();
        switch(groupId) {
            case '1':
                _playTypeList = [{name: '前一', id: 1},{name: '任二', id: 2},{name: '任三', id: 3},{name: '任四', id: 4},{name: '任五', id: 5},{name: '任六', id: 6},{name: '任七', id: 7},{name: '任八', id: 8}];
                break;
            case '2':
                _playTypeList = [{name: '和值',id: 1}, {name: '二不同', id: 2}];
                break;
            case '3':
                if(lotteryCode == 'gxkl10') {
                    _playTypeList = [{name: '直特', id: 1},{name: '直一', id: 2},{name: '直二', id: 3}];
                } else {
                    _playTypeList = [{name: '任二', id: 2},{name: '任三', id: 3},{name: '任四', id: 4},{name: '任五', id: 5}];
                }
                break;
            case '4':
                _playTypeList = [{name: '一星', id: 1},{name: '二星', id: 2},{name: '三星', id: 3}];
                break;
        };

        return _playTypeList;
    }

    /**
     * 获取玩法名称
     * @param {*} type 
     * @param {*} groupId 
     */
    getPlayTypeName(type, groupId, code) {
        let _tmpType = {};
        if(!type || !groupId) {
            return  '';
        }

        groupId = groupId.toString();
        type = type.toString();
        switch(groupId) {
            case '1':
                _tmpType = {'1' : '前一','2' : '任二','3' : '任三','4' : '任四','5' : '任五','6' : '任六','7' : '任七', '8' : '任八'}; 
            break;
            case '2':
                _tmpType = {'1' : '和值','2' : '二不同'}; 
            break;
            case '3':
                if(code == 'gxkl10') {
                    _tmpType = {'1' : '直特','2' : '直一','3' : '直二'}; 
                } else {
                    _tmpType = {'2' : '任二','3' : '任三','4' : '任四','5' : '任五'}; 
                }
            break;
            case '4':
                _tmpType = {'1' : '一星','2' : '二星','3' : '三星'}; 
            break;
        }

        return _tmpType[type]; 
    }

    /**
     * 获取追号时间
     * @param {*} lotteryCode 
     */
    getPlanTime(lotteryCode) {
        // 判断lotteryCode
        if (!lotteryCode) {
            // 返回异常内容
            return this.errorMsg(`缺少参数lotteryCode`);
        }

        let cacheOpt = this.setCache(`chaseplan/gettimes/${lotteryCode}`, 0);

        // 参数
        let httpOpt = {
            url: `chaseplan/gettimes`,
            qs: {
                lotterycode: lotteryCode,
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }
}