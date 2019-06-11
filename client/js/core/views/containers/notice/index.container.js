/****************************************************************
 *
 *                      列表容器（存放列表所有逻辑）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../public/page.container',
    '../public/articleRightNoticeCookie.container'
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _PageContainer,
    _ArticleRightNoticeCookieContainer
) {

    var ListContainer = {

        initialize: function (_lotteryCode, isNeedCookie) {

            // 初始化分页组件
            _PageContainer.initialize();

            this.initEvent();

            /** 给资讯右方的公共设置cookie */
            _ArticleRightNoticeCookieContainer.initialize(_lotteryCode, isNeedCookie);

        },
        initEvent: function () {

            _EventService.on('activePage_pageContainer', function (pageIndex) {

                var _url = '/notice';

                window.location.href =  _url+ '/page_' + pageIndex;

            })

        }
    }

    return ListContainer;
})