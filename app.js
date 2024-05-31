let menu = document.getElementById("menuBtn");
let nav = document.getElementById("sidenav");

nav.style.right = "-250px";
menu.onclick = function(){
        if(nav.style.right == "-250px"){
            nav.style.right = "0";
        }
        else{
            nav.style.right = "-250px";
        }
}