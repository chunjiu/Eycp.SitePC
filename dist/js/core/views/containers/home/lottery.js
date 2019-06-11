define("core/services/testing.service",["jquery"],function(e){return{isDev:"false"!==e("body").attr("isopeneventnamecheck"),_testingEventName:function(e){return this.isDev?!!/_[\w]*/.test(e):(console.error("body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！"),!1)}}}),define("core/services/event.service",["underscore","jquery","backbone","./testing.service"],function(e,t,n,o){return{_on:function(e,t){"string"==typeof e&&"function"==typeof t?o._testingEventName(e)?(this[e]=this[e]||new Array,this[e].push(t)):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},_emit:function(e){if("string"==typeof e)if(o._testingEventName(e)){var t=arguments.length>1?Array.prototype.slice.call(arguments,1):[];this[e]&&Array.prototype.forEach.call(this[e],function(e){e.apply(this,t)})}else console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)")},on:function(e,t){"string"==typeof e&&"function"==typeof t?o._testingEventName(e)?n.on(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},emit:function(e,t){"string"==typeof e&&(o._testingEventName(e)?n.trigger(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"))}}}),define("core/model/alertPlugin.model",["underscore","jquery","backbone","../services/event.service"],function(e,t,n,o){return n.Model.extend({defaults:{content:"",title:"提示",btnText:"确定",okCallback:""}})}),define("core/views/publicComponent/public/alertPlugin.component",["underscore","jquery","backbone","../../../services/event.service","../../../model/alertPlugin.model"],function(e,t,n,o){return n.View.extend({tagName:"div",className:"public-popUpWindows",id:"eyuAlert",attributes:{style:"display: block;"},events:{"click .close":"closeAlert","click .btn":"okAlert"},initialize:function(){this.render()},render:function(){return this.$el.html('<div class="puw-contentB"><div class="titleB"><span class="title">'+this.model.get("title")+'</span><i class="close"></i></div><div class="content">'+this.model.get("content")+'</div><span class="btn">'+this.model.get("btnText")+"</span></div>"),this},closeAlert:function(){t("#eyuAlert").remove();var e=this.model.get("closeCallback");"function"==typeof e&&e.call(this),o.emit("closeAlert_component")},okAlert:function(){t("#eyuAlert").remove();var e=this.model.get("okCallback");"function"==typeof e&&e.call(this),o.emit("okAlert_component")},show:function(){this.$el.appendTo(t("body"))}})}),define("core/services/request.service",["underscore","jquery","backbone","./event.service"],function(e,t,n,o){var a={_asyncRequestBase:function(e,n,a,i,r,c){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:a,data:i,success:function(e){e?o.emit(r,e):(o.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+r+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(o.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),c&&o.emit(c,_resultData))},error:function(e,t){"timeout"==t&&(o.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),c&&o.emit(c,_resultData))}})},_asyncRequestBaseJsonp:function(e,n,a,i,r){t.ajax({type:e,async:!0,timeout:1e4,url:n,dataType:"jsonp",jsonp:"jsoncallback",jsonpCallback:i,data:a,success:function(e){e?o.emit(i,e):(o.emit("createPromptWindow_promptWindowComponent",{title:"网络发生异常！",time:600}),console.error("("+i+"事件)返回得数据发生错误:"))},complete:function(e,t){"timeout"==t&&(o.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),r&&o.emit(r,_resultData))},error:function(e,t){"timeout"==t&&(o.emit("createPromptWindow_promptWindowComponent",{title:"网络异常,请求超时,请稍后再试...",time:600}),r&&o.emit(r,_resultData))}})},requestPostJsonp:function(e,t,n,o){return a._asyncRequestBaseJsonp("POST",e,t,n,o)},requestGetJsonp:function(e,t,n,o){return a._asyncRequestBaseJsonp("GET",e,t,n,o)},requestPost:function(e,t,n){return a._asyncRequestBase("POST",e,"json",t,n,_failedEvent)},requestPostSearch:function(e,t,n,o,i){return a._asyncRequestBase("POST",e,t,n,o,i)},requestGet:function(e,t,n,o){return a._asyncRequestBase("GET",e,"json",t,n,o)},requestGetHtml:function(e,t,n,o){return a._asyncRequestBase("GET",e,"text",t,n,o)}};return a}),define("core/actions/home/lotteryHall.action",["underscore","jquery","backbone","../../services/request.service","../../services/event.service"],function(e,t,n,o,a){var i={};return i._awardSearchCallback,i.initialize=function(){var e=this;a.on("asyncSuccess_awardSearch",function(t){e._awardSearchCallback(t)})},i.getAwardSearch=function(e,t){if("function"!=typeof t)console.error("请求数据的参数不正确，_callBack不是函数类型");else{var n={t:Math.random(),key:encodeURIComponent(e)};i._awardSearchCallback=t,o.requestGet("/lottery/search",n,"asyncSuccess_awardSearch")}},i}),define("core/views/containers/home/lottery",["underscore","jquery","backbone","template","../../publicComponent/public/alertPlugin.component","../../../model/alertPlugin.model","../../../actions/home/lotteryHall.action"],function(e,t,n,o,a,i,r){var c=!0;return{initialize:function(){this.initEvent(),r.initialize()},initEvent:function(){t(document).on("click",".category",this.changeCategory),t(document).on("click",".high-category",this.changeChilds),t(document).on("click",".province",this.changeProvince),t(document).on("click","#btnQuery",this.searchLottery),t("#txtLottery").on("compositionstart",function(){c=!1}),t("#txtLottery").on("compositionend",function(){c=!0}),t(document).on("input keyup","#txtLottery",this.inputLottery)},changeCategory:function(){var e=t(this).data().id;t(".category").removeClass("active"),t(this).addClass("active"),e?(t("[data-type],[data-category]").hide(),t("[data-type="+e+"], [data-category="+e+"]").fadeIn("fast")):(t("[data-type],[data-highCategory],[data-province]").fadeIn("fast"),t("[data-category]").hide()),t("#searchData").html("").hide(),t(".province,.high-category").removeClass("active"),t(t(".high-category")[0]).addClass("active"),t(t(".province")[0]).addClass("active"),t("[data-highCategory]").fadeIn("fast"),t("[data-province]").fadeIn("fast"),t("#defaultData").fadeIn("fast")},changeChilds:function(){var e=t(this).data().id;t(".high-category").removeClass("active"),t(this).addClass("active"),e?(t("[data-highCategory]").hide(),t("[data-highCategory="+e+"]").fadeIn("fast")):t("[data-highCategory]").fadeIn("fast")},changeProvince:function(){var e=t(this).data().id;t(".province").removeClass("active"),t(this).addClass("active"),e?(t("[data-province]").hide(),t("[data-province="+e+"]").fadeIn("fast")):t("[data-province]").fadeIn("fast")},alertInfo:function(){var e=new i({content:"功能正在开发中，敬请期待！",btnText:"知道了！"});new a({model:e}).show()},searchLottery:function(){var e=t("#txtLottery").val().trim();e&&r.getAwardSearch(e,function(n){if(1==n.state)t("#defaultData").hide(),t("#searchData").html(n.search).fadeIn("fast");else{var o=new i({content:"没有搜索到“"+e+"”彩种",btnText:"确定"});new a({model:o}).show()}})},inputLottery:function(){if(c){var e=t(this).val();e?(e=e.replace(/[^\u4E00-\u9FA5a-zA-Z0-9]/g,""),t(this).val(e),e&&t("#btnQuery").removeClass("disabled")):t("#btnQuery").addClass("disabled")}}}});