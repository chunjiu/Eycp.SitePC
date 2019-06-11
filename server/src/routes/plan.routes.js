'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class PlanRoutes extends BaseRoutes {

    constructor() {

        const  routerArray = [
            'plan'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];