const menuBtn = document.querySelector("#btn")
const mobileNav = document.querySelector(".mobile_nav")
menuBtn.addEventListener("click",function(){
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "flex"; 
      } else {
        mobileNav.style.display = "none";
      }
})