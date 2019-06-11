/****************************************************************
 *
 *                      列表页容器（存放列表页所有逻辑）
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


            _lotteryCode = (_lotteryCode != 'undefined' ? _lotteryCode : undefined);


            // 初始化分页组件
            _PageContainer.initialize();

            _EventService.on('activePage_pageContainer', function (pageIndex) {

                var classityCode = $('#listTab a.active').attr('data-classityCode');

                var categoryId = $('#listTab a.active').attr('data-categoryId');

                if(!classityCode && !classityCode) {

                    if(_lotteryCode){
                        classityCode = _lotteryCode;
                    }else{
                        classityCode = '0';
                    }


                    if(location.pathname.indexOf('/5/') > 0) {

                        categoryId = '5';

                    }else if(location.pathname.indexOf('37') > 0){

                        categoryId = '37';

                    }else if(location.pathname.indexOf('39') > 0){

                        categoryId = '39';

                    }else if(location.pathname.indexOf('40') > 0){

                        categoryId = '40';

                    }else if(location.pathname.indexOf('41') > 0){

                        categoryId = '41';

                    }else if(location.pathname.indexOf('5') > 0){

                        categoryId = '5';

                    }else{

                        categoryId = '6';

                    }

                }

                console.log(classityCode, categoryId)

                var _url = '/article/list-'+classityCode+'-'+categoryId+'-p'+pageIndex;

                window.location.href =  _url;

            })


            /** 给资讯右方的公共设置cookie */
            if(_lotteryCode=='0' || _lotteryCode =='other'  || _lotteryCode =='11x5' || _lotteryCode =='k3' || _lotteryCode =='kl10' || _lotteryCode =='ssc' ){
                isNeedCookie = true;
            }else{
                isNeedCookie = false;
            }
            _ArticleRightNoticeCookieContainer.initialize(_lotteryCode, isNeedCookie);
            
        }
    }

    return ListContainer;
})