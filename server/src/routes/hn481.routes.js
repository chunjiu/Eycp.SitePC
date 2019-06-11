/****************************************************************
 *
 *                                河南泳坛夺金481路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class HN481Routes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'hn481'
        ]

        super(routerArray);

    }

};

module.exports = [
    routes.mapRouters()
];
