define(["underscore","jquery","backbone","../../../services/event.service"],function(e,a,t,i){return t.View.extend({el:"#tab",events:{"click a":"handleClick"},initialize:function(e){void 0!=e&&(a(this.el).find("a.active").removeClass("active"),a(this.el).find("a[data-tab='"+e+"']").addClass("active"))},handleClick:function(e){var t=a(e.currentTarget),n=t.parent().index();t.parent().parent().find("a").removeClass("active"),t.addClass("active"),window.location.href=a("#leftNav ul").eq(n).find(".subNavBlock a").eq(0).attr("href"),i.emit("showLeftNav_DetailLeftNavComponent",n)}})});