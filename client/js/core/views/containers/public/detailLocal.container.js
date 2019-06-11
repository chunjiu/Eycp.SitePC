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
    '../../publicComponent/detail/detailAwardGrade.component',
    '../../publicComponent/public/selectPlugIn.component',
    '../../publicComponent/public/loading.component',
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
    _DetailAwardGradeComponent,
    _SelectPlugInComponent,
    _LoadingComponent,
    _LotteryAction
) {


    var DetailContainer = {

        initialize: function (lotteryCode, lotteryType) {

            var _this = this;
            var _type = 'number';


            /** 初始化详情页tab组件 */
            var detailTabComponent           = new _DetailTabComponent();

            /** 初始化左边导航组件 */
            var detailLeftNavComponent    = new _DetailLeftNavComponent();

            /** 初始化详情页倒计组件 */
            var detailTimeBlockComponent = new _DetailTimeBlockComponent();

            /** 初始化下拉框组件 */
            var selectPlugInComponent      = new _SelectPlugInComponent({ type: _type });

            /** 初始化列表组件 */
            var detailAwardGradeComponent   = new _DetailAwardGradeComponent(lotteryCode, lotteryType);

            /** 初始化loading组件 */
            var loadingComponent = new _LoadingComponent();

            /** 开启倒计时 */
            _TimerContainer.initialize(lotteryCode, 'history');

            /** 初始化action */
            _LotteryAction.initialize(lotteryCode, lotteryType);

             /** 初始化detailTab  */
             detailTabComponent.initialize(lotteryType);

            /** 由于数字彩不需要倒计时完了去刷新开奖历史，因此一开始就设置这个值为false */
            _EventService.emit('isGetAwardData_timerContainer', false);

            /** 拿到select组件转过来得值 */
            _EventService.on('clickSelectNumber_selectPlugInComponent', function (_value) {

                /** 创建loading */
                _EventService.emit('createLoading_loadingComponent');

                /** 请求奖项信息 */
                _LotteryAction.getIssuenoData(parseInt(_value), _this.getAwardCallBack);

                /** 让列表去更新 data-attribute 这个属性 */
                _EventService.emit('updateAttribute_detailListComponent', _value);

            });

        },

        /**
         *   获取开奖结果回调;
         */
        getAwardCallBack: function(_result){

            _EventService.emit('renderAwardGrade_DetailAwardGradeComponent', _result);

        }

    }

    return DetailContainer;

})