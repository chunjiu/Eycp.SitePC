/****************************************************************
 *
 *         资讯右方开奖公告设置随机显示开奖公告（需要把这个开奖公告存放在）
 *
 ****************************************************************/
define([
    'jquery',
    'Util',
    'Date',
    'Array',
    '../../../services/event.service',
    '../../../actions/public/getArticleNoticeAndChart.action'
],function (
    $,
    _Util,
    _Date,
    _Array,
    _EventService,
    _GetArticleNoticeAndChartAction
) {

    var ArtcleRightNoticeCookieContainer = {

        initialize: function (_lotteryCode, _isNeedCookie) {

            _lotteryCode = (_lotteryCode != 'undefined' ? _lotteryCode : undefined);

            var _notice = {};
            var _className = '.la-list';


            ArtcleRightNoticeCookieContainer.digitArr = [
                { type: 'dlt',    name: '大乐透' ,    defaultChart: 11},
                { type: 'fc3d',  name: '福彩3D' ,  defaultChart: 1  },
                { type: 'pl3',    name: '排列3' ,    defaultChart: 1  },
                { type: 'pl5' ,   name: '排列5',     defaultChart: 1  },
                { type: 'qlc',    name: '七乐彩' ,   defaultChart: 1  },
                { type: 'qxc',   name: '七星彩' ,   defaultChart: 1  },
                { type: 'ssq',    name: '双色球' ,  defaultChart: 11},
                { type: '11x5', name: '11选5',    defaultChart: 1  },
                { type: 'k3',     name: '快3',        defaultChart: 1  },
                { type: 'kl10',  name: '快乐十分', defaultChart: 1 },
                { type: 'ssc',    name: '时时彩',    defaultChart: 1 }
            ];



            /** 初始化开奖公告action */
            _GetArticleNoticeAndChartAction.initialize();

            var _awardData = JSON.parse($(_className).attr('data-json'));

            /** 需要走cookie这条通道 */
            if(_isNeedCookie == true){

                /** 如果是属于数字彩系列，就不需要走cookie，如果非数字彩系列，就需要走cookie */
                if(this.arrayIsHasCode(ArtcleRightNoticeCookieContainer.digitArr, _lotteryCode) == false){

                    if(_Util.getCookie('notice')){

                        _notice = JSON.parse(_Util.getCookie('notice'));

                    }else{

                        /** 如果没有cookie，先把这个随机的值给填充到公告展示 ，再存进cookie */
                        this.upDataNotice(_className, _awardData[0]);

                        /** 把返回来的走势放到走势列表中，这里取的是cookie中的彩种 */
                        _GetArticleNoticeAndChartAction.getArticleChart(_awardData[0].lotteryCode, function (_result) {

                            $('#chartList').find('.name').html(_awardData[0].lotteryName+"走势图");
                            $('#chartList').find('.ulB').html(_result.trend);
                            $('#chartList').find('.name').attr('href','/chart/'+_awardData[0].lotteryCode+"/"+_result.chartDefultFlot);
                            $('#chartList').find('.more').attr('href','/chart/' +_awardData[0].lotteryCode+"/"+_result.chartDefultFlot);
                        });

                        /** 非数字的话，当前假如没有存在cookie，那么就把随机一个cookie值记录到cookie中 */
                        _Util.setCookie('notice', JSON.stringify({
                            award: $('.la-list').attr('data-json'),
                            time: new Date()
                        }));

                    }


                    if(this.isToday(_notice.time) == true){

                        $(_className).find('.loading').show();
                        $(_className).find('ul').hide();

                        //console.log(JSON.parse(_notice.award)[0].lotteryCode)
                        _GetArticleNoticeAndChartAction.getArticleNotice(JSON.parse(_notice.award)[0].lotteryCode, function (_result) {

                            if(_result){

                                ArtcleRightNoticeCookieContainer.upDataNotice(_className, _result[0]);

                            }else{
                                console.error('超过00：00：00请求回来的开奖公告数据有问题！')
                            }
                        })
                    }

                }else{

                    _notice.award = _awardData;


                }

                /** 更新开奖公告 */
                if(JSON.stringify(_notice) != '{}'){
                    if(typeof(_notice.award) == 'string'){
                        this.upDataNotice(_className, JSON.parse(_notice.award)[0]);
                    }else{
                        this.upDataNotice(_className, _notice.award[0]);
                    }
                }


                /** 更新走势列表 */
                if(_isNeedCookie){

                    var _noticeAward;

                    if(typeof(_notice.award) == 'string'){

                        _noticeAward = JSON.parse(_notice.award);

                    }else{

                        _noticeAward = _notice.award;
                    }

                    this.upDataChart($('#chartList'), _noticeAward[0].lotteryCode);
                }else{
                    this.upDataChart($('#chartList'), _lotteryCode);
                }



            /** 不需要走cookie这条通道 */
            }else{


                if(ArtcleRightNoticeCookieContainer.digitArr.Contains(_lotteryCode) == false){

                    this.upDataNotice2(_className, $(_className).attr('data-award'));

                }else{

                    this.upDataNotice(_className, _awardData[0]);
                    this.upDataChart($('#chartList'), _lotteryCode);

                }

            }
        },


        /**
         *   判断code是否存在数组对象中
         */
        arrayIsHasCode: function (_arr, _code) {

            if(_arr && typeof(_arr) == 'object' && _code && typeof(_code) == 'string'){


                for(var i=0; i<_arr.length; i++) {

                    if(_arr[i].type == _code){
                        return true;
                    }

                }

                return false;

            }else{
                console.error('arrayIsHasCode: 参数有问题！');
                return false;
            }

        },


        /**
         *  更新走势列表
         */
         upDataChart: function (_chartList, _lotteryCode) {

            var _digitArr = ArtcleRightNoticeCookieContainer.digitArr;

            var _notice = JSON.parse(_Util.getCookie('notice'));
            var _awardData   = JSON.parse(_notice.award)[0];
            var _lotteryName= _awardData.lotteryName;

            var _name = _lotteryName;
            var _code = _awardData.lotteryCode;

             /** 选了全部或者其他 */
            if(_lotteryCode == 'other' || _lotteryCode == '0' || _lotteryCode == undefined){

                /** 把返回来的走势放到走势列表中，这里取的是cookie中的彩种 */
                _GetArticleNoticeAndChartAction.getArticleChart(_code, function (_result) {

                    _chartList.find('.name').html(_name+"走势图");
                    _chartList.find('.ulB').html(_result.trend);
                    _chartList.find('.name').attr('href','/chart/'+_code+"/"+_result.chartDefultFlot);
                    _chartList.find('.more').attr('href','/chart/'+_code+"/"+_result.chartDefultFlot);
                });

            }else{

                    _digitArr.forEach(function (_val,_index,_arr) {

                        if(_val.type == _lotteryCode){

                            _GetArticleNoticeAndChartAction.getArticleChart(_val.type, function (_result) {

                                _chartList.find('.name').html(_val.name+"走势图");
                                _chartList.find('.ulB').html(_result.trend);
                                _chartList.find('.name').attr('href','/chart/'+_val.type+"/"+_result.chartDefultFlot);
                                _chartList.find('.more').attr('href','/chart/'+_val.type+"/"+_result.chartDefultFlot);
                            });

                        }

                    })

            }
         },

        /**
         *  更新开奖公告，这个是读取data-award中的json
         */
        upDataNotice2:function (_className, _awardData) {

            var _digitArr =  ArtcleRightNoticeCookieContainer.digitArr;

            var _noticeAward;

            var _awardWeek;

            /** 判断当前是否为数字彩 */
            var _isDigit = false;

            if(typeof(_awardData) == 'string'){
                _noticeAward = JSON.parse(_awardData);
            }else{
                _noticeAward = _awardData;
            }

            var _lotteryName = $(_className).attr('data-lotteryName');
            var _defaultChart;

            /**  判断当前选择的彩种类型 */
            var  _lotteryClassify = this.getlotteryClassify(_noticeAward.lotteryCode);

            if(ArtcleRightNoticeCookieContainer.arrayIsHasCode(_digitArr, _noticeAward.lotteryCode)){

                _awardWeek     =  this.getWeek(_noticeAward.awardTime);
                _isDigit             =  true;

            }else{

                _awardWeek     =  '';
                _isDigit             =  false;
            }

            for(var i =0; i< _digitArr.length; i++){

                if(_digitArr[i].type == _lotteryClassify){

                    _defaultChart = _digitArr[i].defaultChart;
                }
            }


            $(_className).find('.textB a').html(_lotteryName);
            $('#chartList .name').html(_lotteryName+"走势图");

            $('#chartList .name').attr('href','/chart/'+_noticeAward.lotteryCode+'/'+_defaultChart);
            $('#chartList .more').attr('href','/chart/'+_noticeAward.lotteryCode+'/'+_defaultChart);


            $(_className).find('li').attr('onclick','javascript:window.open("/'+(_isDigit ? 'digit' : 'high')+'/'+_noticeAward.lotteryCode+'", "_blank")');
            $(_className).find('.textB a').attr('href','/'+(_isDigit ? 'digit' : 'high')+'/'+_noticeAward.lotteryCode);
            $(_className).find('.issue').html(''+_noticeAward.period+'期&nbsp;'+(_awardWeek ? _awardWeek: '')+'&nbsp;'+this.formatDateTime(_noticeAward.awardTime, "MM-dd hh:mm"));
            $(_className).find('.public-number-ball').remove();
            if(_noticeAward.lotteryCode=='fc3d'){
                $(_className).find('li').append(this.digitHistory3DIndex(_noticeAward.result));
            }else{
                $(_className).find('li').append(this.digitHistoryIndex(_noticeAward.result));
            }
            $(_className).find('.loading').hide();
            $(_className).find('ul').show();

        },


        /**
         *  更新开奖公告
         */
         upDataNotice: function (_className, _noticeAward) {

            var _isDigit             =  false;

            if(ArtcleRightNoticeCookieContainer.arrayIsHasCode(ArtcleRightNoticeCookieContainer.digitArr, _noticeAward.lotteryCode)){

                _isDigit             =  true;
            }else{

                _isDigit             =  false;
            }


            $(_className).find('.textB a').html(_noticeAward.lotteryName);
            $(_className).find('li').attr('onclick','javascript:window.open("/'+(_isDigit ? 'digit' : 'high')+'/'+_noticeAward.lotteryCode+'", "_blank")');
            $(_className).find('.textB a').attr('href','/'+(_isDigit ? 'digit' : 'high')+'/'+_noticeAward.lotteryCode+'');
            $(_className).find('.issue').html(''+_noticeAward.issueNo+'期&nbsp;'+_noticeAward.week+'&nbsp;'+this.formatDateTime(_noticeAward.awardDatetime, "MM-dd hh:mm"));
            $(_className).find('.public-number-ball').remove();

             if(_noticeAward.lotteryCode=='fc3d'){
                $(_className).find('li').append(this.digitHistory3DIndex(_noticeAward.result));
            }else{
            $(_className).find('li').append(this.digitHistoryIndex(_noticeAward.awardResult));
            }
            $(_className).find('.loading').hide();
            $(_className).find('ul').show();

        },


        /**
         *  返回彩种类型
         */
         getlotteryClassify: function(_lotteryCode){

            /**  判断当前选择的彩种类型 */
            var  _lotteryClassify;

            if((/11x5/).test(_lotteryCode)){

                _lotteryClassify = '11x5';

            }else if((/k3/).test(_lotteryCode)){

                _lotteryClassify = 'k3';

            }else if((/kl10/).test(_lotteryCode)){

                _lotteryClassify = 'kl10'

            }else if((/ssc/).test(_lotteryCode)){

                _lotteryClassify = 'ssc'

            }else if((/xync/).test(_lotteryCode)){

                _lotteryClassify = 'kl10'

            }else{

                _lotteryClassify = _lotteryCode;

            }

            return  _lotteryClassify;

         },


        /**
         * 是否为Null
         * @param object
         * @returns {Boolean}
         */
          isNull: function(object){
                if(object == null || typeof object == "undefined"){
                    return true;
                }
                return false;
           },


    /**
     * 根据日期字符串获取星期几
     * @param dateString 日期字符串（如：2016-12-29），为空时为用户电脑当前日期
     * @returns {String}
     */
        getWeek: function(dateString){
            var date;
            if(this.isNull(dateString)){
                date = new Date();
            }else{
                var dateArray = dateString.split("-");
                date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
            }
            return "星期" + "日一二三四五六".charAt(date.getDay());
          },



        /**
         * 判断是否今天
         * @param _str  时间戳
         * @return {boolean}
         */
        isToday: function(_str) {
            if (new Date(_str).toDateString() === new Date().toDateString()) {
                //今天
                console.log('今天');
                return true;
            } else if (new Date(_str) < new Date()){
                //之前
                console.log('之前');
                return false;
            }
        },


        /**
         * 数字彩首页列表
         */
        digitHistoryIndex:function(_resultData){

            if (!_resultData) return '';
            let _tmp = _resultData.split('|'),
                _red = _tmp[0].split(','),
                _blue = _tmp[1] ? _tmp[1].split(',') : [],
                _result = [];

            // 红球
            _red.forEach(item => {
                _result.push(`<span class="red">${item}</span>`);
            });


            // 蓝球
            _blue.forEach(item => {
                _result.push(`<span class="blue">${item}</span>`);
            })

            return `<div class="public-number-ball">${_result.join('')}</div>`;
      },

      digitHistory3DIndex:function(_resultData){

        if (!_resultData) return '';
           let _tmp = _resultData.split('|'),
            _red = _tmp[0] ? _tmp[0].split(',') : [],
            _blue = _tmp[1] ? _tmp[1].split(',') : [],
            _result = [];

        if(_red.length>1){
            // 红球
            _red.forEach(item => {
                _result.push(`<span class="red">${item}</span>`);
            });
        }else{
            _result.push(`<span class="red">--</span><span class="red">--</span><span class="red">--</span>`);
        }
         if(_blue.length>1){
            // 蓝球
            _result.push('<span class="testNumber">试机号：<i class="font-red">'+_blue.join(" ")+'</i></span>');
        }

        return `<div class="public-number-ball">${_result.join('')}</div>`;
      },

        /**
         * 日期 格式处理 format: yyyy-MM-dd hh:mm:ss
         * @param {*} date
         */
       formatDateTime:function(_date,_format){
            if(!_date) return '';
            _date = _date.toString().replace(/-/g, '/');
            return (new Date(_date)).format(_format);
       }


    }

    return ArtcleRightNoticeCookieContainer;
})