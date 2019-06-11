'use strict';

import { BaseController } from '../public/base.controller';
import { PointService } from '../../services/point/point.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import { LotteryService } from '../../services/public/lottery.service';
import { ArticleService } from '../../services/article/article.service';
import ConfigService from '../../services/public/config.service';

/**
 * 提点控制器
 */
class PointController extends BaseController {

    constructor() {
        super();
        this.service  = new PointService();
        this.lotteryService  = new LotteryService();
        this.articleService = new ArticleService();
        this.configService = ConfigService;

        this.digitArr = [
            'dlt','fc3d','pl3','pl5','qlc','qxc','ssq',
        ];
    }

    /**
     * 提点列表
     * @param {request} request 
     * @param {response} reply 
     */
    async index(request, reply) {


        let _digitArr = this.digitArr;

        let _context = {};
        let _pageIndex = request.params.pageIndex ? request.params.pageIndex : 1;
        let _groupId = request.params.groupId ? request.params.groupId : 0;
        let _lotteryCode = request.params.lotteryCode ? request.params.lotteryCode : undefined;
        let _pagePath = request.path;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'article');


        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');
        _context.articleRight = await DealWithCommonService.articleRight('high');
        _context.pagePath = _pagePath;

        let _service = new LotteryService();
        // 获取分类
        _context.highChilds = await _service.getLotteryGroupList(2);
        _context.highChilds = this.service.resultArray(_context.highChilds);

        // 深拷贝，防止因为取了缓存导致的共用问题
        if(_context.highChilds && typeof _context.highChilds === 'object') {
            let str = JSON.stringify(_context.highChilds); //系列化对象
            _context.highChilds = JSON.parse(str); //还原
        }

        if( _context.highChilds[0].id != 0) {
            _context.highChilds.unshift({name : '全部', id : 0});
            _context.highChilds.pop();
        }

        // 获取彩种树
        _context.tree = await _service.getLotteryAllTree(2);
        _context.tree = this.service.resultArray(_context.tree);
       
        // 删掉最后一个
        _context.tree[0].children.forEach(item => {
            if(item.children[0].id != 0) {
                item.children.unshift({
                    name : '全部',
                    id: 0
                })
            }
        })

        // 获取提点列表
        _context.list = await this.service.list({
            groupId: _groupId,
            pageSize: 30,
            pageIndex: _pageIndex,
            lotteryCode: _lotteryCode
        });
        _context.list = this.service.resultArray(_context.list);

        // 页码
        _context.pageIndex = _pageIndex;
        // 当前分组
        _context.groupId = _groupId;
        // 当前选择的彩种
        _context.lotteryCode = _lotteryCode;

        /** 获取对应彩种SEO */
        let _option = {
            pageCode : 'eycp_site_point_index',
            option : {
                lotteryName : '',
                type: '',
                date: ''
            }
        }

        if(_groupId != 0) {
            _context.highChilds.forEach(item => {
                if(item.id == _groupId) {
                    _option.option.lotteryName = _option.option.type = item.name;
                }
            });

            if(_lotteryCode) {
                _option.option.lotteryName = await DealWithCommonService.getLotteryNameByTree(_lotteryCode);
            }
        }

        let _seo = this.getBaseContext(_option);

        _context = Object.assign(_context, _seo);




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


        /*****************  获取彩种的走势图 *****************/
        /**  判断当前选择的彩种类型 */
        let  _lotteryClassify;
        if(request.params.groupId == '0'){

            _lotteryClassify = '0'

        }else if(request.params.groupId == '1'){

            _lotteryClassify = '11x5';

        }else if(request.params.groupId == '2'){

            _lotteryClassify = 'k3';

        }else if(request.params.groupId == '3'){

            _lotteryClassify = 'kl10'

        }else if(request.params.groupId == '4'){

            _lotteryClassify = 'ssc'

        }

