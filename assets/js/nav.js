function nav() {
    if(document.querySelector("nav ul").style.display != "flex") {
      document.querySelector("nav ul").style.display = "flex";
    } 
    else {
      document.querySelector("nav ul").style.display = "none";
    }
  }