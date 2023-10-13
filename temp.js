const degreeinput=document.querySelector(".degreeinput")
const degreetype=document.querySelector(".drop")
const result=document.querySelector(".resultinp")
const btn = document.querySelector(".calculate")



 

btn.addEventListener("click",()=>{
   convert()
})


function convert(){
    const temp = parseFloat(degreeinput.value);
    const selected= degreetype.value;

    if(selected==="fahrenheit"){
        const fahrenheittocel=(temp-32)*(5/9);
        result.innerHTML= `${fahrenheittocel.toFixed(2)}℃`
    }
    else if(selected==="celcius") {
        const celtof =(temp*9/5)+32;
        result.innerHTML=`${celtof.toFixed(2)}℉`
}}