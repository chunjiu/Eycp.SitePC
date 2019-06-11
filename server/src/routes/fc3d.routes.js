/****************************************************************
 *
 *                                福彩3D路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class Fc3dRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'fc3d'
        ]

        super(routerArray);

    }

};

module.exports = [
    routes.mapRouters()
];
