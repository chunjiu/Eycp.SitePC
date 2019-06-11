/** ================================================
 *
 *        开奖大厅开奖倒计时组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    'template',
    '../../services/event.service',
    '../../actions/public/lotteryTimer.action'
], function (
    _,
    $,
    _Backbone,
    _String,
    _Template,
    _EventService,
    _TimerAction
) {
    var LotteryTimerComponent = _Backbone.View.extend({
        el: "div",
        className: "lotteryTimer",
        events: {
            "click .video": "openVideo"
        },
        initialize: function() {
            console.log('backbone initialize');
        },
        render: function() {
            this.$el.html(_Template.template('lotteryTimer', this.model.data));
            return this;
        }
    });




    return LotteryTimerComponent;
});