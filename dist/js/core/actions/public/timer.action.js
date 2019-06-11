define(["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(a,e,t,r,c){var o={};return o._awardResultCallBack,o._awardDataCallBack,o._awardTimeCallBack,o.initialize=function(){var a=this;c.on("asyncSuccess_awardResult",function(e){a._awardResultCallBack(e)}),c.on("asyncSuccess_awardData",function(e){a._awardDataCallBack(e)}),c.on("asyncSuccess_awardTime",function(e){a._awardTimeCallBack(e)})},o.requestAwardResult=function(a,e){if("string"!=typeof a||"function"!=typeof e)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{o._awardResultCallBack=e;var t={t:Math.random()};r.requestGet("/lottery/"+a+"/getawarddata",t,"asyncSuccess_awardResult")}},o.requestAwardData=function(a,e,t){if("string"!=typeof a||"string"!=typeof e||"function"!=typeof t)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{o._awardDataCallBack=t;var c,n={};n.t=Math.random(),e?c=this.judgmentAwardType(e):console.error("开奖历史为空,请设置开奖类型！"),r.requestGet("/lottery/"+a+"/"+c,n,"asyncSuccess_awardData")}},o.requestAwardDataForHtml=function(a,e,t){if("string"!=typeof a||"string"!=typeof e||"function"!=typeof t)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{o._awardDataCallBack=t;var c,n={t:Math.random()};e?c=this.judgmentAwardType(e):console.error("开奖历史为空,请设置开奖类型！"),r.requestGetHtml("/lottery/"+a+"/"+c,n,"asyncSuccess_awardData")}},o.requestAwardTime=function(a,e){if("string"!=typeof a||"function"!=typeof e)console.error("请求开奖时间的参数不正确，_lotteryCode不是字符串类型或者_callBack不是函数类型");else{var t={t:Math.random()};o._awardTimeCallBack=e,r.requestGet("/lottery/"+a+"/getawardtimes",t,"asyncSuccess_awardTime")}},o.judgmentAwardType=function(a){var e="";return"history"==a&&(e="getawarddata"),e},o});