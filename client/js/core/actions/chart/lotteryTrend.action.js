/****************************************************************
 *
 *                        ���������������ݽӿ�
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
     * ��ȡ�����������ƽ��
     * @param {*} _callBack
     */
    LotteryTrendAction.getAwardSearch = function(key, _callBack) {

        if(typeof(_callBack) != 'function'){
            console.error('�������ݵĲ�������ȷ��_callBack���Ǻ�������');
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
