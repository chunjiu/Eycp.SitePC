/***********************************************************************************
 *
 *                                      视频控制器;
 *
 ***********************************************************************************/
'use strict';

import {BaseController} from '../public/base.controller';
import {LotteryService} from  '../../services/public/lottery.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';

/**Controller for 'main'*/
class LiveController extends BaseController {

    constructor(){

        super();

        this.lotteryService = new LotteryService();

    }

    /**
     * 入口
     * @param {*} request
     * @param {*} reply
     */
    async index(request, reply) {

        /** 获取对应彩种SEO */
        let _option = {
            pageCode : 'eycp_site_video_index'
        }

        let _context = this.getBaseContext(_option);

        /** 获取省份信息 */
        _context.province  = __province;

        /** 获取底部推荐 */
        _context.recommend = await DealWithCommonService.showRecommend('high');

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'live');

        try{

            _context.lotteryAwardList = this.lotteryService.resultForm(await this.lotteryService.getAwardDataGroup(2, 1));

            _context.numberLotteryAwardList = {};
            _context.numberLotteryAwardList.awardList=[];
            _context.numberLotteryAwardList.awardTimes = this.lotteryService.resultForm(await this.lotteryService.getAwardDataGroup(1, 0));


            _context.lotteryList = this.lotteryService.resultForm(await this.lotteryService.getlotteryawardlist({
                groupId: 1,
                childIds: '1,2',
                quantity: 17
            }));
            //友情链接
             _context.friendlink = await this.lotteryService.getFriendLinkList("video");
            return this.render(`live/index`, _context, request, reply);

        }catch(ex){

            console.error(ex);

            return DealWithCommonService.noFound(reply);
        }

    }

    /**
     *  视频列表
     */
    async  list(request, reply){

        let _lotterycode;
        let _page;
        let _pageSize = 20;

        _page = request.params.pageIndex ? request.params.pageIndex : 1;
        _page = parseInt(_page);
       _lotterycode = `${request.params.code}`;

       /** 获取对应彩种SEO */
        let _option = {
            pageCode : 'eycp_site_video_list',
            option : {
                lotteryName: DealWithCommonService.getLotteryName(_lotterycode,__province)
            }
        }
        let _context = this.getBaseContext(_option); 


        _context.lotteryCode= _lotterycode;
        _context.lotteryType = 'digit';
        /** 获取省份信息 */
        _context.province  = __province;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'live');

        /** 获取底部推荐 */
        _context.recommend = await DealWithCommonService.showRecommend('digit');

        _context.lotteryName = _option.option.lotteryName;

        /** 读取数字彩所有彩种 */
        _context.digitObject   =  DealWithCommonService.getDigitAllLottery(_context.province);
       
        try{

            _context.videoList =   this.lotteryService.resultForm(await this.lotteryService.getVideoList({
                lotterycode: _lotterycode,
                page: _page,
                pageSize: _pageSize
            }));



            _context.pageNumber = _context.videoList.pageNumber;
            _context.pageCount    = _context.videoList.pageCount;

            return this.render(`live/list`, _context, request, reply);

        }catch(ex){

            console.error(ex);
            return DealWithCommonService.noFound(reply);
        }
    }


    /**
     *  视频详情
     */
    async detail(request, reply){

        let _lotterycode = `${request.params.code}`;

        let _context = {};
        
        let _isIframeVideo = request.query.mode;

        let _issueno;

        let _data;

        if(request.params.issueno){
            _issueno       = `${request.params.issueno}`;
            _issueno       =  parseInt(_issueno.replace('.html',''));
            _context.issueno = _issueno;
        }

        _context.lotteryCode = _lotterycode;

        /** 获取省份信息 */
        _context.province  = __province;

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'live');

        /** 读取分类类型 */
        _context.classify    =  DealWithCommonService.getLotteryClassify(_context.lotteryCode, _context.province);

        /** 获取彩种分类 */
        _context.lotteryType = DealWithCommonService.getLotteryCodeType(_context.lotteryCode, _context.province);

        let lotteryService = new LotteryService(_lotterycode);

        if(_isIframeVideo){

            /** 获取对应彩种SEO */
            let _option = {
                pageCode : 'eycp_site_video_play',
                option : {
                    lotteryName: DealWithCommonService.getLotteryName(_lotterycode, __province)
                }
            }
            let _seo = this.getBaseContext(_option);
            _context = Object.assign(_context, _seo);

            _context.isIframeVideo = true;

            return this.render(`live/detailForIframe`, _context, request, reply);

        }else{


            try{


                /** 获取数据集合 */
                if(_context.classify == 'digit'){

                    _data = await lotteryService.getLotteryDigit();

                }else if(_context.classify == 'high'){

                    _data = await lotteryService.getLotteryHigh();

                    _context.type = DealWithCommonService.getLotteryCodeType(_context.lotteryCode, _context.province);

                    /** 如果是北京pk10要处理一下pk10类型 */
                    if(_context.lotteryCode == 'bjpk10'){

                        _context.type = 'pk10';

                        /** 处理快乐9飞盘的数据 */
                    }

                    if(_context.lotteryCode == 'bjkl8'){
                        if(_data.awardResult && _data.awardResult.result) {
                            _data.awardResult.frisbee = _data.awardResult.result.split('|')[1];
                            _data.awardResult.resultList = _data.awardResult.result.split('|')[0].split(',');
                        }
                        _context.type = 'kl8';
                    }


                }else if(_context.classify == 'local'){

                    /** 地方彩也是调数字彩的一样的接口 */
                    _data = await lotteryService.getLotteryDigit();
                }

                /** 获取对应彩种SEO */
                let _option = {
                    pageCode : 'eycp_site_video_play',
                    option : {
                        lotteryName: DealWithCommonService.getLotteryName(_lotterycode, __province),
                        issueno: _context.issueno ? _context.issueno : (_data.isAwarding ? _data.awardTime.current.period : _data.awardTime.next.period)
                    }
                }

                let _seo = this.getBaseContext(_option);
                _context = Object.assign(_context, _seo);

                _context = Object.assign(_context, _data);


                /** 获取底部推荐 */
                _context.recommend = await DealWithCommonService.showRecommend(_context.classify);

                return this.render(`live/detail`, _context, request, reply);

            }catch(ex){

                console.log(ex);
                return DealWithCommonService.noFound(reply);

            }

        }

    }


    /**
     *  请求一组视频数据
     */
    async getawarddatagroup(request, reply){

        let isHasLotteryResult;

        if(request.query.type==undefined){
            isHasLotteryResult = 0;
        }else{
            isHasLotteryResult = parseInt(request.query.type);
        }

        let _option = {
            needSeo : false
        }

        let _context = this.getBaseContext(_option);

        _context.province  = __province;

        try{

            /** 不需要拿最新开奖的 */
            if(isHasLotteryResult == 0){

                _context.lotteryAwardList = {};
                _context.lotteryAwardList.awardList = [];
                _context.lotteryAwardList.awardTimes = this.lotteryService.resultForm(await this.lotteryService.getAwardDataGroup(2, isHasLotteryResult));

            }else{
                _context.lotteryAwardList = this.lotteryService.resultForm(await this.lotteryService.getAwardDataGroup(2, isHasLotteryResult));
            }

            let _lotteryAwardList          = __template(this.path.join(__dirname, '../../views/template/live/topVideo.component.art'), _context);
            let _navLotteryAwardList    = __template(this.path.join(__dirname, '../../views/template/live/navVideoList.component.art'), _context);


            return this.json({
                lotteryAwardList: _lotteryAwardList,
                navLotteryAwardList: _navLotteryAwardList
            }, request, reply);

        }catch(ex){

            console.error(ex);
            return this.json({
                lotteryAwardList: '',
                navLotteryAwardList: ''
            }, request, reply);
        }

    }

    /**
     *  请求一组视频数据
     */
    async getgroupawardtimes(request, reply){

        let _option = {
            needSeo : false
        }

        let _context = this.getBaseContext(_option);

        try{

            _context.groupAwardTimes = this.lotteryService.resultForm(await this.lotteryService.getGroupAwardTimes([request.query.lotterys]));

            return this.json(_context, request, reply);

        }catch(ex){

            console.error(ex);
            _context.groupAwardTimes = {};
            return this.json(_context, request, reply);
        }

    }

}

module.exports = LiveController;