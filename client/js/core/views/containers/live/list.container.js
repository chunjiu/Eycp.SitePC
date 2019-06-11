/****************************************************************
 *
 *                      视频直播容器（存放视频直播所有逻辑）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../public/page.container',
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _PageContainer
) {

    var ListContainer = {

        initialize: function () {

            // 初始化分页组件
            _PageContainer.initialize();

            this.initEvent();

        },
        initEvent: function () {

            _EventService.on('activePage_pageContainer', function (pageIndex) {

                var _lotteryCode = $('#list').attr('data-lotterycode');
                var _url = '/live/'+_lotteryCode+'/list';

                window.location.href =  _url+ '/page_' + pageIndex;

            })

            /** 切换tab */


        }
    }

    return ListContainer;
})