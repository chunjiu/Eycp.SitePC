define(["underscore","jquery","backbone","../../../services/event.service"],function(e,t,a,n){return a.View.extend({el:"#selectPlugIn",selectArrow:"#selectPlugIn .selectArrow",selectedText:"#selectPlugIn .selectedText",selectOption:"#selectPlugIn .selectOption",selectOptionLis:"#selectPlugIn .selectedText .lis",events:{click:"handleClick","click .lis":"handleClickForLis",mouseleave:"handleMouseLeave"},initialize:function(e){if(!e)return console.error("组件参数不能为空！"),!1;if(!e.type)return console.error("组件类型不能为空！可以选择time类型和number类型!"),!1;var a=this;if(a.type=e.type,a.selValue=e.value,a.value=t(a.el).attr("data-value"),!a.value)return console.warn("组件参数data-value为空，请加上数值！"),!1;"time"==e.type?a.dealWidthTime(a.value):"number"==e.type&&a.renderSelectPlugInNumber(a.value,a.selValue)},handleClick:function(){var e=this;t(e.selectArrow).hasClass("active")?(t(e.selectArrow).removeClass("active"),t(e.selectOption).hide()):(t(e.selectArrow).addClass("active"),t(e.selectOption).show())},handleMouseLeave:function(){var e=this;t(e.selectArrow).removeClass("active"),t(e.selectOption).hide()},handleClickForLis:function(e){var a=this,r=t(e.currentTarget);t(a.selectedText).html(r.html()),t(a.selectedText).attr("data-active",r.html()),"time"==a.type?n.emit("clickSelect_selectPlugInComponent",r.html()):"number"==a.type&&n.emit("clickSelectNumber_selectPlugInComponent",r.html())},renderSelectPlugIn:function(e){var a=this,n='<span class="selectArrow"></span>';n+='<span class="selectedText">'+e.nowDataTime+"</span>",n+='<div class="selectOption">';var r=e.nowDay,l=e.prevDiffDay,s=e.nowMonth,i=e.prevMonth;for(s<10&&(s="0"+s),i<10&&(i="0"+i);r>0;){var c=r;c<10&&(c="0"+r),n+='<span class="lis" >'+e.nowYear+"-"+s+"-"+c+"</span>",r--}for(var o=0;o<l;o++){var u=e.prevMonthTotalDay-o;u<10&&(u="0"+u),n+='<span class="lis" >'+e.prevYear+"-"+i+"-"+u+"</span>"}n+="</div>",t(a.el).html(n)},renderSelectPlugInNumber:function(e,a){var n,r=this,l=e.split(",");if(a=""==t(r.selectedText).attr("data-active")?a||l[0]:t(r.selectedText).attr("data-active"),"object"==typeof l){n='<span class="selectArrow"></span>',n+='<span class="selectedText" data-active="'+a+'">'+a+"</span>",n+='<div class="selectOption">';for(var s=0;s<l.length;s++)n+='<span class="lis" >'+l[s]+"</span>";n+="</div>",t(r.el).html(n)}else console.error("renderSelectPlugInNumber: 数据类型不正确！")},formateTime:function(e){return-1==e.indexOf(" ")?e.replace(/\//g,"-"):e.split(" ")[0].replace(/\//g,"-")},dealWidthTime:function(e){var t,a=this,n=a.formateTime(e),r=n.split("-"),l=parseInt(r[0]),s=parseInt(r[1].replace(/^0/,"")),i=parseInt(r[2].replace(/^0/,"")),c=l;1==s?(t=12,c=l-1):t=s-1;var o,u=a.getMonthTotalDay(c,t,i);i>u?o=i-u:i<=u&&(o=u-i+1);var v={nowDataTime:n,prevYear:c,prevMonth:t,prevMonthTotalDay:u,prevDiffDay:o,nowYear:l,nowMonth:s,nowDay:i};a.renderSelectPlugIn(v)},getMonthTotalDay:function(e,t){var a=this,n=[1,3,5,7,8,10,12],r=[4,6,9,11];return a.array_contain(n,t)?31:a.array_contain(r,t)?30:a.initFeb(e)},array_contain:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return!0;return!1},initFeb:function(e){var t=this,a=parseInt(e);return t.isLeapYear(a)?29:28},isLeapYear:function(e){var t=e,a=t%4,n=t%100,r=t%400;return 0==a&&0!=n||0==r}})});