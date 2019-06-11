/****************************************************************
 *
 *                      11选5 处理数据逻辑
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

            if (_flot == 32 || _flot == 33 || _flot == 34 || _flot == 63 || _flot == 64 || _flot == 65) {
                return this.dealWidth_32(_data, _flot);
            } else if (_flot == 37 || _flot == 68){
                return this.dealWidth_37(_data);
            } else if (_flot == 38 || _flot == 39 || _flot == 69 || _flot == 70){
                return this.dealWidth_38(_data, _flot);
            } else if (_flot == 10 || _flot == 40 || _flot == 71) {
               return this.dealWidth_40(_data, _flot);
            } else {
                return _data;
            }

        },

        /*
         * 前二大小走势： 32
         * 前二奇偶走势： 33
         * 前二质合走势： 34
         * 前三大小走势： 63
         * 前三奇偶走势： 64
         * 前三质合走势： 65
         * */
        dealWidth_32: function(_data, _flot){
            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i = 0; i < missStatList.length; i++) {
                var statData = missStatList[i].statData;
                var data0_len = statData['data_0'].length;
                var newArr = [];

                if (_flot == 32 || _flot == 33 || _flot == 34) {
                    statData['data_3'] = statData['data_2'];
                    statData['data_2'] = statData['data_1'];
                    statData['data_1'] = statData['data_0'].splice(data0_len-2, data0_len);
                    statData['data_0'] = statData['data_0'].splice(0,2);
                } else if (_flot == 63 || _flot == 64 || _flot == 65) {
                    statData['data_3'] = statData['data_1'];
                    statData['data_4'] = statData['data_2'];
                    newArr = this.sliceArr(statData['data_0'], 2);
                    statData['data_2'] = newArr[2];
                    statData['data_1'] = newArr[1];
                    statData['data_0'] = newArr[0];
                }
            }

            for(var i = 0; i < missBottomStatList.length; i++) {
                var statData = missBottomStatList[i].statData;
                var data0_len = statData['data_0'].length;
                var newArr = [];
                if (_flot == 32 || _flot == 33 || _flot == 34) {
                    statData['data_3'] = statData['data_2'];
                    statData['data_2'] = statData['data_1'];
                    statData['data_1'] = statData['data_0'].splice(data0_len-2, data0_len);
                    statData['data_0'] = statData['data_0'].splice(0,2);
                } else if (_flot == 63 || _flot == 64 || _flot == 65) {
                    statData['data_3'] = statData['data_1'];
                    statData['data_4'] = statData['data_2'];
                    newArr = this.sliceArr(statData['data_0'], 2);
                    statData['data_2'] = newArr[2];
                    statData['data_1'] = newArr[1];
                    statData['data_0'] = newArr[0];
                }

            }

            return _data;
        },

        /*
         * 前二平均值走势：  37
         * 前三平均值走势：  68
         * */
        dealWidth_37: function(_data) {
            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i = 0; i < missStatList.length; i++) {
                var statData = missStatList[i].statData;
                var newArr = [];
                for(var j = 3; j > 0; j--) {
                    statData['data_' + j] = statData['data_' + (j - 1)];
                }
                var _result = missStatList[i].statResult;
                var sum = _Chart.sumArr(_result);
                newArr.push(sum);
                statData['data_0'] = newArr;
            }

            for(var i = 0; i < missBottomStatList.length; i++) {
                var statData = missBottomStatList[i].statData;
                for(var j = 3; j > 0; j--) {
                    statData['data_' + j] = statData['data_' + (j - 1)];
                }
                statData['data_0'] = [''];
            }

            return _data;
        },

        /*
         * 前二 升平降: 38
         * 前二 012路走势: 39
         * 前三 升平降: 69
         * 前三 012路走势: 70
         * */
        dealWidth_38: function(_data, _flot){
            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i = 0; i < missStatList.length; i++) {
                var newArr = [];
                var statData = missStatList[i].statData;

                if (_flot == 38 || _flot == 39) {
                    statData['data_2'] = statData['data_1'];
                    newArr = this.sliceArr(statData['data_0'], 3);
                    statData['data_1'] = newArr[1];
                    statData['data_0'] = newArr[0];
                } else if ( _flot == 69 || _flot == 70) {
                    var data_3 = statData['data_1'];
                    newArr = this.sliceArr(statData['data_0'], 3);
                    statData['data_2'] = newArr[2];
                    statData['data_1'] = newArr[1];
                    statData['data_0'] = newArr[0];
                    statData['data_3'] = data_3;
                }
            }

            for(var i = 0; i < missBottomStatList.length; i++) {
                var newArr = [];
                var statData = missBottomStatList[i].statData;
                if (_flot == 38 || _flot == 39) {
                    statData['data_2'] = statData['data_1'];
                    newArr = this.sliceArr(statData['data_0'], 3);
                    statData['data_1'] = newArr[1];
                    statData['data_0'] = newArr[0];
                } else if (_flot == 69 || _flot == 70) {
                    var data_3 = statData['data_1'];
                    newArr = this.sliceArr(statData['data_0'], 3);
                    statData['data_2'] = newArr[2];
                    statData['data_1'] = newArr[1];
                    statData['data_0'] = newArr[0];
                    statData['data_3'] = data_3;
                }

            }

            return _data;
        },

        /*
        *  基本重号走势： 10
        *  前二重号走势： 40
        *  前三重号走势： 71
        * */
        dealWidth_40: function(_data, _flot) {
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;
            var _result = this.getEachArray(missStatList);
            for (var i = 0; i < missStatList.length; i++) {
                var statData = missStatList[i].statData;
                var data_4 = statData['data_4'];

                statData['data_4'] = statData['data_2'];
                statData['data_5'] = statData['data_3'];
                if (_flot == 10) {
                    statData['data_6'] = data_4;
                }
                statData['data_3'] = statData['data_1'];
                statData['data_2'] = statData['data_0'];
                statData['data_0'] = _result[i]['data_0'];
                statData['data_1'] = _result[i]['data_1'];
            }


            for (var i = 0; i < missBottomStatList.length; i++) {
                var statData = missBottomStatList[i].statData;
                var data_4 = statData['data_4'];

                statData['data_4'] = statData['data_2'];
                statData['data_5'] = statData['data_3'];
                if (_flot == 10) {
                    statData['data_6'] = data_4;
                }
                statData['data_3'] = statData['data_1'];
                statData['data_2'] = statData['data_0'];
                statData['data_0'] = [''];
                statData['data_1'] = [''];
            }

            _data.missStatList.shift();

            return _data;
        },
        /**
         * 重号
         * @param {*} resultList
         */
        getEachArray: function(resultList) {
            var _length = resultList.length;
            var _result = [{
                data_0: ['-'],
                data_1: [0]
            }];
            for (var i = 0; i < _length - 1; i++) {
                var _lineArray = [];
                var _newArray = [];
                // 如果包含则代表重号
                resultList[i + 1].statResult.forEach(function(item) {
                    if(resultList[i].statResult.contains(item)) {
                        item = item < 10 ? '0' + item : item;
                        _newArray.push(item);
                    }
                });

                if (_newArray.length == 0) {
                    _lineArray.push('-');
                } else {
                    _lineArray = _newArray.join(',');
                }

                _result.push({
                    data_0: [_lineArray],
                    data_1: [_newArray.length.toString()]
                });
            }

            return _result;
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