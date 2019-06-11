/****************************************************************
 *
 *                        号码推荐请求数据接口
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

    var HmtjAction = {};

    HmtjAction.requestHmtjCallback;
    HmtjAction.requestHmtjDetailCallback;

    HmtjAction.initialize = function() {

        var _this = this;

        _EventService.on('asyncSuccess_requestHmtj',function(_resultData) {

            _this.requestHmtjCallback(_resultData);
        });

        _EventService.on('asyncSuccess_requestHmtjDetail',function(_resultData) {

            _this.requestHmtjDetailCallback(_resultData);
        });

    }

    /**
     *
     * @param _lotteryCode
     * @param _type
     * @param _expertId
     * @param _quantity
     * @param _callBack
     */
    HmtjAction.requestHmtj = function(_lotteryCode, _type, _quantity , _callBack) {

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


            HmtjAction.requestHmtjCallback = _callBack;

            _RequsetService.requestGet('/hmtj/requestHmtj', _parameter, 'asyncSuccess_requestHmtj');
        }
    }


    /**
     *
     * @param _lotteryCode
     * @param _type
     * @param _expertId
     * @param _quantity
     * @param _callBack
     */
    HmtjAction.requestHmtjDetail = function(_lotteryCode, _type, _expertId, _quantity , _callBack) {

        if(_lotteryCode == undefined || typeof(_lotteryCode)!='string'){

            console.error('请求数据的参数不正确，_lotteryCode为空,或者是不是字符串类型！');
            return;

        }else if(_type == undefined || typeof(_type)!='number'){

            console.error('请求数据的参数不正确，_type为空或者是不是数字类型！');
            return;

        }else if(_expertId == undefined || typeof(_expertId)!='string'){

            console.error('请求数据的参数不正确，_expertId为空或者是不是字符串类型！');
            return;

        }else if(typeof(_callBack) != 'function'){

            console.error('请求数据的参数不正确，_callBack不是函数类型！');
            return;

        }else{

            var  _parameter = {
                code: _lotteryCode,
                type: _type,
                expertId: _expertId,
                quantity: _quantity ? _quantity : 10,
                t: Math.random()
            }


            HmtjAction.requestHmtjDetailCallback = _callBack;

            _RequsetService.requestGet('/hmtj/requestHmtjDetail', _parameter, 'asyncSuccess_requestHmtjDetail');
        }
    }

    return HmtjAction;

})