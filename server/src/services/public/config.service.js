/***********************************************************************************
 *
 *           基础配置服务;
 *
 ***********************************************************************************/

'use strict';

let  _configPath  = `../../../config`;

/** 网站基本配置 */
const  config = require(`${ _configPath }/app.config.js`).config;

/** 路由配置 */
const  routesConfig = require(`${ _configPath }/routes.config.js`).routes;

/** 走势图表配置 */
const  trendConfig = require(`${ _configPath }/chart/chart.classify.config.js`).config;

/** 遗漏图表配置 */
const  omissionConfig = require(`${ _configPath }/omission/omission.classify.config.js`).config;

/** 专家杀号定胆配置 */
const  shddConfig  = require(`${ _configPath }/shdd/shdd.config.js`).config;

/** 专家号码推荐配置 */
const  hmtjConfig  = require(`${ _configPath }/hmtj/hmtj.config.js`).config;

const configService = new class ConfigService {

    constructor() {
         this.config     = config;
         this.routes     = routesConfig;
         this.trend       = trendConfig;
         this.omission = omissionConfig;
         this.shdd       = shddConfig;
         this.hmtj        = hmtjConfig;
    }

    /**
     *  获取杀号定胆配置
     */
    getShddConfig(){

        return this.shdd;
    }

    /**
     *  获取号码推荐配置
     */
    getHmtjConfig(){

        return this.hmtj;
    }

    /**
     *  获取号码推荐对应彩种默认的type值;
     */
    getHmtjDefultFlot(_lotteryCode){

        return this.getDefaultCode(_lotteryCode, hmtjConfig);

    }

    /**
     *  获取杀号定胆对应彩种默认的type值;
     */
    getShddDefultFlot(_lotteryCode){

        return this.getDefaultCode(_lotteryCode, shddConfig);

    }


    /**
     *  获取图表对应彩种默认的float值;
     */
    getChartDefultFlot(_lotteryClassity){

        return this.getDefaultCode(_lotteryClassity, trendConfig);

    }

    /**
     *  获取遗漏对应彩种默认的float值;
     */
    getOmissionDefultFlot(_lotteryClassity){

        return this.getDefaultCode(_lotteryClassity, omissionConfig);
    }

    /**
     * 获取指定类型的对象
     * @param _lotteryClassity
     * @param _code
     * @param _config
     */
    getTypeName(_lotteryClassity, _code, _config){

        if(_config){

            for(let i =0; i< _config.length; i++){

                if(_config[i].child){

                    for(let j = 0; j< _config[i].child.length; j++){

                        if(_config[i].child[j].id == _lotteryClassity){

                            if(_config[i].child[j].child){

                                for(let k=0; k< _config[i].child[j].child.length; k++){

                                     if(_config[i].child[j].child[k].code == _code){

                                         return _config[i].child[j].child[k];
                                     }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * 获取默认的code
     * @param _lotteryClassity
     * @param _config
     */
    getDefaultCode(_lotteryClassity, _config){

        if(_config){

            for(let i =0; i< _config.length; i++){

                if(_config[i].child){

                    for(let j = 0; j< _config[i].child.length; j++){

                        if(_config[i].child[j].id == _lotteryClassity){

                            if(_config[i].child[j].child){

                                if(_config[i].child[j].child[0].child){

                                    return _config[i].child[j].child[0].child[0].code;

                                }else{

                                    return _config[i].child[j].child[0].code;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    getOmissionHelpConfig(_lotteryClassity, _flot, type){

        let _obj = require('../../../config/omission/' +_lotteryClassity+'/help.config.js');
        if(0 == type){
             return  _obj['cycle'] ? _obj['cycle'] : '';
        }else if(1== type){
            return  _obj['frequency'] ? _obj['frequency'] : '';
        }else{
            return  _obj[_flot]+''+ (_obj['common'] ? _obj['common'] : '');
        }

    }

    getChartConfig(_lotteryClassity, _flot){

         /**
          * 由于json当中可能会含有function函数,而函数直接序列化会丢失，所以需要在这里处理一下
          */
         let  _theadObject = JSON.stringify(require('../../../config/chart/' +_lotteryClassity+'/thead.config.js')[_flot],   (_key, _val)=> {

             if (typeof _val === 'function') {
                 return _val + '';
             }
             return _val;
         })

        return {
            theadObject: _theadObject,
            cssObject: require('../../../config/chart/' +_lotteryClassity+'/style.config.js')[_flot],
            helpObject: require('../../../config/chart/' +_lotteryClassity+'/help.config.js')[_flot],
            budgetary: require('../../../config/chart/budgetary.config.js')[_lotteryClassity]
        }
    }
}

export default configService; 