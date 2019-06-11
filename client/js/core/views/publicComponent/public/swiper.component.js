/** ================================================
 *
 *                    banner轮播模块组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'String',
    'Date',
    'backbone',
    '../../../services/event.service',
], function (
    _,
    $,
    _String,
    _Date,
    _Backbone,
    _EventService
) {

    var  SwiperComponent = _Backbone.View.extend({

        el: '#banner',
        id: '#banner',
        page:"#page",
        events: {
            'click #page span': 'handleCickPage',
            'mouseenter': 'handleMouseEnter',
            'mouseleave': 'handleMouseLeave'
        },
        /** 初始化构造函数 */
        initialize: function (_time) {


            var _this = this;
            _this.len  = $(_this.id).find('li').length;
            _this.time = _time;

            if(_this.len > 1){
                var _width = $(_this.id).find('li').eq(0).outerWidth();
                $(_this.id).find('li').css({width: _width, 'float': 'left'});
                $(_this.id).find('ul').css({width: _width*_this.len});

                _this.addPage(_this.len);

                /** 启动轮播图 */
                _this.startSwiper(_this.time);
            }

        },

        /**
         *  移入事件
         */
        handleMouseEnter: function () {

            var _this = this;

            if(_this.len>1){

                window.clearInterval(_this.clearInterval);
            }else{

                return;
            }

        },

        /**
         *  移出事件
         */
        handleMouseLeave: function () {

            var _this = this;

            if(_this.len>1){
               /** 启动轮播图 */
               _this.startSwiper(_this.time);
            }else{
                return;
            }
        },

        /**
         * 启动轮播图
         */
        startSwiper: function () {

            var _this = this;

            _this.clearInterval = window.setInterval(function () {

                _this.swiperLeft();

            }, _this.time);

        },

        /**
        *  点击分页器;
        * @param
        */
        handleCickPage: function (_evt) {

             var _this = this;
             var _evtTarget = $(_evt.currentTarget);

            _evtTarget.parent().find('span').removeClass('active');
            _evtTarget.addClass('active');

            var activeLi =  parseInt($(_this.id).find('li').eq(0).attr('data-index'));
            var evtAtive = parseInt(_evtTarget.attr('data-index'));

            /** 用户选中了一个比当前显示得index大的索引 , 那么就是向左边移动*/
            if(evtAtive > activeLi){

               var tempNum =  evtAtive - activeLi

               var clearInterval = window.setInterval(function () {

                    if(tempNum == 0){
                        window.clearInterval(clearInterval);
                    }else{
                        tempNum--;
                        _this.swiperLeft();
                    }
                },600);

            }else{

                var tempNum =  activeLi - evtAtive

                var clearInterval = window.setInterval(function () {

                    if(tempNum == 0){
                        window.clearInterval(clearInterval);
                    }else{
                        tempNum--;
                        _this.swiperRight();
                    }
                },600);

            }

        },

       /**
        *  向左边移动;
        * @param _num
       */
        swiperLeft: function () {

           var _this = this;

           var _width = $(_this.id).find('li').eq(0).outerWidth();

           $(_this.id).find('li').eq(0).stop(true,false).animate({'margin-left': -(_width)}, 300, function () {

               var tempDom = $(_this.id).find('li').eq(0).removeAttr('style');
               $(_this.id).find('li').eq(0).remove();
               $(_this.id).find('ul').append(tempDom);
               $(_this.id).find('li').css({width: _width, 'float': 'left'});

               var index = $(_this.id).find('li').eq(0).attr('data-index');
               $(_this.page).find('span').removeClass('active');
               $(_this.page).find('span').eq(index).addClass('active');

           });

        },

        /**
         *  向右边移动;
         * @param _num
        */
        swiperRight: function () {

            var _this = this;

            var _width = $(_this.id).find('li').eq(0).outerWidth();
            var _num   = $(_this.id).find('li').length;


            var tempDom = $(_this.id).find('li:last-child');
            $(_this.id).find('li:last-child').remove();
            $(_this.id).find('ul').prepend(tempDom);
            $(_this.id).find('li:first-child').css({'marginLeft': -(_width)});

            $(_this.id).find('li:first-child').stop(true,false).animate({'margin-left': 0}, 300, function () {

                $(_this.id).find('li').removeAttr('style');
                $(_this.id).find('li').css({width: _width, 'float': 'left'});

                var index = $(_this.id).find('li').eq(0).attr('data-index');
                $(_this.page).find('span').removeClass('active');
                $(_this.page).find('span').eq(index).addClass('active');
            })

        },

        /**
         *  添加分页器;
         * @param _len
         */
        addPage: function (_len) {

            var _this = this;
            var _stringHtml = '';

            for(var i=0; i<_len; i++){
                if(i==0){
                    _stringHtml+='<span class="active" data-index="'+i+'"></span>'
                }else{
                    _stringHtml+='<span class="" data-index="'+i+'"></span>'
                }

            }

            $(_this.page).append(_stringHtml);

        }

    })


   return SwiperComponent;

})
