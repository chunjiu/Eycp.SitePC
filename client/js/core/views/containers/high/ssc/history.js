/****************************************************************
 *                      时时彩历史页（存放时时彩历史页面所有逻辑）
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

    var SSCHistoryContainer = {
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
            var _value = $(this).val();
            
            switch(_value) {
                case '1':
                case '2':
                case '3':
                    SSCHistoryContainer.showTop(_value);
                    break;
                case '4':
                    SSCHistoryContainer.showEach();
                    break;
                case '5':
                    SSCHistoryContainer.showEven();
                    break;
            }       
        },
        showTop(num) {
            if(num == 3) {
                $('[data-id=3],[data-id=4],[data-id=5]').addClass('red');
            } else if (num == 2) {
                $('[data-id=4],[data-id=5]').addClass('red');
            } else {
                $('[data-id=5]').addClass('red');
            }
        },
        showEven: function() {
            $('.even').addClass('red');
        },
        showEach: function() {
            $('.each').addClass('red');
        }
    }

    return SSCHistoryContainer;

})
