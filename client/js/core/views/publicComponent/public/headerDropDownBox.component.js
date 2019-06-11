/** ================================================
 *
 *                           头部下拉框组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service'
], function(
    _,
    $,
    _Backbone,
    _EventService
) {

    var HeaderDropDownBoxComponent = _Backbone.View.extend({


        initialize: function() {
            var type = '' //用于区分显示谁的二级导航
            $(document).ready(function() {
                /*导航效果 还原*/
                $(".eyu100-header .nav-li").mouseenter(function() {
                    type = $(this).attr("type")
                    console.log("type", type)
                    if (!$(this).find(".nav").hasClass('hover')) {
                        //console.log(1)
                        $(this).find(".line").stop(true, false).animate({
                                width: '100%',
                                marginLeft: '-50%',
                                opacity: 1,
                                height: '3px',
                                bottom: 0
                            },
                            400);
                        $(this).find(".nav").addClass("active");
                    }
                    $(this).find("." + type).stop(true, false).slideDown(500);
                }).mouseleave(function() {
                    var _this = $(this);
                    if (!$(this).find(".nav").hasClass('hover')) {
                        $(this).find(".line").stop(true, false).animate({
                                width: '0%',
                                marginLeft: '0',
                                opacity: 0,
                                height: 0,
                                bottom: '3px'
                            },
                            400,
                            function() {
                                _this.find(".nav").removeClass("active");
                            });
                    }
                    if ($.support.msie && ($.support.version == "7.0")) {
                        $(this).find("." + type).hide();
                    } else {
                        $(this).find("." + type).fadeOut(200);
                    }
                    $(this).find("." + type).stop(true, false).slideUp(300);
                });


                /** 当移开中间区域得时候 */
                $('.headerDropdown').mouseleave(function(_evt) {

                    _evt.stopPropagation();

                    $(this).parents("." + type).stop(true, false).slideUp(300);


                })


                /*首页彩种类型选择动画*/
                $(".lmb-content .name").mouseenter(function() {
                    var w = $(this).outerWidth();
                    var y = $(this).position().left;
                    $(".lmb-content .borBot").stop(true, false).animate({
                            width: w + 'px',
                            left: y + 'px'
                        },
                        200);
                });
                $(".lmb-content").mouseleave(function() {
                    var actW = $(".lmb-content .active").outerWidth();
                    var actY = $(".lmb-content .active").position().left;
                    $(".lmb-content .borBot").stop(true, false).animate({
                            width: actW + 'px',
                            left: actY + 'px'
                        },
                        300);
                });

                /*首页所有彩种的淡入淡出*/
                $(".ip-menu .first-dl").mouseenter(function() {
                    $(this).find(".ip-menuSuperposedLayer").fadeIn(400);
                }).mouseleave(function() {
                    //还原
                    $(this).find(".ip-menuSuperposedLayer").hide();
                })
            })


        }

    })


    return HeaderDropDownBoxComponent;
})