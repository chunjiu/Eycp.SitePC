
'use strict';

import { BaseService } from '../public/base.service';

/**
 * 提点服务
 */
export class PointService extends BaseService {


    constructor(){

        super();

        this.pointPath                = '/totalpoint';
    }

    /**
     *  获取每日提点列表;
     *  _parameter:{
     *     groupid: xxx(number)---高频彩子分组ID( 必填 ),
     *     lotterycode: xxx(string)---彩种Code( 必填 ),
     *     page: xxx(number)---页号,
     *     pagesize: xxx(number)---页大小
     *  }
     */
    getpoints(_parameter){

        if(_parameter.groupid == undefined || typeof(_parameter.groupid) != 'number'){
            return this.errorMsg('getpoints：获取指定列表groupid参数不正确！');
        }

        if(_parameter.lotterycode == undefined || typeof(_parameter.lotterycode) != 'string'){
            return this.errorMsg('getpoints：获取指定列表lotterycode参数不正确！');
        }

        if(_parameter.pageIndex == undefined || typeof(_parameter.pageIndex) != 'number'){
            return this.errorMsg('getpoints：获取指定列表page参数不正确！');
        }

        if(_parameter.pageSize == undefined || typeof(_parameter.pageSize) != 'number'){
            return this.errorMsg('getpoints：获取指定列表pagesize参数不正确！');
        }

        let  cacheOpt = this.setCache(`${this.pointPath}/getpoints`, 0);

        const httpOpt = {
            url: `${this.pointPath}/getpoints`,
            qs: {
                groupid: _parameter.groupid,
                lotterycode: _parameter.lotterycode,
                page: _parameter.pageIndex,
                pagesize: _parameter.pageSize
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }

    /**
     *  首页提点
     *  @param  首页_pagetype为index;
     */
    getRecentPoints(_pagetype){

        // if(_pagetype == undefined || typeof(_pagetype) != 'string'){
        //     return this.errorMsg('getRecentPoints：获取首页提点参数不正确！');
        // }

        let  cacheOpt = this.setCache(`${this.pointPath}/getRecentPoints`, 3000);

        const httpOpt = {
            url: `${this.pointPath}/GetRecentPoints`,
        };

        if(_pagetype){
            httpOpt.qs.pagetype=_pagetype
        }

        return this.httpGet(httpOpt, cacheOpt);

    }

    /**
     * 获取提点列表
     * @param {object} _para lotteryCode 彩种code groupId 高频彩子分组ID
     */
    list(_para) {

        if(_para.type && !/\d/.test(_para.groupId)) {
            return this.errorMsg(`pointList: groupId需要为数字类型`);
        }

        /** 页数页码不影响业务，给予默认值 */
        if (_para.pageIndex && !/^[1-9][0-9]*$/.test(_para.pageIndex)) {
            return this.errorMsg(`planList: pageIndex必须为数字类型！`);
        }

        // 如果不存在则赋予默认值
        if(!_para.pageIndex) {
            _para.pageIndex = 1;
        }

        if (_para.pageSize && !/^[1-9][0-9]*$/.test(_para.pageSize)) {
            return this.errorMsg(`planList: pageSize必须为数字类型！`);
        }

        // 如果不存在则赋予默认值
        if(!_para.pageSize) {
            _para.pageSize = 10;
        }

        // 提点列表不需要缓存
        let cacheOpt = this.setCache(`totalpoint/getpoints`, 0);

        // 参数
        let httpOpt = {
            url: `totalpoint/getpoints`,
            qs: {
                lotterycode: _para.lotteryCode,
                pagesize: _para.pageSize,
                page: _para.pageIndex,
                groupid: _para.groupId
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }

    /**
     * 最近提点
     * @param {string} pagetype 页面类型 首页 index 其它页面 不需要
     */
    recommend(pagetype) {
        // 最新提点推荐不需要缓存
        let cacheOpt = this.setCache(`totalpoint/getrecentpoints`, 0);

        // 参数
        let httpOpt = {
            url: `totalpoint/getrecentpoints`,
            qs : {
                pagetype: pagetype
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }

    /**
     * 获取提点详情
     * @param {int} pointid
     */
    detail(pointid) {
        // 判断id
        if (!pointid) {
            // 返回异常内容
            return this.errorMsg(`缺少参数pointid`);
        }

        let cacheOpt = this.setCache(`totalpoint/getdetail/${pointid}`, 12000);

        // 参数
        let httpOpt = {
            url: `totalpoint/getdetail/${pointid}`,
        };

        return this.httpGet(httpOpt, cacheOpt, 1);
    }

    /**
     * 获取上午提点统计
     */
    getLastPoint(data) {
        if(data.days.length <= 0) return {};
        let _lastDay = data.days[data.days.length - 1].content.split(',');
        let _context = {};
        // 组装昨天的数据
        let _tmpLastItem = [];
        _lastDay.forEach((item, idx) => {
            let _tmp = item.split('|');
            _tmpLastItem.push(parseInt(_tmp[1]));
        });

        // 组装5天的数据
        let _sum = [];
        data.days.forEach(day => {
            let _tmp = day.content.split(',');
            _tmp.forEach((item, index) => {

                if(typeof _sum[index] === 'undefined') {
                    _sum.push(0);
                }

                let _tmpItem = item.split('|');
                _sum[index] += parseInt(_tmpItem[1]);
            });
        });

        let _lastDayMax = data.point.groupId == 2 ? [_tmpLastItem.max()] : _tmpLastItem.twoMax();
        let _lastDayMin = data.point.groupId == 2 ? [_tmpLastItem.min()] : _tmpLastItem.twoMin();
        let _lastFiveDayMax = data.point.groupId == 2 ? [_sum.max()] : _sum.twoMax();
        let _lastFiveDayMin = data.point.groupId == 2 ? [_sum.min()] : _sum.twoMin();
        
        // 昨日最热
        _tmpLastItem.forEach((item, idx) => {
            if(item == _lastDayMax[0] || item == _lastDayMax[1]) {
                if(typeof _context.lastDayHot === 'undefined') {
                    _context.lastDayHot = [`${idx + 1}`]
                } else {
                    _context.lastDayHot.push(`${idx + 1}`)
                }
            }
        });
        _context.lastDayHot = _context.lastDayHot.join(',');

        // 昨日最冷
        _tmpLastItem.forEach((item, idx) => {
            if(item == _lastDayMin[0] || item == _lastDayMin[1]) {
                if(typeof _context.lastDayCool === 'undefined') {
                    _context.lastDayCool = [`${idx + 1}`]
                } else {
                    _context.lastDayCool.push(`${idx + 1}`)
                }
            }
        });
        _context.lastDayCool = _context.lastDayCool.join(',');

        // 5天最热
        _sum.forEach((item, idx) => {
            if(item == _lastFiveDayMax[0] || item == _lastFiveDayMax[1]) {
                if(typeof _context.lastFiveDayHot === 'undefined') {
                    _context.lastFiveDayHot = [`${idx + 1}`]
                } else {
                    _context.lastFiveDayHot.push(`${idx + 1}`)
                }
            }
        });
        _context.lastFiveDayHot = _context.lastFiveDayHot.join(',');

        // 5天最冷
        _sum.forEach((item, idx) => {
            if(item == _lastFiveDayMin[0] | item == _lastFiveDayMin[1]) {
                if(typeof _context.lastFiveDayCool === 'undefined') {
                    _context.lastFiveDayCool = [`${idx + 1}`]
                } else {
                    _context.lastFiveDayCool.push(`${idx + 1}`)
                }
            }
        });
        _context.lastFiveDayCool = _context.lastFiveDayCool.join(',');

        return _context;
    }

    /**
     * 获取下午提点统计
     * @param {*} data 
     */
    getTodayPoint(data) {
        let _totalList = data.detail.totalList;
        let _resultTotal = [];
        let _context = {}
        // 组装数据
        _totalList.forEach((item, idx) => {
            let _tmpList = item.content.split(',');
            let _tmpResult = [];
            _tmpList.forEach(ctx => {
                if(idx == 0) {
                    let _tmp = ctx.split('|');
                    _tmpResult.push(parseInt(_tmp[1]));
                } else {
                    _tmpResult.push(parseInt(ctx));
                }
            });

            _resultTotal.push(_tmpResult);
        });
        
        let _tmpTodayHot = data.point.groupId == 2 ? [_resultTotal[0].max()] : _resultTotal[0].twoMax();
        let _tmpTodayCool = data.point.groupId == 2 ? [_resultTotal[0].min()] : _resultTotal[0].twoMin();
        let _tmpMaxForget = data.point.groupId == 2 ? [_resultTotal[2].max()] : _resultTotal[2].twoMax();
        let _tmpMaxEven = data.point.groupId == 2 ? [_resultTotal[3].max()] : _resultTotal[3].twoMax();
        // 今日最热
        _resultTotal[0].forEach((item, idx) => {
            if(item == _tmpTodayHot[0] || item == _tmpTodayHot[1]) {
                if(typeof _context.toDayHot === 'undefined') {
                    _context.toDayHot = [`${idx + 1}`]
                } else {
                    _context.toDayHot.push(`${idx + 1}`)
                }
            }
        });
        _context.toDayHot = _context.toDayHot.join(',');

        // 今日最冷
        _resultTotal[0].forEach((item, idx) => {
            if(item == _tmpTodayCool[0] || item == _tmpTodayCool[1]) {
                if(typeof _context.toDayCool === 'undefined') {
                    _context.toDayCool = [`${idx + 1}`]
                } else {
                    _context.toDayCool.push(`${idx + 1}`)
                }
            }
        });
        _context.toDayCool = _context.toDayCool.join(',');

        // 最大遗漏
        _resultTotal[2].forEach((item, idx) => {
            if(item == _tmpMaxForget[0] || item == _tmpMaxForget[1]) {
                if(typeof _context.maxForget === 'undefined') {
                    _context.maxForget = [`${idx + 1}`]
                } else {
                    _context.maxForget.push(`${idx + 1}`)
                }
            }
        });
        _context.maxForget = _context.maxForget.join(',');

        // 最大连出
        _resultTotal[3].forEach((item, idx) => {
            if(item == _tmpMaxEven[0] || item == _tmpMaxEven[1]) {
                if(typeof _context.maxEven === 'undefined') {
                    _context.maxEven = [`${idx + 1}`]
                } else {
                    _context.maxEven.push(`${idx + 1}`)
                }
            }
        });
        _context.maxEven = _context.maxEven.join(',');

        return _context;
    }

    /**
     * 获取时时彩提点统计
     * @param {*} data 
     */
    getSSCPoint(data) {
        let _totalList = data;
        let _resultTotal = [],
            _ontStarTotal = [],
            _twoStarTotal = [],
            _threeStarTotal = [];
        let _context = {}

        // 组装数据
        _totalList.forEach((list, idx) => {
            list.list.forEach((item, index) => {
                let _tmpList = item.content.split(',');
                let _tmpResult = [];
                _tmpList.forEach(ctx => {
                    if(index == 0) {
                        let _tmp = ctx.split('|');
                        _tmpResult.push(parseInt(_tmp[1]));
                    } else {
                        _tmpResult.push(parseInt(ctx));
                    }
                });

                if(idx == 0) {
                    _ontStarTotal.push(_tmpResult);
                } else if(idx == 1) {
                    _twoStarTotal.push(_tmpResult);
                } else {
                    _threeStarTotal.push(_tmpResult);
                }
            });
        });

        // 一星
        let _oneHot = [_ontStarTotal[0].max()];
        let _oneCool = [_ontStarTotal[0].min()];

        _ontStarTotal[0].forEach((item, idx) => {
            if(item == _oneHot[0] || item == _oneHot[1]) {
                if(typeof _context.oneHot === 'undefined') {
                    _context.oneHot = [`${idx}`]
                } else {
                    _context.oneHot.push(`${idx}`)
                }
            } else if(item == _oneCool[0] || item == _oneCool[1]) {
                if(typeof _context.oneCool === 'undefined') {
                    _context.oneCool = [`${idx}`]
                } else {
                    _context.oneCool.push(`${idx}`)
                }
            }
        });
        _context.oneHot = _context.oneHot.join(',');
        _context.oneCool = _context.oneCool.join(',');


        // 二星
        let _twoHot = [_twoStarTotal[0].max()];
        let _twoCool = [_twoStarTotal[0].min()];

        _twoStarTotal[0].forEach((item, idx) => {
            if(item == _twoHot[0] || item == _twoHot[1]) {
                if(typeof _context.twoHot === 'undefined') {
                    _context.twoHot = [`${idx}`]
                } else {
                    _context.twoHot.push(`${idx}`)
                }
            } else if(item == _twoCool[0] || item == _twoCool[1]) {
                if(typeof _context.twoCool === 'undefined') {
                    _context.twoCool = [`${idx}`]
                } else {
                    _context.twoCool.push(`${idx}`)
                }
            }
        });
        _context.twoHot = _context.twoHot.join(',');
        _context.twoCool = _context.twoCool.join(',');

        // 三星
        let _threeHot = [_threeStarTotal[0].max()];
        let _threeCool = [_threeStarTotal[0].min()];

        _threeStarTotal[0].forEach((item, idx) => {
            if(item == _threeHot[0] || item == _threeHot[1]) {
                if(typeof _context.threeHot === 'undefined') {
                    _context.threeHot = [`${idx}`]
                } else {
                    _context.threeHot.push(`${idx}`)
                }
            } else if(item == _threeCool[0] || item == _threeCool[1]) {
                if(typeof _context.threeCool === 'undefined') {
                    _context.threeCool = [`${idx}`]
                } else {
                    _context.threeCool.push(`${idx}`)
                }
            }
        });
        _context.threeHot = _context.threeHot.join(',');
        _context.threeCool = _context.threeCool.join(',');

        return _context;

    }
}