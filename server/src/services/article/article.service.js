/****************************************************************
 *
 *                              资讯接口服务
 *
 ****************************************************************/
'use strict';

import { BaseService } from '../public/base.service';

/**
 * 资讯服务
 */
export class ArticleService extends BaseService {

    constructor() {

        super();

        this.noticePath = '/notice';
        this.adPath       = 'home'
        this.plan            = 'plan'

    }

    /**
     *  请求SEO多个分类接口
     */
    getPlanArticleList(_categoryIds, _pageSize){


        if(_categoryIds == undefined || typeof(_categoryIds) !='object'){
            return this.errorMsg(`getPlanArticleList: _categoryIds参数为空或不是数组类型！`);
        }

        let cacheOpt = this.setCache(`${this.adPath}/GetPlanArticleList/`, 0);

        _pageSize = _pageSize ? _pageSize : 10;

        /** 参数 */
        let httpOpt = {
            url: `${this.plan}/GetPlanArticleList`,
            qs: {
                categoryIds: _categoryIds,
                pageSize: _pageSize
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);

    }


    /**
     *  请求SEO单个分类接口
     */
    getPlanArticlePageList(_categoryIds, _pageIndex, _pageSize){


        if(_categoryIds == undefined || typeof(_categoryIds) !='object'){
            return this.errorMsg(`getPlanArticlePageList: _categoryIds参数为空或不是数组类型！`);
        }

       _pageIndex = _pageIndex ? _pageIndex : 1;

       _pageSize   = _pageSize ? _pageSize : 10;

        let cacheOpt = this.setCache(`${this.adPath}/GetPlanArticlePageList/`, 8000);

        /** 参数 */
        let httpOpt = {
            url: `${this.plan}/GetPlanArticlePageList`,
            qs: {
                categoryIds: _categoryIds,
                pageIndex: _pageIndex,
                pageSize: _pageSize
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);

    }



    /**
     *  获取广告接口;
     *  @param: 广告code,多个用逗号分隔 (string)
     */
    getAdData(_codes){

         if(_codes == undefined || typeof(_codes) !='string'){
             return this.errorMsg(`getAd: _code参数为空或不是字符类型！`);
         }

        let cacheOpt = this.setCache(`${this.adPath}/GetAdData/`, 0);

        /** 参数 */
        let httpOpt = {
            url: `${this.adPath}/GetAdData`,
            qs: {
                codes: _codes
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 3);

     }

    /**
     *  获取公告详情;
     *  @param: id (number)
     */
    getNoticeDetail(_id){

        if( _id == undefined || typeof(_id) !='number' ){

            return this.errorMsg(`getNoticeDetail: _id参数为空或不是数字类型！`);
        }

        let cacheOpt = this.setCache(`${this.noticePath}/getNoticeDetail/`, 0);

        /** 参数 */
        let httpOpt = {
            url: `${this.noticePath}/getNoticeDetail`,
            qs: {
               id: _id
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);

    }

    /**
     * 获取公告列表
     *  _parameter:{
     *      pageIndex: xxxx(number)---必填,
     *      pageSize: xxx(number)---选填
     *  }
     */
    getNotices(_parameter){


        if(_parameter){

            if(!_parameter.pageIndex || typeof(_parameter.pageIndex) != 'number'){
                return this.errorMsg(`getNotices: _parameter字段pageIndex为空或不是数字类型！`);
            }

            if(!_parameter.pageSize || typeof(_parameter.pageSize) != 'number'){
                return this.errorMsg(`getNotices: _parameter字段pageSize为空或不是数字类型！`);
            }

            let cacheOpt = this.setCache(`${this.noticePath}/getNotices/`, 0);

            /** 参数 */
            let httpOpt = {
                url: `${this.noticePath}/getNotices`,
                qs: {
                    pageIndex: _parameter.pageIndex,
                    pageSize: _parameter.pageSize
                }
            };

            return this.httpGet(httpOpt, cacheOpt, 2);

        }else{

            return this.errorMsg(`getNotices: 缺少参数, 参数不能为空！`);

        }

    }


    /**
     *  获取多个分类多个彩种返回总记录数列表;
     *  _parameter:{
     *      categoryIds: xxxx(array)---必填,
     *      pageSize: xxx(number)---选填
     *  }
     */
    getTotalArticleList(_parameter){


        if(_parameter){

            if(_parameter.categoryIds && typeof(_parameter.categoryIds) == 'object'){

                if(_parameter.categoryIds.length == 0){

                    return this.errorMsg(`getTotalArticleList: 参数categoryIds是一个数组, 数组元素不能为空！`);

                }

            }else{
                return this.errorMsg(`getTotalArticleList: 参数categoryIds, 参数不能为空！`);
            }

            if(!_parameter.pageSize){
                _parameter.pageSize = 10;
            }

        }else{

            return this.errorMsg(`getTotalArticleList: 缺少参数, 参数不能为空！`);

        }

        let cacheOpt = this.setCache(`article/getTotalArticleList/`, 0);
        let  _param    = {};

        if(_parameter.lotteryCodes){

            _param.lotteryCodes = _parameter.lotteryCodes;
        }

        _param.categoryIds = _parameter.categoryIds;
        _param.pageSize      = _parameter.pageSize;


        /** 参数 */
        let httpOpt = {
            url: `article/GetTotalArticleList`,
            qs: _param
        };

        return this.httpGet(httpOpt, cacheOpt, 2);

    }



    /**
     *  获取首页资讯列表集合;
     *  _parameter:{
     *      categoryIds: xxxx(array)---必填,
     *      pageSize: xxx(number)---选填
     *  }
     */
    moreArticleList(_parameter){


        if(_parameter){

            if(_parameter.categoryIds && typeof(_parameter.categoryIds) == 'object'){

                if(_parameter.categoryIds.length == 0){

                    return this.errorMsg(`moreArticleList: 参数categoryIds是一个数组, 数组元素不能为空！`);

                }

            }else{
                return this.errorMsg(`moreArticleList: 参数categoryIds, 参数不能为空！`);
            }

            if(!_parameter.pageSize){
                _parameter.pageSize = 10;
            }

        }else{

            return this.errorMsg(`moreArticleList: 缺少参数, 参数不能为空！`);

        }

        let cacheOpt = this.setCache(`article/getArticleList/`, 0);
        let  _param    = {};

        if(_parameter.lotteryCodes && _parameter.lotteryCodes.length > 0){

            _param.lotteryCodes = _parameter.lotteryCodes;
        }

        _param.categoryIds = _parameter.categoryIds;
        _param.pageSize      = _parameter.pageSize;


        /** 参数 */
        let httpOpt = {
            url: `article/GetArticleList`,
            qs: _param
        };

        return this.httpGet(httpOpt, cacheOpt, 2);

    }

    /**
     * 获取资讯列表
     * @param {object}
     * _parameter: {
     *    categoryId: xxx(number)---必填，
     *    lotteryCode: xxx(string)---选填，
     *    pageIndex: xxx(number)---选填,
     *    pageSize: xxx(number)---选填,
     * }
     * categoryId枚举如下:
     * 全部 = 0,
     * 彩票资讯 = 1,
     * 购彩技巧 = 2,
     * 高频彩 =3,
     * 数字彩 = 4,
     * 热门资讯 = 5,
      *最新资讯 = 6,
     * 更新日志 = 7,
     *技巧资讯 = 8,
     * 新增数据 =9,
     * 玩法规则=10,
     * 玩法介绍=11,
     * 迭代数据 = 12,
     * 玩法规则介绍=13,
     * 帮助中心=14,
     * 常见问题 = 15,
     * 网站问题 = 16,
     * 联系我们页面=22,
     * 关于我们=23,
     * 关于开奖视频=24,
     * 开奖视频调用=25,
     * 软件定制=26,
     * 网站地图=27,
     * 法律声明=28,
     * 联系我们=29,
     * 应用简介=30,
     * 玩法说明=31
     * 十一选五技巧=32,
     * 快乐十分技巧=33,
     * 快三技巧=34,
     * 时时彩技巧=35,
     * 其它彩种技巧=36
     * 数字彩巧=37
     * 方案计划 =38
     * 预测推荐 = 39
     * 杀号定胆 = 40
     * 免费推荐 =41
     */
    articleList(_parameter = { categoryId: 1, lotteryCode: null , pageIndex: 1, pageSize: 10 }) {

        /** 验证参数 */
        if(_parameter){

            let  _categoryIdArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];

            if(_parameter.categoryId !=undefined){

                if(!this.contains(_categoryIdArray, _parameter.categoryId)){

                    return this.errorMsg(`articleList: 参数categoryId枚举不在取值范围内！`);

                }

            }else{
                return this.errorMsg(`articleList: 参数categoryId不存在！`);
            }

            /** 页数页码不影响业务，给予默认值 */
            if (_parameter.pageIndex && !/^[1-9][0-9]*$/.test(_parameter.pageIndex)) {

                return this.errorMsg(`articleList: pageIndex必须为数字类型！`);

            }

            // 如果不存在则赋予默认值
            if(!_parameter.pageIndex) {
                _parameter.pageIndex = 1;
            }

            if (_parameter.pageSize && !/^[1-9][0-9]*$/.test(_parameter.pageSize)) {

                return this.errorMsg(`articleList: pageSize必须为数字类型！`);

            }

            // 如果不存在则赋予默认值
            if(!_parameter.pageSize) {
                _parameter.pageSize = 10;
            }

        }else{

            return this.errorMsg(`articleList: 参数不存在！`);

        }

        let cacheOpt = this.setCache(`article/getArticles/${_parameter.categoryId}/${_parameter.lotteryCode}/${_parameter.pageIndex}/${_parameter.pageSize}`, 3000);

        /** 参数 */
        let httpOpt = {
            url: `article/getArticles`,
            qs: {
                categoryId: _parameter.categoryId,
                pageIndex: _parameter.pageIndex,
                pageSize: _parameter.pageSize
            }
        };

        if(_parameter.lotteryCode){
            httpOpt.qs.lotterycode = _parameter.lotteryCode
        }

        return this.httpGet(httpOpt, cacheOpt, 2);
    }

    /**
     *  获取多个分类多个彩种返回总记录数列表
     */



    /**
     * 获取资讯详情
     * @param {int} id 资讯ID
     */
    detail(id) {

        // 判断id是否为指定的可转换格式
        if (!/^[0-9]+$/.test(id)) {
            // 返回异常内容
            return this.errorMsg(`传入的参数ID值为${id},必须为数字或者数字字符串`);
        }

        // 资讯详情设置为缓存60秒
        let cacheOpt = this.setCache(`article/getArtcileDetail/${id}`, 60000);

        // 参数
        let httpOpt = {
            url: `article/getArtcileDetail`,
            qs: {
                id: id,
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }

    /**
     * 获取资讯彩种
     */
    lotteryType() {
        // 资讯彩种设置为缓存60秒
        let cacheOpt = this.setCache(`article/getArticleLotteries`, 60000);

        // 参数
        let httpOpt = {
            url: `article/getArticleLotteries`
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }

    
    /**
     * 获取分类资讯
     * @param {int} categoryId 
     */
    articleCategory(categoryId) {
        // 判断id是否为指定的可转换格式
        if (!/^[0-9]+$/.test(categoryId)) {
            // 返回异常内容
            return this.errorMsg(`传入的参数ID值为${categoryId},必须为数字或者数字字符串`);
        }

        // 资讯详情设置为缓存60秒
        let cacheOpt = this.setCache(`/article/GetCategoryList/${categoryId}`, 0);

        // 参数
        let httpOpt = {
            url: `/article/GetCategoryList`,
            qs: {
                categoryId: categoryId,
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }
}
