/****************************************************************
 *
 *                              七星彩服务接口
 *
 ****************************************************************/

'use strict';
import { LotteryService } from '../public/lottery.service';

export class QXCService extends LotteryService {

    constructor() {
        super('qxc');
    }

    /**
     * 页面历史开奖数据
     */
    async pageHistory(year, day) {

        let _data = {};

        try {
            year = year ? parseInt(year) : parseInt((new Date()).format('yyyy'));
            day = day ? parseInt(day) : -1;
            let _result = (await this.numberHistory({
                year: year,
                quantity: 0,
                day: day
            }));

            if(_result.state == 1) {
                _result = _result.result;

                let _length = _result.length;
    
                // 重新组合数据
                _result.forEach(item => {
                    let _tmpReult = item.result.split(',');
    
                    // 数组容器
                    item.redResultList = [];
    
                    // 组合红球数据
                    _tmpReult.forEach(val => {
                        let _tmp = parseInt(val);
                        item.redResultList.push({
                            value: val,
                            num: _tmp,
                            isEach: false,      // 是否重号
                            isEven: false,      // 是否连号
                            isSide: false       // 是否边号
                        });
                    });
    
                    // 格式化中奖信息
                    if(item.award_count) {
                        item.award_count = typeof item.award_count === 'string' ? JSON.parse(item.award_count) : item.award_count;
                    }
                })
                
                // 连号
                _result.forEach(item => {
                    for (let i = 0; i < 6; i++) {
                        if (item.redResultList[i].num + 1 == item.redResultList[i + 1].num) {
                            item.redResultList[i].isEven = true;
                            item.redResultList[i + 1].isEven = true;
                        }
                    }
                });
    
                
                for (let i = 0; i < _length - 1; i++) {
                    // 重号
                    for (let j = 0; j < 7; j++) {
                        if (_result[i].redResultList[j].value == _result[i + 1].redResultList[j].value) {
                            _result[i].redResultList[j].isEach = true;
                            _result[i + 1].redResultList[j].isEach = true;
                        }
                    }
    
                    // 边号
                    /**
                     * 边号逻辑
                     * 	(1). 当前位置球数值+1 = 上一期相对当前位置向右移一位的球的数值
                        (2). 当前位值球数值-1 = 上一期相对当前位置向左移一位的球的数值
                     */
                    for (let j = 0; j < 7; j++) {
                        if(j === 0) {
                            if (_result[i].redResultList[j].num + 1 === _result[i + 1].redResultList[j + 1].num) {
                                _result[i].redResultList[j].isSide = _result[i + 1].redResultList[j + 1].isSide = true;
                            }
                            
                        } else if(j === 6) {
                            if (_result[i].redResultList[j].num - 1 === _result[i + 1].redResultList[j - 1].num) {
                                _result[i].redResultList[j].isSide = _result[i + 1].redResultList[j - 1].isSide = true;
                            }
                        } else {
                            if (_result[i].redResultList[j].num + 1 === _result[i + 1].redResultList[j + 1].num) {
                                _result[i].redResultList[j].isSide = _result[i + 1].redResultList[j + 1].isSide = true;
                            }
    
                            if (_result[i].redResultList[j].num - 1 === _result[i + 1].redResultList[j - 1].num) {
                                _result[i].redResultList[j].isSide = _result[i + 1].redResultList[j - 1].isSide = true;
                            }
                        }
                    }
                }
            }

            _data.history = _result;

            // 开奖时间
            _data.awardTime = (await this.getAwardTimes()).result;

            // 开奖结果
            _data.awardResult = (await this.getAwardData()).result;
            if(_data.awardResult && _data.awardResult.result) {
                let _tmp = _data.awardResult.result.split('|');
                _data.awardResult.redResultList = _tmp[0].split(',');
                _data.awardResult.blueResultList = _tmp[1] ? _tmp[1].split(',') : [];
                _data.awardResult.resultList = _data.awardResult.redResultList.concat(_data.awardResult.blueResultList);
            }

            // 当前开奖期数和实际获取的是否对上
            _data.isAwarding = _data.awardTime && _data.awardTime.current && _data.awardResult ? _data.awardTime.current.period > _data.awardResult.period : false;
            _data.name = _data.awardTime.lotteryName;

            // 获取开奖筛选星期
            _data.weekDayList = [{
                name: '全部',
                value: -1
            },{
                name: '周日',
                value: 6
            },{
                name: '周五',
                value: 4
            },{
                name: '周二',
                value: 1
            }];

        } catch (ex) {
            this.errorMsg(ex.message);
        }

        return _data;

    }

}