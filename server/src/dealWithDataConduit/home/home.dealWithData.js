/***********************************************************************************
 *
 *                      作用: 专门用来处理数据;
 *
 ***********************************************************************************/
'use strict';

const homeDealWithData = new class HomeDealWithData {

    constructor() {

    }

    /**
     *  处理首页福彩3d 试机号码
     */
    dealWithTestNumberForHomeNotice(_awardNoticeList){

        if(_awardNoticeList !=undefined && typeof(_awardNoticeList) =='object'){

            var _noticeList = Object.assign(_awardNoticeList);

            _noticeList.forEach((_val, _index, _arr)=>{

                /** 注意，这里福彩3d需要加试机码，这个函数主要针对福彩3d所以才抽离出来判断的 */
                if(_val.lotteryCode == 'fc3d'){

                    if(_val.awardResult == null || _val.awardResult == ''){

                        _val.awardResult = '--,--,--';
                    }else{

                        /** 如果没有 | */
                        if(/\|/.test(_val.awardResult)){

                            var _stringArr = _val.awardResult.replace(/\s+/g,"").split('|');
                            var _ball = _stringArr[0];
                            var _sjNumber = _stringArr[1];

                            if(_ball == ''){
                                _val.awardResult = '--,--,--'+'|'+_sjNumber;
                            }
                        }
                    }
                }
            });

            return _noticeList;

        }else{

            console.error('dealWithTestNumberForHomeNotice：参数有问题！');
        }
    }

}

export default homeDealWithData;