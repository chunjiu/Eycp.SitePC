/****************************************************************
 *
 *                      彩票历史容器（存放彩票历史逻辑业务）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'WdatePicker',
    'Date',
    '../../../services/event.service',
    '../../publicComponent/public/loading.component',
], function(
    _,
    $,
    _Backbone,
    _WdatePicker,
    _Date,
    _EventService,
    _LoaddingComponent
) {
    var HistoryContainer = {

        /** 初始化 */
        initialize: function () {
            this.initEvent();
            new _LoaddingComponent();
        },
        initEvent: function() {
            var _this = this;
            
            // 注册通用点击复选框事件
            $(document).on('click', 'label.public-checkboxBlock', function() {
                if($(this).find('.checkbox').hasClass('active')) {
                    $('.checkbox').removeClass('active');
                    $('td span').removeClass('opacity');
                    $('td').removeClass('ballBg-red');
                } else {
                    $('.checkbox').removeClass('active');
                    $(this).find('.checkbox').addClass('active');
                    _EventService.emit('checkBoxChange_historyContainer', $(this).attr('data-value'));
                }
                
            });

            // 清除选择
            $(document).on('click', '.lh-funBtn.clear', function() {
                $('.checkbox').removeClass('active');
                $('td span').removeClass('opacity');
                $('td').removeClass('ballBg-red');
            });

            // 点击显示关闭浮层
            $(document).on('click', '.exportBlock .lh-funBtn,.explainBlock .lh-funBtn', function(){
                var $obj = $(this).parent().find('.lh-superposedLayer');
                if($obj.css('display') == 'none') {
                    $obj.show();
                } else {
                    $obj.hide();
                }
            }); 

            // 开灯
            $(document).on('click','.openLight', this.openLight);

            // 关灯
            $(document).on('click','.closeLight', this.closeLight);

            // 打开新的页面
            $(document).on('click', '.newTab', function() {
                window.open(window.location.href);
            });

            // 日期选择器
            $(document).on('click', '#txtDate', function() {
                var _minDate = _this.minDate();
                WdatePicker({
                    skin:'twoer', 
                    dateFmt: 'yyyy-MM-dd', 
                    maxDate: $('#txtHistoryLength').val() > 0 ? '%y-%M-%d' : '%y-%M-{%d-1}', 
                    minDate: _minDate,
                    onpicked: function() {
                        _EventService.emit('createLoading_loadingComponent');
                        _EventService.emit('datePickerChange_historyContainer', this.value);
                        
                        $('.checkbox').removeClass('active');
                        $('td span').removeClass('opacity');
                        $('td').removeClass('ballBg-red');
                    }
                });
            })

            // 向左减一
            $(document).on('click', '.date-left', function() {
                var _val = $('#txtDate').val().replace(/-/g, '/'),
                    _date = new Date(_val),
                    _newDate = new Date();

                if((_newDate.getTime() - _date.getTime())/(1000 * 60 * 60 * 24) <= 6) {
                    _date.setDate(_date.getDate() - 1);
                
                    $('#txtDate').val(_date.format('yyyy-MM-dd'));
                    _EventService.emit('createLoading_loadingComponent');
                    _EventService.emit('datePickerChange_historyContainer', $('#txtDate').val());
                    
                    $('.checkbox').removeClass('active');
                    $('td span').removeClass('opacity');
                    $('td').removeClass('ballBg-red');
                }
            });

            // 向右加一
            $(document).on('click', '.date-right', function() {
                var _val = $('#txtDate').val().replace(/-/g, '/'),
                    _date = new Date(_val),
                    _newDate = new Date();
                
                if((_date.getTime() - _newDate.getTime())/(1000 * 60 * 60 * 24) < -1) {
                    _date.setDate(_date.getDate() + 1);
                
                    $('#txtDate').val(_date.format('yyyy-MM-dd'));
                    _EventService.emit('createLoading_loadingComponent');
                    _EventService.emit('datePickerChange_historyContainer', $('#txtDate').val());

                    $('.checkbox').removeClass('active');
                    $('td span').removeClass('opacity');
                    $('td').removeClass('ballBg-red');
                }
                
            });

            // 选择器
            $(document).on('click', '.public_selectPlugIn', function(e) {
                var $this = $(this).find('.selectOption');
                if($this.css('display') == 'block') {
                    $(this).find('.selectOption').hide();
                } else {
                    $(this).find('.selectOption').show();
                }
                e.stopPropagation();
            });

            // 选中项
            $(document).on('click', '.selectOption .lis', function(e) {
                $(this).parent().parent()
                .find('.selectedText').html($(this).html())
                .attr('data-value', $(this).attr('data-value'));

                $(this).parent().hide();
                e.stopPropagation();
            });

            // 关闭选择框
            $(document).on('click', 'body', function() {
                $('.selectOption').hide();
            });

            // 点击数字彩周
            $(document).on('click', '.week-day', function() {
                $('.week-day').removeClass('active');
                $(this).addClass('active');
                _EventService.emit('createLoading_loadingComponent');
                _EventService.emit('digitQuery_historyContainer', {
                    day: $(this).attr('data-value'),
                    year: $('#currYear').attr('data-value')
                });
                $('.checkbox').removeClass('active');
                $('td span').removeClass('opacity');
                $('td').removeClass('ballBg-red');
            });

            // 点击查询
            $(document).on('click', '#txtDigitQuery', function() {
                _EventService.emit('createLoading_loadingComponent');
                _EventService.emit('digitQuery_historyContainer', {
                    day: $('.week-day.active').attr('data-value'),
                    year: $('#currYear').attr('data-value')
                });
                $('.checkbox').removeClass('active');
                $('td span').removeClass('opacity');
                $('td').removeClass('ballBg-red');
            })

            // 导出
            $(document).on('click', '[data-export]', function() {
                var _type = $(this).attr('data-export');
                _EventService.emit('digitExport_historyContainer', {
                    type: _type,
                    year: $('#exportYear').attr('data-value')
                });
            });

        }, 
        closeLight: function() {
            $(this).hide();
            $('.openLight').show();
            $('.lotteryHistoryBlock').css('z-index',11);
            $('.history-maskLayer').fadeIn(1000)
        }, 
        openLight: function() {
            $('.closeLight').show();
            $('.openLight').hide();
            $('.history-maskLayer').fadeOut(1000, function() {
                $('.lotteryHistoryBlock').css('z-index', 0);
            });
        },
        minDate: function(){
            var minDate = new Date();
            minDate.setDate(minDate.getDate() - 6);
            var Y = minDate.getFullYear();
            var M = minDate.getMonth() + 1;
            var D = minDate.getDate();
            return Y+'-'+ M +'-'+D;
        }
    }

    return HistoryContainer;
});