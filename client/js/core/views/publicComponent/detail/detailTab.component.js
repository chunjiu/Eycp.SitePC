/** ================================================
 *
 *                            详情页tab组件
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


    var DetailTabComponent = _Backbone.View.extend({

        el: '#tab',
        events:{
            'click a': 'handleClick'
        },

        /** 构造函数 */
        initialize: function (lotteryType) {

            if(lotteryType!=undefined){
                $(this.el).find("a.active").removeClass("active");
                $(this.el).find("a[data-tab='"+lotteryType+"']").addClass("active");
            }

        },
        handleClick: function (_evt) {

            var _evtTarget = $(_evt.currentTarget);
            var _index = _evtTarget.parent().index();

            _evtTarget.parent().parent().find('a').removeClass('active');
            _evtTarget.addClass('active');

             window.location.href =  $("#leftNav ul").eq(_index).find(".subNavBlock a").eq(0).attr("href");
             /** tab切换分类导航 */
             _EventService.emit('showLeftNav_DetailLeftNavComponent', _index);

        }

    })

    return DetailTabComponent;

})