'use strict';

import { BaseController } from '../public/base.controller';
import { ContactService } from '../../services/contact/contact.service';

/**
 * 联系信息控制器
 */
class ContactController extends BaseController {

    constructor() {
        super();
        this.service = new ContactService();
    }

    /**
     * 规则列表
     * @param {request} request 
     * @param {response} reply 
     */
    index(request, reply) {
        return this.json(this.service.list(), request, reply);
    }

    /**
     * 规则详情页
     * @param {request} request 
     * @param {response} reply 
     */
    detail(request, reply) {
        return this.json(this.service.detail(request.params.para), request, reply);
    }

}

module.exports = ContactController;