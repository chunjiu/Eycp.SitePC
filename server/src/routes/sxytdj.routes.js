/****************************************************************
 *
 *                                幸运农场系列路由
 *
 ****************************************************************/
'use strict';

import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class XYNCRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'sxytdj'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];