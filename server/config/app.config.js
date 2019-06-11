'use strict';

module.exports = {

    config: {
        vision: '20181125',            //版本号;
        isDebug: false,                //是否开启调试模式（主要用于手机端的调试）
        isOpenEventNameCheck: true,    //是否开启事件名字检测规范
        pcUrl: {
            development: '',
            beta: '',
            release: ''
        },
        cdnUrl: {                      //cdn的配置
            development: '',
            beta: '',
            release: ''
        },
        api: {
            uri: {                           //彩种相关api的配置,需要和非彩种相关api做一个区分
                development: 'http://47.75.55.136:8082/',
                beta: 'http://47.75.55.136:8082/',
                release: 'http://127.0.0.1:9301/api/',
                xhost: ''
            },
            otherUri: {                      //非彩种相关api的配置
                development: 'http://47.75.55.136:8081/',
                beta: 'http://47.75.55.136:8081/',
                release: 'http://127.0.0.1:8081/api',
                xhost: ''
            },
            adUri: {                         //广告api的配置
                development: 'http://47.75.55.136:8086/',
                beta: 'http://47.75.55.136:8086/',
                release: 'http://127.0.0.1:8081/api',
                xhost: ''
            },
            uuidUri: {
                development: 'http://47.75.55.136:8087/',
                beta: 'http://47.75.55.136:8087/',
                release: 'http://127.0.0.1:8081/api',
                xhost: ''
            },
            pageUri: {
                development: 'http://eycp.filehtml.1396c.com/',
                beta: 'http://eycp.filehtml.1396c.com/',
                release: 'http://eycp.filehtml.1396c.com/'
            },
            error: {
                "error": "请求出错"
            }
        },
        
        getCdn(){
            let nodeEnv = ((process.env.NODE_ENV || 'development'));
            return this.cdnUrl[nodeEnv];
        },

        /**************************** 配置站内信息 *********************************/
        website: {
            //电脑版
            pcSiteUrl: "http://192.168.10.13:8009?utm=msite",
            //电脑版
            pcSiteUrlTwo: "http://192.168.10.13:8009",
            //手机
            mobileSiteUrl:"https://m.2cp.com",
            //视频地址
            videoSiteUrl: "http://csj.web4.1396c.com",
            //在线客服
            qqOnline: "http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODE5ODc4Nl80ODQ3NzJfNDAwMDY2NTIwMF8",
            //国内电话
            tel: "tel:4006549200",
            //境外电话
            overseasTel: "tel:00852-62104572",
            //反馈
            feedBackUrl: "http://47.75.55.136:8087/feedback/webfeedback?code=eycp&guId=",
            //音频
            audioUrl: "https://rescsj.56hx.com/w4/v2/images/du.mp3"
        },

        /**************************** 资讯列表tab分类 *********************************/
        articleClassify: [
            {code: '0', name: '全部' , categoryId: 8},
            {code: 'ssq', name: '双色球', categoryId: 37},
            {code: 'fc3d', name: '福彩3D', categoryId: 37},
            {code: 'qlc', name: '七乐彩', categoryId: 37},
            {code: 'dlt', name: '大乐透', categoryId: 37},
            {code: 'pl3', name: '排列3', categoryId: 37},
            {code: 'pl5', name: '排列5', categoryId: 37},
            {code: 'qxc', name: '七星彩', categoryId: 37},
            {code:'11x5', name: '11选5', categoryId: 32},
            {code:'k3', name: '快3', categoryId: 34},
            {code:'kl10', name: '快乐十分', categoryId: 33},
            {code:'ssc', name: '时时彩', categoryId: 35},
            {code:'other', name: '其它', categoryId: 36}
        ],

        /****************************  特殊名字彩种 ****************************/
        specialCode: [
            {
                province: '山东',
                code: 'sd11x5',
                name: '十一运夺金',
            },
            {
                province: '湖南',
                code: 'hnkl10',
                name: '动物总动员',
            },
            {
                province: '黑龙江',
                code: 'hljp62',
                name: '龙江风采P62',
            },
            {
                province: '重庆',
                code: 'xync',
                name: '幸运农场',
            },
            {
                province: '河南',
                code: 'zyfc22x5',
                name: '中原风采22选5',
            },
            {
                province: '广东',
                code: 'nyfc36x7',
                name: '南粤风采36选7',
            },
            {
                province: '广东',
                code: 'szfc35x7',
                name: '深圳风采35选7',
            }
        ],

        /*********************** 需要显示在首页左边的配置 *********************/
        showInHomeLeft: [
                        {code: 'ssq', name: '双色球', sort: 1, type: 'digit'},
                        {code: 'fc3d', name: '福彩3D', sort: 2, type: 'digit'},
                        {code: 'qlc', name: '七乐彩', sort: 3, type: 'digit'},
                        {code: 'dlt', name: '大乐透', sort: 4, type: 'digit'},
                        {code: 'pl3', name: '排列3', sort: 5, type: 'digit'},
                        {code: 'pl5', name: '排列5', sort: 6, type: 'digit'},
                        {code: 'qxc', name: '七星彩', sort: 7, type: 'digit'},


                        {code: 'gd11x5',name: '广东11选5', sort: 8, type: 'high'},
                        {code: 'zj11x5', name: '浙江11选5', sort: 9, type: 'high'},
                        {code: 'heb11x5', name: '河北11选5', sort: 10, type: 'high'},
                        {code: 'hub11x5', name: '湖北11选5', sort: 11, type: 'high'},
                        {code: 'jsk3', name: '江苏快3', sort: 12, type: 'high'},
                        {code: 'hubk3', name: '湖北快3', sort: 13, type: 'high'},
                        {code: 'gdkl10', name: '广东快乐十分', sort: 14, type: 'high'},
                        {code: 'hnkl10', name: '动物总动员', sort: 15, type: 'high'},
                        {code: 'ynssc', name: '云南时时彩', sort: 16, type: 'high'},
                        {code: 'cqssc', name: '重庆时时彩', sort: 17, type: 'high'},
                        {code: 'bjkl8',name: '北京快乐8', sort: 18, type: 'high'},
                        {code: 'shssl',name: '上海时时乐', sort: 19, type: 'high'},


                        {code: 'hc1',name: '广东好彩1', sort: 20, type: 'local', provinceId:"20"},
                        {code: 'hn4j1', name: '海南4+1', sort: 21, type: 'local', provinceId:"21"},
                        {code: 'df6j1',name: '江苏东方6+1', sort: 22, type: 'local', provinceId:"11"},
                        {code: 'js7ws',name: '江苏7位数', sort: 23, type: 'local', provinceId:"11"},
                        {code: 'hd15x5',name: '浙江15选5', sort: 24, type: 'local', provinceId:"12"},
                        {code: 'zyfc22x5',name: '中原风采22选5', sort: 25, type: 'local', provinceId:"17"}
        ],


        /**************************** 省份分类 *********************************/
        // province: [
        //     {
        //         id: 0, name: "全国",
        //         childs: [
        //             {code: 'ssq', name: '双色球', area: '全国', type: '', classify: 'digit', isShowInHomeLeft: true},
        //             {code: 'fc3d', name: '福彩3D', area: '全国', type: '', classify: 'digit', isShowInHomeLeft: true},
        //             {code: 'qlc', name: '七乐彩', area: '全国', type: '', classify: 'digit', isShowInHomeLeft: true},
        //             {code: 'dlt', name: '大乐透', area: '全国', type: '', classify: 'digit', isShowInHomeLeft: true},
        //             {code: 'pl3', name: '排列3', area: '全国', type: '', classify: 'digit', isShowInHomeLeft: true},
        //             {code: 'pl5', name: '排列5', area: '全国', type: '', classify: 'digit', isShowInHomeLeft: true},
        //             {code: 'qxc', name: '七星彩', area: '全国', type: '', classify: 'digit', isShowInHomeLeft: true}
        //         ]
        //     },
        //     {
        //         "id": 2, name: "北京",
        //         childs: [
        //             {
        //                 code: 'bjpk10',
        //                 name: '北京赛车pk10',
        //                 area: '华北地区',
        //                 type: 'other',
        //                 classify: 'high',
        //                 isShowInHomeLeft: true
        //             },
        //             {code: 'bjkl8', name: '北京快乐8', area: '华北地区', type: 'kl8', classify: 'high', isShowInHomeLeft: true},
        //             {code: 'bjk3', name: '北京快3', area: '华北地区', type: 'k3', classify: 'high'},
        //             {code: 'bj11x5', name: '北京11选5', area: '华北地区', type: '11x5', classify: 'high'},
        //         ]
        //     },
        //     {
        //         id: 6, name: "河北省",
        //         childs: [
        //             {code: 'hbpl7', name: '河北排列7', area: '华北地区', type: 'other', classify: 'local'},
        //             {code: 'hbpl5', name: '河北排列5', area: '华北地区', type: 'other', classify: 'local'},
        //             {code: 'hbhy2', name: '河北好运2', area: '华北地区', type: 'other', classify: 'local'},
        //             {code: 'hbhy3', name: '河北好运3', area: '华北地区', type: 'other', classify: 'local'},
        //             {code: 'hb20x5', name: '河北20选5', area: '华北地区', type: 'other', classify: 'local'},
        //             {code: 'heb11x5', name: '河北11选5', area: '华北地区', type: '11x5', classify: 'high'},
        //             {code: 'hebk3', name: '河北快3', area: '华北地区', type: 'k3', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 3, name: "上海",
        //         childs: [
        //             {code: 'shssl', name: '上海时时乐', area: '华东地区', type: 'ssl', classify: 'high', isShowInHomeLeft: true},
        //             {code: 'sh11x5', name: '上海11选5', area: '华东地区', type: '11x5', classify: 'high'},
        //             {code: 'shk3', name: '上海快3', area: '华东地区', type: 'k3', classify: 'high'},
        //             {code: 'shttcx4', name: '上海天天彩选4', area: '华东地区', type: 'other', classify: 'local'},
        //             {code: 'hd15x5', name: '上海15选5', area: '华东地区', type: '', classify: 'local'},
        //             {code: 'df6j1', name: '上海东方6+1', area: '华东地区', type: '', classify: 'local'}
        //         ]
        //     },
        //     {
        //         id: 4, name: "天津",
        //         childs: [
        //             {
        //                 code: 'tjkl10',
        //                 name: '天津快乐十分',
        //                 area: '华北地区',
        //                 type: 'kl10',
        //                 classify: 'high'
        //             },
        //             {code: 'tjssc', name: '天津时时彩', area: '华北地区', type: 'ssc', classify: 'high', isShowInHomeLeft: true},
        //             {
        //                 code: 'tj11x5',
        //                 name: '天津11选5',
        //                 area: '华北地区',
        //                 type: '11x5',
        //                 classify: 'high'
        //             },
        //         ]
        //     },
        //     {
        //         id: 5, name: "重庆",
        //         childs: [
        //             {code: 'cqssc', name: '重庆时时彩', area: '西南地区', type: 'ssc', classify: 'high', isShowInHomeLeft: true},
        //             {code: 'xync', name: '幸运农场', area: '西南地区', type: 'kl10', classify: 'high', isShowInHomeLeft: true}
        //             //{code: 'cq11x5', name: '重庆11选5', area: '西南地区', type: '11x5', classify: 'high'},
        //         ]
        //     },
        //     {
        //         id: 7, name: "山西省",
        //         childs: [
        //             //{code: 'sxytdj', name: '山西泳坛夺金', area: '华北地区', type: 'other', classify: 'high'},
        //             {code: 'sx11x5', name: '山西11选5', area: '华北地区', type: '11x5', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 10, name: "黑龙江省",
        //         childs: [
        //             {
        //                 code: 'hlj22x5',
        //                 name: '黑龙江22选5',
        //                 area: '东北地区',
        //                 type: 'other',
        //                 classify: 'local',
        //                 isShowInHomeLeft: true
        //             },
        //             {code: 'hljp62', name: '龙江风采P62', area: '东北地区', type: 'other', classify: 'local'},
        //             {code: 'hlj36x7', name: '黑龙江36选7', area: '东北地区', type: 'other', classify: 'local'},
        //             {code: 'hljtc6j1', name: '黑龙江体彩6+1', area: '东北地区', type: 'other', classify: 'local'},
        //             {code: 'hlj11x5', name: '黑龙江11选5', area: '东北地区', type: '11x5', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 14, name: "福建省",
        //         childs: [
        //             {
        //                 code: 'fj31x7',
        //                 name: '福建体彩31选7',
        //                 area: '华东地区',
        //                 type: 'other',
        //                 classify: 'local',
        //                 isShowInHomeLeft: true
        //             },
        //             {code: 'fj22x5', name: '福建体彩22选5', area: '华东地区', type: 'other', classify: 'local'},
        //             {code: 'fj36x7', name: '福建体彩36选7', area: '华东地区', type: 'other', classify: 'local'},
        //             {code: 'fjk3', name: '福建快3', area: '华东地区', type: 'k3', classify: 'high'},
        //             {code: 'fj11x5', name: '福建11选5', area: '华东地区', type: '11x5', classify: 'high'},
        //             {code: 'hd15x5', name: '福建15选5', area: '华东地区', type: '', classify: 'local'},
        //             {code: 'df6j1', name: '福建东方6+1', area: '华东地区', type: '', classify: 'local'}
        //         ]
        //     },
        //     {
        //         id: 12, name: "浙江省",
        //         childs: [
        //             {
        //                 code: 'zj20x5',
        //                 name: '浙江20选5',
        //                 area: '华东地区',
        //                 type: 'other',
        //                 classify: 'local',
        //                 isShowInHomeLeft: true
        //             },
        //             //{code: 'zjk3', name: '浙江快3', area: '华东地区', type: 'k3', classify: 'high', isShowInHomeLeft: true},
        //             {code: 'zj6j1', name: '浙江体彩6+1', area: '华东地区', type: 'other', classify: 'local'},
        //             {code: 'zj11x5', name: '浙江11选5', area: '华东地区', type: '11x5', classify: 'high'},
        //             //{code: 'kl12', name: '浙江快乐彩', area: '华东地区', type: 'other', classify: 'high'},
        //             {code: 'hd15x5', name: '浙江15选5', area: '华东地区', type: '', classify: 'local',  isShowInHomeLeft: true},
        //             {code: 'df6j1', name: '浙江东方6+1', area: '华东地区', type: '', classify: 'local'}
        //         ]
        //     },
        //     {
        //         id: 8, name: "辽宁省",
        //         childs: [
        //             {code: 'ln35x7', name: '辽宁35选7', area: '东北地区', type: 'other', classify: 'local'},
        //             //{code: 'lnkl12', name: '辽宁快乐12', area: '东北地区', type: 'other', classify: 'high'},
        //             {code: 'ln11x5', name: '辽宁11选5', area: '东北地区', type: '11x5', classify: 'high'},
        //             {code: 'df6j1', name: '辽宁东方6+1', area: '华东地区', type: '', classify: 'local'}
        //         ]
        //     },
        //     {
        //         id: 9, name: "吉林省",
        //         childs: [
        //             //{code: 'jlk3', name: '吉林快3', area: '东北地区', type: 'k3', classify: 'high', isShowInHomeLeft: true},
        //             {code: 'jl11x5', name: '吉林11选5', area: '东北地区', type: '11x5', classify: 'high'}
        //         ]
        //     },
        //
        //     {
        //         id: 11, name: "江苏省",
        //         childs: [
        //             {code: 'jsk3', name: '江苏快3', area: '华东地区', type: 'k3', classify: 'high', isShowInHomeLeft: true},
        //             {code: 'js7ws', name: '江苏7位数', area: '华东地区', type: 'other', classify: 'local'},
        //             {code: 'js11x5', name: '江苏11选5', area: '华东地区', type: '11x5', classify: 'high'},
        //             {code: 'hd15x5', name: '江苏15选5', area: '华东地区', type: '', classify: 'local'},
        //             {code: 'df6j1', name: '江苏东方6+1', area: '华东地区', type: '', classify: 'local'}
        //         ]
        //     },
        //
        //     {
        //         id: 13, name: "安徽省",
        //         childs: [
        //             {code: 'ahk3', name: '安徽快3', area: '华东地区', type: 'k3', classify: 'high'},
        //             {code: 'ah11x5', name: '安徽11选5', area: '华东地区', type: '11x5', classify: 'high'},
        //             {code: 'hd15x5', name: '安徽15选5', area: '华东地区', type: '', classify: 'local'},
        //             {code: 'df6j1', name: '安徽东方6+1', area: '华东地区', type: '', classify: 'local'}
        //         ]
        //     },
        //
        //     {
        //         id: 15, name: "江西省",
        //         childs: [
        //             // { code: 'jxssc', name: '江西时时彩', area: '华东地区' , type: 'ssc' , classify:'high' },
        //             {code: 'jx11x5', name: '江西11选5', area: '华东地区', type: '11x5', classify: 'high'},
        //             {code: 'jxk3', name: '江西快3', area: '华东地区', type: 'k3', classify: 'high'},
        //             {code: 'hd15x5', name: '江西15选5', area: '华东地区', type: '', classify: 'local'},
        //             {code: 'df6j1', name: '江西东方6+1', area: '华东地区', type: '', classify: 'local'}
        //         ]
        //     },
        //     {
        //         id: 16, name: "山东省",
        //         childs: [
        //             {code: 'sd11x5', name: '十一运夺金', area: '华东地区', type: '11x5', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 17, name: "河南省",
        //         childs: [
        //             {code: 'hn481', name: '河南泳坛夺金', area: '华中地区', type: 'other', classify: 'high'},
        //             {code: 'zyfc22x5', name: '中原风采22选5', area: '华中地区', type: 'other', classify: 'local'},
        //             {code: 'hnxyc', name: '河南幸运彩', area: '华中地区', type: 'other', classify: 'local'},
        //             {code: 'hnk3', name: '河南快3', area: '华南地区', type: 'k3', classify: 'high'}
        //             //{code: 'hn11x5', name: '河南11选5', area: '华南地区', type: '11x5', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 18, name: "湖北省",
        //         childs: [
        //             {code: 'hubk3', name: '湖北快3', area: '华中地区', type: 'k3', classify: 'high'},
        //             {code: 'hub11x5', name: '湖北11选5', area: '华中地区', type: '11x5', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 19, name: "湖南省",
        //         childs: [
        //             {code: 'hnkl10', name: '动物总动员', area: '华中地区', type: 'kl10', classify: 'high'}
        //             //{code: 'xysc', name: '幸运赛车', area: '华中地区', type: 'other', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 20, name: "广东省",
        //         childs: [
        //             {
        //                 code: 'gd11x5',
        //                 name: '广东11选5',
        //                 area: '华南地区',
        //                 type: '11x5',
        //                 classify: 'high'
        //             },
        //             {
        //                 code: 'gdkl10',
        //                 name: '广东快乐十分',
        //                 area: '华南地区',
        //                 type: 'kl10',
        //                 classify: 'high',
        //                 isShowInHomeLeft: true
        //             },
        //             {
        //                 code: 'hc1',
        //                 name: '广东好彩1',
        //                 area: '华南地区',
        //                 type: 'other',
        //                 classify: 'local',
        //                 isShowInHomeLeft: true
        //             },
        //             {code: 'nyfc36x7', name: '南粤风采36选7', area: '华南地区', type: 'other', classify: 'local'},
        //             {code: 'gd26x5', name: '广东26选5', area: '华南地区', type: 'other', classify: 'local'},
        //             {code: 'szfc35x7', name: '深圳风采35选7', area: '华南地区', type: 'other', classify: 'local'}
        //         ]
        //     },
        //     {
        //         id: 21, name: "海南省",
        //         childs: [
        //             {
        //                 code: 'hn4j1',
        //                 name: '海南4+1',
        //                 area: '华南地区',
        //                 type: 'other',
        //                 classify: 'local',
        //                 isShowInHomeLeft: true
        //             }
        //         ]
        //     },
        //     //{
        //     //    id: 22, name: "四川省",
        //     //    childs: [
        //             //{code: 'sckl12', name: '四川快乐12', area: '西南地区', type: 'other', classify: 'high'}
        //             //{code: 'sc11x5', name: '四川11选5', area: '西南地区', type: '11x5', classify: 'high'}
        //     //    ]
        //     //},
        //     {
        //         id: 23, name: "贵州省",
        //         childs: [
        //             //{code: 'gzk3', name: '贵州快3', area: '西南地区', type: 'k3', classify: 'high'},
        //             {code: 'gz11x5', name: '贵州11选5', area: '西南地区', type: '11x5', classify: 'high'},
        //         ]
        //     },
        //     {
        //         id: 24, name: "云南省",
        //         childs: [
        //             {code: 'ynssc', name: '云南时时彩', area: '西南地区', type: 'ssc', classify: 'high'},
        //             {code: 'yn11x5', name: '云南11选5', area: '西南地区', type: '11x5', classify: 'high'},
        //             {code: 'ynkl10', name: '云南快乐十分', area: '西南地区', type: 'kl10', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 25, name: "陕西省",
        //         childs: [
        //             {code: 'shx11x5', name: '陕西11选5', area: '西北地区', type: '11x5', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 26, name: "甘肃省",
        //         childs: [
        //             {code: 'gs11x5', name: '甘肃11选5', area: '西北地区', type: '11x5', classify: 'high'},
        //             {code: 'gsk3', name: '甘肃快3', area: '西北地区', type: 'k3', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 27, name: "青海省",
        //         childs: [
        //             //{code: 'qh11x5', name: '青海11选5', area: '西北地区', type: '11x5', classify: 'high'},
        //             {code: 'qhk3', name: '青海快3', area: '西北地区', type: 'k3', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 28, name: "内蒙",
        //         childs: [
        //             {code: 'nmg11x5', name: '内蒙古11选5', area: '华北地区', type: '11x5', classify: 'high'},
        //             {code: 'nmgk3', name: '内蒙古快3', area: '华北地区', type: 'k3', classify: 'high'}
        //         ]
        //     },
        //     {
        //         id: 29, name: "广西",
        //         childs: [
        //             {code: 'gxklsc24x7', name: '广西快乐双彩24选7', area: '华南地区', type: '', classify: 'local'},
        //             {code: 'gx11x5', name: '广西11选5', area: '华南地区', type: '11x5', classify: 'high', isShowInHomeLeft: true},
        //             {code: 'gxk3', name: '广西快3', area: '华南地区', type: 'k3', classify: 'high'},
        //             {code: 'gxkl10', name: '广西快乐十分', area: '华南地区', type: 'kl10', classify: 'high', isShowInHomeLeft: true}
        //         ]
        //
        //     },
        //     {id: 30, name: "宁夏", childs: []},
        //     {
        //         id: 31, name: "新疆",
        //         childs: [
        //             {code: 'xj35x7', name: '新疆35选7', area: '西北地区', type: 'other', classify: 'local'},
        //             {
        //                 code: 'xj18x7',
        //                 name: '新疆18选7',
        //                 area: '西北地区',
        //                 type: 'other',
        //                 classify: 'local',
        //                 isShowInHomeLeft: true
        //             },
        //             {code: 'xj25x7', name: '新疆25选7', area: '西北地区', type: 'other', classify: 'local'},
        //             //{code: 'xjxlc', name: '新疆喜乐彩', area: '西北地区', type: 'other', classify: 'local'},
        //             {code: 'xj11x5', name: '新疆11选5', area: '西北地区', type: '11x5', classify: 'high'},
        //             {code: 'xjssc', name: '新疆时时彩', area: '西北地区', type: 'ssc', classify: 'high'}
        //         ]
        //     }
        //
        // ],


        /***************************** 彩票主页静态数据 ************************ */
        lotteryMainStatic: {
            '11x5': {
                header: ['奖级', '中奖概率', '奖金（元）'],
                content: [
                    {
                        level: '任选1中1',
                        probability: '1/11',
                        bonus: '13'
                    },
                    {
                        level: '任选2中2',
                        probability: '1/5.5',
                        bonus: '6'
                    },
                    {
                        level: '任选3中3',
                        probability: '1/16.5',
                        bonus: '19'
                    },
                    {
                        level: '任选4中4',
                        probability: '1/66',
                        bonus: '78'
                    },
                    {
                        level: '任选5中5',
                        probability: '1/462',
                        bonus: '540'
                    },
                    {
                        level: '任选6中5',
                        probability: '1/77',
                        bonus: '90'
                    },
                    {
                        level: '任选7中5',
                        probability: '1/22',
                        bonus: '26'
                    },
                    {
                        level: '任选8中5',
                        probability: '1/8.25',
                        bonus: '9'
                    },
                    {
                        level: '选前2组选',
                        probability: '1/55',
                        bonus: '65'
                    },
                    {
                        level: '选前2直选',
                        probability: '1/110',
                        bonus: '130'
                    },
                    {
                        level: '选前3组选',
                        probability: '1/165',
                        bonus: '192'
                    },
                    {
                        level: '选前3直选',
                        probability: '1/990',
                        bonus: '1170'
                    },
                ]
            },
            'k3': {
                header: ['投注方法', '开奖号码（号码不排序）', '投注号数', '中奖金额（元）', '中奖概率'],
                content: [
                    {
                        method: '和值4',
                        number: '112',
                        choose: '全选',
                        bonus: 80,
                        probability: '1/72'
                    },
                    {
                        method: '和值5',
                        number: '113、122',
                        choose: '全选',
                        bonus: 40,
                        probability: '1/36'
                    },
                    {
                        method: '和值6',
                        number: '114、123、222',
                        choose: '全选',
                        bonus: 25,
                        probability: '1/21.6'
                    },
                    {
                        method: '和值7',
                        number: '115、124、133、223',
                        choose: '全选',
                        bonus: 16,
                        probability: '1/14.4'
                    },
                    {
                        method: '和值8',
                        number: '116、125、134、224、233',
                        choose: '全选',
                        bonus: 12,
                        probability: '1/10.29'
                    },
                    {
                        method: '和值9',
                        number: '126、135、144、225、234、333',
                        choose: '全选',
                        bonus: 10,
                        probability: '1/8.64'
                    },
                    {
                        method: '和值10',
                        number: '136、145、226、235、244、334',
                        choose: '全选',
                        bonus: 9,
                        probability: '1/8'
                    },
                    {
                        method: '和值11',
                        number: '146、155、236、245、335、344',
                        choose: '全选',
                        bonus: 9,
                        probability: '1/8'
                    },
                    {
                        method: '和值12',
                        number: '156、246、255、336、345、444',
                        choose: '全选',
                        bonus: 10,
                        probability: '1/8.64'
                    },
                    {
                        method: '和值13',
                        number: '166、256、346、355、445',
                        choose: '全选',
                        bonus: 12,
                        probability: '1/10.29'
                    },
                    {
                        method: '和值14',
                        number: '266、356、446、455',
                        choose: '全选',
                        bonus: 16,
                        probability: '1/14.4'
                    },
                    {
                        method: '和值15',
                        number: '366、456、555',
                        choose: '全选',
                        bonus: 25,
                        probability: '1/21.6'
                    },
                    {
                        method: '和值16',
                        number: '466、556',
                        choose: '全选',
                        bonus: 40,
                        probability: '1/36'
                    },
                    {
                        method: '和值17',
                        number: '566',
                        choose: '全选',
                        bonus: 80,
                        probability: '1/72'
                    },
                    {
                        method: '三同号',
                        number: '111、222、333、444、555、666',
                        choose: '通选',
                        bonus: 40,
                        probability: '1/36',
                        isRowSpan: true
                    },
                    {
                        method: '三同号',
                        number: '111、222、333、444、555、666',
                        choose: '单选',
                        bonus: 240,
                        probability: '1/216',
                        jumpSpan: true
                    },
                    {
                        method: '二同号',
                        number: '11、22、33、44、55、66',
                        choose: '复选',
                        bonus: 15,
                        probability: '1/13.5',
                        isRowSpan: true
                    },
                    {
                        method: '二同号',
                        number: '11、22、33、44、55、66',
                        choose: '单选',
                        bonus: 80,
                        probability: '1/72',
                        jumpSpan: true
                    },
                    {
                        method: '三不同号',
                        number: '123、124、125、126、134、135、136、145、146、156、234、235、236、245、246、256、345、346、356、456',
                        choose: '单选',
                        bonus: 40,
                        probability: '1/36'
                    },
                    {
                        method: '二不同号',
                        number: '12*、13*、14*、15*、16*、23*、24*、25*、26*、34*、35*、36*、45*、46*、56*',
                        choose: '单选',
                        bonus: 8,
                        probability: '1/7.2'
                    },
                    {
                        method: '三连号通选',
                        number: '123、234、345、456',
                        choose: '全选',
                        bonus: 9,
                        probability: '1/9'
                    }
                ]
            },
            'kl10': {
                header: ['玩法', '投注', '中奖', '单注奖金（元）', '中奖概率'],
                content: [
                    {
                        method: '选一数投',
                        betting: '指从01至18中任意选择1个数字号码，对开奖号码中按开奖顺序出现的第一个位置的投注。',
                        winning: '投注号码与开奖号码中按开奖顺序出现的第一个位置数字号码相符，即中奖。',
                        bonus: 25,
                        probability: '1/20'
                    },
                    {
                        method: '选一红投',
                        betting: '指从19和20两个红色号码中任意选择1个红色号码，对开奖号码中按开奖顺序出现的第一个位置的投注。',
                        winning: '投注号码与开奖号码中按开奖顺序出现的第一个位置为红色号码，即中奖。',
                        bonus: 5,
                        probability: '1/10'
                    },
                    {
                        method: '选二任选',
                        betting: '指从01至20中任意选择2个号码对开奖号码中任意2个位置的投注。',
                        winning: '投注号码与开奖号码中任意2个位置的号码相符，即中奖。',
                        bonus: 8,
                        probability: '1/6.8'
                    },
                    {
                        method: '选二连组',
                        betting: '指从01至20中任意选择2个号码对开奖号码中按开奖顺序出现的2个连续位置的投注。',
                        winning: '投注号码与开奖号码中按开奖顺序出现的2个连续位置的号码相符（顺序不限），即中奖。',
                        bonus: 31,
                        probability: '1/27'
                    },
                    {
                        method: '选三任选',
                        betting: '指从01至20中任意选择3个号码对开奖号码中任意3个位置的投注。',
                        winning: '投注号码与开奖号码中任意3个位置的号码相符，即中奖。',
                        bonus: 24,
                        probability: '1/20'
                    },
                    {
                        method: '选三前组',
                        betting: '指从01至20中任意选择3个号码对开奖号码中按开奖顺序出现的前3个连续位置的投注。',
                        winning: '投注号码与开奖号码中按开奖顺序出现的前3个位置的号码相符（顺序不限），即中奖。',
                        bonus: 1300,
                        probability: '1/1140'
                    },
                    {
                        method: '选三前直',
                        betting: '指从01至20中任意选择3个号码对开奖号码中按开奖顺序出现的前3个连续位置按位相符的投注。',
                        winning: '投注号码与开奖号码中按开奖顺序出现的前3个位置的号码按位相符，即中奖。',
                        bonus: 8000,
                        probability: '1/6840'
                    },
                    {
                        method: '选四任选',
                        betting: '指从01至20中任意选择4个号码，对开奖号码中任意4个位置的投注。',
                        winning: '投注号码与开奖号码中任意4个位置的号码相符，即中奖。',
                        bonus: 80,
                        probability: '1/69'
                    },
                    {
                        method: '选五任选',
                        betting: '指从01至20中任意选择5个号码，对开奖号码中任意5个位置的投注。',
                        winning: '投注号码与开奖号码中任意5个位置的号码相符，即中奖。',
                        bonus: 320,
                        probability: '1/277'
                    }
                ]
            },
            'ssc': {
                header: ['奖级设置', '中奖条件', '中奖金额（元）', '投注方式'],
                content: [
                    {
                        level: '五星',
                        condition: '5位全中，如46878',
                        bonus: 100000,
                        singleChoose: '即单注，同排列3或3D的直选单式票一样，如购买46878',
                        combinationChoose: '同排列3或3D的直选复式票一样，如购买 万位：046 千位：967 百位：287 十位：789 个位：08 此复式投注共计：324元。投注额=每位所选号个数相乘再×2',
                        duplexChoose: '复式五星，购买法如：4+6+8+7+8 ，该票共8元，由以下4注购成46878（五星）、878（三星）、78（二星）、8（一星）'
                    },
                    {
                        level: '三星',
                        condition: '中后三位（百、十、个），如878',
                        bonus: 1000,
                        singleChoose: '如购买878',
                        combinationChoose: '如购买 百位：287 十位：789 个位：08 此复式投注共计：36元',
                        duplexChoose: '如8+7+8 该票共6元，由以下3注购成878（三星）、78（二星）、8（一星）'
                    },
                    {
                        level: '二星',
                        condition: '中后两位（十、个）， 如78',
                        bonus: 100,
                        singleChoose: '如购买78',
                        combinationChoose: '如购买 十位：789 个位：08 此复式投注共计：12元',
                        duplexChoose: '如7+8 该票共4元，由以下2注购成78（二星）、8（一星）'
                    },
                    {
                        level: '一星',
                        condition: '中最后一位（个）， 如8',
                        bonus: 10,
                        singleChoose: '如购买8',
                        combinationChoose: '如购买 个位：08 此复式投注共计：4元',
                        duplexChoose: '无（就是单选）'
                    }
                ]
            },
            'gxkl10' : {
                header: ['玩法', '中奖概率', '奖金（元）'],
                content: [
                    {
                        method: '直选好运特',
                        probability: '1/21',
                        bonus: '20'
                    },
                    {
                        method: '直选好运一',
                        probability: '1/4.2',
                        bonus: '4'
                    },
                    {
                        method: '直选好运二',
                        probability: '1/21',
                        bonus: '20'
                    },
                    {
                        method: '直选好运三',
                        probability: '1/133',
                        bonus: '120'
                    },
                    {
                        method: '直选好运四',
                        probability: '1/1197',
                        bonus: '1120'
                    },
                    {
                        method: '直选好运五',
                        probability: '1/20349',
                        bonus: '20000'
                    },
                    {
                        method: '通选三中三',
                        probability: '1/133',
                        bonus: '50'
                    },
                    {
                        method: '通选三中二',
                        probability: '1/44',
                        bonus: '5'
                    },
                    {
                        method: '通选四中四',
                        probability: '1/1197',
                        bonus: '500'
                    },
                    {
                        method: '通选四中三',
                        probability: '1/399',
                        bonus: '5'
                    },
                    {
                        method: '通选四中二',
                        probability: '1/199',
                        bonus: '2'
                    },
                    {
                        method: '通选五中五',
                        probability: '1/20349',
                        bonus: '5000'
                    },
                    {
                        method: '通选五中四',
                        probability: '1/4069',
                        bonus: '100'
                    },
                    {
                        method: '通选五中三',
                        probability: '1/2034',
                        bonus: '5'
                    }
                ]
            }
        },

        /***************************** 数字彩导出Excel头部数据 ************************ */
        digitHeadth: {
            'ssq': ['开奖日期', '期号', '红1', '红2', '红3', '红4', '红5', '红6', '蓝球'],
            'pl3': ['开奖日期', '期号', '百位', '十位', '个位'],
            'pl5': ['开奖日期', '期号', '万位', '千位', '百位', '十位', '个位'],
            'qxc': ['开奖日期', '期号', '第一球', '第二球', '第三球', '第四球', '第五球', '第六球', '第七球'],
            'qlc': ['开奖日期', '期号', '第一球', '第二球', '第三球', '第四球', '第五球', '第六球', '第七球', '特码'],
            'fc3d': ['开奖日期', '期号', '百位', '十位', '个位'],
            'dlt': ['开奖日期', '期号', '红1', '红2', '红3', '红4', '红5', '蓝1', '蓝2']
        },



        /** ======================  奖项划分  ======================*/
        lotteryAwardGrade: [

            /** ======================  数字彩  ======================*/
            /** 双色球 */
            {
                "lotterycode": "ssq",
                "award": [{
                    "title": "一等奖",
                    "condition": "中6+1",
                    "amount": 0
                },
                    {
                        "title": "二等奖",
                        "condition": "中6+0",
                        "amount": 0
                    },
                    {
                        "title": "三等奖",
                        "condition": "中5+1",
                        "amount": 3000
                    },
                    {
                        "title": "四等奖",
                        "condition": "中5+0/4+1",
                        "amount": 200
                    },
                    {
                        "title": "五等奖",
                        "condition": "中4+0/3+1",
                        "amount": 10
                    },
                    {
                        "title": "六等奖",
                        "condition": "中2+1/1+1/0+1",
                        "amount": 5
                    },
                    {
                        "title": "幸运二等奖",
                        "condition": "",
                        "amount": 0
                    }
                ]
            },

            /** 大乐透*/
            {
                "lotterycode": "dlt",
                "award": [{
                    "title": "一等奖",
                    "condition": "中5+2",
                    "amount": 0
                },
                    {
                        "title": "二等奖",
                        "condition": "中5+1",
                        "amount": 0
                    },
                    {
                        "title": "三等奖",
                        "condition": "中5+0/4+2",
                        "amount": 0
                    },
                    {
                        "title": "四等奖",
                        "condition": "中4+1/3+2",
                        "amount": 200
                    },
                    {
                        "title": "五等奖",
                        "condition": "中4+0/3+1/2+2",
                        "amount": 10
                    },
                    {
                        "title": "六等奖",
                        "condition": "中3+0/1+2/2+1/0+2",
                        "amount": 5
                    }
                ]
            },

            /** 七星彩*/
            {
                "lotterycode": "qxc",
                "award": [{
                    "title": "一等奖",
                    "condition": "与奖号按位相符",
                    "amount": 0
                },
                    {
                        "title": "二等奖",
                        "condition": "与奖号同位置连续六位号码相同",
                        "amount": 0
                    },
                    {
                        "title": "三等奖",
                        "condition": "与奖号同位置连续五位号码相同",
                        "amount": 1800
                    },
                    {
                        "title": "四等奖",
                        "condition": "与奖号同位置连续四位号码相同",
                        "amount": 300
                    },
                    {
                        "title": "五等奖",
                        "condition": "与奖号同位置连续三位号码相同",
                        "amount": 20
                    },
                    {
                        "title": "六等奖",
                        "condition": "与奖号同位置连续两位位号码相同",
                        "amount": 5
                    }
                ]
            },

            /** 七乐彩*/
            {
                "lotterycode": "qlc",
                "award": [{
                    "title": "一等奖",
                    "condition": "中7+0",
                    "amount": 0
                },
                    {
                        "title": "二等奖",
                        "condition": "中6+1",
                        "amount": 0
                    },
                    {
                        "title": "三等奖",
                        "condition": "中6+0",
                        "amount": 0
                    },
                    {
                        "title": "四等奖",
                        "condition": "中5+1",
                        "amount": 200
                    },
                    {
                        "title": "五等奖",
                        "condition": "中5+0",
                        "amount": 50
                    },
                    {
                        "title": "六等奖",
                        "condition": "中4+1",
                        "amount": 10
                    },
                    {
                        "title": "七等奖",
                        "condition": "中4+0",
                        "amount": 5
                    }
                ]
            },

            /** 福彩3d*/
            {
                "lotterycode": "fc3d",
                "award": [{
                    "title": "直选",
                    "condition": "与奖号按位相符",
                    "amount": 1040
                },
                    {
                        "title": "组三",
                        "condition": "与奖号任意两位号码相同,顺序不限",
                        "amount": 346
                    },
                    {
                        "title": "组六",
                        "condition": "与奖号相同,顺序不限",
                        "amount": 173
                    }
                ]
            },

            /** 排列3*/
            {
                "lotterycode": "pl3",
                "award": [{
                    "title": "直选",
                    "condition": "与奖号按位相符",
                    "amount": 1040
                },
                    {
                        "title": "组三",
                        "condition": "与奖号任意两位号码相同,顺序不限",
                        "amount": 346
                    },
                    {
                        "title": "组六",
                        "condition": "与奖号相同,顺序不限",
                        "amount": 173
                    }
                ]
            },

            /** 排列5*/
            {
                "lotterycode": "pl5",
                "award": [{
                    "title": "一等奖",
                    "condition": "与奖号全部相同且顺序一致",
                    "amount": 100000
                }]
            },


            /** ======================  地方彩  ======================*/
            /** 江苏七位数*/

            {
                "lotterycode": "js7ws",
                "award": [{
                    "title": "特等奖",
                    "condition": "与奖号全部相同且排列一致",
                    "amount": 0,
                    amountinfo: "总奖金减去固定奖总额后的15%"
                },
                    {
                        "title": "一等奖",
                        "condition": "与奖号同位置连续六位号码相同",
                        "amount": 0,
                        amountinfo: "总奖金减去固定奖总额后的15%"
                    },
                    {
                        "title": "二等奖",
                        "condition": "与奖号同位置连续五位号码相同",
                        "amount": 0,
                        amountinfo: "总奖金减去固定奖总额后的10%"
                    },
                    {
                        "title": "三等奖",
                        "condition": "与奖号同位置连续四位号码相同",
                        "amount": 300
                    },
                    {
                        "title": "四等奖",
                        "condition": "与奖号同位置连续三位号码相同",
                        "amount": 20
                    },
                    {
                        "title": "五等奖",
                        "condition": "与奖号同位置连续二位号码相同",
                        "amount": 5
                    }
                ]
            },

            /** 福建体彩31选7*/
            {
                "lotterycode": "fj31x7",
                "award": [{
                    "title": "特等奖",
                    "condition": "与奖号全部相同,且顺序不限",
                    "amount": 0,
                    amountinfo: "浮动奖金的 60%+前期未中的特、一、二等奖奖金，按中奖注数均分"
                },
                    {
                        "title": "一等奖",
                        "condition": "与基本奖号任六位号码相同,且特码相同",
                        "amount": 0,
                        amountinfo: "奖金额是当期高奖等总奖金的15%"
                    },
                    {
                        "title": "二等奖",
                        "condition": "与基本奖号任六位号码相同",
                        "amount": 0,
                        amountinfo: "奖金额是当期高奖等总奖金的25%"
                    },
                    {
                        "title": "三等奖",
                        "condition": "与基本奖号任五位号码相同,且特码相同",
                        "amount": 100
                    },
                    {
                        "title": "四等奖",
                        "condition": "与基本奖号任五位号码相同",
                        "amount": 50
                    },
                    {
                        "title": "五等奖",
                        "condition": "与基本奖号任四位号码相同,且特码相同",
                        "amount": 20
                    },
                    {
                        "title": "六等奖",
                        "condition": "与基本奖号任四位号码相同",
                        "amount": 10
                    }
                ]
            },

            /** 福建体彩22选5*/
            {
                "lotterycode": "fj22x5",
                "award": [{
                    "title": "特等奖",
                    "condition": "选5中5",
                    "amount": 0,
                    amountinfo: "浮动奖金的 100%+前期未中出的特等奖奖金"
                },
                    {
                        "title": "一等奖",
                        "condition": "选5中4",
                        "amount": 50
                    },
                    {
                        "title": "二等奖",
                        "condition": "选5中3",
                        "amount": 6
                    }
                ]
            },

            /** 福建体彩36选7*/
            {
                "lotterycode": "fj36x7",
                "award": [{
                    "title": "幸运奖",
                    "condition": "选中全部7个正选号与特别号全部相同",
                    "amount": 0,
                    amountinfo: "500 万元 + 其它奖项"
                },
                    {
                        "title": "特等奖",
                        "condition": "选中全部7个正选号",
                        "amount": 0,
                        amountinfo: "活动奖的 70% ，再加上前期末被中出的奖金总额"
                    },
                    {
                        "title": "一等奖",
                        "condition": "选中其中6个正选号及特别号",
                        "amount": 0,
                        amountinfo: "当期奖金额减去固定奖总额后的16%"
                    }, {
                        "title": "二等奖",
                        "condition": "选中其中6个正选号",
                        "amount": 0,
                        amountinfo: "当期奖金额减去固定奖总额后的14%"
                    },
                    {
                        "title": "三等奖",
                        "condition": "选中其中5个正选号及特别号",
                        "amount": 500
                    },
                    {
                        "title": "四等奖",
                        "condition": "选中其中5个正选号",
                        "amount": 50
                    },
                    {
                        "title": "五等奖",
                        "condition": "选中其中4个正选号及特别号",
                        "amount": 20
                    },
                    {
                        "title": "六等奖",
                        "condition": "选中其中4个正选号或3个正选号及特别号",
                        "amount": 6
                    }
                ]
            },

            {
                "lotterycode": "hd15x5",
                "award": [{
                    "title": "特别奖",
                    "condition": "与五个开奖号码全部相同,且连续四位相同",
                    "amount": 0,
                    amountinfo: "高等奖奖金的10%与奖池奖金之和除以中奖注数"
                },
                    {
                        "title": "一等奖",
                        "condition": "与五个开奖号码全部相同,若有特别奖则兼中",
                        "amount": 0,
                        amountinfo: "高等奖奖金的90%除以中奖注数"
                    }, {
                        "title": "二等奖",
                        "condition": "与开奖号码任四位相同",
                        "amount": 10
                    }
                ]
            },
            /** 东方6+1*/
            {
                "lotterycode": "df6j1",
                "award": [{
                    "title": "一等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "高等奖奖金的80%与奖池奖金之和除以中奖注数"
                }, {
                    "title": "二等奖",
                    "condition": "中6+0",
                    "amount": 0,
                    amountinfo: "高等奖奖金的20％除以中奖注数"
                }, {
                    "title": "三等奖",
                    "condition": "中5+1",
                    "amount": 10000
                }, {
                    "title": "四等奖",
                    "condition": "中5+0/4+1",
                    "amount": 500
                }, {
                    "title": "五等奖",
                    "condition": "中4+0/3+1",
                    "amount": 50
                }, {
                    "title": "六等奖",
                    "condition": "中3+0/2+1/1+1",
                    "amount": 5
                }]
            },
            /** 上海天天彩选4*/
            {
                "lotterycode": "shttcx4",
                "award": [{
                    "title": "直选投注",
                    "condition": "与奖号按位相符",
                    "amount": 10000,
                    amountinfo: "设奖奖金为中奖投注额的5000倍，单注中奖奖金为10000元"
                }, {
                    "title": "组选4",
                    "condition": "与奖号4个数字中有3个相同",
                    "amount": 2500,
                    amountinfo: "设奖奖金为中奖投注额的1250倍，单注中奖奖金为2500元"
                }, {
                    "title": "组选6",
                    "condition": "与奖号4个数字两两相同",
                    "amount": 1666,
                    amountinfo: "设奖奖金为中奖投注额的833倍，单注中奖奖金为1666元"
                }, {
                    "title": "组选12",
                    "condition": "与奖号4个数字中有2个相同",
                    "amount": 833,
                    amountinfo: "设奖奖金为中奖投注额的416.5倍，单注中奖奖金为833元"
                }, {
                    "title": "组选24",
                    "condition": "与奖号4个数字各不相同",
                    "amount": 416,
                    amountinfo: "设奖奖金为中奖投注额的208倍，单注中奖奖金为416元"
                }]
            },
            /** 浙江体彩6+1*/
            {
                "lotterycode": "zj6j1",
                "award": [{
                    "title": "特等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "当期总奖金减去固定奖总额后的70％，加上前一期未中出的特、一、二等奖奖金总额"
                }, {
                    "title": "一等奖",
                    "condition": "中6",
                    "amount": 0,
                    amountinfo: "当期总奖金减去固定奖总额后的10％"
                }, {
                    "title": "二等奖",
                    "condition": "连续中5",
                    "amount": 0,
                    amountinfo: "当期总奖金减去固定奖总额后的20％"
                }, {
                    "title": "三等奖",
                    "condition": "连续中4",
                    "amount": 300
                }, {
                    "title": "四等奖",
                    "condition": "连续中3",
                    "amount": 20
                }, {
                    "title": "五等奖",
                    "condition": "连续中2",
                    "amount": 5
                }]
            },
            /** 浙江20选5*/
            {
                "lotterycode": "zj20x5",
                "award": [{
                    "title": "一等奖",
                    "condition": "选5中5",
                    "amount": 0,
                    amountinfo: "为总奖金减去固定奖总额后的100％，及前期未中出的一等奖奖金总额"
                }, {
                    "title": "二等奖",
                    "condition": "选5中4",
                    "amount": 50
                }, {
                    "title": "三等奖",
                    "condition": "选5中3",
                    "amount": 5
                }]
            },
            /** 安徽22选5*/
            {
                "lotterycode": "ah25x5",
                "award": [{
                    "title": "一等奖",
                    "condition": "与奖号5个基本号码全部相同",
                    "amount": 0,
                    amountinfo: "期总奖金减去当期派发固定奖金后的余额"
                }, {
                    "title": "二等奖",
                    "condition": "与奖号任4个基本号码全部相同",
                    "amount": 100
                }, {
                    "title": "三等奖",
                    "condition": "与奖号任3个基本号码全部相同",
                    "amount": 10
                }]
            },
            /** 齐鲁风采23选5*/
            {
                "lotterycode": "qlfc23x5",
                "award": [{
                    "title": "一等奖",
                    "condition": "与奖号5个基本号码全部相同",
                    "amount": 0,
                    amountinfo: "期总奖金减去当期派发固定奖金后的余额"
                }, {
                    "title": "二等奖",
                    "condition": "与奖号任4个基本号码全部相同",
                    "amount": 100
                }, {
                    "title": "三等奖",
                    "condition": "与奖号任3个基本号码全部相同",
                    "amount": 10
                }]
            },
            /** 好彩1*/
            {
                "lotterycode": "hc1",
                "award": [{
                    "title": "数字",
                    "condition": "投注的1个号码与当期摇出的特别号码相同即中奖",
                    "amount": 46
                }, {
                    "title": "生肖",
                    "condition": "投注的生肖与当期摇出的特别号码对应的生肖相同即中奖",
                    "amount": 15
                }, {
                    "title": "季节",
                    "condition": "投注的季节与当期摇出的特别号码对应的季节相同即中奖",
                    "amount": 5
                }, {
                    "title": "方位",
                    "condition": "投注的方位与当期摇出的特别号码对应的方位相同即中奖",
                    "amount": 5
                }]
            },
            /** 南粤风采36选7*/
            {
                "lotterycode": "nyfc36x7",
                "award": [{
                    "title": "一等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的70%"
                }, {
                    "title": "二等奖",
                    "condition": "中6+0",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的20%"
                }, {
                    "title": "三等奖",
                    "condition": "中5+1",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的10%"
                }, {
                    "title": "四等奖",
                    "condition": "中5+0",
                    "amount": 500
                }, {
                    "title": "五等奖",
                    "condition": "中4+1",
                    "amount": 100
                }, {
                    "title": "六等奖",
                    "condition": "中4+0/3+1",
                    "amount": 10
                }]
            },
            /** 广东福彩26选5*/
            {
                "lotterycode": "gd26x5",
                "award": [{
                    "title": "一等奖",
                    "condition": "与奖号5个号码全部相同",
                    "amount": 0,
                    amountinfo: "（当期总奖金减去二等奖总奖金）／中奖注数"
                }, {
                    "title": "二等奖",
                    "condition": "与奖号4个号码相同",
                    "amount": 50
                }]
            },
            /** 广西快乐双彩24选7*/
            {
                "lotterycode": "gxklsc24x7",
                "award": [{
                    "title": "一等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "奖金总额为当期浮动奖奖金的80%与一等奖奖池中积累的奖金之和"
                }, {
                    "title": "二等奖",
                    "condition": "中6+0",
                    "amount": 0,
                    amountinfo: "奖金总额为当期浮动奖奖金的20%与二等奖奖池中积累的奖金之和"
                }, {
                    "title": "三等奖",
                    "condition": "中5+1",
                    "amount": 200
                }, {
                    "title": "四等奖",
                    "condition": "中5+0",
                    "amount": 50
                }, {
                    "title": "五等奖",
                    "condition": "中4+1",
                    "amount": 10
                }, {
                    "title": "六等奖",
                    "condition": "中4+0/3+1",
                    "amount": 4
                }]
            },
            /** 海南4+1*/
            {
                "lotterycode": "hn4j1",
                "award": [{
                    "title": "4+1",
                    "condition": "与奖号4个正选号码及1个特别号码按位相同",
                    "amount": 25588
                }, {
                    "title": "定位4",
                    "condition": "与奖号4个正选号码按位相同",
                    "amount": 8529
                }, {
                    "title": "定位3直选",
                    "condition": "与奖号的3个正选号码按位相同",
                    "amount": 947
                }, {
                    "title": "定3组选3",
                    "condition": "与奖号相同，且奖号有两位号码相同",
                    "amount": 315
                }, {
                    "title": "定3组选6",
                    "condition": "与奖号相同，且奖号三位号码不相同",
                    "amount": 157
                }, {
                    "title": "定位2直选",
                    "condition": "与奖号的2个正选号码按位相同",
                    "amount": 105
                }, {
                    "title": "定位2组选",
                    "condition": "与奖号相同，且奖号有两位号码相同",
                    "amount": 52
                }, {
                    "title": "定位1",
                    "condition": "与奖号4个正选号码中的1个按位相同",
                    "amount": 12
                }]
            },
            /** 深圳风采*/
            {
                "lotterycode": "szfc35x7",
                "award": [{
                    "title": "一等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的70%"
                }, {
                    "title": "二等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的15%"
                }, {
                    "title": "三等奖",
                    "condition": "中6+0",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的15%"
                }, {
                    "title": "四等奖",
                    "condition": "中5+1",
                    "amount": 300
                }, {
                    "title": "五等奖",
                    "condition": "中5+0",
                    "amount": 50
                }, {
                    "title": "六等奖",
                    "condition": "中4+1",
                    "amount": 20
                }, {
                    "title": "七等奖",
                    "condition": "中4+0",
                    "amount": 10
                }, {
                    "title": "八等奖",
                    "condition": "中3+1",
                    "amount": 5
                }]
            },
            /** 新疆35选7*/
            {
                "lotterycode": "xj35x7",
                "award": [{
                    "title": "一等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的85%"
                }, {
                    "title": "二等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的7%"
                }, {
                    "title": "三等奖",
                    "condition": "中6+0",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的8%"
                }, {
                    "title": "四等奖",
                    "condition": "中5+1",
                    "amount": 500
                }, {
                    "title": "五等奖",
                    "condition": "中5+0",
                    "amount": 50
                }, {
                    "title": "六等奖",
                    "condition": "中4+1",
                    "amount": 5
                }, {
                    "title": "七等奖",
                    "condition": "中3+1",
                    "amount": 1
                }]
            },
            /** 新疆18选7*/
            {
                "lotterycode": "xj18x7",
                "award": [{
                    "title": "一等奖",
                    "condition": "与奖号7个号码全部相同",
                    "amount": 0,
                    amountinfo: "总奖金减去固定奖总额后的100%"
                }, {
                    "title": "二等奖",
                    "condition": "与奖号6个号码相同",
                    "amount": 200
                }, {
                    "title": "三等奖",
                    "condition": "与奖号5个号码相同",
                    "amount": 5
                }]
            },
            /** 新疆25选7*/
            {
                "lotterycode": "xj25x7",
                "award": [{
                    "title": "特等奖",
                    "condition": "中7+1",
                    "amount": 0,
                    amountinfo: "当期返奖奖金减去低奖等奖金后的70%"
                }, {
                    "title": "一等奖",
                    "condition": "中7+0",
                    "amount": 0,
                    amountinfo: "当期返奖奖金减去低奖等奖金后的30%"
                }, {
                    "title": "二等奖",
                    "condition": "中6+1",
                    "amount": 1000
                }, {
                    "title": "三等奖",
                    "condition": "中6+0",
                    "amount": 200
                }, {
                    "title": "四等奖",
                    "condition": "中5+1",
                    "amount": 100
                }, {
                    "title": "五等奖",
                    "condition": "中5+0",
                    "amount": 10
                }, {
                    "title": "六等奖",
                    "condition": "中4+0",
                    "amount": 3
                }, {
                    "title": "七等奖",
                    "condition": "中3+0",
                    "amount": 1
                }]
            },
            /** 云贵川22选5*/
            {
                "lotterycode": "ygcttl",
                "award": [{
                    "title": "一等奖",
                    "condition": "选5中5",
                    "amount": 0,
                    amountinfo: "奖金总额为当期高奖等奖金+奖池奖金"
                }, {
                    "title": "二等奖",
                    "condition": "选5中4",
                    "amount": 50
                }, {
                    "title": "三等奖",
                    "condition": "选5中3",
                    "amount": 5
                }]
            },
            /** 中原风采22选5*/
            {
                "lotterycode": "zyfc22x5",
                "award": [{
                    "title": "一等奖",
                    "condition": "选5中5",
                    "amount": 0,
                    amountinfo: "奖金总额为当期高奖等奖金+奖池奖金"
                }, {
                    "title": "二等奖",
                    "condition": "选5中4",
                    "amount": 50
                }, {
                    "title": "三等奖",
                    "condition": "选5中3",
                    "amount": 5
                }]
            },
            /** 楚天风采22选5*/
            {
                "lotterycode": "ctfc22x5",
                "award": [{
                    "title": "一等奖",
                    "condition": "选5中5",
                    "amount": 0,
                    amountinfo: "奖金总额为当期高奖等奖金"
                }, {
                    "title": "二等奖",
                    "condition": "选5中4",
                    "amount": 50
                }, {
                    "title": "三等奖",
                    "condition": "选5中3",
                    "amount": 6
                }]
            },
            /** 黑龙江22选5*/
            {
                "lotterycode": "hlj22x5",
                "award": [{
                    "title": "一等奖",
                    "condition": "选5中5",
                    "amount": 0,
                    amountinfo: " 总奖金减去固定奖总额后的余额"
                }, {
                    "title": "二等奖",
                    "condition": "选5中4",
                    "amount": 50
                }, {
                    "title": "三等奖",
                    "condition": "选5中3",
                    "amount": 5
                }]
            },
            /** 龙江风采P62*/
            {
                "lotterycode": "hljp62",
                "award": [{
                    "title": "一等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "当期总奖金减去低奖等中出奖金后的余额的90%"
                }, {
                    "title": "二等奖",
                    "condition": "中6+0",
                    "amount": 0,
                    amountinfo: "当期总奖金减去低奖等中出奖金后的余额的10%"
                }, {
                    "title": "三等奖",
                    "condition": "连续中5+0",
                    "amount": 2000
                }, {
                    "title": "四等奖",
                    "condition": "连续中4+0",
                    "amount": 200
                }, {
                    "title": "五等奖",
                    "condition": "连续中3+0",
                    "amount": 20
                }, {
                    "title": "六等奖",
                    "condition": "连续中2+0",
                    "amount": 5
                }]
            },
            /** 黑龙江36选7*/
            {
                "lotterycode": "hlj36x7",
                "award": [{
                    "title": "一等奖",
                    "condition": "中7+0",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的75%"
                }, {
                    "title": "二等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的10%"
                }, {
                    "title": "三等奖",
                    "condition": "中6+0",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的15%"
                }, {
                    "title": "四等奖",
                    "condition": "中5+1",
                    "amount": 500
                }, {
                    "title": "五等奖",
                    "condition": "中5+0",
                    "amount": 50
                }, {
                    "title": "六等奖",
                    "condition": "中4+1",
                    "amount": 20
                }, {
                    "title": "七等奖",
                    "condition": "中4+0",
                    "amount": 10
                }, {
                    "title": "八等奖",
                    "condition": "中3+1",
                    "amount": 5
                }]
            },
            /** 黑龙江体彩6+1*/
            {
                "lotterycode": "hljtc6j1",
                "award": [{
                    "title": "特等奖",
                    "condition": "中6+1",
                    "amount": 0,
                    amountinfo: "高等奖奖金的80%"
                }, {
                    "title": "一等奖",
                    "condition": "中6+0",
                    "amount": 0,
                    amountinfo: "高等奖奖金的10%"
                }, {
                    "title": "二等奖",
                    "condition": "连续中5+0",
                    "amount": 0,
                    amountinfo: "高等奖奖金的10%"
                }, {
                    "title": "三等奖",
                    "condition": "连续中4+0",
                    "amount": 300
                }, {
                    "title": "四等奖",
                    "condition": "连续中3+0",
                    "amount": 20
                }, {
                    "title": "五等奖",
                    "condition": "连续中2+0",
                    "amount": 5
                }]
            },
            /** 辽宁35选7*/
            {
                "lotterycode": "ln35x7",
                "award": [{
                    "title": "一等奖",
                    "condition": "选7中7",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的80%"
                }, {
                    "title": "二等奖",
                    "condition": "选7中6+1",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的10%"
                }, {
                    "title": "三等奖",
                    "condition": "选7中6",
                    "amount": 0,
                    amountinfo: "奖金额是高奖等总奖金的10%"
                }, {
                    "title": "四等奖",
                    "condition": "选7中5+1",
                    "amount": 500
                }, {
                    "title": "五等奖",
                    "condition": "选7中5",
                    "amount": 50
                }, {
                    "title": "六等奖",
                    "condition": "选7中4+1",
                    "amount": 20
                }, {
                    "title": "七等奖",
                    "condition": "选7中4/3+1",
                    "amount": 5
                }]
            },
            /** 河北排列7*/
            {
                "lotterycode": "hbpl7",
                "award": [{
                    "title": "特等奖",
                    "condition": "连续中7",
                    "amount": 0,
                    amountinfo: "总奖金额减去低奖等固定奖额后的80%"
                }, {
                    "title": "一等奖",
                    "condition": "连续中6",
                    "amount": 0,
                    amountinfo: "总奖金额减去低奖等固定奖额后的10%"
                }, {
                    "title": "二等奖",
                    "condition": "连续中5",
                    "amount": 0,
                    amountinfo: "总奖金额减去低奖等固定奖额后的10%"
                }, {
                    "title": "三等奖",
                    "condition": "连续中4",
                    "amount": 300
                }, {
                    "title": "四等奖",
                    "condition": "连续中3",
                    "amount": 20
                }, {
                    "title": "五等奖",
                    "condition": "连续中2",
                    "amount": 5
                }]
            },
            /** 河北排列5*/
            {
                "lotterycode": "hbpl5",
                "award": [{
                    "title": "一等奖",
                    "condition": "连续中5",
                    "amount": 0,
                    amountinfo: "总奖金额减去低奖等固定奖额后按中奖注数均分"
                }, {
                    "title": "二等奖",
                    "condition": "连续中4",
                    "amount": 500
                }, {
                    "title": "三等奖",
                    "condition": "连续中3",
                    "amount": 30
                }, {
                    "title": "四等奖",
                    "condition": "连续中2",
                    "amount": 5
                }]
            },
            /** 河北好运2*/
            {
                "lotterycode": "hbhy2",
                "award": [{
                    "title": "好运2",
                    "condition": "所选2个号码与开奖号码5个号码中前2个相同",
                    "amount": 190
                }]
            },
            /** 河北好运3*/
            {
                "lotterycode": "hbhy3",
                "award": [{
                    "title": "好运3",
                    "condition": "所选3个号码与开奖号码5个号码中前3个相同",
                    "amount": 1140
                }]
            },
            /** 河北20选5*/
            {
                "lotterycode": "hb20x5",
                "award": [{
                    "title": "一等奖",
                    "condition": "选5中5",
                    "amount": 0,
                    amountinfo: "总奖金额减去低奖等固定奖额后按中奖注数均分"
                }, {
                    "title": "二等奖",
                    "condition": "选5中4",
                    "amount": 50
                }, {
                    "title": "三等奖",
                    "condition": "选5中3",
                    "amount": 5
                }]
            }
        ],

        /**************************** 追号计划推荐组数 *************************** */
        lotteryPlan : {
            group: {
                '1' : {
                    type: {
                        '1' : 2,
                        '2' : 2,
                        '3' : 3,
                        '4' : 10,
                        '5' : 10,
                        '6' : 8,
                        '7' : 4,
                        '8' : 2
                    },
                    money: {
                        '1' : 13,
                        '2' : 6,
                        '3' : 19,
                        '4' : 78,
                        '5' : 540,
                        '6' : 90,
                        '7' : 26,
                        '8' : 9
                    }
                },
                '2' : {
                    type: {
                        '2' : 2
                    },
                    money: {
                        '2' : 8
                    }
                },
                '3' : {
                    type: {
                        '2' : 2,
                        '3' : 3,
                        '4' : 10,
                        '5' : 10
                    },
                    money: {
                        '2' : 8,
                        '3' : 24,
                        '4' : 80,
                        '5' : 320
                    }
                },
                '4' : {
                    type: {
                        '1' : 3,
                        '2' : 5,
                        '3' : 15
                    },
                    money: {
                        '1' : 10,
                        '2' : 100,
                        '3' : 1000
                    }
                },
                '8' : { // 单独为gxkl10设置的特殊处理
                    type: {
                        '1' : 4,
                        '2' : 2,
                        '3' : 4
                    },
                    money: {
                        '1' : 20,
                        '2' : 4,
                        '3' : 20
                    }
                }
            }

        },

        lotteryPlanPeriod : {
            '1' : {
                '1' : [1,2,4,6,7,8],
                '2' : [1,2,3,4,5,6],
                '3' : [1,3,6,8,10,12],
                '4' : [1,3,6,8,10,14],
                '5' : [5,20,40,60,80,100],
                '6' : [1,5,10,13,15,20],
                '7' : [1,3,6,8,10,12],
                '8' : [1,3,5,6,7,9]
            },
            '2' : {
                '1' : [1,2,3,4,5,6],
                '2' : [1,2,4,6,7,8]
            },
            '3' : {
                '2' : [1,2,4,5,6,7],
                '3' : [1,4,6,10,12,15],
                '4' : [2,5,8,10,12,15],
                '5' : [5,15,30,40,50,60]
            },
            '4' : {
                '1' : [1,2,4,5,6,7],
                '2' : [5,15,20,25,30,40],
                '3' : [20,50,80,100,120,150]
            },
            '8' : { // 单独为gxkl10设置的特殊处理
                '1' : [1,4,6,8,10,12],
                '2' : [1,2,3,4,5,6],
                '3' : [1,4,6,8,10,12]
            }
        },

        // 华东15选5内容处理
        "hd15x5" : {
            '3' : 'sh15x5', //上海
            '16' : 'sd15x5', //山东
            '15' : 'jx15x5', //江西
            '13' : 'ah15x5', //安徽
            '11' : 'js15x5', //江苏
            '12' : 'zj15x5', //浙江
            '14' : 'fj15x5' //福建
        }

    }
}