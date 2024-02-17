// ==============================jssetup=========================

 let next=document.getElementById("Next");
 next.addEventListener("click",function(){
   addclass("head");
   addclass("main");
   addclass("footer");
   remvoeClass("success");

 });
//  =================button keyup=======
document.getElementById("phn").addEventListener("keyup",function(){
     let text=document.getElementById("phn").value;
     let next=document.getElementById("Next");
     if(text=="012345"){
          next.removeAttribute("disabled")
     }else{
        next.setAttribute("disabled", true)
     }

})

// =====================addClass and remove class function===================
 function addclass(name){
    let elemnt=document.getElementById(name);
    elemnt.classList.add("hidden");
 }
 function remvoeClass( name){
    let remove=document.getElementById(name);
    remove.classList.remove("hidden");

 }