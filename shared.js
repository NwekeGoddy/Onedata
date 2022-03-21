var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle__button");
var mainNav = document.querySelector(".main__class");
var mobileNav = document.querySelector(".nav__mobile");
var quitButton = document.querySelector(".nav__mobile--quitbuttonimg") 

toggleButton.addEventListener("click", function() {
    
    mobileNav.style.display = "flex";
    backdrop.style.display = "block";
    mainNav.style.display = "none";
   
  });

  quitButton.addEventListener("click", function() {
    
    mobileNav.style.display = "none";
    backdrop.style.display = "none";
    mainNav.style.display = "flex";
  });