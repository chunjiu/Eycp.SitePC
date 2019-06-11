/** ================================================
 *
 *                    开奖直播顶部轮播块组件
 *
 *================================================*/
define([
    'underscore',
    'jquery',
    'String',
    'backbone',
    '../../../services/event.service'
], function (
    _,
    $,
    _String,
    _Backbone,
    _EventService
) {

      var TopVideoComponent = _Backbone.View.extend({

         el: '#mainVideo',
         topVideo: '#topVideo',
         videoList : '#videoList',
         videoImg : '#videoImg',
         navVideoList: '#navVideoList',
         countDownTime: '.countDownTime',
         textBtn: '.textBtn',
         timeText: '.timeText',
         events:{
             'mouseenter  #videoList li': 'handleMouseEnter'
          },
          /**
           * 构造函数
           */
          initialize: function () {

               var _this = this;

               _this.time = 1000;
               _this.topLock = false;
               _this.navLock = false;
              _this.clearIntervalTop=0;
              _this.clearIntervalNav=0;

              /** 监听开启倒计时 */
               _EventService.on('startCountDown_topVideoComponent', function () {
                  _this.countDown();
               });

              /** 监听开启倒计时 */
              _EventService.on('startCountDownNav_topVideoComponent', function () {
                  _this.countDownNav();
              });

               /** 刷新整个模块 */
               _EventService.on('refresh_topVideoComponent', function (_object) {
                   _this.refresh(_object.result, _object.type);
               })

          },
          /**
           * 鼠标移过事件;
           * @param _evt
           */
          handleMouseEnter: function (_evt) {

              var _this = this;

              var _evtTarget              = $(_evt.currentTarget);
              var _evtTargetIndex     = $(_evt.currentTarget).index();

              $(_this.videoImg).find('.lis').hide();
              $(_this.videoList).find('li').removeClass('active');

              $(_this.videoImg).find('.lis').eq(_evtTargetIndex).show();
              _evtTarget.addClass('active');

          },

          /**
           *  当倒计完成后，重新刷新该部分内容;
           */
          refresh: function (_result, _type) {

              var _this = this;

              if(_result ==undefined || _result ==''){

                  console.error('refresh: 返回的内容为空!');
                  return;
              }

              if(_type ==undefined || typeof(_type) !='number'){

                  console.error('refresh: 渲染的类型不能为空!');
                  return;
              }


              if(_type == 1){

                  $(_this.topVideo).html(_result.lotteryAwardList);

                  _this.topLock = false;
                  _this.countDown();

              }else if(_type == 0){

                  $(_this.navVideoList).html(_result.navLotteryAwardList);

                  _this.navLock = false;
                  _this.countDownNav();
              }

          },

          /**
           *  开启所有倒计时
          */
          countDown: function () {

            var _this = this;
            var timeCountArray= [];

            var countObject = $(_this.topVideo).find('li '+ _this.countDownTime);

            /**
              *  倒计右边的视频列表;
             */
            countObject.each(function (index, item) {

                timeCountArray.push(parseFloat($(item).attr('data-time')));
           })

           _this.clearIntervalTop = window.setInterval(function () {

                 countObject.each(function (index, item) {

                     timeCountArray[index]--;

                     if(('' + timeCountArray[index]).SecondsTommss() == 'NaN:NaN'){
                         $(item).html('00:00');
                     }else{
                         $(item).html(('' + timeCountArray[index]).SecondsTommss());
                     }

                      $(item).attr('data-time', timeCountArray[index]);
                 })

                  /** 当最后一个倒计完 */
                  if(('' + timeCountArray[0]).SecondsTommss() == '00:00'){

                      if(_this.topLock == false){

                          /** 把所有倒计全部清除掉 */
                          window.clearInterval(_this.clearIntervalTop);

                          timeCountArray   = [];

                          /** 发出倒计完成事件 */
                          _EventService.emit('countDownSuccess_topVideoComponent');

                          _this.topLock = true;
                      }

                  }

              },_this.time);


          },


          countDownNav: function () {

              var _this = this;

              var navTimeCountArray= [];

              var countObject = $(_this.navVideoList).find('li '+_this.countDownTime);

              /**
               *  倒计nav的视频列表;
               */
              countObject.each(function (index, item) {

                      navTimeCountArray.push(parseFloat($(item).attr('data-time')));

               })

              _this.clearIntervalNav = window.setInterval(function () {

                  countObject.each(function (index, item) {

                      navTimeCountArray[index]--;

                      if(('' + navTimeCountArray[index]).SecondsTommss() == 'NaN:NaN'){
                          $(item).html('00:00');
                      }else{
                          $(item).html(('' + navTimeCountArray[index]).SecondsTommss());
                      }

                      $(item).attr('data-time', navTimeCountArray[index]);


                      /** 当第一个倒计完 */
                      if(('' + navTimeCountArray[3]).SecondsTommss() == '00:00'){

                          if(_this.navLock == false){

                              /** 把倒计清除掉 */
                              window.clearInterval(_this.clearIntervalNav);

                              navTimeCountArray   = [];

                              /** 发出倒计完成事件 */
                              _EventService.emit('countDownSuccessNav_topVideoComponent');

                              _this.navLock = true;
                          }



                      }

                  })



              },_this.time);

          }

      })

      return TopVideoComponent;

})