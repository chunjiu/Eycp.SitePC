'use strict';

import { BaseController } from '../public/base.controller';
import { PlanService } from '../../services/plan/plan.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import { LotteryService } from '../../services/public/lottery.service';

/**
 * 追号控制器
 */
class PlanController extends BaseController {

    constructor() {
        super();

        this.service = new PlanService();
        this.lotteryService = new LotteryService();
    }

    /**
     * 追号主页
     * @param {request} request 
     * @param {response} reply 
     */
    async index(request, reply) {

        let _context = {};

        // 基础上下文参数
        let _option = {
            pageCode : 'eycp_site_plan_index'
        }

        this._context = this.getBaseContext(_option);


        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'plan');


        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');

        // 获取分类
        _context.highChilds = await this.lotteryService.getLotteryGroupList(2);
        _context.highChilds = this.service.resultArray(_context.highChilds);

        // 深复制
        _context.highChilds = JSON.parse(JSON.stringify(_context.highChilds));
        _context.highChilds.forEach(item => {
            item.name = item.name.includes('十一') ? '11选5' : item.name;
            item.name = item.name.includes('快三') ? '快3' : item.name;
        });

        if( _context.highChilds[0].id != 0) {
            _context.highChilds.unshift({name : '全部', id : 0});
        }
        _context.highChilds.pop();

        // 获取plan列表
        _context.data = await this.service.getPlanListForIndex();

        _context = Object.assign(_context, this._context);

