'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class HelpRoutes extends BaseRoutes {

    constructor() {

        const  routerArray = [
            'help'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];