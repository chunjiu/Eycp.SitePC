/**
 * 获取数组中的最大值
 */
Array.prototype.max = function() {
    return Math.max.apply({}, this);
}

/**
 * 获取数组中的最小值
 */
Array.prototype.min = function() {
    return Math.min.apply({}, this);
}

/**
 * 获取数组中最大的两个数
 */
Array.prototype.twoMax = function() {
    let _max = this.max(),
        _tmpList = [_max];

    let _tmp = this.filter(item => {
        return item != _max;
    });

   _tmpList.push(_tmp.max());
   return _tmpList;
}

/**
 * 获取数组中最小的两个数
 */
Array.prototype.twoMin = function() {
    let _min = this.min(),
        _tmpList = [_min];

    let _tmp = this.filter(item => {
        return item != _min;
    });

   _tmpList.push(_tmp.min());
   return _tmpList;
}

module.exports = Array;