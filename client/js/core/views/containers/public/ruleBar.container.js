/****************************************************************
 *
 *                      规则左边导航容器
 *
 ****************************************************************/
define([
    'jquery',
    '../../../services/event.service',
    '../../publicComponent/public/loading.component'
], function(
    $,
    _EventService,
    _LoaddingComponent
) {
    var ruleBarContainer = {
        initialize: function(code,type) {
            this.initEvent(code,type);
            new _LoaddingComponent();
        },
        initEvent: function(code,type) {

            // 开关闭合
            $(document).on('click', '.ld-publicSubNav li', function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).addClass('active');
                }
            });

            // 阻止点击冒泡
            $(document).on('click', '.subNav', function(e){
                e.stopPropagation();
                if($(this).attr('href') != '#') {
                    _EventService.emit('createLoading_loadingComponent');
                }
            });

            // 点击切换
            $(document).on('click', '.pp_nav li', function() {
                $('.pp_nav li a').removeClass('active');
                $(this).find('a').addClass('active');

                var _type = $(this).attr('data-type');
                $('.lc_playingPage .pp_con').hide();
                $('.lc_playingPage .pp_con[data-type='+ _type +']').fadeIn('fast');

            });

           if("boon" == type){
                $('.ld-publicSubNav li').eq(1).addClass("active");
             }else if("sport" == type){
                $('.ld-publicSubNav li').eq(0).addClass("active");
             }
             $('.ld-publicSubNav li a').each(function(i,item){
                if($(this).hasClass("active")){
                     $(this).parent().parent().removeClass('active');
                    $(this).parent().parent().addClass('active');
                }
             });



        }
    }

    return ruleBarContainer;
})