//---------------------------------------------
var oShop = document.getElementById("shop");
var oSp = oShop.getElementsByTagName("span");

var oMm = document.getElementById("mm");
var oImg = oMm.getElementsByTagName("img");
var _img=document.getElementById("img1");

for (var i = 0; i < oImg.length; i++) {
    oSp[i].index = i;
    oSp[i].onmousemove = function () {
        for (var j = 0; j < 6; j++) {
            oImg[j].style.display = "none";
            oSp[j].style.borderColor = "black";
        }
        this.style.borderColor = " red";

        oImg[this.index].style.display = "block";
        _img.src= oImg[this.index].src;
    }
}
         //---------------------------------
	     $(function () {


	         $(".mm").mousemove(function (e) {
                 var e=e||e.event;
                 var _width=document.documentElement.scrollLeft||document.body.scrollLeft;
                 var _top=document.documentElement.scrollTop||document.body.scrollTop;
                 var x=e.clientX+_width-$(".shop-show")[0].offsetLeft-$("#point")[0].clientWidth/2;
                 var y=e.clientY+_top-$(".shop-show")[0].offsetTop-$("#point")[0].clientHeight/2;

                     $("#big").css({
                         display:"block"
                     })
                 $("#point").css({
                     display:"block"
                 })

                 if(x>=0&&x<=296){
                     $("#point")[0].style.left=x+"px";
                 }
                  if(y>=0&&y<=301){
                      $("#point")[0].style.top=y+"px";
                  }
                 $("#big img").css({
                     left:-x*2+"px",
                     top:-y*2+"px"
                 })
             })
             $(".mm").mouseout(function () {
                 $("#big").css({
                     display:"none"
                 })
                 $("#point").css({
                     display:"none"
                 })

             })
         })