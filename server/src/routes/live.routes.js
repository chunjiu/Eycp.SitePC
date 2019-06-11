/****************************************************************
 *
 *                                视频路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class LiveRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'live'
        ]
        super(routerArray);

    }

}();


module.exports = [
    routes.mapRouters()
];