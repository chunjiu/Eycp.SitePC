/************************************************
 *
 *                       号码推荐控制器
 *
 ***********************************************/
'use strict';

import { BaseController } from '../public/base.controller';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import ConfigService from '../../services/public/config.service';
import { HmtjService } from  '../../services/hmtj/hmtj.service';
import { LotteryService } from '../../services/public/lottery.service';
import HmtjDealWithData from '../../dealWithDataConduit/hmtj/hmtj.dealWithData';

class HmtjController extends BaseController {


    constructor() {

        super();

        this.dealWithCommonService = DealWithCommonService;
        this.hmtjService                      = new HmtjService();
        this.configService                    = ConfigService;
        this.hmtjDealWithData           = HmtjDealWithData;

        this.typeArray = [101,102,103,111,112,113,121,122,123,131,132,133];
    }

    /**
     *
     * @param request
     * @param reply
     * @return {*}
     */
    index(request, reply){

        return reply.redirect('/404',request, reply);
    }

    /**
     *
     * @param request
     * @param reply
     * @return {Promise.<*>}
     */
    async hmtj(request, reply){

        let  _lotteryCode = request.params.code;
        let  _type = request.params.type;
        let  _option;
        let  _context;
        let  _data;
        let  _lotteryService



        if(_lotteryCode == undefined){

            this.hmtjService.errorMsg('hmtj: 参数lotteryCode不能为空！');
            return;
        }

        if(_type == undefined){

            this.hmtjService.errorMsg('hmtj: 参数type不能为空！');
            return;

        }else{

            _type = parseInt(_type);
        }

        if( this.dealWithCommonService.contains(this.typeArray, _type)  == false){

            this.hmtjService.errorMsg('hmtj: 参数type取值范围不对！');
            return;
        }

        try {

            await DealWithCommonService.getBaseLotteryTree(__province, __lotteryAllTree);

            _option = {
                pageCode : 'eycp_site_hmtj_list',
                option:{
                    lotteryName: await DealWithCommonService.getLotteryNameForLotteryAllTree(_lotteryCode, __lotteryAllTree),
                    type: this.configService.getTypeName(_lotteryCode, _type, this.configService.getHmtjConfig()).name
                }
            }


            _context = this.getBaseContext(_option);

            _context.lotteryCode      = _lotteryCode;
            _context.stype                = _type;
            _lotteryService               = new LotteryService(_lotteryCode);
            _context.isDetail             = false;
            _context.quantity           = 20;

            /** 获取导航信息 */
            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

            /** 默认的遗漏flot值 */
            _context.chartDefultFlot = this.configService.getChartDefultFlot(_lotteryCode);

            /** 默认的遗漏flot值 */
            _context.omissionDefultFlot = this.configService.getOmissionDefultFlot(_lotteryCode);

            /** 默认的杀号type值 */
            _context.shddDefultFlot = this.configService.getShddDefultFlot(_lotteryCode);


            /** 这里取数字彩的开奖数据 */
            _data =   await _lotteryService.getDigitLotteryMain();


            /** 获取对应类别的遗漏图表的所有类型配置 */
            _context.hmtjDataThreeLevel = DealWithCommonService.getHmtj(this.configService.getHmtjConfig() , _lotteryCode);

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend('digit');

            _context = Object.assign(_context, _data);

             /** 注意，排列3和福彩3d的专家推荐是和杀号定胆一样的，所以也要引入杀号定胆的处理一下数据 */
             if(_lotteryCode == 'fc3d' || _lotteryCode == 'pl3'){

                 /** 福彩3d和排列3从第十期开始，和杀号定胆的一样 */
                 _context.quantity           = 10;

                 _context.hmtjData =  this.hmtjDealWithData.resultForm(await this.hmtjService.getrecommendnumbers(_lotteryCode, _type, _context.quantity),1,_lotteryCode);

                /** 添加统计字段,添加一些杀号和定胆的过滤 */
                _context.hmtjData =  this.hmtjDealWithData.dealWithStatistics(_context.hmtjData, _context.lotteryCode, _context.stype);

                return this.render(`hmtj/indexFc3dorPl3`, _context, request, reply);
            
            }else{

                 _context.hmtjData =  this.hmtjDealWithData.resultForm(await this.hmtjService.getrecommendnumbers(_lotteryCode, _type, _context.quantity),1,_lotteryCode);

                return this.render(`hmtj/index`, _context, request, reply);
            }


        }catch(ex){

            this.hmtjService.errorMsg(ex);
            return reply.redirect('/404',request, reply);
        }

    }

