/****************************************************************
 *                      提点列表
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
    var PointContainer = {

        initialize: function(_lotteryCode, _isNeedCookie) {
            // 初始化分页组件
            _PageContainer.initialize();
            this.initEvent();


            _isNeedCookie = (_lotteryCode == 'undefined' ? true : false );

            /** 给资讯右方的公共设置cookie */
            _ArticleRightNoticeCookieContainer.initialize(_lotteryCode, _isNeedCookie);

        },
        initEvent: function() {

            _EventService.on('activePage_pageContainer', function(pageIndex){
                var _groupId = $('#pointContainer').data('groupid');
                var _lotteryCode = $('#pointContainer').data('lotterycode');
                var _url = '/point';
                _url += _groupId ? '/' + _groupId : '';
                _url += _lotteryCode ? '-' + _lotteryCode : '';
                if(_groupId>0){
                    window.location.href = _url + '-p' + pageIndex;
                }else{
                    window.location.href = _url + '/p' + pageIndex;
                }
            });

            // 切换彩种
            $(document).on('click', '.point-category', this.changeCategory);
            // 选择具体彩种
            $(document).on('click', '.second-lottery', this.selectLottery);
        },
        changeCategory: function() {
            var _value = $(this).data('id');
            var _url="/point";
            if(_value!="0"){
                _url+="/"+ _value;
            }
            window.location.href = _url;
        },
        selectLottery: function() {
            var _value = $(this).data('code');
            var _groupId = $('#pointContainer').data('groupid');
            if(_value) {
                window.location.href = '/point/' + _groupId + '-'+ _value;
            } else {
                window.location.href = '/point/' + _groupId;
            }
        }
    }

    return PointContainer;
});