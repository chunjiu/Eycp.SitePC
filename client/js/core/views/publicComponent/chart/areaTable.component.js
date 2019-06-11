define([
    'jquery',
    'Util',
    'Array'
], function (
    $,
    _Util,
    _Array
) {
    var Area = {};


    /**
     * 绘制区域图表
     * @param {*} containerId 
     * @param {*} data 
     * @param {*} headerObj 
     * @param {*} needEach 
     * @param {*} type 
     * @param {*} callback 
     */
    Area.renderTable = function(containerId, data, headerObj, needEach, type, callback) {
        var result = '<table>'+ renderTeader(headerObj) + '\r\n' + renderTbody(type == 1 ? data : data.data, headerObj, needEach) +'</table>';
        $('#' + containerId).html(result);
        // 如果是type == 2 代表是多日统计，需要写入统计期数
        if(type == 2) {
            $('#' + containerId).append('<input id="periodCount" type="hidden" value="'+ data.periodCount + '">');
        }
        if(typeof callback === 'function') {
            callback.call(this, data);
        }
    }

    /**
     * 绘制头部
     * @param {*} headerObj 
     */
    function renderTeader(headerObj) {
        var reuslt = [];
        if(!headerObj) throw '请配置headerConfig';
        // 获取总key内容
        var count = 0;
        for (var key in headerObj) {
            count++;
        }

        var percent = (100 / count) + '%';

        // 获取key值和内容
        for (var key in headerObj) {

            var tmp = headerObj[key];
            if(tmp.needSort) {
                reuslt.push('<th width="'+ percent +'">'+
                '<div class="lt-tableThBlock">' +
                    '<div class="thBlock">' +
                        '<span class="thName">'+ headerObj[key].content +'</span>' +
                        '<span class="thArrow" data-index="'+ key +'">' +
                            '<i data-sort="up" class="top "></i>' +
                            '<i data-sort="down" class="bottom"></i>' +
                        '</span>' +
                    '</div>' +
                '</div>'+
            '</th>');
            } else {
                reuslt.push('<th width="'+ percent +'">'+
                '<div class="lt-tableThBlock">' +
                    '<div class="thBlock">' +
                        '<span class="thName">'+ headerObj[key].content +'</span>' +
                    '</div>' +
                '</div>'+
            '</th>');
            }
        }

        return '<tr>' + reuslt.join('\r\n') + '</tr>'

    }

    /**
     * 绘制内容
     * @param {*} data 
     * @param {*} needEach 
     */
    function renderTbody(data, headerObj, needEach) {
        var eachClass = '';
        if(needEach) {
            eachClass = ' class="even"';
        }
        var columnCount = 0;
        // 获取总列数
        for(var j in headerObj) {
            columnCount++;
        }

        var resultTrList = [];
        for(var i = 0; i < data.length; i ++) {
            var resultTdList = [];
            for(var j = 0; j < columnCount;j ++) {
                if (j === 0) {
                    // 第一列强制不换行
                    resultTdList.push('<td><span data-cloumn="'+ j +'" data-value="'+ data[i][j] +'" class="textNumberB" style="white-space: nowrap;">'+ data[i][j] +'</span></td>');
                } else {
                    resultTdList.push('<td><span data-cloumn="' + j + '" data-value="' + data[i][j] + '" class="textNumberB">' + data[i][j] + '</span></td>');
                }
            }
            resultTrList.push(i % 2 == 1 ? '<tr '+ eachClass +'>'+ resultTdList.join('\r\n') +'</tr>' : '<tr>'+ resultTdList.join('\r\n') +'</tr>');
        }

        return resultTrList.join('\r\n');
    }


    /**
     *   渲染统计图表
     *   @param: 容器的id；
     *   @param: 数据源;
     *   @param: 表格头的配置；
     *   @param: 回调函数;
     */
    Area.renderTableTotal = function(_containerId, _tbodyObject ,_theaderObject,  _callback) {

        if(_containerId == undefined && typeof(_containerId) != 'string' ){

               console.error('renderTableTotal: _containerId参数不能为空或者不是字符串类型！');

               return false;
        }

        if(_tbodyObject == undefined && typeof(_tbodyObject) !='object'){

            console.error('renderTableTotal: _tbodyObject参数不能为空或者不是对象类型！');

            return false;
        }

        if(_theaderObject == undefined && typeof(_theaderObject) != 'object'){

            console.error('renderTableTotal: _theaderObject参数不能为空或者不是对象类型！');

            return false;
        }


        if(typeof(callback) == 'function') {

            console.error('renderTableTotal: _callback回调函数不为函数类型！');

            return false;
        }


        var  result = '<table>'+ Area.renderTeadTotal(_theaderObject, _tbodyObject) + '\r\n' +
                                             Area.renderTbodyTotal(_tbodyObject) +'</table>';

        $('#' + _containerId).html(result);

        if(_callback !=undefined && typeof(_callback) == 'function'){
            _callback();
        }


    }


    /**
     * 绘制头部(统计)
     * @param {*} _theadObject
     * @param {*} _tbodyObject
     */
    Area.renderTeadTotal = function(_theadObject, _tbodyObject) {

        if (_theadObject == undefined && typeof(_theadObject) != 'object') {

            console.error('renderTableTotal: _theaderObject参数不能为空或者不是对象类型！');

            return false;
        }

        if (_tbodyObject == undefined && typeof(_tbodyObject) != 'object') {

            console.error('renderTableTotal: _tbodyObject参数不能为空或者不是对象类型！');

            return false;
        }

        var _thString = '';

        var _outCountArray = _tbodyObject[0].outCount;

        for(var key in _theadObject[0] ){

            _thString +='<th><div class="lt-tableThBlock"><div class="thBlock"><span class="thArrow" style="margin-right: 5px;"><i class="top '+(key=="_th1"? "active":"")+'"></i><i class="bottom"></i></span><span class="thName">'+_theadObject[0][key].content +'</span></div></div></th>';
        }

        for (var key in _outCountArray) {

          _thString += '<th><div class="lt-tableThBlock"><div class="thBlock"><span class="thArrow" style="margin-right: 5px;"><i class="top '+(key=="_th1"? "active":"")+'"></i><i class="bottom"></i></span><span class="thName">' + key + '</span></div></div></th>';

       }

        return "<thead><tr>"+_thString+"</tr></thead>";

    }

    /**
     * @param _tbodyObject
     */
    Area.renderTbodyTotal = function(_tbodyObject) {

        if(_tbodyObject == undefined && typeof(_tbodyObject) !='object'){

            console.error('renderTableTotal: _tbodyObject参数不能为空或者不是对象类型！');

            return false;
        }


        var _trString  = '';

        for(var i=0; i<_tbodyObject.length; i++){

            var _tdString = '';

            _tdString +="<td data-value="+_tbodyObject[i].number+">"+_tbodyObject[i].number+"</td>";

            _tdString +="<td data-value="+_tbodyObject[i].totalCount+">"+_tbodyObject[i].totalCount+"</td>";

            if(_tbodyObject[i].outCount !=undefined){

                for(var key in _tbodyObject[i].outCount){

                    if(_tbodyObject[i].outCount[key] == '0'){

                        _tdString +="<td data-value='0'></td>";

                    }else{

                        _tdString +="<td class='bg-box-gray'  data-value='"+_tbodyObject[i].outCount[key]+"'>"+_tbodyObject[i].outCount[key]+"</td>";
                    }

                }

            }
            _trString+="<tr>"+_tdString+"</tr>";
        }

        return '<tbody>'+_trString+'</tbody>';

    },


    /**
     *   绘制行列图
     *   渲染统计图表
     *   @param: 容器的id；
     *   @param: 数据源;
     *   @param: 行列类型，比如6行6列，则填写[6,6,'red'],   7行5列则填写[7,5,'blue']；
     *   @param: 球的总数;
     *   @param: 回调函数;
     */
     Area.renderTableRowAndColumn = function (_containerId, _tbodyObject , _typeArray, _allNmber,  _callback) {

         if(_containerId == undefined && typeof(_containerId) != 'string' ){

             console.error('renderTableRowAndColumn: _containerId参数不能为空或者不是字符串类型！');

             return false;
         }

         if(_tbodyObject == undefined && typeof(_tbodyObject) !='object'){

             console.error('renderTableRowAndColumn: _tbodyObject参数不能为空或者不是对象类型！');

             return false;
         }

         if(_typeArray == undefined && typeof(_typeArray) !='object'){

             console.error('renderTableRowAndColumn: _typeArray参数不能为空或者不是对象类型！');

             return false;
         }

         if(_allNmber == undefined && typeof(_allNmber) !='number'){

             console.error('renderTableRowAndColumn: _typeArray参数不能为空或者不是数字类型！');

             return false;
         }

         if(typeof(callback) == 'function') {

             console.error('renderTableRowAndColumn: _callback回调函数不为函数类型！');

             return false;
         }

         var  _stringHtml = '';

         var _liHtml = '';

         for(var z=0; z<_tbodyObject.length; z++){

             var _temp = 0;

             var _trHtml  = '';

             var _resultArray = _tbodyObject[z].result.split('|');

             var _redBall       =  _resultArray[0].split(',');

             var _blueBall     =  _resultArray[1].split(',');

             var _type;

             if(_typeArray[2]=='red'){

                 _type = _redBall;

             }else{

                 _type = _blueBall;
             }


             for(var i=0; i<_typeArray[0]; i++){

                 var _tdHtml = '';

                 if(i==0){

                     _trHtml+='<tr><th colspan="'+_typeArray[1]+'">'+_tbodyObject[z].issueNo+'</th></tr>';
                 }

                 for(var j=0; j<_typeArray[1]; j++){

                     _temp++;

                     if(_temp <= _allNmber){

                         if(_type.Contains(_temp)){

                             _tdHtml+='<td class="lis_bg" row="'+j+'">'+(_temp <10 ? ('0'+_temp): _temp )+'</td>';
                         }else{

                             _tdHtml+='<td row="'+j+'">'+(_temp <10 ? ('0'+_temp): _temp )+'</td>';
                         }

                     }

                 }

                 _trHtml +='<tr column="'+i+'">'+_tdHtml+'</tr>'

             }

             _liHtml += '<div class="lis_tb" style="height: auto;"><table><tbody>'+_trHtml+'</tbody></table></div>';
         }

         _stringHtml+='<div class="trendRowBlock trendR-'+_typeArray[2]+'"><div class="trb-listBlock">'+_liHtml+'</div></div>';

         $('#' + _containerId).html(_stringHtml);

         /** 回调函数 */
         if(_callback !=undefined && typeof(_callback) == 'function'){

             _callback();

         }

     }


    return Area;

})