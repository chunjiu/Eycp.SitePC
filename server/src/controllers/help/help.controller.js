'use strict';

import { BaseController } from '../public/base.controller';
import { HelpService } from '../../services/help/help.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';

/**
 * 帮助控制器
 */
class HelpController extends BaseController {

    constructor() {
        super();
        // 基础上下文参数
        let _option = {
            needSeo : true,
            seoAction : 'home'
        }

        this._context = this.getBaseContext(_option);
        this.service = new HelpService();
    }

    /**
     * 帮助列表
     * @param {request} request 
     * @param {response} reply 
     */
    async index(request, reply) {
        let _context = {};

        let _id = request.params.id;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree);
        let _data = await this.service.list();
        _context.helpList = this.service.resultArray(_data);

        // 赋予默认值
        if(!_id && _context.helpList[0]) {
            _id = _context.helpList[0].children[0].id;
            _context.pId = _context.helpList[0].children[0].pId;
        } else {
            _context.pId = 0;
        }
        
        _context.id = _id;

        _context.helpList.forEach(item => {
            item.children.forEach(help => {
                if(help.id == _id) {
                    _context.pId = help.pId;
                    _context.title = help.name;
                }
            })
        })

        // 获取详情
        let _detail = await this.service.detail(_id);
        _context.detail = this.service.resultForm(_detail);


        _context = Object.assign(_context, this._context);

        return this.render(`help/index`, _context, request, reply);
    }

    /**
     * 帮助详情页
     * @param {request} request 
     * @param {response} reply 
     */
    detail(request, reply) {
        return this.json(this.service.detail(request.params.para), request, reply);
    }

}

module.exports = HelpController;