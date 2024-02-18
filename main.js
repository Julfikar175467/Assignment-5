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