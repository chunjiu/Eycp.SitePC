'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class HomeRoutes extends BaseRoutes {

    constructor() {

        const  routerArray = [
            '/',
            'home'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];