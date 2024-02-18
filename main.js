// ==========================Button capture-=============
const btn=document.querySelectorAll("#btn");
let countValue=1;
let setNumber=39;
let totalValu=0;
for(let index=0; index<btn.length;index++){
    let btns=btn[index];
    

//    ------------------addEventliseter--------------
     btns.addEventListener("click",myfunction);
     function myfunction(){
        // ------------------title setup-------------
         btns.style.background="#1DD100";
         let ticketName=btns.innerText;
         const title=document.getElementById("seat");
          const titleValue=document.createElement("h2");
            titleValue.innerText=ticketName;
            title.appendChild(titleValue)
        // -----------------------------class setup---------------------- 
         const clas=document.getElementById("Class");
         const classVlaue=document.createElement("h2");
          classVlaue.innerText="Economics";
          clas.appendChild(classVlaue);
         //---------------------------price setup-----------------------
         const price=document.getElementById("price");
         const priceValue=document.createElement("h3");
          priceValue.innerText=550;
          //console.log(typeof priceValue.innerText)
          price.appendChild(priceValue);
        //   ----------------title count-------------------
         let count=document.getElementById("count");
           count.innerText=countValue;
           countValue++;
         let setcount=document.getElementById("setNumber");
          setcount.innerText=setNumber;
          setNumber--;

        //   ----------------price calculete----------------
         let value=priceValue.innerText;
         let valueInt=parseFloat(value);
         totalValueSetup=document.getElementById("totalPrice");
         totalValu+=valueInt;
         totalValueSetup.innerText=totalValu.toFixed(2);
              
     }
}
// =======================keyup coupon code setup---------========================
 const keyup=document.getElementById("coupon");
  const input=keyup.value;
   const inputValu=input.toUpperCase();
  keyup.addEventListener("keyup",mycoupn);
  function mycoupn(){
        let keyValue=keyup.value;
        let couponValue=keyValue.toUpperCase()
       if(couponValue=='NEW15' || couponValue=="COUPLE20"){
          apply.removeAttribute("disabled")
       }else{
        apply.setAttribute("disabled")
       }
     
  }
//   --------------btnApply-------------------
let apply=document.getElementById("btnCoupon");
apply.addEventListener("click",myApply);
function myApply(){
     let coupnCode=document.getElementById("coupon").value;
      let couponText=coupnCode.toUpperCase();
    // --------------discount btn hiden----------------
     const btnbox=document.getElementById("btnBox");
     btnbox.style.display="none";
     // ----------------discount value calculate=============
     if(totalValu>=2200){
         if(inputValu=="NEW15"){
            discount=totalValu*0.15;
            grandValue=totalValu-discount;
            const discountValue=document.getElementById("grandPrice");
            discountValue.innerText=grandValue.toFixed(2)
         }
         if(inputValu=="COUPLE20"){
                discount=totalValu*0.2;
                grandValue=totalValu-discount;
                const discountValue=document.getElementById("grandPrice");
                discountValue.innerText=grandValue.toFixed(2)
            
         }
     }
     
    
}



// --==============================successNextButon=========================


  const nextBtn=document.getElementById("Next");
  nextBtn.addEventListener("click",function(){

    addClass("head");
    addClass("main");
    addClass("footer");
    // -------------------remove--------------
    removeClass("success");


  })

// ==================basic function===================
 function addClass(name){
    const addId=document.getElementById(name);
     addId.classList.add("hidden");
 }

  function removeClass(name){
     const remove=document.getElementById(name);
     remove.classList.remove("hidden");
  }



