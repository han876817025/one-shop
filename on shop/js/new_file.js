	// var oTao=document.getElementById("tao");
	// // var oDiv1=oTao.getElementsByTagName("div");
	// var oShou=document.getElementById("shou");
	// var oDiv2=oShou.getElementsByTagName("div");
	// var oMai=document.getElementById("mai");
	// var oDiv3=oMai.getElementsByTagName("div");
	// var oLian=document.getElementById("lian");
	// var oDiv4=oLian.getElementsByTagName("div");
	// var oWang=document.getElementById("wang");
	// var oDiv5=oWang.getElementsByTagName("div");
	// oTao.onmouseover=function(){
	// 	oTao.style.background="white";
	//      oDiv1[0].style.display="block";
	// }
	// oTao.onmouseout=function(){
	// 	oTao.style.background="#f5f5f5";
	//      oDiv1[0].style.display="none";
	// }
	// oShou.onmouseover=function(){
	// 	oShou.style.background="white";
	//      oDiv2[0].style.display="block";
	// }
	// oShou.onmouseout=function(){
	// 	oShou.style.background="#f5f5f5";
	//      oDiv2[0].style.display="none";
	// }
	// oMai.onmouseover=function(){
	// 	oMai.style.background="white";
	//      oDiv3[0].style.display="block";
	// }
	// oMai.onmouseout=function(){
	// 	oMai.style.background="#f5f5f5";
	//      oDiv3[0].style.display="none";
	// }
	// oLian.onmouseover=function(){
	// 	oLian.style.background="white";
	//      oDiv4[0].style.display="block";
	// }
	// oLian.onmouseout=function(){
	// 	oLian.style.background="#f5f5f5";
	//      oDiv4[0].style.display="none";
	// }
	// 	oWang.onmouseover=function(){
	// 	oWang.style.background="white";
	//      oDiv5[0].style.display="block";
	// }
	// oWang.onmouseout=function(){
	// 	oWang.style.background="#f5f5f5";
	//      oDiv5[0].style.display="none";
	// }
	//--------------------------购物车
		var oMin=document.getElementById("min");
		var oAdd=document.getElementById("add");
		var oIn=document.getElementById("in");
		oMin.onclick=function(){
			oIn.value--;
			if (oIn.value<0){
				oIn.value="0";
			}
			
		}
			oAdd.onclick=function(){
			oIn.value++;
			if (oIn.value>20){
				oIn.value="20";
			}
			
		}