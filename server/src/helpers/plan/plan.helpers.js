module.exports = Template => {
    
    /**
     * 追号计划列表内容
     * @param {*} list 
     */
    Template.defaults.imports.planListContent = (list,code,type) => {
        let _result = [];
        let _tmpList = list.content.split('|');
        let _winGroup = list.winGroup ? list.winGroup.split(',') : [];

        _tmpList.forEach((item, idx) => {
            let _item = item.split(',').map(tmp => {
                let _tmp = parseInt(tmp);
                if((code.indexOf('k3')>=0 && 1!=type) || code.indexOf('ssc')>=0){
                    return _tmp > 9 ? _tmp :  _tmp;
                }
                else{
                    return _tmp > 9 ? _tmp : '0'+ _tmp;
                }
            });
            _item = _item.join(',');
            let _tmpIsWin = false;
            _winGroup.forEach(win => {
                if(list.state == 3 && win == (idx + 1)) {
                    _tmpIsWin = true;
                    _result.push(`<span><i class="font-red"}>【${_item.replace(/,/g,',')}】</i></span>`);
                }
            });

            if(!_tmpIsWin) {
                _result.push(`<span><i>【${_item.replace(/,/g,',')}】</i></span>`);
            }
            
        });

        return _result.join('');
    }

    /**
     * 追号计划列表内容
     * @param {*} list 
     */
    Template.defaults.imports.planDetailContent = (list,code,type) => {
        let _result = [];
        let _tmpList = list.content.split('|');
        let _winGroup = list.winGroup ? list.winGroup.split(',') : [];

        _tmpList.forEach((item, idx) => {
            let _item = item.split(',').map(tmp => {
                let _tmp = parseInt(tmp);
                if((code.indexOf('k3')>=0 && 1!=type) || code.indexOf('ssc')>=0){
                    return _tmp > 9 ? _tmp :  _tmp;
                }else{
                    return _tmp > 9 ? _tmp : '0'+ _tmp;
                }
            });
            _item = _item.join(',');
            let _tmpIsWin = false;
            _winGroup.forEach(win => {
                if(list.state == 3 && win == (idx + 1)) {
                    _tmpIsWin = true;
                    _result.push(`<span>【<i class="fon_red">${_item.replace(/,/g,',')}</i>】</span>`);
                }
            });

            if(!_tmpIsWin) {
                _result.push(`<span>【<i>${_item.replace(/,/g,',')}</i>】</span>`);
            }
        });

        return _result.join('');
    }

    /**
     * 获取类型名称
     * @param {*} type 
     * @param {*} groupId 
     */
    Template.defaults.imports.planType = (type, groupId, code) => {
        let _tmpType = {};
        if(!type || !groupId) {
            return  '';
        }

        groupId = groupId.toString();
        type = type.toString();
        switch(groupId) {
            case '1':
                _tmpType = {'1' : '前一','2' : '任二','3' : '任三','4' : '任四','5' : '任五','6' : '任六','7' : '任七','8' : '任八'}; 
            break;
            case '2':
                _tmpType = {'1' : '和值','2' : '二不同'}; 
            break;
            case '3':
                if(code == 'gxkl10') {
                    _tmpType = {'1' : '直特','2' : '直一','3' : '直二'}; 
                } else {
                    _tmpType = {'2' : '任二','3' : '任三','4' : '任四','5' : '任五'}; 
                }
            break;
            case '4':
                _tmpType = {'1' : '一星','2' : '二星','3' : '三星'}; 
            break;
        }

        return _tmpType[type]; 

    }

    /**
     * k3 和值
     * @param {*} result 
     */
    Template.defaults.imports.k3Sum = result => {
        if(!result) return '';
        let _resultArray = result.split(',');
        return _resultArray.reduce((a, b) => {
            return parseInt(a) + parseInt(b);
        })
    }
}