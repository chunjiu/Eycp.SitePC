/****************************************************************
 *
 *                        图表请求数据接口
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

    var ChartAction = {};

    ChartAction._requestChartCallback;


    ChartAction.initialize = function() {

        var _this = this;


        _EventService.on('asyncSuccess_requestChart',function(_resultData) {
            _this._requestChartCallback(_resultData);
        });


    }

    /**
     * 11选5根据排序索引进行排序
     * @param {*} _lotteryCode 
     * @param {*} _flot 
     * @param {*} _quantity 
     * @param {*} _sortIndex 
     * @param {*} _callBack 
     */
    ChartAction.requestChartSortFor11x5 = function(_lotteryCode, _flot, _quantity, _sortIndex, _day,  _callBack) {
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

            var parameter = {
                flot: _flot,
                quantity: _quantity ? _quantity : 50,
                sort: _sortIndex,
                day: _day,
                t: Math.random()
            }

            ChartAction._requestChartCallback = _callBack;
            _RequsetService.requestGet('/chart/'+_lotteryCode+'/requestChartSort', parameter, 'asyncSuccess_requestChart');
        }
    }

    /**
     * 获取对应code得一个走势信息;
     * @param {*} _callBack
     */
    ChartAction.requestChart = function(_lotteryCode, _flot, _quantity, _queryDay, _callBack) {

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

            if(_queryDay !=null){

                _parameter = {
                    flot: _flot,
                    queryDay: _queryDay,
                    quantity: _quantity ? _quantity : 50,
                    t: Math.random()
                }
            }else{

                _parameter = {
                    flot: _flot,
                    quantity: _quantity ? _quantity : 50,
                    t: Math.random()
                }
            }



            ChartAction._requestChartCallback = _callBack;
            _RequsetService.requestGet('/chart/'+_lotteryCode+'/requestChart', _parameter, 'asyncSuccess_requestChart');
        }
    }


    return ChartAction;


})
