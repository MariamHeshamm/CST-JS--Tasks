var assArr=allCookieList();

console.log(assArr);
console.log("HASCOOKIE");
console.log(hasCookie("name"));
if(assArr["gender"]=="Female")
{
  document.getElementById("img1").src="/Cookie/2.jpg";
}
else if(assArr["gender"]=="Male")
{
  document.getElementById("img1").src="/Cookie/1.jpg";
}
//var name = assArr["name"].fontcolor('blue');
//document.getElementById("sp1").innerText="Welcome "
document.getElementById("sp2").innerText = assArr["name"];
document.getElementById("sp2").style.color= assArr["color"];
//document.getElementById("sp3").innerText=" you have visited this site ";
document.getElementById("sp4").innerText=getCookie("counter");
document.getElementById("sp4").style.color= assArr["color"];
" times:)";
window.onload = function() {
  var c = assArr["counter"];
  parseInt(c);
  c++;
  assArr["counter"]=c;
  setCookie("counter",c);
};