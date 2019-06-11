/****************************************************************
 *
 *                                排列三路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class Pl3Routes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'pl3'
        ]

        super(routerArray);

    }

};


module.exports = [
    routes.mapRouters()
];
