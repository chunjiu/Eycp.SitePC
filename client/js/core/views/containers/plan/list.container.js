/****************************************************************
 *                      追号聚合首页
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'Date',
    'String',
    '../../../services/event.service',
    '../../../actions/plan/plan.action',
    '../public/timer.container',
    '../../publicComponent/public/loading.component'
], function(
    _,
    $,
    _Backbone,
    _Date,
    _String,
    _EventService,
    _PlanAction,
    _TimerContainer,
    _LoaddingComponent
) {
    var nextPeriod = '';
    var PlanContainer = {
        initialize: function(lotteryCode, isAwarding, nowPeriod) {
            _TimerContainer.initialize(lotteryCode, 'history');
            new _LoaddingComponent();
            if(isAwarding) {
                _PlanAction.loopResult(lotteryCode, nowPeriod);
            }

            this.initEvent();
            this.awardTop();

            // 初始化事件
            _PlanAction.initialize();

        },
        initEvent: function() {
            _EventService.on('awardHTML_lotteryAction', function(data) {
                $('.lb_lotteBlock').html(data.timer);
                setTimeout(function() {
                    _PlanAction.getAwardHTML({
                        lotteryCode: $('#lotteryCode').val(),
                        date: $('#date').val(),
                        groupId: $('#groupId').val(),
                        type: $('#type').val()
                    },function(data){
                        $('#planBody').html(data.list);
                        $('#planTable').html(data.table);
                    });
                }, 30000);
            });

            _EventService.on('awardHTML_PlanLoopAction', function(data) {
                _PlanAction.getAwardTimerHTML({
                    lotteryCode : $('#lotteryCode').val(),
                    groupId: $('#groupId').val()
                }, function(data){
                    _EventService.emit('awardHTML_lotteryAction', data);
                });
            });

            // 倒计时开始
            _EventService.on('countDowning_timerContainer', function(time) {
                var _digitTime = time.toString().SecondsToddhhmmss().split(':');
                if(parseInt(_digitTime[0]) > 0) {
                    $('.dt_time.time1').html(_digitTime[0]);
                    $('.fon_gray.gray1').html('天');
                    $('.dt_time.time2').html(_digitTime[0]);
                    $('.fon_gray.gray2').html('时');

                } else if(parseInt(_digitTime[1]) > 0) {
                    $('.dt_time.time1').html(_digitTime[1]);
                    $('.fon_gray.gray1').html('时');
                    $('.dt_time.time2').html(_digitTime[2]);
                    $('.fon_gray.gray2').html('分');
                } else {
                    $('.dt_time.time1').html(_digitTime[2]);
                    $('.fon_gray.gray1').html('分');
                    $('.dt_time.time2').html(_digitTime[3]);
                    $('.fon_gray.gray2').html('秒');
                }
            });

            // 获取下一个期的期号
            _EventService.on('getAwardTimeObject_timerContainer', function(_object){
                nextPeriod = _object.nextPeriod;
                $('.next-period').html(nextPeriod + '期');
            });

            // 倒计时完成
            _EventService.on('complete_timerContainer', function() {
                $('.beProgressing').show();
                $('.preterite').hide();
            })

            // 获取到开奖结果
            _EventService.on('lotteryResults_timerComponent', function(result){
                _PlanAction.getAwardTimerHTML({
                    lotteryCode : $('#lotteryCode').val(),
                    groupId: $('#groupId').val()
                }, function(data){
                    _EventService.emit('awardHTML_lotteryAction', data);
                });
            });

            $(document).on('click', '.skip', function() {
                _EventService.emit('createLoading_loadingComponent');
            });
        },
        awardTop: function(){
            var _css = {
                position: 'fixed',
                background: '#fff',
                top: 0,
                'z-index': 100
            };
            $(window).scroll(function(e){
                if($(window).scrollTop() >= 150) {
                    $('.public_LotteryBlock').addClass('fixTop')
                } else {
                    $('.public_LotteryBlock').removeClass('fixTop')                    
                }
            });
        }
    }

    return PlanContainer;
});