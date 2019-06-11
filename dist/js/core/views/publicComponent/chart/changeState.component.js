define(["jquery","Util","../../../services/event.service"],function(t,a,e){var r={};r.tempName="";var n={ballStyle:{ballBlue:"bg-ball-blue",ballRed:"bg-ball-red",ballPurple:"bg-ball-purple",ballGreen:"bg-ball-green"},fontStyle:{fontBold:"font-bold",fontGray:"font-gray",fontRed:"font-red",fontBlue:"font-blue",fontGreen:"font-green",fontPurple:"font-purple",fontWhite:"font-white"},bgBoxStyle:{bgBoxTintBlue:"bg-box-tintBlue",bgBoxRed:"bg-box-red",bgBoxBlue:"bg-box-blue",bgBoxPurple:"bg-box-purple",bgBoxGreen:"bg-box-green",bgBoxGray:"bg-box-gray"}};return r.addSegmentingLine=function(a,e,r,n,d){var s=t(a).find("thead tr").length;t(a).find("thead tr").each(function(a,i){0!=s&&t(i).find('th[modular="'+e+'"]').each(function(a,e){for(var s=0;s<r.length;s++)if(a==r[s]){t(e).css({"border-right-width":n+"px","border-right-color":d});break}})}),t(a).find(".trend tr").each(function(a,s){t(s).find('td[modular="'+e+'"]').each(function(a,e){for(var s=0;s<r.length;s++)if(a==r[s]){t(e).css({"border-right-width":n+"px","border-right-color":d});break}})})},r.addRightBorder2px=function(a,e,r){t(a).find("thead tr").each(function(a,n){t(n).find("th").each(function(n,d){if(0==a&&void 0!=i)t(d).css({"border-right-width":e+"px","border-right-color":r});else{var s=t(d).attr("modular"),i=t(d).next().attr("modular");void 0==s&&void 0==i?t(d).css({"border-right-width":e+"px","border-right-color":r}):s!==i&&void 0!=i?t(d).css({"border-right-width":e+"px","border-right-color":r}):void 0!=s&&void 0==i&&t(d).css({"border-right-width":e+"px","border-right-color":r})}})}),t(a).find(".trend tr").each(function(a,n){t(n).find("td").each(function(a,n){var d=t(n).attr("modular"),s=t(n).next().attr("modular");/period_/g.test(d)?0==/period_/g.test(s)&&t(n).css({"border-right-width":e+"px","border-right-color":r}):/result_/g.test(d)?0==/result_/g.test(s)&&t(n).css({"border-right-width":e+"px","border-right-color":r}):d!==s&&void 0!=s&&t(n).css({"border-right-width":e+"px","border-right-color":r})})})},r.addPreselectionZindex=function(){var a=t("#preselectionButton").parent().find(".npb-ulB").length;void 0!=a&&t("#preselectionButton").parent().find(".npb-ulB").each(function(e,r){t(r).css({"z-index":a--})})},r.addTotalStyle=function(a){t(a).find("td").each(function(a,e){1!=t(e).attr("column")&&r.changeHotAndColdColor(t(e),5,12,13)})},r.addTotalStyle2=function(a){t(a).find("td").each(function(a,e){1!=t(e).attr("column")&&([2,3,4,5].Contains(t(e).attr("column"))?r.changeHotAndColdColor(t(e),8,12,13):6==t(e).attr("column")?r.changeHotAndColdColor(t(e),32,37,38):7==t(e).attr("column")?r.changeHotAndColdColor(t(e),43,47,48):[8,9,10,11,12,13].Contains(t(e).attr("column"))&&r.changeHotAndColdColor(t(e),7,20,21))})},r.changeHotAndColdColor=function(t,a,e,r){parseInt(t.attr("data-value"))<=a?t.addClass(n.bgBoxStyle.bgBoxGreen):parseInt(t.attr("data-value"))>a&&parseInt(t.attr("data-value"))<=e?t.addClass(n.bgBoxStyle.bgBoxGray):parseInt(t.attr("data-value"))>=r&&t.addClass(n.bgBoxStyle.bgBoxRed)},r.getCookie=function(e,n,d,s){var i=t("#mainContainer").attr("data-lotteryCode");-1==e.indexOf("_")&&(e=e+"_"+i);var o,l=a.getCookie(e),c=parseInt(t("#mainContainer").attr("data-flot"));if(l){var u=JSON.parse(l);if(void 0!=u[i][c]&&u[i][c].length>0){t("#preselectionButton").html("隐藏预选号码");for(var f in u)if(f==i){o=u[f][c];for(var m=0;m<o.length;m++)t("#preselectionButton").parent().append(r.addPreselection(n,d,s));t("#preselectionButton").parent().find(".npb-ulB").each(function(a,e){t(e).find(".npb-liB").each(function(e,r){t(r).parent().find(".selectedText").html(u[i][c][a].period),t(r).find(".num").each(function(r,n){if(0==e){for(var d=0;d<o[a].frontArea.length;d++)if(o[a].frontArea[d]==parseInt(t(n).html())){if(t(n).addClass("active"),t(n).attr("data-size","1"),o[a].frontCount.length>0){var s=o[a].frontCount[d];t(n).attr("data-size",s),s>1?t(n).html(o[a].frontArea[d]+"<i class='small-"+o[a].frontCount[d]+"'></i>"):t(n).html(o[a].frontArea[d])}break}}else for(var d=0;d<o[a].backArea.length;d++)if(o[a].backArea[d]==parseInt(t(n).html())){t(n).addClass("active");break}})})})}}}r.addPreselectionZindex()},r.setCookie=function(e){var r,n,d,s=[];if(r=parseInt(t("#mainContainer").attr("data-flot")),n=t("#mainContainer").attr("data-lotteryCode"),e=e+"_"+n,d=a.getCookie(e),t(".lt-numPrimaryBlock .npb-ulB").each(function(a,e){var r={},n=[],d=[],i=[],o=[];t(e).find(".npb-liB").each(function(a,e){o=t(e).parents(".npb-ulB").find(".selectedText").html(),t(e).find(".active").each(function(e,r){0==a?(n.push(parseInt(t(r).html())),i.push(parseInt(t(r).attr("data-size")))):1==a&&d.push(parseInt(t(r).html()))})}),r.period=o,r.frontArea=n,r.frontCount=i,r.backArea=d,s.push(r)}),void 0==d){var i={};i[n]={},i[n][r]=s}else{d=JSON.parse(d);for(var o in d)if(o==n){d[o][r]=s,i=d;break}}a.setCookie(e,JSON.stringify(i))},r.preselection=function(a){t("#preselectionButton").hide()},r.PrefixInteger=function(t,a){return(Array(a).join(0)+t).slice(-a)},r.IssueList=function(a){var e=1,r=t("#mainContainer").attr("data-lotteryCode");void 0!=t("#maxPeriod").attr("data-max")&&(e=parseInt(t("#maxPeriod").attr("data-max")));var n="";if(1==e||"bjk3"==r)for(var d=parseInt(a),s=0;s<10;s++)n+='<span class="lis" data-code="">'+d+"</span>",d++;else{var i,o,l,c=a.substring(0,a.length-3),u=0;if("gxkl10"==r){c=a.substring(0,a.length-2),u=parseInt(a.substring(a.length-2,a.length)),i=parseInt(c.substring(0,4)),l=parseInt(c.substring(4,7)),o="";for(var s=0;s<10;s++)u>e?(u=1,l+=1,n+='<span class="lis" data-code="">'+i+this.PrefixInteger(l,3)+"01</span>"):n+='<span class="lis" data-code="">'+i+l+this.PrefixInteger(u,2)+"</span>",u++}else{u=parseInt(a.substring(a.length-3,a.length)),i=c.substring(0,4),o=c.substring(4,6),l=c.substring(6,8);for(var f=new Date(i,o,l),s=0;s<10;s++)u>e?(f.setDate(parseInt(l)+1),u=1,n+='<span class="lis" data-code="">'+f.getFullYear()+f.getMonth()+1+f.getDate()+"001</span>"):(c=f.getFullYear()+""+f.getMonth()+1+f.getDate(),n+='<span class="lis" data-code="">'+c+this.PrefixInteger(u,3)+"</span>"),u++}}return n},r.addPreselection=function(a,e,n){void 0==a&&(a=1);var d="",s=r.dealWithAreaString(e),i="",o=t(".next-period").html().replace("期",""),l="";l=this.IssueList(o);for(var c=0;c<s.length;c++)i+='<span class="num" data-size="0" data-value="'+s[c]+'">'+s[c]+"</span>";if(1==a&&void 0!=e)d+='<div class="npb-ulB"><div class="public_selectPlugIn"><span class="selectArrow"></span><span class="selectedText">'+o+'</span><div class="selectOption" style="display: none;">'+l+'</div></div><div class="npb-liB  frontArea" data-max='+e.maxNumber+" data-more="+(void 0==e.more?"false":"true")+'><span class="text">前区预选：</span><div class="number">'+i+'</div><div class="tool"><a href="javascript:void(0)" class="clearNumber">清空号码</a><i>|</i><a href="javascript:void(0)" class="addNumber">增加一行</a><i>|</i><a href="javascript:void(0)" class="deleteNumber">删除行</a></div></div></div>';else if(2==a&&void 0!=n){for(var u=r.dealWithAreaString(n),f="",c=0;c<u.length;c++)f+='<i class="num">'+u[c]+"</i>";d+='<div class="npb-ulB"><div class="public_selectPlugIn"><span class="selectArrow"></span><span class="selectedText">'+o+'</span><div class="selectOption" style="display: none;">'+l+'</div></div><div class="npb-liB frontArea" data-max='+e.maxNumber+'><span class="text">前区预选：</span><div class="number">'+i+'</div></div><div class="npb-liB  backArea" data-max='+n.maxNumber+'><span class="text">后区预选：</span><div class="number">'+f+'</div><div class="tool"><a href="javascript:void(0)" class="clearNumber">清空号码</a><i>|</i><a href="javascript:void(0)" class="addNumber">增加一行</a><i>|</i><a href="javascript:void(0)" class="deleteNumber">删除行</a></div></div></div>'}return d},r.dealWithAreaString=function(t){if(void 0==t)return void console.error("dealWithAreaString：参数不能为空！");var a=[],e="";if(void 0!=t.number)if(/\~/g.test(t.number)){e=t.number.replace(/(^\s*)|(\s*$)/g,"").split("~");for(var r=parseInt(e[0]);r<=parseInt(e[1]);r++)a.push(r)}else if(/\|/g.test(t.number)){e=t.number.replace(/(^\s*)|(\s*$)/g,"").split("|");for(var r=0;r<e.length;r++)a.push(r)}return a},r.addTypeAwardBlue=function(a){return t(".trend [modular="+a+"]").each(function(a,e){for(var r="",n=t(e).attr("data-value"),d=n.split(","),s=0;s<d.length;s++)"合"==d[s]||"小"==d[s]||"偶"==d[s]?r+='<i class="font-blue">'+d[s]+"</i>":r+='<i class="font-red">'+d[s]+"</i>";t(e).html(r)}),!1},r.addBigAward=function(a,e){return 1,t(a).find(".trend tr").each(function(a,e){t(e).find("td").each(function(a,e){if(/result_/g.test(t(e).attr("modular"))&&parseInt(t(e).find("span").html())>18){var r=t(e).find("span");r.removeClass(n.fontStyle.fontBlue),r.addClass(n.fontStyle.fontRed)}})}),!1},r.addSamePeriod=function(a,e,d,s){var i=parseInt(t("#mainContainer").attr("data-flot")),o=[10,11,13,14,16,17],l=[30,31];void 0==e&&(e=2),d=void 0==d?"":d,t(a).find(".trend tr").each(function(a,c){var u,f=[];""==d?t(c).find("td").each(function(a,e){if(/result_/g.test(t(e).attr("modular"))&&(f.push({data:parseInt(t(e).find("span").html()),tdDom:t(e)}),0==/result_/g.test(t(e).next().attr("modular"))))return!1}):t(c).find("td").each(function(a,e){if(/result_/g.test(t(e).attr("modular"))){var r=parseInt(t(e).attr("modular").split("_")[1]);if(o.Contains(i)?0!==r&&1!==r&&2!==r&&f.push({data:parseInt(t(e).find(".sscStar").html()),tdDom:t(e)}):l.Contains(i)&&0!==r&&1!==r&&f.push({data:parseInt(t(e).find(".sscStar").html()),tdDom:t(e)}),0==/result_/g.test(t(e).next().attr("modular")))return!1}}),u=r.getSamePeriod(f);for(var m=0;m<u.length;m++)d||(2==u[m].count?u[m].tdDomArr[0].parent().find("td").each(function(a,e){if(/result_/g.test(t(e).attr("modular"))&&(t(e).find("span").addClass(n.fontStyle.fontRed),0==/result_/g.test(t(e).next().attr("modular"))))return!1}):u[m].count>2&&u[m].tdDomArr[0].parent().find("td").each(function(a,e){var r="";if(r=d?n.fontStyle.fontRed:n.fontStyle.fontPurple,/result_/g.test(t(e).attr("modular"))&&(t(e).find("span").addClass(r),0==/result_/g.test(t(e).next().attr("modular"))))return!1}));2==e&&t(c).find("td").each(function(a,e){if(t(e).attr("modular")==(s||"data_0"))for(var r=0;r<u.length;r++)for(var d=0;d<u[r].tdDomArr.length;d++)if(2==u[r].count){if(parseInt(t(e).find("span").html())==u[r].num&&t(e).hasClass(t(e).attr("css-awardnumber"))&&t(e).removeAttr("class").addClass(n.ballStyle.ballRed).find("span").append('<i class="small-2"></i>'),t(e).attr("modular")!=(s||"data_0"))return!1}else if(u[r].count>2&&(parseInt(t(e).find("span").html())==u[r].num&&t(e).hasClass(t(e).attr("css-awardnumber"))&&t(e).removeAttr("class").addClass(n.ballStyle.ballPurple).find("span").append('<i class="small-'+u[r].count+'"></i>'),t(e).attr("modular")!=(s||"data_0")))return!1})})},r.getSamePeriod=function(t){var a=[];t.sort(r.sortBy("data",!1));for(var e=0;e<t.length;){for(var n=0,d=[],s=e;s<t.length;s++)t[e].data==t[s].data&&(n++,n>=2?d.push(t[s].tdDom):d.push(t[e].tdDom));a.push({num:t[e].data,count:n,tdDomArr:d}),e+=n}return a},r.sortBy=function(t,a){return a=void 0==a?1:a?1:-1,function(e,r){var n=parseFloat(e[t]),d=parseFloat(r[t]);return n<d?-1*a:n>d?1*a:0}},r.changeSscWord=function(a){63==a?t(".trend .bigToSmall").each(function(){["8","11","14","17","20"].Contains(t(this).attr("column").toString())?(t(this).addClass("bg-box-red"),t(this).find("span").html("大")):(t(this).addClass("bg-box-blue"),t(this).find("span").html("小"))}):64==a&&t(".trend .oddToEven").each(function(){["8","11","14","17","20"].Contains(t(this).attr("column").toString())?(t(this).addClass("bg-box-red"),t(this).find("span").html("单")):(t(this).addClass("bg-box-blue"),t(this).find("span").html("双"))})},r.changeSscNum=function(){t(".trend tr").each(function(){var a=t(this).find(".specialRedNum").find("span").html();t(this).find(".specialBlueNum").find("span").html(a)})},r.addHotColdNumer=function(a){var e,r,d=t("#periodCount").val().split("|");switch(a){case"100":e=41,r=35;break;case"101":e=20,r=13;break;case"102":e=8,r=3;break;case"103":e=3,r=0;break;case"104":e=2,r=0;break;case"105":case"110":case"114":e=8,r=4;break;case"106":e=20,r=9;break;case"107":e=9,r=6;break;case"108":e=3,r=0;break;case"109":e=3,r=1;break;case"111":case"115":e=15,r=7;break;case"112":case"113":e=2,r=0}for(var s=0;s<d.length;s++)t('[data-cloumn="'+(s+2)+'"]').each(function(){var a=parseInt(t(this).data("value"));a&&(a>=e?t(this).parent().addClass(n.bgBoxStyle.bgBoxRed):a<=r?a>0&&t(this).parent().addClass(n.bgBoxStyle.bgBoxGreen):t(this).parent().addClass(n.bgBoxStyle.bgBoxGray))})},r.addSegmenting=function(a,e,r){t(a).find(".trend tr:nth-child("+r+"n)").each(function(a,r){t(r).addClass(e)})},r.removeSegmenting=function(a,e){t(a).find(".trend tr").each(function(a,r){t(r).removeClass(e)})},r.openBrokenLine=function(a){t(a).show()},r.closeBrokenLine=function(a){t(a).hide()},r.clearOmissionDelaminationEvent=function(a){t(a).find(".trend tr").each(function(a,e){t(e).find("td").each(function(a,e){t(e).removeClass(t(e).attr("css-omissiondelamination"))})})},r.omissionDelaminationEvent=function(a){for(var e=t(a),r=parseInt(e.find('.trend tr:last td[modular="data_0"]:first').attr("column")),n=parseInt(e.find(".trend tr:first").find("[css-omissiondelamination]:last").attr("column")),d=r;d<=n;d++)for(var s=t('.trend [column="'+d+'"]'),i=s.length,o=i-1;o>=0;o--){var l=s.eq(o),c=parseInt(l.attr("data-value")?l.attr("data-value"):0);if(!(c>0))break;l.addClass(l.attr("css-omissiondelamination"))}},r.serialNumberEvent=function(a){t(a).find(".trend td").each(function(a,e){var r=t(e).prev(),n=t(e).next(),d=t(e).attr("css-serialNumber");t(e).attr("css-awardNumber")&&r.attr("css-awardNumber")&&t(e).attr("modular")==r.attr("modular")&&(t(e).addClass(d),r.addClass(d)),t(e).attr("css-awardNumber")&&n.attr("css-awardNumber")&&t(e).attr("modular")==n.attr("modular")&&(t(e).addClass(d),n.addClass(d))})},r.clearSerialNumberEvent=function(a){t(a).find(".trend td").each(function(a,e){var r=t(e).attr("css-serialNumber");t(e).removeClass(r)})},r.edgeNumberEvent=function(a){t(a).find(".trend tr").each(function(e,r){t(r).find("td").each(function(r,n){var d=t(n).attr("css-edgeNumber");if(d&&t(n).attr("css-awardNumber")){var s=parseInt(t(n).attr("column"))-1,i=e;if(t(a).find(".trend tr").length-1==i){var o=t(a).find(".trend tr").eq(i-1).find("td").eq(s-1),l=t(a).find(".trend tr").eq(i-1).find("td").eq(s+1);o.attr("css-awardNumber")&&t(n).attr("modular")==o.attr("modular")&&t(n).addClass(d),l.attr("css-awardNumber")&&t(n).attr("modular")==o.attr("modular")&&t(n).addClass(d)}else{var c=t(a).find(".trend tr").eq(i+1).find("td").eq(s-1),u=t(a).find(".trend tr").eq(i+1).find("td").eq(s+1);c.attr("css-awardNumber")&&t(n).attr("modular")==c.attr("modular")&&(t(n).addClass(d),c.addClass(d)),u.attr("css-awardNumber")&&t(n).attr("modular")==u.attr("modular")&&(t(n).addClass(d),u.addClass(d))}}})})},r.clearEdgeNumberEvent=function(a){t(a).find(".trend td").each(function(a,e){var r=t(e).attr("css-edgeNumber");t(e).removeClass(r)})},r.serialTwoNumberEvent=function(a){t(a).find(".trend tr").each(function(e,r){t(r).find("td").each(function(r,n){var d=t(n).attr("css-edgeTwoNumber");if(d&&t(n).attr("css-awardNumber")){var s=parseInt(t(n).attr("column"))-1,i=e;if(t(a).find(".trend tr").length-1==i){var o=t(a).find(".trend tr").eq(i-2).find("td").eq(s-2),l=t(a).find(".trend tr").eq(i-2).find("td").eq(s+2);o.attr("css-awardNumber")&&t(n).attr("modular")==o.attr("modular")&&t(n).addClass(d),l.attr("css-awardNumber")&&t(n).attr("modular")==o.attr("modular")&&t(n).addClass(d)}else{var c=t(a).find(".trend tr").eq(i+2).find("td").eq(s-2),u=t(a).find(".trend tr").eq(i+2).find("td").eq(s+2);c.attr("css-awardNumber")&&t(n).attr("modular")==c.attr("modular")&&(t(n).addClass(d),c.addClass(d)),u.attr("css-awardNumber")&&t(n).attr("modular")==u.attr("modular")&&(t(n).addClass(d),u.addClass(d))}}})})},r.omissionNumberEvent=function(a,e){t(a).find(".trend td").each(function(a,r){var n=t(r).attr("data-value");n&&void 0==t(r).attr("css-awardNumber")&&(e||void 0==t(r).attr("css-omissiondelamination")?t(r).find("span").html(n):t(r).find("span").html(""))})},r.clearHeavyNumberEvent=function(a){t(a).find(".trend td").each(function(a,e){var r=t(e).attr("css-heavyNumber");t(e).removeClass(r)})},r.heavyNumberEvent=function(a){t(a).find(".trend tr").each(function(e,r){t(r).find("td").each(function(r,n){var d=t(n).attr("css-heavyNumber");if(d&&t(n).attr("css-heavyNumber")){var s=parseInt(t(n).attr("column"))-1,i=e;t(a).find(".trend tr").eq(i+1).find("td").eq(s).attr("css-awardNumber")?(t(n).addClass(d),t(a).find(".trend tr").eq(i+1).find("td").eq(s).addClass(d)):t(a).find(".trend tr").length-1==i&&t(a).find(".trend tr").eq(i-1).find("td").eq(s).attr("css-awardNumber")&&t(n).addClass(d)}})})},r.sortColumn=function(a,n,d){var s=[];t(a).find("tbody").eq(0).find("tr").each(function(a,e){t(e).find("td").each(function(a,e){a==n&&s.push({value:parseFloat(t(e).attr("data-value")),domObject:t(e).parent()})})});for(var i=s.sort(r.sortBy("value",d)),o="",l=0;l<i.length;l++)o+="<tr>"+i[l].domObject.html()+"</tr>";t(a).find("tbody").eq(0).html(o),window.setTimeout(function(){e.emit("sortComplate_changeStateComponent")},30)},r.sortBy=function(t,a){return a=void 0==a?1:a?1:-1,function(e,r){var n=parseFloat(e[t]),d=parseFloat(r[t]);return n<d?-1*a:n>d?1*a:0}},r});