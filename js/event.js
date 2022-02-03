const langBtn = document.querySelectorAll(".language_btn")
console.log(langBtn)



langBtn.forEach((el,index)=>{
    el.addEventListener("click",function(){
        for(var i = 0; i< langBtn.length; i++){
            langBtn[i].classList.remove("active")
        }
        langBtn[index].classList.add("active")
    })
    
})