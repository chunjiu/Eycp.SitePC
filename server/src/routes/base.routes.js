/****************************************************************
 *
 *                                基础路由
 *
 ****************************************************************/
'use strict';

import * as joi from 'joi';
import ConfigService from '../services/public/config.service';

// const validateControllerHandler = Symbol('validateControllerHandler');

/** ****************************************
 *
 * 设定基础路由
 *
 * 这个（抽象）类旨在扩展任何自定义路由;
 * 它允许您访问Joi，用于有效载荷验证，以及
 *
 *  @see: https://github.com/hapijs/joi
 *
 ******************************************/

export class BaseRoutes {

    /**
     * Constructor
     * @param {function} controller
     *        回调方法来处理路由
     * @param {string} endpoint [optional]
     *        特定路由的终点，即：/ controller / {action}  /
     */

    constructor(_routerArray) {

        if (new.target === BaseRoutes) {
            throw Error('BaseRoutes是一个抽象类，不能直接实例化');
        }

        this.joi = joi;

        this._routerArray = _routerArray;

        /**  关联路由和控制器函数 */
        this.contactRouteAndController()
    }

    /**
     * 通用路由映射
     * @param {string} controllerName 控制器方法 
     * @param {*} request 
     * @param {*} reply 
     */
    mapActions(controllerName, request, reply) {
        let _actionArray = request.params.action ? request.params.action.split('/') : ['index'];

        if (typeof this[controllerName][_actionArray[0]] === 'function') {
            return this[controllerName][_actionArray[0]].call(this[controllerName], request, reply);
        } else {
            let HomeController = require('../controllers/home/home.controller');
            let _homeController = new HomeController();
            return _homeController["404"](request, reply);
        }

    }

    /**
     * 映射多级路由
     * @param {string} controllerName 控制器名称 
     * @param {string} actionName 需要映射的方法名称 
     * @param {*} request 
     * @param {*} reply 
     */
    mapMulitAction(controllerName, actionName, request, reply) {

        if (typeof this[controllerName][actionName] === 'function') {
            return this[controllerName][actionName].call(this[controllerName], request, reply);
        } else {
            let HomeController = require('../controllers/home/home.controller');
            let _homeController = new HomeController();
            return _homeController["404"](request, reply);
        }

    }

    /**
     *  把routes返回到根目录的index.js上进行路由注册
     */
    mapRouters() {

        if (this._routerArray.length > 0 || this._routerArray != undefined) {

            let _routerObject = [];
            let _routes = ConfigService.routes

            for (var i = 0; i < this._routerArray.length; i++) {

                /** 如果不是api这个路由 */
                if (this._routerArray[i] != 'api') {

                    // 当前路由对象
                    let _router = _routes[this._routerArray[i]];

                    if (_router != undefined) {

                        if (_router.router) {
                            _router.router.forEach(item => {
                                _routerObject.push({
                                    method: item.method,
                                    path: item.path,
                                    handler: item.action ? this.mapMulitAction.bind(this, _router.controller, item.action) : this.mapActions.bind(this, _router.controller)
                                })
                            });

                        } else {
                            _routerObject.push({
                                method: _router.method,
                                path: _router.path,
                                handler: _router.action ? this.mapMulitAction.bind(this, _router.controller, _router.action) : this.mapActions.bind(this, _router.controller)
                            })
                        }


                    } else {
                        console.error('mapRouters：该路由对象为空！');
                    }

                } else {

                    /**  返回特殊的api路由 */
                    return this.specialRouter();

                }
            }

            return _routerObject;

        } else {

            console.error('mapRouters：路由的key值不能为空！');
        }

    }


    /**
     *  处理特殊路由;
     */
    specialRouter() {

        let _routes = ConfigService.routes
        let _key = this._routerArray[0];


        if (_key == 'api' && this._routerArray.length == 1) {

            let _ApiController = require(_routes[_key].default.controllerPath);
            let _apiController = new _ApiController();
            let _resultRouter = [];

            for(let key in _routes[_key]) {
                
                // 默认路由比较特殊
                if(key === 'default') {
                    _resultRouter.push({
                        method: _routes[_key][key]['method'],
                        path: _routes[_key][key]['path'],
                        handler: _apiController.api.bind(_apiController)
                    });
                } else {
                    _resultRouter.push({
                        method: _routes[_key][key]['method'],
                        path: _routes[_key][key]['path'],
                        handler: (request, reply) => {

                            let _controller = require(`${_routes[_key].special.controllerPath}/${request.params.lotteryType}/${request.params.lotteryCode}.controller`);
                            if (_controller) {
                                let _tempController = new _controller();
                                if (typeof _tempController[request.params.action] === 'function') {
                                    return _tempController[request.params.action].call(_tempController, request, reply);
                                } else {
                                    return _tempController[key].call(_tempController, request, reply);
                                }
                            } else {
                                return _apiController.json({ Error: 'api not found' }, request, reply);
                            }
                        }
                    });
                }
            }

            return _resultRouter;

        } else {

            console.error('api这个路由配置有误，不能为多个！')
        }

    }


    /**
     *  关联路由和控制器函数
    */
    contactRouteAndController() {


        if (this._routerArray.length > 0 || this._routerArray != undefined) {

            let controllerNameArray = [];

            /** 当这个路由key是api得时候，不需要做实例化controller得操作 */
            if (this._routerArray[0] != 'api') {

                for (var i = 0; i < this._routerArray.length; i++) {

                    let _Controller;

                    /** 判断是否存在这些配置路径 */
                    if (ConfigService.routes[this._routerArray[i]].controllerPath != undefined || ConfigService.routes[this._routerArray[i]].controllerPath != '') {
                        /** 判断多个路由是否存在重复得控制器 */
                        if (!this.contains(controllerNameArray, ConfigService.routes[this._routerArray[i]].controller)) {

                            /** 把控制器名字存到这个临时数组中，用于判断是否有重复得控制器名字 */
                            controllerNameArray.push(ConfigService.routes[this._routerArray[i]].controller);

                            /** 加载对应得控制器 */
                            _Controller = require(ConfigService.routes[this._routerArray[i]].controllerPath);

                            if (_Controller != undefined) {

                                /** 实例化该控制器 */
                                this[ConfigService.routes[this._routerArray[i]].controller] = new _Controller();

                            } else {
                                console.error('contactRouteAndController：该控制器的路径无效！')
                            }

                        }

                    } else {
                        console.error('contactRouteAndController：该控制器路径为空！')
                    }
                }

            }

        } else {
            console.error('contactRouteAndController：路由的key值不能为空！');
        }

    }

    /**
     *  判断元素是否在数组中;
     *  @param { 数组 } _arr,
     *  @param {需要判断是否在数组中得元素}  _obj
     */
    contains(_arr, _obj) {

        if(!_arr || typeof(_arr) != 'object'){
            console.error('contains：参数1不存在或者不正确！');
            return ;
        }

        if(!_obj){
            console.error('contains：参数2不存在！');
            return ;
        }

        var i = _arr.length;
        while (i--) {
            if (_arr[i] === _obj) {
                return true;
            }
        }
        return false;
    }

}


