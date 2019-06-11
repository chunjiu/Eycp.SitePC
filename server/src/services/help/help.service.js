
'use strict';

import { BaseService } from '../public/base.service';

/**
 * 帮助服务
 */
export class HelpService extends BaseService {
    
    /**
     * 获取帮助列表
     * @param {object} _para pageIndex 页码  pageSize 页数 
     */
    list() {

        // 缓存帮助列表
        let cacheOpt = this.setCache(`helper/getHelpers`, 30000);

        // 参数
        let httpOpt = {
            url: `helper/getHelpers`
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }

    /**
     * 获取帮助详情
     * @param {int} id 
     */
    detail(id) {
        
        // 判断id是否为指定的可转换格式
        if (!/^[0-9]+$/.test(id)) {
            // 返回异常内容
            return this.errorMsg(`传入的参数ID值为${id},必须为数字或者数字字符串`);
        }

        // 帮助详情不缓存，随时可能变更
        let cacheOpt = this.setCache(`helper/getHelperDetail/${id}`, 0);

        // 参数
        let httpOpt = {
            url: `helper/getHelperDetail`,
            qs: {
                id: id,
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }
}