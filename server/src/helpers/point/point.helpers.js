module.exports = Template => {
    /**
     * 组装提点详情头部
     * @param {*} headerCount 
     * @param {*} groupId 
     */
    Template.defaults.imports.pointHeader = (headerCount, groupId) => {
        let _result = [];
        let _width = '';

        switch(groupId) {
            case 1:
                _width = '6%';
                break;
            case 2:
                _width = '11%';
                break;
            case 3:
                _width = '';
                break;
            case 4:
                _width = '9%';
                break;
        }
        let _resHeadText="";
        for(let i = 0; i < headerCount;i++) {
            if(4==groupId){
                _result.push(`<td width="${_width}">${i}</td>`);
            }else{
                if(1==groupId || 3 == groupId){
                    if(i<9){
                        _resHeadText = "0"+(i+1);
                    }else{
                        _resHeadText = i+1;
                    }
                     _result.push(`<td width="${_width}">${_resHeadText}</td>`);
                }else{
                    _result.push(`<td width="${_width}">${i + 1}</td>`);
                }
            }
        }

        return _result.join('');
    }

    /**
     * 上午提点列表
     * @param {*} result 
     */
    Template.defaults.imports.pointDaysConent = (result, groupId, lotteryCode) => {
        if(!result) return '';

        let _result = [],
            _color = {
                '1' : 'gray_bg',
                '2' : 'red_bg',
                '3' : 'green_bg'
            },
            _sum = [],
            _sumPeriod = 0;

        result.forEach(day => {
            let _tmpResult = day.content.split(','),
                _tmpRow = [];
            
            // 总期数
            _sumPeriod += day.periodCount;
            
            _tmpRow.push(`<td>${(new Date(day.day)).format('MM-dd')}</td>`);
            _tmpResult.forEach((item, index) => {
                let _tmp = item.split('|');
                if(typeof _sum[index] === 'undefined') {
                    _sum.push(0);
                }

                _sum[index] += parseInt(_tmp[1]);
                _tmpRow.push(`<td class="${_color[_tmp[0]]}">${_tmp[1]}</td>`)
            });
            _result.push(`<tr>${_tmpRow.join('')}</tr>`);
        });

        // 理论出现次数
        switch(groupId) {
            case 1:
                _sumPeriod = _sumPeriod * 5 / 11;
                break;
            case 2:
                _sumPeriod = _sumPeriod * 3 / 6;
                break;
            case 3:
                // 广西快乐十分比较特殊
                if(lotteryCode == 'gxkl10') {
                    _sumPeriod = _sumPeriod * 5 / 21;
                } else {
                    _sumPeriod = _sumPeriod * 8 / 20;
                }
                break;
            case 4:
                _sumPeriod = _sumPeriod * 5 / 10;
                break;
        }

        // 小数点后两位
        _sumPeriod = _sumPeriod.toFixed(0);

        // hot
        let _sumHot = (_sumPeriod * 1.05).toFixed(0);
        // cool
        let _sumCool = (_sumPeriod * 0.95).toFixed(0); 

        // 总出现次数
        let _tmpSum = [],
            _tmpSumPeriod = [];
        _tmpSum.push(`<td>总出现次数</td>`);
        _tmpSumPeriod.push(`<td ${groupId == 3 ? 'style="line-height: 14px"' : ''}>理论出现次数</td>`);
        _sum.forEach(item => {
            let _tmpColor = '1';
            if(item >= _sumHot) {
                _tmpColor = '2';
            } else if(item <= _sumCool) {
                _tmpColor = '3';
            }
            _tmpSum.push(`<td class="${_color[_tmpColor]}">${item}</td>`);
            _tmpSumPeriod.push(`<td>${_sumPeriod}</td>`);
        });
        _result.push(`<tr>${_tmpSum.join('')}</tr>`);

        // 理论出现次数
        _result.push(`<tr>${_tmpSumPeriod.join('')}</tr>`);

        return _result.join('');
    }

    /**
     * 下午提点
     * @param {*} result 
     */
    Template.defaults.imports.pointDetailContent = result => {

        if(!result) return '';

        let _result = [],
            _color = {
            '1' : 'gray_bg',
            '2' : 'red_bg',
            '3' : 'green_bg'
        }
        result.forEach((item, idx) => {
            let _content = item.content.split(',');
            let _row = [];
            _row.push(`<td>${item.name}</td>`)
            _content.forEach(num => {
                if(num.includes('|')) {
                    let _tmp = num.split('|');
                    _row.push(`<td class="${_color[_tmp[0]]}">${_tmp[1]}</td>`);
                } else {
                    _row.push(`<td>${num}</td>`);
                }
            });

            _result.push(`<tr>${_row.join('')}</tr>`);

        });

        return _result.join('');

    }

    /**
     * 提点公告资讯 详情时间
     * @param {*} date 
     */
    let byTime = [365*24*60*60*1000,24*60*60*1000,60*60*1000,60*1000,1000];  
    let unit = ["年","天","小时","分钟","秒钟"]; 
    Template.defaults.imports.pointTime = time => {
        time = new Date(time);
        let _now = new Date();
        let _resultDate = time.format('yyyy.MM.dd');
        var ct = _now.getTime()-time.getTime();  
        if(ct<0){  
            return "";
        }  
      
        let sb = [];  
        for(var i=0;i<byTime.length;i++){  
            if(ct<byTime[i]){  
                continue;  
            }  
            let temp = Math.floor(ct/byTime[i]);  
            ct = ct%byTime[i];  
            if(temp>0){  
                sb.push(temp+unit[i]);  
            }  
            
        /*一下控制最多输出几个时间单位： 
            一个时间单位如：N分钟前 
            两个时间单位如：M分钟N秒前 
            三个时间单位如：M年N分钟X秒前 
        以此类推 
        */  
            if(sb.length>=1){  
                break;  
            }
        }  
        var intervalMonth = (_now.getFullYear()*12+_now.getMonth()) - (time.getFullYear()*12+time.getMonth());
        var diffDays = parseInt((_now - time)/(3600*24*1000));
        if(intervalMonth>0 && intervalMonth<=12 && diffDays>30){
            return "<i class='a_da'>"+intervalMonth+"月前 "+_resultDate+"</i>";
        }else{ 
            if(ct>=24*60*60){
                return "<i class='a_da'>"+sb.join("")+"前 "+_resultDate+"</i>";  
            }else{
                return "<i>"+_resultDate+"</i>"; 
            }
        }
    }

    Template.defaults.imports.pointTime2 = time => {
        time = new Date(time);
        let _now = new Date();
        let _resultDate = time.format('yyyy-MM-dd hh:ss:mm');
        var ct = _now.getTime()-time.getTime();
        if(ct<0){
            return "";
        }

        let sb = [];
        for(var i=0;i<byTime.length;i++){
            if(ct<byTime[i]){
                continue;
            }
            let temp = Math.floor(ct/byTime[i]);
            ct = ct%byTime[i];
            if(temp>0){
                sb.push(temp+unit[i]);
            }

            /*一下控制最多输出几个时间单位：
             一个时间单位如：N分钟前
             两个时间单位如：M分钟N秒前
             三个时间单位如：M年N分钟X秒前
             以此类推
             */
            if(sb.length>=1){
                break;
            }
        }
        var intervalMonth = (_now.getFullYear()*12+_now.getMonth()) - (time.getFullYear()*12+time.getMonth());
        var diffDays = parseInt((_now - time)/(3600*24*1000));
        if(intervalMonth>0 && intervalMonth<=12 && diffDays>30){
            return "<i class='a_da'>"+intervalMonth+"月前 "+_resultDate+"</i>";
        }else{
            if(ct>=24*60*60){
                return "<i class='a_da'>"+sb.join("")+"前 "+_resultDate+"</i>";
            }else{
                return "<i>"+_resultDate+"</i>";
            }
        }
    }

    /**
     * 提点日期
     * @param {*} date 
     */
    Template.defaults.imports.pointDate = date => {
        if(!date) return '';
        var dt = new Date(date);
        dt.setDate(dt.getDate()-1);
        return (dt).format('MM月dd号');
    }

    /**
     * 获取分类资讯地址
     * @param {*} categoryId 
     */
    Template.defaults.imports.getTecUrl = categoryId => {
        let _url = '';
        categoryId = categoryId.toString();
        switch(categoryId) {
            case '32':
                _url = `/article/list-11x5-32-p1`;
                break;
            case '33':
                _url = `/article/list-kl10-33-p1`;
                break;
            case '34':
                _url = `/article/list-k3-34-p1`;
                break;
            case '35':
                _url = `/article/list-ssc-35-p1`;
                break;
            case '36':
                _url = `/article/list-other-36-p1`;
                break;

        }
        return _url;
    }
}
