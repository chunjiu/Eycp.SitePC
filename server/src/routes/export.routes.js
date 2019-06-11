/****************************************************************
 *
 *                                导出路由
 *
 ****************************************************************/
'use strict';

import { BaseRoutes } from './base.routes';

const routes = new class ExportRoutes extends BaseRoutes {

    constructor() {

        const routerArray = [
            'export'
        ]
        super(routerArray);

    }

}();


module.exports = [
    routes.mapRouters()
];