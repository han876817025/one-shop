/**
 * Created by Administrator on 2017/3/29.
 */

function waterfall1() {
    this.bw = 1200;
//            this.container = document.getElementById("container");//对象提升为全局时会导致获取不到该对象；
    console.log(this.bw)
    this.num = parseInt((this.bw ) / 231);
    console.log(this.num);
    this.start = 1;
    this.over = this.start * 60;
    var _me = this;
    this.arr = new Array(this.num);
    this.index = 0;
    var con = null;
    this.creatwidth = function () {
        this.container.style.width = 1200 + "px";
    }
    this.initAttr = function () {
        this.container = document.getElementById("container1");//对象提升为全局时会导致获取不到该对象；
    }
    this.createle = function () {
        var _ajax = new Ajax();
        _ajax.request("post", "water.json", null, function (date) {
            _me.date = JSON.parse(date);
            console.log(_me.date["images"].length);
            for (var i = _me.start; i < _me.over; i++) {
                _div = document.createElement("div");
                _div.className = "contain";
                _me.container.appendChild(_div);
                _img = document.createElement("img");
                _div.appendChild(_img);
                _img.src = "img-list/" + _me.date['images'][i];
                _con = document.createElement("div");
                _div.appendChild(_con);
                con = "<a href='detail.html'>"+"<p>夕奴2017春夏新款韩版纯色修身显瘦....</p>" +
                    "<p style='color: #e90012;'>水洗磨旧个性抓痕</p>" +
                    "<h3 style='color: #e90012;font-size:20px'>￥88</h3>"+"</a>";
                _con.innerHTML = con;
            }
            _me.isComplete();
        })

    }
    this.initArray = function (_length) {
        this.columns = new Array(_length);
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[i] = 0;
        }
    }

    this.reset = function () {
        var _length = Math.floor((this.bw ) / 231);
        this.container.style.width = 1200 + "px";
        return _length;
    }

    this.getMinIndex = function () {
        var _index = 0;
        var _first = this.columns[0];
        for (var i = 0; i < this.columns.length; i++) {
            if (_first > this.columns[i]) {
                _first = this.columns[i];
                _index = i;
            }
        }
        return _index;
    }
    this.waterfall = function () {
        var _mi = 0;
        for (var i = 0; i < this.container.children.length; i++) {
            _mi = this.getMinIndex();
            this.container.children[i].style.left = 231 * _mi + 10 * (_mi + 1) + "px";
            this.container.children[i].style.top = this.columns[_mi] + 10 + "px";
            this.columns[_mi] += this.container.children[i].offsetHeight + 5;
        }

    }
    this.isComplete = function () {
        var _notice = true;
        window.clearTimeout(_me.timer);
        for (var i = _me.start - 1; i < _me.over && i < _me.container.children.length; i++) {
            if (!_me.container.children[i].children[0].complete) {
                _notice = false;
            }
        }
        if (_notice) {
            _me.waterfall()
        } else {
            _me.timer = window.setTimeout(_me.isComplete, 60);
        }
    }
}
var _wf = new waterfall1();
function main() {
    _wf.initAttr();
    var _length = _wf.reset();
    _wf.initArray(_length);
    _wf.createle();

}
window.onload=main;

$(function () {
    // console.log(document.documentElement.clientWidth)
    var _ul=document.getElementById("s-u");
    var _li=document.getElementsByTagName("li");
    console.log(_li);
    for(var i=0;i<_li.length;i++){
        $("#s-u li").eq(i)[0].index=i;
        $("#s-u li").eq(i).hover(function () {
            $(".brand").eq(this.index).css("display","block");
            $("#s-u img").eq(this.index).css("display","none");
            $("#s-u li").eq(this.index).css("borderColor","#ffffff");
        },function () {
            $(".brand").eq(this.index).css("display","none");
            $("#s-u img").eq(this.index).css("display","block");
            $("#s-u li").eq(this.index).css("borderColor","#e5e5e5");
        })
    }
})
