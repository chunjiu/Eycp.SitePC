'use strict';

module.exports =  (Template)=> {

    /**
     * pk10 历史页面表格数据
     * @param {*} result 
     */
    Template.defaults.imports.pk10HistoryResult = result => {
        if(!result) return '';
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            item.value = parseInt(item.value);
            item.value = item.value<10?"0"+item.value:item.value;
            _resultHtml.push(`<td data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-pk10"><span class="num${item.value}"></span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * pk10 首页表格
     */
    Template.defaults.imports.pk10HistoryIndex = result => {
        if(!result) return '';
        let _resultHtml = [];
            
        result.split(',').forEach((item, idx) => {
            _resultHtml.push(`<td><div class="public-number-pk10"><span class="num${item >= 10 ? item : '0' + parseInt(item)}"></span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * PK10表格头部
     */
    Template.defaults.imports.pk10Header = result => {
        return `<thead>
            <tr>
                <th>期号</th>
                <th>开奖日期</th>
                <th colspan="10">开奖区</th>
            </tr>
        </thead>`;
    }

    Template.defaults.imports.analysisLongHu = (n1, n2) => {
        return n1 > n2 ? '龙' : '虎';
    }

    Template.defaults.imports.sum = (n1, n2) => {
        let _result = [],
            _sum = n1 + n2;
    
        _result.push(_sum);
        _result.push(_sum > 11 ? '大' : '小');
        _result.push(_sum%2 === 0 ? '双' : '单');
        
        return _result.join('');
    }

    /**
     * 获取龙虎
     */
    Template.defaults.imports.getLongHu = (numberList)=>{
        let _result = [],
            _length = numberList.length - 1;
        for(let i = 0; i < 5; i++) {
            _result.push(`<span>${numberList[i] > numberList[_length - i] ? '龙' : '虎' }</span>`)
        }

        return _result.join('');
    }

}