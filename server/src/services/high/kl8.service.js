/****************************************************************
 *
 *                              快乐8服务接口
 *
 ****************************************************************/

'use strict';
import { LotteryService } from '../public/lottery.service';

export class KL8Service extends LotteryService {

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
                sortFiled: 1,
                day: day ? day : (new Date()).format('yyyy-MM-dd')
            }));

            if(_result.state == 1) {
                _result = _result.result;
                let _length = _result.length;

                // 重新组合数据
                _result.forEach(item => {
                    let _tmpSplit = item.result.split('|'),
                        _tmpReult = _tmpSplit[0].split(',');

                    // 数组容器
                    item.resultList = [];

                    // 组合前端需要的数据
                    _tmpReult.forEach(val => {
                        item.resultList.push({
                            value: val,
                            num: parseInt(val),
                            isEven: false,          // 是否连开号码
                        });
                    });

                    // 飞盘
                    item.frisbee = _tmpSplit[1];
                });
                
                // 连开
                for (let i = 0; i < _length - 1; i++) {
                    _result[i].resultList.forEach(curr => {
                        for(let next of _result[i + 1].resultList) {
                            if(curr.value == next.value) {
                                curr.isEven = true;
                                next.isEven = true;
                                break;
                            }
                        }
                    });
                }
            }

            // 获取前10条数据
            let _history = (await this.history({
                type: 1,
                sortFiled: 2,
                quantity: 10
            })).result;

            _data.history = _history;

            if(_data.history && _data.history.length > 0) {
                _data.history = _data.history.map(item => {
                    let t = item.result.split('|');
                    item.frisbee = t[1];
                    item.result = t[0];
    
                    return item;
                });
            }

            _data.resultList = _result;

            // 开奖时间
            _data.awardTime = (await this.getAwardTimes()).result;

            // 开奖结果
            _data.awardResult = (await this.getAwardData()).result;
            if(_data.awardResult && _data.awardResult.result) {
                _data.awardResult.frisbee = _data.awardResult.result.split('|')[1];
                _data.awardResult.resultList = _data.awardResult.result.split('|')[0].split(',');
            }

            // 当前开奖期数和实际获取的是否对上
            _data.isAwarding = _data.awardTime.current.period > _data.awardResult.period;
            _data.name = _data.awardTime.lotteryName;

        } catch (ex) {
            this.errorMsg(ex.message);
        }

        return _data;

    }

}