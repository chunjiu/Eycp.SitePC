/****************************************************************
 *
 *                      k3 处理数据逻辑
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

            if(_flot == 1){

                return _data;

            }else if(_flot == 2){

                return  _this.dealWith_2(_data);

            }else if(_flot == 3){

                return  _data;

            }else if(_flot == 4){

                return  _this.dealWith_4(_data);

            }else if(_flot == 5){

                return  _this.dealWith_5(_data);

            }else if(_flot == 15){

                return _data;

            }else if(_flot == 16){

                return _this.dealWith_16(_data);

            }else if(_flot == 17){

                return _this.dealWith_17(_data);

            }else if(_flot == 18){

                return _this.dealWith_18(_data);
            }


        },

        /**    基本和值走势 = 2	       */
        dealWith_2: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                var _tempArray = missStatList[i].statData.data_4;

                 missStatList[i].statData.data_1 = [].concat(missStatList[i].statData.data_1, missStatList[i].statData.data_2, missStatList[i].statData.data_3);

                missStatList[i].statData.data_2 = _tempArray;

                delete missStatList[i].statData.data_3;

                delete missStatList[i].statData.data_4;
            }

            for(var i=0; i< missBottomStatList.length; i++){

                var _tempArray = missBottomStatList[i].statData.data_4;

                missBottomStatList[i].statData.data_1 = [].concat(missBottomStatList[i].statData.data_1, missBottomStatList[i].statData.data_2, missBottomStatList[i].statData.data_3);

                missBottomStatList[i].statData.data_2 = _tempArray;

                delete missBottomStatList[i].statData.data_3;

                delete missBottomStatList[i].statData.data_4;
            }

            return _data;

        },

        /**    基本组合走势 = 4	  */
        dealWith_4: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                missStatList[i].statData.data_5= [_Chart.sumArr(missStatList[i].statResult)];
            }

            for(var i=0; i< missBottomStatList.length; i++){
                missBottomStatList[i].statData.data_5= [''];
            }

            return _data;

        },

        /**  处理012路走势数据   flot = 5 */
        dealWith_5: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){

                  var _dataArr = missStatList[i].statData.data_1;

                  var newDataArr = _this.sliceArr(_dataArr, 3);

                  var statData = missStatList[i].statData;

                  var data2 =  [].concat(statData['data_2']);

                 statData['data_1'] = newDataArr[0];

                 statData['data_2'] = newDataArr[1];

                 statData['data_3'] = newDataArr[2];

                 /** 余数比 */
                 statData['data_4'] = [_Chart.ratio012(missStatList[i].statResult)];

                 statData['data_5'] = data2;

            }

            for(var i =0; i < missBottomStatList.length; i++){

                var _dataArr = missBottomStatList[i].statData.data_1;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                var statData = missBottomStatList[i].statData;

                var data2 =  [].concat(statData['data_2']);

                statData['data_1'] = newDataArr[0];

                statData['data_2'] = newDataArr[1];

                statData['data_3'] = newDataArr[2];

                /** 余数比 */
                statData['data_4'] = [''];

                statData['data_5'] = data2;
            }

            return _data

        },

        /**
         *  分布组合统计 = 16
         */
        dealWith_16: function (_data) {

            var _object = {
                missStatList: _data,
                missBottomStatList: null
            };

           return _object;

        },

        /**
         *  分布和值统计 = 17
         */
        dealWith_17: function (_data) {

            var _object = {
                missStatList: _data,
                missBottomStatList: null
            };

            return _object;

        },

        /**
         *  形态跨度统计 = 18
         */
        dealWith_18: function (_data) {

            var _object = {
                missStatList: _data,
                missBottomStatList: null
            };

            return _object;

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