/****************************************************************
 *                      ssc特殊处理表头（存放ssc所有逻辑）
 ****************************************************************/
define([
    'jquery',
    'Array'
], function(
    $,
    _array
) {

    var ChartContainer = {
        initChart: function(flotType) {
            this.flotType = flotType;

            //改变不同星对应的开奖号码的样式
            this.changeNumColor(this.flotType);
        },
        changeNumColor: function(flotType) {

            var oneStar = ['1', '2'],
                twoStar = ['10', '11', '12', '13', '14', '15', '16', '17'],
                threeStar = ['30', '31', '32', '33', '34', '35'],
                fourStar = ['50', '51'],
                fiveStar = ['61', '62', '63' ,'64'];

            if (oneStar.Contains(flotType)) {

                $(".trend tr").each(function() {
                    var len = $(this).find('.sscStar').length;
                    $($(this).find('.sscStar')[len-1]).addClass('font-red');
                });

            } else if (twoStar.Contains(flotType)) {

                $(".trend tr").each(function(index, item) {
                    $(item).find('.sscStar').each(function(index, item) {
                        if (index !== 0 && index !== 1 && index !== 2) {
                            $(this).addClass('font-red');
                        }
                    });
                });

            } else if (threeStar.Contains(flotType)) {

                $(".trend tr").each(function(index, item) {
                    $(item).find('.sscStar').each(function(index, item) {
                        if (index !== 0 && index !== 1) {
                            $(this).addClass('font-red');
                        }
                    });
                });

            } else if (fourStar.Contains(flotType)) {

                $(".trend tr").each(function(index, item) {
                    $(item).find('.sscStar').each(function(index, item) {
                        if (index !== 0) {
                            $(this).addClass('font-red');
                        }
                    });
                });

            } else if (fiveStar.Contains(flotType)) {

                $(".trend tr").each(function() {
                    $(this).find('.sscStar').addClass('font-red');
                });

            }
        }
    }

    return ChartContainer;
       
})
