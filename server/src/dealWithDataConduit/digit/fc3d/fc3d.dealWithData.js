/***********************************************************************************
 *
 *                      作用: 专门用来处理数据;
 *
 ***********************************************************************************/
'use strict';

const fc3dDealWithData = new class Fc3dDealWithData {

    constructor() {

    }

    /**
     *  处理福彩3d 试机号码
     */
    dealWithTestNumberForFc3d(_history){

        if(_history !=undefined && typeof(_history) =='object'){

                var _noticeList = Object.assign(_history);

                /** 注意，这里福彩3d需要加试机码，这个函数主要针对福彩3d所以才抽离出来判断的 */
               if(_history.result == null || _history.result == ''){

                        _history.result = '--,--,--';
                }else{

                        /** 如果没有 | */
                        if(/\|/.test(_history.result )){

                            var _stringArr = _history.result .replace(/\s+/g,"").split('|');
                            var _ball = _stringArr[0];
                            var _sjNumber = _stringArr[1];

                            if(_ball == ''){
                                _history.result  = '--,--,--'+'|'+_sjNumber;
                            }
                        }
             }

            return _history;

        }else{

            console.error('dealWithTestNumberForFc3d：参数有问题！');
        }
    }

}

export default fc3dDealWithData;