define(["Chart"],function(a){return{initialize:function(a,t){var d=this;return void 0==a?void console.error("DealWithDataContainer: _flot值不能为空！"):void 0==t?void console.error("DealWithDataContainer: _data值不能为空！"):1<=a&&3>=a?d.dealWidth_1(t):11==a?d.dealWidth_11(t):12==a||13==a?d.dealWidth_12(t):14==a?d.dealWidth_14(t):15==a?d.dealWidth_15(t):16==a?d.dealWidth_16(t):17==a?d.dealWidth_17(t):18==a?d.dealWidth_18(t):19==a?d.dealWidth_19(t):20==a?d.dealWidth_20(t):t},dealWidth_1:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){var r=d[s].statData.data_0,D=d[s].statData.data_1,i=d[s].statData.data_2,e=d[s].statData.data_3,n=d[s].statData.data_4,l=d[s].statData.data_5,o=a.intArr(d[s].result.split(","));d[s].statResult=o;var h=d[s].statData;h.data_0=[a.sumArr(o)],h.data_1=[a.spanNumber(o)],h.data_2=r,h.data_3=D,h.data_4=i,h.data_5=e,h.data_6=n,h.data_7=l}for(var s=0;s<_.length;s++){var r=_[s].statData.data_0,D=_[s].statData.data_1,i=_[s].statData.data_2,e=_[s].statData.data_3,n=_[s].statData.data_4,l=_[s].statData.data_5,h=_[s].statData;h.data_0=[""],h.data_1=[""],h.data_2=r,h.data_3=D,h.data_4=i,h.data_5=e,h.data_6=n,h.data_7=l}return t},dealWidth_11:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){var r=d[s].statResult,D=d[s].statData;D.data_4=[a.sumArr(r)]}for(var s=0;s<_.length;s++){var D=_[s].statData;D.data_4=[""]}return t},dealWidth_12:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){for(var r=d[s].statResult,D=d[s].statData.data_2,i=d[s].statData.data_3,e=d[s].statData,n=a.sliceArr(d[s].statData.data_1,2),l=1;l<=n.length;l++)e["data_"+l]=n[l-1];e.data_4=D,e.data_5=i,e.data_6=[a.sumArr(r)]}for(var s=0;s<_.length;s++){for(var D=_[s].statData.data_2,i=_[s].statData.data_3,e=_[s].statData,n=a.sliceArr(_[s].statData.data_1,2),l=1;l<=n.length;l++)e["data_"+l]=n[l-1];e.data_4=D,e.data_5=i,e.data_6=[""]}return t},dealWidth_14:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){for(var r=d[s].statData.data_0,D=d[s].statData.data_1,i=d[s].statData.data_2,e=d[s].statData.data_3,n=d[s].statData.data_4,l=d[s].statData,o=a.sliceArr(r,3),h=0;h<o.length;h++)l["data_"+h]=o[h];l.data_3=D,l.data_4=i,l.data_5=e,l.data_6=n}for(var s=0;s<_.length;s++){for(var r=_[s].statData.data_0,D=_[s].statData.data_1,i=_[s].statData.data_2,e=_[s].statData.data_3,n=_[s].statData.data_4,l=_[s].statData,o=a.sliceArr(r,3),h=0;h<o.length;h++)l["data_"+h]=o[h];l.data_3=D,l.data_4=i,l.data_5=e,l.data_6=n}return t},dealWidth_15:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){for(var r=(d[s].statResult,d[s].statData.data_2),D=d[s].statData.data_3,i=d[s].statData.data_4,e=d[s].statData,n=a.sliceArr(d[s].statData.data_1,3),l=1;l<=n.length;l++)e["data_"+l]=n[l-1];e.data_4=r,e.data_5=D,e.data_6=i}for(var s=0;s<_.length;s++){for(var r=_[s].statData.data_2,D=_[s].statData.data_3,i=_[s].statData.data_4,e=_[s].statData,n=a.sliceArr(_[s].statData.data_1,3),l=1;l<=n.length;l++)e["data_"+l]=n[l-1];e.data_4=r,e.data_5=D,e.data_6=i}return t},dealWidth_16:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){var r=d[s].statData.data_0,D=d[s].statData.data_1,i=d[s].statData.data_2,e=d[s].statData.data_3,n=d[s].statData.data_4,l=d[s].statData.data_5,o=d[s].statResult,h=d[s].statData;h.data_0=[a.sumArr(o)],h.data_1=[a.spanNumber(o)],h.data_2=r,h.data_3=D,h.data_4=i,h.data_5=e,h.data_6=n,h.data_7=l}for(var s=0;s<_.length;s++){var r=_[s].statData.data_0,D=_[s].statData.data_1,i=_[s].statData.data_2,e=_[s].statData.data_3,n=_[s].statData.data_4,l=_[s].statData.data_5,h=_[s].statData;h.data_0=[" "],h.data_1=[" "],h.data_2=r,h.data_3=D,h.data_4=i,h.data_5=e,h.data_6=n,h.data_7=l}return t},dealWidth_17:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){for(var r=(d[s].statResult,d[s].statData.data_1),D=d[s].statData.data_2,i=d[s].statData.data_3,e=d[s].statData,n=a.sliceArr(r,2),l=1;l<=n.length;l++)e["data_"+l]=n[l-1];e.data_4=D,e.data_5=i}for(var s=0;s<_.length;s++){for(var e=_[s].statData,r=e.data_1,D=e.data_2,i=e.data_3,n=a.sliceArr(r,2),l=1;l<=n.length;l++)e["data_"+l]=n[l-1];e.data_4=D,e.data_5=i}return t},dealWidth_18:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){var r=d[s].statResult,D=d[s].statData.data_0,i=d[s].statData.data_1,e=d[s].statData.data_2,n=d[s].statData;n.data_0=[a.sumArr(r)],n.data_1=D,n.data_2=i,n.data_3=e}for(var s=0;s<_.length;s++){var D=_[s].statData.data_0,i=_[s].statData.data_1,e=_[s].statData.data_2,n=_[s].statData;n.data_0=[" "],n.data_1=D,n.data_2=i,n.data_3=e}return t},dealWidth_19:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){var r=d[s].statData.data_0,D=d[s].statData.data_1,i=d[s].statResult,e=d[s].statData;e.data_0=[a.sumArr(i)],e.data_1=[a.spanNumber(i)],e.data_2=r,e.data_3=D}for(var s=0;s<_.length;s++){var r=_[s].statData.data_0,D=_[s].statData.data_1,e=_[s].statData;e.data_0=[" "],e.data_1=[" "],e.data_2=r,e.data_3=D}return t},dealWidth_20:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){var r=d[s].statData.data_0,D=d[s].statData.data_1,i=d[s].statData.data_2,e=d[s].statData.data_3,n=d[s].statData.data_4,l=d[s].statData.data_5,o=d[s].statResult,h=d[s].statData;h.data_0=[a.sumArr(o)],h.data_1=[a.spanNumber(o)],h.data_2=r,h.data_3=D,h.data_4=i,h.data_5=e,h.data_6=n,h.data_7=l}for(var s=0;s<_.length;s++){var r=_[s].statData.data_0,D=_[s].statData.data_1,i=_[s].statData.data_2,e=_[s].statData.data_3,n=_[s].statData.data_4,l=_[s].statData.data_5,h=_[s].statData;h.data_0=[""],h.data_1=[""],h.data_2=r,h.data_3=D,h.data_4=i,h.data_5=e,h.data_6=n,h.data_7=l}return t}}});