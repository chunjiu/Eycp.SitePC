/****************************************************************
 *
 *                              河南泳坛夺金481服务接口
 *
 ****************************************************************/

'use strict';
import { LotteryService } from '../public/lottery.service';

export class HN481Service extends LotteryService {

    constructor(lotteryCode) {
        super(lotteryCode);
    }

    /**
     * 页面历史开奖数据
     */
    async pageHistory(day) {
        let _data = {
            history : [],
            awardResult: {},
            awardTime: {
                current: {},
                next : {}
            }
        };

        try {
            let _result = (await this.history({
                type: 1,
                sortFiled: 2,
                day: day ? day : (new Date()).format('yyyy-MM-dd')
            }));

            if(_result.state == 1) {
                _result = _result.result;
                let _length = _result.length;

                // 重新组合数据
                _result.forEach(item => {
                    let _tmpReult = item.result.split(',');

                    // 数组容器
                    item.resultList = [];

                    // 组合前端需要的数据
                    _tmpReult.forEach(val => {
                        item.resultList.push({
                            value: val,
                            num: parseInt(val),
                            isEach: false,      // 是否重号
                            isEven: false       // 是否连号
                        });
                        
                    });
                });
                
                // 连号
                _result.forEach(item => {
                    for (let i = 0; i < 3; i++) {
                        if (item.resultList[i].num + 1 == item.resultList[i + 1].num) {
                            item.resultList[i].isEven = true;
                            item.resultList[i + 1].isEven = true;
                        }
                    }
                });

                // 重号
                for (let i = 0; i < _length - 1; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (_result[i].resultList[j].value == _result[i + 1].resultList[j].value) {
                            _result[i].resultList[j].isEach = true;
                            _result[i + 1].resultList[j].isEach = true;
                        }
                    }
                }
            }

            // 获取前10条数据
            let _history = (await this.history({
                type: 1,
                sortFiled: 2,
                quantity: 10
            })).result;

            _data.history = _history;
            _data.resultList = _result;

            // 开奖时间
            _data.awardTime = (await this.getAwardTimes()).result;

            // 开奖结果
            _data.awardResult = (await this.getAwardData()).result;
            _data.awardResult.resultList = _data.awardResult.result.split(',');

            // 当前开奖期数和实际获取的是否对上
            _data.isAwarding = _data.awardTime.current.period > _data.awardResult.period;
            _data.name = _data.awardTime.lotteryName;
            

        } catch (ex) {
            this.errorMsg(ex.message);
        }

        return _data;

    }

}