/**
 * Created by Administrator on 2017/3/28.
 */
$(function() {
    var _button = $("#but span");
    var _imglist = $("#img-u li");
    var x = 0
    var fn = function(n) {
        $($("#img-u li")[n]).css("display", "block").animate({
            opacity: "1"
        }, 500)
        $($("#but span")[n]).css("background", "#ff3c36")
        $("#but span").not($($("#but span")[n])).css("background", "#d2c8d0")
        $("#img-u li").not($($("#img-u li")[n])).css({
            "display": "none",
            "opacity": "0.7"
        })
    }
    for(var i = 0; i < _button.length; i++) {
        $("#but span")[i].index = i;
        $("#but span")[i].onmouseover = function() {
            x = this.index
            fn(this.index);
        }
    }
    $("#l").mousedown(function() {
        x--;
        if(x < 0) {
            x = 7;
        }
        fn(x)
    })
    $("#r").mousedown(function() {
        x++;
        if(x > 7) {
            x = 0;
        }
        fn(x)
    })
    setInterval(function() {
        x++;
        if(x > 7) {
            x = 0;
        }
        fn(x)
    }, 2000)
})
//-------------------------------all-child__-----------
$(function () {
    console.log( $("#all"))
    $("#all").hover(function () {
        alert(0);
        $(".all-child").css("display","block");
    })
})
//---------------------------------------------------------------分页——————————————
function loadImage(_s,_e){
    var _container=document.getElementById("container");
    $.getJSON("water.json",function(data){
        var _data=data;
        var _span=null,_img=null,con=null;
        for(var i=_s;i<_e;i++){
            _div=document.createElement("div");
            _div.className="com";
            _div1=document.createElement("div");
            _img=document.createElement("img");
            _img.src="img-list/"+_data["images"][i];
            con = "<h3 class='fl'>韩都衣舍旗舰店</h3>" + "<p class='fl'>夕奴2017春夏新款韩版纯色修身显瘦....</p>" +
                "<p class='fl' style='color: #e90012;'>水洗磨旧个性抓痕</p>" +
                "<h3 class='fl' style='color: #e90012;font-size:20px'>￥88</h3>";
            _div1.innerHTML=con;
            _div.appendChild(_img);
            _div.appendChild(_div1);

            _container.appendChild(_div);
        }
    },true);
}
function changeButtonText(_root,_current){
    var _length=_root.children.length;
    if(_current===_root.children[_length-1]){
        if(parseInt(_current.innerText)<14) {
            for (var i = 0; i < _length; i++) {
                _root.children[i].innerText = parseInt(_current.innerText) - 2 + i;
                if(parseInt(_root.children[i].innerText)>14){
                    _root.children[i].style.display="none";
                }
            }
        }
    }
    if(_current===_root.children[0]){
        var _value=parseInt(_current.innerText);
        if(_value-2>0) {
            for (var i = 0; i < _length; i++) {
                _root.children[i].innerText = _value - 2 + i;
                _root.children[i].style.display="block";
            }
        }
    }

}
function boundEvent(_root){
    for(var i=0;i<_root.children.length;i++){
        _root.children[i].onclick=function(){
            var _container=document.getElementById("container");
            _container.innerHTML="";
            loadImage((parseInt(this.innerText)-1)*10,parseInt(this.innerText)*10+10);
            changeButtonText(_root,this);
        }
    }
}
function pushButton(n){
    var _span=null;
    var _root=document.createElement("span");
    _root.className="root";
    var _button=document.getElementById("button");
    _button.appendChild(_root);
    for(var i=0;i<n;i++){
        _span=document.createElement("span");
        _span.innerText=i+1;
        _root.appendChild(_span);
    }
    boundEvent(_root);
}
window.onload=function(){
    var _s=0,_e=20;
    loadImage(_s,_e);
    pushButton(5);
}