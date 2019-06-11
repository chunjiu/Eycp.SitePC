/****************************************************************
 *                        命名规范服务
 ****************************************************************/
define('core/services/testing.service',[
    'jquery'
],function (
    $
) {


    var TestingServer = {

        isDev: $('body').attr('isopeneventnamecheck') ==="false" ? false : true,        /**  如果是开发模式的话，才进行校验命名规范 */

        /** 检测事件名字是否符合规范 */
        _testingEventName: function (_EventName) {

            if(this.isDev){

                if(/_[\w]*/.test(_EventName)){
                    return true;
                }else{
                    return false;
                }

            }else {
                console.error('body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！')
                return false;
            }
        }

    }

    return TestingServer;

});
/****************************************************************
 *                        事件订阅服务
 ****************************************************************/
define('core/services/event.service',[
	'underscore',
	'jquery',
	'backbone',
	'./testing.service'
],function(
	_,
	$,
	_Backbone,
   _TestingService
){


   var EventService = {

	/**
	* on 监听事件(私有方法请在前面加上下划线);
	* @param:事件得名字(String);
	* @param:事件得回调(Func);
	*/
	_on: function(_eventName, _callBack){

		if( typeof(_eventName) == 'string' &&  typeof(_callBack) == 'function' ){

			/**
			 *  判断事件名是否合规范
			 */
			if(_TestingService._testingEventName(_eventName)){

				this[_eventName] = this[_eventName] || new Array();
				this[_eventName].push(_callBack);

			}else{

				console.error('您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)');

			}

		}else{

			console.error('事件参数不正确！');

		}
	},
	/**
	 * emit 订阅事件(私有方法请在前面加上下划线);
	 * @param:事件得名字(String);
	 * @param:事件得参数(Object);
	 */
	_emit: function(_eventName){

		if( typeof( _eventName) == 'string' ){

			/**
			 *  判断事件名是否合规范
			*/
			if(_TestingService._testingEventName(_eventName)){

				var params = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];

				if (this[_eventName]) {
					Array.prototype.forEach.call(this[_eventName], function(arg) {
						arg.apply(this, params);
					});
				}

			}else{

				console.error('您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)');

			}

		}
	},
	/**
	 * backbone on 监听事件;
	 * @param:事件得名字(String);
	 * @param:事件得回调(Func);
	 */
	on: function(_eventName, _callBack){
		
		if( typeof(_eventName) == 'string' &&  typeof(_callBack) == 'function' ){

			/**
			 *  判断事件名是否合规范
			 */
			if(_TestingService._testingEventName(_eventName)){

				_Backbone.on(_eventName, _callBack);

			}else{

				console.error('您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)');

			}

		}else{

			console.error('事件参数不正确！')
		}

	},
	/**
	   * backbone emit 订阅事件;
	   * @param:事件得名字(String);
	   * @param:事件得参数(Object);
	   */
	emit: function(_eventName,_params){

		if( typeof(_eventName) == 'string' ){

			/**
			 *  判断事件名是否合规范
			 */
			if(_TestingService._testingEventName(_eventName)){

				_Backbone.trigger(_eventName,_params);

			}else{

				console.error('您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)');

			}

		} 
	}
}

   return EventService;

});
/****************************************************************
 *
 *                      分页容器（存放分页逻辑业务）
 *
 ****************************************************************/
define('core/views/containers/public/page.container',[
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service'
], function(
    _,
    $,
    _Backbone,
    _EventService
) {
    var PageContainer = {
        initialize: function() {
            this.initEvent();
        },
        initEvent: function() {
            // 点击页数
            $(document).on('click', '.public-pageBlock a', function(){
                _EventService.emit('activePage_pageContainer', $(this).data('pageindex'));
            });
        }
    }

    return PageContainer;
});
/**********************************Array扩展应用包*********************************/

