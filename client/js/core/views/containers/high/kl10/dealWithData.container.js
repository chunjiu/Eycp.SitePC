/****************************************************************
 *
 *                      快乐十分 处理数据逻辑
 *
 *
 *  		基本分布走势    1
            基本大小走势  2
            基本奇偶走势  3
            基本区间走势  4
            基本同尾走势  5
            基本重号走势  6
            基本二连号走势 7
            基本三连号走势 8
            基本隔位码走势 9
                
            定位第一位走势 21
            定位第二位走势 22
            定位第三位走势 23
                
            前二组选走势  30
            前二直选走势  31
            前二大小走势  32
            前二奇偶走势  33
            前二质合走势  34
            前二升平降走势 35
            前二012路走势    36
            前三分布走势  50
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

            if(1 == _flot){

                return _this.dealWidth_1(_data);

            }else if(2 == _flot || 3 == _flot){

                return _this.dealWidth_2(_data);
            }else if(5 == _flot){

                return _this.dealWidth_5(_data);
            }else if(7 == _flot || 8 == _flot){

                return _this.dealWidth_7(_data);
            }else if(30 <=_flot && 36>= _flot){

                return _this.dealWidth_30(_data,2,_flot);
            }else if(21 <=_flot && 23>= _flot){

                return _this.dealWidth_21(_data);
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
         /**  处理前二数据   flot = 7 */
        dealWidth_30: function (_data,index,_flot) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){
            	 
            	 //var resultArr=missStatList[i].result.split(',');
                // missStatList[i].statResult = resultArr.slice(0,index);

                if(31==_flot){
                	/** 和值 */
            		missStatList[i].statData['data_2'] = [_Chart.sumArr(missStatList[i].statResult)];
                  	/** 跨度 */
                 	missStatList[i].statData['data_3'] = [_Chart.spanNumber(missStatList[i].statResult)];
            	}else if(32 == _flot || 33 == _flot  || 34 == _flot){
            		var _data_1 = missStatList[i].statData['data_1'];
            		var _data_2 = missStatList[i].statData['data_2'];

            		var newDataArr = _Chart.sliceArr(missStatList[i].statData.data_0, 2);
	                  if(newDataArr.length==2){
	                  	for (var m = 0; m < newDataArr.length; m++) {
	                  		missStatList[i].statData['data_'+m]=newDataArr[m];
	                  	}
	                  }
            		missStatList[i].statData['data_2']=_data_1;
            		missStatList[i].statData['data_3']=_data_2;
            	}else if(35 == _flot || 36 ==_flot){
                var _data_1 = missStatList[i].statData['data_1'];

                var newDataArr = _Chart.sliceArr(missStatList[i].statData.data_0, 3);
                    if(newDataArr.length==2){
                      for (var m = 0; m < newDataArr.length; m++) {
                        missStatList[i].statData['data_'+m]=newDataArr[m];
                      }
                    }
                missStatList[i].statData['data_2']=_data_1;
              }
            }
            if(31==_flot){
	            for(var i=0; i< missBottomStatList.length; i++){
		            missBottomStatList[i].statData['data_2']=[''];
		            missBottomStatList[i].statData['data_3']=[''];
				      }
            }else if(32 == _flot || 33 == _flot  || 34 == _flot){
            	for(var i=0; i< missBottomStatList.length; i++){
            		var _data_1 = missBottomStatList[i].statData['data_1'];
            		var _data_2 = missBottomStatList[i].statData['data_2'];

            		var newDataArr = _Chart.sliceArr(missBottomStatList[i].statData.data_0, 2);
	                  if(newDataArr.length==2){
	                  	for (var m = 0; m < newDataArr.length; m++) {
	                  		missBottomStatList[i].statData['data_'+m]=newDataArr[m];
	                  	}
	                  }
            		missBottomStatList[i].statData['data_2']=_data_1;
            		missBottomStatList[i].statData['data_3']=_data_2;
            	}
            }else if(35 ==_flot || 36 ==_flot){
              for(var i=0; i< missBottomStatList.length; i++){
                var _data_1 = missBottomStatList[i].statData['data_1'];

                var newDataArr = _Chart.sliceArr(missBottomStatList[i].statData.data_0, 3);
                    if(newDataArr.length==2){
                      for (var m = 0; m < newDataArr.length; m++) {
                        missBottomStatList[i].statData['data_'+m]=newDataArr[m];
                      }
                    }
                missBottomStatList[i].statData['data_2']=_data_1;
              }
            }
            //console.log(JSON.stringify(_data));
            return _data;

        },

        /**  处理形态数据   flot = 7 */
        dealWidth_7: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){
            	  var m=0;
                  for (var j = 0; j < missStatList[i].statData.data_0.length; j++) {
                  	if(0 == missStatList[i].statData.data_0[j]){
                  		m++;
                  	}
                  }
                  /** 尾数奇偶 */
                 missStatList[i].statData['data_1'] = [m];
            }
            for(var i=0; i< missBottomStatList.length; i++){
	            missBottomStatList[i].statData['data_1']=[''];
			}
			//console.log(JSON.stringify(_data));
            return _data

        }
        ,
        /**  处理形态数据   flot = 5 */
        dealWidth_5: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){


                  var statData = missStatList[i].statData;

                  var resultArr= missStatList[i].result.split(',');

                  /** 尾数奇偶 */
                 statData['data_2'] = _Chart.evenOddEnd(resultArr);
                  /** 尾数大小 */
                 statData['data_3'] = _Chart.bigSmallEnd(resultArr,5);
            }
            for(var i=0; i< missBottomStatList.length; i++){
	            missBottomStatList[i].statData['data_2']=['',''];
	            missBottomStatList[i].statData['data_3']=['',''];
			}
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
        dealWidth_2: function (_data) {

            var _this = this;

            var missStatList = _data.missStatList;

            var missBottomStatList = _data.missBottomStatList

            for(var i=0; i< missStatList.length; i++){


                  var statData = missStatList[i].statData;

                  var data_8= statData.data_1;
                  var newDataArr = _Chart.sliceArr(statData.data_0, 2);
                  if(newDataArr.length==8){
                  	for (var m = 0; m < newDataArr.length; m++) {
                  		statData['data_'+m]=newDataArr[m];
                  	}
                  }
                 statData['data_8'] =data_8;
            }

            for(var i=0; i< missBottomStatList.length; i++){
            	var data_8= missBottomStatList[i].statData.data_1;
                  var newDataArr = _Chart.sliceArr(missBottomStatList[i].statData.data_0, 2);
                  if(newDataArr.length==8){
                  	for (var m = 0; m < newDataArr.length; m++) {
                  		missBottomStatList[i].statData['data_'+m]=newDataArr[m];
                  	}
                  }
                 missBottomStatList[i].statData['data_8'] =data_8;
			}
			//console.log(JSON.stringify(_data));
            return _data

        }


    }

    return DealWithDataContainer;

})