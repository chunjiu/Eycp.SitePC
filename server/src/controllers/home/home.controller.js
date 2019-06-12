'use strict';

import { HomeService } from '../../services/home/home.service';
import { LotteryService } from '../../services/public/lottery.service';
import { NoticeService } from '../../services/notice/notice.service';
import { ArticleService } from '../../services/article/article.service';
import { PointService } from '../../services/point/point.service';
import { PlanService } from '../../services/plan/plan.service';
import { BaseController } from '../public/base.controller';
import ConfigService from '../../services/public/config.service';
import DealWithCommonService from '../../services/public/dealWithCommon.service';
import HomeDealWithData from '../../dealWithDataConduit/home/home.dealWithData';

/**Controller for 'main'*/
class HomeController extends BaseController {

    /** 构造方法 */
    constructor() {

        super('bjpk10');

        /** 初始化HomeService服务 */
        this.homeService = new HomeService();

        /** 初始化基本配置服务 */
        this.configService = ConfigService;

        /** 初始化公告服务 */
        this.noticeService = new NoticeService();

        /** 初始化彩种开奖服务 */
        this.lotteryService = new LotteryService();

        /** 初始化资讯服务 */
        this.articleService = new ArticleService();

        /** 初始化推荐服务 */
        this.planService = new PlanService();

        /** 初始化提点服务 */
        this.pointService = new PointService();

        /** 公共处理数据 */
        this.homeDealWithData = HomeDealWithData;
    }

