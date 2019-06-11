'use strict';

module.exports =  (Template)=> {
    /**
     * 时时乐历史开奖列表
     */
    Template.defaults.imports.sslHistoryResult = result => {
        if(!result) return '';
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}">${item.value}</td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 时时乐表格头部
     */
    Template.defaults.imports.sslHeader = result => {
        return ` <thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                <th class="h26" colspan="3">开奖区</th>
            </tr>
            <tr>
                <th>百位</th>
                <th>十位</th>
                <th>个位</th>
            </tr>
        </thead>`;
    }
}