define(["Chart"],function(a){return{initialize:function(a,t){return void 0==a?void console.error("DealWithDataContainer: _flot值不能为空！"):void 0==t?void console.error("DealWithDataContainer: _data值不能为空！"):32==a||33==a||34==a||63==a||64==a||65==a?this.dealWidth_32(t,a):37==a||68==a?this.dealWidth_37(t):38==a||39==a||69==a||70==a?this.dealWidth_38(t,a):10==a||40==a||71==a?this.dealWidth_40(t,a):t},dealWidth_32:function(a,t){for(var d=a.missStatList,_=a.missBottomStatList,r=0;r<d.length;r++){var i=d[r].statData,s=i.data_0.length,e=[];32==t||33==t||34==t?(i.data_3=i.data_2,i.data_2=i.data_1,i.data_1=i.data_0.splice(s-2,s),i.data_0=i.data_0.splice(0,2)):63!=t&&64!=t&&65!=t||(i.data_3=i.data_1,i.data_4=i.data_2,e=this.sliceArr(i.data_0,2),i.data_2=e[2],i.data_1=e[1],i.data_0=e[0])}for(var r=0;r<_.length;r++){var i=_[r].statData,s=i.data_0.length,e=[];32==t||33==t||34==t?(i.data_3=i.data_2,i.data_2=i.data_1,i.data_1=i.data_0.splice(s-2,s),i.data_0=i.data_0.splice(0,2)):63!=t&&64!=t&&65!=t||(i.data_3=i.data_1,i.data_4=i.data_2,e=this.sliceArr(i.data_0,2),i.data_2=e[2],i.data_1=e[1],i.data_0=e[0])}return a},dealWidth_37:function(t){for(var d=t.missStatList,_=t.missBottomStatList,r=0;r<d.length;r++){for(var i=d[r].statData,s=[],e=3;e>0;e--)i["data_"+e]=i["data_"+(e-1)];var n=d[r].statResult,h=a.sumArr(n);s.push(h),i.data_0=s}for(var r=0;r<_.length;r++){for(var i=_[r].statData,e=3;e>0;e--)i["data_"+e]=i["data_"+(e-1)];i.data_0=[""]}return t},dealWidth_38:function(a,t){for(var d=a.missStatList,_=a.missBottomStatList,r=0;r<d.length;r++){var i=[],s=d[r].statData;if(38==t||39==t)s.data_2=s.data_1,i=this.sliceArr(s.data_0,3),s.data_1=i[1],s.data_0=i[0];else if(69==t||70==t){var e=s.data_1;i=this.sliceArr(s.data_0,3),s.data_2=i[2],s.data_1=i[1],s.data_0=i[0],s.data_3=e}}for(var r=0;r<_.length;r++){var i=[],s=_[r].statData;if(38==t||39==t)s.data_2=s.data_1,i=this.sliceArr(s.data_0,3),s.data_1=i[1],s.data_0=i[0];else if(69==t||70==t){var e=s.data_1;i=this.sliceArr(s.data_0,3),s.data_2=i[2],s.data_1=i[1],s.data_0=i[0],s.data_3=e}}return a},dealWidth_40:function(a,t){for(var d=a.missStatList,_=a.missBottomStatList,r=this.getEachArray(d),i=0;i<d.length;i++){var s=d[i].statData,e=s.data_4;s.data_4=s.data_2,s.data_5=s.data_3,10==t&&(s.data_6=e),s.data_3=s.data_1,s.data_2=s.data_0,s.data_0=r[i].data_0,s.data_1=r[i].data_1}for(var i=0;i<_.length;i++){var s=_[i].statData,e=s.data_4;s.data_4=s.data_2,s.data_5=s.data_3,10==t&&(s.data_6=e),s.data_3=s.data_1,s.data_2=s.data_0,s.data_0=[""],s.data_1=[""]}return a.missStatList.shift(),a},getEachArray:function(a){for(var t=a.length,d=[{data_0:["-"],data_1:[0]}],_=0;_<t-1;_++){var r=[],i=[];a[_+1].statResult.forEach(function(t){a[_].statResult.contains(t)&&(t=t<10?"0"+t:t,i.push(t))}),0==i.length?r.push("-"):r=i.join(","),d.push({data_0:[r],data_1:[i.length.toString()]})}return d},sliceArr:function(a,t){for(var d=[],_=0;_<Math.ceil(a.length/t);_++){var r=_*t,i=r+t;d.push(a.slice(r,i))}return d}}});