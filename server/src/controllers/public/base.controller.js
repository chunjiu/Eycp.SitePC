'use strict';

import Boom from 'boom'; //HTTP友好的错误对象
import seo from '../../services/public/seo.service';
import ConfigSerivce from '../../services/public/config.service';

/** ****************************************
 *
 * 为所有自定义控制器定义基本架构。
 *
 *  如果要共享，可以使用此类扩展您的控制器;
 *  如果你想初始化，你可以调用方法到所有控制器;
 * 代码调用你的控制器（通过`constructor（）`）
 *
 ******************************************/
export class BaseController {

    /**
     *  基础类得构造方法;
     * @param {stirng} notFoundMsg [optional]
     */
    constructor() {

        if (new.target === BaseController) {
            throw Error('BaseController是一个抽象类，不能直接实例化');
        }

        this.Boom = Boom;
        this.configService = ConfigSerivce;

        this.title = "";

        /**  在这里继续写你的更多代码 ... */
        this.path = require('path');
        this.fs = require('fs');

    }

    /**
     * 获取模板内容
     * @param {string} path 路径
     */
    getTemplate(path) {
        let _template = this.path.join(__dirname, path),
            _file;
        // 如果文件存在
        if (this.fs.existsSync(_template)) {
            _file = this.fs.readFileSync(_template, 'utf-8');
        } else {
            console.error('文件不存在:' + _template);
        }

        return _file;
    }

    /**
     * 处理基础上下文内容
     * @param {object} options {pageCode seo的key, option: {website,lotteryName,articleTitle}}
     * @param:  参数2为是否覆盖SEO的配置，因为getSeo会去配置里面读seo:  （注意这个是一个对象类型）
     */
    getBaseContext(_options, _coverSeoConfig) {

        let _context = {};

        _coverSeoConfig = _coverSeoConfig != undefined ? _coverSeoConfig : null;

        //版本号，用于更新缓存
        _context.vision = this.configService.config.vision;

        //是否开启debug模式(主要用于手机端调试报错);
        _context.isDebug = this.configService.config.isDebug;

        //是否读取编译过后的路径地址，该地址在根目录下的app.build.js中修改;
        _context.isLoadBuildPath = this.configService.config.isLoadBuildPath;

        //是否开启事件名字检测规范;
        _context.isOpenEventNameCheck = this.configService.config.isOpenEventNameCheck;

        // 网站信息
        _context.website = this.configService.config.website;
        _context.cdnUrl = this.configService.config.getCdn();

        _context.mobileSiteUrl = _context.website.mobileSiteUrl;

        _context.seo = seo.getSeo(_options.pageCode, _options.option, _coverSeoConfig);

        return _context;
    }

    /**
     * 应用模板和数据
     * @param {*数据内容， seo, model, ...} context 
     * @param {*} request 
     * @param {*} reply 
     */
    render(viewPath, context, request, reply) {

        /** 这个是参数，用于给客户端那边id为mobileSiteUrl的link标签加上域名后面的后缀 */
        context.urlParams = request.url.path;
        if (context.urlParams.indexOf('plan/detail-') >= 0) {
            context.urlParams = context.urlParams.replace('plan/detail-', 'plan/');
        } else if (context.urlParams.indexOf('/point/detail-') >= 0) {
            context.urlParams = context.urlParams.replace('point/detail-', 'point/');
        } else if (context.urlParams.indexOf('article') >= 0) {
            context.urlParams = "/article/list-0-6";
        }
        if (context.urlParams.indexOf('?') == -1) {
            context.urlParams += "?utm=mz";
        } else {
            context.urlParams += "&utm=mz";
        }
        // console.log("渲染的内容", context)
        return Promise.resolve(reply.view(viewPath, context).header('Cache-Control', 'max-age=1'));

    }

    /**
     * 输出json
     * @param {*} context 
     * @param {*} request 
     * @param {*} reply 
     */
    json(context, request, reply) {
        return Promise.resolve(reply(context).type('application/json;charset=utf-8'));
    }


    /** 输出HTML */
    html(viewPath, data, request, reply) {
        return Promise.resolve(reply.view(`${viewPath}`, data, {
            layout: 'layout/null',
        }));
    }

    contentHtml(context, request, reply) {
        return Promise.resolve(reply(context).type('text/html; charset=utf-8'));
    }
}