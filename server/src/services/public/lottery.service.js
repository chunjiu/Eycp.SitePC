'use strict';

import { BaseService } from './base.service';
import { ArticleService } from '../article/article.service';
import { RuleService } from '../rule/rule.service';
import { PointService } from '../point/point.service';
import { PlanService } from '../plan/plan.service';
import DealWithCommonService from './dealWithCommon.service';
import ConfigService from './config.service';

export class LotteryService extends BaseService {

    constructor(_lotteryCode) {

        super(_lotteryCode);

        if (_lotteryCode != undefined) {
            this.lotteryCode = _lotteryCode;
        } else {
            // 允许实例化该类，因为获取开奖大厅不需要lotteryCode
            // console.warn('请写上彩种code名称！');
        }

        this.lotteryPath = '/lottery';
        this.videoPath = '/video';
        this.numberLotteryPath = '/numberlotterybase';
        this.pointPath = '/totalpoint';
        this.planPath = '/chaseplan'
    }


    /**
     *  通过全国彩种树，拼装全省分类;
     */
    async getProvince() {

        try {

            let showInHomeLeft = ConfigService.config.showInHomeLeft;

            let provinceArray = this.resultForm(await this.getLotteryProvinceList());
            let lotteryTree = this.resultForm(await this.getLotteryAllTree(0));
            let province = [];

            if (provinceArray == undefined) {

                console.error("getProvince: provinceArray为空");
                return;

            }

            if (lotteryTree == undefined || lotteryTree[2] == undefined) {

                console.error("getProvince: lotteryTree为空");
                return;

            }

            /** 对省进行排序处理，这里排序是对应彩种树接口中得省份顺序 */
            for (var i = 0; i < lotteryTree[2].children.length; i++) {

                for (var j = 0; j < provinceArray.length; j++) {

                    if (lotteryTree[2].children[i].name == provinceArray[j].name) {
                        province.push(provinceArray[j]);
                        break;
                    }
                }
            }


            /** 删除已经删选过的省份 */
            for (var j = 0; j < province.length; j++) {
                for (var i = 0; i < provinceArray.length; i++) {
                    if (province[j].name == provinceArray[i].name) {
                        DealWithCommonService.arrayRemove(provinceArray, provinceArray[i]);
                        break;
                    }
                }
            }

            /** 两批省份再次合并（这份数据是排序过的） */
            province = [].concat(province, provinceArray);


            let allProvince = province.concat([]);
            let tempProvince = province.concat([]);
            /** 全国的索引 */
            let allIndex = 0;


            /** 数字彩类型 */
            let digitClassity = ['全国体彩', '全国福彩'];

            let specialProvinceCode = ['好彩1', '15选5', '东方6+1']

            let highLotteryTypeArray = [{
                name: '11选5',
                type: '11x5'
            }, {
                name: '快3',
                type: 'k3'
            }, {
                name: '时时彩',
                type: 'ssc'
            }, {
                name: '快乐十分',
                type: 'kl10'
            }, {
                name: '其它',
                type: 'other'
            }];


            /** 去掉省字，除了华东六省外 */
            for (let i = 0; i < tempProvince.length; i++) {

                tempProvince[i].provinceName = tempProvince[i].name;
                tempProvince[i].name = tempProvince[i].name.replace(/省/g, '');

                allProvince[i].childs = [];

                /** 查找全国所在的索引 */
                if (tempProvince[i].name == '全国') {
                    allIndex = i;
                }
            }


            /** 特殊类型的名字，不能通过省份名字匹配的彩种 (从baseService中获取)*/
            let specialCodeArray = this.getSpecialCode();

            let dightLottery = lotteryTree[0];
            let highLottery = lotteryTree[1];
            let localLottery = lotteryTree[2];
            let lotteryAllTree = [];



            /** 对数字彩进行处理 */
            for (let i = 0; i < dightLottery.children.length; i++) {

                for (let j = 0; j < dightLottery.children[i].children.length; j++) {

                    if (showInHomeLeft.length > 0) {

                        for (let k = 0; k < showInHomeLeft.length; k++) {

                            if (showInHomeLeft[k].code == dightLottery.children[i].children[j].code) {
                                dightLottery.children[i].children[j].isShowInHomeLeft = true;
                                break;
                            }

                        }
                    }

                    dightLottery.children[i].children[j].classify = 'digit';
                    dightLottery.children[i].children[j].type = '';

                }
            }




            /** 对高频彩进行处理 */
            for (let i = 0; i < highLottery.children.length; i++) {

                /** 如果不是其他类型的，则添加high和type */
                if (highLottery.children[i].name != '其它') {

                    for (let j = 0; j < highLottery.children[i].children.length; j++) {

                        highLottery.children[i].children[j].classify = 'high';

                        /** 给高频彩不是其他类型的彩种加上type属性 */
                        for (let k = 0; k < highLotteryTypeArray.length; k++) {


                            let reg = RegExp("" + highLotteryTypeArray[k].name + "", "g");

                            if (reg.test(highLottery.children[i].name)) {

                                //console.log(highLotteryTypeArray[k].type)
                                highLottery.children[i].children[j].type = highLotteryTypeArray[k].type;
                                break;
                            }


                        }

                        /** 给高频彩不是其他类型的彩种,并且是需要显示在首页左边的加上isShowInHomeLeft属性 */
                        if (showInHomeLeft.length > 0) {
                            for (let k = 0; k < showInHomeLeft.length; k++) {

                                if (showInHomeLeft[k].code == highLottery.children[i].children[j].code) {
                                    highLottery.children[i].children[j].isShowInHomeLeft = true;
                                    break;
                                }

                            }
                        }

                    }

                    /** 如果是其他类型的，则添加high和type=other */
                } else {


                    for (let j = 0; j < highLottery.children[i].children.length; j++) {

                        /** 给高频彩是其他类型的彩种,并且是需要显示在首页左边的加上isShowInHomeLeft属性 */
                        if (showInHomeLeft.length > 0) {

                            for (let k = 0; k < showInHomeLeft.length; k++) {

                                if (showInHomeLeft[k].code == highLottery.children[i].children[j].code) {
                                    highLottery.children[i].children[j].isShowInHomeLeft = true;
                                    break;
                                }
                            }

                        }

                        highLottery.children[i].children[j].classify = 'high';
                        highLottery.children[i].children[j].type = 'other';
                    }
                }
            }



            /** 对地方彩进行处理 */
            for (let i = 0; i < localLottery.children.length; i++) {

                for (let j = 0; j < localLottery.children[i].children.length; j++) {

                    /** 处理特殊省份彩种 */
                    for (let k = 0; k < specialProvinceCode.length; k++) {

                        /** 匹配特殊华东六省的，因为它会发配到了其他省份去了，所以要在它前面加上省份 , 如：东方6+1和15选5还有好彩1需要前面加上省份*/
                        if (specialProvinceCode[k] == localLottery.children[i].children[j].name) {

                            let provinceName = localLottery.children[i].name.replace(/省/g, '');
                            localLottery.children[i].children[j].name = provinceName + "" + localLottery.children[i].children[j].name;

                            //console.log(localLottery.children[i].children[j].name)
                            break;
                        }
                    }


                    if (showInHomeLeft.length > 0) {

                        for (let k = 0; k < showInHomeLeft.length; k++) {

                            /** 地方彩除了要和code匹配，还需要和名字匹配，因为有华东六省一个彩种分配到多个省份 */
                            if (showInHomeLeft[k].code == localLottery.children[i].children[j].code && showInHomeLeft[k].name == localLottery.children[i].children[j].name) {

                                localLottery.children[i].children[j].isShowInHomeLeft = true;
                                break;
                            }
                        }

                    }

                    localLottery.children[i].children[j].classify = 'local';
                    localLottery.children[i].children[j].type = '';

                }
            }



            lotteryAllTree.push(dightLottery);
            lotteryAllTree.push(highLottery);
            lotteryAllTree.push(localLottery);


            for (let i = 0; i < lotteryAllTree.length; i++) {

                for (let j = 0; j < lotteryAllTree[i].children.length; j++) {

                    for (let z = 0; z < lotteryAllTree[i].children[j].children.length; z++) {

                        /** 全国数字彩系列 */
                        if (DealWithCommonService.contains(digitClassity, lotteryAllTree[i].children[j].name)) {

                            /** 把数字彩加到全国这个字段中 */
                            allProvince[allIndex].childs.push(lotteryAllTree[i].children[j].children[z]);


                            /** 非数字彩系列 */
                        } else {


                            /** 处理特殊名字的彩种 */
                            for (let m = 0; m < specialCodeArray.length; m++) {

                                if (specialCodeArray[m].code == lotteryAllTree[i].children[j].children[z].code) {

                                    for (let n = 0; n < allProvince.length; n++) {

                                        /** 判断省份是否一样 */
                                        if (allProvince[n].name == specialCodeArray[m].province) {

                                            allProvince[n].childs.push(lotteryAllTree[i].children[j].children[z]);

                                            break;
                                        }
                                    }
                                }
                            }

                            for (let k = 0; k < tempProvince.length; k++) {

                                let reg = RegExp("" + tempProvince[k].name + "", "g");

                                /** 如果匹配到彩种名 */
                                if (reg.test(lotteryAllTree[i].children[j].children[z].name)) {

                                    //console.log(allProvince[k].childs);
                                    //console.log(lotteryAllTree[i].children[j].children[z]);
                                    allProvince[k].childs.push(lotteryAllTree[i].children[j].children[z]);
                                    break;
                                }
                            }

                        }

                    }

                }

            }

            /** 把省份加入到每个彩种中 */
            for (let i = 0; i < allProvince.length; i++) {

                let provinceName = allProvince[i].provinceName;

                for (let j = 0; j < allProvince[i].childs.length; j++) {

                    allProvince[i].childs[j].provinceName = provinceName;
                }
            }


            return allProvince;

        } catch (ex) {

            console.error(ex);
        }


    }


