/** ================================================
 *
 *                            数字彩详情页组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service'
], function (
    _,
    $,
    _Backbone,
    _EventService
) {

    var DetailAwardGradeComponent = _Backbone.View.extend({

        el: '#detailAwardGrade',
        ballList: '#ballList',
        lotteryDateTime: '#lotteryDateTime',
        tableList: '#list',
        amount: '#amount',
        initialize: function () {

            var _this = this;

            /** 更新奖项信息列表得信息 */
            _EventService.on('renderAwardGrade_DetailAwardGradeComponent', function (_value) {

                _this.renderAwardGrade(_value);

            })

        },

        /**  渲染奖项信息 */
        renderAwardGrade: function (_value) {

              var _this = this;

              if(_value){

                  $(_this.ballList).html(_value.ballList);
                  $(_this.lotteryDateTime).html(_value.lotteryDateTime);
                  $(_this.tableList).html(_value.list);
                  $(_this.amount).html(_value.amount);

                  /** 销毁loading */
                  _EventService.emit('delLoading_loadingComponent');

              }else{
                  console.error('renderAwardGrade_DetailAwardGradeComponent： 接受到返回来得数据为空！');
              }
        }

    })

    return DetailAwardGradeComponent;

})