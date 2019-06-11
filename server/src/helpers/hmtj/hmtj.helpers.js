'use strict';

module.exports = (Template, Currency) => {


    Template.defaults.imports.hmtjFormatResult = (_result) =>{

        if(_result !=undefined && typeof(_result)=='string'){

            let  _resultArray;
            let  _result1;
            let  _result2;

            if(/\|/.test(_result)){

                _resultArray = _result.split('|');

                _result1 = _resultArray[0].replace(/,/g, '&nbsp;');
                _result2 = _resultArray[1].replace(/,/g, '&nbsp;');

                return _result1+'+'+_result2;

            }else{

                return _result.replace(/,/g, '&nbsp;');
            }

        }else{

            console.error('shddFormatResult：参数有误！')
        }
    }


    Template.defaults.imports.summationValue = (_val) =>{

        if(_val !=undefined && typeof(_val)=='string'){

             let  _valueArr = _val.split('+');

             return parseInt(_valueArr[0])+parseInt(_valueArr[1]);

        }else{

            console.error('summationValue：参数有误！');

            return;
        }

    }

}