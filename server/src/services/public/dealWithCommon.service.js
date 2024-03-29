/***********************************************************************************
 *
 *                                     公共处理服务;
 *                                     作用: 专门用来处理一些公共的函数和方法;
 *
 ***********************************************************************************/
'use strict';
import { LotteryService } from './lottery.service';
import { ArticleService } from '../article/article.service';
import { RuleService } from '../rule/rule.service';
import { InitController } from '../../controllers/public/init.controller';
import { PointService } from '../point/point.service';

const dealWithCommonService = new class DealWithCommonService {

    constructor() {

    }

    /**
     *   判断一下彩种树存在不存在，存在不请求，不存在再次请求
     */
    async getBaseLotteryTree(_province, _lotteryAllTree){

        try{

            let  _lotterySerives = new LotteryService();

            if(_province == undefined){

                _province = _lotterySerives.resultForm(await _lotterySerives.getProvinceAsync());
            }

            if(_lotteryAllTree == undefined){

                _lotteryAllTree = _lotterySerives.resultForm(await _lotterySerives.getLotteryAllTree());
            }
        }catch(ex){
            console.error('getBaseLotteryTree:函数出现问题！');
            console.error(ex);
            return false;
        }

     }


    /**
     *   分类资讯首页所有的资讯，归类
     */
    articleClassification(_articleArrayList){

        if(_articleArrayList == undefined || typeof(_articleArrayList) != 'object'){

            console.error('articleClassification: 参数_articleArrayList不能为空或者类型需要是数组类型！');
            return;
        }

        let  _ssqArray   = [];
        let  _fc3dArray = [];
        let   _pl3Array   = [];
        let   _pl5Array   = [];
        let   _dltArray   = [];
        let   _qlcArray   = [];
        let   _qxcArray = [];

        if(_articleArrayList) {

            for (var i = 0; i < _articleArrayList.length; i++) {

                if (_articleArrayList[i].lotteryCode == 'ssq' ) {

                    _ssqArray.push(_articleArrayList[i]);

                }else if (_articleArrayList[i].lotteryCode == 'fc3d' ) {

                    _fc3dArray.push(_articleArrayList[i]);

                }else if (_articleArrayList[i].lotteryCode == 'pl3' ) {

                    _pl3Array.push(_articleArrayList[i]);

                }else if (_articleArrayList[i].lotteryCode == 'pl5' ) {

                    _pl5Array.push(_articleArrayList[i]);

                }else if (_articleArrayList[i].lotteryCode == 'dlt' ) {

                    _dltArray.push(_articleArrayList[i]);

                }else if (_articleArrayList[i].lotteryCode == 'qlc' ) {

                    _qlcArray.push(_articleArrayList[i]);

                }else if (_articleArrayList[i].lotteryCode == 'qxc' ) {

                    _qxcArray.push(_articleArrayList[i]);

                }

            }

        }


        return ([
            { code: 'ssq', name: '双色球', articleList: this.categoryIdClassification(_ssqArray) },
            { code: 'fc3d', name: '福彩3D', articleList: this.categoryIdClassification(_fc3dArray) },
            { code: 'qlc', name: '七乐彩', articleList: this.categoryIdClassification(_qlcArray) },
            { code: 'dlt', name: '大乐透', articleList: this.categoryIdClassification(_dltArray) },
            { code: 'pl3', name: '排列3', articleList: this.categoryIdClassification(_pl3Array) },
            { code: 'pl5', name: '排列5', articleList: this.categoryIdClassification(_pl5Array) },
            { code: 'qxc', name: '七星彩', articleList: this.categoryIdClassification(_qxcArray) }
        ])

    }

    /**
     *  归类categoryId
     */
    categoryIdClassification(_array){

        let  _obj    = {};
        let  _zjtj     = [];   //39
        let  _mfck = [];   //41
        let  _shdd = [];   //40
        let  _jq      = [];   //37

        for(var i =0; i< _array.length; i++){

            if(_array[i].categoryId == 37){

                _jq.push(_array[i]);

            }else if(_array[i].categoryId == 39){

                _zjtj.push(_array[i]);

            }else if(_array[i].categoryId == 40){

                _shdd.push(_array[i]);

            }else if(_array[i].categoryId == 41){

                _mfck.push(_array[i]);
            }

        }

            _obj['zjtj'] = _zjtj;
            _obj['mfck'] = _mfck;
            _obj['shdd'] = _shdd;
            _obj['jq'] = _jq;


        return _obj;
    }

    /**
     *   获取杀号定胆中的第三级
     */
    getShddThreeLevel(_shdd, _flot){

        if(_shdd == undefined || typeof(_shdd) != 'object'){

            console.error('getShddThreeLevel: 参数getShddThreeLevell不能为空或者类型需要是数组类型！');
            return;
        }

        if(_flot == undefined || typeof(_flot) != 'number'){

            console.error('getShddThreeLevel: 参数_flot不能为空或者类型需要是数字类型！');
            return;
        }

        var _obj = null;

        _shdd.forEach((_val, _index, _arr)=>{

            if(_val.child !=undefined){

                _val.child.forEach((_sval, _sindex, _sarr)=>{

                    if(_sval.children !=undefined){

                        _sval.children.forEach((_kval, _kindex, _karr)=>{

                            if(_kval.code == _flot){

                                _obj ={};
                                _obj.parentName = _val.name;
                                _obj.name            =  _sval.name;
                                _obj.code             =  _sval.code;
                                _obj.children        = _sval.children;
                            }

                        })

                    }

                })

            }
        })

        return  _obj;

    }


    /**
     *   获取遗漏图表中的第三级
     */
    getOmissionThreeLevel(_omission, _flot){

        if(_omission == undefined || typeof(_omission) != 'object'){

            console.error('getOmissionThreeLevel: 参数getOmissionThreeLevel不能为空或者类型需要是数组类型！');
            return;
        }

        if(_flot == undefined || typeof(_flot) != 'number'){

            console.error('getOmissionThreeLevel: 参数_flot不能为空或者类型需要是数字类型！');
            return;
        }

        var _obj = null;

        _omission.forEach((_val, _index, _arr)=>{

             if(_val.child !=undefined){

                 _val.child.forEach((_sval, _sindex, _sarr)=>{


                     if(_sval.children !=undefined){

                         _sval.children.forEach((_kval, _kindex, _karr)=>{

                             if(_kval.code == _flot){

                                     _obj ={};
                                     _obj.parentName = _val.name;
                                     _obj.name            =  _sval.name;
                                     _obj.code             =  _sval.code;
                                     _obj.children        = _sval.children;


                             }

                         })

                     }

                 })

             }
        })

        return  _obj;

    }

    /**
     *  通过获取对应类别的杀号定胆的所有类型配置
     */
    getHmtj(_hmtjConfig, _lotteryClassity){

        if(_hmtjConfig == undefined || typeof(_hmtjConfig) != 'object'){

            console.error('getHmtj: 参数_hmtjConfig不能为空或者类型需要是数组类型！');
            return;
        }

        if(_lotteryClassity == undefined || typeof(_lotteryClassity) != 'string'){

            console.error('getHmtj: 参数_lotteryClassity不能为空或者类型需要是字符串类型！');
            return;
        }

        for(let i=0; i<_hmtjConfig.length; i++){

            for(let j=0; j<_hmtjConfig[i].child.length; j++){

                if(_hmtjConfig[i].child[j].id == _lotteryClassity){

                    return _hmtjConfig[i].child[j].child;

                }

            }

        }

    }

    /**
     *  通过获取对应类别的杀号定胆的所有类型配置
     */
    getShdd(_shddConfig, _lotteryClassity){

        if(_shddConfig == undefined || typeof(_shddConfig) != 'object'){

            console.error('getShdd: 参数_shddConfig不能为空或者类型需要是数组类型！');
            return;
        }

        if(_lotteryClassity == undefined || typeof(_lotteryClassity) != 'string'){

            console.error('getShdd: 参数_lotteryClassity不能为空或者类型需要是字符串类型！');
            return;
        }

        for(let i=0; i<_shddConfig.length; i++){

            for(let j=0; j<_shddConfig[i].child.length; j++){

                if(_shddConfig[i].child[j].id == _lotteryClassity){

                    return _shddConfig[i].child[j].child;

                }

            }

        }

    }


    /**
     *  通过获取对应类别的遗漏图表的所有类型配置
     */
    getOmission(_omissionConfig, _lotteryClassity){

        if(_omissionConfig == undefined || typeof(_omissionConfig) != 'object'){

             console.error('getOmission: 参数_omission不能为空或者类型需要是数组类型！');
             return;
        }

        if(_lotteryClassity == undefined || typeof(_lotteryClassity) != 'string'){

            console.error('getOmission: 参数_lotteryClassity不能为空或者类型需要是字符串类型！');
            return;
        }

      for(let i=0; i<_omissionConfig.length; i++){

            for(let j=0; j<_omissionConfig[i].child.length; j++){

                if(_omissionConfig[i].child[j].id == _lotteryClassity){

                    return _omissionConfig[i].child[j].child;

                }

            }

      }

    }

    /**
     *  通过获取对应类别的走势图表的所有类型配置
     */
    getTrend(_trendConfig, _lotteryClassity){

        if(_trendConfig == undefined || typeof(_trendConfig) != 'object'){

            console.error('getTrend: 参数_trend不能为空或者类型需要是数组类型！');
            return;
        }

        if(_lotteryClassity == undefined || typeof(_lotteryClassity) != 'string'){

            console.error('getTrend: 参数_lotteryClassity不能为空或者类型需要是字符串类型！');
            return;
        }

        for(let i=0; i<_trendConfig.length; i++){

            for(let j=0; j<_trendConfig[i].child.length; j++){

                if(_trendConfig[i].child[j].id == _lotteryClassity){

                    return _trendConfig[i].child[j].child;

                }

            }

        }

    }



    /**
     *   用于数组对象属性排序使用(array.sort的使用);
     *   @param: 需要进行排序得对象1；
     *   @param: 需要进行排序得对象2 ;
     *   @param: 需要进行排序得属性;
     *
     *  数组根据数组对象中的某个属性值进行排序的方法
     * 使用例子：newArray.sort(sortBy('number',false))    表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
     * @param attr 排序的属性 如number属性
     * @param rev true表示升序排列，false降序排序
     * */
    sortBy(attr, rev) {

        /** 第二个参数没有传递 默认升序排列 */
        if (rev == undefined) {
            rev = 1;
        } else {
            rev = (rev) ? 1 : -1;
        }

        return function (a, b) {
            let _a = parseFloat(a[attr]);
            let _b = parseFloat(b[attr]);
            if (_a < _b) {
                return rev * -1;
            } else if (_a > _b) {
                return rev * 1;
            }
            return 0;
        }
    }

    async  getLotteryTree() {

        let lotterySerives = new LotteryService();

        try {

            return lotterySerives.resultForm(await lotterySerives.getLotteryAllTree());

        } catch (ex) {

            return console.error(ex);
        }

    }

    /**
     *  获取省份分类===================================(待修改)
     */
    async getProvinceAsync() {

        let lotterySerives = new LotteryService();

        //省份分类;
        try {

            return await lotterySerives.getProvince();

        } catch (ex) {

            return console.error(ex);
        }
    }

    /**
     * 获取SEO JSON
     */
    async getSeoJson() {
        let _service = new LotteryService();
        try {

            let cacheOpt = _service.setCache(`data/seo.json`, process.env.SEO_EXPRIE_TIME ? process.env.SEO_EXPRIE_TIME : 5000);

            const httpOpt = {
                url: `data/seo.json`,
                json: false
            };

            return await _service.httpGet(httpOpt, cacheOpt, 2);

        } catch (ex) {
            return _service.errorMsg(ex);
        }
    }

    /**
     *  判断元素是否在数组中;
     *  @param { 数组 } _arr,
     *  @param {需要判断是否在数组中得元素}  _obj
     */
    contains(_arr, _obj) {

        if (!_arr || typeof(_arr) != 'object') {
            console.error('contains：参数1不存在或者不正确！');
            return;
        }

        if (_obj == undefined) {
            console.error('contains：参数2不存在或者不正确！');
            return;
        }

        var i = _arr.length;
        while (i--) {
            if (_arr[i] === _obj) {
                return true;
            }
        }
        return false;
    }


    /**
     * 获取某个元素在数组中得索引
     * @param: 数组元素;
     */
    arrayIndexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) return i;
        }
        return -1;
    };

    /**
     *  删除数组中某个元素;
     * @param val
     */
    arrayRemove(arr, val) {
        var index = this.arrayIndexOf(arr, val);
        if (index > -1) {
            arr.splice(index, 1);
        }
    };


    /**
     * 通过索引删除数组元素
     *
     * @param int index 元素索引
     * @returns array
     */
    deleteIndex(arr, index) {
        return arr.slice(0, index).concat(arr.slice(parseInt(index, 10) + 1));
    }

    /**
     *  判断对象是否拥有某个属性
     */
    hasPrototype(object, name) {
        return object.hasOwnProperty(name) && (name in object);
    }

    /**
     *  资讯列表添加一个分类字段;
     */
    setArtcleClassity(_artcleList, _province) {

        if (_artcleList == undefined || typeof(_artcleList) != 'object') {
            console.error('setArtcleClassity: 参数_artcleList为空或者数据类型不正确！');
            return;
        }

        if (_province == undefined || typeof(_province) != 'object') {
            console.error('setArtcleClassity: 参数_artcleList为空或者数据类型不正确！');
            return;
        }

        let _artcleListData = _artcleList;

        if (_artcleListData) {

            if (_artcleListData.length > 0) {

                for (let i = 0; i < _artcleListData.length; i++) {

                    _artcleListData[i].classify = this.getLotteryClassify(_artcleListData[i].lotteryCode, _province);

                }

                /** 否则不是一个数组，只是一个对象 */
            } else {
                _artcleListData.classify = this.getLotteryClassify(_artcleListData.lotteryCode, _province);
            }
        }

        return _artcleListData;

    }

    /**
     *  获取数字彩所有彩种
     */
    getDigitAllLottery(_province) {

        if (!_province || typeof(_province) != 'object') {
            console.error('getDigitAllLottery: 参数_province为空或者数据类型不正确！');
            return;
        }

        for (let i = 0; i < _province.length; i++) {
            if (_province[i].name == '全国' && _province[i].id == 0) {

                return _province[i].childs;
                break;

            }
        }
        return [];
    }


    /**
     *  获取对应彩种 的奖项 中奖条件信息
     *  @param 彩种类型
     *  @param 奖项划分
     */
    getLotteryAwardGrade(_lotteryCode, _lotteryAwardGrade) {

        if (_lotteryCode == undefined || typeof(_lotteryCode) != "string") {
            console.error('getLotteryAwardGrade: 参数_lotteryCode不能为空或者类型不正确！');
            return;
        }
        if (_lotteryAwardGrade == undefined || typeof(_lotteryAwardGrade) != "object") {
            console.error('getLotteryAwardGrade: 参数_lotteryAwardGrade不能为空或者类型不正确！');
            return;
        }

        var varr = [];
        var varrObj = _lotteryAwardGrade;
        for (var i = 0; i < varrObj.length; i++) {
            if (varrObj[i].lotterycode == _lotteryCode) {
                varr = varrObj[i].award;
                break;
            }
        }
        return varr;
    }


    /**
     *  配置导航 ---- 直接使用彩种树接口进行绑定
     *  @param: 彩种树 （Array）
     *  @return: Object;
     */
    async mainNavData(_lotteryAllTree, _activeCode) {

        if (!_lotteryAllTree || typeof(_lotteryAllTree) != 'object') {

            console.warn('mainNavData: 参数_lotteryAllTree为空, 这里会再次请求彩种树，所以只是警告！');

            try{

                let  _lotterySerives = new LotteryService();
                _lotteryAllTree = _lotterySerives.resultForm(await _lotterySerives.getLotteryAllTree());

                return this.dealWithMainNav(_lotteryAllTree, _activeCode);

            }catch(ex){
                console.error('mainNavData: 出现请求异常！')
                console.error(ex);
                return false;
            }

        }

        return this.dealWithMainNav(_lotteryAllTree, _activeCode);

    }

    /**
     *  处理mainNav
     */
    dealWithMainNav(_lotteryAllTree, _activeCode){

        let digitArray = [];
        /** 数组彩数组 */
        let localArray = [];
        /** 地方彩数组 */
        let highArray = [];
        /** 高频彩数组 */
        let lotteryAllTree = _lotteryAllTree;

        let specialProvinceCode = ['好彩1', '15选5', '东方6+1']

        let navObject = {
            home: {
                title: '首页', link: '/', active: true,
            },
            lottery: {
                title: '开奖大厅', link: '/lottery', active: false,
                twoLevel: {
                    digit: {
                        title: '全国彩', code: 1, imgClass: 'qg',
                        childs: []
                    },
                    high: {
                        title: '高频彩', code: 2, imgClass: 'gp',
                        childs: []
                    },
                    local: {
                        title: '地方彩', code: 3, imgClass: 'df',
                        childs: []
                    }
                }
            },
            chart: {
                title: '走势图表', link: '/chart', active: false,
            },
            omission: {
                title: '遗漏分析', link: '/omission', active: false,
            },
            live: {
                title: '开奖直播', link: '/live', active: false,
            },
            plan: {
                title: '追号推荐', link: '/plan', active: false,
            },
            article: {
                title: '彩票资讯', link: '/article', active: false,
            }
        }


        for (let i = 0; i < lotteryAllTree.length; i++) {

            /** 如果是数字彩的话 */
            if (lotteryAllTree[i].groupId == 1) {

                for (let j = 0; j < lotteryAllTree[i].children.length; j++) {

                    for (let k = 0; k < lotteryAllTree[i].children[j].children.length; k++) {

                        lotteryAllTree[i].children[j].children[k].classify = 'digit';
                        digitArray.push(lotteryAllTree[i].children[j].children[k]);

                    }

                }

            } else if (lotteryAllTree[i].groupId == 2) {


                for (let j = 0; j < lotteryAllTree[i].children.length; j++) {


                    for (let k = 0; k < lotteryAllTree[i].children[j].children.length; k++) {

                        lotteryAllTree[i].children[j].children[k].classify = 'high';

                        if (lotteryAllTree[i].children[j].name == '11选5') {

                            lotteryAllTree[i].children[j].children[k].type = '11x5';

                        } else if (lotteryAllTree[i].children[j].name == '快3') {

                            lotteryAllTree[i].children[j].children[k].type = 'k3';

                        } else if (lotteryAllTree[i].children[j].name == '时时彩') {

                            lotteryAllTree[i].children[j].children[k].type = 'ssc';

                        } else if (lotteryAllTree[i].children[j].name == '快乐十分') {

                            lotteryAllTree[i].children[j].children[k].type = 'kl10';

                        } else if (lotteryAllTree[i].children[j].name == '其它') {

                            lotteryAllTree[i].children[j].children[k].type = 'other';
                        }

                        highArray.push(lotteryAllTree[i].children[j].children[k]);

                    }


                }

            } else if (lotteryAllTree[i].groupId == 3) {

                for (let j = 0; j < lotteryAllTree[i].children.length; j++) {

                    for (let z = 0; z < lotteryAllTree[i].children[j].children.length; z++) {

                        /** 处理特殊省份彩种 */
                        for (let k = 0; k < specialProvinceCode.length; k++) {

                            /** 匹配特殊华东六省的，因为它会发配到了其他省份去了，所以要在它前面加上省份 , 如：东方6+1和15选5还有好彩1需要前面加上省份*/
                            if (specialProvinceCode[k] == lotteryAllTree[i].children[j].children[z].name) {

                                let provinceName = lotteryAllTree[i].children[j].name.replace(/省/g, '');
                                lotteryAllTree[i].children[j].children[z].name = provinceName + "" + lotteryAllTree[i].children[j].children[z].name;

                                //console.log(localLottery.children[i].children[j].name)
                                break;
                            }
                        }

                    }


                    for (let k = 0; k < lotteryAllTree[i].children[j].children.length; k++) {


                        lotteryAllTree[i].children[j].children[k].classify = 'local';

                        lotteryAllTree[i].children[j].children[k].provinceId = lotteryAllTree[i].children[j].provinceId;
                        localArray.push(lotteryAllTree[i].children[j].children[k]);

                    }

                }

            }

        }


        navObject.lottery.twoLevel.digit.childs = digitArray;
        navObject.lottery.twoLevel.local.childs = localArray;
        navObject.lottery.twoLevel.high.childs = highArray;


        /** 设置头部那个被选中 */
        if (_activeCode == undefined) {

            _activeCode == 'home';
        } else {

            for (let key in navObject) {

                if (key == _activeCode) {
                    navObject[key].active = true;
                } else {
                    navObject[key].active = false;
                }

            }

        }

        return navObject;
    }


    /**
     *  显示详情页左边导航和Tab那个显示
     */
    showDetailLeftNav(_context, _classify) {

        if (!_context || typeof(_context) != 'object') {
            console.error('showDetailLeftNav: 参数1_context不正确！');
            return;
        }

        if (!_classify || typeof(_classify) != 'string') {
            console.error('showDetailLeftNav: 参数2_classify不正确！');
            return;
        }

        /** 显示那个分类 */
        if (_classify == 'digit') {

            _context.isShowDigitDetailLeft = true;
            _context.isShowHighDetailLeft = false;
            _context.isShowLocalDetailLeft = false;

        } else if (_classify == 'high') {

            _context.isShowDigitDetailLeft = false;
            _context.isShowHighDetailLeft = true;
            _context.isShowLocalDetailLeft = false;

        } else if (_classify == 'local') {

            _context.isShowDigitDetailLeft = false;
            _context.isShowHighDetailLeft = false;
            _context.isShowLocalDetailLeft = true;

        }

    }

    /**
     *  传入code值返回彩种大类
     *  @param: _code (String);
     *  @param: _province (Array)
     *  @return: String
     */
    getLotteryCodeType(_code, _province) {

        if (!_code || typeof(_code) != 'string') {

            console.error('getLotteryCodeType: 参数_code不能为空或者类型不正确！');
            return;

        }

        if (!_province || typeof(_province) != 'object') {

            console.error('getLotteryCodeType: 参数_province不能为空或者类型不正确！');
            return;

        }

        for (let i = 0; i < _province.length; i++) {

            for (let j = 0; j < _province[i].childs.length; j++) {

                if (_code == _province[i].childs[j].code) {

                    return _province[i].childs[j].type;
                }
            }
        }
    }


    /**
     * 传入code值返回彩种分类
     * @param: _code (String);
     * @param: _province (Array)
     * @return: String
     */
    getLotteryClassify(_code, _province) {

        if (!_code || typeof(_code) != 'string') {

            console.error('getClassify: 参数_code不能为空或者类型不正确！');
            return;

        }

        if (!_province || typeof(_province) != 'object') {

            console.error('getClassify: 参数_province不能为空或者类型不正确！');
            return;

        }

        for (let i = 0; i < _province.length; i++) {

            for (let j = 0; j < _province[i].childs.length; j++) {

                if (_code == _province[i].childs[j].code) {

                    return _province[i].childs[j].classify;
                }
            }
        }

    }

    /**
     *    *  传入code值返回彩种名字;
     *      @param: _code (String);
     *      @param: _province (Array)
     *      @return: String
     */
    async getLotteryNameForLotteryAllTree(_code, _lotteryAllTree){

        if (!_code || typeof(_code) != 'string') {

            console.error('getLotteryNameForLotteryAllTree: 参数_code不能为空或者类型不正确！');
            return '---';

        }

        let  _lotteryName;

        /** 这里用try catch的目的是因为foreach当条件满足的时候无法终止循环，为了减少性能开销，所以条件满足的时候终止foreach循环 */
        try {

            if (_lotteryAllTree == undefined || typeof(_lotteryAllTree) != 'object') {

                console.warn('getLotteryNameForLotteryAllTree: 参数_lotteryAllTree不能为空, 这里会再次请求彩种树，所以只是警告！');

                let _lotterySerives = new LotteryService();

                _lotteryAllTree =  _lotterySerives.resultForm(await _lotterySerives.getLotteryAllTree())

            }

                _lotteryAllTree.forEach((_val, _index, _arr) => {

                    if (_val.children != undefined) {

                        _val.children.forEach((_sval, _sindex, _sarr) => {

                            if (_sval.children != undefined) {

                                _sval.children.forEach((_zval, _zindex, _zarr) => {

                                    if (_zval.code == _code) {

                                        _lotteryName = _zval.name;
                                        foreach.break=new Error("StopIteration");
                                    }
                                })
                            }
                        })
                    }
                })
        }catch(ex){

            if(ex.message !="foreach is not defined") {
                throw ex;
             }
        }

        return _lotteryName
    }

    /**
     *  传入code值返回彩种名字;
     * @param: _code (String);
     * @param: _province (Array)
     * @return: String
     */
    getLotteryName(_code, _province) {

        if (!_code || typeof(_code) != 'string') {

            console.error('getLotteryName: 参数_code不能为空或者类型不正确！');
            return;

        }

        if (!_province || typeof(_province) != 'object') {

            console.error('getLotteryName: 参数_province不能为空或者类型不正确！');
            return;

        }

        for (let i = 0; i < _province.length; i++) {

            for (let j = 0; j < _province[i].childs.length; j++) {

                if (_code == _province[i].childs[j].code) {

                    return _province[i].childs[j].name;
                }
            }
        }

    }

    /**
     * 显示底部推荐
     * @param {*} type
     */
    async showRecommend(type) {

        let _data = [];
        let _this = this;

        try {
            if (type == 'high') {
                if (!global.__highRecommend) {
                    let _service = new LotteryService();
                    _data = (await _service.getAllAwardData()).high;
                    global.__highRecommend = _data;
                } else {
                    _data = global.__highRecommend;
                }
            } else {
                //'双色球，福彩3D，七乐彩，大乐透，排列三，排列五，七星彩'
                let _tmp = [
                    {name: '双色球', code: 'ssq'},
                    {name: '福彩3D', code: 'fc3d'},
                    {name: '七乐彩', code: 'qlc'},
                    {name: '大乐透', code: 'dlt'},
                    {name: '排列3', code: 'pl3'},
                    {name: '排列5', code: 'pl5'},
                    {name: '七星彩', code: 'qxc'}
                ];

                let _tmpDetail = [
                    {name: '', code: 'index'},
                    {name: '直播', code: 'live'},
                    {name: '历史', code: 'history'},
                    {name: '资讯', code: 'article'},
                    {name: '技巧', code: 'article'}
                ];
                //数字彩，直播，历史，资讯，技巧链接
                _tmp.forEach(item => {
                    let _tmpData = [];
                    _tmpDetail.forEach(detail => {
                        _tmpData.push({
                            name: `${item.name}${detail.name}`,
                            url: _this.getDigitTypeUrl(item.code, detail.code)
                        })
                    });

                    _data.push(_tmpData);
                });
            }
        } catch (ex) {
            console.error(ex);
        }

        return _data;

    }

    /**
     * 获取数字彩对应的URL
     * @param {*} lotteryCode
     * @param {*} type
     */
    getDigitTypeUrl(lotteryCode, type) {
        let _url = '';
        switch (type) {
            case 'index':
            case 'history':
                _url = `/digit/${lotteryCode}/${type}`;
                break;
            case 'live':
                _url = `/live/${lotteryCode}-detail`;
                break;
            case 'article':
                _url = `/article/list-${lotteryCode}-37-p1`;
                break;
            default:
                _url = `/digit/${lotteryCode}/${type}`;
                break;
        }

        return _url;
    }


    /**
     * 资讯相关右边内容
     * @param {*} type digit or high
     */
    async articleRight(type) {

        let _service = new LotteryService(),
            _result = {
                award: [],
                video: []
            };

        try {

            // 数字彩开奖内容
            let _data = await _service.getawardnotice(10);

            if (_data.state == 1) {
                _result.award = _data.result;
            }

            // 视频开奖内容
            // let _video = await _service.getAwardDataGroup(type == 'digit' ? 1 : 2, 0);

            // if (_video.state == 1) {

            //     _video.result = _video.result.sort((a, b) => {
            //         return a.awardTimeInterval - b.awardTimeInterval;
            //     });

            //     if (_video.result.length > 2) _video.result = _video.result.slice(0, 2);

            //     _video.result.map(item => {
            //         if (type == 'digit') {
            //             item.times = item.awardTimeInterval.SecondsTohhmmss();
            //             let _tmp = item.times.split(':');
            //             if (parseInt(_tmp[0]) == 0) {
            //                 item.times = `${_tmp[1]}:${_tmp[2]}`;
            //             } else {
            //                 item.times = `${_tmp[0]}:${_tmp[1]}:${_tmp[2]}`;
            //             }
            //         } else {
            //             item.times = item.awardTimeInterval.SecondsTommss();
            //         }

            //         item.type = type;
            //     });

            //     _result.video = _video.result;

            //     /** 获取其中一条得系统时间 */
            //     _result.systime = _video.result[0].time;
            // }
             _result.systime = new Date();
        } catch (ex) {
            _result = _service.errorMsg(ex.message);
        }

        return _result;
    }

    /**
     * 根据彩种代码返回追号类型列表
     * @param {*} code
     */
    getPlanTypeListByCode(code) {

        if (!code) {
            console.error(__dirname + '--getPlanTypeListByCode： code不能为空');
            return [];
        }

        let _result = [];
        // 11x5
        if (code.includes('11x5')) {
            for (let i = 1; i < 9; i++) {
                _result.push({
                    id: i,
                    name: i == 1 ? '前一推荐' : `任${i.toString().ConvertToChinese()}推荐`
                });
            }
        } else if (code.includes('k3')) {
            _result.push({id: 1, name: `和值推荐`});
            _result.push({id: 2, name: `二不同推荐`});
        } else if (code.includes('kl10') || code.includes('xync')) {
            if (code.includes('gxkl10')) {
                _result.push({id: 1, name: '直特推荐'});
                _result.push({id: 2, name: '直一推荐'});
                _result.push({id: 3, name: '直二推荐'});
            } else {
                for (let i = 2; i < 6; i++) {
                    _result.push({
                        id: i,
                        name: `任${i.toString().ConvertToChinese()}推荐`
                    });
                }
            }
        } else if (code.includes('ssc')) {
            for (let i = 1; i < 4; i++) {
                _result.push({
                    id: i,
                    name: `${i.toString().ConvertToChinese()}星推荐`
                });
            }
        }

        return _result;
    }

    /**
     * 通过全国彩种树获取名称
     * @param {*} code
     */
    async getLotteryNameByTree(code) {
        if (!code) {
            console.error(__dirname + '--getLotteryNameByTree: code 不存在')
            return '';
        }
        let _service = new LotteryService();
        let _name = '';
        try {

            // 获取高频彩
            let _high = await _service.getLotteryAllTree(2);
            _high = _service.resultArray(_high);
            for (let lottery of _high[0].children) {
                for (let item of lottery.children) {
                    if (item.code == code) {
                        _name = item.name;
                        break;
                    }
                }

                if (_name) {
                    break;
                }
            }

        } catch (ex) {
            console.error(ex);
        }
        return _name;
    }


    /**
     *  公告详情底部
     *  @param: categoryId;
     *  5-----"热门资讯"
     *  6-----"最新资讯"
     *  8-----"技巧资讯"
     *  32-----"十一选五技巧"
     *  33------"快乐十分技巧"
     *  35------"时时彩技巧"
     *  36------"其它技巧"
     *  37------"数字彩技巧"
     */
    async articleBottom(_categoryId, _digitArray) {

        if (_categoryId == undefined || typeof(_categoryId) != 'number') {

            console.error('articleBottom: _categoryId参数为空或者不是数字类型！');
            return;
        }

        if (_digitArray == undefined || typeof(_digitArray) != 'object') {

            console.error('articleBottom: _categoryId参数为空或者不是数字类型！');
            return;
        }

        let _result = []

        let _articleService = new ArticleService();

        try {

            /** 先请求全部得 */
            let allArticleList = _articleService.resultForm(await _articleService.articleList({
                categoryId: _categoryId,
                lotteryCode: '',
                pageIndex: 1,
                pageSize: 9
            }));

            _result.push({
                name: '全部',
                code: 'all',
                data: allArticleList.data
            })

            /** 再请求数字彩得 */
            for (let i = 0; i < _digitArray.length; i++) {

                let articleList = _articleService.resultForm(await _articleService.articleList({
                    categoryId: _categoryId,
                    lotteryCode: _digitArray[i].code,
                    pageIndex: 1,
                    pageSize: 9
                }));

                _result.push({
                    name: _digitArray[i].name,
                    code: _digitArray[i].code,
                    data: articleList.data
                })

            }

            return _result;

        } catch (ex) {

            console.error(ex);
        }

    }


    /**
     * 资讯详情底部组件
     */
    async articleTecBottom() {
        let _result = {
            title: [],
            content: []
        }
        let _articleService = new ArticleService();

        try {

            let _categoryList = await _articleService.articleCategory(8);
            _categoryList = _articleService.resultArray(_categoryList);

            // 只要高频彩
            if (_categoryList.length >= 6) {
                _categoryList = _categoryList.slice(0, 5);
            }

            _categoryList.forEach(item => {
                item.name = item.name.includes('十一') ? '11选5技巧' : item.name;
                item.name = item.name.includes('快三') ? '快3技巧' : item.name;
            });

            _result.title = _categoryList;

            // 获取内容
            for (let i = 0; i < _categoryList.length; i++) {
                let _tmp = await _articleService.articleList({
                    categoryId: _categoryList[i].categoryId,
                    pageIndex: 1,
                    pageSize: 9
                });

                let _tmpResult = [];

                if (_tmp.state == 1) {
                    _tmpResult = _tmp.result.data;
                }
                _result.content.push({categoryId: _categoryList[i].categoryId, list: _tmpResult});
            }

        } catch (ex) {
            return _articleService.errorMsg(ex.message);
        }

        return _result;
    }

    /**
     * 左边通过列表彩种
     * @param {*} _code
     * @param {*} _type
     */
    async leftNavBar(_code, _type, _proname) {

        let ruleService = new RuleService();

        let _data = {},
            _result = {
                digit: {
                    sport: [],
                    boon: [],
                    type:""
                },
                high: {type:"",list:[]},
                other: {
                    list: [],
                    page: [],
                    type:""
                },
                first: {
                    digit: undefined,
                    high: {},
                    other: {},
                    type:""
                }
            };
        try {

            _data = await ruleService.list();
            if (_data.state == 1) {
                _data = _data.result;

                // 处理数据
                let _sport = ['dlt', 'pl3', 'pl5', 'qxc'],          // 全国体彩
                    _boon = ['ssq', 'fc3d', 'qlc'];                 // 全国福彩

                _data.forEach((item, idx) => {

                    // 数字彩
                    if (idx === 0) {
                        let tmp = item.children[0].children.concat(item.children[1].children)
                        tmp.forEach((lottery, idx) => {

                            // 全国福彩
                            _boon.forEach(digit => {
                                if (lottery.code === digit) {
                                    if (!_result.first.digit) {
                                        _result.first.digit = {
                                            name: lottery.name,
                                            code: lottery.code
                                        }
                                        _result.first.type="boon";
                                    }
                                    _result.digit.type="boon";
                                    _result.digit.boon.push(lottery);
                                }
                            });

                            // 全国体彩
                            _sport.forEach(digit => {
                                if (lottery.code === digit) {
                                    _result.digit.type="sport";
                                    _result.digit.sport.push(lottery);
                                }
                            });
                        });
                    }

                    // 高频彩
                    if (idx === 1) {
                        item.children.forEach((highLottery, idx) => {
                            if (idx === 0) {
                                _result.first.high = {
                                    name: highLottery.children[0].name,
                                    code: highLottery.children[0].code
                                }
                                _result.first.type="high";
                            }
                            _result.high.type="high";
                            _result.high.list.push(highLottery)
                        });
                    }

                    // 地方彩
                    if (idx === 2) {
                        let _tmp = [],
                            _i = 1,
                            _length = item.children.length;
                        item.children.forEach((otherLottery, idx) => {
                            if (idx === 0) {

                                _result.first.other = {
                                    name: otherLottery.children[0].name,
                                    code: otherLottery.children[0].code,
                                    provinceId: item.children[0].provinceId
                                }
                                _result.first.type="other";
                            }
                            _result.other.type="other";
                            _result.other.list.push(otherLottery);
                            // 首页结构需要，每三个进行分组
                            _tmp.push(otherLottery);
                            if (_i % 3 === 0) {
                                _result.other.page.push(_tmp);
                                _tmp = [];
                            }
                            // 如果到了结尾
                            if (_i === _length) {
                                _result.other.page.push(_tmp);
                            }

                            _i++;
                        });
                    }
                });

                // 如果出异常则给予默认值
                if (!_result.first.digit) {
                    _result.first.digit = {};

                }

                // if(_type == 'high') {
                //     _result.high.forEach(item => {
                //         item.showActive = false;
                //         item.children.forEach(lottery => {
                //             if(lottery.code == _code) {
                //                 item.showActive = true;
                //             }
                //         });
                //     });
                // } else if (_type == 'other') {
                //     _result.other.list.forEach(item => {
                //         item.showActive = false;
                //         item.children.forEach(lottery => {
                //             if(lottery.code == _code && item.name == _proname) {
                //                 item.showActive = true;
                //             }
                //         });
                //     });
                // }

            }
        } catch (ex) {
            ruleService.errorMsg(ex.message);
        }

        return _result;
    }

    /**
     * 统一404
     * @param {*} reply
     */
    noFound(reply) {
        let _init = new InitController();
        let _controllName = `home`;

        // 基础上下文参数
        let _option = {
                pageCode: 'eycp_site_index'
            },
        _context = _init.getBaseContext(_option);

        this.mainNavData(__lotteryAllTree).then((_ref)=>{

            _context.mainNav =_ref;
        }).catch((ex)=>{

            console.error(ex);
        });

        return reply.view(`home/404`, _context).code(404);
    }

    sitemap() {
        let _this = this;
        // 乱数执行，有多实例但是只需要一个job
        setTimeout(function () {
            if (!global.__job) {
                var schedule = require('node-schedule');

                // 创建任务，每天0时进行更新sitemap
                var rule = new schedule.RecurrenceRule();
                rule.second = 0;
                rule.minute = 0;
                rule.hour = 0;

                var j = schedule.scheduleJob(rule, function () {
                    console.log('现在时间：', new Date());

                    _this.generateSiteMap()
                });

                global.__job = j;
            }

        }, Math.random() * 1000)
    }

    async generateSiteMap() {
        try {
            let site = "http://www.2cp.com";
            let _date = (new Date()).format('yyyy-MM-dd')
            let fs = require('fs');
            var path = require('path');
            // 获取500条资讯
            let _articleService = new ArticleService();
            let _articleReuslt = await _articleService.articleList({
                categoryId: 0,
                pageSize: 500
            });
            _articleReuslt = _articleService.resultForm(_articleReuslt);

            // 获取500条提点
            let _pointService = new PointService();
            let _pointResult = await _pointService.list({
                pageSize: 500
            });
            _pointResult = _pointService.resultForm(_pointResult);

            let _result = [];
            if (_articleReuslt.data != null) {
                _articleReuslt.data.forEach(item => {
                    _result.push(`<url>
            <loc>${site}/article/detail-${item.categoryId}-${item.id}.html</loc>
            <lastmod>${_date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.50</priority>
        </url>`)
                });
            }
            if (_pointResult.items != null) {
                _pointResult.items.forEach(item => {
                    _result.push(`<url>
            <loc>${site}/point/detail-${item.id}.html</loc>
            <lastmod>${_date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.50</priority>
        </url>`)
                });
            }

            // 读取固定的文件,如果知道了路径就加到最后生成的里面去
            // let _fileContent = fs.readFileSync('');

            fs.writeFileSync(path.join(__dirname, '../../../../client') + '/sitemap.xml', `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemalocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${_result.join('\r\n')}
</urlset>`);

        } catch (ex) {
            console.error(ex);
        }
    }

    /**
     * 获取提点ID信息
     * @param {*} pointId
     */
    getPointInfo(pointId) {
        let keys = ['k3', '11x5', 'kl10', 'ssc', 'xync'];
        let info = {};

        try {
            // 拆分ID
            for (let key of keys) {
                if (pointId.includes(key)) {
                    let _codeInfo = pointId.split(key);
                    info.code = `${_codeInfo[0]}${key}`;
                    info.id = _codeInfo[1].substr(8);
                    info.year = _codeInfo[1].substr(0, 4);
                    info.month = parseInt(_codeInfo[1].substr(4, 2));
                    info.day = parseInt(_codeInfo[1].substr(6, 2));
                    info.date = new Date(`${info.year}-${info.month}-${info.day}`);
                    info.nowDate = new Date();

                    let timeSpan = info.nowDate.getTime() - info.date.getTime();
                    info.timeSpan = parseInt(timeSpan / (1000 * 3600));

                    break;
                }
            }
        } catch (ex) {
            console.error(ex);
        }

        return info;
    }

    /**
     * 获取传入的日期和当前日期差了多少小时
     * @param {*} date
     */
    getPlanDateSpanHour(date) {

        // 当前日期
        let _nowDate = (new Date()).getTime();
        let info = {};

        try {
            // 传入的日期
            let _date = (new Date(date)).getTime();
            let _dateSplit = date.split('-');
            info.timeSpan = parseInt((_nowDate - _date) / (1000 * 3600));
            info.year = _dateSplit[0];
            info.month = parseInt(_dateSplit[1]);
            info.day = parseInt(_dateSplit[2]);
        } catch (ex) {
            console.error(ex);
        }

        return info;
    }
}

export default dealWithCommonService;