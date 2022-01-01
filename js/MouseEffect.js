
window.addEventListener("mousemove",function(e){
            
    document.querySelector(".mousecursor").style.top = e.pageY -5 +"px";
    document.querySelector(".mousecursor").style.left = e.pageX -5 +"px";
    if(e.pageY>969){
           document.querySelector(".mousecursor").style.backgroundColor="rgba(0,0,0,0.3)";
          }else{
              document.querySelector(".mousecursor").style.backgroundColor="rgba(255,255,255,0.3)";
          }
   })
      
   document.querySelectorAll("ul li").forEach((element,index)=>{
       element.addEventListener("mouseover",() => {
           document.querySelector(".mousecursor").classList.add("style"+(index+1));
       })
       element.addEventListener("mouseout",() => {
           document.querySelector(".mousecursor").classList.remove("style"+(index+1));
       })
       
       
   });
   
   document.querySelectorAll(".cost_area_contents_box").forEach((element,index) =>{
       element.addEventListener("mouseover",() =>{
           document.querySelector(".mousecursor").classList.add("style"+(index+5+1))
       });
       element.addEventListener("mouseout",() =>{
           document.querySelector(".mousecursor").classList.remove("style"+(index+5+1))

       });
   })

   document.querySelector("header .logo").addEventListener("mouseover",()=>{
       document.querySelector(".mousecursor").classList.add("style6");
   })
   document.querySelector("header .logo").addEventListener("mouseout",()=>{
       document.querySelector(".mousecursor").classList.remove("style6");
   })
   document.querySelector(".main_text").addEventListener("mouseover",()=>{
       document.querySelector(".mousecursor").classList.add("style5");
       
   })
   document.querySelector(".main_text").addEventListener("mouseout",()=>{
       document.querySelector(".mousecursor").classList.remove("style5");
       
   })
   
   document.querySelectorAll(".buisness_area img").forEach((element)=>{
       element.addEventListener("mouseover",()=>{
           document.querySelector(".mousecursor").classList.add("style7");
       })
       element.addEventListener("mouseout",()=>{
           document.querySelector(".mousecursor").classList.remove("style7");
       })
       
   })