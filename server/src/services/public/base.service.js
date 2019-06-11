/***********************************************************************************
 *
 *           核心配置服务;
 *
 ***********************************************************************************/
'use strict';

import rp from 'request-promise';
import cacheService from './cache.service';
import logger from './logger.service';
import config from './config.service';
import axios from 'axios';

//rp.debug=true;

export class BaseService {

    constructor() {

        this.configService = config.config;
        this.cacheSetting = {};

    }

    /**
     *  获取特殊名字彩种数组;
     */
    getSpecialCode(){

        if(this.configService.specialCode !=undefined && this.configService.specialCode.length > 0 ){

            let  specialCode = this.configService.specialCode;

            for(let  i =0; i<specialCode.length; i++){
                if( specialCode[i].province != '华东六省'){
                    specialCode[i].province = specialCode[i].province.replace(/省/g,'');
                }
            }

            return specialCode;

        }else{

            return [];
        }
    }


    /**
     * 设置缓存
     */
    setCache(_key, _expired = 0){

        if( typeof(_key) != 'string' || _key ==undefined || _key ==''){
            console.warn('缓存key值不能为空！');
            return;
        }

        let cacheOpt = {
            key: _key,
            expired: _expired
        };

        //console.log("缓存key值为:"+cacheOpt.key+"; 缓存时间为:"+cacheOpt.expired);

        return {...cacheOpt, ...this.cacheSetting[_key] };

    }

    /**
     *  返回错误信息给前端;
     */
     errorMsg(_string){
        console.error(_string);
        return new Promise((resolve, reject) => {
            resolve({
                "state": 2,
                "errorCode": "110",
                "errorCodeInfo": _string
            });
        });
     }

    /**
     * 格式化返回(特需格式自己处理)
     */
    resultForm(_result) {
        if (_result && _result.state==1) {
            return _result.result;
        } 
        return null;
    }

    resultPage(_result) {
        //一定存在这个
        if (_result && _result.state==1 && _result.result != null) {
            return _result.result;
        }else if( _result.result === null ){
            return [];
        }
    }

    /**
     * 返回数组
     * @param {*} _result 
     */
    resultArray(_result) {
        if (_result && _result.state==1) {
            return _result.result ? _result.result : [];
        } 
        return [];
    }

    /**
     *  判断元素是否在数组中;
     *  @param { 数组 } _arr,
     *  @param {需要判断是否在数组中得元素}  _obj
     */
    contains(_arr, _obj) {
        var i = _arr.length;
        while (i--) {
            if (_arr[i] === _obj) {
                return true;
            }
        }
        return false;
    }

    /**
     * 获取页面地址
     * @param {*} url 
     */
    getPage(url) {

        let nodeEnv = ((process.env.NODE_ENV || 'development'));
        let _baseURL = '';

        if (nodeEnv == "development") {
            _baseURL = this.configService.api.pageUri.development;
        } else {
            _baseURL = ((process.env.VERSION || 'beta') == 'beta' ? this.configService.api.pageUri.beta : this.configService.api.pageUri.release);
        }

       
        let options = {
            baseUrl: _baseURL,
            url: url,
            method: 'GET',
            gzip: true,
            jar: true,
            timeout: 10000,
            resolveWithFullResponse: true,
            forever: true
        };

        options.baseURL = options.baseUrl;
        return axios.request(options).then(result => {
            
            console.log(`Api-URL:${options.baseUrl}${options.url}-----------------success`);
            return result.data; 
        }).catch(ex => {
            console.error(`Api-URL:${options.baseUrl}${options.url}------------------error`);
            return this.errorMsg(ex);
        })
    }

