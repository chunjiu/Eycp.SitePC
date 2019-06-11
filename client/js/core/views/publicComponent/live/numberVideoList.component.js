/** ================================================
 *
 *                        开奖直播数字彩倒计组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'String',
    'backbone',
    '../../../services/event.service'
], function (
    _,
    $,
    _String,
    _Backbone,
    _EventService
) {

    var NumberVideoListComponent = _Backbone.View.extend({

        el: '#numberVideoList',
        id: '#numberVideoList',
        countDownTime: '.countDownTime',
        issue: '.issue',
        textBtn: '.textBtn',
        timeText: '.timeText',
        initialize : function () {

            var _this  = this;

            _this.time = 1000;
            _this.timeCountArray = [];
            _this.isRquest = false;

            /** 监听开启倒计时 */
            _EventService.on('startCountDown_NumberVideoListComponent', function () {
                _this.countDown();
            });

            /** 刷新倒计时时间 */
            _EventService.on('refresh_numberVideoComponent', function (_result) {
                _this.refresh(_result);
            });
        },

        /**
         *  当倒计完成后，重新刷新该彩种;
         */
        refresh: function (_result) {

            var _this = this;

            if(_result){

                $(_this.id).find('li').each(function (index, item) {

                     if(_result.lotterycode == $(item).attr('data-lotterycode')){

                         $(item).find(_this.issue).html(_result.next.period+"期");
                         $(item).find(_this.countDownTime).html((_result.awardTimeInterval).SecondsTohhmmss());
                         $(item).find(_this.countDownTime).attr('data-time', _result.awardTimeInterval);

                         /** 重新给这个倒计完的彩种赋值新的时间 */
                         _this.timeCountArray[index] = _result.awardTimeInterval;

                         _this.isRquest = false;

                         $(item).find(_this.textBtn).show();
                         $(item).find(_this.timeText).hide();

                          return false;
                     }

                })

            }else{
                console.error('refresh：返回来的数据不能为空！')
            }

        },

        /**
         *  开启所有倒计时
         */
        countDown: function () {

            var _this = this;

            var countObject = $(_this.id).find('li '+ _this.countDownTime);

            /**
             *  倒计右边的视频列表;
             */
            countObject.each(function (index, item) {

                _this.timeCountArray.push(parseFloat($(item).attr('data-time')));
            })

            var clearInterval = window.setInterval(function () {


                /** 这里发出一个事件，实时得去检测一下上面得高频彩有没出现00:00的情况（因为数字彩一般很久很久才开奖一次，因此可以利用数字彩得倒计时来实时检查一下高频得倒计有没出现异常）*/
                _EventService.emit('observer_numberVideoComponent');

                countObject.each(function (index, item) {

                    /** 当其中一个倒计完 */
                    if(('' + _this.timeCountArray[index]).SecondsTohhmmss() == '00:00:00' && _this.isRquest == false){

                        _this.isRquest = true;

                        $(item).parent().parent().find(_this.textBtn).hide();
                        $(item).parent().parent().find(_this.timeText).show();
                        $(item).html('00:00:00');
                        _this.timeCountArray[index] = 0;

                        /** 不要太频繁的去请求 */
                        window.setTimeout(function () {

                            /** 发出倒计完成事件 */
                            _EventService.emit('countDownSuccess_numberVideoComponent', $(item).attr('data-lotterycode'));

                        },5000);


                    }else if(_this.isRquest == false){

                        $(item).parent().find(_this.textBtn).show();
                        $(item).parent().find(_this.timeText).hide();

                        _this.timeCountArray[index]--;
                        $(item).html(('' + _this.timeCountArray[index]).SecondsTohhmmss());
                    }

                })

            },_this.time);

        }


    })

    return NumberVideoListComponent;

})