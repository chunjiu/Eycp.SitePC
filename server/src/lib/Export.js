import xlsx from 'node-xlsx';

const excel = Symbol('excel');
const txt = Symbol('txt');

/**
 * 导出类
 * @author Leo
 */
class Export {
    
    /**
     * 导出成Excel
     * @param {array} data 
     * @param {string} name 
     * @param {reponse} reply 
     */
    static toExcel(data, name, reply) {
        var buffer = xlsx.build([{name: name, data: data}]);

        return reply(buffer)
            .type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            .header('Content-Disposition', `attachment; filename=${encodeURIComponent(name)}.xlsx`)
            .header('Content-Length', buffer.length)
            .encoding('utf-8');
    }

    /**
     * 导出成txt
     * @param {array} data 
     * @param {string} name 
     * @param {reponse} reply 
     */
    static toTxt(data, name, reply) {
        let _result = [];
        data.forEach(item => {
            _result.push(item.join(','));
        })
        var buffer = Buffer.from(_result.join('\r\n'));

        return reply(buffer)
            .type('text/plain')
            .header('Content-Disposition', `attachment; filename=${encodeURIComponent(name)}.txt`)
            .header('Content-Length', buffer.length)
            .encoding('utf-8');
    }

    [excel]() {

    }

    [txt]() {

    }
}

export default Export;