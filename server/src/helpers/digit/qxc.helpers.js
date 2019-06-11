'use strict';

module.exports =  (Template)=> {

    /**
     * 七星彩历史
     */
    Template.defaults.imports.qxcHistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''} ${item.isSide ? 'side' : ''}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="red">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 七星彩历史页面头部
     * @param {*} result 
     */
    Template.defaults.imports.qxcHeader = result => {
        return `<thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                <th class="h26" colspan="7">开奖区</th>
            </tr>
            <tr>
                <th>第一球</th>
                <th>第二球</th>
                <th>第三球</th>
                <th>第四球</th>
                <th>第五球</th>
                <th>第六球</th>
                <th>第七球</th>
            </tr>
        </thead>`;
    }
}