    /**
     *
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    async detail(request, reply){

        let  _lotteryCode = request.params.code;
        let  _type            = request.params.type;
        let  _expertId      = request.params.expertId;
        let  _option;
        let  _context = {};
        let  _data;
        let  _lotteryService;

        if(_lotteryCode == undefined){

            this.hmtjService.errorMsg('hmtj: 参数lotteryCode不能为空！');
            return;
        }

        if(_expertId == undefined){
            this.hmtjService.errorMsg('hmtj: 专家id参数expertId不能为空！');
            return;
        }

        if(_type == undefined){

            this.hmtjService.errorMsg('hmtj: 参数type不能为空！');
            return;

        }else{

            _type = parseInt(_type);
        }

        if( this.dealWithCommonService.contains(this.typeArray, _type)  == false){

            this.hmtjService.errorMsg('hmtj: 参数type取值范围不对！');
            return;
        }

        try {

            await DealWithCommonService.getBaseLotteryTree(__province, __lotteryAllTree);

            _option = {
                pageCode : 'eycp_site_hmtj_details',
                option:{
                    lotteryName: await DealWithCommonService.getLotteryNameForLotteryAllTree(_lotteryCode, __lotteryAllTree),
                    type: this.configService.getTypeName(_lotteryCode, _type, this.configService.getHmtjConfig()).name
                }
            }

            _context.lotteryCode      = _lotteryCode;
            _context.stype                = _type;
            _lotteryService               = new LotteryService(_lotteryCode);
            _context.isDetail             = true;
            _context.expertId            = _expertId;
            _context.quantity            = 20;

            /** 获取导航信息 */
            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

            /** 默认的遗漏flot值 */
            _context.chartDefultFlot = this.configService.getChartDefultFlot(_lotteryCode);

            /** 默认的遗漏flot值 */
            _context.omissionDefultFlot = this.configService.getOmissionDefultFlot(_lotteryCode);

            /** 默认的杀号type值 */
            _context.shddDefultFlot = this.configService.getShddDefultFlot(_lotteryCode);


            /** 这里取数字彩的开奖数据 */
            _data =   await _lotteryService.getDigitLotteryMain();


            /** 获取对应类别的遗漏图表的所有类型配置 */
            _context.hmtjDataThreeLevel = DealWithCommonService.getHmtj(this.configService.getHmtjConfig() , _lotteryCode);

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend('digit');

            _context = Object.assign(_context, _data);

             /** 注意，排列3和福彩3d的专家推荐是和杀号定胆一样的，所以也要引入杀号定胆的处理一下数据 */
             if(_lotteryCode == 'fc3d' || _lotteryCode == 'pl3'){

                 /** 福彩3d和排列3从第十期开始，和杀号定胆的一样 */
                 _context.quantity           = 10;

                 _context.hmtjData =  this.hmtjDealWithData.resultForm(await this.hmtjService.getrecommenddetails(_lotteryCode, _expertId, _type, _context.quantity),2,_lotteryCode);

                /** 添加统计字段,添加一些杀号和定胆的过滤 */
                _context.hmtjData =  this.hmtjDealWithData.dealWithStatistics(_context.hmtjData, _context.lotteryCode, _context.stype);

            }else{

                 _context.hmtjData =  this.hmtjDealWithData.resultForm(await this.hmtjService.getrecommenddetails(_lotteryCode, _expertId, _type, _context.quantity),2,_lotteryCode);
             }

           /** 用于tdk中的专家名称 */
           _option.option.specialist = _context.hmtjData.expertName;

            _context = Object.assign(this.getBaseContext(_option), _context);

