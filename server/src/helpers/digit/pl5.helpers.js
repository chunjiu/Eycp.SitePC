'use strict';

module.exports =  (Template)=> {

    /**
     * 排列五历史数据
     */
    Template.defaults.imports.pl5HistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="red">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 排列5历史页面头部
     * @param {*} result 
     */
    Template.defaults.imports.pl5Header = result => {
        return `<thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                <th class="h26" colspan="5">开奖号码</th>
            </tr>
            <tr>
                <th>万位</th>
                <th>千位</th>
                <th>百位</th>
                <th>十位</th>
                <th>个位</th>
            </tr>
        </thead>`;
    }
}