    /**
     * 入口
     * @param {*} request 
     * @param {*} reply
     */
    async index(request, reply) {

        /** 基础上下文参数 */
        let _option = {
                pageCode: 'eycp_site_index'
            },
            _context = this.getBaseContext(_option);

        try {

            /** 判断一下这两个存在不存在，不存在再次去请求，存在则不管 */
            await DealWithCommonService.getBaseLotteryTree(__province, __lotteryAllTree);

            _context.province = __province;

            _context.lotteryAllTree = __lotteryAllTree;

            if (__lotteryAllTree == undefined) {
                __lotteryAllTree = this.lotteryService.resultForm(await DealWithCommonService.getLotteryTree());
                _context.lotteryAllTree = __lotteryAllTree;
            }

            _context.showInHomeLeft = this.configService.config.showInHomeLeft;

            /** 获取导航信息 */
            _context.mainNav = await DealWithCommonService.mainNavData(__lotteryAllTree);

            /** 获取广告 */
            _context.adBanner = this.articleService.resultForm(await this.articleService.getAdData('eycp_home_banner'));


            /** 追号推荐 */
            _context.recentplan = this.planService.resultForm(await this.planService.recommend());

            let typeArray = ["任三", "和值", "任三", "一星"];
            let pageTypeArray = {
                '_11x5': [
                    { name: '任一', type: '1' },
                    { name: '任二', type: '2' },
                    { name: '任三', type: '3' },
                    { name: '任四', type: '4' },
                    { name: '任五', type: '5' },
                    { name: '任六', type: '6' },
                    { name: '任七', type: '7' },
                    { name: '任八', type: '8' }
                ],
                'k3': [
                    { name: '和值', type: '1' },
                    { name: '二不同', type: '2' },
                ],
                'kl10': [
                    { name: '任一', type: '1' },
                    { name: '任二', type: '2' },
                    { name: '任三', type: '3' },
                    { name: '任四', type: '4' },
                    { name: '任五', type: '5' },
                    { name: '任六', type: '6' },
                    { name: '任七', type: '7' },
                    { name: '任八', type: '8' }
                ],
                'ssc': [
                    { name: '一星', type: '1' },
                    { name: '二星', type: '2' },
                    { name: '三星', type: '3' },
                ],
                'gxkl10': [
                    { name: '直特', type: '1' },
                    { name: '直一', type: '2' },
                    { name: '直二', type: '3' }
                ]
            }

            if (_context.recentplan) {

                for (let i = 0; i < _context.recentplan.length; i++) {

                    _context.recentplan[i].name = await DealWithCommonService.getLotteryNameForLotteryAllTree(_context.recentplan[i].lotteryCode, __lotteryAllTree);

                    _context.recentplan[i].type = typeArray[_context.recentplan[i].groupId - 1];

                    /** 如果是11选5, 添加分页类型 */
                    if ((/11x5/g.test(_context.recentplan[i].lotteryCode))) {

                        for (let j = 0; j < pageTypeArray._11x5.length; j++) {
                            if (_context.recentplan[i].type == pageTypeArray._11x5[j].name) {
                                _context.recentplan[i].pageType = pageTypeArray._11x5[j].type;
                                break;
                            }
                        }
                        /** 如果是快3, 添加分页类型 */
                    } else if (/k3/g.test(_context.recentplan[i].lotteryCode)) {

                        for (let j = 0; j < pageTypeArray.k3.length; j++) {
                            if (_context.recentplan[i].type == pageTypeArray.k3[j].name) {
                                _context.recentplan[i].pageType = pageTypeArray.k3[j].type;
                                break;
                            }
                        }
                        /** 如果是快乐十分, 添加分页类型 */
                    } else if (/kl10/g.test(_context.recentplan[i].lotteryCode) || /xync/g.test(_context.recentplan[i].lotteryCode)) {

                        for (let j = 0; j < pageTypeArray.kl10.length; j++) {
                            if (_context.recentplan[i].type == pageTypeArray.kl10[j].name) {
                                if (_context.recentplan[i].lotteryCode == 'gxkl10') {
                                    _context.recentplan[i].type = pageTypeArray.gxkl10[j].name
                                    _context.recentplan[i].pageType = pageTypeArray.gxkl10[j].type;
                                } else {
                                    _context.recentplan[i].pageType = pageTypeArray.kl10[j].type;
                                }
                                break;
                            }
                        }


                        /** 如果是时时彩, 添加分页类型 */
                    } else if (/ssc/g.test(_context.recentplan[i].lotteryCode)) {

                        for (let j = 0; j < pageTypeArray.ssc.length; j++) {
                            if (_context.recentplan[i].type == pageTypeArray.ssc[j].name) {
                                _context.recentplan[i].pageType = pageTypeArray.ssc[j].type;
                                break;
                            }
                        }
                    }
                }
            }




            /** 首页最新公告(只取前四条) */
            _context.noticeList = this.noticeService.resultForm(await this.noticeService.list({ pageIndex: 1, pageSize: 5 }));

            /** 每日提点 */
            _context.points = this.pointService.resultForm(await this.pointService.getRecentPoints());

            /** 开奖公告(只取前七条) */
            _context.awardNoticeList = this.lotteryService.resultForm(await this.lotteryService.getawardnotice(5));

            /** 判断试机号(该逻辑只针对福彩3d)*/
            _context.awardNoticeList = this.homeDealWithData.dealWithTestNumberForHomeNotice(_context.awardNoticeList);


            /** 获取多个分类指定记录数列表 */
            _context.moreArticleList = this.articleService.resultForm(await this.articleService.moreArticleList({ categoryIds: [6, 32, 33, 34, 35, 36], pageSize: 5 }));



            /**  排列得顺序是广东11选5，江苏快3，广西快3,  重庆时时彩，广东快乐十分，北京PK10，北京快8，上海时时乐 */
            let codeArray = ['gd11x5', 'jx11x5', 'jsk3', 'gxk3', 'cqssc', 'tjssc', 'gdkl10', 'gxkl10', 'bjpk10', 'shssl'];

            /** 拷贝一份数组 */
            let copyCodeArray = codeArray.concat([]);

            /** 获取开奖列表（
             *      同类彩种显示为固定彩种：
             *      11选五固定显示广东11选5，江西11选5；
             *     快3固定显示江苏快3，广西快3；
             *     时时彩固定显示重庆时时彩，天津时时彩；
             *     快乐十分固定显示广东快乐十分，广西快乐十分；
             *     其它类固定显示北京PK10，上海时时乐
             *  ）
             */
            let classityArray = [
                { classify: '11x5', name: '11选5', childs: [] },
                { classify: 'k3', name: '快3', childs: [] },
                { classify: 'ssc', name: '时时彩', childs: [] },
                { classify: 'kl10', name: '快乐十分', childs: [] },
                { classify: 'other', name: '其它', childs: [] }
            ];

            /** 获取视频列表（首页只拿高频彩） */
            let _cata = await this.lotteryService.getGroupAwards(codeArray);
            let lotteryArray = this.lotteryService.resultForm(_cata);

            /** 获取系统时间 */
            _context.systime = lotteryArray.awardTimes[0].time

            for (let i = 0; i < classityArray.length; i++) {

                let _classity = classityArray[i].classify;

                let reg = RegExp('' + _classity + '', 'i');

                for (let j = 0; j < lotteryArray.awardTimes.length; j++) {

                    let _code = lotteryArray.awardTimes[j].lotteryCode;

                    if (reg.test(_code)) {

                        classityArray[i].childs.push(Object.assign(lotteryArray.awardTimes[j], lotteryArray.awardList[j]));

                        DealWithCommonService.arrayRemove(copyCodeArray, _code);

                    }
                }
            }

            /** 把筛选出来不匹配得放到other中 */
            for (let i = 0; i < copyCodeArray.length; i++) {
                for (let j = 0; j < lotteryArray.awardTimes.length; j++) {
                    if (copyCodeArray[i] == lotteryArray.awardTimes[j].lotteryCode) {
                        classityArray[4].childs.push(Object.assign(lotteryArray.awardTimes[j], lotteryArray.awardList[j]));
                    }
                }
            }

            _context.classifyList = classityArray;



            /** 轮播切换视频列表 */
            _context.lotteryVideoList = this.lotteryService.resultForm(await this.lotteryService.getAwardDataGroup(2, 0));
            //友情链接
            _context.friendlink = await this.lotteryService.getFriendLinkList("home");


            return this.render(`home/index`, _context, request, reply);

        } catch (ex) {

            return this.lotteryService.errorMsg(ex);

        }

        return this.render(`home/index`, _context, request, reply);

    }


