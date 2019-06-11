/****************************************************************
 *
 *                                大乐透路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class DltRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'dlt'
        ]
        super(routerArray);

    }

}();


module.exports = [
    routes.mapRouters()
];