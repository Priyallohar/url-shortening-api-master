const menuBtn = document.querySelector("#btn")
const mobileNav = document.querySelector(".mobile_nav")
const WorkingSvg = document.querySelector(".working_svg ")
const WorkingSvgdiv = document.querySelector(".working_svg_div")
menuBtn.addEventListener("click",function(){
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "flex"; 
        WorkingSvg.style.display = "none"
        WorkingSvgdiv.style.display = "none"
      } else {
        mobileNav.style.display = "none";
        WorkingSvg.style.display = "Block"
        WorkingSvgdiv.style.display = "flex"
      }
})