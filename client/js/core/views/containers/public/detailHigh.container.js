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
    '../public/timer.container',
    '../../publicComponent/detail/detailTab.component',
    '../../publicComponent/detail/detailLeftNav.component',
    '../../publicComponent/detail/detailTimeBlock.component',
    '../../publicComponent/detail/detailList.component',
    '../../publicComponent/public/selectPlugIn.component',
    '../../../actions/public/lottery.action'
], function (
    _,
    $,
    _Backbone,
    _EventService,
    _TimerContainer,
    _DetailTabComponent,
    _DetailLeftNavComponent,
    _DetailTimeBlockComponent,
    _DetailListComponent,
    _SelectPlugInComponent,
    _LotteryAction
) {


    var DetailContainer = {

        initialize: function (lotteryCode, lotteryType) {

            var _this = this;
            var _type = 'time';

            /** 初始化详情页tab组件 */
            var detailTabComponent           = new _DetailTabComponent();

            /** 初始化左边导航组件 */
            var detailLeftNavComponent    = new _DetailLeftNavComponent();

            /** 初始化详情页倒计组件 */
            var detailTimeBlockComponent = new _DetailTimeBlockComponent();

            /** 初始化下拉框组件 */
            var selectPlugInComponent      = new _SelectPlugInComponent({ type: _type });

            /** 初始化列表组件 */
            var detailListComponent         = new _DetailListComponent(lotteryCode, lotteryType);

            /** 开启倒计时 */
            _TimerContainer.initialize(lotteryCode, 'history');

            /** 初始化action */
            _LotteryAction.initialize(lotteryCode, lotteryType);
            
            /** 初始化detailTab  */
             detailTabComponent.initialize(lotteryType);

            /** 拿到select组件转过来得值 */
            _EventService.on('clickSelect_selectPlugInComponent', function (_value) {

                _EventService.emit('loading_detailListComponent');

                _LotteryAction.getAwardHTML(_this.getAwardCallBack, _value);

                /** 让列表去更新 data-attribute 这个属性 */
                _EventService.emit('updateAttribute_detailListComponent', _value);

                /**
                 *   这里切换slect按钮得时候，需要去判断一下是否列表数据为今天数据，假如是当天，即可以更新开奖，假如不是当天数据，表示select选中
                 *   得不是当天，那么就不需要去请求开奖结果;
                 */
                _EventService.emit('isToday_detailListComponent',function (_isToday) {

                    if(_isToday){

                        _EventService.emit('isGetAwardData_timerContainer', true);
                    }else{

                        _EventService.emit('isGetAwardData_timerContainer', false);
                    }
                })


            });


            /** 拿到开奖结果并且更新模版 */
            _EventService.on('lotteryResults_timerComponent', function (_result) {

                _EventService.emit('renderList_detailListComponent', _result);

            });

            //展开选中
            $('.ld-publicSubNav li a').each(function(i,item){
                if($(this).hasClass("active")){
                     $(this).parent().parent().removeClass('active');
                    $(this).parent().parent().addClass('active');
                }
             });
        },

        /**
         *   获取开奖结果回调;
         */
        getAwardCallBack: function(_result){

            _EventService.emit('renderList_detailListComponent', _result.detail);

        }

    }

    return DetailContainer;

})