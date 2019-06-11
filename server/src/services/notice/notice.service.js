
'use strict';

import { BaseService } from '../public/base.service';

/**
 * 公告服务
 */
export class NoticeService extends BaseService {
    
    /**
     * 获取公告列表
     * @param {object} _parameter pageIndex 页码  pageSize 页数
     */
    list(_parameter) {

        let _pageIndex, _pageSize;

        /** 页数页码不影响业务，给予默认值 */
        if (_parameter.pageIndex && !/^[1-9][0-9]*$/.test(_parameter.pageIndex)) {
            _parameter.pageIndex = 1;
            return this.errorMsg(`参数pageIndex错误`);
        }

        if (_parameter.pageSize && !/^[1-9][0-9]*$/.test(_parameter.pageSize)) {
            _parameter.pageSize = 10;
            return this.errorMsg(`参数pageSize错误`);
        }

        _pageIndex = _parameter.pageIndex;
        _pageSize = _parameter.pageSize;

        /** 公告要实时 */
        let cacheOpt = this.setCache(`notice/getNotices`, 3000);

        /** 参数 */
        let httpOpt = {
            url: `notice/getNotices`,
            qs: {
                pageIndex: _pageIndex,
                pageSize: _pageSize
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }

    /**
     * 
     * @param {int} id 
     */
    detail(id) {
        /** 判断id是否为指定的可转换格式 */
        if (!/^[0-9]+$/.test(id)) {

            /** 返回异常内容 */
            return this.errorMsg(`传入的参数ID值为${id},必须为数字或者数字字符串`);
        }

        let cacheOpt = this.setCache(`notice/getNoticeDetail/${id}`, 3000);

        /** 参数 */
        let httpOpt = {
            url: `notice/getNoticeDetail`,
            qs: {
                id: id,
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }
}