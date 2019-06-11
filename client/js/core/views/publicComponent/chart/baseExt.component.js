/***********************BaseLine类得扩展类*************************/
define([
  './baseLine.component'
],function (_Base){

    var Base = _Base;//引入Base库
    
    /*分区域进行绘图(绘图扩展)
	begincol:开始列
	endcol:结束列
	beginclum:开始行
	endclum:结束行
	classname:连线元素样式名称
	canvas:父元素
     type: 类型（类型1比较适合使用在球体，类型2比较适合用在方体，主要是为了解决画线挡住文字得问题）
	*/
    Base.prototype.DrawLine = function (begincol, endcol, beginclum, endclum, className, lineWidth, lineColor, canvas, type) {
        var t = this.tbody.rows;
        if (endclum == undefined) {
            endclum = t.length;
        }
        var lineObj = new Array();
        for (var i = beginclum; i < endclum; i++) {
            for (var j = begincol; j < endcol; j++) {
                if (t[i] == null || t[i].cells[j] == null) {
                    break;
                }
                if (t[i].cells[j].className.indexOf(className) > -1) {
                    lineObj.push(t[i].cells[j]);
                }
            }

        }

        if(type == undefined){
            type = 1
        }

        this._Line(lineObj, lineWidth, lineColor, canvas, type);
    };

    /*分区域进行绘图--包含多样式连线(绘图扩展)
	begincol:开始列
	endcol:结束列
	beginclum:开始行
	endclum:结束行
	classnameArr:连线元素样式集合
	canvas:父元素
	*/
    Base.prototype.DrawLineCls = function (begincol, endcol, beginclum, endclum, classNameArr, lineWidth, lineColor, canvas, type) {
        var t = this.tbody.rows;

        if (endclum == undefined) {
            endclum = t.length;
        }
        var lineObj = new Array();
        for (var i = beginclum; i < endclum; i++) {
            for (var j = begincol; j < endcol; j++) {
                if (t[i] == null || t[i].cells[j] == null) {
                    break;
                }
                for (var m = 0; m < classNameArr.length; m++) {
                    if (t[i].cells[j].className.indexOf(classNameArr[m]) > -1) {
                        lineObj.push(t[i].cells[j]);
                    }
                }
            }
        }

        if(type == undefined){
            type = 1
        }

        this._Line(lineObj, lineWidth, lineColor, canvas, type);
    };

    /*集合划线
    lineArr:划线集合 格式{begincol:1,endcol:1,beginclum:1,endclum:1,className:'redBar',lineWidth:1,lineColor:'red',canvas:'canvas'}
    */
    Base.prototype.DrawLineArr = function (lineArr) {
        if (lineArr != null && lineArr.length > 0) {
            try {
                for (var i = 0; i < lineArr.length; i++) {
                    this.DrawLine(lineArr[i].begincol, lineArr[i].endcol, lineArr[i].beginclum, lineArr[i].endclum, lineArr[i].className, lineArr[i].lineWidth, lineArr[i].lineColor, lineArr[i].canvas, lineArr[i].type);
                }
            } catch (e) {
            }
        }
    };

    /*集合划线
    lineArr:划线集合 格式{begincol:1,endcol:1,beginclum:1,endclum:1,classNames:['redBar','blueBar'],lineWidth:1,lineColor:'red',canvas:'canvas'}
    */
    Base.prototype.DrawLineClsArr = function (lineArr) {
        if (lineArr != null && lineArr.length > 0) {
            try {
                for (var i = 0; i < lineArr.length; i++) {
                    this.DrawLineCls(lineArr[i].begincol, lineArr[i].endcol, lineArr[i].beginclum, lineArr[i].endclum, lineArr[i].classNames, lineArr[i].lineWidth, lineArr[i].lineColor, lineArr[i].canvas,  lineArr[i].type);
                }
            } catch (e) {
            }
        }
    };

    return Base;
});