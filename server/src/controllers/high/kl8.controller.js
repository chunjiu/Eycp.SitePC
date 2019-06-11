/***********************************************************************************
 *
 *                                      快乐8控制器;
 *
 ***********************************************************************************/
'use strict';

import {BaseController} from '../public/base.controller';
import {LotteryService} from  '../../services/public/lottery.service';
import {KL8Service} from '../../services/high/kl8.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';


/**Controller for 'main'*/
class K3Controller extends BaseController {

    constructor(){

        super();

    }
    /**
     * 入口
     * @param {*} request 
     * @param {*} reply
     */
    async index(request, reply) {

        let _code = `${request.params.area}kl8`;

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
        _context.type = 'kl8';

        _context.name = _code;
        let kl8Service = new KL8Service(_code);
        // 获取数据集合
        let _data = await kl8Service.getHighLotteryMain(_context.type);
        
        _data.rule.introduceContent = _data.rule && _data.rule.introduceContent;
        // 整理数据
        if(_data.awardResult && _data.awardResult.result) {
            _data.awardResult.frisbee = _data.awardResult.result.split('|')[1];
            _data.awardResult.resultList = _data.awardResult.result.split('|')[0].split(',');
        }

        if(_data.history && _data.history.length > 0) {
            _data.history = _data.history.map(item => {
                let t = item.result.split('|');
                item.frisbee = t[1];
                item.result = t[0];

                return item;
            });
        }

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');
        _context = Object.assign(_context, _seo, _data);

        return this.render(`high/kl8/index`, _context, request, reply);
    }
    
    /**
     * 开奖之后页面内容获取
     * @param {*} request 
     * @param {*} reply 
     */
    async indexPage(request, reply) {
        let _code = `${request.params.area}kl8`;
        let _service = new KL8Service(_code);
        let _context = {};
        _context = await _service.pageHistory(request.query.date);
        _context.lotteryCode = _code;
        _context.lotteryType = 'high';
        _context.type = 'kl8';

        let _timer = __template(this.path.join(__dirname, '../../views/template/components/lotteryTimer.component.art'), _context);
        let _history = __template(this.path.join(__dirname,'../../views/template/high/kl8/history.art'), _context);
        let _index = __template(this.path.join(__dirname, '../../views/template/high/kl8/index.art'), _context);
        let _detail   = __template(this.path.join(__dirname, '../../views/template/high/kl8/detail.art'), _context);
        
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

        let _code = `${request.params.area}kl8`;

        // 获取对应彩种SEO
        let _option = {
            pageCode : 'eycp_site_lottery_high_history',
            option : {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;
        _context.type = 'kl8';
        let _service = new KL8Service(_code);

        let _data = await _service.pageHistory();

        // 整理数据
        if(_data.awardResult && _data.awardResult.result) {
            _data.awardResult.resultList = _data.awardResult.result.split('|')[0].split(',');
        }

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

        return this.render(`high/kl8/history`, _context, request, reply);

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


        let _code = `${request.params.area}kl8`;

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
        _context.lotteryType = 'kl8';

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


            return this.render(`${_context.classify}/kl8/detail`, _context, request, reply);

        }catch(ex){

            console.error(ex);
            return DealWithCommonService.noFound(reply);

        }
    }
}

module.exports = K3Controller