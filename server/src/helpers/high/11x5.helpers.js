'use strict';

module.exports =  (Template)=> {
    Template.defaults.imports._11x5historyResult = result => {
        if(!result) return '';
        let _resultHtml = [];
            
        result.forEach((item, idx) => {
            _resultHtml.push(`<td class="${item.isEach ? 'each' : ''} ${item.isEven ? 'even' : ''}" data-id="${idx + 1}" data-num="${item.num}" data-value="${item.value}"><div class="public-number-ball"><span class="red">${item.value}</span></div></td>`)
        });
        
        return _resultHtml.join('');
    }

    Template.defaults.imports._11x5PlanWinGroup = (plan,code,type) => {
        if(!plan) return '';
        let _result = [],
            _tmpPlan = plan.content.split('|');
        //<span class="group">[02.<i class="font-red">05</i>.04]</span>
        _tmpPlan = _tmpPlan.map(d => {
            let _tmp = d.replace(/,/g, '.').split('.');
                _tmp = _tmp.map(t => {
                    if((code.indexOf('k3')>=0  && 1!=type) || code.indexOf('ssc')>=0){
                            return t >= 10 ? t : t;
                    }else{
                        return t >= 10 ? t : '0' + t;
                    }
                });

            return _tmp.join('.');
            
        })
        
        _tmpPlan.forEach(item => {
            _result.push(`<span class="group">[${item}]</span>`)
        })
        
        if(plan.state == 3) {
            _result[plan.winGroup-1] = `<span class="group">[<i class="font-red">${_tmpPlan[plan.winGroup-1]}</i>]</span>`
        }

        return _result.join('\r\n');
    }

    Template.defaults.imports._11x5PointPlayType = type => {
        let _type = {
            '1' : '任一',
            '2' : '任二',
            '3'	: '任三',
            '4' : '任四',			
            '5' : '任五',
            '6' : '任六',
            '7' : '任七',
            '8' : '任八'
        };

        return _type[type]
    }

    Template.defaults.imports._11x5Header = () => {
        return `<thead>
            <tr>
                <th rowspan="2">期号</th>
                <th rowspan="2">开奖日期</th>
                <th class="h26" colspan="5">开奖区</th>
            </tr>
            <tr>
                <th class="h26">第一位</th>
                <th class="h26">第二位</th>
                <th class="h26">第三位</th>
                <th class="h26">第四位</th>
                <th class="h26">第五位</th>
            </tr>
        </thead>`;
    }
}