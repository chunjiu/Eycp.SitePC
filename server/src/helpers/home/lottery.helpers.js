module.exports = Template => {
    /**
     * 彩票大厅数字彩列表
     */
    Template.defaults.imports.lotteryDigitHallHistory = data => {
        let result=data.awardResult;
        if(!result) return '';
        let _tmp = result.split('|'),
            _red = _tmp[0].split(','),
            _blue = _tmp[1] ? _tmp[1].split(',') : [],
            _result = [];

    
         if("fc3d" == data.lotteryCode){
            if(_red.length>2){
                 // 红球
                _red.forEach(item => {
                    _result.push(`<span class="red">${item}</span>`);
                });
               
            }else{
                _result.push(`<span class="red">--</span><span class="red">--</span><span class="red">--</span>`);
            }

            if(_blue.length>0){
                _result.push(`<div class="testNumber">试机号:<i class="font-red">`+_blue.join(" ")+"</i></div>");
            }

        }else{
            // 红球
            _red.forEach(item => {
                _result.push(`<span class="red">${item}</span>`);
            });


            // 蓝球
            _blue.forEach(item => {
                _result.push(`<span class="blue">${item}</span>`);
            });
        }

        return _result.join('');

    }

    /**
     * 彩票大厅高频彩列表
     * @param {*} result 
     */
    Template.defaults.imports.lotteryHighHallHistory = (result, lotteryCode) => {
        if(!result) return '';
        let _tmp = result.split(','),
            _result = [];

        let _free = '';
        if(lotteryCode == 'bjkl8') {
            _tmp = result.split('|');
            _result.push(`<i>X${_tmp[1]}</i>`)
            _tmp = _tmp[0].split(',');
        }

        _tmp.forEach(item => {
            let _item = parseInt(item);
            _item = _item < 10 ? '0' + _item : _item;
            switch(lotteryCode) {
                case 'xync':
                case 'hnkl10':
                case 'bjpk10':
                    _result.push(`<span class="num${_item}"></span>`);
                    break;
                case 'bjkl8':
                    _result.push(`<span>${_item}</span>`);
                    break;
                default:
                    if(lotteryCode.includes('k3')) {
                        _result.push(`<span class="num${_item}"></span>`);
                    } else {
                        _result.push(`<span class="red">${item}</span>`);
                    }
                break;
            }
        });

        // 组装最后的内容
        switch(lotteryCode) {
            case 'xync':
                _result = `<td><div class="public-number-xync">${_result.join('')}<a href="/high/${lotteryCode}/detail" class="tab-touch">详情</a></div></td>`
                break;
            case 'hnkl10':
                _result = `<td><div class="public-number-zoology">${_result.join('')}<a href="/high/${lotteryCode}/detail" class="tab-touch">详情</a></div></td>`
                break;
            case 'bjpk10':
                _result = `<td><div class="public-number-pk10">${_result.join('')}<a href="/high/${lotteryCode}/detail" class="tab-touch">详情</a></div></td>`
                break;
            case 'bjkl8':
                _result = `<td><div class="public-number-kl8">${_result.join('')}<a href="/high/${lotteryCode}/detail" class="tab-touch">详情</a></div></td>`
                break;
            default:
                if(lotteryCode.includes('k3')) {
                    _result = `<td><div class="public-number-k3">${_result.join('')}<a href="/high/${lotteryCode}/detail" class="tab-touch">详情</a></div></td>`
                } else {
                    _result = `<td><div class="public-number-ball">${_result.join('')}<a href="/high/${lotteryCode}/detail" class="tab-touch">详情</a></div></td>`
                }
            break;
        }

        return _result;
    }
}