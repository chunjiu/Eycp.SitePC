/****************************************************************
 *
 *                      详情页容器（存放详情页所有逻辑） *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../../../actions/chart/chart.action',
    '../../../actions/public/lottery.action',
    '../../publicComponent/public/loading.component',
    '../../publicComponent/chart/drawTable.component',
    '../../publicComponent/chart/changeState.component',
    '../public/timer.container',
    'Array',
    '../../publicComponent/chart/areaTable.component'
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _ChartAction,
    _LotteryAction,
    _LoadingComponent,
    _DrawTableComponent,
    _ChangeStateComponent,
    _TimerContainer,
    _Array,
    _AreaTable
) {

    var IndexContainer = {

        /**
         *
         * @param _lotteryCode     开奖号码
         * @param _flot                  彩种图表类型
         * @param _classify            彩种分类类型
         * @param _isAwarding      是否正则开奖
         * @param _nowPeriod      当前开奖号码
         * @param _theadObject   表格头配置
         * @param _cssObject       样式配置
         */
        initialize: function (_lotteryCode, _lotteryClassify,  _flot, _classify, _isAwarding, _nowPeriod, _theadObject, _cssObject, _budgetary){

                if(_theadObject == undefined){
                    console.error('你都没配thead.config.js配置！！！！!');
                    return;
                }

                if(_cssObject == undefined){
                    console.error('你都没配style.config.js配置！！！！!');
                    return;
                }

                if(_budgetary == undefined){
                    console.error('你都没配budgetary.config.js配置！！！！!  又或者是你肯定node控制器哪里没配这个啦(请在你的chart控制器上加上 _context.budgetary  = JSON.stringify(chartConfig.budgetary))！！！！！！');
                    return;
                }


               var _this = this;

               /** 初始化 action */
               _ChartAction.initialize();

               /** 把表头配置改成json格式 , 由于表格头中可能含有函数，因此需要这样子操作这个字符串的序列化  */
               _this.theadObject = typeof _theadObject === 'string' ? JSON.parse(_theadObject,function(_key,_val){

                    if(_val.indexOf && _val.indexOf('function')>-1){

                        return eval("(function(){return "+_val+" })()")
                    }
                    return _val;
                }) : _theadObject;

               /** 把css配置改成json格式 */
               _this.cssObject  = (_cssObject);

              /** 预选号码配置 */
              _this.budgetary = (_budgetary);

               _this.lotteryCode = _lotteryCode;

               _this.flot = _flot;

               _this._lotteryClassify= _lotteryClassify;

               var _queryDy = $("#hidQueryDay").val();
               /** 获取浏览器参数 */
               _this.queryDay  = _queryDy==undefined?null:_queryDy;//_this.getQueryString('queryDay') ? _this.getQueryString('queryDay') : null;
               /** 容器得id */
               _this.containerId = 'container';

               /** table得id */
               _this.tableId  = 'table';

               /** canvas得id */
               _this.canvasId = 'canvas';

               _this.isAwarding = _isAwarding;

               /** 处理数据函数 */
               _this.dealWithDataContainer;

               _this.flotFor11x5         = ['501','502','503','504','505','506','507','508','509','510','511','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115'];
               _this.flotFor11x5Total = ['100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115'];

               /** 快3统计得flot */
               _this.flotForK3Total     = ['15','16','17','18'];

               /** 双色球的六行六列， 七行五列，四行四列 */
               _this.rowAndColumnFlotForSsq = ['15','16','43'];

               /** 大乐透的六行六列， 七行五列 */
               _this.rowAndColumnFlotForDlt = ['51','52'];

               /** 初始化loading组件 */
               var loadingComponent = new _LoadingComponent();

               /** 创建loading */
               _EventService.emit('createLoading_loadingComponent');

               _this.dealWithDataPath = '/js/core/views/containers/'+_classify+'/'+_lotteryClassify+'/dealWithData.container.js';
               _this.chartDataPath = '/js/core/views/containers/'+_classify+'/'+_lotteryClassify+'/chart.container.js';

               /** 请求后台获取图表 */
               _ChartAction.requestChart(_this.lotteryCode, _this.flot, 50,  _this.queryDay, function (_resultData) {

                    // 11选5 八区统计和多日统计
                    if(_this._lotteryClassify == '11x5' && _this.flotFor11x5.Contains(_this.flot.toString())) {
                        
                        _this.sortBy11x5 = '_th1|up';
                        _this.days = $('[data-day].active').data('day');
                        require([_this.dealWithDataPath], function (_DealWithDataContainer) {
                            _this.dealWithDataContainer = _DealWithDataContainer;
                            _AreaTable.renderTable('areaContainer', _DealWithDataContainer.initialize(_flot, _resultData), _this.theadObject, _this.flotFor11x5Total.Contains(_this.flot.toString()) ? false : true, _this.flotFor11x5Total.Contains(_this.flot.toString()) ? 2 : 1, _this.initRenderAreaChartCallBack);    
                        })


                    /** 快3统计 */
                    }else if(_this._lotteryClassify == 'k3' && _this.flotForK3Total.Contains(_this.flot.toString())){

                       if(_this.flot == 15){

                           require([_this.dealWithDataPath], function (_DealWithDataContainer) {

                               _this.dealWithDataContainer = _DealWithDataContainer;

                               _AreaTable.renderTableTotal('areaContainer', _DealWithDataContainer.initialize(_flot, _resultData), _this.theadObject,  _this.renderAreaTotalChartCallBack);

                           })

                       }else{

                           /** 加载处理数据源的容器 (根据彩种类型以及彩种分类类型映射到对应目录下的处理函数) */
                           require([_this.dealWithDataPath], function (_DealWithDataContainer) {

                               _this.dealWithDataContainer = _DealWithDataContainer;

                               _this.renderChart(_DealWithDataContainer.initialize(_flot, _resultData), _this.initRenderChartCallBack);

                               _ChangeStateComponent.omissionNumberEvent('#table', true);

                               /** 形态跨度要单独处理 */
                               if(_this.flot == 18){
                                   _ChangeStateComponent.addTotalStyle2('#table .trend');
                               }else {
                                   _ChangeStateComponent.addTotalStyle('#table .trend');
                               }

                           });

                       }              
                       
                       
                       /** 双色球的六行六列， 七行五列，四行四列 */                    
                       }else if(_this._lotteryClassify == 'ssq' &&  _this.rowAndColumnFlotForSsq.Contains(_this.flot.toString())  ){

                        var _typeArray;

                        /** 六行六列 */
                        if(_flot == 15){

                            _typeArray = [6,6,'red'];

                        /** 七行五列 */
                        }else if(_flot == 16){

                            _typeArray = [7,5,'red'];

                        /**  四行四列 */
                        }else if(_flot == 43){

                            _typeArray = [4,4,'blue'];
                        }

                        require([_this.dealWithDataPath], function (_DealWithDataContainer) {

                            _this.dealWithDataContainer = _DealWithDataContainer;

                            _AreaTable.renderTableRowAndColumn('container', _DealWithDataContainer.initialize(_flot, _resultData),  _typeArray,33, _this.renderRowAndColumnCallBack);

                        })

                   /** DLT的六行六列， 七行五列*/
                   }else if(_this._lotteryClassify == 'dlt' &&  _this.rowAndColumnFlotForDlt.Contains(_this.flot.toString())  ){

                    var _typeArray;

                    /** 六行六列 */
                    if(_flot == 51){

                        _typeArray = [6,6,'red'];

                        /** 七行五列 */
                    }else if(_flot == 52){

                        _typeArray = [7,5,'red'];

                    }

                    require([_this.dealWithDataPath], function (_DealWithDataContainer) {

                        _this.dealWithDataContainer = _DealWithDataContainer;

                        _AreaTable.renderTableRowAndColumn('container', _DealWithDataContainer.initialize(_flot, _resultData),  _typeArray, 35, _this.renderRowAndColumnCallBack);

                    })


                }else {
                        /** 加载处理数据源的容器 (根据彩种类型以及彩种分类类型映射到对应目录下的处理函数) */
                        require([_this.dealWithDataPath], function (_DealWithDataContainer) {

                            _this.dealWithDataContainer = _DealWithDataContainer;

                            _this.renderChart(_DealWithDataContainer.initialize(_flot, _resultData), _this.initRenderChartCallBack);

                        });
                    }

                })


            /** 回调事件 */
            _EventService.on('renderChartComplate_indexContainer', function () {

                if("k3" == _this._lotteryClassify || "fc3d"==_this._lotteryClassify){

                /**  给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                    _ChangeStateComponent.addSamePeriod(_this.tableId);


                }else if("kl10"==_this._lotteryClassify){

                    _ChangeStateComponent.addBigAward(_this.tableId);
                     if(6 == _this.flot){
                        _ChangeStateComponent.heavyNumberEvent('#table');
                    }
                   
                }else if("gxkl10"==_this._lotteryClassify){
                   
                    if(2==_this.flot || 3==_this.flot){
                         /** 形态：合、小、偶 标蓝 */
                        _ChangeStateComponent.addTypeAwardBlue('data_5');
                    }
                    if(4 == _this.flot){
                        _ChangeStateComponent.heavyNumberEvent('#table');
                    }

                } else if("11x5" == _this._lotteryClassify) {

                    require([_this.chartDataPath], function(_chart){
                        _chart.initChart(_this.flot);
                        /** 重新刷新画布 */
                        _DrawTableComponent.updateTableLine('container','table','canvas');
                    })
                    
                    if(_this.flotFor11x5Total.Contains(_this.flot.toString())) {
                        _ChangeStateComponent.addHotColdNumer(_this.flot.toString())
                    }



                } else if("ssc" == _this._lotteryClassify) {

                    /* 号码分布的多个相同号码样式 */
                    _ChangeStateComponent.addSamePeriod(_this.tableId,2,'ssc');

                    /* 时时彩五星 单双/大小走势  文字替换 */
                    if (_this.flot == 63 || _this.flot == 64) {
                        _ChangeStateComponent.changeSscWord(_this.flot);
                    }

                    /* 时时彩二星/三星 和值走势 数字替换 */
                    if (_this.flot == 12 || _this.flot == 34) {
                        _ChangeStateComponent.changeSscNum();
                    }

                    require([_this.chartDataPath], function(_chart){
                        _chart.initChart(_this.flot);
                    });

                } else if("qxc" == _this._lotteryClassify){

                    /** 给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                    _ChangeStateComponent.addSamePeriod(_this.tableId);

                }else if("pl5" == _this._lotteryClassify){

                    if(_this.flot == 15 ) {
                        /** 给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                        //_ChangeStateComponent.addSamePeriod(_this.tableId, 2);
                    }else if(_this.flot == 12 || _this.flot == 13 || _this.flot == 17 ){
                        /** 给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                        //_ChangeStateComponent.addSamePeriod(_this.tableId, 2, null , 'data_1');
                        /** 形态：合、小、偶 标蓝 */
                        _ChangeStateComponent.addTypeAwardBlue('data_8');
                    }else {
                        /** 给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                        //_ChangeStateComponent.addSamePeriod(_this.tableId, 1);
                    }

                } else if("dlt"==_this._lotteryClassify){

                        if(12==_this.flot){
                            _ChangeStateComponent.heavyNumberEvent('#table');
                        }else if(13==_this.flot){
                            _ChangeStateComponent.serialNumberEvent('#table');
                        }else if(14==_this.flot){
                            _ChangeStateComponent.edgeNumberEvent('#table');
                        }else if(15==_this.flot){
                            _ChangeStateComponent.serialTwoNumberEvent('#table');
                        } else if (_this.flot == 21 || _this.flot == 23 || _this.flot == 24) {
                            /** 形态：合、小、偶 标蓝 */
                            _ChangeStateComponent.addTypeAwardBlue('data_6');
                        }

                    /* 重新刷新画布 */
                    _DrawTableComponent.updateTableLine('container', 'table', 'canvas');

                }else if('ssq' == _this._lotteryClassify){

                    if(27 == _this.flot){
                        _ChangeStateComponent.heavyNumberEvent('#table');
                    }else if(28 == _this.flot){
                        _ChangeStateComponent.serialNumberEvent('#table');
                    }else if(29 == _this.flot){
                        _ChangeStateComponent.edgeNumberEvent('#table');
                    }else if(30 == _this.flot){
                        _ChangeStateComponent.serialTwoNumberEvent('#table');

                        /** 双色球得三分区中间需要添加3条分割线  */
                    }else if(42 == _this.flot ){
                        _ChangeStateComponent.addSegmentingLine('#table', 'data_0',[4,10], 1,'#d4d1d1')
                    }

                }else if('qlc' == _this._lotteryClassify){

                    if(15 == _this.flot){
                        _ChangeStateComponent.heavyNumberEvent('#table');
                    }

                }

                /** 当图表重新刷新的时候，把预选号码的内容还原回去 */
                $('tbody.preselection').html(_this.tempHtml);

                 /** 添加分割线 */
                _ChangeStateComponent.addRightBorder2px('#table',1, '#d4d1d1');

                /** 更新抬头的期数 */
                if($('.lt-toolBlock .font-red').length>0 && $('.beProgressing').css('display')=='none'){
                    $('.lt-toolBlock .font-red').html($('.current-period').html());
                }

            });


            _TimerContainer.initialize(_lotteryCode, 'history');

            if(_classify == 'local'){

                _LotteryAction.initialize(_lotteryCode, 'digit');

            }else{

                _LotteryAction.initialize(_lotteryCode, _classify);
            }

            if(_isAwarding) {

                _LotteryAction.loopResult(_nowPeriod);
            }



            /** 监听开完奖事件 */
            _EventService.on('awardHTML_lotteryAction', function(data) {

                $('.public-lotteryLatestInfo').html(data.timer);

                $('.history-body').html(data.index);

                /** 当开完奖拿到最新的数据的时候 , 判断一下自动刷新按钮有没被选中，如果选中则自动刷新，如果没选中则弹出提示窗，让用户自己去刷新图表;*/
                if($('#autoRefresh i').hasClass('active')){

                    _this.refreshChartData(_this);

                }else{

                    if($('#autoRefreshWindow').length == 0){

                        $('body').append('<div class="eyu200-trendHintBlock" style="z-index: 9999; width: 1000px; top: inherit; bottom: 30px; margin-left: -500px; display: none;" id="autoRefreshWindow">数据已刷新，<a href="javascript:void(0);" id="reloadChart">点击刷新</a></div>');

                        $('#autoRefreshWindow').fadeIn(600);

                         $('body').on('click','#reloadChart', function () {
                             _this.refreshChartData(_this);
                         });
                        
                    }
                }
            });

        },
        //刷新图表数据
        refreshChartData:function(_this){
             /** 判断一下那个期数被选中，有可能这个时候选中的是50，100，或者200期*/
                    var _quantity = parseInt($('#getPeriodsNumber .active').attr('data-num'));

                    /** 先把预选号码中的内容存起来 */
                    _this.tempHtml = $('tbody.preselection').html();

                    _this.changeChartData(_this.lotteryCode, _this.flot, _quantity);
        },
        /** 绑定事件 */
        initEvent: function () {

            var _this = this;

            /*
            * 样式
            * */
            $('body').on('mouseover', '.nameBlock a', function() {
                $(this).parent().parent().find('span').css('color', '#e33d3d');
            });
            $('body').on('mouseout', '.nameBlock a', function() {
                $(this).parent().parent().find('span').css('color', '#333333');
            });


            /*切换走势/遗漏图表*/
            $('body').on('click', '.afb-titleB .title', function() {
                // 切换样式
                $(".afb-titleB .title").removeClass('active');
                $(this).addClass('active');

                // 切换内容
                var dataType = $(this).attr('data-type');
                $(".public-allFunBlock .afb-contentB").hide();
                $("#" + dataType).show();
            });

            /**
             *  请求期数，根据期数的数量请求多少期的开奖结果           */
            $('body').on('click', '#getPeriodsNumber  .button', function () {

                $(this).parent().find('.button').removeClass('active');

                $(this).addClass('active');

                _this.refreshChartData(_this);

            })


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

            /**
             *  显示遗漏
             */
            $('body').on('click', '#omission', function(){

                var _type = true;
                var _iObj = $(this).find("i");
                if(_iObj.hasClass('active')){

                    _iObj.removeClass('active');
                    _type = false;

                }else{

                    _iObj.addClass('active');
                    _type = true;

                }
                _ChangeStateComponent.omissionNumberEvent('#table', _type);

            });

            /**
             * 重号
             */
            $('body').on('click', '#heavy', function(){
                var _iObj = $(this).find("i");
                if(_iObj.hasClass('active')){

                    _iObj.removeClass('active')
                    _ChangeStateComponent.clearHeavyNumberEvent('#table');

                }else{

                    _iObj.addClass('active')
                    _ChangeStateComponent.heavyNumberEvent('#table');
                }

            })

            /**
             *  边号;
             */
            $('body').on('click', '#edge', function(){
                 var _iObj = $(this).find("i");
                if(_iObj.hasClass('active')){

                    _iObj.removeClass('active');
                    _ChangeStateComponent.clearEdgeNumberEvent('#table');

                }else{

                    _iObj.addClass('active');
                    _ChangeStateComponent.edgeNumberEvent('#table');

                }
            })


            /**
             * 连号号码;
             */
            $('body').on('click', '#serial', function(){
                var _iObj = $(this).find("i");
                if(_iObj.hasClass('active')){

                    _iObj.removeClass('active');
                    _ChangeStateComponent.clearSerialNumberEvent('#table');

                }else{

                    _iObj.addClass('active');
                    _ChangeStateComponent.serialNumberEvent('#table')

                }
            })


            /**
             * 遗漏分层;
             */
            $('body').on('click', '#omissionDelamination', function(){
                var _iObj = $(this).find("i");
                if(_iObj.hasClass('active')){

                    _iObj.removeClass('active');
                    _ChangeStateComponent.clearOmissionDelaminationEvent('#table');

                }else{

                   _iObj.addClass('active');
                    _ChangeStateComponent.omissionDelaminationEvent('#table');

                }
            })


            /**
             *  显示折线;
             */
            $('body').on('click', '#brokenLine', function(){

                var _iObj = $(this).find("i");

                if(_iObj.hasClass('active')){

                    _iObj.removeClass('active');
                    _ChangeStateComponent.closeBrokenLine('#canvas');

                }else{

                    _iObj.addClass('active');
                    _DrawTableComponent.updateTableLine('container','table','canvas');
                    _ChangeStateComponent.openBrokenLine('#canvas');

                }

            })


            /**
             *  分割线
             */
            $('body').on('click', '#segmenting', function(){
                 var _iObj = $(this).find("i");
                if(_iObj.hasClass('active')){

                    _iObj.removeClass('active');
                    _ChangeStateComponent.removeSegmenting('#table','tdLineB');

                }else{

                    _iObj.addClass('active');
                    _ChangeStateComponent.addSegmenting('#table','tdLineB', 5);

                }

            });


            /**
             *   切换奇偶大小数列;
             */
            $('body').on('click', '#container #table thead i, #container #table .thead i' , function () {

                /** 需要隐藏的模块属性 */
                var hideAttr   = $(this).parent().attr('modular');

                var showAttr;

                /** 点了偶数按钮 */
                if($(this).hasClass('evenButton')){

                    /** 需要显示的模块属性 */
                    showAttr =  $('.oddButton').parent().attr('modular');

                    /** 点了奇数按钮 */
                }else if($(this).hasClass('oddButton')){

                    /** 需要显示的模块属性 */
                    showAttr =  $('.evenButton').parent().attr('modular');

                    /** 点了小数按钮 */
                }else if($(this).hasClass('decimalButton')){

                    /** 需要显示的模块属性 */
                    showAttr =  $('.largeButton').parent().attr('modular');

                    /** 点了大数按钮 */
                }else if($(this).hasClass('largeButton')){

                    /** 需要显示的模块属性 */
                    showAttr =  $('.decimalButton').parent().attr('modular');
                    /** 点了合数按钮 */
                    }else if($(this).hasClass('primeButton')){

                        /** 需要显示的模块属性 */
                        showAttr =  $('.compositeButton').parent().attr('modular');
                    /** 点了质数按钮 */
                    }else if($(this).hasClass('compositeButton')){

                        /** 需要显示的模块属性 */
                        showAttr =  $('.primeButton').parent().attr('modular');

                }

                $('#table th, #table td').each(function (index, item) {

                    /** 把所以带这个样式的都隐藏 */
                    if($(item).attr('modular') == hideAttr){

                        $(item).hide();

                        /** 把所以带这个属性的都显示*/
                    }else if($(item).attr('modular') == showAttr){

                        $(item).show();
                    }

                });


                /** 重新刷新画布 */
                _DrawTableComponent.updateTableLine('container','table','canvas');

            })

            $(document).on('click', '#areaContainer th', function(){

                if(_this._lotteryClassify != 'k3'){

                    var arrow = $(this).find('.thArrow');
                    if(arrow.length <= 0) return;
                    _this.sortBy11x5 = arrow.data('index');
                    arrow.find('i').each(function(){
                        if($(this).hasClass('active')) {
                            $(this).removeClass('active');
                        } else {
                            $(this).addClass('active');
                            _this.sortBy11x5 += ('|' + $(this).data('sort'));
                        }
                    })

                    /** 先把预选号码中的内容存起来 */
                    _this.tempHtml = $('tbody.preselection').html();

                    _this.changeChartData(_this.lotteryCode, _this.flot, 1);


                /** 快3的统计表的排序用这里的排序代码 */
                }else{

                    /** true表示升序排列，false降序排序 */
                    var sortType;

                    var activeClass = $(this).find('.active').hasClass('top') ? 'top': 'bottom';
                    $('#areaContainer th i').removeClass('active');
                    //$('#areaContainer th .top').addClass('active');


                    if(activeClass == 'top'){
                        $(this).find('.top').removeClass('active');
                        $(this).find('.bottom').addClass('active');
                        sortType = false;

                    }else{
                        $(this).find('.bottom').removeClass('active');
                        $(this).find('.top').addClass('active');
                        sortType = true;
                    }

                    var column = ($(this).index());

                    /** 排序当前列 */
                    _ChangeStateComponent.sortColumn('#areaContainer table',column, sortType)

                }

            });

            $(document).on('click', '[data-day]', function() {
                $('[data-day]').removeClass('active');
                $(this).addClass('active');

                _this.days = $(this).data('day');

                /** 先把预选号码中的内容存起来 */
                _this.tempHtml = $('tbody.preselection').html();

                _this.changeChartData(_this.lotteryCode, _this.flot, 1);
            })

        },


        /**
         * 初始化渲染图表时候的回调函数;
         */
        initRenderChartCallBack: function () {

            var _this = IndexContainer;

            /** 销毁loading */
            _EventService.emit('delLoading_loadingComponent');

            /** 绑定事件 */
            _this.initEvent();

            /** 显示遗漏 */
            $('#omission').click();

            /** 显示分线段 */
            $('#segmenting').click();

            /** 显示折线 */
            $('#brokenLine').click();


          
            if("k3"==_this._lotteryClassify || "fc3d"==_this._lotteryClassify){

            /**  给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                _ChangeStateComponent.addSamePeriod(_this.tableId);

            }else if("kl10"==_this._lotteryClassify){

                _ChangeStateComponent.addBigAward(_this.tableId);
                  if(6 == _this.flot){
                        _ChangeStateComponent.heavyNumberEvent('#table');
                    }

            }else if("gxkl10"==_this._lotteryClassify){
                   
                    if(2==_this.flot || 3==_this.flot){
                         /** 形态：合、小、偶 标蓝 */
                        _ChangeStateComponent.addTypeAwardBlue('data_5');
                    }
                      if(4 == _this.flot){
                        _ChangeStateComponent.heavyNumberEvent('#table');
                    }

            } else if("11x5" == _this._lotteryClassify) {

                require([_this.chartDataPath], function(_chart){
                    _chart.initChart(_this.flot);
                    /** 重新刷新画布 */
                    _DrawTableComponent.updateTableLine('container','table','canvas');
                });

                if(_this.flotFor11x5Total.Contains(_this.flot.toString())) {
                    _ChangeStateComponent.addHotColdNumer(_this.flot.toString())
                }



            } else if("ssc" == _this._lotteryClassify) {

                /* 号码分布的多个相同号码样式 */
                _ChangeStateComponent.addSamePeriod(_this.tableId,2,'ssc');

                /* 时时彩五星 单双/大小走势  文字替换 */
                if (_this.flot == 63 || _this.flot == 64) {
                    _ChangeStateComponent.changeSscWord(_this.flot);
                }

                /* 时时彩二星/三星 和值走势 数字替换 */
                if (_this.flot == 12 || _this.flot == 34) {
                    _ChangeStateComponent.changeSscNum();
                }

                /* 重新刷新画布 */
                _DrawTableComponent.updateTableLine('container','table','canvas');

                require([_this.chartDataPath], function(_chart){
                    _chart.initChart(_this.flot);
                })

            }else if("qxc" == _this._lotteryClassify){

                /** 给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                _ChangeStateComponent.addSamePeriod(_this.tableId);

            } else if("pl5" == _this._lotteryClassify){

                if(_this.flot == 15 ) {
                    /** 给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                    //_ChangeStateComponent.addSamePeriod(_this.tableId, 2);
                }else if(_this.flot == 12 || _this.flot == 13 || _this.flot == 17 ){
                    /** 给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                    //_ChangeStateComponent.addSamePeriod(_this.tableId, 2, null , 'data_1');
                    /** 形态：合、小、偶 标蓝 */
                    _ChangeStateComponent.addTypeAwardBlue('data_8');
                }else {
                    /** 给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标; */
                    //_ChangeStateComponent.addSamePeriod(_this.tableId, 1);
                }

                /* 重新刷新画布 */
                _DrawTableComponent.updateTableLine('container','table','canvas');

            }else if("dlt"==_this._lotteryClassify) {

                if (12 == _this.flot) {
                    _ChangeStateComponent.heavyNumberEvent('#table');
                } else if (13 == _this.flot) {
                    _ChangeStateComponent.serialNumberEvent('#table');
                } else if (14 == _this.flot) {
                    _ChangeStateComponent.edgeNumberEvent('#table');
                } else if (15 == _this.flot) {
                    _ChangeStateComponent.serialTwoNumberEvent('#table');
                } else if (_this.flot == 21 || _this.flot == 23 || _this.flot == 24) {
                    /** 形态：合、小、偶 标蓝 */
                    _ChangeStateComponent.addTypeAwardBlue('data_6');
                }

                /* 重新刷新画布 */
                _DrawTableComponent.updateTableLine('container', 'table', 'canvas');

            }else if("ssq"==_this._lotteryClassify){

                if(27 == _this.flot){
                    _ChangeStateComponent.heavyNumberEvent('#table');
                }else if(28 == _this.flot){
                    _ChangeStateComponent.serialNumberEvent('#table');
                }else if(29 == _this.flot){
                    _ChangeStateComponent.edgeNumberEvent('#table');
                }else if(30 == _this.flot){
                    _ChangeStateComponent.serialTwoNumberEvent('#table');

                    /** 双色球得三分区中间需要添加3条分割线  */
                }else if(42 == _this.flot){
                    _ChangeStateComponent.addSegmentingLine('#table', 'data_0',[4,10], 1,'#d4d1d1')
                }

            }else if('qlc' == _this._lotteryClassify){

                if(15 == _this.flot){
                    _ChangeStateComponent.heavyNumberEvent('#table');
                }

            }


            /** 预算号码 */
            //_ChangeStateComponent.preselection(_this.budgetary);


            /** 添加分割线 */
            _ChangeStateComponent.addRightBorder2px('#table',1, '#d4d1d1');


            /** 更新抬头的期数 */
            if($('.lt-toolBlock .font-red').length>0 && $('.beProgressing').css('display')=='none'){
                $('.lt-toolBlock .font-red').html($('.current-period').html());
            }


        },

        initRenderAreaChartCallBack: function() {
            var _this = IndexContainer;

            /** 销毁loading */
            _EventService.emit('delLoading_loadingComponent');

            /** 绑定事件 */
            _this.initEvent();

            if("11x5" == _this._lotteryClassify) {
                if(_this.flotFor11x5Total.Contains(_this.flot.toString())) {
                    _ChangeStateComponent.addHotColdNumer(_this.flot.toString())
                }

            }
            $('#areaContainer [data-index="_th1"]').find('.top').addClass('active');

            /** 预算号码 */
            //_ChangeStateComponent.preselection(_this.budgetary);

        },

        /**
         *  切换期数后或者自动或者手动刷新后的回调函数
         */
        renderChartCallBack: function () {

            var _this = IndexContainer;

            /** 销毁loading */
            _EventService.emit('delLoading_loadingComponent');


            /** 删除自动刷新提示*/
            if($('#autoRefreshWindow').length > 0){

                $('#autoRefreshWindow').fadeOut(600,function () {

                    $('#autoRefreshWindow').remove();

                });
            }

            /** 如果折线图这个复选框已经被选中的情况下 */
            if($('#brokenLine i').hasClass('active')){

                $('#'+_this.canvasId).show();

            }

            /** 如果显示遗漏的复选框是被选中状态下 */
            if($('#omission i').hasClass('active')){

                _ChangeStateComponent.omissionNumberEvent('#table', true);

            }else{
                
                _ChangeStateComponent.omissionNumberEvent('#table', false);
            }

            /** 如果遗漏分层的复选框已经被选中的情况下 */
            if($('#omissionDelamination i').hasClass('active')){

                _ChangeStateComponent.omissionDelaminationEvent('#table');
            }

            /** 如果分段线的复选框被选中的情况下 */
            if($('#segmenting i').hasClass('active')){

                _ChangeStateComponent.addSegmenting('#table','tdLineB', 5);

            }

            /** 回调函数 */
           _EventService.emit('renderChartComplate_indexContainer');

        },

        renderAreaChartCallBack: function() {
            var _this = IndexContainer;

            /** 销毁loading */
            _EventService.emit('delLoading_loadingComponent');

            // 处理选择的action
            if(_this._lotteryClassify == '11x5' && _this.sortBy11x5) {
                var sortArray = _this.sortBy11x5.split('|');
                $('[data-index="'+ sortArray[0] +'"] i').removeClass('active');
                $('[data-index="'+ sortArray[0] +'"] [data-sort="'+ sortArray[1] +'"]').addClass('active');
            }

            if("11x5" == _this._lotteryClassify) {
                if(_this.flotFor11x5Total.Contains(_this.flot.toString())) {
                    _ChangeStateComponent.addHotColdNumer(_this.flot.toString())
                }

            }

            /** 删除自动刷新提示*/
            if($('#autoRefreshWindow').length > 0){

                $('#autoRefreshWindow').fadeOut(600,function () {

                    $('#autoRefreshWindow').remove();

                });
            }
             /** 回调函数 */
            _EventService.emit('renderChartComplate_indexContainer');
        },


        /**
         *  统计表的回调函数
         */
        renderAreaTotalChartCallBack: function () {

            /** 销毁loading */
            _EventService.emit('delLoading_loadingComponent');

            /** 绑定事件 */
            IndexContainer.initEvent();

            /** 删除自动刷新提示*/
            if($('#autoRefreshWindow').length > 0){

                $('#autoRefreshWindow').fadeOut(600,function () {

                    $('#autoRefreshWindow').remove();

                });
            }

            /** 回调函数 */
            _EventService.emit('renderChartComplate_indexContainer');

        },


        /**
         *  行列渲染后得回调;
         */
        renderRowAndColumnCallBack: function () {

            /** 销毁loading */
            _EventService.emit('delLoading_loadingComponent');

            /** 绑定事件 */
            IndexContainer.initEvent();

            /** 删除自动刷新提示*/
            if($('#autoRefreshWindow').length > 0){

                $('#autoRefreshWindow').fadeOut(600,function () {

                    $('#autoRefreshWindow').remove();

                });
            }

            /** 回调函数 */
            _EventService.emit('renderChartComplate_indexContainer');

        },

        /**
         * 渲染表格
         */
        renderChart: function (_resultData, _callBack) {

            var _this = this;

            /** 绘制表格并且绘制图表得画线*/
            _DrawTableComponent.renderTable(_this.containerId, _this.tableId, _this.canvasId, _this.theadObject, _resultData, _this.cssObject , _callBack)

        },


        /**
         *  请求图表
         */
        changeChartData: function (_lotteryCode, _flot, _quantity) {

            var _this = this;

            /** 创建loading */
            _EventService.emit('createLoading_loadingComponent');

            if(_this._lotteryClassify == '11x5' && _this.flotFor11x5.Contains(_flot.toString())) {
                /** 请求后台获取图表 */
                _ChartAction.requestChartSortFor11x5(_lotteryCode, _flot, _quantity, _this.sortBy11x5, _this.days, function (_resultData) {
                    _AreaTable.renderTable('areaContainer', _this.dealWithDataContainer.initialize(_flot, _resultData), _this.theadObject, _this.flotFor11x5Total.Contains(_this.flot.toString()) ? false : true, _this.flotFor11x5Total.Contains(_this.flot.toString()) ? 2 : 1, _this.renderAreaChartCallBack);
                });

            }else if(_this._lotteryClassify == 'k3' && _this.flotForK3Total.Contains(_this.flot.toString())){

                _ChartAction.requestChart(_lotteryCode, _flot, _quantity,  _this.queryDay, function (_resultData) {

                    if(_flot == 15){

                        _AreaTable.renderTableTotal('areaContainer',  _this.dealWithDataContainer.initialize(_flot, _resultData), _this.theadObject,  _this.renderAreaTotalChartCallBack);

                    }else{

                        /** 加载处理数据源的容器 (根据彩种类型以及彩种分类类型映射到对应目录下的处理函数) */
                        require([_this.dealWithDataPath], function (_DealWithDataContainer) {

                            _this.renderChart(_this.dealWithDataContainer.initialize(_flot, _resultData), _this.renderChartCallBack);

                            _ChangeStateComponent.omissionNumberEvent('#table', true);


                            /** 形态跨度要单独处理 */
                            if(_this.flot == 18){
                                _ChangeStateComponent.addTotalStyle2('#table .trend');
                            }else {
                                _ChangeStateComponent.addTotalStyle('#table .trend');
                            }


                        });

                    }

                })


            /** 双色球的六行六列， 七行五列，四行四列 */
            }else if(_this._lotteryClassify == 'ssq' &&  _this.rowAndColumnFlotForSsq.Contains(_this.flot.toString())  ){


                var _typeArray;

                /** 六行六列 */
                if(_flot == 15){

                    _typeArray = [6,6,'red'];

                    /** 七行五列 */
                }else if(_flot == 16){

                    _typeArray = [7,5,'red'];

                    /**  四行四列 */
                }else if(_flot == 43){

                    _typeArray = [4,4,'blue'];
                }

                /** 请求后台获取图表 */
                _ChartAction.requestChart(_lotteryCode, _flot, _quantity,  _this.queryDay, function (_resultData) {

                    _AreaTable.renderTableRowAndColumn('container',  _this.dealWithDataContainer.initialize(_flot, _resultData),  _typeArray,33, _this.renderRowAndColumnCallBack);

                })

                /** Dlt的六行六列， 七行五列，四行四列 */
                }else if(_this._lotteryClassify == 'dlt' &&  _this.rowAndColumnFlotForDlt.Contains(_this.flot.toString())  ){

                var _typeArray;

                /** 六行六列 */
                if(_flot == 51){

                    _typeArray = [6,6,'red'];

                    /** 七行五列 */
                }else if(_flot == 52){

                    _typeArray = [7,5,'red'];

                }

                /** 请求后台获取图表 */
                _ChartAction.requestChart(_lotteryCode, _flot, _quantity,  _this.queryDay, function (_resultData) {

                    _AreaTable.renderTableRowAndColumn('container',  _this.dealWithDataContainer.initialize(_flot, _resultData),  _typeArray, 35, _this.renderRowAndColumnCallBack);

                })

            }else {
                /** 请求后台获取图表 */
                _ChartAction.requestChart(_lotteryCode, _flot, _quantity,  _this.queryDay, function (_resultData) {
                    _this.renderChart(_this.dealWithDataContainer.initialize(_flot, _resultData), _this.renderChartCallBack);
                });
            }
        },

        /** 获取浏览器参数a和b */
        getQueryString : function(name){

            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }

    }



    return IndexContainer;
})