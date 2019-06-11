'use strict';

module.exports =  (Template)=> {

    /**
     *  快3历史开奖列表
     * @param result
     * @return {*}
     */
    Template.defaults.imports.k3HistoryResult = (result) => {

        if(!result) return '';

        let _resultHtml = [];

        let _stringHtml = '<td colspan="4"><div class="lh-number-k3"><div class="public-number-k3">';

        let _numHtml     = '';

        result.forEach((item, idx) => {

            _stringHtml+=  `<span style="background: none;"  class="${item.isDiff ? ' diff' : ''}${item.isEven ? ' even' : ''}${item.isPair ? ' pair' : ''}${item.isLeopard ? ' leopard' : ''}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}">`+
                                            `<span  class="num${item.value}" style="margin: 0;"></span>`+
                                     `</span>`;


            if( result.length - 1 == idx){

                _numHtml += item.num;
            }else{

                _numHtml += item.num+',';
            }

        });

        _stringHtml += `<i class="testNumber" style="right:-10px;display: inline-block;">( ${ _numHtml } )</i></div></div></td>`;

        _resultHtml.push(_stringHtml);

        return _resultHtml.join('');
    }

    /**
     * 求和
     * @param result
     * @return {string}
     */
    Template.defaults.imports.resultSum = (result) => {

        if(!result) return '';

        let _sum = 0;
        let _resultArr = result.split(',');

        for(var i=0; i<_resultArr.length; i++){

            _sum += parseInt(_resultArr[i]);

        };

        return _sum;

    }

    /**
     *  快3列表
     * @param result
     * @return {*}
     */
    Template.defaults.imports.k3HistoryIndex = (result) => {

        if(!result) return '';
        let _resultHtml = [],
            _sum = 0;

        let _stringHtml = '<td colspan="4"><div class="lh-number-k3"><div class="public-number-k3" style="padding-top: 7px;">';

        result.split(',').forEach((item, idx) => {

            _sum += parseInt(item);
            _stringHtml+= `<span class="num${item >= 10 ? item : '0' + item}" ></span>`;

        });

        _stringHtml += `<i class="testNumber" style="font-size: 14px; line-height: 24px; position: relative; top: -7px; left: 8px;">( ${ result } )</i></div></div></td>`;

        _resultHtml.push(_stringHtml);

        _resultHtml.push((`<td>${_sum}</td>`));
        
        return _resultHtml.join('');
    }

    /**
     * 快3 头部
     * @param {*} result 
     */
    Template.defaults.imports.k3Header = result => {
        return `<thead>
            <tr>
                <th>期号</th>
                <th>开奖日期</th>
                <th colspan="4">开奖区</th>
                <th>和值</th>
            </tr>
        </thead>`;
    }
}