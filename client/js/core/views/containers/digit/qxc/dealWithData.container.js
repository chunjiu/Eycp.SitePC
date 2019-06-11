/****************************************************************
 *
 *                      七星彩 处理数据逻辑
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

                return _this.dealWidth_1(_data);

            }else if(11 <= _flot && 13 >= _flot){

                return  _this.dealWidth_11(_data);

            }else if(_flot == 14){

                return  _this.dealWidth_14(_data);

            }
        },

        /**  处理分布走势数据   flot = 1 */
        dealWidth_1: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++) {
                var _dataArr = missStatList[i].statResult;
                missStatList[i].statData['data_3'] = [_Chart.sumArr(_dataArr)];
                missStatList[i].statData['data_4'] = [_Chart.spanNumber(_dataArr)];
                missStatList[i].statData['data_5'] = [_Chart.ratioEvenOdd(_dataArr)];
                missStatList[i].statData['data_6'] = [_Chart.ratioPrime(_dataArr)];

            }

            for(var i =0; i < missBottomStatList.length; i++){
                missBottomStatList[i].statData['data_3'] = [''];
                missBottomStatList[i].statData['data_4'] = [''];
                missBottomStatList[i].statData['data_5'] = [''];
                missBottomStatList[i].statData['data_6'] = [''];
            }

            return _data

        },

        /**  处理大小、奇偶、质合走势数据   flot = 11、12、13 */
        dealWidth_11: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                var _dataArr = missStatList[i].statData.data_0;

                var _dataArr2 = missStatList[i].statData.data_1;

                var statData = missStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 2);

                statData['data_0'] = newDataArr[0];

                statData['data_1'] = newDataArr[1];

                statData['data_2'] = newDataArr[2];

                statData['data_3'] = newDataArr[3];

                statData['data_4'] = newDataArr[4];

                statData['data_5'] = newDataArr[5];

                statData['data_6'] = newDataArr[6];

                /** 大小比例分布 */
                statData['data_7'] = _dataArr2;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                var _dataArr = missBottomStatList[i].statData.data_0;
                var _dataArr2 = missBottomStatList[i].statData.data_1;

                var newDataArr = _this.sliceArr(_dataArr, 2);

                var statData = missBottomStatList[i].statData;

                statData['data_0'] = newDataArr[0];

                statData['data_1'] = newDataArr[1];

                statData['data_2'] = newDataArr[2];

                statData['data_3'] = newDataArr[3];

                statData['data_4'] = newDataArr[4];

                statData['data_5'] = newDataArr[5];

                statData['data_6'] = newDataArr[6];

                /** 大小比例分布 */
                statData['data_7'] = _dataArr2;
            }

            return _data
        },

        /**  处理012路走势数据   flot = 14 */
        dealWidth_14: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;
            console.log(missStatList)
            for(var i=0; i< missStatList.length; i++) {

                /** 隐藏开奖号码 */
                missStatList[i].result = ''

                var _dataArr = missStatList[i].statData.data_0;

                var _dataArr1 = missStatList[i].statData.data_1;

                var _dataArr2 = missStatList[i].statData.data_2;

                var _dataArr3 = missStatList[i].statData.data_3;

                var statData = missStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                statData['data_0'] = newDataArr[0];

                statData['data_1'] = newDataArr[1];

                statData['data_2'] = newDataArr[2];

                statData['data_3'] = newDataArr[3];

                statData['data_4'] = newDataArr[4];

                statData['data_5'] = newDataArr[5];

                statData['data_6'] = newDataArr[6];

                /** 余0个数 */
                statData['data_7'] = _dataArr1;
                /** 余1个数 */
                statData['data_8'] = _dataArr2;
                /** 余2个数 */
                statData['data_9'] = _dataArr3;
            }

            for(var i =0; i < missBottomStatList.length; i++){

                /** 隐藏开奖号码 */
                missBottomStatList[i].result = ''

                var _dataArr = missBottomStatList[i].statData.data_0;

                var _dataArr1 = missBottomStatList[i].statData.data_1;

                var _dataArr2 = missBottomStatList[i].statData.data_2;

                var _dataArr3 = missBottomStatList[i].statData.data_3;

                var statData = missBottomStatList[i].statData;

                var newDataArr = _this.sliceArr(_dataArr, 3);

                statData['data_0'] = newDataArr[0];

                statData['data_1'] = newDataArr[1];

                statData['data_2'] = newDataArr[2];

                statData['data_3'] = newDataArr[3];

                statData['data_4'] = newDataArr[4];

                statData['data_5'] = newDataArr[5];

                statData['data_6'] = newDataArr[6];

                /** 余0个数 */
                statData['data_7'] = _dataArr1;
                /** 余1个数 */
                statData['data_8'] = _dataArr2;
                /** 余2个数 */
                statData['data_9'] = _dataArr3;
                console.log(missBottomStatList[i].statData)
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