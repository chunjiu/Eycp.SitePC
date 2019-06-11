/***********************************************************************************
 *
 *                                      快乐十分控制器;
 *
 ***********************************************************************************/
'use strict';

import {BaseController} from '../public/base.controller';
import {LotteryService} from  '../../services/public/lottery.service';
import {KL10Service} from '../../services/high/kl10.server';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import { ChartService } from '../../services/chart/chart.service';
import ConfigService from '../../services/public/config.service';

/**Controller for 'main'*/
class Kl10Controller extends BaseController {

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

        let _code = `${request.params.area}kl10`;

        if(!request.params.area) {
            _code = 'xync';
        }

        let _lotteryClassity = _code == 'gxkl10' ? 'gxkl10' : 'kl10';
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
        _context.type = 'kl10';
        _context.groupId = 3;

        //快乐10分走势数据
        _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);
        _context.omission = DealWithCommonService.getOmission(this.configService.omission, _lotteryClassity);

        _context.lotteryCode = _code;
        let _service = new KL10Service(_code);
        // 获取数据集合
        let _data = await _service.getHighLotteryMain(_context.type);
        
        if(_data.tecInfo && _data.tecInfo.length > 7) _data.tecInfo = _data.tecInfo.slice(0, 7);
        if(_code == 'gxkl10') {
            _data.staticBound = this.configService.config.lotteryMainStatic[_code];
        } else {
            _data.staticBound = this.configService.config.lotteryMainStatic['kl10'];
        }
        
        _data.rule.introduceContent = _data.rule && _data.rule.introduceContent;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');

        _context.ballHeight = ['一','二','三','四','五','六','七','八'];
        if(_code == 'gxkl10') {
            _context.ballHeight = ['一','二','三','四','五'];
        }

        _context = Object.assign(_context, _seo, _data);

        return this.render(`high/kl10/index`, _context, request, reply);
    }

    /**
     * 开奖之后页面内容获取
     * @param {*} request 
     * @param {*} reply 
     */
    async indexPage(request, reply) {
        let _code = `${request.params.area}kl10`;

        if(!request.params.area) {
            _code = 'xync';
        }

        let _service = new KL10Service(_code);
        let _context = {};
        _context = await _service.pageHistory(request.query.date);
        _context.lotteryCode = _code;
        _context.lotteryType = 'high';
        _context.type = 'kl10';

        let _trend = __template(this.path.join(__dirname, '../../views/template/components/lotteryTrend.component.art'), _context);
        let _timer = __template(this.path.join(__dirname, '../../views/template/components/lotteryTimer.component.art'), _context);
        let _history = __template(this.path.join(__dirname,`../../views/template/high/kl10/${_code == 'xync' ? 'xync_history' : (_code == 'hnkl10' ? 'zoo_history' : 'history')}.art`), _context);
        let _index = __template(this.path.join(__dirname, `../../views/template/high/kl10/${_code == 'xync' ? 'xync_index' : (_code == 'hnkl10' ? 'zoo_index' : 'index')}.art`), _context);
        let _detail = __template(this.path.join(__dirname, `../../views/template/high/kl10/${_code == 'xync' ? 'xync_detail' : (_code == 'hnkl10' ? 'xync_detail' : 'default_detail')}.art`), _context);


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

        let _code = `${request.params.area}kl10`;

        if(!request.params.area) {
            _code = 'xync';
        }

        // 获取对应彩种SEO
        let _option = {
            pageCode : 'eycp_site_lottery_high_history',
            option : {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;
        _context.type = 'kl10';

        let _service = new KL10Service(_code);
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

        _context.ballHeight = ['一','二','三','四','五','六','七','八'];
        if(_code == 'gxkl10') {
            _context.ballHeight = ['一','二','三','四','五'];
        }

        return this.render(`high/kl10/history`, _context, request, reply);

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


        let _code = `${request.params.area}kl10`;

        if(!request.params.area) {
            _code = 'xync';
        }
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
        _context.mainNav =await DealWithCommonService.mainNavData( __lotteryAllTree, 'lottery');

        /** 获取这个code是属于那个彩种的 */
        _context.classify= DealWithCommonService.getLotteryClassify(_code, _context.province);


        /** 获取这个code是属于那个大类得类型 */
        _context.lotteryType = 'kl10';

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

            return this.render(`${_context.classify}/kl10/detail`, _context, request, reply);

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

        let _code = `${request.params.area}kl10`;

        if(!request.params.area) {

             _code = 'xync';

        }



        let [_flot, _lotteryCode, _lotteryClassity] = [request.params.flot, _code, ''];

        let  _data;

        if(_flot == undefined){
            return this.lotteryService.errorMsg('参数flot不能为空！');
        }

        if(_lotteryCode == undefined){

            return this.lotteryService.errorMsg('参数lotteryCode不能为空！');

        }else{

            _lotteryClassity = 'kl10';
        }

        if("gxkl10" == _lotteryCode){

            _lotteryClassity="gxkl10";

        }

        let  _lotteryService = new LotteryService(_lotteryCode);

        let  _chartService  = new ChartService();

        let _trend;
        let _omission;
        //快乐10分走势数据
        _trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);
        _omission = DealWithCommonService.getOmission(this.configService.omission, _lotteryClassity);

         /** 获取对应彩种SEO */
        let _option = {
             pageCode : 'eycp_site_chart_kl10',
                option : {
                    lotteryName:  DealWithCommonService.getLotteryName(_lotteryCode, __province),
                    type:_chartService.getFlotName(_trend,_flot)
                }
            }

        let  _context = this.getBaseContext(_option);

        let  _flotClassity;

        _context.lotteryCode     = _lotteryCode;

        _context.lotteryClassify  = _lotteryClassity;
        _context.showLine=true;
        if((_code != 'gxkl10' && (1 == _flot || 7 == _flot || 8 == _flot)) || (_code == 'gxkl10' && (1 == _flot || 5== _flot || 6 == _flot))){
            _context.showLine=false;    
        }
        
        _context.flot       = _flot;


        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'chart');

        try{

            /** 获取省份信息 */
            _context.province    = __province;

            /** 读取分类类型 */
            _context.classify      =  "high";

            //快乐10分走势数据

            _context.trend = _trend;
            _context.omission = _omission;
            

            _context.lotteryType = _context.classify;

            /** 获取数据集合 */
            _data = await _lotteryService.getLotteryHigh();

            _context.type = _context.classify;


            /***********************  注意： 因为头部需要用type来显示不一样的图片图标，因此这里要做一个判断把type改掉，原本的type会显示high或者digit的 **************/
            if(_lotteryCode == 'xync'){

                _context.type = 'kl10';

            }else if(_lotteryCode == 'hnkl10'){

                _context.type = 'kl10';
            }
            /***********************  注意： 因为头部需要用type来显示不一样的图片图标，因此这里要做一个判断把type改掉，原本的type会显示high或者digit的 **************/


            _context = Object.assign(_context, _data);


            let chartConfig = this.configService.getChartConfig(_lotteryClassity, _flot);

             /** 预选号码配置 */
            _context.budgetary  = JSON.stringify(chartConfig.budgetary);

            /** 获取表头的结构配置 */
            _context.theadObject = JSON.stringify(chartConfig.theadObject);

            /** 获取表格的样式配置 */
            _context.cssObject  = JSON.stringify(chartConfig.cssObject);

            /** 获取开奖走势说明 */
            _context.helpObject = chartConfig.helpObject;

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend('high');

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
        var _code ='';
        if(!request.params.area) {
            _code = 'xync';
        }else{
             _code =request.params.area+'kl10';
        }

        let  [_lotteryCode, _flot, _quantity,_chartService,  resultChartData] = [_code, request.query.flot, request.query.quantity, new ChartService()];


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
                 if("gxkl10" == _lotteryCode){
                    resultChartData  = _chartService.resultForm(await _chartService.getGxKl10FlotStatData(_flot, _quantity));
                }else{
                    /**快乐十分 */
                    resultChartData  = _chartService.resultForm(await _chartService.getKl10FlotStatData(_lotteryCode,_flot, _quantity));
                }
                return this.json(resultChartData,request,reply);

        }catch(ex){


                return this.lotteryService.errorMsg(ex);

        }

    }

}

module.exports = Kl10Controller