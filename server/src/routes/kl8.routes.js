/****************************************************************
 *
 *                                快乐8系列路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class K3Routes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'kl8'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];