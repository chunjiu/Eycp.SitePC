/** ================================================
 *
 *                            日期选择组件
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

     var SelectPlugInComponent = _Backbone.View.extend({

          el: '#selectPlugIn',
          selectArrow: '#selectPlugIn .selectArrow',
          selectedText: '#selectPlugIn .selectedText',
          selectOption: '#selectPlugIn .selectOption',
          selectOptionLis: '#selectPlugIn .selectedText .lis',
          events:{
            'click': 'handleClick',
            'click .lis': 'handleClickForLis',
            'mouseleave': 'handleMouseLeave'
          },
          /** 构造函数 */
          initialize: function (_object) {

               if(!_object){
                   console.error("组件参数不能为空！");
                   return false;
               }

               if(!_object.type){
                   console.error("组件类型不能为空！可以选择time类型和number类型!");
                   return false;
               }

               var _this   = this;
               _this.type =  _object.type;

               // 获取默认需要选中的值
               _this.selValue = _object.value;

               _this.value = $(_this.el).attr('data-value');

               if(!_this.value){
                   console.warn('组件参数data-value为空，请加上数值！');
                   return false;
               }

               /** 如果是时间下拉框 */
               if(_object.type == "time"){

                    /** 处理日期 */
                    _this.dealWidthTime(_this.value)

               }else if(_object.type == "number"){

                   /** 处理期号 */
                   _this.renderSelectPlugInNumber(_this.value, _this.selValue)

               }

          },

         /**
          *  点击select组件的时候事件
          */
         handleClick: function () {

             var _this = this;

             if($(_this.selectArrow).hasClass('active')){

                 $(_this.selectArrow).removeClass('active');
                 $(_this.selectOption).hide();

             }else{

                 $(_this.selectArrow).addClass('active');
                 $(_this.selectOption).show();
             }

         },

         /**
          *  鼠标离开select组件的时候事件
          */
         handleMouseLeave: function () {

             var _this = this;

             $(_this.selectArrow).removeClass('active');
             $(_this.selectOption).hide();

         },

         /**
          *  点击select下其中一项事件;
          */
         handleClickForLis: function (_evt) {

             var _this = this;
             var _evtTarget = $(_evt.currentTarget);

             $(_this.selectedText).html(_evtTarget.html());
             $(_this.selectedText).attr('data-active',_evtTarget.html());

              /** 如果插件是time类型插件 */
              if(_this.type == 'time'){

                  /** 派发一个事件，谁监听这个事件就能拿到select选中的这个值 */
                  _EventService.emit('clickSelect_selectPlugInComponent', _evtTarget.html());

              }else if(_this.type == 'number'){

                  /** 派发一个事件，谁监听这个事件就能拿到select选中的这个值 */
                  _EventService.emit('clickSelectNumber_selectPlugInComponent', _evtTarget.html());

              }

         },

         /**
          *  渲染select组件
          * @param _dataTimeObject
          */
         renderSelectPlugIn: function (_dataTimeObject) {

             var _this = this;
             var stringHtml    = '<span class="selectArrow"></span>';
             stringHtml += '<span class="selectedText">'+_dataTimeObject.nowDataTime+'</span>';
             stringHtml += '<div class="selectOption">';

             var index = _dataTimeObject.nowDay;
             var prevIndex = _dataTimeObject.prevDiffDay;

             var tempNowMonth =  _dataTimeObject.nowMonth;
             var tempPrevMonth  =  _dataTimeObject.prevMonth;

             /** 如果这个月月份小于10 */
             if(tempNowMonth < 10){
                 tempNowMonth =  '0'+tempNowMonth;
             }

             /** 如果上个月月份小于10 */
             if(tempPrevMonth < 10){
                 tempPrevMonth =  '0'+tempPrevMonth;
             }

             while(index > 0){

                 var tempNowDay = index;
                 if(tempNowDay < 10){
                     tempNowDay = '0'+index;
                 }

                 stringHtml += '<span class="lis" >'+(_dataTimeObject.nowYear+"-"+tempNowMonth+"-"+tempNowDay)+'</span>';
                 index--;
             }
             for(var i=0; i<prevIndex; i++){

                 var tempPrevDay = _dataTimeObject.prevMonthTotalDay-i;

                 if(tempPrevDay < 10){
                     tempPrevDay = '0'+tempPrevDay;
                 }

                 stringHtml += '<span class="lis" >'+(_dataTimeObject.prevYear+"-"+tempPrevMonth+"-"+tempPrevDay)+'</span>';
             }

             stringHtml += '</div>';

             $(_this.el).html(stringHtml);
         },

         /**
          *  处理期号
          */
         renderSelectPlugInNumber: function (_value, _selValue) {

             var _this = this;

             var stringHtml
             var valueArray = _value.split(',');

             if($(_this.selectedText).attr('data-active') == ''){
                  _selValue = _selValue ? _selValue : valueArray[0];
             }else{
                 _selValue = $(_this.selectedText).attr('data-active');
             }

              if(typeof(valueArray) == 'object'){

                  stringHtml    = '<span class="selectArrow"></span>';
                  stringHtml += '<span class="selectedText" data-active="'+_selValue+'">'+ _selValue +'</span>';
                  stringHtml += '<div class="selectOption">';

                  for(var i=0; i<valueArray.length; i++){
                      stringHtml += '<span class="lis" >'+valueArray[i]+'</span>';
                  }

                  stringHtml += '</div>';

                  $(_this.el).html(stringHtml);

              }else{
                  console.error('renderSelectPlugInNumber: 数据类型不正确！');
              }

         },

         /**
          *  格式化时间
          */
         formateTime: function (_time) {

             /** 没有空格 */
             if(_time.indexOf(" ") == -1){

                  return _time.replace(/\//g,'-');

                 /** 有空格只要前面得年月日 */
             }else{

                 var timeArr = _time.split(' ');
                 return timeArr[0].replace(/\//g,'-');
             }

         },

         /**
           * 处理日期
           */
          dealWidthTime: function (_value) {

              var _this        = this;

              /** 防止出现yyyy/mm/dd这种格式，替换成 yyyy-mm-dd这种格式 */
              var dateTime = _this.formateTime(_value);

              var dataTimeArray = dateTime.split('-')
              var year         = parseInt(dataTimeArray[0]);     //年;
              var month     = parseInt(dataTimeArray[1].replace(/^0/,''));     //月;
              var day          = parseInt(dataTimeArray[2].replace(/^0/,''));     //日;

              var prevMonth;               // 上个月
              var prevYear   = year      // 上个月的年份

              /** 如果当前月份是1月份的话，那么上一个月就是12月份 */
              if(month == 1){

                  prevMonth  = 12;
                  prevYear      = year - 1;
              }else{

                  prevMonth =month - 1;
              }

              var prevMonthTotalDay = _this.getMonthTotalDay(prevYear, prevMonth, day);     //上月总天数
              var prevDiffDay;


              /**
               * 计算今天到上个月今天总共相差多少天
               * 今天31, 上个月没31，
               */
              if(day > prevMonthTotalDay){
                  prevDiffDay =  day - prevMonthTotalDay
              }else if(day <= prevMonthTotalDay){
                  prevDiffDay =  prevMonthTotalDay - day +1;
              }

              var dataTimeObject ={
                  nowDataTime: dateTime,
                  prevYear: prevYear,
                  prevMonth: prevMonth,
                  prevMonthTotalDay: prevMonthTotalDay,
                  prevDiffDay: prevDiffDay,
                  nowYear: year,
                  nowMonth: month,
                  nowDay: day
              }

              _this.renderSelectPlugIn(dataTimeObject);
          },

         /**
          *  获取月份总天数;
         */
         getMonthTotalDay: function(_year, _month){

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
          }

     })

     return SelectPlugInComponent;
})