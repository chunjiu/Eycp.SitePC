import dealWithCommonService from "./dealWithCommon.service";

/***********************************************************************************
 *
 *           seo配置服务;
 *
 ***********************************************************************************/
'use strict';

const seoService = new class SeoService {

    constructor() {
        // this.seo = require('../../lib/Json').readFileSync(require('path').join(__dirname, '../../../config/seo.json'));
        if(!global.__Seo) {
            global.__Seo = {};
        }
        this.seo = deepCopy(global.__Seo);
    }

    /**
     * 获取SEO内容
     * @param {*} pageCode 页面代码
     * @param {*} option 需要替换的值有website: [$WEBSITE],lotteryName:[$LOTTERYNAME],articleTitle:[$ARTICLETITLE]
     * @param: 参数3为覆盖SEO的配置，因为getSeo会去配置里面读seo （注意这个是一个对象类型）;
     */
    getSeo(pageCode, option, _coverSeoConfig){


        if(_coverSeoConfig !=null){
            if(typeof(_coverSeoConfig) !='object'){
                console.error('getSeo: 注意: _coverSeoConfig这个参数必须是一个对象类型！');
                return false;
            }
        }

        // 不管如何有来就执行，如果没有结果则取上一版本的,如果缓存过期会自动获取接口更新
        dealWithCommonService.getSeoJson().then(_result => {
            if(!_result.state) {
                this.seo = typeof _result == 'string' ? JSON.parse(_result) : _result;
            } else {
                // 如果有异常仍然取前一个版本的
                this.seo = deepCopy(global.__Seo);
            }
        }).catch(ex => {
            console.error(`seo error: ${ex}`);
        });

        let _tmp = deepCopy(this.seo);
        let _siteName = '鳄鱼彩票';
        
        let _result = {};
        
        if(_tmp.siteSeo) {
            
            // 如果pageCode都没传，默认取首页
            if(!pageCode) {
                pageCode = 'eycp_site_index';
                option = {
                    website : _siteName
                }
            }


            // 赋予网站名称
            if(!option) {

                option = {
                    website : _siteName
                }
            } else if(!option.siteName) {
                option.website = _siteName;
            }
            
            // 遍历获取SEO对象
            for(let item of _tmp.siteSeo) {
                if(item.pageCode == pageCode) {

                    _result = item;

                    /** 如果这个值是存在的话，则对seo进行覆盖处理 */
                    if(_coverSeoConfig !=null){
                        _result = Object.assign(_result, _coverSeoConfig);
                    }

                    break;
                }
            }

            // 如果存在于SEO文件中才进行替换内容
            if(_result.pageCode && option) {

                if(_result.title){

                    _result.title = _result.title.replace(/\[\$WEBSITE\]/g, option.website)
                        .replace(/\[\$LOTTERYNAME\]/g, option.lotteryName)
                        .replace(/\[\$ARTICLETITLE\]/g, option.articleTitle)
                        .replace(/\[\$TYPE\]/g, option.type)
                        .replace(/\[\$DATE\]/g, option.date)
                        .replace(/\[\$ISSUENO\]/g, option.issueno)
                        .replace(/\[\$SPECIALIST\]/g, option.specialist);
                }


                if(_result.keyword){

                    _result.keyword = _result.keyword.replace(/\[\$WEBSITE\]/g, option.website)
                        .replace(/\[\$LOTTERYNAME\]/g, option.lotteryName)
                        .replace(/\[\$ARTICLETITLE\]/g, option.articleTitle)
                        .replace(/\[\$TYPE\]/g, option.type)
                        .replace(/\[\$DATE\]/g, option.date)
                        .replace(/\[\$ISSUENO\]/g, option.issueno)
                        .replace(/\[\$SPECIALIST\]/g, option.specialist);
                }

                if(_result.descripion){

                    _result.descripion = _result.descripion.replace(/\[\$WEBSITE\]/g, option.website)
                        .replace(/\[\$LOTTERYNAME\]/g, option.lotteryName)
                        .replace(/\[\$ARTICLETITLE\]/g, option.articleTitle)
                        .replace(/\[\$TYPE\]/g, option.type)
                        .replace(/\[\$DATE\]/g, option.date)
                        .replace(/\[\$ISSUENO\]/g, option.issueno)
                        .replace(/\[\$SPECIALIST\]/g, option.specialist);
                }
            }
        }

        return _result;
    }

} 

/**
 * 深拷贝
 * @param {*} obj 
 */
function deepCopy(obj){
    var str, newobj = (obj!= undefined && obj.constructor === Array) ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else {
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    }
    return newobj;
}



export default seoService;