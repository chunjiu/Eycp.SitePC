/****************************************************************
 *
 *                      快乐十分 处理数据逻辑
 *
 *
 *基本分布走势  1
基本大小走势  2
基本奇偶走势  3
基本重号走势  4
基本二连号走势 5
基本三连号走势 6
  
定位第一位走势 21
定位第二位走势 22
定位第三位走势 23
定位第四位走势 24
定位第五位走势 25
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

            if(1 == _flot){

                return _this.dealWidth_1(_data);

            }else if(2 == _flot || 3 == _flot){

                return _this.dealWidth_2(_data,_flot);
            }else if(5 == _flot || 6 == _flot){

                return _this.dealWidth_5(_data,_flot);
            }else if(21 <= _flot && 25>= _flot){

                return _this.dealWidth_21(_data,_flot);
            }

            return _data;

        },
        /**  处理定位数据  */
        dealWidth_21: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){

                  var resultArr= missStatList[i].result.split(',');
                  var newArr = [];
                  for (var j = 0; j < resultArr.length; j++) {
                    newArr.push(parseInt(resultArr[j]));
                  }
                 

                  missStatList[i].statResult = newArr;

            }
            
            return _data

        },
      
        /**  处理连号数据   flot = 5,6 */
        dealWidth_5: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){
                var m=0;
                for (var j = 0; j < missStatList[i].statData["data_0"].length; j++) {
                  if(0 ==missStatList[i].statData["data_0"][j]){
                    m++;
                  }
                }
                 /** 和值 */
                 missStatList[i].statData['data_1'] = [m];
                 
            }
            for(var i=0; i< missBottomStatList.length; i++){
              missBottomStatList[i].statData['data_1']=[''];
            }
            

            //console.log(JSON.stringify(_data));
            return _data

        },
        /**  处理形态数据   flot = 1 */
        dealWidth_1: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){


                  var statData = missStatList[i].statData;

                  var resultArr= missStatList[i].result.split(',');
                 /** 和值 */
                 statData['data_1'] = [_Chart.sumArr(resultArr)];
                  /** 跨度 */
                 statData['data_2'] = [_Chart.spanNumber(resultArr)];
                  /** 大小比 */
                 statData['data_3'] = [_Chart.ratioBigSmall(resultArr,11)];
                  /** 奇偶比 */
                 statData['data_4'] = [_Chart.ratioEvenOdd(resultArr)];
 				  /** 质合比 */
                 statData['data_5'] = [_Chart.ratioPrime(resultArr)];
            }
            for(var i=0; i< missBottomStatList.length; i++){
				      missBottomStatList[i].statData['data_1']=[''];
	            missBottomStatList[i].statData['data_2']=[''];
	            missBottomStatList[i].statData['data_3']=[''];
	            missBottomStatList[i].statData['data_4']=[''];
	            missBottomStatList[i].statData['data_5']=[''];
			}
            

            //console.log(JSON.stringify(_data));
            return _data

        },

         /**  拆分大小 数据   flot = 2 */
        dealWidth_2: function (_data,_flot) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){
                  var statData = missStatList[i].statData;
                  var resultArr= missStatList[i].result.split(',');
                  var data_6= statData.data_1;
                  var newDataArr = _Chart.sliceArr(statData.data_0, 2);
                    if(newDataArr.length==5){
                      for (var m = 0; m < newDataArr.length; m++) {
                        statData['data_'+m]=newDataArr[m];
                      }
                    }
                  if(2 == _flot){
                    statData['data_5']=[_Chart.modeBigSmall(resultArr,11).join(",")];
                  }else{
                    statData['data_5']=[_Chart.modeEvenOdd(resultArr,11).join(",")];
                  }
                  statData['data_6'] =data_6;
            }

            for(var i=0; i< missBottomStatList.length; i++){
            	 var data_6= missBottomStatList[i].statData.data_1;
               var newDataArr = _Chart.sliceArr(missBottomStatList[i].statData.data_0, 2);
                    if(newDataArr.length==5){
                      for (var m = 0; m < newDataArr.length; m++) {
                        missBottomStatList[i].statData['data_'+m]=newDataArr[m];
                      }
                    }
              missBottomStatList[i].statData['data_5']=[''];
              missBottomStatList[i].statData['data_6'] =data_6;
			     }
			//console.log(JSON.stringify(_data));
            return _data

        }


    }

    return DealWithDataContainer;

})