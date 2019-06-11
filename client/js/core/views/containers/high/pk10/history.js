/****************************************************************
 *
 *                       PK10历史页面
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    '../../../../services/event.service'
], function(
    _,
    $,
    _Backbone,
    _string,
    _EventService
) {
    var PK10HistoryContainer = {
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
            $('[data-num="'+ $(this).val() +'"]').addClass('red');
        }
    };

    return PK10HistoryContainer;
});