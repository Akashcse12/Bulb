function change()
{
    var a = document.getElementById("bulb");
    if(a.src.match("on"))
    {
        console.log("ON");
        a.src = "bulb off.jpg";

    }
    else{
        console.log("OFF");
        a.src = "bulb on.jpg";
    }
}