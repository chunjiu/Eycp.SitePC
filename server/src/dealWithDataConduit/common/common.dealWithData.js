/***********************************************************************************
 *
 *                      作用: 专门用来处理数据;
 *
 ***********************************************************************************/
'use strict';

const commonDealWithDataService = new class CommonDealWithDataService {

    constructor() {

    }

    /**
     *  获取和值；
     */
    async renderMainNav( _lotteryAllTree, _DealWithCommonService, _title ){

        return await _DealWithCommonService.mainNavData(_lotteryAllTree, _title);
    }


}

export default commonDealWithDataService;
