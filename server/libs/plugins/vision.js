/** ========================================================================
 *  hapi.js模板渲染插件的支持。
 *  vision:视觉装饰服务器请求，并管理视图引擎，可以用来提供额外的方法回复界面模板的反应。
 *  公司还提供了一个内置的处理器实现创建模板的反应。
 *  ========================================================================
 */

'use strict';
module.exports= (server) => {
  const plugin = 'vision'; 
   server.register({ register: require('../vision_cache') }, (err) => {
      if (err) console.log('Error loading Plugin: #{ '+plugin+' }');
    });
}
