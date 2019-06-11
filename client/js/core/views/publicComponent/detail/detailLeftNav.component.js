/** ================================================
 *
 *                            详情页左边导航组件
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

    var DetailLeftNavComponent = _Backbone.View.extend({

        el: '#leftNav',
        events: {
          'click  li': 'handleClick'
        },
        initialize: function () {

            var _this = this;

            /** 监听tab切换分类导航 */
            _EventService.on('showLeftNav_DetailLeftNavComponent', function (_index) {

                 $(_this.el).find('ul').hide();
                 $(_this.el).find('ul').eq(_index).show();
            })

        },
        handleClick: function (_evt) {

            var _evtTarget = $(_evt.currentTarget);

            if(_evtTarget.hasClass('active')){
                _evtTarget.removeClass('active');
            }else{
                _evtTarget.addClass('active');
            }

        }

    })

    return DetailLeftNavComponent;

})