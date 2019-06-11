'use strict';

module.exports =  (Template)=> {
    /**
     * 河南泳坛夺金481表格头部
     */
    Template.defaults.imports.hn481Header = result => {
        return ` <thead>
            <tr>
                <th>期号</th>
                <th>开奖日期</th>
                <th colspan="4">开奖区</th>
            </tr>
        </thead>`;
    }
}