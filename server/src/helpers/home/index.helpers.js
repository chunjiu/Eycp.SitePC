/****************************************************************
 *
 *                              helper入口文件
 *
 ****************************************************************/
'use strict';

module.exports = (Template, RoutesConfig, Currency) => {

    /**
     *  格式化首页开奖列表日期;
     */
    Template.defaults.imports.renderLotteryTime = (_time) => {

        if (_time == undefined || typeof(_time) != 'string') {

            console.error('renderLotteryTime: 参数_time不正确,为空或不是字符串类型！');
            return;
        }

        /** 切分时间字符串，把00:00切分成数组 */
        let _awardTimeArray = _time.SecondsToddhhmmss().split(':');

        let _timeHtml = '';

        /** 判断时间数组，按需求显示天，时，分，秒 */
        if (_awardTimeArray.length == 4) {

            if (_awardTimeArray[0] == '00') {

                if (_awardTimeArray[1] == '00') {
                    _timeHtml += `<span class="dayDom" style="display: none;"><b>${_awardTimeArray[0]}</b><i>天</i></span>`;
                    _timeHtml += `<span class="hourDom" style="display: none;"><b>${_awardTimeArray[1]}</b><i>时</i></span>`;
                    _timeHtml += `<span class="minuteDom"><b>${_awardTimeArray[2]}</b><i>分</i></span>`;
                    _timeHtml += `<span class="secondDom"><b>${_awardTimeArray[3]}</b><i>秒</i></span>`;
                } else {
                    _timeHtml += `<span class="dayDom" style="display: none;"><b>${_awardTimeArray[0]}</b><i>天</i></span>`;
                    _timeHtml += `<span class="hourDom"><b>${_awardTimeArray[1]}</b><i>时</i></span>`;
                    _timeHtml += `<span class="minuteDom"><b>${_awardTimeArray[2]}</b><i>分</i></span>`;
                    _timeHtml += `<span class="secondDom" style="display: none;"><b>${_awardTimeArray[3]}</b><i>秒</i></span>`;
                }
            } else {
                _timeHtml += `<span class="dayDom"><b>${_awardTimeArray[0]}</b><i>天</i></span>`;
                _timeHtml += `<span class="hourDom"><b>${_awardTimeArray[1]}</b><i>时</i></span>`;
                _timeHtml += `<span class="minuteDom" style="display: none;"><b>${_awardTimeArray[2]}</b><i>分</i></span>`;
                _timeHtml += `<span class="secondDom" style="display: none;"><b>${_awardTimeArray[3]}</b><i>秒</i></span>`;
            }

        }

        return _timeHtml;



    }


    /**
     *  渲染首页开奖列表
     */
    Template.defaults.imports.renderHomeBallList = (_result, _lotteryCode) => {


        if (_result == undefined || typeof(_result) != 'string') {

            console.error('rendHomeBallList: 参数_result不正确,为空或不是字符串类型！');
            return;
        }

        if (_lotteryCode == undefined || typeof(_lotteryCode) != 'string') {

            console.error('rendHomeBallList: 参数_lotteryCode不正确,为空或不是字符串类型！');
            return;
        }

        let _resultArray;
        let _ballList;
        let _blueBallList;
        let _classity = '';
        let _tempHtml = '';
        let _stringHtml = '';

        /** 判断有没蓝球 */
        if (/\|/.test(_result)) {

            _resultArray = _result.split('|');
            _ballList = _resultArray[0].split(',');
            _blueBallList = _resultArray[1].split(',');

        } else {

            _ballList = _result.split(',');
        }

        if (_lotteryCode == 'bjpk10' || _lotteryCode == 'xyft') {

            _classity = 'pk10'

        } else if (/k3/.test(_lotteryCode)) {

            _classity = 'k3';

        }

        if (typeof(_ballList) == 'object' && _ballList != undefined) {

            if (_ballList.length > 0) {

                for (let i = 0; i < _ballList.length; i++) {

                    if (/k3/.test(_lotteryCode)) {

                        _tempHtml += `<span class="num0${_ballList[i]}"></span>`;

                    } else if (_lotteryCode == 'bjpk10' || _lotteryCode == 'xyft') {

                        if (parseInt(_ballList[i]) < 10) {
                            _tempHtml += `<span class="num0${_ballList[i]}"></span>`;
                        } else {
                            _tempHtml += `<span class="num${_ballList[i]}"></span>`;
                        }

                    } else {
                        _tempHtml += `<span class="red">${_ballList[i]}</span>`;
                    }
                }
            }
        }

        if (typeof(_blueBallList) == 'object' && _blueBallList != undefined) {

            if (_blueBallList.length > 0) {

                for (let i = 0; i < _blueBallList.length; i++) {
                    _tempHtml += `<span class="blue">${_blueBallList[i]}</span>`;
                }
            }
        }

        _stringHtml = `<div class="number ${_classity}">${_tempHtml}</div>`;

        return _stringHtml;

    }


    /**
     *  输出左边导航栏
     */
    Template.defaults.imports.renderHomeLeft = (_array, _lotteryAllTree, _showInHomeLeft) => {


        if (!(_array && typeof(_array) == 'object')) {

            console.error('rendHomeLeft: 参数_array不正确！');
            return;
        }
        if (!(_lotteryAllTree && typeof(_lotteryAllTree) == 'object')) {

            console.error('rendHomeLeft: 参数_lotteryAllTree不正确！');
            return;
        }

        let leftNavHtml = '';

        let localObject = Object.assign(_lotteryAllTree[2].children);

        for (let i = 0; i < localObject.length; i++) {

            for (let j = 0; j < localObject[i].children.length; j++) {

                localObject[i].children[j].classify = 'local';
                localObject[i].children[j].provinceId = localObject[i].provinceId;
            }
        }

        let hightWindowHtml = classifiedLottery(_array.lottery.twoLevel.high);



        let localWindowHtml = classifiedLocal(localObject);


        for (let key in _array.lottery.twoLevel) {

            let tempHtml = `<div class="first-dd">`;
            let twoLevel = _array.lottery.twoLevel[key];

            /** 地方彩全部都跑详情 */
            if (key == 'local') {

                for (let i = 0; i < _showInHomeLeft.length; i++) {

                    if (_showInHomeLeft[i].type == 'local') {
                        tempHtml += `<span><a href="${_showInHomeLeft[i].type}/${ _showInHomeLeft[i].code }/detail-${_showInHomeLeft[i].provinceId}" target="_blank">${ _showInHomeLeft[i].name }</a></span>`;
                    }
                }

            } else if (key == 'digit') {

                for (let i = 0; i < _showInHomeLeft.length; i++) {

                    if (_showInHomeLeft[i].type == 'digit') {
                        tempHtml += `<span><a href="${_showInHomeLeft[i].type}/${ _showInHomeLeft[i].code }" target="_blank">${ _showInHomeLeft[i].name }</a></span>`;
                    }
                }

            } else if (key == 'high') {

                for (let i = 0; i < _showInHomeLeft.length; i++) {

                    if (_showInHomeLeft[i].type == 'high') {
                        tempHtml += `<span><a href="${_showInHomeLeft[i].type}/${ _showInHomeLeft[i].code }" target="_blank">${ _showInHomeLeft[i].name }</a></span>`;
                    }
                }
            }


            tempHtml += `</div>`;


            if (twoLevel.code == 2) {
                leftNavHtml += `<div class="first-dl dl-${ twoLevel.imgClass }"><div class="first-dt"><i class="${ twoLevel.imgClass }"></i><i class="text">${ twoLevel.title }</i><i class="arrow"></i></div>${ tempHtml } ${ hightWindowHtml }</div>`;
            } else if (twoLevel.code == 3) {
                leftNavHtml += `<div class="first-dl dl-${ twoLevel.imgClass }"><div class="first-dt"><i class="${ twoLevel.imgClass }"></i><i class="text">${ twoLevel.title }</i><i class="arrow"></i></div>${ tempHtml } ${ localWindowHtml }</div>`;
            } else {
                leftNavHtml += `<div class="first-dl dl-${ twoLevel.imgClass }"><div class="first-dt"><i class="${ twoLevel.imgClass }"></i><i class="text">${ twoLevel.title }</i><i class="arrow"></i></div>${ tempHtml } </div>`;
            }


        }

        return leftNavHtml;

    }


    /**
     *  输出资讯列表
     * @param _array(array)
     * @param _articleType(number)
     * @return {*}
     */
    Template.defaults.imports.getArtcleList = (_array, _articleType) => {

        if (!(_array && typeof(_array) == 'object')) {

            console.error('getArtcleList: 参数_array不正确！');
            return;
        } else {

            if (_array.length == 0) {
                console.error('getArtcleList: 参数_array数组元素不能为空！');
                return;
            }
        }

        if (!(_articleType && typeof(_articleType) == 'number')) {

            console.error('getArtcleList: 参数_articleType不正确！');
            return;
        }

        let _articleHtml = '';
        let _articleNum = 0;
        let _articlePath = RoutesConfig.routes.article.router[0].path;


        for (var i = 0; i < _array.length; i++) {

            /** 如果数组中存在和参数2一样类型得资讯条目，则把它循环出来 */
            if (parseInt(_array[i].categoryId) == _articleType) {
                _articleHtml += `<a href="${_articlePath}/detail-${_articleType}-${_array[i].id}.html" class="li" target="_blank"><span class="title">${_array[i].title}</span><span class="date">${Currency.formateDelYearAndHour(_array[i].createDate)}</span></a>`;
                _articleNum++;
            }

        }

        if (_articleNum == 0) {

            return '<span style="width: 100%; color: #999; text-align: center;">没有任何数据</span>';

        } else {

            return _articleHtml;
        }

    }

    /**
     *  分类彩种（地方彩种）
     */
    const classifiedLocal = (_array) => {

        if (!(_array && typeof(_array) == 'object')) {

            console.error('classifiedLocal: 参数_array不正确！');
            return;
        } else {

            if (_array.length == 0) {
                console.error('classifiedLocal: 参数_array数组元素不能为空！');
                return;
            }
        }

        let navHtml = '';
        let allNavHtml = '';
        let tempHtml = '';
        let ulHtml = '';


        for (let i = 0; i < _array.length; i++) {


            for (let j = 0; j < _array[i].children.length; j++) {


                tempHtml += `<dd class="msl-name"><a href="/${ _array[i].children[j].classify}/${ _array[i].children[j].code }/detail-${_array[i].children[j].provinceId}" class="name" target="_blank">${ _array[i].children[j].name }</a></dd>`;

                tempHtml = tempHtml.replace(/^\s+|\s+$/g, '');
            }

            navHtml += `<dl class="msl-li">`;
            navHtml += `<dt class="msl-title"><span class="circle"></span>${_array[i].name}</dt>`;
            navHtml += tempHtml;
            navHtml += `</dl>`;

            tempHtml = '';


            if ((i + 1) % 5 == 0 && i != 0) {
                ulHtml += `<div class="msl-ul">${navHtml}</div>`;
                navHtml = '';
            } else {
                if (i == _array.length - 1) {
                    ulHtml += `<div class="msl-ul">${navHtml}</div>`;
                    navHtml = '';
                }
            }

        }

        allNavHtml += `<div class="ip-menuSuperposedLayer"><span class="msl-l"></span><span class="msl-r"></span><span class="menuSL-arr"></span><div class="msl-m">${ ulHtml }</div></div>`;


        return allNavHtml;

    }

    /**
     * 分类彩种（共有11选5，快3，快乐十分，和其他）
     * @param _array
     */
    const classifiedLottery = (_array) => {

        if (!(_array && typeof(_array) == 'object')) {

            console.error('classifiedLottery: 参数_array不正确！');
            return;
        } else {

            if (_array.length == 0) {
                console.error('classifiedLottery: 参数_array数组元素不能为空！');
                return;
            }
        }


        let elevenx5Array = [];
        let k3Array = [];
        let kl10Array = [];
        let sscArray = [];
        let otherArray = [];
        let allColorArray = {};
        let strHtml = '';
        let allStrHtml = '';


        if (_array.childs.length > 0) {

            for (let j = 0; j < _array.childs.length; j++) {

                let tempType = _array.childs[j].type;

                /** 如果类型是11x5并且不存在在这个数组中，则push进这个数组 */
                if (tempType == '11x5' && !Currency.contains(elevenx5Array, tempType)) {

                    elevenx5Array.push(_array.childs[j]);

                } else if (tempType == 'k3' && !Currency.contains(k3Array, tempType)) {

                    k3Array.push(_array.childs[j]);

                } else if (tempType == 'kl10' && !Currency.contains(kl10Array, tempType)) {

                    kl10Array.push(_array.childs[j]);

                } else if (tempType == 'ssc' && !Currency.contains(sscArray, tempType)) {

                    sscArray.push(_array.childs[j]);

                } else if (tempType == 'other' && !Currency.contains(otherArray, tempType)) {

                    otherArray.push(_array.childs[j]);

                }
            }
        }


        allColorArray['11x5'] = elevenx5Array;
        allColorArray['k3'] = k3Array;
        allColorArray['kl10'] = kl10Array;
        allColorArray['ssc'] = sscArray;
        allColorArray['other'] = otherArray;


        for (let key in allColorArray) {

            strHtml += `<div class="msl-ul"><dl class="msl-li">`;

            if (key == '11x5') {

                strHtml += `<dt class="msl-title"><span class='verticalLine'>|</span>11选5</dt>`;

            } else if (key == 'k3') {

                strHtml += `<dt class="msl-title"><span class='verticalLine'>|</span>快3</dt>`;

            } else if (key == 'kl10') {

                strHtml += `<dt class="msl-title"><span class='verticalLine'>|</span>快乐十分</dt>`;

            } else if (key == 'ssc') {

                strHtml += `<dt class="msl-title"><span class='verticalLine'>|</span>时时彩</dt>`;

            } else if (key == 'other') {

                strHtml += `<dt class="msl-title"><span class='verticalLine'>|</span>其它</dt>`;
            }

            for (var i = 0; i < allColorArray[key].length; i++) {
                strHtml += `<dd class="msl-name"><a href="/high/${allColorArray[key][i].code}" class="name" target="_blank">${ allColorArray[key][i].name }</a></dd>`;
            }

            strHtml += `</dl></div>`;

        }

        allStrHtml += `<div class="ip-menuSuperposedLayer"><span class="msl-l"></span><span class="msl-r"></span><span class="menuSL-arr"></span><div class="msl-m">${ strHtml }</div></div>`;

        return allStrHtml;

    }




}