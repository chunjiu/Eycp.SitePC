/****************************************************************
 *
 *                      详情页容器（存放详情页所有逻辑）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../public/articleRightNoticeCookie.container'
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _ArticleRightNoticeCookieContainer
) {

    var DetailContainer = {

        initialize: function (_lotteryCode, _type) {

            $('body').on('click','#articleTab a', function () {
                $('#articleTab a').removeClass('active');
                $(this).addClass('active');

                var code = $(this).attr('data-code');
                $('.pl_lis').each(function (index, item) {

                    if($(item).hasClass(code)){
                        $(item).show();
                    }else{
                        $(item).hide();
                    }

                });

            })


            var _isNeedCookie = (_lotteryCode == 'undefined' ? true : false);

            /** 给资讯右方的公共设置cookie */
            _ArticleRightNoticeCookieContainer.initialize(_lotteryCode, _isNeedCookie, _type);
        }

    }

    return DetailContainer;
})