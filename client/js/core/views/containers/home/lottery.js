/****************************************************************
 *                      开奖大厅
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'template',
    '../../publicComponent/public/alertPlugin.component',
    '../../../model/alertPlugin.model',
    '../../../actions/home/lotteryHall.action'
], function(
    _,
    $,
    _Backbone,
    _template,
    _AlertPluginComponent,
    _AlertPluginModel,
    _LotteryHallAction
) {

    var flag = true;
    var LotteryContainer = {
        
        /** 初始化 */
        initialize: function () {
            this.initEvent();
            _LotteryHallAction.initialize();
        },

        initEvent: function() {
            // 注册切换事件
            $(document).on('click', '.category', this.changeCategory);
            $(document).on('click', '.high-category', this.changeChilds);
            $(document).on('click', '.province', this.changeProvince);
            //$(document).on('click', '.trend,.omit', this.alertInfo);
            $(document).on('click', '#btnQuery', this.searchLottery);
            $('#txtLottery').on('compositionstart',function(){
                flag = false;
            })
            $('#txtLottery').on('compositionend',function(){
                flag = true;
            })
            $(document).on('input keyup', '#txtLottery', this.inputLottery);
        },

        changeCategory: function() {
            var _id = $(this).data().id;
            $('.category').removeClass('active');
            $(this).addClass('active');
            if(_id) {
                $('[data-type],[data-category]').hide();
                $('[data-type=' + _id + '], [data-category=' + _id + ']').fadeIn('fast');
            } else {
                $('[data-type],[data-highCategory],[data-province]').fadeIn('fast');
                $('[data-category]').hide();
            }

            
            $('#searchData').html('').hide();
            $('.province,.high-category').removeClass('active');
            $($('.high-category')[0]).addClass('active');
            $($('.province')[0]).addClass('active');
            $('[data-highCategory]').fadeIn('fast');
            $('[data-province]').fadeIn('fast');
            $('#defaultData').fadeIn('fast');
        },

        changeChilds: function() {
            var _id = $(this).data().id;
            $('.high-category').removeClass('active');
            $(this).addClass('active');
            if(_id) {
                $('[data-highCategory]').hide();
                $('[data-highCategory=' + _id + ']').fadeIn('fast');
            } else {
                $('[data-highCategory]').fadeIn('fast');
            }
        },

        changeProvince: function() {
            var _id = $(this).data().id;
            $('.province').removeClass('active');
            $(this).addClass('active');
            if(_id) {
                $('[data-province]').hide();
                $('[data-province=' + _id + ']').fadeIn('fast');
            } else {
                $('[data-province]').fadeIn('fast');
            }
        },

        alertInfo: function() {
            var _alertInfo = new _AlertPluginModel({
                content: '功能正在开发中，敬请期待！',
                btnText: '知道了！'
            });

            (new _AlertPluginComponent({model: _alertInfo})).show();
        },
        searchLottery: function() {
            var _value = $('#txtLottery').val().trim();
            if(_value) {
                _LotteryHallAction.getAwardSearch(_value, function(result){
                    if(result.state == 1) {
                        $('#defaultData').hide();
                        $('#searchData').html(result.search).fadeIn('fast');
                    } else {
                        var _alertInfo = new _AlertPluginModel({
                            content: '没有搜索到“' + _value + '”彩种',
                            btnText: '确定'
                        });
            
                        (new _AlertPluginComponent({model: _alertInfo})).show();
                    }
                });
            }
        },
        inputLottery: function() {
            if(!flag) return;
            var _value = $(this).val();
            if(_value) {

                _value = _value.replace(/[^\u4E00-\u9FA5a-zA-Z0-9]/g, '');
                $(this).val(_value);
                if(_value) {
                    $('#btnQuery').removeClass('disabled');
                }
            } else {
                $('#btnQuery').addClass('disabled');
            }
        }
    }

    return LotteryContainer;
})
