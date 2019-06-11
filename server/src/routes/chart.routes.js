/****************************************************************
 *
 *                                图表系列路由
 *
 ****************************************************************/
'use strict';

import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class ChartRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'chart'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];