'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class ContactRoutes extends BaseRoutes {

    constructor() {

        const  routerArray = [
            'contact'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];