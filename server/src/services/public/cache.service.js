/***********************************************************************************
 *
 *                缓存配置服务;
 *
 ***********************************************************************************/
'use strict';

import logger from './logger.service';

const cacheService = new class CacheService {

    constructor() {

        this._cache = {};
        this._refer = {};

        // 在这里继续写你的更多代码 ...
    }


    /**
     * 获取缓存中的数据
     */
    get(options) {
        var _key = options.key.replace(/&|=/g,'_');
        if (!this._refer[_key] || !this._cache[_key]) {
            return null;
        }
        //是否过期
        if (new Date().getTime() > this._refer[_key].expiredTime) {

            //logger.debug(`缓存过期:${_key}`);
            this._cache[_key] = null;
            return null;
        }

        return this._cache[_key];
    }

    /**
     * 设置缓存
     * options{key:缓存key,expired:过期时间，单位毫秒}
     * val：缓存数据
     */
    set(options, val) {
        var _key = options.key.replace(/&|=/g,'_');
        this._cache[_key] = val;
        this._refer[_key] = { expiredTime: new Date().getTime() + options.expired };
        //logger.debug(`设置缓存:${_key}`);
    }

}();

export default cacheService;