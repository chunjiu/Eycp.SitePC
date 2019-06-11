/** ================================================
 *
 *        开奖大厅开奖倒计时模型
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    '../services/event.service',
    '../actions/public/lotteryTimer.action'
], function (
    _,
    $,
    _Backbone,
    _String,
    _EventService,
    _LotteryTimerAction
) {
    // lotteryType 1为数字彩，2为高频彩
    var LotteryTimerModel = _Backbone.Model.extend({
        defaults: {
            lotteryCode : 'bjpk10',
            lotteryType : 2,
            timer: null,
            data: {}
        },
        initialize: function() {
            this.on('change:lotteryCode', function(){
                console.log(this.get('lotteryCode'));
            })
        },
        countTimer: function() {
            
        }
    });


    return LotteryTimerModel;
});