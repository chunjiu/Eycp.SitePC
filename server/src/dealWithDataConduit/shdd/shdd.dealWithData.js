/***********************************************************************************
 *
 *                      作用: 专门用来处理数据;
 *
 ***********************************************************************************/
'use strict';

import  DealWithCommonService from  '../../services/public/dealWithCommon.service';

const shddDealWithData = new class ShddDealWithData {

    constructor() {

        this.dealWithCommonService = DealWithCommonService;

    }

    /**
     *  处理杀胆号码统计
     */
    dealWithStatistics(_data, _lotteryCode, _stype){

        let _this = this;

        _stype = _stype ? parseInt(_stype): null;

        if(_data !=undefined && typeof(_data) =='object'){


            /** 判断是双色球*/
            if(_lotteryCode == 'ssq'){

                  _data =  _this.dealWithSsqShdd(_data, _stype);

            }else if(_lotteryCode == 'fc3d' || _lotteryCode == 'pl3'){

                /** 这几个编号是专家推荐的，专家推荐的福彩3d和排列3也用这个类处理  */
                if(_stype ==111 || _stype ==112 || _stype ==113){

                    /** 处理专家推荐 */
                    _data =  _this.dealWithFc3dZjtj(_data, _stype);
                }else{

                    _data =  _this.dealWithFc3dSh(_data, _stype);
                }

            }else if(_lotteryCode == 'qlc'){

                _data =  _this.dealWithQlc(_data, _stype);

            }else if(_lotteryCode == 'dlt'){

                _data =  _this.dealWithDlt(_data, _stype);

            }else if(_lotteryCode == 'pl5'){

                _data = _this.dealWithPl5Sh(_data, _stype);

            }else if(_lotteryCode == 'qxc'){

                _data = _this.dealWithQxc(_data, _stype);

            }

            return _data;

        }else{

            console.error('dealWithStatistics：参数有问题！');
        }
    }




    /**
     *  处理七星彩的杀号
     */
    dealWithQxc(_data, _stype){

        /** 七星彩杀码 */
        let _qxcSh = [61,62,63,64,65,66,67];

        let  _this = this;
        let  _parmBallArray;
        let  _ballType;

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
                if (_this.dealWithCommonService.contains(_qxcSh, _stype)) {

                    /** 一位杀号 */
                    if(_stype == 61){

                        _parmBallArray = [_redBallArray[6]];

                        /** 二位杀号 */
                    }else if(_stype == 62){

                        _parmBallArray = [_redBallArray[5]];

                        /** 三位杀号 */
                    }else if(_stype == 63) {

                        _parmBallArray = [_redBallArray[4]];

                        /** 四位杀号 */
                    }else if(_stype == 64) {

                        _parmBallArray = [_redBallArray[3]];

                     /** 五位杀号 */
                    }else if(_stype == 65) {

                        _parmBallArray = [_redBallArray[2]];

                    /** 六位杀号 */
                    }else if(_stype == 66) {

                        _parmBallArray = [_redBallArray[1]];

                    /** 七位杀号 */
                    }else if(_stype == 67) {

                        _parmBallArray = [_redBallArray[0]];

                    }

                    _ballType = 'sh';

                }

                /** 判断哪些号码是开奖的 */
                _val['awardNumber'] = _this.judgeAwardNumber(_parmBallArray, _val.details);

                /** 统计这批号码中奖情况 */
                _val['tips'] = _this.statisticsNumber(_val['awardNumber'], _ballType);
            }
        })

        /** 计算准确率 */
        _data['accuracyOfCalculation'] = _this.accuracyOfCalculation(_data, _ballType);

        return _data;

    }


    /**
     *  处理排列五杀号定胆
     */
    dealWithPl5Sh(_data, _stype){

        /** 排列五杀码 */
        let _pl5Sh = [51,52,53,54,55];

        let  _this = this;
        let  _parmBallArray;
        let  _ballType;

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

                /** 判断是大乐透 */
                if (_this.dealWithCommonService.contains(_pl5Sh, _stype)) {

                    /** 个位杀号 */
                    if(_stype == 51){

                        _parmBallArray = [_redBallArray[4]];

                    /** 十位杀号 */
                    }else if(_stype == 52){

                        _parmBallArray = [_redBallArray[3]];

                    /** 百位杀号 */
                    }else if(_stype == 53) {

                        _parmBallArray = [_redBallArray[2]];

                    /** 千位杀号 */
                    }else if(_stype == 54) {

                        _parmBallArray = [_redBallArray[1]];

                    /** 万位杀号 */
                    }else if(_stype == 55) {

                        _parmBallArray = [_redBallArray[0]];

                    }

                    _ballType = 'sh';

                }

                /** 判断哪些号码是开奖的 */
                _val['awardNumber'] = _this.judgeAwardNumber(_parmBallArray, _val.details);

                /** 统计这批号码中奖情况 */
                _val['tips'] = _this.statisticsNumber(_val['awardNumber'], _ballType);
            }
        })

        /** 计算准确率 */
        _data['accuracyOfCalculation'] = _this.accuracyOfCalculation(_data, _ballType);

        return _data;

    }


    /**
     *  处理大乐透前区杀码和后区杀码
     */
    dealWithDlt(_data, _stype){

        /** 大乐透前区杀码 */
        let _dltQSm = [41,42];

        /** 大乐透后区杀码 */
        let _dltHSm= [43,44];

        let  _this = this;
        let  _parmBallArray;
        let  _ballType;

        /** 当第一条状态为false的时候，则需要排除第一条统计，否则为true则要计算在内 */
        let  _isExcludeNo1 = (_data[0].state == false ? 0: -1);

        _data.forEach((_val, _index, _arr) => {

            if(_index != _isExcludeNo1) {

                let _resultArray;
                let _redBallArray;
                let _blueBallArray;

                if(_val.result !=''){
                    if(/\|/.test(_val.result)){
                        _resultArray   = _val.result.split('|');
                        _redBallArray = _resultArray[0].split(',');
                        _blueBallArray= _resultArray[1].split(',');
                    }else{
                        _redBallArray =  _val.result.split(',');
                    }
                }else{
                    _redBallArray = [];
                }

                /** 判断是大乐透，而且是前区杀码类型 */
                if (_this.dealWithCommonService.contains(_dltQSm, _stype)) {

                    _parmBallArray = _redBallArray;
                    _ballType          = 'sh';

                    /** 判断是大乐透，而且是后区杀码类型 */
                } else if (_this.dealWithCommonService.contains(_dltHSm, _stype)) {

                    _parmBallArray = _blueBallArray;
                    _ballType          = 'sh';

                }

                /** 判断哪些号码是开奖的 */
                _val['awardNumber'] = _this.judgeAwardNumber(_parmBallArray, _val.details);

                /** 统计这批号码中奖情况 */
                _val['tips'] = _this.statisticsNumber(_val['awardNumber'], _ballType);
            }
        })

        /** 计算准确率 */
        _data['accuracyOfCalculation'] = _this.accuracyOfCalculation(_data, _ballType);

        return _data;

    }


    /**
     *  处理七乐彩杀号和定胆
     */
    dealWithQlc(_data, _stype){

        /** 七乐彩杀码 */
        let _qlcSm = [31,32];

        /** 七乐彩特码 */
        let _qlcTm= [33,34];

        let  _this = this;
        let  _parmBallArray;
        let  _ballType;

        /** 当第一条状态为false的时候，则需要排除第一条统计，否则为true则要计算在内 */
        let  _isExcludeNo1 = (_data[0].state == false ? 0: -1);

          _data.forEach((_val, _index, _arr) => {

                if(_index != _isExcludeNo1) {

                        let _resultArray;
                        let _redBallArray;
                        let _blueBallArray;

                        if(_val.result !=''){
                            if(/\|/.test(_val.result)){
                                _resultArray   = _val.result.split('|');
                                _redBallArray = _resultArray[0].split(',');
                                _blueBallArray= _resultArray[1].split(',');
                            }else{
                                _redBallArray =  _val.result.split(',');
                            }
                        }else{
                            _redBallArray = [];
                        }

                        /** 判断是七乐彩，而且是杀码类型 */
                        if (_this.dealWithCommonService.contains(_qlcSm, _stype)) {

                            _parmBallArray = _redBallArray;
                            _ballType          = 'sh';

                        /** 判断是七乐彩，而且是特码类型 */
                        } else if (_this.dealWithCommonService.contains(_qlcTm, _stype)) {

                            _parmBallArray = _blueBallArray;
                            _ballType          = 'sh';

                        }

                    /** 判断哪些号码是开奖的 */
                    _val['awardNumber'] = _this.judgeAwardNumber(_parmBallArray, _val.details);

                    /** 统计这批号码中奖情况 */
                    _val['tips'] = _this.statisticsNumber(_val['awardNumber'], _ballType);
                }
         })

        /** 计算准确率 */
        _data['accuracyOfCalculation'] = _this.accuracyOfCalculation(_data, _ballType);

        return _data;

    }


    /**
     *  处理福彩3d杀号和定胆
     */
    dealWithFc3dSh(_data, _stype){

        /** 福彩3d杀号 */
        let _fc3dSh = [21,22,23,24,28,29];

        /** 福彩3d定胆 */
        let _fc3dDd= [25,26,27];

        let  _this = this;
        let  _parmBallArray;
        let  _ballType;

        /** 当第一条状态为false的时候，则需要排除第一条统计，否则为true则要计算在内 */
        let  _isExcludeNo1 = (_data[0].state == false ? 0: -1);

        _data.forEach((_val, _index, _arr)=>{

            if(_index != _isExcludeNo1){


                if(_this.dealWithCommonService.contains(_fc3dSh, _stype)){

                    /** 个位杀号 */
                    if(_stype == 21){

                        _parmBallArray = [_val.result.split(',')[2]];

                    /** 十位杀号 */
                    }else if(_stype == 22){

                        _parmBallArray = [_val.result.split(',')[1]];

                    /** 百位杀号 */
                    }else if(_stype == 23){

                        _parmBallArray = [_val.result.split(',')[0]];

                    /** 不定位杀号 */
                    }else if(_stype == 24){

                        _parmBallArray = _val.result.split(',');

                    /** 合尾杀号 */
                    }else if(_stype == 28){

                        var _resultArr = _val.result.split(',');
                        var _resultNum = 0;

                        for(var i=0; i<_resultArr.length; i++){

                            _resultNum +=parseInt(_resultArr[i]);
                        }

                        _parmBallArray = [""+_resultNum%10];


                    /** 跨度杀码 */
                    }else if(_stype == 29){

                        var _resultArr = _val.result.split(',');
                        var max = Math.max.apply(null,_resultArr);
                        var min = Math.min.apply(null,_resultArr);

                        _parmBallArray = [''+(max-min)];

                    }

                    _ballType          = 'sh';

                    /** 判断是双色球，而且是蓝球类型 */
                }else if(_this.dealWithCommonService.contains(_fc3dDd, _stype)){

                    /** 个位定3胆 */
                    if(_stype == 25){

                        _parmBallArray = [_val.result.split(',')[2]];

                        /** 十位定3胆 */
                    }else if(_stype == 26){

                        _parmBallArray = [_val.result.split(',')[1]];

                        /** 百位定3胆 */
                    }else if(_stype == 27) {

                        _parmBallArray = [_val.result.split(',')[0]];

                    }

                    _ballType          = 'dd';

                }

                /** 判断哪些号码是开奖的 */
                _val['awardNumber'] = _this.judgeAwardNumber(_parmBallArray, _val.details);

                /** 统计这批号码中奖情况 */
                _val['tips'] = _this.statisticsNumber(_val['awardNumber'], _ballType, true);

            }

        });

        /** 计算准确率 */
        _data['accuracyOfCalculation'] = _this.accuracyOfCalculation(_data, _ballType, true);

        return _data;

    }


    /**
     *  处理双色球红球和篮球杀号;
     */
    dealWithSsqShdd(_data, _stype){

        /** 双色球杀号红球 (杀码1和杀码2)*/
        let _ssqRed = [11,12];

        /** 双色球杀号蓝球 (杀码1和杀码2)*/
        let _ssqBlue= [13,14];

        let  _this = this;
        let  _parmBallArray;
        let  _ballType;

        /** 当第一条状态为false的时候，则需要排除第一条统计，否则为true则要计算在内 */
        let  _isExcludeNo1 = (_data[0].state == false ? 0: -1);

        _data.forEach((_val, _index, _arr)=>{

            if(_index != _isExcludeNo1){

                let _resultArray;
                let _redBallArray;
                let _blueBallArray;

                if(_val.result !=''){
                    if(/\|/.test(_val.result)){
                        _resultArray   = _val.result.split('|');
                        _redBallArray = _resultArray[0].split(',');
                        _blueBallArray= _resultArray[1].split(',');
                    }else{
                        _redBallArray =  _val.result.split(',');
                    }
                }else{
                    _redBallArray = [];
                }


               /** 判断是双色球，而且是红球类型 */
               if(_this.dealWithCommonService.contains(_ssqRed, _stype)){

                        _parmBallArray = _redBallArray;
                        _ballType          = 'sh';

                        /** 判断是双色球，而且是蓝球类型 */
               }else if(_this.dealWithCommonService.contains(_ssqBlue, _stype)){

                        _parmBallArray = _blueBallArray;
                        _ballType          = 'sh';

                }

               /** 判断哪些号码是开奖的 */
                _val['awardNumber'] = _this.judgeAwardNumber(_parmBallArray, _val.details);

               /** 统计这批号码中奖情况 */
               _val['tips'] = _this.statisticsNumber(_val['awardNumber'], _ballType);

            }

        });

        /** 计算准确率 */
        _data['accuracyOfCalculation'] = _this.accuracyOfCalculation(_data, _ballType);

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
     *  统计号码多少中;
     *  @param: 开奖号码；
     *  @param: 类型，这里类型有sh(杀号)，dd(定胆)；
     *  @param: 是否单个也算是中奖
     */
    statisticsNumber(_arr, _type, _isSingle){

        let _this = this;
        let _tips = '';
        _isSingle = _isSingle==undefined ? false: _isSingle;

        /** 看看单列有多少条 */
        let _rowNum = _arr[0].length;

        /** 统计一下，总共有哪些列是全中多条的 */
        let _allTotal  = 0;

        for(var i=0; i<_arr.length; i++){

            /** 这里返回是单条的中的情况，即如果是【1，2】如果中了其中一个，就会返回1，如果中了2个，就会返回2 */
            //console.log(_arr[i])
            let _awardTotal =  _this.columnStatisticsNumber(_arr[i], _type);

            /** 如果单个也选是中奖的话 */
            if(_isSingle == true){

                /** 如果全中的情况 */
                if(_awardTotal > 0){

                    _allTotal++;
                }

            /** 多个都标红才算是中奖 */
            }else{

                /** 如果全中的情况 */
                if(_awardTotal == _rowNum){

                    _allTotal++;
                }
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
     *  判断单个列块有多少条中；
     * @param _arr
     * @param _type
     * @return {number}
     */
     columnStatisticsNumber(_arr, _type){

         let  _total = 0;

         _arr.forEach((_sval, _sindex, _sarr)=> {

             if(_type == 'sh'){

                 /** 不相同的才统计 */
                 if(_sval.isSame != true){
                     _total++;
                 }

                 /** 如果是定胆的话，则是标准是和开奖号码相同的才进行统计 */
             }else if(_type == 'dd'){

                 /** 相同的进行统计 */
                 if(_sval.isSame == true){
                     _total++;
                 }
             }

         })

        return  _total;
    }

    /**
     *  计算准确率;
     *  @param _arr --- 后台请求回来的球号数组;
     *  @param _type -- 类型
     *  @param: 是否单个也算是中奖
     */
    accuracyOfCalculation(_array, _type, _isSingle){

        let _this = this;
        let _awardNumberArr=[];

        /** 行数 */
        let  _row  = 0;

        /** 列数 */
        let _column = 0;

        /** 看看单列有多少条 */
        let _rowNum;

        let _accuracyOfCalculation = [];

        /** 当第一条状态为false的时候，则需要排除第一条统计，否则为true则要计算在内 */
        let  _isExcludeNo1 = (_array[0].state == false ? 0: -1);

        _array.forEach((_val,_index,_arr)=>{

            if(_index != _isExcludeNo1){
                _awardNumberArr.push(_val.awardNumber);
            }
        });


        /** 看看单列有多少条 */
        _rowNum = _awardNumberArr[0][0].length;

        /** 计算行数 */
        _row  = _awardNumberArr.length;

        /** 计算列数, 这里只取第一行即可了 */
        _column = _awardNumberArr[0].length;

        for(var i=0; i<_column; i++){

            var _isSameNumber = 0;

            for(var j=0; j< _row; j++){

                /** 单个也算是中奖 */
                if(_isSingle == true){

                    if(_this.columnStatisticsNumber(_awardNumberArr[j][i], _type) > 0){
                        _isSameNumber++
                    }

                 /** 多个才算是中奖 */
                }else{

                    if(_this.columnStatisticsNumber(_awardNumberArr[j][i], _type) == _rowNum){
                        _isSameNumber++
                    }
                }

            }

            _accuracyOfCalculation.push((Math.round(_isSameNumber/_row*100))+'%');
        }

       return _accuracyOfCalculation;
    }


}

export default shddDealWithData;