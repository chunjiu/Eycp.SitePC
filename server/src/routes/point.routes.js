'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class PointRoutes extends BaseRoutes {

    constructor() {

        const  routerArray = [
            'point'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];