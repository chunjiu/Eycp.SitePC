/****************************************************************
 *
 *                                地方彩路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class LiveRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'local'
        ]
        super(routerArray);

    }

}();


module.exports = [
    routes.mapRouters()
];