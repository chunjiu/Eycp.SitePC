define(["Chart"],function(a){return{initialize:function(a,t){var d=this;return void 0==a?void console.error("DealWithDataContainer: _flot值不能为空！"):void 0==t?void console.error("DealWithDataContainer: _data值不能为空！"):1==a?d.dealWidth_1(t):11<=a&&13>=a?d.dealWidth_11(t):14==a?d.dealWidth_14(t):void 0},dealWidth_1:function(t){for(var d=t.missStatList,_=t.missBottomStatList,s=0;s<d.length;s++){var r=d[s].statResult;d[s].statData.data_3=[a.sumArr(r)],d[s].statData.data_4=[a.spanNumber(r)],d[s].statData.data_5=[a.ratioEvenOdd(r)],d[s].statData.data_6=[a.ratioPrime(r)]}for(var s=0;s<_.length;s++)_[s].statData.data_3=[""],_[s].statData.data_4=[""],_[s].statData.data_5=[""],_[s].statData.data_6=[""];return t},dealWidth_11:function(a){for(var t=this,d=a.missStatList,_=a.missBottomStatList,s=0;s<d.length;s++){var r=d[s].statData.data_0,i=d[s].statData.data_1,e=d[s].statData,o=t.sliceArr(r,2);e.data_0=o[0],e.data_1=o[1],e.data_2=o[2],e.data_3=o[3],e.data_4=o[4],e.data_5=o[5],e.data_6=o[6],e.data_7=i}for(var s=0;s<_.length;s++){var r=_[s].statData.data_0,i=_[s].statData.data_1,o=t.sliceArr(r,2),e=_[s].statData;e.data_0=o[0],e.data_1=o[1],e.data_2=o[2],e.data_3=o[3],e.data_4=o[4],e.data_5=o[5],e.data_6=o[6],e.data_7=i}return a},dealWidth_14:function(a){var t=this,d=a.missStatList,_=a.missBottomStatList;console.log(d);for(var s=0;s<d.length;s++){d[s].result="";var r=d[s].statData.data_0,i=d[s].statData.data_1,e=d[s].statData.data_2,o=d[s].statData.data_3,n=d[s].statData,l=t.sliceArr(r,3);n.data_0=l[0],n.data_1=l[1],n.data_2=l[2],n.data_3=l[3],n.data_4=l[4],n.data_5=l[5],n.data_6=l[6],n.data_7=i,n.data_8=e,n.data_9=o}for(var s=0;s<_.length;s++){_[s].result="";var r=_[s].statData.data_0,i=_[s].statData.data_1,e=_[s].statData.data_2,o=_[s].statData.data_3,n=_[s].statData,l=t.sliceArr(r,3);n.data_0=l[0],n.data_1=l[1],n.data_2=l[2],n.data_3=l[3],n.data_4=l[4],n.data_5=l[5],n.data_6=l[6],n.data_7=i,n.data_8=e,n.data_9=o,console.log(_[s].statData)}return a},sliceArr:function(a,t){for(var d=[],_=0;_<Math.ceil(a.length/t);_++){var s=_*t,r=s+t;d.push(a.slice(s,r))}return d}}});