/***********************************************************************************
 *
 *                                      快3控制器;
 *
 ***********************************************************************************/
'use strict';

import {BaseController} from '../public/base.controller';
import {LotteryService} from  '../../services/public/lottery.service';
import {K3Service} from '../../services/high/k3.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import { ChartService } from '../../services/chart/chart.service';
import ConfigService from '../../services/public/config.service';
import CommonDealWithData from '../../dealWithDataConduit/common/common.dealWithData';
import K3DealWithData  from '../../dealWithDataConduit/high/k3/k3.dealWithData';

/**Controller for 'main'*/
class K3Controller extends BaseController {

    constructor(){

        super();

        this.configService                = ConfigService;
        this.k3DealWithData            = K3DealWithData;
        this.commonDealWithData  = CommonDealWithData;
        this.k3Service;

    }
    /**
     * 入口
     * @param {*} request 
     * @param {*} reply
     */
    async index(request, reply) {

        let _code = `${request.params.area}k3`;

        let _lotteryClassity = 'k3';

        // 获取对应彩种SEO
        let _option = {
            pageCode : 'eycp_site_lottery_high',
            option : {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = {};
        let _seo = this.getBaseContext(_option);

        _context.lotteryCode = _code;
        _context.type = 'k3';
        _context.groupId = 2;

        /** 获取导航信息 */
        _context.mainNav =await this.commonDealWithData.renderMainNav(__lotteryAllTree, DealWithCommonService, 'lottery');

        // 快3走势数据
        _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);
        // 快3遗漏数据
        _context.omission = DealWithCommonService.getOmission(this.configService.omission, _lotteryClassity);

        let _service = new K3Service(_code);
        let _data = await _service.getHighLotteryMain(_context.type);

        if(_data.tecInfo && _data.tecInfo.length > 7) _data.tecInfo = _data.tecInfo.slice(0, 7);
        _data.staticBound = this.configService.config.lotteryMainStatic['k3'];
        _data.rule.introduceContent = _data.rule && _data.rule.introduceContent;
        
        if(_data.awardResult && _data.awardResult.resultList) {
            _data.awardResult.resultList = _data.awardResult.resultList.map(item => {
                return item >= 10 ? item : '0' + item;
            })
        }

        /** 获取和值 */
        _data.awardResult.resultSumValue = this.k3DealWithData.getResultSumValue(_data.awardResult.result);


        /** 获取底部推荐 */
        _context.recommend = await DealWithCommonService.showRecommend('high');
        _context = Object.assign(_context, _seo, _data);

        return this.render(`high/k3/index`, _context, request, reply);
    }

    /**
     * 开奖之后页面内容获取
     * @param {*} request 
     * @param {*} reply 
     */
    async indexPage(request, reply) {

        let _code = `${request.params.area}k3`;

        this.k3Service = new K3Service(_code);

        let _context = {};

        _context = await this.k3Service.pageHistory(request.query.date);

        _context.lotteryCode = _code;
        _context.lotteryType = 'high';
        _context.type = 'k3';

        let _trend   = __template(this.path.join(__dirname, '../../views/template/components/lotteryTrend.component.art'), _context);
        let _timer   = __template(this.path.join(__dirname, '../../views/template/components/lotteryTimer.component.art'), _context);
        let _history = __template(this.path.join(__dirname,'../../views/template/high/k3/history.art'), _context);
        let _index   = __template(this.path.join(__dirname, '../../views/template/high/k3/index.art'), _context);
        let _detail   = __template(this.path.join(__dirname, '../../views/template/high/k3/detail.art'), _context);
        
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
    async history(request, reply){

        let _code = `${request.params.area}k3`;

        // 获取对应彩种SEO
        let _option = {
            pageCode : 'eycp_site_lottery_high_history',
            option : {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = this.getBaseContext(_option);

        /** 获取导航信息 */
        _context.mainNav =await CommonDealWithData.renderMainNav(__lotteryAllTree, DealWithCommonService, 'lottery');

        this.k3Service = new K3Service(_code);

        let _data = await this.k3Service.pageHistory();

        _context.lotteryCode  = _code;
        _context.type             = 'k3';
        _context.history         = _data.history;
        _context.resultList      = _data.resultList;
        _context.awardTime   = _data.awardTime;
        _context.awardResult = _data.awardResult;
        _context.isAwarding   = _data.isAwarding;
        _context.lotteryType  = 'high';

         /** 获取时间 */
        _context.date            = this.k3DealWithData.getK3Date(_context.resultList)

        /** 获取和值 */
        _data.awardResult.resultSumValue = this.k3DealWithData.getResultSumValue(_data.awardResult.result);


        /** 获取底部推荐 */
        _context.recommend = await DealWithCommonService.showRecommend('high');

        return this.render(`high/k3/history`, _context, request, reply);

    }


    /**
     * 开奖详细
     * @param {*} request
     * @param {*} reply
     */
    async detail(request, reply) {

        let _code = `${request.params.area}k3`;

        try{



            /** 获取对应彩种SEO */
            let _option = {
                pageCode : 'eycp_site_lottery_high_detail',
                option : {
                    lotteryName: DealWithCommonService.getLotteryName(_code, __province)
                }
            }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;

        await  DealWithCommonService.getBaseLotteryTree(__province, __lotteryAllTree);

        /** 获取省份信息 */
        _context.province  = __province;

        /** 获取这个code是属于那个大类得类型 */
        _context.lotteryType = 'k3';

        _context.type = 'high';

        /** 获取导航信息 */
        _context.mainNav =await CommonDealWithData.renderMainNav(__lotteryAllTree, DealWithCommonService, 'lottery');

        /** 获取这个code是属于那个彩种的 */
        _context.classify= DealWithCommonService.getLotteryClassify(_code, _context.province);

        _context.data = await DealWithCommonService.leftNavBar(_code, _context.type, '');


        /** 初始化LotteryService */
        let lotteryService = new LotteryService(_code);




            /** 获取开奖时间 */
            _context.awardtimes =  lotteryService.resultForm(await lotteryService.getAwardTimes());

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend(_context.classify);

            _context.issueno = _context.awardtimes.next.period;

            /** 获取历史开奖数据 */
            _context.resultList = lotteryService.resultForm(await lotteryService.history({
                type: 1,
                sortFiled: 3,
                day: (new Date()).format('yyyy-MM-dd')
            }));



            return this.render(`${_context.classify}/k3/detail`, _context, request, reply);

        }catch(ex){

            console.error(ex);
            return DealWithCommonService.noFound(reply);

        }
    }


    /**
     *  图表;
     * @return {Promise.<void>}
     */
    async chart(request, reply){


        let [_flot, _lotteryCode, _lotteryClassity] = [request.params.flot, `${request.params.area}k3`, ''];

        let  _data;

        let  _lotteryService = new LotteryService(_lotteryCode);

        if(_flot == undefined){
            return _lotteryService.errorMsg('参数flot不能为空！');
        }

        if(_lotteryCode == undefined){

            return _lotteryService.errorMsg('参数lotteryCode不能为空！');

        }else{

            _lotteryClassity = 'k3';
        }

        let  _chartService  = new ChartService();

        let _trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);

         /** 获取对应彩种SEO */
        let _option = {
             pageCode : 'eycp_site_chart_k3',
                option : {
                    lotteryName:  DealWithCommonService.getLotteryName(_lotteryCode, __province),
                    type:_chartService.getFlotName(_trend,_flot)
                }
            }
        let  _context = this.getBaseContext(_option);

        /** 快3统计 */
        let _flotForK3Total = [15];

        _context.lotteryCode     = _lotteryCode;

        _context.lotteryClassify  = _lotteryClassity;

        _context.flot       = _flot;

        /** 读取分类类型 */
        _context.classify      =  "high";

        _context.lotteryType = _context.classify;

        try{

            /** 获取省份信息 */
            _context.province    = __province;

            /** 获取导航信息 */
            _context.mainNav =await CommonDealWithData.renderMainNav(__lotteryAllTree, DealWithCommonService, 'chart');

            /** 获取数据集合 */
            _data = await _lotteryService.getLotteryHigh();

            _context.type = _lotteryClassity;

            _context = Object.assign(_context, _data);

            let chartConfig = this.configService.getChartConfig(_lotteryClassity, _flot);

            /** 获取表头的结构配置 */
            _context.theadObject = JSON.stringify(chartConfig.theadObject);


            /** 获取开奖走势说明 */
            _context.helpObject = chartConfig.helpObject;

            /** 预选号码配置 */
            _context.budgetary  = JSON.stringify(chartConfig.budgetary);

            /** 快3走势数据 */
            _context.trend = _trend;

            /** 如果是统计系列的话 */
            if(DealWithCommonService.contains(_flotForK3Total, parseInt(_flot))){

                _context.showType = 'area';
                _context.cssObject = '""';

            }else{

                /** 获取表格的样式配置 */
                _context.cssObject  = JSON.stringify(chartConfig.cssObject);
            }

            if(DealWithCommonService.contains([16,17,18], parseInt(_flot))){

                 _context.showType = 'combination'
            }


            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend(_context.classify);

            /** 默认的遗漏flot值 */
            _context.omissionDefultFlot = this.configService.getOmissionDefultFlot(_lotteryClassity);

            /** 获取和值 */
            _context.awardResult.resultSumValue = this.k3DealWithData.getResultSumValue(_context.awardResult.result);

            return this.render(`chart/index`, _context, request, reply);

        }catch(ex){

            return _lotteryService.errorMsg(ex);

        }

    }


    /**
     *   请求画图表函数
     *
     */
    async requestChart(request, reply){


        let  [_lotteryCode, _flot, _quantity,_chartService,  resultChartData] = [`${request.params.area}k3`, request.query.flot, request.query.quantity, new ChartService()];


        if(_lotteryCode == undefined){
            return _chartService.errorMsg('requestChartData：_lotteryCode参数不正确！');
        }

        if(_flot == undefined){
            return _chartService.errorMsg('requestChartData：_flot参数不正确！');
        }else{

            _flot = parseInt(_flot)
        }

        _quantity = _quantity ? parseInt(_quantity) : 50;

        try{

                /** 快3 */
                resultChartData  = _chartService.resultForm(await _chartService.getK3FlotStatData(_lotteryCode,_flot, _quantity));



                return this.json(resultChartData,request,reply);

        }catch(ex){


                return _chartService.errorMsg(ex);

        }

    }


}

module.exports = K3Controller