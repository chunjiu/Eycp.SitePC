define(["Chart"],function(t){return{initialize:function(t,a){var s=this;return void 0==t?void console.error("DealWithDataContainer: _flot值不能为空！"):void 0==a?void console.error("DealWithDataContainer: _data值不能为空！"):11==t?s.dealWith_11(a):12==t?s.dealWith_12(a):13==t?s.dealWith_13(a):14==t?s.dealWith_14(a):15==t?a:16==t?a:21==t?s.dealWith_21(a):22==t?s.dealWith_22(a):23==t?s.dealWith_23(a):24==t?s.dealWith_24(a):25==t?a:26==t?a:27==t||28==t||29==t||30==t?s.dealWith_27(a):41==t||42==t?s.dealWith_41(a):43==t?a:void 0},dealWith_11:function(t){for(var a=t.missStatList,s=t.missBottomStatList,r=0;r<a.length;r++)a[r].result="";for(var r=0;r<s.length;r++)s[r].result="";return t},dealWith_12:function(a){for(var s=this,r=a.missStatList,d=a.missBottomStatList,e=0;e<r.length;e++){r[e].result="";var _=s.sliceArr(r[e].statData.data_0,11);r[e].statData.data_0=_[0],r[e].statData.data_1=_[1],r[e].statData.data_2=_[2],r[e].statData.data_3=[t.sumArr(r[e].statResult)],r[e].statData.data_4=[t.ratioEvenOdd(r[e].statResult)],r[e].statData.data_5=[t.spanNumber(r[e].statResult)]}for(var e=0;e<d.length;e++){d[e].result="";var _=s.sliceArr(d[e].statData.data_0,11);d[e].statData.data_0=_[0],d[e].statData.data_1=_[1],d[e].statData.data_2=_[2],d[e].statData.data_3=[""],d[e].statData.data_4=[""],d[e].statData.data_5=[""]}return a},dealWith_13:function(a){for(var s=a.missStatList,r=a.missBottomStatList,d=0;d<s.length;d++){s[d].result="";var e=[].concat(s[d].statData.data_0);s[d].statData.data_0=[],s[d].statData.data_1=[],s[d].statData.data_2=[],s[d].statData.data_3=[];for(var _=0;_<e.length;_++)_<8?s[d].statData.data_0.push(e[_]):_>=8&&_<17?s[d].statData.data_1.push(e[_]):_>=17&&_<25?s[d].statData.data_2.push(e[_]):_>=25&&_<33&&s[d].statData.data_3.push(e[_]);s[d].statData.data_4=[t.sumArr(s[d].statResult)],s[d].statData.data_5=[t.ratioEvenOdd(s[d].statResult)],s[d].statData.data_6=[t.spanNumber(s[d].statResult)]}for(var d=0;d<r.length;d++){var i=[].concat(r[d].statData.data_0);r[d].result="",r[d].statData.data_0=[],r[d].statData.data_1=[],r[d].statData.data_2=[],r[d].statData.data_3=[];for(var _=0;_<i.length;_++)_<8?r[d].statData.data_0.push(i[_]):_>=8&&_<17?r[d].statData.data_1.push(i[_]):_>=17&&_<25?r[d].statData.data_2.push(i[_]):_>=25&&_<33&&r[d].statData.data_3.push(i[_]);r[d].statData.data_4=[""],r[d].statData.data_5=[""],r[d].statData.data_6=[""]}return a},dealWith_14:function(a){for(var s=this,r=a.missStatList,d=a.missBottomStatList,e=0;e<r.length;e++){r[e].result="";for(var _=s.sliceArr(r[e].statData.data_0,5),i=0;i<_.length;i++)r[e].statData["data_"+i]=_[i];r[e].statData.data_7=[t.sumArr(r[e].statResult)],r[e].statData.data_8=[t.ratioEvenOdd(r[e].statResult)],r[e].statData.data_9=[t.spanNumber(r[e].statResult)]}for(var e=0;e<d.length;e++){d[e].result="";for(var _=s.sliceArr(d[e].statData.data_0,5),i=0;i<_.length;i++)d[e].statData["data_"+i]=_[i];d[e].statData.data_7=[""],d[e].statData.data_8=[""],d[e].statData.data_9=[""]}return a},dealWith_21:function(t){for(var a=this,s=t.missStatList,r=t.missBottomStatList,d=0;d<s.length;d++){for(var e=s[d].statData.data_1,_=a.sliceArr(s[d].statData.data_0,2),i=0;i<_.length;i++)s[d].statData["data_"+i]=_[i];s[d].statData.data_6=e}for(var d=0;d<r.length;d++){for(var e=r[d].statData.data_1,_=a.sliceArr(r[d].statData.data_0,2),i=0;i<_.length;i++)r[d].statData["data_"+i]=_[i];r[d].statData.data_6=e}return t},dealWith_22:function(t){for(var a=this,s=t.missStatList,r=t.missBottomStatList,d=0;d<s.length;d++){for(var e=s[d].statData.data_1,_=a.sliceArr(s[d].statData.data_0,2),i=0;i<_.length;i++)s[d].statData["data_"+i]=_[i];s[d].statData.data_6=e}for(var d=0;d<r.length;d++){for(var e=r[d].statData.data_1,_=a.sliceArr(r[d].statData.data_0,2),i=0;i<_.length;i++)r[d].statData["data_"+i]=_[i];r[d].statData.data_6=e}return t},dealWith_23:function(t){for(var a=this,s=t.missStatList,r=t.missBottomStatList,d=0;d<s.length;d++){for(var e=s[d].statData.data_1,_=a.sliceArr(s[d].statData.data_0,2),i=0;i<_.length;i++)s[d].statData["data_"+i]=_[i];s[d].statData.data_6=e}for(var d=0;d<r.length;d++){for(var e=r[d].statData.data_1,_=a.sliceArr(r[d].statData.data_0,2),i=0;i<_.length;i++)r[d].statData["data_"+i]=_[i];r[d].statData.data_6=e}return t},dealWith_24:function(t){for(var a=this,s=t.missStatList,r=t.missBottomStatList,d=0;d<s.length;d++){s[d].result="";for(var e=s[d].statData.data_1,_=s[d].statData.data_2,i=s[d].statData.data_3,l=a.sliceArr(s[d].statData.data_0,3),D=0;D<l.length;D++)s[d].statData["data_"+D]=l[D];s[d].statData.data_6=e,s[d].statData.data_7=_,s[d].statData.data_8=i}for(var d=0;d<r.length;d++){r[d].result="";for(var e=r[d].statData.data_1,_=r[d].statData.data_2,i=r[d].statData.data_3,l=a.sliceArr(r[d].statData.data_0,3),D=0;D<l.length;D++)r[d].statData["data_"+D]=l[D];r[d].statData.data_6=e,r[d].statData.data_7=_,r[d].statData.data_8=i}return t},dealWith_27:function(a){for(var s=a.missStatList,r=a.missBottomStatList,d=0;d<s.length;d++){s[d].result="";var e=[].concat(s[d].statData.data_0);s[d].statData.data_0=[],s[d].statData.data_1=[],s[d].statData.data_2=[];for(var _=0;_<e.length;_++)_<11?s[d].statData.data_0.push(e[_]):_>=11&&_<22?s[d].statData.data_1.push(e[_]):_>=22&&_<33&&s[d].statData.data_2.push(e[_]);var i,l=s[d].statResult,D=t.evenOddEnd(s[d].statResult);0==d?s[d].statData.data_3=["--",t.joinGroupsCount(s[d].statResult),t.sumArr(s[d].statResult),t.acValue(s[d].statResult),t.ratioInterval(s[d].statResult,[11,22,33]),D[0]+":"+D[1]]:(i=s[d-1].statResult,s[d].statData.data_3=[t.sameJoinGroupsCount(l,i),t.joinGroupsCount(s[d].statResult),t.sumArr(s[d].statResult),t.acValue(s[d].statResult),t.ratioInterval(s[d].statResult,[11,22,33]),D[0]+":"+D[1]])}for(var d=0;d<r.length;d++){r[d].result="";var e=[].concat(r[d].statData.data_0);r[d].statData.data_0=[],r[d].statData.data_1=[],r[d].statData.data_2=[];for(var _=0;_<e.length;_++)_<11?r[d].statData.data_0.push(e[_]):_>=11&&_<22?r[d].statData.data_1.push(e[_]):_>=22&&_<33&&r[d].statData.data_2.push(e[_]);r[d].statData.data_3=["","","","","",""]}return a},dealWith_41:function(t){for(var a=t.missStatList,s=(t.missBottomStatList,0);s<a.length;s++){var r=a[s].result.split(",");a[s].statResult=r}return t},sliceArr:function(t,a){for(var s=[],r=0;r<Math.ceil(t.length/a);r++){var d=r*a,e=d+a;s.push(t.slice(d,e))}return s}}});