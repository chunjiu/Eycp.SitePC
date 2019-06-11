const fs = require('fs');

class Json {

    /**
     * 读取JSON文件
     * @param {*} dir 
     */
    static readFileSync(dir) {

        try {
            let content = fs.readFileSync(dir)
            content = stripBom(content)
            return JSON.parse(content);
        } catch(ex) {
            console.log(ex);
            return null;
        }
    }

    static deepCopy(obj) {
        return deepCopy(obj);
    }

    
}

function stripBom(content) {
    // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
    if (Buffer.isBuffer(content)) content = content.toString('utf8');
    content = content.replace(/^\uFEFF/, '');
    return content;
}

/**
 * 深拷贝
 * @param {*} obj 
 */
function deepCopy(obj){
    var str, newobj = (obj!= undefined && obj.constructor === Array) ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else {
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    }
    return newobj;
}

module.exports = Json;