/****************************************************************
 *                      首页容器（存放首页所有逻辑）
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../../publicComponent/home/lotteryList.component',
    '../../publicComponent/home/videoList.component',
    '../../publicComponent/public/swiper.component',
    '../../../actions/public/timer.action',
    '../../../actions/home/home.action',
    '../../../actions/plan/plan.action',
    '../../../actions/point/point.action'
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _LotteryListComponent,
    _VideoListComponent,
    _SwiperComponent,
    _TimerAction,
    _HomeAction,
    _PlanAction,
    _PointAction
) {

       var HomeContainer = {
            
            /** 初始化 */
            initialize: function () {

                var _this = this;
                // var urlParameters = location.search;
                // if(urlParameters.indexOf('utm=mz')==-1){
                //   if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                //       /*window.location.href="你的手机版地址";*/
                //       window.location.href = "//m.2cp.com";
                //   }
                // }


                _this.isLock = false;

                 /** 初始化轮播图 */
                 var swiperComponent = new _SwiperComponent(3000);

                 /** 初始化开奖模块 */
                 var lotteryListComponent = new _LotteryListComponent();

                 /** 初始化视频模块 */
                 var videoListComponent = new _VideoListComponent();

                 _this.clearIntervalArray = [];

                 /** 初始化action */
                _TimerAction.initialize();

                /** 初始化首页action */
                _HomeAction.initialize();

                /** 初始化首页action */
                _PlanAction.initialize();

                /** 初始化提点action */
                _PointAction.initialize();

                /** 视频开奖倒计时完成事件 */
                 _EventService.on('getAwardTime_videoListComponent', function (_lotteryCode) {

                     /** 请求获取开奖时间 */
                     _TimerAction.requestAwardTime(_lotteryCode, function (_result) {

                         _EventService.emit('changeLottery_VideoListComponent', {code: _lotteryCode, result: _result});

                     })

                 });



                 /** 开奖倒计时完成事件 */
                 _EventService.on('getAwardTime_lotteryListComponent', function (_lotteryCode) {

                      /** 请求获取开奖时间 */
                     _this.getAwardTime(_lotteryCode);

                 });


                 /** 更新下期的期号 */
                _EventService.on('upDateNextPeriod_lotteryListComponent', function (_lotteryCode) {

                        _TimerAction.requestAwardTime(_lotteryCode, function (_result) {

                             _EventService.emit('upDatePeriodAttr_lotteryListComponent', _result);

                        })

                })


                 /***  拿切换tab后对应显示区域内得彩种得开奖时间 ****/
                 _EventService.on('getGroupAwards_LotteryListComponent', function (_codes) {

                     _HomeAction.groupAwards(_codes, function (_result) {

                           /** 切换的时候更改对应显示区域内的彩种的状态 */
                          _EventService.emit('changeTabLotteryListAwardState_LotteryListComponent', _result);

                     })

                 });


                 _EventService.on('requestVideo_VideoListComponent', function (_lotteryCode) {

                      _HomeAction.requestVideo(_lotteryCode, function(_result) {

                          _EventService.emit('appendVideo_VideoListComponent', _result);

                      })

                 });


                /**
                 * 清除所有的倒计时
                 */
                _EventService.on('clearIntervalArray_LotteryListComponent', function () {

                      if(_this.clearIntervalArray.length > 0){

                          for(var i=0; i<_this.clearIntervalArray.length; i++){

                               window.clearInterval(_this.clearIntervalArray[i].clearNum);

                          }

                          _this.clearIntervalArray = [];

                      }

                });


                /*首页彩种类型选择动画*/
                $(".lmb-content .name").mouseenter(function () {
                    var w = $(this).outerWidth();
                    var y = $(this).position().left;
                    $(".lmb-content .borBot").stop(true,false).animate({ width: w + 'px',left: y + 'px' },200);
                })


                /** 07:05:00和14:05:00更新提点和追号 */
                _this.refreshPlanAndPoint($('#plan').attr('data-systime'));

                /** 倒计时更新追号推荐(追号推荐二分钟刷新一次)*/
                _this.countDownPlan(120000);

            },

            getAwardTime: function(_lotteryCode){

                var _this = this;

                console.log('执行了开奖回调:'+_lotteryCode);

                _TimerAction.requestAwardTime(_lotteryCode, function (_result) {

                    _EventService.emit('changeLottery_LotteryListComponent', _result);

                    console.log('*************************'+_result.lotteryCode+'（'+_result.lotteryName+'）准备开'+_result.current.period+'期*************************');

                    _this.requestAwardDataFun(_result.lotteryCode, 3000+parseInt(Math.floor(Math.random()*5+1))*1000);

                })

            },

            /** 刷新提点和推荐 */
            refreshPlanAndPoint: function (_systime) {

               var _this = this;
               var _nowYear = _systime.split(' ')[0];

               var amTime = new Date(_nowYear+" 07:05:00");
               var pmTime = new Date(_nowYear+" 14:05:00");

               /** 系统时间搓 */
               var  systime = new Date(_systime);

               var diff;

               /** 早上时间搓 */
               if(systime <= amTime){
                   diff = amTime - systime;
               }else if(systime >= amTime  && systime <= pmTime){
                   diff = pmTime - systime
               }else{
                   return;
               }

               _this.countDownUpdate(diff);

           },

           /** 倒计时更新追号推荐(追号推荐一分钟刷新一次)*/
           countDownPlan: function (_time) {

               window.setInterval(function () {

                   _PlanAction.requestPlan(function (_result) {

                       if(_result !=undefined){
                           $('#plan').find('tr').not(':first-child').remove();
                           $('#plan').find('tr:first-child').after(_result.resultHtml);
                       }else{
                           console.error('追号推荐返回来的数据有问题！');
                       }

                   });


               },_time);

           },

            /** 倒计更新提点和追号推荐 */
            countDownUpdate: function (_allCountDownTime) {

               window.setTimeout(function () {

                   _PointAction.requestPoint(function (_result) {

                       if(_result !=undefined){

                           $('#point ul').html(_result.resultHtml);

                       }else{
                           console.error('追号推荐返回来的数据有问题！');
                       }

                   })

               },_allCountDownTime);

           },


            requestAwardDataFun: function (_lotteryCode, _time) {

                var _this = this;

               /** 5秒请求开奖结果 */
               var clearInterval = window.setInterval(function () {

                   _TimerAction.requestAwardData(_lotteryCode, 'history' , function (_resultData) {

                       /** 去判断到底拿到开奖结果没 */
                       _EventService.emit('checkIsAward_LotteryListComponent',{
                           lotteryCode: _lotteryCode,
                           result: _resultData,
                           clearIntervalArray:  _this.clearIntervalArray
                       });


                   });

               },_time);

               _this.clearIntervalArray.push({
                   lotteryCode: _lotteryCode,
                   clearNum: clearInterval
               })

           }

       }


       return HomeContainer;
})
