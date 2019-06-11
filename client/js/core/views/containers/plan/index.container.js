/****************************************************************
 *                      追号聚合首页
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'Date',
    '../../../services/event.service',
    '../../../actions/plan/plan.action',
    '../../publicComponent/public/loading.component',
], function(
    _,
    $,
    _Backbone,
    _Date,
    _EventService,
    _PlanAction,
    _LoaddingComponent
) {
    var PlanContainer = {
        initialize: function() {
            this.initEvent();

            // 初始化事件
            _PlanAction.initialize();

            // loadding
            new _LoaddingComponent();

            // 设置每一分钟重新刷一次页面
            setInterval(this.reloadPage ,60000);
        },
        initEvent: function() {
            $(document).on('click', '.plan-category', this.changeCategory);
            $(document).on('click', '[data-recommendId]', this.recommendPage);
            $(document).on('click', '[data-playType]',this.redirectPage);
            $(document).on('click', '.lb_logo', this.redirectHome);
            $(document).on('mouseover', '.logo-header', function(){
                $(this).parent().find('td').css("color","#000");
            });
            $(document).on('mouseleave', '.logo-header', function(){
                $(this).parent().find('td').css("color","");
            });
        },
        changeCategory: function() {
            var _id = $(this).data('id');
            $('.plan-category').removeClass('active');
            $('.cr_listBlock[data-id]').hide();
            if(_id) {
                $('.cr_listBlock[data-id="'+ _id +'"]').fadeIn('fast');
            } else {
                $('.cr_listBlock[data-id]').fadeIn('fast');
            }

            // 添加active
            $('.plan-category[data-id="'+ _id +'"]').addClass('active');
        },
        reloadPage: function() {
            _EventService.emit('createLoading_loadingComponent');
            _PlanAction.getPageIndex(function(result){
                _EventService.emit('delLoading_loadingComponent');
                var _categoryId = $('.plan-category.active').data('id');
                if(_categoryId) {
                    $('.list-container').html(result.list);
                    $('.cr_listBlock[data-id]').hide();
                    $('.cr_listBlock[data-id="'+ _categoryId +'"]').fadeIn('fast');
                } else {
                    $('.list-container').html(result.list);
                }
            });
        },
        recommendPage: function() {
            var _id = $(this).data('recommendid');
            var _code = $(this).data('code');
            var _groupId = $(this).data('groupid');
            var _name = encodeURIComponent($(this).data('name'));
            
            window.open('/plan/' + _code + '/' + _id, "_blank");
        },
        redirectPage: function() {
            var _playType = $(this).data('playtype');
            var _lotteryCode = $(this).data('code');
            
            window.open('/plan/' + _lotteryCode + '/' + _playType, "_blank");
        },
        redirectHome: function() {
            var _lotteryCode = $(this).data('code');
            window.open('/high/' + _lotteryCode, "_blank");
        }
    }

    return PlanContainer;
});