define('Array',['require','exports','module'],function (require, exports, module) {

    //扩展Array移出元素方法
    Array.prototype.Remove = function (dx) {
        if (isNaN(dx) || dx > this.length) {
            return false;
        }
        for (var i = 0, n = 0; i < this.length; i++) {
            if (this[i] != this[dx]) {
                this[n++] = this[i]
            }
        }
        this.length -= 1
    };
    // 判断数组中包含element元素
    Array.prototype.Contains = function (element) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                return true;
            }
        }
        return false;
    };
    //获取元素索引
    Array.prototype.Index = function (element) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                return i;
            }
        }
    };
    //数组去重
    Array.prototype.Unique = function () {
        var n = {},
            r = []; //n为hash表，r为临时数组
        for (var i = 0; i < this.length; i++) //遍历当前数组
        {
            if (!n[this[i]]) //如果hash表中没有当前项
            {
                n[this[i]] = true; //存入hash表
                r.push(this[i]); //把当前数组的当前项push到临时数组里面
            }
        }
        return r;
    };
    //Json数据排序
    Array.prototype.SortJson = function (order, sortBy) {
        var ordAlpah = (order == 'asc') ? '>' : '<';
        var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
        return this.sort(sortFun);
    };

    /*
     *  方法:Array.remove(dx)
     *  功能:根据元素值删除数组元素.
     *  参数:元素值
     *  返回:在原数组上修改数组
     *  作者：pxp
     */
    // Array.prototype.indexOf = function(val) {
    //     for (var i = 0; i < this.length; i++) {
    //         if (this[i] == val) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // };

    // Production steps of ECMA-262, Edition 5, 15.4.4.14
    // Reference: http://es5.github.io/#x15.4.4.14
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {

            var k;

            // 1. Let o be the result of calling ToObject passing
            //    the this value as the argument.
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let lenValue be the result of calling the Get
            //    internal method of o with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var len = o.length >>> 0;

            // 4. If len is 0, return -1.
            if (len === 0) {
                return -1;
            }

            // 5. If argument fromIndex was passed let n be
            //    ToInteger(fromIndex); else let n be 0.
            var n = fromIndex | 0;

            // 6. If n >= len, return -1.
            if (n >= len) {
                return -1;
            }

            // 7. If n >= 0, then Let k be n.
            // 8. Else, n<0, Let k be len - abs(n).
            //    If k is less than 0, then let k be 0.
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            // 9. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the
                //    HasProperty internal method of o with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                //    i.  Let elementK be the result of calling the Get
                //        internal method of o with the argument ToString(k).
                //   ii.  Let same be the result of applying the
                //        Strict Equality Comparison Algorithm to
                //        searchElement and elementK.
                //  iii.  If same is true, return k.
                if (k in o && o[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }


    Array.prototype.removevalue = function (val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

    //求和(推荐计划)
    Array.prototype.PlanSum = function () {
        var sum = 0;
        for (var i = 0; i < this.length; i++)
            sum += parseInt(this[i].CurMaxScore);
        return sum
    };
    //求最大值
    Array.prototype.PlanMax = function () {
        for (var i = 0, maxValue = 0; i < this.length; i++)
            parseInt(this[i].TotalWinLoss) > maxValue && (maxValue = this[i].TotalWinLoss);
        return maxValue
    };

    /*
     *  方法:Array.RemoveItem(item)
     *  功能:删除数组对象中的元素项.
     *  参数:元素
     *  返回:返回一个新的数组对象
     *  作者：zzd
     */
    Array.prototype.RemoveItem = function (item) {
        var newThis = [];
        for (var i = 0; i < this.length; i++) {
            if (this[i] != item) {
                newThis.push(this[i]);
            }
        }
        return newThis;
    }

    module.exports = Array;
});
/****************************************************************
 *                        请求接口服务
 ****************************************************************/
define('core/services/request.service',[
	'underscore',
	'jquery',
	'backbone',
	'./event.service'
], function (_, $, _Backbone, _EventService) {

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
		_asyncRequestBase: function (_type, _url, _dataType, _data, _successEvent, _failedEvent) {
			$.ajax({
				type: _type,
				async: true,
				timeout: 10000,
				url: _url,
				dataType: _dataType,
				data: _data,
				success: function (_resultData) {
					//console.info(_resultData);
					if (_resultData) {

						/** 当数据状态为成功的时候，就触发对应的事件 */
						_EventService.emit(_successEvent, _resultData);

					} else {

						_EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络发生异常！", time: 600 });
						
						console.error('(' + _successEvent + '事件)返回得数据发生错误:');

					}
				},
				complete: function (XMLHttpRequest, status) {
					if (status == 'timeout') {//超时,status还有success,error等值的情况
						_EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络异常,请求超时,请稍后再试...", time: 600 });
						if(_failedEvent) _EventService.emit(_failedEvent, _resultData);
					}
				},
				error: function (_error, status) {
					//console.error(_error);
					/** 当数据状态为成功的时候，就触发对应的事件 */
					//console.error('('+_successEvent+'事件)请求发生错误:' + _error);
					if (status == 'timeout') {//超时,status还有success,error等值的情况
						_EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络异常,请求超时,请稍后再试...", time: 600 });
						if(_failedEvent) _EventService.emit(_failedEvent, _resultData);
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
		_asyncRequestBaseJsonp: function (_type, _url, _data, _successEvent, _failedEvent) {
			$.ajax({
				type: _type,
				async: true,
				timeout: 10000,
				url: _url,
				dataType: "jsonp",
				jsonp: "jsoncallback",
				jsonpCallback: _successEvent,
				data: _data,
				success: function (_resultData) {
					//console.info(_resultData);
					if (_resultData) {

						/** 当数据状态为成功的时候，就触发对应的事件 */
						_EventService.emit(_successEvent, _resultData);

					} else {

						_EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络发生异常！", time: 600 });

						console.error('(' + _successEvent + '事件)返回得数据发生错误:');

					}
				},
				complete: function (XMLHttpRequest, status) {
					if (status == 'timeout') {//超时,status还有success,error等值的情况
						_EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络异常,请求超时,请稍后再试...", time: 600 });
						if(_failedEvent) _EventService.emit(_failedEvent, _resultData);
					}
				},
				error: function (_error, status) {
					//console.error(_error);
					/** 当数据状态为成功的时候，就触发对应的事件 */
					//console.error('('+_successEvent+'事件)请求发生错误:' + _error);
					if (status == 'timeout') {//超时,status还有success,error等值的情况
						_EventService.emit('createPromptWindow_promptWindowComponent', { title: "网络异常,请求超时,请稍后再试...", time: 600 });
						if(_failedEvent) _EventService.emit(_failedEvent, _resultData);
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
		requestPostJsonp: function (_url, _data, _successEvent, _failedEvent) {

			return RequestServer._asyncRequestBaseJsonp('POST', _url, _data, _successEvent, _failedEvent);

		},

		/**
		 * ajax Get请求服务(用于处理跨域);;
		 * @param:请求的url连接(String);
		 * @param:请求的参数(Object);
		 * @param:请求成功时候触发的事件(String);
		 * @param:请求失败时候触发的事件(String);
		 */
		requestGetJsonp: function (_url, _data, _successEvent, _failedEvent) {

			return RequestServer._asyncRequestBaseJsonp('GET', _url, _data, _successEvent, _failedEvent);

		},

		/**
		 * ajax Post请求服务;
		 * @param:请求的url连接(String);
		 * @param:请求的参数(Object);
		 * @param:请求成功时候触发的事件(String);
		 * @param:请求失败时候触发的事件(String);
		 */
		requestPost: function (_url, _data, _successEvent) {

			return RequestServer._asyncRequestBase('POST', _url, 'json', _data, _successEvent, _failedEvent);

		},

		/**
		 * ajax Post请求服务;
		 * @param:请求的url连接(String);
		 * @param:请求的参数(Object);
		 * @param:请求成功时候触发的事件(String);
		 * @param:请求失败时候触发的事件(String);
		 */
		requestPostSearch: function (_url, _dataType, _data, _successEvent, _failedEvent) {
			return RequestServer._asyncRequestBase('POST', _url, _dataType, _data, _successEvent, _failedEvent);
		},

		/**
		 * ajax Get请求服务;
		 * @param:请求的url连接(String);
		 * @param:请求的参数(Object);
		 * @param:请求成功时候触发的事件(String);
		 * @param:请求失败时候触发的事件(String);
		 */
		requestGet: function (_url, _data, _successEvent, _failedEvent) {

			return RequestServer._asyncRequestBase('GET', _url, 'json', _data, _successEvent, _failedEvent);

		},

		/**
		* ajax Get请求服务;
		* @param:请求的url连接(String);
		* @param:请求的参数(Object);
		* @param:请求成功时候触发的事件(String);
		* @param:请求失败时候触发的事件(String);
		*/
		requestGetHtml: function (_url, _data, _successEvent, _failedEvent) {
			return RequestServer._asyncRequestBase('GET', _url, 'text', _data, _successEvent, _failedEvent);
		}
	};

	return RequestServer;

});
/****************************************************************
 *
 *                  获取开奖公告和走势图表的请求数据接口
 *
 ****************************************************************/
define('core/actions/public/getArticleNoticeAndChart.action',[
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

});
/****************************************************************
 *
 *         资讯右方开奖公告设置随机显示开奖公告（需要把这个开奖公告存放在）
 *
 ****************************************************************/
define('core/views/containers/public/articleRightNoticeCookie.container',[
    'jquery',
    'Util',
    'Date',
    'Array',
    '../../../services/event.service',
    '../../../actions/public/getArticleNoticeAndChart.action'
],function (
    $,
    _Util,
    _Date,
    _Array,
    _EventService,
    _GetArticleNoticeAndChartAction
) {

    var ArtcleRightNoticeCookieContainer = {

        initialize: function (_lotteryCode, _isNeedCookie) {

            _lotteryCode = (_lotteryCode != 'undefined' ? _lotteryCode : undefined);

            var _notice = {};
            var _className = '.la-list';


            ArtcleRightNoticeCookieContainer.digitArr = [
                { type: 'dlt',    name: '大乐透' ,    defaultChart: 11},
                { type: 'fc3d',  name: '福彩3D' ,  defaultChart: 1  },
                { type: 'pl3',    name: '排列3' ,    defaultChart: 1  },
                { type: 'pl5' ,   name: '排列5',     defaultChart: 1  },
                { type: 'qlc',    name: '七乐彩' ,   defaultChart: 1  },
                { type: 'qxc',   name: '七星彩' ,   defaultChart: 1  },
                { type: 'ssq',    name: '双色球' ,  defaultChart: 11},
                { type: '11x5', name: '11选5',    defaultChart: 1  },
                { type: 'k3',     name: '快3',        defaultChart: 1  },
                { type: 'kl10',  name: '快乐十分', defaultChart: 1 },
                { type: 'ssc',    name: '时时彩',    defaultChart: 1 }
            ];



            /** 初始化开奖公告action */
            _GetArticleNoticeAndChartAction.initialize();

            var _awardData = JSON.parse($(_className).attr('data-json'));

            /** 需要走cookie这条通道 */
            if(_isNeedCookie == true){

                /** 如果是属于数字彩系列，就不需要走cookie，如果非数字彩系列，就需要走cookie */
                if(this.arrayIsHasCode(ArtcleRightNoticeCookieContainer.digitArr, _lotteryCode) == false){

                    if(_Util.getCookie('notice')){

                        _notice = JSON.parse(_Util.getCookie('notice'));

                    }else{

                        /** 如果没有cookie，先把这个随机的值给填充到公告展示 ，再存进cookie */
                        this.upDataNotice(_className, _awardData[0]);

                        /** 把返回来的走势放到走势列表中，这里取的是cookie中的彩种 */
                        _GetArticleNoticeAndChartAction.getArticleChart(_awardData[0].lotteryCode, function (_result) {

                            $('#chartList').find('.name').html(_awardData[0].lotteryName+"走势图");
                            $('#chartList').find('.ulB').html(_result.trend);
                            $('#chartList').find('.name').attr('href','/chart/'+_awardData[0].lotteryCode+"/"+_result.chartDefultFlot);
                            $('#chartList').find('.more').attr('href','/chart/' +_awardData[0].lotteryCode+"/"+_result.chartDefultFlot);
                        });

                        /** 非数字的话，当前假如没有存在cookie，那么就把随机一个cookie值记录到cookie中 */
                        _Util.setCookie('notice', JSON.stringify({
                            award: $('.la-list').attr('data-json'),
                            time: new Date()
                        }));

                    }


                    if(this.isToday(_notice.time) == true){

                        $(_className).find('.loading').show();
                        $(_className).find('ul').hide();

                        //console.log(JSON.parse(_notice.award)[0].lotteryCode)
                        _GetArticleNoticeAndChartAction.getArticleNotice(JSON.parse(_notice.award)[0].lotteryCode, function (_result) {

                            if(_result){

                                ArtcleRightNoticeCookieContainer.upDataNotice(_className, _result[0]);

                            }else{
                                console.error('超过00：00：00请求回来的开奖公告数据有问题！')
                            }
                        })
                    }

                }else{

                    _notice.award = _awardData;


                }

                /** 更新开奖公告 */
                if(JSON.stringify(_notice) != '{}'){
                    if(typeof(_notice.award) == 'string'){
                        this.upDataNotice(_className, JSON.parse(_notice.award)[0]);
                    }else{
                        this.upDataNotice(_className, _notice.award[0]);
                    }
                }


                /** 更新走势列表 */
                if(_isNeedCookie){

                    var _noticeAward;

                    if(typeof(_notice.award) == 'string'){

                        _noticeAward = JSON.parse(_notice.award);

                    }else{

                        _noticeAward = _notice.award;
                    }

                    this.upDataChart($('#chartList'), _noticeAward[0].lotteryCode);
                }else{
                    this.upDataChart($('#chartList'), _lotteryCode);
                }



            /** 不需要走cookie这条通道 */
            }else{


                if(ArtcleRightNoticeCookieContainer.digitArr.Contains(_lotteryCode) == false){

                    this.upDataNotice2(_className, $(_className).attr('data-award'));

                }else{

                    this.upDataNotice(_className, _awardData[0]);
                    this.upDataChart($('#chartList'), _lotteryCode);

                }

            }
        },


        /**
         *   判断code是否存在数组对象中
         */
        arrayIsHasCode: function (_arr, _code) {

            if(_arr && typeof(_arr) == 'object' && _code && typeof(_code) == 'string'){


                for(var i=0; i<_arr.length; i++) {

                    if(_arr[i].type == _code){
                        return true;
                    }

                }

                return false;

            }else{
                console.error('arrayIsHasCode: 参数有问题！');
                return false;
            }

        },


        /**
         *  更新走势列表
         */
         upDataChart: function (_chartList, _lotteryCode) {

            var _digitArr = ArtcleRightNoticeCookieContainer.digitArr;

            var _notice = JSON.parse(_Util.getCookie('notice'));
            var _awardData   = JSON.parse(_notice.award)[0];
            var _lotteryName= _awardData.lotteryName;

            var _name = _lotteryName;
            var _code = _awardData.lotteryCode;

             /** 选了全部或者其他 */
            if(_lotteryCode == 'other' || _lotteryCode == '0' || _lotteryCode == undefined){

                /** 把返回来的走势放到走势列表中，这里取的是cookie中的彩种 */
                _GetArticleNoticeAndChartAction.getArticleChart(_code, function (_result) {

                    _chartList.find('.name').html(_name+"走势图");
                    _chartList.find('.ulB').html(_result.trend);
                    _chartList.find('.name').attr('href','/chart/'+_code+"/"+_result.chartDefultFlot);
                    _chartList.find('.more').attr('href','/chart/'+_code+"/"+_result.chartDefultFlot);
                });

            }else{

                    _digitArr.forEach(function (_val,_index,_arr) {

                        if(_val.type == _lotteryCode){

                            _GetArticleNoticeAndChartAction.getArticleChart(_val.type, function (_result) {

                                _chartList.find('.name').html(_val.name+"走势图");
                                _chartList.find('.ulB').html(_result.trend);
                                _chartList.find('.name').attr('href','/chart/'+_val.type+"/"+_result.chartDefultFlot);
                                _chartList.find('.more').attr('href','/chart/'+_val.type+"/"+_result.chartDefultFlot);
                            });

                        }

                    })

            }
         },

        /**
         *  更新开奖公告，这个是读取data-award中的json
         */
        upDataNotice2:function (_className, _awardData) {

            var _digitArr =  ArtcleRightNoticeCookieContainer.digitArr;

            var _noticeAward;

            var _awardWeek;

            /** 判断当前是否为数字彩 */
            var _isDigit = false;

            if(typeof(_awardData) == 'string'){
                _noticeAward = JSON.parse(_awardData);
            }else{
                _noticeAward = _awardData;
            }

            var _lotteryName = $(_className).attr('data-lotteryName');
            var _defaultChart;

            /**  判断当前选择的彩种类型 */
            var  _lotteryClassify = this.getlotteryClassify(_noticeAward.lotteryCode);

            if(ArtcleRightNoticeCookieContainer.arrayIsHasCode(_digitArr, _noticeAward.lotteryCode)){

                _awardWeek     =  this.getWeek(_noticeAward.awardTime);
                _isDigit             =  true;

            }else{

                _awardWeek     =  '';
                _isDigit             =  false;
            }

            for(var i =0; i< _digitArr.length; i++){

                if(_digitArr[i].type == _lotteryClassify){

                    _defaultChart = _digitArr[i].defaultChart;
                }
            }


            $(_className).find('.textB a').html(_lotteryName);
            $('#chartList .name').html(_lotteryName+"走势图");

            $('#chartList .name').attr('href','/chart/'+_noticeAward.lotteryCode+'/'+_defaultChart);
            $('#chartList .more').attr('href','/chart/'+_noticeAward.lotteryCode+'/'+_defaultChart);


            $(_className).find('li').attr('onclick','javascript:window.open("/'+(_isDigit ? 'digit' : 'high')+'/'+_noticeAward.lotteryCode+'", "_blank")');
            $(_className).find('.textB a').attr('href','/'+(_isDigit ? 'digit' : 'high')+'/'+_noticeAward.lotteryCode);
            $(_className).find('.issue').html(''+_noticeAward.period+'期&nbsp;'+(_awardWeek ? _awardWeek: '')+'&nbsp;'+this.formatDateTime(_noticeAward.awardTime, "MM-dd hh:mm"));
            $(_className).find('.public-number-ball').remove();
            if(_noticeAward.lotteryCode=='fc3d'){
                $(_className).find('li').append(this.digitHistory3DIndex(_noticeAward.result));
            }else{
                $(_className).find('li').append(this.digitHistoryIndex(_noticeAward.result));
            }
            $(_className).find('.loading').hide();
            $(_className).find('ul').show();

        },


        /**
         *  更新开奖公告
         */
         upDataNotice: function (_className, _noticeAward) {

            var _isDigit             =  false;

            if(ArtcleRightNoticeCookieContainer.arrayIsHasCode(ArtcleRightNoticeCookieContainer.digitArr, _noticeAward.lotteryCode)){

                _isDigit             =  true;
            }else{

                _isDigit             =  false;
            }


            $(_className).find('.textB a').html(_noticeAward.lotteryName);
            $(_className).find('li').attr('onclick','javascript:window.open("/'+(_isDigit ? 'digit' : 'high')+'/'+_noticeAward.lotteryCode+'", "_blank")');
            $(_className).find('.textB a').attr('href','/'+(_isDigit ? 'digit' : 'high')+'/'+_noticeAward.lotteryCode+'');
            $(_className).find('.issue').html(''+_noticeAward.issueNo+'期&nbsp;'+_noticeAward.week+'&nbsp;'+this.formatDateTime(_noticeAward.awardDatetime, "MM-dd hh:mm"));
            $(_className).find('.public-number-ball').remove();

             if(_noticeAward.lotteryCode=='fc3d'){
                $(_className).find('li').append(this.digitHistory3DIndex(_noticeAward.result));
            }else{
            $(_className).find('li').append(this.digitHistoryIndex(_noticeAward.awardResult));
            }
            $(_className).find('.loading').hide();
            $(_className).find('ul').show();

        },


        /**
         *  返回彩种类型
         */
         getlotteryClassify: function(_lotteryCode){

            /**  判断当前选择的彩种类型 */
            var  _lotteryClassify;

            if((/11x5/).test(_lotteryCode)){

                _lotteryClassify = '11x5';

            }else if((/k3/).test(_lotteryCode)){

                _lotteryClassify = 'k3';

            }else if((/kl10/).test(_lotteryCode)){

                _lotteryClassify = 'kl10'

            }else if((/ssc/).test(_lotteryCode)){

                _lotteryClassify = 'ssc'

            }else if((/xync/).test(_lotteryCode)){

                _lotteryClassify = 'kl10'

            }else{

                _lotteryClassify = _lotteryCode;

            }

            return  _lotteryClassify;

         },


        /**
         * 是否为Null
         * @param object
         * @returns {Boolean}
         */
          isNull: function(object){
                if(object == null || typeof object == "undefined"){
                    return true;
                }
                return false;
           },


    /**
     * 根据日期字符串获取星期几
     * @param dateString 日期字符串（如：2016-12-29），为空时为用户电脑当前日期
     * @returns {String}
     */
        getWeek: function(dateString){
            var date;
            if(this.isNull(dateString)){
                date = new Date();
            }else{
                var dateArray = dateString.split("-");
                date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
            }
            return "星期" + "日一二三四五六".charAt(date.getDay());
          },



        /**
         * 判断是否今天
         * @param _str  时间戳
         * @return {boolean}
         */
        isToday: function(_str) {
            if (new Date(_str).toDateString() === new Date().toDateString()) {
                //今天
                console.log('今天');
                return true;
            } else if (new Date(_str) < new Date()){
                //之前
                console.log('之前');
                return false;
            }
        },


        /**
         * 数字彩首页列表
         */
        digitHistoryIndex:function(_resultData){

            if (!_resultData) return '';
            let _tmp = _resultData.split('|'),
                _red = _tmp[0].split(','),
                _blue = _tmp[1] ? _tmp[1].split(',') : [],
                _result = [];

            // 红球
            _red.forEach(item => {
                _result.push(`<span class="red">${item}</span>`);
            });


            // 蓝球
            _blue.forEach(item => {
                _result.push(`<span class="blue">${item}</span>`);
            })

            return `<div class="public-number-ball">${_result.join('')}</div>`;
      },

      digitHistory3DIndex:function(_resultData){

        if (!_resultData) return '';
           let _tmp = _resultData.split('|'),
            _red = _tmp[0] ? _tmp[0].split(',') : [],
            _blue = _tmp[1] ? _tmp[1].split(',') : [],
            _result = [];

        if(_red.length>1){
            // 红球
            _red.forEach(item => {
                _result.push(`<span class="red">${item}</span>`);
            });
        }else{
            _result.push(`<span class="red">--</span><span class="red">--</span><span class="red">--</span>`);
        }
         if(_blue.length>1){
            // 蓝球
            _result.push('<span class="testNumber">试机号：<i class="font-red">'+_blue.join(" ")+'</i></span>');
        }

        return `<div class="public-number-ball">${_result.join('')}</div>`;
      },

        /**
         * 日期 格式处理 format: yyyy-MM-dd hh:mm:ss
         * @param {*} date
         */
       formatDateTime:function(_date,_format){
            if(!_date) return '';
            _date = _date.toString().replace(/-/g, '/');
            return (new Date(_date)).format(_format);
       }


    }

    return ArtcleRightNoticeCookieContainer;
});
/****************************************************************
 *
 *                      列表容器（存放列表所有逻辑）
 *
 ****************************************************************/
define('core/views/containers/notice/index.container',[
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../public/page.container',
    '../public/articleRightNoticeCookie.container'
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _PageContainer,
    _ArticleRightNoticeCookieContainer
) {

    var ListContainer = {

        initialize: function (_lotteryCode, isNeedCookie) {

            // 初始化分页组件
            _PageContainer.initialize();

            this.initEvent();

            /** 给资讯右方的公共设置cookie */
            _ArticleRightNoticeCookieContainer.initialize(_lotteryCode, isNeedCookie);

        },
        initEvent: function () {

            _EventService.on('activePage_pageContainer', function (pageIndex) {

                var _url = '/notice';

                window.location.href =  _url+ '/page_' + pageIndex;

            })

        }
    }

    return ListContainer;
});
