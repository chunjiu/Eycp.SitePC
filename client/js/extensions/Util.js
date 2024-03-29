
define(function(require, exports, module) {

    var Util = {};
    Util.setCookie = function (name, value, expires, type) {
        if (expires == undefined) {
            document.cookie = name + "=" + escape(value);
        }
        else {
            var exp = new Date();
            switch (type) {
                case 'second':
                    exp.setTime(exp.getTime() + expires * 1000);
                    break;
                case 'minute':
                    exp.setTime(exp.getTime() + expires * 1000 * 60);
                    break;
                case 'hour':
                    exp.setTime(exp.getTime() + expires * 1000 * 60 * 60);
                    break;
                case 'day':
                    exp.setTime(exp.getTime() + expires * 1000 * 60 * 60 * 24);
                    break;
                case 'month':
                    exp.setTime(exp.getTime() + expires * 1000 * 60 * 60 * 24 * 30);
                    break;
                case 'year':
                    exp.setTime(exp.getTime() + expires * 1000 * 60 * 60 * 24 * 365);
                    break;
                default:
                    exp.setTime(exp.getTime() + expires * 1000);
                    break;
            }
            document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
        }
    }
    Util.getCookie = function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        }
        else {
            return null;
        }
    }
    Util.deleteCookie = function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }
    Util.guid = function () {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }
    Util.audioplayer = function (id, file, loop) {
        var audioplayer = document.getElementById(id);
        if (audioplayer != null) {
            document.body.removeChild(audioplayer);
        }

        if (typeof(file) != 'undefined') {
            if (navigator.userAgent.indexOf("MSIE") > 0) {// IE

                var player = document.createElement('bgsound');
                player.id = id;
                player.src = file['mp3'];
                player.setAttribute('autostart', 'true');
                if (loop) {
                    player.setAttribute('loop', 'infinite');
                }
                document.body.appendChild(player);

            } else { // Other FF Chome Safari Opera

                var player = document.createElement('audio');
                player.id = id;
                player.setAttribute('autoplay', 'autoplay');
                if (loop) {
                    player.setAttribute('loop', 'loop');
                }
                document.body.appendChild(player);

                var mp3 = document.createElement('source');
                mp3.src = file['mp3'];
                mp3.type = 'audio/mpeg';
                player.appendChild(mp3);

            }
        }
    };

    module.exports = Util;
})