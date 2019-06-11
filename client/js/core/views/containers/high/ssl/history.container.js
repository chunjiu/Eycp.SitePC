/****************************************************************
 *                      首页容器（存放首页所有逻辑）
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../../services/event.service',
    '../../public/history.container',
    '../../public/timer.container',
    '../../../../actions/public/lottery.action',
    '../../../publicComponent/public/loading.component',
], function (
    _,
    $,
    _Backbone,
    _EventService,
    _HistoryContainer,
    _TimerContainer,
    _LotteryAction,
    _LoaddingComponent
) {

    var SSLHistoryContainer = {
        initialize: function (lotteryCode, isAwarding, nowPeriod) {
            // 通用历史页面处理
            _HistoryContainer.initialize();
            // 定时器
            _TimerContainer.initialize(lotteryCode, 'history');
            // 开奖相关
            _LotteryAction.initialize(lotteryCode, 'high');
            // 初始化事件注册
            this.initEvent();

            new _LoaddingComponent();

            if(isAwarding) {
                _LotteryAction.loopResult(nowPeriod);
            }

        },
        initEvent: function () {
            // 选择筛选按钮事件
            _EventService.on('checkBoxChange_historyContainer',this.clickRadio);
            
            // 倒计时开奖之后回调事件
            _EventService.on('awardHTML_lotteryAction', function(data) {
                _EventService.emit('delLoading_loadingComponent');
                $('.public-lotteryLatestInfo').html(data.timer);
                var _now = (new Date()).format('yyyy-MM-dd');
                if(_now == $('#txtDate').val()) {
                    $('.history-body').html(data.history);
                    var $checked = $('label.public-checkboxBlock i.active');
                    if($checked.length > 0) {
                        $checked.removeClass('active');
                        $checked.parent().click();
                    }
                }
                
            });

            // 日期选择事件回调
            _EventService.on('datePickerChange_historyContainer', function(date) {
                _EventService.emit('delLoading_loadingComponent');
                _LotteryAction.getAwardHTML(function(data){
                    $('.history-body').html(data.history);
                },date);
            });
        },
        clickRadio: function (_value) {
            $('td[data-id] span').removeClass('opacity');
            switch(_value) {
                case '1':
                case '2':
                case '3':
                case '4':
                    SSLHistoryContainer.showTop(_value);
                    break;
                default:
                    $('td[data-id]:not(.' + _value + ') span').addClass('opacity');
                    break;
            }       
        },
        showTop: function(type) {
            var _el = [];
            if(type <= 2) {
                _el.push('[data-id=2] span');
                _el.push('[data-id=3] span');
                if(type == 2) {
                    _el.shift();
                }
            } else {
                _el.push('[data-id=1] span');
                _el.push('[data-id=2] span');
                if(type == 4) {
                    _el.pop();
                }
            }

            $(_el.join(',')).addClass('opacity');
        }
    }

    return SSLHistoryContainer;

})
