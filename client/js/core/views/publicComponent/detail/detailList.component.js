/** ================================================
 *
 *                            详情页列表组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'backbone',
    '../../../services/event.service'
], function (
    _,
    $,
    _Backbone,
    _EventService
) {

      var  DetailListComponent = _Backbone.View.extend({

          el: '#list',
          tableTable: '#list table',
          /** 构造函数 */
          initialize: function (_lotteryCode, _lotteryType) {

              var _this = this;

              _this.lotteryCode = _lotteryCode;

              _this.lotteryType  = _lotteryType;

              /**
               *  列表渲染事件
               */
              _EventService.on('renderList_detailListComponent',function (_result) {

                  if(!_result){
                      /** 给开发提示知道模版为空，下面依然会执行renderList */
                      console.warn('DetailListComponent: 返回的模版为空！')
                  }


                  /** 如果是模版得话 */
                  if(typeof(_result) == 'string'){

                      _this.renderListHtml(_result);

                  /** 如果是拿到json得话，表示是开奖，则插入一条新得数据 */
                  }else if(typeof(_result) == 'object'){

                      /** 判断当前得期数的上一期和列表中第一条期数是否相等 */
                      if(_this.isToday()){
                          _this.appendLottery(_result);
                      }
                  }

              });

              /** 更新一下list组件上得data-attribute属性，这个属性是跟随getawardtime变化得 */
              _EventService.on('updateAttribute_detailListComponent', function(_value){

                   if(_value){

                       $(_this.el).attr('data-attribute', _value);

                   }else{
                       console.error("updateAttribute：开奖返回来得数据不正确！")
                   }

              });

              /** 添加列表loading */
              _EventService.on('loading_detailListComponent', function () {

                  var stringHtml    = '';
                  var colspan;

                  /** 如果开奖类型是kl8得话 */
                  if(/kl8/.test(_this.lotteryCode)){

                      colspan = 22;

                  }else if(/k3/.test(_this.lotteryCode)){

                      colspan = 4;

                  }else{

                      colspan = 3;
                  }

                  stringHtml  += '<tr><td colspan="'+colspan+'"><span class="wgt-loading3"><span class="loadingIcon"></span><span class="loadingFont">正在加载中...</span></span></td></tr>';
                  $(_this.tableTable).find('tbody tr').remove();
                  $(_this.tableTable).find('tbody').append(stringHtml);

              });

              /** 调用这个事件判断select选中是否和列表是同一天数据 */
              _EventService.on('isToday_detailListComponent', function (_callBack) {

                     _callBack(_this.isToday());
              })


          },


          /**
           *  判断是否当天
           */
           isToday: function () {

               var _this = this;

               /** 判断data-attribute和data-default是否相等，因为data-default是默认当天 */
              if($(_this.el).attr('data-attribute') == $(_this.el).attr('data-default')){

                   return  true;
              }else{

                   return  false;
              }

          },
           /**
           *  开奖，更新一条新得数据 html;
           */
          appendHtml:function(_result,cssName){

               var awardDate = _result.awardTime;

               var  stringHtml ='<tr style="display: none;">';
                      stringHtml += '<td>'+_result.period+'期</td><td>'+awardDate +'</td>';

               var _data = _result.result.split(',');

               /** 如果是快3的话，会有一点点区别 , 因为有和值这块 */
               if(cssName == 'k3'){

                   stringHtml += '<td>';
                   var _sum = 0;

                   for (var i = 0; i < _data.length; i++) {
                       stringHtml += '<span class="public-number-'+cssName+'" style="position:relative; top:3px;">';
                       if(_data[i].length<=1 && parseInt(_data[i])<10){
                           _data[i] ="0"+_data[i];
                       }
                       stringHtml += '<span class="num'+_data[i] +'"></span>';
                       stringHtml += '</span>';
                       _sum += parseInt(_data[i]);
                   }

                   stringHtml += '<span style="position:relative; top:-3px;">( '+ _result.result +' )</span></td><td>'+_sum+'</td>';

               }else{

                       for (var i = 0; i < _data.length; i++) {

                            stringHtml += '<td><div class="public-number-'+cssName+'">';
                            if(_data[i].length<=1 && parseInt(_data[i])<10){
                                _data[i] ="0"+_data[i];
                            }
                            stringHtml += '<span class="num'+_data[i] +'"></span>';
                            stringHtml += '</div></td>';
                       }
                }

                stringHtml +='</tr>';

              return stringHtml;
          },
             
          /**
           *  开奖，更新一条新得数据;
           */
          appendLottery: function (_result) {

              var _this = this;

              if(_result){

                  var resultObject = _result.result;

                  var stringHtml    = '';

                  if(resultObject.lotteryCode == 'bjpk10'){

                      stringHtml += this.appendHtml(resultObject,"pk10");

                  }else if(resultObject.lotteryCode == 'xync' || resultObject.lotteryCode == 'hnkl10'){

                      var _cssName="xync";

                      if(resultObject.lotteryCode == 'hnkl10'){

                        _cssName="zoology";
                      }

                      stringHtml += this.appendHtml(resultObject,_cssName);

                  }else if(resultObject.lotteryCode.indexOf('k3')>=0){

                      stringHtml += this.appendHtml(resultObject,"k3");

                  }else if(resultObject.lotteryCode == 'bjkl8'){

                      stringHtml  += '<tr style="display: none;"><td>'+resultObject.period+'期</td>'+ _this.k8changeTable(resultObject.result) +'</tr>';

                  }else{

                      stringHtml  += '<tr style="display: none;"><td>'+resultObject.period+'期</td><td>'+resultObject.awardTime+'</td><td><span class="ball_num">'+_this.stringChangeBall(resultObject.result)+'</span></td></tr>';

                  }


                  $(_this.tableTable).find('tbody').prepend(stringHtml);
                  $(_this.tableTable).find('tbody tr').eq(0).fadeIn(600);

              }
          },


          /**
           *  最新开奖公告让字符串转变成球
           * @param _string
           * @return {*}
           */
          stringChangeBall: function(_string){

                  if(_string){

                      var  _allBallArray;
                      var  _redBallArray;
                      var  _stringHtml    = '';

                      /** 如果有追号，即 | 分割得, 表示有篮球 */
                      if(/\|/i.test(_string)){

                          _allBallArray     =  _string.split('|');
                          _redBallArray   =  _allBallArray[0].split(',');
                          var  _blueBallArray  = [];

                          if(_redBallArray[0].length>0){
                              for(var i=0; i<_redBallArray.length; i++){
                                  _stringHtml+= '<i class="red">' + _redBallArray[i] + '</i>';
                              }
                          }

                          /**  如果有蓝球得画，需要对篮球进行处理 */
                          if(_allBallArray[1]){

                              _blueBallArray  = _allBallArray[1].split(',');

                              for(var i=0; i<_blueBallArray.length; i++){
                                  _stringHtml+= '<i class="blue">' + _redBallArray[i] + '</i>';
                              }
                          }

                      /** 如果没有追号，表示没有篮球 */
                      }else{


                          _redBallArray   =  _string.split(',');

                          if(_redBallArray[0].length>0){
                              for(var i=0; i<_redBallArray.length; i++){
                                  _stringHtml+= '<i class="red">' + _redBallArray[i] + '</i>';
                              }
                          }

                      }

                      return _stringHtml;

                  }else{
                      console.warn('stringChangeBall：参数为空，请注意！')
                  }

         },

       /**
         *  格式化快8的表格;
         * @param _string
         * @return {*}
       */
       k8changeTable :function(_string){
                  if(_string){

                      var  _allBallArray;
                      var  _redBallArray;
                      var  _stringHtml    = '';
                          _allBallArray     =  _string.split('|');
                          _redBallArray   =  _allBallArray[0].split(',');
          
                          /**  如果有蓝球得画，需要对篮球进行处理 */
                          if(_allBallArray[1]){
                            _stringHtml+='<td>X' + _allBallArray[1] + '</td>';  
                          }else{
                            _stringHtml+='<td></td>';
                          }
                          

                          if(_redBallArray.length>0){
                              for(var i=0; i<_redBallArray.length; i++){
                                  _stringHtml+='<td>' + _redBallArray[i] + '</td>';
                              }
                          }
                      return _stringHtml;

                  }else{
                      console.warn('stringChangeBall：参数为空，请注意！')
                  }

       },

        /**
          * 渲染列表
          * @param _resultHtml
         */
        renderListHtml: function(_resultHtml){

                 var _this = this;
                 var _colspan;

                $(_this.tableTable).find('tbody tr').remove();

                if(_this.lotteryType == 'kl8'){

                    _colspan = 22;

                }else if(_this.lotteryType == 'k3'){

                    _colspan = 4;

                }else{
                    _colspan = 3;
                }

                if(_resultHtml){

                    $(_this.tableTable).find('tbody').append(_resultHtml);
                }else{

                    $(_this.tableTable).find('tbody').append('<tr><td colspan="'+_colspan+'">暂无任何数据！</td></tr>');
                }

          }

      })

      return DetailListComponent;

})