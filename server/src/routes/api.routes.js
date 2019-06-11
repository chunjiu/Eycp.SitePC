'use strict';

import {BaseRoutes} from './base.routes';

const routes = new class ApiRoutes  extends BaseRoutes{
    constructor() {

        const routerArray = [
            'api'
        ];

         super(routerArray);
    }

}

module.exports = [
    routes.mapRouters()
];