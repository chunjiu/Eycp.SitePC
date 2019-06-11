/****************************************************************
 *
 *                        追号请求数据接口
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
    var PointAction = {};

    PointAction._requestPointCallback;

    PointAction.initialize = function() {

        var _this = this;

        _EventService.on('asyncSuccess_requestPoint',function(_resultData) {
            _this._requestPointCallback(_resultData);
        });

    }

    /**
     * 获取提点;
     * @param {*} _callBack
     */
    PointAction.requestPoint = function(_callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                t: Math.random()
            }

            PointAction._requestPointCallback = _callBack;
            _RequsetService.requestGet('/point/getpoint', parameter, 'asyncSuccess_requestPoint');
        }
    }


    return PointAction;
})