    /**
     *  获取一组开奖信息
     */
    async getgroupawards(request, reply) {

        let _option = {};
        let _context = this.getBaseContext(_option);
        let _codesArray;

        if (request.query.codes == undefined) {
            console.error('getgroupawards方法参数不正确！');
            return;

        } else {

            if (/\,/.test(request.query.codes)) {
                _codesArray = request.query.codes.split(',')
            } else {
                console.error('getgroupawards方法参数不正确, 不是以逗号拼接的字符串！');
                return;
            }

        }

        try {

            let awardVideoList = this.lotteryService.resultForm(await this.lotteryService.getGroupAwards(_codesArray));
            let tempAwardArray = [];

            if (awardVideoList) {

                awardVideoList.awardTimes.forEach((_val, _index, _arr) => {

                    if (/11x5/.test(_val.lotteryCode)) {

                        _val['classify'] = '11x5';

                    } else if (/k3/.test(_val.lotteryCode)) {

                        _val['classify'] = 'k3';

                    } else if (/kl10/.test(_val.lotteryCode)) {

                        _val['classify'] = 'kl10';

                    } else if (/ssc/.test(_val.lotteryCode)) {

                        _val['classify'] = 'ssc';

                    } else {

                        _val['classify'] = null;
                    }

                })

            }

            for (var i = 0; i < awardVideoList.awardTimes.length; i++) {
                tempAwardArray.push(Object.assign(awardVideoList.awardTimes[i], awardVideoList.awardList[i]))
            }

            _context.list = tempAwardArray;

            let _lotteryList = __template(this.path.join(__dirname, '../../views/template/home/lotteryList.component.art'), _context);
            return this.json({
                resultHtml: _lotteryList
            }, request, reply);

        } catch (ex) {

            this.lotteryService.errorMsg(ex);
            return this.json({
                resultHtml: ''
            }, request, reply);
        }

    }


