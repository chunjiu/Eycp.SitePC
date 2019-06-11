/** ================================================
 *
 *                            详情页时间倒计部分组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    '../../../services/event.service'
], function (
    _,
    $,
    _Backbone,
    _String,
    _EventService
) {

    var DetailTimeBlockComponent = _Backbone.View.extend({

        el: '#countDownTime',
        timeBlock: '#countDownTime #timeBlock',
        timeTemp: '#countDownTime #timeTemp',
        dayDom: '#countDownTime  #day',
        hourDom: '#countDownTime  #hour',
        minuteDom: '#countDownTime  #minute',
        secondDom: '#countDownTime  #second',
        periodDom: '#countDownTime  .mc_title span i',
        surplusDom: '#countDownTime #surplus',
        /** 构造函数 */
        initialize: function () {

            var _this = this;

            /** 获取开奖倒计时的时间 */
            _EventService.on('countDowning_timerContainer', function (_awardTimeCount) {

                 if(_awardTimeCount){

                    _this.countDownTime(_awardTimeCount);

                 }else{

                     console.error('DetailTimeBlockComponent：没有获取到倒计时间值！')
                 }

            });

            /** 更新倒计模块得期数和剩余时间 */
            _EventService.on('getAwardTimeObject_timerContainer', function(_object){

                 if(_object){

                     $(_this.periodDom).html(_object.nextPeriod+'期');
                     $(_this.surplusDom).html(_object.surplus+'期');

                 }else{

                     console.error('updateCountPeriodAndSurplusDom: 更新倒计模块得期数和剩余时间数据不存在！');
                 }

            })

        },

        /** 把倒计时间渲染到页面 */
        countDownTime: function (_awardTimeCount) {


            var  _this = this;
            /** 切分时间字符串，把00:00切分成数组 */
            var  _awardTimeArray = ('' + _awardTimeCount).SecondsToddhhmmss().split(':');

            $(this.timeTemp).hide();
            $(this.timeBlock).show();

            /** 判断时间数组，按需求显示天，时，分，秒 */
            if(_awardTimeArray.length == 4){

                if(_awardTimeArray[0]=='00'){

                    if(_awardTimeArray[1]=='00'){
                        $(this.dayDom).hide();
                        $(this.hourDom).hide();
                        $(this.minuteDom).show();
                        $(this.secondDom).show();
                    }else{
                        $(this.dayDom).hide();
                        $(this.hourDom).show();
                        $(this.minuteDom).show();
                        $(this.secondDom).hide();
                    }
                }else{
                    $(this.dayDom).show();
                    $(this.hourDom).show();
                    $(this.minuteDom).hide();
                    $(this.secondDom).hide();
                }

            }

            $(_this.dayDom).find('.time').html(_awardTimeArray[0]);
            $(_this.hourDom).find('.time').html(_awardTimeArray[1]);
            $(_this.minuteDom).find('.time').html(_awardTimeArray[2]);
            $(_this.secondDom).find('.time').html(_awardTimeArray[3]);

        }


    })

    return DetailTimeBlockComponent;
})
