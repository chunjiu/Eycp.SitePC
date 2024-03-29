/***********************************************************************************
 *
 *                                      大乐透控制器;
 *
 ***********************************************************************************/
'use strict';

import { DigitController } from '../public/digit.controller';
import { LotteryService } from '../../services/public/lottery.service';
import { DLTService } from '../../services/digit/dlt.service';
import DealWithCommonService from '../../services/public/dealWithCommon.service';

/**Controller for 'main'*/
class DltController extends DigitController {

    constructor() {

        super();

    }


    /**
     * 开奖之后页面内容获取
     * @param {*} request
     * @param {*} reply
     */
    async indexPage(request, reply) {

        // let _context = {};
        // _context = await this._service.pageHistory(request.query.year, request.query.day);
        // _context.lotteryType = 'digit';
        // _context.type = 'dlt';
        // _context = Object.assign(_context, this._context);
        //
        // let _timer = __template(this.path.join(__dirname, '../../views/template/components/lotteryTimer.component.art'), _context);
        // let _history = __template(this.path.join(__dirname,'../../views/template/digit/dlt/history.art'), _context);
        // let _index = __template(this.path.join(__dirname, '../../views/template/digit/common/index.art'), _context);
        //
        // return this.json({
        //     timer: _timer,
        //     history: _history,
        //     index: _index
        // }, request, reply);
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

        let _code = `${request.params.code}`;

        /** 获取对应彩种SEO */
        let _option = {
            pageCode: 'eycp_site_lottery_high_detail',     // 暂时写这个，等确定code再改
            option: {
                lotteryName: DealWithCommonService.getLotteryName(_code, __province)
            }
        };
        if("df6j1" == _code){
            _option.option.lotteryName="东方6+1";
        }else if("hd15x5"==_code){
            _option.option.lotteryName="华东15选5";
        }

        let _provinceId = request.params.provinceId;

        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;

        _context.provinceId = _provinceId;

        // 华东11选5 logo需要特殊处理
        if (_code == 'hd15x5') {

            _context.logoCode = this.configService.config.hd15x5[_provinceId];
        }

        /** 获取导航信息 */
         _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

        /** 获取省份信息 */
         _context.province  = __province;

        /** 获取这个code是属于那个彩种的 */
        _context.classify = "local";


        /** 判断彩种类型 */
        _context.lotteryType = 'digit';


        _context.data = await DealWithCommonService.leftNavBar(_code, 'other', _provinceId);
        _context.type = 'other';
        /** 通过分类，然后控制详情页左边导航那大类显示 */
        // DealWithCommonService.showDetailLeftNav(_context, _context.classify);


        /** 初始化LotteryService */
        let lotteryService = new LotteryService(_code);

        try {

            /** 获取开奖时间 */
            _context.awardtimes = lotteryService.resultForm(await lotteryService.getAwardTimes());

            /** 获取期号 */
            _context.periodsArray = lotteryService.resultForm(await lotteryService.getDigitPeriods(99));

            /** 获取底部推荐（地方彩相关推荐也是调数字彩那边的） */
            _context.recommend = await DealWithCommonService.showRecommend(_context.lotteryType);

            /** 获取开奖条件 */
            _context.lotteryAwardGrade = DealWithCommonService.getLotteryAwardGrade(_context.lotteryCode, this.configService.config.lotteryAwardGrade);


            _context.issueno = _context.awardtimes.current.period;

            /** 获取历史开奖数据 */
            _context.history = lotteryService.resultForm(await lotteryService.getAwardInfoByIssueNo({
                issueno: parseInt(_context.awardtimes.current.period)
            }));


            if(_context.history.awardCount !=null){
                _context.history.poolAmount = JSON.parse(_context.history.awardCount).poolAmount;
                _context.history.allAmount = JSON.parse(_context.history.awardCount).allAmount;
            }

            if (_context.history) {
                _context.award_count = {};

                _context.history.award_date = _context.awardtimes.time;
                _context.award_count.awardinfo = _context.lotteryAwardGrade;
            } else {
                console.warn(`地方彩(${_code})详情页历史开奖返回result为null~`);
            }

            return this.render(`${_context.classify}/detail`, _context, request, reply);

        } catch (ex) {

            return DealWithCommonService.noFound(reply);
            console.error(ex);

        }
    }

    /**
     * 获取开奖详情(用于数字彩);
     * @param request
     * @param reply
     * @return {Promise.<*>}
     */
    async getawardinfobyissueno(request, reply) {

        let _code = `${request.params.code}`;
        let _option = {};
        let _context = this.getBaseContext(_option);

        _context.lotteryCode = _code;

        /** 初始化LotteryService */
        let lotteryService = new LotteryService(_code);
        let issueno = parseInt(request.query.issueno);

        /** 获取开奖条件 */
        _context.lotteryAwardGrade = DealWithCommonService.getLotteryAwardGrade(_context.lotteryCode, this.configService.config.lotteryAwardGrade);

        try {


            _context.history = lotteryService.resultForm(await lotteryService.getAwardInfoByIssueNo({
                issueno: issueno,
            }));




            if (_context.history) {

                _context.award_count = _context.history;
                _context.award_count.awardinfo = _context.lotteryAwardGrade;
                _context.history.allAmount = _context.award_count.allAmount;
                _context.history.poolAmount = _context.award_count.poolAmount;


                let _amount = __template(this.path.join(__dirname, '../../views/template/local/common/amount.art'), _context);
                let _ballList = __template(this.path.join(__dirname, '../../views/template/local/common/ballList.art'), _context);
                let _lotteryDateTime = __template(this.path.join(__dirname, '../../views/template/local/common/lotteryDateTime.art'), _context);
                let _list = __template(this.path.join(__dirname, '../../views/template/local/common/detail.art'), _context);


                return this.json({
                    amount: _amount,
                    ballList: _ballList,
                    lotteryDateTime: _lotteryDateTime,
                    list: _list
                }, request, reply);

            } else {

                console.warn(`地方彩(${_code})(getawardinfobyissueno)详情页历史开奖返回result为null~`);
            }


        } catch (ex) {

            return DealWithCommonService.noFound(reply);
            console.error(ex);
        }

    }
}

module.exports = DltController