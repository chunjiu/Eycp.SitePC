/****************************************************************
 *
 *                        timer组件请求数据接口
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../services/request.service',
    '../../services/event.service'
], function (
    _,
    $,
    _Backbone,
    _RequsetService,
    _EventService
) {

        var TimerAction = {};

        TimerAction._awardResultCallBack;
        TimerAction._awardDataCallBack;
        TimerAction._awardTimeCallBack;

        /** 构造函数 */
        TimerAction.initialize = function () {

            var _this = this;

            /** 监听请求返回数据的事件*/
            _EventService.on('asyncSuccess_awardResult', function (_resultData) {
                _this._awardResultCallBack(_resultData);
            });

            /** 监听请求返回数据的事件*/
            _EventService.on('asyncSuccess_awardData', function (_resultData) {
                _this._awardDataCallBack(_resultData);
            });

            /** 监听请求返回数据的事件*/
            _EventService.on('asyncSuccess_awardTime', function (_resultData) {
                _this._awardTimeCallBack(_resultData);
            });

        },


            /**
             * 请求开奖号码 ( 返回json );
             * @param : 参数1:  彩种名称;
             * @param: 参数2:  请求到开奖后的回调函数;
             */
            TimerAction.requestAwardResult = function (_lotteryCode, _callBack) {

                if (typeof (_lotteryCode) != 'string' || typeof (_callBack) != 'function') {

                    console.error('请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型');

                } else {

                    TimerAction._awardResultCallBack = _callBack;

                    /** 请求首页应用的参数 */
                    var parameter = {
                        t: Math.random()
                    }


                    var urlString = 'getawarddata';

                    _RequsetService.requestGet("/lottery/" + _lotteryCode + "/" + urlString, parameter, 'asyncSuccess_awardResult');
                }

            },


            /**
               * 请求开奖号码 ( 返回json );
               * @param : 参数1:  彩种名称;
               * @param: 参数2:  请求到开奖后的回调函数;
            */
            TimerAction.requestAwardData = function (_lotteryCode, _awardType, _callBack) {

                if (typeof (_lotteryCode) != 'string' || typeof (_awardType) != 'string' || typeof (_callBack) != 'function') {

                    console.error('请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型');

                } else {


                    TimerAction._awardDataCallBack = _callBack;

                    var urlString;

                    /** 请求首页应用的参数 */
                    var parameter = {};

                    parameter.t = Math.random();

                    if (_awardType) {

                        urlString = this.judgmentAwardType(_awardType);

                    } else {
                        console.error('开奖历史为空,请设置开奖类型！');
                    }

                    _RequsetService.requestGet("/lottery/" + _lotteryCode + "/" + urlString, parameter, 'asyncSuccess_awardData');
                }

            },

            /**
             * 请求开奖号码 ( 返回模版 ) ;
             * @param : 参数1:  彩种名称;
             * @param: 参数2:  请求到开奖后的回调函数;
             */
            TimerAction.requestAwardDataForHtml = function (_lotteryCode, _awardType, _callBack) {

                if (typeof (_lotteryCode) != 'string' || typeof (_awardType) != 'string' || typeof (_callBack) != 'function') {

                    console.error('请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型');

                } else {


                    TimerAction._awardDataCallBack = _callBack;

                    /** 请求首页应用的参数 */
                    var parameter = {
                        t: Math.random()
                    }

                    var urlString;

                    if (_awardType) {
                        urlString = this.judgmentAwardType(_awardType)
                    } else {
                        console.error('开奖历史为空,请设置开奖类型！');
                    }

                    _RequsetService.requestGetHtml("/lottery/" + _lotteryCode + "/" + urlString, parameter, 'asyncSuccess_awardData');
                }

            },

            /**
            * 请求开奖时间;
            * @param : 参数1:  彩种名称;
            * @param: 参数2:  请求到开奖后的回调函数;
            */
            TimerAction.requestAwardTime = function (_lotteryCode, _callBack) {

                if (typeof (_lotteryCode) != 'string' || typeof (_callBack) != 'function') {

                    console.error('请求开奖时间的参数不正确，_lotteryCode不是字符串类型或者_callBack不是函数类型');

                } else {

                    /** 请求首页应用的参数 */
                    var parameter = {
                        t: Math.random()
                    }


                    TimerAction._awardTimeCallBack = _callBack;

                    _RequsetService.requestGet("/lottery/" + _lotteryCode + "/getawardtimes", parameter, 'asyncSuccess_awardTime');

                }

            }

        /**
         *  判断是那个开奖类型返回对应得字符串;
         * @param : 参数1:  彩种名称;
         */
        TimerAction.judgmentAwardType = function (_awardType) {

            var urlString = '';

            if (_awardType == 'history') {
                urlString = 'getawarddata';
            }

            return urlString;
        }


        return TimerAction;
    })