/****************************************************************
 *
 *                                七乐彩路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class QlcRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'qlc'
        ]

        super(routerArray);

    }

};

module.exports = [
    routes.mapRouters()
];
