/****************************************************************
 *
 *                      ssq 处理数据逻辑
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

            if(_flot == 11){

                return _this.dealWith_11(_data);

            }else if(_flot == 12){

                return _this.dealWith_12(_data);

            }else if(_flot == 13){

                return _this.dealWith_13(_data);

            }else if(_flot == 14){

                return _this.dealWith_14(_data);

            }else if(_flot == 15){

                return _data;

            }else if(_flot == 16){

                return _data;

            }else if(_flot == 21){

                return _this.dealWith_21(_data);

            }else if(_flot == 22){

                return _this.dealWith_22(_data);

            }else if(_flot == 23){

                return _this.dealWith_23(_data);

            }else if(_flot == 24){

                return _this.dealWith_24(_data);

            }else if(_flot == 25){

                return _data;

            }else if(_flot == 26){

                return _data;

            }else if(_flot == 27 || _flot == 28 || _flot == 29 || _flot == 30){

                return _this.dealWith_27(_data);

            }else if(_flot == 41 || _flot == 42){

                return _this.dealWith_41(_data);

            }else if(_flot == 43){

                return _data;
            }


        },

        /**    综合基本走势	 11	    */
        dealWith_11: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                missStatList[i].result = '';

            }

            for(var i=0; i< missBottomStatList.length; i++){

                missBottomStatList[i].result = '';
            }

            return _data;

        },


        /**    红球三分区	   12	    */
        dealWith_12: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                missStatList[i].result = '';

                var newArray =  _this.sliceArr(missStatList[i].statData.data_0, 11);

                missStatList[i].statData.data_0 = newArray[0];

                missStatList[i].statData.data_1 = newArray[1];

                missStatList[i].statData.data_2 = newArray[2];

                /** 和值 */
                missStatList[i].statData.data_3 = [_Chart.sumArr(missStatList[i].statResult)];

                /** 奇偶比 */
                missStatList[i].statData.data_4 = [_Chart.ratioEvenOdd(missStatList[i].statResult)];

                /** 跨度 */
                missStatList[i].statData.data_5 = [_Chart.spanNumber(missStatList[i].statResult)];
            }

            for(var i=0; i< missBottomStatList.length; i++){

                missBottomStatList[i].result = '';

                var newArray =  _this.sliceArr(missBottomStatList[i].statData.data_0, 11);

                missBottomStatList[i].statData.data_0 = newArray[0];

                missBottomStatList[i].statData.data_1 = newArray[1];

                missBottomStatList[i].statData.data_2 = newArray[2];

                /** 和值 */
                missBottomStatList[i].statData.data_3 = [''];

                /** 奇偶比 */
                missBottomStatList[i].statData.data_4 = [''];

                /** 跨度 */
                missBottomStatList[i].statData.data_5 = [''];
            }

            return _data;

        },

        /**     红球四方区	       13	    */
        dealWith_13: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                missStatList[i].result = '';

                var _tempMissStatList = [].concat(missStatList[i].statData.data_0);

                missStatList[i].statData['data_0'] = [];

                missStatList[i].statData['data_1'] = [];

                missStatList[i].statData['data_2'] = [];

                missStatList[i].statData['data_3'] = [];

                for(var j=0; j< _tempMissStatList.length; j++){


                    if( j< 8){

                        missStatList[i].statData['data_0'].push(_tempMissStatList[j]);

                    }else if( j>= 8 && j< 17){

                        missStatList[i].statData['data_1'].push(_tempMissStatList[j]);

                    }else if(j>= 17 && j < 25){

                        missStatList[i].statData['data_2'].push(_tempMissStatList[j]);

                    }else if(j >= 25 && j < 33){

                        missStatList[i].statData['data_3'].push(_tempMissStatList[j]);
                    }


                }

                /** 和值 */
                missStatList[i].statData.data_4 = [_Chart.sumArr(missStatList[i].statResult)];

                /** 奇偶比 */
                missStatList[i].statData.data_5 = [_Chart.ratioEvenOdd(missStatList[i].statResult)];

                /** 跨度 */
                missStatList[i].statData.data_6 = [_Chart.spanNumber(missStatList[i].statResult)];
            }

            for(var i=0; i< missBottomStatList.length; i++){

                var _tempMissBottomStatList = [].concat(missBottomStatList[i].statData.data_0);

                missBottomStatList[i].result = '';

                missBottomStatList[i].statData['data_0'] = [];

                missBottomStatList[i].statData['data_1'] = [];

                missBottomStatList[i].statData['data_2'] = [];

                missBottomStatList[i].statData['data_3'] = [];

                for(var j=0; j< _tempMissBottomStatList.length; j++){


                    if( j< 8){

                        missBottomStatList[i].statData['data_0'].push(_tempMissBottomStatList[j]);

                    }else if( j>= 8 && j< 17){

                        missBottomStatList[i].statData['data_1'].push(_tempMissBottomStatList[j]);

                    }else if(j>= 17 && j < 25){

                        missBottomStatList[i].statData['data_2'].push(_tempMissBottomStatList[j]);

                    }else if(j >= 25 && j < 33){

                        missBottomStatList[i].statData['data_3'].push(_tempMissBottomStatList[j]);
                    }

                }

                /** 和值 */
                missBottomStatList[i].statData.data_4 = [''];

                /** 奇偶比 */
                missBottomStatList[i].statData.data_5 = [''];

                /** 跨度 */
                missBottomStatList[i].statData.data_6 = [''];

            }


            return _data;

        },


        /**     红球七方区	       14	    */
        dealWith_14: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                missStatList[i].result = '';

                var newArray =  _this.sliceArr(missStatList[i].statData.data_0, 5);

                for(var j=0; j< newArray.length; j++){

                    missStatList[i].statData['data_'+j] = newArray[j];

                }

                /** 和值 */
                missStatList[i].statData.data_7 = [_Chart.sumArr(missStatList[i].statResult)];

                /** 奇偶比 */
                missStatList[i].statData.data_8 = [_Chart.ratioEvenOdd(missStatList[i].statResult)];

                /** 跨度 */
                missStatList[i].statData.data_9 = [_Chart.spanNumber(missStatList[i].statResult)];
            }

            for(var i=0; i< missBottomStatList.length; i++){

                missBottomStatList[i].result = '';

                var newArray =  _this.sliceArr(missBottomStatList[i].statData.data_0, 5);

                for(var j=0; j< newArray.length; j++){

                    missBottomStatList[i].statData['data_'+j] = newArray[j];

                }

                /** 和值 */
                missBottomStatList[i].statData.data_7 = [''];

                /** 奇偶比 */
                missBottomStatList[i].statData.data_8 = [''];

                /** 跨度 */
                missBottomStatList[i].statData.data_9 = [''];

            }


            return _data;

        },

        /**
         *   红球形态大小;
         */
        dealWith_21: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){


                var tempData = missStatList[i].statData.data_1;

                var newArray =  _this.sliceArr(missStatList[i].statData.data_0, 2);

                for(var j=0; j< newArray.length; j++){

                    missStatList[i].statData['data_'+j] = newArray[j];

                }

                missStatList[i].statData['data_6'] = tempData;
            }

            for(var i=0; i< missBottomStatList.length; i++){


                var tempData = missBottomStatList[i].statData.data_1;

                var newArray =  _this.sliceArr(missBottomStatList[i].statData.data_0, 2);

                for(var j=0; j< newArray.length; j++){

                    missBottomStatList[i].statData['data_'+j] = newArray[j];

                }

                missBottomStatList[i].statData['data_6'] = tempData;
            }

            return _data;
        },


        /**
         *   红球形态奇偶;
         */
        dealWith_22: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){


                var tempData = missStatList[i].statData.data_1;

                var newArray =  _this.sliceArr(missStatList[i].statData.data_0, 2);

                for(var j=0; j< newArray.length; j++){

                    missStatList[i].statData['data_'+j] = newArray[j];

                }

                missStatList[i].statData['data_6'] = tempData;
            }

            for(var i=0; i< missBottomStatList.length; i++){


                var tempData = missBottomStatList[i].statData.data_1;

                var newArray =  _this.sliceArr(missBottomStatList[i].statData.data_0, 2);

                for(var j=0; j< newArray.length; j++){

                    missBottomStatList[i].statData['data_'+j] = newArray[j];

                }

                missBottomStatList[i].statData['data_6'] = tempData;
            }

            return _data;
        },


        /**
         *   红球形态质合;
         */
        dealWith_23: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){


                var tempData = missStatList[i].statData.data_1;

                var newArray =  _this.sliceArr(missStatList[i].statData.data_0, 2);

                for(var j=0; j< newArray.length; j++){

                    missStatList[i].statData['data_'+j] = newArray[j];

                }

                missStatList[i].statData['data_6'] = tempData;
            }

            for(var i=0; i< missBottomStatList.length; i++){


                var tempData = missBottomStatList[i].statData.data_1;

                var newArray =  _this.sliceArr(missBottomStatList[i].statData.data_0, 2);

                for(var j=0; j< newArray.length; j++){

                    missBottomStatList[i].statData['data_'+j] = newArray[j];

                }

                missBottomStatList[i].statData['data_6'] = tempData;
            }

            return _data;
        },

        /**
         *  除3余数走势
         */
        dealWith_24: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                missStatList[i].result = '';

                var _data1 = missStatList[i].statData.data_1;
                var _data2 = missStatList[i].statData.data_2;
                var _data3 = missStatList[i].statData.data_3;

                var newArray =  _this.sliceArr(missStatList[i].statData.data_0, 3);

                for(var j=0; j< newArray.length; j++){

                    missStatList[i].statData['data_'+j] = newArray[j];

                }

                missStatList[i].statData['data_6'] = _data1;
                missStatList[i].statData['data_7'] = _data2;
                missStatList[i].statData['data_8'] = _data3;
            }

            for(var i=0; i< missBottomStatList.length; i++){

                missBottomStatList[i].result = '';

                var _data1 = missBottomStatList[i].statData.data_1;
                var _data2 = missBottomStatList[i].statData.data_2;
                var _data3 = missBottomStatList[i].statData.data_3;

                var newArray =  _this.sliceArr(missBottomStatList[i].statData.data_0, 3);

                for(var j=0; j< newArray.length; j++){

                    missBottomStatList[i].statData['data_'+j] = newArray[j];

                }

                missBottomStatList[i].statData['data_6'] = _data1;
                missBottomStatList[i].statData['data_7'] = _data2;
                missBottomStatList[i].statData['data_8'] = _data3;
            }


            return _data;
        },



        /**  红球形态重号走势	  27   */
         dealWith_27: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++){

                missStatList[i].result = '';

                var _tempMissStatList = [].concat(missStatList[i].statData.data_0);

                missStatList[i].statData['data_0'] = [];

                missStatList[i].statData['data_1'] = [];

                missStatList[i].statData['data_2'] = [];


                for(var j=0; j< _tempMissStatList.length; j++){


                    if( j< 11){

                        missStatList[i].statData['data_0'].push(_tempMissStatList[j]);

                    }else if( j>= 11 && j< 22){

                        missStatList[i].statData['data_1'].push(_tempMissStatList[j]);

                    }else if(j>= 22 && j < 33){

                        missStatList[i].statData['data_2'].push(_tempMissStatList[j]);

                    }


                }


                var nowResult = missStatList[i].statResult;
                var nextResult;
                var jiouBi =  _Chart.evenOddEnd(missStatList[i].statResult);

                if(i==0){

                    /** 红球分析 */
                    missStatList[i].statData.data_3 = [
                        '--',
                        _Chart.joinGroupsCount(missStatList[i].statResult),
                        _Chart.sumArr(missStatList[i].statResult),
                        _Chart.acValue(missStatList[i].statResult),
                        _Chart.ratioInterval(missStatList[i].statResult, [11,22,33]),
                        jiouBi[0]+":"+jiouBi[1]
                    ];
                }else{

                    nextResult = missStatList[i-1].statResult;

                    /** 红球分析 */
                    missStatList[i].statData.data_3 = [
                        _Chart.sameJoinGroupsCount(nowResult, nextResult),
                        _Chart.joinGroupsCount(missStatList[i].statResult),
                        _Chart.sumArr(missStatList[i].statResult),
                        _Chart.acValue(missStatList[i].statResult),
                        _Chart.ratioInterval(missStatList[i].statResult, [11,22,33]),
                        jiouBi[0]+":"+jiouBi[1]
                    ];
                }
            }


            for(var i=0; i< missBottomStatList.length; i++){

                missBottomStatList[i].result = '';

                var _tempMissStatList = [].concat(missBottomStatList[i].statData.data_0);

                missBottomStatList[i].statData['data_0'] = [];

                missBottomStatList[i].statData['data_1'] = [];

                missBottomStatList[i].statData['data_2'] = [];


                for(var j=0; j< _tempMissStatList.length; j++){


                    if( j< 11){

                        missBottomStatList[i].statData['data_0'].push(_tempMissStatList[j]);

                    }else if( j>= 11 && j< 22){

                        missBottomStatList[i].statData['data_1'].push(_tempMissStatList[j]);

                    }else if(j>= 22 && j < 33){

                        missBottomStatList[i].statData['data_2'].push(_tempMissStatList[j]);

                    }


                }

                /** 红球分析 */
                missBottomStatList[i].statData.data_3 = ['','','','','',''];

            }

            return _data;

        },




        /**  处理蓝球综合走势数据   flot = 41、42 */
        dealWith_41: function (_data) {
            var _this = this;
            var missStatList = _data.missStatList;
            var missBottomStatList = _data.missBottomStatList;

            for(var i=0; i< missStatList.length; i++) {

                /**  以下是处理开奖号码格式 */
                var _statResult = missStatList[i].result.split(',');

                missStatList[i].statResult = _statResult;

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