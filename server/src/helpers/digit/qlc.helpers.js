'use strict';

module.exports =  (Template)=> {

    /**
     * 七乐彩红球
     * @param {*} result 
     */
    Template.defaults.imports.qlcRedHistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-area="${item.area}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="red">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 七乐彩蓝球
     * @param {*} result 
     */
    Template.defaults.imports.qlcBlueHistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td style="color: blue" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="blue">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 七乐彩历史页面头部
     * @param {*} result 
     */
    Template.defaults.imports.qlcHeader = result => {
        return `<thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                <th class="h26" colspan="8">开奖区</th>
            </tr>
            <tr>
                <th>第一球</th>
                <th>第二球</th>
                <th>第三球</th>
                <th>第四球</th>
                <th>第五球</th>
                <th>第六球</th>
                <th>第七球</th>
                <th>特码</th>
            </tr>
        </thead>`;
    }
}