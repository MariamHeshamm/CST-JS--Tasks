    //getData();
  //var name =  getCookie("color");
  
  /*console.log("NAME");
  console.log(name);
    console.log("ALL COOKIE LIST");
    console.log(allCookieList());*/
    
 var radioValue;
 //var v =checkCookie();
 //console.log(v);
 //getData();
 
function getData()
{
  setCookie("counter",1);
   // if(checkCookie){ return;}
    var names = [];
    var values = [];
    var tags1 = document.getElementsByTagName('input');
    var tags2 = document.getElementsByTagName('select');
    for (var i = 0; i < tags1.length; i++)
    {
        if(tags1[i].type == "text")
        {
            names.push(tags1[i].name);
            values.push(tags1[i].value);
        }
        else if (tags1[i].type == "radio")
        {
            if (tags1[i].checked)
            {
                names.push(tags1[i].name);
                values.push(tags1[i].value);  
                radioValue = tags1[i].value;
            }
        }
    }
  //  names.push((tags2[0].name));
  names.push(tags2[0].name);
    values.push(tags2[0][tags2[0].selectedIndex].text);
for(var i = 0;i < names.length;i++)
{
    setCookie(names[i],values[i]);
}

//console.log(radioValue);
/*window.open("page.html");
if(radioValue == "female")
{
    
}*/

   // clearCookie();
   window.location.assign( "./welcome.html"); 
}


/*function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  } */
