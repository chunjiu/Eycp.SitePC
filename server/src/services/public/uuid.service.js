
'use strict';

import { BaseService } from './base.service';

export class UUIDService extends BaseService {
    /**
     *  获取UUID
     */
    getUUID(){
        
        let  cacheOpt = this.setCache(`feedback/GetGuId`, 0);

        const httpOpt = {
            url: `feedback/GetGuId`
        };

        return this.httpGet(httpOpt, cacheOpt, 4);
    }
}