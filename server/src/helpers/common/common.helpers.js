'use strict';

module.exports = (Template, Currency) => {

    /**
     * 把时间格式化为：周三  11-12 12：00 这种格式
     * @param _dateTime
     * @return {*}
     */
    Template.defaults.imports.transformationWeekDay = (_dateTime) => {

        if (_dateTime != undefined && typeof(_dateTime) == 'string') {

            let weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

            let myDate = new Date(Date.parse(_dateTime.replace(/-/g, "/")));

            let date = myDate.toString().replace(/-/g, '/');

            return weekDay[myDate.getDay()] + '&nbsp;&nbsp;' + (new Date(date)).format('MM-dd hh:mm');

        } else {

            console.error('transformationWeekDay：参数有问题！');
            return '';
        }

    }

    /**
     * 设置tab切换，切换走势，遗漏，杀号，推荐
     * @param _num
     * @param _lotteryCode
     * @param _defultFlot
     * @return {*}
     */
    Template.defaults.imports.commonTab = (_num, _lotteryCode, _defultFlot) => {

        if (_num != undefined) {

            let _urlString1 = '';
            let _urlString2 = '';
            let _urlString3 = '';
            let _urlString4 = '';
            let _stringHtml = '';

            /** 拥有杀号定胆的彩种 */
            let _shddLottery = ['ssq', 'fc3d', 'pl3', 'qlc', 'dlt', 'pl5', 'qxc'];

            /** 拥有专家号码推荐的彩种 */
            let _hmtjLottery = ['ssq', 'fc3d', 'pl3', 'qlc', 'dlt'];


            if (_defultFlot[0]) {
                _urlString1 = `/chart/${ _lotteryCode }/${ _defultFlot[0] }`;
            } else {
                _urlString1 = 'javascript:void(0)';
            }

            if (_defultFlot[1]) {
                _urlString2 = `/omission/${ _lotteryCode }/${ _defultFlot[1] }`;
            } else {
                _urlString2 = 'javascript:void(0)';
            }

            if (_defultFlot[2]) {
                _urlString3 = `/shdd/${ _lotteryCode }/${ _defultFlot[2] }`;
            } else {
                _urlString3 = 'javascript:void(0)';
            }

            if (_defultFlot[3]) {
                _urlString4 = `/hmtj/${ _lotteryCode }/${ _defultFlot[3] }`;
            } else {
                _urlString4 = 'javascript:void(0)';
            }

            _stringHtml += `<div class="afb-titleB">`;
            _stringHtml += `<a class="title ${ _num==0 ? 'active': '' }" data-type="chartTrend"  href="${ _urlString1 }"><i class="zouShi"></i>走势分析</a>`;
            _stringHtml += `<i class="line"></i>`
            _stringHtml += `<a class="title  ${ _num==1 ? 'active': '' }" data-type="omissionTrend" href="${ _urlString2 }"><i class="yiLou"></i>遗漏分析</a>`;

            /*** 如果是高频彩，是没有杀号定胆和号码推荐的 */
            if (Currency.contains(_shddLottery, _lotteryCode) != false) {
                _stringHtml += `<i class="line"></i>`;
                _stringHtml += `<a class="title  ${ _num==2 ? 'active': '' }" data-type="shddTrend" href="${ _urlString3 }"><i class="shdd"></i>杀号定胆</a>`;
            }
            /*** 如果是高频彩，是没有杀号定胆和号码推荐的 */
            if (Currency.contains(_hmtjLottery, _lotteryCode) != false) {
                _stringHtml += `<i class="line"></i>`;
                _stringHtml += `<a class="title  ${ _num == 3 ? 'active' : '' }" data-type="hmtjTrend" href="${ _urlString4 }"><i class="hmtj"></i>号码推荐</a>`;
            }

            _stringHtml += `</div>`;

            return _stringHtml;

        } else {

            console.error(' commonTab：参数有问题！ ')
            return '';
        }

    }

    /**
     *   渲染资讯右边的走势列表
     */
    Template.defaults.imports.renderArticleChartList = (_trend, _lotteryCode) => {

        if (_trend) {

            var _number = 0;

            var _stringHtml = '';

            _trend.forEach((_val, _index, _arr) => {

                if (_val.child) {

                    for (var j = 0; j < _val.child.length; j++) {

                        if (_number < 12) {
                            _stringHtml += '<h2 class="titleB"><a href="/chart/' + _lotteryCode + '/' + _val.child[j].code + '" class="title"  >' + _val.name + _val.child[j].name + '</a></h2>';

                        } else {
                            break;
                        }

                        _number++;

                    }

                }

            })

            return _stringHtml;

        } else {

            return '<div style="width:100%; min-height: 90px; color: #999; text-align: center; font-size: 14px; line-height:90px;">暂无任何走势图</div>';

        }


    }



    /**
     *   渲染资讯列表分类tab
     */
    Template.defaults.imports.renderArticleTab = (_code, _articleClassify, _categoryId) => {

        if (_code == undefined || typeof(_code) != 'string') {
            console.warn('renderArticleTab: 参数_code为空或者不为字符类型！');
            return '';
        }

        if (_articleClassify == undefined || typeof(_articleClassify) != 'object') {
            console.warn('renderArticleTab: 参数_articleClassify为空或者不为对象类型！');
            return '';
        }


        if (6 == _categoryId || 5 == _categoryId || 39 == _categoryId || 40 == _categoryId || 41 == _categoryId) {
            return "";
        }

        if (_articleClassify.length > 0) {

            let stringHtml = '';

            for (let i = 0; i < _articleClassify.length; i++) {

                if (_code == _articleClassify[i].code) {

                    stringHtml += `<a class="btn active" data-classityCode="${_articleClassify[i].code}" data-categoryId="${_articleClassify[i].categoryId}" href="/article/list-${_articleClassify[i].code}-${_articleClassify[i].categoryId}-p1">${_articleClassify[i].name}</a>`;

                } else {
                    stringHtml += `<a class="btn"  data-classityCode="${_articleClassify[i].code}"  data-categoryId="${_articleClassify[i].categoryId}"  href="/article/list-${_articleClassify[i].code}-${_articleClassify[i].categoryId}-p1">${_articleClassify[i].name}</a>`;
                }

            }

            return stringHtml;

        }

    }


    /**
     *  格式化追号推荐content
     */
    Template.defaults.imports.formateContent = (_content, code, type) => {

        if (_content == undefined || typeof(_content) != 'string') {
            console.warn('formateContent: 参数_content为空或者不为字符类型！');
            return;
        }


        if (/\|/.test(_content)) {

            let _contentArray = _content.split('|');
            let _tempHtml = '';
            let _tempNumber = '';

            if (_contentArray.length > 0) {

                for (let i = 0; i < _contentArray.length; i++) {

                    _tempNumber = '';
                    let numberArray = _contentArray[i].split(',');

                    _tempNumber += '[ ';


                    for (let j = 0; j < numberArray.length; j++) {

                        let num = parseInt(numberArray[j]);

                        if ((code.indexOf('k3') >= 0 && 1 != type) || code.indexOf('ssc') >= 0) {
                            num = parseInt(numberArray[j]);
                        } else {
                            if (num < 10) {
                                num = '0' + parseInt(numberArray[j]);
                            }
                        }



                        if (j == numberArray.length - 1) {
                            _tempNumber += num;
                            _tempNumber += " ]";
                        } else {
                            _tempNumber += num + ".";
                        }

                    }

                    _tempHtml += `<span class="group" style="margin: 0px  2px; padding-right: 0px; float: left;">${_tempNumber}</span>`;
                }

                return _tempHtml;

            }

        }

    }


    /**
     *   格式化时间，只取月日
     */
    Template.defaults.imports.formateDelYearAndHour = (_time) => {

        if (_time == undefined || typeof(_time) != 'string') {
            console.error('formateDelYearAndHour: 参数_time为空或者不为字符类型！');
            return;
        }

        return Currency.formateDelYearAndHour(_time);

    }

    /**
     *  资讯技巧;
     */
    Template.defaults.imports.articleSkill = (_articleList) => {

        if (_articleList == undefined || typeof(_articleList) != 'object') {
            console.error('articleSkill: 参数_articleList为空或者不为数组类型！');
            return;
        }

        let classity = '';
        let stringHtml = '';
        let listHtml = '';

        for (let i = 0; i < _articleList.length; i++) {

            if (i == _articleList.length - 1) {
                classity += `<a href="javascript:void(0)" class="name"  data-code="${_articleList[i].code}"  data-categoryId =37 >${_articleList[i].name}</a>`;
            } else {
                if (i == 0) {
                    classity += `<a href="javascript:void(0)"  class="name active"  data-code="${_articleList[i].code}" data-categoryId =37>${_articleList[i].name}</a><i class="line">/</i>`;
                } else {
                    classity += `<a href="javascript:void(0)" class="name" data-code="${_articleList[i].code}" data-categoryId =37>${_articleList[i].name}</a><i class="line">/</i>`;
                }

            }

            let liHtml = '';


            /** 如果大于4条得情况 */
            if (_articleList[i].data.length > 4) {

                for (let j = 0; j < _articleList[i].data.length; j++) {

                    if (j == 8) {
                        liHtml += `<li><a href="/article/detail-${_articleList[i].data[j].categoryId}-${_articleList[i].data[j].id}.html" class="title" target="_blank"  title="${_articleList[i].data[j].title}">${_articleList[i].data[j].shortTitle}</a>`;
                        liHtml += `<span class="date">${Currency.formateDelYearAndHour(_articleList[i].data[j].createDate)}</span>`;
                        liHtml += `</li>`;
                        if (_articleList[i].code == 'all') {
                            liHtml += `<li class="lastLi"><a href="/article/list-${_articleList[i].code}-8-p1" class="title" target="_blank" rel="nofollow">更多全国彩技巧&nbsp;&nbsp;&gt;&gt;</a></li>`;
                        } else {
                            liHtml += `<li class="lastLi"><a href="/article/list-${_articleList[i].code}-37-p1" class="title" target="_blank" rel="nofollow">更多${_articleList[i].data[j].lotteryName}技巧&nbsp;&nbsp;&gt;&gt;</a></li>`;
                        }

                    } else {
                        liHtml += `<li><a href="/article/detail-${_articleList[i].data[j].categoryId}-${_articleList[i].data[j].id}.html" class="title" target="_blank"  title="${_articleList[i].data[j].title}">${_articleList[i].data[j].shortTitle}</a>`;
                        liHtml += `<span class="date">${Currency.formateDelYearAndHour(_articleList[i].data[j].createDate)}</span>`;
                        liHtml += `</li>`;
                    }
                }

            }

            if (i == 0) {
                listHtml += `<div class="al_listBlock  pl_lis ${_articleList[i].code}">`;
            } else {
                listHtml += `<div class="al_listBlock pl_lis  ${_articleList[i].code}" style="display: none;" >`;
            }
            listHtml += `<ul>`;
            listHtml += liHtml;
            listHtml += `</ul></div>`;

        }

        stringHtml += `<div class="si-menu" id="articleTab">${classity}</div>`;
        stringHtml += `<div class="public-articleList si-b1">${listHtml}</div>`;

        return stringHtml;

    }

    /**
     *  资讯技巧底部;
     */
    Template.defaults.imports.articleBottom = (_articleList, _lotteryCode) => {

        if (_articleList == undefined || typeof(_articleList) != 'object') {
            console.error('articleBottom: 参数_articleBottom为空或者不为数组类型！');
            return;
        }

        if (_lotteryCode == undefined || typeof(_lotteryCode) != 'string') {
            console.error('articleBottom: 参数_lotteryCode为空或者不为字符串类型！');
            return;
        }

        let classity = '';
        let stringHtml = '';
        let listHtml = '';

        for (let i = 0; i < _articleList.length; i++) {

            if (i == _articleList.length - 1) {
                if (_articleList[i].code == _lotteryCode) {
                    classity += `<a href="javascript:void(0)" class="active"  data-code="${_articleList[i].code}">${_articleList[i].name}</a>`;
                } else {
                    classity += `<a href="javascript:void(0)"  data-code="${_articleList[i].code}">${_articleList[i].name}</a>`;
                }
            } else {
                if (_articleList[i].code == _lotteryCode) {
                    classity += `<a href="javascript:void(0)"  class="active"  data-code="${_articleList[i].code}">${_articleList[i].name}</a><i>/</i>`;
                } else {
                    classity += `<a href="javascript:void(0)" data-code="${_articleList[i].code}">${_articleList[i].name}</a><i>/</i>`;
                }

            }

            let firstHtml = ''
            let secondHtml = '';
            let liHtml = '';


            /** 如果大于4条得情况 */
            if (_articleList[i].data.length > 4) {

                for (let j = 0; j < _articleList[i].data.length; j++) {

                    /** 前5条 */
                    if (j < 5) {
                        firstHtml += `<a href="/article/detail-${_articleList[i].data[j].categoryId}-${_articleList[i].data[j].id}.html" target="_blank"  title="${_articleList[i].data[j].title}">`;
                        firstHtml += `<span class="f_l">${_articleList[i].data[j].shortTitle}</span>`
                        firstHtml += `<span class="f_r">${Currency.formateDelYearAndHour(_articleList[i].data[j].createDate)}</span>`;
                        firstHtml += `</a>`;
                    } else {
                        secondHtml += `<a href="/article/detail-${_articleList[i].data[j].categoryId}-${_articleList[i].data[j].id}.html" target="_blank"  title="${_articleList[i].data[j].title}">`;
                        secondHtml += `<span class="f_l">${_articleList[i].data[j].shortTitle}</span>`
                        secondHtml += `<span class="f_r">${Currency.formateDelYearAndHour(_articleList[i].data[j].createDate)}</span>`;
                        secondHtml += `</a>`;
                    }
                }

                liHtml += `<li>`;
                liHtml += `<div class="li_fon">`;
                liHtml += firstHtml
                liHtml += `</div>`;
                liHtml += `</li>`;
                liHtml += `<li>`;
                liHtml += `<div class="li_fon">`;
                liHtml += secondHtml;
                if (_articleList[i].data.length == 9) {

                    if (_articleList[i].code == 'all') {
                        liHtml += `<a href="/article/list-${_articleList[i].code}-8-p1" class="skip" target="_blank" rel="nofollow">更多全国彩技巧  &gt;&gt;</a>`;
                    } else {
                        liHtml += `<a href="/article/list-${_articleList[i].code}-37-p1" class="skip" target="_blank" rel="nofollow">更多${_articleList[i].name}技巧  &gt;&gt;</a>`;
                    }

                }
                liHtml += `</div>`;
                liHtml += `</li>`;



            } else {

                for (let j = 0; j < _articleList[i].data.length; j++) {

                    firstHtml += `<a href="/article/detail-${_articleList[i].data[j].categoryId}-${_articleList[i].data[j].id}.html" title="${_articleList[i].data[j].title}" target="_blank">`;
                    firstHtml += `<span class="f_l">${_articleList[i].data[j].shortTitle}</span>`
                    firstHtml += `<span class="f_r">${Currency.formateDelYearAndHour(_articleList[i].data[j].createDate)}</span>`;
                    firstHtml += `</a>`;

                }

                liHtml += `<li>`;
                liHtml += `<div class="li_fon">`;
                liHtml += firstHtml;
                liHtml += `</div>`;
                liHtml += `</li>`;

            }

            if (_articleList[i].code == _lotteryCode) {
                listHtml += `<div class="pl_lis  ${_articleList[i].code}">`;
            } else {
                listHtml += `<div class="pl_lis  ${_articleList[i].code}" style="display: none;" >`;
            }
            listHtml += `<ul>`;
            listHtml += liHtml;
            listHtml += `</ul></div>`;

        }

        stringHtml += `<div class="ad_pubList" >`;
        stringHtml += `<div class="pl_tit" id="articleTab">${classity}</div>`;
        stringHtml += listHtml;
        stringHtml += `</div>`;

        return stringHtml;

    }


    /**
     *  限制字数;
     *  @param: 内容（string）;
     *  @param: 限制最大长度（number）;
     */
    Template.defaults.imports.limitFontNumber = (_string, _length) => {

        if (_string == undefined) {
            console.error('limitFontNumber：参数_string为空，请注意！');
            return;
        }

        if (_length == undefined || typeof(_length) != 'number') {
            console.error('limitFontNumber：参数_length为空，请注意！');
            return;
        }

        if (_string.length > _length) {
            return _string.substr(_length)
        } else {
            return _string;
        }

    }


    /**
     * 删除http: //或者https: //
     * @param _string
     * @return {*}
     */
    Template.defaults.imports.deleteHttps = (_string) => {

        if (_string == undefined) {
            console.error('substr：参数_string为空，请注意！');
            return;
        }

        if (_string == '') {
            return '';
        }

        if (/https/.test(_string)) {
            return _string.replace('https://', '');
        } else if (/http/.test(_string)) {
            return _string.replace('http://', '');
        }

    }

    /**
     *  截取字体;
     */
    Template.defaults.imports.substr = (_string, _length) => {

        if (_string == undefined) {
            console.error('substr：参数_string为空，请注意！');
            return;
        }

        if (_length == undefined || typeof(_length) != 'number') {
            console.error('substr：参数_length为空或者类型不正确，请注意！');
            return;
        }

        return Currency.formatDate(_string).substr(_length);

    }


    /**
     *  渲染tab(直播列表)；
     *  @param: 数字彩
     */
    Template.defaults.imports.renderTab = (_digitObject, _lotteryCode) => {

        if (_digitObject == undefined || typeof(_digitObject) != 'object') {
            console.error('renderTab：参数_digitObject为空或者类型不正确，请注意！');
            return;
        }

        if (_lotteryCode == undefined || typeof(_lotteryCode) != 'string') {
            console.error('renderTab：参数_lotteryCode为空或者类型不正确，请注意！');
            return;
        }

        let _stringHtml = '';

        for (let i = 0; i < _digitObject.length; i++) {

            if (_digitObject[i].code == _lotteryCode) {
                _stringHtml += `<a href="/live/${_digitObject[i].code}-list-p1" class="name active">${_digitObject[i].name}</a>`;
            } else {
                _stringHtml += `<a href="/live/${_digitObject[i].code}-list-p1" class="name">${_digitObject[i].name}</a>`;
            }


            if (i != _digitObject.length - 1) {
                _stringHtml += `<i class="line"></i>`;
            }

        }

        return _stringHtml;

    }


    /**
     *  获取开奖的倒计时间
     *  @param: 时间
     */
    Template.defaults.imports.getCountDownTimeDay = (_awardTimeInterval) => {

            if (_awardTimeInterval == undefined || typeof(_awardTimeInterval) != 'string') {
                console.error('getCountDownTime：参数_awardTimeInterval为空或者类型不正确，请注意！');
                return;
            }

            return _awardTimeInterval.SecondsTohhmmss();

        },

        /**
         *  获取开奖的倒计时间
         *  @param: 时间
         */
        Template.defaults.imports.getCountDownTime = (_awardTimeInterval) => {

            if (_awardTimeInterval == undefined || typeof(_awardTimeInterval) != 'string') {
                console.error('getCountDownTime：参数_awardTimeInterval为空或者类型不正确，请注意！');
                return;
            }

            return _awardTimeInterval.SecondsTommss();

        },

        /**
         *  渲染直播页面上视频得开奖号码;
         *  @param: 从后台拿过来得视频列表信息（高频彩）
         *  @param: 省份
         */
        Template.defaults.imports.renderLotteryListForVideo = (_lotteryCode, _lotteryAwardList, _province) => {

            if (_lotteryCode == undefined || typeof(_lotteryCode) != 'string') {
                console.error('renderLotteryListForVideo：参数_lotteryCode为空或者类型不正确，请注意！');
                return;
            }

            if (_lotteryAwardList == undefined || typeof(_lotteryAwardList) != 'object') {
                console.error('renderLotteryListForVideo：参数_lotteryAwardlList为空或者类型不正确，请注意！');
                return;
            }

            if (_province == undefined || typeof(_province) != 'object') {
                console.error('renderLotteryListForVideo：参数_province为空或者类型不正确，请注意！');
                return;
            }

            let stringHtml = '';
            let awardList;

            if (_lotteryAwardList.awardList) {
                awardList = _lotteryAwardList.awardList;
            } else {
                awardList = [];
            }


            if (awardList.length > 0) {

                let _lotteryType;

                if (_lotteryCode == 'bjpk10') {

                    _lotteryType = 'pk10';

                } else if (_lotteryCode == 'bjkl8') {

                    _lotteryType = 'kl8';

                } else {
                    _lotteryType = Currency.getLotteryCodeType(_lotteryCode, _province);
                }


                stringHtml += `<div class="number  ${_lotteryType}">`;

                for (let i = 0; i < awardList.length; i++) {

                    if (awardList[i].lotteryCode == _lotteryCode) {

                        if (/\|/i.test(awardList[i].result) && _lotteryType != 'kl8') {

                            let resultArray = awardList[i].result.split('|');
                            let resultRedBallArray = resultArray[0].split(',');
                            let resultBlueBallArray = resultArray[1].split(',');

                            for (let j = 0; j < resultRedBallArray.length; j++) {
                                stringHtml += `<span class="red">${resultRedBallArray[j]}</span>`;
                            }

                            for (let j = 0; j < resultBlueBallArray.length; j++) {
                                stringHtml += `<span class="blue">${resultBlueBallArray[j]}</span>`;
                            }

                        } else {


                            /** 如果类型为快3或者pk10, 则都用同一套样式 */
                            if (_lotteryType == 'k3') {

                                let resultNumBallArray = awardList[i].result.split(',');

                                for (let j = 0; j < resultNumBallArray.length; j++) {
                                    if (parseInt(resultNumBallArray[j]) < 10) {
                                        stringHtml += `<span class="num0${resultNumBallArray[j]}"></span>`;
                                    } else {
                                        stringHtml += `<span class="num${parseInt(resultNumBallArray[j])}"></span>`;
                                    }
                                }

                            } else if (_lotteryType == 'kl8') {

                                let resultArray = awardList[i].result.split('|');
                                let resultRedBallArray = resultArray[0].split(',');
                                let resultFeiPan = resultArray[1];

                                stringHtml += `<i>X${resultFeiPan}</i>`;

                                for (let j = 0; j < resultRedBallArray.length; j++) {
                                    stringHtml += `<span>${resultRedBallArray[j]}</span>`;
                                }

                            } else {

                                if (_lotteryCode == 'bjpk10') {

                                    let resultNumBallArray = awardList[i].result.split(',');

                                    for (let j = 0; j < resultNumBallArray.length; j++) {

                                        if (parseInt(resultNumBallArray[j]) < 10) {
                                            stringHtml += `<span class="num0${resultNumBallArray[j]}"></span>`;
                                        } else {
                                            stringHtml += `<span class="num${parseInt(resultNumBallArray[j])}"></span>`;
                                        }

                                    }

                                } else {

                                    let resultRedBallArray = awardList[i].result.split(',');

                                    for (let j = 0; j < resultRedBallArray.length; j++) {
                                        stringHtml += `<span class="red">${resultRedBallArray[j]}</span>`;
                                    }

                                }

                            }

                        }

                        break;

                    }

                }
                stringHtml += '</div>';

                return stringHtml;

            } else {

                //console.warn('renderLotteryListForVideo：开奖结果数组为空数组！');
                return;

            }



        }


    /**
     *  根据时间先后顺序对数组对象进行排序;
     *  @param: 从后台拿过来得视频列表信息（高频彩）;
     *  @param: 如果为空默认为正序排序，如果设置为true为正序，如果为false表示为倒序;
     */
    Template.defaults.imports.sortVideo = (_lotteryAwardList, _rev) => {

        if (_lotteryAwardList == undefined || typeof(_lotteryAwardList) != 'object') {
            console.error('sortVideo：参数_lotteryAwardList为空或者类型不正确，请注意！');
            return;
        }

        return _lotteryAwardList.awardTimes.sort(Currency.sortBy('awardTimeInterval', _rev));

    }


    /**
     *  渲染开奖条件模块;
     *  @param: 后台拿回来得数字彩得开奖列表信息；
     *  @param: 从配置文件拿过来得奖项信息;
     */
    Template.defaults.imports.renderAwardInfo = (_awardinfo, _lotteryAwardGrade) => {

        if (_awardinfo == undefined || typeof(_awardinfo) != 'object') {
            console.error('renderAwardInfo：参数_awardinfo为空或者类型不正确，请注意！');
            return;
        }

        if (_lotteryAwardGrade == undefined || typeof(_lotteryAwardGrade) != 'object') {
            console.error('renderAwardInfo：参数_lotteryAwardGrade为空或者类型不正确，请注意！');
            return;
        }

        let stringHtml = '';

        if (_awardinfo.length > 0) {

            for (let i = 0; i < _awardinfo.length; i++) {

                let colorStyle = '';
                if (i == 0) {
                    colorStyle = 'font_red';
                } else if (i == 1) {
                    colorStyle = 'font_blue';
                } else if (i == 2) {
                    colorStyle = 'font_green';
                }

                /** 假如这个值有得就读这个awards值，如果没有得话，就用i拼接奖项 */
                if (_awardinfo[i].awards) {
                    stringHtml += `<tr><td class="${colorStyle}">${_awardinfo[i].awards}</td>`;
                } else {
                    stringHtml += `<tr><td class="${colorStyle}">${i+1}等奖</td>`;
                }

                stringHtml += `<td><span class="${colorStyle}" align="center">${_lotteryAwardGrade[i].condition}</span></td>`;
                stringHtml += `<td><span class="${colorStyle}">${_awardinfo[i].bet}</span></td>`;
                stringHtml += `<td><span class="${colorStyle}">${_awardinfo[i].amount}</span></td></tr>`;

            }

        } else {

            stringHtml += "<tr><div colspan='4' align='center' style='color: #999;'>暂无任何开奖信息</div></tr>"

        }


        return stringHtml;

    }


    /**
     *  渲染开奖条件模块;
     *  @param: 后台拿回来得数字彩得开奖列表信息；
     *  @param: 从配置文件拿过来得奖项信息;
     */
    Template.defaults.imports.renderAwardLocalInfo = (_awardinfo) => {

        if (_awardinfo == undefined || typeof(_awardinfo) != 'object') {
            console.error('renderAwardLocalInfo：参数_awardinfo为空或者类型不正确，请注意！');
            return;
        }

        let stringHtml = '';

        if (_awardinfo.length > 0) {

            for (let i = 0; i < _awardinfo.length; i++) {

                let colorStyle = '';
                if (i == 0) {
                    colorStyle = 'font_red';
                } else if (i == 1) {
                    colorStyle = 'font_blue';
                } else if (i == 2) {
                    colorStyle = 'font_green';
                }


                stringHtml += `<tr><td class="${colorStyle}">${_awardinfo[i].title}</td>`;
                stringHtml += `<td><span class="${colorStyle}" align="center">${_awardinfo[i].condition}</span></td>`;

                if (_awardinfo[i].amountinfo) {

                    stringHtml += `<td><span class="${colorStyle}">${_awardinfo[i].amountinfo}</span></td></tr>`;
                } else {
                    stringHtml += `<td><span class="${colorStyle}">${_awardinfo[i].amount}</span></td></tr>`;
                }

            }

        } else {

            stringHtml += "<tr><div colspan='4' align='center' style='color: #999;'>暂无任何开奖信息</div></tr>"

        }


        return stringHtml;

    }


    /**
     * 把yyyy-mm-dd转成yyyy年mm月dd日
     * @constructor
     */
    Template.defaults.imports.DateFormatTime = (_time) => {

        if (_time) {

            return _time.DateFormatTime();

        } else {

            console.error('DateFormatTime：参数为空，请注意！');
        }

    }

    /**
     *  计算兑奖截止日期（开奖时间日数加上60天）----只使用在数字彩;
     *  @param _string
     * @return {*}
     */
    Template.defaults.imports.Deadline = (_time) => {

        if (_time) {

            let time = Currency.formatDate(_time);

            let timeArray = time.split('-');

            /** 当月 */
            let nowYear = parseInt(timeArray[0]);
            let nowMonth = parseInt(timeArray[1].replace(/^0/, ''));
            let nowDay = parseInt(timeArray[2].replace(/^0/, ''));

            /** 下个月 */
            let nextYear;
            let nextMonth;
            let nextDay;

            /** 下下个月 */
            let secondNextYear;
            let secondNextMonth;
            let secondNextDay;

            /** 截止日期 */
            let deadline = '';

            /** 相差天数 */
            let diffDay;

            /** 下两个月得总天数 */
            let nextTwoMonthDay;

            /** 如果当前得月份是11月份，那么下个月就是12月，下下个月就是1月 */
            if (nowMonth == 11) {

                nextYear = nowYear;
                nextMonth = 12;

                secondNextYear = nowYear + 1;
                secondNextMonth = 1;

                /** 如果当前得月份是12月份，那么下个月就是1月，下下个月就是2月 */
            } else if (nowMonth == 12) {

                nextYear = nowYear + 1;
                nextMonth = 1;

                secondNextYear = nowYear + 1;
                secondNextMonth = 2;

                /** 如果不是11月或者12月份，那么下个月就是+1，下下个月就+2 */
            } else {
                nextYear = nowYear;
                nextMonth = nowMonth + 1;

                secondNextYear = nowYear;
                secondNextMonth = nowMonth + 2;
            }

            /** 获取下个月总天数，获取下下个月总天数 */
            nextDay = Currency.getMonthTotalDay(nextYear, nextMonth);
            secondNextDay = Currency.getMonthTotalDay(secondNextYear, secondNextMonth);

            /** 后2个月的总天数 */
            nextTwoMonthDay = nextDay + secondNextDay;

            /** 当天加上60天时间减去下两个月得总天数，剩下就是过了60天后得那天日期*/
            diffDay = (nowDay + 60) - nextTwoMonthDay


            /** 大月   1,3,5,7,8,10,12; */
            /** 小月  4,6,9,11; */

            /** 表示加上60天后，满2个月得情况 */
            if (diffDay > secondNextDay) {

                /** 当是12月份的时候，因为12月份下个月是1月份，下下月是2月份，才会出现60天满2个月的情况 */
                if (secondNextMonth == 12) {
                    deadline = (secondNextYear + 1) + "-" + (secondNextMonth + 1) + "-" + (diffDay - secondNextDay);
                } else {
                    deadline = secondNextYear + "-" + (secondNextMonth + 1) + "-" + (diffDay - secondNextDay);
                }


                /** 表示加上60天后，不满2个月得情况 */
            } else {

                if (diffDay == 0) {

                    deadline = secondNextYear + "-" + secondNextMonth + "-" + nowDay;

                } else {

                    deadline = secondNextYear + "-" + secondNextMonth + "-" + diffDay;
                }
            }

            /** 因为兑奖时间 +1天（因不含当天）因此要对最后得出的时间进行加1天处理 */
            //设置天数 +1 天;
            var date = new Date(deadline)
            date = new Date(date.setDate(date.getDate() + 1));
            deadline = date.format('yyyy-MM-dd');

            return deadline.DateFormatTime();

        } else {
            console.error('Deadline：参数为空，请注意！');
        }
    }

    /**
     *  格式化快8的表格;
     * @param _string
     * @return {*}
     */
    Template.defaults.imports.k8changeTable = (_string) => {

        if (_string) {

            let _allBallArray;
            let _redBallArray;
            let _stringHtml = '';

            _allBallArray = _string.split('|');
            _redBallArray = _allBallArray[0].split(',');

            /**  如果有蓝球得画，需要对篮球进行处理 */
            if (_allBallArray[1]) {
                _stringHtml += `<td>X${_allBallArray[1]}</td>`;
            } else {
                _stringHtml += `<td></td>`;
            }


            if (_redBallArray.length > 0) {
                for (let i = 0; i < _redBallArray.length; i++) {
                    _stringHtml += `<td>${_redBallArray[i]}</td>`;
                }
            }

            return _stringHtml;

        } else {
            console.warn('k8changeTable：参数为空，请注意！');
        }

    }


    /**
     *  最新开奖公告让字符串转变成球
     * @param _string
     * @return {*}
     */
    Template.defaults.imports.stringChangeBall = (_string, _type, _lotteryCode) => {

        if (_string) {

            /**
             *   有时候切图得时候，会出现球时i标签，也有可能是b标签，所以做一个标签类型判断 ;
             *   1类型是 <i>标签，2类型是<b>标签,  3类型是<span>标签;
             */
            if (_type) {

                if (Currency.contains([1, 2, 3], _type)) {
                    _type = _type;
                } else {
                    _type = 2;
                    console.warn('stringChangeBall: 参数不为1或者2！');
                }

            } else {
                _type = 2;
                //console.warn('stringChangeBall: 参数为空！');
            }

            let _allBallArray;
            let _redBallArray;
            let _stringHtml = '';
            let _dom;

            if (_type == 1) {
                _dom = 'i';
            } else if (_type == 2) {
                _dom = 'b';
            } else if (_type == 3) {
                _dom = 'span';
            }

            /** 如果有追号，即 | 分割得, 表示有篮球 */
            if (/\|/i.test(_string)) {

                _allBallArray = _string.split('|');
                _redBallArray = _allBallArray[0].split(',');
                let _blueBallArray = [];

                if (_redBallArray[0].length > 0) {
                    for (let i = 0; i < _redBallArray.length; i++) {

                        _stringHtml += `<${_dom} class="red">${_redBallArray[i]}</${_dom}>`;

                    }
                }


                /**  如果有蓝球得画，需要对篮球进行处理 */
                if (_allBallArray[1] != undefined && _lotteryCode != 'fc3d') {

                    _blueBallArray = _allBallArray[1].split(',');

                    for (let i = 0; i < _blueBallArray.length; i++) {

                        _stringHtml += `<${_dom} class="blue">${_blueBallArray[i]}</${_dom}>`;

                    }

                    /** 否则则是福彩3d */
                } else {


                    _blueBallArray = _allBallArray[1].split(',');

                    let _tempString = '';

                    for (let i = 0; i < _blueBallArray.length; i++) {

                        if (i == _blueBallArray.length - 1) {

                            _tempString += `${_blueBallArray[i]}`;
                        } else {

                            _tempString += `${_blueBallArray[i]}&nbsp;`;
                        }

                    }
                    _stringHtml += `<span class="testNumber">试机号：<i class="font-red">${_tempString}</i></span>`;

                }

                /** 如果没有追号，表示没有篮球 */
            } else {


                _redBallArray = _string.split(',');

                if (_redBallArray[0].length > 0) {
                    for (let i = 0; i < _redBallArray.length; i++) {

                        _stringHtml += `<${_dom} class="red">${_redBallArray[i]}</${_dom}>`;

                    }
                }

            }

            return _stringHtml;

        } else {
            return '	<i class="font_gray">&#45;&#45;</i>';
            console.warn('stringChangeBall：参数为空，请注意！')
        }

    }


    /**
     *  日期格式化;
     *  @param: 时间;
     */
    Template.defaults.imports.formatDate = (_time) => {

        if (_time) {

            _time = Currency.setTimeZero(_time);

            return _time.replace(/\//g, '-');

        } else {
            console.error('formatDate: 参数不存在！');
            return;
        }

    }

    /**
     * 日期 格式处理 format: yyyy-MM-dd hh:mm:ss
     * @param {*} date 
     */
    Template.defaults.imports.formatDateTime = (date, format) => {
            if (!date) return '';
            date = date.toString().replace(/-/g, '/');

            return (new Date(date)).format(format);
        }
        /**
         *  日期格式化;
         *  @param: 时间;
         */
    Template.defaults.imports.formatDateDelHour = (_time) => {

        if (_time) {

            return Currency.formatDateDelHour(_time)

        } else {
            console.error('formatDate: 参数不存在！');
            return;
        }

    }


    /**
     *
     * @param money
     * @return {*}
     */
    Template.defaults.imports.money = money => {
        if (!money) return '';

        if (typeof money !== 'string') {
            money = money.toString();
        }
        money = money.replace(/,/g, '');
        if (!/^[0-9]+$/.test(money)) {
            console.error('金钱格式错误');
            return 0;
        }

        let _money = '-';

        // 如果大于亿位
        if (money.length >= 9) {
            _money = `${money.substr(0, money.length - 8)}亿${parseInt(money.substr(money.length - 8, 4))}万`;
        } else if (money.length >= 5) {
            _money = `${money.substr(0, money.length - 4)}万`;
        }

        return _money;

    }

    /**
     * 格式化日期
     * @param date;
     * @return {*}
     */
    Template.defaults.imports.lotteryDate = date => {
        date = date ? date.replace(/-/g, '/') : '1900/01/01';
        return (new Date(date)).format('yyyy-MM-dd hh:mm');
    }

    /**
     * 追号计划状态
     * @param;
     * @return {*}
     */
    Template.defaults.imports.planState = (state, total) => {
        let _state = {
            0: '等待开奖',
            1: '追号中',
            2: '失败',
            3: '当期中出'
        }

        if (state == 3) {
            return total == 0 ? _state[state] : `<span class="font-red">${total}期中出</span>`;
        }

        return _state[state];
    }

    /**
     * 开奖时间格式
     * @param {*} date 
     */
    Template.defaults.imports.awardDateFormat = date => {
        if (!date) return '';
        date = date.replace(/-/g, '/');
        date = new Date(date);
        return date.format('MM-dd hh:mm');
    }



    /**
     *  绑定头部导航(原)
     *  @param ( object)
     *
     */
    Template.defaults.imports.renderMainNav = (_mainNav) => {
        if (!_mainNav || typeof(_mainNav) != 'object') {

            console.error('renderMainNav: 参数不正确，为空或者是参数不是一个对象！');
            return;

        } else {

            var navHtml = ''; /** 一级菜单html */
            var twoLevelHtml = ''; /** 二级菜单html */
            console.log("渲染导航几次")
            var exist = []
            for (let key in _mainNav) {

                /** 如果存在二级菜单的话 */
                // console.log("exist", exist)
                // console.log("title", _mainNav[key].title)
                // console.log("值", exist.indexOf(_mainNav[key].title))
                if (_mainNav[key].twoLevel) {
                    twoLevelHtml = "" //第二次循环时复原
                    twoLevelHtml += `<div class="nav-subNav ${_mainNav[key].title}" ><div class="subNavBlock"><span class="icon-subNav"></span><div class="main-centerSection  headerDropdown">`;

                    for (let keyObject in _mainNav[key].twoLevel) {

                        let tempHtml = '';
                        let childsArray = _mainNav[key].twoLevel[keyObject].childs;

                        for (let i = 0; i < childsArray.length; i++) {

                            /** 如果是地方彩得话，只有详情没有历史开奖和主页 */
                            if (childsArray[i].classify == 'local') {

                                tempHtml += `<span class="name"><a href="/${childsArray[i].classify}/${childsArray[i].code}/detail-${childsArray[i].provinceId}" target="_blank">${childsArray[i].name}</a></span> `;
                            } else {

                                tempHtml += `<span class="name"><a href="/${childsArray[i].classify}/${childsArray[i].code}" target="_blank">${childsArray[i].name}</a></span> `;
                            }


                        }

                        twoLevelHtml += `<dl><dt><i class="${_mainNav[key].twoLevel[keyObject].imgClass}"></i><i class="sort">${_mainNav[key].twoLevel[keyObject].title}</i></dt><dd>${tempHtml}</dd></dl>`;

                    }

                    twoLevelHtml += `</div></div></div>`;


                    navHtml += `<li class="nav-li li-bg" type="${_mainNav[key].title}"><a  target="_blank" href="${_mainNav[key].link}" class="nav  ${_mainNav[key].active ? 'hover' : ''}">${_mainNav[key].title}<i class="line"></i><i class="iconfont icon-xiangxia"></i></a>${twoLevelHtml}</li>`;

                } else {

                    navHtml += `<li class="nav-li"><a  target="_blank" href="${_mainNav[key].link}" class="nav ${_mainNav[key].active ? 'hover' : ''}">${_mainNav[key].title}<i class="line"></i></a></li>`;
                }
                exist.push(_mainNav[key].title)
            }

        }

        return navHtml;

    }

    /**
     *  是否显示左边导航栏分类;
     *  @param： _isShowDetailLeft（bool）
     */
    Template.defaults.imports.activeDetailLeft = (_isShowDetailLeft) => {

        if (_isShowDetailLeft) {
            return 'active';
        } else {
            return '';
        }

    }

    /**
     *  是否显示左边导航栏分类;
     *  @param： _isShowDetailLeft（bool）
     */
    Template.defaults.imports.showForDetailLeft = (_isShowDetailLeft) => {

        if (_isShowDetailLeft) {
            return 'style="display:block"';
        } else {
            return 'style="display:none"';
        }

    }


    /**
     *  绑定详情页左边导航
     *  @param 省份( object)
     *  @param 类型 (String)
     *  @param 详情页左边需要展开的彩种 (String)
     */
    Template.defaults.imports.renderDetailLeftNav = (_province, _classify, _lotteryCode, _proname) => {

        if (!(_province && typeof(_province) == 'object')) {

            console.error('renderDetailLeftNav: 参数_province不正确！');
            return;
        }

        if (!(_classify && typeof(_classify) == 'string')) {

            console.error('renderDetailLeftNav: 参数_classify不正确！');
            return;
        }

        if (!(_lotteryCode && typeof(_lotteryCode) == 'string')) {

            console.error('renderDetailLeftNav: 参数_lotteryCode不正确！');
            return;
        }

        let tempProvince = _province;
        let classify = _classify;
        let stringHtml = '';

        for (let i = 0; i < tempProvince.length; i++) {

            if (tempProvince[i].childs.length > 0) {

                /** 当是全国彩的时候 */
                if (tempProvince[i]['id'] == 0 && _classify == 'digit') {

                    let aHtml = '';

                    for (let j = 0; j < tempProvince[i].childs.length; j++) {

                        /** 如果存在参数3,表示有彩种需要展开 */
                        if (_lotteryCode == tempProvince[i].childs[j].code) {

                            aHtml += `<li class="noSubNav active"><a href="/${tempProvince[i].childs[j].classify}/${tempProvince[i].childs[j].code}/detail" class="nav">${tempProvince[i].childs[j].name}</a></li>`;
                        } else {
                            aHtml += `<li class="noSubNav"><a href="/${tempProvince[i].childs[j].classify}/${tempProvince[i].childs[j].code}/detail" class="nav">${tempProvince[i].childs[j].name}</a></li>`;
                        }

                    }

                    if (aHtml != '') {
                        /** 如果存在需要展开的彩种，那么它父级标签也需要展开 */
                        stringHtml = aHtml;
                    }

                    break;

                    /** 当是可能是高频彩或者是地方彩的时候 */
                } else {

                    /** 排除全国彩 */
                    if (tempProvince[i]['id'] != 0) {

                        let aHtml = '';
                        let isHasShowCode = false;

                        for (let j = 0; j < tempProvince[i].childs.length; j++) {

                            if (tempProvince[i].childs[j].classify == classify) {

                                if ("local" == _classify) {

                                    /** 如果存在参数3,表示有彩种需要展开 */
                                    if (tempProvince[i].childs[j].code == _lotteryCode && _proname == tempProvince[i].name) {
                                        isHasShowCode = true;
                                        aHtml += `<a href="/${tempProvince[i].childs[j].classify}/${tempProvince[i].childs[j].code}/detail?proname=${tempProvince[i].name}" class="subNav active">${tempProvince[i].childs[j].name}</a>`;
                                    } else {
                                        aHtml += `<a href="/${tempProvince[i].childs[j].classify}/${tempProvince[i].childs[j].code}/detail?proname=${tempProvince[i].name}" class="subNav">${tempProvince[i].childs[j].name}</a>`;
                                    }
                                } else {
                                    /** 如果存在参数3,表示有彩种需要展开 */
                                    if (tempProvince[i].childs[j].code == _lotteryCode) {
                                        isHasShowCode = true;
                                        aHtml += `<a href="/${tempProvince[i].childs[j].classify}/${tempProvince[i].childs[j].code}/detail" class="subNav active">${tempProvince[i].childs[j].name}</a>`;
                                    } else {
                                        aHtml += `<a href="/${tempProvince[i].childs[j].classify}/${tempProvince[i].childs[j].code}/detail" class="subNav">${tempProvince[i].childs[j].name}</a>`;
                                    }
                                }


                            }

                        }

                        if (aHtml != '') {
                            /** 如果存在需要展开的彩种，那么它父级标签也需要展开 */
                            if (isHasShowCode) {
                                stringHtml += `<li class="active"><a class="nav">${tempProvince[i].name}<i class="arrow"></i></a><div class="subNavBlock">${aHtml}</div></li>`;
                            } else {
                                stringHtml += `<li class=""><a class="nav">${tempProvince[i].name}<i class="arrow"></i></a><div class="subNavBlock">${aHtml}</div></li>`;
                            }
                        }

                    }

                }
            }
        }

        return stringHtml;

    }



    /**
     * 彩种首页通用历史开奖球样式
     * @param {*} result 
     */
    Template.defaults.imports.lotteryCommonHistory = result => {
        if (!result) return result;
        let _resultHtml = [];

        result.split(',').forEach((item, idx) => {
            _resultHtml.push(`<td><div class="ballBlock"><i class="ball24-red">${item}</i></div></td>`)
        });

        return _resultHtml.join('');
    }

    /**
     * 数字彩日期处理
     * @param {*} date 
     */
    Template.defaults.imports.digitLotteryDate = (date, format) => {
        date = date ? date.replace(/-/g, '/') : '1900/01/01';
        let _date = new Date(date),
            _days = _date.getDay(),
            _tmpDay = {
                '0': '周日',
                '1': '周一',
                '2': '周二',
                '3': '周三',
                '4': '周四',
                '5': '周五',
                '6': '周六'
            };

        // 如果传了格式就走格式
        if (format) {
            return `${_date.format(format)}(${_tmpDay[_days]})`;
        }

        return `${_date.format('yyyy-MM-dd')}(${_tmpDay[_days]})`;
    }

    /**
     * 数字彩首页头部
     * @param {*} result 
     */
    Template.defaults.imports.digitHeader = result => {
        let _tmp = "";
        let _tmpAward = "<th>一等奖中奖注数</th>";
        if (result == "fc3d") {
            _tmp = "<th>试机号</th>";
            _tmpAward = "<th>直选中奖注数</th>";
        } else if (result == "pl3" || result == "pl5") {
            _tmpAward = "<th>直选中奖注数</th>";
        }
        return `<thead>
                <tr>
                    <th>期号</th>
                    <th>开奖日期</th>
                    <th>开奖号码</th>
                    ` + _tmp + `
                    <th>销售额</th>
                    <th>奖金池</th>
                    ` + _tmpAward + `
                    <th>单注奖金（元）</th>
                    <th>开奖公告</th>
                </tr>
            </thead>`;
    }
    Template.defaults.imports.digitHistory3DIndex = result => {


        if (!result) return '--';
        let _tmp = result.split('|'),
            _red = _tmp[0] ? _tmp[0].split(',') : [],
            _blue = _tmp[1] ? _tmp[1].split(',') : [],
            _result = [];

        if (_red.length > 1) {
            // 红球
            _red.forEach(item => {
                _result.push(`<span class="red">${item}</span>`);
            });
        } else {
            _result.push(`<span class="red">--</span><span class="red">--</span><span class="red">--</span>`);
        }
        if (_blue.length > 1) {
            // 蓝球
            _result.push('<span class="testNumber">试机号：<i class="font-red">' + _blue.join(" ") + '</i></span>');
        }

        return `<div class="public-number-ball">${_result.join('')}</div>`;

    }

    /**
     * 数字彩首页列表
     */
    Template.defaults.imports.digitHistoryIndex = result => {


        if (!result) return '--';
        let _tmp = result.split('|'),
            _red = _tmp[0].split(','),
            _blue = _tmp[1] ? _tmp[1].split(',') : [],
            _result = [];

        // 红球
        _red.forEach(item => {
            _result.push(`<span class="red">${item}</span>`);
        });


        // 蓝球
        _blue.forEach(item => {
            _result.push(`<span class="blue">${item}</span>`);
        })

        return `<div class="public-number-ball">${_result.join('')}</div>`;

    }

    /*
     * 数字彩推荐底部
     * @param {} list 
     */
    Template.defaults.imports.digitLotteryRecommend = list => {

        let _idx = 0,
            _result = [];
        list.forEach(item => {
            item.forEach(lottery => {
                _idx++;
                if (_idx >= 16) {
                    if (_idx == 16) {
                        _result.push(`<h3><a target="_blank" href="${lottery.url}" class="name">${lottery.name}<span id="moreLite">...</span></a></h3><i style="display: none;" class="line more-recommend">/</i><span class="btn" id="openMore" style="margin-left: 10px;">+展开更多</span>`)
                    } else {
                        _result.push(`<h3><a target="_blank" href="${lottery.url}" style="display: none;" class="name more-recommend">${lottery.name}</a></h3><i style="display: none;" class="line more-recommend">/</i>`)
                    }
                } else {
                    _result.push(`<h3><a target="_blank" href="${lottery.url}" class="name">${lottery.name}</a></h3><i class="line">/</i>`)
                }

            })
        });

        _result.push(`<span class="btn more-recommend" style="display: none;" id="closeMore">关闭更多</span>`);

        return _result.join('\r\n');
    }

    /**
     * 高频彩推荐底部
     * @param {} list 
     */
    Template.defaults.imports.highLotteryRecommend = list => {
        let _result = [];
        let _length = list.length;
        list.forEach((item, idx) => {
            if (idx >= 15) {
                if (idx == 15) {
                    _result.push(`<h3><a target="_blank" href="/high/${item.lotteryCode}" class="name">${item.lotteryName}<span id="moreLite">...</span></a></h3><i style="display: none;" class="line more-recommend">/</i><span class="btn" id="openMore" style="margin-left: 10px;">+展开更多</span>`)
                } else {
                    _result.push(`<h3><a target="_blank" href="/high/${item.lotteryCode}" style="display: none;" class="name more-recommend">${item.lotteryName}</a></h3>`);
                    if (idx + 1 < _length) {
                        _result.push(`<i style="display: none;" class="line more-recommend">/</i>`);
                    }
                }
            } else {
                _result.push(`<h3><a target="_blank" href="/high/${item.lotteryCode}" class="name">${item.lotteryName}</a></h3><i class="line">/</i>`)
            }
        })

        _result.push(`<span class="btn more-recommend" style="display: none;" id="closeMore">关闭更多</span>`);

        return _result.join('\r\n');
    }

    /**
     * 中文编码
     * @param {*} name 
     */
    Template.defaults.imports.encodeName = name => {
        if (!name) return '';
        return encodeURIComponent(name);
    }

    /**
     * 数字转货币
     * @param {*} money 
     */
    Template.defaults.imports.formatMoney = money => {
        if (money == undefined) {
            return '--';
        }

        if (money == 0) {
            return 0;
        }
        if (typeof money !== 'string') {
            money = money.toString();
        }

        if (/[^0-9\.]/.test(money)) return "invalid value";
        money = money.replace(/^(\d*)$/, "$1.");
        money = (money + '00').replace(/(\d*\.\d\d)\d*/, "$1");
        money = money.replace(".", ",");
        var replace = /(\d)(\d{3},)/;
        while (replace.test(money)) {
            money = money.replace(replace, "$1,$2");
        }
        money = money.replace(/,(\d\d)$/, ".$1");
        return money.replace(/^\./, "0.").replace(/\.00/g, '');
    }

    /**
     * 分页组件
     * @param {*} page 
     */
    Template.defaults.imports.page = (pageCount, currentPage) => {

        var _result = [];
        currentPage = parseInt(currentPage);
        pageCount = parseInt(pageCount);

        // 获取当前需要生成的页数
        var _length = 0;
        var _startPage = 0;

        // 如果页数小于5，则直接生成
        if (currentPage <= 4) {
            _startPage = 1;
            _length = pageCount >= 10 ? 10 : pageCount;
        } else {
            _startPage = pageCount >= 10 ? pageCount - currentPage <= 4 ? currentPage - (9 - (pageCount - currentPage)) : currentPage - 4 : 1;
            _length = pageCount >= 10 ? _startPage + 9 >= pageCount ? pageCount : _startPage + 9 : pageCount;
        }

        // 生成中间内容
        for (var i = _startPage; i <= _length; i++) {
            if (i == currentPage) {
                _result.push(`<a class="active" data-pageIndex="${i}">${i}</a>`);
            } else {
                _result.push(`<a data-pageIndex="${i}">${i}</a>`);
            }
        }

        // 当页数还大的时候
        if (pageCount - currentPage > 5) {
            _result.pop();
            _result.push(`<a data-pageIndex="${_length}">...</a>`);
        }

        if (currentPage > 5 && pageCount > 9) {
            _result.unshift(`<a data-pageIndex="${_startPage - 1}">...</a>`);
        }

        if (currentPage != 1 && currentPage > 5 && pageCount >= 10) {
            _result.unshift(`<a data-pageIndex="${currentPage - 1}">&lt;</a>`)
        }
        _result.unshift('<a class="first" data-pageIndex="1">首页</a>');
        if (currentPage < pageCount - 5) {
            _result.push(`<a data-pageIndex="${currentPage + 1}">&gt;</a>`);

        }
        _result.push(`<a class="last" data-pageIndex="${pageCount}">末页</a>`);

        return `<div class="public-pageBlock">${_result.join('')}</div>`;

    }

    /**
     * 文章列表日期处理
     * @param {*} date 
     */
    Template.defaults.imports.articleLotteryDate = date => {
        if (!date) return '';
        date = date.toString().replace(/-/g, '/');
        return (new Date(date)).format('MM-dd');
    }

    /**
     * 时间组件处理
     * @param {*} awaitTimer 
     */
    Template.defaults.imports.awardTimer = awaitTimer => {

            if (awaitTimer == undefined) {

                console.error('时间组件参数：awardTime.awardTimeInterval为空！')
                return;

            } else {

                let _timer = '';
                let _TimeString = awaitTimer.toString().SecondsToddhhmmss().split(':');
                if (parseInt(_TimeString[0]) > 0) {
                    _timer = `<b>${_TimeString[0]}</b><i>天</i><b>${_TimeString[1]}</b><i>时</i>`;
                } else if (parseInt(_TimeString[1]) > 0) {
                    _timer = `<b>${_TimeString[1]}</b><i>时</i><b>${_TimeString[2]}</b><i>分</i>`;
                } else {
                    _timer = `<b>${_TimeString[2]}</b><i>分</i><b>${_TimeString[3]}</b><i>秒</i>`;
                }

                return _timer;

            }

        }
        /**
         * 乱码处理
         * @param {*} date 
         */
    Template.defaults.imports.encodeURIComponent = content => {
            return encodeURIComponent(content);
        }
        /**
         * 乱码处理
         * @param {*} date 
         */
    Template.defaults.imports.decodeURIComponent = content => {
        return decodeURIComponent(content);
    }
}