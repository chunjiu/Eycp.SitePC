/****************************************************************
 *                          帮助页面
 ****************************************************************/
define([
    'jquery'
], function(
    $
){
    var HelpContainer = {
        initialize: function() {
            this.initEvent();
        },
        initEvent: function() {
            $(document).on('click', '.na_tit', function() {
                var $this = $(this).parent();
                if( $this.hasClass('active')) {
                    $this.removeClass('active');
                    $this.find('.sel_d').hide();
                } else {
                     $this.addClass('active');
                     $this.find('.sel_d').show();
                }
            })
        }
    }

    return HelpContainer;
});