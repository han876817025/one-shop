$(function () {

    function red() {
        var _cookie = document.cookie.split(/\;\s*/g);
        console.log(_cookie);
        var _uname = 0;
        var _num = 0;
        var _com = "";
        var cookie = {
        }
        $.getJSON("json/detail.json", function (data) {
            function create() {
                for (var i = 0; i < _cookie.length; i++) {
                    _num = _cookie[i].split("=");
                    // console.log(_cookie[i].match(/\d\=+/g ));
                    console.log(_num[1])
                    console.log(data[_num[0]])
                    if (data[_num[0]]) {
                        console.log(Number(data[_num[0]]["detail"]))
                        if (Number(_num[1]) > 0) {
                            _com += "<div class='tbody' id='1" + _num[0] + "'>" + "<div class='b-h'>&nbsp;&nbsp;&nbsp;" + data[_num[0]]["name"] + "</div>" +
                                "<div class='b-b'>" +
                                "<input class='b-check box' type='checkbox'>" +
                                "<img class='photo' src='" + data[_num[0]]["photo"] + "' >" +
                                "<div class='detial'>" + data[_num[0]]["introduction"] + "</div>" +
                                "<span class='pri'>" + data[_num[0]]["price"] + "</span>" +
                                "<div class='add'><b  class='" + _num[0] + " ' >-</b><span class='number' id='number" + _num[0] + "'>" + _num[1] + "</span><b class='" + _num[0] + "'  >+</b></div>" +
                                "<div class='s-j' style='font-weight: bolder'>" + data[_num[0]]["price"] + "<br/>" + data[_num[0]]["detail"] + "</div>" +
                                "<span class='delet' id='" + _num[0] + "'>删除</span>" +
                                "</div>" +
                                "<div class='tfoot'><div class='fr '>重量：<span class='weight'>"+Math.round(data[_num[0]]["detail"])*Number(_num[1])+"</span>kg&nbsp;商品总价<span class='price'>￥" + data[_num[0]]["price"] * _num[1] + "</span></div></div>" +
                                "</div>";
                        }
                    }

                }
                document.getElementById("all").innerHTML = _com;
            }

            create();
            //    加减
            var _body = $("#tbody");
            var b = $("b");
            for (var l = 0; l < b.length; l++) {
                b[l].onclick = function () {
                    console.log(this.className)
                    var _num = document.getElementById("number" + this.className.match(/\d+/g)[0]).innerHTML;
                    if (this.innerHTML == "-") {
                        if (parseInt(_num) > 1) {
                            document.getElementById("number" + this.className.match(/\d+/g)[0]).innerHTML = --_num;
                        }
                    } else {
                        document.getElementById("number" + this.className.match(/\d+/g)[0]).innerHTML = ++_num;
                    }

                    document.cookie = this.className.match(/\d+/g)[0] + "=" + _num + "";
                    path = "/";
                    "expires=" + new Date(new Date().getTime() + 7 * 24 * 3600 * 1000);
                    var _ht = $(".pri").html();
                    var _id = "1" + this.className.match(/\d+/g)[0];
                    console.log(_id)
                    var _id = document.getElementById(_id);
                    var _all = _id.getElementsByClassName("price")[0];
                    _all.innerHTML = "￥" + _ht * _num;
                }
            }
            var _delt = document.getElementsByClassName("delet");
            var _coom=null;
            //删除
            for (var t = 0; t < _delt.length; t++) {
                _delt[t].onclick = function () {
                    var name = "1" + this.id;
                    console.log(name)
                    if (window.confirm("是否删除？")) {
                        document.cookie = this.id + "=0";
                        path = "/";
                        "expires=" + new Date("1970-01-01");
                        document.getElementById(name).style.display = "none";

                        console.log(this.id)
                        _div=document.createElement("div");

                        _div.innerHTML="<a href='detail.html'><img src='" + data[this.id]["photo"] + "'></a>"+"<span>商家:</span><span style='color: #f86666;'>"+data[this.id]['name']+"</span><span>￥"+data[this.id]['price']+"</span>";
                        document.getElementById("s-c").appendChild(_div);
                    }
                }
            }
            //勾选
            var _all = document.getElementById("check");
            var _ck=document.getElementById("ck");
            var _box = document.getElementsByClassName("box");
            _ck.onclick=function () {
                if(_ck["checked"]){
                    _all["checked"]=true;
                    fn();
                }else {
                    _all["checked"]=false;
                    fn();
                }
            }
            _all.onclick = function () {
                fn();
            }
            function fn() {
                var _money = 0;
                var _number = 0;
                if (_all.checked) {
                    _ck["checked"]=true;
                    for (var k = 0; k < _box.length; k++) {
                        _box[k]["checked"] = true;
                    }
                    for (var i = 0; i < $(".price").length; i++) {
                        _money += Number($(".price").eq(i).html().match(/\d+/g));
                        _number += Number($(".number").eq(i).html());
                    }
                    $(".pp").html("￥" + _money);
                    $("#shop").html(_number);
                    $(".py").css("background","#fe6c6c")
                } else {
                    for (var j = 0; j < _box.length; j++) {
                        _box[j]["checked"] = false;
                    }
                    _ck["checked"]=false;
                    $(".pp").html("￥" + "00.00");
                    $("#shop").html(0);
                    $(".py").css("background","#cccccc")
                }
            }

            var _arr=new Array(Number($(".tbody").length));
            var _arr1=new Array(Number($(".tbody").length));
            var n=0;
            for(var i=0;i<$(".tbody").length;i++){
                _arr[i]=0;
                _arr1[i]=0;
            }
            var onoff = 0;
            for (var l = 0; l < _box.length; l++) {
                _box[l].index = l;
                _box[l].onclick = function () {
                    console.log(this.index);
                    var _money1 = 0;
                    var _number1 = 0;
                    var _ge=0;
                    var _ge1=0;

                    if (this.checked) {
                        // for (var m = 0; m < _box.length; m++) {
                        //     if (!_box[m]["checked"]) {
                        //         onoff = 1;
                        //     } else {
                        //         onoff = 0;
                        //
                        //     }
                        // }
                        // if (onoff == 0) {
                        //     _all["checked"] = true;
                        //
                        // }
                        onoff++;
                        var ccn=0;
                        var ccn1=0;
                        _arr[this.index]=Number($(".price").eq(this.index).html().match(/\d+/g));
                        _arr1[this.index]=Number($(".number").eq(this.index).html());
                        console.log(_arr1[2]);
                        for(var i=0;i<_arr.length;i++){
                            ccn+=Number(_arr[i]);
                            ccn1+=Number(_arr1[i]);
                        }
                        console.log(ccn1);
                        $(".pp").html("￥" + ccn);
                        $("#shop").html(ccn1);

                    } else {
                        _all["checked"] = false;
                        _ck["checked"]=false;
                        _arr[this.index]=0;
                        _arr1[this.index]=0;
                        _ge= Number($(".pp").html().match(/\d+/g))-Number($(".price").eq(this.index).html().match(/\d+/g));
                        _ge1= Number($("#shop").html())-Number($(".number").eq(this.index).html())
                        console.log($(".number").eq(this.index).html());
                        $(".pp").html("￥"+_ge);
                        $("#shop").html(_ge1);
                        onoff--;
                    }
                      if (onoff==3){
                          _all["checked"] = true;
                          fn();
                      }
                    if(Number($("#shop").html())<=0) {
                        $(".py").css("background","#cccccc");
                    }else {
                        $(".py").css("background","#fe6c6c");
                    }

                }

            }


        })

    }

    red();


});
$(function () {
    var index = 0;
    $(".aa").each(function (i) {
        this.index = i;
        $(this).mouseover(function () {

            if (this.index == 1 || this.index == 2) {
                $(".tit")[this.index].style.transform = "translateX(12px)"
            } else {
                $(".tit")[this.index].style.transform = "translateX(0)"
            }
            $(".tit")[this.index].style.transition = "0.5s";
            $(".tit")[this.index].style.backgroundColor = "#ff5c4d";
            $(".tit")[this.index].style.opacity = "1";
        })
        $(this).mouseout(function () {
            $(".tit")[this.index].style.transform = "translateX(62px)"
            $(".tit")[this.index].style.transition = "0.5s";
            $(".tit")[this.index].style.backgroundColor = "#3e3d3b";
            $(".tit")[this.index].style.opacity = "0";
        })
    })
    var onoff = 0;
    $("#a1").on("click", function () {
        if (onoff == 0) {
            $("#slide").css({
                "transform": "translateX(-361px)",
                "transition": "1s"
            });
            onoff = 1;
        } else if (onoff == 1) {
            $("#slide").css({
                "transform": "translateX(0)",
                "transition": "1s"
            });
            onoff = 0;
        }
    })
})