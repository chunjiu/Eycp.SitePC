/****************************************************************
 *
 *                                双色球路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class SsqRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'ssq'
        ]

        super(routerArray);

    }

};

module.exports = [
    routes.mapRouters()
];