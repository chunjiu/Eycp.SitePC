define(["underscore","jquery","backbone","../../../services/event.service"],function(e,t,r,a){return r.View.extend({el:"#detailAwardGrade",ballList:"#ballList",lotteryDateTime:"#lotteryDateTime",tableList:"#list",amount:"#amount",initialize:function(){var e=this;a.on("renderAwardGrade_DetailAwardGradeComponent",function(t){e.renderAwardGrade(t)})},renderAwardGrade:function(e){var r=this;e?(t(r.ballList).html(e.ballList),t(r.lotteryDateTime).html(e.lotteryDateTime),t(r.tableList).html(e.list),t(r.amount).html(e.amount),a.emit("delLoading_loadingComponent")):console.error("renderAwardGrade_DetailAwardGradeComponent： 接受到返回来得数据为空！")}})});