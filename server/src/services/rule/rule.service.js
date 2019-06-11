
'use strict';

import { BaseService } from '../public/base.service';

/**
 * 规则服务
 */
export class RuleService extends BaseService {
    
    /**
     * 获取规则列表
     * @param {object} _para pageIndex 页码  pageSize 页数 
     */
    list() {

        // 规则列表
        let cacheOpt = this.setCache(`lottery/GetLotteryAllTree`, 3000);

        // 参数 groupId彩种一级分类，isupset是否把华东六省 拆分到六个省份
        let httpOpt = {
            url: `/lottery/GetLotteryAllTree`,
            qs: {
                groupId: 0,
                isupset:true
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }

    /**
     * 获取页面规则数据
     */
    async ruleMain() {
        let _data = {},
            _result = {
                digit : {
                    sport: {type:"sport",list:[]},
                    boon: {type:"boon",list:[]}
                },
                high : {type:"high",list:[]},
                other : {
                    list: [],
                    page: [],
                    type:""
                },
                first : {
                    digit: {name: '双色球', code : 'ssq'},
                    high: {},
                    other: {},
                    type:""
                }
            };
        try {
            
            _data = await this.list();
            if(_data.state == 1) {
                _data = _data.result;

                // 处理数据
                let _sport = ['dlt', 'pl3', 'pl5', 'qxc'],          // 全国体彩
                    _boon = ['ssq', 'fc3d', 'qlc'];                 // 全国福彩

                _data.forEach((item, idx) => {

                    // 数字彩
                    if(idx === 0) {
                        let tmp = item.children[0].children.concat(item.children[1].children)
                        tmp.forEach(lottery => {

                            // 全国福彩
                            _boon.forEach(digit => {
                                if(lottery.code === digit) {
                                    _result.digit.boon.list.push(lottery);
                                }
                            });

                            // 全国体彩
                            _sport.forEach(digit => {
                                if(lottery.code === digit) {
                                    _result.digit.sport.list.push(lottery);
                                }
                            });
                        });
                    }

                    // 高频彩
                    if(idx === 1) {
                        item.children.forEach((highLottery, idx) => {
                            if(idx === 0) {
                                _result.first.high = {
                                    name: highLottery.children[0].name,
                                    code: highLottery.children[0].code
                                }
                                _result.first.type ="high";
                            }
                            _result.high.type="high";
                            _result.high.list.push(highLottery)
                        });
                    }

                    // 地方彩
                    if(idx === 2) {
                        let _tmp = [],
                            _i = 1,
                            _length = item.children.length;
                        item.children.forEach((otherLottery, idx) => {
                            if(idx === 0) {
                                _result.first.other = {
                                    name: otherLottery.children[0].name,
                                    code: otherLottery.children[0].code
                                }
                                _result.first.type ="other";
                            }
                            _result.other.type="other";
                            _result.other.list.push(otherLottery);
                            // 首页结构需要，每三个进行分组
                            _tmp.push(otherLottery);
                            if(_i%3 === 0) {
                                _result.other.page.push(_tmp);
                                _tmp = [];
                            }
                            // 如果到了结尾
                            if(_i === _length) {
                                _result.other.page.push(_tmp);
                            }

                            _i++;
                        });
                    }
                });

            }
        } catch(ex) {
            this.errorMsg(ex.message);
        }

        return _result;
    }

    /**
     * 获取规则详情
     * @param {int} code
     */
    detail(code) {
        // 判断code是否为指定的可转换格式
        if (!code) {
            // 返回异常内容
            return this.errorMsg(`缺少参数code`);
        }

        // 公告详情不缓存，因为如果有紧急公告相关想马上撤回会造成麻烦
        let cacheOpt = this.setCache(`rule/getRuleContent/${code}`, 0);

        // 参数
        let httpOpt = {
            url: `rule/getRuleContent`,
            qs: {
                code: code,
            }
        };

        try {
            return this.httpGet(httpOpt, cacheOpt, 2);
        }catch(ex) {
            return this.errorMsg(ex.message);
        }

        
    }
}