/****************************************************************
 *                      排列三历史逻辑
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

    var QXCHistoryContainer = {
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
            $('.' + $(this).val()).addClass('red');
        }
    }

    return QXCHistoryContainer;

})
