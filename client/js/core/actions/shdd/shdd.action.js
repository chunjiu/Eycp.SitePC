/****************************************************************
 *
 *                        杀号定胆请求数据接口
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../services/request.service',
    '../../services/event.service'
], function(
    _,
    $,
    _Backbone,
    _RequsetService,
    _EventService
) {

    var ShddAction = {};

    ShddAction.requestShddCallback;

    ShddAction.initialize = function() {

        var _this = this;

        _EventService.on('asyncSuccess_requestShdd',function(_resultData) {

            _this.requestShddCallback(_resultData);
        });

    }

    /**
     *
     * @param _lotteryCode
     * @param _type
     * @param _quantity
     * @param _callBack
     */
    ShddAction.requestShdd = function(_lotteryCode, _type, _quantity , _callBack) {

        if(_lotteryCode == undefined || typeof(_lotteryCode)!='string'){

            console.error('请求数据的参数不正确，_lotteryCode为空,或者是不是字符串类型！');
            return;

        }else if(_type == undefined || typeof(_type)!='number'){

            console.error('请求数据的参数不正确，_type为空或者是不是数字类型！');
            return;

        }else if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型！');
            return;

        }else{

            var  _parameter = {
                    code: _lotteryCode,
                    type: _type,
                    quantity: _quantity ? _quantity : 10,
                    t: Math.random()
            }


            ShddAction.requestShddCallback = _callBack;

            _RequsetService.requestGet('/shdd/requestShdd', _parameter, 'asyncSuccess_requestShdd');
        }
    }


    return ShddAction;

})