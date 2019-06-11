/****************************************************************
 *
 *                  获取开奖公告和走势图表的请求数据接口
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

    var GetArticleNoticeAndChartAction = {};

    GetArticleNoticeAndChartAction.noticeCallback;
    GetArticleNoticeAndChartAction.chartCallback;

    GetArticleNoticeAndChartAction.initialize = function() {

        var _this = this;

        _EventService.on('asyncSuccess_notice',function(_resultData) {
            _this.noticeCallback(_resultData);
        });

        _EventService.on('asyncSuccess_chart',function(_resultData) {
            _this.chartCallback(_resultData);
        });

    }

    /**
     *   请求拿开奖公告
     */
    GetArticleNoticeAndChartAction.getArticleNotice = function(_lotteryCode, _callBack){

        if(_lotteryCode == undefined || typeof(_lotteryCode) !='string'){

            console.error('getArticleNotice: 请求数据的参数不正确，_lotteryCode不是字符串类型');
            return;
        }

        if(typeof(_callBack) != 'function'){

            console.error('getArticleNotice: 请求数据的参数不正确，_callBack不是函数类型');
            return;

        }else{

            var parameter = {
                t: Math.random(),
                code: _lotteryCode
            }

            GetArticleNoticeAndChartAction.noticeCallback = _callBack;
            _RequsetService.requestGet('/article/getArticleNotice' , parameter, 'asyncSuccess_notice');

        }

    }


    /**
     *   请求走势的数据
     */
    GetArticleNoticeAndChartAction.getArticleChart = function(_lotteryCode, _callBack){

        if(_lotteryCode == undefined || typeof(_lotteryCode) !='string'){

            console.error('getArticleChart: 请求数据的参数不正确，_lotteryCode不是字符串类型');
            return;
        }

        if(typeof(_callBack) != 'function'){

            console.error('getArticleChart: 请求数据的参数不正确，_callBack不是函数类型');
            return;

        }else{

            var parameter = {
                t: Math.random(),
                code: _lotteryCode
            }

            GetArticleNoticeAndChartAction.chartCallback = _callBack;
            _RequsetService.requestGet('/article/getArticleChart' , parameter, 'asyncSuccess_chart');

        }

    }


    return GetArticleNoticeAndChartAction;

})