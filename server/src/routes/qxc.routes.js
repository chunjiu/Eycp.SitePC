/****************************************************************
 *
 *                                七星彩路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class QxcRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'qxc'
        ]

        super(routerArray);

    }

};

module.exports = [
    routes.mapRouters()
];