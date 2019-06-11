'use strict';

module.exports =  (Template)=> {

    /**
     * 福彩3d历史数据
     * @param {*} result 
     */
    Template.defaults.imports.fc3dHistoryResult = result => {

        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isGroupThree ? 'groupThree' : ''} ${item.isGroupSix ? 'groupSix' : ''}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="red">${item.value}</span></div></td>`)
        });

        return _resultHtml.join('');
    }

    /**
     * 福彩3d历史页面头部
     * @param {*} result 
     */
    Template.defaults.imports.fc3dHeader = result => {
        return `<thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                <th class="h26" colspan="3">开奖号码</th>
                <th rowspan="2">试机号</th>
            </tr>
            <tr>
                <th>百位</th>
                <th>十位</th>
                <th>个位</th>
            </tr>
        </thead>`;
    }
}