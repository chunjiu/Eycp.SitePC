define(["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,r,o,n){var i={};return i.requestHmtjCallback,i.requestHmtjDetailCallback,i.initialize=function(){var e=this;n.on("asyncSuccess_requestHmtj",function(t){e.requestHmtjCallback(t)}),n.on("asyncSuccess_requestHmtjDetail",function(t){e.requestHmtjDetailCallback(t)})},i.requestHmtj=function(e,t,r,n){if(void 0==e||"string"!=typeof e)return void console.error("请求数据的参数不正确，_lotteryCode为空,或者是不是字符串类型！");if(void 0==t||"number"!=typeof t)return void console.error("请求数据的参数不正确，_type为空或者是不是数字类型！");if("function"!=typeof n)return void console.error("请求数据的参数不正确，_callBack不是函数类型！");var s={code:e,type:t,quantity:r||10,t:Math.random()};i.requestHmtjCallback=n,o.requestGet("/hmtj/requestHmtj",s,"asyncSuccess_requestHmtj")},i.requestHmtjDetail=function(e,t,r,n,s){if(void 0==e||"string"!=typeof e)return void console.error("请求数据的参数不正确，_lotteryCode为空,或者是不是字符串类型！");if(void 0==t||"number"!=typeof t)return void console.error("请求数据的参数不正确，_type为空或者是不是数字类型！");if(void 0==r||"string"!=typeof r)return void console.error("请求数据的参数不正确，_expertId为空或者是不是字符串类型！");if("function"!=typeof s)return void console.error("请求数据的参数不正确，_callBack不是函数类型！");var c={code:e,type:t,expertId:r,quantity:n||10,t:Math.random()};i.requestHmtjDetailCallback=s,o.requestGet("/hmtj/requestHmtjDetail",c,"asyncSuccess_requestHmtjDetail")},i});