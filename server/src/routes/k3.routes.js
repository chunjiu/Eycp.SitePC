/****************************************************************
 *
 *                                快3系列路由
 *
 ****************************************************************/
'use strict';

import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class K3Routes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'k3'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];