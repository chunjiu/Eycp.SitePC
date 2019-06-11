/**********************************************************************
 *                         文件依赖
 *********************************************************************/
require.config({
    paths: {
    	//***** 核心库 ******/
        jquery:        'libs/jquery-1.12.4.min',
        underscore: 'libs/underscore-min',
        backbone:   'libs/backbone-min',
        
		//***** 扩展库 ******/
        Util:     'extensions/Util',
        String: 'extensions/String',
        Date: 'extensions/Date',
        Array: 'extensions/Array',
        Chart: 'extensions/Chart',

        //***** 第三方插件 ******/
        template : 'libs/template',
        WdatePicker: 'libs/My97DatePicker/WdatePicker',
        qrcode: 'libs/jquery-qrcode.min',
        clipboard : 'libs/clipboard.min',
        request: 'libs/request',
        highcharts3: 'libs/highstock_3.0',
        highcharts6: 'libs/highstock_6.1'
    },
    shim: { //引入没有使用requirejs模块写法的类库。backbone依赖underscore
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'Util': {
            exports: 'Util'
        },
        'String': {
            exports: 'String'
        },
        'Date': {
            exports: 'Date'
        },
        'Chart': {
            exports: 'Chart'
        },
        'WdatePicker' : {
            exports: 'WdatePicker'
        },
        'qrcode': {
            deps: ['jquery'],
            exports: 'QRCode'
        },
        'clipboard' : {
            exports: 'ClipboardJS'
        },
        'request' : {
            exports: 'Request'
        }
    }
});