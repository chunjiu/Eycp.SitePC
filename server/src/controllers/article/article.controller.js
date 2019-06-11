/***********************************************************************************
 *
 *                                      资讯文章控制器;
 *
 ***********************************************************************************/

'use strict';

import { BaseController } from '../public/base.controller';
import { ArticleService } from '../../services/article/article.service';
import { LotteryService } from '../../services/public/lottery.service';
import { PointService }  from  '../../services/point/point.service';
import { PlanService } from '../../services/plan/plan.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import ConfigService from '../../services/public/config.service';

/**
 * 资讯控制器
 */
class ArticleController extends BaseController {

    constructor() {

        super();

        this.articleService   = new ArticleService();
        this.lotteryService  = new LotteryService();
        this.planService     = new  PlanService();
        this.pointService = new PointService();
        this.configService = ConfigService;

        this.digitArr = [
            'dlt','fc3d','pl3','pl5','qlc','qxc','ssq',
        ];

        this.highArr = [
            '11x5','k3','ssc','hn481','kl8','kl10',
            'gxkl10','pk10','ssl','sxytdj','xync'
        ];

    }

    /**
     * 资讯首页
     * @param {request} request 
     * @param {response} reply 
     */
    async index(request, reply) {


        /** 基础上下文参数 */
        let _option = {
            pageCode : 'eycp_site_article_index'
        };

        let _context = this.getBaseContext(_option);

        let _digitArr = this.digitArr;

		_context.province = __province;

        _context.lotteryType = 'high';

        try{

            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'article');

            /** 广告 */
           _context.adBanner   = this.articleService.resultForm(await this.articleService.getAdData('eycp_article_banner'));


            /** 追号推荐 */
            _context.recentplan = this.planService.resultForm(await this.planService.recommend());

            let  typeArray = ["任三", "和值", "任三", "一星"];
            let  pageTypeArray = {
                '_11x5': [
                    {name: '任一', type: '1'},
                    {name: '任二', type: '2'},
                    {name: '任三', type: '3'},
                    {name: '任四', type: '4'},
                    {name: '任五', type: '5'},
                    {name: '任六', type: '6'},
                    {name: '任七', type: '7'},
                    {name: '任八', type: '8'}
                ],
                'k3': [
                    {name: '和值', type: '1'},
                    {name: '二不同', type: '2'},
                ],
                'kl10': [
                    {name: '任一', type: '1'},
                    {name: '任二', type: '2'},
                    {name: '任三', type: '3'},
                    {name: '任四', type: '4'},
                    {name: '任五', type: '5'},
                    {name: '任六', type: '6'},
                    {name: '任七', type: '7'},
                    {name: '任八', type: '8'}
                ],
                'ssc': [
                    {name: '一星', type: '1'},
                    {name: '二星', type: '2'},
                    {name: '三星', type: '3'},
                ],
                'gxkl10' : [
                    {name: '直特', type: '1'},
                    {name: '直一', type: '2'},
                    {name: '直二', type: '3'}
                ]
            }

            if(_context.recentplan){
                for(let i =0; i<_context.recentplan.length;i++){
                    //_context.recentplan[i].name = await DealWithCommonService.getLotteryNameForLotteryAllTree(_context.recentplan[i].lotteryCode,__lotteryAllTree);
                    _context.recentplan[i].type = typeArray[_context.recentplan[i].groupId - 1];


                    /** 如果是11选5, 添加分页类型 */
                    if((/11x5/g.test(_context.recentplan[i].lotteryCode))){

                        for(let  j=0; j< pageTypeArray._11x5.length; j++){
                            if(_context.recentplan[i].type == pageTypeArray._11x5[j].name){
                                _context.recentplan[i].pageType = pageTypeArray._11x5[j].type;
                                break;
                            }
                        }
                        /** 如果是快3, 添加分页类型 */
                    }else if(/k3/g.test(_context.recentplan[i].lotteryCode)){

                        for(let  j=0; j< pageTypeArray.k3.length; j++){
                            if(_context.recentplan[i].type == pageTypeArray.k3[j].name){
                                _context.recentplan[i].pageType = pageTypeArray.k3[j].type;
                                break;
                            }
                        }
                        /** 如果是快乐十分, 添加分页类型 */
                    }else if(/kl10/g.test(_context.recentplan[i].lotteryCode) || /xync/g.test(_context.recentplan[i].lotteryCode)){

                        for(let  j=0; j< pageTypeArray.kl10.length; j++){
                            if(_context.recentplan[i].type == pageTypeArray.kl10[j].name){
                                if(_context.recentplan[i].lotteryCode == 'gxkl10') {
                                    _context.recentplan[i].type = pageTypeArray.gxkl10[j].name
                                    _context.recentplan[i].pageType = pageTypeArray.gxkl10[j].type;
                                } else {
                                    _context.recentplan[i].pageType = pageTypeArray.kl10[j].type;
                                }
                                break;
                            }
                        }
                        /** 如果是时时彩, 添加分页类型 */
                    }else if(/ssc/g.test(_context.recentplan[i].lotteryCode)){

                        for(let  j=0; j< pageTypeArray.ssc.length; j++){
                            if(_context.recentplan[i].type == pageTypeArray.ssc[j].name){
                                _context.recentplan[i].pageType = pageTypeArray.ssc[j].type;
                                break;
                            }
                        }
                    }

                }
            }


            /** 每日提点 */
            _context.points                  =  this.pointService.resultForm(await  this.pointService.getRecentPoints());


            /** 获取多个分类指定记录数列表 */
            _context.hotArticle  = [];
            _context.newArticle = [];
            _context.newSkill     = [];

            /** 最新技巧 */
            _context.newSkill                      =  this.articleService.resultForm(await  this.articleService.getTotalArticleList({ categoryIds: [32, 33, 34, 35] , pageSize: 8 }));

            /**  热门资讯和最新资讯 */
            _context.moreArticleList           = this.articleService.resultForm(await  this.articleService.moreArticleList({ categoryIds: [5,6] , pageSize: 8 }));

            if(_context.moreArticleList) {

                for (var i = 0; i < _context.moreArticleList.length; i++) {

                    if (_context.moreArticleList[i].categoryId == 5) {

                        /** 热门资讯 */
                        _context.hotArticle.push(DealWithCommonService.setArtcleClassity(_context.moreArticleList[i], _context.province));

                    }else if (_context.moreArticleList[i].categoryId == 6) {

                        /** 最新资讯 */
                        _context.newArticle.push(DealWithCommonService.setArtcleClassity(_context.moreArticleList[i], _context.province));

                    }

                }

            }


            /*********************************************************
             *
             *     读取全国彩的专家预测39，免费参推荐41，杀号定胆40，技巧37
             *
             *********************************************************/
             let  _articleArrayList           = this.articleService.resultForm(await  this.articleService.moreArticleList({ categoryIds: [37, 39, 40, 41] , lotteryCodes: _digitArr, pageSize: 8 }));

             _context.articleArrayList    =  DealWithCommonService.articleClassification(_articleArrayList);


            /*********************************************************
             *
             *    全国彩走势分类
             *
             *********************************************************/
            let  _chartConfig = this.configService.trend;

            let _chartList = [].concat(_chartConfig[0].child, _chartConfig[1].child);

            let  _chartArray = [];

            _chartList.forEach((_val,_index,_arr)=>{

                    let  _slist =[];

                    if(_val.child){

                        _val.child.forEach((_sval, _sindex, _sarr)=>{

                            if(_sval.child){
                                _slist = [].concat(_slist, _sval.child)
                            }
                        })

                        _chartArray.push({
                            name:  _val.name,
                            id:        _val.id,
                            chartName: _val.child[0].name,
                            chart:   _slist
                        });

                    }else{

                        _chartArray.push({
                            name:  _val.name,
                            id:        _val.id,
                            chart:   _slist
                        });

                    }
            })
           _context.chartArray = _chartArray;



            /*****************  查询详情的索引  *******************/
            let  allIndex;

            for(var i=0; i<_context.province.length; i++){
                if(_context.province[i].name == '全国'){
                    allIndex = i;
                    break;
                }
            }

            /** 数字彩技巧 */
            _context.articleList = await DealWithCommonService.articleBottom(37, _context.province[allIndex].childs);

            _context.articleRight  = await DealWithCommonService.articleRight('high');

            /** 获取系统时间 */
            _context.systime = _context.articleRight.systime;

            _context.recommend = await DealWithCommonService.showRecommend(_context.lotteryType);
            //友情链接
             _context.friendlink = await this.lotteryService.getFriendLinkList("article");


             /********************** 热点导航 ********************/
            let _rddhArticle = this.articleService.resultForm(await this.articleService.getPlanArticleList([1],15));

            if(_rddhArticle){
               _context.rddh = _rddhArticle;
            };


        }catch(ex){
            console.error(ex);
        }


