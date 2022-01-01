const hamberger = document.querySelector("header .hamberger_btn")
const spanLong = document.querySelectorAll(".btn_long_box")
const spanShort = document.querySelectorAll(".btn_short_box")
const mobGnb = document.querySelector("#mobile_gnb")

console.log (hamberger,spanLong)
function hambergerClickHandler (){

    for(var i = 0; i<spanLong.length; i++){
        spanShort[i].classList.toggle("hidden");
    }
    spanLong[0].classList.toggle("active1")
    spanLong[1].classList.toggle("active2")
    mobGnb.classList.toggle("active")

}
hamberger.addEventListener("click",hambergerClickHandler)