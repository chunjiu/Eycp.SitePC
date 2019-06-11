/***********************************************************************************
 *
 *                                      排列3控制器;
 *
 ***********************************************************************************/
'use strict';

import {DigitController} from '../public/digit.controller';
import {LotteryService} from  '../../services/public/lottery.service';
import {PL3Service} from '../../services/digit/pl3.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import { ChartService } from '../../services/chart/chart.service';
import ConfigService from '../../services/public/config.service';
import { ArticleService } from '../../services/article/article.service';

/**Controller for 'main'*/
class Pl3Controller extends DigitController {

    constructor(){

        super('pl3');

        this._context.name = '排列3';
        this._context.lotteryCode = 'pl3';
        this._context.weekLottery = '每天 20:30开奖';
        this._service = new PL3Service();
        this._articleService = new ArticleService();

        this.configService = ConfigService;
    }
    
    /**
     * 入口
     * @param {*} request 
     * @param {*} reply
     */
    async index(request, reply) {

        // 基础上下文参数
        let _option = {
            pageCode : 'eycp_site_lottery_digit',
            option : {
                lotteryName: this._context.name
            }
        }

        let _lotteryClassity = 'pl3';

        let _context = this.getBaseContext(_option);

        /** 彩种首页资讯列表 */
        /** 获取多个分类指定记录数列表 */
        let moreArticleList                  = this._articleService.resultForm(await  this._articleService.moreArticleList({ categoryIds: [37,39,40,41] , pageSize: 6 ,  lotteryCodes: [_lotteryClassity] }));

        if(moreArticleList){
            if(moreArticleList.length >0 ){

                /** 技巧介绍 （福彩3d） 37 */
                let  _jqjs_item  = [];

                /** 专家预测  39 */
                let  _zjtj_Item   = [];

                /** 杀号定胆  40*/
                let  _shdd_item = [];

                /** 免费推荐 41 */
                let  _mftj_item  = [];

                moreArticleList.forEach((_val, _index, _arr)=>{

                    if(_val.categoryId == 37){

                        _jqjs_item.push(_val);

                    }else if(_val.categoryId == 39){

                        _zjtj_Item.push(_val);

                    }else if(_val.categoryId == 40){

                        _shdd_item.push(_val);

                    }else if(_val.categoryId == 41){

                        _mftj_item.push(_val);
                    }

                });

                _context.jqjs     = _jqjs_item.length    >0  ?  _jqjs_item    : null;
                _context.mftj    = _mftj_item.length  >0  ?  _mftj_item  : null;
                _context.shdd   = _shdd_item.length >0 ?  _shdd_item : null;
                _context.zjtj      = _zjtj_Item.length    >0  ?  _zjtj_Item    : null;
                _context.lotteryCategoryId = 37;

            }
        }


        // 排列3走势数据
        _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);
        // 排列3遗漏数据
        _context.omission = DealWithCommonService.getOmission(this.configService.omission, _lotteryClassity);

        // // 获取数据集合
        let _data = await this._service.getDigitLotteryMain();
        _data.rule.introduceContent = _data.rule.introduceContent;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        /** 获取对应类别的遗漏图表的所有类型配置 */
        _context.shddDataThreeLevel = DealWithCommonService.getShdd( this.configService.getShddConfig() , this._context.lotteryCode);

        /** 获取对应类别的遗漏图表的所有类型配置 */
        _context.hmtjDataThreeLevel = DealWithCommonService.getHmtj(this.configService.getHmtjConfig() , this._context.lotteryCode);


        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('digit');

        _context = Object.assign(_context, this._context, _data);

