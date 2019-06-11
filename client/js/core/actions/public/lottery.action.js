define([
    'underscore',
    'jquery',
    'backbone',
    'Date',
    '../../services/request.service',
    '../../services/event.service'
], function(
    _,
    $,
    _Backbone,
    _Date,
    _RequsetService,
    _EventService
) {
    var LotteryAction = {};

    LotteryAction._awardHTMLCallback;
    LotteryAction._awardTimerCallback;
    LotteryAction._issuenoDataCallback;
    LotteryAction._updatePlanCallback;
    
    /**
     * 开奖公共Action
     * @param {*} lotteryCode 
     * @param {*} lotteryType 
     * @param {*} needPlan  是否需要更新plan
     */
    LotteryAction.initialize = function(lotteryCode, lotteryType, needUpdatePlan) {
        this.lotteryCode = lotteryCode;
        this.lotteryType = lotteryType;
        this.needUpdatePlan = needUpdatePlan;

        var _this = this;
        
        
        // 倒计时开始
        _EventService.on('countDowning_timerContainer', function(time) {
            var _digitTime = time.toString().SecondsToddhhmmss().split(':');
            var _timer = '';

            if(parseInt(_digitTime[0]) > 0) {
                _timer = '<b>' + _digitTime[0] + '</b><i>天</i><b>'+ _digitTime[1] +'</b><i>时</i>';
            } else if(parseInt(_digitTime[1]) > 0) {
                _timer = '<b>' + _digitTime[1] + '</b><i>时</i><b>'+ _digitTime[2] +'</b><i>分</i>';
            } else {
                _timer = '<b>' + _digitTime[2] + '</b><i>分</i><b>'+ _digitTime[3] +'</b><i>秒</i>';
            }
            $('.timeBlock .time').html(_timer);
        });

        // 获取下一个期的期号和时间
        _EventService.on('getAwardTimeObject_timerContainer', function(_object){
            _this.nextPeriod = _object.nextPeriod;
            $('.next-period').html(_this.nextPeriod + '期');
            if(_object.originTime) {
                var _date = (new Date(_object.originTime.replace(/-/g, '/'))).format('MM-dd hh:mm');
                $('#lotteryTimerTime').html(_date);
            }
            
        });

        // 倒计时完成
        _EventService.on('complete_timerContainer', function() {
            $('.beProgressing').show();
            $('.preterite').hide();
            $('.current-period').html(_this.nextPeriod);
        })

        // 获取到开奖结果
        _EventService.on('lotteryResults_timerComponent', function(result){
            $('.beProgressing').hide();
            $('.preterite').show();

            LotteryAction.getAwardHTML(function(data){
                _EventService.emit('awardHTML_lotteryAction', data);

                if(LotteryAction.needUpdatePlan) {
                    // 开奖之后30s获取追号数据
                    setTimeout(function() {
                        LotteryAction.updatePlan(function(planData){
                            _EventService.emit('awardPlanHTML_lotteryAction', planData);
                        });
                    }, 30000 + Math.random())
                }
            });

        });

        // 数字奖查询
        _EventService.on('digitQuery_historyContainer', function(option){
            LotteryAction.getAwardHTML(function(data){
                _EventService.emit('awardDigitHTML_lotteryAction', data);
            }, option.year, option.day);
        }); 

        // 数字彩导出
        _EventService.on('digitExport_historyContainer', function(option){
            window.open('/api/' + _this.lotteryType + '/' + _this.lotteryCode + '/export/' + option.type + '/' + option.year); 
        });

        _EventService.on('asyncSuccess_awardHTML',function(_resultData) {
            _this._awardHTMLCallback(_resultData);
        });

        _EventService.on('asyncSuccess_awardTimer',function(_resultData) {
            _this._awardTimerCallback(_resultData);
        });

        _EventService.on('asyncSuccess_issuenoData',function(_resultData) {
            _this._issuenoDataCallback(_resultData);
        });

        _EventService.on('asyncSuccess_updatePlan',function(_resultData) {
            _this._updatePlanCallback(_resultData);
        });
    }

    /**
     * 获取开奖html
     * @param {function} _callBack 
     * @param {*} date 可选 
     * @param {*} day 可选，如果传了则会走digit
     */
    LotteryAction.getAwardHTML = function(_callBack, date, day) {
        if(typeof(_callBack) != 'function'){
            console.error('getAwardHTML：请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                date: date,
                t: Math.random()
            }

            // 是否存在传递了day
            if(day) {
                parameter.year = date;
                parameter.day = day;
            }
        	
            LotteryAction._awardHTMLCallback = _callBack;
            _RequsetService.requestGet('/' + this.lotteryType + '/' + this.lotteryCode + '/indexPage', parameter, 'asyncSuccess_awardHTML');
        }
    }

    /**
     * 更新追号计划
     * @param {*} _callBack 
     */
    LotteryAction.updatePlan = function(_callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('getAwardHTML：请求数据的参数不正确，_callBack不是函数类型');
        } else {
            var parameter = {
                lotteryCode: this.lotteryCode,
                t: Math.random()
            }

            LotteryAction._updatePlanCallback = _callBack;
            _RequsetService.requestGet('/plan/updatePlan', parameter, 'asyncSuccess_updatePlan');
        }
    }

    /**
     * 获取开奖结果
     * @param {*} _callBack 
     */
    LotteryAction.getAwardResult = function(_callBack) {
        if(typeof(_callBack) != 'function'){
            console.error('getAwardResult：请求数据的参数不正确，_callBack不是函数类型');
        }else{

            var parameter = {
                t: Math.random()
            }
        	
            LotteryAction._awardTimerCallback = _callBack;
            _RequsetService.requestGet('/lottery/' + this.lotteryCode + '/getawarddata', parameter, 'asyncSuccess_awardTimer');
        }
    }

    /**
     *  获取数字彩详情得数据;
     */
    LotteryAction.getIssuenoData = function (_issueno,  _callBack) {

        if(_issueno == undefined || typeof(_issueno) != 'number'){
            console.error('getIssuenoData：请求数据的参数不正确，_issueno不是数字类型');
            return;
        }

        if(typeof(_callBack) != 'function'){
            console.error('getIssuenoData：请求数据的_callBack参数不正确，_callBack不是函数类型');
            return;
        }

        var parameter = {
                t: Math.random(),
                issueno: _issueno
        }

        LotteryAction._issuenoDataCallback = _callBack;
        _RequsetService.requestGet('/' + this.lotteryType + '/' + this.lotteryCode +  '/getawardinfobyissueno', parameter, 'asyncSuccess_issuenoData');

    }

    /**
     * 正在开奖结果获取
     * @param {string} lotteryCode 
     */
    LotteryAction.loopResult = function(nowPeriod) {
        var _this = this;
        var _timer = setInterval(function() {
            _this.getAwardResult(function(result) {
                if(result.period == nowPeriod) {
                    window.clearInterval(_timer);
                    _this.getAwardHTML(function(data) {
                        _EventService.emit('awardHTML_lotteryAction', data);
                    });
                }
            });
        }, 3000+parseInt(Math.floor(Math.random()*5+1))*1000);
    }

    return LotteryAction;
    
});