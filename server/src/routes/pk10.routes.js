/****************************************************************
 *
 *                                pk10路由
 *
 ****************************************************************/
'use strict';


import {BaseRoutes}        from './base.routes';

/** Main (global) routes */
const routes = new class Pk10Routes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'pk10'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];