'use strict';

module.exports = (Template, Currency) => {

    Template.defaults.imports.shddFormatResult = (_result) =>{

        if(_result !=undefined && typeof(_result)=='string'){

            let  _resultArray;
            let  _result1;
            let  _result2;

            if(/\|/.test(_result)){

                 _resultArray = _result.split('|');

                _result1 = _resultArray[0].replace(/,/g, '&nbsp;&nbsp;');
                _result2 = _resultArray[1].replace(/,/g, '&nbsp;&nbsp;');

                return _result1+'+'+_result2;

            }else{

                return _result.replace(/,/g, '&nbsp;&nbsp;');
            }

        }else{

            console.error('shddFormatResult：参数有误！')
        }
    }

}
