/** ================================================
 *
 *                            弹框组件
 *                           new 对象的时候需要传入一个对象包含content,btnText, opt.title和两个个可选的callback
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service',
    '../../../model/alertPlugin.model'
], function (
    _,
    $,
    _Backbone,
    _EventService
) {
    var AlertPluginComponent = _Backbone.View.extend({
        tagName: "div",
        className: "public-popUpWindows",
        id: "eyuAlert",
        attributes: {
            style: 'display: block;'
        },
        events: {
            "click .close": "closeAlert",
            "click .btn": 'okAlert'
        },
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html('<div class="puw-contentB">' + 
                '<div class="titleB"><span class="title">'+ this.model.get('title') +'</span><i class="close"></i></div>'+
                '<div class="content">'+ this.model.get('content') +'</div>' +
                '<span class="btn">'+ this.model.get('btnText') +'</span></div>');
            
            return this;
        },
        closeAlert: function(){
            $('#eyuAlert').remove();
            var _close = this.model.get('closeCallback');
            if(typeof _close === 'function') {
                _close.call(this);
            }

            _EventService.emit('closeAlert_component');
        },
        okAlert: function() {
            $('#eyuAlert').remove();
            var _ok = this.model.get('okCallback');
            if(typeof _ok === 'function') {
                _ok.call(this);
            }
            _EventService.emit('okAlert_component');
        },
        show: function() {
            this.$el.appendTo($('body'));
        }
    });

    return AlertPluginComponent;
});