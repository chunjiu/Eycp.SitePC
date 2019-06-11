define(function (require, exports, module) {

    String.prototype.replaceWith = function (obj) {
        var tpl = this.replace(/%7B/gi, '{').replace(/%7D/gi, '}');
        return tpl.replace(/\{\$(\w+)\}/g, function (str, match) {
            if (match in obj) {
                return obj[match];
            }
            else {
                return str;
            }
        });
    };
//返回包含个数;
    String.prototype.containsAndCount = function (element) {
        var returnNum = 0;
        var varr = this.split(',');
        for (var i = 0; i < varr.length; i++) {
            if (varr[i] == element) {
                returnNum += 1;
            }
        }
        return returnNum;
    };

    String.prototype.len = function ()// 给string增加个len ()方法，计算string的字节数
    {
        return this.replace(/[^\x00-\xff]/g, "xx").length;
    };


//祛重
    String.prototype.unique = function () {
        var n = {}, r = []; //n为hash表，r为临时数组
        var varr = this.split(',');
        for (var i = 0; i < varr.length; i++) //遍历当前数组
        {
            if (!n[varr[i]]) //如果hash表中没有当前项
            {
                n[varr[i]] = true; //存入hash表
                r.push(varr[i]); //把当前数组的当前项push到临时数组里面
            }
        }
        return r;
    };
//数组 扩展 remove方法
    Array.prototype.remove = function (dx) {
        if (isNaN(dx) || dx > this.length) { return false; }
        for (var i = 0, n = 0; i < this.length; i++) {
            if (this[i] != this[dx]) {
                this[n++] = this[i]
            }
        }
        this.length -= 1
    }
// 判断数组中包含element元素
    Array.prototype.contains = function (element) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                return true;
            }
        }
        return false;
    }
//返回包含个数;
    Array.prototype.containsAndCount = function (element) {
        var returnNum = 0;
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                returnNum += 1;
            }
        }
        return returnNum;
    }

//祛重
    Array.prototype.unique = function () {
        var n = {}, r = []; //n为hash表，r为临时数组
        for (var i = 0; i < this.length; i++) //遍历当前数组
        {
            if (!n[this[i]]) //如果hash表中没有当前项
            {
                n[this[i]] = true; //存入hash表
                r.push(this[i]); //把当前数组的当前项push到临时数组里面
            }
        }
        return r;
    };