        return this.render(`digit/pl3/index`, _context, request, reply);
    }

    /**
     * 开奖之后页面内容获取
     * @param {*} request 
     * @param {*} reply 
     */
    async indexPage(request, reply) {

        let _context = {};
        _context = await this._service.pageHistory(request.query.year, request.query.day);
        _context.lotteryType = 'digit';
        _context.type = 'pl3';
        _context = Object.assign(_context, this._context);

        let _trend = __template(this.path.join(__dirname, '../../views/template/components/lotteryTrend.component.art'), _context);
        let _timer = __template(this.path.join(__dirname, '../../views/template/components/lotteryTimer.component.art'), _context);
        let _history = __template(this.path.join(__dirname,'../../views/template/digit/pl3/history.art'), _context);
        let _index = __template(this.path.join(__dirname, '../../views/template/digit/common/index.art'), _context);
        
        return this.json({
            trend: _trend,
            timer: _timer,
            history: _history,
            index: _index
        }, request, reply);
    }

    /**
     * 开奖历史的处理
     * @param {*} request 
     * @param {*} reply 
     */
    async history(request, reply){
        
        // 基础上下文参数
        let _option = {
            pageCode : 'eycp_site_lottery_digit_history',
            option : {
                lotteryName: this._context.name
            }
        }

        let _context = this.getBaseContext(_option);
        let _data = await this._service.pageHistory(parseInt((new Date()).format('yyyy')), -1);

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');
        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('digit');
        _context.date = (new Date()).format('yyyy-MM-dd');
        _context.lotteryType = 'digit';

        _context = Object.assign(_context, this._context, _data, _data.history.length > 0 ? this.yearList() : this.yearList(-1));

        return this.render(`digit/pl3/history`, _context, request, reply);
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


        let _code =  'pl3';

        /** 获取对应彩种SEO */
        let _option = {
            pageCode : 'eycp_site_lottery_digit_detail',
            option : {
                lotteryName: this._context.name
            }
        }

        let _context = this.getBaseContext(_option);
        _context.period=0;
        if(request.params.period){

            _context.period = parseInt(request.params.period);

        }else{
            console.warn('detail：公告详情id不能为空！')
        }

        _context.lotteryCode = _code;

        /** 获取省份信息 */
        _context.province  = __province;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        /** 获取这个code是属于那个彩种的 */
        _context.classify= DealWithCommonService.getLotteryClassify(_code, _context.province);

        /** 判断彩种类型 */
        _context.lotteryType =  _context.classify;

        _context.data = await DealWithCommonService.leftNavBar(_code, 'digit', '');
        _context.type = 'digit';
        /** 通过分类，然后控制详情页左边导航那大类显示 */
        // DealWithCommonService.showDetailLeftNav(_context, _context.classify);


        /** 初始化LotteryService */
        let lotteryService = new LotteryService(_code);

        try{

            /** 获取开奖时间 */
            _context.awardtimes =  lotteryService.resultForm(await lotteryService.getAwardTimes());

            _context.issueno = _context.awardtimes.current.period;

            /** 获取期号 */
            _context.periodsArray = lotteryService.resultForm(await lotteryService.getDigitPeriods(100));

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend(_context.classify);

            /** 获取开奖条件 */
            _context.lotteryAwardGrade = DealWithCommonService.getLotteryAwardGrade(_context.lotteryCode, this.configService.config.lotteryAwardGrade);




            /** 获取历史开奖数据 */
            if(_context.period){
                _context.issueno = _context.period;
                _context.history = lotteryService.resultForm(await lotteryService.getAwardInfoByIssueNo({
                    issueno: parseInt(_context.period ? _context.period : _context.awardtimes.current.period)
                }));
            }else{
                _context.history = lotteryService.resultForm(await lotteryService.getAwardInfoByIssueNo({
                    issueno: _context.awardtimes.current.period
                }));
            }

            /**
             *   这里规则是，先看看接口的awardCount为不为空，为空就不用取awardCount的，假如不为空，就去里面取awardCount里面的poolAmount和allAmount
             *   如果这两个值为0，就再判断不用去取;
             */
            if(_context.history.awardCount !=null){

                if(parseInt(JSON.parse(_context.history.awardCount).poolAmount) != 0){

                    _context.history.poolAmount = JSON.parse(_context.history.awardCount).poolAmount;

                }

                if(parseInt(JSON.parse(_context.history.awardCount).allAmount) != 0){

                    _context.history.allAmount = JSON.parse(_context.history.awardCount).allAmount;
                }

            }


            if(_context.history){
                _context.award_count = JSON.parse(_context.history.awardCount);
            }else{
                console.warn(`数字彩(${_code})详情页历史开奖返回result为null~`);
            }

            return this.render(`${_context.classify}/${_context.lotteryCode}/detail`, _context, request, reply);

        }catch(ex){

            console.error(ex);
            return DealWithCommonService.noFound(reply);

        }
    }

    /**
     * 获取开奖详情(用于数字彩);
     * @param request
     * @param reply
     * @return {Promise.<*>}
     */
    async getawardinfobyissueno(request, reply){

        let _code =  'pl3';
        let _option = {};
        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;

        /** 初始化LotteryService */
        let lotteryService = new LotteryService(_code);
        let issueno          = parseInt(request.query.issueno);

        /** 获取开奖条件 */
        _context.lotteryAwardGrade = DealWithCommonService.getLotteryAwardGrade(_context.lotteryCode, this.configService.config.lotteryAwardGrade);

        try{

            _context.history = lotteryService.resultForm(await lotteryService.getAwardInfoByIssueNo({
                issueno: issueno,
            }));


            if(_context.history){

                if(_context.history.awardCount !=null){

                    _context.award_count                 = JSON.parse(_context.history.awardCount);


                    /**
                     *   这里规则是，先看看接口的awardCount为不为空，为空就不用取awardCount的，假如不为空，就去里面取awardCount里面的poolAmount和allAmount
                     *   如果这两个值为0，就再判断不用去取;
                     */
                    if(parseInt(_context.award_count.poolAmount) != 0){

                        _context.history.poolAmount = _context.award_count.poolAmount;

                    }

                    if(parseInt(_context.award_count.allAmount) != 0){

                        _context.history.allAmount = _context.award_count.allAmount;
                    }


                }else{

                    _context.award_count                 = null;
                    _context.history.allAmount         = null;
                    _context.history.poolAmount     = null;

                }

                let _amount             = __template(this.path.join(__dirname, '../../views/template/digit/common/amount.art'), _context);
                let _ballList               = __template(this.path.join(__dirname, '../../views/template/digit/common/ballList.art'), _context);
                let _lotteryDateTime = __template(this.path.join(__dirname, '../../views/template/digit/common/lotteryDateTime.art'), _context);
                let _list                     = __template(this.path.join(__dirname, '../../views/template/digit/common/detail.art'), _context);


                return this.json({
                    amount: _amount,
                    ballList: _ballList,
                    lotteryDateTime: _lotteryDateTime,
                    list: _list
                }, request, reply);

            }else{
                
                console.warn('数字彩(${_code})(getawardinfobyissueno)详情页历史开奖返回result为null~');
                return this.json({
                    amount: '',
                    ballList: '',
                    lotteryDateTime: '',
                    list: ''
                }, request, reply);
            }


        }catch (ex){

            console.error(ex);
            return this.json({
                amount: '',
                ballList: '',
                lotteryDateTime: '',
                list: ''
            }, request, reply);
        }

    }
      /**
     *  图表;
     * @return {Promise.<void>}
     */
    async chart(request, reply){


        let [_flot, _lotteryCode, _lotteryClassity] = [request.params.flot, 'pl3', ''];

        let  _data;

        let  _lotteryService = new LotteryService(_lotteryCode);

        if(_flot == undefined){
            return _lotteryService.errorMsg('参数flot不能为空！');
        }

        if(_lotteryCode == undefined){

            return _lotteryService.errorMsg('参数lotteryCode不能为空！');

        }else{

            _lotteryClassity = 'fc3d';
        }



        let  _chartService  = new ChartService();

        let _trend= DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);

        let _omission = DealWithCommonService.getOmission(this.configService.omission, _lotteryClassity);

        /** 获取对应彩种SEO */
        let _option = {
             pageCode : 'eycp_site_chart_digit',
                option : {
                    lotteryName: this._context.name,
                    type:_chartService.getFlotName(_trend,_flot)
                }
            }
        let  _context = this.getBaseContext(_option);

        let  _flotClassity;

        _context.lotteryCode     = _lotteryCode;
        _context.lotteryClassify  = _lotteryClassity;

        _context.flot       = _flot;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'chart');


        try{

            /** 获取省份信息 */
            _context.province    = __province;

            _context.lotteryType = 'digit';
            /** 读取分类类型 */
            _context.classify      =  _context.lotteryType;

            /** 获取数据集合 */
            _data = await _lotteryService.getDigitLotteryMain();

            _context.type =_context.lotteryType;

            _context = Object.assign(_context, _data);


            let chartConfig = this.configService.getChartConfig(_context.lotteryClassify, _flot);

            /** 获取表头的结构配置 */
            _context.theadObject = JSON.stringify(chartConfig.theadObject);

            /** 获取表格的样式配置 */
            _context.cssObject  = JSON.stringify(chartConfig.cssObject);

            /** 获取开奖走势说明 */
            _context.helpObject = chartConfig.helpObject;

            /** 预选号码配置 */
            _context.budgetary  = JSON.stringify(chartConfig.budgetary);

            // fc3d走势数据
            _context.trend = _trend;
            _context.omission = _omission;


            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend("digit");

            /** 默认的杀号type值 */
            _context.shddDefultFlot = this.configService.getShddDefultFlot(_lotteryClassity);

            /** 默认的杀号type值 */
            _context.hmtjDefultFlot = this.configService.getHmtjDefultFlot(_lotteryClassity);

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


        let  [_lotteryCode, _flot, _quantity,_chartService,  resultChartData] = ['pl3', request.query.flot, request.query.quantity, new ChartService()];


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

                /** pl3 */
                resultChartData  = _chartService.resultForm(await _chartService.getPl3FlotStatData(_flot, _quantity));

                return this.json(resultChartData,request,reply);

        }catch(ex){


                return _lotteryCode.errorMsg(ex);

        }

    }
}

module.exports = Pl3Controller