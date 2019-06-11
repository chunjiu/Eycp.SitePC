'use strict';

import { BaseController } from '../public/base.controller';
import { BaseService } from '../../services/public/base.service';


/**Controller for 'main'*/
class APIController extends BaseController {

    constructor() {
        super();
        this.server = new BaseService();
    }

    /**
     * 前端接口统一路由
     * @param {request} request 
     * @param {reply} reply 
     */
    api(request, reply) {
        let _method = request.params.lotteryCode, 
            _actions = request.params.action;
            
        let httpOpt = { url: `${_method}/${_actions}` };
        return this.json(this.server.httpGet(httpOpt), request, reply);
    }
}

module.exports = APIController;