        _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassify);

        _context.lotteryAwardData = this.lotteryService.resultForm(await this.lotteryService.getAwardData(_context.lotteryCode));


        /** 列表中因为右侧获取开奖结果缺了lotteryName*/
        _context.lotteryName = _context.lotteryAwardData != null ? _context.lotteryAwardData.lotteryName : '';


        /*************************************  seo资讯 *****************************************/
        _context = Object.assign(_context, await this.getSeoArtcle(request, reply));


        /*****************  获取最新资讯，热门文章以及获取对应的彩种的走势图 *****************/
        /******************************  最新资讯，热门文章  不挂code值，因此就不需要转参数2了 **************************/
        let  _newArticleList;
        _newArticleList = await this.getMoreArticleList([6], [], request, reply);

        _newArticleList.rmzx = _newArticleList.zxzx;
        _context = Object.assign(_context, _newArticleList);


        return this.render(`point/index`, _context, request, reply);
    }

    /**
     * 提点详情页
     * @param {request} request 
     * @param {response} reply 
     */
    async detail(request, reply) {

        let _context = {};

        let _digitArr = this.digitArr;

        //let _pointInfo = DealWithCommonService.getPointInfo(request.params.pointId);
        // 如果是三天前的数据
        // if(_pointInfo.timeSpan >= 72) {
        //     let page = await this.service.getPage(`point/details/${_pointInfo.code}/${_pointInfo.year}/${_pointInfo.month}/${_pointInfo.day}/detail_${request.params.pointId}.html`);
        //     return this.contentHtml(page, request, reply);
            
        // }

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'article');


        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');
        _context.articleRight = await DealWithCommonService.articleRight('high');



        // 获取详情
        let _data = await this.service.detail(request.params.pointId);

        if(_data.state == 1) {
            _context.data = _data.result;
        } else {
            _context.data = {point: {}, detail: {}, days: {}}
        }

        // 非时时彩才有这些操作
        if(_context.data.point.groupId != 4 && _context.data.point.type == 1) {
            _context = Object.assign(this.service.getLastPoint(_context.data), _context);
        } else if(_context.data.point.type == 2 && _context.data.point.groupId != 4) {
            _context = Object.assign(this.service.getTodayPoint(_context.data), _context);
        } else if(_context.data.point.groupId == 4) {
            let tmp = _context.data.detail.totalList;
            let _comList = [],
                _tmpPlayType = 0,
                _tmpList = [];
            tmp.forEach(item => {
                if(item.playType != _tmpPlayType && _tmpPlayType != 0) {
                    _comList.push({
                        type: _tmpList[0].playType == 1 ? '一星' : (_tmpList[0].playType == 2 ? '二星' : '三星'),
                        list: _tmpList
                    });
                    _tmpList = [];
                }

                _tmpList.push(item);
                _tmpPlayType = item.playType;
            });
            _comList.push({
                type: _tmpList[0].playType == 1 ? '一星' : (_tmpList[0].playType == 2 ? '二星' : '三星'),
                list: _tmpList
            });
            _context.data.detail.comList = _comList;
            _context = Object.assign(this.service.getSSCPoint(_comList), _context);

        }

        // header & categoryId
        switch(_context.data.point.groupId) {
            case 1:
                _context.headerCount = 11;
                _context.categoryId = 32;
                break;
            case 2:
                _context.headerCount = 6;
                _context.categoryId = 34;
                break;
            case 3:
                _context.headerCount = 20;
                _context.categoryId = 33;
                // 广西快乐十分比较特殊
                if(_context.data.point.lotteryCode == 'gxkl10') {
                    _context.headerCount = 21;
                }
                break;
            case 4:
                _context.headerCount = 10;
                _context.categoryId = 35;
                break;
        }

        // 重新组装detail内容
        if(_context.data.detail.recommend) {
            _context.data.detail.recommend.forEach(item => {
                item.content = typeof item.content === 'string' ? item.content.split('|') : item.content;
            });
        }

        _context.articleSelection = await DealWithCommonService.articleTecBottom();

        /** 获取对应彩种SEO */
        let _option = {
            pageCode : 'eycp_site_point_detail',
            option: {
                articleTitle: _context.data.point.title,
                lotteryName : '',
                type: '',
                date: ''
            }
        }

        let _tmp = this.getBaseContext(_option);

        _context = Object.assign(_tmp, _context);
        if(_context.data && _context.data.point) {
            _context.lotteryCode = _context.data.point.lotteryCode;
        }
        _context.lotteryName = DealWithCommonService.getLotteryName(_context.lotteryCode,__province);
        _context.lastPage = request.query.page ? request.query.page : '/point/'+_context.data.point.groupId+"-"+_context.lotteryCode;



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
        /**  判断当前选择的彩种类型 */
        let  _lotteryClassify;
        let  _lotteryType;

        if((/11x5/).test(_context.lotteryCode)){

            _lotteryClassify = '11x5';
            _lotteryType = 'high';

        }else if((/k3/).test(_context.lotteryCode)){

            _lotteryClassify = 'k3';
            _lotteryType = 'high';

        }else if((/kl10/).test(_context.lotteryCode) || (/xync/).test(_context.lotteryCode)){

            _lotteryClassify = 'kl10';
            _lotteryType = 'high';

        }else if((/ssc/).test(_context.lotteryCode)){

            _lotteryClassify = 'ssc';
            _lotteryType = 'high';

        }else if((/xync/).test(_context.lotteryCode)){

            _lotteryClassify = 'kl10';
            _lotteryType = 'high';

        }else{

            _lotteryClassify = _context.lotteryCode;
            _lotteryType = 'digit';

        }
        _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassify);
        _context.chartDefultFlot = this.configService.getChartDefultFlot(_lotteryClassity);
        _context.lotteryClassify = _lotteryClassify;
        _context.lotteryType = _lotteryType;

        _context.lotteryAwardData = this.lotteryService.resultForm(await this.lotteryService.getAwardData(_context.lotteryCode));

        _context.lotteryName = _context.lotteryAwardData.lotteryName;


        return this.render(`point/detail`, _context, request, reply);

    }


    /**
     *   获取多条资讯
     */
    async getMoreArticleList(ids, lotteryCodes, request, reply){

        if(ids == undefined || typeof(ids) !='object'){

            console.error('getMoreArticleList: ids参数为空或者不是数组类型！');
            return false;
        }


        try{

            /** 热门资讯  */
            let  _rmzx_item  = [];

            /**  最新资讯 6 */
            let  _zxzx_item  = [];


            /** 获取多个分类指定记录数列表 */
            let moreArticleList                  = this.articleService.resultForm(await  this.articleService.moreArticleList({ categoryIds: ids , lotteryCodes: lotteryCodes, pageSize: 15 }));


            if(moreArticleList){

                if(moreArticleList.length >0 ){

                    moreArticleList.forEach((_val, _index, _arr)=>{

                        if(_val.categoryId == 6){

                            _zxzx_item.push(_val);

                        }else {

                            _rmzx_item.push(_val);

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


    /**
     * 最近提点
     * @param {*} request 
     * @param {*} reply 
     */
    recommend(request, reply) {
        return this.json(this.service.recommend(request.params.pageType), request, reply);
    }

    /**
     *  获取首页提点和资讯提点
     */
    async getpoint(request, reply){

        let _option = {};
        let _context = this.getBaseContext(_option);


        try{

            _context.points = this.service.resultForm(await  this.service.getRecentPoints());


            let _pointHtml = __template(this.path.join(__dirname, '../../views/template/point/pointList.component.art'), _context);


            return this.json({resultHtml: _pointHtml}, request, reply);

        }catch(ex){

            return this.lotteryService.errorMsg(ex);
        }

    }

}

module.exports = PointController;