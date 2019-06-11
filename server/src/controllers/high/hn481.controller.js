/***********************************************************************************
 *
 *                                      河南泳坛夺金481控制器;
 *
 ***********************************************************************************/
'use strict';

import {BaseController} from '../public/base.controller';
import {LotteryService} from  '../../services/public/lottery.service';
import {HN481Service} from '../../services/high/hn481.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';


/**Controller for 'main'*/
class HN481Controller extends BaseController {

    constructor(){

        super();

        this.lotteryCode = 'hn481';
        this.service = new HN481Service(this.lotteryCode);

    }
    /**
     * 入口
     * @param {*} request 
     * @param {*} reply
     */
    async index(request, reply) {

        let _code = this.lotteryCode;

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
        _context.type = 'hn481';
        
        // 获取数据集合
        let _data = await this.service.getHighLotteryMain(_context.type);
        
        _data.rule.introduceContent = _data.rule && _data.rule.introduceContent;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');
        _context = Object.assign(_context, _seo, _data);

        return this.render(`high/hn481/index`, _context, request, reply);
    }

    /**
     * 开奖之后页面内容获取
     * @param {*} request 
     * @param {*} reply 
     */
    async indexPage(request, reply) {
        let _code = this.lotteryCode;

        let _context = {};
        _context = await this.service.pageHistory(request.query.date);
        _context.lotteryCode = _code;
        _context.lotteryType = 'high';
        _context.type = 'hn481';

        let _timer = __template(this.path.join(__dirname, '../../views/template/components/lotteryTimer.component.art'), _context);
        let _history = __template(this.path.join(__dirname,'../../views/template/high/hn481/history.art'), _context);
        let _index = __template(this.path.join(__dirname, '../../views/template/high/hn481/index.art'), _context);
        let _detail   = __template(this.path.join(__dirname, '../../views/template/high/common/detail.art'), _context);
        
        return this.json({
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

        let _code = this.lotteryCode;

        // 获取对应彩种SEO
        let _option = {
            pageCode : 'eycp_site_lottery_high_history',
            option : {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;
        _context.type = 'hn481';

        let _data = await this.service.pageHistory();
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

        return this.render(`high/hn481/history`, _context, request, reply);

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


        let _code = this.lotteryCode;

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


            return this.render(`${_context.classify}/${_context.lotteryCode}/detail`, _context, request, reply);

        }catch(ex){

            console.error(ex);
            return DealWithCommonService.noFound(reply);

        }
    }
}

module.exports = HN481Controller