/**
 * 简易请求内容
 */
define(function(require, exports, module) {
    var Request = {};

    Request.get = function(option) {

        option.type = 'GET';
        baseRequest(option);
    }

    function baseRequest(option) {
        if(!option.faile) {
            option.faile = function(err){}
        }

        if(!option.success) {
            option.success = function(data){}
        }

        $.ajax({
            type: option.type,
            async: true,
            timeout: 10000,
            url: option.url,
            dataType: option.dataType,
            data: option.data,
            success: function (_resultData) {
                
                if (_resultData) {
                    option.success.call(this, _resultData)
                } else {
                    option.faile.call(this, _resultData);
                }
            },
            complete: function (XMLHttpRequest, status) {
                if (status == 'timeout') {//超时,status还有success,error等值的情况
                    option.faile.call(this, { title: "网络异常,请求超时,请稍后再试...", time: 600 });
                }
            },
            error: function (_error, status) {
                if (status == 'timeout') {//超时,status还有success,error等值的情况
                    option.faile.call(this, { title: "网络异常,请求超时,请稍后再试...", time: 600 });
                }

                
            }
        })
    }

    module.exports = Request;
});