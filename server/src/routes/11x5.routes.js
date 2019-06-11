/****************************************************************
 *
 *                                11x5系列路由
 *
 ****************************************************************/
'use strict';

import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class _11x5Routes extends BaseRoutes {

    constructor() {

        const routerArray = [
            '11x5'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];