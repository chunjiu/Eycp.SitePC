/****************************************************************
 *                      时时乐历史页（存放时时乐历史页面所有逻辑）
 ****************************************************************/
define('core/views/containers/high/ssl/history',[
    'underscore',
    'jquery',
    'backbone'
], function (
    _,
    $,
    _Backbone
) {

    var SSLHistoryContainer = {
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
                case 'each':
                    SSLHistoryContainer.showEach();
                    break;
                case 'even':
                    SSLHistoryContainer.showEven();
                    break;
                default:
                    SSLHistoryContainer.showTop(_value);
                    break;
            }
        },
        showTop(type) {
            var _el = [];
            if(type <= 2) {
                _el.push('[data-id=1]');
                if(type == 2) {
                    _el.push('[data-id=2]');
                }
            } else {
                _el.push('[data-id=3]');
                if(type == 4) {
                    _el.push('[data-id=2]');
                }
            }

            $(_el.join(',')).addClass('red');

        },
        showEven: function() {
            $('.even').addClass('red');
        },
        showEach: function() {
            $('.each').addClass('red');
        }
    }

    return SSLHistoryContainer;

})
;
