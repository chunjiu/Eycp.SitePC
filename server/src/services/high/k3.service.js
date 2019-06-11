/****************************************************************
 *
 *                              k3服务接口
 *
 ****************************************************************/

'use strict';
import { LotteryService } from '../public/lottery.service';

export class K3Service extends LotteryService {

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
            })).result;

            let _length = _result.length;

            // 重新组合数据
            _result.forEach(item => {
                let _tmpReult = item.result.split(',');

                // 数组容器
                item.resultList = [];

                // 组合前端需要的数据
                _tmpReult.forEach(val => {
                    item.resultList.push({
                        value: val >= 10 ? val : '0' + val,
                        num: parseInt(val),
                        isLeopard: false,       // 是否豹子
                        isEven: false,          // 是否三连号
                        isPair: false,          // 是否是对子
                        isDiff: false           // 是否是三不同
                    });
                });

                // 逻辑处理
                let _item1 = item.resultList[0],
                    _item2 = item.resultList[1],
                    _item3 = item.resultList[2];

                // 是否是豹子
                if(_item1.value == _item2.value && _item2.value == _item3.value) {
                    _item1.isLeopard = _item2.isLeopard = _item3.isLeopard = true;
                } else if(_item1.value == _item2.value || _item2.value == _item3.value) {   // 如果不是豹子则判断是否是对子
                    _item1.isPair = _item2.isPair = _item3.isPair = true;
                } else {    // 既不是豹子又不是对子，三颗肯定不同
                    if(_item1.value != _item2.value && _item2.value != _item3.value) {  // 三不同
                        _item1.isDiff = _item2.isDiff = _item3.isDiff = true;

                        if(_item1.num + 1 == _item2.num && _item2.num + 1 == _item3.num) {    // 是否连号
                            _item1.isEven = _item2.isEven = _item3.isEven = true;
                        }
                    }
                }

                // 和值
                item['sum'] = _item1.num + _item2.num + _item3.num;
                
            })

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
            _data.awardResult.resultList = _data.awardResult.result.split(',').map(item => {
                return item >= 10 ? item : '0' + item;
            });

            // 当前开奖期数和实际获取的是否对上
            _data.isAwarding = _data.awardTime.current.period > _data.awardResult.period;
            _data.name = _data.awardTime.lotteryName;
            
        } catch (ex) {
            this.errorMsg(ex.message);
        }

        return _data;

    }



}