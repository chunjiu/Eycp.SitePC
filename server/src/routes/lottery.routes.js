'use strict';

import {BaseRoutes} from './base.routes';
import {EFController} from '../controllers/11x5.controller';
import {PK10Controller} from '../controllers/pk10.controller';

/** Main (global) routes */
const routes = new class LotteryRoutes extends BaseRoutes {

    constructor() {
        super();
        this.lotteryRouterRoot = {
            'high' : '/high'
        };
        this['11x5Controller'] = new EFController();
        this['pk10Controller'] = new PK10Controller();

        // 彩种分类名称
        this.currentLottery = {
            '11x5': '{area}11x5',
            'pk10': 'pk10'
        };
    }

    // 彩票路由规则
    lotteryRouter() {
        return [{
            method: 'GET',
            path : `${this.lotteryRouterRoot.high}/${this.currentLottery['11x5']}/{action?}`,       // 11选5
            handler: (request, reply) => {this.mapActions('11x5Controller', request, reply);}
        },{
            method: 'GET',
            path : `${this.lotteryRouterRoot.high}/${this.currentLottery['pk10']}/{action?}`,           // pk10
            handler: (request, reply) => {this.mapActions('pk10Controller', request, reply);}
        }]
    }
}

module.exports = [
    routes.lotteryRouter()
];