    /**
     *  获取一个开奖视频模块
     */
    async getvideo(request, reply) {

        let _option = {};
        let _context = this.getBaseContext(_option);


        if (request.query.lotterycode == undefined) {
            console.error('getvideo方法参数不正确！');
            return;
        }

        try {

            this.lotteryService.lotteryCode = request.query.lotterycode;
            _context.awardtimes = this.lotteryService.resultForm(await this.lotteryService.getAwardTimes());

            let _videoList = __template(this.path.join(__dirname, '../../views/template/home/videoList.component.art'), _context);

            return this.json({
                resultHtml: _videoList,
                lotteryCode: request.query.lotterycode
            }, request, reply)

        } catch (ex) {

            this.lotteryService.errorMsg(ex);
            return this.json({
                resultHtml: '',
                lotteryCode: ''
            }, request, reply)

        }

    }


    /**
     *  获取开奖时间
     */
    async getawardtimes(request, reply) {

        let _option = {};
        let _context = this.getBaseContext(_option);

        try {

            this.lotteryService.lotteryCode = request.params.lotteryCode;
            let getawardtimes = this.lotteryService.resultForm(await this.lotteryService.getAwardTimes());

            return this.json(getawardtimes, request, reply)

        } catch (ex) {

            return this.lotteryService.errorMsg(ex);

        }

    }


    /**
     *  获取开奖数据
     */
    async getawarddata(request, reply) {

        let _option = {};
        let _context = this.getBaseContext(_option);

        try {

            this.lotteryService.lotteryCode = request.params.lotteryCode;
            let getawarddata = this.lotteryService.resultForm(await this.lotteryService.getAwardData());

            return this.json(getawarddata, request, reply)

        } catch (ex) {

            return this.lotteryService.errorMsg(ex);

        }

    }



