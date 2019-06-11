
'use strict';

import { BaseService } from '../public/base.service';

/**
 * 联系信息服务
 */
export class ContactService extends BaseService {
    
    /**
     * 获取联系信息列表
     * @param {object} _para pageIndex 页码  pageSize 页数 
     */
    list() {

        // 联系信息缓存一分钟
        let cacheOpt = this.setCache(`contactus/getContactus`, 60000);

        // 参数
        let httpOpt = {
            url: `contactus/getContactus`
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }

    /**
     * 获取联系内容详情
     * @param {int} id 
     */
    detail(id) {
        
        // 判断id是否为指定的可转换格式
        if (!/^[0-9]+$/.test(id)) {
            // 返回异常内容
            return this.errorMsg(`传入的参数ID值为${id},必须为数字或者数字字符串`);
        }

        // 联系详情缓存一分钟
        let cacheOpt = this.setCache(`contactus/GetContactuContent/${id}`, 6000);

        // 参数
        let httpOpt = {
            url: `contactus/GetContactuContent`,
            qs: {
                id: id,
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }
}