function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("button");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "view the experience";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "hide the experience";
      moreText.style.display = "inline";
    }
  }