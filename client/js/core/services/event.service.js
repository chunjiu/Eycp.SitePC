/****************************************************************
 *                        事件订阅服务
 ****************************************************************/
define([
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

})