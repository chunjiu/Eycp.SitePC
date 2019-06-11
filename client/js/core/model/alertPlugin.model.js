/** ================================================
 *
 *        弹窗模型
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    '../services/event.service'
], function (
    _,
    $,
    _Backbone,
    _EventService
) {
    
    var AlertPluginModel = _Backbone.Model.extend({
        defaults: {
            content : '',
            title : '提示',
            btnText: '确定',
            okCallback: ''
        }
    });


    return AlertPluginModel;
});