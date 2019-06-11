/****************************************************************
 *
 *              遗漏详情页容器（存放遗漏详情页所有逻辑）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../../../actions/omission/omission.action',
    '../../../actions/public/lottery.action',
    '../../publicComponent/public/loading.component',
    '../public/timer.container',
    '../../publicComponent/chart/changeState.component',
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _OmissionAction,
    _LotteryAction,
    _LoadingComponent,
    _TimerContainer,
    _ChangeStateComponent
) {


    var OmissionContainer = {

        initialize: function (_lotteryCode, _lotteryClassify,  _flot, _classify, _isAwarding, _nowPeriod) {

            var _this = this;


            /** 初始化 action */
            _OmissionAction.initialize();

            /** 初始化loading组件 */
            var loadingComponent = new _LoadingComponent();

            _TimerContainer.initialize(_lotteryCode, 'history');

            if(_classify == 'local'){

                _LotteryAction.initialize(_lotteryCode, 'digit');

            }else{

                _LotteryAction.initialize(_lotteryCode, _classify);
            }

            if(_isAwarding) {

                _LotteryAction.loopResult(_nowPeriod);
            }


            _this.lotteryCode = _lotteryCode;

            _this.flot = _flot;

            _this.lotteryClassify= _lotteryClassify;

            /** 容器得id */
            _this.containerId = 'areaContainer';

            /** 判断一下是单行多选还是多行单选 */
            if($('#numberBall').attr('ismultilinesingleselection')=='true'){

                _this.screenOmissionType = true;
            }else{

                _this.screenOmissionType = false;
            }


            _this.initEvent();


            /** 监听开完奖事件 */
            _EventService.on('awardHTML_lotteryAction', function(data) {

                $('.public-lotteryLatestInfo').html(data.timer);

                $('.history-body').html(data.index);

                /** 当开完奖拿到最新的数据的时候 , 判断一下自动刷新按钮有没被选中，如果选中则自动刷新，如果没选中则弹出提示窗，让用户自己去刷新图表;*/
                if($('#autoRefresh i').hasClass('active')){

                    /**
                     *  匹配刷新回来的第最新一期的期数是否和顶部的当前期的期数相同，不相同2分钟刷新匹配一次
                     */
                    _this.matchingPeriods(2000*60);


                }else{

                    var _time = 0;

                    if($('#autoRefreshWindow').length == 0){

                        /**
                         *  需要等三分钟才取显示那个自动刷新的弹窗
                         */

                        _time = 1000*60*2

                        window.setTimeout(function () {

                            $('body').append('<div class="eyu200-trendHintBlock" style="z-index: 9999; width: 1000px; top: inherit; bottom: 30px; margin-left: -500px; display: none;" id="autoRefreshWindow">数据已刷新，<a href="javascript:void(0);" id="reloadChart">点击刷新</a></div>');

                            $('#autoRefreshWindow').fadeIn(600);

                        },_time);

                    }
                }
            });


            /** 请求成功 */
            _EventService.on('requestOmissionComplate_omissionContainer',function () {

                if(_this.screenOmissionType){

                     /** 因为快3是双数单选，单数多选 */
                    if(_this.lotteryClassify == 'k3' && _this.flot!=12 && _this.flot !=31 && _this.flot!=32 && _this.flot !=33){

                        _this.screenOmissionNumberOfBallsToK3();

                    }else if(_this.lotteryClassify == 'ssc' && _this.flot ==58){

                        _this.screenOmissionNumberOfBallsToSSC58();

                    }else{

                        _this.screenOmissionNumberOfBalls();
                    }

                }else{

                    /** 筛选遗漏图表 */
                    _this.screenOmission();
                }

                console.log('数据更新完成！');

            });

        },

        /**
         *  绑定事件;
        */
        initEvent: function () {

            var _this = this;


            /**
             *  自动刷新;
             */
            $('body').on('click', '#autoRefresh', function(){
                var _iObj = $(this).find("i");
                if(_iObj.hasClass('active')){

                    _iObj.removeClass('active');

                }else{

                    _iObj.addClass('active');
                }

            })


            $('body').on('click','#reloadChart', function () {
                _this.refreshOmissionData(_this);
            });

            $('body').on('click','#autoRefreshWindow', function () {
                _this.refreshOmissionData(_this);
            });


            /**
             *  请求期数，根据期数的数量请求多少期的开奖结果
             */
            $('body').on('click', '#getPeriodsNumber  .button', function () {

                $(this).parent().find('.button').removeClass('active');

                $(this).addClass('active');

                var _sortType = $('#areaContainer .active').hasClass('top') ? true : false;

                /** 切换期数的时候，需要先进行升序或者降序后才进行筛选 , 因为号码类型要做特殊处理 */
                if($('#areaContainer .active').parents('.thBlock').find('.thName').html() == '号码类型'){

                    _this.refreshOmissionData(_this, function () {

                        $('#areaContainer th i').removeClass('active');
                        $('#areaContainer th .top').removeClass('active');

                        if(_sortType){
                            $('#areaContainer th:first-child').find('.bottom').removeClass('active');
                            $('#areaContainer th:first-child').find('.top').addClass('active');
                        }else{
                            $('#areaContainer th:first-child').find('.top').removeClass('active');
                            $('#areaContainer th:first-child').find('.bottom').addClass('active');
                        }


                    } , (_sortType ? 'asc': 'desc'));

                }else{

                    /** 数据更新完了，假如球有被选中还要进行筛选 */
                    _this.refreshOmissionData(_this);

                }



            })

            /**
             *   排序遗漏图表
             */
            $('body').on('click', '#areaContainer th', function(){

                /** true表示升序排列，false降序排序 */
                var sortType;

                if($(this).find('.thArrow').length == 0){
                    return;
                }

                var activeClass = $(this).find('.active').hasClass('top') ? 'top': 'bottom';

                $('#areaContainer th i').removeClass('active');
                $('#areaContainer th .top').removeClass('active');


                if(activeClass == 'top'){
                    $(this).find('.top').removeClass('active');
                    $(this).find('.bottom').addClass('active');
                    sortType = false;

                }else{
                    $(this).find('.bottom').removeClass('active');
                    $(this).find('.top').addClass('active');
                    sortType = true;
                }

                /**
                 *   由于号码类型是字符串，但是产品也必须进行字符串的排序，所以号码类型单独拿出来通过后台进行排序，前端需要请求后端接口进行排序，排序需要携带sort参数
                 */
                if($(this).find('.thName').html()=='号码类型'){

                    _this.refreshOmissionData(_this, function () {

                        $('#areaContainer th i').removeClass('active');
                        $('#areaContainer th .top').removeClass('active');

                        if(sortType){
                            $('#areaContainer th:first-child').find('.bottom').removeClass('active');
                            $('#areaContainer th:first-child').find('.top').addClass('active');
                        }else{
                            $('#areaContainer th:first-child').find('.top').removeClass('active');
                            $('#areaContainer th:first-child').find('.bottom').addClass('active');
                        }

                    } , (sortType ? 'asc': 'desc'));


                /** 非号码类型的在前端进行排序就可以了 */
                }else{

                    var column = ($(this).index());

                    /** 排序当前列 */
                    _ChangeStateComponent.sortColumn('#areaContainer table',column, sortType);

                    /** 排序后还要进行一次筛选 */
                    _EventService.on('sortComplate_changeStateComponent',function () {

                        if(_this.screenOmissionType){

                            /** 因为快3是双数单选，单数多选 */
                            if(_this.lotteryClassify == 'k3' && _this.flot!=12 && _this.flot !=31 && _this.flot!=32 && _this.flot !=33){

                                _this.screenOmissionNumberOfBallsToK3();

                            }else if(_this.lotteryClassify == 'ssc' && _this.flot == 58){

                                _this.screenOmissionNumberOfBallsToSSC58()

                            }else{

                                _this.screenOmissionNumberOfBalls();
                            }

                        }else{
                            _this.screenOmission();
                        }

                    });

                }

            });


            /**
             * 点击筛选下箭头
             */
            $('body').on('mouseenter', '.toolNumberBlock', function () {

                 var _more = $(this).find('.more');

                 if(_more.hasClass('active')){

                     _more.removeClass('active');

                 }else{

                     _more.addClass('active');
                 }

                $(this).mouseleave(function () {
                    _more.removeClass('active');
                })

            });


            $('body').on('mouseenter', '#areaContainer tbody tr', function () {

                $(this).find('td').css({'background-color': '#fff3a4'})

            })

            $('body').on('mouseleave', '#areaContainer tbody tr', function () {

                $(this).find('td').css({'background-color': ''})

            })


            /**
             *  选择球进行筛选操作
             */
            $('body').on('click','#numberBall .num', function () {

                /** 快3是双数为单选，单数为多选( 非常特殊，这里要注意 ) */
                if(_this.lotteryClassify=='k3' && _this.flot!=12 && _this.flot !=31 && _this.flot!=32 && _this.flot !=33){

                    /** 判断一下当前被点中的球是双数的行还是单数的行 */
                    var _index = $(this).parent().index();

                    /** 一般来说双数放在第一行 */
                    if(_index == 0){

                        if($(this).hasClass('active')){

                            $(this).removeClass('active');

                        }else{

                            $(this).parent().find('.num').removeClass('active');
                            $(this).addClass('active');
                        }

                    /** 这里为单数行，可以多选 */
                    }else{

                        if($(this).hasClass('active')){

                            $(this).removeClass('active');

                        }else{

                            $(this).addClass('active');
                        }

                    }


                    if($('#numberBall .active').length > 0){

                        /** 筛选遗漏图表 (双数单选，单数多选)*/
                        _this.screenOmissionNumberOfBallsToK3();

                    }else{

                        $('#areaContainer table tr').show();
                    }


                /** 时时彩的三星组三单式也需要使用快3中的分隔11，22，33，这种方式筛选 */
                }else if(_this.lotteryClassify=='ssc' && _this.flot==58 ){

                    /** 判断一下当前被点中的球是双数的行还是单数的行 */
                    var _index = $(this).parent().index();

                    /** 一般来说双数放在第一行 */
                    if(_index == 0){

                        if($(this).hasClass('active')){

                            $(this).removeClass('active');

                        }else{

                            $(this).parent().find('.num').removeClass('active');
                            $(this).addClass('active');
                        }

                        /** 这里为单数行，可以多选 */
                    }else{

                        if($(this).hasClass('active')){

                            $(this).removeClass('active');

                        }else{

                            $(this).addClass('active');
                        }

                    }


                    if($('#numberBall .active').length > 0){

                        /** 筛选遗漏图表 (双数单选，单数多选)*/
                        _this.screenOmissionNumberOfBallsToSSC58();

                    }else{

                        $('#areaContainer table tr').show();
                    }

                }else{

                    /** 如果存在多行单选的属性 */
                    if($(this).parents('#numberBall').attr('ismultilinesingleselection')== 'true'){

                        if($(this).hasClass('active')){

                            $(this).removeClass('active');

                        }else{

                            $(this).parent().find('.num').removeClass('active');
                            $(this).addClass('active');
                        }

                        if($('#numberBall .active').length > 0){

                            /** 筛选遗漏图表 (多行单选)*/
                            _this.screenOmissionNumberOfBalls();

                        }else{

                            $('#areaContainer table tr').show();
                        }


                    }else{

                        if($(this).hasClass('active')){

                            $(this).removeClass('active');

                        }else{

                            $(this).addClass('active');
                        }


                        if($('#numberBall .active').length > 0){

                            /** 筛选遗漏图表 */
                            _this.screenOmission();

                        }else{

                            $('#areaContainer table tr').show();
                        }

                    }

                }

            })


            /**
             *  清空筛选球
             */
            $('body').on('click','#clearBall', function () {

                $('#numberBall .num').removeClass('active');

                $('#areaContainer table tr').show();
            });



            $('body').on('mouseover', '.nameBlock a', function() {
                $(this).parent().parent().find('span').css('color', '#e33d3d');
            });

            $('body').on('mouseout', '.nameBlock a', function() {
                $(this).parent().parent().find('span').css('color', '#333333');
            });

        },

        /**
         *    筛选遗漏图表 (双数单选，单数多选) 只针对时时彩的flot=58
         */
        screenOmissionNumberOfBallsToSSC58:function(){


            var _this = this;

            var _ballReg = '';

            // 单选不同于其它规则，先存储两部分值
            var sencArr=[];
            var first="";

            if($('#numberBall .active').length > 0){


                $('#numberBall  .lis').eq(0).find('.active').each(function (index,item) {

                    if(index == 0){
                        _ballReg+='^';
                    }

                    first = $(item).html().substring(0,1);

                });



                 $('#numberBall  .lis').eq(1).find('.active').each(function (index,item) {
                        sencArr.push($(item).html());
                 });


                if(sencArr.length>0){

                        _ballReg="";

                        for (var i = 0; i < sencArr.length; i++) {
                            if(_ballReg.length>0){
                                _ballReg+="|";
                            }
                            if(first.length>0){
                                _ballReg += "("+first+","+first+","+sencArr[i]+")|("+sencArr[i]+","+first+","+first+")";
                            }else{
                                _ballReg +=sencArr[i];
                            }

                        }

                        _ballReg=_ballReg;

                 }else{

                        _ballReg = "("+first+","+first+")";

                 }


                $('#areaContainer table tr td:first-child').each(function (index, item) {

                    /**
                     *    如果匹配到号码类型中存在点中的红球的数字的时候
                     */
                    if(new RegExp(_ballReg,'g').test($(item).html())){

                        $(item).parent().show();
                    }else{
                        $(item).parent().hide();
                    }

                })

            }

        },


        /**
         *    筛选遗漏图表 (双数单选，单数多选)
         */
        screenOmissionNumberOfBallsToK3: function () {

            var _this = this;

            var _ballReg = '';  

            // 单选不同于其它规则，先存储两部分值
            var sencArr=[];
            var first="";

            if($('#numberBall .active').length > 0){


                $('#numberBall  .lis').eq(0).find('.active').each(function (index,item) {

                    if(index == 0){
                        _ballReg+='^';
                    }

                    if(_this.flot==20){
                         first = $(item).html().substring(0,1);
                    }else{
                       _ballReg+= $(item).html()+"#";
                    }

                });

                 if(_this.flot==20){

                    $('#numberBall  .lis').eq(1).find('.active').each(function (index,item) {
                        sencArr.push($(item).html());
                    });


                    if(sencArr.length>0){
                    _ballReg="";
                    for (var i = 0; i < sencArr.length; i++) {
                        if(_ballReg.length>0){
                            _ballReg+="|";
                        }
                        if(first.length>0){
                          _ballReg += "("+first+","+first+","+sencArr[i]+")|("+sencArr[i]+","+first+","+first+")"; 
                        }else{
                         _ballReg +=sencArr[i];  
                        }
                        
                    }
                        _ballReg=_ballReg;
                    }else{
                        _ballReg = "("+first+","+first+")";
                    }

                }else{

                     var _regArray = [];

                     /** 拼装正则表达式 */
                    $('#numberBall  .lis').not('.lis:first-child').find('.active').each(function (index,item) {

                        _regArray.push($(item).html())

                        if(index == $('#numberBall  .lis').not('.lis:first-child').find('.active').length-1){

                            for(var i=0; i<_regArray.length;i++){

                                _ballReg += '(?=.*'+_regArray[i]+')';
                            }
                            
                        }

                    });
                }
                

                $('#areaContainer table tr td:first-child').each(function (index, item) {

                    /**
                     *    如果匹配到号码类型中存在点中的红球的数字的时候
                     */
                    if(new RegExp(_ballReg,'g').test($(item).html())){

                        $(item).parent().show();
                    }else{
                        $(item).parent().hide();
                    }

                })

            }

        },

        /**
         *   筛选遗漏图表(多行单选)
         */
        screenOmissionNumberOfBalls: function () {

            var _this = this;

            var _ballReg = '';

            if($('#numberBall .active').length > 0){

                /** 拼装正则表达式 */
                $('#numberBall .active').each(function (index,item) {

                    if(index == 0){
                        _ballReg+='^';
                    }

                    if(index == $('#numberBall .active').length-1){


                        _ballReg+=$(item).html();

                        _ballReg = "("+_ballReg+")";

                    }else{

                        _ballReg+=$(item).html()+',';

                    }

                });


                $('#areaContainer table tr td:first-child').each(function (index, item) {

                    /**
                     *    如果匹配到号码类型中存在点中的红球的数字的时候
                     */
                    if(new RegExp(_ballReg,'g').test($(item).html())){

                        $(item).parent().show();
                    }else{
                        $(item).parent().hide();
                    }

                })

            }


        },


        /**
         *   筛选遗漏图表
         */
        screenOmission: function () {

              var _this = this;

              var _ballReg = '';

              var _regArray = [];

              if($('#numberBall .active').length > 0){

                  /** 拼装正则表达式 */
                  $('#numberBall .active').each(function (index,item) {

                      _regArray.push($(item).html());

                      if(index == $('#numberBall .active').length-1){


                          for(var i=0; i<_regArray.length;i++){

                                  _ballReg += '(?=.*'+_regArray[i]+')';
                          }

                      }
                  });


                  $('#areaContainer table tr td:first-child').each(function (index, item) {

                      /**
                       *    如果匹配到号码类型中存在点中的红球的数字的时候
                       */
                      if(new RegExp(_ballReg,'g').test($(item).html())){

                          $(item).parent().show();
                      }else{
                          $(item).parent().hide();
                      }

                  })

              }

        },


        /**
         *   刷新图表数据
         */
        refreshOmissionData:function(_this, _callBack, _sort){

            /** 判断一下那个期数被选中，有可能这个时候选中的是50，100，或者200期*/
            var _quantity = parseInt($('#getPeriodsNumber .active').attr('data-num'));

            _this.changeOmissionData(_this.lotteryCode, _this.flot, _quantity, _callBack, _sort);
        },

        /**
         *  请求遗漏图表
         */
        changeOmissionData: function (_lotteryCode, _flot, _quantity,_callBack, _sort) {

            var _this = this;

            /**
             *  创建loading
             */
            _EventService.emit('createLoading_loadingComponent');

            /**
             *   请求图表
             */
            _OmissionAction.requestOmission(_lotteryCode, _flot, _quantity, _sort, function (_resultData) {


                   $('#'+_this.containerId).html(_resultData.html);

                   $('#lastPeriod').html(_resultData.lastPeriod);

                    /** 删除自动刷新提示*/
                    if($('#autoRefreshWindow').length > 0){

                        $('#autoRefreshWindow').fadeOut(0,function () {

                            $('#autoRefreshWindow').remove();

                        });
                    }

                    _EventService.emit('requestOmissionComplate_omissionContainer');

                    /** 销毁loading */
                    _EventService.emit('delLoading_loadingComponent');


                    /** 请求成功 */
                    if(_callBack !=undefined && typeof(_callBack) == 'function'){
                        _callBack();
                    }

            })

        },


        /**
         *  匹配刷新回来的第最新一期的期数是否和顶部的当前期的期数相同，不相同2分钟刷新匹配一次;
         *  @
         */
        matchingPeriods:function (_time) {

            var _this = this;
            var _lastPeriod =   $.trim($('#lastPeriod').html());
            var _currentPeriod =  $.trim($('.current-period').html());

            /** 当前更新期号 不等于 倒计时区域 最新开奖期号，定时两分钟+随机秒数 刷新一次数据 */
            var _random = Math.floor(Math.random()*10+1)*1000;

            if(_lastPeriod == _currentPeriod){
                return;
            }else{

                /**
                 * 当前更新期号 不等于 倒计时区域 最新开奖期号，定时两分钟+随机秒数 刷新一次数据
                 * @type {number}
                 */
                window.setTimeout(function () {

                    _this.refreshOmissionData(_this);

                }, (_time + _random))

            }

        }


    }

    return OmissionContainer

})