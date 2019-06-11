/** ================================================
 *
 *                    首页切换开奖模块组件
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

    var  LotteryListComponent = _Backbone.View.extend({

        el: '#lotteryList',
        tab: '#tab',
        content: '#content',
        lis: '#content .lis',
        lnLi: '#content .lis .ln-li',
        lnli: '.ln-li',
        events: {
            'mouseenter #tab a' : 'handleMouseEnterTab'
        },
        /**
         *  构造函数;
         */
        initialize: function () {

            var _this = this;

            /**
             * 定义一个临时数组，用于存储已经倒计到0得彩种让它不能再去请求 ， 必须更新到新得开奖时间才可以继续执行倒计时里面得函数, 要不然会出现一个彩种倒计完重复去请求几次开奖时间和开奖结果
            */
            _this.tempArray      = [];

            _this.tabCodeString = '';
            _this.tabCodeArray = [];


            /**
             * 先把选中的彩种放到数组中;
             */
            $(_this.lis).each(function (index,item) {
                if($(item).css('display') !='none'){
                    $(item).find(_this.lnli).each(function (liIndex,liItem) {
                        _this.tabCodeArray.push($(liItem).attr('data-code'));
                    })
                }
            })


            /** 启动倒计时 */
            _this.countDown();

            /**
             *  修改倒计时间和倒计期数;
            */
            _EventService.on('changeLottery_LotteryListComponent', function (_result) {

                _this.changeLottery(_result);

            });

            _EventService.on('checkIsAward_LotteryListComponent', function (_param) {

                 _this.checkIsAward(_param);

            });

            /**
             *  把拿回来的模版填充到对应显示的tab的彩种模块
             */
            _EventService.on('changeTabLotteryListAwardState_LotteryListComponent', function (_result) {

                _this.changeTabLotteryListAwardTime(_result);

            });

            /** 更新当前选中这个彩种的开奖期号 */
            _EventService.on('upDatePeriodAttr_lotteryListComponent', function (_result) {

                _this.upDatePeriodAttr(_result);
            })

        },

        /**
         *  把拿回来的模版填充到对应显示的tab的彩种模块
         */
        changeTabLotteryListAwardTime: function (_result) {

            var _this = this;

            $(_this.lis).each(function (index,item) {

                if($(item).css('display') !='none'){

                    $(item).html(_result.resultHtml);

                }
            })

        },

        /** 更新当前选中这个彩种的开奖期号 */
        upDatePeriodAttr: function(_result){

            var _this = this;

            $(_this.content+" .active").find(_this.lnli).each(function (index, item) {

                if(_result.lotteryCode == $(item).attr('data-code')){

                    $(item).attr('data-nextperiod', _result.next.period);

                    return false;
                }

            })

        },

        /**
         *  判断拿到最新开奖结果没
         */
        checkIsAward: function (_param) {

            var _this = this;

            $(_this.content+" .active").find(_this.lnli).each(function (index, item) {

                if(_param.lotteryCode == $(item).attr('data-code')){

                     if($(item).attr('data-nextPeriod') == _param.result.period){

                         $(item).find('.latestIssue i').html(_param.result.period);
                         $(item).find('.beProgressing').html('').hide();
                         $(item).find('.data').html(_this.awardDateFormat(_param.result.awardTime));

                         $(item).find('.newInfoBlock').find('.number').remove();
                         $(item).find('.newInfoBlock').find('.info').after(_this.updateAward(_param.result.result, _param.lotteryCode));


                         /** 关闭这个请求开奖结果得定时器 */
                         if(_param.clearIntervalArray.length > 0){
                             for(var i =0; i<_param.clearIntervalArray.length; i++){

                                 if(_param.clearIntervalArray[i].lotteryCode == _param.lotteryCode){

                                     window.clearInterval(_param.clearIntervalArray[i].clearNum);

                                     _param.clearIntervalArray.splice($.inArray(_param.clearIntervalArray[i],  _param.clearIntervalArray),1);

                                 }

                             }
                         }

                         _EventService.emit('upDateNextPeriod_lotteryListComponent', _param.lotteryCode);

                         /** 跳出each循环 */
                         return false;
                     }
                }

            })

        },


        /**
         *  更新开奖
         * @param _result
         */
        updateAward: function (_result, _lotteryCode) {

            var _resultArray;
            var _ballList;
            var _blueBallList;
            var _classity='';
            var _tempHtml='';
            var _stringHtml='';

            /** 判断有没蓝球 */
            if(/\|/.test(_result)){

                _resultArray = _result.split('|');
                _ballList       = _resultArray[0].split(',');
                _blueBallList = _resultArray[1].split(',');

            }else{

                _ballList = _result.split(',');
            }

            if(_lotteryCode == 'bjpk10' || _lotteryCode =='xyft'){

                _classity = 'pk10'

            }else if(/k3/.test(_lotteryCode)){

                _classity  = 'k3';

            }

            if(typeof(_ballList) == 'object' && _ballList !=undefined){

                if(_ballList.length >0){

                    for(var i=0; i< _ballList.length; i++){

                        if(/k3/.test(_lotteryCode)){

                            _tempHtml+= '<span class="num0' + _ballList[i] + '"></span>';

                        }else if(_lotteryCode == 'bjpk10' || _lotteryCode =='xyft'){

                            if(parseInt(_ballList[i])<10){
                                _tempHtml+= '<span class="num0' + _ballList[i] + '"></span>';
                            }else{
                                _tempHtml+= '<span class="num' + _ballList[i] + '"></span>';
                            }

                        }else{
                            _tempHtml+= '<span class="red">' + _ballList[i] + '</span>';
                        }
                    }
                }
            }

            if(typeof(_blueBallList) == 'object' && _blueBallList !=undefined){

                if(_blueBallList.length >0){

                    for(var  i=0; i< _blueBallList.length; i++){
                        _tempHtml+= '<span class="blue">' + _blueBallList[i] + '</span>';
                    }
                }
            }

            _stringHtml = '<div class="number ' + _classity + '">' + _tempHtml + '</div>';

            return _stringHtml;

        },

        /**
         * 开奖时间格式
         * @param {*} date
         */
        awardDateFormat: function(date){
                if (!date) return '';
                date = date.replace(/-/g, '/');
                date = new Date(date);
                return date.format('MM-dd hh:mm');
        },


        /**
         *  切换顶部得tab
         */
        handleMouseEnterTab: function (_evt) {

            var _this = this;

            var _evtTarget = $(_evt.currentTarget);

            if(_evtTarget.hasClass('more')){
                return;
            }

            _evtTarget.parent().find('a').removeClass('active');

            _evtTarget.addClass('active');

            /** 改变切换内容块得显示 */
            var classity = _evtTarget.attr('data-classity');

            _this.tabCodeString = '';
            _this.tabCodeArray = [];

            $(_this.lis).each(function (index, item) {

                if($(item).attr('data-classity')==classity){

                    $(item).show();
                    $(item).addClass('active');

                    /** 把切换后需要显示得code存放到数组中 */
                    $(item).find(_this.lnli).each(function (liIndex, liItem) {

                        if(liIndex == $(item).find(_this.lnli).length - 1){
                            _this.tabCodeString+= $(liItem).attr('data-code');
                        }else{
                            _this.tabCodeString+= $(liItem).attr('data-code')+',';
                        }

                        _this.tabCodeArray.push($(liItem).attr('data-code'));

                    });

                    //console.log('tab显示得code号');
                    //console.log(_this.tabCodeString);

                    /** 调用这个事件去请求拿到对应tab的彩种得开奖时间 */
                    _EventService.emit('getGroupAwards_LotteryListComponent', _this.tabCodeString);

                    /** 清除所有的开奖倒计时 */
                    _EventService.emit('clearIntervalArray_LotteryListComponent');


                }else{

                    $(item).hide();
                    $(item).removeClass('active');

                    $(item).find(_this.lnli).each(function (liIndex, liItem) {

                        $(liItem).find('.time').attr('data-time','');
                        $(liItem).find('.time').html('<span><b>--</b><i>--</i></span>');

                    })

                }

            })

        },

        /**
         *  修改倒计时间和倒计期数;
         */
        changeLottery: function (_result) {

            var _this = this;
            var _lotteryCode = _result.lotteryCode;

            if(_result == undefined){
                console.error('changeLottery：返回得数据有问题！');
                return;
            }

            $(_this.content+" .active").find(_this.lnli).each(function (index, item) {

                 if($(item).attr('data-code')== _lotteryCode){

                     $(item).find('.time').attr('data-time', _result.awardTimeInterval);

                     $(item).find('.beProgressing').html('第'+_result.current.period+'期正在开奖.....').fadeIn(600);

                     /** 删除临时数组中保存得这个彩种名 */
                     if($.inArray(_lotteryCode, _this.tempArray) != -1){

                         _this.tempArray.splice($.inArray(_lotteryCode, _this.tempArray),1);

                     }

                     return false;

                 }

            })

            return;

        },

        /**
         *  启动倒计时;
         */
        countDown: function () {

            var _this = this;

            var _lock = false;

            window.setInterval(function () {

                $(_this.content+" .active").find(_this.lnli).each(function (index, item) {

                     var _time;
                     if($(item).find('.time').attr('data-time') != ''){
                         _time = parseFloat($(item).find('.time').attr('data-time'));
                     }else{
                         _time = undefined;
                     }
                     var _lotteryCode = $(item).attr('data-code');

                    /** 如果是tab显示得彩种，才倒计，否则则不倒计 */
                    if($.inArray(_lotteryCode, _this.tabCodeArray) != -1 && _time !=undefined){

                        if(_time <= 0){

                            $(item).find('.time').attr('data-time', '');

                            $(item).find('.dayDom').html('<b>00</b><i>天</i>');
                            $(item).find('.hourDom').html('<b>00</b><i>时</i>');
                            $(item).find('.minuteDom').html('<b>00</b><i>分</i>');
                            $(item).find('.secondDom').html('<b>00</b><i>秒</i>');


                            /**
                             *   把这个彩种名存到临时数组中，避免重复请求开奖时间，因为当00:00得时候，会请求开奖时间，但是这个是一个异步请求，
                             *   这个时候倒计时每一秒刷新一次，很可能会请求了好几次开奖时间和开奖结果，为了避免这个问题做这个处理;
                             */
                            if($.inArray(_lotteryCode,  _this.tempArray) == -1){

                                _this.tempArray.push($(item).attr('data-code'));


                                /** 请求开奖时间 */
                                if(_lock == false){

                                    /** 延时一下，避免请求同时进行被覆盖调 ,（为啥要延迟那么多次呢，因为开奖时间有时候会和下面的videoList组件的开奖时间一致，导致事件出现混乱，会无缘无故没筛选的彩种也进行请求开奖结果了，所以没办法才多延时一点点，错开同时请求开奖时间导致的问题）*/
                                   _EventService.emit('getAwardTime_lotteryListComponent', _lotteryCode);

                                   _lock = true;

                                   window.setTimeout(function () {
                                         _lock = false;
                                    }, 600)


                                } else {
                                    window.setTimeout(function () {
                                        _EventService.emit('getAwardTime_lotteryListComponent', _lotteryCode);
                                    },1000)
                                }


                            }


                        }else{

                            /** 因为是异步的过程，当开奖结果还没更新换掉data-time的时候，不让它任何减少的操作 */
                            if($(item).find('.time').attr('data-time') !='' ){

                                _time--;

                                $(item).find('.time').attr('data-time', _time);

                                var  _awardTimeArray = (''+_time).SecondsToddhhmmss().split(':');

                                /** 判断时间数组，按需求显示天，时，分，秒 */
                                if(_awardTimeArray.length == 4){

                                    if(_awardTimeArray[0]=='00'){

                                        if(_awardTimeArray[1]=='00'){
                                            $(item).find('.dayDom').hide();
                                            $(item).find('.hourDom').hide();
                                            $(item).find('.minuteDom').show();
                                            $(item).find('.secondDom').show();
                                        }else{
                                            $(item).find('.dayDom').hide();
                                            $(item).find('.hourDom').show();
                                            $(item).find('.minuteDom').show();
                                            $(item).find('.secondDom').hide();
                                        }
                                    }else{
                                        $(item).find('.dayDom').show();
                                        $(item).find('.hourDom').show();
                                        $(item).find('.minuteDom').hide();
                                        $(item).find('.secondDom').hide();
                                    }
                                }

                                $(item).find('.dayDom').html('<b>'+_awardTimeArray[0]+'</b><i>天</i>');
                                $(item).find('.hourDom').html('<b>'+_awardTimeArray[1]+'</b><i>时</i>');
                                $(item).find('.minuteDom').html('<b>'+_awardTimeArray[2]+'</b><i>分</i>');
                                $(item).find('.secondDom').html('<b>'+_awardTimeArray[3]+'</b><i>秒</i>');
                            }

                        }


                    /** 否则是在tab不可见区域 */
                    }else{

                        $(item).find('.time').attr('data-time', '');

                        $(item).find('.dayDom').html('<b>00</b><i>天</i>');
                        $(item).find('.hourDom').html('<b>00</b><i>时</i>');
                        $(item).find('.minuteDom').html('<b>00</b><i>分</i>');
                        $(item).find('.secondDom').html('<b>00</b><i>秒</i>');

                    }

                })

            },1000)

        }


    })

    return LotteryListComponent;

})