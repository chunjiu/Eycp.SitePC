/****************************************************************
 *                        命名规范服务
 ****************************************************************/
define([
    'jquery'
],function (
    $
) {


    var TestingServer = {

        isDev: $('body').attr('isopeneventnamecheck') ==="false" ? false : true,        /**  如果是开发模式的话，才进行校验命名规范 */

        /** 检测事件名字是否符合规范 */
        _testingEventName: function (_EventName) {

            if(this.isDev){

                if(/_[\w]*/.test(_EventName)){
                    return true;
                }else{
                    return false;
                }

            }else {
                console.error('body标签上没有设置isOpenEventNameCheck属性！用于开启是否事件名规范校验！')
                return false;
            }
        }

    }

    return TestingServer;

})