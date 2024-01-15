const form=document.querySelector("form");
//this give me a empty string;
//const height=document.getElementById("height")

form.addEventListener("submit",(e)=>{
   e.preventDefault()
  const height=parseInt(document.getElementById("height").value);
  const weight=parseInt(document.getElementById("weight").value);
  const result=document.getElementById("results");
   if(height==="" || height<0||isNaN(height)){
   result.innerHTML="please enter Valid Height."
   }
   else if(weight==="" || weight<0||isNaN(weight)){
    result.innerHTML="please enter Valid Weight."
   }
    else{
      const BMI=(weight/((height*height)/10000)).toFixed(2);
      result.innerHTML=`<span style="display:block">${BMI}</span>
      You are Under Weight,Focus on health`;

    }
})