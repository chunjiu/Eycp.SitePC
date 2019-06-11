define([
  'jquery',
  'Util',
  '../../../services/event.service'
], function(
    $,
    _Util,
    _EventService
) {
       

    var _Object = {};

    _Object.tempName ='';

    var chartStyle = {
        //球形样式
        ballStyle: {
            //蓝色
            "ballBlue": "bg-ball-blue",
            //红色
            "ballRed": "bg-ball-red",
            //紫色
            "ballPurple": "bg-ball-purple",
            //绿色
            "ballGreen": "bg-ball-green",
        },
        //字体颜色
        fontStyle: {
            "fontBold": "font-bold",
            "fontGray": "font-gray",
            "fontRed": "font-red",
            "fontBlue": "font-blue",
            "fontGreen": "font-green",
            "fontPurple": "font-purple",
            "fontWhite": "font-white"
        },
        //正方形样式
        bgBoxStyle: {
            "bgBoxTintBlue": "bg-box-tintBlue",
            "bgBoxRed": "bg-box-red",
            "bgBoxBlue": "bg-box-blue",
            "bgBoxPurple": "bg-box-purple",
            "bgBoxGreen": "bg-box-green",
            "bgBoxGray": "bg-box-gray"
        }
    };


    /**
     *  添加分割线;
     *  @param: table，id值
     *  @param: 需要切割得模块名
     */
     _Object.addSegmentingLine = function(_tableId, _modularName, _indexArray, _width, _color){

         var _trLength =  $(_tableId).find('thead tr').length;

         $(_tableId).find('thead tr').each(function (liIndex, liItem) {

             /** 通常是这个分线是在第二行中出现 */
             if(_trLength != 0){

                 $(liItem).find('th[modular="'+_modularName+'"]').each(function (tdIndex, tdItem) {

                     for(var i = 0; i<_indexArray.length; i++){
                         if(tdIndex == _indexArray[i]){
                             $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});
                             break;
                         }
                     }
                 })
             }
         })


         $(_tableId).find('.trend tr').each(function (liIndex, liItem) {

             $(liItem).find('td[modular="'+_modularName+'"]').each(function (tdIndex, tdItem) {

                 for(var i = 0; i<_indexArray.length; i++){
                     if(tdIndex == _indexArray[i]){
                         $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});
                         break;
                     }
                 }

             });
         });
    }


    /**
     *  给每一个区块添加2px的粗线;
     */
    _Object.addRightBorder2px = function (_tableId, _width, _color) {


        $(_tableId).find('thead tr').each(function (liIndex, liItem) {

            $(liItem).find('th').each(function (tdIndex, tdItem) {

                if(liIndex == 0 && _nextModular !=undefined){

                    $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});

                }else{

                    var _modular         = $(tdItem).attr('modular');
                    var _nextModular  = $(tdItem).next().attr('modular');

                    if(_modular == undefined && _nextModular == undefined){

                        $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});

                    }else{

                        if(_modular !== _nextModular && _nextModular !=undefined){

                            $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});

                        }else if(_modular != undefined && _nextModular == undefined){

                            $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});

                        }
                    }


                }

            })

        })

         $(_tableId).find('.trend tr').each(function (liIndex, liItem) {

              $(liItem).find('td').each(function (tdIndex, tdItem) {

                    var _modular         = $(tdItem).attr('modular');
                    var _nextModular  = $(tdItem).next().attr('modular');

                    if(/period_/g.test(_modular)){

                         if(/period_/g.test(_nextModular) == false){
                             $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});
                         }
                    }else if(/result_/g.test(_modular)){

                        if(/result_/g.test(_nextModular) == false){
                            $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});
                        }
                    }else{

                        if(_modular !== _nextModular && _nextModular !=undefined){
                            $(tdItem).css({'border-right-width': _width+'px', 'border-right-color': _color});
                        }

                    }

              })

         })

    }

    /**
     *  给预选号码添加z-index层级关系
     */
     _Object.addPreselectionZindex = function () {

          var  _length =  $('#preselectionButton').parent().find('.npb-ulB').length

         if(_length != undefined){

             $('#preselectionButton').parent().find('.npb-ulB').each(function (index, item) {

                 $(item).css({'z-index': _length--});

             })

         }

     }



    /**
     *  给统计添加冷热温;
     *  规则是，1-5为冷色，6～12为温色，13以上为暖色
     */
    _Object.addTotalStyle = function (_tableId) {

        $(_tableId).find('td').each(function (index, item) {

            /** 排除第一列 .第一列不需要加颜色*/
            if($(item).attr('column') !=1){

                _Object.changeHotAndColdColor($(item), 5, 12, 13);

            }
        })
    }


    /**
     *  给统计添加冷热温（只适用于形态跨度）;
     *  规则是:
     *  全奇，全偶，全大，全小列：1-8为冷号；9-12为温号，13以上为热号
     *  二同号：1-32为冷号，33-37为温号，38以上为热号
     *  三不同：1-43为冷号，44-47为温号，48以上为热号
     *  跨度0-5:1-7为冷号，8-20为温号，21以上为热号
     */
    _Object.addTotalStyle2 = function (_tableId) {

        $(_tableId).find('td').each(function (index, item) {

            /** 排除第一列 .第一列不需要加颜色*/
            if($(item).attr('column') !=1){

                /**   全奇，全偶，全大，全小列：1-8为冷号；9-12为温号，13以上为热号 */
                if([2,3,4,5].Contains($(item).attr('column'))){

                        _Object.changeHotAndColdColor($(item), 8, 12, 13);

                /**    二同号：1-32为冷号，33-37为温号，38以上为热号 */
                }else if($(item).attr('column') ==6){

                        _Object.changeHotAndColdColor($(item), 32, 37, 38);

                /**  三不同：1-43为冷号，44-47为温号，48以上为热号 */
                }else if($(item).attr('column') ==7){

                    _Object.changeHotAndColdColor($(item), 43, 47, 48);

                /**  跨度  1-7为冷号，8-20为温号，21以上为热号 */
                }else if([8,9,10,11,12,13].Contains($(item).attr('column'))){

                    _Object.changeHotAndColdColor($(item), 7, 20, 21);

                }

            }

        })

    }


    /**
     *  修改冷热码颜色代码
     *  @param:  tabel的td对象;
     *  @param:  冷码范围， 从1开始到参数1的范围
     *  @param:  温码范围，从参数1的下一位到参数2的范围
     *  @param:  热码范围，大于参数3的范围
     */
    _Object.changeHotAndColdColor = function (_tdObject, _num1, _num2, _num3) {

        /** 冷色 */
        if(parseInt(_tdObject.attr('data-value'))<=_num1){

            _tdObject.addClass(chartStyle.bgBoxStyle.bgBoxGreen);

            /** 温色 */
        }else if(parseInt(_tdObject.attr('data-value')) > _num1 && parseInt(_tdObject.attr('data-value')) <=_num2){

            _tdObject.addClass(chartStyle.bgBoxStyle.bgBoxGray);

            /** 暖色 */
        }else if(parseInt(_tdObject.attr('data-value')) >= _num3){

            _tdObject.addClass(chartStyle.bgBoxStyle.bgBoxRed);
        }

     }


    /**
     *  读取cookie值，然后显示预选按钮;
     */
     _Object.getCookie = function (_cookieName, _preselectionType, _frontAreaObject , _backAreaObject) {
         
         var _lotteryCode =  $('#mainContainer').attr('data-lotteryCode');

         if(_cookieName.indexOf('_')==-1){
            _cookieName=_cookieName+"_"+_lotteryCode;
         }
         /**
          *  如果存在这个cookie则会去读取cookie
          */
         var _cookie  =   _Util.getCookie(_cookieName);

         var _flot              = parseInt($('#mainContainer').attr('data-flot'));

         var _liArea;

         if(_cookie){

             var _preselectionNumberCookie =  JSON.parse(_cookie);
             
            if(_preselectionNumberCookie[_lotteryCode][_flot] != undefined && _preselectionNumberCookie[_lotteryCode][_flot].length>0){

                $('#preselectionButton').html('隐藏预选号码');

                for(var key in _preselectionNumberCookie){

                    if(key == _lotteryCode) {

                        _liArea = _preselectionNumberCookie[key][_flot];

                        for(var i=0; i< _liArea.length; i++){

                            $('#preselectionButton').parent().append(_Object.addPreselection(_preselectionType, _frontAreaObject , _backAreaObject));

                        }

                        /** 补球的红色，那些曾经被选中过记录到cookie的，则重新再填色回去 */
                        $('#preselectionButton').parent().find('.npb-ulB').each(function (ulIndex,ulItem) {

                            $(ulItem).find('.npb-liB').each(function (liIndex, liItem) {

                                /** 给期号下拉框赋值cookie中的期号 */
                                $(liItem).parent().find('.selectedText').html(_preselectionNumberCookie[_lotteryCode][_flot][ulIndex].period);

                                $(liItem).find('.num').each(function (index, item) {

                                    if(liIndex == 0){

                                        for(var z=0; z<_liArea[ulIndex].frontArea.length; z++){

                                            if(_liArea[ulIndex].frontArea[z]==parseInt($(item).html())){

                                                $(item).addClass('active');
                                                $(item).attr("data-size","1");
                                                if(_liArea[ulIndex].frontCount.length>0){
                                                    var _size = _liArea[ulIndex].frontCount[z];
                                                   $(item).attr("data-size",_size);
                                                   if(_size>1){
                                                        $(item).html(_liArea[ulIndex].frontArea[z]+"<i class='small-"+_liArea[ulIndex].frontCount[z]+"'></i>"); 
                                                   }else{
                                                        $(item).html(_liArea[ulIndex].frontArea[z]); 
                                                   }
                                                   
                                                }
                                                break;
                                            }
                                        }

                                    }else{

                                        for(var z=0; z<_liArea[ulIndex].backArea.length; z++){

                                            if(_liArea[ulIndex].backArea[z]==parseInt($(item).html())){

                                                $(item).addClass('active');

                                                break;
                                            }
                                        }

                                    }

                                })
                            })
                        });

                    }
                }

            }

         }

         _Object.addPreselectionZindex();
     }


    /**
     *  设置cookie
     */
    _Object.setCookie = function(_cookieName){

        var _flot;
        var _lotteryCode;
        var _preselectionNumberCookie;
        var _liArea = [];

        _flot              =  parseInt($('#mainContainer').attr('data-flot'));
        _lotteryCode =  $('#mainContainer').attr('data-lotteryCode');

        _cookieName = _cookieName+"_"+_lotteryCode;
        _preselectionNumberCookie  =   _Util.getCookie(_cookieName);

        $('.lt-numPrimaryBlock .npb-ulB').each(function (ulIndex, ulItem) {

            var _area = {};
            var _frontArea  = [];
            var _backArea  = [];
            var _count=[];
            var _period=[];

                $(ulItem).find('.npb-liB').each(function (liIndex, liItem) {

                    _period = ($(liItem).parents('.npb-ulB').find('.selectedText').html());

                    $(liItem).find('.active').each(function (index, item) {

                        if(liIndex == 0){

                            _frontArea.push(parseInt($(item).html()));
                            _count.push(parseInt($(item).attr("data-size")));

                        }else if(liIndex == 1){

                            _backArea.push(parseInt($(item).html()));

                        }
                    })
            })

            _area['period']        = _period;
            _area['frontArea']   = _frontArea;
            _area['frontCount'] = _count;
            _area['backArea']    = _backArea;

            _liArea.push(_area)
        })

        /** 如果这个cookie不存在 */
        if(_preselectionNumberCookie == undefined){

            var _cookie = {};
            _cookie[_lotteryCode] = {};
            _cookie[_lotteryCode][_flot] = _liArea;


            /** 如果这个cookie存在 */
        }else{

            /** 把选好的号码存到cookie中去 */
            _preselectionNumberCookie  =  JSON.parse(_preselectionNumberCookie)

            for(var key in _preselectionNumberCookie){

                if(key == _lotteryCode){

                    _preselectionNumberCookie[key][_flot] = _liArea;

                    _cookie = _preselectionNumberCookie;

                    break;
                }
            }
        }

        _Util.setCookie(_cookieName, JSON.stringify(_cookie))

    }


    /**
     *   预选按钮
     */
    _Object.preselection = function ( _budgetary ) {

        // var _column = $('.trend tr:first-child td').length;

        // var _preselectionType = 1;

        // var _frontAreaObject = _budgetary.frontArea;

        // var _backAreaObject;

        // if(_budgetary.backArea !=undefined){

        //     _preselectionType = 2;

        //     _backAreaObject = _budgetary.backArea;
        // }


        // $('.preselection').html('<tr><td colspan="'+_column+'" style="border: 0px; cursor: pointer;"><div class="lt-numPrimaryBlock" ><span class="npb-btnB" id="preselectionButton">号码预选</span></div></td></tr>');


        /**
         *  读取cookie，然后添加cookie中的值到预选按钮中;
         */
        //_Object.getCookie('preselectionNumberCookie', _preselectionType, _frontAreaObject , _backAreaObject );

        $("#preselectionButton").hide();
        // $('body').on('click', '#preselectionButton', function () {

        //     if($(this).parents('.lt-numPrimaryBlock').find('.npb-ulB').length == 0){

        //         $(this).parent().append(_Object.addPreselection(_preselectionType, _frontAreaObject, _backAreaObject));

        //         $(this).html('隐藏号码预选');

        //         /** 设置cookie */
        //         _Object.setCookie('preselectionNumberCookie');

        //     }else{

        //         if($(this).hasClass('active')){

        //             $(this).removeClass('active');
        //             $(this).html('隐藏号码预选');

        //             $(this).parent().find('.npb-ulB').show();

        //         }else{

        //             $(this).addClass('active');
        //             $(this).html('显示号码预选');

        //             $(this).parent().find('.npb-ulB').hide();
        //         }

        //     }

        //      _Object.addPreselectionZindex();

        // });


        /** 下拉框选中其中一项 */
        // $('body').on('click', '.selectOption .lis', function () {

        //     var lisVal = $(this).html();

        //     $(this).parent().parent().find('.selectedText').html(lisVal);

        //     $(this).parent().hide();
        // });

        // $('body').on('click', '.selectedText', function () {

        //     if($(this).parent().hasClass('active')){
        //         $(this).parent().find('.selectOption').hide();
        //         $(this).parent().removeClass('active');
        //     }else{
        //         $(this).parent().find('.selectOption').show();
        //         $(this).parent().addClass('active');
        //     }
        // });


        // $('body').on('mouseleave', '.public_selectPlugIn', function () {

        //     $(this).find('.selectOption').hide();
        //     $(this).removeClass('active');
        // });

        //  //角标加减判断
        //  var _bf=true; //true +， false-

        // /** 点击预选号码的球 */
        // $('body').on('click','.number .num', function () {


        //     /** 如果点选的红球数大于开奖号码的总数的时候 */
        //     var _npbObj = $(this).parents('.npb-liB');
        //     //最大选择个数
        //     var _maxNum = parseInt(_npbObj.attr('data-max'));
        //     //是否可以重复
        //     var _more = _npbObj.attr('data-more');
        //     //存储当前总选中了多少次（个）
        //     var _size = 0;

        //     $(this).parent().find(".active").each(function(index,item){

        //             _size+= parseInt($(item).attr("data-size"));

        //     });

        //     //当前号码选中多少次
        //     var _currSize = parseInt($(this).attr("data-size"));
                
               
        //         if($(this).hasClass('active')){
        //             if("true" == _more){
                        
        //                 if(_size<_maxNum && _bf){
        //                     _bf=true;
        //                     _currSize +=1;
        //                     _size+=1;
        //                     $(this).attr("data-size",_currSize);
        //                     if(_currSize>1){
        //                         $(this).html($(this).attr("data-value")+"<i class='small-"+_currSize+"'></i>");
        //                     }
        //                 }else{
                           
        //                     if(_currSize>0){
        //                         _bf=false;
        //                         $(this).attr("data-size",_currSize-1);
        //                         if(_currSize-1>1){
        //                             $(this).html($(this).attr("data-value")+"<i class='small-"+(_currSize-1)+"'></i>");
        //                         }else{
        //                             $(this).html($(this).attr("data-value"));
        //                         }
        //                         if(_currSize-1<=0){
        //                           $(this).removeClass('active');  
        //                          _bf=true; 
        //                         }

        //                     }else{
        //                          $(this).removeClass('active');
        //                     }
        //                 }
        //             }else{
                        
        //                 $(this).removeClass('active');
        //             }
        //         }else{

        //             if(_size == _maxNum){

        //                 return;

        //             }else{
        //                 $(this).attr("data-size","1");
        //                 $(this).addClass('active');
        //             }

        //         }

        //       /** 设置cookie */
        //       _Object.setCookie('preselectionNumberCookie');


        // });

        // /** 点击清空预选号码 */
        // $('body').on('click','.clearNumber',function () {

        //     $(this).parents('.lt-numPrimaryBlock').find('.num').removeClass('active');

        //     //_Util.deleteCookie('preselectionNumberCookie');
        //     /** 设置cookie */
        //     _Object.setCookie('preselectionNumberCookie');

        // });

        // /** 点击删除其中一条预选号码 */
        // $('body').on('click','.deleteNumber',function () {

        //     $(this).parents('.npb-ulB').remove();

        //     /** 设置cookie */
        //     _Object.setCookie('preselectionNumberCookie');

        //     /** 如果已经没有预选号码了 */
        //     if($('#preselectionButton').parent().find('.npb-ulB').length == 0){
        //         $('#preselectionButton').html('预选号码');
        //     }

        // });

        // /** 点击添加一条预选号码 */
        // $('body').on('click','.addNumber',function () {

        //     if($(this).parents('.lt-numPrimaryBlock').find('.npb-ulB').length == 5){

        //         if($('#tipsWindow').length == 0){

        //             $('body').append('<div class="eyu200-trendHintBlock" id="tipsWindow" style="display: none; width: 216px;margin-left: -108px;">最多可增加五行</div>');

        //             $('#tipsWindow').fadeIn(400);

        //             /** 2秒后删除提示框 */
        //             window.setTimeout(function () {

        //                 $('#tipsWindow').fadeOut(300,function () {

        //                     $('#tipsWindow').remove();

        //                 });

        //             },2000)
        //         }

        //         return;

        //     }else{

        //         $(this).parents('.lt-numPrimaryBlock').append(_Object.addPreselection(_preselectionType, _frontAreaObject, _backAreaObject));

        //         /** 设置cookie */
        //         _Object.setCookie('preselectionNumberCookie');
        //     }

        //     _Object.addPreselectionZindex();

        // })

    }
    //不足前面补0 num传入的数字，n需要的字符长度
    _Object.PrefixInteger=function(num, n) {
            return (Array(n).join(0) + num).slice(-n);
    }
    /**
     * 处理预选 期号列表
     */
    _Object.IssueList=function(nextPeriod){
        var maxPeriod=1;
         var _lotteryCode =  $('#mainContainer').attr('data-lotteryCode');
        if($("#maxPeriod").attr("data-max")!=undefined){
            maxPeriod = parseInt($("#maxPeriod").attr("data-max"));
        }
        var next10PeriodString="";
        if(1 == maxPeriod || "bjk3"==_lotteryCode){
            var tempPeriod=parseInt(nextPeriod);
            for(var i=0; i< 10; i++){
                next10PeriodString+= '<span class="lis" data-code="">'+(tempPeriod)+'</span>';
                tempPeriod++;
            }
        }else{
            var periodDate = nextPeriod.substring(0,nextPeriod.length-3);
            var period=0;
            
             var year,month,day;
             if("gxkl10" == _lotteryCode){
                 periodDate = nextPeriod.substring(0,nextPeriod.length-2);
                 period = parseInt(nextPeriod.substring(nextPeriod.length-2,nextPeriod.length));
                 year = parseInt(periodDate.substring(0,4));
                 day = parseInt(periodDate.substring(4,7));
                 month="";
                 for(var i=0; i< 10; i++){

                    if(period>maxPeriod){
                        period = 1;
                        day += 1;
                        next10PeriodString+= '<span class="lis" data-code="">'+(year+""+this.PrefixInteger(day,3)+"01")+'</span>';
                    }else{
                        next10PeriodString+= '<span class="lis" data-code="">'+(year+""+day+""+this.PrefixInteger(period,2))+'</span>';
                    }
                     period++;
                }
                
             }else{
                period = parseInt(nextPeriod.substring(nextPeriod.length-3,nextPeriod.length));
                year = periodDate.substring(0,4);
                month = periodDate.substring(4,6);
                day = periodDate.substring(6,8);
                var date = new Date(year,month,day);
                for(var i=0; i< 10; i++){

                    if(period>maxPeriod){
                         date.setDate(parseInt(day)+1);
                         period=1;
                         next10PeriodString+= '<span class="lis" data-code="">'+(date.getFullYear()+""+date.getMonth()+1+""+date.getDate())+"001"+'</span>';
                    }else{
                        periodDate= date.getFullYear()+""+date.getMonth()+1+""+date.getDate();
                        next10PeriodString+= '<span class="lis" data-code="">'+(periodDate+""+this.PrefixInteger(period,3))+'</span>';
                    }
                     period++;
                }
             }
             
        }

        return next10PeriodString;
    }
    /**
     *  添加预选按钮后添加的预选选项;
     *  @param: type  如果是类型1，则为一行的预选号码，如果是类型2，则为两行的预选号码；
     *  @param: 前区对象，有2个属性： number（字符串）， maxNumber: 前区最大选择球数；
     *  @param: 后区对象，有2个属性： number（字符串）， maxNumber: 后区最大选择球数
     */
    _Object.addPreselection = function (_preselectionType, _frontAreaObject , _backAreaObject ) {

        if(_preselectionType == undefined){

            _preselectionType = 1;
        }

        var stringHtml = '';

        var _frontAreaArray = _Object.dealWithAreaString(_frontAreaObject);

        var numString = '';

        var nextPeriod = $(".next-period").html().replace('期','');

 
        var next10PeriodString = '';


        /** 需要在下期的基础上再选比下期的未开的10期 */
        next10PeriodString = this.IssueList(nextPeriod);


        for(var i=0; i<_frontAreaArray.length; i++){

            numString+='<span class="num" data-size="0" data-value="'+(_frontAreaArray[i])+'">'+(_frontAreaArray[i])+'</span>';

        }

        if(_preselectionType == 1 && _frontAreaObject !=undefined){

            stringHtml +='<div class="npb-ulB">'+
                                      '<div class="public_selectPlugIn">'+
                                            '<span class="selectArrow"></span>'+
                                            '<span class="selectedText">'+nextPeriod+'</span>'+
                                            '<div class="selectOption" style="display: none;">'+
                                                next10PeriodString  +
                                            '</div>'+
                                      '</div>'+
                                      '<div class="npb-liB  frontArea" data-max='+_frontAreaObject.maxNumber+' data-more='+(_frontAreaObject.more==undefined?'false':'true')+'>'+
                                          '<span class="text">前区预选：</span>'+
                                          '<div class="number">'+
                                                numString+
                                          '</div>'+
                                          '<div class="tool">'+
                                                '<a href="javascript:void(0)" class="clearNumber">清空号码</a>'+
                                                '<i>|</i>'+
                                                '<a href="javascript:void(0)" class="addNumber">增加一行</a>'+
                                                '<i>|</i>'+
                                                '<a href="javascript:void(0)" class="deleteNumber">删除行</a>'+
                                          '</div>'+
                                        '</div>'+
                                     '</div>';

        /** 类型2，类型2是有后区号码的 */
        }else if(_preselectionType == 2  &&  _backAreaObject !=undefined){

            /** 拼装后区号码 */
            var _backAreaArray = _Object.dealWithAreaString(_backAreaObject);

            var _backAreaNumString = '';

            for(var i=0; i<_backAreaArray.length; i++){

                _backAreaNumString+='<i class="num">'+(_backAreaArray[i])+'</i>';

            }

            stringHtml += '<div class="npb-ulB">'+
                                    '<div class="public_selectPlugIn">'+
                                    '<span class="selectArrow"></span>'+
                                    '<span class="selectedText">'+nextPeriod+'</span>'+
                                    '<div class="selectOption" style="display: none;">'+
                                        next10PeriodString  +
                                    '</div>'+
                                    '</div>'+
                                    '<div class="npb-liB frontArea" data-max='+_frontAreaObject.maxNumber+'>'+
                                    '<span class="text">前区预选：</span>'+
                                    '<div class="number">'+
                                        numString+
                                    '</div>'+
                                    '</div>'+
                                    '<div class="npb-liB  backArea" data-max='+_backAreaObject.maxNumber+'>'+
                                    '<span class="text">后区预选：</span>'+
                                    '<div class="number">'+
                                        _backAreaNumString +
                                    '</div>'+
                                    '<div class="tool">'+
                                    '<a href="javascript:void(0)" class="clearNumber">清空号码</a>'+
                                    '<i>|</i>'+
                                    '<a href="javascript:void(0)" class="addNumber">增加一行</a>'+
                                    '<i>|</i>'+
                                    '<a href="javascript:void(0)" class="deleteNumber">删除行</a>'+
                                    '</div>'+
                                    '</div>'+
                                    '</div>';
        }

        return stringHtml;

    }

    /**
     *  处理前区和后区的字符串
     */
    _Object.dealWithAreaString = function(_object){

        if(_object == undefined){

            console.error("dealWithAreaString：参数不能为空！");
            return;
        }

        var _areaArray = [];
        var _tempString       = '';

        if(_object.number !=undefined){

            if(/\~/g.test(_object.number)) {

                _tempString = _object.number.replace(/(^\s*)|(\s*$)/g, "").split('~');

                for(var i =parseInt(_tempString[0]); i<=parseInt(_tempString[1]); i++){

                    _areaArray.push(i);

                }

            }else if(/\|/g.test(_object.number)){

                _tempString = _object.number.replace(/(^\s*)|(\s*$)/g, "").split('|');

                for(var i =0; i < _tempString.length; i++){

                    _areaArray.push(i);

                }

            }

        }

        return _areaArray;
    }

    /**
     * 排列5 形态：合、小、偶 标蓝
     */
    _Object.addTypeAwardBlue=function(_data){

        $('.trend [modular=' + _data + ']').each(function (_index,_tdItem) {
            var new_text = '';
            var data_value = $(_tdItem).attr('data-value');
            var data_arr = data_value.split(',');
            for (var i = 0; i < data_arr.length; i++){
                if(data_arr[i] == "合" || data_arr[i] == "小" || data_arr[i] == "偶"){
                    new_text += '<i class="font-blue">' + data_arr[i] + '</i>'
                }else {
                    new_text += '<i class="font-red">' + data_arr[i] + '</i>'
                }
            }
            $(_tdItem).html(new_text);
        });

        return false;
    }

    /**
     * 快乐十分 大于18 标红
     */
    _Object.addBigAward=function(_tableId,_type){

        _type = 1;

        $(_tableId).find('.trend tr').each(function(_trIndex,_trItem){

             $(_trItem).find('td').each(function(_tdIndex,_tdItem){

                   /** 发现是开奖号码这几列的 */
                   if(/result_/g.test($(_tdItem).attr('modular'))){
        
                       if(parseInt($(_tdItem).find('span').html())>18){
                         var _sp =  $(_tdItem).find('span');
                         _sp.removeClass(chartStyle.fontStyle.fontBlue);
                         _sp.addClass(chartStyle.fontStyle.fontRed);
                       }

                   }
             });
      });
      return false;
    }

    /**
     *   给开奖号码相同颜色的添加一个背景色，以及给开奖号码分布图添加角标;
     *   @param: tableId;
     *   @param: _type: 参数2为类型，如果1表示不要为开奖分布图的球加上角标，如果是2表示要为开奖号码分布图的球加上角标
     *   @param: _modularName 模块名，假如给不是固定的模块加角标，则可以自定义加角标的模块；
     */
     _Object.addSamePeriod = function (_tableId, _type, _lotteryName, _modularName) {

         var _flot =  parseInt($('#mainContainer').attr('data-flot'));

         var twoStar = [10, 11, 13, 14, 16, 17],
             threeStar = [30, 31];

         if(_type == undefined){
             _type = 2;
         }

         _lotteryName = _lotteryName == undefined ? '' : _lotteryName;


         $(_tableId).find('.trend tr').each(function(_trIndex,_trItem){

             var _periodArray = [];
             var _newArray;


             if (_lotteryName == '') {

                 $(_trItem).find('td').each(function(_tdIndex,_tdItem){

                     /** 发现是开奖号码这几列的 */
                     if(/result_/g.test($(_tdItem).attr('modular'))){

                         _periodArray.push({ data: parseInt($(_tdItem).find('span').html()) , tdDom: $(_tdItem)});

                         if(/result_/g.test($(_tdItem).next().attr('modular')) == false ){

                             //console.log($(_tdItem).attr('modular'));
                             return false;
                         }

                     }
                 });

             } else {

                 $(_trItem).find('td').each(function(_tdIndex,_tdItem){

                     if(/result_/g.test($(_tdItem).attr('modular'))){
                        var number = parseInt($(_tdItem).attr('modular').split('_')[1]);

                         if (twoStar.Contains(_flot)) {
                             /** 时时彩二星只计算后两个开奖号码 */
                             if (number !== 0 && number !== 1 && number !== 2) {
                                 _periodArray.push({ data: parseInt($(_tdItem).find('.sscStar').html()) , tdDom: $(_tdItem)});
                             }
                         } else if (threeStar.Contains(_flot)) {
                             /** 时时彩三星只计算后两个开奖号码 */
                             if (number !== 0 && number !== 1) {
                                 _periodArray.push({ data: parseInt($(_tdItem).find('.sscStar').html()) , tdDom: $(_tdItem)});
                             }
                         }
                         if(/result_/g.test($(_tdItem).next().attr('modular')) == false ){
                             return false;
                         }
                     }
                 });

             }


             _newArray = _Object.getSamePeriod(_periodArray);

             /** 给开奖号码文字添加颜色，如果是有2个号码相同，则文字变成红色，如果超过2个号码相同，则变成紫色 */
             // for(var i =0; i < _newArray.length; i++){
             //
             //    for(var j =0; j< _newArray[i].tdDomArr.length; j++){
             //
             //        if(_newArray[i].count == 2){
             //
             //              _newArray[i].tdDomArr[j].find('span').addClass(chartStyle.fontStyle.fontRed);
             //
             //        }else if(_newArray[i].count > 2){
             //
             //                if (!_lotteryName) {
             //                    _newArray[i].tdDomArr[j].find('span').addClass(chartStyle.fontStyle.fontPurple);
             //                } else {
             //                    _newArray[i].tdDomArr[j].find('span').addClass(chartStyle.fontStyle.fontRed);
             //                }
             //
             //        }
             //     }
             // }

             /** 给开奖号码文字添加颜色，如果是有2个号码相同，则文字变成红色，如果超过2个号码相同，则变成紫色 */
             for(var i =0; i < _newArray.length; i++){

                 if(!_lotteryName) {

                     if(_newArray[i].count == 2){

                         _newArray[i].tdDomArr[0].parent().find('td').each(function (index,item) {

                             if(/result_/g.test($(item).attr('modular'))){

                                 $(item).find('span').addClass(chartStyle.fontStyle.fontRed);

                                 /** 减少循环次数 */
                                 if(/result_/g.test($(item).next().attr('modular')) == false ){

                                     return false;
                                 }
                             }

                         });


                     }else if(_newArray[i].count > 2){

                         _newArray[i].tdDomArr[0].parent().find('td').each(function (index,item) {

                             var fontStyle = '';

                             if (!_lotteryName) {

                                 fontStyle = chartStyle.fontStyle.fontPurple;

                             } else {

                                 fontStyle = chartStyle.fontStyle.fontRed;
                             }

                             if(/result_/g.test($(item).attr('modular'))){

                                 $(item).find('span').addClass(fontStyle);

                                 /** 减少循环次数 */
                                 if(/result_/g.test($(item).next().attr('modular')) == false){

                                     return false;
                                 }
                             }

                         });

                     }
                 }

             }


             if(_type == 2){

                 $(_trItem).find('td').each(function(_tdIndex,_tdItem){

                     /** 一般开奖分布图是在data_0这一列 */
                     if($(_tdItem).attr('modular') == (_modularName? _modularName:'data_0')){

                         for(var i =0; i < _newArray.length; i++){

                             for(var j =0; j< _newArray[i].tdDomArr.length; j++){

                                 /** 等于于2用红色球 */
                                 if(_newArray[i].count == 2){

                                     if(parseInt($(_tdItem).find('span').html()) == _newArray[i].num  &&  $(_tdItem).hasClass($(_tdItem).attr('css-awardnumber'))){

                                             $(_tdItem).removeAttr('class').addClass(chartStyle.ballStyle.ballRed).find('span').append('<i class="small-2"></i>');

                                     }

                                     if($(_tdItem).attr('modular') != (_modularName? _modularName:'data_0')){

                                         return false;
                                     }

                                 /** 大于2用紫色球 */
                                 }else if(_newArray[i].count > 2){

                                     if(parseInt($(_tdItem).find('span').html()) == _newArray[i].num  &&  $(_tdItem).hasClass($(_tdItem).attr('css-awardnumber'))){

                                         $(_tdItem).removeAttr('class').addClass(chartStyle.ballStyle.ballPurple).find('span').append('<i class="small-'+_newArray[i].count+'"></i>');

                                     }

                                     if($(_tdItem).attr('modular') != (_modularName? _modularName:'data_0')){

                                         return false;
                                     }
                                 }
                             }
                        }
                     }
                 })
             }
         })
     }


    /**
     *  看看开奖号码有多少相同的
     * @return {Array}
     */
     _Object.getSamePeriod = function (result) {

         var _arr = [];

         result.sort(_Object.sortBy('data', false));

         for (var i = 0; i < result.length; ) {

             var count = 0;
             var tempArr = [];

             for (var j = i; j < result.length; j++) {

                 if (result[i].data == result[j].data) {

                     count++;

                     /** 如果已经满足2个的时候 */
                     if(count >= 2){
                         tempArr.push(result[j].tdDom);
                     }else{
                         tempArr.push(result[i].tdDom);
                     }

                 }
             }

             /** 如果都匹配不到，那就只装自己 */
             // if(count == 1){
             //     tempArr.push(result[i].tdDom);
             // }

             _arr.push({
                 num: result[i].data,
                 count: count,
                 tdDomArr: tempArr
             })
             i+=count;
         }

         return _arr
     }


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
     _Object.sortBy = function(attr, rev) {

        /** 第二个参数没有传递 默认升序排列 */
        if (rev == undefined) {
            rev = 1;
        } else {
            rev = (rev) ? 1 : -1;
        }

        return function (a, b) {
            var _a = parseFloat(a[attr]);
            var _b = parseFloat(b[attr]);
            if (_a < _b) {
                return rev * -1;
            } else if (_a > _b) {
                return rev * 1;
            }
            return 0;
        }
    }


    /* 时时彩 五星大小/单双处理  */
    _Object.changeSscWord = function(flot) {
        if (flot == 63) {
            $('.trend .bigToSmall').each(function(){
                var column = $(this).attr('column').toString();
                if(['8','11','14','17','20'].Contains(column)) {
                    $(this).addClass('bg-box-red');
                    $(this).find('span').html('大');
                } else {
                    $(this).addClass('bg-box-blue');
                    $(this).find('span').html('小');
                }
            });
        } else if (flot == 64) {
            $('.trend .oddToEven').each(function(){
                var column = $(this).attr('column').toString();
                if(['8','11','14','17','20'].Contains(column)) {
                    $(this).addClass('bg-box-red');
                    $(this).find('span').html('单');
                } else {
                    $(this).addClass('bg-box-blue');
                    $(this).find('span').html('双');
                }
            });
        }
    }

    /* 时时彩 二星/三星 和值处理 */
    _Object.changeSscNum = function() {
        $('.trend tr').each(function(){
            var redNum = $(this).find('.specialRedNum').find('span').html();
            $(this).find('.specialBlueNum').find('span').html(redNum);
        });
    }
     // 11选5，多日统计冷热号
    _Object.addHotColdNumer = function(flot) {
        var periodCount = $('#periodCount').val().split('|');
        var averageHot,averageCool;
        
        switch(flot) {
            case '100':
                averageHot = 41;
                averageCool = 35;
                break;
            case '101':
                averageHot = 20;
                averageCool = 13;
                break;
            case '102':
                averageHot = 8;
                averageCool = 3;
                break;
            case '103':
                averageHot = 3;
                averageCool = 0;
                break;
            case '104':
                averageHot = 2;
                averageCool = 0;
                break;
            case '105':
            case '110':
            case '114':
                averageHot = 8;
                averageCool = 4;
                break;
            case '106':
                averageHot = 20;
                averageCool = 9;
                break;
            case '107':
                averageHot = 9;
                averageCool = 6;
                break;
            case '108':
                averageHot = 3;
                averageCool = 0;
                break;
            case '109':
                averageHot = 3;
                averageCool = 1;
                break;
            case '111':
            case '115':
                averageHot = 15;
                averageCool = 7;
                break;
            case '112':
            case '113':
                averageHot = 2;
                averageCool = 0;
                break;
        }

        for(var i = 0; i < periodCount.length; i ++) {
            $('[data-cloumn="'+ (i + 2) +'"]').each(function(){
                var _tmp = parseInt($(this).data('value'));
                if (_tmp) {
                    if(_tmp >= averageHot) {
                        $(this).parent().addClass(chartStyle.bgBoxStyle.bgBoxRed);
                    } else if(_tmp <= averageCool) {
                        if(_tmp > 0) {
                            $(this).parent().addClass(chartStyle.bgBoxStyle.bgBoxGreen);
                        }
                    } else {
                        $(this).parent().addClass(chartStyle.bgBoxStyle.bgBoxGray);
                    }
                }

            });
        }
        
    }

    /**
     *  添加分割线
     *  @param:tableID
     *  @param:tr得class名;
     *  @param:需要每隔多少行出现一条分割线;
     */ 
     _Object.addSegmenting = function(_tableId, _trClass, _row){

        $(_tableId).find('.trend tr:nth-child('+ _row +'n)').each(function(_trIndex,_trItem){

                $(_trItem).addClass(_trClass);

        })

     }

    /**
     *  删除分割线
     *  @param:tableID
     *  @param:tr得class名;
     */ 
    _Object.removeSegmenting = function(_tableId, _trClass){

        $(_tableId).find('.trend tr').each(function(_trIndex,_trItem){

                $(_trItem).removeClass(_trClass);

        })

     }


    /**
     * 显示折线
     * @param: canvas的id
     */
    _Object.openBrokenLine = function(_canvasId){

       $(_canvasId).show();

    }

    /**
     * 隐藏折线
     * @param: canvas的id
     */
    _Object.closeBrokenLine = function(_canvasId){

        $(_canvasId).hide();
 
     }


    /**
     * 清除遗漏分层
     * @param:tableID
     */
    _Object.clearOmissionDelaminationEvent = function(_tableId){

        $(_tableId).find('.trend tr').each(function(_trIndex,_trItem){
        
            $(_trItem).find('td').each(function(_tdIndex, _tdItem){

                $(_tdItem).removeClass($(_tdItem).attr('css-omissiondelamination'));

            })
        })
    }

    /**
     * 遗漏分层
     * @param: table的id;
     */
    _Object.omissionDelaminationEvent = function(_tableId){

        //var trLength = $(_tableId).find('.trend tr').length;
        var $table = $(_tableId);
        var startMiss = parseInt($table.find('.trend tr:last td[modular="data_0"]:first').attr('column'));
        var lastMiss   = parseInt($table.find('.trend tr:first').find('[css-omissiondelamination]:last').attr('column'));

        for(var i = startMiss; i <= lastMiss; i++) {

            var $clums = $('.trend [column="'+ i +'"]');

            var clumsLength = $clums.length;

            for(var j = clumsLength - 1;j >= 0; j--) {

                var $this = $clums.eq(j);
                
                var _value = parseInt($this.attr('data-value') ? $this.attr('data-value') : 0);

                if(_value > 0) {
                    $this.addClass($this.attr('css-omissiondelamination'));
                } else {
                    break;
                }
            }
        }
    }

    /**
     * 连号号码;
     * @param: table的id;
     */
     _Object.serialNumberEvent = function(_tableId){


        $(_tableId).find('.trend td').each(function(_tdIndex,_tdItem){

            var _prev = $(_tdItem).prev();
                        
            var _next = $(_tdItem).next();

            var cssSerialNumber = $(_tdItem).attr('css-serialNumber');

            /**
             * 下一td看看有没同一模块以及也是开奖号码得;
             */
            if($(_tdItem).attr('css-awardNumber') &&  _prev.attr('css-awardNumber') &&  $(_tdItem).attr('modular') == _prev.attr('modular')){

                $(_tdItem).addClass(cssSerialNumber);
                _prev.addClass(cssSerialNumber);

            }


            /**
             * 下一td看看有没同一模块以及也是开奖号码得;
             */
            if($(_tdItem).attr('css-awardNumber') &&  _next.attr('css-awardNumber') &&  $(_tdItem).attr('modular') == _next.attr('modular')){

                $(_tdItem).addClass(cssSerialNumber);
                _next.addClass(cssSerialNumber);

            }

        })

     }

    /**
     * 删除连号号码;
     * @param:tableID
     */
    _Object.clearSerialNumberEvent = function(_tableId){

        $(_tableId).find('.trend td').each(function(_tdIndex,_tdItem){

            var cssSerialNumber = $(_tdItem).attr('css-serialNumber');
 
            $(_tdItem).removeClass(cssSerialNumber)
   
         })

    }


    /**
     * 边号号码;
     * @param: table的id;
     */
    _Object.edgeNumberEvent = function(_tableId){


        $(_tableId).find('.trend tr').each(function(_trIndex,_trItem){
        
            $(_trItem).find('td').each(function(_tdIndex, _tdItem){
 
                var cssEdgeNumber = $(_tdItem).attr('css-edgeNumber');

                if(cssEdgeNumber && $(_tdItem).attr('css-awardNumber') ){

                     /** 获取当前这个td的列数 */
                     var _column = parseInt($(_tdItem).attr('column')) - 1;
    
                     var _row    = _trIndex;

                     
                     /** 如果已经到达最后一行的话 */
                     if($(_tableId).find('.trend tr').length - 1 == _row){
    
                        var _prevRowPrev = $(_tableId).find('.trend tr').eq(_row - 1).find('td').eq(_column - 1);
                        
                        var _prevRowNext = $(_tableId).find('.trend tr').eq(_row - 1).find('td').eq(_column + 1);

                        /** 判断上一行的前一个和上一行的后一个是否匹配 */
                        if(_prevRowPrev.attr('css-awardNumber') && $(_tdItem).attr('modular') == _prevRowPrev.attr('modular')){

                            $(_tdItem).addClass(cssEdgeNumber);

                        }

                        /** 判断上一行的前一个和上一行的后一个是否匹配 (并且它们是同组模块的才给加边号) */
                        if(_prevRowNext.attr('css-awardNumber') &&  $(_tdItem).attr('modular') == _prevRowPrev.attr('modular')){

                            $(_tdItem).addClass(cssEdgeNumber);

                        }

                    }else{

                        var _nextRowPrev = $(_tableId).find('.trend tr').eq(_row + 1).find('td').eq(_column - 1);
                        
                        var _nextRowNext = $(_tableId).find('.trend tr').eq(_row + 1).find('td').eq(_column + 1);

                        /** 找下一行前一个和下一行后一个判断 (并且它们是同组模块的才给加边号)*/
                        if(_nextRowPrev.attr('css-awardNumber') && $(_tdItem).attr('modular') == _nextRowPrev.attr('modular')){

                            $(_tdItem).addClass(cssEdgeNumber);
                            _nextRowPrev.addClass(cssEdgeNumber)

                        }

                        if(_nextRowNext.attr('css-awardNumber') && $(_tdItem).attr('modular') == _nextRowNext.attr('modular')){

                            $(_tdItem).addClass(cssEdgeNumber);
                            _nextRowNext.addClass(cssEdgeNumber)

                        }

                    };

                }
           })
        })

    }

    /**
     * 清除所有边号号码
     * @param: table的id;
     */
    _Object.clearEdgeNumberEvent = function(_tableId){

        $(_tableId).find('.trend td').each(function(_tdIndex,_tdItem){

            var cssHeavyNumber = $(_tdItem).attr('css-edgeNumber');
 
            $(_tdItem).removeClass(cssHeavyNumber)
   
         })

    }

    /**
     * 斜跳号码;
     * @param: table的id;
     */
    _Object.serialTwoNumberEvent = function(_tableId){


        $(_tableId).find('.trend tr').each(function(_trIndex,_trItem){
        
            $(_trItem).find('td').each(function(_tdIndex, _tdItem){
 
                var cssEdgeNumber = $(_tdItem).attr('css-edgeTwoNumber');

                if(cssEdgeNumber && $(_tdItem).attr('css-awardNumber') ){

                     /** 获取当前这个td的列数 */
                     var _column = parseInt($(_tdItem).attr('column')) - 1;
    
                     var _row    = _trIndex;

                     
                     /** 如果已经到达最后一行的话 */
                     if($(_tableId).find('.trend tr').length - 1 == _row){
    
                        var _prevRowPrev = $(_tableId).find('.trend tr').eq(_row - 2).find('td').eq(_column - 2);
                        
                        var _prevRowNext = $(_tableId).find('.trend tr').eq(_row - 2).find('td').eq(_column + 2);

                        /** 判断上一行的前一个和上一行的后一个是否匹配 */
                        if(_prevRowPrev.attr('css-awardNumber') && $(_tdItem).attr('modular') == _prevRowPrev.attr('modular')){

                            $(_tdItem).addClass(cssEdgeNumber);

                        }

                        /** 判断上一行的前一个和上一行的后一个是否匹配 (并且它们是同组模块的才给加边号) */
                        if(_prevRowNext.attr('css-awardNumber') &&  $(_tdItem).attr('modular') == _prevRowPrev.attr('modular')){

                            $(_tdItem).addClass(cssEdgeNumber);

                        }

                    }else{

                        var _nextRowPrev = $(_tableId).find('.trend tr').eq(_row + 2).find('td').eq(_column - 2);
                        
                        var _nextRowNext = $(_tableId).find('.trend tr').eq(_row + 2).find('td').eq(_column + 2);

                        /** 找下一行前一个和下一行后一个判断 (并且它们是同组模块的才给加边号)*/
                        if(_nextRowPrev.attr('css-awardNumber') && $(_tdItem).attr('modular') == _nextRowPrev.attr('modular')){

                            $(_tdItem).addClass(cssEdgeNumber);
                            _nextRowPrev.addClass(cssEdgeNumber)

                        }

                        if(_nextRowNext.attr('css-awardNumber') && $(_tdItem).attr('modular') == _nextRowNext.attr('modular')){

                            $(_tdItem).addClass(cssEdgeNumber);
                            _nextRowNext.addClass(cssEdgeNumber)

                        }

                    };

                }
           })
        })

    }
    /**
     *  显示遗漏号码;
     *  @param: table的id;
     *  @param: type 类型，类型为true显示遗漏，类型为false则隐藏遗漏
     */
    _Object.omissionNumberEvent = function(_tableId, _type){

      $(_tableId).find('.trend td').each(function(index,item){
        
        var _dataValue = $(item).attr('data-value');

        /** 
         *  如果找到遗漏号码这个属性，那么就添加到class中;
         */
         if(_dataValue && $(item).attr('css-awardNumber') == undefined){

            /** 
             * 判断有没有这个遗漏号码的样式，有就去掉，没有就添加上;
             */
              if(_type || $(item).attr('css-omissiondelamination') == undefined){

                   $(item).find('span').html(_dataValue);

              }else{

                  $(item).find('span').html('');

              }

         }

      })

    }



    /**
     * 清除重号
     * @param: table的id;
     */
    _Object.clearHeavyNumberEvent = function(_tableId){

        $(_tableId).find('.trend td').each(function(_tdIndex,_tdItem){

           var cssHeavyNumber = $(_tdItem).attr('css-heavyNumber');

           $(_tdItem).removeClass(cssHeavyNumber)
  
        })

    }

    /**
     * 重号;
     * @param: table的id;
     */
    _Object.heavyNumberEvent = function(_tableId){

            $(_tableId).find('.trend tr').each(function(_trIndex,_trItem){
        
                $(_trItem).find('td').each(function(_tdIndex, _tdItem){
    
                    var cssHeavyNumber = $(_tdItem).attr('css-heavyNumber');
    
                     /** 
                      * 如果存在这个属性值 
                      */
                     if(cssHeavyNumber && $(_tdItem).attr('css-heavyNumber')){
    
                            /** 获取当前这个td的列数 */
                            var _column = parseInt($(_tdItem).attr('column')) - 1;
    
                            var _row    = _trIndex;
    
                            /** 如果下一行同列的也是开奖号码，则表示同号 */
                            if($(_tableId).find('.trend tr').eq(_row + 1).find('td').eq(_column).attr('css-awardNumber')){

                                $(_tdItem).addClass(cssHeavyNumber);
                                $(_tableId).find('.trend tr').eq(_row + 1).find('td').eq(_column).addClass(cssHeavyNumber)

                            /** 假如已经到达最后一行了 */
                            }else if($(_tableId).find('.trend tr').length - 1 == _row){

                                if($(_tableId).find('.trend tr').eq(_row - 1).find('td').eq(_column).attr('css-awardNumber')){
    
                                    $(_tdItem).addClass(cssHeavyNumber);
    
                                }
    
                            };
    
                     }
      
                })
    
            })

    }


    /** 排序当前列 */
    _Object.sortColumn = function(_tableId, _column, _sortType){

        var columnArray = [];

        $(_tableId).find('tbody').eq(0).find('tr').each(function(_trIndex, _trItem){

            $(_trItem).find('td').each(function(_tdIndex, _tdItem){

                /** 如果列数相同的，就先存到数组中 */
                if(_tdIndex == _column){

                    columnArray.push({
                        value:       parseFloat($(_tdItem).attr('data-value')),
                        domObject:   $(_tdItem).parent()
                    });
                }

            })
        });


        var newArrey = columnArray.sort(_Object.sortBy('value', _sortType));


        var _stringHtml = '';

        for(var i = 0; i < newArrey.length; i++){

            _stringHtml += '<tr>'+newArrey[i].domObject.html()+'</tr>'
            //$(_tableId).find('tbody').eq(0).append(newArrey[i].domObject);

        }

        $(_tableId).find('tbody').eq(0).html(_stringHtml);

        window.setTimeout(function () {
            _EventService.emit('sortComplate_changeStateComponent');
        },30);
    }

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
    _Object.sortBy = function(attr,rev){

        /** 第二个参数没有传递 默认升序排列 */
        if(rev ==  undefined){
            rev = 1;
        }else{
            rev = (rev) ? 1 : -1;
        }

        return function(a,b){
            var _a = parseFloat(a[attr]);
            var _b = parseFloat(b[attr]);
            if(_a < _b){
                return rev * -1;
            }else if(_a > _b){
                return rev * 1;
            }
            return 0;
        }
    }
    
    return _Object;
});
   
   
