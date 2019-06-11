/****************************************************************
 *                      11选5容器（存放11选5所有逻辑）
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    '../../../../services/event.service',
    '../../public/timer.container',
    '../../../../actions/public/lottery.action'
], function(
    _,
    $,
    _Backbone,
    _String,
    _EventService,
    _TimerContainer,
    _LotteryAction
) {

    var LotteryContainer = {
        initialize: function(lotteryCode, isAwarding, nowPeriod) {
            _TimerContainer.initialize(lotteryCode, 'history');
            _LotteryAction.initialize(lotteryCode, 'high', true);


            if(isAwarding) {
                _LotteryAction.loopResult(nowPeriod);
            }

            // 初始化事件
            this.initEvent();
        },
        initEvent: function() {
            _EventService.on('awardHTML_lotteryAction', function(data) {
                $('.public-lotteryLatestInfo').html(data.timer);
                $('.history-body').html(data.index);
            });

            _EventService.on('awardPlanHTML_lotteryAction', function(data) {
                $('#planTable').html(data.plan);
            });
            
        }
    }

    return LotteryContainer;
       
})
