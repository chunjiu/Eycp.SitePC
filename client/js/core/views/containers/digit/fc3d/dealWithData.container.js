/****************************************************************
 *
 *                      福彩3d/排列3 处理数据逻辑
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

            if(1 <= _flot && 3>= _flot){

                return _this.dealWidth_1(_data);

            }else if(11 == _flot){
                return _this.dealWidth_11(_data);
            }else if(12 == _flot || 13 == _flot){
                return _this.dealWidth_12(_data);
            }else if(14 == _flot){
                return _this.dealWidth_14(_data);
            }else if(15 == _flot){
                return _this.dealWidth_15(_data);
            }else if(16==_flot){
                return _this.dealWidth_16(_data);
            }else if(17==_flot){
                return _this.dealWidth_17(_data);
            }else if(18==_flot){
                return _this.dealWidth_18(_data);
            }else if(19==_flot){
                return _this.dealWidth_19(_data);
            }else if(20==_flot){
                return _this.dealWidth_20(_data);
            }

            return _data;
        },

        /**  处理个位走势数据   flot = 1 */
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
                var _dataResult = _Chart.intArr(missStatList[i].result.split(','));

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

            return _data

        },
        

        /**  处理分布走势数据   flot = 11 */
        dealWidth_11: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                var _mslStatResult = missStatList[i].statResult;

                var statData = missStatList[i].statData;

                statData['data_4'] =  [_Chart.sumArr(_mslStatResult)];
            }

            for(var i =0; i < missBottomStatList.length; i++){

                var statData = missBottomStatList[i].statData;
                
                statData['data_4'] = [''];
            }
           
            return _data
        },
        /**  处理奇偶走势数据   flot = 12 */
        dealWidth_12: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /** 开奖号码 */
                var _statResult = missStatList[i].statResult;
 
                var _data2 = missStatList[i].statData.data_2;
                var _data3 = missStatList[i].statData.data_3;

                var statData = missStatList[i].statData;

                var newDataArr = _Chart.sliceArr(missStatList[i].statData.data_1, 2);
                for (var m = 1; m <= newDataArr.length; m++) {
                    statData['data_'+m] =  newDataArr[m-1];
                }
               
                statData['data_4'] = _data2;
                statData['data_5'] = _data3;
                statData['data_6'] = [_Chart.sumArr(_statResult)];
            }

            for(var i =0; i < missBottomStatList.length; i++){


                var _data2 = missBottomStatList[i].statData.data_2;
                var _data3 = missBottomStatList[i].statData.data_3;

                var statData = missBottomStatList[i].statData;

                var newDataArr = _Chart.sliceArr(missBottomStatList[i].statData.data_1, 2);
                for (var m = 1; m <= newDataArr.length; m++) {
                    statData['data_'+m] =  newDataArr[m-1];
                }
               
                statData['data_4'] = _data2;
                statData['data_5'] = _data3;
                statData['data_6'] = [''];
            }
            return _data;
        },
        
        /**  处理升平降走势数据   flot = 14 */
        dealWidth_14: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {


                /** 个十百位 */
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

                var newDataArr = _Chart.sliceArr(_dataArr, 3);
                for (var m = 0; m < newDataArr.length; m++) {
                    statData['data_'+m] =  newDataArr[m];
                }
                statData['data_3'] = _hzs;
                statData['data_4'] = _hws;
                statData['data_5'] = _kdz;
                statData['data_6'] = _pjz;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 个十百位 */
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

                var newDataArr = _Chart.sliceArr(_dataArr, 3);
                for (var m = 0; m < newDataArr.length; m++) {
                    statData['data_'+m] =  newDataArr[m];
                }
                statData['data_3'] = _hzs;
                statData['data_4'] = _hws;
                statData['data_5'] = _kdz;
                statData['data_6'] = _pjz;
            }

            return _data;
        },
        /**  处理012路走势数据   flot = 15 */
        dealWidth_15: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /** 开奖号码 */
                var _statResult = missStatList[i].statResult;
 
                var _data2 = missStatList[i].statData.data_2;
                var _data3 = missStatList[i].statData.data_3;
                var _data4 = missStatList[i].statData.data_4;

                var statData = missStatList[i].statData;

                var newDataArr = _Chart.sliceArr(missStatList[i].statData.data_1, 3);
                for (var m = 1; m <= newDataArr.length; m++) {
                    statData['data_'+m] =  newDataArr[m-1];
                }
               
                statData['data_4'] = _data2;
                statData['data_5'] = _data3;
                statData['data_6'] = _data4;
            }

            for(var i =0; i < missBottomStatList.length; i++){


                var _data2 = missBottomStatList[i].statData.data_2;
                var _data3 = missBottomStatList[i].statData.data_3;
                var _data4 = missBottomStatList[i].statData.data_4;

                var statData = missBottomStatList[i].statData;

                var newDataArr = _Chart.sliceArr(missBottomStatList[i].statData.data_1, 3);
                for (var m = 1; m <= newDataArr.length; m++) {
                    statData['data_'+m] =  newDataArr[m-1];
                }
               
                statData['data_4'] = _data2;
                statData['data_5'] = _data3;
                statData['data_6'] = _data4;
            }

            return _data;
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
        /**  处理质合走势数据   flot = 17 */
        dealWidth_17: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /** 开奖号码 */
                var _statResult = missStatList[i].statResult;
                /** 个十百千位 */
                var _dataArr = missStatList[i].statData.data_1;
                /** 质合比 */
                var _zhb = missStatList[i].statData.data_2;
                 /** 质合形态 */
                var _zhmode = missStatList[i].statData.data_3;

                var statData = missStatList[i].statData;

                var newDataArr = _Chart.sliceArr(_dataArr, 2);
                for (var m = 1; m <= newDataArr.length; m++) {
                    statData['data_'+m] =  newDataArr[m-1];
                }
                statData['data_4'] = _zhb;
                statData['data_5'] = _zhmode;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                var statData = missBottomStatList[i].statData;

                var _dataArr = statData["data_1"];
                var _zhb = statData["data_2"];
                var _zhmode = statData["data_3"];

             
                var newDataArr = _Chart.sliceArr(_dataArr, 2);
                 for (var m = 1; m <= newDataArr.length; m++) {
                    statData['data_'+m] =  newDataArr[m-1];
                }

                statData['data_4'] = _zhb;
                statData['data_5'] = _zhmode;
            }

            return _data;
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
          
            return _data;
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
            return _data;

        },
        /**  处理尾数类型走势数据   flot = 20 */
        dealWidth_20: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

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
                var _dataResult = missStatList[i].statResult;

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

        }
    }

    return DealWithDataContainer;

})