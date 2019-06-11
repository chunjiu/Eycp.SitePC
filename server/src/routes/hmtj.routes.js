/****************************************************************
 *
 *                                专家号码推荐路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class HmtjRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'hmtj'
        ]

        super(routerArray);

    }

};

module.exports = [
    routes.mapRouters()
];