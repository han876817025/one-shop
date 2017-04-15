$(function () {
    $("#h").load("header.html", function () {
        $(function () {
            var _topone = document.getElementById("top-one");
            var _bottom = document.getElementById("bottom");
            var _toplogin = document.getElementById("top-login");
            var _one = document.getElementById("one");
            _topone.onmouseover = function () {
                _toplogin.style.display = "block";
                _bottom.style.display = "none";
                _one.style.height = "36px";
                _one.style.borderBottom = "none";
                _topone.onmouseout = function () {
                    _toplogin.style.display = "none";
                    _bottom.style.display = "block";
                    _one.style.height = "35px";
                    _one.style.borderBottom = "none";
                }
            }
        })
        //--------------------------adress------------
        $(function () {
            $("#give").mouseover(function () {
                $("#adress").css("display", "block");
                $("#arrive").css({
                    "height": "21px",
                    "border-bottom": "none "
                });

            })
            $("#give").mouseout(function () {
                $("#adress").css("display", "none");
                $("#arrive").css({
                    "height": "19px",
                    "border-bottom": " solid 1px #d7d8da"
                });
            })
        })
        $(function () {
            var _content = "";
            for (var i = 65; i < 90; i++) {
                _content += "<li><a href=###>" + String.fromCharCode(i) + "</a></li>";

                $("#nav-ul").html(_content)
            }

        })
        $(function () {

            $("#nav-ul li").each(function (i) {
                var index = $(this).index();
                $("#nav-ul li").eq(index).click(function () {
                    var Top = $("#con>div")[index].offsetTop;

                    $("#con").animate({scrollTop: Top})
                })
            })
        })
        //--------------------
        $(function () {
            $("#wei").mouseover(function () {
                $("#xinlang").css("display", "block");
            })
            $("#wei").mouseout(function () {
                $("#xinlang").css("display", "none");
            })
            $("#xin").mouseover(function () {
                $("#weixin").css("display", "block");
            })
            $("#xin").mouseout(function () {
                $("#weixin").css("display", "none");

            })
        })
//====================================search=======================
        $(function () {
            $("#text").mousedown(function () {
                $("#history").css("display", "block")
            })
            $("#text").mouseout(function () {
                $("#history").css("display", "none")
            })
            $("#history").mouseover(function () {
                $("#history").css("display", "block")
            })
            $("#history").mouseout(function () {
                $("#history").css("display", "none")
            })
        })
//=
        $(function () {
            function fx(js) {
                var _content = "";
                _box = document.getElementById("result");
                console.log(js);
                for (var i = 0; i < js["result"].length; i++) {
                    _content += "<div>" + js["result"][i][0] + "</div>";
                    _box.innerHTML = _content;

                }
            }

            $("#text").on("input", function () {
                $("#result").css("display", "block");
                var _url = "https://suggest.taobao.com/sug?code=utf-8&q=" + $(this).val() + "&callback=?"

                $.getJSON(_url, fx);
                if ($(this).val() == "") {
                    _box.innerHTML = "";
                    $("#result").css("display", "none");
                }
            })
            $("#result").mouseover(function () {
                $("#result").css("display", "block");
            })
            $("#result").mouseout(function () {
                $("#result").css("display", "none");
            })
        })
//-----------------------------------hint-------------------
        $(function () {
            var _url = "json/hint.json";
            $.getJSON(_url, function (date) {
                var _date = date;

                $("#hint a").each(function (i) {
                    $(this).html(_date[i + 1]);
                })
            })
        })
//---------------------------------shopcar______________
        $(function () {
            $("#shopcar").mouseover(function () {
                $("#mycar").css("display", "block");
                $("#car").css({
                    "height": "42px",
                    "background": "white",
                    "border-bottom": "none"
                })
            })
            $("#shopcar").mouseout(function () {
                $("#mycar").css("display", "none");
                $("#car").css({
                    "height": "44px",
                    "background": "white",
                    "border-bottom": "solid #A09D98 1px",
                    "background": "#f7f7f7"
                })
            })
        })
//-----------------------------------------slide--------------------------
        $(function () {
            var index = 0;
            $("#slide .aa").each(function (i) {
                this.index = i;
                $(this).mouseover(function () {
                    $(this).style
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
                    console.log(this.index);
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
//---------------------------------------------------------
        $(function () {
            $("#child-u li").mouseover(function () {
                $("#son").css("display", "block");
            })
            $("#child-u li").mouseout(function () {
                $("#son").css("display", "none");
            })
            $("#son").mouseover(function () {
                $("#son").css("display", "block");
            })
            $("#son").mouseout(function () {
                $("#son").css("display", "none");
            })
        })
//===========================
        $(function () {
            $("#child-u li").each(function (i) {
                $("#child-u li")[i].index = i;
                $("#child-u li").eq(i).mouseover(function () {
                    $(".child-son").not($(".child-son").eq(this.index)).css("display", "none");
                    $(".child-son").eq(this.index).css({
                        "display": "block",
                        "top": this.index * (-33) + "px"
                    });
                })
                $("#child-u li").eq(this.index).mouseout(function () {
                    $(".child-son").eq(this.index).css("display", "none")
                })

            })

        })
        $(function () {
            console.log( $("#all"))
            $("#all").hover(function () {

                $(".all-child").css("display","block");
            },function () {
                $(".all-child").css("display","none");
            })
            $(".all-child").hover(function () {
                $(".all-child").css("display","block");
            },function(){
                $(".all-child").css("display","none");
            })
        })
    })
})

