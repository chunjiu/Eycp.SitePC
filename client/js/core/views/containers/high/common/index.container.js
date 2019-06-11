/****************************************************************
 *                      数字彩容器（存放数字彩首页所有逻辑）
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    '../../../../services/event.service',
    '../../public/timer.container',
    '../../../../actions/public/lottery.action'
], function(
    _,
    $,
    _Backbone,
    _String,
    _EventService,
    _TimerContainer,
    _LotteryAction
) {

    var LotteryContainer = {
        initialize: function() {
            // 初始化事件
            this.initEvent();
        },
        initEvent: function() {
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
        }
    }

    return LotteryContainer;
       
})
