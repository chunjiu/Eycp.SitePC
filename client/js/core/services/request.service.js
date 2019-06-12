/****************************************************************
 *                        请求接口服务
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    './event.service'
], function(_, $, _Backbone, _EventService) {

    var RequestServer = {

        /**
         * ajax 基础请求服务(私有方法请在前面加上下划线);
         * @param:请求的type类型(String);
         * @param:请求的url连接(String);
         * @param:数据类型(String);
         * @param:请求的参数(Object);
         * @param:请求成功时候触发的事件(String);
         * @param:请求失败时候触发的事件(String);
         */
        _asyncRequestBase: function(_type, _url, _dataType, _data, _successEvent, _failedEvent) {
            $.ajax({
                type: _type,
                async: true,
                timeout: 10000,
                url: _url,
                dataType: _dataType,
                data: _data,
                success: function(_resultData) {
                    //console.info(_resultData);
                    if (_resultData) {
                        /** 当数据状态为成功的时候，就触发对应的事件 */
                        _EventService.emit(_successEvent, _resultData);

                    } else {

                        _EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络发生异常！", time: 600 });

                        console.error('(' + _successEvent + '事件)返回得数据发生错误:');

                    }
                },
                complete: function(XMLHttpRequest, status) {
                    if (status == 'timeout') { //超时,status还有success,error等值的情况
                        _EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络异常,请求超时,请稍后再试...", time: 600 });
                        if (_failedEvent) _EventService.emit(_failedEvent, _resultData);
                    }
                },
                error: function(_error, status) {
                    //console.error(_error);
                    /** 当数据状态为成功的时候，就触发对应的事件 */
                    //console.error('('+_successEvent+'事件)请求发生错误:' + _error);
                    if (status == 'timeout') { //超时,status还有success,error等值的情况
                        _EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络异常,请求超时,请稍后再试...", time: 600 });
                        if (_failedEvent) _EventService.emit(_failedEvent, _resultData);
                    }


                }
            })
        },
        /**
         * ajax 基础请求服务(私有方法请在前面加上下划线);
         * @param:请求的type类型(String);
         * @param:请求的url连接(String);
         * @param:数据类型(String);
         * @param:请求的参数(Object);
         * @param:请求成功时候触发的事件(String);
         * @param:请求失败时候触发的事件(String);
         */
        _asyncRequestBaseJsonp: function(_type, _url, _data, _successEvent, _failedEvent) {
            $.ajax({
                type: _type,
                async: true,
                timeout: 10000,
                url: _url,
                dataType: "jsonp",
                jsonp: "jsoncallback",
                jsonpCallback: _successEvent,
                data: _data,
                success: function(_resultData) {
                    //console.info(_resultData);
                    if (_resultData) {

                        /** 当数据状态为成功的时候，就触发对应的事件 */
                        _EventService.emit(_successEvent, _resultData);

                    } else {

                        _EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络发生异常！", time: 600 });

                        console.error('(' + _successEvent + '事件)返回得数据发生错误:');

                    }
                },
                complete: function(XMLHttpRequest, status) {
                    if (status == 'timeout') { //超时,status还有success,error等值的情况
                        _EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络异常,请求超时,请稍后再试...", time: 600 });
                        if (_failedEvent) _EventService.emit(_failedEvent, _resultData);
                    }
                },
                error: function(_error, status) {
                    //console.error(_error);
                    /** 当数据状态为成功的时候，就触发对应的事件 */
                    //console.error('('+_successEvent+'事件)请求发生错误:' + _error);
                    if (status == 'timeout') { //超时,status还有success,error等值的情况
                        _EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络异常,请求超时,请稍后再试...", time: 600 });
                        if (_failedEvent) _EventService.emit(_failedEvent, _resultData);
                    }
                }
            })
        },

        /**
         * ajax Post请求服务(用于处理跨域);
         * @param:请求的url连接(String);
         * @param:请求的参数(Object);
         * @param:请求成功时候触发的事件(String);
         * @param:请求失败时候触发的事件(String);
         */
        requestPostJsonp: function(_url, _data, _successEvent, _failedEvent) {

            return RequestServer._asyncRequestBaseJsonp('POST', _url, _data, _successEvent, _failedEvent);

        },

        /**
         * ajax Get请求服务(用于处理跨域);;
         * @param:请求的url连接(String);
         * @param:请求的参数(Object);
         * @param:请求成功时候触发的事件(String);
         * @param:请求失败时候触发的事件(String);
         */
        requestGetJsonp: function(_url, _data, _successEvent, _failedEvent) {

            return RequestServer._asyncRequestBaseJsonp('GET', _url, _data, _successEvent, _failedEvent);

        },

        /**
         * ajax Post请求服务;
         * @param:请求的url连接(String);
         * @param:请求的参数(Object);
         * @param:请求成功时候触发的事件(String);
         * @param:请求失败时候触发的事件(String);
         */
        requestPost: function(_url, _data, _successEvent) {

            return RequestServer._asyncRequestBase('POST', _url, 'json', _data, _successEvent, _failedEvent);

        },

        /**
         * ajax Post请求服务;
         * @param:请求的url连接(String);
         * @param:请求的参数(Object);
         * @param:请求成功时候触发的事件(String);
         * @param:请求失败时候触发的事件(String);
         */
        requestPostSearch: function(_url, _dataType, _data, _successEvent, _failedEvent) {
            return RequestServer._asyncRequestBase('POST', _url, _dataType, _data, _successEvent, _failedEvent);
        },

        /**
         * ajax Get请求服务;
         * @param:请求的url连接(String);
         * @param:请求的参数(Object);
         * @param:请求成功时候触发的事件(String);
         * @param:请求失败时候触发的事件(String);
         */
        requestGet: function(_url, _data, _successEvent, _failedEvent) {

            return RequestServer._asyncRequestBase('GET', _url, 'json', _data, _successEvent, _failedEvent);

        },

        /**
         * ajax Get请求服务;
         * @param:请求的url连接(String);
         * @param:请求的参数(Object);
         * @param:请求成功时候触发的事件(String);
         * @param:请求失败时候触发的事件(String);
         */
        requestGetHtml: function(_url, _data, _successEvent, _failedEvent) {
            return RequestServer._asyncRequestBase('GET', _url, 'text', _data, _successEvent, _failedEvent);
        }
    };

    return RequestServer;

})