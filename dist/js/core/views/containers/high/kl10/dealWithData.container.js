define(["Chart"],function(t){return{initialize:function(t,a){var s=this;return void 0==t?void console.error("DealWithDataContainer: _flot值不能为空！"):void 0==a?void console.error("DealWithDataContainer: _data值不能为空！"):1==t?s.dealWidth_1(a):2==t||3==t?s.dealWidth_2(a):5==t?s.dealWidth_5(a):7==t||8==t?s.dealWidth_7(a):30<=t&&36>=t?s.dealWidth_30(a,2,t):21<=t&&23>=t?s.dealWidth_21(a):a},dealWidth_21:function(t){for(var a=t.missStatList,s=(t.missBottomStatList,0);s<a.length;s++){for(var r=a[s].result.split(","),d=[],e=0;e<r.length;e++)d.push(parseInt(r[e]));a[s].statResult=d}return t},dealWidth_30:function(a,s,r){for(var d=a.missStatList,e=a.missBottomStatList,i=0;i<d.length;i++)if(31==r)d[i].statData.data_2=[t.sumArr(d[i].statResult)],d[i].statData.data_3=[t.spanNumber(d[i].statResult)];else if(32==r||33==r||34==r){var l=d[i].statData.data_1,n=d[i].statData.data_2,_=t.sliceArr(d[i].statData.data_0,2);if(2==_.length)for(var o=0;o<_.length;o++)d[i].statData["data_"+o]=_[o];d[i].statData.data_2=l,d[i].statData.data_3=n}else if(35==r||36==r){var l=d[i].statData.data_1,_=t.sliceArr(d[i].statData.data_0,3);if(2==_.length)for(var o=0;o<_.length;o++)d[i].statData["data_"+o]=_[o];d[i].statData.data_2=l}if(31==r)for(var i=0;i<e.length;i++)e[i].statData.data_2=[""],e[i].statData.data_3=[""];else if(32==r||33==r||34==r)for(var i=0;i<e.length;i++){var l=e[i].statData.data_1,n=e[i].statData.data_2,_=t.sliceArr(e[i].statData.data_0,2);if(2==_.length)for(var o=0;o<_.length;o++)e[i].statData["data_"+o]=_[o];e[i].statData.data_2=l,e[i].statData.data_3=n}else if(35==r||36==r)for(var i=0;i<e.length;i++){var l=e[i].statData.data_1,_=t.sliceArr(e[i].statData.data_0,3);if(2==_.length)for(var o=0;o<_.length;o++)e[i].statData["data_"+o]=_[o];e[i].statData.data_2=l}return a},dealWidth_7:function(t){for(var a=t.missStatList,s=t.missBottomStatList,r=0;r<a.length;r++){for(var d=0,e=0;e<a[r].statData.data_0.length;e++)0==a[r].statData.data_0[e]&&d++;a[r].statData.data_1=[d]}for(var r=0;r<s.length;r++)s[r].statData.data_1=[""];return t},dealWidth_5:function(a){for(var s=a.missStatList,r=a.missBottomStatList,d=0;d<s.length;d++){var e=s[d].statData,i=s[d].result.split(",");e.data_2=t.evenOddEnd(i),e.data_3=t.bigSmallEnd(i,5)}for(var d=0;d<r.length;d++)r[d].statData.data_2=["",""],r[d].statData.data_3=["",""];return a},dealWidth_1:function(a){for(var s=a.missStatList,r=a.missBottomStatList,d=0;d<s.length;d++){var e=s[d].statData,i=s[d].result.split(",");e.data_1=[t.sumArr(i)],e.data_2=[t.spanNumber(i)],e.data_3=[t.ratioBigSmall(i,11)],e.data_4=[t.ratioEvenOdd(i)],e.data_5=[t.ratioPrime(i)]}for(var d=0;d<r.length;d++)r[d].statData.data_1=[""],r[d].statData.data_2=[""],r[d].statData.data_3=[""],r[d].statData.data_4=[""],r[d].statData.data_5=[""];return a},dealWidth_2:function(a){for(var s=a.missStatList,r=a.missBottomStatList,d=0;d<s.length;d++){var e=s[d].statData,i=e.data_1,l=t.sliceArr(e.data_0,2);if(8==l.length)for(var n=0;n<l.length;n++)e["data_"+n]=l[n];e.data_8=i}for(var d=0;d<r.length;d++){var i=r[d].statData.data_1,l=t.sliceArr(r[d].statData.data_0,2);if(8==l.length)for(var n=0;n<l.length;n++)r[d].statData["data_"+n]=l[n];r[d].statData.data_8=i}return a}}});