/****************************************************************
 *
 *                        遗漏请求数据接口
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

    var OmissionAction = {};

    OmissionAction._requestOmissionCallback;
    OmissionAction._requestOmissionChartCallback;

    OmissionAction.initialize = function() {

        var _this = this;


        _EventService.on('asyncSuccess_requestOmission',function(_resultData) {

            _this._requestOmissionCallback(_resultData);
        });

        _EventService.on('asyncSuccess_requestOmissionChart',function(_resultData) {

            _this._requestOmissionChartCallback(_resultData);
        });


    }

    /**
     * 获取对应code得一个遗漏信息;
     * @param {*} _callBack
     */
    OmissionAction.requestOmission = function(_lotteryCode, _flot, _quantity, _sort, _callBack) {

        if(_lotteryCode == undefined || typeof(_lotteryCode)!='string'){

            console.error('请求数据的参数不正确，_lotteryCode为空,或者是不是字符串类型！');
            return;

        }else if(_flot == undefined || typeof(_flot)!='number'){

            console.error('请求数据的参数不正确，_flot为空或者是不是数字类型！');
            return;

        }else if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型！');
            return;

        }else{

            var _parameter;

            if(_sort){

                _parameter = {
                    flot: _flot,
                    quantity: _quantity ? _quantity : 500,
                    sort: _sort,
                    t: Math.random()
                }

            }else{
                _parameter = {
                    flot: _flot,
                    quantity: _quantity ? _quantity : 500,
                    t: Math.random()
                }
            }



            OmissionAction._requestOmissionCallback = _callBack;
            _RequsetService.requestGet('/omission/'+_lotteryCode+'/requestOmission', _parameter, 'asyncSuccess_requestOmission');
        }
    }


    OmissionAction.requestOmissionChart = function(_lotteryCode, _flot, _number, _type, _callBack) {

        if(_lotteryCode == undefined || typeof(_lotteryCode)!='string'){

            console.error('请求数据的参数不正确，_lotteryCode为空,或者是不是字符串类型！');
            return;

        }else if(_flot == undefined || typeof(_flot)!='number'){

            console.error('请求数据的参数不正确，_flot为空或者是不是数字类型！');
            return;

        }else if(_number == undefined || typeof(_number)!='string'){

            console.error('请求数据的参数不正确，_number为空或者是不是字符串类型！');
            return;

        }else if(_type == undefined || typeof(_type)!='number'){

            console.error('请求数据的参数不正确，_type为空或者是不是数字类型！');
            return;

        }else if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型！');
            return;

        }else{

            var _parameter = {
                flot: _flot,
                lotterycode: _lotteryCode,
                number: _number,
                type: _type,
                t: Math.random()
            }

            OmissionAction._requestOmissionChartCallback = _callBack;
            _RequsetService.requestGet('/omissionChart/'+_lotteryCode+'/requsetOmissionChart', _parameter, 'asyncSuccess_requestOmissionChart');
        }
    }

    return OmissionAction;


})