/****************************************************************
 *                      首页容器（存放首页所有逻辑）
 ****************************************************************/
define('core/views/containers/digit/dlt/history',[
    'underscore',
    'jquery',
    'backbone'
], function (
    _,
    $,
    _Backbone
) {

    var DLTHistoryContainer = {
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
                    DLTHistoryContainer.showTop(_value);
                    break;
                
                default:
                    DLTHistoryContainer.showOther(_value);
                    break;
            }       
        },
        showTop(num) {
            $('[data-area="'+ num +'"]').addClass('red');
        },
        showOther: function(type) {
            $('.' + type).addClass('red');
        }
    }

    return DLTHistoryContainer;

})
;
