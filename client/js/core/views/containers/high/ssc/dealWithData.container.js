/****************************************************************
 *
 *
 *                      时时彩处理数据逻辑
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

            var missStatList = _data.missStatList;
            for(var j = 0; j < missStatList.length; j++) {
                var item = missStatList[j].result.split(',');
                missStatList[j].statResult = item;
            }

            if(_flot == undefined){
                console.error('DealWithDataContainer: _flot值不能为空！');
                return;
            }

            if(_data == undefined) {
                console.error('DealWithDataContainer: _data值不能为空！');
                return;
            }

            switch(_flot) {
                case 10:
                case 31:
                case 51:
                case 62:
                    return  _this.dealWidth_shape(_data, _flot);
                    break;
                case 11:
                    return _this.dealWidth_11(_data);
                    break;
                case 35:
                    return _this.dealWidth_35(_data);
                    break;
                case 15:
                    return _this.dealWidth_15(_data);
                    break;
                case 63:
                case 64:
                    return _this.dealWidth_63(_data);
                    break;
                default:
                    return _data;
                    break;
            }
        },

        /** 处理二星基本走势数据(大小比/单双比/质合比)   flot = 10
         * 处理三星形态走势数据(和值/大小比/单双比/质合比)   flot = 31
         *处理四星形态走势数据(和值/大小比/单双比/质合比)   flot = 51
         *处理五星形态走势数据(和值/大小比/单双比/质合比)   flot = 62
         * */
        dealWidth_shape: function (_data, _flot) {

            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                var sumArr = [];
                var bigNum = 0, smallNum = 0, bigToSmall = [];
                var oddNum = 0, evenNum = 0, oddToEven = [];
                var primeNum = 0, composNum = 0, primeToCompos = [];

                var statData = missStatList[i].statData;
                var _result = _data.missStatList[i].result.split(',');
                var _resultLen = _result.length;

                if (_flot == 10) {
                    _result = _result.splice(_resultLen - 2, _resultLen - 1);
                } else if (_flot == 31) {
                    _result = _result.splice(_resultLen - 3, _resultLen - 1);
                } else if (_flot == 51) {
                    _result = _result.splice(_resultLen - 4, _resultLen - 1);
                }


                _result.forEach(function(item) {
                   var item = parseInt(item);
                    // 判断大小
                    _Chart.isBigSmall(item, 5) ? bigNum++ : smallNum++;

                    //判断单双
                    _Chart.isEvenOdd(item) ? evenNum++ : oddNum++;

                    //判断质合
                    _Chart.isSscPrime(item) ? primeNum++ : composNum++;
                });

                bigToSmall.push(bigNum + ':' + smallNum);
                oddToEven.push(oddNum + ':' + evenNum);
                primeToCompos.push(primeNum + ':' + composNum);

                if (_flot ==  10) {
                    statData['data_3'] = bigToSmall;
                    statData['data_4'] = oddToEven;
                    statData['data_5'] = primeToCompos;
                } else if (_flot == 31 || _flot == 62) {
                    sumArr.push(_Chart.sumArr(_result));
                    statData['data_6'] = sumArr;
                    statData['data_7'] = bigToSmall;
                    statData['data_8'] = oddToEven;
                    statData['data_9'] = primeToCompos;
                } else if (_flot == 51) {
                    sumArr.push(_Chart.sumArr(_result));
                    statData['data_8'] = sumArr;
                    statData['data_9'] = bigToSmall;
                    statData['data_10'] = oddToEven;
                    statData['data_11'] = primeToCompos;
                }

            };

            for(var i = 0; i < missBottomStatList.length; i++) {
                var statData = missBottomStatList[i].statData;
                var bigToSmall = [], oddToEven = [], primeToCompos = [];
                bigToSmall.push(''); oddToEven.push(''); primeToCompos.push('');

                if (_flot == 10) {
                    statData['data_3'] = bigToSmall;
                    statData['data_4'] = oddToEven;
                    statData['data_5'] = primeToCompos;
                } else if (_flot == 31 || _flot == 62) {
                    statData['data_6'] = [''];
                    statData['data_7'] = bigToSmall;
                    statData['data_8'] = oddToEven;
                    statData['data_9'] = primeToCompos;
                } else if (_flot == 51) {
                    statData['data_8'] = [''];
                    statData['data_9'] = bigToSmall;
                    statData['data_10'] = oddToEven;
                    statData['data_11'] = primeToCompos;
                }
            }

            return _data;

        },

        /*处理二星跨度走势 _flot=15*/

        dealWidth_15: function (_data) {

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){
                var statData = missStatList[i].statData;
                var kdArr = [];
                var _result = _data.missStatList[i].result.split(',');
                kdArr.push(Math.abs(parseInt(_result[_result.length-1]) - parseInt(_result[_result.length-2])));
                for (var j = 6; j > 1; j-- ) {
                    statData['data_' + j] = statData['data_' + (j - 1)];
                }
                statData['data_1'] = kdArr;
            };

            for(var i = 0; i < missBottomStatList.length; i++) {
                var statData = missBottomStatList[i].statData;
                var kdArr = [];
                kdArr.push('');
                for (var j = 6; j > 1; j-- ) {
                    statData['data_' + j] = statData['data_' + (j - 1)];
                }
                statData['data_1'] = kdArr;
            }

            return _data;
        },

        /*处理三星跨度走势 _flot=35*/
        dealWidth_35: function (_data) {

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){
                var statData = missStatList[i].statData;
                var kdArr = [];
                var _result = _data.missStatList[i].result.split(',');
                var newArr = [];
                _result.forEach(function(item, index) {
                    var item = parseInt(item);
                    if (index !== 0 && index !== 1) {
                        newArr.push(item);
                    }
                });
                var maxNum = Math.max.apply(null, newArr);
                var minNum = Math.min.apply(null, newArr);
                kdArr.push(maxNum - minNum);
                for (var j = 6; j > 1; j-- ) {
                    statData['data_' + j] = statData['data_' + (j - 1)];
                }
                statData['data_1'] = kdArr;
            };

            for(var i = 0; i < missBottomStatList.length; i++) {
                var statData = missBottomStatList[i].statData;
                var kdArr = [];
                kdArr.push('');
                for (var j = 6; j > 1; j-- ) {
                    statData['data_' + j] = statData['data_' + (j - 1)];
                }
                statData['data_1'] = kdArr;
            }

            return _data;
        },

        /**  处理二星基本走势数据(和值)   flot = 11 */
        dealWidth_11: function (_data) {

            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){
                var newArr = [],sumArr = [];
                var statData = missStatList[i].statData;
                var _result = _data.missStatList[i].result.split(',');
                _result = _result.splice(_result.length - 2, _result.length - 1);

                _result.forEach(function(item) {
                    var item = parseInt(item);
                    newArr.push(item);
                });

                sumArr.push(_Chart.sumArr(newArr));
                statData['data_7'] = sumArr;
            };

            for(var i = 0; i < missBottomStatList.length; i++) {
                var statData = missBottomStatList[i].statData;
                var kdArr = [];
                kdArr.push('');
                statData['data_7'] = kdArr;
            }
            return _data;

        },

        /**  处理五星大小/奇偶走势数据   flot = 63/64 */
        dealWidth_63: function (_data) {

            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                var _result = missStatList[i].result.split(',');
                missStatList[i].otherData = [];

                _result.forEach(function(item, index) {
                    missStatList[i].otherData.push({
                        column: 6 + (index * 3),
                        data: item,
                        bg: 'bg-default'
                    })
                });
            };

            for(var i=0; i< missBottomStatList.length; i++){

                missBottomStatList[i].otherData = [];

                _result.forEach(function(item, index) {
                    missBottomStatList[i].otherData.push({
                        column: 6 + (index * 3),
                        data: '',
                        bg: 'bg-default'
                    })
                });
            };
            //console.dir(_data);
            return _data;

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