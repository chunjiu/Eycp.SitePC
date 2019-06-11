/**=================================================
 *                      入口函数
 * =================================================
 */

'use strict';
import Hapi from 'hapi';
import Path from 'path';
import Template from 'art-template';
import LRU from 'lru-cache';

/** 读取服务配置 */
import ServerConfig from '../config/server.config';
/** 读取路由配置 */
import RoutesConfig from '../config/routes.config';

import DealWithCommonService from '../src/services/public/dealWithCommon.service';

/** 引入和pc端不匹配的url进行重定向url */
//import redirectConfig from '../config/redirect.config';

/** 引入artTemplate模版辅助 */
require("./helpers/index")(Template, RoutesConfig);

global.__Seo = {};
global.__province={};
global.__lotteryAllTree={};




/** 创建一个hapi服务 */
const server = new Hapi.Server({
    /** hapi需要设置路由读取得静态资源，否则渲染出来得页面不能够读取到静态资源 */
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '.')
            }
        },
        state: {
            strictHeader: false,
            ignoreErrors: true
        }
    }
});

/** 开启debug */
server.debug = false;

/** 连接服务器端口 */
server.connection({ port: ServerConfig.server.port });

// 设定UUID
server.state('uuid', {
    ttl: 30 * 24 * 60 * 60 * 1000,     // 一个月
    isSecure: false,
    path: '/',
    encoding: 'base64json'
});

/******************* start modify by Leo 2018/3/21   修改插件加载形式 **********************/
/** 加载参数2目录下得所有hapi插件 */
/** 把这些hapi插件注册到当前入口文件 */
require('../libs/plugins')(server);
/**************************** end modify by Leo 2018/3/21 ********************************/

/******************* start modify by Leo 2018/3/21   修改路由加载形式 **********************/
let routes = {};
let arrRoutes=[];
for(var key in RoutesConfig.routes){
    if(key != '/' && key != '404'){
        routes[key] = require( `./routes/${key}.routes`);
        if(routes[key] == undefined){
            console.error(key+': 该路由不存在！');
        }
    }
}

Object.keys(routes).forEach(router => {
    if(router !='/' && router !='404'){
        routes[router].forEach(routeItem => {
            server.route(routeItem);
        });
        arrRoutes.push(router);
    }
}) 




/**************************** end modify by Leo 2018/3/21 ********************************/

/**************************** start add by Leo 2018/3/21 添加URL重写相关********************************/
// url 重写
server.ext('onRequest', (request, h) => {
   
    
    // 路由大小写转换
    // request.setUrl(request.path.toLocaleLowerCase());
    // 
    //  var reg=/\.css|js|jpg|png|gif|webfont|sass|less|ttf|woff|svg|ico/;

    // if(!reg.test(request.path)){
    //     reg = /^\/article\/list\/all\/(\d+)\/page_(\d+)?$/;///article/list/all/8/page_1

    //     if(reg.test(request.path)){
    //         var pages = request.path.split('/');
    //         request.path="/article/list-0-"+pages[4]+"-"+pages[5].replace("page_","p");
    //     }
    //      reg = /^\/article\/(\d+)\/detail\/(\d+).html$/;
    //     if(reg.test(request.path)){
    //         var pages = request.path.split('/');
    //         request.path="/article/"+pages[2]+"-detail-"+pages[4];   
    //     }
        
    // }
    return h.continue();
});

server.ext('onPreResponse', function (request, reply) {
    //global._headers = request.headers;
    //request.response.statusCode="301";
   
    // 404处理
    if (request.response.isBoom) {
        if(request.response.output.statusCode == '404') {
            var reg=/\.css|js|jpg|png|gif|webfont|sass|less|ttf|woff|svg|ico/;
            if(!reg.test(request.path)) {

                let HomeController = require('./controllers/home/home.controller');
                let _homeController = new HomeController();
                return _homeController["404"](request, reply);
            }
        }

        // 处理500异常
        if (request.response.output.statusCode >= 500 && request.response.output.statusCode <= 599) {
            console.error(request.response.stack);
            let HomeController = require('./controllers/home/home.controller');
            let _homeController = new HomeController();
            return _homeController["404"](request, reply);
        }
    }
    
    reply.continue();
});

/**************************** end add by Leo 2018/3/21 ********************************/

/** 设置服务使用得模版引擎为ArtTemplate模版 */
server.views({
    engines: {
        html: Template
    },
    relativeTo: __dirname,
    path: './views/',                   //模版得路径;
    layout: 'layout/default',           //布局模版;
    partialsPath: "views/",
    helpersPath: Path.join(__dirname, './helpers')   //模版辅助路径
});

global.__cache = LRU({
    max: 100,
    maxAge: 1500
});

global.__template = Template;


/** 获取所有省份分类 */
DealWithCommonService.getProvinceAsync().then((ref)=>{
    global.__province = ref;
}).catch((ex)=>{
    console.error(ex);
})

/** 获取彩种树 */
DealWithCommonService.getLotteryTree().then((ref)=>{
    global.__lotteryAllTree = ref;
}).catch((ex)=>{
    console.error(ex);
})

DealWithCommonService.getSeoJson().then(result => {
    if(!result.state) {
        global.__Seo = result;
    }
});


DealWithCommonService.sitemap();


/** 资源路由 */
server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
        directory: {
            path: process.env.INDEX ? process.env.INDEX : '../../client'
        }
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }

    server.connections.map(conn => {
        console.log('Server running at:' + conn.info.uri);
    })

});