/****************************************************************
 *
 *                              helpers入口文件
 *
 ****************************************************************/
'use strict';

module.exports = (Template, RoutesConfig)=>{

    /** 添加拓展 */
    require('../lib/Date');
    require('../lib/String');
    require('../lib/Array');

    /** 添加公共方法 */
    const Currency = require('./currency/currency');

    /** 添加遗漏图表 */
    require('./omission/omission.helpers')(Template, Currency);

    /** 添加公共模版 */
    require('./common/common.helpers')(Template, Currency);

    /** 杀号定胆模板 */
    require('./shdd/shdd.helpers')(Template, Currency);

    /** 专家推荐模板 */
    require('./hmtj/hmtj.helpers')(Template, Currency);

    /** 添加高频彩helper */
    require('./high/pk10.helpers')(Template);
    require('./high/11x5.helpers')(Template);
    require('./high/ssc.helpers')(Template);
    require('./high/ssl.helpers')(Template);
    require('./high/kl10.helpers')(Template);
    require('./high/k3.helpers')(Template);
    require('./high/kl8.helpers')(Template);
    require('./high/hn481.helpers')(Template);

    /** 添加数字彩helper */
    require('./digit/dlt.helpers')(Template);
    require('./digit/ssq.helpers')(Template);
    require('./digit/qxc.helpers')(Template);
    require('./digit/pl3.helpers')(Template);
    require('./digit/pl5.helpers')(Template);
    require('./digit/qlc.helpers')(Template);
    require('./digit/fc3d.helpers')(Template);

    /**  添加首页得helpers */
    require('./home/index.helpers')(Template, RoutesConfig, Currency);
    
    /** 添加彩票大厅helper */
    require('./home/lottery.helpers')(Template);

    // 添加提点
    require('./point/point.helpers')(Template);
    
    // 添加追号
    require('./plan/plan.helpers')(Template);


};



