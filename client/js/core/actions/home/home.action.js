/****************************************************************
 *
 *                        首页请求数据接口
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

    var HomeAction = {};

    HomeAction._groupAwardsCallback;
    HomeAction._requestVideoCallback;


    HomeAction.initialize = function() {

        var _this = this;

        _EventService.on('asyncSuccess_groupAwards',function(_resultData) {
            _this._groupAwardsCallback(_resultData);
        });

        _EventService.on('asyncSuccess_requestVideo',function(_resultData) {
            _this._requestVideoCallback(_resultData);
        });


    }

    /**
     * 获取对应code得一组开奖信息;
     * @param {*} _callBack
     */
    HomeAction.groupAwards = function(_codes, _callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                codes: _codes,
                t: Math.random()
            }

            HomeAction._groupAwardsCallback = _callBack;
            _RequsetService.requestGet('/home/getgroupawards', parameter, 'asyncSuccess_groupAwards');
        }
    }

    /**
     * 获取对应code得一个视频信息;
     * @param {*} _callBack
     */
    HomeAction.requestVideo = function(_lotteryCode, _callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                lotterycode: _lotteryCode,
                t: Math.random()
            }

            HomeAction._requestVideoCallback = _callBack;
            _RequsetService.requestGet('/home/getvideo', parameter, 'asyncSuccess_requestVideo');
        }
    }


    return HomeAction;


})