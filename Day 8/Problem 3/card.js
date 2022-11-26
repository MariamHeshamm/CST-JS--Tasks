function addImageBorder(x)
{
    var y = x;
    x=x.substring(0,2);
    console.log("X");
    console.log(x);
    for (let i = 1; i < 7; i++)
    {
        var t = x+i;
        console.log(t);
        document.getElementById(t).style.border=""; 
    }
    document.getElementById(y).style.border="5px solid red";
    console.log("FINAL ID");
    console.log(y);
    console.log(typeof(y));
}
var win;
function Generate()
{
    var text = document.getElementById("txt").value;
    console.log("TEXT");
    console.log(text);
    if(text="")
    {
        alert("Please enter text");
    }   
    else
    {      
        for (let i =1; i < 7; i++)
        {
            var t = "ig"+i;
            console.log(t);
            if(document.getElementById(t).style.border=="5px solid red")
            {
             var source = document.getElementById(t).src;
             console.log(source);
            }    
        }
        setCookie("src",source);
        setCookie("txt",document.getElementById("txt").value);
        window.open("childCard.html", "","width=500, height=500");   
    }
}
function closeWin()
{
    window.close();
}
function typeMsg()
{
    var divElement = window.document.createElement("div");
    divElement.style.textAlign="center";
    window.document.body.append(divElement);

    var imgElement = window.document.createElement("img");
    imgElement.id = "msgImg";
    imgElement.width="400";
    imgElement.height="400";
    divElement.append(imgElement);

    var pElement = window.document.createElement("p");
    pElement.id = "msg";
    divElement.append(pElement);


    var btnElement = window.document.createElement("button");
    btnElement.id = "btn";
    btnElement.innerText = "Close Preview";
    btnElement.onclick = closeWin;
    divElement.append(btnElement);

    typeData();
}
function typeData()
{
   window.focus();
   window.document.getElementById("msgImg").src = getCookie("src").substring(34,getCookie("src").length);
   window.document.getElementById("msg").innerText = getCookie("txt");
}

