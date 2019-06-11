/****************************************************************
 *
 *                                快乐十分系列路由
 *
 ****************************************************************/
'use strict';

import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class Kl10Routes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'kl10'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];