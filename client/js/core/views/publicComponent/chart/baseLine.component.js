/****************************绘制线条基础类******************************/
define([

],function(){


    function Base(container,tbodyId) {
         this.container = container;//数据渲染容器
         this.tbodyId = tbodyId;//内容区域ID
         this._Lines = [];//存储IE划线对象
         this._TmpDom = document.createDocumentFragment();//存储IE划线创建文档
         this.tbody = document.getElementById(this.tbodyId);//获取表格数据区域对象
    };

    /**************************************私有方法************************************/
    /*划线私有方法
    objArr:连线数组
    lineWidth:划线宽度
    lineColor:划线颜色
    canvas:划线容器
    type: 类型（类型1比较适合使用在球体，类型2比较适合用在方体，主要是为了解决画线挡住文字得问题）
	*/
    Base.prototype._Line = function (objArr, lineWidth, lineColor, canvas, type) {
        var _this = this;
        _this._canvas = canvas;
        _this.wrap = document.getElementById(_this.container);
        _this.wrap.style.position = 'relative';

        /** ie9以下，是使用vml绘图画线的 */
        if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
           
           /** 如果是ie9以下，是使用vml画线的，比如要给这个数组最后添加一个空对象，要不然最后一条线没法画出来 */
           objArr.push({})   // <-------------------------这里要特别特别注意！！！！！！！！！！！！！！！！！！
          
           for (var index = 0; index < objArr.length - 1; index++) {
                var a = this._PositionFF(objArr[index], _this.wrap);
                var b = this._PositionFF(objArr[index + 1], _this.wrap);
                //var a = this._PositionIE($(objArr[index]), _this.wrap);
                //var b = this._PositionIE($(objArr[index + 1]), _this.wrap);

               if(type == 1){
                   this._IELine(a.x, a.y, b.x, b.y, lineWidth, lineColor);
               }else{
                   this._IELine2(a.x, a.y, b.x, b.y, lineWidth, lineColor);
               }

           }

        }else{


            for (var index = 0; index < objArr.length - 1; index++) {

                var a = this._PositionFF(objArr[index], _this.wrap);
                var b = this._PositionFF(objArr[index + 1], _this.wrap);

                if(type == 1){
                    this._FFLine(a.x, a.y, b.x, b.y, lineWidth, lineColor);
                }else{
                    this._FFLine2(a.x, a.y, b.x, b.y, lineWidth, lineColor);
                }

            }
      

        }

        document.getElementById(canvas).appendChild(this._TmpDom);

    };

    /*清除元素重绘方法*/
    Base.prototype._Clear = function () {
        this.ClearLine();
        this._KeyTable = [];
        var t = this.tbody.rows;
        for (var i = 0; i < t.length; i++) {
            for (var j = 0; j < t[i].cells.length; j++) {
                if (t[i].cells[j].style.backgroundColor != "") {
                    t[i].cells[j].style.backgroundColor = "";
                }

            }
        }
    };

    /*获取元素绝对位置*/
    Base.prototype._PositionIE = function (obj, wrap) {
        var pos = { x: 0, y: 0 }, a = obj;
        var k = obj;
        pos.y = obj.offset().top + obj.height() / 2 - $("#container").position().top;
        pos.x = obj.offset().left + obj.width() / 2 - $("#container").position().left - 10;
        return pos;
    };

    Base.prototype._PositionFF = function (obj, wrap) {
        if (obj.nodeType == undefined) return obj;
        var pos = { x: 0, y: 0 }, a = obj;
        var k = obj;
        for (; a; a = a.offsetParent) { pos.x += a.offsetLeft; pos.y += a.offsetTop; if (wrap && a.offsetParent == wrap) break; };
        pos.x += parseInt(obj.offsetWidth / 2);
        pos.y += parseInt(obj.offsetHeight / 2);
        return pos;
    };

    /*IE划线*/
    Base.prototype._IELine = function (x1, y1, x2, y2, lineWidth, lineColor) {
        if (Math.abs(y1 - y2) < (8 * 2) && x1 == x2) return;//自动确定同列的是否连线
        var np = this._NPos(x1, y1, x2, y2, 8);//两端缩减函数（防止覆盖球）
        x1 = np[0]; y1 = np[1]; x2 = np[2]; y2 = np[3];
        var pOffset = { left: 0, top: 0 }; //$("#container").offset();
        var line = document.createElement("<v:line></v:line>");
        line.from = (x1 - pOffset.left) + "," + (y1 - pOffset.top);
        line.to = (x2 - pOffset.left) + "," + (y2 - pOffset.top);
        line.strokeColor = lineColor;
        line.strokeWeight = (lineWidth) + "pt";
        line.style.cssText = "position:absolute;z-index:999;top:0;left:0;behavior:url(#default#VML);";
        line.coordOrigin = "0,0";
        this._Lines.push(line);
        this._TmpDom.appendChild(line);
    };

    /*IE划线*/
    Base.prototype._IELine2 = function (x1, y1, x2, y2, lineWidth, lineColor) {
        if (Math.abs(y1 - y2) < (8 * 2) && x1 == x2) return;//自动确定同列的是否连线
        var np = this._NPos(x1, y1, x2, y2, 8);//两端缩减函数（防止覆盖球）
        x1 = np[0]; y1 = np[1]; x2 = np[2]; y2 = np[3];
        var pOffset = { left: 5, top: 8 }; //$("#container").offset();
        var line = document.createElement("<v:line></v:line>");
        line.from = (x1 - pOffset.left) + "," + (y1 - pOffset.top);
        line.to = (x2 - pOffset.left) + "," + (y2 - pOffset.top + 14);
        line.strokeColor = lineColor;
        line.strokeWeight = (lineWidth) + "pt";
        line.style.cssText = "position:absolute;z-index:999;top:0;left:0;behavior:url(#default#VML);";
        line.coordOrigin = "0,0";
        this._Lines.push(line);
        this._TmpDom.appendChild(line);
    };

    /*其他浏览器划线(用于球体)*/
    Base.prototype._FFLine = function (x1, y1, x2, y2, lineWidth, lineColor) {
        if (Math.abs(y1 - y2) < (6 * 2) && x1 == x2) return;//自动确定同列的是否连线
        var np = this._NPos(x1, y1, x2, y2, 6);//两端缩减函数（防止覆盖球）
        x1 = np[0]; y1 = np[1]; x2 = np[2]; y2 = np[3];
        var cvs = document.createElement("canvas");
        cvs.style.position = "absolute";
        cvs.style.visibility = "visible";
        cvs.width = Math.abs(x1 - x2) || lineWidth;
        cvs.height = Math.abs(y1 - y2- 4) || lineWidth- 4;
        var newY = Math.min(y1, y2);
        var newX = Math.min(x1, x2);
        cvs.style.top = newY+2 + "px";
        cvs.style.left = newX + "px";
        var FG = cvs.getContext("2d");
        FG.save();//缓存历史设置
        FG.strokeStyle = lineColor;
        FG.lineWidth = lineWidth;
        //FG.globalAlpha=0.5;//透明度；    
        FG.beginPath();
        FG.moveTo((x1 - newX), y1 - newY - 4);
        FG.lineTo(x2 - newX, y2 - newY);
        FG.closePath();
        FG.stroke();
        FG.restore();//恢复历史设置
        this._Lines.push(cvs);
        this._TmpDom.appendChild(cvs);
    };

    /*其他浏览器划线(用于方块)*/
    Base.prototype._FFLine2 = function (x1, y1, x2, y2, lineWidth, lineColor) {
        if (Math.abs(y1 - y2) < (6 * 2) && x1 == x2) return;//自动确定同列的是否连线
        var np = this._NPos(x1, y1, x2, y2, 6);//两端缩减函数（防止覆盖球）
        x1 = np[0]; y1 = np[1]; x2 = np[2]; y2 = np[3];
        var cvs = document.createElement("canvas");
        cvs.style.position = "absolute";
        cvs.style.visibility = "visible";
        cvs.width = Math.abs(x1 - x2 -5) || lineWidth - 5;
        cvs.height = Math.abs(y1 - y2-13) || lineWidth-13;
        var newY = Math.min(y1, y2);
        var newX = Math.min(x1, x2);
        cvs.style.top = newY+6 + "px";
        cvs.style.left = newX +2 + "px";
        var FG = cvs.getContext("2d");
        FG.save();//缓存历史设置
        FG.strokeStyle = lineColor;
        FG.lineWidth = lineWidth;
        //FG.globalAlpha=0.5;//透明度；
        FG.beginPath();
        FG.moveTo((x1 - newX), y1 - newY - 13);
        FG.lineTo(x2 - newX, y2 - newY + 2);
        FG.closePath();
        FG.stroke();
        FG.restore();//恢复历史设置
        this._Lines.push(cvs);
        this._TmpDom.appendChild(cvs);
    };

    Base.prototype._OLine = function (x0, y0, x1, y1, nLineWidth, lineColor) {
        var oOffset = $("#container").offset();
        x0 = x0 - oOffset.left;
        y0 = y0 - oOffset.top;
        x1 = x1 - oOffset.left;
        y1 = y1 - oOffset.top;
        var minX = x0;
        var minY = y0;
        if (x1 < x0) {
            minX = x1;
        }
        if (y1 < y0) {
            minY = y1;
        }
        var w = Math.abs(x0 - x1);
        var h = Math.abs(y0 - y1);
        if (w == 0) {
            w = nLineWidth;
        }
        if (h == 0) h = nLineWidth;
        var canvas = document.createElement("canvas");
        document.getElementById(this._canvas).appendChild(canvas);
        var context = canvas.getContext("2d");
        $(canvas).attr("class", "cvs");
        $(canvas).css("left", minX + "px");
        $(canvas).css("top", minY + "px");
        $(canvas).attr("width", w);
        $(canvas).attr("height", h);
        context.strokeStyle = lineColor;
        context.lineWidth = nLineWidth;
        context.beginPath();
        var to_x0 = 0;
        var to_y0 = 0;
        var to_x1 = 0;
        var to_y1 = 0;
        var rate = (x1 - x0) / (y1 - y0);
        var diff = rate > 1 ? (rate - 1) * 1.5 / rate : 0;
        var dis = 5.5 + diff;
        if (x0 < x1) { //从左向右
            to_x0 = dis;
            to_y0 = dis / rate;
            to_x1 = w - dis;
            to_y1 = h - dis / rate;
        }
        else if (x0 > x1) { //从右向左
            to_x0 = w - dis;
            to_y0 = -dis / rate;
            to_x1 = dis;
            to_y1 = h + dis / rate;
        } else {
            to_x0 = 0;
            to_y0 = 7;
            to_x1 = 0;
            to_y1 = h - 7;
        }
        context.moveTo(to_x0, to_y0);
        context.lineTo(to_x1, to_y1);
        context.stroke();
    };
    /*两端缩减函数（防止覆盖球）*/
    Base.prototype._NPos = function (x1, y1, x2, y2, r) {
        var a = x1 - x2, b = y1 - y2;
        var c = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
        var x3, y3, x4, y4;
        var _a = Math.round((a * r) / c);
        var _b = Math.round((b * r) / c);
        return [(x2 + _a), (y2 + _b), (x1 - _a), (y1 - _b)];
    };
    /*判断当前排序情况*/
    Base.prototype._IsSort = function () {
        var issueObj = document.getElementById(this.issnunoId);
        if (issueObj != undefined) {
            if (issueObj.childNodes[0].className.indexOf("iconJT") > -1) {
                return false;
            }
            else {
                return true;
            }
        }
    };

    Base.prototype.Class = function () {
        return Class;
    };
    
    return Base;
});