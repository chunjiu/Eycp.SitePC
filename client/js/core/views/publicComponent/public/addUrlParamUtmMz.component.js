/** ================================================
 *
 *                             用于判断参数是否带utm=mz，如果带则表示是PC端，
 *                             不带这个地址参数则表示跳转手机端；
 *
 *                             并且给整站的a标签跳转链接加上这个utm=mz参数
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service'
], function (
    _,
    $,
    _Backbone,
    _EventService
) {

    var AddUrlParamUtmMzComponent = _Backbone.View.extend({


        initialize: function (_param) {

            var _this = this;

            if(/\=/g.test(_param) == true){

                var _urlArr = _param.split('=');
                var _key = _urlArr[0];
                var _value = _urlArr[1]

                _this.checkUrlParam(_key, _value);


                if(_this.getUrlParam(_key)=='mz'){
                    _this.setLinkParam(_param);
                }


            }else{

                console.error('参数不合规范，应该是例如: utm=mz');
                return false;
            }

        },

        /**
         *  给PC站所有的a链接加上参数
         */
        setLinkParam: function (_param) {

            var _this = this;

            $(document).ready(function () {

                /** 如果是用a链接来跳转的话 */
                $('a').each(function (index,item) {

                     var _urlLink = $(item).attr('href');

                     if(_urlLink !=undefined &&  /javascript:/g.test(_urlLink) == false &&  /^#/g.test(_urlLink) == false ){

                         if(/\?/.test(_urlLink)){

                             _urlLink+=('&'+_param);

                         }else{

                             _urlLink+=('?'+_param);
                         }

                         $(item).attr('href', _urlLink);

                     };
                })


                /** 如果是用js的window.open跳转的话 */
                $('[onclick]').each(function (index,item) {

                    if(/javascript:window/g.test($(item).attr('onclick'))){

                        var _windowOpenUrl = $(item).attr('onclick');

                        _windowOpenUrl = _windowOpenUrl.match(/\'(.+?)\'/g)[0];

                        if(/\?/.test(_windowOpenUrl)){

                            _windowOpenUrl+=('&'+_param);

                        }else{

                            _windowOpenUrl+=('?'+_param);
                        }

                        $(item).attr('onclick', 'javascript:window.open(' +_windowOpenUrl +', "_blank")');
                    }

                })

            })

        },


        /**
         *  判断参数;
         */
        checkUrlParam: function (_key, _value) {

            var _this = this;

            /** 如果地址栏有这个参数，表示用户是想访问pc端，否则的话表示用户想访问手机端 */
            if(_this.getUrlParam(_key) != _value){

                if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){

                    window.location.href = _this.getURL().replace(_this.getHost(), $('#mobileSiteUrl').attr('href').replace('https://','').replace('http://',''));
                }

            }

        },

        /**
         *  获取当前整条url
         */
        getURL: function(){

            return window.location.href;

        },

        /**
         *  获取当前域名;
         */
         getHost: function () {

            return window.location.host;
         },


        /**
         *  获取地址栏参数;
         * @param name
         * @return {null}
         */
        getUrlParam: function(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r!=null) return unescape(r[2]); return null; //返回参数值
       }

    })

    return  AddUrlParamUtmMzComponent;
})