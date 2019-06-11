/****************************************************************
 *
 *                                about系列路由
 *
 ****************************************************************/
'use strict';

import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class AboutRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'about'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];