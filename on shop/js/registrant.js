/**
 * Created by Administrator on 2017/3/24.
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
//------------------------------------------------------input---------------------
$(function () {
    $(".r-1").each(function (i) {
        $(".r-1")[i].index = i;
        $(".r-1").eq(this.index).click(function () {
            var _width = -($(".s-1").eq(this.index).outerWidth() + 41);
            $("input").eq(this.index).css("display", "block");
            $(".s-1").eq(this.index).css({
                transform: "translateX(" + _width + "px)",
                transition: "0.5s"
            })
            $(".title").eq(this.index).css({
                opacity: "1",
                transform: "scale(1)",
                transition: "1s"
            })
            $(".other").eq(this.index).css({
                display: "none",
                marginTop: "-5px"

            })
        })
    })
})
//------------------------------------验证————————————————————————
$(function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "q", "h", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U",
        "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
    var reg = {
        "0": [/^[A-Za-z0-9_\-\u4e00-\u9fa5]{4,20}$/g, /^[1]{1}[3578]{1}[0-9]{9}$/g,"0",/^[a-zA-z0-9]{6,20}$/g]
    }
    var arr1=["请输入正确的用户名","格式错误，请输入正确的手机号码","0","密码不能为空","请再次输入密码"]
    $(".number").mousedown(function () {
        $(".number").html(arr[Math.ceil(Math.random() * arr.length)] + "" + arr[Math.ceil(Math.random() * arr.length)] + "" + arr[Math.ceil(Math.random() * arr.length)] + "" + arr[Math.ceil(Math.random() * arr.length)]);
    })

    $("input").each(function (i) {
        $("input")[i].index = i;
        $("input").eq(i).blur(function () {
           if($("input").eq(this.index).val()==""){
               $(".r-1").eq(this.index).css({
                   border:"solid 1px #ff3c3c"
               })
               $(".title").eq(this.index).css({
                   "opacity":"0",
                   "transform": "scale(0)",
               "transform-origin":"left bottom"
               })
               $(".other").eq(this.index).css({"display":"block"}).animate({marginTop:"5px"},1000)
           }else{
               $(".r-1").eq(this.index).css({
                   border:"solid 1px #969896"
               })
           }
            if (this.index != 2&&this.index<=3&&$("input").eq(this.index).val()!="") {
                if (reg["0"][this.index].test($("input").eq(this.index).val())) {
                    $(".true").eq(this.index).css("display","block");
                    $(".title").eq(this.index).css({
                        "opacity":"0",
                        "transform-origin":"left bottom",
                        "transform": "scale(0)"

                    })
                } else {
                    $(".title").eq(this.index).css({
                        "opacity":"0",
                        "transform-origin":"left bottom",
                        "transform": "scale(0)"
                    })
                    $(".other").eq(this.index).css({"display":"block"}).animate({marginTop:"5px"},1000).html(arr1[this.index])
                }
            }else{
                 if($("input").eq(this.index).val()==$(".number").html()){
                     $(".true").eq(this.index).css("display","block");

                 }
            }
            if ($("input").eq(3).val()!=""){
                $("input").eq(4).blur(function () {
                    if ($("input").eq(4).val() == $("input").eq(3).val()) {
                        $(".true").eq(4).css("display","block");
                    } else {
                        $(".title").eq(4).css({
                            "opacity":"0",
                            "transform-origin":"left bottom",
                            "transform": "scale(0)"
                        })
                        $(".other").eq(4).css({"display":"block"}).animate({marginTop:"5px"},1000).html(arr1[4])
                    }
                })
            }
        })
    })

})
window.onload = function () {
    document.getElementById("submit").onclick = function () {
        // window.location.href="oneshop.html";
        if (document.getElementById("pwd").value == document.getElementById("sure").value) {
            ajaxRequest("post", "js/regist.php", true, {
                "account": document.getElementById("txt").value,
                "secret": document.getElementById("pwd").value,
                "mobile": document.getElementById("mobile").value
            }, function (data) {
                console.log(data);
                data = data.replace(/\s+/g, "");
                if (data == "0") {
                    alert("注册失败！！");
                } else {
                    alert("恭喜！！！成功！！！");
                    window.location.href="login.html";
                }
            });
        } else {
            alert("两次输入的密码不一致，请重新输入！！");

        }
    }
}

