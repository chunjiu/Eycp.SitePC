/** ================================================
 *
 *                    首页视频列表模块组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'String',
    'Date',
    'backbone',
    '../../../services/event.service',
], function (
    _,
    $,
    _String,
    _Date,
    _Backbone,
    _EventService
) {


    var VideoListComponent = _Backbone.View.extend({

        el: '#videoList',
        id: '#videoList',
        btnL: '#btnL',
        btnR: '#btnR',
        events: {
            'click #btnL': 'handleClickBtnL',
            'click #btnR': 'handleClickBtnR'
        },
        /** 构造函数 */
        initialize: function () {

            var _this = this;

            _this.lock = false;

            _this.countDown();

            /** 更新开奖号码和时间 */
            _EventService.on('changeLottery_VideoListComponent', function (_param) {

                 _this.update(_param.code, _param.result);

            });


            /** 每当点击左右切换的时候，就会请求一个新的模块填充新插入来的li内 */
            _EventService.on('appendVideo_VideoListComponent', function (_result) {

                 _this.appendVideo(_result);

            });

        },

        /**
         *  更新插入视频模块;
         */
        appendVideo: function (_result) {

            var _this = this;

            if(_result == undefined){
                console.error('更新插入的视频模块为空！');
                return;
            }

            $(_this.id).find('li').each(function (index, item) {

                if(index <= 2){

                    if($(item).attr('data-code') == _result.lotteryCode){

                        $(item).html(_result.resultHtml);
                        _this.lock = false;

                        return false;
                    }

                }else{

                    return false;

                }
            })

        },

        /**
         *  更新视频列表得开奖时间和号码;
         */
        update: function (_lotteryCode, _result) {

            var _this = this;

            $(_this.id).find('li').each(function (index, item) {

                 if($(item).attr('data-code')==_lotteryCode){

                     $(item).find('.issue').html(_result.next.period+'期');
                     $(item).find('.countDownTime').attr('data-time', _result.awardTimeInterval);

                     return false;
                 }

            })

        },


        /**
         *   倒计时;
         */
        countDown: function () {

            var _this = this;

            window.setInterval(function () {

                $(_this.id).find('li').each(function (index, item) {

                    if(index <=2){
                        var _countDownTime = $(item).find('.countDownTime');

                        var _time = parseFloat(_countDownTime.attr('data-time'));

                        if(_time <= 0){

                            _countDownTime.attr('data-time', 0);

                            _countDownTime.html('00:00');

                            $(item).find('.textBtn').hide();
                            $(item).find('.timeText').show();

                            /** 请求开奖时间 (延时3秒，避免和上面的开奖倒计模块同时请求起冲突)*/
                            window.setTimeout(function () {
                                _EventService.emit('getAwardTime_videoListComponent', $(item).attr('data-code'));
                            },3000);

                        }else{

                            $(item).find('.textBtn').show();
                            $(item).find('.timeText').hide();

                            if(_countDownTime.attr('data-time') !=''){
                                _time--;
                                _countDownTime.attr('data-time', _time);
                                var  _awardTimeArray = (''+_time).SecondsToddhhmmss().split(':');
                                _countDownTime.html(_awardTimeArray[2]+':'+_awardTimeArray[3]);
                            }

                        }
                    }else{
                        return false;
                    }

                })

            },1000)

        },

        /**
         *  左按钮点击事件;
         */
        handleClickBtnL: function () {

            var _this = this;

            if(_this.lock == true){
                return;
            }

            _this.lock = true;

            var _width = $(_this.id).find('li').eq(0).outerWidth();
            var _num   = $(_this.id).find('li').length;


            var tempDom = $(_this.id).find('li').eq(_num - 1);
            $(_this.id).find('li').eq(_num - 1).remove();
            $(_this.id).find('ul').prepend(tempDom);
            $(_this.id).find('li').eq(0).css({'margin-left': -(_width)});

            $(_this.id).find('li').eq(0).stop(true,false).animate({'margin-left': 0}, 300, function () {

                $(_this.id).find('li').each(function (index, item) {

                    /** 前3个必定是active */
                    if(index <= 2){
                        $(item).addClass('active');
                    }else{
                        $(item).removeAttr('style');
                        $(item).removeClass('active');
                        $(item).find('.countDownTime').html('00:00');
                        $(item).find('.countDownTime').attr('data-time','');
                        $(item).find('.issue').html('---期');
                        $(item).find('.textBtn').show();
                        $(item).find('.timeText').hide();
                    }
                })

                _EventService.emit('requestVideo_VideoListComponent', $(_this.id).find('li').eq(0).attr('data-code'));

            })

        },

        /**
         *   右按钮点击事件;
         */
        handleClickBtnR: function () {


            var _this = this;

            if(_this.lock == true){
                return;
            }

            _this.lock = true;

            var _width = $(_this.id).find('li').eq(0).outerWidth();

            $(_this.id).find('li').eq(0).stop(true,false).animate({'margin-left': -(_width)}, 300, function () {

                var tempDom = $(_this.id).find('li').eq(0).removeAttr('style').removeClass('active');
                $(_this.id).find('li').eq(0).remove();
                $(_this.id).find('ul').append(tempDom);

                $(_this.id).find('li').each(function (index, item) {

                    /** 前3个必定是active */
                    if(index <= 2){

                        $(item).addClass('active');

                    }else{

                        $(item).removeClass('active');
                        $(item).find('.countDownTime').html('00:00');
                        $(item).find('.countDownTime').attr('data-time','');
                        $(item).find('.issue').html('---期');
                        $(item).find('.textBtn').show();
                        $(item).find('.timeText').hide();
                    }
                })

                _EventService.emit('requestVideo_VideoListComponent', $(_this.id).find('li').eq(2).attr('data-code'));

            });


        }

    })

    return VideoListComponent;

})