/***********************************************************************************
 *
 *                      作用: 专门用来处理数据;
 *
 ***********************************************************************************/
'use strict';

import  DealWithCommonService from  '../../services/public/dealWithCommon.service';

const hmtjDealWithData = new class HmtjDealWithData {

    constructor() {

        this.dealWithCommonService = DealWithCommonService;

    }


    /**
     * 格式化返回(特需格式自己处理) type=1 列表，2详情
     */
    resultForm(_result,type,lotteryCode) {
        let data=[];
        if (_result && _result.state==1) {
            data =  _result.result;

            if(2==type){
                if("ssq,dlt".indexOf(lotteryCode)>=0 && data!=null && data.details.length>0)
                {

                    for (var i = 0; i < data.details.length; i++) {
                        if(data.details[i].result.indexOf('|')>=0){
                            data.details[i].redResult=data.details[i].result.split('|')[0];
                            data.details[i].blueResult=data.details[i].result.split('|')[1];
                        }else{
                            data.details[i].redResult="";
                            data.details[i].blueResult="";
                        }
                    }
                }
            }else{
                if("ssq,dlt".indexOf(lotteryCode)>=0 && data!=null && data.length>0)
                {

                    for (var i = 0; i < data.length; i++) {
                        if(data[i].result.indexOf('|')>=0){
                            data[i].redResult=data[i].result.split('|')[0];
                            data[i].blueResult=data[i].result.split('|')[1];
                        }else{
                            data[i].redResult="";
                            data[i].blueResult="";
                        }
                    }
                }
            }
        }


        return data;
    }


    /**
     *  处理杀胆号码统计
     */
    dealWithStatistics(_data, _lotteryCode, _stype){

        let _this = this;

        _stype = _stype ? parseInt(_stype): null;

        if(_data !=undefined && typeof(_data) =='object'){


            if(_lotteryCode == 'fc3d' || _lotteryCode == 'pl3'){

                /** 这几个编号是专家推荐的，专家推荐的福彩3d和排列3也用这个类处理  */
                if(_stype ==111 || _stype ==112 || _stype ==113){

                    /** 处理专家推荐 */
                    _data =  _this.dealWithFc3dZjtj(_data, _stype);
                }

            }

            return _data;

        }else{

            console.error('dealWithStatistics：参数有问题！');
        }
    }





    /**
     *  处理福彩3d和排列3的-----------》专家推荐
     */
    dealWithFc3dZjtj(_data, _stype){

        let _fc3dZjtj = [111,112,113];

        let  _this = this;
        let  _parmBallArray;

        /** 当第一条状态为false的时候，则需要排除第一条统计，否则为true则要计算在内 */
        let  _isExcludeNo1 = (_data[0].state == false ? 0: -1);

        _data.forEach((_val, _index, _arr) => {

            if(_index != _isExcludeNo1) {

                let _redBallArray;

                if(_val.result !=''){

                    _redBallArray =  _val.result.split(',');

                }else{
                    _redBallArray = [];
                }

                /** 判断是七星彩 */
                if (_this.dealWithCommonService.contains(_fc3dZjtj, _stype)) {

                    _parmBallArray = _redBallArray;

                }

                /** 判断哪些号码是开奖的 */
                _val['awardNumber'] = _this.judgeAwardNumber(_parmBallArray, _val.details);


                /** 统计这批号码中奖情况 */
                _val['tips'] = _this.statisticsNumberZjtj(_val['awardNumber'], _redBallArray);
            }
        })

        /** 计算准确率 */
        _data['accuracyOfCalculation'] = _this.accuracyOfCalculationZjtj(_data);


        return _data;

    }

    /**
     *  判断统计情况;
     * @param _ballArray --- 开奖号码数组;
     * @param _arr --- 后台请求回来的球号数组;
     */
    judgeAwardNumber(_ballArray, _arr){

        var _this = this;
        var _awardNumber = [];

        if(_arr.length > 0){

            /** 如果是11和12是红球*/
            _arr.forEach((_sval, _sindex, _sarr)=>{

                let _temp = []

                for(var i=0; i<_sval.numbers.length; i++){

                    if(_this.dealWithCommonService.contains(_ballArray,_sval.numbers[i])){

                        _temp.push({
                            num: _sval.numbers[i],
                            isSame: true
                        })

                    }else{

                        _temp.push({
                            num: _sval.numbers[i],
                            isSame: false
                        })
                    }
                }
                _awardNumber.push(_temp);
            });

            return _awardNumber;

        }else{

            console.error('开奖号码details为空数组！');
        }
    }


    /**
     *  计算准确率 ---------（专门用来处理福彩3d和排列3的专家推荐）;
     *  @param _arr --- 后台请求回来的球号数组;
     */
    accuracyOfCalculationZjtj(_array){

        let _this = this;
        let _awardNumberArr=[];

        /** 行数 */
        let  _row  = 0;

        /** 列数 */
        let _column = 0;

        let _accuracyOfCalculation = [];

        /** 当第一条状态为false的时候，则需要排除第一条统计，否则为true则要计算在内 */
        let  _isExcludeNo1 = (_array[0].state == false ? 0: -1);

        _array.forEach((_val,_index,_arr)=>{

            if(_index !=_isExcludeNo1){
                _awardNumberArr.push({
                    numbers: _val.awardNumber,
                    /** 去重后剩下的数组的元素数量 */
                    awardBallLength: _this.uniq(_val.result.split(',')).length,
                });
            }

            _val['awardBallLength'] = _this.uniq(_val.result.split(',')).length;

            if(_index == 1){
                /** 计算列数, 这里只取第一行即可了 */
                _column = _val.details.length;
            }
        });


        /** 计算行数 */
        _row  = _array.length - 1;

        for(var i=0; i<_column; i++){

            var _isSameNumber = 0;

            for(var j=0; j< _row; j++){

                if(_this.columnStatisticsNumberZjtj(_awardNumberArr[j].numbers[i]) == _awardNumberArr[j].awardBallLength){

                    _isSameNumber++
                }

            }

            _accuracyOfCalculation.push((Math.round(_isSameNumber/_row*100))+'%');
        }

        return _accuracyOfCalculation ;
    }


    /**
     *  判断单个列块有多少条中-----------(福彩3d和排列3专家推荐中使用的)；
     * @param _arr
     * @param _type
     * @return {number}
     */
    columnStatisticsNumberZjtj(_arr){

        let  _total = 0;

        _arr.forEach((_sval, _sindex, _sarr)=> {

            /** 相同的进行统计 */
            if(_sval.isSame == true){
                _total++;
            }

        })

        return  _total;
    }



    /**
     *  统计号码多少中-----------(福彩3d和排列3专家推荐中使用的);
     *  @param: 开奖号码；
     */
    statisticsNumberZjtj(_arr, _awardBallArray){

        let _this = this;
        let _tips = '';

        /** 统计一下，总共有哪些列是全中多条的 */
        let _allTotal  = 0;

        /** 去重后剩下的数组的元素数量 */
        var _awardBallLength = _this.uniq(_awardBallArray).length;

        for(var i=0; i<_arr.length; i++){

            let _awardTotal =  _this.columnStatisticsNumberZjtj(_arr[i]);

            /** 如果全中的情况 ( 因为有些号码是重复的，所以需要拿去重后的元素数量来比较 )*/
            if(_awardTotal == _awardBallLength){

                _allTotal++;
            }
        }

        if(_allTotal == _arr.length){

            _tips = '全中';
        }else{

            _tips = _arr.length+"中"+_allTotal;
        }

        return  _tips;

    }


    /**
     *  思路：获取没重复的最右一值放入新数组
     *  推荐的方法
     *
     * 方法的实现代码相当酷炫，
     * 实现思路：获取没重复的最右一值放入新数组。
     * （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）
     */
    uniq(_array){
        var temp = [];
        var index = [];
        var l = _array.length;
        for(var i = 0; i < l; i++) {
            for(var j = i + 1; j < l; j++){
                if (_array[i] === _array[j]){
                    i++;
                    j = i;
                }
            }
            temp.push(_array[i]);
            index.push(i);
        }
        return temp;
    }



}

export default hmtjDealWithData;
