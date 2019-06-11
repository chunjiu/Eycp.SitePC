/****************************************************************
 *                      快乐八历史页（存放快乐八历史页面所有逻辑）
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone'
], function (
    _,
    $,
    _Backbone
) {

    var KL8HistoryContainer = {
        initialize: function () {

            // 初始化事件注册
            this.initEvent();
        },
        initEvent: function () {
            $(document).on('change', ':radio', this.clickRadio);
            $(document).on('click', '#btnCancel', function(){
                $('td').removeClass('red');
                $(':radio').prop('checked', false);
            });
        },
        clickRadio: function () {
            $('td').removeClass('red');
            var _val = $(this).val();
            if(_val == 'even') {
                $('.' + _val).addClass('red');
            } else {
                $('.area' + _val).addClass('red');
            }
            
        }
    }

    return KL8HistoryContainer;

})
