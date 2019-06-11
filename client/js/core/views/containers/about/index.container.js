/****************************************************************
 *                          关于页面
 ****************************************************************/
define([
    'jquery',
    '../../publicComponent/public/alertPlugin.component',
    '../../../model/alertPlugin.model'
], function(
    $,
    _AlertPluginComponent,
    _AlertPluginModel
){
    var AboutContainer = {
        initialize: function() {
            this.initEvent();
        },
        initEvent: function() {
            if($('.vi_input').length) {
                var match = /(.*?)src='(.*?)'(.*)/;
                $('.vi_input').each(function(){
                    var _val = $(this).find('input').val();
                    var _clipText = _val.replace(match, function(match, p1, p2, p3, offset, string){
                        return p2
                    });

                    var $aList = $(this).find('a');
                    $($aList[0]).attr('data-clipboard-text', _val).removeAttr('href');
                    $($aList[1]).attr('data-clipboard-text', _clipText).removeAttr('href');
                });


                if(this.isIE8()<=8) {
                    $(document).on('click', '.vi_input a', function() {
                        var _alertInfo;
                        try{
                            clipboardData.setData('Text',$(this).attr('data-clipboard-text'));
                            _alertInfo = new _AlertPluginModel({
                                content: '复制成功(如弹出提醒，请点击允许访问)',
                                btnText: '确定'
                            });
                        }catch(ex){
                            _alertInfo = new _AlertPluginModel({
                                content: '当前浏览器版本不支持，请手动复制',
                                btnText: '确定'
                            });

                        }
                        (new _AlertPluginComponent({model: _alertInfo})).show();
                    })
                } else {
                    require(['clipboard'], function(ClipboardJS) {
                        
                        var _clipboard = new ClipboardJS('.vi_input a', {
                            target: function(trigger) {
                                return trigger;
                            }
                        });
                        
                        _clipboard.on('success', function(e) {
                            var _alertInfo = new _AlertPluginModel({
                                content: '复制成功',
                                btnText: '确定'
                            });
                
                            (new _AlertPluginComponent({model: _alertInfo})).show();
                        });
                    })
                }
            }

            
        },
        isIE8: function(){
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE浏览器
            var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
            if (isIE) {
                var IE8 = false;
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                IE8 = fIEVersion == 8.0;
                return parseInt(fIEVersion);
            }
            return 10;
        }
    }

    return AboutContainer;
});