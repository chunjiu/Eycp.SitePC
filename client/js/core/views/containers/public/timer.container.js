/****************************************************************
 *
 *                      倒计时容器（存放倒计时逻辑业务）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    '../../../services/event.service',
    '../../publicComponent/timer.component',
    '../../../actions/public/timer.action'
], function(
    _,
    $,
    _Backbone,
    _String,
    _EventService,
    _TimerComponent,
    _TimerAction
) {

    var _this;

    var TimerContainer = {

        /** 初始化 */
        initialize: function (_lotteryCode, _awardType) {

            _this = this;

            /** 是否去拿开奖数据 , 默认情况下得需要去拿得，但是也有特殊得情况是不需要去拿开奖数据;*/
            _this.isGetAwardData = true;

            if(!_lotteryCode || typeof(_lotteryCode) !='string'){

                console.warn('TimerContainer：_lotteryCode参数不正确, 可能为空，可能不是字符串类型，但是允许为空');
            }

            if(!_awardType || typeof(_awardType) !='string'){

                console.error('TimerContainer：_awardType参数不正确');
                return;
            }

            /** 开奖彩种 */
            _this.lotteryCode = _lotteryCode;

            /** 开奖类型 */
            _this.awardType  = _awardType;

            /** 是否正在开奖 */
            _this.awarding    = false;

            /** 延时秒 */
            _this.awardWait  = 0;

            /** 开奖需要延迟的倒计速度 */
            _this.awardWaitSpeed = 1000;

            /** 开奖结果倒计时，为了减少服务器请求频率，所以这个要比awardWaitSpeed慢一点 */
            _this.awardResultWaitSpeed = 3000+parseInt(Math.floor(Math.random()*5+1))*1000;

            /** 下期期号数 */
            _this.periodText = 0;


            /** 判断是否返回得是json, 历史开奖都是返回json */
            _this.isGetJson = _this.isReturnJson(_this.awardType);

            /** 初始化action */
            _TimerAction.initialize();

            var  timerComponent = new  _TimerComponent();


            _this.getAwardTime(_this.getAwardTimeCallBack, true);

            /** 监听一个事件，假如有人发送了这个事件，即可改变是否需要拿开奖结果 */
            _EventService.on('isGetAwardData_timerContainer', function (_boolean) {

                 if(_boolean!=undefined && typeof(_boolean) == 'boolean'){

                     _this.isGetAwardData = _boolean;

                     /** 如果为false得话，不能开奖 , 如果想重新变成true，必须等倒计完; */
                     _this.awarding = false;

                 }else{
                     console.error('isGetAwardData：参数不能为空并且必须是布尔类型！');
                 }

            })

        },


        /** 获取到开奖时间后的回调， 这里需要获取开奖数据 */
        getAwardTimeCallBack: function (_awardTimeResult) {

            /************** 这部分代码是拿到开奖时间后才执行的 *****************/
            _EventService.emit('timerCountDown_timerComponent', {
                completeCallBack: _this.completeCallBack,
                countDowningCallBack: _this.countDowningCallBack,
                awardTimeCount:  _awardTimeResult
            });


            _this.timerAwardData(_this.awardWaitSpeed, _this.getResultSuccessCallBack);


        },

        /** 获取到开奖时间后的回调 ，这里不需要获取开奖数据*/
        getAwardTimeCallBack2: function (_awardTimeResult) {

            /************** 这部分代码是拿到开奖时间后才执行的 *****************/
            _EventService.emit('timerCountDown_timerComponent', {
                completeCallBack: _this.completeCallBack,
                countDowningCallBack: _this.countDowningCallBack,
                awardTimeCount:  _awardTimeResult
            });

        },


        /**  正在倒计中得时候，这里监听这个时间去处理你想做得事情 */
        countDowningCallBack: function (_awardTimeCount) {

            // console.log(('' + _awardTimeCount).SecondsTommss());

            /** 这里可以监听正在倒计时候需要执行的代码 */
            _EventService.emit('countDowning_timerContainer', _awardTimeCount);

        },

        /**  倒计完成00:00或者正在开奖中得时候，这里监听这个时间去处理你想做得事情 */
        completeCallBack: function (_awardTimeCount) {

            /** 当正在开奖中的时候就把这个值置为true (注意：这个值必须要倒计完才重新赋值为true)*/
            _this.awarding = true;

            console.log("开奖中, 还有"+_this.awardWait+"秒就更新开奖结果！");

            /**  这里可以监听开奖中时候需要执行的代码 */
            _EventService.emit('complete_timerContainer', _awardTimeCount);

            /** 重新请求开奖时间 */
            _this.getAwardTime(_this.getAwardTimeCallBack2, false);

        },



        /** 当拿到开奖数据时候执行该回调 */
        getResultSuccessCallBack: function (_awardResult) {

            /**  假如是历史开奖类型得，直接返回给前端那边插入一条新数据，假如是html模版类型得话，则（需要再请求一次后台拿渲染出来得html模版） */
            if(_this.isGetJson){

                var result = {
                    type: 'json',
                    result: _awardResult
                }

                /** 拿到开奖结果后立马发送这个事件 */
                _EventService.emit('lotteryResults_timerComponent', result);

            }else{

                var time    =  0;

                /** 如果是冠亚遗漏或者是号码遗漏的都需要延时10秒请求html模版; */
                // if('numberomit' == _this.awardType || 'gyhomit' == _this.awardType || "todaystat" == _this.awardType){
                //
                //     time = 12000;
                // }

                /** 如果非冠亚遗漏或者是号码遗漏的不需要延时10秒请求html模版; */
                window.setTimeout(function () {

                    _TimerAction.requestAwardDataForHtml(_this.lotteryCode,  _this.awardType, function(_resultData) {

                        var  result = {
                            type: 'html',
                            result: _resultData
                        }

                        /** 拿到开奖结果后立马发送这个事件 */
                        _EventService.emit('lotteryResults_timerComponent', result);

                    });

                }, time);

            }

        },


        /**
         * 获取开奖数据
         * @param: 延时得速度
         */
        timerAwardData : function (_awardWaitSpeed, _callBack) {


                    /** 启动开奖结果倒计时 */
                    var _clearInterval = window.setInterval(function () {

                        /** 如果发现正在开奖中的情况 (这里还需要判断一下是否需要获取开奖历史数据！) */
                        if (_this.awarding && _this.isGetAwardData) {

                            /** 那么开始递减延时值，不能马上去服务器取开奖的结果，必须要延时，这个延时页面中会显示正在开奖中 */
                            if (_this.awardWait <= 0) {

                                console.log('=================开始请求服务器拿开奖结果 =========================');

                                /** 先清除一下旧的倒计时对象 */
                                window.clearInterval(_clearInterval);

                                /**
                                 *   再重开一个倒计时，这个倒计时需要延迟请求，不能过于频繁的请求服务器，
                                 *   由于window.setInterval启动后没办法修改时间了，所以这里重新再弄一个倒计时延迟一下请求操作
                                 */
                                var _awardResultClearInterval = window.setInterval(function () {

                                    _TimerAction.requestAwardResult(_this.lotteryCode, function (_resultData) {

                                        if (parseInt(_resultData.period) == _this.nextPeriod) {

                                            /** 重新开始倒计，这个时候要把正在开奖这个变量变为false */
                                            _this.awarding = false;

                                            /** 当拿到最新开奖结果的时候，就需要清除这个拿最新开奖倒计时 */
                                            window.clearInterval(_awardResultClearInterval);

                                            /** 需要重置为最新的期号 */
                                            _this.nextPeriod = _this.nextPeriodNow;
                                            /** 需要重新计时延迟开奖时间 */
                                            _this.awardWait = _this.nextAwardWait;

                                            console.log('=================已经拿到最新开奖结果，重新开始倒计 =========================');

                                            /** 把拿到的开奖结果返回到回调函数中 */
                                            _callBack(_resultData);

                                            _this.timerAwardData(_this.awardWaitSpeed, _this.getResultSuccessCallBack);

                                        }

                                    });

                                }, _this.awardResultWaitSpeed);


                            } else {

                                _this.awardWait--;

                            }
                        }
                    }, _awardWaitSpeed);

           },


        /**
         * 获取开奖时间
         * @param: 参数1，获取开奖时间后的回调函数；
         * @param: 参数2，是否覆盖本来存储的下期旗号，因为倒计时并不会等开奖时候才更新，所以会导致覆盖掉了下期期数
         */
        getAwardTime : function (_resultCallBack, _isCoverageNext) {

            var _this = this;

            _TimerAction.requestAwardTime( _this.lotteryCode ,function (_resultData) {

                /** 拿到开奖时间(描述作为单位)-----注意这个是一个字符串类型，需要转换成浮点型; */
                _this.awardTimeCount = parseFloat(_resultData.awardTimeInterval);
                var _nextPeriod = parseInt(_resultData.next.period);

                if(_isCoverageNext){
                    /**  下期的期数 */
                    _this.nextPeriod = _nextPeriod;

                    /**  开奖延时时间，这个是从服务器端传回来得 ，意思就是开奖得时候，不能马上去拿开奖结果，需要根据这个值进行延时才去取开奖结果 */
                    _this.awardWait = parseInt(_resultData.waitTimeInterval);

                    _this.reloading = false;

                }

                // 需要每次都返回最新的期数给到
                _this.periodText = _nextPeriod.toString();
                // 最新的下一期
                _this.nextPeriodNow = _nextPeriod;
                // 重新获取最新的延迟开奖时间
                _this.nextAwardWait = parseInt(_resultData.waitTimeInterval);

                /** 不够3位补0 */
                if (_this.periodText.length < 3) {
                    _this.periodText = _this.periodText.replace(/\d+/g, function (m) {
                        return "00".substr(m.length - 1) + m;
                    });
                }

                console.log("距" + _this.periodText + "期开奖");

                /** 别的地方可以通过监听这个事件来获取下期的期号 */
                _EventService.emit('getAwardTimeObject_timerContainer',{
                    currentPeriod: _resultData.current.period,
                    nextPeriod:_this.periodText,
                    time: _this.formatTime(_resultData.time),
                    surplus: _resultData.overPeriod,
                    originTime: _isCoverageNext ? '' : _resultData.time
                });

                /** 如果拿到开奖时间后执行回调 */
                if (_resultCallBack){
                    _resultCallBack(_this.awardTimeCount);
                }

            })

        },




        /**
         *  开奖类型
         *  判断开奖类型，假如是历史开奖并且是pk10和幸运农场到历史开奖才请求返回json，其他到彩种全部返回拼接模版;
         */
        isReturnJson: function(_awardType){

            if(_awardType == undefined){

                _this.awardType    = 'other';
                return   false;

                /** 判断是否是历史开奖，因为历史开奖都是返回json数据 */
            }else if(_awardType == 'history'){

                return  true;
            }else if(_this.awardType == 'javascript'){

                //不走服务端模板 直接监听 最新开奖结果 lotteryResults_timerComponent
                return true;

            }else{

               return  false;
            }
        },


        /**
         *  日期格式化;
         */
        formatTime :function(_time){

            if(_time){

                /** 没有空格 */
                if(_time.indexOf(" ") == -1){

                    return _time.replace(/\//g,'-');

                    /** 有空格只要前面得年月日 */
                }else{

                    var timeArr = _time.split(' ');
                    return  timeArr[0].replace(/\//g,'-');
                }

            }else{
                console.error('formatDate: 参数不存在！');
                return;
            }

        }




    }

    return TimerContainer;

})