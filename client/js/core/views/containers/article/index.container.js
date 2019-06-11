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
    '../../publicComponent/public/swiper.component',
    '../../../actions/plan/plan.action',
    '../../../actions/point/point.action'
], function(
    _,
    $,
    _Backbone,
    _EventService,
    _SwiperComponent,
    _PlanAction,
    _PointAction
) {

    var IndexContainer = {

        initialize: function () {

            var _this = this;

             /** 初始化action */
            _PlanAction.initialize();

            /** 初始化提点action */
            _PointAction.initialize();


            /** 初始化轮播图 */
            var swiperComponent = new _SwiperComponent(3000);

            /** 资讯列表tab切换 */
            $('body').on('click','.ah-skillIntroduce .si-menu  a', function () {
                $(this).parents('.ah-skillIntroduce').find('.si-menu  a').removeClass('active');
                $(this).addClass('active');

                var _index = parseInt($(this).attr('data-index'));

                $(this).parents('.ah-skillIntroduce').find('ul').each(function (index, item) {

                    if(index == _index){
                        $(item).show();
                    }else{
                        $(item).hide();
                    }

                });
            });


            /** 07:05:00和14:05:00更新提点和追号 */
            _this.refreshPlanAndPoint($('#plan').attr('data-systime'));


            /** 倒计时更新追号推荐(追号推荐二分钟刷新一次)*/
            _this.countDownPlan(120000);
        },

        /** 刷新提点和推荐 */
        refreshPlanAndPoint: function (_systime) {

            var _this = this;
            var _nowYear = _systime.split(' ')[0];

            var amTime = new Date(_nowYear+" 07:05:00");
            var pmTime = new Date(_nowYear+" 14:05:00");

            /** 系统时间搓 */
            var  systime = new Date(_systime);

            var diff;

            /** 早上时间搓 */
            if(systime <= amTime){
                diff = amTime - systime;
            }else if(systime >= amTime  && systime <= pmTime){
                diff = pmTime - systime
            }else{
                return;
            }

            _this.countDownUpdate(diff);

        },

        /** 倒计时更新追号推荐(追号推荐一分钟刷新一次)*/
        countDownPlan: function (_time) {

            window.setInterval(function () {

                _PlanAction.requestPlan(function (_result) {

                    if(_result !=undefined){
                        $('#plan').find('tr').not(':first-child').remove();
                        $('#plan').find('tr:first-child').after(_result.resultHtml);
                    }else{
                        console.error('追号推荐返回来的数据有问题！');
                    }

                });


            },_time);

        },

        /** 倒计更新提点和追号推荐 */
        countDownUpdate: function (_allCountDownTime) {

            window.setTimeout(function () {

                _PointAction.requestPoint(function (_result) {

                    if(_result !=undefined){

                        $('#point ul').html(_result.resultHtml);

                    }else{
                        console.error('追号推荐返回来的数据有问题！');
                    }

                })

            },_allCountDownTime);

        }


    }

    return IndexContainer;
})