    /**
     *  获取视频列表;
     *  @param: lotterycode (String)
     *  @param: page;
     *  @param: pageSize;
     */
    getVideoList(_parameter) {

        if (_parameter.lotterycode == undefined || typeof(_parameter.lotterycode) != 'string') {
            return this.errorMsg('getVideoList：获取指定视频列表lotterycode参数不正确！');
        }

        if (_parameter.page == undefined || typeof(_parameter.page) != 'number') {
            return this.errorMsg('getVideoList：获取指定视频列表page参数不正确！');
        }

        if (_parameter.pageSize == undefined || typeof(_parameter.pageSize) != 'number') {
            return this.errorMsg('getVideoList：获取指定视频列表pagesize参数不正确！');
        }

        let cacheOpt = this.setCache(`${this.videoPath}/getVideoList`, 0);

        const httpOpt = {
            url: `${this.videoPath}/GetVideoList`,
            qs: {
                lotterycode: _parameter.lotterycode,
                page: _parameter.page,
                pageSize: _parameter.pageSize,
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }

    /**
     *  获取指定彩种倒计时信息
     *  @param: lotterys---array
     */
    getGroupAwardTimes(_lotterys) {

        if (_lotterys == undefined || typeof(_lotterys) != 'object') {
            return this.errorMsg('getGroupAwardTimes：获取指定彩种倒计时信息参数不能为空或者不是一个数组！');
        }

        if (_lotterys.length == 0) {
            return this.errorMsg('getGroupAwardTimes：获取指定彩种倒计时信息参数不能为空数组！');
        }

        let cacheOpt = this.setCache(`${this.videoPath}/getGroupAwardTimes`, 0);

        const httpOpt = {
            url: `${this.lotteryPath}/GetGroupAwardTimes`,
            qs: {
                lotterys: _lotterys
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }

    /**
     *  获取指定彩种倒计时信息
     *  @param: lotterys---array
     */
    getGroupAwards(_lotterys) {
        if (_lotterys == undefined || typeof(_lotterys) != 'object') {
            return this.errorMsg('getGroupAwards：获取指定彩种倒计时信息参数不能为空或者不是一个数组！');
        }

        if (_lotterys.length == 0) {
            return this.errorMsg('getGroupAwards：获取指定彩种倒计时信息参数不能为空数组！');
        }

        let cacheOpt = this.setCache(`${this.videoPath}/getGroupAwards`, 0);

        const httpOpt = {
            url: `${this.lotteryPath}/GetGroupAwards`,
            qs: {
                lotterys: _lotterys
            }
        };

        return this.httpGet(httpOpt, cacheOpt); //还原
    }


    /**
     * 开奖数据
     */
    getAwardData(_code) {

        let cacheOpt = this.setCache(`${(_code !=undefined ? _code : this.lotteryCode)}/getawarddata`, 0);

        const httpOpt = {
            url: `${this.lotteryPath}/getawarddata`,
            qs: {
                lotterycode: (_code != undefined ? _code : this.lotteryCode)
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }


    /**
     * 获取开奖时间数据
     */
    getAwardTimes() {

        let cacheOpt = this.setCache(`${this.lotteryCode}/getawardtime`, 0);

        const httpOpt = {
            url: `${this.lotteryPath}/getawardtime`,
            qs: {
                lotterycode: this.lotteryCode
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }


    /**
     *  根据期号获取详细数据
     *  _parameter:{
     *     issueno: xxx(number)---必填,
     *  }
     */
    getAwardInfoByIssueNo(_parameter) {

        if (_parameter.issueno) {

            if (typeof(_parameter.issueno) != "number") {
                return this.errorMsg('getAwardInfoByIssueNo: 根据期号获取详细数据参数issueno数据类型不正确');
            }

        } else {
            return this.errorMsg('getAwardInfoByIssueNo: 根据期号获取详细数据参数issueno不能为空');
        }

        let cacheOpt = this.setCache(`${this.lotteryCode}/getAwardInfoByIssueNo`, 0);

        const httpOpt = {
            url: `${this.numberLotteryPath}/GetAwardInfoByIssueNo`,
            qs: {
                lotterycode: this.lotteryCode,
                issueno: _parameter.issueno
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }

    /**
     *  根据期号获取详细数据
     *  @param {请求参数，该参数为一个对象类型} _parameter
     *  _parameter:{
     *     issueno: xxx(number)---必填,
     *     type: xxx(number)1历史数据（CP_Issue_history） 2扩展数据（CP_Issue_info） 3附加数据（Issue_Award） 4期表数据（Issue）---必填
     *  }
     */
    getissuenodata(_parameter) {

        if (_parameter.issueno) {

            if (typeof(_parameter.issueno) != "number") {
                return this.errorMsg('根据期号获取详细数据参数issueno数据类型不正确');
            }

        } else {
            return this.errorMsg('根据期号获取详细数据参数issueno不能为空');
        }

        /**** 校验参数type  ( 必填 )*/
        if (_parameter.type == undefined || _parameter.type == '') {

            console.warn('根据期号获取详细数据参数type为空值，1历史数据（CP_Issue_history） 2扩展数据（CP_Issue_info） 3附加数据（Issue_Award） 4期表数据（Issue），默认值为：1');
            _parameter.type = 1;

        } else {

            if (typeof(_parameter.type) == 'number') {

                if (!this.contains([1, 2, 3, 4], _parameter.type)) {

                    return this.errorMsg('根据期号获取详细数据type参数得取值范围必须在1～4之间！');
                }

            } else {

                return this.errorMsg('根据期号获取详细数据type参数必须为number数字类型！');
            }

        }

        let cacheOpt = this.setCache(`${this.lotteryCode}/getissuenodata`, 0);

        const httpOpt = {
            url: `${this.lotteryPath}/getissuenodata`,
            qs: {
                lotterycode: this.lotteryCode,
                issueno: _parameter.issueno,
                type: _parameter.type
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     *  获取彩种期数（高频）
     *  @param {  数量 }  quantity(number) --- 必填
     */
    getperiods(_quantity) {

        if (_quantity) {

            if (typeof(_quantity) != 'number') {

                return this.errorMsg('开奖公告参数quantity数据类型不正确');
            }

        } else {

            return this.errorMsg('开奖公告参数quantity不能为空');

        }

        let cacheOpt = this.setCache(`${this.lotteryCode}/getperiods`, 3000);

        const httpOpt = {
            url: `${this.lotteryPath}/getperiods`,
            qs: {
                lotterycode: this.lotteryCode,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     *  获取彩种期数（数字）
     *  @param {  数量 }  quantity(number) --- 必填
     */
    getDigitPeriods(_quantity) {

        if (_quantity) {

            if (typeof(_quantity) != 'number') {

                return this.errorMsg('开奖公告参数quantity数据类型不正确');
            }

        } else {

            return this.errorMsg('开奖公告参数quantity不能为空');

        }

        //console.log(this.lotteryCode);

        let cacheOpt = this.setCache(`${this.lotteryCode}/issuelist`, 3000);

        const httpOpt = {
            url: `${this.numberLotteryPath}/issuelist`,
            qs: {
                lotterycode: this.lotteryCode,
                quantity: _quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }

    /**
     *  获取单条开奖公告;
     *  @param:  彩种code
     */
    getAwardNoticeForOne(_lotteryCode) {

        if (_lotteryCode) {

            if (typeof(_lotteryCode) != 'string') {

                return this.errorMsg('开奖公告参数_lotteryCode数据类型不正确');
            }

        } else {

            return this.errorMsg('开奖公告参数_lotteryCode不能为空');

        }

        /** 单条开奖公告直接取单条开奖结果即可 */
        let cacheOpt = this.setCache(`${this.lotteryCode}/getawarddata`, 0);

        const httpOpt = {
            url: `${this.lotteryPath}/getawarddata`,
            qs: {
                lotterycode: this.lotteryCode
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     *  开奖公告
     *  @param {  数量 }  quantity(number) --- 必填
     */
    getawardnotice(_quantity) {

        if (_quantity) {

            if (typeof(_quantity) != 'number') {

                return this.errorMsg('开奖公告参数quantity数据类型不正确');
            }

        } else {

            let errorMsg = '开奖公告参数quantity不能为空';
            console.error(errorMsg);
            return this.errorMsg(errorMsg);

        }

        let cacheOpt;

        if (this.lotteryCode) {
            cacheOpt = this.setCache(`${this.lotteryCode}/getawardnotice`, 3000);
        } else {
            cacheOpt = this.setCache(`/getawardnotice`, 3000);
        }


        const httpOpt = {
            url: `${this.lotteryPath}/getawardnotice`,
            qs: {
                quantity: _quantity
            }
        };
        console.log("httOpt", httpOpt)
        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     *  开奖大厅
     *  @param {请求参数，该参数为一个对象类型} _parameter  参数可不传获取全部
     *  _parameter:{
     *     groupId: xxx(number)---选填,
     *     childIds: xxx(string)---选填
     *  }
     */
    async getAllAward(_parameter) {

        // 如果传了参数才需要处理
        if (_parameter) {
            if (_parameter.groupId && !/^[0-9]+$/.test(_parameter.groupId)) {

                return this.errorMsg('开奖大厅参数groupId数据类型要为number类型');

            }
        }

        // 开奖大厅数据不需要缓存
        let cacheOpt = this.setCache(`/lottery/getAllAward`, 0);

        const httpOpt = {
            url: `${this.lotteryPath}/GetAllAward`,
            qs: {
                groupId: _parameter ? _parameter.groupId : undefined,
                childIds: _parameter ? _parameter.childIds : undefined,
                lottery: _parameter ? _parameter.lottery : undefined
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }



    /**
     * 获取历史开奖(全国开奖、高频彩)
     * @param {请求参数，该参数为一个对象类型} _parameter
     * _parameter:{
     *      lotteryCode: xxx(string)---必填,
     *      type: xxx(number)--必填,,
     *      sortFiled: xxx(number)--必填,
     *      day: xxxx-xx-xx(string)--选填,
     *      quantity: xx 选填
     * }
     */
    history(_parameter) {

        /**** 校验参数type  ( 必填 )*/
        if (_parameter.type == undefined || _parameter.type == '') {

            console.warn('历史开奖type参数为空值【1历史数据（Issue_history） 2扩展数据（Issue_info） 3期号数据（Issue）】，默认值为：1');
            _parameter.type = 1;

        } else {

            if (typeof(_parameter.type) == 'number') {

                if (!this.contains([1, 2, 3], _parameter.type)) {

                    return this.errorMsg('历史开奖type参数得取值范围必须在1～3之间！');
                }

            } else {

                return this.errorMsg('历史开奖type参数必须为number数字类型！');
            }

        }

        /**** 校验参数sortFiled ( 必填 )*/
        if (_parameter.sortFiled == undefined || _parameter.sortFiled == '') {

            console.warn('历史开奖sortFiled参数为空值【1、期号 2、开奖时间 3、开奖时间与期号 4、创建时间');
            _parameter.sortFiled = 1;

        } else {

            if (typeof(_parameter.sortFiled) == 'number') {

                if (!this.contains([1, 2, 3, 4], _parameter.sortFiled)) {

                    return this.errorMsg('历史开奖sortFiled参数得取值范围必须在1～4之间！');
                }

            } else {

                return this.errorMsg('历史开奖sortFiled参数必须为number数字类型！');
            }

        }

        let cacheOpt = this.setCache(`${this.lotteryCode}/history{ type:${_parameter.type},sortFiled:${_parameter.sortFiled},day:${_parameter.day}`, 3000);

        const httpOpt = {
            url: `${this.lotteryPath}/GetHistory`,
            qs: {
                lotteryCode: this.lotteryCode,
                type: _parameter.type,
                sortFiled: _parameter.sortFiled
            }
        };

        /**  这个是选填项，如果不为空得情况下拿取参数中得day */
        if (_parameter.day) {
            httpOpt.qs.day = _parameter.day;
        }

        if (_parameter.quantity) {
            httpOpt.qs.quantity = _parameter.quantity;
        }

        return this.httpGet(httpOpt, cacheOpt);
    }

    /**
     * 获取数字彩历史开奖(含有奖池、中奖注数信息)
     * @param {请求参数，该参数为一个对象类型} _parameter
     * _parameter:{
     *      lotterycode: xxx(string)--必填,
     *      year: xxxx(number)--必填,
     *      day: xxx(number)--必填,
     *      quantity: xxx(number)--必填,
     *
     * }
     */
    numberHistory(_parameter) {

        /**** 校验参数year  ( 必填 )*/
        if (_parameter.year == undefined || _parameter.year == '') {

            return this.errorMsg('数字彩历史开奖year年份参数不能为空');

        } else {

            if (typeof(_parameter.year) != 'number') {

                return this.errorMsg('数字彩历史开奖year年份参数必须为number数字类型！');
            }
        }

        // 严格模式下要加0判断，day和quantity允许为0
        /**** 校验参数day  ( 必填 )*/
        if (!_parameter.day && _parameter.day !== 0) {

            return this.errorMsg('数字彩历史开奖day年份参数不能为空！');

        } else {

            if (typeof(_parameter.day) != 'number') {

                return this.errorMsg('数字彩历史开奖day年份参数必须为number数字类型！');

            }
        }

        /**** 校验参数quantity  ( 必填 )*/
        if (!_parameter.quantity && _parameter.quantity !== 0) {

            return this.errorMsg('数字彩历史开奖quantity参数不能为空');

        } else {

            if (typeof(_parameter.quantity) != 'number') {

                return this.errorMsg('数字彩历史开奖quantity参数必须为number数字类型！');
            }
        }


        let cacheOpt = this.setCache(`${this.lotteryCode}/numberHistory/${_parameter.year}/${_parameter.day}/${_parameter.quantity}`, 3000);

        const httpOpt = {
            url: `${this.lotteryPath}/GetNumberHistory`,
            qs: {
                lotterycode: this.lotteryCode,
                year: _parameter.year,
                day: _parameter.day,
                quantity: _parameter.quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }


    /**
     *  获取分组下最新的彩种开奖信息;
     *  @param {彩种分组}  groupId(number) --- 必填
     */
    groupAward(_groupId) {

        /**** 校验参数_groupId ( 必填 )*/
        if (_groupId) {

            if (typeof(_groupId) != 'number') {

                return this.errorMsg('获取分组下最新的彩种开奖信息参数_groupId数据类型要为number类型');
            }

        } else {

            return this.errorMsg('获取分组下最新的彩种开奖信息参数_groupId不能为空');
        }

        let cacheOpt = this.setCache(`${this.lotteryCode}/groupAward`, 3000);

        const httpOpt = {
            url: `${this.lotteryPath}/GetGroupAward`,
            qs: {
                groupId: _groupId
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }


    /**
     *  获取一组开奖信息
     * @param: groupId: xxx(number)---必填 1 为数字彩 2 为高频彩;
     * @param: type: xxx(number)---必填 0为不拿开奖结果，1为拿开奖结果;
     */
    getAwardDataGroup(groupId, type) {

        /**** 校验参数groupId ( 必填 )*/
        if (groupId) {
            if (groupId != 1 && groupId != 2) {
                return this.errorMsg('获取一组开奖信息参数groupId数据类型要为1或2');
            }
        } else {
            return this.errorMsg('获取一组开奖信息参数groupId不能为空');
        }

        if (type == undefined || typeof(type) != 'number' || !this.contains([0, 1], type)) {
            return this.errorMsg('获取一组开奖信息参数type有误！');
        }

        let cacheOpt = this.setCache(`/${this.videoPath}/getvideoawarddata`, 0);

        const httpOpt = {
            url: `${this.videoPath}/getvideoawarddata`,
            qs: {
                groupId: groupId,
                type: type
            }
        };

        return this.httpGet(httpOpt, cacheOpt);
    }


    /**
     *  获取开奖视频列表
     * @param {请求参数，该参数为一个对象类型} _parameter
     * _parameter:{
     *     groupId: xxx(number)---必填,
     *     childIds: xxx(string)---必填,
     *     quantity: xxx(number)---必填,
     * }
     */
    getlotteryawardlist(_parameter) {

        /**** 校验参数groupId ( 必填 )*/
        if (_parameter.groupId) {

            if (typeof(_parameter.groupId) != 'number') {

                return this.errorMsg('获取开奖视频列表参数groupId数据类型要为number类型');
            }

        } else {

            return this.errorMsg('获取开奖视频列表信息参数groupId不能为空');
        }

        /**** 校验参数childIds ( 必填 )*/
        if (!_parameter.childIds) {

            return this.errorMsg('获取开奖视频列表信息参数childIds不能为空');
        }

        /**** 校验参数quantity( 必填 )*/
        if (_parameter.quantity) {

            if (typeof(_parameter.quantity) != 'number') {

                return this.errorMsg('获取开奖视频列表参数quantity数据类型要为number类型');
            }

        } else {

            return this.errorMsg('获取开奖视频列表信息参数quantity不能为空');
        }

        let cacheOpt = this.setCache(`${this.lotteryCode}/getlotteryawardlist`, 3000);

        const httpOpt = {
            url: `${this.videoPath}/getlotteryawardlist`,
            qs: {
                groupId: _parameter.groupId,
                childIds: _parameter.childIds,
                quantity: _parameter.quantity
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }

    /**
     * 获取彩票分组信息
     * @param {int} _groupId 如果不传则默认为0所有父级, 1: 数字彩，2：高频彩，3：地方彩
     */
    getLotteryGroupList(_groupId) {

        if (!_groupId) _groupId = 0;

        if (_groupId && !/^\d+$/.test(_groupId)) {

            return this.errorMsg(`groupId只能为数字类型`);

        } else {

            if (!this.contains([0, 1, 2, 3], _groupId)) {
                return this.errorMsg(`groupId参数范围只能是0～3`);
            }

        }

        /** 分组信息不会经常变，缓存一分钟 */
        let cacheOpt = this.setCache(`${this.lotteryPath}/getLotteryGroupList/${_groupId}`, 60000);

        const httpOpt = {
            url: `${this.lotteryPath}/GetLotteryGroupList`,
            qs: {
                groupId: _groupId
            }
        };

        return this.httpGet(httpOpt, cacheOpt);

    }

    /**
     * 获取彩票省份列表
     */
    getLotteryProvinceList() {

        /** 省份信息不会经常变，缓存一分钟 */
        let cacheOpt = this.setCache(`${this.lotteryPath}/getLotteryProvinceList`, 0);

        const httpOpt = {
            url: `${this.lotteryPath}/GetLotteryProvinceList`
        };

        return this.httpGet(httpOpt, cacheOpt);
    }

    /**
     * 获取所有的奖项信息
     */
    async getAllAwardData() {

        let _data = [];

        if (!global.__allAward) {
            let _awardData = await this.getAllAward();
            let _province = await this.getLotteryProvinceList();
            if (_awardData.state == 1) {
                _data = this.formatLotteryHallData({ result: _awardData.result, province: _province.result });
                global.__allAward = _data;
            }
        } else {
            _data = global.__allAward;
        }

        return typeof _data === 'string' ? JSON.parse(_data) : _data;
    }

    /**
     * 格式化彩票大厅数据
     * @param {*} data
     */
    formatLotteryHallData(data) {
        let _result = {
            high: [],
            digital: {
                sport: [],
                boon: []
            },
            area: {
                data: [],
                area: {},
                province: data.province
            }
        }

        // 拆分数字彩1，高频彩2和地方彩3
        data.result.forEach(item => {

            // 是否是数字彩
            if (item.groupId == 1) {
                // 区分体彩和福彩
                item.groupChildId == 1 ? _result.digital.boon.push(item) : _result.digital.sport.push(item);
            }

            // 是否是高频彩
            item.groupId == 2 ? _result.high.push(item) : item.groupId == 3 ? _result.area.data.push(item) : '';

            // 处理地方彩分组
            if (item.groupId == 3) {
                data.province.forEach(province => {
                    // 赋予初始化
                    if (!_result.area.area[province.id]) _result.area.area[province.id] = [];

                    // 如果省份ID相同则分组
                    if (item.provinceId == province.id) {
                        _result.area.area[province.id].push(item);
                    }

                });
            }
        });

        _result.province = [];

        // 每个省份拥有的地方彩种数量
        data.province.forEach(province => {
            if (_result.area.area[province.id]) {
                province.count = _result.area.area[province.id].length;
            }
        });

        _result.province = data.province.filter(item => item.count > 0 || item.name.includes('江西') || item.id == 0);

        // 排序
        _result.high = _result.high.sort((m, n) => { return m.groupChildId - n.groupChildId || m.id - n.id; });
        _result.digital.sport = _result.digital.sport.sort((m, n) => { return m.id - n.id; });
        _result.digital.boon = _result.digital.boon.sort((m, n) => { return m.id - n.id; });
        _result.area.data = _result.area.data.sort((m, n) => { return m.id - n.id; });

        // 如果没有内容则清空
        _result.high = _result.high.length > 0 ? _result.high : undefined;
        _result.digital.sport = _result.digital.sport.length > 0 ? _result.digital.sport : undefined;
        _result.digital.boon = _result.digital.boon.length > 0 ? _result.digital.boon : undefined;
        _result.area.data = _result.area.data.length > 0 ? _result.area.data : undefined;


        return _result;
    }


    /**
     *  获取高频彩数据
     */
    async getLotteryHigh() {

        let _result = {
            awardTime: {
                current: {},
                next: {}
            },
            awardResult: {},
            isAwarding: false
        }

        try {

            /** 开奖时间 */
            _result.awardTime = (await this.getAwardTimes()).result;

            /** 开奖结果 */
            _result.awardResult = (await this.getAwardData()).result;

            if (_result.awardResult) {

                _result.awardResult.resultList = _result.awardResult.result ? _result.awardResult.result.split(',') : [];

                /** 给开奖号码补0 */
                for (var i = 0; i < _result.awardResult.resultList.length; i++) {

                    if (parseInt(_result.awardResult.resultList[i]) < 10) {
                        if (!/^0/.test(_result.awardResult.resultList[i])) {

                            _result.awardResult.resultList[i] = "0" + _result.awardResult.resultList[i];
                        }
                    }
                }

            }

            /** 当前开奖期数和实际获取的是否对上 */
            if (_result.awardTime && _result.awardResult) {
                _result.isAwarding = _result.awardTime.current.period > _result.awardResult.period;
            } else {
                _result.awardTime = _result.awardTime ? _result.awardTime : {
                    current: {},
                    next: {}
                }
            }

            _result.nowPeriod = _result.awardTime.current.period;
            _result.name = _result.awardTime ? _result.awardTime.lotteryName : '';
            _result.lotteryType = 'high';

            return _result;

        } catch (ex) {

            console.error(ex);
        }


    }


    /**
     *  获取数字彩数据
     */
    async getLotteryDigit() {

        let _result = {};

        try {

            /** 开奖时间 */
            _result.awardTime = (await this.getAwardTimes()).result;

            /** 开奖结果 */
            _result.awardResult = (await this.getAwardData()).result;
            if (_result.awardResult && _result.awardResult.result) {
                let _tmp = _result.awardResult.result.split('|');
                _result.awardResult.redResultList = _tmp[0].split(',');
                _result.awardResult.blueResultList = _tmp[1] ? _tmp[1].split(',') : '';
                _result.awardResult.resultList = _result.awardResult.redResultList.concat(_result.awardResult.blueResultList);

                /** 给开奖号码补0 */
                for (var i = 0; i < _result.awardResult.resultList.length; i++) {

                    if (parseInt(_result.awardResult.resultList[i]) < 10) {

                        if (!/^0/.test(_result.awardResult.resultList[i])) {
                            _result.awardResult.resultList[i] = "0" + _result.awardResult.resultList[i];
                        }

                    }

                }
            }

            /** 当前开奖期数和实际获取的是否对上 */
            if (_result.awardTime && _result.awardResult) {
                _result.isAwarding = _result.awardTime.current.period > _result.awardResult.period;
            } else {
                _result.awardTime = _result.awardTime ? _result.awardTime : {
                    current: {},
                    next: {}
                }
            }

            _result.nowPeriod = _result.awardTime.current.period;
            _result.name = _result.awardTime ? _result.awardTime.lotteryName : '';
            _result.lotteryType = 'digit';

            return _result;

        } catch (ex) {

            console.error(ex);
        }

    }

    /**
     * 获取高频彩主页数据
     */
    async getHighLotteryMain(_type) {

        // 结构体
        let _result = {
            tecInfo: [],
            pointInfo: [],
            planInfo: [],
            rule: {},
            history: [],
            awardTime: {
                current: {},
                next: {}
            },
            awardResult: {},
            isAwarding: false
        }

        let tecMenu = {
            '11x5': 32,
            'k3': 34,
            'kl10': 33,
            'ssc': 35,
            'ssl': 36,
            'pk10': 36,
            'kl8': 36,
            'hn481': 36,
            'sxytdj': 36,
        }

        try {
            // 获取技巧
            let articleService = new ArticleService();
            let _tmpOpt = {
                categoryId: tecMenu[_type],
                pageIndex: 1,
                pageSize: tecMenu[_type] == 36 ? 16 : 7
            }

            if (tecMenu[_type] == 36) {
                _tmpOpt.lotteryCode = this.lotteryCode
            }
            _result.tecInfo = (await articleService.articleList(_tmpOpt)).result.data;

            // 追号
            let planService = new PlanService();
            _result.planInfo = (await planService.index(this.lotteryCode)).result;

            if (_result.planInfo && _result.planInfo.length > 4) {
                _result.planInfo = _result.planInfo.slice(0, 4);
            }

            // 提点
            let pointService = new PointService();
            _result.pointInfo = (await pointService.list({
                pageSize: 7,
                lotteryCode: this.lotteryCode
            })).result;

            // 规则
            let ruleService = new RuleService();
            _result.rule = (await ruleService.detail(this.lotteryCode)).result;
            _result.rule.introduceContent = _result.rule.introduceContent ? _result.rule.introduceContent.replaceHTML() : '';

            // 开奖时间
            _result.awardTime = (await this.getAwardTimes()).result;

            // 开奖结果
            _result.awardResult = (await this.getAwardData()).result;
            if (_result.awardResult) {
                _result.awardResult.resultList = _result.awardResult.result ? _result.awardResult.result.split(',') : [];
            }

            // 当前开奖期数和实际获取的是否对上
            if (_result.awardTime && _result.awardResult) {
                _result.isAwarding = _result.awardTime.current.period > _result.awardResult.period;
            } else {
                _result.awardTime = _result.awardTime ? _result.awardTime : {
                    current: {},
                    next: {}
                }
            }

            // 开奖历史
            _result.history = (await this.history({
                lotterycode: this.lotteryCode,
                type: 1,
                sortFiled: 2,
                quantity: 10
            })).result;

            _result.name = _result.awardTime ? _result.awardTime.lotteryName : '';
            _result.lotteryType = 'high';
        } catch (ex) {
            console.error(ex);
        }


        return _result;
    }

    /**
     * 获取数字彩主页数据
     */
    async getDigitLotteryMain() {

        let _result = {};

        try {

            // 获取技巧
            let articleService = new ArticleService();
            _result.tecInfo = (await articleService.articleList({
                categoryId: 37,
                lotteryCode: this.lotteryCode,
                pageIndex: 1,
                pageSize: 16
            })).result.data;

            // 规则
            let ruleService = new RuleService();
            _result.rule = (await ruleService.detail(this.lotteryCode)).result;
            _result.rule.introduceContent = _result.rule.introduceContent ? _result.rule.introduceContent.replaceHTML() : '';

            // 开奖时间
            _result.awardTime = (await this.getAwardTimes()).result;

            // 开奖结果
            _result.awardResult = (await this.getAwardData()).result;
            if (_result.awardResult && _result.awardResult.result) {
                let _tmp = _result.awardResult.result.split('|');
                _result.awardResult.redResultList = _tmp[0].split(',');
                _result.awardResult.blueResultList = _tmp[1] ? _tmp[1].split(',') : '';
                _result.awardResult.resultList = _result.awardResult.redResultList.concat(_result.awardResult.blueResultList);
            }

            // 当前开奖期数和实际获取的是否对上
            if (_result.awardTime && _result.awardResult) {
                _result.isAwarding = _result.awardTime.current.period > _result.awardResult.period;
            } else {
                _result.awardTime = _result.awardTime ? _result.awardTime : {
                    current: {},
                    next: {}
                }
            }

            // 开奖历史
            _result.history = (await this.numberHistory({
                lotterycode: this.lotteryCode,
                year: parseInt((new Date()).format('yyyy')),
                day: -1,
                quantity: 10
            }));

            _result.history = _result.history ? _result.history.result : {};
            // 添加当前彩种code
            _result.history.lotteryCode = this.lotteryCode;

            _result.history.map(item => {
                // 格式化中奖信息
                if (item.award_count) {
                    item.award_count = typeof item.award_count === 'string' ? JSON.parse(item.award_count) : item.award_count;
                }

                return item;
            })


            _result.name = _result.awardTime ? _result.awardTime.lotteryName : '';
            _result.lotteryType = 'digit';
        } catch (ex) {
            this.errorMsg(ex.message);
        }

        return _result;
    }

    /**
     * 全国彩种树
     * @param {*} groupId 
     */
    getLotteryAllTree(groupId) {

            if (!groupId) {
                groupId = 0;
            }

            if (groupId && !/^\d+$/.test(groupId)) {
                return this.errorMsg(`groupId只能为数字类型`);
            }

            // 彩种树列表(缓存30分钟)
            let cacheOpt = this.setCache(`lottery/GetLotteryAllTree/${groupId}`, (60000 * 30));

            // 参数
            let httpOpt = {

                url: `/lottery/GetLotteryAllTree`,
                qs: {
                    groupId: groupId,
                    IsUpSet: true
                }
            };
            return this.httpGet(httpOpt, cacheOpt);
        }
        /**
         * 友情链接
         * @param {*} code 页面code 
         */
    getFriendLinkList(code) {

        if (code == null || code.length <= 0) {
            return [];
        }

        // 彩种树列表(缓存10分钟)
        let cacheOpt = this.setCache(`friendlink/getlist/${code}`, (60000 * 10));

        // 参数
        let httpOpt = {

            url: `/friendlink/getlist`,
            qs: {
                code: code
            }
        };

        return this.httpGet(httpOpt, cacheOpt, 2);
    }
}