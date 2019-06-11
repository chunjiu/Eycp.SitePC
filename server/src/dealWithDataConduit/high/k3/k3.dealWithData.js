/***********************************************************************************
 *
 *                      作用: 专门用来处理数据;
 *
 ***********************************************************************************/
'use strict';

const k3DealWithData = new class K3DealWithData {

    constructor() {

    }

    /**
     *   获取时间;
     */
     getK3Date(_resultList){

        if(_resultList.length > 0) {

            return  (new Date()).format('yyyy-MM-dd');

        } else {

            let _date = new Date();

            _date.setDate(_date.getDate() - 1);

            return _date.format('yyyy-MM-dd');
        }
    }

    /**
     *  获取和值；
     */
    getResultSumValue(_result){

        if(_result && typeof(_result) == 'string'){

            let _sumArr =  _result.split(',');

            let _value = 0;
            let _num  = ''

            for(var i=0; i<_sumArr.length; i++){

                _value += parseInt(_sumArr[i]);

                if(_sumArr.length - 1 == i){
                    _num  += _sumArr[i];
                }else{
                    _num  += _sumArr[i]+'&nbsp;';
                }

            }

            return `<div class="testNumber" style="font-size: 14px; line-height: 22px;">号码：<i class="font-red">${ _num }</i><br>和值：<i class="font-red">${ _value }</i></div>`

        }else{

            console.error('getResultSumValue：参数出现问题！');
        }

        return '';

    }
}

export default k3DealWithData;