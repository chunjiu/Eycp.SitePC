/****************************************************************
 *
 *                              双色球服务接口
 *
 ****************************************************************/

'use strict';
import { LotteryService } from '../public/lottery.service';

export class SSQService extends LotteryService {

    constructor() {
        super('ssq');
    }

    /**
     * 页面历史开奖数据
     */
    async pageHistory(year, day) {

        let _data = {};

        try {
            year = year ? parseInt(year) : 1900;
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
                    let _tmpSplit = item.result.split('|'),
                        _tmpRedReult = _tmpSplit[0].split(',');

                    // 数组容器
                    item.redResultList = [];
                    item.blueResultList = [];

                    // 组合红球数据
                    _tmpRedReult.forEach(val => {
                        let _tmp = parseInt(val);
                        item.redResultList.push({
                            value: val,
                            num: _tmp,
                            area: _tmp < 12 ? 1 : (_tmp < 23 ? 2 : 3),      // 属于哪个选区
                            isEach: false,      // 是否重号
                            isEven: false       // 是否连号
                        });
                    });

                    // 组合蓝球数据
                    item.blueResultList.push({
                        value: _tmpSplit[1],
                        num: parseInt(_tmpSplit[1])
                    });
                    
                    // 格式化中奖信息
                    if(item.award_count) {
                        item.award_count = typeof item.award_count === 'string' ? JSON.parse(item.award_count) : item.award_count;
                    }
                })
                
                // 连号
                _result.forEach(item => {
                    for (let i = 0; i < 5; i++) {
                        if (item.redResultList[i].num + 1 == item.redResultList[i + 1].num) {
                            item.redResultList[i].isEven = true;
                            item.redResultList[i + 1].isEven = true;
                        }
                    }
                });

                // 重号
                for (let i = 0; i < _length - 1; i++) {
                    for (let j = 0; j < 6; j++) {
                        if (_result[i].redResultList[j].value == _result[i + 1].redResultList[j].value) {
                            _result[i].redResultList[j].isEach = true;
                            _result[i + 1].redResultList[j].isEach = true;
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
                _data.awardResult.blueResultList = _tmp[1] ? _tmp[1].split(',') : '';
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
                name: '周四',
                value: 3
            },{
                name: '周二',
                value: 1
            },]

        } catch (ex) {
            this.errorMsg(ex);
        }

        return _data;

    }

}