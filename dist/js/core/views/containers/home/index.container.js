define("core/services/testing.service",["jquery"],function(e){return{isDev:"false"!==e("body").attr("isopeneventnamecheck"),_testingEventName:function(e){return this.isDev?!!/_[\w]*/.test(e):(console.error("body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！"),!1)}}}),define("core/services/event.service",["underscore","jquery","backbone","./testing.service"],function(e,t,n,i){return{_on:function(e,t){"string"==typeof e&&"function"==typeof t?i._testingEventName(e)?(this[e]=this[e]||new Array,this[e].push(t)):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},_emit:function(e){if("string"==typeof e)if(i._testingEventName(e)){var t=arguments.length>1?Array.prototype.slice.call(arguments,1):[];this[e]&&Array.prototype.forEach.call(this[e],function(e){e.apply(this,t)})}else console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)")},on:function(e,t){"string"==typeof e&&"function"==typeof t?i._testingEventName(e)?n.on(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},emit:function(e,t){"string"==typeof e&&(i._testingEventName(e)?n.trigger(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"))}}}),define("core/views/publicComponent/home/lotteryList.component",["underscore","jquery","String","Date","backbone","../../../services/event.service"],function(e,t,n,i,a,o){return a.View.extend({el:"#lotteryList",tab:"#tab",content:"#content",lis:"#content .lis",lnLi:"#content .lis .ln-li",lnli:".ln-li",events:{"mouseenter #tab a":"handleMouseEnterTab"},initialize:function(){var e=this;e.tempArray=[],e.tabCodeString="",e.tabCodeArray=[],t(e.lis).each(function(n,i){"none"!=t(i).css("display")&&t(i).find(e.lnli).each(function(n,i){e.tabCodeArray.push(t(i).attr("data-code"))})}),e.countDown(),o.on("changeLottery_LotteryListComponent",function(t){e.changeLottery(t)}),o.on("checkIsAward_LotteryListComponent",function(t){e.checkIsAward(t)}),o.on("changeTabLotteryListAwardState_LotteryListComponent",function(t){e.changeTabLotteryListAwardTime(t)}),o.on("upDatePeriodAttr_lotteryListComponent",function(t){e.upDatePeriodAttr(t)})},changeTabLotteryListAwardTime:function(e){t(this.lis).each(function(n,i){"none"!=t(i).css("display")&&t(i).html(e.resultHtml)})},upDatePeriodAttr:function(e){var n=this;t(n.content+" .active").find(n.lnli).each(function(n,i){if(e.lotteryCode==t(i).attr("data-code"))return t(i).attr("data-nextperiod",e.next.period),!1})},checkIsAward:function(e){var n=this;t(n.content+" .active").find(n.lnli).each(function(i,a){if(e.lotteryCode==t(a).attr("data-code")&&t(a).attr("data-nextPeriod")==e.result.period){if(t(a).find(".latestIssue i").html(e.result.period),t(a).find(".beProgressing").html("").hide(),t(a).find(".data").html(n.awardDateFormat(e.result.awardTime)),t(a).find(".newInfoBlock").find(".number").remove(),t(a).find(".newInfoBlock").find(".info").after(n.updateAward(e.result.result,e.lotteryCode)),e.clearIntervalArray.length>0)for(var r=0;r<e.clearIntervalArray.length;r++)e.clearIntervalArray[r].lotteryCode==e.lotteryCode&&(window.clearInterval(e.clearIntervalArray[r].clearNum),e.clearIntervalArray.splice(t.inArray(e.clearIntervalArray[r],e.clearIntervalArray),1));return o.emit("upDateNextPeriod_lotteryListComponent",e.lotteryCode),!1}})},updateAward:function(e,t){var n,i,a,o="",r="";if(/\|/.test(e)?(n=e.split("|"),i=n[0].split(","),a=n[1].split(",")):i=e.split(","),"bjpk10"==t||"xyft"==t?o="pk10":/k3/.test(t)&&(o="k3"),"object"==typeof i&&void 0!=i&&i.length>0)for(var s=0;s<i.length;s++)/k3/.test(t)?r+='<span class="num0'+i[s]+'"></span>':"bjpk10"==t||"xyft"==t?parseInt(i[s])<10?r+='<span class="num0'+i[s]+'"></span>':r+='<span class="num'+i[s]+'"></span>':r+='<span class="red">'+i[s]+"</span>";if("object"==typeof a&&void 0!=a&&a.length>0)for(var s=0;s<a.length;s++)r+='<span class="blue">'+a[s]+"</span>";return'<div class="number '+o+'">'+r+"</div>"},awardDateFormat:function(e){return e?(e=e.replace(/-/g,"/"),e=new Date(e),e.format("MM-dd hh:mm")):""},handleMouseEnterTab:function(e){var n=this,i=t(e.currentTarget);if(!i.hasClass("more")){i.parent().find("a").removeClass("active"),i.addClass("active");var a=i.attr("data-classity");n.tabCodeString="",n.tabCodeArray=[],t(n.lis).each(function(e,i){t(i).attr("data-classity")==a?(t(i).show(),t(i).addClass("active"),t(i).find(n.lnli).each(function(e,a){e==t(i).find(n.lnli).length-1?n.tabCodeString+=t(a).attr("data-code"):n.tabCodeString+=t(a).attr("data-code")+",",n.tabCodeArray.push(t(a).attr("data-code"))}),o.emit("getGroupAwards_LotteryListComponent",n.tabCodeString),o.emit("clearIntervalArray_LotteryListComponent")):(t(i).hide(),t(i).removeClass("active"),t(i).find(n.lnli).each(function(e,n){t(n).find(".time").attr("data-time",""),t(n).find(".time").html("<span><b>--</b><i>--</i></span>")}))})}},changeLottery:function(e){var n=this,i=e.lotteryCode;if(void 0==e)return void console.error("changeLottery：返回得数据有问题！");t(n.content+" .active").find(n.lnli).each(function(a,o){if(t(o).attr("data-code")==i)return t(o).find(".time").attr("data-time",e.awardTimeInterval),t(o).find(".beProgressing").html("第"+e.current.period+"期正在开奖.....").fadeIn(600),-1!=t.inArray(i,n.tempArray)&&n.tempArray.splice(t.inArray(i,n.tempArray),1),!1})},countDown:function(){var e=this,n=!1;window.setInterval(function(){t(e.content+" .active").find(e.lnli).each(function(i,a){var r;r=""!=t(a).find(".time").attr("data-time")?parseFloat(t(a).find(".time").attr("data-time")):void 0;var s=t(a).attr("data-code");if(-1!=t.inArray(s,e.tabCodeArray)&&void 0!=r){if(r<=0)t(a).find(".time").attr("data-time",""),t(a).find(".dayDom").html("<b>00</b><i>天</i>"),t(a).find(".hourDom").html("<b>00</b><i>时</i>"),t(a).find(".minuteDom").html("<b>00</b><i>分</i>"),t(a).find(".secondDom").html("<b>00</b><i>秒</i>"),-1==t.inArray(s,e.tempArray)&&(e.tempArray.push(t(a).attr("data-code")),0==n?(o.emit("getAwardTime_lotteryListComponent",s),n=!0,window.setTimeout(function(){n=!1},600)):window.setTimeout(function(){o.emit("getAwardTime_lotteryListComponent",s)},1e3));else if(""!=t(a).find(".time").attr("data-time")){r--,t(a).find(".time").attr("data-time",r);var c=(""+r).SecondsToddhhmmss().split(":");4==c.length&&("00"==c[0]?"00"==c[1]?(t(a).find(".dayDom").hide(),t(a).find(".hourDom").hide(),t(a).find(".minuteDom").show(),t(a).find(".secondDom").show()):(t(a).find(".dayDom").hide(),t(a).find(".hourDom").show(),t(a).find(".minuteDom").show(),t(a).find(".secondDom").hide()):(t(a).find(".dayDom").show(),t(a).find(".hourDom").show(),t(a).find(".minuteDom").hide(),t(a).find(".secondDom").hide())),t(a).find(".dayDom").html("<b>"+c[0]+"</b><i>天</i>"),t(a).find(".hourDom").html("<b>"+c[1]+"</b><i>时</i>"),t(a).find(".minuteDom").html("<b>"+c[2]+"</b><i>分</i>"),t(a).find(".secondDom").html("<b>"+c[3]+"</b><i>秒</i>")}}else t(a).find(".time").attr("data-time",""),t(a).find(".dayDom").html("<b>00</b><i>天</i>"),t(a).find(".hourDom").html("<b>00</b><i>时</i>"),t(a).find(".minuteDom").html("<b>00</b><i>分</i>"),t(a).find(".secondDom").html("<b>00</b><i>秒</i>")})},1e3)}})}),define("core/views/publicComponent/home/videoList.component",["underscore","jquery","String","Date","backbone","../../../services/event.service"],function(e,t,n,i,a,o){return a.View.extend({el:"#videoList",id:"#videoList",btnL:"#btnL",btnR:"#btnR",events:{"click #btnL":"handleClickBtnL","click #btnR":"handleClickBtnR"},initialize:function(){var e=this;e.lock=!1,e.countDown(),o.on("changeLottery_VideoListComponent",function(t){e.update(t.code,t.result)}),o.on("appendVideo_VideoListComponent",function(t){e.appendVideo(t)})},appendVideo:function(e){var n=this;if(void 0==e)return void console.error("更新插入的视频模块为空！");t(n.id).find("li").each(function(i,a){return i<=2&&(t(a).attr("data-code")==e.lotteryCode?(t(a).html(e.resultHtml),n.lock=!1,!1):void 0)})},update:function(e,n){t(this.id).find("li").each(function(i,a){if(t(a).attr("data-code")==e)return t(a).find(".issue").html(n.next.period+"期"),t(a).find(".countDownTime").attr("data-time",n.awardTimeInterval),!1})},countDown:function(){var e=this;window.setInterval(function(){t(e.id).find("li").each(function(e,n){if(!(e<=2))return!1;var i=t(n).find(".countDownTime"),a=parseFloat(i.attr("data-time"));if(a<=0)i.attr("data-time",0),i.html("00:00"),t(n).find(".textBtn").hide(),t(n).find(".timeText").show(),window.setTimeout(function(){o.emit("getAwardTime_videoListComponent",t(n).attr("data-code"))},3e3);else if(t(n).find(".textBtn").show(),t(n).find(".timeText").hide(),""!=i.attr("data-time")){a--,i.attr("data-time",a);var r=(""+a).SecondsToddhhmmss().split(":");i.html(r[2]+":"+r[3])}})},1e3)},handleClickBtnL:function(){var e=this;if(1!=e.lock){e.lock=!0;var n=t(e.id).find("li").eq(0).outerWidth(),i=t(e.id).find("li").length,a=t(e.id).find("li").eq(i-1);t(e.id).find("li").eq(i-1).remove(),t(e.id).find("ul").prepend(a),t(e.id).find("li").eq(0).css({"margin-left":-n}),t(e.id).find("li").eq(0).stop(!0,!1).animate({"margin-left":0},300,function(){t(e.id).find("li").each(function(e,n){e<=2?t(n).addClass("active"):(t(n).removeAttr("style"),t(n).removeClass("active"),t(n).find(".countDownTime").html("00:00"),t(n).find(".countDownTime").attr("data-time",""),t(n).find(".issue").html("---期"),t(n).find(".textBtn").show(),t(n).find(".timeText").hide())}),o.emit("requestVideo_VideoListComponent",t(e.id).find("li").eq(0).attr("data-code"))})}},handleClickBtnR:function(){var e=this;if(1!=e.lock){e.lock=!0;var n=t(e.id).find("li").eq(0).outerWidth();t(e.id).find("li").eq(0).stop(!0,!1).animate({"margin-left":-n},300,function(){var n=t(e.id).find("li").eq(0).removeAttr("style").removeClass("active");t(e.id).find("li").eq(0).remove(),t(e.id).find("ul").append(n),t(e.id).find("li").each(function(e,n){e<=2?t(n).addClass("active"):(t(n).removeClass("active"),t(n).find(".countDownTime").html("00:00"),t(n).find(".countDownTime").attr("data-time",""),t(n).find(".issue").html("---期"),t(n).find(".textBtn").show(),t(n).find(".timeText").hide())}),o.emit("requestVideo_VideoListComponent",t(e.id).find("li").eq(2).attr("data-code"))})}}})}),define("core/views/publicComponent/public/swiper.component",["underscore","jquery","String","Date","backbone","../../../services/event.service"],function(e,t,n,i,a,o){return a.View.extend({el:"#banner",id:"#banner",page:"#page",events:{"click #page span":"handleCickPage",mouseenter:"handleMouseEnter",mouseleave:"handleMouseLeave"},initialize:function(e){var n=this;if(n.len=t(n.id).find("li").length,n.time=e,n.len>1){var i=t(n.id).find("li").eq(0).outerWidth();t(n.id).find("li").css({width:i,float:"left"}),t(n.id).find("ul").css({width:i*n.len}),n.addPage(n.len),n.startSwiper(n.time)}},handleMouseEnter:function(){var e=this;e.len>1&&window.clearInterval(e.clearInterval)},handleMouseLeave:function(){var e=this;e.len>1&&e.startSwiper(e.time)},startSwiper:function(){var e=this;e.clearInterval=window.setInterval(function(){e.swiperLeft()},e.time)},handleCickPage:function(e){var n=this,i=t(e.currentTarget);i.parent().find("span").removeClass("active"),i.addClass("active");var a=parseInt(t(n.id).find("li").eq(0).attr("data-index")),o=parseInt(i.attr("data-index"));if(o>a)var r=o-a,s=window.setInterval(function(){0==r?window.clearInterval(s):(r--,n.swiperLeft())},600);else var r=a-o,s=window.setInterval(function(){0==r?window.clearInterval(s):(r--,n.swiperRight())},600)},swiperLeft:function(){var e=this,n=t(e.id).find("li").eq(0).outerWidth();t(e.id).find("li").eq(0).stop(!0,!1).animate({"margin-left":-n},300,function(){var i=t(e.id).find("li").eq(0).removeAttr("style");t(e.id).find("li").eq(0).remove(),t(e.id).find("ul").append(i),t(e.id).find("li").css({width:n,float:"left"});var a=t(e.id).find("li").eq(0).attr("data-index");t(e.page).find("span").removeClass("active"),t(e.page).find("span").eq(a).addClass("active")})},swiperRight:function(){var e=this,n=t(e.id).find("li").eq(0).outerWidth(),i=(t(e.id).find("li").length,t(e.id).find("li:last-child"));t(e.id).find("li:last-child").remove(),t(e.id).find("ul").prepend(i),t(e.id).find("li:first-child").css({marginLeft:-n}),t(e.id).find("li:first-child").stop(!0,!1).animate({"margin-left":0},300,function(){t(e.id).find("li").removeAttr("style"),t(e.id).find("li").css({width:n,float:"left"});var i=t(e.id).find("li").eq(0).attr("data-index");t(e.page).find("span").removeClass("active"),t(e.page).find("span").eq(i).addClass("active")})},addPage:function(e){for(var n=this,i="",a=0;a<e;a++)i+=0==a?'<span class="active" data-index="'+a+'"></span>':'<span class="" data-index="'+a+'"></span>';t(n.page).append(i)}})}),define("core/services/request.service",["underscore","jquery","backbone","./event.service"],function(e,t,n,i){var a={_asyncRequestBase:function(e,n,a,o,r,s){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:a,data:o,success:function(e){e?i.emit(r,e):(i.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+r+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(i.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),s&&i.emit(s,_resultData))},error:function(e,t){"timeout"==t&&(i.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),s&&i.emit(s,_resultData))}})},_asyncRequestBaseJsonp:function(e,n,a,o,r){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:"jsonp",jsonp:"jsoncallback",jsonpCallback:o,data:a,success:function(e){e?i.emit(o,e):(i.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+o+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(i.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),r&&i.emit(r,_resultData))},error:function(e,t){"timeout"==t&&(i.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),r&&i.emit(r,_resultData))}})},requestPostJsonp:function(e,t,n,i){return a._asyncRequestBaseJsonp("POST",e,t,n,i)},requestGetJsonp:function(e,t,n,i){return a._asyncRequestBaseJsonp("GET",e,t,n,i)},requestPost:function(e,t,n){return a._asyncRequestBase("POST",e,"json",t,n,_failedEvent)},requestPostSearch:function(e,t,n,i,o){return a._asyncRequestBase("POST",e,t,n,i,o)},requestGet:function(e,t,n,i){return a._asyncRequestBase("GET",e,"json",t,n,i)},requestGetHtml:function(e,t,n,i){return a._asyncRequestBase("GET",e,"text",t,n,i)}};return a}),define("core/actions/public/timer.action",["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,n,i,a){var o={};return o._awardResultCallBack,o._awardDataCallBack,o._awardTimeCallBack,o.initialize=function(){var e=this;a.on("asyncSuccess_awardResult",function(t){e._awardResultCallBack(t)}),a.on("asyncSuccess_awardData",function(t){e._awardDataCallBack(t)}),a.on("asyncSuccess_awardTime",function(t){e._awardTimeCallBack(t)})},o.requestAwardResult=function(e,t){if("string"!=typeof e||"function"!=typeof t)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{o._awardResultCallBack=t;var n={t:Math.random()};i.requestGet("/lottery/"+e+"/getawarddata",n,"asyncSuccess_awardResult")}},o.requestAwardData=function(e,t,n){if("string"!=typeof e||"string"!=typeof t||"function"!=typeof n)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{o._awardDataCallBack=n;var a,r={};r.t=Math.random(),t?a=this.judgmentAwardType(t):console.error("开奖历史为空,请设置开奖类型！"),i.requestGet("/lottery/"+e+"/"+a,r,"asyncSuccess_awardData")}},o.requestAwardDataForHtml=function(e,t,n){if("string"!=typeof e||"string"!=typeof t||"function"!=typeof n)console.error("请求开奖号码的参数不正确，_lotteryCode不是字符串类型或者_awardType不是字符串类型或者_callBack不是函数类型");else{o._awardDataCallBack=n;var a,r={t:Math.random()};t?a=this.judgmentAwardType(t):console.error("开奖历史为空,请设置开奖类型！"),i.requestGetHtml("/lottery/"+e+"/"+a,r,"asyncSuccess_awardData")}},o.requestAwardTime=function(e,t){if("string"!=typeof e||"function"!=typeof t)console.error("请求开奖时间的参数不正确，_lotteryCode不是字符串类型或者_callBack不是函数类型");else{var n={t:Math.random()};o._awardTimeCallBack=t,i.requestGet("/lottery/"+e+"/getawardtimes",n,"asyncSuccess_awardTime")}},o.judgmentAwardType=function(e){var t="";return"history"==e&&(t="getawarddata"),t},o}),define("core/actions/home/home.action",["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,n,i,a){var o={};return o._groupAwardsCallback,o._requestVideoCallback,o.initialize=function(){var e=this;a.on("asyncSuccess_groupAwards",function(t){e._groupAwardsCallback(t)}),a.on("asyncSuccess_requestVideo",function(t){e._requestVideoCallback(t)})},o.groupAwards=function(e,t){if("function"!=typeof t)console.error("请求数据的参数不正确，_callBack不是函数类型");else{var n={codes:e,t:Math.random()};o._groupAwardsCallback=t,i.requestGet("/home/getgroupawards",n,"asyncSuccess_groupAwards")}},o.requestVideo=function(e,t){if("function"!=typeof t)console.error("请求数据的参数不正确，_callBack不是函数类型");else{var n={lotterycode:e,t:Math.random()};o._requestVideoCallback=t,i.requestGet("/home/getvideo",n,"asyncSuccess_requestVideo")}},o}),define("core/actions/plan/plan.action",["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,n,i,a){var o={};return o._planIndexCallback,o._planAwardHTMLCallback,o._planAwardResultCallback,o._planAwardResultHTMLCallback,o._requestPlanCallback,o.initialize=function(){var e=this;a.on("asyncSuccess_planIndex",function(t){e._planIndexCallback(t)}),a.on("asyncSuccess_planAwardHTML",function(t){e._planAwardHTMLCallback(t)}),a.on("asyncSuccess_planAwardResult",function(t){e._planAwardResultCallback(t)}),a.on("asyncSuccess_planAwardResultHTML",function(t){e._planAwardResultHTMLCallback(t)}),a.on("asyncSuccess_requestPlan",function(t){e._requestPlanCallback(t)})},o.requestPlan=function(e){if("function"!=typeof e)console.error("请求数据的参数不正确，_callBack不是函数类型");else{var t={t:Math.random()};o._requestPlanCallback=e,i.requestGet("/plan/getplan",t,"asyncSuccess_requestPlan")}},o.getPageIndex=function(e){if("function"!=typeof e)console.error("请求数据的参数不正确，_callBack不是函数类型");else{var t={t:Math.random()};o._planIndexCallback=e,i.requestGet("/plan/updateList",t,"asyncSuccess_planIndex")}},o.getAwardResult=function(e,t){if("function"!=typeof t)console.error("getAwardResult：请求数据的参数不正确，_callBack不是函数类型");else{var n={t:Math.random()};o._planAwardResultCallback=t,i.requestGet("/lottery/"+e+"/getawarddata",n,"asyncSuccess_planAwardResult")}},o.getAwardHTML=function(e,t){if("function"!=typeof t)console.error("getAwardHTML：请求数据的参数不正确，_callBack不是函数类型");else{var n={t:Math.random(),lotteryCode:e.lotteryCode,type:e.type,groupId:e.groupId,date:e.date};o._planAwardHTMLCallback=t,i.requestGet("/plan/updatePlanResult",n,"asyncSuccess_planAwardHTML")}},o.getAwardTimerHTML=function(e,t){if("function"!=typeof t)console.error("getAwardTimerHTML：请求数据的参数不正确，_callBack不是函数类型");else{var n={t:Math.random(),lotteryCode:e.lotteryCode,groupId:e.groupId};o._planAwardResultHTMLCallback=t,i.requestGet("/plan/updateAwardReult",n,"asyncSuccess_planAwardResultHTML")}},o.loopResult=function(e,t){var n=this,i=setInterval(function(){n.getAwardResult(e,function(e){e.period==t&&(window.clearInterval(i),a.emit("awardHTML_PlanLoopAction",e))})},5e3)},o}),define("core/actions/point/point.action",["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,n,i,a){var o={};return o._requestPointCallback,o.initialize=function(){var e=this;a.on("asyncSuccess_requestPoint",function(t){e._requestPointCallback(t)})},o.requestPoint=function(e){if("function"!=typeof e)console.error("请求数据的参数不正确，_callBack不是函数类型");else{var t={t:Math.random()};o._requestPointCallback=e,i.requestGet("/point/getpoint",t,"asyncSuccess_requestPoint")}},o}),define("core/views/containers/home/index.container",["underscore","jquery","backbone","../../../services/event.service","../../publicComponent/home/lotteryList.component","../../publicComponent/home/videoList.component","../../publicComponent/public/swiper.component","../../../actions/public/timer.action","../../../actions/home/home.action","../../../actions/plan/plan.action","../../../actions/point/point.action"],function(e,t,n,i,a,o,r,s,c,d,l){return{initialize:function(){var e=this;e.isLock=!1;new r(3e3),new a,new o;e.clearIntervalArray=[],s.initialize(),c.initialize(),d.initialize(),l.initialize(),i.on("getAwardTime_videoListComponent",function(e){s.requestAwardTime(e,function(t){i.emit("changeLottery_VideoListComponent",{code:e,result:t})})}),i.on("getAwardTime_lotteryListComponent",function(t){e.getAwardTime(t)}),i.on("upDateNextPeriod_lotteryListComponent",function(e){s.requestAwardTime(e,function(e){i.emit("upDatePeriodAttr_lotteryListComponent",e)})}),i.on("getGroupAwards_LotteryListComponent",function(e){c.groupAwards(e,function(e){i.emit("changeTabLotteryListAwardState_LotteryListComponent",e)})}),i.on("requestVideo_VideoListComponent",function(e){c.requestVideo(e,function(e){i.emit("appendVideo_VideoListComponent",e)})}),i.on("clearIntervalArray_LotteryListComponent",function(){if(e.clearIntervalArray.length>0){for(var t=0;t<e.clearIntervalArray.length;t++)window.clearInterval(e.clearIntervalArray[t].clearNum);e.clearIntervalArray=[]}}),t(".lmb-content .name").mouseenter(function(){var e=t(this).outerWidth(),n=t(this).position().left;t(".lmb-content .borBot").stop(!0,!1).animate({width:e+"px",left:n+"px"},200)}),e.refreshPlanAndPoint(t("#plan").attr("data-systime")),e.countDownPlan(12e4)},getAwardTime:function(e){var t=this;console.log("执行了开奖回调:"+e),s.requestAwardTime(e,function(e){i.emit("changeLottery_LotteryListComponent",e),console.log("*************************"+e.lotteryCode+"（"+e.lotteryName+"）准备开"+e.current.period+"期*************************"),t.requestAwardDataFun(e.lotteryCode,3e3+1e3*parseInt(Math.floor(5*Math.random()+1)))})},refreshPlanAndPoint:function(e){var t,n=this,i=e.split(" ")[0],a=new Date(i+" 07:05:00"),o=new Date(i+" 14:05:00"),r=new Date(e);if(r<=a)t=a-r;else{if(!(r>=a&&r<=o))return;t=o-r}n.countDownUpdate(t)},countDownPlan:function(e){window.setInterval(function(){d.requestPlan(function(e){void 0!=e?(t("#plan").find("tr").not(":first-child").remove(),t("#plan").find("tr:first-child").after(e.resultHtml)):console.error("追号推荐返回来的数据有问题！")})},e)},countDownUpdate:function(e){window.setTimeout(function(){l.requestPoint(function(e){void 0!=e?t("#point ul").html(e.resultHtml):console.error("追号推荐返回来的数据有问题！")})},e)},requestAwardDataFun:function(e,t){var n=this,a=window.setInterval(function(){s.requestAwardData(e,"history",function(t){i.emit("checkIsAward_LotteryListComponent",{lotteryCode:e,result:t,clearIntervalArray:n.clearIntervalArray})})},t);n.clearIntervalArray.push({lotteryCode:e,clearNum:a})}}});