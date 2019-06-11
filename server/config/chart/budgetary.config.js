/***********************************************************************************
 *
 *                           预选号码配置
 *
 ***********************************************************************************/
'use strict';
/**
 *   每个对象下有两个属性，一个属性是frontArea是前区预选，backArea是后区预选; more 可以重复（最大重复maxNumber）
 *   而在预选对象下也有两个属性，number属性是需要显示多少个球号，maxNumber属性是最大显示球数;
 */
module.exports = {

    "k3": {
        frontArea: {
            number: '1~6',
            maxNumber: 3,
            more:true
        }
    },
    "kl10": {
        frontArea: {
            number: '1~20',
            maxNumber: 8
        }
    },
    "gxkl10": {
        frontArea: {
            number: '1~21',
            maxNumber: 5
        }
    },
    "11x5": {
        frontArea: {
            number: '1~11',
            maxNumber: 5
        }
    },
    "ssc": {
        frontArea: {
            number: '0~9',
            maxNumber: 5,
            more:true
        }
    },
    "fc3d": {
        frontArea: {
            number: '0~9',
            maxNumber: 3,
            more:true
        }
    },
    "qxc": {
        frontArea: {
            number: '0~9',
            maxNumber: 7,
            more:true
        }
    },
    "qlc": {
        frontArea: {
            number: '1~30',
            maxNumber: 7
        }
    },
    "pl5": {
        frontArea: {
            number: '0~9',
            maxNumber: 5,
            more:true
        }
    },
    "dlt": {
        frontArea: {
            number: '1~35',
            maxNumber: 5
        },
        backArea: {
            number: '1~12',
            maxNumber: 2
        }
    },
    "ssq": {
        frontArea: {
            number: '1~33',
            maxNumber: 6
        },
        backArea: {
            number: '1~16',
            maxNumber: 1
        }
    }

}
