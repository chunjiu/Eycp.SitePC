'use strict';

module.exports =  (Template)=> {

    /**
     * 快乐8 历史页面表格数据
     */
    Template.defaults.imports.kl8HistoryResult = result => {
        if(!result) return '';
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEven ? 'even ' : ''}area${parseInt(item.value.substr(0,1)) + 1}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}">${item.value}</td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 快乐8 首页列表
     * @param {*} result 
     */
    Template.defaults.imports.kl8HistoryIndex = result => {
        if(!result) return '';
        let _resultHtml = [];
            
        result.split(',').forEach((item, idx) => {
            _resultHtml.push(`<td>${item}</td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 快乐8 头部
     * @param {*} result 
     */
    Template.defaults.imports.kl8Header = result => {
        return `<thead>
            <tr>
                <th>期号</th>
                <th>飞盘</th>
                <th colspan="20">开奖号码</th>
            </tr>
        </thead>`;
    }
}