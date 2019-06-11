/****************************************************************
 *
 *                                专家杀号定胆路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class ShddRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'shdd'
        ]

        super(routerArray);

    }

};

module.exports = [
    routes.mapRouters()
];