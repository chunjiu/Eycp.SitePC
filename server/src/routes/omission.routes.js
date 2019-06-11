/****************************************************************
 *
 *                                遗漏系列路由
 *
 ****************************************************************/
'use strict';

import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class OmissionRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'omission'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];