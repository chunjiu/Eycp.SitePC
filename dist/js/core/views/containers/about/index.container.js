define("core/services/testing.service",["jquery"],function(e){return{isDev:"false"!==e("body").attr("isopeneventnamecheck"),_testingEventName:function(e){return this.isDev?!!/_[\w]*/.test(e):(console.error("body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！"),!1)}}}),define("core/services/event.service",["underscore","jquery","backbone","./testing.service"],function(e,t,n,i){return{_on:function(e,t){"string"==typeof e&&"function"==typeof t?i._testingEventName(e)?(this[e]=this[e]||new Array,this[e].push(t)):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},_emit:function(e){if("string"==typeof e)if(i._testingEventName(e)){var t=arguments.length>1?Array.prototype.slice.call(arguments,1):[];this[e]&&Array.prototype.forEach.call(this[e],function(e){e.apply(this,t)})}else console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)")},on:function(e,t){"string"==typeof e&&"function"==typeof t?i._testingEventName(e)?n.on(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"):console.error("事件参数不正确！")},emit:function(e,t){"string"==typeof e&&(i._testingEventName(e)?n.trigger(e,t):console.error("您得事件未指定是从那个组件接收得，请按照事件命名规范编写事件名字！例子：事件名_接收组件(需要加上Component)"))}}}),define("core/model/alertPlugin.model",["underscore","jquery","backbone","../services/event.service"],function(e,t,n,i){return n.Model.extend({defaults:{content:"",title:"提示",btnText:"确定",okCallback:""}})}),define("core/views/publicComponent/public/alertPlugin.component",["underscore","jquery","backbone","../../../services/event.service","../../../model/alertPlugin.model"],function(e,t,n,i){return n.View.extend({tagName:"div",className:"public-popUpWindows",id:"eyuAlert",attributes:{style:"display: block;"},events:{"click .close":"closeAlert","click .btn":"okAlert"},initialize:function(){this.render()},render:function(){return this.$el.html('<div class="puw-contentB"><div class="titleB"><span class="title">'+this.model.get("title")+'</span><i class="close"></i></div><div class="content">'+this.model.get("content")+'</div><span class="btn">'+this.model.get("btnText")+"</span></div>"),this},closeAlert:function(){t("#eyuAlert").remove();var e=this.model.get("closeCallback");"function"==typeof e&&e.call(this),i.emit("closeAlert_component")},okAlert:function(){t("#eyuAlert").remove();var e=this.model.get("okCallback");"function"==typeof e&&e.call(this),i.emit("okAlert_component")},show:function(){this.$el.appendTo(t("body"))}})}),define("core/views/containers/about/index.container",["jquery","../../publicComponent/public/alertPlugin.component","../../../model/alertPlugin.model"],function(e,t,n){return{initialize:function(){this.initEvent()},initEvent:function(){if(e(".vi_input").length){var i=/(.*?)src='(.*?)'(.*)/;e(".vi_input").each(function(){var t=e(this).find("input").val(),n=t.replace(i,function(e,t,n,i,o,r){return n}),o=e(this).find("a");e(o[0]).attr("data-clipboard-text",t).removeAttr("href"),e(o[1]).attr("data-clipboard-text",n).removeAttr("href")}),this.isIE8()<=8?e(document).on("click",".vi_input a",function(){var i;try{clipboardData.setData("Text",e(this).attr("data-clipboard-text")),i=new n({content:"复制成功(如弹出提醒，请点击允许访问)",btnText:"确定"})}catch(e){i=new n({content:"当前浏览器版本不支持，请手动复制",btnText:"确定"})}new t({model:i}).show()}):require(["clipboard"],function(e){new e(".vi_input a",{target:function(e){return e}}).on("success",function(e){var i=new n({content:"复制成功",btnText:"确定"});new t({model:i}).show()})})}},isIE8:function(){var e=navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1;e.indexOf("Firefox");if(t){new RegExp("MSIE (\\d+\\.\\d+);").test(e);var n=parseFloat(RegExp.$1);return 8==n,parseInt(n)}return 10}}});