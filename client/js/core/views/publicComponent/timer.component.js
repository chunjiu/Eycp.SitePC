/** ================================================
 *
 *                                            倒计时间组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../services/event.service'
], function(
    _,
    $,
    _Backbone,
    _EventService
) {

     var TimerComponent = _Backbone.View.extend({

         /**
          *  初始化构造函数
          */
         initialize: function () {

             var _this = this;

             _this.awardTimeCount = 0;

             _this.speed = 1000;

             _this.clearInterval = 0;


             _EventService.on('timerCountDown_timerComponent',function (_callBackObject) {

                     if(typeof(_callBackObject) !='object' ||  !_callBackObject){
                         console.error('TimerComponent: timerCountDown方法参数不正确！');
                         return;
                     }

                     if(!_callBackObject.completeCallBack || typeof(_callBackObject.completeCallBack) !='function'){
                         console.error('TimerComponent: timerCountDown方法参数不正确, completeCallBack不存在, 或者是不是一个函数！');
                         return;
                     }

                     if(!_callBackObject.countDowningCallBack || typeof(_callBackObject.countDowningCallBack) !='function'){
                         console.error('TimerComponent: timerCountDown方法参数不正确, countDowningCallBack不存在, 或者是不是一个函数！');
                         return;
                     }

                     _this.timerCountDown(_callBackObject)
             })

         },


         /**
          * 递减时间方法
          */
         timerCountDown : function (_callBackObject) {

             var _this = this;

             _this.awardTimeCount = _callBackObject.awardTimeCount;

             window.clearInterval(_this.clearInterval);

             /** settimeout模拟setInterval */
             _this.clearInterval = window.setInterval(function () {

                 if (_this.awardTimeCount <= 0) {

                     /**  倒计完成00:00或者正在开奖中得时候，这里监听这个时间去处理你想做得事情 */
                     _callBackObject.completeCallBack(_this.awardTimeCount)

                 } else {

                     /**  正在倒计中得时候，这里监听这个时间去处理你想做得事情 */
                     _callBackObject.countDowningCallBack(_this.awardTimeCount)

                 }

                _this.awardTimeCount--;

             }, _this.speed);

         }

     });

     return TimerComponent;

})
