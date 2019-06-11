define("core/services/testing.service",["jquery"],function(e){return{isDev:"false"!==e("body").attr("isopeneventnamecheck"),_testingEventName:function(e){return this.isDev?!!/_[\w]*/.test(e):(console.error("body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！"),!1)}}}),define("core/services/event.service",["underscore","jquery","backbone","./testing.service"],function(e,t,n,o){return{_on:function(e,t){"string"==typeof e&&"function"==typeof t?o._testingEventName(e)?(this[e]=this[e]||new Array,this[e].push(t)):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},_emit:function(e){if("string"==typeof e)if(o._testingEventName(e)){var t=arguments.length>1?Array.prototype.slice.call(arguments,1):[];this[e]&&Array.prototype.forEach.call(this[e],function(e){e.apply(this,t)})}else console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)")},on:function(e,t){"string"==typeof e&&"function"==typeof t?o._testingEventName(e)?n.on(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},emit:function(e,t){"string"==typeof e&&(o._testingEventName(e)?n.trigger(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"))}}}),define("core/views/publicComponent/timer.component",["underscore","jquery","backbone","../../services/event.service"],function(e,t,n,o){return n.View.extend({initialize:function(){var e=this;e.awardTimeCount=0,e.speed=1e3,e.clearInterval=0,o.on("timerCountDown_timerComponent",function(t){return"object"==typeof t&&t?t.completeCallBack&&"function"==typeof t.completeCallBack?t.countDowningCallBack&&"function"==typeof t.countDowningCallBack?void e.timerCountDown(t):void console.error("TimerComponent: timerCountDown方法参数不正确, countDowningCallBack不存在, 或者是不是一个函数！"):void console.error("TimerComponent: timerCountDown方法参数不正确, completeCallBack不存在, 或者是不是一个函数！"):void console.error("TimerComponent: timerCountDown方法参数不正确！")})},timerCountDown:function(e){var t=this;t.awardTimeCount=e.awardTimeCount,window.clearInterval(t.clearInterval),t.clearInterval=window.setInterval(function(){t.awardTimeCount<=0?e.completeCallBack(t.awardTimeCount):e.countDowningCallBack(t.awardTimeCount),t.awardTimeCount--},t.speed)}})}),define("core/services/request.service",["underscore","jquery","backbone","./event.service"],function(e,t,n,o){var r={_asyncRequestBase:function(e,n,r,a,i,c){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:r,data:a,success:function(e){e?o.emit(i,e):(o.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+i+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(o.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),c&&o.emit(c,_resultData))},error:function(e,t){"timeout"==t&&(o.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),c&&o.emit(c,_resultData))}})},_asyncRequestBaseJsonp:function(e,n,r,a,i){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:"jsonp",jsonp:"jsoncallback",jsonpCallback:a,data:r,success:function(e){e?o.emit(a,e):(o.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+a+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(o.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),i&&o.emit(i,_resultData))},error:function(e,t){"timeout"==t&&(o.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),i&&o.emit(i,_resultData))}})},requestPostJsonp:function(e,t,n,o){return r._asyncRequestBaseJsonp("POST",e,t,n,o)},requestGetJsonp:function(e,t,n,o){return r._asyncRequestBaseJsonp("GET",e,t,n,o)},requestPost:function(e,t,n){return r._asyncRequestBase("POST",e,"json",t,n,_failedEvent)},requestPostSearch:function(e,t,n,o,a){return r._asyncRequestBase("POST",e,t,n,o,a)},requestGet:function(e,t,n,o){return r._asyncRequestBase("GET",e,"json",t,n,o)},requestGetHtml:function(e,t,n,o){return r._asyncRequestBase("GET",e,"text",t,n,o)}};return r}),define("core/actions/public/timer.action",["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,n,o,r){var a={};return a._awardResultCallBack,a._awardDataCallBack,a._awardTimeCallBack,a.initialize=function(){var e=this;r.on("asyncSuccess_awardResult",function(t){e._awardResultCallBack(t)}),r.on("asyncSuccess_awardData",function(t){e._awardDataCallBack(t)}),r.on("asyncSuccess_awardTime",function(t){e._awardTimeCallBack(t)})},a.requestAwardResult=function(e,t){if("string"!=typeof e||"function"!=typeof t)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{a._awardResultCallBack=t;var n={t:Math.random()};o.requestGet("/lottery/"+e+"/getawarddata",n,"asyncSuccess_awardResult")}},a.requestAwardData=function(e,t,n){if("string"!=typeof e||"string"!=typeof t||"function"!=typeof n)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{a._awardDataCallBack=n;var r,i={};i.t=Math.random(),t?r=this.judgmentAwardType(t):console.error("开奖历史为空,请设置开奖类型！"),o.requestGet("/lottery/"+e+"/"+r,i,"asyncSuccess_awardData")}},a.requestAwardDataForHtml=function(e,t,n){if("string"!=typeof e||"string"!=typeof t||"function"!=typeof n)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{a._awardDataCallBack=n;var r,i={t:Math.random()};t?r=this.judgmentAwardType(t):console.error("开奖历史为空,请设置开奖类型！"),o.requestGetHtml("/lottery/"+e+"/"+r,i,"asyncSuccess_awardData")}},a.requestAwardTime=function(e,t){if("string"!=typeof e||"function"!=typeof t)console.error("请求开奖时间的参数不正确，_lotteryCode不是字符串类型或者_callBack不是函数类型");else{var n={t:Math.random()};a._awardTimeCallBack=t,o.requestGet("/lottery/"+e+"/getawardtimes",n,"asyncSuccess_awardTime")}},a.judgmentAwardType=function(e){var t="";return"history"==e&&(t="getawarddata"),t},a}),define("core/views/containers/public/timer.container",["underscore","jquery","backbone","String","../../../services/event.service","../../publicComponent/timer.component","../../../actions/public/timer.action"],function(e,t,n,o,r,a,i){var c;return{initialize:function(e,t){if(c=this,c.isGetAwardData=!0,e&&"string"==typeof e||console.warn("TimerContainer：_lotteryCode参数不正确, 可能为空，可能不是字符串类型，但是允许为空"),!t||"string"!=typeof t)return void console.error("TimerContainer：_awardType参数不正确");c.lotteryCode=e,c.awardType=t,c.awarding=!1,c.awardWait=0,c.awardWaitSpeed=1e3,c.awardResultWaitSpeed=3e3+1e3*parseInt(Math.floor(5*Math.random()+1)),c.periodText=0,c.isGetJson=c.isReturnJson(c.awardType),i.initialize();new a;c.getAwardTime(c.getAwardTimeCallBack,!0),r.on("isGetAwardData_timerContainer",function(e){void 0!=e&&"boolean"==typeof e?(c.isGetAwardData=e,c.awarding=!1):console.error("isGetAwardData：参数不能为空并且必须是布尔类型！")})},getAwardTimeCallBack:function(e){r.emit("timerCountDown_timerComponent",{completeCallBack:c.completeCallBack,countDowningCallBack:c.countDowningCallBack,awardTimeCount:e}),c.timerAwardData(c.awardWaitSpeed,c.getResultSuccessCallBack)},getAwardTimeCallBack2:function(e){r.emit("timerCountDown_timerComponent",{completeCallBack:c.completeCallBack,countDowningCallBack:c.countDowningCallBack,awardTimeCount:e})},countDowningCallBack:function(e){r.emit("countDowning_timerContainer",e)},completeCallBack:function(e){c.awarding=!0,console.log("开奖中, 还有"+c.awardWait+"秒就更新开奖结果！"),r.emit("complete_timerContainer",e),c.getAwardTime(c.getAwardTimeCallBack2,!1)},getResultSuccessCallBack:function(e){if(c.isGetJson){var t={type:"json",result:e};r.emit("lotteryResults_timerComponent",t)}else{window.setTimeout(function(){i.requestAwardDataForHtml(c.lotteryCode,c.awardType,function(e){var t={type:"html",result:e};r.emit("lotteryResults_timerComponent",t)})},0)}},timerAwardData:function(e,t){var n=window.setInterval(function(){if(c.awarding&&c.isGetAwardData)if(c.awardWait<=0){console.log("=================开始请求服务器拿开奖结果 ========================="),window.clearInterval(n);var e=window.setInterval(function(){i.requestAwardResult(c.lotteryCode,function(n){parseInt(n.period)==c.nextPeriod&&(c.awarding=!1,window.clearInterval(e),c.nextPeriod=c.nextPeriodNow,c.awardWait=c.nextAwardWait,console.log("=================已经拿到最新开奖结果，重新开始倒计 ========================="),t(n),c.timerAwardData(c.awardWaitSpeed,c.getResultSuccessCallBack))})},c.awardResultWaitSpeed)}else c.awardWait--},e)},getAwardTime:function(e,t){var n=this;i.requestAwardTime(n.lotteryCode,function(o){n.awardTimeCount=parseFloat(o.awardTimeInterval);var a=parseInt(o.next.period);t&&(n.nextPeriod=a,n.awardWait=parseInt(o.waitTimeInterval),n.reloading=!1),n.periodText=a.toString(),n.nextPeriodNow=a,n.nextAwardWait=parseInt(o.waitTimeInterval),n.periodText.length<3&&(n.periodText=n.periodText.replace(/\d+/g,function(e){return"00".substr(e.length-1)+e})),console.log("距"+n.periodText+"期开奖"),r.emit("getAwardTimeObject_timerContainer",{currentPeriod:o.current.period,nextPeriod:n.periodText,time:n.formatTime(o.time),surplus:o.overPeriod,originTime:t?"":o.time}),e&&e(n.awardTimeCount)})},isReturnJson:function(e){return void 0==e?(c.awardType="other",!1):"history"==e||"javascript"==c.awardType},formatTime:function(e){if(e){if(-1==e.indexOf(" "))return e.replace(/\//g,"-");return e.split(" ")[0].replace(/\//g,"-")}return void console.error("formatDate: 参数不存在！")}}}),define("core/actions/public/lottery.action",["underscore","jquery","backbone","Date","../../services/request.service","../../services/event.service"],function(e,t,n,o,r,a){var i={};return i._awardHTMLCallback,i._awardTimerCallback,i._issuenoDataCallback,i._updatePlanCallback,i.initialize=function(e,n,o){this.lotteryCode=e,this.lotteryType=n,this.needUpdatePlan=o;var r=this;a.on("countDowning_timerContainer",function(e){var n=e.toString().SecondsToddhhmmss().split(":"),o="";o=parseInt(n[0])>0?"<b>"+n[0]+"</b><i>天</i><b>"+n[1]+"</b><i>时</i>":parseInt(n[1])>0?"<b>"+n[1]+"</b><i>时</i><b>"+n[2]+"</b><i>分</i>":"<b>"+n[2]+"</b><i>分</i><b>"+n[3]+"</b><i>秒</i>",t(".timeBlock .time").html(o)}),a.on("getAwardTimeObject_timerContainer",function(e){if(r.nextPeriod=e.nextPeriod,t(".next-period").html(r.nextPeriod+"期"),e.originTime){var n=new Date(e.originTime.replace(/-/g,"/")).format("MM-dd hh:mm");t("#lotteryTimerTime").html(n)}}),a.on("complete_timerContainer",function(){t(".beProgressing").show(),t(".preterite").hide(),t(".current-period").html(r.nextPeriod)}),a.on("lotteryResults_timerComponent",function(e){t(".beProgressing").hide(),t(".preterite").show(),i.getAwardHTML(function(e){a.emit("awardHTML_lotteryAction",e),i.needUpdatePlan&&setTimeout(function(){i.updatePlan(function(e){a.emit("awardPlanHTML_lotteryAction",e)})},3e4+Math.random())})}),a.on("digitQuery_historyContainer",function(e){i.getAwardHTML(function(e){a.emit("awardDigitHTML_lotteryAction",e)},e.year,e.day)}),a.on("digitExport_historyContainer",function(e){window.open("/api/"+r.lotteryType+"/"+r.lotteryCode+"/export/"+e.type+"/"+e.year)}),a.on("asyncSuccess_awardHTML",function(e){r._awardHTMLCallback(e)}),a.on("asyncSuccess_awardTimer",function(e){r._awardTimerCallback(e)}),a.on("asyncSuccess_issuenoData",function(e){r._issuenoDataCallback(e)}),a.on("asyncSuccess_updatePlan",function(e){r._updatePlanCallback(e)})},i.getAwardHTML=function(e,t,n){if("function"!=typeof e)console.error("getAwardHTML：请求数据的参数不正确，_callBack不是函数类型");else{var o={date:t,t:Math.random()};n&&(o.year=t,o.day=n),i._awardHTMLCallback=e,r.requestGet("/"+this.lotteryType+"/"+this.lotteryCode+"/indexPage",o,"asyncSuccess_awardHTML")}},i.updatePlan=function(e){if("function"!=typeof e)console.error("getAwardHTML：请求数据的参数不正确，_callBack不是函数类型");else{var t={lotteryCode:this.lotteryCode,t:Math.random()};i._updatePlanCallback=e,r.requestGet("/plan/updatePlan",t,"asyncSuccess_updatePlan")}},i.getAwardResult=function(e){if("function"!=typeof e)console.error("getAwardResult：请求数据的参数不正确，_callBack不是函数类型");else{var t={t:Math.random()};i._awardTimerCallback=e,r.requestGet("/lottery/"+this.lotteryCode+"/getawarddata",t,"asyncSuccess_awardTimer")}},i.getIssuenoData=function(e,t){if(void 0==e||"number"!=typeof e)return void console.error("getIssuenoData：请求数据的参数不正确，_issueno不是数字类型");if("function"!=typeof t)return void console.error("getIssuenoData：请求数据的_callBack参数不正确，_callBack不是函数类型");var n={t:Math.random(),issueno:e};i._issuenoDataCallback=t,r.requestGet("/"+this.lotteryType+"/"+this.lotteryCode+"/getawardinfobyissueno",n,"asyncSuccess_issuenoData")},i.loopResult=function(e){var t=this,n=setInterval(function(){t.getAwardResult(function(o){o.period==e&&(window.clearInterval(n),t.getAwardHTML(function(e){a.emit("awardHTML_lotteryAction",e)}))})},3e3+1e3*parseInt(Math.floor(5*Math.random()+1)))},i}),define("core/views/containers/digit/ssq/index.container",["underscore","jquery","backbone","String","../../../../services/event.service","../../public/timer.container","../../../../actions/public/lottery.action"],function(e,t,n,o,r,a,i){return{initialize:function(e,t,n){a.initialize(e,"history"),i.initialize(e,"digit"),t&&i.loopResult(n),this.initEvent()},initEvent:function(){r.on("awardHTML_lotteryAction",function(e){if(t(".public-lotteryLatestInfo").html(e.timer),""!=t.trim(e.index)||void 0!=t.trim(e.index)){t(".history-body").html(e.index);var n=[];t(".history-body tr:lt(6)").each(function(){n.push("<tr>"+t(this).html()+"</tr>")}),t(".history-body").html(n.join(""))}})}}});