String.prototype.replaceHTML =  function() {
    let _result = '';

    _result = this.replace(/<div\s.*?>(.*?)<\/div>/g, function(a ,b) {
        return `${b}`;
    }).replace(/<div>(.*?)<\/div>/g, function(a ,b) {
        return `${b}`;
    }).replace(/<p\s.*?>(.*?)<\/p>/g, function(a ,b) {
        return `${b}`;
    }).replace(/<p>(.*?)<\/p>/g, function(a ,b) {
        return `${b}`;
    }).replace(/<span\s.*?>(.*?)<\/span>/g, function(a ,b) {
        return `${b}`;
    }).replace(/<span>(.*?)<\/span>/g, function(a ,b) {
        return `${b}`;
    }).replace(/<strong\s.*?>(.*?)<\/strong>/g, function(a ,b) {
        return `${b}`;
    }).replace(/<strong>(.*?)<\/strong>/g, function(a ,b) {
        return `${b}`;
    }).replace(/<img(.*?)>/g, '')
    .replace(/<br(.*?)>/g, '')
    .replace(/&nbsp;/g, '').replace(/<span\s.*?>(.*?)<\/span>/g, function(a ,b) {       // 需要多替换一次内容
        return `${b}`;
    }).replace(/<span>(.*?)<\/span>/g, function(a ,b) {
        return `${b}`;
    });

    return _result;
}

// 将秒数转化为计算到天数的格式
String.prototype.SecondsToddhhmmss = function () {
    var totalSeconds = parseInt(this);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    seconds = Math.round(seconds * 100) / 100;

    var day = 0;
    // 计算日
    if(hours >= 24) {
        day = Math.floor(hours / 24);
        hours = hours - day * 24;
    }

    var result = (day < 10 ? "0" + day : day);
    result += ":" + (hours < 10 ? "0" + hours : hours);
    result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);
    return result;
}

//将秒数转为时间格式
String.prototype.SecondsTohhmmss = function() {
    var totalSeconds = parseInt(this);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    seconds = Math.round(seconds * 100) / 100;
    var result = (hours < 10 ? "0" + hours : hours);
    result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);
    return result;
};

//将秒数转为时间格式
String.prototype.SecondsTommss = function() {
    var totalSeconds = parseInt(this);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    seconds = Math.round(seconds * 100) / 100;
    var result = "";
    if( hours > 0 ){
        result = (hours < 10 ? "0" + hours : hours);
        result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    }else{
        result = (minutes < 10 ? "0" + minutes : minutes);
    }
    
   
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);
    return result;
};


String.prototype.DateFormatTime = function(formatDate){

    var dateStr = this;
    /*
     * eg:format="YYYY-MM-dd hh:mm:ss";
     */
    if (typeof dateStr == "string") {
        dateStr = dateStr.replace("T", " ").replace(/-/g, "/");
    }
    var obj = new Date(dateStr);
    var o = {
        Y: obj.getFullYear(), // year
        M: obj.getMonth() + 1, // month
        d: obj.getDate() // day
    }

    var setDate = o.Y + '年' + o.M + '月' + o.d + '日';

    return setDate;
}

//数字转换中文
String.prototype.ConvertToChinese = function() {
    var num = this;
    var N = [
        "零", "一", "二", "三", "四", "五", "六", "七", "八", "九"
    ];
    var str = num.toString();
    var len = num.toString().length;
    var C_Num = [];
    for (var i = 0; i < len; i++) {
        C_Num.push(N[str.charAt(i)]);
    }
    return C_Num.join('');
};

module.exports = String;