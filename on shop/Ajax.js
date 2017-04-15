/**
 * Created by Administrator on 2017/3/9 0009.
 */
function Ajax(){
    this.XHR=null;
    this.async=true;
    this.createXHR=function(){
        try{
            return new window.XMLHttpRequest();
        }catch (e){
            try{
                return new ActiveXObject("Microsoft.XMLHttpRequest");
            }catch (e){
                alert("this browser is not support ajax!");
            }
        }
    }
    this.request=function(_method,_url,_param,fn){
        this.XHR=this.createXHR();
        if(this.XHR){
            this.XHR.onreadystatechange=function(){
                if(this.status==200 && this.readyState==4){
                    fn(this.responseText);
                }
            }
            this.XHR.open(_method,_url,this.async);
            this.XHR.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
            this.XHR.send(_param);
        }
    }
}
