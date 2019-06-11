/************************************************
 *
 *                       杀号定胆控制器
 *
 ***********************************************/
'use strict';

import { BaseController } from '../public/base.controller';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import ConfigService from '../../services/public/config.service';
import { ShddService } from  '../../services/shdd/shdd.service';
import { LotteryService } from '../../services/public/lottery.service';
import ShddDealWithData from '../../dealWithDataConduit/shdd/shdd.dealWithData';

class ShddController extends BaseController {

    constructor() {

         super();


         this.shddService                      = new ShddService();
         this.configService                    = ConfigService;
         this.dealWithCommonService = DealWithCommonService;
         this.shddDealWithData           = ShddDealWithData;


         this.typeArray = [11,12,13,14,21,22,23,24,25,26,27,28,29,31,32,33,34,41,42,43,44,51,52,53,54,55,61,62,63,64,65,66,67];

        /** 定胆类型 */
        this.ddType = [25,26,27];
    }

    index(request, reply){

        return reply.redirect('/404',request, reply);
    }


    async shdd(request, reply){

        let  _lotteryCode = request.params.code;
        let  _type = request.params.type;
        let  _option;
        let  _context;
        let  _data;
        let  _lotteryService;

        if(_lotteryCode == undefined){

            this.shddService.errorMsg('shdd: 参数lotteryCode不能为空！');
            return;
        }

        if(_type == undefined){

            this.shddService.errorMsg('shdd: 参数type不能为空！');
            return;

        }else{

            _type = parseInt(_type);
        }

        if( this.dealWithCommonService.contains(this.typeArray, _type)  == false){

            this.shddService.errorMsg('shdd: 参数type取值范围不对！');
            return;
        }

        try {

            await DealWithCommonService.getBaseLotteryTree(__province, __lotteryAllTree);

            _option = {
                pageCode : 'eycp_site_shdd_list',
                option:{
                    lotteryName:await DealWithCommonService.getLotteryNameForLotteryAllTree(_lotteryCode, __lotteryAllTree),
                    type: this.configService.getTypeName(_lotteryCode, _type, this.configService.getShddConfig()).name
                }
            }


            _context = this.getBaseContext(_option);

            _context.lotteryCode      = _lotteryCode;
            _context.stype                = _type;
            _context.quantity           = 10;
            _lotteryService               = new LotteryService(_lotteryCode);

            /** 判断是杀号还是定胆类型 */
            if(DealWithCommonService.contains(this.ddType, _type)){

                _context.shddType = 'dd';

            }else{
                _context.shddType = 'sh';
            }

            /** 获取导航信息 */
            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');

            /** 这里取数字彩的开奖数据 */
            _data =   await _lotteryService.getDigitLotteryMain();

            /** 默认的遗漏flot值 */
            _context.chartDefultFlot = this.configService.getChartDefultFlot(_lotteryCode);

            /** 默认的遗漏flot值 */
            _context.omissionDefultFlot = this.configService.getOmissionDefultFlot(_lotteryCode);

            /** 默认的杀号type值 */
            _context.hmtjDefultFlot = this.configService.getHmtjDefultFlot(_lotteryCode);

            /** 获取对应类别的遗漏图表的所有类型配置 */
            _context.shddDataThreeLevel = DealWithCommonService.getShdd( this.configService.getShddConfig() , _lotteryCode);

            /** 获取底部推荐 */
            _context.recommend = await DealWithCommonService.showRecommend('digit');

            _context.shddData =  this.shddService.resultForm(await this.shddService.getkillcodes(_lotteryCode, _type, _context.quantity));


            /** 添加统计字段,添加一些杀号和定胆的过滤 */
            _context.shddData =  this.shddDealWithData.dealWithStatistics(_context.shddData, _context.lotteryCode, _context.stype);

            _context = Object.assign(_context, _data);

            return this.render(`shdd/index`, _context, request, reply);

        }catch(ex){

            this.shddService.errorMsg(ex);
            return reply.redirect('/404',request, reply);
        }

    }


    /**
     *
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    async requestShdd(request, reply){

        let  _lotteryCode = request.query.code;
        let  _type = request.query.type;
        let  _quantity = request.query.quantity;
        let  _context;
        let _shddHtml;

        if(_lotteryCode == undefined){

            this.shddService.errorMsg('shdd: 参数lotteryCode不能为空！');
            return;
        }

        if(_type == undefined){

            this.shddService.errorMsg('shdd: 参数type不能为空！');
            return;

        }else{

            _type = parseInt(_type);
        }

        if( this.dealWithCommonService.contains(this.typeArray, _type)  == false){

            this.shddService.errorMsg('shdd: 参数type取值范围不对！');
            return;
        }


        try {

            _context = this.getBaseContext({});

            _context.lotteryCode      = _lotteryCode;
            _context.stype                = _type;

            /** 判断是杀号还是定胆类型 */
            if(DealWithCommonService.contains(this.ddType, _type)){

                _context.shddType = 'dd';

            }else{
                _context.shddType = 'sh';
            }

            _context.quantity = _quantity !=undefined ? parseInt(_quantity) : 10;

            _context.shddData =  this.shddService.resultForm(await this.shddService.getkillcodes(_lotteryCode, _type, _context.quantity));

            /** 添加统计字段,添加一些杀号和定胆的过滤 */
            _context.shddData =  this.shddDealWithData.dealWithStatistics(_context.shddData, _context.lotteryCode, _context.stype);

            _shddHtml   = __template(this.path.join(__dirname, '../../views/template/shdd/shdd.component.art'), _context);

            return this.json({
                html: _shddHtml
            }, request, reply);

        }catch(ex){

            this.shddService.errorMsg(ex);
            return reply.redirect('/404',request, reply);
        }

    }

}

module.exports = ShddController;