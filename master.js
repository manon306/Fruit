
document.addEventListener("DOMContentLoaded", function() {
    var btn2 = document.getElementById("b2");
    var btn = document.getElementById("b");
    var btn3 = document.getElementById("b3");
    var btn4 = document.getElementById("b4");
    var btn5 = document.getElementById("b5");
    var vege1 = document.getElementById("vege1");
    var vege2 = document.getElementById("vege2");
    var fru1 = document.getElementById("fru1");
    var fru2 = document.getElementById("fru2");
    var bread1 = document.getElementById("bread1");
    var bread2 = document.getElementById("bread2");
    var meat1 = document.getElementById("meat1");
    var meat2 = document.getElementById("meat2");
    btn.addEventListener("click", function() {
        vege1.style.display = "block";
        vege2.style.display = "block";
        fru1.style.display = "block";
        fru2.style.display = "block";
        bread1.style.display = "block";
        bread2.style.display = "block";
        meat1.style.display = "block";
        meat2.style.display = "block";
    });
    btn2.addEventListener("click", function() {
        vege1.style.display = "block";
        vege2.style.display = "block";
        fru1.style.display = "none";
        fru2.style.display = "none";
        vege1.style.display="absloute";
        vege1.style.left="10px";
        bread1.style.display = "none";
        bread2.style.display = "none";
        meat1.style.display = "none";
        meat2.style.display = "none";
    });

    btn3.addEventListener("click", function() {
        vege1.style.display = "none";
        vege2.style.display = "none";
        fru1.style.display = "block";
        fru2.style.display = "block";
        fru1.style.left="10px";
        bread1.style.display = "none";
        bread2.style.display = "none";
        meat1.style.display = "none";
        meat2.style.display = "none";
    });

    btn4.addEventListener("click", function() {
        vege1.style.display = "none";
        vege2.style.display = "none";
        fru1.style.display = "none";
        fru2.style.display = "none";
        bread1.style.display = "block";
        bread2.style.display = "block";
        meat1.style.display = "none";
        meat2.style.display = "none";
    });

    btn5.addEventListener("click", function() {
        vege1.style.display = "none";
        vege2.style.display = "none";
        fru1.style.display = "none";
        fru2.style.display = "none";
        bread1.style.display = "none";
        bread2.style.display = "none";
        meat1.style.display = "block";
        meat2.style.display = "block";
    });
});









let btn_m=document.querySelector(".btnminace");
let btn_p=document.querySelector(".btnpls");
let co=document.querySelector(".con");
let counter=0;
co.innerHTML=counter;
btn_m.addEventListener("click",function(){
    if(counter>0)
    {
        counter-=1;
        co.innerHTML=counter;
    }
})
btn_p.addEventListener("click",function(){
    counter+=1;
    co.innerHTML=counter;
});




let revbtn=document.getElementById("reviews");
let disbtn =document.getElementById("Description");
let rev=document.querySelector(".reviews");
let dis =document.querySelector(".Description");
revbtn.addEventListener("click",function(){
    rev.style.display="block";
    dis.style.display="none";
});
disbtn.addEventListener("click",function(){
    dis.style.display="block";
    rev.style.display="none";
});

$(document).ready(function(){
    $(".icon").click(function(){
        $(".content_search").toggle();
    });
});