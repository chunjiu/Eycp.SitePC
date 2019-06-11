/** ================================================
 *
 *                            loading组件
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

     var LoadingComponent = _Backbone.View.extend({

         el: '#loading',
         id: '#loading',
         initialize: function () {

             var _this = this;

             /** 创建loading */
             _EventService.on('createLoading_loadingComponent', function () {
                 _this.create();
             });

             /** 销毁loading */
             _EventService.on('delLoading_loadingComponent', function () {
                 _this.del();
             });

         },

         /** 创建loading */
         create: function () {

             var _this = this;

             if($(_this.el).length == 0){
                 $('body').append('<div class="loadingSection"  id="loading"><div class="loadingIcon">正在加载中</div><div class="loadingMesk"></div></div>');
             }

         },

         /** 删除loading */
         del: function () {

             var _this = this;
             $(_this.id).remove();
         }

     })


    return LoadingComponent;
})
