/****************************************************************
 *
 *                        开奖大厅请求数据接口
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
    var LotteryTrendAction = {};

    LotteryTrendAction._awardSearchCallback;

    LotteryTrendAction.initialize = function() {

        var _this = this;
        _EventService.on('asyncSuccess_awardSearch',function(_resultData) {
            _this._awardSearchCallback(_resultData);
        });
    }

    /**
     * 获取搜索彩种走势结果
     * @param {*} _callBack
     */
    LotteryTrendAction.getAwardSearch = function(key, _callBack) {

        if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                key: encodeURIComponent(key)
            }

            LotteryTrendAction._awardSearchCallback = _callBack;
            _RequsetService.requestGet('/lottery/chartSearch', parameter, 'asyncSuccess_awardSearch');
        }
    }

    return LotteryTrendAction;

});
