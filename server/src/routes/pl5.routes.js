/****************************************************************
 *
 *                                排列五路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class Pl5Routes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'pl5'
        ]

        super(routerArray);

    }

};


module.exports = [
    routes.mapRouters()
];
