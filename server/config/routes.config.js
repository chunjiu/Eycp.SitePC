/***********************************************************************************
 *
 *                        路由配置;
 *
 ***********************************************************************************/
'use strict';

module.exports = {

    routes: {
        /*****************************首页路由 *****************************/
        '/':{
            method: 'GET',
            path : `/`,
            controller: 'homeController',
            controllerPath: '../controllers/home/home.controller',
        },
        'home':{
            controller: 'homeController',
            controllerPath: '../controllers/home/home.controller',
            router : [{
                method: 'GET',
                path : `/home/{action?}`,
            }, {
                method: 'GET',
                path : `/lottery`,
                action : 'lottery'
            }, {
                method: 'GET',
                path : `/lottery/{groupType}`,
                action : 'lottery'
            }, {
                method: 'GET',
                path : `/map`,
                action : 'map'
            },{
                method: 'GET',
                path : `/lottery/{lotteryCode}/{action}`,
            }, {
                method: 'GET',
                path : `/lottery/search`,
                action: 'searchLottery'
            }]
        },
        /*****************************追号路由 *****************************/
        'plan':{
            controller: 'planController',
            controllerPath: '../controllers/plan/plan.controller',
            router : [{
                method: 'GET',
                path : `/plan`,
                action: 'index'
            },{
                method: 'GET',
                path : `/plan/{lotteryCode}/{type}/{date?}`,
                action: 'planResult'
            },{
                method: 'GET',
                path : `/plan/updatePlanResult`,
                action: 'updatePlanResult'
            },{
                method: 'GET',
                path : `/plan/updatePlanAward`,
                action: 'updateAwardReult'
            },{
                method: 'GET',
                path : `/plan/updateList`,
                action: 'updateList'
            },{
                method: 'GET',
                path : `/plan/detail-{id}g{groupId}s{state}.html`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/plan/recommend`,
                action: 'recommend'
            },{
                method: 'GET',
                path : `/plan/updatePlan`,
                action: 'updateIndexPlan'
            },{
                method: 'GET',
                path : `/plan/{action}/{para*}`,
            }]
        },
        /*****************************提点路由 *****************************/
        'point':{
            controller: 'pointController',
            controllerPath: '../controllers/point/point.controller',
            router : [{
                method: 'GET',
                path : `/point`,
                action: 'index'
            },{
                method: 'GET',
                path : `/point/p{pageIndex}`,
                action: 'index'
            },{
                method: 'GET',
                path : `/point/{groupId}`,
                action: 'index'
            },{
                method: 'GET',
                path : `/point/{groupId}-p{pageIndex}`,
                action: 'index'
            },{
                method: 'GET',
                path : `/point/{groupId}-{lotteryCode}`,
                action: 'index'
            },{
                method: 'GET',
                path : `/point/{groupId}-{lotteryCode}-p{pageIndex}`,
                action: 'index'
            },{
                method: 'GET',
                path : `/point/detail-{pointId}.html`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/point/recommend/{type?}`,
                action: 'recommend'
            },{
                method: 'GET',
                path : `/point/{action}/{para*}`,
            },{
                method: 'GET',
                path : `/point/getpoint`,
                action: 'getpoint'
            }]
        },
        /*****************************资讯路由 *****************************/
        'article':{
            controller: 'articleController',
            controllerPath: '../controllers/article/article.controller',
            router : [{
                method: 'GET',
                path : `/article`,
            },
            {
                method: 'GET',
                path : `/article/detail-{categoryId}-{id}.html`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/article/{categoryId}-detail-{id}.html`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/article/{action}/{para*}`,
            },{
                method: 'GET',
                path : `/article/{action}-{code}-{categoryId}-p{pageIndex}`,
            }]
        },
        /*****************************视频路由 *****************************/
        'live': {
            method: 'GET',
            controller: 'liveController',
            controllerPath: '../controllers/live/live.controller',
            router : [{
                method: 'GET',
                path : `/live`,
            },{
                method: 'GET',
                path : `/live/{action*}`,
            },{
                method: 'GET',
                path : `/live/{code}-detail-{issueno}`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/live/{code}-detail`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/live/{code}-{action}-p{pageIndex}`
            }]
        },

         /*****************************通知路由 *****************************/
         'notice':{
            controller: 'noticeController',
            controllerPath: '../controllers/notice/notice.controller',
            router : [{
                method: 'GET',
                path : `/notice`,
            },{
                method: 'GET',
                path : `/notice/detail-{id}.html`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/notice/{action}/{para*}`,
            },{
                method: 'GET',
                path : `/notice-p{pageIndex}`
            }]
        },
        /*****************************规则路由 *****************************/
        'rule':{
            controller: 'ruleController',
            controllerPath: '../controllers/rule/rule.controller',
            router : [{
                method: 'GET',
                path : `/rule`,
            },{
                method: 'GET',
                path : `/rule/{code}-{type}-{proid}`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/rule/{code}-{type}`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/rule/{action}/{para*}`
            }]
       },
       /*****************************帮助路由 *****************************/
       'help':{
            controller: 'helpController',
            controllerPath: '../controllers/help/help.controller',
            router : [{
                method: 'GET',
                path : `/help`,
            },{
                method: 'GET',
                path : `/help/{id}`,
                action: 'index'
            },{
                method: 'GET',
                path : `/help/{action}/{para*}`,
            }]
      },
      /*****************************关于路由 *****************************/
      'about':{
           controller: 'aboutController',
           controllerPath: '../controllers/about/about.controller',
           router : [{
               method: 'GET',
               path : `/about`,
           },{
                method: 'GET',
                path : `/about/advice`,
                action: 'advice'
            },{
               method: 'GET',
               path : `/about/{type}`,
               action: 'index'
           }]
     },
      /*****************************联系信息路由 *****************************/
      'contact':{
            controller: 'contactController',
            controllerPath: '../controllers/contact/contact.controller',
            router : [{
                method: 'GET',
                path : `/contact`,
            },{
                method: 'GET',
                path : `/contact/{para}`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/contact/{action}/{para*}`,
            }]
     },
        /*****************************特殊路由 *****************************/
        'api': {
            'default':{
                method: 'GET',
                path: '/api/{lotteryCode}/{action*}',
                controllerPath: '../controllers/api/api.controller'
            },
            'special':{
                method: 'GET',
                path: '/api/{lotteryType}/{lotteryCode}/{action}',
                controllerPath: '../controllers'
                /**  这个特殊得路由不需要写controller，因为是动态得; */
            },
            'export': { // 数字彩导出
                method: 'GET',
                path: '/api/{lotteryType}/{lotteryCode}/export/{type}/{year}',
                controllerPath: '../controllers'
            }
        },
        /*****************************数字彩路由 *****************************/
        'dlt':{
            controller: 'dltController',
            controllerPath: '../controllers/digit/dlt.controller',
            router : [{
                method: 'GET',
                path : `/digit/dlt/{action?}`,
            },{
                method: 'GET',
                path : `/digit/dlt/{action}-{period}`,
            },{
                method: 'GET',
                path : `/digit/dlt/{action}/{issueno*}`,
            },{
                method: 'GET',
                path : `/chart/dlt/{flot}`,
                action: `chart`
            },{
                method: 'GET',
                path : `/chart/dlt/requestChart`,
                action: `requestChart`
            }]
        },
        'fc3d':{
            controller: 'fc3dController',
            controllerPath: '../controllers/digit/fc3d.controller',
            router : [{
                method: 'GET',
                path : `/digit/fc3d/{action?}`,
            },{
                method: 'GET',
                path : `/digit/fc3d/{action}-{period}`,
            },{
                method: 'GET',
                path : `/digit/fc3d/{action}/{issueno*}`,
            },{
                method: 'GET',
                path : `/chart/fc3d/{flot}`,
                action: `chart`
            },{
                method: 'GET',
                path : `/chart/fc3d/requestChart`,
                action: `requestChart`
            }]
        },
        'pl3':{
            controller: 'pl3Controller',
            controllerPath: '../controllers/digit/pl3.controller',
            router : [{
                method: 'GET',
                path : `/digit/pl3/{action?}`,
            },{
                method: 'GET',
                path : `/digit/pl3/{action}-{period}`,
            },{
                method: 'GET',
                path : `/digit/pl3/{action}/{issueno*}`,
            },{
                method: 'GET',
                path : `/chart/pl3/{flot}`,
                action: `chart`
            },{
                method: 'GET',
                path : `/chart/pl3/requestChart`,
                action: `requestChart`
            }]
        },
        'pl5':{
            controller: 'pl5Controller',
            controllerPath: '../controllers/digit/pl5.controller',
            router : [{
                method: 'GET',
                path : `/digit/pl5/{action?}`,
            },{
                method: 'GET',
                path : `/digit/pl5/{action}-{period}`,
            },{
                method: 'GET',
                path : `/digit/pl5/{action}/{issueno*}`,
            },{
                method: 'GET',
                path : `/chart/pl5/{flot}`,
                action: `chart`
            },{
                method: 'GET',
                path : `/chart/pl5/requestChart`,
                action: `requestChart`
            }]
        },
        'qlc':{
            controller: 'qlcController',
            controllerPath: '../controllers/digit/qlc.controller',
            router : [{
                method: 'GET',
                path : `/digit/qlc/{action?}`,
            },{
                method: 'GET',
                path : `/digit/qlc/{action}-{period}`,
            },{
                method: 'GET',
                path : `/digit/qlc/{action}/{issueno*}`,
            },{
                method: 'GET',
                path : `/chart/qlc/{flot}`,
                action: `chart`
            },{
                method: 'GET',
                path : `/chart/qlc/requestChart`,
                action: `requestChart`
            }]
        },
        'qxc':{
            controller: 'qxcController',
            controllerPath: '../controllers/digit/qxc.controller',
            router : [{
                method: 'GET',
                path : `/digit/qxc/{action?}`,
            },{
                method: 'GET',
                path : `/digit/qxc/{action}-{period}`,
            },{
                method: 'GET',
                path : `/digit/qxc/{action}/{issueno*}`,
            },{
                method: 'GET',
                path : `/chart/qxc/{flot}`,
                action: `chart`
            },{
                method: 'GET',
                path : `/chart/qxc/requestChart`,
                action: `requestChart`
            }]
        },
        'ssq':{
            controller: 'ssqController',
            controllerPath: '../controllers/digit/ssq.controller',
            router : [{
                method: 'GET',
                path : `/digit/ssq/{action?}`,
            },{
                method: 'GET',
                path : `/digit/ssq/{action}-{period}`,
            },{
                method: 'GET',
                path : `/digit/ssq/{action}/{issueno*}`,
            },{
                method: 'GET',
                path : `/chart/ssq/{flot}-{queryday}`,
                action: `chart`
            },{
                method: 'GET',
                path : `/chart/ssq/{flot}`,
                action: `chart`
            },{
                method: 'GET',
                path : `/chart/ssq/requestChart`,
                action: `requestChart`
            }]
        },
        /*****************************高频彩路由 *****************************/
        '11x5': {
            controller: '11x5Controller',
            controllerPath: '../controllers/high/11x5.controller',
            router : [
            {
                method: 'GET',
                path: `/high/{area}11x5/{action?}`,
            },{
                method: 'GET',
                path: `/chart/{area}11x5/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/{area}11x5/requestChart`,
                action: 'requestChart'
            },{
                method: 'GET',
                path: `/chart/{area}11x5/requestChartSort`,
                action: 'requestChartSort'
            }]
        },
        'k3': {
            controller: 'k3Controller',
            controllerPath: '../controllers/high/k3.controller',
            router : [{
                method: 'GET',
                path: `/high/{area}k3/{action?}`,
            },{
                method: 'GET',
                path: `/chart/{area}k3/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/{area}k3/requestChart`,
                action: 'requestChart'
            }]
        },
        'kl8': {
            controller: 'kl8Controller',
            controllerPath: '../controllers/high/kl8.controller',
            router : [{
                method: 'GET',
                path: `/high/{area}kl8/{action?}`
            },{
                method: 'GET',
                path: `/chart/{area}kl8/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/{area}kl8/requestChart`,
                action: 'requestChart'
            }]
        },
        'kl10': {
            controller: 'kl10Controller',
            controllerPath: '../controllers/high/kl10.controller',
            router : [{
                method: 'GET',
                path: `/high/{area}kl10/{action?}`,
            },{
                method: 'GET',
                path: `/high/xync/{action?}`
            }
            ,{
                method: 'GET',
                path: `/chart/xync/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/xync/requestChart`,
                action: 'requestChart'
            },
            {
                method: 'GET',
                path: `/chart/{area}kl10/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/{area}kl10/requestChart`,
                action: 'requestChart'
            }]
        },
        'ssc': {
            controller: 'sscController',
            controllerPath: '../controllers/high/ssc.controller',
            router : [{
                method: 'GET',
                path: `/high/{area}ssc/{action?}`
            },{
                method: 'GET',
                path: `/chart/{area}ssc/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/{area}ssc/requestChart`,
                action: 'requestChart'
            }]
        },
        'pk10':{
            controller: 'pk10Controller',
            controllerPath: '../controllers/high/pk10.controller',
            router : [{
                method: 'GET',
                path: `/high/bjpk10/{action?}`
            },{
                method: 'GET',
                path: `/chart/bjpk10/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/bjpk10/requestChart`,
                action: 'requestChart'
            }]
        },
        'ssl': {
            controller: 'sslController',
            controllerPath: '../controllers/high/ssl.controller',
            router : [{
                method: 'GET',
                path: `/high/{area}ssl/{action?}`
            },{
                method: 'GET',
                path: `/chart/{area}ssl/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/{area}ssl/requestChart`,
                action: 'requestChart'
            }]
        },
        'hn481': {
            controller: 'hn481Controller',
            controllerPath: '../controllers/high/hn481.controller',
            router : [{
                method: 'GET',
                path: `/high/hn481/{action?}`
            },{
                method: 'GET',
                path: `/chart/hn481/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/hn481/requestChart`,
                action: 'requestChart'
            }]
        },
        'sxytdj': {
            controller: 'sxytdjController',
            controllerPath: '../controllers/high/sxytdj.controller',
            router : [{
                method: 'GET',
                path: `/high/sxytdj/{action?}`
            },{
                method: 'GET',
                path: `/chart/sxytdj/{flot}`,
                action: 'chart'
            },{
                method: 'GET',
                path: `/chart/sxytdj/requestChart`,
                action: 'requestChart'
            }]
        },
        /*****************************地方彩路由 *****************************/
        'local': {
            controller: 'localController',
            controllerPath: '../controllers/local/local.controller',
            router : [
            {
                    method: 'GET',
                    path : `/local/{code}/{action}-{provinceId}`
            },{
                    method: 'GET',
                    path : `/local/{code}/{action}`
             }
            ]
        },
        /*****************************走势聚合路由 *****************************/
        'chart': {
            controller: 'chartController',
            controllerPath: '../controllers/chart/chart.controller',
            router: [{
                method: 'GET',
                path: '/chart'
            },{
                method: 'GET',
                path: '/lottery/chartSearch',
                action: 'chartSearch'
            }]
        },
        /*****************************遗漏走势路由 *****************************/
        'omission': {
            controller: 'omissionController',
            controllerPath: '../controllers/omission/omission.controller',
            router: [{
                method: 'GET',
                path: '/omission'
            },{
                method: 'GET',
                path: '/lottery/omissionSearch',
                action: 'omissionSearch'
            },{
                method: 'GET',
                path : `/omission/{code}/{flot}`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/omission/{code}/requestOmission`,
                action: `requestOmission`
            },{
                method: 'GET',
                path : `/omissionChart/{code}/{flot}-{number}-{type}`,
                action: 'omissionchart'
            },{
                method: 'GET',
                path : `/omissionChart/{code}/requsetOmissionChart`,
                action: 'requsetomissionchart'
            }]
        },
        /*****************************专家杀号定胆路由 *****************************/
        'shdd': {
            controller: 'shddController',
            controllerPath: '../controllers/shdd/shdd.controller',
            router: [{
                method: 'GET',
                path : `/shdd/{code}/{type}`,
                action: 'shdd'
            },{
                method: 'GET',
                path : `/shdd/requestShdd`,
                action: `requestShdd`
            }]
        },
        /*****************************专家号码推荐走势路由 *****************************/
        'hmtj': {
            controller: 'hmtjController',
            controllerPath: '../controllers/hmtj/hmtj.controller',
            router: [{
                method: 'GET',
                path : `/hmtj/{code}/{type}`,
                action: 'hmtj'
            },{
                method: 'GET',
                path : `/hmtj/{code}/{type}_{expertId}`,
                action: 'detail'
            },{
                method: 'GET',
                path : `/hmtj/requestHmtj`,
                action: `requestHmtj`
            },{
                method: 'GET',
                path : `/hmtj/requestHmtjDetail`,
                action: `requestHmtjDetail`
            }]
        },
    }

}
