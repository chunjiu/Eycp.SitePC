/****************************************************************
 *
 *              遗漏周期图表页容器（存放遗漏周期图表详情页所有逻辑）
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
    '../../../model/alertPlugin.model',
    '../../publicComponent/public/alertPlugin.component'
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _OmissionAction,
    _LotteryAction,
    _LoadingComponent,
    _TimerContainer,
    _AlertPluginModel,
    _AlertPluginComponent
) {


    var OmissionChartContainer = {

        initialize: function (_lotteryCode, _lotteryClassify,  _flot, _classify, _isAwarding, _nowPeriod, _type, _number) {

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

            _this.chart;

            _this.lotteryCode = _lotteryCode;

            _this.flot = _flot;

            _this.lotteryClassify= _lotteryClassify;

            _this.type = _type;

            _this.number = _number;

            /** 容器得id */
            _this.containerId = 'areaContainer';

            _this.initEvent();

            /** 初始化hightCharts图表 */
            _this.initHighCharts();


            /** 监听开完奖事件 */
            _EventService.on('awardHTML_lotteryAction', function(data) {

                $('.public-lotteryLatestInfo').html(data.timer);

                $('.history-body').html(data.index);

                /** 当开完奖拿到最新的数据的时候 , 判断一下自动刷新按钮有没被选中，如果选中则自动刷新，如果没选中则弹出提示窗，让用户自己去刷新图表;*/
                if($('#autoRefresh i').hasClass('active')){

                    _this.refreshOmissionChartData(_this);

                }else{

                    var _time = 0;

                    if($('#autoRefreshWindow').length == 0){

                        /**
                         *  如果是11x5的话，那么需要等三分钟才取显示那个自动刷新的弹窗
                         */
                        //if(_this.lotteryClassify == '11x5'){
                        _time = 1000*60*3
                        //}

                        window.setTimeout(function () {

                        $('body').append('<div class="eyu200-trendHintBlock" style="z-index: 9999; width: 1000px; top: inherit; bottom: 30px; margin-left: -500px; display: none;" id="autoRefreshWindow">数据已刷新，<a href="javascript:void(0);" id="reloadChart">点击刷新</a></div>');

                        $('#autoRefreshWindow').fadeIn(600);

                        },_time);

                    }
                }
            });

        },


        /**
         *  刷新数据
         */
        refreshOmissionChartData: function () {

            var _this = this;

            _OmissionAction.requestOmissionChart(_this.lotteryCode, _this.flot, _this.number, _this.type, function (_resultData) {

                /** 销毁loading */
                _EventService.emit('delLoading_loadingComponent');


                if(_resultData.html != ''){

                    $('#'+_this.containerId).html(_resultData.html);

                    /** 销毁highcharts */
                    _this.chart.destroy();

                    /** 再重新初始化hightCharts */
                    _this.initHighCharts(_resultData.omission, _this.type);


                }else{

                    console.error('没有更新到最新数据！');
                }


            })

        },


        /**
         *  绑定事件;
        */
        initEvent: function () {

            var _this = this;


            $('body').on('click','#reloadChart', function () {

                /**
                 *  创建loading
                 */
                _EventService.emit('createLoading_loadingComponent');

                /** 删除自动刷新提示*/
                if($('#autoRefreshWindow').length > 0){

                    $('#autoRefreshWindow').fadeOut(0,function () {

                        $('#autoRefreshWindow').remove();

                    });
                }

                _this.refreshOmissionChartData(_this);

            });


            /**
             *  查询号码组合类型
             */
            $('body').on('click','#searchNumberCombination .btn', function () {

                if($.trim($('#txtLottery').val()) == ''){
                    var _alertInfo = new _AlertPluginModel({
                        content: '未输入任何内容，请重新输入后再查询',
                        btnText: '确定'
                    });

                    (new _AlertPluginComponent({model: _alertInfo})).show();

                    return;
                }

                var _prevInputVlue =  $('#txtLottery').val().replace(/(^\s*)|(\s*$)/g, "").replace('，',',');

                /**
                 *  创建loading
                 */
                _EventService.emit('createLoading_loadingComponent');

                _OmissionAction.requestOmissionChart(_this.lotteryCode, _this.flot, _prevInputVlue.replace(',','_'), _this.type, function (_resultData) {

                    /** 销毁loading */
                    _EventService.emit('delLoading_loadingComponent');

                    /** 如果查询到结果 */
                    if(_resultData.html != ''){

                        $('#'+_this.containerId).html(_resultData.html);

                         /** 销毁highcharts */
                        _this.chart.destroy();
                        
                        /** 再重新初始化hightCharts */
                        _this.initHighCharts(_resultData.omission, _this.type);

                        _this.number = _prevInputVlue;

                    }else{

                        var _alertInfo = new _AlertPluginModel({
                            content: '未找到"'+_prevInputVlue+'"遗漏，请重新填写',
                            btnText: '确定'
                        });

                        (new _AlertPluginComponent({model: _alertInfo})).show();

                        return;

                    }

                })

            })


            $('body').on('click','#autoRefreshWindow', function () {
                _this.refreshOmissionChartData(_this);
            });


            $('body').on('mouseover', '.nameBlock a', function() {
                $(this).parent().parent().find('span').css('color', '#e33d3d');
            });

            $('body').on('mouseout', '.nameBlock a', function() {
                $(this).parent().parent().find('span').css('color', '#333333');
            });

        },

        /**
         *  渲染highCharts
         */
        initHighCharts: function (_omission, _type) {

            var _this = this;

           if(_omission !=undefined){

               if(_omission.length == 0){
                   return;
               }


               var _xAxis = [];

               var _yAxis = [];

               var  _number = [];

               var _series;

              if(_type == 0){

                  for(var i = _omission.length-1;0<= i; i--){

                      _xAxis.push(_omission[i].startIssueNo+"-"+_omission[i].endIssueNo);

                      _yAxis.push(_omission[i].totalCount);
                  }

                  _series = [{
                      name: '出现次数',
                      data: _yAxis
                  }]

              }else if(_type == 1){

                  for(var i = _omission.length-1;0<= i; i--){

                      _xAxis.push(_omission[i].issueNo);

                      _number.push(_omission[i].result);

                      _yAxis.push(_omission[i].missCount);
                  }

                  _series = [{
                      name:'遗漏值',
                      number:_number,
                      data: _yAxis,
                  }]
              }


              var _config = {
                  chart: {
                      renderTo:  'hightCharts',
                      defaultSeriesType: 'spline',
                      width: _omission.length<=20?"":((_type == 0 ? (_xAxis.length*40) : (_xAxis.length*30))),
                      height: 260
                  },
                  title:{
                      text: ''
                  },
                  legend: { enabled: false },
                  tooltip: {
                      // backgroundColor: '#FCFFC5',   // 背景颜色
                      // borderColor: 'black',         // 边框颜色
                      borderRadius: 8,             // 边框圆角
                      borderWidth: 1,               // 边框宽度
                      shadow: true,                 // 是否显示阴影
                      //animation: true ,              // 是否启用动画效果
                      style: {                      // 文字内容相关样式
                          color: "#333",
                          fontSize: "12px"
                      },
                      formatter: function() {

                        var _index = _this.indexOf(_xAxis, this.x);

                        if(_type==0){

                            return '<div>期号区间：'+_xAxis[_index]+'</div><br/><div>出现次数:'+ this.y +'</div>';

                        }else if(_type == 1){

                            var _result = _number[_index];
                            return '<div>期号：'+_xAxis[_index]+'</div><br/><div>号码：'+ _result +'</div><br/><div>遗漏值:'+ this.y +'</div>';
                        }

                      }
                  },
                  xAxis: {
                      tickInterval: 5,
                      categories: _xAxis
                  },
                  yAxis: {
                      title: {
                          text:''
                      }
                  },
                  scrollbar: {
                      //解决问题1
                      enabled: false
                  },
                  credits: {
                      enabled:false
                  },
                  exporting: {
                      enabled:false
                  },
                  plotOptions: {
                      line: {
                          dataLabels: {
                              // 开启数据标签
                              enabled: true
                          }
                          // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                          //enableMouseTracking: false
                      }
                  },
                  series: _series
              }


               require(['libs/highstock_3.0'],function () {

                   //$('#hightCharts').highcharts('StockChart', _config);

                   _this.chart = new Highcharts.Chart(_config)

                   /** 滚动条滚动到最右方 */
                   window.setTimeout(function () {

                       $('#hightCharts').scrollLeft($('.highcharts-container').width());

                   },0)

               })

           }



        },

        /**
         * 获取元素在数组中的下标;
         * @param _arr
         * @param _el
         * @return {number}
         */
        indexOf: function(_arr,_el){
            for (var i=0,n=_arr.length; i<n; i++){
                if (_arr[i] === _el){
                    return i;
                }
            }
            return -1;
        }

        /**
         *  匹配刷新回来的第最新一期的期数是否和顶部的当前期的期数相同，不相同2分钟刷新匹配一次;
         *  @
         */
        // matchingPeriods:function (_time) {
        //
        //     var _this = this;
        //     var _lastPeriod =   $.trim($('#lastPeriod').html());
        //     var _currentPeriod =  $.trim($('.current-period').html());
        //
        //     /** 当前更新期号 不等于 倒计时区域 最新开奖期号，定时两分钟+随机秒数 刷新一次数据 */
        //     var _random = Math.floor(Math.random()*10+1)*1000*60;
        //
        //     if(_lastPeriod == _currentPeriod){
        //         return;
        //     }else{
        //
        //         /**
        //          * 当前更新期号 不等于 倒计时区域 最新开奖期号，定时两分钟+随机秒数 刷新一次数据
        //          * @type {number}
        //          */
        //         _this.clearInterval = window.setInterval(function () {
        //
        //             _this.refreshOmissionChartData(_this);
        //
        //         }, (_time + _random))
        //
        //     }
        //
        // }

    }

    return OmissionChartContainer

})