/***********************************************************************************
 *
 *                                      资讯公告控制器;
 *
 ***********************************************************************************/

'use strict';

import { BaseController } from '../public/base.controller';
import { ArticleService } from '../../services/article/article.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';

/**
 * 公告控制器
 */
class NoticeController extends BaseController {

    constructor() {
        super();
        this.articleService = new ArticleService();

        this.digitArr = [
            'dlt','fc3d','pl3','pl5','qlc','qxc','ssq',
        ];
    }

    /**
     * 公告列表
     * @param {request} request 
     * @param {response} reply 
     */
    async index(request, reply) {


        let _option = {
            needSeo : true
        }

        let _context = this.getBaseContext(_option);

        let _pageIndex;

        let _pageSize;

        let _digitArr =  this.digitArr;

        if(request.params.pageIndex){

            _pageIndex = parseInt(request.params.pageIndex);
        }else{

           _pageIndex = 1;
        }

        if(request.query.pageCount){

            _pageSize = parseInt(request.query.pageCount);
        }else{

            _pageSize = 30;
        }

        _context.lotteryType = 'high'


        try{

            /** 获取导航信息 */
            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'article');

            _context.notices  = this.articleService.resultForm(await this.articleService.getNotices({pageIndex: _pageIndex, pageSize: _pageSize}));

            //_context.articleRight  = await DealWithCommonService.articleRight('high');

            _context.recommend = await DealWithCommonService.showRecommend(_context.lotteryType);


            /** 翻页必须要返回pageCount和pageIndex */
            _context.pageCount = _context.notices.pageCount;

            /** 翻页必须要返回pageCount和pageIndex */
            _context.pageIndex = _context.notices.pageNumber;


            /*****************   如没具体彩种的列表，开奖公告为随机一个全国彩彩种，信息保存到网页缓存，每天凌晨12点会刷新一次  ******************/
            let  _lotteryClassity = _context.lotteryClassify ? _context.lotteryClassify : _context.lotteryCode;

            let  _articleRightAward;

            _context.articleRight  = await DealWithCommonService.articleRight('high');

            _context.articleRight.award.forEach((_val, _index, _arr)=>{

                if(_lotteryClassity ==  _val.lotteryCode){

                    _articleRightAward = [_val];

                }

            });


            if(_articleRightAward == undefined){

                let _tempLotteryClassity   = _digitArr[Math.floor(Math.random()*_digitArr.length)];

                _context.articleRight.award.forEach((_val, _index, _arr)=>{

                    if(_tempLotteryClassity ==  _val.lotteryCode){

                        _articleRightAward = [_val];

                    }
                });
            }

            _context.articleRight.award = _articleRightAward;
            /*****************   如没具体彩种的列表，开奖公告为随机一个全国彩彩种，信息保存到网页缓存，每天凌晨12点会刷新一次 (END)  ******************/


            /*************************************  seo资讯 *****************************************/
            _context = Object.assign(_context, await this.getSeoArtcle(request, reply));


            /*****************  获取最新资讯，热门文章以及获取对应的彩种的走势图 *****************/
            /******************************  最新资讯，热门文章  不挂code值，因此就不需要转参数2了 **************************/
            let  _newArticleList;

            _newArticleList = await this.getMoreArticleList([6], [], request, reply);

            _newArticleList.rmzx = _newArticleList.zxzx;

            _context = Object.assign(_context, _newArticleList);


            /*****************  获取彩种的走势图 *****************/
            //_context.trend = DealWithCommonService.getTrend(this.configService.trend, _context.lotteryClassity);


            return this.render('notice/index', _context,  request, reply);

        }catch(ex){
            console.error(ex);
            return DealWithCommonService.noFound(reply);
        }


    }


    /**
     * 公告详情页
     * @param {request} request 
     * @param {response} reply 
     */
    async detail(request, reply) {


        let _option = {
            needSeo : true
        }

        let _context = this.getBaseContext(_option);

        let  _id;

        let _digitArr = this.digitArr;

        if(request.params.id){

            _id = parseInt(request.params.id);

        }else{
            console.warn('detail：公告详情id不能为空！')
        }

        _context.lotteryType = 'high';

        _context.province = __province;


        try{

            /** 获取导航信息 */
            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'article');

            //_context.articleList = await DealWithCommonService.articleBottom(37, _context.province[0].childs);
            /** 默认选中11x5，而11x5的categoryId是32 */
            _context.categoryId = 32;

            _context.articleSelection = await DealWithCommonService.articleTecBottom();

            _context.noticeDetail  = this.articleService.resultForm(await this.articleService.getNoticeDetail(_id));

            _context.articleRight  = await DealWithCommonService.articleRight('high');

            _context.recommend = await DealWithCommonService.showRecommend(_context.lotteryType);


            /*****************   如没具体彩种的列表，开奖公告为随机一个全国彩彩种，信息保存到网页缓存，每天凌晨12点会刷新一次  ******************/
            let  _lotteryClassity = _context.lotteryClassify ? _context.lotteryClassify : _context.lotteryCode;

            let  _articleRightAward;

            _context.articleRight  = await DealWithCommonService.articleRight('high');

            _context.articleRight.award.forEach((_val, _index, _arr)=>{

                if(_lotteryClassity ==  _val.lotteryCode){

                    _articleRightAward = [_val];

                }

            });


            if(_articleRightAward == undefined){

                let _tempLotteryClassity   = _digitArr[Math.floor(Math.random()*_digitArr.length)];

                _context.articleRight.award.forEach((_val, _index, _arr)=>{

                    if(_tempLotteryClassity ==  _val.lotteryCode){

                        _articleRightAward = [_val];

                    }
                });
            }

            _context.articleRight.award = _articleRightAward;
            /*****************   如没具体彩种的列表，开奖公告为随机一个全国彩彩种，信息保存到网页缓存，每天凌晨12点会刷新一次 (END)  ******************/


            /*************************************  seo资讯 *****************************************/
            _context = Object.assign(_context, await this.getSeoArtcle(request, reply));


            /*****************  获取最新资讯，热门文章以及获取对应的彩种的走势图 *****************/
            /******************************  最新资讯，热门文章  不挂code值，因此就不需要转参数2了 **************************/
            let  _newArticleList;

            _newArticleList = await this.getMoreArticleList([6], [], request, reply);

            _newArticleList.rmzx = _newArticleList.zxzx;

            _context = Object.assign(_context, _newArticleList);

            /*****************  获取彩种的走势图 *****************/
            //_context.trend = DealWithCommonService.getTrend(this.configService.trend, _context.lotteryClassity);

            return this.render('notice/detail', _context, request, reply);

        }catch(ex){

            console.error(ex);
            return DealWithCommonService.noFound(reply);
        }
    }


    /**
     *   获取多条资讯
     */
    async getMoreArticleList(request, reply){

        try{

            /** 热门资讯 5 */
            let  _rmzx_item  = [];

            /**  最新资讯 6 */
            let  _zxzx_item  = [];

            /** 获取多个分类指定记录数列表 */
            let moreArticleList                  = this.articleService.resultForm(await  this.articleService.moreArticleList({ categoryIds: [5,6] , pageSize: 15 }));

            if(moreArticleList){

                if(moreArticleList.length >0 ){

                    moreArticleList.forEach((_val, _index, _arr)=>{

                        if(_val.categoryId == 5){

                            _rmzx_item.push(_val);

                        }else if(_val.categoryId == 6){

                            _zxzx_item.push(_val);

                        }

                    });

                }
            }

            return {
                rmzx: _rmzx_item.length    >0  ?  _rmzx_item    : null,
                zxzx:  _zxzx_item.length     >0  ?  _zxzx_item     : null
            };

        }catch(ex){

            console.error(ex);
            return DealWithCommonService.noFound(reply);

        }

    }


    /**
     *  获取seo资讯
     */
    async getSeoArtcle(request, reply){

        try{

            /** 热点导航 */
            let _rddh_item = [];

            /** 猜你喜欢 */
            let _cnxh_item = [];

            /**  全国彩走势 */
            let _qgczs_item = [];

            /**  高频彩走势 */
            let _gpczs_item = [];

            let seoArticle = this.articleService.resultForm(await this.articleService.getPlanArticleList([1,2,3,4],15));

            if(seoArticle){

                seoArticle.forEach((_val, _index, _arr)=>{

                    if(_val.categoryId == 1){

                        _rddh_item.push(_val);

                    }else if(_val.categoryId == 2){

                        _cnxh_item.push(_val);

                    }else if(_val.categoryId == 3){

                        _qgczs_item.push(_val);

                    }else if(_val.categoryId == 4){

                        _gpczs_item.push(_val);
                    }

                });

            }

            return {
                rddh  : _rddh_item.length > 0   ? _rddh_item : null,
                cnxh  : _cnxh_item.length > 0   ? _cnxh_item : null,
                qgczs : _qgczs_item.length > 0 ? _qgczs_item : null,
                gpczs : _gpczs_item.length > 0 ? _gpczs_item : null,
            };

        }catch(ex){

            console.error(ex);
            return DealWithCommonService.noFound(reply);

        }

    }



}

module.exports = NoticeController;