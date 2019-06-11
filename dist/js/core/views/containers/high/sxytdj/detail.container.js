define("core/services/testing.service",["jquery"],function(e){return{isDev:"false"!==e("body").attr("isopeneventnamecheck"),_testingEventName:function(e){return this.isDev?!!/_[\w]*/.test(e):(console.error("body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！"),!1)}}}),define("core/services/event.service",["underscore","jquery","backbone","./testing.service"],function(e,t,n,a){return{_on:function(e,t){"string"==typeof e&&"function"==typeof t?a._testingEventName(e)?(this[e]=this[e]||new Array,this[e].push(t)):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},_emit:function(e){if("string"==typeof e)if(a._testingEventName(e)){var t=arguments.length>1?Array.prototype.slice.call(arguments,1):[];this[e]&&Array.prototype.forEach.call(this[e],function(e){e.apply(this,t)})}else console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)")},on:function(e,t){"string"==typeof e&&"function"==typeof t?a._testingEventName(e)?n.on(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},emit:function(e,t){"string"==typeof e&&(a._testingEventName(e)?n.trigger(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"))}}}),define("core/views/publicComponent/timer.component",["underscore","jquery","backbone","../../services/event.service"],function(e,t,n,a){return n.View.extend({initialize:function(){var e=this;e.awardTimeCount=0,e.speed=1e3,e.clearInterval=0,a.on("timerCountDown_timerComponent",function(t){return"object"==typeof t&&t?t.completeCallBack&&"function"==typeof t.completeCallBack?t.countDowningCallBack&&"function"==typeof t.countDowningCallBack?void e.timerCountDown(t):void console.error("TimerComponent: timerCountDown方法参数不正确, countDowningCallBack不存在, 或者是不是一个函数！"):void console.error("TimerComponent: timerCountDown方法参数不正确, completeCallBack不存在, 或者是不是一个函数！"):void console.error("TimerComponent: timerCountDown方法参数不正确！")})},timerCountDown:function(e){var t=this;t.awardTimeCount=e.awardTimeCount,window.clearInterval(t.clearInterval),t.clearInterval=window.setInterval(function(){t.awardTimeCount<=0?e.completeCallBack(t.awardTimeCount):e.countDowningCallBack(t.awardTimeCount),t.awardTimeCount--},t.speed)}})}),define("core/services/request.service",["underscore","jquery","backbone","./event.service"],function(e,t,n,a){var o={_asyncRequestBase:function(e,n,o,i,r,s){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:o,data:i,success:function(e){e?a.emit(r,e):(a.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+r+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(a.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),s&&a.emit(s,_resultData))},error:function(e,t){"timeout"==t&&(a.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),s&&a.emit(s,_resultData))}})},_asyncRequestBaseJsonp:function(e,n,o,i,r){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:"jsonp",jsonp:"jsoncallback",jsonpCallback:i,data:o,success:function(e){e?a.emit(i,e):(a.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+i+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(a.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),r&&a.emit(r,_resultData))},error:function(e,t){"timeout"==t&&(a.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),r&&a.emit(r,_resultData))}})},requestPostJsonp:function(e,t,n,a){return o._asyncRequestBaseJsonp("POST",e,t,n,a)},requestGetJsonp:function(e,t,n,a){return o._asyncRequestBaseJsonp("GET",e,t,n,a)},requestPost:function(e,t,n){return o._asyncRequestBase("POST",e,"json",t,n,_failedEvent)},requestPostSearch:function(e,t,n,a,i){return o._asyncRequestBase("POST",e,t,n,a,i)},requestGet:function(e,t,n,a){return o._asyncRequestBase("GET",e,"json",t,n,a)},requestGetHtml:function(e,t,n,a){return o._asyncRequestBase("GET",e,"text",t,n,a)}};return o}),define("core/actions/public/timer.action",["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,n,a,o){var i={};return i._awardResultCallBack,i._awardDataCallBack,i._awardTimeCallBack,i.initialize=function(){var e=this;o.on("asyncSuccess_awardResult",function(t){e._awardResultCallBack(t)}),o.on("asyncSuccess_awardData",function(t){e._awardDataCallBack(t)}),o.on("asyncSuccess_awardTime",function(t){e._awardTimeCallBack(t)})},i.requestAwardResult=function(e,t){if("string"!=typeof e||"function"!=typeof t)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{i._awardResultCallBack=t;var n={t:Math.random()};a.requestGet("/lottery/"+e+"/getawarddata",n,"asyncSuccess_awardResult")}},i.requestAwardData=function(e,t,n){if("string"!=typeof e||"string"!=typeof t||"function"!=typeof n)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{i._awardDataCallBack=n;var o,r={};r.t=Math.random(),t?o=this.judgmentAwardType(t):console.error("开奖历史为空,请设置开奖类型！"),a.requestGet("/lottery/"+e+"/"+o,r,"asyncSuccess_awardData")}},i.requestAwardDataForHtml=function(e,t,n){if("string"!=typeof e||"string"!=typeof t||"function"!=typeof n)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{i._awardDataCallBack=n;var o,r={t:Math.random()};t?o=this.judgmentAwardType(t):console.error("开奖历史为空,请设置开奖类型！"),a.requestGetHtml("/lottery/"+e+"/"+o,r,"asyncSuccess_awardData")}},i.requestAwardTime=function(e,t){if("string"!=typeof e||"function"!=typeof t)console.error("请求开奖时间的参数不正确，_lotteryCode不是字符串类型或者_callBack不是函数类型");else{var n={t:Math.random()};i._awardTimeCallBack=t,a.requestGet("/lottery/"+e+"/getawardtimes",n,"asyncSuccess_awardTime")}},i.judgmentAwardType=function(e){var t="";return"history"==e&&(t="getawarddata"),t},i}),define("core/views/containers/public/timer.container",["underscore","jquery","backbone","String","../../../services/event.service","../../publicComponent/timer.component","../../../actions/public/timer.action"],function(e,t,n,a,o,i,r){var s;return{initialize:function(e,t){if(s=this,s.isGetAwardData=!0,e&&"string"==typeof e||console.warn("TimerContainer：_lotteryCode参数不正确, 可能为空，可能不是字符串类型，但是允许为空"),!t||"string"!=typeof t)return void console.error("TimerContainer：_awardType参数不正确");s.lotteryCode=e,s.awardType=t,s.awarding=!1,s.awardWait=0,s.awardWaitSpeed=1e3,s.awardResultWaitSpeed=3e3+1e3*parseInt(Math.floor(5*Math.random()+1)),s.periodText=0,s.isGetJson=s.isReturnJson(s.awardType),r.initialize();new i;s.getAwardTime(s.getAwardTimeCallBack,!0),o.on("isGetAwardData_timerContainer",function(e){void 0!=e&&"boolean"==typeof e?(s.isGetAwardData=e,s.awarding=!1):console.error("isGetAwardData：参数不能为空并且必须是布尔类型！")})},getAwardTimeCallBack:function(e){o.emit("timerCountDown_timerComponent",{completeCallBack:s.completeCallBack,countDowningCallBack:s.countDowningCallBack,awardTimeCount:e}),s.timerAwardData(s.awardWaitSpeed,s.getResultSuccessCallBack)},getAwardTimeCallBack2:function(e){o.emit("timerCountDown_timerComponent",{completeCallBack:s.completeCallBack,countDowningCallBack:s.countDowningCallBack,awardTimeCount:e})},countDowningCallBack:function(e){o.emit("countDowning_timerContainer",e)},completeCallBack:function(e){s.awarding=!0,console.log("开奖中, 还有"+s.awardWait+"秒就更新开奖结果！"),o.emit("complete_timerContainer",e),s.getAwardTime(s.getAwardTimeCallBack2,!1)},getResultSuccessCallBack:function(e){if(s.isGetJson){var t={type:"json",result:e};o.emit("lotteryResults_timerComponent",t)}else{window.setTimeout(function(){r.requestAwardDataForHtml(s.lotteryCode,s.awardType,function(e){var t={type:"html",result:e};o.emit("lotteryResults_timerComponent",t)})},0)}},timerAwardData:function(e,t){var n=window.setInterval(function(){if(s.awarding&&s.isGetAwardData)if(s.awardWait<=0){console.log("=================开始请求服务器拿开奖结果 ========================="),window.clearInterval(n);var e=window.setInterval(function(){r.requestAwardResult(s.lotteryCode,function(n){parseInt(n.period)==s.nextPeriod&&(s.awarding=!1,window.clearInterval(e),s.nextPeriod=s.nextPeriodNow,s.awardWait=s.nextAwardWait,console.log("=================已经拿到最新开奖结果，重新开始倒计 ========================="),t(n),s.timerAwardData(s.awardWaitSpeed,s.getResultSuccessCallBack))})},s.awardResultWaitSpeed)}else s.awardWait--},e)},getAwardTime:function(e,t){var n=this;r.requestAwardTime(n.lotteryCode,function(a){n.awardTimeCount=parseFloat(a.awardTimeInterval);var i=parseInt(a.next.period);t&&(n.nextPeriod=i,n.awardWait=parseInt(a.waitTimeInterval),n.reloading=!1),n.periodText=i.toString(),n.nextPeriodNow=i,n.nextAwardWait=parseInt(a.waitTimeInterval),n.periodText.length<3&&(n.periodText=n.periodText.replace(/\d+/g,function(e){return"00".substr(e.length-1)+e})),console.log("距"+n.periodText+"期开奖"),o.emit("getAwardTimeObject_timerContainer",{currentPeriod:a.current.period,nextPeriod:n.periodText,time:n.formatTime(a.time),surplus:a.overPeriod,originTime:t?"":a.time}),e&&e(n.awardTimeCount)})},isReturnJson:function(e){return void 0==e?(s.awardType="other",!1):"history"==e||"javascript"==s.awardType},formatTime:function(e){if(e){if(-1==e.indexOf(" "))return e.replace(/\//g,"-");return e.split(" ")[0].replace(/\//g,"-")}return void console.error("formatDate: 参数不存在！")}}}),define("core/views/publicComponent/detail/detailTab.component",["underscore","jquery","backbone","../../../services/event.service"],function(e,t,n,a){return n.View.extend({el:"#tab",events:{"click a":"handleClick"},initialize:function(e){void 0!=e&&(t(this.el).find("a.active").removeClass("active"),t(this.el).find("a[data-tab='"+e+"']").addClass("active"))},handleClick:function(e){var n=t(e.currentTarget),o=n.parent().index();n.parent().parent().find("a").removeClass("active"),n.addClass("active"),window.location.href=t("#leftNav ul").eq(o).find(".subNavBlock a").eq(0).attr("href"),a.emit("showLeftNav_DetailLeftNavComponent",o)}})}),define("core/views/publicComponent/detail/detailLeftNav.component",["underscore","jquery","backbone","../../../services/event.service"],function(e,t,n,a){return n.View.extend({el:"#leftNav",events:{"click  li":"handleClick"},initialize:function(){var e=this;a.on("showLeftNav_DetailLeftNavComponent",function(n){t(e.el).find("ul").hide(),t(e.el).find("ul").eq(n).show()})},handleClick:function(e){var n=t(e.currentTarget);n.hasClass("active")?n.removeClass("active"):n.addClass("active")}})}),define("core/views/publicComponent/detail/detailTimeBlock.component",["underscore","jquery","backbone","String","../../../services/event.service"],function(e,t,n,a,o){return n.View.extend({el:"#countDownTime",timeBlock:"#countDownTime #timeBlock",timeTemp:"#countDownTime #timeTemp",dayDom:"#countDownTime  #day",hourDom:"#countDownTime  #hour",minuteDom:"#countDownTime  #minute",secondDom:"#countDownTime  #second",periodDom:"#countDownTime  .mc_title span i",surplusDom:"#countDownTime #surplus",initialize:function(){var e=this;o.on("countDowning_timerContainer",function(t){t?e.countDownTime(t):console.error("DetailTimeBlockComponent：没有获取到倒计时间值！")}),o.on("getAwardTimeObject_timerContainer",function(n){n?(t(e.periodDom).html(n.nextPeriod+"期"),t(e.surplusDom).html(n.surplus+"期")):console.error("updateCountPeriodAndSurplusDom: 更新倒计模块得期数和剩余时间数据不存在！")})},countDownTime:function(e){var n=this,a=(""+e).SecondsToddhhmmss().split(":");t(this.timeTemp).hide(),t(this.timeBlock).show(),4==a.length&&("00"==a[0]?"00"==a[1]?(t(this.dayDom).hide(),t(this.hourDom).hide(),t(this.minuteDom).show(),t(this.secondDom).show()):(t(this.dayDom).hide(),t(this.hourDom).show(),t(this.minuteDom).show(),t(this.secondDom).hide()):(t(this.dayDom).show(),t(this.hourDom).show(),t(this.minuteDom).hide(),t(this.secondDom).hide())),t(n.dayDom).find(".time").html(a[0]),t(n.hourDom).find(".time").html(a[1]),t(n.minuteDom).find(".time").html(a[2]),t(n.secondDom).find(".time").html(a[3])}})}),define("core/views/publicComponent/detail/detailList.component",["underscore","jquery","backbone","../../../services/event.service"],function(e,t,n,a){return n.View.extend({el:"#list",tableTable:"#list table",initialize:function(e,n){var o=this;o.lotteryCode=e,o.lotteryType=n,a.on("renderList_detailListComponent",function(e){e||console.warn("DetailListComponent: 返回的模版为空！"),"string"==typeof e?o.renderListHtml(e):"object"==typeof e&&o.isToday()&&o.appendLottery(e)}),a.on("updateAttribute_detailListComponent",function(e){e?t(o.el).attr("data-attribute",e):console.error("updateAttribute：开奖返回来得数据不正确！")}),a.on("loading_detailListComponent",function(){var e,n="";e=/kl8/.test(o.lotteryCode)?22:/k3/.test(o.lotteryCode)?4:3,n+='<tr><td colspan="'+e+'"><span class="wgt-loading3"><span class="loadingIcon"></span><span class="loadingFont">正在加载中...</span></span></td></tr>',t(o.tableTable).find("tbody tr").remove(),t(o.tableTable).find("tbody").append(n)}),a.on("isToday_detailListComponent",function(e){e(o.isToday())})},isToday:function(){var e=this;return t(e.el).attr("data-attribute")==t(e.el).attr("data-default")},appendHtml:function(e,t){var n=e.awardTime,a='<tr style="display: none;">';a+="<td>"+e.period+"期</td><td>"+n+"</td>";var o=e.result.split(",");if("k3"==t){a+="<td>";for(var i=0,r=0;r<o.length;r++)a+='<span class="public-number-'+t+'" style="position:relative; top:3px;">',o[r].length<=1&&parseInt(o[r])<10&&(o[r]="0"+o[r]),a+='<span class="num'+o[r]+'"></span>',a+="</span>",i+=parseInt(o[r]);a+='<span style="position:relative; top:-3px;">( '+e.result+" )</span></td><td>"+i+"</td>"}else for(var r=0;r<o.length;r++)a+='<td><div class="public-number-'+t+'">',o[r].length<=1&&parseInt(o[r])<10&&(o[r]="0"+o[r]),a+='<span class="num'+o[r]+'"></span>',a+="</div></td>";return a+="</tr>"},appendLottery:function(e){var n=this;if(e){var a=e.result,o="";if("bjpk10"==a.lotteryCode)o+=this.appendHtml(a,"pk10");else if("xync"==a.lotteryCode||"hnkl10"==a.lotteryCode){var i="xync";"hnkl10"==a.lotteryCode&&(i="zoology"),o+=this.appendHtml(a,i)}else a.lotteryCode.indexOf("k3")>=0?o+=this.appendHtml(a,"k3"):"bjkl8"==a.lotteryCode?o+='<tr style="display: none;"><td>'+a.period+"期</td>"+n.k8changeTable(a.result)+"</tr>":o+='<tr style="display: none;"><td>'+a.period+"期</td><td>"+a.awardTime+'</td><td><span class="ball_num">'+n.stringChangeBall(a.result)+"</span></td></tr>";t(n.tableTable).find("tbody").prepend(o),t(n.tableTable).find("tbody tr").eq(0).fadeIn(600)}},stringChangeBall:function(e){if(e){var t,n,a="";if(/\|/i.test(e)){t=e.split("|"),n=t[0].split(",");var o=[];if(n[0].length>0)for(var i=0;i<n.length;i++)a+='<i class="red">'+n[i]+"</i>";if(t[1]){o=t[1].split(",");for(var i=0;i<o.length;i++)a+='<i class="blue">'+n[i]+"</i>"}}else if(n=e.split(","),n[0].length>0)for(var i=0;i<n.length;i++)a+='<i class="red">'+n[i]+"</i>";return a}console.warn("stringChangeBall：参数为空，请注意！")},k8changeTable:function(e){if(e){var t,n,a="";if(t=e.split("|"),n=t[0].split(","),t[1]?a+="<td>X"+t[1]+"</td>":a+="<td></td>",n.length>0)for(var o=0;o<n.length;o++)a+="<td>"+n[o]+"</td>";return a}console.warn("stringChangeBall：参数为空，请注意！")},renderListHtml:function(e){var n,a=this;t(a.tableTable).find("tbody tr").remove(),n="kl8"==a.lotteryType?22:"k3"==a.lotteryType?4:3,e?t(a.tableTable).find("tbody").append(e):t(a.tableTable).find("tbody").append('<tr><td colspan="'+n+'">暂无任何数据！</td></tr>')}})}),define("core/views/publicComponent/public/selectPlugIn.component",["underscore","jquery","backbone","../../../services/event.service"],function(e,t,n,a){return n.View.extend({el:"#selectPlugIn",selectArrow:"#selectPlugIn .selectArrow",selectedText:"#selectPlugIn .selectedText",selectOption:"#selectPlugIn .selectOption",selectOptionLis:"#selectPlugIn .selectedText .lis",events:{click:"handleClick","click .lis":"handleClickForLis",mouseleave:"handleMouseLeave"},initialize:function(e){if(!e)return console.error("组件参数不能为空！"),!1;if(!e.type)return console.error("组件类型不能为空！可以选择time类型和number类型!"),!1;var n=this;if(n.type=e.type,n.selValue=e.value,n.value=t(n.el).attr("data-value"),!n.value)return console.warn("组件参数data-value为空，请加上数值！"),!1;"time"==e.type?n.dealWidthTime(n.value):"number"==e.type&&n.renderSelectPlugInNumber(n.value,n.selValue)},handleClick:function(){var e=this;t(e.selectArrow).hasClass("active")?(t(e.selectArrow).removeClass("active"),t(e.selectOption).hide()):(t(e.selectArrow).addClass("active"),t(e.selectOption).show())},handleMouseLeave:function(){var e=this;t(e.selectArrow).removeClass("active"),t(e.selectOption).hide()},handleClickForLis:function(e){var n=this,o=t(e.currentTarget);t(n.selectedText).html(o.html()),t(n.selectedText).attr("data-active",o.html()),"time"==n.type?a.emit("clickSelect_selectPlugInComponent",o.html()):"number"==n.type&&a.emit("clickSelectNumber_selectPlugInComponent",o.html())},renderSelectPlugIn:function(e){var n=this,a='<span class="selectArrow"></span>';a+='<span class="selectedText">'+e.nowDataTime+"</span>",a+='<div class="selectOption">';var o=e.nowDay,i=e.prevDiffDay,r=e.nowMonth,s=e.prevMonth;for(r<10&&(r="0"+r),s<10&&(s="0"+s);o>0;){var l=o;l<10&&(l="0"+o),a+='<span class="lis" >'+e.nowYear+"-"+r+"-"+l+"</span>",o--}for(var c=0;c<i;c++){var d=e.prevMonthTotalDay-c;d<10&&(d="0"+d),a+='<span class="lis" >'+e.prevYear+"-"+s+"-"+d+"</span>"}a+="</div>",t(n.el).html(a)},renderSelectPlugInNumber:function(e,n){var a,o=this,i=e.split(",");if(n=""==t(o.selectedText).attr("data-active")?n||i[0]:t(o.selectedText).attr("data-active"),"object"==typeof i){a='<span class="selectArrow"></span>',a+='<span class="selectedText" data-active="'+n+'">'+n+"</span>",a+='<div class="selectOption">';for(var r=0;r<i.length;r++)a+='<span class="lis" >'+i[r]+"</span>";a+="</div>",t(o.el).html(a)}else console.error("renderSelectPlugInNumber: 数据类型不正确！")},formateTime:function(e){return-1==e.indexOf(" ")?e.replace(/\//g,"-"):e.split(" ")[0].replace(/\//g,"-")},dealWidthTime:function(e){var t,n=this,a=n.formateTime(e),o=a.split("-"),i=parseInt(o[0]),r=parseInt(o[1].replace(/^0/,"")),s=parseInt(o[2].replace(/^0/,"")),l=i;1==r?(t=12,l=i-1):t=r-1;var c,d=n.getMonthTotalDay(l,t,s);s>d?c=s-d:s<=d&&(c=d-s+1);var u={nowDataTime:a,prevYear:l,prevMonth:t,prevMonthTotalDay:d,prevDiffDay:c,nowYear:i,nowMonth:r,nowDay:s};n.renderSelectPlugIn(u)},getMonthTotalDay:function(e,t){var n=this,a=[1,3,5,7,8,10,12],o=[4,6,9,11];return n.array_contain(a,t)?31:n.array_contain(o,t)?30:n.initFeb(e)},array_contain:function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1},initFeb:function(e){var t=this,n=parseInt(e);return t.isLeapYear(n)?29:28},isLeapYear:function(e){var t=e,n=t%4,a=t%100,o=t%400;return 0==n&&0!=a||0==o}})}),define("core/actions/public/lottery.action",["underscore","jquery","backbone","Date","../../services/request.service","../../services/event.service"],function(e,t,n,a,o,i){var r={};return r._awardHTMLCallback,r._awardTimerCallback,r._issuenoDataCallback,r._updatePlanCallback,r.initialize=function(e,n,a){this.lotteryCode=e,this.lotteryType=n,this.needUpdatePlan=a;var o=this;i.on("countDowning_timerContainer",function(e){var n=e.toString().SecondsToddhhmmss().split(":"),a="";a=parseInt(n[0])>0?"<b>"+n[0]+"</b><i>天</i><b>"+n[1]+"</b><i>时</i>":parseInt(n[1])>0?"<b>"+n[1]+"</b><i>时</i><b>"+n[2]+"</b><i>分</i>":"<b>"+n[2]+"</b><i>分</i><b>"+n[3]+"</b><i>秒</i>",t(".timeBlock .time").html(a)}),i.on("getAwardTimeObject_timerContainer",function(e){if(o.nextPeriod=e.nextPeriod,t(".next-period").html(o.nextPeriod+"期"),e.originTime){var n=new Date(e.originTime.replace(/-/g,"/")).format("MM-dd hh:mm");t("#lotteryTimerTime").html(n)}}),i.on("complete_timerContainer",function(){t(".beProgressing").show(),t(".preterite").hide(),t(".current-period").html(o.nextPeriod)}),i.on("lotteryResults_timerComponent",function(e){t(".beProgressing").hide(),t(".preterite").show(),r.getAwardHTML(function(e){i.emit("awardHTML_lotteryAction",e),r.needUpdatePlan&&setTimeout(function(){r.updatePlan(function(e){i.emit("awardPlanHTML_lotteryAction",e)})},3e4+Math.random())})}),i.on("digitQuery_historyContainer",function(e){r.getAwardHTML(function(e){i.emit("awardDigitHTML_lotteryAction",e)},e.year,e.day)}),i.on("digitExport_historyContainer",function(e){window.open("/api/"+o.lotteryType+"/"+o.lotteryCode+"/export/"+e.type+"/"+e.year)}),i.on("asyncSuccess_awardHTML",function(e){o._awardHTMLCallback(e)}),i.on("asyncSuccess_awardTimer",function(e){o._awardTimerCallback(e)}),i.on("asyncSuccess_issuenoData",function(e){o._issuenoDataCallback(e)}),i.on("asyncSuccess_updatePlan",function(e){o._updatePlanCallback(e)})},r.getAwardHTML=function(e,t,n){if("function"!=typeof e)console.error("getAwardHTML：请求数据的参数不正确，_callBack不是函数类型");else{var a={date:t,t:Math.random()};n&&(a.year=t,a.day=n),r._awardHTMLCallback=e,o.requestGet("/"+this.lotteryType+"/"+this.lotteryCode+"/indexPage",a,"asyncSuccess_awardHTML")}},r.updatePlan=function(e){if("function"!=typeof e)console.error("getAwardHTML：请求数据的参数不正确，_callBack不是函数类型");else{var t={lotteryCode:this.lotteryCode,t:Math.random()};r._updatePlanCallback=e,o.requestGet("/plan/updatePlan",t,"asyncSuccess_updatePlan")}},r.getAwardResult=function(e){if("function"!=typeof e)console.error("getAwardResult：请求数据的参数不正确，_callBack不是函数类型");else{var t={t:Math.random()};r._awardTimerCallback=e,o.requestGet("/lottery/"+this.lotteryCode+"/getawarddata",t,"asyncSuccess_awardTimer")}},r.getIssuenoData=function(e,t){if(void 0==e||"number"!=typeof e)return void console.error("getIssuenoData：请求数据的参数不正确，_issueno不是数字类型");if("function"!=typeof t)return void console.error("getIssuenoData：请求数据的_callBack参数不正确，_callBack不是函数类型");var n={t:Math.random(),issueno:e};r._issuenoDataCallback=t,o.requestGet("/"+this.lotteryType+"/"+this.lotteryCode+"/getawardinfobyissueno",n,"asyncSuccess_issuenoData")},r.loopResult=function(e){var t=this,n=setInterval(function(){t.getAwardResult(function(a){a.period==e&&(window.clearInterval(n),t.getAwardHTML(function(e){i.emit("awardHTML_lotteryAction",e)}))})},3e3+1e3*parseInt(Math.floor(5*Math.random()+1)))},r}),define("core/views/containers/public/detailHigh.container",["underscore","jquery","backbone","../../../services/event.service","../public/timer.container","../../publicComponent/detail/detailTab.component","../../publicComponent/detail/detailLeftNav.component","../../publicComponent/detail/detailTimeBlock.component","../../publicComponent/detail/detailList.component","../../publicComponent/public/selectPlugIn.component","../../../actions/public/lottery.action"],function(e,t,n,a,o,i,r,s,l,c,d){return{initialize:function(e,n){var u=this,p=new i;new r,new s,new c({type:"time"}),new l(e,n);o.initialize(e,"history"),d.initialize(e,n),p.initialize(n),a.on("clickSelect_selectPlugInComponent",function(e){a.emit("loading_detailListComponent"),d.getAwardHTML(u.getAwardCallBack,e),a.emit("updateAttribute_detailListComponent",e),a.emit("isToday_detailListComponent",function(e){e?a.emit("isGetAwardData_timerContainer",!0):a.emit("isGetAwardData_timerContainer",!1)})}),a.on("lotteryResults_timerComponent",function(e){a.emit("renderList_detailListComponent",e)}),t(".ld-publicSubNav li a").each(function(e,n){t(this).hasClass("active")&&(t(this).parent().parent().removeClass("active"),t(this).parent().parent().addClass("active"))})},getAwardCallBack:function(e){a.emit("renderList_detailListComponent",e.detail)}}}),define("core/views/containers/high/sxytdj/detail.container",["../../public/detailHigh.container"],function(e){return{initialize:function(t,n){e.initialize(t,n)}}});