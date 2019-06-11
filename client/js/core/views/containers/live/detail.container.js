/****************************************************************
 *                      视频详情容器（存放视频详情所有逻辑）
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    '../../../services/event.service',
    '../public/timer.container',
    '../../../actions/public/lottery.action'
], function(
    _,
    $,
    _Backbone,
    _String,
    _EventService,
    _TimerContainer,
    _LotteryAction
) {

    var LotteryContainer = {

        initialize: function(lotteryCode, classify, isAwarding, nowPeriod) {


            _TimerContainer.initialize(lotteryCode, 'history');

            if(classify == 'local'){
                _LotteryAction.initialize(lotteryCode, 'digit');
            }else{
                _LotteryAction.initialize(lotteryCode, classify);
            }

            if(isAwarding) {
                _LotteryAction.loopResult(nowPeriod);
            }

            /** 初始化事件 */
            this.initEvent(lotteryCode);

            /** 分享按钮事件 */
            this.shareButtonEvent();
            this.shareEvent();

            /**
             *  整个页面移动到标题位置
             */
           $('html').animate({scrollTop: $('.titleText').offset().top},10);


        },
        initEvent: function(lotteryCode) {
            _EventService.on('awardHTML_lotteryAction', function(data) {
                $('.public-lotteryLatestInfo').html(data.timer);
                $('.history-body').html(data.index);

                // /** 如果不是历史得，那么就让它更新 */
                // if($('.titleText').attr('data-issueno') !=''){
                //     $('.titleText').html($('.next-period').html()+"历史开奖");
                // }

            });
            // if("bjkl8" == lotteryCode || lotteryCode.indexOf("ssc")>=0){
            //     $("#livePlay").css({"height":"780px"});
            // }else if("gxkl10" == lotteryCode ){
            //     $("#livePlay").css({"height":"730px"});
            // }
        },
        /**
         *  分享按钮效果
         */
        shareButtonEvent: function () {

            $('#shareButton').mouseenter(function () {
                $('#shareConent').show();
            })

            $('#shareButton').mouseleave(function () {
                $('#shareConent').hide();
            })

        },
        shareEvent: function() {
            var url = encodeURIComponent(window.location.href);
            var title = encodeURIComponent(document.title);
            var obj = {
                'qzone' : 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title,
                'weibo' : 'http://service.weibo.com/share/share.php?url=' + url + '&title=' + title
            }

            $('#qzone').attr('href', obj.qzone);
            $('#weibo').attr('href', obj.weibo);
        }
    }

    return LotteryContainer;
       
})
