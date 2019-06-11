/****************************************************************
 *                      追号聚合详情页
 ****************************************************************/
define([
    'underscore',
    'jquery',
    'backbone',
    'Date',
    'String',
    'template',
    '../../publicComponent/public/alertPlugin.component',
    '../../../model/alertPlugin.model'
], function(
    _,
    $,
    _Backbone,
    _Date,
    _String,
    _Template,
    _AlertPluginComponent,
    _AlertPluginModel
){
    var unitMoney = 2;
    var DetailContainer = {
        initialize: function() {
            this.initEvent();
        },
        initEvent: function() {
            $(document).on('input keyup', '.chn_lotListBlock input', this.inputValue);
            $(document).on('click', '#btnPlan', this.generatePlan.bind(this, false));
            $(document).on('input keyup', '.form_btnBlock input', this.inputMulite);
            $(document).on('click', '[data-arrow]', this.arrowMulite);
            $(document).on('click', '#planRender a', this.showPlanRender);
        },
        generatePlan: function(isFrist) {
            // 验证值是否正确
            if(DetailContainer.validateValue()) {
                var values = DetailContainer.betValue();
                var totalMoney = 0;     // 累计金额
                var _result = [];
                var _valid = true;

                for(var i = 0; i < values.betPeriod; i++) {
                    // 累计投入金额
                    var _totalMoney = unitMoney * values.bet * values.multiple + totalMoney;

                    // 盈利率
                    var _tmpProfit = ((values.money * values.multiple - _totalMoney) / _totalMoney) * 100;

                    if(_tmpProfit < 0 && i === 0) {
                        var _alertInfo = new _AlertPluginModel({
                            content: '组合不合理，请重新输入参数',
                            btnText: '确定'
                        });
                    
                        (new _AlertPluginComponent({model: _alertInfo})).show();
                        _valid = false;
                        break;
                    }

                    // 大于期望盈利率
                    if(_tmpProfit >= values.profit) {
                        _result.push({
                            num: i + 1,
                            bet: values.bet,
                            multiple: values.multiple,
                            totalMoney: _totalMoney,
                            lastTotalMoney: totalMoney,
                            money: values.money * values.multiple - _totalMoney,
                            profit: _tmpProfit.toFixed(2)
                        });
                        
                        totalMoney = _totalMoney;

                    } else if(i == 0) {     // 如果第一次录入参数计算盈利率大于0 且小于期望值
                        var _alertInfo = new _AlertPluginModel({
                            content: '该方案初始最大盈利为' + _tmpProfit + '%',
                            btnText: '确定'
                        });
                    
                        (new _AlertPluginComponent({model: _alertInfo})).show();
                        _valid = false;
                        break;
                    } else {
                        
                        if(values.multiple < 3000) {
                            while(_tmpProfit < values.profit && values.multiple < 3000) {
                                values.multiple++;
                                _totalMoney = unitMoney * values.bet * values.multiple + totalMoney;
                                _tmpProfit = ((values.money * values.multiple - _totalMoney) / _totalMoney) * 100;
                            }
                            if(values.multiple < 3000) {
                                _result.push({
                                    num: i + 1,
                                    bet: values.bet,
                                    multiple: values.multiple,
                                    totalMoney: _totalMoney,
                                    lastTotalMoney: totalMoney,
                                    money: values.money * values.multiple - _totalMoney,
                                    profit: _tmpProfit.toFixed(2)
                                });
                                totalMoney = _totalMoney;
                            }

                        } else {
                            break;
                        }
                    }
                }

                // 如果有验证异常
                if(!_valid) {
                    return;
                }

                // 如果生成的数量不到期望的追号期数
                if(_result.length < values.betPeriod && !isFrist) {
                    var _alertInfo = new _AlertPluginModel({
                        content: '该方案最多生成' + _result.length + '期',
                        btnText: '确定',
                        okCallback: DetailContainer.renderPlan.bind(this, _result)
                    });
                
                    (new _AlertPluginComponent({model: _alertInfo})).show();
                } else {
                    DetailContainer.renderPlan(_result);
                }
            }
        },
        renderPlan: function(result) {
            var data  = {};
            data.list = result;
            var html = _Template('planBlockList', data);
            $('#planDetailTable').html(html);
        },
        /**
         * 获取赋值
         */
        getValue: function(){
            var para = {};
            para.bet = $('#bet').val();
            para.betPeriod = $('#betPeriod').val();
            para.profit = $('#profit').val();
            para.multiple = $('#multiple').val();
            para.money = $('#money').val();

            para.bet = para.bet.replace(/[^0-9]/g, '');
            para.betPeriod = para.betPeriod.replace(/[^0-9]/g, '');
            para.profit = para.profit.replace(/[^0-9]/g, '');
            para.multiple = para.multiple.replace(/[^0-9]/g, '');
            para.money = para.money.replace(/[^0-9]/g, '');

            para.bet = para.bet <= 0 ? 1 : para.bet;
            para.betPeriod = para.betPeriod <= 0 ? 1 : para.betPeriod;
            para.profit = para.profit <= 0 ? 1 : para.profit;
            para.multiple = para.multiple <= 0 ? 1 : para.multiple;
            para.money = para.money <= 0 ? 1 : para.money;
            
            $('#bet').val(para.bet);
            $('#betPeriod').val(para.betPeriod);
            $('#profit').val(para.profit);
            $('#multiple').val(para.multiple);
            $('#money').val(para.money);

            return para;
        },
        /**
         * 验证值
         */
        validateValue: function() {
            var _value = this.getValue();
            var _valueList = Object.keys(_value);
            var _valueLenght  = _valueList.length;
            var _valid = true;

            for(var i = 0; i < _valueLenght; i++) {
                var _tmp = _value[_valueList[i]];
                if(_tmp && !/^[0-9]*$/.test(_tmp)){
                    var _alertInfo = new _AlertPluginModel({
                        content: '填写参数有误，只允许填写数字',
                        btnText: '确定'
                    });
                
                    (new _AlertPluginComponent({model: _alertInfo})).show();
                    _valid = false;
                    break;
                }else if(!_tmp) {
                    _valid = false;
                    break;
                }
            }

            return _valid;
        },
        inputValue: function() {
            var _value = DetailContainer.getValue();
            var _valueList = Object.keys(_value);
            var _valueLenght  = _valueList.length;
            var _valid = true;

            for(var i = 0; i < _valueLenght; i++) {
                var _tmp = _value[_valueList[i]];
                if(!_tmp){
                    _valid = false;
                    $('#btnPlan').css({
                        background: '#ccc'
                    });
                    break;
                }
            }

            if(_valid) {
                $('#btnPlan').css({
                    background: '#e33d3d'
                });
            }
        },
        /**
         * 转换成数字类型
         */
        betValue: function() {
            var values = this.getValue();
            var _list = Object.keys(values);
            var _listLength = _list.length;
            var _result = {};
            for(var i = 0; i < _listLength; i++) {
                _result[_list[i]] = parseInt(values[_list[i]]);
            }

            return _result;
        },
        reGenerateLine: function(item) {
            var data  = {};
            data.list = [item];
            var html = _Template('planBlockList', data);
            return html.replace('<tr>','').replace('</tr>','');
        },
        changeMulite: function(_data, _value) {
            var _result = '';
            var _money = parseInt($('#money').val());
            if(_value && /^[0-9]*$/.test(_value)) {
                _data.multiple = parseInt(_value);
                // 累计投入金额
                _data.totalMoney = unitMoney * _data.bet * _data.multiple + _data.lastTotalMoney;

                // 盈利率
                _data.profit = (((_money * _data.multiple - _data.totalMoney) / _data.totalMoney) * 100).toFixed(2);

                _data.money = _money * _data.multiple - _data.totalMoney

                _result = this.reGenerateLine(_data);
            }

            return _result;
        },
        inputMulite: function() {
            
            var _data = $(this).data('item'),
                _value = $(this).val();
            
            if(_value) {
                _value = _value.replace(/[^0-9]/g, '');
                _value = _value <= 0 ? 1 : _value;
                if(_value > 3000) {
                    _value = 3000
                }
                $(this).val(_value);
            }

            
            
            var _html = DetailContainer.changeMulite(_data, _value);
            if(_html) {
                $(this).parent().parent().parent().parent().html(_html).find('input').val('').focus().val(_value);
            }
        },
        arrowMulite: function () {
            var $item = $($(this).parent().find('input')[0]),
                _data = $item.data('item'),
                _value = $item.val(),
                _arrow = $(this).data('arrow');
            if(_value && /^[0-9]*$/.test(_value)) { 
                if(_arrow == 'left') {
                    if(_value > 1) {
                        _value--
                    }
                } else {
                    if(_value < 3000) {
                        _value++
                    }
                }
                
                var _html = DetailContainer.changeMulite(_data, _value);
                if(_html) {
                    $(this).parent().parent().parent().html(_html);
                    $item.val(_value);
                }
            }
        },
        showPlanRender: function() {
            if($('.chn_lotListBlock').css('display') == 'none') {
                $('.chn_lotListBlock').show();
                $(this).text('隐藏追号计划');
                DetailContainer.generatePlan(true);
            } else {
                $('.chn_lotListBlock').hide();
                $(this).text('生成追号计划');
            }
        }
    }

    return DetailContainer;
})

/**
 * var _alertInfo = new _AlertPluginModel({
        content: '功能正在开发中，敬请期待！',
        btnText: '知道了！'
    });

    (new _AlertPluginComponent({model: _alertInfo})).show();
 */