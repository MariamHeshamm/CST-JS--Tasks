const collection = document.body.children;
console.log(collection);
console.log(collection[0].children);
var div1 = collection[0].childNodes;
div1[1].align="right";
console.log(div1);    
console.log(collection[0].children);
//img
var img = document.createElement("img");
img.src = "dom.jpg"
img.alt = "hello..it rains over here:)";
img.style.float="left"
var listDOC = document.getElementById("navigation").firstChild.nextSibling;//keda keda ellist
console.log(listDOC);
listDOC.style="list-style-type:circle"
listDOC.append(img);





