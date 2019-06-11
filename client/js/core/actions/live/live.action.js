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

    var LiveAction = {};

    LiveAction._awardDataGroupCallback;
    LiveAction._groupAwardTimesCallback;

    LiveAction.initialize = function() {

        var _this = this;

        _EventService.on('asyncSuccess_awardDataGroup',function(_resultData) {
            _this._awardDataGroupCallback(_resultData);
        });

        _EventService.on('asyncSuccess_groupAwardTimes',function(_resultData) {
            _this._groupAwardTimesCallback(_resultData);
        });
    }

    /**
     *   请求拿到一组视频数据
     */
    LiveAction.getAwardDataGroup = function(_type, _callBack){

        if(_type == undefined || typeof(_type) !='number'){

            console.error('请求数据的参数不正确，_type不是数字类型');
            return;
        }

        if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型');
            return;
        }else{

            var parameter = {
                t: Math.random(),
                type: _type
            }

            LiveAction._awardDataGroupCallback = _callBack;
            _RequsetService.requestGet('/live/getawarddatagroup' , parameter, 'asyncSuccess_awardDataGroup');

        }

    }

    LiveAction.getGroupAwardTimes = function(_lotterys, _callBack){

        if(_lotterys == undefined || typeof(_lotterys) !='string'){

            console.error('请求数据的参数不正确，_lotterys不是string类型');
            return;
        }

        if(typeof(_callBack) != 'function'){

            console.error('请求数据的参数不正确，_callBack不是函数类型');
            return;
        }else{


            console.log(_lotterys)

            var parameter = {
                t: Math.random(),
                lotterys: _lotterys
            }

            LiveAction._groupAwardTimesCallback = _callBack;
            _RequsetService.requestGet('/live/getgroupawardtimes' , parameter, 'asyncSuccess_groupAwardTimes');

        }

    }

    return LiveAction;

})