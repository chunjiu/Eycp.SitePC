/****************************************************************
 *
 *                                时时彩系列路由
 *
 ****************************************************************/
'use strict';

import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class SscRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'ssc'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];