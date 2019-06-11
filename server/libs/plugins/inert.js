/** ============================================
 *  对于hapi.js静态文件和目录处理插件。
 *  inert: 提供了用于提供静态文件和目录的新的处理方法，
 *  以及使用用于提供文件资源的文件方法来装饰回复界面。
 *  ============================================
 */
'use strict';
module.exports= (server) => {
  const plugin = 'inert';
  server.register({ register: require(plugin) }, (err) => {
       if (err) console.log('Error loading Plugin: #{ '+plugin+' }');
  });
}
