/** ================================================
 *
 *                                              通用的一些方法
 *            由于某些函数不需要封装成 Template.defaults.imports这种模版方法的形式，
 *            所以把一些共用的方法放到这个位置;
 *
 *================================================*/

module.exports = {

    /**
     *  格式化时间，只要月日;
     *
     */
     formateDelYearAndHour(_time){

        if(!_time || typeof(_time) != 'string'){

            console.error('formateDelYearAndHour: 参数_time不能为空或者类型不正确！');
            return;

        }

        /** 没有空格 */
        if (_time.indexOf(" ") == -1) {

            return _time.replace(/\//g, '-').substr(5);

            /** 有空格只要前面得年月日 */
        } else {

            var timeArr = _time.split(' ');
            return timeArr[0].replace(/\//g, '-').substr(5);
        }

     },


    /**
     *  传入code值返回彩种大类
     *  @param: _code (String);
     *  @param: _province (Array)
     *  @return: String
     */
    getLotteryCodeType(_code, _province){

        if(!_code || typeof(_code) != 'string'){

            console.error('getClassify: 参数_code不能为空或者类型不正确！');
            return;

        }

        if(!_province || typeof(_province) != 'object'){

            console.error('getClassify: 参数_province不能为空或者类型不正确！');
            return;

        }

        for(let i = 0; i< _province.length; i++){

            for(let  j=0; j<_province[i].childs.length; j++){

                if(_code == _province[i].childs[j].code){

                    return _province[i].childs[j].type;
                }
            }
        }
    },


    /**
     *   用于数组对象属性排序使用(array.sort的使用);
     *   @param: 需要进行排序得对象1；
     *   @param: 需要进行排序得对象2 ;
     *   @param: 需要进行排序得属性;
     *
     *  数组根据数组对象中的某个属性值进行排序的方法
     * 使用例子：newArray.sort(sortBy('number',false))    表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
     * @param attr 排序的属性 如number属性
     * @param rev true表示升序排列，false降序排序
     * */
     sortBy: function(attr,rev){

        /** 第二个参数没有传递 默认升序排列 */
        if(rev ==  undefined){
            rev = 1;
        }else{
            rev = (rev) ? 1 : -1;
        }

        return function(a,b){
            let _a = parseFloat(a[attr]);
            let _b = parseFloat(b[attr]);
            if(_a < _b){
                return rev * -1;
            }else if(_a > _b){
                return rev * 1;
            }
            return 0;
        }
    },

    /**
     *  日期格式化;
     */
     formatDateDelHour(_time){

        if (_time) {

                _time = this.setTimeZero(_time);

                /** 没有空格 */
                if (_time.indexOf(" ") == -1) {

                    return _time.replace(/\//g, '-');

                    /** 有空格只要前面得年月日 */
                } else {

                    var timeArr = _time.split(' ');
                    return timeArr[0].replace(/\//g, '-');
                }


            } else {
                console.error('formatDateDelHour: 参数不存在！');
                return;
            }

       },

    /**
     *  日期格式化;
     */
    formatDate(_time){

        if (_time) {

            _time = this.setTimeZero(_time);

            return _time;

        } else {
            console.error('formatDateDelHour: 参数不存在！');
            return;
        }

    },


       /**
        * 给日期单数补0
        */
       setTimeZero(_time){

            if(_time){

                /** 没有空格 */
                if (_time.indexOf(" ") == -1) {

                    var time = _time.replace(/\//g, '-');
                    var timeArray = time.split('-');

                    for(var i=0; i<timeArray.length; i++){
                        if(timeArray[i].length == 1){
                            timeArray[i]="0"+timeArray[i];
                        }
                    }

                    return timeArray[0]+'-'+timeArray[1]+'-'+timeArray[2];

                /** 有空格 */
                } else {

                    var timeArr = _time.split(' ');
                    var timeTime = timeArr[0].replace(/\//g, '-');

                    var timeArray = timeTime.split('-');

                    for(var i=0; i<timeArray.length; i++){
                        if(timeArray[i].length == 1){
                            timeArray[i]="0"+timeArray[i];
                        }
                    }

                    return timeArray[0]+'-'+timeArray[1]+'-'+timeArray[2]+" "+timeArr[1];
                }

            }else{
                console.error('setTimeZero: 参数不存在！');
                return;
            }
       },


        /**
         *  判断数组array中是否包含元素obj的函数，包含则返回true，不包含则返回false
         */
        array_contain: function(array, obj){
            for (var i = 0; i < array.length; i++)
            {
                if (array[i] === obj)
                {
                    return true;
                }
            }
            return false;
        },

        /**
         *    根据年份是否闰年来初始化二月的日期选项
         */
        initFeb: function(_year){

            var _this = this;

            /** 获取被选中的年份并转换成Int */
            var year = parseInt(_year);

            /** 如果是闰年，则将日期选项初始化为29天 */
            if(_this.isLeapYear(year)){

                return 29;

                /** 如果不是闰年，则将日期选项初始化为28天 */
            }else{

                return 28;
            }

        },

        /**
         *   判断年份year是否为闰年，是闰年则返回true，否则返回false;
         */
        isLeapYear: function(_year){

            var year = _year;
            var a = year % 4;
            var b = year % 100;
            var c = year % 400;
            if( ( (a == 0) && (b != 0) ) || (c == 0) )
            {
                return true;
            }
            return false;
        },


        /**
         *  获取月份总天数;
         */
        getMonthTotalDay(_year, _month){

            var _this = this;

            /** 包含所有大月的数组 */
            var month_big = [1,3,5,7,8,10,12];

            /** 包含所有小月的数组*/
            var month_small = [4,6,9,11];

            /** 如果month被包含在month_big数组中，即被选中月份是大月，则将日期选项初始化为31天 */
            if(_this.array_contain(month_big, _month)){

                return 31;

                /** 如果month被包含在month_small数组中，即被选中月份是小月，则将日期选项初始化为30天 */
            }else if(_this.array_contain(month_small, _month)){

                return 30;

                /** 如果month为2，即被选中的月份是2月，则调用initFeb()函数来初始化日期选项 */
            }else{
                return _this.initFeb(_year);
            }

        },

       /**
         *  判断元素是否在数组中;
         *  @param { 数组 } _arr,
         *  @param {需要判断是否在数组中得元素}  _obj
        */
        contains(_arr, _obj){

            if(!_arr || typeof(_arr) != 'object'){
                console.error('contains：参数1不存在或者不正确！');
                return ;
            }

            if(!_obj){
                console.error('contains：参数2不存在或者不正确！');
                return ;
            }

            var i = _arr.length;
            while (i--) {
                if (_arr[i] === _obj) {
                    return true;
                }
            }
            return false;
        },

        /**
         *  删除数组中某个元素;
         *  @param _arr
         * @param _val
         */
        removeOfArray(_arr, _val){


            if(!(_arr || _arr.length > 0)){
                console.error('indexOf：参数1不存在或者不正确！');
                return -1;
            }

            if(!_val){
                console.error('indexOf：参数2不存在！');
                return -1;
            }

            var index = indexOfArray(_arr,_val);

            if (index > -1) {
                _arr.splice(index, 1);
            }

            return _arr;

        },



        /**
         *  获取数组元素下标;
         *  @param _arr
         * @param _val
         * @return {number}
         */
         indexOfArray(_arr, _val){

            if(!(_arr || _arr.length > 0)){
                console.error('indexOf：参数1不存在或者不正确！');
                return -1;
            }

            if(!_val){
                console.error('indexOf：参数2不存在！');
                return -1;
            }

            for (var i = 0; i < _arr.length; i++) {
                if (_arr[i] == _val) return i;
            }
            return -1;
        }

}


