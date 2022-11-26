const form = document.getElementById('myForm');
form.addEventListener('submit', logSubmit);
const eventTime = new Event('timeout');
var timer;
document.addEventListener("timeout",function()
{
    var timer;
    {
        timer=setInterval(after30,20000);
    }  
});
document.dispatchEvent(eventTime);
function after30()
{
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var mail = document.getElementById("mail");
    var gender1 = document.getElementById("gender1");
    var gender2 = document.getElementById("gender2");
    if(name.innerText=="" && age.innerText=="" && mail.innerText=="" && !gender1.checked && !gender2.checked)
    {
        alert("You did'nt enter Data");
    }
    else 
    clearInterval(timer);      
}
function logSubmit(event)
{
    var a = confirm("Do you want to confirm this data");
        if(!a)
        {
            event.preventDefault();              
        }
}