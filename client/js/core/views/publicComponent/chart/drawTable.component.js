/***********************Base类扩展(包含奇偶*************************/
define([
      './baseExt.component'
   ], function(
      _BaseExt
   ) {
       

    var _Object = {};

    _Object.addOne=0;

    _Object.tbodyOBject;

    _Object.drawColumn;

    _Object.theadColumn;

    /**
     *  渲染表格;
     *  @parm: 容器的id;
     *  @parm: 表格的id;
     *  @parm: 画线对象;
     *  @parm: thead结构对象;
     *  @parm: tbody数据对象;
     *  @parm: css结构对象;
     *  @param: 回调函数;
     */
    _Object.renderTable = function(_containerId, _tableId, _canvasId, _theadObject, _tbodyOBject, _cssObject, _callBack){


        if(_theadObject == undefined){
            console.error('你都没配thead.config.js配置！！！！!');
            return;
        }

        if(_cssObject == undefined){
            console.error('你都没配style.config.js配置！！！！!');
            return;
        }

        if(_tbodyOBject == undefined){
            console.error('请求肯定出问题啦～，都没数据源！！！，又或者是你dealWithData.container没有返回数据啦！！！！');
            return
        }


        var _container  = document.getElementById(_containerId);

        var _theadTitle = _Object.getTheadTitle(_theadObject);

        /** 获取_tBody的字符串 */
        var _tBody      = _Object.renderTbody(_tbodyOBject, _theadTitle, _cssObject, _theadObject);

        var _tBodyHtml  = _tBody.html;

        var _drawColumn = _tBody.drawColumn;

        /** 头部总共有多少行 */
        var _theadColumn = _Object.getTheaderMaxColumn(_Object.renderThead(_theadObject));


        _Object.tbodyOBject = _tbodyOBject;
        _Object.drawColumn = _drawColumn;
        _Object.theadColumn = _theadColumn;

        var _tableHtml ='';

        if(_tbodyOBject.missBottomStatList == undefined){

            /** 渲染头部和内容 */
            _tableHtml = '<thead>' + _Object.renderThead(_theadObject) + '</thead>' +
                '<tbody class="trend">' + _tBodyHtml + '</tbody>' ;

        }else{

            /** 渲染头部和内容 */
            _tableHtml = '<thead>' + _Object.renderThead(_theadObject) + '</thead>' +
                '<tbody class="trend">' + _tBodyHtml + '</tbody>' +
                '<tbody class="preselection"></tbody>' +
                '<tbody class="thead">' + _Object.renderThead(_theadObject, 2) + '</tbody>' +
                '<tbody class="statistics">' + _Object.renderStatistics(_theadTitle , _tbodyOBject, _cssObject) + '</tbody>';
        }


            

        _container.innerHTML = '<table cellpadding="0" cellspacing="0" border="1" width="100%" id="' + _tableId + '">' + _tableHtml + '</table><div id="' + _canvasId + '" style="display:none;"></div>';

        /** 回调函数 需要先回调去显示数据填满表格，否则会出现表格位置偏移导致画线不正确的问题 */
        _callBack();

        $('#'+_canvasId).html('');

        /** 绘制画线 */
        _Object.drawTableLine(_containerId, _tableId, _canvasId, _tbodyOBject, _BaseExt, _drawColumn, _theadColumn);

        

    }




    /**
     *  update线条;
     */
    _Object.updateTableLine = function (_containerId, _tableId, _canvasId) {

        if(_canvasId!=undefined){
            if( document.getElementById(_canvasId)!=null){
                /** 清空画布 */
                document.getElementById(_canvasId).innerHTML = '';
            }

           /** 再重新画线 */
          _Object.drawTableLine(_containerId, _tableId, _canvasId, _Object.tbodyOBject, _BaseExt, _Object.drawColumn, _Object.theadColumn);
        }

    }


    /**
     * 画线函数
     */
    _Object.drawTableLine = function(_containerId, _tableId, _canvasId, _tbodyOBject, _drawBaseObject, _drawColumn, _theadColumn) {

        var drawBaseObject = new _drawBaseObject(_containerId, _tableId);

        var lineArray = [];

        for (var key in _drawColumn) {

            if (!_drawColumn[key].column[0]) {

                console.error(key + '部分画线缺少开始列(begincol):');
                return false;

            } else if (!_drawColumn[key].column[_drawColumn[key].column.length - 1]) {

                console.error(key + '部分画线缺少结束列(endcol):');
                return false;

            } else if (!_theadColumn) {

                console.error(key + '部分画线缺少开始行(beginclum):');
                return false;

            } else if (!(_theadColumn + _tbodyOBject.missStatList.length)) {

                console.error(key + '部分画线缺少结束行(endclum):');
                return false;

            } else if (!_drawColumn[key].lineWidth) {

                console.error(key + '部分画线缺少画线的宽度(lineWidth):');
                return false;

            } else if (!_drawColumn[key].lineColor) {

                console.error(key + '部分画线缺少画线的颜色(lineColor):');
                return false;

            } else if (!_canvasId) {

                console.error(key + '部分画线缺少canvas对象id名(canvas):');
                return false;
            }


            var _type= 1;

            /** 如果样式名中出现ball得，表示是球号，那么就用type=1的画线方法，如果是样式名中出现box得，则表示用type=2的方块类型画图 */
            if(/ball/g.test(_drawColumn[key].className)){

                _type = 1;

            }else if(/box/g.test(_drawColumn[key].className)){

                _type = 2;
            }



            lineArray.push({

                begincol: _drawColumn[key].column[0] - 1,

                endcol: _drawColumn[key].column[_drawColumn[key].column.length - 1],

                beginclum: _theadColumn,

                endclum: _theadColumn + _tbodyOBject.missStatList.length,

                className: _drawColumn[key].className,

                lineWidth: _drawColumn[key].lineWidth ? _drawColumn[key].lineWidth : 1,

                lineColor: _drawColumn[key].lineColor ? _drawColumn[key].lineColor : 'red',

                canvas: _canvasId,

                type: _type

            });

        }

        /** 
         * 开始绘制画线
         */
        drawBaseObject.DrawLineArr(lineArray);
    }


    /**
     *  渲染统计
     */
    _Object.renderStatistics = function(_theadTitle, _tbodyOBject, _cssObject){

        if (!_tbodyOBject || !_theadTitle || !_cssObject) {

            console.error('renderStatistics: 参数不能为空！');

            return;
        }

        var result = _tbodyOBject.missBottomStatList;


        /** 获取开奖号码总共有多少个 */
        // var statResultLength = _tbodyOBject.missStatList[0].result.split(',').length;
        
        var tdString = '';
        var trString = '';

        if(_tbodyOBject.missStatList[0]!=undefined){
            var statResultLength = _tbodyOBject.missStatList[0].statResult.length;

            var cssBottomThead = _cssObject.missBottomStatList;

            var isShow;

            var fontArray = ['出现总次数', '最大遗漏值', '最大连出值'];

            /** 列数 */
            var column = 0;

            for (var i = 0; i < result.length; i++) {
                column++;
                tdString = '';
                tdString += '<td column="'+column+'">' + fontArray[i] + '</td>';


                if (result[i].result != null) {

                    if(result[i].result != ''){

                        var resultArr  = result[i].result.split(',')

                        for (var j = 0; j < resultArr.length; j++) {

                              tdString += '<td column="'+column+'"  class="'+(cssBottomThead.period ? cssBottomThead.period : "")+'"  ><span  class="'+(cssBottomThead.periodSpan ? cssBottomThead.periodSpan : "")+'">' +  resultArr[i] + '</span></td>';

                        }
                    }else{
                       // column ++;
                        tdString += '';
                    }


                }else {
                    column = statResultLength;

                    tdString += '<td column="'+column+'" class="'+(cssBottomThead.period ? cssBottomThead.period : "")+'"  colspan="'+ (statResultLength+_Object.addOne) +'">&nbsp;</td>';

                    column++;
                }

                // 时时彩五星大小/奇偶走势统计表格处理

                // 获取需要额外处理的单元
                var otherColumn = [];
                var otherColumnData = {};
                // 添加如果有额外数据单独填充
                if(result[i].otherData) {
                    result[i].otherData.forEach( function(other){
                        otherColumn.push(other.column);
                        otherColumnData[other.column] = other;
                    });
                }

                // 排序
                otherColumn = otherColumn.sort( function(a,b) {return a > b});
                /** 
                 * 出现次数
                 */
                if (i == 0) {

                    for (var key in result[i].statData) {

                        // 进入了table循环，如果有otherColumn，则代表需要在statData之中进行处理可能出现的otherData情况
                        if(_Object.contains(otherColumn, column)) {

                            tdString += '<td class="'+ (otherColumnData[column].bg ? otherColumnData[column].bg : '') +'" column="' + (column + 1) + '">' + otherColumnData[column].data + '</td>';
                            column++;
                            // 前面已经经过排序，所以直接pop最新一个就好
                            otherColumn.shift();
                        }

                        for (var j = 0; j < result[i].statData[key].length; j++) {

                            /** 记录列数 */
                            column++;

                            if( _theadTitle[key] == undefined){

                                console.error('_theadTitle['+key+']为undefined,有可能你的配置thead.config配置和数据源的结构对不上，又或者是thead.config配置和style.config.js的结构对不上！_theadTitle目前是：'+Object.keys(_theadTitle).length+'个模块');
                                return false;
                            }

                            isShow = _theadTitle[key].isShow;

                            tdString += '<td column="'+column+'" class="'+(cssBottomThead.statData[key].defalut ? cssBottomThead.statData[key].defalut : "") +'"  '+(isShow ? "": "style=display:none")+'  modular="'+key+'"><span  class="'+(cssBottomThead.statData[key].defalutSpan ? cssBottomThead.statData[key].defalutSpan : "")+'" >' + result[i].statData[key][j] + '</span></td>'

                        }

                    }

                } else {

                    for (var key in result[i].statData) {

                        // 进入了table循环，如果有otherColumn，则代表需要在statData之中进行处理可能出现的otherData情况
                        if(_Object.contains(otherColumn, column)) {

                            tdString += '<td class="'+otherColumnData[column].bg+'" column="' + (column + 1) + '">' + otherColumnData[column].data + '</td>';
                            column++;
                            // 前面已经经过排序，所以直接pop最新一个就好
                            otherColumn.shift();
                        }

                        for (var j = 0; j < result[i].statData[key].length; j++) {
                            /** 记录列数 */
                            column++;

                            isShow = _theadTitle[key].isShow;

                            tdString += '<td column="'+column+'" class="'+(cssBottomThead.statData[key].defalut ? cssBottomThead.statData[key].defalut  : "") +'"  '+(isShow ? "": "style=display:none")+' modular="'+key+'" >' + result[i].statData[key][j] + '</td>'

                        }

                    }

                }

                // 如果仍然有其它的行数需要填充
                if(otherColumn.length > 0) {
                    tdString += '<td class="'+ (otherColumnData[column].bg ? otherColumnData[column].bg : '') +'" column="' + (column + 1) + '">' + otherColumnData[column].data + '</td>';
                    column++;
                    // 前面已经经过排序，所以直接shift最新一个就好
                    otherColumn.shift();
                }
                column = 0;
                trString += '<tr>' + tdString + '</tr>'

            }
        }

        return trString;

    }


    /** 
     * 获取头部最大的行数;
     */
    _Object.getTheaderMaxColumn = function(_theadString) {

        if (!_theadString) {

            console.error('getTheaderMaxColumn: 参数不能为空！');
        }

        return (_Object.patch(_theadString, '<tr>'));

    }


    /** 
     * 正则找到对应的字符在字符串中出现的次数;
     */
    _Object.patch = function(_string, _re) {

        _re = eval("/" + _re + "/ig");

        return _string.match(_re) ? _string.match(_re).length : 0;
    }

    /**
     *  判断元素是否在数组中;
     *  @param { 数组 } _arr,
     *  @param {需要判断是否在数组中得元素}  _obj
     */
    _Object.contains = function(_arr, _obj){

        if(!_arr || typeof(_arr) != 'object'){
            console.error('contains：参数1不存在或者不正确！');
            return ;
        }

        if(!_obj){
            console.error('contains：参数2不存在！');
            return ;
        }

        var i = _arr.length;
        while (i--) {
            if (_arr[i] === _obj) {
                return true;
            }
        }
        return false;
    }


    /** 
     * 渲染table中的thead
     */
    _Object.renderThead = function(_theadObject, _type) {


        if (!_theadObject) {
            console.error('renderThead：参数theadObject不能为空！');
            return;
        }


        if(_type == undefined){

          _type = 1;

        }else{
 
          if(!_Object.contains([1,2], _type)){
          
            _type = 1;
          
          }  

        }

        var theadString = '';

        var thString = '';

        var minLength = 0;

        var maxLength = 0;

        var isShow;

        var rowspanNum = 0;


        for (var i = 0; i < _theadObject.length; i++) {

            thString = '';
            for (var key in _theadObject[i]) {


                if(_theadObject[i][key].isShow == undefined){
                    isShow  = true;
                }else{
                    isShow = (_theadObject[i][key].isShow == true) ? true : false;
                }


                var modular;
                if(parseInt(key.replace('_th','')) == 0){
                    modular = 0;
                }else{
                    modular = parseInt(key.replace('_th','') -1);
                }


                /** 看看有没rowspan属性(行属性) */
                if (_theadObject[i][key].rowspan) {


                    /** 看看有没colspan属性 */
                    if (_theadObject[i][key].colspan) {

                        thString += '<'+ (_type == 1 ? "th": "td") +'    colspan="' + _theadObject[i][key].colspan + '" rowspan="' + _theadObject[i][key].rowspan + '"  '+(isShow ? "": "style=display:none")+' '+(_theadObject[i][key].width? "width="+_theadObject[i][key].width: "")+'>' + _theadObject[i][key].content + '</'+ (_type == 1 ? "th": "td") +'>';

                    } else {
                        
                        thString += '<'+ (_type == 1 ? "th": "td") +'   rowspan="' + _theadObject[i][key].rowspan + '"   '+(isShow ? "": "style=display:none")+'  '+(_theadObject[i][key].width? "width="+_theadObject[i][key].width: "")+'>' + _theadObject[i][key].content + '</'+ (_type == 1 ? "th": "td") +'>';

                    }

                    rowspanNum++;

                } else {



                    /** 看看有没colspan属性 */
                    if (_theadObject[i][key].colspan) {

                        thString += '<'+ (_type == 1 ? "th": "td")  +'  modular="data_'+ (modular-rowspanNum) +'"  colspan="' + _theadObject[i][key].colspan + '"  '+(isShow ? "": "style=display:none")+' '+(_theadObject[i][key].width? "width="+_theadObject[i][key].width: "")+'>' + _theadObject[i][key].content + '</'+ (_type == 1 ? "th": "td") +'>';

                    } else {

                        /** 看看有没value这个值 */
                        if (_theadObject[i][key].value) {


                            /** 如果存在‘～’这个符合,表示是用数字切割 */
                            if (/\~/g.test(_theadObject[i][key].value)) {


                                minLength = parseInt(_theadObject[i][key].value.replace(/(^\s*)|(\s*$)/g, "").split('~')[0]);

                                maxLength = parseInt(_theadObject[i][key].value.replace(/(^\s*)|(\s*$)/g, "").split('~')[1]);


                                /** 循环这个td的列数 */
                                for (var j = minLength; j <= maxLength; j++) {

                                    /** 判断是否需要显示数字前面加上0 */
                                    if (_theadObject[i][key].isShowZero) {

                                        /** 如果小于10的话,则在前面加上0*/
                                        thString += '<'+ (_type == 1 ? "th": "td") +'  modular="data_'+modular+'"  '+(isShow ? "": "style=display:none")+'>' + (j < 10 ? ('0' + j) : j) + '</'+ (_type == 1 ? "th": "td") +'>';


                                    } else {

                                        thString += '<'+ (_type == 1 ? "th": "td") +'  modular="data_'+modular+'"  '+(isShow ? "": "style=display:none")+'>' + j + '</'+ (_type == 1 ? "th": "td") +'>';

                                    }


                                }


                                /** 如果存在‘|’这个符合,表示是用字符串切割 */
                            } else if (/\|/g.test(_theadObject[i][key].value)) {

                                var tempArray = _theadObject[i][key].value.replace(/(^\s*)|(\s*$)/g, "").split('|');

                                for (var j= 0; j < tempArray.length; j++) {
                                    if(!tempArray[j]) continue;
                                    thString += '<'+ (_type == 1 ? "th": "td") +'  modular="data_'+modular+'"   '+(isShow ? "": "style=display:none")+'>' + tempArray[j] + '</'+ (_type == 1 ? "th": "td") +'>';

                                }

                            } else {
                                thString += '<'+ (_type == 1 ? "th": "td") +'  modular="data_'+modular+'"   '+(isShow ? "": "style=display:none")+'>' + _theadObject[i][key].value + '</'+ (_type == 1 ? "th": "td") +'>';
                            }

                        }

                    }

                }

            }

            theadString += '<tr>' + thString + '</tr>';

        }

        return theadString;

    }




    /** 
     * 获取thead中的标题值, 用于填充接口中0的值;
     * @parm: 头部配置对象;
     */
    _Object.getTheadTitle = function(_theadObject){

        if (!_theadObject) {
            console.error('getTheadTitle：参数theadObject不能为空！');
            return;
        }

        var statDataTitle = [];

        var minLength = 0;

        var maxLength = 0;

        var temp = 0;

        var  isShow;

        for (var i = 0; i < _theadObject.length; i++) {

            for (var key in _theadObject[i]) {

                if (_theadObject[i][key].value !=undefined) {

                    var tempArray = [];

                    if(_theadObject[i][key].value != ''){

                        /** 如果存在‘～’这个符合,表示是用数字切割 */
                        if (/\~/g.test(_theadObject[i][key].value)) {


                            minLength = parseInt(_theadObject[i][key].value.replace(/(^\s*)|(\s*$)/g, "").split('~')[0]);

                            maxLength = parseInt(_theadObject[i][key].value.replace(/(^\s*)|(\s*$)/g, "").split('~')[1]);


                            /** 循环这个td的列数 */
                            for (var j = minLength; j <= maxLength; j++) {

                                /** 判断是否需要显示数字前面加上0 */
                                if (_theadObject[i][key].isShowZero) {

                                    /** 如果小于10的话,则在前面加上0*/
                                    tempArray.push((j < 10 ? '0' + j : j));

                                } else {

                                    tempArray.push(j);
                                }
                            }

                            /** 如果存在‘|’这个符合,表示是用字符串切割 */
                        } else if (/\|/g.test(_theadObject[i][key].value)) {

                            var array = _theadObject[i][key].value.replace(/(^\s*)|(\s*$)/g, "").split('|');

                            for (var j = 0; j < array.length; j++) {

                                tempArray.push(array[j]);

                            }

                        }

                    }



                    if(_theadObject[i][key].isShow == undefined){
                        isShow  = true;
                    }else{
                        isShow = (_theadObject[i][key].isShow == true) ? true : false;
                    }

                    statDataTitle['data_' + temp] = {
                        isDrawLine: _theadObject[i][key].isDrawLine ? true : false,
                        data: tempArray,
                        isShow: isShow,
                        isSwitch: _theadObject[i][key].isSwitch,
                        specValue: _theadObject[i][key].specValue,
                        replaceTitle: _theadObject[i][key].replaceTitle,
                        isAllAwardNumber: _theadObject[i][key].isAllAwardNumber,     /** 一行里面所有得开奖号码得和值 */
                        width: _theadObject[i][key].width
                    }

                    temp++;

                }

            }

        }

        return statDataTitle;

    }


    /**
     *  渲染tbody
     *  @parm: tbody数据
     *  @parm:
     *  @parm:
     */
    _Object.renderTbody = function(_tbodyOBject, _theadTitle, _cssObject, _theadObject){

        if (!_tbodyOBject) {
            console.error('renderTbody：参数tbodyOBject不能为空！');
            return;
        }

        var result = _tbodyOBject.missStatList;
        var cssObject = _cssObject.missStatList;

        var stringHtml = '';

        /** 列数 */
        var column = 0;

     
        for (var i = 0; i < result.length; i++) {

            /** 期数 */
            var period;

            if (result[i].period) {

                column++; //1列数

                period = '<td class="' + (cssObject.periodNumber ? cssObject.periodNumber: "") + '"  column="' + column + '"  modular="period_0">' + result[i].period + '</td>';

            } else {

                period = '';
                console.warn('period为空！');
            }

            /** 开奖号码 */
            var statResult = '';

            var statData = '';

            var drawColumn = {};

            var allAwardNumber = 0;       /** 开奖号码得和值 */

            if (result[i].result ) {

                /***************************  如果开奖号码td里面有i标签得用这种方式  *****************************/
                //for (var j = 0; j < result[i].statResult.length; j++) {

                //    statResultI += '<td>' + result[i].statResult[j] + '</td>';
                //}

                //column++; //2列数

                /** 把开奖号码塞到td中 */
                //statResult += '<td class = "' + (cssObject.period ? cssObject.period: "") + '" column="' + column + '">' + statResultI + '</td>';

                /***************************  如果开奖号码全部都是td用这种方式  *****************************/
                var statResultArray = result[i].statResult;
                if(_theadObject && _theadObject[0] && !_theadObject[0]['_th2'].noZero) {
                    var tmpResult = [];
                    statResultArray.forEach(function(item){
                        tmpResult.push(item < 10 ? ('0' + item) : item);
                    });
                    statResultArray = tmpResult;
                }
                

                // var statResultArray = result[i].result.split(',');

                for (var j = 0; j < statResultArray.length; j++) {


                    /** 如果开奖号码中存在"|"分割符合得话 , 则给开奖号码中添加一列蓝球 */
                    if(/\|/g.test(statResultArray[j])){

                        var tempString = statResultArray[j].replace(/(^\s*)|(\s*$)/g, "").split('|');


                       for(var z=0; z < tempString.length; z++){

                           if(z == tempString.length - 1){

                               /** 把开奖号码塞到td中 */
                               statResult += '<td class = "' + (cssObject.period ? cssObject.period: "") + '  ' + (cssObject.periodBall ? cssObject.periodBall: "") + '"  column="' + column + '"  modular="result_'+j+'"><span class="'+(cssObject.periodSpan ? cssObject.periodSpan: "")+'">' + tempString[z] + '</span></td>';

                           }else{

                               /** 把开奖号码塞到td中 */
                               statResult += '<td class = "' + (cssObject.period ? cssObject.period: "") + '" column="' + column + '"  modular="result_'+j+'"><span class="'+(cssObject.periodSpan ? cssObject.periodSpan: "")+'">' + tempString[z] + '</span></td>';
                           }


                           column++; //2列数
                       }

                      _Object.addOne=1;

                    }else{

                        /** 把开奖号码塞到td中 */
                        statResult += '<td class = "' + (cssObject.period ? cssObject.period: "") + '" column="' + column + '"  modular="result_'+j+'"><span class="'+(cssObject.periodSpan ? cssObject.periodSpan: "")+'">' + statResultArray[j] + '</span></td>';

                        column++; //2列数

                    }

                    allAwardNumber += parseInt(statResultArray[j]);

                }

                statResultI = '';

            } else {

                statResult += '';
                console.warn('statResult为空！');

            }


            // 获取需要额外处理的单元
            var otherColumn = [];
            var otherColumnData = {};
            // 添加如果有额外数据单独填充
            if(result[i].otherData) {    
                result[i].otherData.forEach(function(other){
                    otherColumn.push(other.column);
                    otherColumnData[other.column] = other;
                });
            }
 
            // 排序
            otherColumn = otherColumn.sort(function(a,b){return a > b});

            for (var key in result[i].statData) {

                var tempArr = [];
                // 进入了table循环，如果有otherColumn，则代表需要在statData之中进行处理可能出现的otherData情况
                if(_Object.contains(otherColumn, column)) {
                        
                    statData += '<td class="'+ (otherColumnData[column].bg ? otherColumnData[column].bg : '') +'" column="' + (column + 1) + '">' + otherColumnData[column].data + '</td>';
                    column++;
                    // 前面已经经过排序，所以直接pop最新一个就好
                    otherColumn.shift();
                }

                for (var j = 0; j < result[i].statData[key].length; j++) {

                    /** 记录列数 */
                    column++;

                    /** 把对应每一区块的列数号存到临时数组中 */
                    tempArr.push(column);

                    /** 如果是0表示是开奖号码 */
                    if (result[i].statData[key][j] == 0) {

                        // 添加同行颜色切换逻辑，如果一个th之中需要有多个颜色切换
                        var switchCss = '';
                        if(_theadTitle[key].isSwitch) {
                            switchCss = cssObject.statData[key]["switchNumber" + (j+1)];
                        }

                        /** 如果这个值没有的话 , 这个值是用来改掉标题的*/
                        if(_theadTitle[key].replaceTitle == undefined){

                            if(_theadTitle[key].isAllAwardNumber == undefined){

                                statData += '<td class="' + (cssObject.statData[key].awardNumber ? (switchCss ? switchCss : cssObject.statData[key].awardNumber): "") + '  ' + (cssObject.statData[key].specClass ? cssObject.statData[key].specClass: "") + '"  '+
                                    (cssObject.statData[key].awardNumber ? ' css-awardNumber="'+ cssObject.statData[key].awardNumber + '"': "") +
                                    (cssObject.statData[key].heavyNumber ? ' css-heavyNumber="' + cssObject.statData[key].heavyNumber + '"' : "") +
                                    (cssObject.statData[key].serialNumber ? ' css-serialNumber="' + cssObject.statData[key].serialNumber+ '"' : "") +
                                    (cssObject.statData[key].edgeNumber ? ' css-edgeNumber="' + cssObject.statData[key].edgeNumber+ '"' : "") +
                                    (cssObject.statData[key].edgeTwoNumber ? ' css-edgeTwoNumber="' + cssObject.statData[key].edgeTwoNumber+ '"' : "") +

                                    ' column=' + column + ' modular="'+ key +'"  '+(_theadTitle[key].isShow ? "":"style=display:none") +'><span class="'+(cssObject.statData[key].defalutSpan ? cssObject.statData[key].defalutSpan : "")+'">' +
                                    ((_theadTitle[key].data[j] || _theadTitle[key].data[j] == 0) ? _theadTitle[key].data[j] : (_theadTitle[key].specValue ? result[i].statData[key][j] : '')) +
                                    '</span></td>';

                            }else{

                                /** 这部分是0把开奖号码做一个和值处理 */
                                statData += '<td class="' + (cssObject.statData[key].awardNumber ? (switchCss ? switchCss : cssObject.statData[key].awardNumber): "") + '"  '+
                                    (cssObject.statData[key].awardNumber ? ' css-awardNumber="'+ cssObject.statData[key].awardNumber + '"': "") +
                                    (cssObject.statData[key].heavyNumber ? ' css-heavyNumber="' + cssObject.statData[key].heavyNumber + '"' : "") +
                                    (cssObject.statData[key].serialNumber ? ' css-serialNumber="' + cssObject.statData[key].serialNumber+ '"' : "") +
                                    (cssObject.statData[key].edgeNumber ? ' css-edgeNumber="' + cssObject.statData[key].edgeNumber+ '"' : "") +
                                    (cssObject.statData[key].edgeTwoNumber ? ' css-edgeTwoNumber="' + cssObject.statData[key].edgeTwoNumber+ '"' : "") +
                                    ' column=' + column + ' modular="'+ key +'"  '+(_theadTitle[key].isShow ? "":"style=display:none") +'><span class="'+(cssObject.statData[key].defalutSpan ? cssObject.statData[key].defalutSpan : "")+'">' +
                                    allAwardNumber +
                                    '</span></td>';
                            }


                        }else{

                            /** 这部分是0把用replaceTitle函数进行替换 */
                            statData += '<td class="' + (cssObject.statData[key].awardNumber ? (switchCss ? switchCss : cssObject.statData[key].awardNumber): "") + '"  '+
                                (cssObject.statData[key].awardNumber ? ' css-awardNumber="'+ cssObject.statData[key].awardNumber + '"': "") +
                                (cssObject.statData[key].heavyNumber ? ' css-heavyNumber="' + cssObject.statData[key].heavyNumber + '"' : "") +
                                (cssObject.statData[key].serialNumber ? ' css-serialNumber="' + cssObject.statData[key].serialNumber+ '"' : "") +
                                (cssObject.statData[key].edgeNumber ? ' css-edgeNumber="' + cssObject.statData[key].edgeNumber+ '"' : "") +
                                (cssObject.statData[key].edgeTwoNumber ? ' css-edgeTwoNumber="' + cssObject.statData[key].edgeTwoNumber+ '"' : "") +
                                ' column=' + column + ' modular="'+ key +'"  '+(_theadTitle[key].isShow ? "":"style=display:none") +'><span class="'+(cssObject.statData[key].defalutSpan ? cssObject.statData[key].defalutSpan : "")+'">' +
                                _theadTitle[key].replaceTitle(((_theadTitle[key].data[j] || _theadTitle[key].data[j] == 0) ? _theadTitle[key].data[j] : (_theadTitle[key].specValue ? result[i].statData[key][j] : ''))) +
                                '</span></td>';

                        }


                    } else {


                        if( _theadTitle[key] == undefined){

                            console.error('_theadTitle['+key+']为undefined,有可能你的配置thead.config配置和数据源的结构对不上，又或者是thead.config配置和style.config.js的结构对不上！_theadTitle目前是：'+Object.keys(_theadTitle).length+'个模块');
                            return false;
                        }
                        if( cssObject.statData[key] ==undefined){

                            console.error('cssObject.statData['+key+']为undefined,有可能是thead.config配置和style.config.js的结构对不上！cssObject.statData目前是：'+Object.keys(cssObject.statData).length+'个模块');
                            return false;
                        }

                        statData += '<td class="' + (cssObject.statData[key].defalut ? cssObject.statData[key].defalut: "") + (cssObject.statData[key].converAwardNumber ? cssObject.statData[key].converAwardNumber: "") + '"' +
                                    (cssObject.statData[key].omissionDelamination ? ' css-omissionDelamination="' + cssObject.statData[key].omissionDelamination+ '"' : "") +
                                    ' column=' + column + ' modular="'+ key +'"  '+(_theadTitle[key].isShow ? "":"style=display:none") +'  data-value="' + result[i].statData[key][j] + '"><span class="'+(cssObject.statData[key].defalutSpan ? cssObject.statData[key].defalutSpan : "")+'"></span></td>';
                    }
                }

                /** 如果需要画线的，则存到drawColumn中 */
                if (_theadTitle[key].isDrawLine) {

                    drawColumn[key] = {
                        lineColor: cssObject.statData[key].lineColor ? cssObject.statData[key].lineColor : null,
                        lineWidth: cssObject.statData[key].lineWidth ? cssObject.statData[key].lineWidth : 0,
                        className: cssObject.statData[key].awardNumber ? cssObject.statData[key].awardNumber : null,
                        column: tempArr
                    };

                }

            }

            // 如果仍然有其它的行数需要填充
            if(otherColumn.length > 0) {
                statData += '<td class="'+ (otherColumnData[column].bg ? otherColumnData[column].bg : '') +'" column="' + (column + 1) + '">' + otherColumnData[column].data + '</td>';
                column++;
                // 前面已经经过排序，所以直接shift最新一个就好
                otherColumn.shift();
            }

            column = 0;

            stringHtml += '<tr>' + period + statResult + statData + '</tr>';
        }


        return {
            html: stringHtml,
            drawColumn: drawColumn
        };

    }


    return _Object;


});
   
   