            return this.render(`hmtj/detail`, _context, request, reply);

        }catch(ex){

            this.hmtjService.errorMsg(ex);
            return reply.redirect('/404',request, reply);
        }
    }

    /**
     *  请求推荐号码列表
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    async requestHmtj(request, reply){

        let  _lotteryCode = request.query.code;
        let  _type = request.query.type;
        let  _quantity = request.query.quantity;
        let  _context;
        let  _hmtjHtml;

        if(_lotteryCode == undefined){

            this.hmtjService.errorMsg('hmtj: 参数lotteryCode不能为空！');
            return;
        }

        if(_type == undefined){

            this.hmtjService.errorMsg('hmtj: 参数type不能为空！');
            return;

        }else{

            _type = parseInt(_type);
        }

        if( this.dealWithCommonService.contains(this.typeArray, _type)  == false){

            this.hmtjService.errorMsg('hmtj: 参数type取值范围不对！');
            return;
        }


        try {

            _context = this.getBaseContext({});

            _context.lotteryCode      = _lotteryCode;
            _context.stype                = _type;
            _context.quantity            = _quantity !=undefined ? parseInt(_quantity) : 10;

            _context.hmtjData =  this.hmtjDealWithData.resultForm(await this.hmtjService.getrecommendnumbers(_lotteryCode, _type, _context.quantity),1,_lotteryCode);
            
            /** 注意，排列3和福彩3d的专家推荐是和杀号定胆一样的，所以也要引入杀号定胆的处理一下数据 */
            if(_lotteryCode == 'fc3d' || _lotteryCode == 'pl3'){

                /** 添加统计字段,添加一些杀号和定胆的过滤 */
                _context.hmtjData =  this.hmtjDealWithData.dealWithStatistics(_context.hmtjData, _context.lotteryCode, _context.stype);
                _hmtjHtml   = __template(this.path.join(__dirname, '../../views/template/hmtj/hmtjFc3dAndPl3.component.art'), _context);

            }else{
                _hmtjHtml   = __template(this.path.join(__dirname, '../../views/template/hmtj/hmtj.component.art'), _context);
            }

            return this.json({
                html: _hmtjHtml
            }, request, reply);

        }catch(ex){

            this.hmtjService.errorMsg(ex);
            return reply.redirect('/404',request, reply);
        }

    }


    /**
     *  请求推荐号码详情
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    async requestHmtjDetail(request, reply){

        let  _lotteryCode = request.query.code;
        let  _type            = request.query.type;
        let  _expertId      = request.query.expertId;
        let  _quantity      = request.query.quantity;
        let  _context;
        let _hmtjDetailHtml;

        if(_lotteryCode == undefined){

            this.hmtjService.errorMsg('hmtj: 参数lotteryCode不能为空！');
            return;
        }

        if(_expertId == undefined){
            this.hmtjService.errorMsg('hmtj: 专家id参数expertId不能为空！');
            return;
        }

        if(_type == undefined){

            this.hmtjService.errorMsg('hmtj: 参数type不能为空！');
            return;

        }else{

            _type = parseInt(_type);
        }

        if( this.dealWithCommonService.contains(this.typeArray, _type)  == false){

            this.hmtjService.errorMsg('hmtj: 参数type取值范围不对！');
            return;
        }



        try {

            _context = this.getBaseContext({});

            _context.lotteryCode      = _lotteryCode;

            _context.stype                = _type;

            _context.quantity = _quantity !=undefined ? parseInt(_quantity) : 10;

            _context.hmtjData =  this.hmtjDealWithData.resultForm(await this.hmtjService.getrecommenddetails(_lotteryCode, _expertId, _type,  _context.quantity),2,_lotteryCode);

           
            _hmtjDetailHtml   = __template(this.path.join(__dirname, '../../views/template/hmtj/hmtjDetail.component.art'), _context);

           
           
            return this.json({
                html: _hmtjDetailHtml
            }, request, reply);

        }catch(ex){

            this.hmtjService.errorMsg(ex);
            return reply.redirect('/404',request, reply);
        }

    }

}

module.exports = HmtjController;