module.exports = (Template, Currency) => {

    /**
     *  裁剪字符串;
     */
    Template.defaults.imports.stringSub = (_string, _num) => {

        _string = _string+'';

        if(_string == undefined && typeof(_string) !='string'){

            console.error('substring: _string参数不能为空或者不是字符串类型！');

            return false;
        }

        if(_num == undefined && typeof(_num) !='number'){

            console.error('substring: _num参数不能为空或者不是数字类型！');

            return false;
        }

        return _string.substring(_num);

    }

    /**
     *  渲染出遗漏表格的筛选球
     *
     */
    Template.defaults.imports.renderOmissionNumberBall = (_omission , _flot, _lotteryClassification) => {

      
            var _noNeedAddZero = ['pl3','pl5','fc3d','k3','ssc'];   //这几个彩种全部都是单位不需要补0

            if(_omission == undefined && typeof(_omission) !='object'){

                console.error('renderOmissionNumberBall: _omission参数不能为空或者不是对象类型！');

                return false;
            }


            if(_flot == undefined && typeof(_flot) !='number'){

                console.error('renderOmissionNumberBall: _flot参数不能为空或者不是数字类型！');

                return false;
            }


            var _ballHtml = '';
            var _ballNum = 0;
            var _isNeedAddZero;

            if(Currency.array_contain(_noNeedAddZero, _lotteryClassification)){
                _isNeedAddZero = false;
            }else{
                _isNeedAddZero = true;
            }


            /** 是否多行单选 , 如果是以'|' 分隔的则是多多行单选，如果是'~'号分隔的则是单行多选 */
            var isMultilineSingleSelection;

            for(var i=0; i < _omission.length; i++){

                 if(_omission[i].child !=undefined){

                   for(var j=0; j< _omission[i].child.length; j++){


                        if(_omission[i].child[j].children !=undefined){

                             for(var k=0; k<_omission[i].child[j].children.length; k++){

                                 var _searchNum = _omission[i].child[j].children[k].searchNum;

                                  if(_searchNum !=undefined && _flot == _omission[i].child[j].children[k].code){

                                       /** 是否包含~符合 */
                                       if(/~/g.test(_searchNum)){

                                           var _arr = _searchNum.split('~');
                                           var _firstNum = parseInt(_arr[0]);
                                           var _lastNum  = parseInt(_arr[1]);
                                           var _numHtml = '';


                                           for(var z=_firstNum; z<=_lastNum; z++){

                                               if(_isNeedAddZero){
                                                   _numHtml+='<span class="num">'+(z < 10 ? '0'+z : z)+'</span>';
                                               }else{
                                                   _numHtml+='<span class="num">'+z+'</span>';
                                               }

                                               _ballNum++;
                                           }

                                           _ballHtml = _numHtml;

                                           /** 单行多选 */
                                           isMultilineSingleSelection = false;

                                       }else if(/\|/g.test(_searchNum)){

                                           var _arr = _searchNum.split('|');
                                           var _numHtml = '';
                                           var _maximumNumberOfBallsPerRow = (_omission[i].child[j].children[k].maximumNumberOfBallsPerRow ?  _omission[i].child[j].children[k].maximumNumberOfBallsPerRow: 10);

                                           for(var z=0; z<_arr.length; z++){

                                               /** 第一个 */
                                               if(z==0){
                                                   _numHtml+='<div>';
                                               }


                                              if((z+1) % _maximumNumberOfBallsPerRow == 0){

                                                       /** 最后一个 */
                                                       if(z==_arr.length - 1){

                                                           if(_isNeedAddZero){
                                                               _numHtml+='<span class="num">'+(_arr[z]<10 ? '0'+_arr[z] : _arr[z])+'</span></div>';
                                                           }else{
                                                               _numHtml+='<span class="num">'+_arr[z]+'</span></div>';
                                                           }


                                                       }else{
                                                           if(_isNeedAddZero) {
                                                               _numHtml += '<span class="num">' + (_arr[z] < 10 ? '0' + _arr[z] : _arr[z]) + '</span></div><div>';
                                                           }else{
                                                               _numHtml += '<span class="num">' + _arr[z] + '</span></div><div>';
                                                           }
                                                       }

                                              }else{
                                                       if(_isNeedAddZero) {
                                                           _numHtml += '<span class="num">' + (_arr[z] < 10 ? '0' + _arr[z] : _arr[z]) + '</span>';
                                                       }else{
                                                           _numHtml += '<span class="num">' + _arr[z] + '</span>';
                                                       }
                                              }


                                               _ballNum++;

                                           }

                                           _ballHtml = _numHtml;

                                           /** 多行单选 */
                                           isMultilineSingleSelection = true;

                                       }

                                  }

                             }

                        /** 否则是不存在children */
                        }else{

                            var _searchNum = _omission[i].child[j].searchNum;

                            if(_searchNum !=undefined &&  _flot == _omission[i].child[j].code){

                                /** 是否包含~符合 */
                                if(/~/g.test(_searchNum)){

                                    var _arr = _searchNum.split('~');
                                    var _firstNum = parseInt(_arr[0]);
                                    var _lastNum  = parseInt(_arr[1]);
                                    var _numHtml = '';

                                    for(var z=_firstNum; z<=_lastNum; z++){

                                        if(_isNeedAddZero) {
                                            _numHtml += '<span class="num">' + (z < 10 ? '0' + z : z) + '</span>';
                                        }else{
                                            _numHtml += '<span class="num">' + z + '</span>';
                                        }

                                        _ballNum++;
                                    }

                                    _ballHtml =  _numHtml;

                                    /** 单行多选 */
                                    isMultilineSingleSelection = false;

                                }else if(/\|/g.test(_searchNum)){

                                    var _arr = _searchNum.split('|');
                                    var _numHtml = '';
                                    var _maximumNumberOfBallsPerRow = (_omission[i].child[j].maximumNumberOfBallsPerRow ? _omission[i].child[j].maximumNumberOfBallsPerRow: 10);

                                    for(var z=0; z<_arr.length; z++){

                                        /** 第一个 */
                                        if(z==0){

                                            _numHtml+='<div class="lis">';

                                        }


                                       if((z+1) % _maximumNumberOfBallsPerRow == 0){

                                                /** 最后一个 */
                                                if(z==_arr.length - 1){

                                                    _numHtml+='<span class="num">'+_arr[z]+'</span></div>';

                                                }else{

                                                    _numHtml+='<span class="num">'+_arr[z]+'</span></div><div class="lis">';
                                                }

                                       }else{

                                                _numHtml+='<span class="num">'+_arr[z]+'</span>';
                                       }



                                        _ballNum++;
                                    }

                                    _ballHtml = _numHtml;

                                    /** 多行单选 */
                                    isMultilineSingleSelection = true;

                                }
                            }
                        }
                     }
                 }
            }

        if(_ballHtml.replace(/(^\s*)|(\s*$)/g, "") != ''){
            return '<div class="toolNumberBlock">'+
                            '<div class="toolNumber '+( _ballNum > 11 ? "more":"" )+'">'+
                                '<span class="text">查询</span>'+
                                        '<div class="numberB" id="numberBall"  isMultilineSingleSelection='+isMultilineSingleSelection+'>'+
                                          _ballHtml+
                                        '</div>'+

                ( _ballNum > 11? '<span class="arrow" id="showScreenBall"><i></i></span>':'') +

                                    '<span class="touch" id="clearBall">清空</span>'+
                            '</div>'+
                        '</div>';
        }else {
            return '';
        }

     }

    /**
     *   渲染遗漏图表
     *   @param: 容器的id；
     *   @param: 数据源;
     *   @param: 表格头的配置；
     */
    Template.defaults.imports.renderTableTotal = (_tbodyObject, _lotteryCode, _flot) => {


        if(_tbodyObject == undefined && typeof(_tbodyObject) !='object'){

            console.warn('renderTableTotal: _tbodyObject参数不能为空或者不是对象类型！');

        }

        if(_tbodyObject == undefined){

            return '<table><tr><td>暂时无任何遗漏数据</td></tr></table>';

        }else{

            return  '<table>'+ renderTeadTotal() + '\r\n' +
                renderTbodyTotal(_tbodyObject, _lotteryCode, _flot) +'</table>';
        }

    }



    /**
     * 绘制头部(遗漏)
     * @param {*} _theadObject
     * @param {*} _tbodyObject
     */
    const renderTeadTotal = () => {

        let _titleObject = [
            '号码类型',
            '出现次数',
            '理论次数',
            '平均遗漏',
            '最大遗漏',
            '前3次遗漏',
            '前2次遗漏',
            '前1次遗漏',
            '当前遗漏',
            '遗漏图表',
            '循环周期',
            '周期图表',
            '欲出几率',
            '回补几率',
            '投资价值'
        ]

        var _htmlString = '';

        for(var i=0; i < _titleObject.length; i++){

            _htmlString += '<th>'+
                                            '<div class="lt-tableThBlock wordBreak">'+
                                                '<div class="thBlock">'+
                                                    '<span class="thName">'+_titleObject[i]+'</span>'+
                                                       (i ==9 || i ==11 ? "" : '<span class="thArrow"><i class="top"></i><i class="bottom  '+(i==14?"active":"")+'"></i></span>')+
                                                '</div>'+
                                            '</div>'+
                                         '</th>';

        }

        return "<thead><tr>"+_htmlString+"</tr></thead>";

    }


    /**
     *  渲染tbody(遗漏)
     * @param _tbodyObject
     */
    const renderTbodyTotal = (_tbodyObject, _lotteryCode, _flot)=> {

        if(_tbodyObject == undefined && typeof(_tbodyObject) !='object'){

            console.error('renderTableTotal: _tbodyObject参数不能为空或者不是对象类型！');

            return false;
        }

        var _trString  = '';

        var _list = _tbodyObject;

        for(var i=0; i < _list.length; i++ ){

            var _tdString = '';
            var _missTitel;


            /************* 对 # 号和 , 号进行处理，替换一下，把#号替换成or, 把，号替换成 _ ***************/
            _missTitel = encodeURI(_list[i].missTitel.replace(/\,/g,'_').replace(/\#/g,'or'));


            _tdString +="<td data-value='"+_list[i].missTitel+"'>"+_list[i].missTitel+"</td>";
            _tdString +="<td data-value='"+_list[i].appearCount+"'>"+_list[i].appearCount+"</td>";
            _tdString +="<td data-value='"+_list[i].theoryCount+"'>"+_list[i].theoryCount+"</td>";
            _tdString +="<td data-value='"+_list[i].avgMiss+"'>"+_list[i].avgMiss+"</td>";
            _tdString +="<td data-value='"+_list[i].maxMiss+"'>"+_list[i].maxMiss+"</td>";
            _tdString +="<td data-value='"+_list[i].preThreeMiss+"'>"+(_list[i].preThreeMiss==-1?'--':_list[i].preThreeMiss)+"</td>";
            _tdString +="<td data-value='"+_list[i].preTwoMiss+"'>"+(_list[i].preTwoMiss == -1?'--':_list[i].preTwoMiss)+"</td>";
            _tdString +="<td data-value='"+_list[i].preOneMiss+"'>"+(_list[i].preOneMiss==-1?'--':_list[i].preOneMiss)+"</td>";
            _tdString +="<td data-value='"+_list[i].curMiss+"'>"+_list[i].curMiss+"</td>";

            _tdString +="<td><span class='tab-iconB'><a target='_blank' href='/omissionChart/"+_lotteryCode+"/"+_flot+"-"+_missTitel+"-1' class='trend'></a></span></td>";
            _tdString +="<td data-value='"+_list[i].cycle+"'>"+_list[i].cycle+"</td>";
            _tdString +="<td><span class='tab-iconB'><a target='_blank' href='/omissionChart/"+_lotteryCode+"/"+_flot+"-"+_missTitel+"-0' class='omit'></a></span></td>";

            _tdString +="<td data-value='"+_list[i].appearProbability+"'>"+_list[i].appearProbability+"</td>";
            _tdString +="<td data-value='"+_list[i].replenishProbability+"'>"+_list[i].replenishProbability+"</td>";
            _tdString +="<td data-value='"+_list[i].investValue+"'>"+_list[i].investValue+"</td>";

            _trString+="<tr>"+_tdString+"</tr>";

        }

        return '<tbody>'+_trString+'</tbody>';

    }


}
