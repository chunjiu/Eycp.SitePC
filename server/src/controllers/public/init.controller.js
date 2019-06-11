'use strict';

import seo from '../../services/public/seo.service';
import ConfigSerivce  from '../../services/public/config.service';

/** ****************************************
 *
 * 初始化使用的自定义控制器定义基本架构。
 *
 ******************************************/
export class InitController {

    /**
     *  基础类得构造方法;
     * @param {stirng} notFoundMsg [optional]
     */
    constructor() {
        this.configService = ConfigSerivce;
    }

    
    /**
     * 处理基础上下文内容
     * @param {object} options {pageCode seo的key, option: {website,lotteryName,articleTitle}}
     */
     getBaseContext(options) {

        let _context = {};

         //版本号，用于更新缓存
         _context.vision          = this.configService.config.vision;

         //是否开启debug模式(主要用于手机端调试报错);
         _context.isDebug         = this.configService.config.isDebug;

         //是否读取编译过后的路径地址，该地址在根目录下的app.build.js中修改;
         _context.isLoadBuildPath = this.configService.config.isLoadBuildPath;
 
         //是否开启事件名字检测规范;
         _context.isOpenEventNameCheck = this.configService.config.isOpenEventNameCheck;

        
         // 网站信息
         _context.website   = this.configService.config.website;
         _context.cdnUrl    =this.configService.config.getCdn();
      

         _context.seo         = seo.getSeo(options.pageCode, options.option);

        return _context;
    }

  
}