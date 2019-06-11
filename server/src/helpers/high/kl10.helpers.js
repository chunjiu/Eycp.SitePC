'use strict';

module.exports =  (Template)=> {
    Template.defaults.imports.kl10HistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-type="${item.num > 10 ? 'big' : 'small'}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="red">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 幸运农场首页表格
     * @param {} result 
     */
    Template.defaults.imports.xyncHistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-type="${item.num > 10 ? 'big' : 'small'}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-xync"><span class="num${item.value}"></span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 动物总动员历史表格
     * @param {} result 
     */
    Template.defaults.imports.dwzdyHistoryResult = result => {
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-type="${item.num > 10 ? 'big' : 'small'}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-zoology"><span class="num${item.value}"></span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 幸运农场首页表格
     * @param {} result 
     */
    Template.defaults.imports.xyncHistoryIndex = result => {
        let _resultHtml = [];
            
        result.split(',').forEach((item, idx) => {
            _resultHtml.push(`<td><div class="public-number-xync"><span class="num${item}"></span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 动物总动员首页表格
     * @param {} result 
     */
    Template.defaults.imports.dwzdyHistoryIndex = result => {
        if(!result) return '';
        let _resultHtml = [];
            
        result.split(',').forEach((item, idx) => {
            _resultHtml.push(`<td><div class="public-number-zoology"><span class="num${item}"></span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    /**
     * 快乐十分头部
     * @param {*} result 
     */
    Template.defaults.imports.kl10Header = (lotteryCode, ballHeight) => {
        let _ball = [];
        ballHeight.forEach(ball => {
            _ball.push(`<th class="h26">第${ball}球</th>`);
        })
        return `<thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                ${lotteryCode == 'gxkl0' ? '<th class="26h" colspan="5">开奖区</th>' : '<th class="26h" colspan="8">开奖区</th>'}
            </tr>
            <tr>
                ${_ball.join('')}
            </tr>
        </thead>`;
    }
}