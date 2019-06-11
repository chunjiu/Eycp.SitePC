define("core/services/testing.service",["jquery"],function(e){return{isDev:"false"!==e("body").attr("isopeneventnamecheck"),_testingEventName:function(e){return this.isDev?!!/_[\w]*/.test(e):(console.error("body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！"),!1)}}}),define("core/services/event.service",["underscore","jquery","backbone","./testing.service"],function(e,t,n,a){return{_on:function(e,t){"string"==typeof e&&"function"==typeof t?a._testingEventName(e)?(this[e]=this[e]||new Array,this[e].push(t)):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},_emit:function(e){if("string"==typeof e)if(a._testingEventName(e)){var t=arguments.length>1?Array.prototype.slice.call(arguments,1):[];this[e]&&Array.prototype.forEach.call(this[e],function(e){e.apply(this,t)})}else console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)")},on:function(e,t){"string"==typeof e&&"function"==typeof t?a._testingEventName(e)?n.on(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},emit:function(e,t){"string"==typeof e&&(a._testingEventName(e)?n.trigger(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"))}}}),define("core/views/publicComponent/timer.component",["underscore","jquery","backbone","../../services/event.service"],function(e,t,n,a){return n.View.extend({initialize:function(){var e=this;e.awardTimeCount=0,e.speed=1e3,e.clearInterval=0,a.on("timerCountDown_timerComponent",function(t){return"object"==typeof t&&t?t.completeCallBack&&"function"==typeof t.completeCallBack?t.countDowningCallBack&&"function"==typeof t.countDowningCallBack?void e.timerCountDown(t):void console.error("TimerComponent: timerCountDown方法参数不正确, countDowningCallBack不存在, 或者是不是一个函数！"):void console.error("TimerComponent: timerCountDown方法参数不正确, completeCallBack不存在, 或者是不是一个函数！"):void console.error("TimerComponent: timerCountDown方法参数不正确！")})},timerCountDown:function(e){var t=this;t.awardTimeCount=e.awardTimeCount,window.clearInterval(t.clearInterval),t.clearInterval=window.setInterval(function(){t.awardTimeCount<=0?e.completeCallBack(t.awardTimeCount):e.countDowningCallBack(t.awardTimeCount),t.awardTimeCount--},t.speed)}})}),define("core/services/request.service",["underscore","jquery","backbone","./event.service"],function(e,t,n,a){var o={_asyncRequestBase:function(e,n,o,r,i,c){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:o,data:r,success:function(e){e?a.emit(i,e):(a.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+i+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(a.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),c&&a.emit(c,_resultData))},error:function(e,t){"timeout"==t&&(a.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),c&&a.emit(c,_resultData))}})},_asyncRequestBaseJsonp:function(e,n,o,r,i){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:"jsonp",jsonp:"jsoncallback",jsonpCallback:r,data:o,success:function(e){e?a.emit(r,e):(a.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+r+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(a.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),i&&a.emit(i,_resultData))},error:function(e,t){"timeout"==t&&(a.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),i&&a.emit(i,_resultData))}})},requestPostJsonp:function(e,t,n,a){return o._asyncRequestBaseJsonp("POST",e,t,n,a)},requestGetJsonp:function(e,t,n,a){return o._asyncRequestBaseJsonp("GET",e,t,n,a)},requestPost:function(e,t,n){return o._asyncRequestBase("POST",e,"json",t,n,_failedEvent)},requestPostSearch:function(e,t,n,a,r){return o._asyncRequestBase("POST",e,t,n,a,r)},requestGet:function(e,t,n,a){return o._asyncRequestBase("GET",e,"json",t,n,a)},requestGetHtml:function(e,t,n,a){return o._asyncRequestBase("GET",e,"text",t,n,a)}};return o}),define("core/actions/public/timer.action",["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,n,a,o){var r={};return r._awardResultCallBack,r._awardDataCallBack,r._awardTimeCallBack,r.initialize=function(){var e=this;o.on("asyncSuccess_awardResult",function(t){e._awardResultCallBack(t)}),o.on("asyncSuccess_awardData",function(t){e._awardDataCallBack(t)}),o.on("asyncSuccess_awardTime",function(t){e._awardTimeCallBack(t)})},r.requestAwardResult=function(e,t){if("string"!=typeof e||"function"!=typeof t)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{r._awardResultCallBack=t;var n={t:Math.random()};a.requestGet("/lottery/"+e+"/getawarddata",n,"asyncSuccess_awardResult")}},r.requestAwardData=function(e,t,n){if("string"!=typeof e||"string"!=typeof t||"function"!=typeof n)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{r._awardDataCallBack=n;var o,i={};i.t=Math.random(),t?o=this.judgmentAwardType(t):console.error("开奖历史为空,请设置开奖类型！"),a.requestGet("/lottery/"+e+"/"+o,i,"asyncSuccess_awardData")}},r.requestAwardDataForHtml=function(e,t,n){if("string"!=typeof e||"string"!=typeof t||"function"!=typeof n)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{r._awardDataCallBack=n;var o,i={t:Math.random()};t?o=this.judgmentAwardType(t):console.error("开奖历史为空,请设置开奖类型！"),a.requestGetHtml("/lottery/"+e+"/"+o,i,"asyncSuccess_awardData")}},r.requestAwardTime=function(e,t){if("string"!=typeof e||"function"!=typeof t)console.error("请求开奖时间的参数不正确，_lotteryCode不是字符串类型或者_callBack不是函数类型");else{var n={t:Math.random()};r._awardTimeCallBack=t,a.requestGet("/lottery/"+e+"/getawardtimes",n,"asyncSuccess_awardTime")}},r.judgmentAwardType=function(e){var t="";return"history"==e&&(t="getawarddata"),t},r}),define("core/views/containers/public/timer.container",["underscore","jquery","backbone","String","../../../services/event.service","../../publicComponent/timer.component","../../../actions/public/timer.action"],function(e,t,n,a,o,r,i){var c;return{initialize:function(e,t){if(c=this,c.isGetAwardData=!0,e&&"string"==typeof e||console.warn("TimerContainer：_lotteryCode参数不正确, 可能为空，可能不是字符串类型，但是允许为空"),!t||"string"!=typeof t)return void console.error("TimerContainer：_awardType参数不正确");c.lotteryCode=e,c.awardType=t,c.awarding=!1,c.awardWait=0,c.awardWaitSpeed=1e3,c.awardResultWaitSpeed=3e3+1e3*parseInt(Math.floor(5*Math.random()+1)),c.periodText=0,c.isGetJson=c.isReturnJson(c.awardType),i.initialize();new r;c.getAwardTime(c.getAwardTimeCallBack,!0),o.on("isGetAwardData_timerContainer",function(e){void 0!=e&&"boolean"==typeof e?(c.isGetAwardData=e,c.awarding=!1):console.error("isGetAwardData：参数不能为空并且必须是布尔类型！")})},getAwardTimeCallBack:function(e){o.emit("timerCountDown_timerComponent",{completeCallBack:c.completeCallBack,countDowningCallBack:c.countDowningCallBack,awardTimeCount:e}),c.timerAwardData(c.awardWaitSpeed,c.getResultSuccessCallBack)},getAwardTimeCallBack2:function(e){o.emit("timerCountDown_timerComponent",{completeCallBack:c.completeCallBack,countDowningCallBack:c.countDowningCallBack,awardTimeCount:e})},countDowningCallBack:function(e){o.emit("countDowning_timerContainer",e)},completeCallBack:function(e){c.awarding=!0,console.log("开奖中, 还有"+c.awardWait+"秒就更新开奖结果！"),o.emit("complete_timerContainer",e),c.getAwardTime(c.getAwardTimeCallBack2,!1)},getResultSuccessCallBack:function(e){if(c.isGetJson){var t={type:"json",result:e};o.emit("lotteryResults_timerComponent",t)}else{window.setTimeout(function(){i.requestAwardDataForHtml(c.lotteryCode,c.awardType,function(e){var t={type:"html",result:e};o.emit("lotteryResults_timerComponent",t)})},0)}},timerAwardData:function(e,t){var n=window.setInterval(function(){if(c.awarding&&c.isGetAwardData)if(c.awardWait<=0){console.log("=================开始请求服务器拿开奖结果 ========================="),window.clearInterval(n);var e=window.setInterval(function(){i.requestAwardResult(c.lotteryCode,function(n){parseInt(n.period)==c.nextPeriod&&(c.awarding=!1,window.clearInterval(e),c.nextPeriod=c.nextPeriodNow,c.awardWait=c.nextAwardWait,console.log("=================已经拿到最新开奖结果，重新开始倒计 ========================="),t(n),c.timerAwardData(c.awardWaitSpeed,c.getResultSuccessCallBack))})},c.awardResultWaitSpeed)}else c.awardWait--},e)},getAwardTime:function(e,t){var n=this;i.requestAwardTime(n.lotteryCode,function(a){n.awardTimeCount=parseFloat(a.awardTimeInterval);var r=parseInt(a.next.period);t&&(n.nextPeriod=r,n.awardWait=parseInt(a.waitTimeInterval),n.reloading=!1),n.periodText=r.toString(),n.nextPeriodNow=r,n.nextAwardWait=parseInt(a.waitTimeInterval),n.periodText.length<3&&(n.periodText=n.periodText.replace(/\d+/g,function(e){return"00".substr(e.length-1)+e})),console.log("距"+n.periodText+"期开奖"),o.emit("getAwardTimeObject_timerContainer",{currentPeriod:a.current.period,nextPeriod:n.periodText,time:n.formatTime(a.time),surplus:a.overPeriod,originTime:t?"":a.time}),e&&e(n.awardTimeCount)})},isReturnJson:function(e){return void 0==e?(c.awardType="other",!1):"history"==e||"javascript"==c.awardType},formatTime:function(e){if(e){if(-1==e.indexOf(" "))return e.replace(/\//g,"-");return e.split(" ")[0].replace(/\//g,"-")}return void console.error("formatDate: 参数不存在！")}}}),define("core/actions/public/lottery.action",["underscore","jquery","backbone","Date","../../services/request.service","../../services/event.service"],function(e,t,n,a,o,r){var i={};return i._awardHTMLCallback,i._awardTimerCallback,i._issuenoDataCallback,i._updatePlanCallback,i.initialize=function(e,n,a){this.lotteryCode=e,this.lotteryType=n,this.needUpdatePlan=a;var o=this;r.on("countDowning_timerContainer",function(e){var n=e.toString().SecondsToddhhmmss().split(":"),a="";a=parseInt(n[0])>0?"<b>"+n[0]+"</b><i>天</i><b>"+n[1]+"</b><i>时</i>":parseInt(n[1])>0?"<b>"+n[1]+"</b><i>时</i><b>"+n[2]+"</b><i>分</i>":"<b>"+n[2]+"</b><i>分</i><b>"+n[3]+"</b><i>秒</i>",t(".timeBlock .time").html(a)}),r.on("getAwardTimeObject_timerContainer",function(e){if(o.nextPeriod=e.nextPeriod,t(".next-period").html(o.nextPeriod+"期"),e.originTime){var n=new Date(e.originTime.replace(/-/g,"/")).format("MM-dd hh:mm");t("#lotteryTimerTime").html(n)}}),r.on("complete_timerContainer",function(){t(".beProgressing").show(),t(".preterite").hide(),t(".current-period").html(o.nextPeriod)}),r.on("lotteryResults_timerComponent",function(e){t(".beProgressing").hide(),t(".preterite").show(),i.getAwardHTML(function(e){r.emit("awardHTML_lotteryAction",e),i.needUpdatePlan&&setTimeout(function(){i.updatePlan(function(e){r.emit("awardPlanHTML_lotteryAction",e)})},3e4+Math.random())})}),r.on("digitQuery_historyContainer",function(e){i.getAwardHTML(function(e){r.emit("awardDigitHTML_lotteryAction",e)},e.year,e.day)}),r.on("digitExport_historyContainer",function(e){window.open("/api/"+o.lotteryType+"/"+o.lotteryCode+"/export/"+e.type+"/"+e.year)}),r.on("asyncSuccess_awardHTML",function(e){o._awardHTMLCallback(e)}),r.on("asyncSuccess_awardTimer",function(e){o._awardTimerCallback(e)}),r.on("asyncSuccess_issuenoData",function(e){o._issuenoDataCallback(e)}),r.on("asyncSuccess_updatePlan",function(e){o._updatePlanCallback(e)})},i.getAwardHTML=function(e,t,n){if("function"!=typeof e)console.error("getAwardHTML：请求数据的参数不正确，_callBack不是函数类型");else{var a={date:t,t:Math.random()};n&&(a.year=t,a.day=n),i._awardHTMLCallback=e,o.requestGet("/"+this.lotteryType+"/"+this.lotteryCode+"/indexPage",a,"asyncSuccess_awardHTML")}},i.updatePlan=function(e){if("function"!=typeof e)console.error("getAwardHTML：请求数据的参数不正确，_callBack不是函数类型");else{var t={lotteryCode:this.lotteryCode,t:Math.random()};i._updatePlanCallback=e,o.requestGet("/plan/updatePlan",t,"asyncSuccess_updatePlan")}},i.getAwardResult=function(e){if("function"!=typeof e)console.error("getAwardResult：请求数据的参数不正确，_callBack不是函数类型");else{var t={t:Math.random()};i._awardTimerCallback=e,o.requestGet("/lottery/"+this.lotteryCode+"/getawarddata",t,"asyncSuccess_awardTimer")}},i.getIssuenoData=function(e,t){if(void 0==e||"number"!=typeof e)return void console.error("getIssuenoData：请求数据的参数不正确，_issueno不是数字类型");if("function"!=typeof t)return void console.error("getIssuenoData：请求数据的_callBack参数不正确，_callBack不是函数类型");var n={t:Math.random(),issueno:e};i._issuenoDataCallback=t,o.requestGet("/"+this.lotteryType+"/"+this.lotteryCode+"/getawardinfobyissueno",n,"asyncSuccess_issuenoData")},i.loopResult=function(e){var t=this,n=setInterval(function(){t.getAwardResult(function(a){a.period==e&&(window.clearInterval(n),t.getAwardHTML(function(e){r.emit("awardHTML_lotteryAction",e)}))})},3e3+1e3*parseInt(Math.floor(5*Math.random()+1)))},i}),define("core/views/containers/high/ssc/index.container",["underscore","jquery","backbone","String","../../../../services/event.service","../../public/timer.container","../../../../actions/public/lottery.action"],function(e,t,n,a,o,r,i){return{initialize:function(e,t,n){r.initialize(e,"history"),i.initialize(e,"high",!0),t&&i.loopResult(n),this.initEvent()},initEvent:function(){o.on("awardHTML_lotteryAction",function(e){t(".public-lotteryLatestInfo").html(e.timer),t(".history-body").html(e.index)}),o.on("awardPlanHTML_lotteryAction",function(e){t("#planTable").html(e.plan)})}}});