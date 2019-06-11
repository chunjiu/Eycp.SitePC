'use strict';

module.exports =  (Template)=> {
    Template.defaults.imports.sscHistoryResult = result => {
        if(!result) return '';
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="red">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 时时彩首页列表大小单双
     * @param {*} result 
     */
    Template.defaults.imports.sscHistoryIndex = result => {
        if(!result) return '';
        let _resultHtml = [],
            _resultList = result.split(',');

        _resultHtml.push(`<td ${_resultList[3] >= 5 ? 'style="color: red;"' : ''}>${_resultList[3] < 5 ? '小' : '大'}</td>`);
        _resultHtml.push(`<td ${_resultList[3] % 2 == 0 ? '' : 'style="color: red;"'}>${_resultList[3] % 2 == 0 ? '双' : '单'}</td>`);
        _resultHtml.push(`<td ${_resultList[4] >= 5 ? 'style="color: red;"' : ''}>${_resultList[4] < 5 ? '小' : '大'}</td>`);
        _resultHtml.push(`<td ${_resultList[4] % 2 == 0 ? '' : 'style="color: red;"'}>${_resultList[4] % 2 == 0 ? '双' : '单'}</td>`);
        
        return _resultHtml.join('');
    }

    /**
     * 时时彩表格头部
     */
    Template.defaults.imports.sscHeader = result => {
        return `<thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                <th rowspan="2" colspan="5">开奖号码</th>
                <th class="h26" colspan="4">大小单双</th>
            </tr>
            <tr>
                <th colspan="2" class="h26">十位</th>
                <th colspan="2" class="h26">个位</th>
            </tr>
        </thead>`;
    }
}