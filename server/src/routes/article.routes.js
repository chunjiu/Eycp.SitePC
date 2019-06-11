'use strict';

import { BaseRoutes } from './base.routes';

/** Main (global) routes */
const routes = new class ArticleRoutes extends BaseRoutes {

    constructor() {

        const  routerArray = [
            'article'
        ]

        super(routerArray);

    }

}

module.exports = [
    routes.mapRouters()
];