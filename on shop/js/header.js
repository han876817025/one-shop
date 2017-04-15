//------------------header-top
window.onload = function heade() {
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
};
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
        _content += "<li><a href=### >" + String.fromCharCode(i) + "</a></li>";

        $("#nav-ul").html(_content)
    }
});
$(function () {

        $("#nav-ul li").each(function (i) {
            $("#nav-ul li")[i].index=i;
            $("#nav-ul li").eq(i).click(function () {
                var _top=document.documentElement.scrollTop||document.body.scrollTop;
                  console.log(this.index);
                console.log($("#con div").eq(this.index))
                var Top = $("#con div")[this.index].offsetTop+_top;
                console.log(Top)
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
    $(".aa").each(function (i) {
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
//===========================
//========================================banner======================
$(function () {
    var _button = $("#but span");
    var _imglist = $("#img-u li");
    var x = 0
    var fn = function (n) {
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
    for (var i = 0; i < _button.length; i++) {
        $("#but span")[i].index = i;
        $("#but span")[i].onmouseover = function () {
            x = this.index
            fn(this.index);
        }
    }
    $("#l").mousedown(function () {
        x--;
        if (x < 0) {
            x = 7;
        }
        fn(x)
    })
    $("#r").mousedown(function () {
        x++;
        if (x > 7) {
            x = 0;
        }
        fn(x)
    })
    setInterval(function () {
        x++;
        if (x > 7) {
            x = 0;
        }
        fn(x)
    }, 2000)
})
//==============================================轮播切换==================
$(function () {
    var n = 0;
    var _left = 0;
    var _step = -1045;
    console.log($("#my-u").position().left)
    $(".small-bn>i:eq(" + 0 + ")").css("background", "#ff7232")
    $("#myr").mousedown(function () {
        n++;
        if (n == 3) {
            n = 0;
        }
        $(".small-bn>i:eq(" + n + ")").css("background", "#ff7232")
        $(".small-bn>i").not($(".small-bn>i:eq(" + n + ")")).css("background", "#666666")
        if ($("#my-u").position().left <= -3135) {
            $("#my-u").css({
                "left": "0px"
            });
        }
        _left = $("#my-u").position().left - 1045;
        $("#my-u").animate({
            left: _left + "px"
        }, 500)
        if ($("#mu").position().left > 0) {
            $("#mu").animate({
                left: 3135 + _left + "px"
            }, 500)
        } else {
            $("#mu").css({
                "left": "4059px"
            });
        }
    })
    $("#myl").mousedown(function () {
        n--;
        if (n < 0) {
            n = 2;
        }
        console.log($("#my-u").position().left)
        $(".small-bn>i:eq(" + n + ")").css("background", "#ff7232")
        $(".small-bn>i").not($(".small-bn>i:eq(" + n + ")")).css("background", "#666666")
        if ($("#my-u").position().left <= 0) {
            $("#my-u").css({
                "left": "-2090px"
            });
        }
        _left = Math.ceil($("#my-u").position().left / 1045) * 1045 + 1045;
        $("#my-u").animate({
            left: _left + "px"
        }, 500)
        if ($("#mu").position().left > 0) {
            $("#mu").animate({
                left: 3135 + _left + "px"
            }, 50)

        } else {
            $("#mu").css({
                "left": "4059px"
            });
        }
    })
})

//------------------------------------------------------list--------------
$(function () {
    var n = 0;
    var c = 0;
    var i = 1;
    var timer = null;

    function fc() {
        var k = -330
        if (n == 2) {
            k = +330;
            n = 1;
        }
        if (c == 4) {
            n = 0;
            c = 0;
            k = -330;
        }
        _left = $(".l-ul").position().left + k;
        $(".l-ul").animate({
            left: _left + "px"
        }, 500)
        n++;
        c++;
        $(".l-butn>div>span").eq(i).animate({
            width: "30px"
        }, 5000)
        i++;
        $(".l-butn>div>span").eq(i - 1).animate({
            width: "0px"
        }, 1)
        if (i == 3) {
            i = 0;
        }
    }

    $(".l-butn>div>span").eq(0).animate({
        width: "30px"
    }, 5000)
    $(".l-butn>div>span").eq(0).animate({
        width: "0"
    }, 1)

    $(".l-butn0>div").each(function (s) {
        $(".l-butn0>div")[s].index = s;
        $(".l-butn0>div").eq(s).mouseover(function () {
            $(".l-ul").animate({
                left: (-330 * this.index) + "px"
            }, 500)
        })
    })
//		  $(".l-butn0>div")[s].index1=s;
//		$(".l-ul li").eq(s).mouseover(function(){
//			$(".l-butn0>div>span").eq(this.index).css({
//	   	     width:"30px"
//	       })
//		})
//		$(".l-ul li").eq(this.index1).mouseout(function(){
//			$(".l-butn0>div>span").eq(this.index).css({
//	   	     width:"0px"
//	         })
//		})
//
//	})
    setInterval(fc, 5000);
//	$("#time-tab").mouseout(function(){
//		timer=setInterval(fc, 5000);
//	})
//	$("#time-tab").mouseover(function(){
//	  	clearInterval(timer);
//	})
})

//----------------------------------------------------two----------------------
$(function () {
    var i = 1;
    $(".l-butn2>div>span").eq(0).animate({
        width: "30px"
    }, 5000)
    $(".l-butn2>div>span").eq(0).animate({
        width: "0"
    }, 1)
    setInterval(function () {

        $(".l-butn2>div>span").eq(i).animate({
            width: "30px"
        }, 5000)
        i++;

        $(".l-butn2>div>span").eq(i - 1).animate({
            width: "0px"
        }, 1)
        if (i == 3) {
            i = 0;
        }
    }, 5000)
})
$(function () {
    var i = 1;
    $(".l-butn3>div>span").eq(0).animate({
        width: "30px"
    }, 5000)
    $(".l-butn3>div>span").eq(0).animate({
        width: "0"
    }, 1)
    setInterval(function () {

        $(".l-butn3>div>span").eq(i).animate({
            width: "30px"
        }, 5000)
        i++;

        $(".l-butn3>div>span").eq(i - 1).animate({
            width: "0px"
        }, 1)
        if (i == 3) {
            i = 0;
        }
    }, 5000)
})
$(function () {
    var i = 1;
    $(".l-butn4>div>span").eq(0).animate({
        width: "30px"
    }, 5000)
    $(".l-butn4>div>span").eq(0).animate({
        width: "0"
    }, 1)
    setInterval(function () {

        $(".l-butn4>div>span").eq(i).animate({
            width: "30px"
        }, 5000)
        i++;

        $(".l-butn4>div>span").eq(i - 1).animate({
            width: "0px"
        }, 1)
        if (i == 3) {
            i = 0;
        }
    }, 5000)
})
$(function () {
    var i = 1;
    $(".l-butn5>div>span").eq(0).animate({
        width: "30px"
    }, 5000)
    $(".l-butn5>div>span").eq(0).animate({
        width: "0"
    }, 1)
    setInterval(function () {

        $(".l-butn5>div>span").eq(i).animate({
            width: "30px"
        }, 5000)
        i++;

        $(".l-butn5>div>span").eq(i - 1).animate({
            width: "0px"
        }, 1)
        if (i == 3) {
            i = 0;
        }
    }, 5000)
})
$(function () {
    var i = 1;
    $(".l-butn6>div>span").eq(0).animate({
        width: "30px"
    }, 5000)
    $(".l-butn6>div>span").eq(0).animate({
        width: "0"
    }, 1)
    setInterval(function () {

        $(".l-butn6>div>span").eq(i).animate({
            width: "30px"
        }, 5000)
        i++;

        $(".l-butn6>div>span").eq(i - 1).animate({
            width: "0px"
        }, 1)
        if (i == 3) {
            i = 0;
        }
    }, 5000)
})
//-------------------------------------------------------------------------
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $("#buy").outerHeight(true)) {
            $("#floor").fadeIn()
        } else {
            $("#floor").fadeOut()
        }

        $(".container .list").each(function () {
            var index = $(this).index();
            var _height = $(this).offset().top + $(this).outerHeight();
            var _top = $(window).scrollTop();
            if (_height > _top) {
                $("#floor li").eq(index).find("span").addClass("active");
                $("#floor li").eq(index).siblings().find("span").removeClass("active");
                return false;
            }
        })
    });
    //划过变字
    $("#floor li").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });

    $("#floor li:not(:last)").click(function () {
        var index = $(this).index();
        var Top = $(".list").eq(index).offset().top;

        $("body,html").animate({scrollTop: Top})

        $(this).find("span").addClass("active").end().siblings().find("span").removeClass("active");
    });
    //回到顶部
    $(".last").click(function () {
        $("body,html").animate({scrollTop: 0}, 500);
    })
})
//---------------------------------------------------search————————————————————————————————————-
function search() {
    window.onscroll = function () {
        _search = document.getElementById("search");
        _stop = document.documentElement.scrollTop || document.body.scrollTop;
        if (_stop > 741) {
            _search.style.height = "41px";
            _search.style.paddingTop = "8px";
            _search.style.borderBottom = "2px solid #E01222";
            _search.style.transition = "height 1s";

        }
        if (_stop < 741) {
            _search.style.height = "0";
            _search.style.transition = "height 0s";
            _search.style.paddingTop = "0";
            _search.style.borderBottom = "none";

        }
    }

}
search();
$(function () {

    var _arr = {
        "0": ["f-1", "f-2", "f-3", "f-4", "f-5"],
        "1": ["f-6", "f-7", "f-8", "f-9", "f-10"],
        "2": ["f-11", "f-12", "f-13", "f-14", "f-15"]
    }
    $(".sele  span").each(function () {
        var _index = $(this).index();
        $(".sele>span").eq(_index).hover(function () {
            $(".line").css({
                "transform": "translate(" + _index * 70 + "px)",
                "transition": "1s"
            })
            $("#lu img").each(function (i) {
                $("#lu img").eq(i).attr({
                    src: "images/" + _arr[_index][i] + ".jpg"
                })
            })
        })

    })

})
//------------------------------------------------------------
//登录成功后，可修改首页的用户名，但是填充后，样式改变，我不想写，代码就在下面！！！！余晖
// $(function () {
//     var _cookie = document.cookie;
//     if (_cookie.indexOf("user") >= 0) {
//         var _arr = _cookie.split("; ");
//         var _uName = "";
//         for (var i = 0; i < _arr.length; i++) {
//             if (_arr[i].indexOf("user") >= 0) {
//                 _uName = _arr[i].split("=")[1];
//             }
//         }
//         document.getElementById("longin").innerHTML=_uName;
//
//     }
//
//
// })