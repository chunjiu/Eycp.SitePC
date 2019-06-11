/****************************************************************
 *
 *                      号码推荐容器（存放号码推荐首页所有逻辑）
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
    '../../../actions/hmtj/hmtj.action',
    '../../publicComponent/public/loading.component',
    '../../publicComponent/chart/changeState.component'
], function(
    _,
    $,
    _Backbone,
    _String,
    _EventService,
    _TimerContainer,
    _LotteryAction,
    _HmtjAction,
    _LoadingComponent,
    _ChangeStateComponent
) {

    var HmtjContainer = {

        /**
         *  初始化函数
        */
        initialize: function(_lotteryCode, _stype,  _isAwarding, _nowPeriod, _isDetail, _expertId) {

            _TimerContainer.initialize(_lotteryCode, 'history');

            _LotteryAction.initialize(_lotteryCode, 'digit');

            _HmtjAction.initialize();

            HmtjContainer.lotteryCode = _lotteryCode;

            HmtjContainer.stype  = _stype;

            HmtjContainer.isDetail = _isDetail;

            HmtjContainer.quantity = 10;

            if(_isDetail){

                HmtjContainer.expertId = _expertId;
            }

            /** 当正在开奖中 */
            if(_isAwarding) {

                _LotteryAction.loopResult(nowPeriod);
            }

            /** 初始化loading组件 */
            var loadingComponent = new _LoadingComponent();

            /**
             *  当开奖的时候
             */
            _EventService.on('awardHTML_lotteryAction', function(_data) {

                $('.public-lotteryLatestInfo').html(_data.timer);

                /** 创建loading */
                _EventService.emit('createLoading_loadingComponent');

                /**
                 *  如果是专家号码推荐详情
                 */
                if(HmtjContainer.isDetail){

                    /** 请求接口 */
                    _HmtjAction.requestHmtjDetail(HmtjContainer.lotteryCode, HmtjContainer.stype, HmtjContainer.expertId, HmtjContainer.quantity, function (_result) {

                        /** 销毁loading */
                        _EventService.emit('delLoading_loadingComponent');

                        $('.expertsRecommendBlock').html(_result.html);

                        /** 添加角标 */
                        if(HmtjContainer.lotteryCode == 'fc3d' || HmtjContainer.lotteryCode == 'pl3'){

                            HmtjContainer.addCornerMarker();
                        }

                    });

                    /**
                     *  否则则为专家号码推荐列表
                     */
                }else{

                    /** 请求接口 */
                    _HmtjAction.requestHmtj(HmtjContainer.lotteryCode, HmtjContainer.stype, HmtjContainer.quantity, function (_result) {

                        /** 销毁loading */
                        _EventService.emit('delLoading_loadingComponent');

                        $('.main-expertsRecommendPage').html(_result.html);

                        /** 添加角标 */
                        if(HmtjContainer.lotteryCode == 'fc3d' || HmtjContainer.lotteryCode == 'pl3'){

                            HmtjContainer.addCornerMarker();
                        }

                    });

                }

            });

            /** 添加角标 */
            if(HmtjContainer.lotteryCode == 'fc3d' || HmtjContainer.lotteryCode == 'pl3'){

                HmtjContainer.addCornerMarker();
            }


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
             *   样式
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

                HmtjContainer.quantity  = parseInt(_this.attr('data-num'));

                _this.parents('.public_selectPlugIn').find('.selectedText').html(_this.html());

                /** 创建loading */
                _EventService.emit('createLoading_loadingComponent');
                
                /**
                 *  如果是专家号码推荐详情
                 */
                if(HmtjContainer.isDetail){

                    /** 请求接口 */
                    _HmtjAction.requestHmtjDetail(HmtjContainer.lotteryCode, HmtjContainer.stype, HmtjContainer.expertId, HmtjContainer.quantity, function (_result) {

                        /** 销毁loading */
                        _EventService.emit('delLoading_loadingComponent');

                        $('.expertsRecommendBlock').html(_result.html);

                        /** 添加角标 */
                        if(HmtjContainer.lotteryCode == 'fc3d' || HmtjContainer.lotteryCode == 'pl3'){

                            HmtjContainer.addCornerMarker();
                        }

                    });

                /**
                 *  否则则为专家号码推荐列表
                */
                }else{

                    /** 请求接口 */
                    _HmtjAction.requestHmtj(HmtjContainer.lotteryCode, HmtjContainer.stype, HmtjContainer.quantity, function (_result) {

                        /** 销毁loading */
                        _EventService.emit('delLoading_loadingComponent');

                        $('.main-expertsRecommendPage').html(_result.html);

                        /** 添加角标 */
                        if(HmtjContainer.lotteryCode == 'fc3d' || HmtjContainer.lotteryCode == 'pl3'){

                            HmtjContainer.addCornerMarker();
                        }

                    });

                }
            });


            /**
             *  排序
             */
            $('body').on('click','.lt-tableThBlock', function () {

                /** true表示升序排列，false降序排序 */
                var _sortType;
                var _column;
                var _tableIndex;

                if($(this).find('.top').hasClass('active')){

                    $(this).find('.top').removeClass('active');
                    $(this).find('.bottom').addClass('active');
                    _sortType = false;

                }else{

                    $(this).find('.top').addClass('active');
                    $(this).find('.bottom').removeClass('active');
                    _sortType = true;

                }

                _column = $(this).parent().index();

                /** 注意，这里要判断一下当前是第几个table，否则会点击排序影响到其他的table那边去了 */
                _tableIndex = $(this).parents('.erb-lis').index();

                /** 排序当前列 */
                _ChangeStateComponent.sortColumn('.public-table table:eq('+_tableIndex+')',_column, _sortType);

            })

        },


        /**
         *
         * @param _lotteryCode
         * @param _type
         * @param _expertId
         * @param _quantity
         * @param _callBack
         */
        requestHmtjDetail: function (_lotteryCode, _type, _expertId, _quantity , _callBack) {

            _HmtjAction.requestHmtjDetail(_lotteryCode, _type, _expertId, _quantity, _callBack);

        },

        /**
         *
         * @param _lotteryCode
         * @param _type
         * @param _quantity
         * @param _callBack
         */
        requestHmtj: function (_lotteryCode, _type, _quantity , _callBack) {

            _HmtjAction.requestHmtj(_lotteryCode, _type, _quantity, _callBack);

        },

        /**
         *  添加角标
         */
        addCornerMarker: function () {

            $('.public-table tr:gt(1)').each(function (index, item) {

                $(item).find('td:gt(1)').not(':last-child').each(function (cindex,citem) {

                    var _iNumber = parseInt($(citem).attr('data-awardnumber'));
                    var _redNumber = $(citem).find('.font-red').length;

                        /** 所有号都全中了，添加角标 */
                        if(_redNumber == _iNumber){

                            $(citem).addClass('bg-selected');

                        }

                });
            });
        }

    }



    return HmtjContainer;
       
})
