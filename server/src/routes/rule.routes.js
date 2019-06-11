'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class RuleRoutes extends BaseRoutes {

    constructor() {

        const  routerArray = [
            'rule'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];