    /**
     * 彩票大厅
     * @author Leo huang
     * @param {*} request
     * @param {*} reply
     */
    async lottery(request, reply) {

            let _option = {
                pageCode: 'eycp_site_lottery'
            };

            let _context = this.getBaseContext(_option);
            let _groupType = request.params.groupType;
            let _service = new LotteryService();

            _context.list = {};

            try {
                //console.log(__lotteryAllTree);
                _context.mainNav = await DealWithCommonService.mainNavData(__lotteryAllTree, 'lottery');
                // 获取底部推荐
                _context.recommend = await DealWithCommonService.showRecommend('high');

                let _awardData = await _service.getAllAward();

                // 如果数据正常才处理
                if (_awardData.state == 1) {
                    let _result = {};

                    _context.category = await _service.getLotteryGroupList();
                    _context.highChilds = await _service.getLotteryGroupList(2);
                    _context.province = await _service.getLotteryProvinceList();

                    _context.groupType = _groupType ? _groupType : 0;

                    // 获取结果集
                    if (_context.category.state == 1) {
                        _context.category = _context.category.result;
                    } else {
                        _context.category = []
                    }

                    if (_context.highChilds.state == 1) {
                        _context.highChilds = _context.highChilds.result;
                    } else {
                        _context.highChilds = []
                    }

                    if (_context.province.state == 1) {
                        _context.province = _context.province.result;
                    } else {
                        _context.province = [];
                    }

                    // 添加全部的选项
                    if (_context.category[0].id != 0) {
                        _context.category.unshift({ name: '全部', id: 0 });
                    }

                    if (_context.highChilds[0].id != 0) {
                        _context.highChilds.unshift({ name: '全部', id: 0 });
                    }

                    _context.list = _service.formatLotteryHallData({ result: _awardData.result, province: _context.province });

                }
                //友情链接
                _context.friendlink = await this.lotteryService.getFriendLinkList("lottery");

            } catch (ex) {
                console.error(ex);
            }
            return this.render('lottery/index', _context, request, reply);
        }
        /**
         * 入口
         * @param {*} request 
         * @param {*} reply
         */
    async map(request, reply) {

            /** 基础上下文参数 */
            let _option = {
                    pageCode: 'eycp_site_sitemap'
                },
                _context = this.getBaseContext(_option);

            try {

                _context.lotteryAllTree = this.lotteryService.resultForm(await this.lotteryService.getLotteryAllTree());
                _context.data = {
                    digit: [],
                    high: [],
                    local: []
                };
                let _data = _context.lotteryAllTree;
                if (_context.lotteryAllTree != null) {
                    for (var i = 0; i < _data.length; i++) {
                        if (1 == _data[i].groupId) {
                            for (var j = 0; j < _data[i].children.length; j++) {
                                for (var m = 0; m < _data[i].children[j].children.length; m++) {
                                    _context.data.digit.push(_data[i].children[j].children[m]);
                                }
                            }

                        }
                        if (2 == _data[i].groupId) {
                            for (var j = 0; j < _data[i].children.length; j++) {
                                for (var m = 0; m < _data[i].children[j].children.length; m++) {
                                    _context.data.high.push(_data[i].children[j].children[m]);
                                }
                            }
                        }
                        if (3 == _data[i].groupId) {
                            for (var j = 0; j < _data[i].children.length; j++) {
                                for (var m = 0; m < _data[i].children[j].children.length; m++) {
                                    _data[i].children[j].children[m].provinceId = _data[i].children[j].provinceId;
                                    _data[i].children[j].children[m].children = _data[i].children[j].name;
                                    _context.data.local.push(_data[i].children[j].children[m]);
                                }
                            }
                        }
                    }
                }
                /** 获取导航信息 */
                _context.mainNav = await DealWithCommonService.mainNavData(__lotteryAllTree);
                // 获取底部推荐
                _context.recommend = await DealWithCommonService.showRecommend('high');

            } catch (ex) {
                console.error(ex);
            }
            return this.render('home/sitemap', _context, request, reply);
        }
        /**
         * 搜索彩种开奖
         * @param {*} request 
         * @param {*} reply 
         */
    async searchLottery(request, reply) {

        let _context = {};
        let _service = new LotteryService();
        _context.list = {};
        let _search = '';
        let _result = {
            state: 2,
            search: ''
        }

        try {

            let _awardData = await _service.getAllAward({
                lottery: request.query.key ? decodeURIComponent(request.query.key) : ''
            });

            // 如果数据正常才处理
            if (_awardData.state == 1 && _awardData.result && _awardData.result.length > 0) {

                _context.category = await _service.getLotteryGroupList();
                _context.highChilds = await _service.getLotteryGroupList(2);
                _context.province = await _service.getLotteryProvinceList();

                // 获取结果集
                if (_context.category.state == 1) {
                    _context.category = _context.category.result;
                } else {
                    _context.category = []
                }

                if (_context.highChilds.state == 1) {
                    _context.highChilds = _context.highChilds.result;
                } else {
                    _context.highChilds = []
                }

                if (_context.province.state == 1) {
                    _context.province = _context.province.result;
                } else {
                    _context.province = [];
                }

                // 添加全部的选项
                if (_context.category[0].id != 0) {
                    _context.category.unshift({ name: '全部', id: 0 });
                }

                if (_context.highChilds[0].id != 0) {
                    _context.highChilds.unshift({ name: '全部', id: 0 });
                }

                _context.groupType = 0;
                _context.list = _service.formatLotteryHallData({ result: _awardData.result, province: _context.province });
                _search = __template(this.path.join(__dirname, '../../views/template/components/lotteryHall.component.art'), _context);
                _result.search = _search;
                _result.state = 1;
            }

        } catch (ex) {
            console.error(ex);
        }
        return this.json(_result, request, reply);
    }

    404(request, reply) {

        let _controllName = `home`;

        let _utm = request.query.utm;

        if (_utm != undefined) {

            return reply.redirect('/');
        }

        // 基础上下文参数
        let _option = {
                pageCode: 'eycp_site_index'
            },
            _context = this.getBaseContext(_option);

        DealWithCommonService.mainNavData(__lotteryAllTree).then((_ref) => {

            _context.mainNav = _ref;

        }).catch((ex) => {

            console.error(ex);
        })

        return reply.view(`home/404`, _context).code(404);

    }

    /**
     * 获取通用右边内容
     * @param {*} request 
     * @param {*} reply 
     */
    async articleLotteryRight(request, reply) {
        let _type = request.query.type;
        let _data = {};
        _data.articleRight = await DealWithCommonService.articleRight(_type);

        let _html = __template(this.path.join(__dirname, '../../views/template/components/articleLotteryRight.component.art'), _data);
        return this.json(_html, request, reply);
    }
}

module.exports = HomeController