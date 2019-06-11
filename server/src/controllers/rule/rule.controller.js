'use strict';

import { BaseController } from '../public/base.controller';
import { RuleService } from '../../services/rule/rule.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';

/**
 * 规则控制器
 */
class RuleController extends BaseController {

    constructor() {
        super();
        this.service = new RuleService();
    }

    /**
     * 规则列表
     * @param {request} request 
     * @param {response} reply 
     */
    async index(request, reply) {
        /** 基础上下文参数 */
        let _option = {
            pageCode : 'eycp_site_index'
        },
        _context = this.getBaseContext(_option);

        _context.data = await this.service.ruleMain();
        
        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'rule');
        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');

        return this.render(`rule/index`, _context, request, reply);
    }

    /**
     * 规则详情页
     * @param {request} request 
     * @param {response} reply 
     */
    async detail(request, reply) {

        /** 基础上下文参数 */
        let _option = {
            pageCode : 'eycp_site_index'
        },
        _context = this.getBaseContext(_option),
        _code = request.params.code,
        _type = request.params.type,
        _proid = request.params.proid;

        _context.type = _type;
        _context.code = _code;
        _context.proid = _proid;

        _context.data = await DealWithCommonService.leftNavBar(_code, _type, _proid);

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'rule');
        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');
        _context.name = DealWithCommonService.getLotteryName(_context.code,__province);
        

        _context.detail = await this.service.detail(_code);

        if(_context.detail.state == 1) {
            _context.detail = _context.detail.result;
        }

        return this.render(`rule/detail`, _context, request, reply);

        // return this.json(this.service.detail(request.params.para), request, reply);
    }

}

module.exports = RuleController;