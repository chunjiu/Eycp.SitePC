define(["underscore","jquery","backbone","../../../services/event.service","../public/timer.container","../../publicComponent/detail/detailTab.component","../../publicComponent/detail/detailLeftNav.component","../../publicComponent/detail/detailTimeBlock.component","../../publicComponent/detail/detailAwardGrade.component","../../publicComponent/public/selectPlugIn.component","../../publicComponent/public/loading.component","../../../actions/public/lottery.action"],function(e,n,t,i,o,a,l,c,r,p,d,m){return{initialize:function(e,n){var t=this,u=new a;new l,new c,new p({type:"number"}),new r(e,n),new d;o.initialize(e,"history"),m.initialize(e,n),u.initialize(n),i.emit("isGetAwardData_timerContainer",!1),i.on("clickSelectNumber_selectPlugInComponent",function(e){i.emit("createLoading_loadingComponent"),m.getIssuenoData(parseInt(e),t.getAwardCallBack),i.emit("updateAttribute_detailListComponent",e)})},getAwardCallBack:function(e){i.emit("renderAwardGrade_DetailAwardGradeComponent",e)}}});