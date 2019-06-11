/****************************************************************
 *
 *                      排列五 处理数据逻辑
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

            if(1 <= _flot && 5>= _flot || _flot == 20){

                return _this.dealWidth_1(_data);

            }else if(_flot == 11){

                return  _this.dealWidth_11(_data);

            }else if(_flot == 12 || _flot == 13 || _flot == 17){

                return  _this.dealWidth_12(_data, _flot);

            }else if(_flot == 14){

                return  _this.dealWidth_14(_data);

            }else if(_flot == 15){

                return  _this.dealWidth_15(_data);

            }else if(_flot == 16){

                return  _this.dealWidth_16(_data);

            }else if(_flot == 18){

                return  _this.dealWidth_18(_data);

            }else if(_flot == 19){

                return  _this.dealWidth_19(_data);

            }

        },

        /**  处理个位走势数据   flot = 1、2、3、4、5、20 */
        dealWidth_1: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++) {

                /** 走势 */
                var _zs = missStatList[i].statData.data_0;
                /** 奇偶 */
                var _jo = missStatList[i].statData.data_1;
                /** 大小 */
                var _dx = missStatList[i].statData.data_2;
                /** 质合 */
                var _zh = missStatList[i].statData.data_3;
                /** 012路 */
                var _lu = missStatList[i].statData.data_4;
                /** 升平降 */
                var _spj = missStatList[i].statData.data_5;
                /** 开奖号码 */
                var _dataResult = _this.intArr(missStatList[i].result.split(','));

                missStatList[i].statResult = _dataResult;

                var statData = missStatList[i].statData;

                /** 和值 */
                statData['data_0'] = [_Chart.sumArr(_dataResult)];
                /** 跨度 */
                statData['data_1'] = [_Chart.spanNumber(_dataResult)];

                statData['data_2'] = _zs;

                statData['data_3'] = _jo;

                statData['data_4'] = _dx;

                statData['data_5'] = _zh;

                statData['data_6'] = _lu;

                statData['data_7'] = _spj;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 走势 */
                var _zs = missBottomStatList[i].statData.data_0;
                /** 奇偶 */
                var _jo = missBottomStatList[i].statData.data_1;
                /** 大小 */
                var _dx = missBottomStatList[i].statData.data_2;
                /** 质合 */
                var _zh = missBottomStatList[i].statData.data_3;
                /** 012路 */
                var _lu = missBottomStatList[i].statData.data_4;
                /** 升平降 */
                var _spj = missBottomStatList[i].statData.data_5;

                var statData = missBottomStatList[i].statData;

                /** 和值 */
                statData['data_0'] = [''];
                /** 跨度 */
                statData['data_1'] = [''];

                statData['data_2'] = _zs;

                statData['data_3'] = _jo;

                statData['data_4'] = _dx;

                statData['data_5'] = _zh;

                statData['data_6'] = _lu;

                statData['data_7'] = _spj;
            }
           
            return _data;

        },

        /**  处理分布走势数据   flot = 11 */
        dealWidth_11: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                var _mslStatResult = missStatList[i].statResult;

                var statData = missStatList[i].statData;

                statData['data_5'] = [_Chart.sumArr(_mslStatResult)];
            }

            for(var i =0; i < missBottomStatList.length; i++){

                var statData = missBottomStatList[i].statData;

                statData['data_5'] = [' '];
            }

            return _data
        },
        /**  处理奇偶走势数据   flot = 12、13、17 */
        dealWidth_12: function (_data,_flot) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /** 开奖号码 */
                var _statResult = missStatList[i].statResult;
                /** 号码走势 */
                var _hmzs = missStatList[i].statData.data_0;
                /** 个十百千位 */
                var _dataArr = missStatList[i].statData.data_1;
                /** 奇偶比 */
                var _job = missStatList[i].statData.data_2;

                var statData = missStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 2);

                /** 和值 */
                statData['data_0'] = [_Chart.sumArr(_statResult)];
                statData['data_1'] = _hmzs;
                statData['data_2'] = newDataArr[0];
                statData['data_3'] = newDataArr[1];
                statData['data_4'] = newDataArr[2];
                statData['data_5'] = newDataArr[3];
                statData['data_6'] = newDataArr[4];
                statData['data_7'] = _job;
                if(_flot == 12){
                    statData['data_8'] = [_Chart.modeEvenOdd(_statResult).join(',')];
                }else if(_flot == 13){
                    statData['data_8'] = [(_Chart.modeBigSmall(_statResult,5)).join(',')];
                }else if(_flot == 17){
                    statData['data_8'] = [_Chart.anotherModePrime(_statResult).join(',')];
                }

            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 号码走势 */
                var _hmzs = missBottomStatList[i].statData.data_0;
                /** 个十百千位 */
                var _dataArr = missBottomStatList[i].statData.data_1;
                /** 奇偶比 */
                var _job = missBottomStatList[i].statData.data_2;

                var statData = missBottomStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 2);

                /** 和值 */
                statData['data_0'] = [' '];
                statData['data_1'] = _hmzs;
                statData['data_2'] = newDataArr[0];
                statData['data_3'] = newDataArr[1];
                statData['data_4'] = newDataArr[2];
                statData['data_5'] = newDataArr[3];
                statData['data_6'] = newDataArr[4];
                statData['data_7'] = _job;
                statData['data_8'] = [" "];
            }

            return _data
        },
        /**  处理升平降走势数据   flot = 14 */
        dealWidth_14: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {


                /** 个十百千万位 */
                var _dataArr = missStatList[i].statData.data_0;
                /** 和数值 */
                var _hzs = missStatList[i].statData.data_1;
                /** 和尾值 */
                var _hws = missStatList[i].statData.data_2;
                /** 跨度值 */
                var _kdz = missStatList[i].statData.data_3;
                /** 平均值 */
                var _pjz = missStatList[i].statData.data_4;

                var statData = missStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                statData['data_0'] = newDataArr[0];
                statData['data_1'] = newDataArr[1];
                statData['data_2'] = newDataArr[2];
                statData['data_3'] = newDataArr[3];
                statData['data_4'] = newDataArr[4];
                statData['data_5'] = _hzs;
                statData['data_6'] = _hws;
                statData['data_7'] = _kdz;
                statData['data_8'] = _pjz;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 个十百千万位 */
                var _dataArr = missBottomStatList[i].statData.data_0;
                /** 和数值 */
                var _hzs = missBottomStatList[i].statData.data_1;
                /** 和尾值 */
                var _hws = missBottomStatList[i].statData.data_2;
                /** 跨度值 */
                var _kdz = missBottomStatList[i].statData.data_3;
                /** 平均值 */
                var _pjz = missBottomStatList[i].statData.data_4;

                var statData = missBottomStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                statData['data_0'] = newDataArr[0];
                statData['data_1'] = newDataArr[1];
                statData['data_2'] = newDataArr[2];
                statData['data_3'] = newDataArr[3];
                statData['data_4'] = newDataArr[4];
                statData['data_5'] = _hzs;
                statData['data_6'] = _hws;
                statData['data_7'] = _kdz;
                statData['data_8'] = _pjz;
            }

            return _data
        },
        /**  处理012路走势数据   flot = 15 */
        dealWidth_15: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /** 012路号码分布 */
                var _hmfb = missStatList[i].statData.data_0;
                /** 个十百千位 */
                var _dataArr = missStatList[i].statData.data_1;
                /** 0路个数 */
                var _gs0 = missStatList[i].statData.data_2;
                /** 1路个数 */
                var _gs1 = missStatList[i].statData.data_3;
                /** 2路个数 */
                var _gs2 = missStatList[i].statData.data_4;

                var statData = missStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                statData['data_0'] = _hmfb;
                statData['data_1'] = newDataArr[0];
                statData['data_2'] = newDataArr[1];
                statData['data_3'] = newDataArr[2];
                statData['data_4'] = newDataArr[3];
                statData['data_5'] = newDataArr[4];
                statData['data_6'] = _gs0;
                statData['data_7'] = _gs1;
                statData['data_8'] = _gs2;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 012路号码分布 */
                var _hmfb = missBottomStatList[i].statData.data_0;
                /** 个十百千位 */
                var _dataArr = missBottomStatList[i].statData.data_1;
                /** 0路个数 */
                var _gs0 = missBottomStatList[i].statData.data_2;
                /** 1路个数 */
                var _gs1 = missBottomStatList[i].statData.data_3;
                /** 2路个数 */
                var _gs2 = missBottomStatList[i].statData.data_4;

                var statData = missBottomStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                statData['data_0'] = _hmfb;
                statData['data_1'] = newDataArr[0];
                statData['data_2'] = newDataArr[1];
                statData['data_3'] = newDataArr[2];
                statData['data_4'] = newDataArr[3];
                statData['data_5'] = newDataArr[4];
                statData['data_6'] = _gs0;
                statData['data_7'] = _gs1;
                statData['data_8'] = _gs2;
            }

            return _data
        },
        /**  处理号码个数走势数据   flot = 16 */
        dealWidth_16: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for (var i = 0; i < missStatList.length; i++) {

                /** 奇数个数 */
                var _jsgs = missStatList[i].statData.data_0;
                /** 大数个数 */
                var _dsgs = missStatList[i].statData.data_1;
                /** 质数个数 */
                var _zsgs = missStatList[i].statData.data_2;
                /** 0路个数 */
                var _lu0 = missStatList[i].statData.data_3;
                /** 1路个数 */
                var _lu1 = missStatList[i].statData.data_4;
                /** 2路个数 */
                var _lu2 = missStatList[i].statData.data_5;
                /** 开奖号码 */
                var _dataResult = missStatList[i].statResult;

                var statData = missStatList[i].statData;

                /** 和值 */
                statData['data_0'] = [_Chart.sumArr(_dataResult)];
                /** 跨度 */
                statData['data_1'] = [_Chart.spanNumber(_dataResult)];

                statData['data_2'] = _jsgs;

                statData['data_3'] = _dsgs;

                statData['data_4'] = _zsgs;

                statData['data_5'] = _lu0;

                statData['data_6'] = _lu1;

                statData['data_7'] = _lu2;
            }

            for (var i = 0; i < missBottomStatList.length; i++) {

                /** 奇数个数 */
                var _jsgs = missBottomStatList[i].statData.data_0;
                /** 大数个数 */
                var _dsgs = missBottomStatList[i].statData.data_1;
                /** 质数个数 */
                var _zsgs = missBottomStatList[i].statData.data_2;
                /** 0路个数 */
                var _lu0 = missBottomStatList[i].statData.data_3;
                /** 1路个数 */
                var _lu1 = missBottomStatList[i].statData.data_4;
                /** 2路个数 */
                var _lu2 = missBottomStatList[i].statData.data_5;

                var statData = missBottomStatList[i].statData;

                /** 和值 */
                statData['data_0'] = [' '];
                /** 跨度 */
                statData['data_1'] = [' '];

                statData['data_2'] = _jsgs;

                statData['data_3'] = _dsgs;

                statData['data_4'] = _zsgs;

                statData['data_5'] = _lu0;

                statData['data_6'] = _lu1;

                statData['data_7'] = _lu2;
            }

            return _data

        },
        /**  处理跨度走势数据   flot = 18 */
        dealWidth_18: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {
                /** 开奖号码 */
                var _mslStatResult = missStatList[i].statResult;
                /** 跨度值 */
                var _kdz = missStatList[i].statData.data_0;
                /** 最大号码 */
                var _zdhm = missStatList[i].statData.data_1;
                /** 最小号码 */
                var _zxhm = missStatList[i].statData.data_2;

                var statData = missStatList[i].statData;

                statData['data_0'] = [_Chart.sumArr(_mslStatResult)];
                statData['data_1'] = _kdz;
                statData['data_2'] = _zdhm;
                statData['data_3'] = _zxhm;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 跨度值 */
                var _kdz = missBottomStatList[i].statData.data_0;
                /** 最大号码 */
                var _zdhm = missBottomStatList[i].statData.data_1;
                /** 最小号码 */
                var _zxhm = missBottomStatList[i].statData.data_2;

                var statData = missBottomStatList[i].statData;

                statData['data_0'] = [' '];
                statData['data_1'] = _kdz;
                statData['data_2'] = _zdhm;
                statData['data_3'] = _zxhm;
            }

            return _data
        },
        /**  处理和值走势数据   flot = 19 */
        dealWidth_19: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /** 和值走势 */
                var _hzzs = missStatList[i].statData.data_0;
                /** 和尾走势 */
                var _hwzs = missStatList[i].statData.data_1;
                /** 开奖号码 */
                var _dataResult = missStatList[i].statResult;

                var statData = missStatList[i].statData;

                /** 和值 */
                statData['data_0'] = [_Chart.sumArr(_dataResult)];
                /** 跨度 */
                statData['data_1'] = [_Chart.spanNumber(_dataResult)];

                statData['data_2'] = _hzzs;

                statData['data_3'] = _hwzs;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 和值走势 */
                var _hzzs = missBottomStatList[i].statData.data_0;
                /** 和尾走势 */
                var _hwzs = missBottomStatList[i].statData.data_1;

                var statData = missBottomStatList[i].statData;

                /** 和值 */
                statData['data_0'] = [' '];
                /** 跨度 */
                statData['data_1'] = [' '];

                statData['data_2'] = _hzzs;

                statData['data_3'] = _hwzs;
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
        },

        /**
         *  数组的字符串元素转数字
         *  @param: 数组对象
         */
        intArr: function (array) {
            var _newArr = [];
            for (var j = 0; j < array.length; j++){
                _newArr.push(parseInt(array[j]));
            }
            return _newArr;
        }
    }

    return DealWithDataContainer;

})