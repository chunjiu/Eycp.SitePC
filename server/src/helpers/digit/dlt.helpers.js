'use strict';

module.exports =  (Template)=> {

    /**
     * 大乐透红球
     * @param {*} result 
     */
    Template.defaults.imports.dltRedHistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-area="${item.area}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="red">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 大乐透蓝球
     */
    Template.defaults.imports.dltBlueHistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="blue">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 大乐透历史页面头部
     * @param {*} result 
     */
    Template.defaults.imports.dltHeader = result => {
        return `<thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                <th class="h26" colspan="5">红球</th>
                <th class="h26" colspan="2">蓝球</th>
                <th class="h26" colspan="2">头奖历史</th>
                <th rowspan="2">本期销量</th>
                <th rowspan="2">奖池奖金</th>
            </tr>
            <tr>
                <th>红一</th>
                <th>红二</th>
                <th>红三</th>
                <th>红四</th>
                <th>红五</th>
                <th>蓝一</th>
                <th>蓝二</th>
                <th>中奖注数</th>
                <th>每注奖金</th>
            </tr>
        </thead>`;
    }
}