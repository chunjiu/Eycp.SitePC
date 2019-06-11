/****************************************************************
 *
 *                      杀胆号码容器（存放杀胆号码首页所有逻辑）
 *
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'String',
    '../../../services/event.service',
    '../public/timer.container',
    '../../../actions/public/lottery.action',
    '../../../actions/shdd/shdd.action',
    '../../publicComponent/public/loading.component'
], function(
    _,
    $,
    _Backbone,
    _String,
    _EventService,
    _TimerContainer,
    _LotteryAction,
    _ShddAction,
    _LoadingComponent
) {

    var ShddContainer = {

        /**
         *  初始化函数
         */
        initialize: function(_lotteryCode, _stype,  _isAwarding, _nowPeriod) {

            _TimerContainer.initialize(_lotteryCode, 'history');

            _LotteryAction.initialize(_lotteryCode, 'digit');

            _ShddAction.initialize();

            ShddContainer.lotteryCode = _lotteryCode;

            ShddContainer.stype  = _stype;

            ShddContainer.quantity = 10;

            /** 初始化loading组件 */
            var loadingComponent = new _LoadingComponent();

            /** 当正在开奖中 */
            if(_isAwarding) {

                _LotteryAction.loopResult(_nowPeriod);
            }

            /** 由于福彩3d和排列3都是单个也算中奖的，所以要对这两个彩种单独做处理 */
            if(_lotteryCode == 'fc3d' || _lotteryCode == 'pl3'){

                this.isSingle = true;

            }else{

                this.isSingle = false;
            }

            /**
             *  当开奖的时候
             */
            _EventService.on('awardHTML_lotteryAction', function(_data) {

                $('.public-lotteryLatestInfo').html(_data.timer);

                /** 创建loading */
                _EventService.emit('createLoading_loadingComponent');

                /** 请求接口 */
                ShddContainer.requestShdd(ShddContainer.lotteryCode, ShddContainer.stype, ShddContainer.quantity, function (_result) {

                    /** 销毁loading */
                    _EventService.emit('delLoading_loadingComponent');

                    $('.main-expertsRecommendPage').html(_result.html);

                    /**
                     *  添加角标
                     */
                    ShddContainer.addCornerMarker(ShddContainer.isSingle);

                })

            });

            /**
             *  添加角标
             */
            this.addCornerMarker(this.isSingle);

            /**
             *  初始化事件
            */
            this.initEvent();
        },

        /**
         *  初始化事件
         */
        initEvent: function() {

            /**
             * 样式
             */
            $('body').on('mouseover', '.nameBlock a', function() {
                $(this).parent().parent().find('span').css('color', '#e33d3d');
            });
            $('body').on('mouseout', '.nameBlock a', function() {
                $(this).parent().parent().find('span').css('color', '#333333');
            });

            /**
             * 切换走势/遗漏图表
             */
            $('body').on('click', '.afb-titleB .title', function() {

                var _this = $(this);

                /** 切换样式 */
                $(".afb-titleB .title").removeClass('active');
                _this.addClass('active');

                /** 切换内容 */
                var dataType = _this.attr('data-type');
                $(".public-allFunBlock .afb-contentB").hide();
                $("#" + dataType).show();
            });

            /**
             *  切换期数，请求当前选中的期数
             */
             $('body').on('click','.public_selectPlugIn', function () {

                 var _this = $(this);

                 if(_this.hasClass('active')){
                     _this.removeClass('active');
                     _this.find('.selectOption').hide();
                 }else{
                     _this.addClass('active');
                     _this.find('.selectOption').show();
                 }

             });

            /**
             *  点击下拉框
             */
            $('body').on('click','.public_selectPlugIn  .lis', function () {

                var _this = $(this);

                ShddContainer.quantity = parseInt(_this.attr('data-num'));

                _this.parents('.public_selectPlugIn').find('.selectedText').html(_this.html());

                /** 创建loading */
                _EventService.emit('createLoading_loadingComponent');

                /** 请求接口 */
                ShddContainer.requestShdd(ShddContainer.lotteryCode, ShddContainer.stype, ShddContainer.quantity, function (_result) {

                    /** 销毁loading */
                    _EventService.emit('delLoading_loadingComponent');

                    $('.main-expertsRecommendPage').html(_result.html);

                    /**
                     *  添加角标
                     */
                    ShddContainer.addCornerMarker(ShddContainer.isSingle);

                })

            });

        },


        /**
         *
         * @param _lotteryCode
         * @param _type
         * @param _quantity
         * @param _callBack
         */
        requestShdd: function (_lotteryCode, _type, _quantity , _callBack) {

            _ShddAction.requestShdd(_lotteryCode, _type, _quantity, _callBack);

        },


        /**
         *  添加角标
         */
        addCornerMarker: function (_isSingle) {

            _isSingle = (_isSingle==undefined ? false: _isSingle);

            $('.public-table tr:gt(1)').each(function (index, item) {

                $(item).find('td:gt(1)').not(':last-child').each(function (cindex,citem) {

                    var _iNumber = $(citem).find('i').length;
                    var _redNumber = $(citem).find('.font-red').length;

                        if(_isSingle == false){
                            /** 所有号都全中了，添加角标 */
                            if(_redNumber == _iNumber){

                                $(citem).addClass('bg-selected');

                            }
                        }else{
                            /** 有一个中也添加角标 */
                            if(_redNumber > 0){

                                $(citem).addClass('bg-selected');

                            }
                        }

                });

            });

        }


    }

    return ShddContainer;
       
})
