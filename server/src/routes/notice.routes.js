'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class NoticeRoutes extends BaseRoutes {

    constructor() {

        const  routerArray = [
            'notice'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];