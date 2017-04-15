/**
 * Created by Administrator on 2017/3/27.
 */
$(function () {
    var n = 0;

    function fn(n) {
        $(".bg>img").eq(n).animate({
            opacity: "0.7"
        }, 1000 * (n + 1)).animate({
            opacity: "0"
        }, 1000 * (n + 1))
    }

    fn(0);
    setInterval(function () {
        n += 1;
        fn(n);
        if (n == 4) {
            n = 0;
        }
    }, 500)

})
//------------------------------------checked---------------
$(function () {
    var on = 1;
    var off = 1;
    var _pwd = document.getElementById("pwd").value;
    $("#checke").mousedown(function () {
        if (on == 1) {
            $("#checke").css({
                backgroundPositionY: "-330px"
            });
            $(".s-ti").css("display", "block");
            document.cookie = "user=" + $("#txt").val();
            path = "/";
            "expires=" + new Date(new Date().getTime() + 7 * 24 * 3600000);
            document.cookie = "pwd=" + $("#pwd").val();
            path = "/";
            "expires=" + new Date(new Date().getTime() + 7 * 24 * 3600000);

            on = 0;
        } else {
            $("#checke").css({
                backgroundPositionY: "-270px"
            });
            $(".s-ti").css("display", "none");
            document.cookie = "user=" + $("#txt").val();
            path = "/";
            "expires=" + new Date("1970-01-01");
            document.cookie = "pwd=" + $("#pwd").val();
            path = "/";
            "expires=" + new Date("1970-01-01");
            on = 1;
        }

    })

    $(".i").mousedown(function () {
        if (off == 1) {
            $(".i").css({
                backgroundPositionX: "0px"
            });
            off = 0;
        } else {
            $(".i").css({
                backgroundPositionX: "-201px"
            });

            off = 1;
        }

    })
})
//---------------------------------------------七天免登陆——————————————————————
$(function () {
    var _cookie = document.cookie;
    console.log(_cookie.indexOf("user"));
    if (_cookie.indexOf("user") >= 0) {
        var _arr = _cookie.split("; ");
        var _uName = "";
        var _pwd="";
        for (var i = 0; i < _arr.length; i++) {
            if (_arr[i].indexOf("user") >= 0) {
                _uName = _arr[i].split("=")[1];
            }
            if (_arr[i].indexOf("pwd")>=0){
                _pwd=_arr[i].split("=")[1];
            }
        }
        document.getElementById("txt").innerHTML=_uName;
        document.getElementById("pwd").value=_pwd;

    }

})

//-------------------------------登录————————————————————————
window.onload = function () {
    document.getElementById("submit").onclick = function () {
        ajaxRequest("post", "js/login.php", true, {
            "user": document.getElementById("txt").value,
            "pwd": document.getElementById("pwd").value
        }, function (data) {
            data = data.replace(/\s+/g, "");
            console.log(data);
            if (data != "0"&& data !="") {
                // window.location.href = "oneshop.html";
                alert("欢迎：" + data + "，登录");
            } else {
                alert("用户名或者密码错误！！！请输入正确的用户名或者密码!!!");
            }
        });
    }
}
