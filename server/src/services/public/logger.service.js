/***********************************************************************************
 *
 *           日志配置服务;
 *
 ***********************************************************************************/
'use strict';

import log4js from 'log4js';
import serverConfig from '../../../config/server.config';
import dgram from 'dgram';

const loggerService = new class LoggerService {

    constructor() {

        this._udpSock = dgram.createSocket('udp4');
        this._host = serverConfig.udpLogConfig.remoteHost || null;
        this._port = serverConfig.udpLogConfig.port || null;
        log4js.configure(serverConfig.logConfig);

        this.logger = log4js.getLogger();
        this.logger.setLevel(serverConfig.logConfig.level);


        //重写console.error(), 调用console.error就会上报日志
        console.error = (err => {
            return (e, err1, err2) => {
                try {
                    let _tmpErr = typeof e === 'string' ? e : e.stack;
                    if(err1) {
                        _tmpErr += err1;
                    }

                    if(err2) {
                        _tmpErr += err2;
                    }
                    err.call(console, _tmpErr);
                    this._udpSend(this._wrapMsg(_tmpErr, 'Error'));
                } catch (ex) {
                    console.warn(`记录日志错误:${ex.stack}`);
                }
            }
        })(console.error)
    }

    _udpSend(msg) {

        if (!serverConfig.udpLogConfig.isSend)
            return;
            
        /** 消息 */
        const buff = new Buffer(msg);

        this._udpSock.send(buff, 0, buff.length, this._port, this._host, (err) => {
            if (err) {

                // this.error(`log4js.logPlainUDPAppender error sending to ${host}:${port}, error: `, err);
                // 如果调用失败不应该再调，会死循环造成OOM
                console.warn(`log4js.logPlainUDPAppender error sending to ${this._port}:${this._host}, error: ${err.stack}`)

            }
            // this._udpSock.close();
        });

    }

    _wrapMsg(msg, level) {

        let log = {
            date: new Date(),
            level,
            msg,
            exception: msg
            //QUERY_STRING: request.query,
        };

        const logText = `
>>Project: Eycp_Web
>>Time: ${log.date}
>>Level: ${log.level}
>>Message: ${log.msg}
>>Exception: ${log.exception}`;
        //>>QUERY_STRING: ${log.QUERY_STRING}`

        return logText;
    }


    debug(msg, ex, request) {
        console.debug(msg);
    }


    info(msg, ex, request) {
        try {

            this._udpSend(this._wrapMsg(msg, ex, request, 'info'));
            console.info(msg);

        } catch (ex) {
            console.info(msg);
        }

    }

    warn(msg, ex, request) {
        this.logger.warn(msg);
    }

    // /**
    //  * 错误级日志
    //  */
    // error(msg, ex, request) {

    //     try {

    //         this._udpSend(this._wrapMsg(msg, ex, request, 'error'));
    //         this.logger.error(msg);

    //     } catch (ex) {
    //         this.logger.error(`记录日志错误:${ex.stack}`);
    //     }
    // }

}();

export default loggerService;