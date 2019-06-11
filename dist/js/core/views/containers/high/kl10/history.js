/****************************************************************
 *                      快乐十分历史页（存放快乐十分历史页面所有逻辑）
 ****************************************************************/
define('core/views/containers/high/kl10/history',[
    'underscore',
    'jquery',
    'backbone'
], function (
    _,
    $,
    _Backbone
) {

    var KL10HistoryContainer = {
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
                    KL10HistoryContainer.showTop(_value);
                    break;
                case '4':
                    KL10HistoryContainer.showEach();
                    break;
                case '5':
                    KL10HistoryContainer.showEven();
                    break;
            }       
        },
        showTop(type) {
            if(type == 1) { // 显示大区
                $('[data-type="big"]').addClass('red');
            } else if (type == 2) {  // 显示小区
                $('[data-type="small"]').addClass('red');
            }
        },
        showEven: function() {
            $('.even').addClass('red');
        },
        showEach: function() {
            $('.each').addClass('red');
        }
    }

    return KL10HistoryContainer;

})
;
