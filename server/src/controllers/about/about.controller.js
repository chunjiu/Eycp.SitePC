'use strict';

import { BaseController } from '../public/base.controller';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import { ContactService } from '../../services/contact/contact.service';
import { UUIDService } from '../../services/public/uuid.service';

/**
 * 关于控制器
 */
class AboutController extends BaseController {

    constructor() {
        super();
        // 基础上下文参数
        let _option = {
            needSeo : true,
            seoAction : 'home'
        }

        this._context = this.getBaseContext(_option);
        this.service = new ContactService();
        this.typeList = {
            'aboutUs' : {
                id: 23,
                name: '关于我们'
            },
            'aboutVideo' : {
                id: 24,
                name: '关于开奖视频'
            },
            'aboutVideoCall' : {
                id: 25,
                name: '开奖视频调用'
            },
            'legalNotices': {
                id: 28,
                name: '法律声明'
            }
        };

        this.titleList = [{
            name : '关于我们',
            id : 23,
            icon: 'qg',
            type: 'aboutUs'
        },{
            name : '关于开奖视频',
            id : 24 ,
            icon: 'gp',
            type: 'aboutVideo'
        },{
            name : '开奖视频调用',
            id : 25 ,
            icon: 'df',
            type: 'aboutVideoCall'
        },{
            name : '法律声明',
            id : 28 ,
            icon: 'dm',
            type: 'legalNotices'
        }]
    }
    
    async index(request, reply) {
        let _context = {};

        let type = request.params.type;

        if(!type) {
            type = 'aboutUs';
        }

        /** 获取导航信息 */
        _context.mainNav = await DealWithCommonService.mainNavData(__lotteryAllTree);
        _context.id = this.typeList[type].id;
        _context.title = this.typeList[type].name;
        _context.type = type;

        let _data = await this.service.detail(_context.id);
        _context.data = this.service.resultForm(_data);
        _context.titleList = this.titleList;

        _context = Object.assign(_context, this._context);

        return this.render(`about/index`, _context, request, reply);
    }

    async advice(request, reply) {
        let uuid = request.state.uuid;

        if (!uuid) {
            let _service =  new UUIDService();
            uuid = await _service.getUUID();
        }
        
        reply.redirect(this.configService.config.website.feedBackUrl + uuid).state('uuid', uuid);
    }

}

module.exports = AboutController;