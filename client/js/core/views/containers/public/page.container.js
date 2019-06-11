/****************************************************************
 *
 *                      分页容器（存放分页逻辑业务）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service'
], function(
    _,
    $,
    _Backbone,
    _EventService
) {
    var PageContainer = {
        initialize: function() {
            this.initEvent();
        },
        initEvent: function() {
            // 点击页数
            $(document).on('click', '.public-pageBlock a', function(){
                _EventService.emit('activePage_pageContainer', $(this).data('pageindex'));
            });
        }
    }

    return PageContainer;
});