        return this.render('article/index', _context,  request, reply);

    }



    /**
     * 资讯详情页
     * @param {request} request 
     * @param {response} reply 
     */
    async detail(request, reply) {

        let _context = {};

        let  _id;
        let  _categoryId;

        /** 5和6是资讯类型 */
        let articleType = [5,6];

        /** 技巧类型 */
        let skillType     = [32,33,34,35,36,37];

        /** 专家推荐 */
        let   expertRecommendation = [39];

        /** 杀号定胆 */
        let  killAndControlTheGallbladder = [40];

        /** 免费推荐 */
        let  freeRecommendation = [41];


        let _digitArr = this.digitArr;

        let _highArr = this.highArr;


        if(request.params.id){

            _id = parseInt(request.params.id);

        }else{
            console.warn('detail：资讯详情id不能为空！')
        }

        if(request.params.categoryId){

            _categoryId = parseInt(request.params.categoryId);

            if(DealWithCommonService.contains(articleType, _categoryId)){

                 _context.type = '资讯';

            }else if(DealWithCommonService.contains(skillType, _categoryId)){

                 _context.type = '技巧';

            }else if(DealWithCommonService.contains(freeRecommendation, _categoryId)){

                _context.type = '免费推荐';

            }else if(DealWithCommonService.contains(expertRecommendation, _categoryId)){

                _context.type = '专家推荐';

            }else if(DealWithCommonService.contains(killAndControlTheGallbladder, _categoryId)){

                _context.type = '杀号定胆';
            }

        }else{
            console.warn('detail：资讯详情categoryId不能为空！')
        }

        _context.province = __province;

        try{

            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'article');

            _context.detail  = this.articleService.resultForm(await this.articleService.detail(_id));

            if(_context.detail == undefined){
                console.error("文章id可能出现问题，请检查一下文章id为："+_id +'这篇文章是不是存在问题！');
            }

           _context.lotteryName = _context.detail.lotteryName !=undefined ? _context.detail.lotteryName : '';

           _context.lotteryCode = _context.detail.lotteryCode ? _context.detail.lotteryCode: '';

            _context.lotteryType = DealWithCommonService.getLotteryClassify(_context.lotteryCode, _context.province);

            _context.isHigh = _context.detail.isHigh ? _context.detail.isHigh: false;


            if(_context.isHigh){

                if(/11x5/.test(_context.lotteryCode)){

                    _context.categoryId = 32;
                    _context.codeType = '11x5';
                    _context.lotteryClassify = '11x5';

                }else if(/kl10/.test(_context.lotteryCode) || /xync/.test(_context.lotteryCode)){

                    _context.categoryId = 33;
                    _context.codeType = 'kl10';
                    _context.lotteryClassify = 'kl10';

                }else if(/k3/.test(_context.lotteryCode)){

                    _context.categoryId = 34;
                    _context.codeType = 'k3';
                    _context.lotteryClassify = 'k3';

                }else if(/ssc/.test(_context.lotteryCode)){

                    _context.categoryId = 35;
                    _context.codeType = 'ssc';
                    _context.lotteryClassify = 'ssc';

                 /**  属于其他 */
                }else{

                    _context.categoryId = 36;
                    _context.codeType = 'other';

                    /** 全国彩没有彩种类型 */
                   _context.lotteryClassity = _context.lotteryCode;

                }

                _context.articleSelection = await DealWithCommonService.articleTecBottom();

            }else{

                _context.categoryId = 37;

                _context.codeType = _context.lotteryCode;

                _context.lotteryClassity = _context.lotteryCode;

                /*****************  查询详情的索引  *******************/
                let  allIndex;

                for(var i=0; i<_context.province.length; i++){
                    if(_context.province[i].name == '全国'){
                        allIndex = i;
                        break;
                    }
                }

                _context.articleList = await DealWithCommonService.articleBottom(_context.categoryId, _context.province[allIndex].childs);

            }




            /** 如果这个彩种类型没有得时候，就默认为高频彩类型 */
            if(_context.lotteryType == undefined){
                _context.recommend = await DealWithCommonService.showRecommend('high');
            }else{
                _context.recommend = await DealWithCommonService.showRecommend(_context.lotteryType);
            }


            let _option = {
                pageCode : 'eycp_site_article_details',
                option : {
                    keyword: _context.detail.seoKeyword ? _context.detail.seoKeyword : '',
                    descripion: _context.detail.seoDesc ? _context.detail.seoDesc : ''
                }
            }

            let _seo = this.getBaseContext(_option, {
                   title:_context.detail.title ? _context.detail.title+' - 鳄鱼彩票' : '',
                   keyword: _option.option.keyword,
                   descripion: _option.option.descripion
            });


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


            /*************************************  seo资讯 *****************************************/
            _context = Object.assign(_context, await this.getSeoArtcle(request, reply));


            /*****************  获取最新资讯，热门文章以及获取对应的彩种的走势图 *****************/
            let  _newArticleList;

            /******************************  最新资讯，热门文章  不挂code值，因此就不需要转参数2了 **************************/
            if(_categoryId ==6 ){

                _newArticleList = await this.getMoreArticleList([6], [], request, reply);

                _newArticleList.rmzx = _newArticleList.zxzx;

            }else{

                _newArticleList = await this.getMoreArticleList([_categoryId, 6], [], request, reply);
            }

            _context = Object.assign(_context, _newArticleList);


            /*****************  获取彩种的走势图 *****************/
            _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);


            /** 默认的遗漏flot值 */
            if(_context.lotteryCode == 'xync'){

                _context.chartDefultFlot = this.configService.getChartDefultFlot('kl10');
            }else{

                _context.chartDefultFlot = this.configService.getChartDefultFlot(_lotteryClassity);
            }

            _context.lotteryAwardData = this.lotteryService.resultForm(await this.lotteryService.getAwardData(_context.lotteryCode));

            _context.lotteryClassify = _lotteryClassity;

            return this.render('article/detail', _context, request, reply);

        }catch(ex){

            console.error(ex);
            return  DealWithCommonService.noFound(reply);
        }

    }


    /**
     *  获取开奖公告
     */
    async getArticleNotice(request, reply){

        let _lotteryCode =  request.query.code;
        let _context       =  {};

        try {

            _context.articleRight  = await DealWithCommonService.articleRight('high');

            _context.articleRight.award.forEach((_val, _index, _arr)=>{

                if(_lotteryCode ==  _val.lotteryCode){

                    _context.articleRightAward = [_val];
                }
            });

            return this.json(_context.articleRightAward, request, reply);

        }catch (ex){
            console.error(ex);
            return  DealWithCommonService.noFound(reply);
        }

    }


    /**
     *  获取开奖走势图表的数据
     */
    async getArticleChart(request, reply){

        let _lotteryCode =  request.query.code;

        let _context       =  {};

        try {

            _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryCode);
            _context.lotteryCode = _lotteryCode;

            let _trend = __template(this.path.join(__dirname, '../../views/template/components/articleRightChartList.component.art'), _context);

            let  _chartDefultFlot = this.configService.getChartDefultFlot(_lotteryCode);

            return this.json({
                trend: _trend,
                chartDefultFlot:_chartDefultFlot
            }, request, reply);

        }catch (ex){
            console.error(ex);
            return  DealWithCommonService.noFound(reply);
        }

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
            return  DealWithCommonService.noFound(reply);

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
     * 资讯列表
     * @param {request} request 
     * @param {response} reply 
     */
    async list(request, reply) {

        let _context = {};
        let _pageIndex;
        let _pageSize;
        let _categoryId;

        /** 5和6是资讯类型 */
        let articleType = [5,6];

        /** 技巧类型 */
        let skillType     = [32,33,34,35,36,37];

        /** 专家推荐 */
        let   expertRecommendation = [39];

        /** 杀号定胆 */
        let  killAndControlTheGallbladder = [40];

        /** 免费推荐 */
        let  freeRecommendation = [41];

        let _digitArr = this.digitArr;


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


        if(request.params.categoryId){

            _categoryId = parseInt(request.params.categoryId);


            if(DealWithCommonService.contains(articleType, _categoryId)){
                _context.type = '资讯列表';

            }else if(DealWithCommonService.contains(skillType, _categoryId)){

                _context.type = '技巧列表';

            }else if(_categoryId == 8){

                _context.type = '全部列表';

            }else if(DealWithCommonService.contains(freeRecommendation, _categoryId)){

                _context.type = '免费推荐';

            }else if(DealWithCommonService.contains(expertRecommendation, _categoryId)){

                _context.type = '专家推荐';

            }else if(DealWithCommonService.contains(killAndControlTheGallbladder, _categoryId)){

                _context.type = '杀号定胆';
            }


        }else{

            _categoryId = 8;
        }

        if(_context.type == undefined){
            _context.type = '技巧列表'
        }


        _context.categoryId = _categoryId;

        _context.classifyCode = request.params.code;

        _context.lotteryType = 'high';
		
		_context.province = __province;

        _context.articleClassify = this.configService.config.articleClassify;

        try{

            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'article');

            let  articleList

            /** 数字彩系列 */
           if(_categoryId == 37 || _categoryId == 39 || _categoryId == 40 || _categoryId == 41){

               let  _classifyCode;
               if(_context.classifyCode == '0'){
                   _classifyCode = '';
               }else{
                   _classifyCode = _context.classifyCode
               }


                articleList  = this.articleService.resultForm(await this.articleService.articleList({
                    categoryId: _categoryId,
                    lotteryCode: _classifyCode,
                    pageIndex: _pageIndex,
                    pageSize: _pageSize
                }));


            }else{

                articleList  = this.articleService.resultForm(await this.articleService.articleList({
                    categoryId: _categoryId,
                    lotteryCode: '',
                    pageIndex: _pageIndex,
                    pageSize: _pageSize
                }));

            }

            _context.articleList        =  articleList;

            _context.articleList.data = DealWithCommonService.setArtcleClassity(articleList.data,  _context.province);

            _context.recommend = await DealWithCommonService.showRecommend(_context.lotteryType);


            /** 翻页必须要返回pageCount和pageIndex */
            _context.pageCount = _context.articleList.pageCount;

            /** 翻页必须要返回pageCount和pageIndex */
            _context.pageIndex = _context.articleList.pageNumber;

            let _listCode = request.params.code;
            let _option = {
                needSeo : true
            }
            if(_listCode === '0') {
                _option.pageCode = 'eycp_site_article_index';
            } else {
                _option.pageCode = 'eycp_site_article_list_code';
                let _tmpName = '';
                _context.articleClassify.forEach(item => {
                    if(item.code === _listCode) {
                        _tmpName = item.name;
                        _context.type = _tmpName +_context.type;
                    }
                });
                _option.option =  {
                    lotteryName: _tmpName
                }
            }

            let _seo = this.getBaseContext(_option);

            _context = Object.assign(_context, _seo);



            /*****************   如没具体彩种的列表，开奖公告为随机一个全国彩彩种，信息保存到网页缓存，每天凌晨12点会刷新一次  ******************/
            let  _lotteryClassity = _context.classifyCode;

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
            let  _seoArtcle = await this.getSeoArtcle(request, reply);

            /*****************  获取最新资讯，热门文章以及获取对应的彩种的走势图 *****************/
            /******************************  最新资讯，热门文章  不挂code值，因此就不需要转参数2了 **************************/
            let  _newArticleList;

            if(_categoryId ==6 ){

                _newArticleList = await this.getMoreArticleList([6], [] , request, reply);
            }else{

                _newArticleList = await this.getMoreArticleList([_categoryId, 6], [], request, reply);
            }

            _context = Object.assign(_context, _newArticleList, _seoArtcle);


            /*****************  获取彩种的走势图 *****************/
            _context.trend = DealWithCommonService.getTrend(this.configService.trend, _lotteryClassity);


            /** 默认的遗漏flot值 */
            if(_context.classifyCode == 'xync'){

                _context.chartDefultFlot = this.configService.getChartDefultFlot('kl10');
            }else{

                _context.chartDefultFlot = this.configService.getChartDefultFlot(_lotteryClassity);
            }


            _context.lotteryClassify = _lotteryClassity;

             // 当前选择的彩种
            _context.lotteryCode = _context.classifyCode;

            if(DealWithCommonService.contains(this.digitArr,_context.lotteryCode)){

                _context.lotteryAwardData = this.lotteryService.resultForm(await this.lotteryService.getAwardData(_context.lotteryCode));

                /** 列表中因为右侧获取开奖结果缺了lotteryName*/
                _context.lotteryName = _context.lotteryAwardData.lotteryName;

            }else{

                _context.lotteryAwardData = null;

                _context.lotteryName = null;
            }

            return this.render('article/list', _context,  request, reply);

        }catch(ex){
            console.error(ex);
        }

        
        return this.render('article/list', _context,  request, reply);
    }
}

module.exports = ArticleController;