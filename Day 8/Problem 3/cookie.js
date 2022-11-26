function setCookie(name,value)
{
    var now=new Date();
    var time = now.getTime();
    time+=900*1000;
    now.setTime(time);
    document.cookie = name + "=" + value + ";" +"expires="+ now.toUTCString();
    console.log("COOKIE");
    console.log(document.cookie); 
}
function getCookie(cname) {
   
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
    //  console.log("C OUTER");
        //console.log(c);
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
            //console.log("C INNER");
            //console.log(c);
        }
    if (c.indexOf(name) == 0) 
    {
      return c.substring(name.length, c.length);
    }
    }
      return "";
    }

function deleteCookie(name) {//deh tmam
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

function allCookieList()//deh tmam
{
    var assArr=[];
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) 
        {
            let c = ca[i];
            while (c.charAt(0) == ' ')
            {
                c = c.substring(1);
            }
            var str = c.split("=");
            assArr[str[0]] =str[1];
    }
return assArr;
}

function checkCookie()
{
    var cook = document.cookie;
    if(cook!="")
    {
    return true;
    }
    else 
    return false;
}