        return this.render(`plan/index`, _context, request, reply);
    }

    /**
     * 追号详情页
     * @param {request} request 
     * @param {response} reply 
     */
    async detail(request, reply) {
        let _context = {};

        _context.groupId = request.params.groupId;
        _context.state = request.params.state;

        let codeList = ['11x5', 'k3', 'kl10', 'ssc'];
        let _idLength = request.params.id.length;
        // 幸运农场单独处理
        if(request.params.id.includes('xync')) {
            _context.lotteryCode = 'xync';
            _context.period = request.params.id.substr(4, _idLength - 5);
            _context.type = request.params.id.substr(_idLength - 1);
        } else {
            for(let i = 0,_length = codeList.length; i < _length; i++) {
                let _tmpIndex = request.params.id.indexOf(codeList[i]);
                if(_tmpIndex > -1) {
                    _context.lotteryCode = request.params.id.substr(0, _tmpIndex) + codeList[i];
                    _context.period = request.params.id.substr(_context.lotteryCode.length, _idLength - 1 - _context.lotteryCode.length);
                    _context.type = request.params.id.substr(_idLength - 1);
                    break;
                }
            }
        }
       
        let _lotteryPlan = this.configService.config.lotteryPlan;
        let _group = _lotteryPlan.group[_context.lotteryCode == 'gxkl10' ? '8' : _context.groupId.toString()];
        let _planLength = this.configService.config.lotteryPlanPeriod[_context.lotteryCode == 'gxkl10' ? '8' : _context.groupId][_context.type].max();
        if(_group) {
            _context.recommendType = _group.type[_context.type.toString()];
            _context.recommendMoney = _group.money[_context.type.toString()];
        }

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'plan');

        let _data = await this.service.detail(request.params.id);
        _data = this.service.resultForm(_data);

        
        if(_data) {
            let _tmpNeedAwarding = true;
            let _isSuccess = false;
            // let _length = _data.items.length;

            if(_planLength <= _data.items.length) {
                _tmpNeedAwarding = false;
            }

            _data = JSON.parse(JSON.stringify(_data));
            _data.items.forEach((item, idx)  => {
                item.content = _data.content;

                if(item.state == 3 || item.state == 10) {
                    _tmpNeedAwarding = false;

                    // 加锁，防止重复赋值
                    // if(!_isSuccess) {
                    //     _length = idx + 1;
                    //     _isSuccess = true;
                    // }
                }
            });

            // _data.items = _data.items.slice(0 , _length);

            // 如果没有结束仍然在追号则追加一条开奖中的数据到页面
            if(_tmpNeedAwarding) {
                _data.items.push({
                    "period":  _data.items && _data.items.length > 0 ? _data.items[_data.items.length - 1].period + 1 : _context.period,
                    "result": "等待开奖中...",
                    "content": _data.content,
                    "state": -1,
                    "winGroup": 0
                });
            }
        }

        _context.data = _data;
        _context.lotteryName = DealWithCommonService.getLotteryName(_context.lotteryCode,__province);
        
        // 基础上下文参数
        let _option = {
            pageCode : 'eycp_site_plan_detail',
            option : {
                articleTitle: _context.lotteryName,
                type: this.service.getPlayTypeName( _context.type, _context.groupId, _context.lotteryCode),
                lotteryName : _context.lotteryName,
                date: `${_context.period.substr(0, 4)}-${_context.period.substr(4, 2)}-${_context.period.substr(6, 2)}`,
                issueno: _context.period
            }
        }

        this._context = this.getBaseContext(_option);

        try{
            _context.template = this.fs.readFileSync(this.path.join(__dirname, '../../views/template/plan/plan.component.art'),"utf-8");
        } catch(ex) {
            console.log(ex);
        }

        _context = Object.assign(_context, this._context);
        
        return this.render(`plan/detail`, _context, request, reply);
    }

    /**
     * 推荐追号
     * @param {*} request 
     * @param {*} reply 
     */
    recommend(request, reply) {
        return this.json(this.service.recommend(), request, reply);
    }

    /**
     * 追号结果列表
     * @param {*} request 
     * @param {*} reply 
     */
    async planResult(request, reply) {
        let lotteryCode = request.params.lotteryCode;
        let type = request.params.type || (lotteryCode.includes('kl10') || lotteryCode.includes('xync') ? 2 : 1);
        let date = request.params.date ? request.params.date : (new Date()).format('yyyy-MM-dd');

        let _context = {};

        // 检查是否超过72小时
        //let _planInfo = DealWithCommonService.getPlanDateSpanHour(date);
        //if(_planInfo.timeSpan >= 72) {
            // let page = await this.service.getPage(`plan/list/${lotteryCode}/${_planInfo.year}/${_planInfo.month}/${_planInfo.day}/${lotteryCode}_${date}_${type}.html`);
            // return this.contentHtml(page, request, reply);
        //}

        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'plan');

        // 获取底部推荐
        _context.recommend = await DealWithCommonService.showRecommend('high');

        //获取页面信息
        let _data = await this.service.getPlanDataForType(lotteryCode, type, date);
        _context.lotteryCode = lotteryCode;
        _context.type = type;
        _context.lotteryName = await DealWithCommonService.getLotteryNameByTree(lotteryCode);
        _context.date = date;

        // 组装三天日期
        _context.days = _data.planTimer;
        
        // 基础上下文参数
        let _option = {
            pageCode : 'eycp_site_plan_detail',
            option: {
                articleTitle: _context.lotteryName,
                type: '',
                lotteryName : _context.lotteryName,
                date: date,
                issueno: ''
            }
        }

        _data.playTypeList.forEach(item => {
            if(item.id == type) {
                _option.option.type = item.name;
            }
        });

        let _seo = this.getBaseContext(_option);

        _context = Object.assign(_context, _seo, _data);

        return this.render(`plan/list`, _context, request, reply);
    }

    /**
     * 更新开奖之后的追号
     * @param {*} request 
     * @param {*} reply 
     */
    async updatePlanResult(request, reply) {

        let lotteryCode = request.query.lotteryCode;
        let type = request.query.type;
        let groupId = request.query.groupId;
        let date = request.query.date;

        let _context = {};

        //获取页面信息
        let _data = await this.service.getPlanDataForType(lotteryCode, type, date, groupId);
        _context.lotteryCode = lotteryCode;
        _context.type = type;
        _context.groupId = groupId;

        _context = Object.assign(_context, this._context, _data);

        let _timer = __template(this.path.join(__dirname, '../../views/template/plan/planTime.component.art'), _context);
        let _table = __template(this.path.join(__dirname, '../../views/template/plan/planTable.component.art'), _context);
        let _list = __template(this.path.join(__dirname, '../../views/template/plan/list.component.art'), _context);

        return this.json({
            timer: _timer,
            list: _list,
            table: _table
        }, request, reply);
    }

    /**
     * 更新开奖结果
     * @param {*} request 
     * @param {*} reply 
     */
    async updateAwardReult(request, reply) {
        let lotteryCode = request.query.lotteryCode;
        let _context = {};

        //获取页面信息
        let _data = await this.service.getPlanAward(lotteryCode);
        _context.lotteryCode = lotteryCode;
        _context.groupId = request.query.groupId;

        _context = Object.assign(_context, this._context, _data);

        let _timer = __template(this.path.join(__dirname, '../../views/template/plan/planTime.component.art'), _context);

        return this.json({
            timer: _timer
        }, request, reply);
    }

    /**
     * 更新追号首页数据
     * @param {*} request 
     * @param {*} reply 
     */
    async updateList(request, reply) {
         // 获取plan列表
        let _context = {}
        _context.data = await this.service.getPlanListForIndex();
        let list = __template(this.path.join(__dirname, '../../views/template/plan/planIndex.component.art'), _context);

        return this.json({
            list: list
        },request, reply);
    }

    /**
     * 更新追号
     * @param {*} request 
     * @param {*} reply 
     */
    async updateIndexPlan(request, reply) {
        let _context = {};
        let _planData = "";
        let _code = request.query.lotteryCode;
        _context.lotteryCode = _code;
        _context.type = _code.includes('11x5') ? '11x5' : (_code.includes('k3') ? 'k3' : (_code.includes('ssc') ? 'ssc' : (_code.includes('kl10') || _code == 'xync' ? 'kl10' : ''))) ;
        _context.lotteryName = DealWithCommonService.getLotteryName(_code, __province);

        try {
            // 追号
            _context.planInfo = (await this.service.index(_code)).result;
            _planData = __template(this.path.join(__dirname,'../../views/template/high/common/planTable.art'), _context);

        } catch(ex) {
            console.error(ex);
        }

        return this.json({
            plan: _planData
        }, request, reply);
    }

    /**
     *  获取追号推荐
     */
    async getplan(request, reply) {

        let _option = {};
        let _context = this.getBaseContext(_option);

        let  planService = new PlanService();

        /** 获取省份信息 */
        _context.province  = __province;

        try{

            /** 追号推荐 */
            _context.recentplan = planService.resultForm(await planService.recommend());

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

                   _context.recentplan[i].name = await DealWithCommonService.getLotteryNameForLotteryAllTree(_context.recentplan[i].lotteryCode, __lotteryAllTree);

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


            let _recentplan   = __template(this.path.join(__dirname, '../../views/template/home/plan.component.art'), _context);

            return this.json({
                resultHtml: _recentplan,
            } , request, reply);

        }catch (ex){

            console.error(ex);
            return this.json({
                resultHtml: '',
            } , request, reply);
        }

    }

}

module.exports = PlanController;