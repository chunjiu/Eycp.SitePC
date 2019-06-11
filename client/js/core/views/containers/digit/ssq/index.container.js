/****************************************************************
 *                      双色球容器（存放双色球所有逻辑）
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
            _LotteryAction.initialize(lotteryCode, 'digit');

            if(isAwarding) {
                _LotteryAction.loopResult(nowPeriod);
            }

            // 初始化事件
            this.initEvent();
        },
        initEvent: function() {

            _EventService.on('awardHTML_lotteryAction', function(data) {

                $('.public-lotteryLatestInfo').html(data.timer);

                if($.trim(data.index) !='' || $.trim(data.index) !=undefined){

                    $('.history-body').html(data.index);
                    // 只需要前六条
                    var _topSix = [];
                    $('.history-body tr:lt(6)').each(function(){
                        _topSix.push('<tr>' + $(this).html() + '</tr>')
                    })
                    $('.history-body').html(_topSix.join(''));
                }

            })
        }
    }

    return LotteryContainer;
       
})
