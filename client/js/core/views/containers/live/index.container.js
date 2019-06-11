/****************************************************************
 *
 *                      视频直播容器（存放视频直播所有逻辑）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../../publicComponent/live/topVideo.component',
    '../../publicComponent/live/numberVideoList.component',
    '../../../actions/live/live.action'
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _TopVideoComponent,
    _NumberVideoListComponent,
    _LiveAction
) {

    var HomeContainer = {

        /** 初始化 */
        initialize: function () {

            var _this = this;

            _this.countNum1 = 0;
            _this.countNum2 = 0;
            _this.tempTime1 = '';
            _this.tempTime2 = '';
            _this.lock1 = false;
            _this.lock2 = false;

            /** 初始化action */
            _LiveAction.initialize();

            /** 初始化倒计视频插件 */
            var topVideoComponent = new _TopVideoComponent();

            /** 初始化数字彩视频倒计时组件 */
            var numberVideoListComponent = new _NumberVideoListComponent();

            /** 启动倒计时 */
            _EventService.emit('startCountDown_topVideoComponent');

            /** 启动倒计时(头部0块在倒计) */
            _EventService.emit('startCountDownNav_topVideoComponent');

            /** 启动倒计时(数字彩倒计时) */
            _EventService.emit('startCountDown_NumberVideoListComponent');
            
            /** 右边列表第一个倒计完了时间触发的事件 */
            _EventService.on('countDownSuccess_topVideoComponent', function () {

                _LiveAction.getAwardDataGroup(1 , function (_result) {

                     /** 刷新整个顶部视频模块 */
                     _EventService.emit('refresh_topVideoComponent', {
                         result: _result,
                         type: 1
                     });

                })
                
            })

            /** nav最后一个倒计完了触发事件 */
            _EventService.on('countDownSuccessNav_topVideoComponent', function () {

                _LiveAction.getAwardDataGroup(0 , function (_result) {

                    /** 刷新整个顶部视频模块 */
                    _EventService.emit('refresh_topVideoComponent', {
                        result: _result,
                        type: 0
                    });


                })

            })


            /** 数字彩其中一个倒计完了执行该事件 */
            _EventService.on('countDownSuccess_numberVideoComponent', function (_lotterycode) {

                _LiveAction.getGroupAwardTimes(_lotterycode , function (_result) {

                    /** 刷新整个顶部视频模块 */
                    _EventService.emit('refresh_numberVideoComponent', _result.groupAwardTimes[0]);

                })

            })


            /** 这里发出一个事件，实时得去检测一下上面得高频彩有没出现00:00的情况（因为数字彩一般很久很久才开奖一次，因此可以利用数字彩得倒计时来实时检查一下高频得倒计有没出现异常）*/
            _EventService.on('observer_numberVideoComponent',function () {


                   if(_this.lock1 == false){
                       _this.tempTime1 = $('#videoList li:first-child .time b').html();
                       _this.lock1 = true;  //上锁;
                   }

                   if(_this.lock2 == false){
                        _this.tempTime2 = $('#navVideoList li:last-child .time b').html();
                        _this.lock2 = true;  //上锁;
                    }

                   if($('#videoList li:first-child .time b').html()==_this.tempTime1){

                        if(_this.countNum1 > 6){

                            _this.countNum1 = 0;

                            _EventService.emit('countDownSuccess_topVideoComponent');
                            _this.lock1 = false;  //解锁;

                        }else{
                            _this.countNum1++;
                        }
                   }else{
                       _this.lock1 = false;  //不相等马上解锁;
                   }

                   if($('#navVideoList li:last-child .time b').html()==_this.tempTime2){

                       if(_this.countNum2 > 6){

                           _this.countNum2 = 0;

                           _EventService.emit('countDownSuccessNav_topVideoComponent');
                           _this.lock2 = false;  //解锁;

                       }else{
                           _this.countNum2++;
                       }
                   }else{
                       _this.lock2 = false;  //不相等马上解锁;
                   }

            });


        }
    }


    return HomeContainer;
})
