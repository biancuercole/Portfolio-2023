
var boton1 = document.getElementById("boton1");
var popup1 = document.getElementById("popup1");
var close1 = document.getElementById("close1");

boton1.addEventListener("click", function() {
    popup1.style.display = "block";
})

close1.addEventListener("click", function() {
    popup1.style.display = "none";

});