function menuToggle() {
  var x = document.getElementById("sidebar-big");
  var y = document.getElementById("sidebar-small");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.display = "flex";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
  }
} 