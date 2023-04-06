function showImage(src) {
    var largerImage = document.getElementById("larger-image");
    largerImage.setAttribute("src", src);
    var largerImageContainer = document.querySelector(".larger-image-container");
    largerImageContainer.style.display = "flex";
  }
  
  function hideImage() {
    var largerImageContainer = document.querySelector(".larger-image-container");
    largerImageContainer.style.display = "none";
  }
  
  function openImage(src) {
    window.open(src, "_blank");
  }
  