define("core/services/testing.service",["jquery"],function(e){return{isDev:"false"!==e("body").attr("isopeneventnamecheck"),_testingEventName:function(e){return this.isDev?!!/_[\w]*/.test(e):(console.error("body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！"),!1)}}}),define("core/services/event.service",["underscore","jquery","backbone","./testing.service"],function(e,n,t,i){return{_on:function(e,n){"string"==typeof e&&"function"==typeof n?i._testingEventName(e)?(this[e]=this[e]||new Array,this[e].push(n)):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},_emit:function(e){if("string"==typeof e)if(i._testingEventName(e)){var n=arguments.length>1?Array.prototype.slice.call(arguments,1):[];this[e]&&Array.prototype.forEach.call(this[e],function(e){e.apply(this,n)})}else console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)")},on:function(e,n){"string"==typeof e&&"function"==typeof n?i._testingEventName(e)?t.on(e,n):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},emit:function(e,n){"string"==typeof e&&(i._testingEventName(e)?t.trigger(e,n):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"))}}}),define("core/views/containers/public/page.container",["underscore","jquery","backbone","../../../services/event.service"],function(e,n,t,i){return{initialize:function(){this.initEvent()},initEvent:function(){n(document).on("click",".public-pageBlock a",function(){i.emit("activePage_pageContainer",n(this).data("pageindex"))})}}}),define("core/views/containers/live/list.container",["underscore","jquery","backbone","../../../services/event.service","../public/page.container"],function(e,n,t,i,o){return{initialize:function(){o.initialize(),this.initEvent()},initEvent:function(){i.on("activePage_pageContainer",function(e){var t=n("#list").attr("data-lotterycode"),i="/live/"+t+"/list";window.location.href=i+"/page_"+e})}}});