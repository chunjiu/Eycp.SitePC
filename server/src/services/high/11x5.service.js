/****************************************************************
 *
 *                              11x5服务接口
 *
 ****************************************************************/

'use strict';
import { LotteryService } from '../public/lottery.service';
const formatFunction = Symbol('formatFunction');

export class _11x5Service extends LotteryService {

    constructor(lotteryCode) {
        super(lotteryCode);
        
    }

    /**
     * 页面历史开奖数据
     */
    async pageHistory(day) {
        let _data = {
            history: [],
            awardResult: {},
            awardTime: {
                current: {},
                next: {}
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
                        value: val,
                        num: parseInt(val),
                        isEach: false,      // 是否重号
                        isEven: false       // 是否连号
                    });

                });
            });

            // 连号
            _result.forEach(item => {
                for (let i = 0; i < 4; i++) {
                    if (item.resultList[i].num + 1 == item.resultList[i + 1].num) {
                        item.resultList[i].isEven = true;
                        item.resultList[i + 1].isEven = true;
                    }
                }
            });

            // 重号
            for (let i = 0; i < _length - 1; i++) {
                for (let j = 0; j < 5; j++) {
                    if (_result[i].resultList[j].value == _result[i + 1].resultList[j].value) {
                        _result[i].resultList[j].isEach = true;
                        _result[i + 1].resultList[j].isEach = true;
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

    /**
     * 格式化部分需要处理的图表数据
     * @param {*} flotType 
     * @param {*} data 
     */
    formatTrendData(flotType, data) {
        if(flotType) flotType = flotType.toString();
        if(['2','3','4','7','8','9','11','12'].includes(flotType)) {
            return this.baseTrendData(flotType, data);
        } /*else if(['40'].includes(flotType)){
            return this.twoTrendData(flotType, data);
        } */else if(['501','502','503','504','505','506','507','508','509','510','511'].includes(flotType)) {
            return this.eightAreaTrend(data);
        } else if(['100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115'].includes(flotType)) {
            return this.totalAreaTrend(data);
        } else {
            return data;
        }
        
    }

    /**
     * 基础走势格式化
     * @param {*} flotType 
     * @param {*} data 
     */
    baseTrendData(flotType, data) {
        let json = require('../../lib/Json');
        switch (flotType) {
            case '2':
                try {
                    if (data && data.missStatList) {
                        data.missStatList.forEach(item => {
                            // 拷贝内容
                            let _tmpData = json.deepCopy(item.statData['data_0']);
                            let _tmpData2 = json.deepCopy(item.statData['data_1']);
                        
                            // 清空原来的内容
                            item.statData = {};
        
                            // 处理前五位
                            let _index = 1;
                            for(let i = 0; i < 5; i++) {
                                item.statData[`data_${i}`] = _tmpData.slice(i * 2, (i + 1) * 2);
                            }

                            // 处理大小比例走势
                            item.statData['data_5'] = _tmpData2;
                            
                            // 处理结果大小形态
                            let _result = [];
                            item.statResult.forEach(result => {
                                _result.push(result > 5 ? '<span class="font-red">大</span>' : '<span class="font-blue">小</span>');
                            });

                            item.otherData = [{
                                column: 22,
                                data: _result.join('')
                            }];

                        });

                        data.missBottomStatList.forEach(item => {
                           //item.statData['data_5'] = [''];
                            item.otherData = [{
                                column: 22,
                                data: ['']
                            }];
                        });
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
            break;
            case '3':
                try {
                    if (data && data.missStatList) {
                        data.missStatList.forEach(item => {
                            // 拷贝内容
                            let _tmpData = json.deepCopy(item.statData['data_0']);
                            let _tmpData2 = json.deepCopy(item.statData['data_1']);
                        
                            // 清空原来的内容
                            item.statData = {};
        
                            // 处理前五位
                            let _index = 1;
                            for(let i = 0; i < 5; i++) {
                                item.statData[`data_${i}`] = _tmpData.slice(i * 2, (i + 1) * 2);
                            }

                            // 处理大小比例走势
                            item.statData['data_5'] = _tmpData2;
                            
                            // 处理结果大小形态
                            let _result = [];
                            item.statResult.forEach(result => {
                                _result.push(result % 2 == 0 ? '<span class="font-blue">偶</span>' : '<span class="font-red">奇</span>');
                            });

                            item.otherData = [{
                                column: 22,
                                data: _result.join('')
                            }];

                        });

                        data.missBottomStatList.forEach(item => {
                            //item.statData['data_5'] = [''];
                            item.otherData = [{
                                column: 22,
                                data: ['']
                            }];
                        });
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
            break;
            case '4':
                try {
                    if (data && data.missStatList) {
                        data.missStatList.forEach(item => {
                            // 拷贝内容
                            let _tmpData = json.deepCopy(item.statData['data_0']);
                            let _tmpData2 = json.deepCopy(item.statData['data_1']);
                        
                            // 清空原来的内容
                            item.statData = {};
        
                            // 处理前五位
                            let _index = 1;
                            for(let i = 0; i < 5; i++) {
                                item.statData[`data_${i}`] = _tmpData.slice(i * 2, (i + 1) * 2);
                            }

                            // 处理大小比例走势
                            item.statData['data_5'] = _tmpData2;
                            
                            // 处理结果大小形态
                            let _result = [];
                            item.statResult.forEach(result => {
                                _result.push([1,2,3,5,7,11].includes(result) ? '<span class="font-red">质</span>' : '<span class="font-blue">合</span>');
                            });

                            item.otherData = [{
                                column: 22,
                                data: _result.join('')
                            }];

                        });

                        data.missBottomStatList.forEach(item => {
                           // item.statData['data_5'] = [''];
                            item.otherData = [{
                                column: 22,
                                data: ['']
                            }];
                        });
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
            break;
            case '7':
                try {
                    if (data && data.missStatList) { 
                        data.missStatList.forEach(item => {
                            let resultData = {};
                            
                            let sumData = [];
                            // 求和值
                            sumData = (item.statResult.reduce((total,sum) => {
                                return total + sum;
                            }));
                            resultData.data_0 = [sumData];
                            resultData.data_1 = json.deepCopy(item.statData.data_0);
                            resultData.data_2 = json.deepCopy(item.statData.data_1);
                            resultData.data_3 = json.deepCopy(item.statData.data_2);

                            item.statData = resultData;
                        });

                        data.missBottomStatList.forEach(item => {
                            let resultData = {};
                            resultData.data_0 = [""];
                            resultData.data_1 = json.deepCopy(item.statData.data_0);
                            resultData.data_2 = json.deepCopy(item.statData.data_1);
                            resultData.data_3 = json.deepCopy(item.statData.data_2);

                            item.statData = resultData;
                        })
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
                break;
            case '8':
                try {
                    if (data && data.missStatList) {
                        data.missStatList.forEach(item => {
                            // 拷贝内容
                            let _resultData = {};
                            let _tmpData = json.deepCopy(item.statData.data_0);
                            let _tmpGroup = [];
                            let _tmpLength = _tmpData.length;
                            // 五个分组
                            for(let i = 0;i < _tmpLength;i +=3) {
                                _tmpGroup.push(_tmpData.slice(i, i + 3));
                            }
                            
                            // 拆分到对应的容器
                            let _tmpValue = [];
                            _tmpGroup.forEach((group, index) => {
                                _resultData[`data_${index}`] = group;
                                group.forEach((v, idx) => {
                                    if(v == 0) {
                                        _tmpValue.push(idx == 0 ? '<span class="font-red">升</span>' : (idx == 1 ? '<span class="font-blue">平</span>' : '<span class="font-green">降</span>'))
                                    }
                                });
                            });

                            // 组装升降平数据
                            _resultData['data_5'] = [];

                            _resultData['data_6'] = json.deepCopy(item.statData.data_1);
                            _resultData['data_7'] = json.deepCopy(item.statData.data_2);
                            _resultData['data_8'] = json.deepCopy(item.statData.data_3);

                            item.statData = _resultData;

                            item.otherData = [{
                                bg: 'bg-default',
                                column: 21,
                                data: _tmpValue.join('')
                            }];

                        });

                        data.missBottomStatList.forEach(item => {
                            let resultData = {};
                            resultData.data_0 = json.deepCopy(item.statData.data_0);
                            resultData.data_1 = [""];
                            resultData.data_2 = json.deepCopy(item.statData.data_1);
                            resultData.data_3 = json.deepCopy(item.statData.data_2);
                            resultData.data_4 = json.deepCopy(item.statData.data_3);

                            item.statData = resultData;
                        })
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
            break;
            case '9':
                try {
                    if (data && data.missStatList) {
                        data.missStatList.forEach(item => {
                            // 拷贝内容
                            let _resultData = {};
                            let _tmpData = json.deepCopy(item.statData.data_0);
                            let _tmpGroup = [];
                            let _tmpLength = _tmpData.length;
                            // 五个分组
                            for(let i = 0;i < _tmpLength;i +=3) {
                                _tmpGroup.push(_tmpData.slice(i, i + 3));
                            }
                            
                            // 拆分到对应的容器
                            _tmpGroup.forEach((group, index) => {
                                _resultData[`data_${index}`] = group;
                            });

                            // 组装012数据
                            let _tmpValue = [];
                            item.statResult.forEach(result => {
                                let _tmp = result % 3;
                                _tmpValue.push(_tmp == 0 ? '<span class="font-red" style="margin:0 1px;">0</span>' : (_tmp == 1 ? '<span class="font-blue" style="margin:0 1px;">1</span>' : '<span class="font-green" style="margin:0 1px;">2</span>'))
                            });
                            _resultData['data_5'] = [];

                            _resultData['data_6'] = json.deepCopy(item.statData.data_1);
                            _resultData['data_7'] = json.deepCopy(item.statData.data_2);
                            _resultData['data_8'] = json.deepCopy(item.statData.data_3);

                            item.statData = _resultData;

                            item.otherData = [{
                                bg: 'bg-default',
                                column: 21,
                                data: _tmpValue.join('')
                            }];

                        });

                        data.missBottomStatList.forEach(item => {
                            let resultData = {};
                            resultData.data_0 = json.deepCopy(item.statData.data_0);
                            resultData.data_1 = [""];
                            resultData.data_2 = json.deepCopy(item.statData.data_1);
                            resultData.data_3 = json.deepCopy(item.statData.data_2);
                            resultData.data_4 = json.deepCopy(item.statData.data_3);

                            item.statData = resultData;
                        })
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
            break;
            /*case '10':
                try {
                    if (data && data.missStatList) {
                        let _result = this.getEachArray(data.missStatList);
                        data.missStatList.forEach((item, index) => {

                                _result[index]['data_2'] = json.deepCopy(item.statData.data_0);
                                _result[index]['data_3'] = json.deepCopy(item.statData.data_1);
                                _result[index]['data_4'] = json.deepCopy(item.statData.data_2);
                                _result[index]['data_5'] = json.deepCopy(item.statData.data_3);
                                _result[index]['data_6'] = json.deepCopy(item.statData.data_4);

                            item.statData = _result[index];
                        });


                        data.missBottomStatList.forEach(item => {
                            let resultData = {};
                            resultData.data_0 = [""];
                            resultData.data_1 = [""];
                            resultData.data_2 = json.deepCopy(item.statData.data_0);
                            resultData.data_3 = json.deepCopy(item.statData.data_1);
                            resultData.data_4 = json.deepCopy(item.statData.data_2);
                            resultData.data_5 = json.deepCopy(item.statData.data_3);
                            resultData.data_6 = json.deepCopy(item.statData.data_4);

                            item.statData = resultData;
                        })
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
            break;*/
            case '11':
                try {
                    if (data && data.missStatList) {
                        data.missStatList.forEach((item, index) => {
                            let keepTwo = [];
                            let keepThree = [];
                            let keepFour = [];
                            let keepFive = [];
                            // 排序
                            let _result = item.statResult.sort((a, b) => {return a > b});
                            // 连号处理
                            for(let i = 0; i < 4; i++) {
                                if(_result[i] + 1 == _result[i+1]) {
                                    keepTwo.push(`{${this.addZero(_result[i])},${this.addZero(_result[i+1])}}`);
                                    // 是否三连
                                    if(i + 2 <= 4 && _result[i] + 2 == _result[i+2]) {
                                        keepThree.push(`{${this.addZero(_result[i])},${this.addZero(_result[i+1])},${this.addZero(_result[i+2])}}`);
                                    }

                                    // 是否四连
                                    if(i + 3 <= 4 && _result[i] + 3 == _result[i+3]) {
                                        keepFour.push(`{${this.addZero(_result[i])},${this.addZero(_result[i+1])},${this.addZero(_result[i+2])},${this.addZero(_result[i+3])}}`);
                                    }
                                }

                                // 是否五连
                                if(i == 0 && _result[i] + 4 == _result[i+4]) {
                                    keepFive.push(`{${this.addZero(_result[i])},${this.addZero(_result[i+1])},${this.addZero(_result[i+2])},${this.addZero(_result[i+3])},${this.addZero(_result[i+4])}}`);
                                }
                            }

                            item.statData['data_1'] = [keepTwo.join(',')];
                            item.statData['data_2'] = [keepThree.join(',')];
                            item.statData['data_3'] = [keepFour.join(',')];
                            item.statData['data_4'] = [keepFive.join(',')];

                            // 处理data0数据
                            // let tmpState = [];
                            // item.statData.data_0.forEach((d, idx) => {
                            //     if(d == 0) {
                            //         tmpState.push(idx);
                            //     } else {
                            //         tmpState.push(d);
                            //     }
                            // })

                            // item.statData['data_0'] = tmpState;

                        });
                        data.missBottomStatList.forEach(item => {
                            item.statData['data_1'] = [''];
                            item.statData['data_2'] = [''];
                            item.statData['data_3'] = [''];
                            item.statData['data_4'] = [''];
                        });
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
            break;
            case '12':
                try {
                    if (data && data.missStatList) {
                        data.missStatList.forEach((item, index) => {
                            let ACArray = [];
                            let result = {};
                            // 倒序排序
                            let _result = item.statResult.sort((a, b) => {return b > a});
                            for(let i = 0; i < 4; i++) {
                                for(let j = i + 1; j < 5; j ++) {
                                    ACArray.push(_result[i] - _result[j]);
                                }
                            }

                            // 去重
                            let resultarr = [...new Set(ACArray)];

                            // 计算AC
                            result['data_0'] = [resultarr.length - 4];

                            result['data_1'] = json.deepCopy(item.statData['data_0']);
                            result['data_2'] = json.deepCopy(item.statData['data_1']);
                            result['data_3'] = json.deepCopy(item.statData['data_2']);
                            result['data_4'] = json.deepCopy(item.statData['data_3']);
                            result['data_5'] = json.deepCopy(item.statData['data_4']);

                            item.statData = result;

                        });

                        data.missBottomStatList.forEach(item => {
                            let resultData = {};
                            resultData.data_0 = [""];
                            resultData.data_1 = json.deepCopy(item.statData.data_0);
                            resultData.data_2 = json.deepCopy(item.statData.data_1);
                            resultData.data_3 = json.deepCopy(item.statData.data_2);
                            resultData.data_4 = json.deepCopy(item.statData.data_3);
                            resultData.data_5 = json.deepCopy(item.statData.data_4);

                            item.statData = resultData;
                        })
                    }
                } catch(ex) {
                    console.error(ex);
                } finally {
                    return data;
                }
            break;
        }
    }

    /**
     * 八区数据格式化
     * @param {*} data 
     */
    eightAreaTrend(data) {
        if(!data || !data.data_0) return data;
        let _result = [],
            _length = data.data_0.length;

        // 横转竖
        for(var i = 0; i < _length; i++) {
            let _resultRow = [];
            Object.keys(data).forEach(item => {
                _resultRow.push(data[item][i] == '' ? '——' : data[item][i]);
            });

            _result.push(_resultRow);
        }

        return _result;
    }

    /**
     * 多日统计格式化
     */
    totalAreaTrend(data) {
        let result = [];
        for(let item of data.data) {
            let _tmpResult = [];
            _tmpResult.push(item.number);
            _tmpResult.push(item.totalCount);
            Object.keys(item.outCount).forEach(key => {
                let number = item.outCount[key] === 0 ? '' : item.outCount[key];
                _tmpResult.push(number);
            });

            result.push(_tmpResult);
        }

        let periodCount = [];
        Object.keys(data.period).forEach(item => {
            periodCount.push(data.period[item]);
        })

        return {
            data: result,
            periodCount: periodCount.join('|')
        };
    }

    /**
     * 多日统计表头
     */
    totalAreaHeader(data) {
        let _result = {};
        _result['_th1'] = {
            content: '号码',
            needSort: true
        }
        _result['_th2'] = {
            content: '总次数',
            needSort: true
        }
        data.data.forEach(list => {
            Object.keys(list['outCount']).forEach((item, idx) => {
                _result[`_th${idx + 3}`] = {
                    content: item,
                    needSort: true
                }
            });
        })

        return _result;
        
    }

    /**
     * 获取开奖前几个数据
     * @param {*} data 
     * @param {*} num 
     */
    getForceTrendData(data, num) {
        // 通用只要前两个开奖
        if (data && data.missStatList) {
            data.missStatList.forEach(item => {
                item.statResult
            })
        }
    }

    /**
     * 重号
     * @param {*} resultList 
     */
    getEachArray(resultList) {
        let _length = resultList.length;
        let _result = [{
            data_0: ['-'],
            data_1: [0]
        }];
        for (let i = 0; i < _length - 1; i++) {
            let _lineArray = [];
            // 如果包含则代表重号
            for(let item of resultList[i + 1].statResult) {
                if(resultList[i].statResult.includes(item)) {
                    _lineArray.push(item);
                }
            }

            _result.push({
                data_0: [_lineArray.join(',')],
                data_1: [_lineArray.length.toString()]
            });
        }

        return _result;
    }

    /**
     * 连号
     * @param {*} resultList 
     */
    getEvenArray(resultList) {
        
    }

    /**
     * 补零
     */
    addZero(value) {
        return value > 9 ? value : '0' + value;
    }

    /**
     * 生成日期
     */
    generateAreaDate() {
        let _result = [];
        let _nowDateTime = (new Date()).getTime();
        let dayTime = 1000 * 60 * 60 * 24;
        _result.push({date: 0, title: '今天'});
        _result.push({date: 1, title: '昨天'});
        _result.push({date:2, title: '前天'});
        let _tmpOldDay = (new Date(_nowDateTime - (dayTime * 3)));
        let _tmpYOldDay = (new Date(_nowDateTime - (dayTime * 4)));
        _result.push({date: 3, title: _tmpOldDay.format('MM-dd')});
        _result.push({date: 4, title: _tmpYOldDay.format('MM-dd')});
        return _result;
    }

}