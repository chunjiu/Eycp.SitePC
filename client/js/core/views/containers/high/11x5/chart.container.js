/****************************************************************
 *                      11选5特殊处理表头（存放11选5所有逻辑）
 ****************************************************************/
define([
    'jquery'
], function(
    $
) {

    var ChartContainer = {
        initChart: function(flotType) {
            this.flotType = flotType;
            if(this.flotType == 11) {
                this.showEach();
            }
            this.changeNumColor(flotType);

            if (this.flotType == 2 || this.flotType == 3 || this.flotType == 4) {
                this.dealWidthBg(1);
            }

            if (this.flotType == 8 || this.flotType == 9) {
                this.dealWidthBg(2);
            }

            if (this.flotType == 63 || this.flotType == 64 || this.flotType == 65) {
                this.removeBorder();
            }

        },
        changeNumColor: function(flotType) {
            var baseArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                otherArr = ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
                            '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71',
                            '91', '92', '93', '94', '95'];
            if (baseArr.contains(flotType)) {
                $(".trend tr").each(function(index, item) {
                    $(item).find('.differColor').each(function(index, item){
                        if(index >= 3) {
                            $(this).addClass('font-blue');
                        } else {
                            $(this).addClass('font-red');
                        }
                    });
                });
            } else if (otherArr.contains(flotType)){
                $(".trend tr").each(function(index, item) {
                    $(item).find('.differColor').each(function(index){
                        $(this).addClass('font-red');
                    });
                });
            }
        },
        showEach: function() {
            var header = {
                '7' : 0,
                '8' : 1,
                '9' : 2,
                '10' : 3,
                '11' : 4,
                '12' : 5
            }
            $('.specialBall[modular="data_0"]').each(function(idx){
                $(this).html(header[$(this).attr('column')]);
            })
        },
        dealWidthBg: function(type) {
            $(".statistics tr").each(function(index, item) {
                $(item).find('td').each(function(item) {
                   var column = parseInt($(this).attr('column'));
                    if (type === 1) {
                        if ([9, 10, 13, 14].contains(column)){
                            $(this).addClass('bg-default');
                        }
                    } else {
                        if ([10, 11, 12, 16, 17, 18].contains(column)){
                            $(this).addClass('bg-default');
                        }
                    }
                });
            })
        },
        removeBorder: function() {
            $("#table thead tr:first-child th").each(function(index, item) {
                if ($(this).attr('modular')) {
                    var num = $(item).attr('modular').split('_')[1];
                    var arr = [4, 5];
                    if (arr.contains(num)) {
                        $(this).css('border-right-width', 0);
                    }
                }
            })
        }
    }

    return ChartContainer;
       
})