    /***
     * 尝试在缓存中找回数据
     * @param {api 请求设置} httpOpt 
     * @param {缓存设置，可选， 不为空时查找缓存} cacheOpt
     * @param {开奖接口类型，1:开奖接口地址；2:其他接口地址; 3:广告接口地址;4: uuid地址接口}
     */
    httpGet(httpOpt, cacheOpt, uriType = 1) {

        if(typeof(httpOpt) != 'object'){
           console.error('参数1类型不正确！');
           return;
        }

        // 允许为空
        if(cacheOpt && typeof(cacheOpt) != 'object'){
           console.error('参数2类型不正确！');
           return;
        }

        // if(uriType && typeof(uriType) != 'number'){
        //    console.error('参数3类型不正确！');
        //    return;
        //  }

        // 允许默认参数
        // if(typeof uriType === 'undefined'){
        //     uriType = 1;
        //     console.warn('您使用了默认得开奖数据接口，建议为httpGet加上参数3')
        // } 

        let nodeEnv = ((process.env.NODE_ENV || 'development'));


        let uriPath,headers;


        if (cacheOpt) {

            let fromCache = cacheService.get(cacheOpt);

            if (fromCache) {

                //logger.debug(`命中cache-${cacheOpt.key}`);
                return Promise.resolve(fromCache);
            }
        }

        if (nodeEnv == "development") {

            if(uriType == 1){

                uriPath = this.configService.api.uri.development;

            }else if(uriType == 2){

                uriPath = this.configService.api.otherUri.development;
    
            }else if(uriType == 3){
    
                uriPath = this.configService.api.adUri.development;

            } else if(uriType == 4) {
                uriPath = this.configService.api.uuidUri.development;

            }
           
            headers = {
                'User-Agent': 'Request-Promise'
            }

        }else{

            let _xhost = '';

            if(uriType == 1){

                uriPath = ((process.env.VERSION || 'beta') == 'beta' ? this.configService.api.uri.beta : this.configService.api.uri.release);
                _xhost = this.configService.api.uri.xhost;

            }else if(uriType == 2){

                uriPath = ((process.env.VERSION || 'beta') == 'beta' ? this.configService.api.otherUri.beta : this.configService.api.otherUri.release);
                _xhost = this.configService.api.otherUri.xhost;
    
            }else if(uriType == 3){
    
                uriPath = ((process.env.VERSION || 'beta') == 'beta' ? this.configService.api.adUri.beta : this.configService.api.adUri.release);
                _xhost = this.configService.api.adUri.xhost;

            } else if(uriType == 4) {
                uriPath = ((process.env.VERSION || 'beta') == 'beta' ? this.configService.api.uuidUri.beta : this.configService.api.uuidUri.release);
                _xhost = this.configService.api.uuidUri.xhost;
            }

            headers = {
                'User-Agent': 'Request-Promise',
                'HOST': _xhost,
                'X-HOST': _xhost
            }
        }


       let defaultApiOptions = {
            baseUrl: uriPath,
            json: true,
            gzip: true,
            jar: true,
            timeout: 10000,
            resolveWithFullResponse: true,
            forever: true,      // 设置为keepalive
            headers: headers
        };


        let options = { ...defaultApiOptions, ...httpOpt };

        /** 输出地址还有参数 */
        // logger.debug(`Api-URL:${options.baseUrl}${options.url}--->${JSON.stringify(httpOpt.qs)}`);
        // return rp(options).then((result) => { 

        //     if (cacheOpt && cacheOpt.expired > 0 && result && result.body) {
        //         cacheService.set(cacheOpt, result.body);
        //     }

        //     console.log(`Api-URL:${options.baseUrl}${options.url}--->${JSON.stringify(httpOpt.qs)}--------------success`)
        //     return result.body; 

        // }).catch(ex =>{ 
        //     console.error(`Api-URL:${options.baseUrl}${options.url}--->${JSON.stringify(httpOpt.qs)}---------------error`)
        //     return this.errorMsg(ex);
        // });
        options.baseURL = options.baseUrl;
        options.params = options.qs;
        options.paramsSerializer = function(params) {
            let obj = [];
            Object.keys(params).forEach((key, idx) => {
                if(params[key] instanceof Array) {
                    params[key].forEach((item, index) => {
                        if(typeof item != 'undefined' && item != null) {
                            obj.push(`${key}[${index}]=${encodeURIComponent(item)}`);
                        }
                    })
                } else {
                    if(typeof params[key] != 'undefined' && params[key] != null) {
                        obj.push(`${key}=${encodeURIComponent(params[key])}`);
                    }
                }
                
            });

            return obj.join('&');
        }

        return axios.request(options).then(result => {
            if (cacheOpt && cacheOpt.expired > 0 && result && result.data) {
                cacheService.set(cacheOpt, result.data);
            } 
            // if(options.url == '/lottery/getawarddata') {
            //     throw '二个人通过'
            // }
            console.log(`Api-URL:${options.baseUrl}${options.url}--->${JSON.stringify(httpOpt.qs)}--------------success`);
            return result.data; 
        }).catch(ex => {
            console.error(`Api-URL:${options.baseUrl}${options.url}--->${JSON.stringify(httpOpt.qs)}---------------error`);
            return this.errorMsg(ex);
        })
    }

}