/***********************************************************************************
 *
 *                                      11x5控制器;
 *
 ***********************************************************************************/
'use strict';

import { BaseController } from '../public/base.controller';
import { LotteryService } from '../../services/public/lottery.service';
import { _11x5Service } from '../../services/high/11x5.service';
import DealWithCommonService from '../../services/public/dealWithCommon.service';
import {ChartService} from '../../services/chart/chart.service';
import { OmissionService } from '../../services/omission/omission.service';
import ConfigService from '../../services/public/config.service';

/**Controller for 'main'*/
class _11x5Controller extends BaseController {

    constructor() {

        super();

        this.configService = ConfigService;

    }

    /**
     * 入口
     * @param {*} request 
     * @param {*} reply
     */
    async index(request, reply) {

        let _code = `${request.params.area}11x5`;
        let _lotteryClassity = '11x5';
        // 获取对应彩种SEO
        let _option = {
            pageCode: 'eycp_site_lottery_high',
            option: {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = {};
        let _seo = this.getBaseContext(_option);

        _context.lotteryCode = _code;
        _context.type = '11x5';
        _context.groupId = 1;

        // 11x5走势数据
        _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);
        // 11x5遗漏数据
        _context.omission = DealWithCommonService.getOmission(this.configService.omission, _lotteryClassity);

        let _service = new _11x5Service(_code);

        // 获取数据集合
        let _data = await _service.getHighLotteryMain(_context.type);

        if (_data.tecInfo && _data.tecInfo.length > 7) _data.tecInfo = _data.tecInfo.slice(0, 7);
        _data.staticBound = this.configService.config.lotteryMainStatic['11x5'];
        _data.rule.introduceContent = _data.rule && _data.rule.introduceContent;

        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        _context = Object.assign(_context, _seo, _data);

        return this.render(`high/11x5/index`, _context, request, reply);
    }

    /**
     * 开奖之后页面内容获取
     * @param {*} request 
     * @param {*} reply 
     */
    async indexPage(request, reply) {

        let _code = `${request.params.area}11x5`;
        let _service = new _11x5Service(_code);
        let _context = {};

        _context = await _service.pageHistory(request.query.date);
        _context.lotteryCode = _code;
        _context.lotteryType = 'high';
        _context.type = '11x5';

        let _trend = __template(this.path.join(__dirname, '../../views/template/components/lotteryTrend.component.art'), _context);
        let _timer = __template(this.path.join(__dirname, '../../views/template/components/lotteryTimer.component.art'), _context);
        let _history = __template(this.path.join(__dirname, '../../views/template/high/11x5/history.art'), _context);
        let _index = __template(this.path.join(__dirname, '../../views/template/high/11x5/index.art'), _context);
        let _detail = __template(this.path.join(__dirname, '../../views/template/high/common/detail.art'), _context);

        return this.json({
            trend: _trend,
            timer: _timer,
            history: _history,
            index: _index,
            detail: _detail
        }, request, reply);
    }

    /**
     * 开奖历史的处理
     * @param {*} request 
     * @param {*} reply 
     */
    async history(request, reply) {

        let _code = `${request.params.area}11x5`;

        // 获取对应彩种SEO
        let _option = {
            pageCode: 'eycp_site_lottery_high_history',
            option: {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;
        _context.type = '11x5';
        let _service = new _11x5Service(_code);

        let _data = await _service.pageHistory();
        _context.history = _data.history;
        _context.resultList = _data.resultList;
        _context.awardTime = _data.awardTime;
        _context.awardResult = _data.awardResult;
        _context.isAwarding = _data.isAwarding;
        _context.lotteryType = 'high';
        if (_context.resultList.length > 0) {
            _context.date = (new Date()).format('yyyy-MM-dd');
        } else {
            let _date = new Date();
            _date.setDate(_date.getDate() - 1);
            _context.date = _date.format('yyyy-MM-dd');
        }

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');
        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');

        return this.render(`high/11x5/history`, _context, request, reply);
    }

    /**
     * 直播的处理
     * @param {*} request 
     * @param {*} reply 
     */
    live(request, reply) {

    }

    /**
     * 开奖详细
     * @param {*} request 
     * @param {*} reply 
     */
    async detail(request, reply) {


        let _code = `${request.params.area}11x5`;

        /** 获取对应彩种SEO */
        let _option = {
            pageCode: 'eycp_site_lottery_high_detail',
            option: {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;

        /** 获取省份信息 */
        _context.province = __province;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        /** 获取这个code是属于那个彩种的 */
        _context.classify = DealWithCommonService.getLotteryClassify(_code, _context.province);

        /** 获取这个code是属于那个大类得类型 */
        _context.lotteryType = '11x5';

        _context.data = await DealWithCommonService.leftNavBar(_code, 'high', '');
        _context.type = 'high';
        /** 通过分类，然后控制详情页左边导航那大类显示 */
        // DealWithCommonService.showDetailLeftNav(_context, _context.classify);


        /** 初始化LotteryService */
        let lotteryService = new LotteryService(_code);

        try {

            /** 获取开奖时间 */
            _context.awardtimes = lotteryService.resultForm(await lotteryService.getAwardTimes());

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend(_context.classify);

            _context.issueno = _context.awardtimes.next.period;

            /** 获取历史开奖数据 */
            _context.resultList = lotteryService.resultForm(await lotteryService.history({
                type: 1,
                sortFiled: 3,
                day: (new Date()).format('yyyy-MM-dd')
            }));


            return this.render(`${_context.classify}/11x5/detail`, _context, request, reply);

        } catch (ex) {

            console.error(ex);
            return DealWithCommonService.noFound(reply);

        }
    }

    /**
     *  图表;
     * @return {Promise.<void>}
     */
    async chart(request, reply) {

        
        let [_flot, _lotteryCode, _lotteryClassity] = [request.params.flot, `${request.params.area}11x5`, '11x5'];

        let _data;

        if (_flot == undefined) {
            _flot = 1;
        }

        let _chartService = new ChartService();
        let _lotteryService = new LotteryService(_lotteryCode);
        let _service = new _11x5Service(_lotteryCode);


        let _trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);

         /** 获取对应彩种SEO */
        let _option = {
             pageCode : 'eycp_site_chart_11x5',
                option : {
                    lotteryName:  DealWithCommonService.getLotteryName(_lotteryCode, __province),
                    type:_chartService.getFlotName(_trend,_flot)
                }
            }
        let _context = this.getBaseContext(_option);

        let _flotClassity;

        let _seo;

        _context.lotteryCode = _lotteryCode;
        _context.lotteryClassify = _lotteryClassity;
        _context.lotteryType = 'high';
        _context.flot = _flot;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'chart');


        try {

            /** 获取省份信息 */
            _context.province = __province;

            /** 读取分类类型 */
            _context.classify = _context.lotteryType;
            // 11x5走势数据
            _context.trend = _trend;


            /** 获取数据集合 */
            _data = await _lotteryService.getLotteryHigh();

            _context.type = _context.lotteryType;

            _context = Object.assign(_context, _data);

            let chartConfig = this.configService.getChartConfig(_lotteryClassity, _flot);

            /** 获取开奖走势说明 */
            _context.helpObject = chartConfig.helpObject;

            /** 获取表格的样式配置 */
            _context.cssObject = JSON.stringify(chartConfig.cssObject);

            /** 获取表头的结构配置 */
            _context.theadObject = JSON.stringify(chartConfig.theadObject);

            // 是否是八区统计
            if(['501','502','503','504','505','506','507','508','509','510','511'].includes(_flot.toString())){
                _context.showType = 'area';
                _context.days = _service.generateAreaDate();
            } else if(['100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115'].includes(_flot.toString())) {
                _context.showType = 'area';
                let _tmpData = _chartService.resultForm(await _chartService.get11x5FlotStatData(_lotteryCode, parseInt(_flot), 1))
                _context.theadObject = JSON.stringify(_service.totalAreaHeader(_tmpData));
            }
            
            /** 预选号码配置 */
            _context.budgetary  = JSON.stringify(chartConfig.budgetary);

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend(_context.classify);


            /** 默认的遗漏flot值 */
            _context.omissionDefultFlot = this.configService.getOmissionDefultFlot(_lotteryClassity);


            return this.render(`chart/index`, _context, request, reply);

        } catch (ex) {
            console.error(ex);
            throw 404;

        }

    }


    /**
     *   请求画图表函数
     *
     */
    async requestChart(request, reply) {
        let [_lotteryCode, _flot, _quantity] = [`${request.params.area}11x5`, request.query.flot, request.query.quantity];

        let _data = await changeChart({
            lotteryCode: _lotteryCode, 
            flot: _flot, 
            quantity: _quantity
        });

        /* 基本走势/前二走势/前三走势  重号 */
        if(_flot == 10 || _flot == 40 || _flot == 71) {
            let _data2 = await changeChart({
                lotteryCode: _lotteryCode,
                flot: _flot,
                quantity: parseInt(_quantity) + 1
            });
            _data.missStatList = _data2.missStatList;
        }

        return this.json(_data, request, reply);
    }

    /**
     * 请求图表数据排序
     * @param {*} request 
     * @param {*} reply 
     */
    async requestChartSort(request, reply) {
        let [_lotteryCode, _flot, _quantity, days] = [`${request.params.area}11x5`, request.query.flot,request.query.quantity , request.query.day];
        let sort = request.query.sort;
        let _service = new _11x5Service(_lotteryCode);
        let result = await changeChart({
            lotteryCode: _lotteryCode, 
            flot: _flot, 
            quantity: _quantity,
            days
        });

        let _data;

        if(['100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115'].includes(_flot.toString())) {
            _data = result.data;
        } else {
            _data = result;
        }

        let json = require('../../lib/Json');
        try {
            // 排序处理
            let sortArray = sort.split('|');
            if(sortArray && sortArray.length > 0) {
                let _sortIndex = parseInt(sortArray[0].split('_th')[1]) - 1;
                let _sorType = sortArray[1];
                if(_data && _data.state != -1) {
                    let sortDataLength = _data.length;
                    for(let i = 0; i < sortDataLength - 1; i++) {
                        for(let j = i + 1; j < sortDataLength; j++) {
                            let _tmp;
                            let _data_i = _data[i][_sortIndex].toString().split(',').reduce((sum, val) => {
                                return sum + parseInt(val);
                            }, 0);

                            let _data_j = _data[j][_sortIndex].toString().split(',').reduce((sum, val) => {
                                return sum + parseInt(val);
                            }, 0);


                            if(_sorType == 'up') {
                                if(_data_i > _data_j) {
                                    _tmp = json.deepCopy(_data[i]);
                                    _data[i] = json.deepCopy(_data[j]);
                                    _data[j] = json.deepCopy(_tmp);
                                }
                            } else{
                                if(_data_i < _data_j) {
                                    _tmp = json.deepCopy(_data[i]);
                                    _data[i] = json.deepCopy(_data[j]);
                                    _data[j] = json.deepCopy(_tmp);
                                }
                            }
                        }
                    }
                }
            }
            return this.json(result, request, reply);
        } catch(ex) {
            console.error(ex);
            return this.json(_service.errorMsg(ex.message), request, reply);
        }
    }


}

/**
 * 通用chart
 * @param {*} param0 
 */
async function changeChart({lotteryCode, flot, quantity, days}) {
    let _chartService = new ChartService();
    let resultChartData;
    if (lotteryCode == undefined) {
        return _chartService.errorMsg('requestChartData：_lotteryCode参数不正确！');
    }

    if (flot == undefined) {
        return _chartService.errorMsg('requestChartData：_flot参数不正确！');
    } else {
        flot = parseInt(flot)
    }

    quantity = quantity ? parseInt(quantity) : 50;
    let _service = new _11x5Service(lotteryCode);
    
    try {
        
        resultChartData = _chartService.resultForm(await _chartService.get11x5FlotStatData(lotteryCode, flot, quantity, days));

        return _service.formatTrendData(flot ,resultChartData);

    } catch (ex) {

        console.error(ex);
        return _service.errorMsg(ex);

    }
}




module.exports = _11x5Controller