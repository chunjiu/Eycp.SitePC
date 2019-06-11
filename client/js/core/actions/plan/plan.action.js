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
    var PlanAction = {};

    PlanAction._planIndexCallback;
    PlanAction._planAwardHTMLCallback;
    PlanAction._planAwardResultCallback;
    PlanAction._planAwardResultHTMLCallback;
    PlanAction._requestPlanCallback;

    PlanAction.initialize = function() {

        var _this = this;
        _EventService.on('asyncSuccess_planIndex',function(_resultData) {
            _this._planIndexCallback(_resultData);
        });

        _EventService.on('asyncSuccess_planAwardHTML',function(_resultData) {
            _this._planAwardHTMLCallback(_resultData);
        });

        _EventService.on('asyncSuccess_planAwardResult',function(_resultData) {
            _this._planAwardResultCallback(_resultData);
        });

        _EventService.on('asyncSuccess_planAwardResultHTML', function(_resultData) {
            _this._planAwardResultHTMLCallback(_resultData);
        })

        _EventService.on('asyncSuccess_requestPlan',function(_resultData) {

            _this._requestPlanCallback(_resultData);
        });

    }

    /**
     * 获取追号推荐;
     * @param {*} _callBack
     */
    PlanAction.requestPlan = function(_callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                t: Math.random()
            }

            PlanAction._requestPlanCallback = _callBack;
            _RequsetService.requestGet('/plan/getplan', parameter, 'asyncSuccess_requestPlan');
        }
    }


    /**
     * 获取追号首页数据
     * @param {*} _callBack 
     */
    PlanAction.getPageIndex = function( _callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                t: Math.random()
            }
        	
            PlanAction._planIndexCallback = _callBack;
            _RequsetService.requestGet('/plan/updateList', parameter, 'asyncSuccess_planIndex');
        }
    }

    /**
     * 获取开奖结果
     * @param {*} _callBack 
     */
    PlanAction.getAwardResult = function(lotteryCode, _callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('getAwardResult：请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                t: Math.random()
            }
        	
            PlanAction._planAwardResultCallback = _callBack;
            _RequsetService.requestGet('/lottery/' + lotteryCode + '/getawarddata', parameter, 'asyncSuccess_planAwardResult');
        }
    }

    /**
     * 获取开奖html
     * @param {function} _callBack
     */
    PlanAction.getAwardHTML = function(para, _callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('getAwardHTML：请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                t: Math.random(),
                lotteryCode: para.lotteryCode,
                type: para.type,
                groupId: para.groupId,
                date: para.date
            }

            PlanAction._planAwardHTMLCallback = _callBack;
            _RequsetService.requestGet('/plan/updatePlanResult', parameter, 'asyncSuccess_planAwardHTML');
        }
    }

    /**
     * 获取开奖结果HTML
     * @param {*} lotteryCode 
     * @param {*} _callBack 
     */
    PlanAction.getAwardTimerHTML = function (para, _callBack) {  
        if(typeof(_callBack) != 'function'){
            console.error('getAwardTimerHTML：请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                t: Math.random(),
                lotteryCode: para.lotteryCode,
                groupId: para.groupId
            }

            PlanAction._planAwardResultHTMLCallback = _callBack;
            _RequsetService.requestGet('/plan/updateAwardReult', parameter, 'asyncSuccess_planAwardResultHTML');
        }
    }

    /**
     * 正在开奖结果获取
     * @param {string} lotteryCode 
     */
    PlanAction.loopResult = function(lotteryCode, nowPeriod) {
        var _this = this;
        var _timer = setInterval(function() {
            _this.getAwardResult(lotteryCode, function(result) {
                if(result.period == nowPeriod) {
                    window.clearInterval(_timer);
                    _EventService.emit('awardHTML_PlanLoopAction', result);
                }
            });
        }, 5000);
    }

    return PlanAction;
})