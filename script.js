function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "mynav") {
    x.className += " responsive";
  } else {
    x.className = "mynav";
  }
}