/****************************************************************
 *
 *                      大乐透 处理数据逻辑
 *
 * 综合基本走势       11  
    综合重号走势      12  
    综合连号走势      13  
    综合斜连号走势     14  
    综合斜跳号走势     15  
    前区大小走势      21  
    前区和值走势      22  
    前区奇偶走势      23  
    前区质合走势      24  
    前区除3余数走势    25  
    前区跨度走势      26  
    后区基本走势      41  
    后区和值走势      42  
    红球六行六列走势        51  历史开奖数据
    红球七行五列走势        52  历史开奖数据
 *
 ****************************************************************/
define([
    'Chart'
], function (
    _Chart
) {


    var DealWithDataContainer = {

        initialize: function (_flot,_data) {

            var _this = this;

            if(_flot == undefined){
                console.error('DealWithDataContainer: _flot值不能为空！');
                return;
            }

            if(_data == undefined){
                console.error('DealWithDataContainer: _data值不能为空！');
                return;
            }
            if(11<=_flot && 15>=_flot){

                return _this.dealWidth_clearAward(_data,_flot);

            }else if(_flot == 21 || _flot == 23 || _flot == 24){

                return  _this.dealWidth_21(_data, _flot);

            }else if(_flot == 25){

                return  _this.dealWidth_25(_data, _flot);

            }
            
            return _data;
        },

       
        /**  隐藏开奖结果 */
        dealWidth_clearAward: function (_data,_flot) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {
                var _res = missStatList[i].statResult;
                missStatList[i].result = '';
                if(_flot>11){
                    var statData = missStatList[i].statData;
                    var data0_len = statData['data_0'].length;
                    var _data0 = statData['data_0'];
                    var _data1 = statData['data_1'];

                    var newDataArr = _Chart.sliceArr(_data0, 7);
                    for (var m = 0; m < newDataArr.length; m++) {
                        statData['data_'+m] =  newDataArr[m];
                    }
                    newDataArr = _Chart.sliceArr(_data1, 6);
                    
                    statData['data_5'] = newDataArr[0];
                    statData['data_6'] = newDataArr[1];
                    
                    if(12 == _flot){
                        if(0 == i){
                            statData['data_7'] =[''];
                        }else{
                            statData['data_7'] = [_Chart.sameJoinGroupsCount(missStatList[i].statResult.slice(0,5),missStatList[i-1].statResult.slice(0,5))];
                        }
                    }
                }
            }
            for(var i =0; i < missBottomStatList.length; i++){
                 missBottomStatList[i].result = '';
                if(_flot>11){
                    var statData = missBottomStatList[i].statData;
                    var data0_len = statData['data_0'].length;
                    var _data0 = statData['data_0'];
                    var _data1 = statData['data_1'];
                    var newDataArr = _Chart.sliceArr(_data0, 7);
                    for (var m = 0; m < newDataArr.length; m++) {
                        statData['data_'+m] =  newDataArr[m];
                    }
                    newDataArr = _Chart.sliceArr(_data1, 6);
                    
                    statData['data_5'] = newDataArr[0];
                    statData['data_6'] = newDataArr[1];
                    if(12 == _flot){
                        statData['data_7'] =[''];
                    }
                }
            }
            //console.log(JSON.stringify(_data));
            return _data;
        },

        /**  处理前区大小奇偶质合走势数据   flot = 21、23、24 */
        dealWidth_21: function (_data,_flot) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /** 开奖号码 */
                var _statResult = missStatList[i].statResult;
                /** 第一~五位 */
                var _dataArr = missStatList[i].statData.data_0;
                /** 比例分布 */
                var _blfb = missStatList[i].statData.data_1;

                var statData = missStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 2);

                statData['data_0'] = newDataArr[0];
                statData['data_1'] = newDataArr[1];
                statData['data_2'] = newDataArr[2];
                statData['data_3'] = newDataArr[3];
                statData['data_4'] = newDataArr[4];
                statData['data_5'] = _blfb;
                if(_flot == 23){
                    statData['data_6'] = [_Chart.modeEvenOdd(_statResult).join(',')];
                }else if(_flot == 21){
                    statData['data_6'] = [(_Chart.modeBigSmall(_statResult,18)).join(',')];
                }else if(_flot == 24){
                    statData['data_6'] = [_Chart.modePrime(_statResult).join(',')];
                }

            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 第一~五位 */
                var _dataArr = missBottomStatList[i].statData.data_0;
                /** 比例分布 */
                var _blfb = missBottomStatList[i].statData.data_1;

                var statData = missBottomStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 2);

                statData['data_0'] = newDataArr[0];
                statData['data_1'] = newDataArr[1];
                statData['data_2'] = newDataArr[2];
                statData['data_3'] = newDataArr[3];
                statData['data_4'] = newDataArr[4];
                statData['data_5'] = _blfb;
                statData['data_6'] = [" "];
            }

            return _data
        },

        /**  处理前区除3余数走势数据   flot = 25 */
        dealWidth_25: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /** 第一~五位 */
                var _dataArr = missStatList[i].statData.data_0;
                /** 余0 */
                var _y0 = missStatList[i].statData.data_1;
                /** 余1 */
                var _y1 = missStatList[i].statData.data_2;
                /** 余2 */
                var _y2 = missStatList[i].statData.data_3;

                var statData = missStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                statData['data_0'] = newDataArr[0];
                statData['data_1'] = newDataArr[1];
                statData['data_2'] = newDataArr[2];
                statData['data_3'] = newDataArr[3];
                statData['data_4'] = newDataArr[4];
                statData['data_5'] = _y0;
                statData['data_6'] = _y1;
                statData['data_7'] = _y2;

            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 第一~五位 */
                var _dataArr = missBottomStatList[i].statData.data_0;
                /** 余0 */
                var _y0 = missBottomStatList[i].statData.data_1;
                /** 余1 */
                var _y1 = missBottomStatList[i].statData.data_2;
                /** 余2 */
                var _y2 = missBottomStatList[i].statData.data_3;

                var statData = missBottomStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                statData['data_0'] = newDataArr[0];
                statData['data_1'] = newDataArr[1];
                statData['data_2'] = newDataArr[2];
                statData['data_3'] = newDataArr[3];
                statData['data_4'] = newDataArr[4];
                statData['data_5'] = _y0;
                statData['data_6'] = _y1;
                statData['data_7'] = _y2;
            }

            return _data
        },

        /**
         *  切割数组
         *  @param: 数组对象
         *  @param: 每多少个切割为一个对象;
         */
        sliceArr: function(array, size) {
            var result = [];
            for (var x = 0; x < Math.ceil(array.length / size); x++) {
                var start = x * size;
                var end = start + size;
                result.push(array.slice(start, end));
            }
            return result;
        }
    }

    return DealWithDataContainer;

})