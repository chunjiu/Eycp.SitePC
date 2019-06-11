/***********************************************************************************
 *
 *                                      图表控制器;
 *
 ***********************************************************************************/

'use strict';

import { BaseController } from '../public/base.controller';
import { LotteryService } from '../../services/public/lottery.service';
import { OmissionService } from '../../services/omission/omission.service';
import DealWithCommonService from  '../../services/public/dealWithCommon.service';
import ConfigService from '../../services/public/config.service';
import CommonDealWithData from '../../dealWithDataConduit/common/common.dealWithData';
import K3DealWithData  from '../../dealWithDataConduit/high/k3/k3.dealWithData';

/**
 * 遗漏走势图表控制器
 */
class OmissionController extends BaseController {

    constructor() {

        super();

        this.omissionChart = new OmissionService();

        this.configService                 = ConfigService;
        this.k3DealWithData            = K3DealWithData;
    }
    /**
     * 遗漏走势
     * @param {*} request
     * @param {*} reply
     */
    async index(request, reply) {

        let _option = {
            pageCode: 'eycp_site_omission_list'
        };

        let _context = this.getBaseContext(_option);
        let _groupType = request.params.groupType;
        let _service = new LotteryService();

        _context.list = {};

        try {

            _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'omission');

            // 获取底部推荐
            _context.recommend = await DealWithCommonService.showRecommend('high');
            let _awardData = await _service.getAllAward();

            // 如果数据正常才处理
            if (_awardData.state == 1) {
                let _result = {};

                _context.category = await _service.getLotteryGroupList();
                _context.highChilds = await _service.getLotteryGroupList(2);
                _context.province = await _service.getLotteryProvinceList();

                // 获取结果集
                if (_context.category.state == 1) {
                    _context.category = _context.category.result;
                } else {
                    _context.category = [];
                }

                _context.groupType = _groupType ? _groupType : 0;

                _context.highChilds = [
                     { id: 1, name: '十一选五' },
                     { id: 2, name: '快三' },
                     { id: 3, name: '快乐十分' },
                     { id: 4, name: '时时彩' }
                    ];

                if (_context.province.state == 1) {
                    _context.province = _context.province.result;
                } else {
                    _context.province = [];
                }

                // 添加全部的选项
                if (_context.category[0].id != 0) {
                    _context.category.unshift({name: '全部', id: 0});
                }

                if (_context.highChilds[0].id != 0) {
                    _context.highChilds.unshift({name: '全部', id: 0});
                }


                _context.list = _service.formatLotteryHallData({
                    result: _awardData.result,
                    province: _context.province
                });

                let tempArr = [], tempArr2 = [], tempArr3 = [];
                _context.list.high.forEach(function(item) {

                    if (item.groupChildId < 3) {
                        tempArr.push(item);
                    }
                    if (item.groupChildId == 4) {
                        tempArr2.push(item);
                    }
                    if(item.groupChildId == 3) {
                        tempArr3.push(item);
                    }
                });


                _context.list.high = tempArr.concat(tempArr2).concat(tempArr3);


                // 福利彩票走势
                _context.boonTrend = this.configService.omission[0].child;
                // 体育彩票走势
                _context.sportTrend = this.configService.omission[1].child;
                // 高频彩票走势
                _context.highTrend = [];
                __template.defaults.imports.highTrendData = (groupChildId, lotteryCode) => {
                    if (lotteryCode === 'gxkl10') {
                        _context.highTrend = this.configService.omission[2].child[3];
                    } else {
                        switch (groupChildId) {
                            case 1:
                                _context.highTrend = this.configService.omission[2].child[1];
                                break;
                            case 2:
                                _context.highTrend = this.configService.omission[2].child[0];
                                break;
                            case 3:
                                _context.highTrend = this.configService.omission[2].child[2];
                                break;
                            case 4:
                                _context.highTrend = this.configService.omission[2].child[4];
                                break;
                            default:break;
                        }
                    }
                    return _context.highTrend;
                }


            }

        } catch (ex) {
            console.error(ex);
        }
        return this.render('omission/list', _context, request, reply);

    }


    /**
     * 搜索彩种走势
     * @param {*} request
     * @param {*} reply
     */
    async omissionSearch(request, reply) {
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

                _context.highChilds = [
                    { id: 1, name: '十一选五' },
                    { id: 2, name: '快三' },
                    { id: 4, name: '时时彩' },
                    { id: 3, name: '快乐十分' }];

                if (_context.province.state == 1) {
                    _context.province = _context.province.result;
                } else {
                    _context.province = [];
                }

                // 添加全部的选项
                if (_context.category[0].id != 0) {
                    _context.category.unshift({name: '全部', id: 0});
                }

                if (_context.highChilds[0].id != 0) {
                    _context.highChilds.unshift({name: '全部', id: 0});
                }

                _context.groupType = 0;
                _context.list = _service.formatLotteryHallData({
                    result: _awardData.result,
                    province: _context.province
                });

                if(_context.list.high) {
                    let tempArr = [], tempArr2 = [], tempArr3 = [];
                    _context.list.high.forEach(function(item) {
                        if (item.groupChildId < 3) {
                            tempArr.push(item);
                        }
                        if (item.groupChildId == 4) {
                            tempArr2.push(item);
                        }
                        if(item.groupChildId == 3) {
                            tempArr3.push(item);
                        }
                    });
                    _context.list.high = tempArr.concat(tempArr2).concat(tempArr3);
                }

                // 福利彩票走势
                _context.boonTrend = this.configService.omission[0].child;
                // 体育彩票走势
                _context.sportTrend = this.configService.omission[1].child;
                // 高频彩票走势
                _context.highTrend = [];
                __template.defaults.imports.highTrendData = (groupChildId, lotteryCode) => {
                    if (lotteryCode === 'gxkl10') {
                        _context.highTrend = this.configService.omission[2].child[3];
                    } else {
                        switch (groupChildId) {
                            case 1:
                                _context.highTrend = this.configService.omission[2].child[1];
                                break;
                            case 2:
                                _context.highTrend = this.configService.omission[2].child[0];
                                break;
                            case 3:
                                _context.highTrend = this.configService.omission[2].child[2];
                                break;
                            case 4:
                                _context.highTrend = this.configService.omission[2].child[4];
                                break;
                            default:break;
                        }
                    }
                    return _context.highTrend;
                };
                _search = __template(this.path.join(__dirname, '../../views/template/components/omissionTrend.component.art'), _context);
                _result.search = _search;
                _result.state = 1;
            }

        } catch (ex) {
            console.error(ex);
        }
        return this.json(_result, request, reply);
    }


    /**
     *  遗漏详情页
     */
    async detail(request, reply){

        let  _lotteryCode = `${request.params.code}`;

        let  _digitArr;
        let  _highArr;
        let  _allCode;
        let  _lotteryClassity;
        let  _omissionService = new OmissionService();
        let  _type;

        try{

        if(_lotteryCode !=undefined){

            _digitArr = [
                'dlt','fc3d','pl3','pl5','qlc','qxc','ssq',
            ];

            _highArr = [
                '11x5','k3','ssc','hn481','kl8','kl10',
                'gxkl10','pk10','ssl','sxytdj','xync'
            ];

            _allCode = [].concat(_digitArr, _highArr);

            for(let  i=0; i < _allCode.length; i++){

                if (new RegExp(_allCode[i]).test(_lotteryCode)) {

                     _lotteryClassity = _allCode[i];
                     break;
                }

                if(i==_allCode.length-1){

                    console.error('彩种名不存在！');
                    return reply.redirect('/404',request, reply);
                    //return _omissionService.errorMsg('彩种名不存在！');
                }

            }

        }else{
            console.error('参数lotteryCode不能为空！');
            return reply.redirect('/404',request, reply);
        }

        /** 广西快乐10分要特殊处理一下 */
        if(_lotteryCode == 'gxkl10'){
            _lotteryClassity = _lotteryCode;
        }

        /** 幸运农场也要单独处理一下 */
        if(_lotteryCode == 'xync'){
           _lotteryClassity = _lotteryCode;
        }

        let  _flot   = request.params.flot;
        let  _data;
        let  _lotteryService = new LotteryService(_lotteryCode);


        if(_flot == undefined){
            console.error('参数_flot不能为空！');
            return reply.redirect('/404',request, reply);

        }else{

            _flot = parseInt(_flot);
        }


        /**  因为每个彩种开奖头部的球号和图片都需要通过这个type类型进行分类展示  */
        if(_lotteryClassity == 'gxkl10'){

             _type = 'kl10';

        }else if(_lotteryClassity == 'xync'){

            _type = 'kl10';

        }else{

            _type  = _lotteryClassity;
        }

        /** 获取对应类别的遗漏图表的所有类型配置 */
        let _omission = DealWithCommonService.getOmission( this.configService.omission , _lotteryClassity);

        let _seoType=_lotteryClassity;


        if(_digitArr.join(",").indexOf(_lotteryClassity)>=0){
                 _seoType="digit";
       }else{
                _seoType = _type;
       }

        let _option = {
            pageCode : 'eycp_site_omission_'+_seoType,
            option : {
                lotteryName:  DealWithCommonService.getLotteryName(_lotteryCode, __province),
                type:_omissionService.getFlotName(_omission,_flot)
            }
        }

        let _context = this.getBaseContext(_option);


        _context.lotteryCode      = _lotteryCode;
        _context.lotteryClassify  = _lotteryClassity;
        _context.flot                  = _flot;
        _context.type                 = _type;


        /** 读取分类类型 */
        if(DealWithCommonService.contains(_digitArr,_lotteryClassity)){

            _context.classify      =  "digit";

        }else if(DealWithCommonService.contains(_highArr,_lotteryClassity)){

            _context.classify      =  "high";

        }else{

            return _omissionService.errorMsg('检查一下这个彩种类型是不是不存在！');
        }


        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'omission');

        /** 走势数据 */
        _context.omission = _omission;


        _context.threeLevel = DealWithCommonService.getOmissionThreeLevel(_omission, _flot);


            if("digit" == _context.classify){
               _data =   await _lotteryService.getDigitLotteryMain();
            }else{

                _data = await _lotteryService.getHighLotteryMain(_type);

            }

            if(_lotteryClassity == 'k3'){
                if(_data.awardResult && _data.awardResult.resultList) {
                    _data.awardResult.resultList = _data.awardResult.resultList.map(item => {
                        return item >= 10 ? item : '0' + item;
                    })
                }

                /** 获取和值 */
                _data.awardResult.resultSumValue = this.k3DealWithData.getResultSumValue(_data.awardResult.result);
            }


            /** 排列3和福彩3d共用help.config配置 */
            if(_lotteryClassity == 'pl3'){

                _context.helpConfig    =  this.configService.getOmissionHelpConfig('fc3d', _flot,-1);
            }else{

                /** 读取帮助说明配置 */
                _context.helpConfig    =  this.configService.getOmissionHelpConfig(_lotteryClassity, _flot,-1);
            }

            _context = Object.assign(_context, _data);

            let  _result = await _omissionService.getMissStatData(_lotteryCode, _flot, 500);


            /** 默认的遗漏flot值 */
            if(_lotteryCode == 'xync'){

                _context.chartDefultFlot = this.configService.getChartDefultFlot('kl10');
            }else{

                _context.chartDefultFlot = this.configService.getChartDefultFlot(_lotteryClassity);
            }

            if("digit" == _context.classify){

                /** 默认的杀号type值 */
                _context.shddDefultFlot = this.configService.getShddDefultFlot(_lotteryCode);

                /** 默认的杀号type值 */
                _context.hmtjDefultFlot = this.configService.getHmtjDefultFlot(_lotteryCode);

                //console.log('shddDefultFlot:'+_context.shddDefultFlot);
                //console.log('hmtjDefultFlot:'+_context.hmtjDefultFlot);
            }

            _context.omissionData = _omissionService.resultForm(_result);

            /** 获取和值 */
            _context.awardResult.resultSumValue = this.k3DealWithData.getResultSumValue(_context.awardResult.result);

            return this.render(`omission/index`, _context, request, reply);


        }catch(ex){

            _omissionService.errorMsg(ex);
            return reply.redirect('/404',request, reply);
        }

    }


    /**
     *  请求遗漏图表
     */
    async requestOmission(request, reply){


        let  _lotteryCode = `${request.params.code}`;
        let  _sort  = request.query.sort;

        let  _digitArr;
        let  _highArr;
        let  _allCode;
        let  _lotteryClassity;
        let  _omissionService = new OmissionService();

        if(_lotteryCode !=undefined){

            _digitArr = [
                'dlt','fc3d','pl3','pl5','qlc','qxc','ssq',
            ];

            _highArr = [
                '11x5','k3','ssc','hn481','k3','kl8','kl10',
                'gxkl10','pk10','ssl','sxytdj','xync'
            ];

            _allCode = [].concat(_digitArr, _highArr);

            for(let  i=0; i < _allCode.length; i++){

                if (new RegExp(_allCode[i]).test(_lotteryCode)) {

                    _lotteryClassity = _allCode[i];

                    break;
                }

                if(i==_allCode.length-1){
                    return _omissionService.errorMsg('彩种名不存在！');
                }

            }

        }else{

            return _omissionService.errorMsg('参数lotteryCode不能为空！');
        }


        let  [
            _flot,
            _quantity
        ]=[request.query.flot, request.query.quantity];

        let _context = this.getBaseContext({});

        if(_flot == undefined){

            return _omissionService.errorMsg('requestOmission：_flot参数不正确！');

        }else{

            _flot = parseInt(_flot);
        }

        _quantity = _quantity ? parseInt(_quantity) : 500;



        try{

            /** 走势数据 */
            _context.omissionData  = _omissionService.resultForm(await _omissionService.getMissStatData(_lotteryCode,_flot, _quantity, _sort));



            if(_context.omissionData !=null){

                _context.lotteryCode = _lotteryCode;

                _context.flot = _flot;

                let _html = __template(this.path.join(__dirname, '../../views/template/omission/omission.component.art'), _context);

                return this.json({

                    lastPeriod: _context.omissionData[0].lastPeriod,
                    html: _html

                },request,reply);

            }else{

                return this.json({

                    lastPeriod: '',
                    html: '<table><tbody><tr><td>暂时无任何遗漏数据</td></tr></tbody></table>'

                },request,reply);

            }



        }catch(ex){

            return _omissionService.errorMsg(ex);

        }

    }

    /**
     *  遗漏周期图表
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    async omissionchart(request, reply){

        let  _lotteryCode = `${request.params.code}`;
        let  _flot              = `${request.params.flot}`;
        let  _number       = `${request.params.number}`;
        let  _stype            = `${request.params.type}`;
        let  _type;

        let  _digitArr;
        let  _highArr;
        let  _allCode;
        let  _lotteryClassity;
        let  _omissionService = new OmissionService();
        let  _data;

        try{

        if(_lotteryCode !=undefined){

            _digitArr = [
                'dlt','fc3d','pl3','pl5','qlc','qxc','ssq',
            ];

            _highArr = [
                '11x5','k3','ssc','hn481','k3','kl8','kl10',
                'gxkl10','pk10','ssl','sxytdj','xync'
            ];

            _allCode = [].concat(_digitArr, _highArr);

            for(let  i=0; i < _allCode.length; i++){

                if (new RegExp(_allCode[i]).test(_lotteryCode)) {

                    _lotteryClassity = _allCode[i];
                    break;
                }

                if(i==_allCode.length-1){
                    console.error('彩种名不存在！');
                    return reply.redirect('/404',request, reply);
                    //return _omissionService.errorMsg('彩种名不存在！');
                }

            }

        }else{

            console.error('参数lotteryCode不能为空！');
            return reply.redirect('/404',request, reply);
            //return _omissionService.errorMsg('参数lotteryCode不能为空！');
        }

        /** 广西快乐10分要特殊处理一下 */
       if(_lotteryCode == 'gxkl10'){

                _lotteryClassity = _lotteryCode;
       }

       /** 幸运农场也要单独处理一下 */
       if(_lotteryCode == 'xync'){

               _lotteryClassity = _lotteryCode;
        }

        let  _lotteryService = new LotteryService(_lotteryCode);


        if(_flot == undefined){

            console.error('参数_flot不能为空！');
            return reply.redirect('/404',request, reply);
            //return _omissionService.errorMsg('参数_flot不能为空！');

        }else{

            _flot = parseInt(_flot);
        }

        if(_number == undefined){
            console.error('参数_number不能为空！');
            return reply.redirect('/404',request, reply);
            //return _omissionService.errorMsg('参数_number不能为空！');

        }else{

            /************  要对number的符号进行还原处理， 如果是or要换成#号，如果是下划线要换成逗号 ************/
            _number = _number.replace(/\_/g, ',').replace(/or/g, '#');

        }

        if(_stype == undefined){
            console.error('参数_stype不能为空！');
            return reply.redirect('/404',request, reply);
            //return _omissionService.errorMsg('参数_stype不能为空！');

        }else{

            _stype = parseInt(_stype);
        }


            /**  因为每个彩种开奖头部的球号和图片都需要通过这个type类型进行分类展示  */
            if(_lotteryClassity == 'gxkl10'){

                _type = 'kl10';

            }else if(_lotteryClassity == 'xync'){

                _type = 'kl10';

            }else if(_lotteryClassity == 'k3'){

                _type = 'k3';

            }else{

                _type  = _lotteryClassity;
            }


        /** 获取对应类别的遗漏图表的所有类型配置 */
        let _omission = DealWithCommonService.getOmission( this.configService.omission , _lotteryClassity);

        let _seoType=_lotteryClassity;

        if(_digitArr.join(",").indexOf(_lotteryClassity)>=0){
                _seoType="digit";
         }else{
                _seoType = _type;
         }


        let _option = {
            pageCode : 'eycp_site_omission_'+_seoType,
            option : {
                lotteryName:  DealWithCommonService.getLotteryName(_lotteryCode, __province),
                type:_omissionService.getFlotName(_omission,_flot)
            }
        }

        let _context = this.getBaseContext(_option);

        _context.lotteryCode      = _lotteryCode;
        _context.lotteryClassify  = _lotteryClassity;
        _context.flot                  = _flot;
        _context.number           = _number;
        _context.stype               = _stype;
        _context.type                = _type;

        /** 读取分类类型 */
        if(DealWithCommonService.contains(_digitArr,_lotteryClassity)){

            _context.classify      =  "digit";

        }else if(DealWithCommonService.contains(_highArr,_lotteryClassity)){

            _context.classify      =  "high";

        }else{

            return _omissionService.errorMsg('检查一下这个彩种类型是不是不存在！');
        }


        /** 获取导航信息 */
        _context.mainNav =await DealWithCommonService.mainNavData(__lotteryAllTree, 'omission');

        /** 走势数据 */
        _context.omission = _omission;

        _context.threeLevel = DealWithCommonService.getOmissionThreeLevel(_omission, _flot);




            if("digit" == _context.classify){
                _data =   await _lotteryService.getDigitLotteryMain();
            }else{

                _data = await _lotteryService.getHighLotteryMain(_type);

            }


            if(_lotteryClassity == 'k3'){
                if(_data.awardResult && _data.awardResult.resultList) {
                    _data.awardResult.resultList = _data.awardResult.resultList.map(item => {
                        return item >= 10 ? item : '0' + item;
                    })
                }
            }


            /** 排列3和福彩3d共用help.config配置 */
            if(_lotteryClassity == 'pl3'){

                _context.helpConfig    =  this.configService.getOmissionHelpConfig('fc3d', _flot,_stype);
            }else{

                /** 读取帮助说明配置 */
                _context.helpConfig    =  this.configService.getOmissionHelpConfig(_lotteryClassity, _flot,_stype);
            }


            _context = Object.assign(_context, _data);


            let _result = await _omissionService.getMissFlotData(_lotteryCode, _flot, _number, _stype);


            /** 默认的遗漏flot值 */
            if(_lotteryCode == 'xync'){

                _context.chartDefultFlot = this.configService.getChartDefultFlot('kl10');
            }else{

                _context.chartDefultFlot = this.configService.getChartDefultFlot(_lotteryClassity);
            }


            if("digit" == _context.classify){

                /** 默认的杀号type值 */
                _context.shddDefultFlot = this.configService.getShddDefultFlot(_lotteryCode);

                /** 默认的杀号type值 */
                _context.hmtjDefultFlot = this.configService.getHmtjDefultFlot(_lotteryCode);

                //console.log('shddDefultFlot:'+_context.shddDefultFlot);
                //console.log('hmtjDefultFlot:'+_context.hmtjDefultFlot);
            }


            _context.omissionData = _omissionService.resultForm(_result);
            _context.omissionString = JSON.stringify(_context.omissionData);

            return this.render(`omission/omissionChart`, _context, request, reply);


        }catch(ex){

            _omissionService.errorMsg(ex);
            return reply.redirect('/404',request, reply);
        }

    }


    /**
     *  查询以及请求图表
     */
    async requsetomissionchart(request, reply){

        let  _lotteryCode  = `${request.params.code}`;
        let  _flot               = `${request.query.flot}`;
        let  _number        = `${request.query.number}`;
        let  _stype            = `${request.query.type}`;
        let  _type;

        let  _digitArr;
        let  _highArr;
        let  _allCode;
        let  _lotteryClassity;
        let  _omissionService = new OmissionService();

        if(_lotteryCode !=undefined){

            _digitArr = [
                'dlt','fc3d','pl3','pl5','qlc','qxc','ssq',
            ];

            _highArr = [
                '11x5','k3','ssc','hn481','k3','kl8','kl10',
                'gxkl10','pk10','ssl','sxytdj','xync'
            ];

            _allCode = [].concat(_digitArr, _highArr);

            for(let  i=0; i < _allCode.length; i++){

                if (new RegExp(_allCode[i]).test(_lotteryCode)) {

                    _lotteryClassity = _allCode[i];
                    break;
                }

                if(i==_allCode.length-1){
                    return _omissionService.errorMsg('彩种名不存在！');
                }

            }

        }else{

            return _omissionService.errorMsg('参数lotteryCode不能为空！');
        }


        if(_flot == undefined){

            return _omissionService.errorMsg('参数_flot不能为空！');

        }else{

            _flot = parseInt(_flot);
        }

        if(_number == undefined){

            return _omissionService.errorMsg('参数_number不能为空！');

        }else{

            /************  要对number的符号进行还原处理， 如果是or要换成#号，如果是下划线要换成逗号 ************/
            _number = _number.replace(/\_/g, ',').replace(/or/g, '#');

        }

        if(_stype == undefined){

            return _omissionService.errorMsg('参数_stype不能为空！');

        }else{

            _stype = parseInt(_stype)
        }



        let _context = this.getBaseContext({});

        _context.lotteryCode = _lotteryCode;
        _context.flot = _flot;
        _context.number = _number;
        _context.stype = _stype;

        try{

            /** 获取对应类别的遗漏图表的所有类型配置 */
            let _omission = DealWithCommonService.getOmission( this.configService.omission , _lotteryClassity);

            let _html;

            if(_number != ''){

                _context.omissionData = _omissionService.resultForm(await _omissionService.getMissFlotData(_lotteryCode, _flot, _number, _stype));

            }else{

                _context.omissionData = [];
            }

            if(_context.omissionData ==null){

                _context.omissionData = [];
            }

            _context.omission = _omission;

            if(_context.omissionData.length != 0){

                _html = __template(this.path.join(__dirname, '../../views/template/omission/omissionChart.component.art'), _context);

            }else{

                _html = '';
            }


            return this.json({
                lastPeriod: _context.omissionData.length > 0 ? _context.omissionData[0].lastPeriod : null,
                omission: _context.omissionData,
                html: _html
            },request,reply);


        }catch(ex){

            return _omissionService.errorMsg(ex);

        }


    }



}
module.exports = OmissionController;