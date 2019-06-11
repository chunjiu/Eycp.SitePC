/***********************************************************************************
 *
 *                                      图表控制器;
 *
 ***********************************************************************************/

'use strict';

import { BaseController } from '../public/base.controller';
import { LotteryService } from '../../services/public/lottery.service';
import { ChartService } from '../../services/chart/chart.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import ConfigService from '../../services/public/config.service';


/**
 * 走势图表控制器
 */
class ChartController extends BaseController {

    constructor() {

        super();

        this.chartService = new ChartService();

        this.configService = ConfigService;
    }
    /**
     * 搜索彩种走势入口
     * @param {*} request
     * @param {*} reply
     */
    async index(request, reply) {

        let _option = {
            pageCode: 'eycp_site_chart_list'
        };

        let _context = this.getBaseContext(_option);
        let _groupType = request.params.groupType;
        let _service = new LotteryService();

        _context.list = {};

        try {
            //console.log(__lotteryAllTree);
            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'chart');
            // 获取底部推荐
            _context.recommend = await DealWithCommonService.showRecommend('high');
            let _awardData = await _service.getAllAward();

            // 如果数据正常才处理
            if (_awardData.state == 1) {
                let _result = {};

                _context.category = await _service.getLotteryGroupList();
                _context.highChilds = await _service.getLotteryGroupList(2);
                _context.province = await _service.getLotteryProvinceList();

                // 获取结果集
                if (_context.category.state == 1) {
                    _context.category = _context.category.result;
                } else {
                    _context.category = [];
                }

                _context.groupType = _groupType ? _groupType : 0;

                /*if (_context.highChilds.state == 1) {
                    _context.highChilds = _context.highChilds.result;
                } else {
                    _context.highChilds = []
                }*/

                _context.highChilds = [
                 { id: 1, name: '十一选五' },
                 { id: 2, name: '快三' },
                 { id: 4, name: '时时彩' },
                 { id: 3, name: '快乐十分' }];

                if (_context.province.state == 1) {
                    _context.province = _context.province.result;
                } else {
                    _context.province = [];
                }

                // 添加全部的选项
                if (_context.category[0].id != 0) {
                    _context.category.unshift({name: '全部', id: 0});
                }

                if (_context.highChilds[0].id != 0) {
                    _context.highChilds.unshift({name: '全部', id: 0});
                }


                _context.list = _service.formatLotteryHallData({
                    result: _awardData.result,
                    province: _context.province
                });

                let tempArr = [], tempArr2 = [], tempArr3 = [];
                _context.list.high.forEach(function(item) {
                    if (item.groupChildId < 3) {
                        tempArr.push(item);
                    }
                    if (item.groupChildId == 4) {
                        tempArr2.push(item);
                    }
                    if(item.groupChildId == 3) {
                        tempArr3.push(item);
                    }
                });
                _context.list.high = tempArr.concat(tempArr2).concat(tempArr3);

                // 福利彩票走势
                _context.boonTrend = this.configService.trend[0].child;
                // 体育彩票走势
                _context.sportTrend = this.configService.trend[1].child;
                // 高频彩票走势
                _context.highTrend = [];
                __template.defaults.imports.highTrendData = (groupChildId, lotteryCode) => {
                    if (lotteryCode === 'gxkl10') {
                        _context.highTrend = this.configService.trend[2].child[3];
                    } else {
                        switch (groupChildId) {
                            case 1:
                                _context.highTrend = this.configService.trend[2].child[1];
                                break;
                            case 2:
                                _context.highTrend = this.configService.trend[2].child[0];
                                break;
                            case 3:
                                _context.highTrend = this.configService.trend[2].child[2];
                                break;
                            case 4:
                                _context.highTrend = this.configService.trend[2].child[4];
                                break;
                            default:break;
                        }
                    }
                    return _context.highTrend;
                }


            }

        } catch (ex) {
            console.error(ex);
        }
        return this.render('chart/list', _context, request, reply);

    }

    /**
     * 搜索彩种走势
     * @param {*} request
     * @param {*} reply
     */
    async chartSearch(request, reply) {
        let _context = {};
        let _service = new LotteryService();
        _context.list = {};
        let _search = '';
        let _result = {
            state: 2,
            search: ''
        }

        try {

            let _awardData = await _service.getAllAward({
                lottery: request.query.key ? decodeURIComponent(request.query.key) : ''
            });

            // 如果数据正常才处理
            if (_awardData.state == 1 && _awardData.result && _awardData.result.length > 0) {

                _context.category = await _service.getLotteryGroupList();
                _context.highChilds = await _service.getLotteryGroupList(2);
                _context.province = await _service.getLotteryProvinceList();

                // 获取结果集
                if (_context.category.state == 1) {
                    _context.category = _context.category.result;
                } else {
                    _context.category = []
                }

                _context.highChilds = [
                    { id: 1, name: '十一选五' },
                    { id: 2, name: '快三' },
                    { id: 4, name: '时时彩' },
                    { id: 3, name: '快乐十分' }];

                if (_context.province.state == 1) {
                    _context.province = _context.province.result;
                } else {
                    _context.province = [];
                }

                // 添加全部的选项
                if (_context.category[0].id != 0) {
                    _context.category.unshift({name: '全部', id: 0});
                }

                if (_context.highChilds[0].id != 0) {
                    _context.highChilds.unshift({name: '全部', id: 0});
                }

                _context.groupType = 0;
                _context.list = _service.formatLotteryHallData({
                    result: _awardData.result,
                    province: _context.province
                });

                if(_context.list.high) {
                    let tempArr = [], tempArr2 = [], tempArr3 = [];
                    _context.list.high.forEach(function(item) {
                        if (item.groupChildId < 3) {
                            tempArr.push(item);
                        }
                        if (item.groupChildId == 4) {
                            tempArr2.push(item);
                        }
                        if(item.groupChildId == 3) {
                            tempArr3.push(item);
                        }
                    });
                    _context.list.high = tempArr.concat(tempArr2).concat(tempArr3);
                }

                // 福利彩票走势
                _context.boonTrend = this.configService.trend[0].child;
                // 体育彩票走势
                _context.sportTrend = this.configService.trend[1].child;
                // 高频彩票走势
                _context.highTrend = [];
                __template.defaults.imports.highTrendData = (groupChildId, lotteryCode) => {
                    if (lotteryCode === 'gxkl10') {
                        _context.highTrend = this.configService.trend[2].child[3];
                    } else {
                        switch (groupChildId) {
                            case 1:
                                _context.highTrend = this.configService.trend[2].child[1];
                                break;
                            case 2:
                                _context.highTrend = this.configService.trend[2].child[0];
                                break;
                            case 3:
                                _context.highTrend = this.configService.trend[2].child[2];
                                break;
                            case 4:
                                _context.highTrend = this.configService.trend[2].child[4];
                                break;
                            default:break;
                        }
                    }
                    return _context.highTrend;
                };
                _search = __template(this.path.join(__dirname, '../../views/template/components/chartTrend.component.art'), _context);
                _result.search = _search;
                _result.state = 1;
            }

        } catch (ex) {
            console.error(ex);
        }
        return this.json(_result, request, reply);
    }

}
module.exports = ChartController;