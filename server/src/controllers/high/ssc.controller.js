/***********************************************************************************
 *
 *                                      时时彩控制器;
 *
 ***********************************************************************************/
'use strict';

import {BaseController} from '../public/base.controller';
import {LotteryService} from  '../../services/public/lottery.service';
import {SSCService} from '../../services/high/ssc.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import { ChartService } from '../../services/chart/chart.service';
import ConfigService from '../../services/public/config.service';

/**Controller for 'main'*/
class SscController extends BaseController {

    constructor(){

        super();

        this.configService = ConfigService;

    }
    /**
     * 入口
     * @param {*} request 
     * @param {*} reply
     */
    async index(request, reply) {

        let _code = `${request.params.area}ssc`;

        let _lotteryClassity = 'ssc';

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
        _context.type = 'ssc';
        _context.groupId = 4;
        let _service = new SSCService(_code);

         // 获取数据集合
         let _data = await _service.getHighLotteryMain(_context.type);

         if(_data.tecInfo && _data.tecInfo.length > 7) _data.tecInfo = _data.tecInfo.slice(0, 7);
         _data.staticBound = this.configService.config.lotteryMainStatic['ssc'];
         _data.rule.introduceContent = _data.rule && _data.rule.introduceContent;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'chart');

         // 获取底部推荐
         _context.recommend = await DealWithCommonService.showRecommend('high');

        //时时彩走势数据
        _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);

        //时时彩遗漏数据
        _context.omission = DealWithCommonService.getOmission(this.configService.omission, _lotteryClassity);

         _context = Object.assign(_context, _seo, _data);

        return this.render(`high/ssc/index`, _context, request, reply);
    }

    /**
     * 开奖之后页面内容获取
     * @param {*} request
     * @param {*} reply
     */
    async indexPage(request, reply) {
        let _code = `${request.params.area}ssc`;
        let _service = new SSCService(_code);
        let _context = {};
        _context = await _service.pageHistory(request.query.date);
        _context.lotteryCode = _code;
        _context.lotteryType = 'high';
        _context.type = 'ssc';

        let _trend = __template(this.path.join(__dirname, '../../views/template/components/lotteryTrend.component.art'), _context);
        let _timer = __template(this.path.join(__dirname, '../../views/template/components/lotteryTimer.component.art'), _context);
        let _history = __template(this.path.join(__dirname,'../../views/template/high/ssc/history.art'), _context);
        let _index = __template(this.path.join(__dirname, '../../views/template/high/ssc/index.art'), _context);
        let _detail   = __template(this.path.join(__dirname, '../../views/template/high/common/detail.art'), _context);

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

        let _code = `${request.params.area}ssc`;

        // 获取对应彩种SEO
        let _option = {
            pageCode : 'eycp_site_lottery_high_history',
            option : {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;
        _context.type = '11x5';
        let _service = new SSCService(_code);

        let _data = await _service.pageHistory();
        _context.history = _data.history;
        _context.resultList = _data.resultList;
        _context.awardTime = _data.awardTime;
        _context.awardResult = _data.awardResult;
        _context.isAwarding = _data.isAwarding;
        _context.lotteryType = 'high';
        if(_context.resultList.length > 0) {
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

        return this.render(`high/ssc/history`, _context, request, reply);

    }

    /**
     * 直播的处理
     * @param {*} request
     * @param {*} reply
     */
    live(request, reply){

    }


    /**
     * 开奖详细
     * @param {*} request
     * @param {*} reply
     */
    async detail(request, reply) {


        let _code = `${request.params.area}ssc`;

        /** 获取对应彩种SEO */
        let _option = {
            pageCode : 'eycp_site_lottery_high_detail',
            option : {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;

        /** 获取省份信息 */
        _context.province  = __province;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        /** 获取这个code是属于那个彩种的 */
        _context.classify= DealWithCommonService.getLotteryClassify(_code, _context.province);


        /** 获取这个code是属于那个大类得类型 */
        _context.lotteryType = 'ssc';

        _context.data = await DealWithCommonService.leftNavBar(_code, 'high', '');
        _context.type = 'high';
        /** 通过分类，然后控制详情页左边导航那大类显示 */
        // DealWithCommonService.showDetailLeftNav(_context, _context.classify);


        /** 初始化LotteryService */
        let lotteryService = new LotteryService(_code);

        try{

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

            return this.render(`${_context.classify}/ssc/detail`, _context, request, reply);

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


        let [_flot, _lotteryCode, _lotteryClassity] = [request.params.flot, `${request.params.area}ssc`, ''];

        let  _data;

        if(_flot == undefined){
            return this.lotteryService.errorMsg('参数flot不能为空！');
        }

        if(_lotteryCode == undefined){

            return this.lotteryService.errorMsg('参数lotteryCode不能为空！');

        }else{

            _lotteryClassity = 'ssc';
        }

        let  _lotteryService = new LotteryService(_lotteryCode);

        let  _chartService  = new ChartService();

        let _trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);
        let _omission = DealWithCommonService.getOmission(this.configService.omission, _lotteryClassity);

         /** 获取对应彩种SEO */
        let _option = {
             pageCode : 'eycp_site_chart_ssc',
                option : {
                    lotteryName:  DealWithCommonService.getLotteryName(_lotteryCode, __province),
                    type:_chartService.getFlotName(_trend,_flot)
                }
            }
        let  _context = this.getBaseContext(_option);

        let  _flotClassity;

        _context.lotteryCode     = _lotteryCode;
        _context.lotteryClassify  = _lotteryClassity;

        _context.flot       = _flot;

        /*_context.showLine=true;

        if(2 == _flot){
            _context.showLine=false;
        }*/

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'chart');


        try{

            /** 获取省份信息 */
            _context.province    = __province;

            /** 读取分类类型 */
            _context.classify      = "high";
            // 时时彩走势数据
            _context.trend = _trend;
            _context.omission = _omission;

            _context.lotteryType = _context.classify;

            /** 获取数据集合 */
            _data = await _lotteryService.getLotteryHigh();

            _context.type =_context.classify;

            _data.awardResult.resultList = _data.awardResult.result ? _data.awardResult.result.split(',') : [];


            _context = Object.assign(_context, _data);


            let chartConfig = this.configService.getChartConfig(_lotteryClassity, _flot);

            /** 获取表头的结构配置 */
            _context.theadObject = JSON.stringify(chartConfig.theadObject);

            /** 获取表格的样式配置 */
            _context.cssObject  = JSON.stringify(chartConfig.cssObject);

            /** 获取开奖走势说明 */
            _context.helpObject = chartConfig.helpObject;

            /** 预选号码配置 */
            _context.budgetary  = JSON.stringify(chartConfig.budgetary);

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend(_context.classify);

            /** 默认的遗漏flot值 */
            _context.omissionDefultFlot = this.configService.getOmissionDefultFlot(_lotteryClassity);

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


        let  [_lotteryCode, _flot, _quantity,_chartService,  resultChartData] = [`${request.params.area}ssc`, request.query.flot, request.query.quantity, new ChartService()];


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

            /** 时时彩 */
            resultChartData  = _chartService.resultForm(await _chartService.getSscFlotStatData(_lotteryCode,_flot, _quantity));

            return this.json(resultChartData,request,reply);

        }catch(ex){


            return this.lotteryService.errorMsg(ex);

        }

    }
}





module.exports = SscController;