//Json数据排序
    Array.prototype.sortJson = function (order, sortBy) {
        var ordAlpah = (order == 'asc') ? '>' : '<';
        var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
        return this.sort(sortFun);
    };
    Array.prototype.extend = function (other_array) {
        other_array.forEach(function (v) { this.push(v); }, this);
    };
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback, thisArg) {
            var T, k;
            if (this == null) {
                throw new TypeError(" this is null or not defined");
            }
            var O = Object(this);
            var len = O.length >>> 0; // Hack to convert O.length to a UInt32
            if ({}.toString.call(callback) != "[object Function]") {
                throw new TypeError(callback + " is not a function");
            }
            if (thisArg) {
                T = thisArg;
            }
            k = 0;
            while (k < len) {
                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    var Chart = {
				/**
				* 接受一个函数和一个环境，并返回一个在给定环境中调用给定函数
				* @param {Array} fn 必选
				* @param {Array} obj 必选
				* @param {Array} param 可选，不限个数
				*/
				bind:function (fn, obj) {
				    var args = Array.prototype.slice.call(arguments, 2); //截取附加参数
				    return function () {
				        var innerArgs = Array.prototype.slice.call(arguments); //获取全部fn参数
				        var fianlArgs = innerArgs.concat(args); //合并参数
				        return fn.apply(obj, fianlArgs);
				    };
				},

				/**
				* 字符串替换
				*ex:
				console.log(EycpFlot.format("{1} and {2}", "apples", "pears")); // apples and pears
				console.log(EycpFlot.format("{1} {1} {2}", "hip", "hooray")); // hip hip hooray
				console.log(EycpFlot.format("{key}: {value}", { key: "life", value: 42 })); // life: 42
				console.log(EycpFlot.format("mixing {prop} and {2}", { prop: "property" }, "index"));
				*/
				format:function (f) {
				    var a = arguments;
				    return ("" + f).replace(/\{(?:(\d+)|(\w+))\}/g, function (s, i, p) {
				        return p && a[1] ? a[1][p] : a[i]
				    })
				},
				/**
				 * 字符截取操作 str被截取字符串，len截取长度
				 * @param  {string} str 被截取字符串
				 * @param  {int} len 截取长度
				 * @return {[type]}    被截取后的字符
				 */
				substring:function (str, len) {
				    if (str != null && str.length > 0) {
				        str = str.replace(/<[^>]+>/g, "");//去掉所有的html标记
				        if (str.length > len) {
				            return str.substring(0, len) + "..";
				        }
				    }
				    return str;
				},
				/**
				 * 字符截取操作 str被截取字符串，len截取长度
				 * @param  {string} str 被截取字符串
				 * @param  {int} len 截取长度
				 * @return {[type]}    被截取后的字符
				 */
				substr:function (str, len) {
				    var char_length = 0;
				    for (var i = 0; i < str.length; i++) {
				        var son_str = str.charAt(i);
				        encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
				        if (char_length > len) {
				            var sub_len = char_length == len ? i + 1 : i;
				            return str.substr(0, sub_len) + "..";
				            break;
				        }
				    }
				    return str;
				},
 
				/**
				 * 字符串替换
				 * @param  {string} str         字符串
				 * @param  {string} reallyDo    需要替换的字符串
				 * @param  {string} replaceWith 替换值
				 * @return {string}             替换后的新值
				 */
				replace:function (str, reallyDo, replaceWith) {
				    var e = new RegExp(reallyDo, "g");
				    words = str.replace(e, replaceWith);
				    return words;
				},

				/**
				 * 判断浏览器
				 */
				IsIE:function () {
				      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
					  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
					  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
					  var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
					  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
					  var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
					  var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
					  if (isIE) {
					    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
					    reIE.test(userAgent);
					    var fIEVersion = parseFloat(RegExp["$1"]);
					    if(fIEVersion == 7) return "IE7"
					    else if(fIEVersion == 8) return "IE8";
					    else if(fIEVersion == 9) return "IE9";
					    else if(fIEVersion == 10) return "IE10";
					    else if(fIEVersion == 11) return "IE11";
					    else return "IE7以下"//IE版本过低
					  }
					 
					  if (isFF) return "FF";
					  if (isOpera) return "Opera";
					  if (isEdge) return "Edge";
					  if (isSafari) return "Safari";
					  if (isChrome) return "Chrome";
				},
				/**
				 * 数字转换为大写数字
				 * @param  {int} num 被转换的值
				 * @return {string}     转换后的值
				 */
				convertToChinese:function (num) {
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
				},
				/**
		         *  切割数组
		         *  @param: 数组对象
		         *  @param: 每多少个切割为一个对象;
		         */
				 sliceArr: function(array, size) {
		            var result = [];
		            for (var x = 0; x < Math.ceil(array.length / size); x++) {
		                var start = x * size;
		                var end = start + size;
		                result.push(array.slice(start, end));
		            }
		            return result;
		        },
				/**
				 * 初始Array数组
				 * @param {int} count 数组大小
				 * @return 数组集合
				 */
				initArray:function(count){
					var modeArr=new Array();
					for (var i = count - 1; i >= 0; i--) {
						modeArr.push(0);
					}
					return modeArr;					
				},
				/**
		         *  数组的字符串元素转数字
		         *  @param: 数组对象
		         */
		        intArr: function (array) {
		            var _newArr = [];
		            for (var j = 0; j < array.length; j++){
		                _newArr.push(parseInt(array[j]));
		            }
		            return _newArr;
		        },
			/*******************************************形态判断计算 begin**************************************/

				/**
				 * 判断质数方法
				 * @param  {int}  num 被判断的值
				 * @return {Boolean}     true是质数，否则是合数
				 */
				isPrime:function (num) {
					num = parseInt(num);
					if(typeof num != "number"){
						console.error(this.format("被判断值{1}非数字",num));
						return false;
					}
				    if (num <= 3) return true;
				    for (var i = 2; i <= Math.sqrt(num) ; i++) {
				        if (num % i == 0) {
				            return false;
				        }
				    }
				    return true;
				},
				/**
				 * 判断时时彩质数方法
				 * @param  {int}  num 被判断的值
				 * @return {Boolean}     true是质数，否则是合数
				 */
				isSscPrime:function (num) {
					num = parseInt(num);
					if(typeof num != "number"){
						console.error(this.format("被判断值{1}非数字",num));
						return false;
					}
					if (num > 0 && num <= 3) return true;
					if (num == 0) { return false; }
					for (var i = 2; i <= Math.sqrt(num) ; i++) {
						if (num % i == 0) {
							return false;
						}
					}
					return true;
				},

				/**
				 * 判断奇偶(true偶数，否则奇数)
				 * @param  {int}  num 被判断的值
				 * @return {Boolean}     true偶数，否则奇数
				 */
				isEvenOdd:function(num){
					num = parseInt(num);
					if(typeof num != "number"){
						console.error(this.format("被判断值{1}非数字",num));
						return false;
					}
					if(num%2==0){
						return true;
					}
					return false;
				},
				/***判断大小(true大，否则小)
				* @param  {int}  num 被判断值
				* @param  {int} eqValue 比较的值（大于等于该值为大）
				* @return {Boolean}  true大，否则小
				***/
				isBigSmall:function(num,eqValue){
					num = parseInt(num);
                    eqValue = parseInt(eqValue);
					if(typeof num != "number" || typeof eqValue != "number"){
						console.error(this.format("比较与被比较值{1}-{2}含非数字",num,eqValue));
						return false;
					}
					if(num>=eqValue){
						return true;
					}
					return false;
				},
				/***判断012路
				* @param  {int} num 被判断值
				* @return   除3余数
				***/
				is012:function(num){
					num = parseInt(num);
					if(typeof num != "number"){
						console.error(this.format("被判断值{1}非数字",num));
						return null;
					}
					return num%3;
				},

				/***判断升平降(升2，平1，降0)
				*@param  {int}	num 被判断值
				*@param  {int}  eqValue 比较的值
				*@return {int}  升2，平1，降0
				***/
				isSortEquals:function(num,eqValue){
					num = parseInt(num);
					if(typeof num != "number" || typeof eqValue != "number"){
						console.error(this.format("比较与被比较值{1}-{2}含非数字",num,eqValue));
						return "";
					}
					if(num>eqValue){
						return 2;
					}else if(num==eqValue){
						return 1;
					}
					return 0;
				},
			/*******************************************形态判断计算 end**************************************/


			/*******************************************形态尾数个数计算 begin**************************************/

				/***质合形态尾数个数
				*@param  {Array} arr 计算的数组
				*@return {string}  质合比
				***/
				primeEnd:function(arr){
					var modeArr=this.initArray(2);
					var _this=this;
					_this.each(arr,function(item){
						item = parseInt(item%10);
						if(_this.isPrime(item)){
							modeArr[0]+=1;
						}else{
							modeArr[1]+=1;
						}
					});		
					return modeArr;			
				},
				/***奇偶形态尾数个数比
				*@param  {Array} arr 计算的数组
				*@return {string}  奇偶个数数组
				***/
				evenOddEnd:function(arr){
					var modeArr=this.initArray(2);
					var _this=this;
					_this.each(arr,function(item){
						item = parseInt(item%10);
						if(_this.isEvenOdd(item)){
							modeArr[1]+=1;
						}else{
							modeArr[0]+=1;
						}
					});		
					return modeArr;			
				},
				/***大小形态尾数个数
				*@param  {Array} arr 计算的数组
				*@param {int} eqValue 比较的值（大于等于该值为大）
				*@return {string}  大小个数数组
				***/
				bigSmallEnd:function(arr,eqValue){
					var modeArr=this.initArray(2);
					var _this=this;
					_this.each(arr,function(item){
						item = parseInt(item%10);
						if(_this.isBigSmall(item,eqValue)){
							modeArr[0]+=1;
						}else{
							modeArr[1]+=1;
						}
					});		
					return modeArr;			
				},
				/***012路形态尾数个数
				*@param  {Array} arr 计算的数组
				*@return {string}  012 个数数组
				***/
				end012End:function(arr){
					var modeArr=this.initArray(3);
					var _this=this;
					_this.each(arr,function(item){
						item = parseInt(item%10);
						modeArr[_this.is012(item)]+=1;
					});		
					return modeArr;			
				},
			
			/*******************************************形态尾数个数计算 end**************************************/	

			/*******************************************形态个数比值计算 begin**************************************/

				/***质合形态个数比
				*@param  {Array} arr 计算的数组
				*@return {string}  质合比
				***/
				ratioPrime:function(arr){
					var modeArr=this.initArray(2);
					var _this=this;
					_this.each(arr,function(item){
						if(_this.isPrime(item)){
							modeArr[0]+=1;
						}else{
							modeArr[1]+=1;
						}
					});		
					return modeArr.join(":");			
				},

				/***奇偶形态个数比
				*@param  {Array} arr 计算的数组
				*@return {string}  奇偶比
				***/
				ratioEvenOdd:function(arr){
					var modeArr=this.initArray(2);
					var _this=this;
					_this.each(arr,function(item){
						if(_this.isEvenOdd(item)){
							modeArr[1]+=1;
						}else{
							modeArr[0]+=1;
						}
					});		
					return modeArr.join(":");			
				},
				/***大小形态个数比
				*@param  {Array} arr 计算的数组
				*@param {int} eqValue 比较的值（大于等于该值为大）
				*@return {string}  大小比
				***/
				ratioBigSmall:function(arr,eqValue){
					var modeArr=this.initArray(2);
					var _this=this;
					_this.each(arr,function(item){
						if(_this.isBigSmall(item,eqValue)){
							modeArr[0]+=1;
						}else{
							modeArr[1]+=1;
						}
					});		
					return modeArr.join(":");			
				},
				/***012路形态个数比
				*@param  {Array} arr 计算的数组
				*@return {string}  012路比
				***/
				ratio012:function(arr){
					var modeArr=this.initArray(3);
					var _this=this;
					_this.each(arr,function(item){
						modeArr[_this.is012(item)]+=1;
					});		
					return modeArr.join(":");			
				},

				/***升平降形态个数比(两个数组同等长度)
				*@param  {Array} arr 计算的数组
				*@param {Array} eqArr 比较的数组
				*@return {string}  升平降比
				***/
				ratioSortEquals:function(arr,eqArr){
					if(arr.length!=eqArr.length){
						return null;
					}		
					var modeArr=this.initArray(arr.length);
					var _this=this;
					_this.each(arr,function(item,i){
						modeArr[_this.isSortEquals(item,eqArr[i])]+=1;
					});		
					return modeArr.join(":");			
				},

				/***区间个数比
				*@param  {Array} arr 计算的数组
				*@param  {Array} eqArr 区间数组(连续 如 划分三个区间1-10,11-20,21-30，则数组[10,20,30])
				*@return {string}  区间个数比
				***/
				ratioInterval:function(arr,inArr){
					var modeArr=this.initArray(inArr.length);
					var _this=this;
					_this.each(arr,function(item){
						_this.each(inArr,function(eqItem,i){
							if(i>0){
								if(item<=eqItem && item>inArr[i-1]){
									modeArr[i]+=1;
									return;
								}
							}else{
								if(item<=eqItem){
									modeArr[i]+=1;
									return;
								}
							}
						});
					});		
					return modeArr.join(":");			
				},
			/*******************************************形态比值计算 end**************************************/




			/*******************************************形态计算 begin**************************************/
				/***质合形态
				*@param  {Array} arr 计算的数组
				*@return {Array} 质合形态数组
				***/
				modePrime:function(arr){
					var modeArr=new Array();
					var _this=this;
					_this.each(arr,function(item){
						if(_this.isPrime(item)){
							modeArr.push("质");
						}else{
							modeArr.push("合");
						}
					});		
					return modeArr;			
				},
				anotherModePrime: function(arr) {
					var modeArr=new Array();
					var _this=this;
					_this.each(arr,function(item){
						if(_this.isSscPrime(item)){
							modeArr.push("质");
						}else{
							modeArr.push("合");
						}
					});
					return modeArr;
				},
				/***奇偶形态
				*@param  {Array} arr 计算的数组
				*@return {Array} 奇偶形态数组
				***/
				modeEvenOdd:function(arr){
					var modeArr=new Array();
					var _this=this;
					_this.each(arr,function(item){
						if(_this.isEvenOdd(item)){
							modeArr.push("偶");
						}else{
							modeArr.push("奇");
						}
					});		
					return modeArr;			
				},
				/***大小形态
				*@param  {Array} arr 计算的数组
				*@param  {int} eqValue 比较的值（大于等于该值为大）
				*@return {Array} 大小形态数组
				***/
				modeBigSmall:function(arr,eqValue){
					var modeArr=new Array();
					var _this=this;
					_this.each(arr,function(item){
						if(_this.isBigSmall(item,eqValue)){
							modeArr.push("大");
						}else{
							modeArr.push("小");
						}
					});		
					return modeArr;			
				},
				/***012路形态
				*@param  {Array} arr 计算的数组
				*@return {Array} 012路形态数组
				***/
				mode012:function(arr){
					var modeArr=new Array();
					var _this=this;
					_this.each(arr,function(item){
						modeArr.push(_this.is012(item));
					});		
					return modeArr;			
				},

				/***升平降形态(两个数组同等长度)
				*@param  {Array} arr 计算的数组
				*@param  {Array} eqArr 比较的数组
				*@return {Array} 升平降形态数组
				***/
				modeSortEquals:function(arr,eqArr){
					var modeArr=new Array();
					if(arr.length!=eqArr.length){
						return modeArr;
					}		
					var _this=this;
					var num=0;
					_this.each(arr,function(item,i){
						num = _this.isSortEquals(item,eqArr[i]);
						modeArr.push(num==2?"升":(num==1?"平":"降"));
					});		
					return modeArr;			
				},
			/*******************************************形态计算 end**************************************/



			/*******************************************彩种其它计算 begin*********************************/
				/**
				 * 计算AC值
				 * @param  {Array}  arr 被计算的数组
				 * @return {int}  AC值
				 */
				acValue:function(arr){
					var newArr=new Array();
		            var diff = 0;
		            if (0 == arr.length)
		            {
		                return 0;
		            }
		            var _this=this;
		            _this.each(arr,function(item,i){
						_this.each(arr,function(next,j){
							diff = Math.abs(arr[i] - arr[j]);
		                    if (diff!=0 && !newArr.contains(diff))
		                    {
		                        newArr.push(diff);
		                    }
						});		
					});		
		           	
		            return newArr.length - arr.length + 1;
				},
				/**
				 * 跨度计算
				 * @param  {Array}  arr 被计算的数组
				 * @return {int} 跨度值
				 */
				spanNumber:function(arr){
					return this.maxArr(arr) - this.minArr(arr);
				},
				/**
				 * 重号组数 (同期计算)
				 * @param  {Array}  arr 被计算的数组
				 * @return {int} 重号组数
				 */
				sameGroupsCount:function(arr){

					return arr.length -	this.unique(arr).length;
				},


				/**
				 * 重号组数 (相邻两期计算)
				 * @param  {Array}  arr 当前的数组
				 * @param  {Array}  nextArr 比较数组
				 * @return {int} 重号组数
				 */
				sameJoinGroupsCount:function(arr,eqArr){

					return this.intersect(arr,eqArr).length;
				},
				
				/**
				 * 连号组数（邻号组数-同期计算）
				 * @param  {Array}  arr 被计算的数组
				 * @return {int} 连号组数
				 */
				joinGroupsCount:function(arr){
					arr = this.sort(arr);
					var n = 0;
		            var count = 0;
		            var rowcount = arr.length;
		            for (var i = 1; i < rowcount; i++)
		            {
		                if (Math.abs(arr[i] - arr[i - 1]) == 1)
		                {
		                    n += 1;
		                }
		                else
		                {
		                    if (n >= 1)
		                    {
		                        count += 1;
		                    }
		                    n = 0;
		                }
		                if (n >= 1 && (i + 1) == rowcount)
		                {
		                    count += 1;
		                }
		            }
		            return count;
				},
				/**
				 * 连号组数（邻号组数（两两相连就算一组）-同期计算）
				 * @param  {Array}  arr 被计算的数组
				 * @return {int} 连号组数
				 */
				joinTwoGroupsCount:function(arr){
					arr = this.sort(arr);
		            var count = 0;
		            for (var i = 1; i < arr.length; i++)
		            {
		                if (Math.abs(arr[i] - arr[i - 1]) == 1)
		                {
		                    count += 1;
		                }
		               
		            }
		            return count;
				},
				/**
				 * 连号个数（最大一组相连号码的个数-同期计算）
				 * @param  {Array}  arr 被计算的数组
				 * @return {int} 连号个数
				 */
				joinMaxCount:function(arr){
					arr = this.sort(arr);
					var n = 0;
		            var sum = 0;
		            var rowcount = arr.length;
		            for (var i = 1; i < rowcount; i++)
		            {
		                if (Math.abs(arr[i] - arr[i - 1]) == 1)
		                {
		                    n += 1;
		                }
		                else
		                {
		                    if (n >= 1)
		                    {
		                        sum += n;
		                    }
		                    n = 0;
		                }
		                if (n >= 1 && (i + 1) == rowcount)
		                {
		                    sum += n;
		                }
		            }
		            return sum;
				},
				/**
				 * 斜连号组数
				 * @param  {Array}  arr 被计算的数组
				 * @param  {Array}  eqArr 比较数组
				 * @param  {int}  diff 差值（差值1邻号，差值2....跳号(间号)）
				 * @return {int} 斜连号组数
				 */
				joinleftGroupsCount:function(arr,eqArr,diff){
					if(!diff) diff = 1;
					arr = this.sort(arr);
					eqArr = this.sort(eqArr);
					var count = 0;
		            for (var i = 0; i < arr.length; i++)
		            {
		                for (var j = 0; j < eqArr.length; j++)
		                {
		                    if (Math.abs(arr[i] - eqArr[j]) == diff)
		                    {
		                        count += 1;
		                    }
		                }
		            }
		            return count;

				},
			/*******************************************形态计算 end**************************************/



				/**
				 * 数组最大值
			     * 这一块的封装，主要是针对数字类型的数组
			     * 例如：maxArr([10,20,15])  输出结果:20
				 * @param  {Array} arr 被计算数组
				 * @return {int}    数组中最大值
				 */
			    maxArr: function(arr) {
			        return Math.max.apply(null, arr);
			    },
			    /**
				 * 数组最小值
				 * @param  {Array} arr 被计算数组
				 * @return {int}    数组中最小值
				 */
			    minArr: function(arr) {
			        return Math.min.apply(null, arr);
			    },

			    /**
				 * 数组求和
				 * @param  {Array} arr 被计算数组
				 * @return {int}    数组和值
				 */
			    sumArr: function(arr) {
			        return arr.reduce(function(pre, cur) {
			            return parseInt(pre) +parseInt(cur);
			        });
			    },
			     /**
				 * 和尾值
				 * @param  {number} sum 被计算值
				 * @return {int}    尾数
				 */
			    sumEnd: function(sum) {
			       if(typeof sum != "number"){
						sum = parseInt(sum);
					}
					return parseInt(sum%10);
			    },

			    /**
				 * 数组平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活了！
				 * @param  {Array} arr 被计算数组
				 * @return {float}    平均值
				 */
			    avgArr: function(arr) {
			        return this.sumArr(arr) / arr.length;
			    },

			    /**
				 * 判断一个元素是否在数组中
				 * @param  {Array} arr 被计算数组
				 * @return {Boolen}  true包含，否则不包含
				 */
				contains:function(arr, val) {
				  return arr.indexOf(val) != -1 ? true : false;
				},
				/**
				 * @param {Array} arr 数组
				 * @param {function}  fn 回调函数
				 * @return {undefined}
				 */
				each:function(arr, fn) {
				  fn = fn || Function;
				  var a = [];
				  var args = Array.prototype.slice.call(arguments, 1);
				  for(var i = 0; i < arr.length; i++) {
				    var res = fn.apply(arr, [arr[i], i].concat(args));
				    if(res != null) a.push(res);
				  }
				},
				/**
				 * @param {Array} arr 数组
				 * @param {function} fn 回调函数
				 * @param {thisObj} this指向
				 * @return {Array}  
				 */
				map:function(arr, fn, thisObj) {
				  var scope = thisObj || window;
				  var a = [];
				  for(var i = 0, j = arr.length; i < j; ++i) {
				    var res = fn.call(scope, arr[i], i, this);
				    if(res != null) a.push(res);
				  }
				  return a;
				},
				/**
				 * @param {Array} arr 数组
				 * @param {int} type 1：从小到大  2：从大到小  3：随机
				 * @return {Array}
				 */
				sort: function(arr, type) {
				  if(!type) type = 1;
				  return arr.sort(function(a, b) {
				    switch(type) {
				      case 1:
				        return a - b;
				      case 2:
				        return b - a;
				      case 3:
				        return Math.random() - 0.5;
				      default:
				        return arr;
				    }
				  })
				},
				/**
				 * 去重
				 * @param  {Array} arr 数组
				 * @return {Array}     去掉重复值的新数组
				 */
			    unique:function(arr) {
				  if ( Array.hasOwnProperty('from') ) {
				    return Array.from(new Set(arr));
				  }else{
				    var n = {},r=[]; 
				    for(var i = 0; i < arr.length; i++){
				      if (!n[arr[i]]){
				        n[arr[i]] = true; 
				        r.push(arr[i]);
				      }
				    }
				    return r;
				  }
				},
			    /**
			     * 求两个集合的并集
			     * @param  {Array} a 数组
			     * @param  {Array} b 数组
			     * @return {Array}   a,b数组的并集数组
			     */
				union:function(a, b) {
				  var newArr = a.concat(b);
				  return this.unique(newArr);
				},
				 
				 /**
			     * 求两个集合的交集
			     * @param  {Array} a 数组
			     * @param  {Array} b 数组
			     * @return {Array}   a,b数组的交集数组
			     */
				intersect:function(a, b) {
				  var _this = this;
				  a = this.unique(a);
				  return this.map(a, function(o) {
				    return _this.contains(b, o) ? o : null;
				  });
				},
				/**
				 * 设置元素透明度
				 * @param {[type]} elm   元素对象
				 * @param {[type]} value 值
				 */
				setAlphaOpacity:function (elm, value) {
				    elm = typeof elm == "string" ? document.getElementById(elm) : elm;
				    if (document.all) {  //IE
				        elm.style.filter = 'alpha(opacity=' + value + ')';
				    } else {             //FF
				        elm.style.opacity = value / 100;
				    }
				},
				/** 
				* 解析目标URL中的参数成json对象
				* @function
				* @param {string} url 目标URL
				* @returns {JSON} 解析结果对象
				*/
				queryToJson:function (url) {
				    var query = url.substr(url.indexOf('?') + 1), params = query.split('&'), len = params.length, result = {}, i = 0, key, value, item, param;
				    for (; i < len; i++) {
				        param = params[i].split('=');
				        key = param[0];
				        value = param[1];
				        item = result[key];
				        if ('undefined' == typeof item) {
				            result[key] = value;
				        }
				        else
				            if (Object.prototype.toString.call(item) == '[object Array]') {
				                item.push(value);
				            }
				            else {
				                result[key] = [item, value];
				            }
				    }
				    return result;
				},
				
				htmlEnCode:function (str) {
				    var s = "";
				    if (str.length == 0) return "";
				    s = str.replace(/&/g, "&gt;");
				    s = s.replace(/</g, "&lt;");
				    s = s.replace(/>/g, "&gt;");
				    s = s.replace(/    /g, "&nbsp;");
				    s = s.replace(/\'/g, "&#39;");
				    s = s.replace(/\"/g, "&quot;");
				    s = s.replace(/\n/g, "<br>");
				    return s;
				},

				htmlDeCode:function (str) {
				    var s = "";
				    if (str.length == 0) return "";
				    s = str.replace(/&gt;/g, "&");
				    s = s.replace(/&lt;/g, "<");
				    s = s.replace(/&gt;/g, ">");
				    s = s.replace(/&nbsp;/g, "    ");
				    s = s.replace(/&#39;/g, "\'");
				    s = s.replace(/&quot;/g, "\"");
				    s = s.replace(/<br>/g, "\n");
				    return s;
				}
    };

    module.exports = Chart;
});